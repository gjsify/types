
# Gjs

GJS TypeScript type definitions for Gjs using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/gjs
```

## Usage

You can import this package into your project like this:
```ts
import Gjs from '@girs/gjs';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gjs = require('@girs/gjs');
```

If you want to use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can import all ambient module types like this:
```ts
import '@girs/gjs/ambient'
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).