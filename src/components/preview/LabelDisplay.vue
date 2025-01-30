<script setup lang="ts">
interface PreviewPageProps {
  title?: string;
  description?: string;
}

defineProps<PreviewPageProps>();
</script>

<template>
  <div class="display-wrapper">
    <h2 class="display-wrapper--header">
      {{ title }}
    </h2>
    <h5 class="display-wrapper--description">
      {{ description }}
    </h5>
    <div class="display-wrapper-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.display-wrapper {
  @apply py-2;
  &--header {
    @apply text-xl font-bold text-gray-600;
  }
  &--description {
    @apply text-lg font-normal mb-2;
  }
  &-content {
    @apply flex flex-col gap-2;
  }
}
</style>
