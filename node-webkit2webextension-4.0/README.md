
# WebKit2WebExtension-4.0

![version](https://img.shields.io/npm/v/@girs/node-webkit2webextension-4.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-webkit2webextension-4.0)


Node.js TypeScript type definitions for WebKit2WebExtension-4.0, generated from library version 4.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.3.

WebKitGTK+ is a full-featured port of the WebKit rendering engine, suitable for projects requiring any kind of web integration, from hybrid HTML/CSS applications to full-fledged web browsers. This is the library to use to build extensions running in the separated webprocess.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-webkit2webextension-4.0
```

## Usage

You can import this package into your project like this:
```ts
import WebKit2WebExtension from '@girs/node-webkit2webextension-4.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const WebKit2WebExtension = require('@girs/node-webkit2webextension-4.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-webkit2webextension-4.0` or `@girs/node-webkit2webextension-4.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-webkit2webextension-4.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-webkit2webextension-4.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const WebKit2WebExtension = gi.require('WebKit2WebExtension', '4.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

