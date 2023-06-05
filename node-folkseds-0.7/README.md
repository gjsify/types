
# FolksEds-0.7

![version](https://img.shields.io/npm/v/@girs/node-folkseds-0.7)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-folkseds-0.7)


Node.js TypeScript type definitions for FolksEds-0.7, generated from library version 0.7.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.4.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-folkseds-0.7
```

## Usage

You can import this package into your project like this:
```ts
import FolksEds from '@girs/node-folkseds-0.7';
```

Or if you prefer CommonJS, you can also use this:
```ts
const FolksEds = require('@girs/node-folkseds-0.7');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-folkseds-0.7` or `@girs/node-folkseds-0.7/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-folkseds-0.7'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-folkseds-0.7"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const FolksEds = gi.require('FolksEds', '0.7')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

