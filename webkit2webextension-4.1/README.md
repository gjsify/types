
# WebKit2WebExtension-4.1

GJS TypeScript type definitions for WebKit2WebExtension-4.1, generated from library version 4.1.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.1.

WebKitGTK+ is a full-featured port of the WebKit rendering engine, suitable for projects requiring any kind of web integration, from hybrid HTML/CSS applications to full-fledged web browsers. This is the library to use to build extensions running in the separated webprocess.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/webkit2webextension-4.1
```

## Usage

You can import this package into your project like this:
```ts
import WebKit2WebExtension from '@girs/webkit2webextension-4.1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const WebKit2WebExtension = require('@girs/webkit2webextension-4.1');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/webkit2webextension-4.1` or `@girs/webkit2webextension-4.1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/webkit2webextension-4.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/webkit2webextension-4.1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import WebKit2WebExtension from 'gi://WebKit2WebExtension?version=4.1';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/webkit2webextension-4.1` or `@girs/webkit2webextension-4.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/webkit2webextension-4.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/webkit2webextension-4.1"],
  ...
}
```

Now you have also type support for this, too:

```ts
const WebKit2WebExtension = imports.gi.WebKit2WebExtension;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

