
# Ide-49

![version](https://img.shields.io/npm/v/@girs/ide-49)
![downloads/week](https://img.shields.io/npm/dw/@girs/ide-49)


GJS TypeScript type definitions for Ide-49, generated from library version 49.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/ide-49
```

## Usage

You can import this package into your project like this:
```ts
import Ide from '@girs/ide-49';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/ide-49` or `@girs/ide-49/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/ide-49'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/ide-49"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Ide from 'gi://Ide?version=49';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/ide-49` or `@girs/ide-49/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/ide-49'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/ide-49"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Ide = imports.gi.Ide;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

