<script setup lang="ts">

import Zx_list from "@/components/admin/zx_list.vue";
import {userListApi, type userListType} from "@/api/user_api.ts";

const columns= [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '昵称',
    dataIndex: 'userNickname',
  },
  {
    title: '头像',
    slotName: 'userAvatar',
  },
  {
    title: '时间',
    slotName: 'createdAt',
    dateFormat: "current",
  },
  {
    title: '操作',
    slotName: 'action',
  },
]
</script>

<template>
<div>
  <zx_list :url="userListApi" :columns="columns">
    <template #userAvatar="{record}:{record: userListType}">
      <a-avatar :image-url="record.userAvatar"/>
    </template>
    <template #action_left>
      <a-button>预览</a-button>
    </template>

  </zx_list>
</div>
</template>

<style scoped>

</style>
