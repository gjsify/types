
# CoglPango-3

![version](https://img.shields.io/npm/v/@girs/coglpango-3)
![downloads/week](https://img.shields.io/npm/dw/@girs/coglpango-3)


GJS TypeScript type definitions for CoglPango-3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/coglpango-3
```

## Usage

Import it like any other module:
```ts
import CoglPango from '@girs/coglpango-3';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/coglpango-3` or `@girs/coglpango-3/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/coglpango-3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/coglpango-3"],
  ...
}
```

The ambient module now resolves with types:

```ts
import CoglPango from 'gi://CoglPango?version=3';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/coglpango-3` or `@girs/coglpango-3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/coglpango-3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/coglpango-3"],
  ...
}
```

That form carries types as well:

```ts
const CoglPango = imports.gi.CoglPango;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

