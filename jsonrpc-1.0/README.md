
# Jsonrpc-1.0

![version](https://img.shields.io/npm/v/@girs/jsonrpc-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/jsonrpc-1.0)


GJS TypeScript type definitions for Jsonrpc-1.0, generated from library version 3.43.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.3.

Jsonrpc-GLib is a library to communicate with JSON-RPC based peers in either a synchronous or asynchronous fashion. It also allows communicating using the GVariant serialization format instead of JSON when both peers support it. You might want that when communicating on a single host to avoid parser overhead and memory-allocator fragmentation

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/jsonrpc-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Jsonrpc from '@girs/jsonrpc-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Jsonrpc = require('@girs/jsonrpc-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/jsonrpc-1.0` or `@girs/jsonrpc-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/jsonrpc-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/jsonrpc-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Jsonrpc from 'gi://Jsonrpc?version=1.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/jsonrpc-1.0` or `@girs/jsonrpc-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/jsonrpc-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/jsonrpc-1.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Jsonrpc = imports.gi.Jsonrpc;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

