# @antisoda/prettier-config

Shareable [Prettier](https://prettier.io) configuration with opinionated formatting preferences.

## Usage

```sh
npm install --save-dev @antisoda/prettier-config prettier
```

Add a reference to this configuration in your `package.json` file to set it up:

```diff
+  "prettier": "@antisoda/prettier-config",
```

If you want to add more plugins, or extend the configuration, you will need to extend a JavaScript configuration file,
rather than the `prettier` field in `package.json`:

```javascript
/** @see https://prettier.io/docs/en/configuration.html */

import preset from '@antisoda/prettier-config'

export default {
  ...preset,
  // override or extend
}
```
