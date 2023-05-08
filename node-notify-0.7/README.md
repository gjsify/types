
# Notify-0.7

Node.js TypeScript type definitions for Notify-0.7, generated from library version 0.8.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.14.

libnotify is a library that sends desktop notifications to a notification daemon, as defined in the Desktop Notifications spec. These notifications can be used to inform the user about an event or display some form of information without getting in the user's way.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/node-notify-0.7
```

## Usage

You can import this package into your project like this:
```ts
import Notify from '@girs/notify-0.7';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Notify = require('@girs/notify-0.7');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
const gi = require('node-gtk')
const Notify = gi.require('Notify', '0.7')
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).