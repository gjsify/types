
# Cally-7

![version](https://img.shields.io/npm/v/@girs/cally-7)
![downloads/week](https://img.shields.io/npm/dw/@girs/cally-7)

GJS TypeScript type definitions for Cally-7 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.6.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/cally-7
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/cally-7` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/cally-7/ambient` | only the `gi://` module declarations |
| `@girs/cally-7/import` | only the `imports.gi` declarations |
| `@girs/cally-7/cally-7` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import Cally from '@girs/cally-7';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/cally-7';
```

```json
{ "include": ["@girs/cally-7"] }
```

Then the runtime spelling type-checks:

```ts
import Cally from 'gi://Cally?version=7';
```

Referencing `@girs/cally-7/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/cally-7/import`:

```ts
const Cally = imports.gi.Cally;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


