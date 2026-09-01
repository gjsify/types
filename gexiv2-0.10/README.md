
# GExiv2-0.10

![version](https://img.shields.io/npm/v/@girs/gexiv2-0.10)
![downloads/week](https://img.shields.io/npm/dw/@girs/gexiv2-0.10)

GJS TypeScript type definitions for GExiv2-0.10, generated from library version 0.14.7 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.6.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/gexiv2-0.10
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/gexiv2-0.10` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/gexiv2-0.10/ambient` | only the `gi://` module declarations |
| `@girs/gexiv2-0.10/import` | only the `imports.gi` declarations |
| `@girs/gexiv2-0.10/gexiv2-0.10` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import GExiv2 from '@girs/gexiv2-0.10';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/gexiv2-0.10';
```

```json
{ "include": ["@girs/gexiv2-0.10"] }
```

Then the runtime spelling type-checks:

```ts
import GExiv2 from 'gi://GExiv2?version=0.10';
```

Referencing `@girs/gexiv2-0.10/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/gexiv2-0.10/import`:

```ts
const GExiv2 = imports.gi.GExiv2;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


