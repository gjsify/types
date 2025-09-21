
# XreaderView-1.5

![version](https://img.shields.io/npm/v/@girs/xreaderview-1.5)
![downloads/week](https://img.shields.io/npm/dw/@girs/xreaderview-1.5)


GJS TypeScript type definitions for XreaderView-1.5, generated from library version 1.5.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/xreaderview-1.5
```

## Usage

You can import this package into your project like this:
```ts
import XreaderView from '@girs/xreaderview-1.5';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/xreaderview-1.5` or `@girs/xreaderview-1.5/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xreaderview-1.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xreaderview-1.5"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import XreaderView from 'gi://XreaderView?version=1.5';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/xreaderview-1.5` or `@girs/xreaderview-1.5/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xreaderview-1.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xreaderview-1.5"],
  ...
}
```

Now you have also type support for this, too:

```ts
const XreaderView = imports.gi.XreaderView;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

