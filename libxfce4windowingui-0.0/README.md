
# Libxfce4windowingui-0.0

![version](https://img.shields.io/npm/v/@girs/libxfce4windowingui-0.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/libxfce4windowingui-0.0)


GJS TypeScript type definitions for Libxfce4windowingui-0.0, generated from library version 4.19.3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.0.0-beta.6.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/libxfce4windowingui-0.0
```

## Usage

You can import this package into your project like this:
```ts
import Libxfce4windowingui from '@girs/libxfce4windowingui-0.0';
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/libxfce4windowingui-0.0` or `@girs/libxfce4windowingui-0.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/libxfce4windowingui-0.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/libxfce4windowingui-0.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Libxfce4windowingui from 'gi://Libxfce4windowingui?version=0.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@girs/libxfce4windowingui-0.0` or `@girs/libxfce4windowingui-0.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/libxfce4windowingui-0.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/libxfce4windowingui-0.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Libxfce4windowingui = imports.gi.Libxfce4windowingui;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

