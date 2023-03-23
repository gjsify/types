
# P11Kit-1.0

GJS TypeScript type definitions for P11Kit-1.0, generated from library version 1.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gjs) v3.0.0-beta.12.

Provides a way to load and enumerate PKCS#11 modules. Provides a standard configuration setup for installing PKCS#11 modules in such a way that they're discoverable.

## Install

To use this type definitions, install them with NPM like this:
```bash
npm install @girs/p11kit-1.0
```

## Usage

You can import this package into your project like this:
```ts
import P11Kit from '@girs/p11kit-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const P11Kit = require('@girs/p11kit-1.0');
```

If you use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules), you can also import this module like you would do this in JavaScript:

```ts
import P11Kit from 'gi://P11Kit?version=1.0';
```

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).