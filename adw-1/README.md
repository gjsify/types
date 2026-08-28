
# Adw-1

![version](https://img.shields.io/npm/v/@girs/adw-1)
![downloads/week](https://img.shields.io/npm/dw/@girs/adw-1)


GJS TypeScript type definitions for Adw-1, generated from library version 1.10.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/adw-1
```

## Usage

Import it like any other module:
```ts
import Adw from '@girs/adw-1';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/adw-1` or `@girs/adw-1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/adw-1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/adw-1"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Adw from 'gi://Adw?version=1';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/adw-1` or `@girs/adw-1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/adw-1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/adw-1"],
  ...
}
```

That form carries types as well:

```ts
const Adw = imports.gi.Adw;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

