
# OSTree-1.0

![version](https://img.shields.io/npm/v/@girs/ostree-1.0)
![downloads/week](https://img.shields.io/npm/dw/@girs/ostree-1.0)

GJS TypeScript type definitions for OSTree-1.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.6.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/ostree-1.0
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/ostree-1.0` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/ostree-1.0/ambient` | only the `gi://` module declarations |
| `@girs/ostree-1.0/import` | only the `imports.gi` declarations |
| `@girs/ostree-1.0/ostree-1.0` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import OSTree from '@girs/ostree-1.0';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/ostree-1.0';
```

```json
{ "include": ["@girs/ostree-1.0"] }
```

Then the runtime spelling type-checks:

```ts
import OSTree from 'gi://OSTree?version=1.0';
```

Referencing `@girs/ostree-1.0/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/ostree-1.0/import`:

```ts
const OSTree = imports.gi.OSTree;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


