
# GIRepository-2.0

Node.js TypeScript type definitions for GIRepository-2.0, generated from library version 1.75.5 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.14.

GObject introspection is a middleware layer between C libraries (using GObject) and language bindings.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-girepository-2.0
```

## Usage

You can import this package into your project like this:
```ts
import GIRepository from '@girs/girepository-2.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GIRepository = require('@girs/girepository-2.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const GIRepository = gi.require('GIRepository', '2.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).