
# cairo-1.0

Node.js TypeScript type definitions for cairo-1.0, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

Cairo is a 2D graphics library with support for multiple output devices like the X Window System (via both Xlib and XCB), Quartz, Win32, image buffers, PostScript, PDF, and SVG.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-cairo-1.0
```

## Usage

You can import this package into your project like this:
```ts
import cairo from '@girs/node-cairo-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const cairo = require('@girs/node-cairo-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const cairo = gi.require('cairo', '1.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).