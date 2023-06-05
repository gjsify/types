
# Farstream-0.1

![version](https://img.shields.io/npm/v/@girs/node-farstream-0.1)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-farstream-0.1)


Node.js TypeScript type definitions for Farstream-0.1, generated from library version 0.1.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.4.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-farstream-0.1
```

## Usage

You can import this package into your project like this:
```ts
import Farstream from '@girs/node-farstream-0.1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Farstream = require('@girs/node-farstream-0.1');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-farstream-0.1` or `@girs/node-farstream-0.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-farstream-0.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-farstream-0.1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Farstream = gi.require('Farstream', '0.1')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

