
# Goa-1.0

Node.js TypeScript type definitions for Goa-1.0, generated from library version 3.47.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.14.

A centralized service that allows a set of online accounts to be configured for use with core GNOME applications. In UX terms, GOA provides a static list of online accounts that can be setup by users (through the Online Accounts panel in System Settings). These accounts can then be used by core GNOME applications.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-goa-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Goa from '@girs/goa-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Goa = require('@girs/goa-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Goa = gi.require('Goa', '1.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).