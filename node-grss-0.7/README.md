
# Grss-0.7

![version](https://img.shields.io/npm/v/@girs/node-grss-0.7)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-grss-0.7)


Node.js TypeScript type definitions for Grss-0.7, generated from library version 0.7.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.4.

LibGRSS is a library for easy management of RSS/Atom/Pie feeds. Includes methods to fetch, parse and handle XML documents, an implementation of PubSubHubBub client, an OPML parser and some more utility.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-grss-0.7
```

## Usage

You can import this package into your project like this:
```ts
import Grss from '@girs/node-grss-0.7';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Grss = require('@girs/node-grss-0.7');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-grss-0.7` or `@girs/node-grss-0.7/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-grss-0.7'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-grss-0.7"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const Grss = gi.require('Grss', '0.7')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

