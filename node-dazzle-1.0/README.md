
# Dazzle-1.0

![version](https://img.shields.io/npm/v/@girs/node-dazzle-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-dazzle-1.0)


Node.js TypeScript type definitions for Dazzle-1.0, generated from library version 3.44.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.

The libdazzle library is a companion library to GObject and Gtk+. It provides various features that we wish were in the underlying library but cannot for various reasons. In most cases, they are wildly out of scope for those libraries. In other cases, our design isn't quite generic enough to work for everyone.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-dazzle-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Dazzle from '@girs/node-dazzle-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Dazzle = require('@girs/node-dazzle-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-dazzle-1.0` or `@girs/node-dazzle-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-dazzle-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-dazzle-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Dazzle = gi.require('Dazzle', '1.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

