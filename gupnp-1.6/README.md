
# GUPnP-1.6

![version](https://img.shields.io/npm/v/@girs/gupnp-1.6)
![downloads/week](https://img.shields.io/npm/dw/@girs/gupnp-1.6)


GJS TypeScript type definitions for GUPnP-1.6, generated from library version 1.6.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.1.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gupnp-1.6
```

## Usage

You can import this package into your project like this:
```ts
import GUPnP from '@girs/gupnp-1.6';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GUPnP = require('@girs/gupnp-1.6');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gupnp-1.6` or `@girs/gupnp-1.6/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gupnp-1.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gupnp-1.6"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import GUPnP from 'gi://GUPnP?version=1.6';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gupnp-1.6` or `@girs/gupnp-1.6/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gupnp-1.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gupnp-1.6"],
  ...
}
```

Now you have also type support for this, too:

```ts
const GUPnP = imports.gi.GUPnP;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

