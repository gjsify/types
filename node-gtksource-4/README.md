
# GtkSource-4

Node.js TypeScript type definitions for GtkSource-4, generated from library version 4.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.15.

GtkSourceView is a GNOME library that extends GtkTextView, the standard GTK+ widget for multiline text editing. GtkSourceView adds support for syntax highlighting, undo/redo, file loading and saving, search and replace, a completion system, printing, displaying line numbers, and other features typical of a source code editor.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gtksource-4
```

## Usage

You can import this package into your project like this:
```ts
import GtkSource from '@girs/gtksource-4';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GtkSource = require('@girs/gtksource-4');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gtksource-4` or `@girs/node-gtksource-4/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gtksource-4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gtksource-4"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const GtkSource = gi.require('GtkSource', '4')
```



### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

