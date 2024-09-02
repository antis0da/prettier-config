/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  semi: false,
  singleQuote: true,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports',
    'prettier-plugin-css-order',
  ],
  overrides: [
    {
      files: ['.*rc'],
      options: {
        parser: 'json',
        singleQuote: false,
      },
    },
    {
      files: ['*.yml'],
      options: {
        singleQuote: false,
      },
    },
  ],
}

export default prettierConfig
