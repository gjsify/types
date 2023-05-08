
# node-gtk

Node.js TypeScript type definitions for node-gtk using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.14.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-gtk
```

## Usage

You can import this package into your project like this:
```ts
import NodeGtk from '@girs/node-gtk';
```

Or if you prefer CommonJS, you can also use this:
```ts
const NodeGtk = require('@girs/node-gtk');
```

If you want to use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can import all ambient module types like this:
```ts
import '@girs/node-gtk/node-ambient'
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).