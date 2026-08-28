
# FolksLibsocialweb-0.6

![version](https://img.shields.io/npm/v/@girs/folkslibsocialweb-0.6)
![downloads/week](https://img.shields.io/npm/dw/@girs/folkslibsocialweb-0.6)


GJS TypeScript type definitions for FolksLibsocialweb-0.6 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/folkslibsocialweb-0.6
```

## Usage

Import it like any other module:
```ts
import FolksLibsocialweb from '@girs/folkslibsocialweb-0.6';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/folkslibsocialweb-0.6` or `@girs/folkslibsocialweb-0.6/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/folkslibsocialweb-0.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/folkslibsocialweb-0.6"],
  ...
}
```

The ambient module now resolves with types:

```ts
import FolksLibsocialweb from 'gi://FolksLibsocialweb?version=0.6';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/folkslibsocialweb-0.6` or `@girs/folkslibsocialweb-0.6/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/folkslibsocialweb-0.6'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/folkslibsocialweb-0.6"],
  ...
}
```

That form carries types as well:

```ts
const FolksLibsocialweb = imports.gi.FolksLibsocialweb;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

