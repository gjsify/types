
# GES-1.0

![version](https://img.shields.io/npm/v/@girs/ges-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/ges-1.0)


GJS TypeScript type definitions for GES-1.0, generated from library version 1.23.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.

The GStreamer Editing Services (GES) aims to fill the gap between GStreamer/NLE and the application developer by offering a series of classes to simplify the creation of many kind of editing-related applications.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/ges-1.0
```

## Usage

You can import this package into your project like this:
```ts
import GES from '@girs/ges-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GES = require('@girs/ges-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/ges-1.0` or `@girs/ges-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/ges-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/ges-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import GES from 'gi://GES?version=1.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/ges-1.0` or `@girs/ges-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/ges-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/ges-1.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const GES = imports.gi.GES;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

