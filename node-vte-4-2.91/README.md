
# Vte-4-2.91

![version](https://img.shields.io/npm/v/@girs/node-vte-4-2.91)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-vte-4-2.91)


Node.js TypeScript type definitions for Vte-4-2.91, generated from library version 0.69.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.2.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-vte-4-2.91
```

## Usage

You can import this package into your project like this:
```ts
import Vte from '@girs/node-vte-4-2.91';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Vte = require('@girs/node-vte-4-2.91');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-vte-4-2.91` or `@girs/node-vte-4-2.91/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-vte-4-2.91'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-vte-4-2.91"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Vte = gi.require('Vte', '4-2.91')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

