
# Mash-0.2

![version](https://img.shields.io/npm/v/@girs/mash-0.2)
![downloads/week](https://img.shields.io/npm/dw/@girs/mash-0.2)


GJS TypeScript type definitions for Mash-0.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/mash-0.2
```

## Usage

Import it like any other module:
```ts
import Mash from '@girs/mash-0.2';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/mash-0.2` or `@girs/mash-0.2/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mash-0.2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mash-0.2"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Mash from 'gi://Mash?version=0.2';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/mash-0.2` or `@girs/mash-0.2/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/mash-0.2'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/mash-0.2"],
  ...
}
```

That form carries types as well:

```ts
const Mash = imports.gi.Mash;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

