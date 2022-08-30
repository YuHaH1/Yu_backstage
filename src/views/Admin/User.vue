<template>
  <div class="user">user</div>
</template>

<script>
export default {
  route: {
    meta: {
      permission: ["user:edit"],
      auth: true,
    },
  },
};
</script>
<script setup lang='ts'>
</script>


<style lang='scss' scoped>
.user {
  /* Won't work because this file and main.css are processed separately */
  @apply w-[720px]
        rounded-md
        bg-black
        overflow-hidden

        grid-cols-2
        md:text-xs;
}
</style>
