
# CloudProviders-0.3

![version](https://img.shields.io/npm/v/@girs/cloudproviders-0.3)
![downloads/week](https://img.shields.io/npm/dw/@girs/cloudproviders-0.3)


GJS TypeScript type definitions for CloudProviders-0.3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.4.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/cloudproviders-0.3
```

## Usage

Import it like any other module:
```ts
import CloudProviders from '@girs/cloudproviders-0.3';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/cloudproviders-0.3` or `@girs/cloudproviders-0.3/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/cloudproviders-0.3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/cloudproviders-0.3"],
  ...
}
```

The ambient module now resolves with types:

```ts
import CloudProviders from 'gi://CloudProviders?version=0.3';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/cloudproviders-0.3` or `@girs/cloudproviders-0.3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/cloudproviders-0.3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/cloudproviders-0.3"],
  ...
}
```

That form carries types as well:

```ts
const CloudProviders = imports.gi.CloudProviders;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

