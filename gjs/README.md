
# Gjs

GJS TypeScript type definitions for Gjs using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.15.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gjs
```

## Usage

You can import this package into your project like this:
```ts
import Gjs from '@girs/gjs';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gjs = require('@girs/gjs');
```

### Ambient Modules

You can import core [ambient module](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) types.
For this you need to include the `@girs/gjs` or `@girs/gjs/ambient` in your `tsconfig` or entry point Typescript file:
    
`index.ts`:
```ts
import '@girs/gjs'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gjs"],
  ...
}
```
    

Now you can import `gettext` and `system` in ESM style with Typescript support:

```ts
import gettext from 'gettext';
import system from 'system';
```


If you want to have more types for GIR modules, you have to add them to your dependencies and import them as well, see the description of these modules, e.g. [Gtk-4.0](https://www.npmjs.com/package/@girs/gtk-4.0).


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

