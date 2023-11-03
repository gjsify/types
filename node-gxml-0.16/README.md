
# GXml-0.16

![version](https://img.shields.io/npm/v/@girs/node-gxml-0.16)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-gxml-0.16)


Node.js TypeScript type definitions for GXml-0.16, generated from library version 0.16.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.3.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gxml-0.16
```

## Usage

You can import this package into your project like this:
```ts
import GXml from '@girs/node-gxml-0.16';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GXml = require('@girs/node-gxml-0.16');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gxml-0.16` or `@girs/node-gxml-0.16/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gxml-0.16'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gxml-0.16"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const GXml = gi.require('GXml', '0.16')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

