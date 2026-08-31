
# Wnck-1.0

![version](https://img.shields.io/npm/v/@girs/wnck-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/wnck-1.0)


GJS TypeScript type definitions for Wnck-1.0, generated from library version 2.31.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/wnck-1.0
```

## Usage

Import it like any other module:
```ts
import Wnck from '@girs/wnck-1.0';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/wnck-1.0` or `@girs/wnck-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/wnck-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/wnck-1.0"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Wnck from 'gi://Wnck?version=1.0';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/wnck-1.0` or `@girs/wnck-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/wnck-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/wnck-1.0"],
  ...
}
```

That form carries types as well:

```ts
const Wnck = imports.gi.Wnck;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

