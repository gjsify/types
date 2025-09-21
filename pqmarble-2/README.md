
# PQMarble-2

![version](https://img.shields.io/npm/v/@girs/pqmarble-2)
![downloads/week](https://img.shields.io/npm/dw/@girs/pqmarble-2)


GJS TypeScript type definitions for PQMarble-2, generated from library version 2.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/pqmarble-2
```

## Usage

You can import this package into your project like this:
```ts
import PQMarble from '@girs/pqmarble-2';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/pqmarble-2` or `@girs/pqmarble-2/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/pqmarble-2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/pqmarble-2"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import PQMarble from 'gi://PQMarble?version=2';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/pqmarble-2` or `@girs/pqmarble-2/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/pqmarble-2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/pqmarble-2"],
  ...
}
```

Now you have also type support for this, too:

```ts
const PQMarble = imports.gi.PQMarble;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

