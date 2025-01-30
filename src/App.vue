<script setup lang="ts">
import LabelDisplay from './components/preview/LabelDisplay.vue';
import QCCalendarPicker from './components/custom/QCCalendarPicker.vue';
</script>

<template>
  <div class="page-wrapper">
    <div class="details-content">
      <div class="details-content__card">
        <LabelDisplay
          title="Qace Tech - Calendar Picker"
          description="Customized Calendar Picker to display Date and Time"
        >
          <div class="details-content__card-body">
            <div class="label-information">
              <label class="label-information--stmt">Normal Usage</label>
              <QCCalendarPicker placeholder="Select Date" />
            </div>
            <div class="label-information">
              <label class="label-information--stmt">Select by Range(Start and End Date)</label>
              <QCCalendarPicker placeholder="Select Date" range />
            </div>
            <div class="label-information">
              <label class="label-information--stmt">Select by Time Only</label>
              <QCCalendarPicker placeholder="Select Date" time-picker />
            </div>
            <div class="label-information">
              <label class="label-information--stmt">Select by Single Date or by Range</label>
              <QCCalendarPicker placeholder="Select Date" model-auto />
            </div>
            <div class="label-information">
              <label class="label-information--stmt">Select by Multiple Calendar Dsiplay</label>
              <QCCalendarPicker placeholder="Select Date" multi-calendars />
            </div>
            <div class="label-information">
              <label class="label-information--stmt">Select by Multiple Calendar Dsiplay</label>
              <QCCalendarPicker placeholder="Select Date" is-preset-date />
            </div>
          </div>
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
        .label-information {
          @apply flex flex-col gap-1;
          &--stmt {
            @apply text-sm font-normal;
          }
        }
      }
    }
  }
}
</style>
