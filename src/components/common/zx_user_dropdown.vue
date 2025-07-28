<script setup lang="ts">

function handleSelect(val:string) {

}
</script>

<template>
  <a-dropdown @select="handleSelect" :popup-max-height="false">
    <div class="zx_user_dropdown_com">
      <a-avatar image-url="/src/assets/logo.svg"></a-avatar>
      <span class="user_name">朝夕</span>
      <icon-down/>
    </div>
    <template #content>
      <a-doption>Option 1</a-doption>
      <a-doption disabled>Option 2</a-doption>
      <a-doption>Option 3</a-doption>
      <a-doption>Option 4</a-doption>
      <a-doption>Option 5</a-doption>
      <a-doption>Option 6</a-doption>
      <a-doption>Option 7</a-doption>
      <a-doption>Option 8</a-doption>
      <a-doption>Option 9</a-doption>
    </template>
  </a-dropdown>
</template>

<style lang="less">
.zx_user_dropdown_com{
  cursor: pointer;
  .user_name{
    margin:0 5px;
  }
  svg{
    margin-right: 0 !important;
  }
}
</style>
