
# Gcr-3

Node.js TypeScript type definitions for Gcr-3, generated from library version 3.41.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.16.

A library for bits of crypto UI and parsing

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gcr-3
```

## Usage

You can import this package into your project like this:
```ts
import Gcr from '@girs/node-gcr-3';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gcr = require('@girs/node-gcr-3');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gcr-3` or `@girs/node-gcr-3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gcr-3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gcr-3"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Gcr = gi.require('Gcr', '3')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

