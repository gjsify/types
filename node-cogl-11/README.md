
# Cogl-11

![version](https://img.shields.io/npm/v/@girs/node-cogl-11)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-cogl-11)


Node.js TypeScript type definitions for Cogl-11, generated from library version 11.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.1.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-cogl-11
```

## Usage

You can import this package into your project like this:
```ts
import Cogl from '@girs/node-cogl-11';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Cogl = require('@girs/node-cogl-11');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-cogl-11` or `@girs/node-cogl-11/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-cogl-11'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-cogl-11"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Cogl = gi.require('Cogl', '11')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

