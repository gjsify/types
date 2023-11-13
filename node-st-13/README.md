
# St-13

![version](https://img.shields.io/npm/v/@girs/node-st-13)
![downloads/week](https://img.shields.io/npm/dw/@girs/node-st-13)


Node.js TypeScript type definitions for St-13, generated from library version 13.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.4.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-st-13
```

## Usage

You can import this package into your project like this:
```ts
import St from '@girs/node-st-13';
```

Or if you prefer CommonJS, you can also use this:
```ts
const St = require('@girs/node-st-13');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-st-13` or `@girs/node-st-13/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-st-13'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-st-13"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const St = gi.require('St', '13')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

