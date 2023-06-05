
# WebKit2-4.1

![version](https://img.shields.io/npm/v/@girs/node-webkit2-4.1)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-webkit2-4.1)


Node.js TypeScript type definitions for WebKit2-4.1, generated from library version 2.40.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.4.

WebKitGTK+ is a full-featured port of the WebKit rendering engine, suitable for projects requiring any kind of web integration, from hybrid HTML/CSS applications to full-fledged web browsers.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-webkit2-4.1
```

## Usage

You can import this package into your project like this:
```ts
import WebKit2 from '@girs/node-webkit2-4.1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const WebKit2 = require('@girs/node-webkit2-4.1');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-webkit2-4.1` or `@girs/node-webkit2-4.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-webkit2-4.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-webkit2-4.1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const WebKit2 = gi.require('WebKit2', '4.1')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

