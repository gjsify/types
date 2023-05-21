
# ECalendar-1.2

Node.js TypeScript type definitions for ECalendar-1.2, generated from library version 1.2.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0-beta.16.

This package is a client library for evolution calendars.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-ecalendar-1.2
```

## Usage

You can import this package into your project like this:
```ts
import ECalendar from '@girs/node-ecalendar-1.2';
```

Or if you prefer CommonJS, you can also use this:
```ts
const ECalendar = require('@girs/node-ecalendar-1.2');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-ecalendar-1.2` or `@girs/node-ecalendar-1.2/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-ecalendar-1.2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-ecalendar-1.2"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const ECalendar = gi.require('ECalendar', '1.2')
```



### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

