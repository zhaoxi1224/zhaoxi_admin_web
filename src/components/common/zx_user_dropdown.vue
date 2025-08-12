<script setup lang="ts">

import router from "@/router/index.ts";



function handleSelect(val:string) {
  if(val==="logout"){
    //注销
    return
  }
  router.push({name: val})
}

interface OptionType {
  name: string
  title: string

}

const options:OptionType[] = [
  {
    title:"用户信息",
    name:"userInfo",
  },
  {
    title:"用户列表",
    name:"userList",
  },
  {
    title:"系统配置",
    name:"settings",
  },
  {
    title:"注销退出",
    name:"logout",
  },
]

// initRoute()
</script>

<template>
  <a-dropdown @select="handleSelect" :popup-max-height="false">
    <div class="zx_user_dropdown_com">
      <a-avatar image-url="/src/assets/logo.svg"></a-avatar>
      <span class="user_name">朝夕</span>
      <icon-down/>
    </div>
    <template #content>
      <a-doption v-for="item in options" :value="item.name">{{ item.title }}</a-doption>
    </template>
  </a-dropdown>
</template>

<style lang="less">
.zx_user_dropdown_com{
  cursor: pointer;
  .user_name{
    margin:0 5px;
  }
  svg{
    margin-right: 0 !important;
  }
}
</style>
