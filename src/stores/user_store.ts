import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {userInfoApi, userLogoutApi} from "@/api/user_api.ts";
import {Message} from "@arco-design/web-vue";
import {parseToken} from "@/utils/parse_token.ts";
import router from "@/router";

interface userInfoType {
  userID: number
  username: string
  nickname: string
  avatar: string
  role: number
  token: string
}

interface userStoreType {
  userInfo: userInfoType
}

export const userStorei = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {
        userID: 0,
        username: "",
        nickname: "",
        avatar: "",
        role: 3,
        token: "",
      },

    }
  },
  actions: {
     saveUserInfo(token: string) {
      //传一个token过来,然后重新去调用户信息接口
      this.userInfo.token = token

      const payLoad = parseToken(token)
      this.userInfo.userID = payLoad.userID
      this.userInfo.role = payLoad.role

      userInfoApi().then(res=>{
        if (res.code) {
          Message.error(res.msg)
          return
        }

        this.userInfo = {
          userID: payLoad.userID,
          username: payLoad.username,
          nickname: res.data.nickname,
          avatar: res.data.avatar,
          role: payLoad.role,
          token: token,
        }

        //持久化
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
      })
    },
    loadUserInfo() {
      const val = localStorage.getItem("userInfo")
      if (!val) {
        return
      }
      try {
        this.userInfo = JSON.parse(val)


      } catch (e) {
        console.log("用户信息解析失败", e)
        return;
      }
      // 解析token,获取过期时间
      const payLoad = parseToken(this.userInfo.token)//解析token,获取过期时间戳,单位秒
      const nowTime = new Date().getTime()//当前时间戳,单位毫秒
      if (payLoad.exp * 1000 - nowTime <= 0) {
        Message.warning("登录过期,请重新登录")
        localStorage.removeItem("userInfo")
        router.push({
          name: "web"
        })
        return;
      }
    },
    async userLogout() {
      const res = await userLogoutApi()
      localStorage.removeItem("userInfo")
      this.userInfo= {
          userID: 0,
          username: "",
          nickname: "",
          avatar: "",
          role: 3,
          token: "",
      }
      Message.success("注销成功")
      router.push({
        name: "web"
      })
    }
  },
  getters:{
    isLogin():boolean{
      return this.userInfo.userID!==0;
    },
    isAdmin():boolean{
      return this.userInfo.role===1;
    },
  }
})
