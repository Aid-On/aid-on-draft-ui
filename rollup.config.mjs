import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
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
      inject: true,
      minimize: true,
      extract: false,
      extensions: ['.css'],
      use: ['sass', 'stylus'],
    }),
  ],
};