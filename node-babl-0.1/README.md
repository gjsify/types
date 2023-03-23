
# Babl-0.1

Node.js TypeScript type definitions for Babl-0.1, generated from library version 0.1.99 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

babl is pixel encoding and color space conversion engine in C. It allows converting between different methods of storing pixels known as pixel formats that have with different bitdepths and other data representations, color models, color spaces and component permutations. A vocabulary to formulate new pixel formats from existing primitives is provided as well as the framework to add new color models, spaces and data types.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-babl-0.1
```

## Usage

You can import this package into your project like this:
```ts
import Babl from '@girs/node-babl-0.1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Babl = require('@girs/node-babl-0.1');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Babl = gi.require('Babl', '0.1')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).