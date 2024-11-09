
# St-15

![version](https://img.shields.io/npm/v/@girs/st-15)
![downloads/week](https://img.shields.io/npm/dw/@girs/st-15)


GJS TypeScript type definitions for St-15, generated from library version 15.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.19.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/st-15
```

## Usage

You can import this package into your project like this:
```ts
import St from '@girs/st-15';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/st-15` or `@girs/st-15/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/st-15'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/st-15"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import St from 'gi://St?version=15';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/st-15` or `@girs/st-15/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/st-15'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/st-15"],
  ...
}
```

Now you have also type support for this, too:

```ts
const St = imports.gi.St;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

