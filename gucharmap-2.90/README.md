
# Gucharmap-2.90

![version](https://img.shields.io/npm/v/@girs/gucharmap-2.90)
![downloads/week](https://img.shields.io/npm/dw/@girs/gucharmap-2.90)


GJS TypeScript type definitions for Gucharmap-2.90, generated from library version 15.1.5 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gucharmap-2.90
```

## Usage

You can import this package into your project like this:
```ts
import Gucharmap from '@girs/gucharmap-2.90';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gucharmap-2.90` or `@girs/gucharmap-2.90/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gucharmap-2.90'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gucharmap-2.90"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Gucharmap from 'gi://Gucharmap?version=2.90';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gucharmap-2.90` or `@girs/gucharmap-2.90/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gucharmap-2.90'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gucharmap-2.90"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Gucharmap = imports.gi.Gucharmap;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

