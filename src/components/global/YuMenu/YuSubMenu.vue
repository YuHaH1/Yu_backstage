<template>
  <div class="subMenu">
    <dd class="active">404页</dd>
    <dd>403页</dd>
  </div>
</template>


<script lang='ts'>
export default {};
</script>


<script setup lang='ts'>
</script>


<style lang='scss' scoped>
    .subMenu{
        @apply px-2 mt-2;
        dd{
            @apply my-2 pl-2 py-3 rounded-md hover:bg-violet-500 duration-200 w-full;
        }
        .active{
            @apply bg-violet-700 text-white cursor-pointer duration-200;
        }
    }
</style>
