
# DBusGLib-1.0

Node.js TypeScript type definitions for DBusGLib-1.0, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.14.

Initial D-Bus Support (Do not use in new projects, use DBus support included in GLib instead)

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-dbusglib-1.0
```

## Usage

You can import this package into your project like this:
```ts
import DBusGLib from '@girs/dbusglib-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const DBusGLib = require('@girs/dbusglib-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const DBusGLib = gi.require('DBusGLib', '1.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).