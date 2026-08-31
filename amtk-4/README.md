
# Amtk-4

![version](https://img.shields.io/npm/v/@girs/amtk-4)
![downloads/week](https://img.shields.io/npm/dw/@girs/amtk-4)


GJS TypeScript type definitions for Amtk-4 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/amtk-4
```

## Usage

Import it like any other module:
```ts
import Amtk from '@girs/amtk-4';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/amtk-4` or `@girs/amtk-4/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/amtk-4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/amtk-4"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Amtk from 'gi://Amtk?version=4';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/amtk-4` or `@girs/amtk-4/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/amtk-4'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/amtk-4"],
  ...
}
```

That form carries types as well:

```ts
const Amtk = imports.gi.Amtk;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

