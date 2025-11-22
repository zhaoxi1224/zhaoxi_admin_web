<script setup lang="ts">

import {reactive} from "vue";
import {emailLoginApi, type emailLoginRequest} from "@/api/user_api.ts";
import {Message} from "@arco-design/web-vue";
import { ref } from 'vue';
import {userStorei} from "@/stores/user_store.ts";
import router from "@/router";
import {useRoute} from "vue-router";

const route = useRoute();

const userStore= userStorei()
//表单数据
const form = reactive<emailLoginRequest>({
  val:"",
  password:"",
})
//表单引用
const formRef = ref<any>(null);
async function emailLogin(){
  //表单校验
  const valid=await formRef.value.validate();
  if(valid)return
  const res = await emailLoginApi(form);
  if(res.code){
    Message.error(res.msg);
    return
  }
  Message.success("登录成功");
  //如何获取用户信息 1.直接解析token中的信息 2.调用用户信息接口
  userStore.saveUserInfo(res.data);
  //判断是否有重定向路径
  const redirect = route.query.redirect
  if(redirect){
    router.push(redirect as string)
    return
  }
  router.push({
    name:"home",
  });
}


//密码可见性
const visibility = ref<boolean>(true);

</script>

<template>
  <div class="login_view">
    <div class="login_mask">
      <a-form ref="formRef" :model="form" :label-col-props="{span: 0}" :wrapper-col-props="{span: 24}">
        <div class="title">用户登录</div>
        <a-form-item label="用户名" field="val" :rules="[{required:true,message:'用户名不能为空'}]">
          <a-input placeholder="用户名" v-model="form.val" >
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="密码" field="password" :rules="[{required:true,message:'密码不能为空'}]">
          <a-space direction="vertical" size="large">
            <a-input-password
              v-model:visibility="visibility"
              v-model="form.password"
              placeholder="密码"
              :style="{width:'320px'}"
              :defaultVisibility="false"
              allow-clear>
              <template #prefix>
                <icon-lock />
              </template>
            </a-input-password>
          </a-space>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="emailLogin" long>登陆</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<style lang="less">
.login_view {
  background: url("src/assets/login_bg.jpg") 50% / cover no-repeat;
  position: relative;
  height: 100vh;
  .login_mask {
    width: 400px;
    height: 100vh;
    background-color: rgba(white,0.8);
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .arco-form{
      padding: 40px;
    }
    .title{
      font-size: 26px;
      font-weight: 600;
      text-align: center;
      color: @primary-6;
      margin-bottom: 10px;
    }
  }
}
</style>
