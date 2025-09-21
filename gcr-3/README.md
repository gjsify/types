
# Gcr-3

![version](https://img.shields.io/npm/v/@girs/gcr-3)
![downloads/week](https://img.shields.io/npm/dw/@girs/gcr-3)


GJS TypeScript type definitions for Gcr-3, generated from library version 3.41.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gcr-3
```

## Usage

You can import this package into your project like this:
```ts
import Gcr from '@girs/gcr-3';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gcr-3` or `@girs/gcr-3/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gcr-3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gcr-3"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Gcr from 'gi://Gcr?version=3';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gcr-3` or `@girs/gcr-3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gcr-3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gcr-3"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Gcr = imports.gi.Gcr;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

