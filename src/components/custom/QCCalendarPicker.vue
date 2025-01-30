<script setup lang="ts">
import { computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import type { PresetDate } from '../../models/calendarpicker.model';

interface QCCalendarProps {
  placeholder?: string;
  range?: boolean;
  multiCalendars?: boolean;
  timePicker?: boolean;
  modelAuto?: boolean;
  presetDate?: PresetDate | null;
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
  PresetDate: null,
});
const rangeValue = computed(() => {
  return props.modelAuto ? true : props.range;
});
</script>

<template>
  <VueDatePicker
    :placeholder="placeholder"
    v-model="modelValue"
    :range="rangeValue"
    :multi-calendars="multiCalendars"
    :time-picker="timePicker"
    :model-auto="modelAuto"
  ></VueDatePicker>
</template>

<style scoped></style>
