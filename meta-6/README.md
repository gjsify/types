
# Meta-6

![version](https://img.shields.io/npm/v/@girs/meta-6)
![downloads/week](https://img.shields.io/npm/dw/@girs/meta-6)


GJS TypeScript type definitions for Meta-6, generated from library version 3.36.6 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/meta-6
```

## Usage

Import it like any other module:
```ts
import Meta from '@girs/meta-6';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/meta-6` or `@girs/meta-6/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/meta-6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/meta-6"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Meta from 'gi://Meta?version=6';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/meta-6` or `@girs/meta-6/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/meta-6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/meta-6"],
  ...
}
```

That form carries types as well:

```ts
const Meta = imports.gi.Meta;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

