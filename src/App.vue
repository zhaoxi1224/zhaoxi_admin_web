<script setup lang="ts">
import { userStorei } from '@/stores/user_store'

const store=userStorei()
store.loadUserInfo()
</script>

<template>
  <router-view></router-view>
</template>
