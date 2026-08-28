
# GMime-2.6

![version](https://img.shields.io/npm/v/@girs/gmime-2.6)
![downloads/week](https://img.shields.io/npm/dw/@girs/gmime-2.6)


GJS TypeScript type definitions for GMime-2.6, generated from library version 2.6.23 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/gmime-2.6
```

## Usage

Import it like any other module:
```ts
import GMime from '@girs/gmime-2.6';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/gmime-2.6` or `@girs/gmime-2.6/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gmime-2.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gmime-2.6"],
  ...
}
```

The ambient module now resolves with types:

```ts
import GMime from 'gi://GMime?version=2.6';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/gmime-2.6` or `@girs/gmime-2.6/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/gmime-2.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/gmime-2.6"],
  ...
}
```

That form carries types as well:

```ts
const GMime = imports.gi.GMime;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

