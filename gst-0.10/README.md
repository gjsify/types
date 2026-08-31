
# Gst-0.10

![version](https://img.shields.io/npm/v/@girs/gst-0.10)
![downloads/week](https://img.shields.io/npm/dw/@girs/gst-0.10)


GJS TypeScript type definitions for Gst-0.10, generated from library version 0.10.29 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/gst-0.10
```

## Usage

Import it like any other module:
```ts
import Gst from '@girs/gst-0.10';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/gst-0.10` or `@girs/gst-0.10/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gst-0.10'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gst-0.10"],
  ...
}
```

The ambient module now resolves with types:

```ts
import Gst from 'gi://Gst?version=0.10';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/gst-0.10` or `@girs/gst-0.10/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gst-0.10'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gst-0.10"],
  ...
}
```

That form carries types as well:

```ts
const Gst = imports.gi.Gst;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

