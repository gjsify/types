
# Secret-1

![version](https://img.shields.io/npm/v/@girs/node-secret-1)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-secret-1)


Node.js TypeScript type definitions for Secret-1, generated from library version 0.21.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.3.

libsecret is a library for storing and retrieving passwords and other secrets. It communicates with the "Secret Service" using DBus. gnome-keyring and ksecretservice are both implementations of a Secret Service.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-secret-1
```

## Usage

You can import this package into your project like this:
```ts
import Secret from '@girs/node-secret-1';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Secret = require('@girs/node-secret-1');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-secret-1` or `@girs/node-secret-1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-secret-1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-secret-1"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Secret = gi.require('Secret', '1')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

