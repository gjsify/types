
# IMSettings-1.8

![version](https://img.shields.io/npm/v/@girs/imsettings-1.8)
![downloads/week](https://img.shields.io/npm/dw/@girs/imsettings-1.8)


GJS TypeScript type definitions for IMSettings-1.8, generated from library version 1.8.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.25.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/imsettings-1.8
```

## Usage

You can import this package into your project like this:
```ts
import IMSettings from '@girs/imsettings-1.8';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/imsettings-1.8` or `@girs/imsettings-1.8/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/imsettings-1.8'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/imsettings-1.8"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import IMSettings from 'gi://IMSettings?version=1.8';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/imsettings-1.8` or `@girs/imsettings-1.8/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/imsettings-1.8'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/imsettings-1.8"],
  ...
}
```

Now you have also type support for this, too:

```ts
const IMSettings = imports.gi.IMSettings;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

