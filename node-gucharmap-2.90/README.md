
# Gucharmap-2.90

Node.js TypeScript type definitions for Gucharmap-2.90, generated from library version 2.90.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.3.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gucharmap-2.90
```

## Usage

You can import this package into your project like this:
```ts
import Gucharmap from '@girs/node-gucharmap-2.90';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gucharmap = require('@girs/node-gucharmap-2.90');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gucharmap-2.90` or `@girs/node-gucharmap-2.90/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gucharmap-2.90'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gucharmap-2.90"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Gucharmap = gi.require('Gucharmap', '2.90')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

