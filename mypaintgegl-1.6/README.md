
# MyPaintGegl-1.6

![version](https://img.shields.io/npm/v/@girs/mypaintgegl-1.6)
![downloads/week](https://img.shields.io/npm/dw/@girs/mypaintgegl-1.6)


GJS TypeScript type definitions for MyPaintGegl-1.6 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/mypaintgegl-1.6
```

## Usage

Import it like any other module:
```ts
import MyPaintGegl from '@girs/mypaintgegl-1.6';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/mypaintgegl-1.6` or `@girs/mypaintgegl-1.6/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mypaintgegl-1.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mypaintgegl-1.6"],
  ...
}
```

The ambient module now resolves with types:

```ts
import MyPaintGegl from 'gi://MyPaintGegl?version=1.6';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/mypaintgegl-1.6` or `@girs/mypaintgegl-1.6/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mypaintgegl-1.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mypaintgegl-1.6"],
  ...
}
```

That form carries types as well:

```ts
const MyPaintGegl = imports.gi.MyPaintGegl;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

