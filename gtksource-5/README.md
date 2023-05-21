
# GtkSource-5

GJS TypeScript type definitions for GtkSource-5, generated from library version 5.7.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.16.

GtkSourceView is a GNOME library that extends GtkTextView, the standard GTK+ widget for multiline text editing. GtkSourceView adds support for syntax highlighting, undo/redo, file loading and saving, search and replace, a completion system, printing, displaying line numbers, and other features typical of a source code editor.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/gtksource-5
```

## Usage

You can import this package into your project like this:
```ts
import GtkSource from '@girs/gtksource-5';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GtkSource = require('@girs/gtksource-5');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/gtksource-5` or `@girs/gtksource-5/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gtksource-5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gtksource-5"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import GtkSource from 'gi://GtkSource?version=5';
```


### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/gtksource-5` or `@girs/gtksource-5/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gtksource-5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gtksource-5"],
  ...
}
```

Now you have also type support for this, too:

```ts
const GtkSource = imports.gi.GtkSource;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

