
# Soup-2.4

![version](https://img.shields.io/npm/v/@girs/soup-2.4)
![downloads/week](https://img.shields.io/npm/dw/@girs/soup-2.4)


GJS TypeScript type definitions for Soup-2.4, generated from library version 2.74.3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/soup-2.4
```

## Usage

Import it like any other module:
```ts
import Soup from '@girs/soup-2.4';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/soup-2.4` or `@girs/soup-2.4/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/soup-2.4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/soup-2.4"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Soup from 'gi://Soup?version=2.4';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/soup-2.4` or `@girs/soup-2.4/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/soup-2.4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/soup-2.4"],
  ...
}
```

That form carries types as well:

```ts
const Soup = imports.gi.Soup;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

