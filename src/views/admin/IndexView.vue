<script setup lang="ts">

import zx_theme from '@/components/common/zx_theme.vue'//主题颜色组件

</script>

<template>
  <div class="zx_admin">
    <div class="zx_aside">
      <div class="zx_logo">

      </div>
      <div class="zx_menu">

      </div>
    </div>
    <div class="zx_main">
      <div class="zx_head">
        <div class="zx_breadcrumbs"></div>
        <div class="zx_actions">
          <icon-home />
          <zx_theme></zx_theme>
          <icon-fullscreen />
          <icon-fullscreen-exit />
          <div class="zx_user_info_action">

          </div>
        </div>
      </div>
      <div class="zx_tabs">

      </div>
      <div class="zx_container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less">


.zx_admin{
  display: flex;
  background-color: @color-fill-1;
  color:@color-text-1;
  .zx_aside{
    width: 240px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: @zx_border;
    .zx_logo{
      width: 100%;
      height: 90px;
      border-bottom: @zx_border;
    }
  }
  .zx_main{
    width: calc(100% - 240px);
    .zx_head{
      height: 60px;
      width: 100%;
      border-bottom: @zx_border;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
    .zx_tabs{
      height: 30px;
      width: 100%;
      border-bottom: @zx_border;
    }
    .zx_container{
      height: calc(100vh - 60px);
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
    }
  }
}
</style>
