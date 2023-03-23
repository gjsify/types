
# GExiv2-0.10

Node.js TypeScript type definitions for GExiv2-0.10, generated from library version 0.14.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

gexiv2 is a GObject wrapper around the Exiv2 photo metadata library. It allows for GNOME applications to easily inspect and update EXIF, IPTC, and XMP metadata in photo and video files of various formats

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-gexiv2-0.10
```

## Usage

You can import this package into your project like this:
```ts
import GExiv2 from '@girs/node-gexiv2-0.10';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GExiv2 = require('@girs/node-gexiv2-0.10');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const GExiv2 = gi.require('GExiv2', '0.10')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).