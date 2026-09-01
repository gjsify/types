
# GnomeBG-4.0

![version](https://img.shields.io/npm/v/@girs/gnomebg-4.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/gnomebg-4.0)

GJS TypeScript type definitions for GnomeBG-4.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.6.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/gnomebg-4.0
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/gnomebg-4.0` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/gnomebg-4.0/ambient` | only the `gi://` module declarations |
| `@girs/gnomebg-4.0/import` | only the `imports.gi` declarations |
| `@girs/gnomebg-4.0/gnomebg-4.0` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import GnomeBG from '@girs/gnomebg-4.0';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/gnomebg-4.0';
```

```json
{ "include": ["@girs/gnomebg-4.0"] }
```

Then the runtime spelling type-checks:

```ts
import GnomeBG from 'gi://GnomeBG?version=4.0';
```

Referencing `@girs/gnomebg-4.0/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/gnomebg-4.0/import`:

```ts
const GnomeBG = imports.gi.GnomeBG;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


