<script setup lang="ts">
interface LabelProps {
  id: string;
}
defineProps<LabelProps>();
</script>

<template>
  <label :for="id" class="label-wrapper">
    <slot />
  </label>
</template>

<style scoped>
.label-wrapper {
  @apply flex flex-row flex-1 items-center text-body2 text-gray-900 font-medium;
}
</style>
