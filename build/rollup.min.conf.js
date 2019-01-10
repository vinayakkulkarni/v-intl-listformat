import babel from 'rollup-plugin-babel';
const { uglify } = require('rollup-plugin-uglify');
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  plugins: [vue(), babel(), uglify()],
  output: {
    format: 'umd',
    name: 'VIntlListFormat',
    file: 'dist/v-intl-listformat.min.js',
  },
};
