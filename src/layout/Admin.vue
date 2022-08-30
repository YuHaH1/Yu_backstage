<template>
  <div class="layout-container">
    <div class="layout-menu">
     <menu-title />
    <yu-menu/>
    </div>
    <div class="layout-wrapper">
      <div class="layout-header"></div>
      <div class="layout-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
</script>
<script setup lang='ts'>
import MenuTitle from '../components/local/layout/menuTitle.vue';

</script>


<style lang='scss' scoped>
.layout-container {
  @apply w-full h-full flex;
  .layout-menu {
    @apply w-[220px] h-full bg-neutral-800 px-3 box-border;
  }
  .layout-wrapper {
    @apply flex flex-col w-full;
    .layout-header {
      @apply h-[80px] bg-neutral-800 w-full;
    }
    .layout-content {
      @apply bg-zinc-200 w-full h-full p-5;
    }
  }
}
</style>
