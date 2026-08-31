
# Champlain-0.12

![version](https://img.shields.io/npm/v/@girs/champlain-0.12)
![downloads/week](https://img.shields.io/npm/dw/@girs/champlain-0.12)


GJS TypeScript type definitions for Champlain-0.12, generated from library version 0.12.22 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/champlain-0.12
```

## Usage

Import it like any other module:
```ts
import Champlain from '@girs/champlain-0.12';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/champlain-0.12` or `@girs/champlain-0.12/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/champlain-0.12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/champlain-0.12"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Champlain from 'gi://Champlain?version=0.12';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/champlain-0.12` or `@girs/champlain-0.12/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/champlain-0.12'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/champlain-0.12"],
  ...
}
```

That form carries types as well:

```ts
const Champlain = imports.gi.Champlain;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

