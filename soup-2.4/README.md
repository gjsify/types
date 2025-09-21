
# Soup-2.4

![version](https://img.shields.io/npm/v/@girs/soup-2.4)
![downloads/week](https://img.shields.io/npm/dw/@girs/soup-2.4)


GJS TypeScript type definitions for Soup-2.4, generated from library version 2.74.3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/soup-2.4
```

## Usage

You can import this package into your project like this:
```ts
import Soup from '@girs/soup-2.4';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/soup-2.4` or `@girs/soup-2.4/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/soup-2.4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/soup-2.4"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Soup from 'gi://Soup?version=2.4';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/soup-2.4` or `@girs/soup-2.4/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/soup-2.4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/soup-2.4"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Soup = imports.gi.Soup;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

