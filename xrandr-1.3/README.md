
# xrandr-1.3

![version](https://img.shields.io/npm/v/@girs/xrandr-1.3)
![downloads/week](https://img.shields.io/npm/dw/@girs/xrandr-1.3)


GJS TypeScript type definitions for xrandr-1.3, generated from library version 1.3.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.20.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/xrandr-1.3
```

## Usage

You can import this package into your project like this:
```ts
import xrandr from '@girs/xrandr-1.3';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/xrandr-1.3` or `@girs/xrandr-1.3/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xrandr-1.3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xrandr-1.3"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import xrandr from 'gi://xrandr?version=1.3';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/xrandr-1.3` or `@girs/xrandr-1.3/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/xrandr-1.3'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/xrandr-1.3"],
  ...
}
```

Now you have also type support for this, too:

```ts
const xrandr = imports.gi.xrandr;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

