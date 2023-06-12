
# Peas-1.0

![version](https://img.shields.io/npm/v/@girs/node-peas-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-peas-1.0)


Node.js TypeScript type definitions for Peas-1.0, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.

libpeas is a gobject-based plugins engine, and is targetted at giving every application the chance to assume its own extensibility.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-peas-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Peas from '@girs/node-peas-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Peas = require('@girs/node-peas-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-peas-1.0` or `@girs/node-peas-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-peas-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-peas-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Peas = gi.require('Peas', '1.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

