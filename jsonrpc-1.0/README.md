
# Jsonrpc-1.0

GJS TypeScript type definitions for Jsonrpc-1.0, generated from library version 3.43.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.14.

Jsonrpc-GLib is a library to communicate with JSON-RPC based peers in either a synchronous or asynchronous fashion. It also allows communicating using the GVariant serialization format instead of JSON when both peers support it. You might want that when communicating on a single host to avoid parser overhead and memory-allocator fragmentation

## Install

To use this type definitions, install them with NPM like this:
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

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
import Jsonrpc from 'gi://Jsonrpc?version=1.0';
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).