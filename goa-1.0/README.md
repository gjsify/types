
# Goa-1.0

GJS TypeScript type definitions for Goa-1.0, generated from library version 3.47.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.16.

A centralized service that allows a set of online accounts to be configured for use with core GNOME applications. In UX terms, GOA provides a static list of online accounts that can be setup by users (through the Online Accounts panel in System Settings). These accounts can then be used by core GNOME applications.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/goa-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Goa from '@girs/goa-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Goa = require('@girs/goa-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/goa-1.0` or `@girs/goa-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/goa-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/goa-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Goa from 'gi://Goa?version=1.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/goa-1.0` or `@girs/goa-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/goa-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/goa-1.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Goa = imports.gi.Goa;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

