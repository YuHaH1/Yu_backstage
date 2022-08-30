<template>
  <Form @submit="onSubmit" v-slot="{ resetForm }">
    <slot />
    <slot name="buttonGroup" :resetForm="resetForm" >
        <YuButton type="submit" :content="content" />
    </slot>
  </Form>
</template>


<script lang='ts'>
export default {};
</script>
<script setup lang='ts'>
import { Form } from "vee-validate";
import { ref } from "vue";
import { defineEmits } from "vue";
const props = defineProps({
    content: {
      type: String,
      default: "提交",
    },
  }),
  emit = defineEmits(['onSubmit']),
    onSubmit = (values: any) => {

    emit('onSubmit',values)
    },
    validate = ref(null)
  
</script>


<style lang='scss' scoped>
</style>
