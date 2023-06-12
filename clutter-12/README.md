
# Clutter-12

![version](https://img.shields.io/npm/v/@girs/clutter-12)
![downloads/week](https://img.shields.io/npm/dw/@girs/clutter-12)


GJS TypeScript type definitions for Clutter-12, generated from library version 12.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/clutter-12
```

## Usage

You can import this package into your project like this:
```ts
import Clutter from '@girs/clutter-12';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Clutter = require('@girs/clutter-12');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/clutter-12` or `@girs/clutter-12/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/clutter-12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/clutter-12"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Clutter from 'gi://Clutter?version=12';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/clutter-12` or `@girs/clutter-12/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/clutter-12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/clutter-12"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Clutter = imports.gi.Clutter;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

