
# Midori-0.6

![version](https://img.shields.io/npm/v/@girs/midori-0.6)
![downloads/week](https://img.shields.io/npm/dw/@girs/midori-0.6)


GJS TypeScript type definitions for Midori-0.6, generated from library version 0.6.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/midori-0.6
```

## Usage

You can import this package into your project like this:
```ts
import Midori from '@girs/midori-0.6';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/midori-0.6` or `@girs/midori-0.6/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/midori-0.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/midori-0.6"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Midori from 'gi://Midori?version=0.6';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/midori-0.6` or `@girs/midori-0.6/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/midori-0.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/midori-0.6"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Midori = imports.gi.Midori;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

