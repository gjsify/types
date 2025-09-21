
# GstBase-0.10

![version](https://img.shields.io/npm/v/@girs/gstbase-0.10)
![downloads/week](https://img.shields.io/npm/dw/@girs/gstbase-0.10)


GJS TypeScript type definitions for GstBase-0.10, generated from library version 0.10.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gstbase-0.10
```

## Usage

You can import this package into your project like this:
```ts
import GstBase from '@girs/gstbase-0.10';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gstbase-0.10` or `@girs/gstbase-0.10/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gstbase-0.10'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gstbase-0.10"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import GstBase from 'gi://GstBase?version=0.10';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gstbase-0.10` or `@girs/gstbase-0.10/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gstbase-0.10'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gstbase-0.10"],
  ...
}
```

Now you have also type support for this, too:

```ts
const GstBase = imports.gi.GstBase;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

