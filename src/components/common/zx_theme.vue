<script setup lang="ts">

import {theme,setThem,loadTheme} from'@/components/common/zx_theme.ts'
loadTheme()
</script>

<template>
  <span title="亮色模式"><icon-sun-fill v-if="theme==='dark'" @click="setThem('light')"/></span>
  <span title="暗色模式"><icon-moon-fill v-if="theme==='light'" @click="setThem('dark')"/></span>
</template>

<style scoped>
</style>
