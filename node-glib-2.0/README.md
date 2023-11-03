
# GLib-2.0

![version](https://img.shields.io/npm/v/@girs/node-glib-2.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-glib-2.0)


Node.js TypeScript type definitions for GLib-2.0, generated from library version 2.76.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.3.

GLib provides the core application building blocks for libraries and applications written in C. It provides the core object system used in GNOME, the main loop implementation, and a large set of utility functions for strings and common data structures.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-glib-2.0
```

## Usage

You can import this package into your project like this:
```ts
import GLib from '@girs/node-glib-2.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GLib = require('@girs/node-glib-2.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-glib-2.0` or `@girs/node-glib-2.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-glib-2.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-glib-2.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const GLib = gi.require('GLib', '2.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

