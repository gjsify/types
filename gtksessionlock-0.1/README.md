
# GtkSessionLock-0.1

![version](https://img.shields.io/npm/v/@girs/gtksessionlock-0.1)
![downloads/week](https://img.shields.io/npm/dw/@girs/gtksessionlock-0.1)


GJS TypeScript type definitions for GtkSessionLock-0.1, generated from library version 0.1.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.43.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gtksessionlock-0.1
```

## Usage

You can import this package into your project like this:
```ts
import GtkSessionLock from '@girs/gtksessionlock-0.1';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gtksessionlock-0.1` or `@girs/gtksessionlock-0.1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gtksessionlock-0.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gtksessionlock-0.1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import GtkSessionLock from 'gi://GtkSessionLock?version=0.1';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gtksessionlock-0.1` or `@girs/gtksessionlock-0.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gtksessionlock-0.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gtksessionlock-0.1"],
  ...
}
```

Now you have also type support for this, too:

```ts
const GtkSessionLock = imports.gi.GtkSessionLock;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

