<template>
  <input :value="value" @input="$emit('update:value',($event.target as HTMLInputElement).value )">
</template>


<script setup lang='ts'>
import { defineProps } from 'vue'
const props = defineProps({
    value: {
        type: String,
        default:''
    }
})

</script>


<style lang='scss' scoped>
 input{
  @apply box-border border w-full rounded-md py-1 px-2 focus:ring-2 ring-offset-2 ring-cyan-600 outline-none border-gray-200
  focus:border-white my-2 duration-200 ;
 }
</style>
