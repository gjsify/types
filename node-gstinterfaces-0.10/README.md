
# GstInterfaces-0.10

Node.js TypeScript type definitions for GstInterfaces-0.10, generated from library version 0.10.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.16.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gstinterfaces-0.10
```

## Usage

You can import this package into your project like this:
```ts
import GstInterfaces from '@girs/node-gstinterfaces-0.10';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GstInterfaces = require('@girs/node-gstinterfaces-0.10');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gstinterfaces-0.10` or `@girs/node-gstinterfaces-0.10/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gstinterfaces-0.10'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gstinterfaces-0.10"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const GstInterfaces = gi.require('GstInterfaces', '0.10')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

