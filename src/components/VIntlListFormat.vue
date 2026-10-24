<script setup lang="ts">
  import { computed } from 'vue';
  import { formatList } from '../format';
  import type { VIntlListFormatProps } from '../types';

  defineOptions({ name: 'VIntlListFormat' });

  const props = withDefaults(defineProps<VIntlListFormatProps>(), {
    locale: 'en',
    listType: 'conjunction',
    listStyle: 'long',
  });

  const formatted = computed(() =>
    formatList(props.payload, props.locale, props.listType, props.listStyle),
  );
</script>

<template>
  <span>{{ formatted }}</span>
</template>
