import babel from '@rollup/plugin-babel';

export default {
  input: 'app.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime'],
      exclude: 'node_modules/**'
    })
  ]
};