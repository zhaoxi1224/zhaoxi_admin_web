<script setup lang="ts">

import {userStorei} from "@/stores/user_store.ts";
import Zx_menu_item from "@/components/admin/zx_menu_item.vue";
import type {Component} from "vue";
import Zx_component from "@/components/common/zx_component.vue";
const store =userStorei()

interface MenuType {
  name: string;
  title: string;
  icon?: string | Component;
  children?: MenuType[];
  role?: number;
}

interface Props {
  list: MenuType[];
}
const props = defineProps<Props>()

</script>

<template>
  <template v-for="menu in props.list">
    <template v-if="!menu.children" >
      <a-menu-item :key="menu.name" v-if="menu.role===undefined || menu.role===store.userInfo.role">
        <template #icon>
          <zx_component :is="menu.icon"></zx_component>
        </template>
        {{ menu.title}}
      </a-menu-item>
    </template>
    <template v-else>
      <a-sub-menu :key="menu.name" v-if="menu.role===undefined || menu.role===store.userInfo.role" :title="menu.title" >
        <template #icon>
          <zx_component :is="menu.icon"></zx_component>
        </template>
        <zx_menu_item :list="menu.children">

        </zx_menu_item>
      </a-sub-menu>
    </template>
  </template>
</template>

<style scoped>

</style>
