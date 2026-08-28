
# Cogl-8

![version](https://img.shields.io/npm/v/@girs/cogl-8)
![downloads/week](https://img.shields.io/npm/dw/@girs/cogl-8)


GJS TypeScript type definitions for Cogl-8 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/cogl-8
```

## Usage

Import it like any other module:
```ts
import Cogl from '@girs/cogl-8';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/cogl-8` or `@girs/cogl-8/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/cogl-8'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/cogl-8"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Cogl from 'gi://Cogl?version=8';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/cogl-8` or `@girs/cogl-8/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/cogl-8'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/cogl-8"],
  ...
}
```

That form carries types as well:

```ts
const Cogl = imports.gi.Cogl;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

