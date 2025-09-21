
# Champlain-0.12

![version](https://img.shields.io/npm/v/@girs/champlain-0.12)
![downloads/week](https://img.shields.io/npm/dw/@girs/champlain-0.12)


GJS TypeScript type definitions for Champlain-0.12, generated from library version 0.12.22 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/champlain-0.12
```

## Usage

You can import this package into your project like this:
```ts
import Champlain from '@girs/champlain-0.12';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/champlain-0.12` or `@girs/champlain-0.12/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/champlain-0.12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/champlain-0.12"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Champlain from 'gi://Champlain?version=0.12';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/champlain-0.12` or `@girs/champlain-0.12/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/champlain-0.12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/champlain-0.12"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Champlain = imports.gi.Champlain;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

