import { createRouter, createWebHistory } from 'vue-router'
import NProgress from "nprogress";
import {userStorei} from "@/stores/user_store.ts";
import {Message} from "@arco-design/web-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "web",
      path: "/",
      component: ()=>import("@/views/web/IndexView.vue"),
      // redirect: "/admin"
    },
    {
      name: "login",
      path: "/login",
      component:()=>import("@/views/login/IndexView.vue")
    },
    {
      name: "admin",
      path: "/admin",
      component:()=>import("@/views/admin/IndexView.vue"),
      meta:{
        title:"首页",
        role:[1,2],
      },
      children:[
        {
          name:"home",
          path:"",
          component:()=> import("@/views/admin/home/IndexView.vue"),
          meta:{
            title:"首页",
          }
        },
        {
          name:"userCenter",
          path:"user_center",
          meta:{
            title:"个人中心",
          },
          children:[
            {
              name:"userInfo",
              path:"user_info",
              meta:{
                title:"用户信息"
              },
              component:()=> import("@/views/admin/user_center/IndexView.vue"),
            },
          ]
        },
        {
          name:"userManage",
          path:"user_manage",
          meta:{
            title:"用户管理",
            role:[1],
          },
          children:[
            {
              name:"userList",
              path:"user_list",
              meta:{
                title:"用户列表"
              },
              component:()=> import("@/views/admin/user_manage/IndexView.vue"),
            },
          ]
        },
        {
          name:"settingsManage",
          path:"settings_manage",
          meta:{
            title:"系统信息"
          },
          children:[
            {
              name:"settings",
              path:"settings",
              meta:{
                title:"系统配置",
                role:[1],
              },
              component:()=> import("@/views/admin/settings_manage/IndexView.vue"),
            }
          ]
        },
      ]
    }
  ],
})

router.beforeEach((to, from, next) => {
  //判断是否需要登录
  if(to.meta.role){
    //判断当前用户在不在列表里
    const store =userStorei()
    if (!store.isLogin){
      //没有登陆
      Message.warning("您没有登录,请先登录")
      router.push({
        name: "login",
        query:{
          redirect:to.path
        }
      })
      return
    }
    if(!to.meta.role.includes(store.userInfo.role)){
      Message.warning("您没有权限访问该页面")
      router.push(from.path)
      return
    }
    NProgress.start();//开启进度条

  }
  next()
})
//当路由进入后,关闭进度条
router.afterEach((to, from, next) => {
  //即将进入新页面组件潜.关闭进度条
  NProgress.done();
})
export default router
