<template>
  <span>{{ listFormat }}</span>
</template>
<script>
export default {
  name: 'VIntlListFormat',
  props: {
    payload: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
    listType: {
      type: String,
      default: null,
      required: false,
    },
    listStyle: {
      type: String,
      default: null,
      required: false,
    },
  },
  computed: {
    listFormat() {
      const t = this;
      const vendor = typeof navigator === 'object' ? navigator.vendor : 'Unknown';
      let options = { type: t.listType, style: t.listStyle };
      if (vendor && vendor.includes('Google')) {
        if (options.type === null) {
          options = {};
        }
        if (options.style === null) {
          delete options.style;
        }
        return new Intl.ListFormat(t.locale, options).format(t.payload);
      }
      return 'Unfortunately your browser does not support this plugin!';
    },
  },
};
</script>
