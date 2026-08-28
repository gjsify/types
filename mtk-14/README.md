
# Mtk-14

![version](https://img.shields.io/npm/v/@girs/mtk-14)
![downloads/week](https://img.shields.io/npm/dw/@girs/mtk-14)


GJS TypeScript type definitions for Mtk-14 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/mtk-14
```

## Usage

Import it like any other module:
```ts
import Mtk from '@girs/mtk-14';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/mtk-14` or `@girs/mtk-14/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mtk-14'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mtk-14"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Mtk from 'gi://Mtk?version=14';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/mtk-14` or `@girs/mtk-14/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mtk-14'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mtk-14"],
  ...
}
```

That form carries types as well:

```ts
const Mtk = imports.gi.Mtk;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

