
# EDataServerUI4-1.0

Node.js TypeScript type definitions for EDataServerUI4-1.0, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-edataserverui4-1.0
```

## Usage

You can import this package into your project like this:
```ts
import EDataServerUI4 from '@girs/node-edataserverui4-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const EDataServerUI4 = require('@girs/node-edataserverui4-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@girs/node-edataserverui4-1.0` or `@girs/node-edataserverui4-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@girs/node-edataserverui4-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-edataserverui4-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
const gi = require('node-gtk')
const EDataServerUI4 = gi.require('EDataServerUI4', '1.0')
```


### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

