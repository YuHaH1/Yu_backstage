<template>
  <button>{{content}}</button>
</template>


<script setup lang='ts'>
import { defineProps } from 'vue';
const props = defineProps({
    content: {
        type: String,
        default:'按钮'
    }
})
</script>


<style lang='scss' scoped>
 button{
  @apply bg-cyan-600 text-white w-full py-2 rounded-md mt-3 hover:bg-cyan-400 duration-300
 }
</style>
