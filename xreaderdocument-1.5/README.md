
# XreaderDocument-1.5

![version](https://img.shields.io/npm/v/@girs/xreaderdocument-1.5)
![downloads/week](https://img.shields.io/npm/dw/@girs/xreaderdocument-1.5)

GJS TypeScript type definitions for XreaderDocument-1.5, generated from library version 4.6.4 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.7.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/xreaderdocument-1.5
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/xreaderdocument-1.5` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/xreaderdocument-1.5/ambient` | only the `gi://` module declarations |
| `@girs/xreaderdocument-1.5/import` | only the `imports.gi` declarations |
| `@girs/xreaderdocument-1.5/xreaderdocument-1.5` | the namespace, without the side-effecting declarations |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import XreaderDocument from '@girs/xreaderdocument-1.5';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/xreaderdocument-1.5';
```

```json
{ "include": ["@girs/xreaderdocument-1.5"] }
```

Then the runtime spelling type-checks:

```ts
import XreaderDocument from 'gi://XreaderDocument?version=1.5';
```

Referencing `@girs/xreaderdocument-1.5/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/xreaderdocument-1.5/import`:

```ts
const XreaderDocument = imports.gi.XreaderDocument;
```

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


