
# Vsqlite-1

GJS TypeScript type definitions for Vsqlite-1, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.1.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/vsqlite-1
```

## Usage

You can import this package into your project like this:
```ts
import Vsqlite from '@girs/vsqlite-1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Vsqlite = require('@girs/vsqlite-1');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/vsqlite-1` or `@girs/vsqlite-1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/vsqlite-1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/vsqlite-1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Vsqlite from 'gi://Vsqlite?version=1';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/vsqlite-1` or `@girs/vsqlite-1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/vsqlite-1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/vsqlite-1"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Vsqlite = imports.gi.Vsqlite;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

