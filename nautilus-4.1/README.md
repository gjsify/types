
# Nautilus-4.1

![version](https://img.shields.io/npm/v/@girs/nautilus-4.1)
![downloads/week](https://img.shields.io/npm/dw/@girs/nautilus-4.1)


GJS TypeScript type definitions for Nautilus-4.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/nautilus-4.1
```

## Usage

Import it like any other module:
```ts
import Nautilus from '@girs/nautilus-4.1';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/nautilus-4.1` or `@girs/nautilus-4.1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/nautilus-4.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/nautilus-4.1"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Nautilus from 'gi://Nautilus?version=4.1';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/nautilus-4.1` or `@girs/nautilus-4.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/nautilus-4.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/nautilus-4.1"],
  ...
}
```

That form carries types as well:

```ts
const Nautilus = imports.gi.Nautilus;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

