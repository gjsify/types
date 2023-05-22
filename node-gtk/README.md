
# node-gtk

Node.js TypeScript type definitions for node-gtk using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.0.0.

[node-gtk](https://github.com/romgrk/node-gtk) is a [GObject Introspection](https://gi.readthedocs.io/en/latest/) import library for Node.js. Using node-gtk with the type definitions in this NPM package, you can build GTK applications in JavaScript or TypeScript with type checking, better autocompletion and inline documentations.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @girs/node-gtk
```


## Usage

You can import this package into your project like this:
```ts
import NodeGtk from '@girs/node-gtk';
```

Or if you prefer CommonJS, you can also use this:
```ts
const NodeGtk = require('@girs/node-gtk');
```

### Ambient Modules

You can import core [ambient module](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) types.
For this you need to include the `@girs/node-gtk` or `@girs/node-gtk/ambient` in your `tsconfig` or entry point Typescript file:
    
`index.ts`:
```ts
import '@girs/node-gtk'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@girs/node-gtk"],
  ...
}
```

Now you can import `node-gtk` with Typescript support:
```ts
const gi = require('node-gtk');
gi.startLoop();
```

If you want to have types for [GObject Introspection](https://gi.readthedocs.io/en/latest/) modules, you have to add them to your dependencies and import them as well, see the description of these modules, e.g. [node-gtk-4.0](https://www.npmjs.com/package/@girs/node-gtk-4.0), [node-gio-2.0](https://www.npmjs.com/package/@girs/node-gio-2.0), [node-adw-1](https://www.npmjs.com/package/@girs/node-adw-1) and [much more](https://github.com/gjsify/types).

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

