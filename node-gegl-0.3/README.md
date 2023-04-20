
# Gegl-0.3

Node.js TypeScript type definitions for Gegl-0.3, generated from library version 0.3.35 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

GEGL (Generic Graphics Library) is a data flow based image processing framework, providing floating point processing and non-destructive image processing capabilities to GNU Image Manipulation Program and other projects (imgflo, GNOME Photos, gcut, iconographer, …)

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-gegl-0.3
```

## Usage

You can import this package into your project like this:
```ts
import Gegl from '@girs/gegl-0.3';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gegl = require('@girs/gegl-0.3');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Gegl = gi.require('Gegl', '0.3')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).