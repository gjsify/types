
# Clutter-4

![version](https://img.shields.io/npm/v/@girs/clutter-4)
![downloads/week](https://img.shields.io/npm/dw/@girs/clutter-4)

GJS TypeScript type definitions for Clutter-4 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.7.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/clutter-4
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/clutter-4` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/clutter-4/ambient` | only the `gi://` module declarations |
| `@girs/clutter-4/import` | only the `imports.gi` declarations |
| `@girs/clutter-4/clutter-4` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import Clutter from '@girs/clutter-4';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/clutter-4';
```

```json
{ "include": ["@girs/clutter-4"] }
```

Then the runtime spelling type-checks:

```ts
import Clutter from 'gi://Clutter?version=4';
```

Referencing `@girs/clutter-4/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/clutter-4/import`:

```ts
const Clutter = imports.gi.Clutter;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


