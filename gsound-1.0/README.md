
# GSound-1.0

![version](https://img.shields.io/npm/v/@girs/gsound-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/gsound-1.0)


GJS TypeScript type definitions for GSound-1.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/gsound-1.0
```

## Usage

Import it like any other module:
```ts
import GSound from '@girs/gsound-1.0';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/gsound-1.0` or `@girs/gsound-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gsound-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gsound-1.0"],
  ...
}
```

The ambient module now resolves with types:

```ts
import GSound from 'gi://GSound?version=1.0';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/gsound-1.0` or `@girs/gsound-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gsound-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gsound-1.0"],
  ...
}
```

That form carries types as well:

```ts
const GSound = imports.gi.GSound;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

