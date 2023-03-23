
# GtkSource-5

Node.js TypeScript type definitions for GtkSource-5, generated from library version 5.7.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

GtkSourceView is a GNOME library that extends GtkTextView, the standard GTK+ widget for multiline text editing. GtkSourceView adds support for syntax highlighting, undo/redo, file loading and saving, search and replace, a completion system, printing, displaying line numbers, and other features typical of a source code editor.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-gtksource-5
```

## Usage

You can import this package into your project like this:
```ts
import GtkSource from '@girs/node-gtksource-5';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GtkSource = require('@girs/node-gtksource-5');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const GtkSource = gi.require('GtkSource', '5')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).