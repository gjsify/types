
# Template-1.0

Node.js TypeScript type definitions for Template-1.0, generated from library version 3.36.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

Template-GLib is a library to generate text from a template and user defined state. Template-GLib allows you to access properties on GObjects as well as call simple methods via GObject-Introspection Template-GLib does not use a language runtime, so it is safe to use from any GObject-Introspectable language.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-template-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Template from '@girs/node-template-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Template = require('@girs/node-template-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Template = gi.require('Template', '1.0')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).