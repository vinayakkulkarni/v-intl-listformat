<template>
  <span>{{ listFormat }}</span>
</template>
<script>
export default {
  name: 'VIntlListFormat',
  props: {
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    payload: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    type: {
      type: String,
      default: '',
      required: false,
    },
    style: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    listFormat() {
      const t = this;
      return new Intl.ListFormat(t.locale, { type: t.type, style: t.style }).format(t.payload);
    },
  },
};
