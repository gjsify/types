
# Poppler-0.18

![version](https://img.shields.io/npm/v/@girs/poppler-0.18)
![downloads/week](https://img.shields.io/npm/dw/@girs/poppler-0.18)


GJS TypeScript type definitions for Poppler-0.18, generated from library version 26.8.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/poppler-0.18
```

## Usage

Import it like any other module:
```ts
import Poppler from '@girs/poppler-0.18';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/poppler-0.18` or `@girs/poppler-0.18/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/poppler-0.18'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/poppler-0.18"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Poppler from 'gi://Poppler?version=0.18';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/poppler-0.18` or `@girs/poppler-0.18/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/poppler-0.18'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/poppler-0.18"],
  ...
}
```

That form carries types as well:

```ts
const Poppler = imports.gi.Poppler;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

