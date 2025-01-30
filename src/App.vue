<script setup lang="ts">
import LabelDisplay from './components/preview/LabelDisplay.vue';
</script>

<template>
  <div class="page-wrapper">
    <div class="details-content">
      <div class="details-content__card">
        <LabelDisplay
          title="Qace Tech - Calendar Picker"
          description="Customized Calendar Picker to display Date and Time"
        >
          <div class="details-content__card-body"></div>
        </LabelDisplay>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  @apply grid grid-cols-1 m-4;
  .details-content {
    @apply mt-4;
    &__card {
      @apply block p-6 h-full bg-gray-50 rounded-md border border-gray-300;
      &-header {
        @apply text-xl font-normal mb-2;
      }
      &-body {
        @apply grid grid-cols-1 md:grid-cols-3 gap-5 p-4;
      }
    }
  }
}
</style>
