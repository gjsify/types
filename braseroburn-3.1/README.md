
# BraseroBurn-3.1

![version](https://img.shields.io/npm/v/@girs/braseroburn-3.1)
![downloads/week](https://img.shields.io/npm/dw/@girs/braseroburn-3.1)


GJS TypeScript type definitions for BraseroBurn-3.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/braseroburn-3.1
```

## Usage

Import it like any other module:
```ts
import BraseroBurn from '@girs/braseroburn-3.1';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/braseroburn-3.1` or `@girs/braseroburn-3.1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/braseroburn-3.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/braseroburn-3.1"],
  ...
}
```

The ambient module now resolves with types:

```ts
import BraseroBurn from 'gi://BraseroBurn?version=3.1';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/braseroburn-3.1` or `@girs/braseroburn-3.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/braseroburn-3.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/braseroburn-3.1"],
  ...
}
```

That form carries types as well:

```ts
const BraseroBurn = imports.gi.BraseroBurn;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

