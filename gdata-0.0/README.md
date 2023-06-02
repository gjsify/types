
# GData-0.0

GJS TypeScript type definitions for GData-0.0, generated from library version 0.19.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.2.

GData (Google data) is a set of Application Programming Interfaces (APIs) for the Common Language Infrastructure (CLI) which provide a simple protocol for reading and writing data on the web.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gdata-0.0
```

## Usage

You can import this package into your project like this:
```ts
import GData from '@girs/gdata-0.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GData = require('@girs/gdata-0.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gdata-0.0` or `@girs/gdata-0.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gdata-0.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gdata-0.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import GData from 'gi://GData?version=0.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gdata-0.0` or `@girs/gdata-0.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gdata-0.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gdata-0.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const GData = imports.gi.GData;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

