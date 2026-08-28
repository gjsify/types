
# Clutter-7

![version](https://img.shields.io/npm/v/@girs/clutter-7)
![downloads/week](https://img.shields.io/npm/dw/@girs/clutter-7)


GJS TypeScript type definitions for Clutter-7 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/clutter-7
```

## Usage

Import it like any other module:
```ts
import Clutter from '@girs/clutter-7';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/clutter-7` or `@girs/clutter-7/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/clutter-7'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/clutter-7"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Clutter from 'gi://Clutter?version=7';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/clutter-7` or `@girs/clutter-7/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/clutter-7'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/clutter-7"],
  ...
}
```

That form carries types as well:

```ts
const Clutter = imports.gi.Clutter;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

