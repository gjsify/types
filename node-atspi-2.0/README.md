
# Atspi-2.0

Node.js TypeScript type definitions for Atspi-2.0, generated from library version 2.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

AT-SPI2 is a D-Bus based accessibility framework. It defines a D-Bus protocol for providing and accessing application accessibility information. The project includes a library for bridging the D-Bus protocol to the ATK API, allowing Gtk based applications to be made accessible.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-atspi-2.0
```

## Usage

You can import this package into your project like this:
```ts
import Atspi from '@girs/atspi-2.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Atspi = require('@girs/atspi-2.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Atspi = gi.require('Atspi', '2.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).