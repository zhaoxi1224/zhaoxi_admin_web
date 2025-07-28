<script setup lang="ts">

import { collapsed } from "./zx_menu.ts"
</script>

<template>
  <div class="zx_logo" :class="{collapsed: collapsed}">
    <img src="/src/assets/logo.svg" class="logo" alt="logo" />
    <div class="slogan">
      <div>朝夕小窝</div>
      <div>zhaoxixiaowo</div>
    </div>
  </div>
</template>

<style lang="less">
.zx_logo{
  display: flex;
  justify-content: center;
  align-items: center;
  &.collapsed{
    .slogan{
      transform:scale(0);
      transform-origin: left;
      opacity: 0;
    }
    .logo{
      transform:translateX(50px);
      width: 35px;
      height: 35px;
    }
  }
  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all .3s;
  }
  .slogan{
    transition: all .3s;
    margin-left: 10px;
    div:nth-child(1){
      font-size: 22px;
      font-weight: 600;
    }
    div:nth-child(2){
      font-size: 13px;
    }
  }
}
</style>
