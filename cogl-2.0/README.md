
# Cogl-2.0

![version](https://img.shields.io/npm/v/@girs/cogl-2.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/cogl-2.0)


GJS TypeScript type definitions for Cogl-2.0, generated from library version 2.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.25.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/cogl-2.0
```

## Usage

You can import this package into your project like this:
```ts
import Cogl from '@girs/cogl-2.0';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/cogl-2.0` or `@girs/cogl-2.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/cogl-2.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/cogl-2.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Cogl from 'gi://Cogl?version=2.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/cogl-2.0` or `@girs/cogl-2.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/cogl-2.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/cogl-2.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Cogl = imports.gi.Cogl;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

