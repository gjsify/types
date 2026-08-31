
# ClutterX11-7

![version](https://img.shields.io/npm/v/@girs/clutterx11-7)
![downloads/week](https://img.shields.io/npm/dw/@girs/clutterx11-7)


GJS TypeScript type definitions for ClutterX11-7 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/clutterx11-7
```

## Usage

Import it like any other module:
```ts
import ClutterX11 from '@girs/clutterx11-7';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/clutterx11-7` or `@girs/clutterx11-7/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/clutterx11-7'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/clutterx11-7"],
  ...
}
```

The ambient module now resolves with types:

```ts
import ClutterX11 from 'gi://ClutterX11?version=7';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/clutterx11-7` or `@girs/clutterx11-7/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/clutterx11-7'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/clutterx11-7"],
  ...
}
```

That form carries types as well:

```ts
const ClutterX11 = imports.gi.ClutterX11;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

