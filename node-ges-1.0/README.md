
# GES-1.0

Node.js TypeScript type definitions for GES-1.0, generated from library version 1.23.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

The GStreamer Editing Services (GES) aims to fill the gap between GStreamer/NLE and the application developer by offering a series of classes to simplify the creation of many kind of editing-related applications.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-ges-1.0
```

## Usage

You can import this package into your project like this:
```ts
import GES from '@girs/ges-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GES = require('@girs/ges-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const GES = gi.require('GES', '1.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).