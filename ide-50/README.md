
# Ide-50

![version](https://img.shields.io/npm/v/@girs/ide-50)
![downloads/week](https://img.shields.io/npm/dw/@girs/ide-50)


GJS TypeScript type definitions for Ide-50, generated from library version 50.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/ide-50
```

## Usage

Import it like any other module:
```ts
import Ide from '@girs/ide-50';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/ide-50` or `@girs/ide-50/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/ide-50'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/ide-50"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Ide from 'gi://Ide?version=50';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/ide-50` or `@girs/ide-50/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/ide-50'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/ide-50"],
  ...
}
```

That form carries types as well:

```ts
const Ide = imports.gi.Ide;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

