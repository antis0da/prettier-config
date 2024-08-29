import prettier from 'prettier'
import {describe, expect, test} from 'vitest'
import prettierConfig from './prettier.config'

describe('prettier configuration', () => {
  describe('babel parser', () => {
    test('arrowParens: avoid', async () => {
      const nonFormattedCode = `const identity = (x) => x`

      const expected = `const identity = x => x\n`

      const actual = await prettier.format(nonFormattedCode, {
        ...prettierConfig,
        parser: 'babel',
      })

      expect(actual).toBe(expected)
    })

    test('bracketSpacing: false', async () => {
      const nonFormattedCode = `const foo = { bar: 'baz' }`

      const expected = `const foo = {bar: 'baz'}\n`

      const actual = await prettier.format(nonFormattedCode, {
        ...prettierConfig,
        parser: 'babel',
      })

      expect(actual).toBe(expected)
    })

    test('semi: false', async () => {
      const nonFormattedCode = `const foo = {bar: 'baz'};`

      const expected = `const foo = {bar: 'baz'}\n`

      const actual = await prettier.format(nonFormattedCode, {
        ...prettierConfig,
        parser: 'babel',
      })

      expect(actual).toBe(expected)
    })

    test('singleQuote: true', async () => {
      const nonFormattedCode = `const foo = {bar: "baz"}`

      const expected = `const foo = {bar: 'baz'}\n`

      const actual = await prettier.format(nonFormattedCode, {
        ...prettierConfig,
        parser: 'babel',
      })

      expect(actual).toBe(expected)
    })
  })

  describe('json parser', () => {
    test('should parse json correctly', async () => {
      const nonFormattedCode = `{foo: 'bar'}`

      const expected = `{"foo": "bar"}\n`

      const actual = await prettier.format(nonFormattedCode, {
        ...prettierConfig,
        parser: 'json',
      })

      expect(actual).toBe(expected)
    })
  })

  describe('yaml parser', () => {
    test('should parse yaml correctly', async () => {
      const nonFormattedCode = `foo:  bar`

      const expected = `foo: bar\n`

      const actual = await prettier.format(nonFormattedCode, {
        ...prettierConfig,
        parser: 'yaml',
      })

      expect(actual).toBe(expected)
    })
  })
})
