
# Template-1.0

![version](https://img.shields.io/npm/v/@girs/node-template-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-template-1.0)


Node.js TypeScript type definitions for Template-1.0, generated from library version 3.36.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.1.

Template-GLib is a library to generate text from a template and user defined state. Template-GLib allows you to access properties on GObjects as well as call simple methods via GObject-Introspection Template-GLib does not use a language runtime, so it is safe to use from any GObject-Introspectable language.

## Install

To use this type definitions, install them with NPM:
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

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-template-1.0` or `@girs/node-template-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-template-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-template-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Template = gi.require('Template', '1.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

