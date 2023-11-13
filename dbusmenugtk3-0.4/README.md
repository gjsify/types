
# DbusmenuGtk3-0.4

![version](https://img.shields.io/npm/v/@girs/dbusmenugtk3-0.4)
![downloads/week](https://img.shields.io/npm/dw/@girs/dbusmenugtk3-0.4)


GJS TypeScript type definitions for DbusmenuGtk3-0.4, generated from library version 0.4.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.4.

A small little library that was created by pulling out some comon code out of indicator-applet. It passes a menu structure across DBus so that a program can create a menu simply without worrying about how it is displayed on the other side of the bus.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/dbusmenugtk3-0.4
```

## Usage

You can import this package into your project like this:
```ts
import DbusmenuGtk3 from '@girs/dbusmenugtk3-0.4';
```

Or if you prefer CommonJS, you can also use this:
```ts
const DbusmenuGtk3 = require('@girs/dbusmenugtk3-0.4');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/dbusmenugtk3-0.4` or `@girs/dbusmenugtk3-0.4/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/dbusmenugtk3-0.4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/dbusmenugtk3-0.4"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import DbusmenuGtk3 from 'gi://DbusmenuGtk3?version=0.4';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/dbusmenugtk3-0.4` or `@girs/dbusmenugtk3-0.4/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/dbusmenugtk3-0.4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/dbusmenugtk3-0.4"],
  ...
}
```

Now you have also type support for this, too:

```ts
const DbusmenuGtk3 = imports.gi.DbusmenuGtk3;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

