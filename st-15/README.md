
# St-15

![version](https://img.shields.io/npm/v/@girs/st-15)
![downloads/week](https://img.shields.io/npm/dw/@girs/st-15)


GJS TypeScript type definitions for St-15 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/st-15
```

## Usage

Import it like any other module:
```ts
import St from '@girs/st-15';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/st-15` or `@girs/st-15/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/st-15'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/st-15"],
  ...
}
```

The ambient module now resolves with types:

```ts
import St from 'gi://St?version=15';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/st-15` or `@girs/st-15/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/st-15'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/st-15"],
  ...
}
```

That form carries types as well:

```ts
const St = imports.gi.St;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

