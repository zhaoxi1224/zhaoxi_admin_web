<script setup lang="ts">

import zx_theme from '@/components/common/zx_theme.vue'//主题颜色组件
import zx_screen from '@/components/common/zx_screen.vue'//全屏组件
import zx_menu from "@/components/admin/zx_menu.vue";//左侧菜单组件
import {collapsed} from"@/components/admin/zx_menu"//折叠状态
import zx_breadcrumb from "@/components/admin/zx_breadcrumb.vue";
import Zx_user_dropdown from "@/components/common/zx_user_dropdown.vue";
import router from "@/router";
import Zx_logo from "@/components/admin/zx_logo.vue";
import Zx_tabs from "@/components/admin/zx_tabs.vue";



function goHome() {
  router.push({ name: 'web' });
}

</script>

<template>
  <div class="zx_admin">
    <div class="zx_aside" :class="{collapsed: collapsed}">
      <zx_logo></zx_logo>
      <zx_menu></zx_menu>
    </div>
    <div class="zx_main">
      <div class="zx_head">
        <zx_breadcrumb></zx_breadcrumb>
        <div class="zx_actions">
          <span title="去首页" @click="goHome"><icon-home/></span>
          <zx_theme></zx_theme>
          <zx_screen></zx_screen>
          <zx_user_dropdown></zx_user_dropdown>
        </div>
      </div>
      <zx_tabs></zx_tabs>
      <div class="zx_container scrollbar">
        <router-view class="zx_base_view" v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less">

.zx_admin{
  display: flex;
  background-color: var(--color-bg-1);
  color:@color-text-1;
  .zx_aside{
    width: 240px;
    height: 100vh;
    border-right: @zx_border;
    transition: width .3s;

    .zx_logo{
      width: 100%;
      height: 90px;
      border-bottom: @zx_border;
    }
    &.collapsed{
      width: 48px;
    }
    &~.zx_main{
      width: calc(100% - 48px);
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
      .zx_actions{
        display: flex;
        align-items: center;
        svg{
          font-size: 18px;
          cursor: pointer;
          margin-right: 10px;
        }
      }
    }
    .zx_tabs{
      height: 30px;
      width: 100%;
      border-bottom: @zx_border;
    }
    .zx_container{
      height: calc(100vh - 90px);
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
      background-color: @color-fill-2;
      padding: 20px;


      .zx_base_view{
        background-color: var(--color-bg-1);
        border-radius: 5px;
        min-height: calc(100vh - 130px);
      }
    }
  }
}

.fade-leave-active {

}
.fade-leave-to{
  transform: translateX(30px);
  opacity: 0;
}
.fade-enter-active{
  transform: translateX(-30px);
  opacity: 0;
}
.fade-enter-to{
  transform: translateX(0);
  opacity: 1;
}
.fade-leave-active, .fade-enter-active{
  transition: all .3s ease-out;
}
</style>
