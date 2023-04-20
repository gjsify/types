
# Dbusmenu-0.4

Node.js TypeScript type definitions for Dbusmenu-0.4, generated from library version 0.4.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

A small little library that was created by pulling out some comon code out of indicator-applet. It passes a menu structure across DBus so that a program can create a menu simply without worrying about how it is displayed on the other side of the bus.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-dbusmenu-0.4
```

## Usage

You can import this package into your project like this:
```ts
import Dbusmenu from '@girs/dbusmenu-0.4';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Dbusmenu = require('@girs/dbusmenu-0.4');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Dbusmenu = gi.require('Dbusmenu', '0.4')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).