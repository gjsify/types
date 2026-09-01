
# Gcr-3

![version](https://img.shields.io/npm/v/@girs/gcr-3)
![downloads/week](https://img.shields.io/npm/dw/@girs/gcr-3)

GJS TypeScript type definitions for Gcr-3, generated from library version 3.41.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.5.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/gcr-3
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/gcr-3` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/gcr-3/ambient` | only the `gi://` module declarations |
| `@girs/gcr-3/import` | only the `imports.gi` declarations |
| `@girs/gcr-3/gcr-3` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import Gcr from '@girs/gcr-3';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/gcr-3';
```

```json
{ "include": ["@girs/gcr-3"] }
```

Then the runtime spelling type-checks:

```ts
import Gcr from 'gi://Gcr?version=3';
```

Referencing `@girs/gcr-3/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/gcr-3/import`:

```ts
const Gcr = imports.gi.Gcr;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


