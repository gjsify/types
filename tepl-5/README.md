
# Tepl-5

![version](https://img.shields.io/npm/v/@girs/tepl-5)
![downloads/week](https://img.shields.io/npm/dw/@girs/tepl-5)


GJS TypeScript type definitions for Tepl-5, generated from library version 5.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.5.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/tepl-5
```

## Usage

You can import this package into your project like this:
```ts
import Tepl from '@girs/tepl-5';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/tepl-5` or `@girs/tepl-5/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/tepl-5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/tepl-5"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Tepl from 'gi://Tepl?version=5';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/tepl-5` or `@girs/tepl-5/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/tepl-5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/tepl-5"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Tepl = imports.gi.Tepl;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

