<script setup lang="ts">

import {type Component, ref} from "vue";
import {IconHome, IconUser, IconSettings, IconUserGroup} from "@arco-design/web-vue/es/icon";//icon图标
import zx_component from "@/components/common/zx_component.vue";
import {collapsed} from"@/components/admin/zx_menu.ts"
import router from "@/router";
import {useRoute} from "vue-router";


const route = useRoute();

//折叠状态

interface MenuItem {
  title: string
  name: string
  icon?: string|Component//可渲染组件占位,给ico
  children?: MenuItem[]
}


const menuList : MenuItem[] = [
  {
    title:"首页", name:"home",icon:IconHome
  },
  {
    title:"个人中心", name:"userCenter",icon:IconUser,
    children: [
      {title:"用户信息", name:"userInfo"}
    ]
  },
  {
    title:"用户管理", name:"userManage",icon:IconUserGroup,
    children: [
      {title:"用户列表", name:"userList"}
    ]
  },
  {
    title:"系统设置", name:"settingsManage",icon:IconSettings,
    children: [
      {title:"系统信息", name:"settings"}
    ]
  },
]

function menuItemClick (key:string) {
  router.push({
    name:key
  })
}

const openkeys=ref<string[]>([])//菜单默认展开
function initRoute(){
  if (route.matched.length===3){
    openkeys.value=[route.matched[1].name as string]
  }
}
initRoute()

</script>

<template>
  <div class="zx_menu" :class="{collapsed:collapsed}">
    <div class="zx_menu_inner scrollbar">
      <a-menu
        @menu-item-click="menuItemClick"
        v-model:collapsed="collapsed"
        v-model:open-keys="openkeys"
        :default-selected-keys="[route.name]"
        show-collapse-button
      >
        <template v-for="menu in menuList">
          <a-menu-item :key="menu.name" v-if="!menu.children">
            <template #icon>
              <zx_component :is="menu.icon"></zx_component>
            </template>
            {{ menu.title}}
          </a-menu-item>
          <a-sub-menu v-else :key="menu.name" :title="menu.title" >
            <template #icon>
              <zx_component :is="menu.icon"></zx_component>
            </template>
            <a-menu-item :key="sub.name" v-for="sub in menu.children">
              <template #icon>
                <zx_component :is="sub.icon"></zx_component>
              </template>
              {{ sub.title}}
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<style lang="less">
.zx_menu{
  &.collapsed{
    .arco-menu-collapse-button{
      left: 48px !important;
    }
  }

  &:hover{
    .arco-menu-collapse-button{
      opacity: 1 !important;
    }
  }
  height: calc(100vh - 90px);
  position: relative;
  .zx_menu_inner{
    overflow-y: auto;
    overflow-x: hidden;
    .arco-menu{
      position: inherit;
      height: 100%;
      .arco-menu-collapse-button{
        top: 50%;
        transform: translate(-50%, -50%);
        left: 215px;
        transition: all .3s;
        opacity: 0;
      }
    }
  }
}

</style>
