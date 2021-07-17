import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import packageJson from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/' + packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/' + packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      moduleDirectories: [
        'node_modules',
        'src',
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
        { src: 'package.json', dest: 'dist' },
      ],
    }),
  ],
}
