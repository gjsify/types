
# ICalGLib-3.0

![version](https://img.shields.io/npm/v/@girs/node-icalglib-3.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-icalglib-3.0)


Node.js TypeScript type definitions for ICalGLib-3.0, generated from library version 3.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.4.

Implementation of the iCalendar protocols and protocol data units. The iCalendar specification describes how calendar clients can communicate with calendar servers so users can store their calendar data and arrange meetings with other users.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-icalglib-3.0
```

## Usage

You can import this package into your project like this:
```ts
import ICalGLib from '@girs/node-icalglib-3.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const ICalGLib = require('@girs/node-icalglib-3.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-icalglib-3.0` or `@girs/node-icalglib-3.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-icalglib-3.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-icalglib-3.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const ICalGLib = gi.require('ICalGLib', '3.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

