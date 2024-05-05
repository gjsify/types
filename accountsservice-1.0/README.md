
# AccountsService-1.0

![version](https://img.shields.io/npm/v/@girs/accountsservice-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/accountsservice-1.0)


GJS TypeScript type definitions for AccountsService-1.0, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.5.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/accountsservice-1.0
```

## Usage

You can import this package into your project like this:
```ts
import AccountsService from '@girs/accountsservice-1.0';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/accountsservice-1.0` or `@girs/accountsservice-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/accountsservice-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/accountsservice-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import AccountsService from 'gi://AccountsService?version=1.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/accountsservice-1.0` or `@girs/accountsservice-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/accountsservice-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/accountsservice-1.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const AccountsService = imports.gi.AccountsService;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

