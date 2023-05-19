
# WebKit2-4.0

GJS TypeScript type definitions for WebKit2-4.0, generated from library version 2.40.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.15.

WebKitGTK+ is a full-featured port of the WebKit rendering engine, suitable for projects requiring any kind of web integration, from hybrid HTML/CSS applications to full-fledged web browsers.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/webkit2-4.0
```

## Usage

You can import this package into your project like this:
```ts
import WebKit2 from '@girs/webkit2-4.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const WebKit2 = require('@girs/webkit2-4.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/webkit2-4.0` or `@girs/webkit2-4.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/webkit2-4.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/webkit2-4.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import WebKit2 from 'gi://WebKit2?version=4.0';
```


### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/webkit2-4.0` or `@girs/webkit2-4.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/webkit2-4.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/webkit2-4.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const WebKit2 = imports.gi.WebKit2;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

