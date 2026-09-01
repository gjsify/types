
# St-12

![version](https://img.shields.io/npm/v/@girs/st-12)
![downloads/week](https://img.shields.io/npm/dw/@girs/st-12)

GJS TypeScript type definitions for St-12 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.6.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/st-12
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/st-12` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/st-12/ambient` | only the `gi://` module declarations |
| `@girs/st-12/import` | only the `imports.gi` declarations |
| `@girs/st-12/st-12` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import St from '@girs/st-12';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/st-12';
```

```json
{ "include": ["@girs/st-12"] }
```

Then the runtime spelling type-checks:

```ts
import St from 'gi://St?version=12';
```

Referencing `@girs/st-12/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/st-12/import`:

```ts
const St = imports.gi.St;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


