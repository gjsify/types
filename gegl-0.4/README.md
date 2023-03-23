
# Gegl-0.4

GJS TypeScript type definitions for Gegl-0.4, generated from library version 0.4.41 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

GEGL (Generic Graphics Library) is a data flow based image processing framework, providing floating point processing and non-destructive image processing capabilities to GNU Image Manipulation Program and other projects (imgflo, GNOME Photos, gcut, iconographer, …)

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/gegl-0.4
```

## Usage

You can import this package into your project like this:
```ts
import Gegl from '@girs/gegl-0.4';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gegl = require('@girs/gegl-0.4');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
import Gegl from 'gi://Gegl?version=0.4';
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).