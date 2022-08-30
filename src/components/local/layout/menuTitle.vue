<template>
  <div class="title text-slate-300 text-center text-lg pr-8 my-4">
    <i class=" mx-2 text-4xl align-middle" :class="['iconfont', icon]"></i>{{title}}
  </div>
</template>


<script lang='ts'>
export default {};
</script>


<script setup lang='ts'>
    import { defineProps } from 'vue';
const props = defineProps({
    icon: {
        type: String,
        default:'icon-qianniudaidise'
    },
    title: {
        type: String,
        default:'Yu'
    }
})
</script>


<style lang='scss' scoped>
</style>
