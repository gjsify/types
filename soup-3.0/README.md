
# Soup-3.0

GJS TypeScript type definitions for Soup-3.0, generated from library version 3.3.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.13.

libsoup is an HTTP client/server library for GNOME. It uses GObjects and the glib main loop, to integrate well with GNOME applications.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/soup-3.0
```

## Usage

You can import this package into your project like this:
```ts
import Soup from '@girs/soup-3.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Soup = require('@girs/soup-3.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
import Soup from 'gi://Soup?version=3.0';
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).