
# Atk-1.0

![version](https://img.shields.io/npm/v/@girs/atk-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/atk-1.0)


GJS TypeScript type definitions for Atk-1.0, generated from library version 2.61.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/atk-1.0
```

## Usage

Import it like any other module:
```ts
import Atk from '@girs/atk-1.0';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/atk-1.0` or `@girs/atk-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/atk-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/atk-1.0"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Atk from 'gi://Atk?version=1.0';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/atk-1.0` or `@girs/atk-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/atk-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/atk-1.0"],
  ...
}
```

That form carries types as well:

```ts
const Atk = imports.gi.Atk;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

