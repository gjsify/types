
# MetaTest-18

![version](https://img.shields.io/npm/v/@girs/metatest-18)
![downloads/week](https://img.shields.io/npm/dw/@girs/metatest-18)


GJS TypeScript type definitions for MetaTest-18 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/metatest-18
```

## Usage

Import it like any other module:
```ts
import MetaTest from '@girs/metatest-18';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/metatest-18` or `@girs/metatest-18/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/metatest-18'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/metatest-18"],
  ...
}
```

The ambient module now resolves with types:

```ts
import MetaTest from 'gi://MetaTest?version=18';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/metatest-18` or `@girs/metatest-18/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/metatest-18'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/metatest-18"],
  ...
}
```

That form carries types as well:

```ts
const MetaTest = imports.gi.MetaTest;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

