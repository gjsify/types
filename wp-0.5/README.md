
# Wp-0.5

![version](https://img.shields.io/npm/v/@girs/wp-0.5)
![downloads/week](https://img.shields.io/npm/dw/@girs/wp-0.5)


GJS TypeScript type definitions for Wp-0.5 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/wp-0.5
```

## Usage

Import it like any other module:
```ts
import Wp from '@girs/wp-0.5';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/wp-0.5` or `@girs/wp-0.5/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/wp-0.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/wp-0.5"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Wp from 'gi://Wp?version=0.5';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/wp-0.5` or `@girs/wp-0.5/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/wp-0.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/wp-0.5"],
  ...
}
```

That form carries types as well:

```ts
const Wp = imports.gi.Wp;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

