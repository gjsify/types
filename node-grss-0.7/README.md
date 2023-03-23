
# Grss-0.7

Node.js TypeScript type definitions for Grss-0.7, generated from library version 0.7.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

LibGRSS is a library for easy management of RSS/Atom/Pie feeds. Includes methods to fetch, parse and handle XML documents, an implementation of PubSubHubBub client, an OPML parser and some more utility.

## Install

To use this type definitions, install them with NPM like this:
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

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Grss = gi.require('Grss', '0.7')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).