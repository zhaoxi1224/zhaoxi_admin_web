<script setup lang="ts">
import { ref } from "vue"
const theme=ref('light')

// 设置黑夜模式
function setThem(val: string) {
  if (val === "dark") {
    document.body.setAttribute('arco-theme','dark')
  } else {
    document.body.removeAttribute('arco-theme')
  }
  theme.value = val
  localStorage.setItem("theme",val)
}

function loadTheme() {
  const val=localStorage.getItem("theme")
  if (val === "dark") {
      setThem(val)
  }
}

loadTheme()

</script>

<template>
  <icon-sun-fill v-if="theme==='dark'" @click="setThem('light')"/>
  <icon-moon-fill v-if="theme==='light'" @click="setThem('dark')"/>
</template>

<style scoped>
</style>
