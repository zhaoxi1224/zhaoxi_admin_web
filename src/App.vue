<script setup lang="ts">

import {userListApi} from "@/api/user_api.ts";

userListApi().then(res => {
  console.log(res)
})

</script>

<template>
  <router-view></router-view>
</template>
