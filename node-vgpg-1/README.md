
# Vgpg-1

Node.js TypeScript type definitions for Vgpg-1, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.15.

VDA implementation using GDA as backend to connect to PostgreSQL databases

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-vgpg-1
```

## Usage

You can import this package into your project like this:
```ts
import Vgpg from '@girs/vgpg-1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Vgpg = require('@girs/vgpg-1');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-vgpg-1` or `@girs/node-vgpg-1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-vgpg-1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-vgpg-1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Vgpg = gi.require('Vgpg', '1')
```



### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

