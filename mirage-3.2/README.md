
# Mirage-3.2

![version](https://img.shields.io/npm/v/@girs/mirage-3.2)
![downloads/week](https://img.shields.io/npm/dw/@girs/mirage-3.2)


GJS TypeScript type definitions for Mirage-3.2, generated from library version 3.2.9 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/mirage-3.2
```

## Usage

Import it like any other module:
```ts
import Mirage from '@girs/mirage-3.2';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/mirage-3.2` or `@girs/mirage-3.2/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mirage-3.2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mirage-3.2"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Mirage from 'gi://Mirage?version=3.2';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/mirage-3.2` or `@girs/mirage-3.2/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mirage-3.2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mirage-3.2"],
  ...
}
```

That form carries types as well:

```ts
const Mirage = imports.gi.Mirage;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

