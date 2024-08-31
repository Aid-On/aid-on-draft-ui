import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    replace({
      'use client': '',
      preventAssignment: true
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
    }),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      inlineSources: true
    }),
    postcss({
      plugins: [tailwindcss(), autoprefixer()],
      extract: 'styles.css',
      minimize: true,
      modules: true,
      autoModules: true,
    }),
  ],
};