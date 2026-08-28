
# SocialWebClient-0.25

![version](https://img.shields.io/npm/v/@girs/socialwebclient-0.25)
![downloads/week](https://img.shields.io/npm/dw/@girs/socialwebclient-0.25)


GJS TypeScript type definitions for SocialWebClient-0.25 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.3.0.

## Install

Install the type definitions with npm:
```bash
npm install @girs/socialwebclient-0.25
```

## Usage

Import it like any other module:
```ts
import SocialWebClient from '@girs/socialwebclient-0.25';
```

### Ambient Modules

[Ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) let you write the same import you would in plain JavaScript.
For this you need to include `@girs/socialwebclient-0.25` or `@girs/socialwebclient-0.25/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/socialwebclient-0.25'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/socialwebclient-0.25"],
  ...
}
```

The ambient module now resolves with types:

```ts
import SocialWebClient from 'gi://SocialWebClient?version=0.25';
```

### Global import

GJS's global `imports.gi` works too, with types.
For this you need to include `@girs/socialwebclient-0.25` or `@girs/socialwebclient-0.25/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/socialwebclient-0.25'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/socialwebclient-0.25"],
  ...
}
```

That form carries types as well:

```ts
const SocialWebClient = imports.gi.SocialWebClient;
```

### Bundle

Most projects want a bundler. [esbuild](https://esbuild.github.io/) is the smallest thing that works; the [examples directory](https://github.com/gjsify/ts-for-gir/tree/main/examples) has setups for several others.

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

