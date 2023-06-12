
# Gdl-3

![version](https://img.shields.io/npm/v/@girs/node-gdl-3)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-gdl-3)


Node.js TypeScript type definitions for Gdl-3, generated from library version 3.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.

The GNOME Devtools Library package provides a docking system and several utilities useful to GNOME development tools and GNOME applications in general.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gdl-3
```

## Usage

You can import this package into your project like this:
```ts
import Gdl from '@girs/node-gdl-3';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Gdl = require('@girs/node-gdl-3');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-gdl-3` or `@girs/node-gdl-3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-gdl-3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gdl-3"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Gdl = gi.require('Gdl', '3')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

