
# GtkChamplain-0.12

![version](https://img.shields.io/npm/v/@girs/node-gtkchamplain-0.12)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-gtkchamplain-0.12)


Node.js TypeScript type definitions for GtkChamplain-0.12, generated from library version 0.12.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.3.

Libchamplain-gtk is a C library on top of libchamplain providing a Gtk+ widget to display maps in GTK+ applications.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gtkchamplain-0.12
```

## Usage

You can import this package into your project like this:
```ts
import GtkChamplain from '@girs/node-gtkchamplain-0.12';
```

Or if you prefer CommonJS, you can also use this:
```ts
const GtkChamplain = require('@girs/node-gtkchamplain-0.12');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gtkchamplain-0.12` or `@girs/node-gtkchamplain-0.12/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gtkchamplain-0.12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gtkchamplain-0.12"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const GtkChamplain = gi.require('GtkChamplain', '0.12')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

