
# Shew-0

![version](https://img.shields.io/npm/v/@girs/shew-0)
![downloads/week](https://img.shields.io/npm/dw/@girs/shew-0)


GJS TypeScript type definitions for Shew-0, generated from library version 0.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.1.0.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/shew-0
```

## Usage

You can import this package into your project like this:
```ts
import Shew from '@girs/shew-0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Shew = require('@girs/shew-0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/shew-0` or `@girs/shew-0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/shew-0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/shew-0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Shew from 'gi://Shew?version=0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/shew-0` or `@girs/shew-0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/shew-0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/shew-0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Shew = imports.gi.Shew;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

