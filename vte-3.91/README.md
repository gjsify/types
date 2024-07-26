
# Vte-3.91

![version](https://img.shields.io/npm/v/@girs/vte-3.91)
![downloads/week](https://img.shields.io/npm/dw/@girs/vte-3.91)


GJS TypeScript type definitions for Vte-3.91, generated from library version 0.76.3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.14.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/vte-3.91
```

## Usage

You can import this package into your project like this:
```ts
import Vte from '@girs/vte-3.91';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/vte-3.91` or `@girs/vte-3.91/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/vte-3.91'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/vte-3.91"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Vte from 'gi://Vte?version=3.91';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/vte-3.91` or `@girs/vte-3.91/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/vte-3.91'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/vte-3.91"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Vte = imports.gi.Vte;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

