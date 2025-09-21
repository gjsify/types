
# SocialWebClient-0.25

![version](https://img.shields.io/npm/v/@girs/socialwebclient-0.25)
![downloads/week](https://img.shields.io/npm/dw/@girs/socialwebclient-0.25)


GJS TypeScript type definitions for SocialWebClient-0.25, generated from library version 0.25.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.38.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/socialwebclient-0.25
```

## Usage

You can import this package into your project like this:
```ts
import SocialWebClient from '@girs/socialwebclient-0.25';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
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

Now you can import the ambient module with TypeScript support: 

```ts
import SocialWebClient from 'gi://SocialWebClient?version=0.25';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
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

Now you have also type support for this, too:

```ts
const SocialWebClient = imports.gi.SocialWebClient;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

