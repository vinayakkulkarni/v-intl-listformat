import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    vue(),
    babel(),
  ],
  output: [
    {
      format: 'umd',
      name: 'VIntlListFormat',
      file: 'dist/v-intl-listformat.js',
    },
    {
      format: 'es',
      file: 'dist/v-intl-listformat.esm.js',
    },
  ],
};
