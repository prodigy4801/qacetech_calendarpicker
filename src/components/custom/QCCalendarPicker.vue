<script setup lang="ts">
import { computed, ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, subDays, subWeeks } from 'date-fns';

interface QCCalendarProps {
  placeholder?: string;
  range?: boolean;
  multiCalendars?: boolean;
  timePicker?: boolean;
  modelAuto?: boolean;
  isPresetDate?: boolean;
}
defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'input', event: Event): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'focus', event: FocusEvent): void;
}>();
const modelValue = defineModel<string>();
const props = withDefaults(defineProps<QCCalendarProps>(), {
  range: false,
  multiCalendars: false,
  placeholder: '',
  timePicker: false,
  modelAuto: false,
  presetDate: false,
});
const rangeValue = computed(() => {
  return props.modelAuto || props.multiCalendars || props.isPresetDate ? true : props.range;
});
const presetDate = props.isPresetDate
  ? ref([
      { label: 'Today', value: [new Date(), new Date()] },
      {
        label: 'Last Week',
        value: [new Date(), subDays(new Date(), 7)],
      },
      {
        label: 'Next Week',
        value: [new Date(), subWeeks(new Date(), -1)],
      },
      { label: 'This month', value: [startOfMonth(new Date()), endOfMonth(new Date())] },
      {
        label: 'Last month',
        value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
      },
      { label: 'This year', value: [startOfYear(new Date()), endOfYear(new Date())] },
    ])
  : undefined;
</script>

<template>
  <VueDatePicker
    :placeholder="placeholder"
    v-model="modelValue"
    :range="rangeValue"
    :multi-calendars="multiCalendars"
    :time-picker="timePicker"
    :model-auto="modelAuto"
    :preset-dates="presetDate"
  >
    <template v-if="isPresetDate" #preset-date-range-button="{ label, value, presetDate }">
      <span
        role="button"
        :tabindex="0"
        @click="presetDate(value)"
        @keyup.enter.prevent="presetDate(value)"
        @keyup.space.prevent="presetDate(value)"
      >
        {{ label }}
      </span>
    </template>
  </VueDatePicker>
</template>

<style scoped></style>
