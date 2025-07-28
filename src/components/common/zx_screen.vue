<script setup lang="ts">
  import {isScreen,toggleFullScreen}from '@/components/common/zx_screen.ts'
</script>

<template>
  <span title="全屏" v-if="!isScreen"> <icon-fullscreen @click="toggleFullScreen"/> </span>
  <span title="退出全屏" v-else> <icon-fullscreen-exit @click="toggleFullScreen"/> </span>
</template>

<style scoped>

</style>
