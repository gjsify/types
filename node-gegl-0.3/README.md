
# Gegl-0.3

![version](https://img.shields.io/npm/v/@girs/node-gegl-0.3)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-gegl-0.3)


Node.js TypeScript type definitions for Gegl-0.3, generated from library version 0.3.35 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.2.

GEGL (Generic Graphics Library) is a data flow based image processing framework, providing floating point processing and non-destructive image processing capabilities to GNU Image Manipulation Program and other projects (imgflo, GNOME Photos, gcut, iconographer, …)

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gegl-0.3
```

## Usage

You can import this package into your project like this:
```ts
import Gegl from '@girs/node-gegl-0.3';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gegl = require('@girs/node-gegl-0.3');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gegl-0.3` or `@girs/node-gegl-0.3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gegl-0.3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gegl-0.3"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Gegl = gi.require('Gegl', '0.3')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

