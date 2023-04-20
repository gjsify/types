
# Atk-1.0

Node.js TypeScript type definitions for Atk-1.0, generated from library version 2.45.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

ATK provides the set of accessibility interfaces that are implemented by other toolkits and applications. Using the ATK interfaces, accessibility tools have full access to view and control running applications.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-atk-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Atk from '@girs/atk-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Atk = require('@girs/atk-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Atk = gi.require('Atk', '1.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).