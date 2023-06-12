
# Grl-0.3

![version](https://img.shields.io/npm/v/@girs/node-grl-0.3)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-grl-0.3)


Node.js TypeScript type definitions for Grl-0.3, generated from library version 0.3.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.

Framework that provides access to various sources of multimedia content

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-grl-0.3
```

## Usage

You can import this package into your project like this:
```ts
import Grl from '@girs/node-grl-0.3';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Grl = require('@girs/node-grl-0.3');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-grl-0.3` or `@girs/node-grl-0.3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-grl-0.3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-grl-0.3"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Grl = gi.require('Grl', '0.3')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

