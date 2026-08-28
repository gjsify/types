
# XreaderView-1.5

![version](https://img.shields.io/npm/v/@girs/xreaderview-1.5)
![downloads/week](https://img.shields.io/npm/dw/@girs/xreaderview-1.5)


GJS TypeScript type definitions for XreaderView-1.5 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/xreaderview-1.5
```

## Usage

Import it like any other module:
```ts
import XreaderView from '@girs/xreaderview-1.5';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/xreaderview-1.5` or `@girs/xreaderview-1.5/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xreaderview-1.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xreaderview-1.5"],
  ...
}
```

The ambient module now resolves with types:

```ts
import XreaderView from 'gi://XreaderView?version=1.5';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/xreaderview-1.5` or `@girs/xreaderview-1.5/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xreaderview-1.5'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xreaderview-1.5"],
  ...
}
```

That form carries types as well:

```ts
const XreaderView = imports.gi.XreaderView;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

