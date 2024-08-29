export default {
  input: 'lib/prettier.config.js',
  output: [
    {
      file: 'dist/prettier.config.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/prettier.config.mjs',
      format: 'es',
    },
  ],
}
