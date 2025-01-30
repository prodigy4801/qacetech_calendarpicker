import type { MaybeRefOrGetter } from 'vue';

export interface PresetDate {
  label: string;
  value: MaybeRefOrGetter<Date[] | string[] | Date | string>;
  style?: Record<string, string>;
  slot?: string;
  noTz?: boolean;
  testId?: string;
}

export interface MultiCalendarsOptions {
  solo?: boolean;
  static?: boolean;
  count?: string | number;
}
