
# XreaderDocument-1.5

![version](https://img.shields.io/npm/v/@girs/xreaderdocument-1.5)
![downloads/week](https://img.shields.io/npm/dw/@girs/xreaderdocument-1.5)


GJS TypeScript type definitions for XreaderDocument-1.5, generated from library version 4.2.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/xreaderdocument-1.5
```

## Usage

You can import this package into your project like this:
```ts
import XreaderDocument from '@girs/xreaderdocument-1.5';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/xreaderdocument-1.5` or `@girs/xreaderdocument-1.5/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xreaderdocument-1.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xreaderdocument-1.5"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import XreaderDocument from 'gi://XreaderDocument?version=1.5';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/xreaderdocument-1.5` or `@girs/xreaderdocument-1.5/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xreaderdocument-1.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xreaderdocument-1.5"],
  ...
}
```

Now you have also type support for this, too:

```ts
const XreaderDocument = imports.gi.XreaderDocument;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

