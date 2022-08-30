<template>
  <Field
    class="w-full"
    :name="name"
    :rules="(rules as any)"
    #default="{ field, errorMessage }"
    :validate-on-blur="blur"
  >
    <slot :field="field" :errorMessage="errorMessage" />
    <p class="text-red-600 text-xs ml-3">{{ errorMessage }}</p>
  </Field>

</template>


<script lang='ts'>
export default {};
</script>


<script setup lang='ts'>
import {  Field, ErrorMessage } from "vee-validate";
const props = defineProps({
  rules: {
    type: [Object,Function],
    default: {},
  },
  name: {
    type: String,
    default: "",
  },
  blur: {
    type: Boolean,
    default: true,
  },
  input: {
    type: Boolean,
    default: false,
  },
});
</script>


<style lang='postcss' scoped>
input {
  @apply w-full;
}
</style>
