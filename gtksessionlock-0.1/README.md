
# GtkSessionLock-0.1

![version](https://img.shields.io/npm/v/@girs/gtksessionlock-0.1)
![downloads/week](https://img.shields.io/npm/dw/@girs/gtksessionlock-0.1)


GJS TypeScript type definitions for GtkSessionLock-0.1 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/gtksessionlock-0.1
```

## Usage

Import it like any other module:
```ts
import GtkSessionLock from '@girs/gtksessionlock-0.1';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/gtksessionlock-0.1` or `@girs/gtksessionlock-0.1/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gtksessionlock-0.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gtksessionlock-0.1"],
  ...
}
```

The ambient module now resolves with types:

```ts
import GtkSessionLock from 'gi://GtkSessionLock?version=0.1';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/gtksessionlock-0.1` or `@girs/gtksessionlock-0.1/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gtksessionlock-0.1'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gtksessionlock-0.1"],
  ...
}
```

That form carries types as well:

```ts
const GtkSessionLock = imports.gi.GtkSessionLock;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

