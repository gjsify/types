
# Gucharmap-2.90

![version](https://img.shields.io/npm/v/@girs/gucharmap-2.90)
![downloads/week](https://img.shields.io/npm/dw/@girs/gucharmap-2.90)

GJS TypeScript type definitions for Gucharmap-2.90, generated from library version 17.0.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.5.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/gucharmap-2.90
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/gucharmap-2.90` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/gucharmap-2.90/ambient` | only the `gi://` module declarations |
| `@girs/gucharmap-2.90/import` | only the `imports.gi` declarations |
| `@girs/gucharmap-2.90/gucharmap-2.90` | the namespace, without the side-effecting declarations |
| `@girs/gucharmap-2.90/vocabulary` | GIR-derived widget data: settable properties, enum nicks, slot candidates |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import Gucharmap from '@girs/gucharmap-2.90';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/gucharmap-2.90';
```

```json
{ "include": ["@girs/gucharmap-2.90"] }
```

Then the runtime spelling type-checks:

```ts
import Gucharmap from 'gi://Gucharmap?version=2.90';
```

Referencing `@girs/gucharmap-2.90/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/gucharmap-2.90/import`:

```ts
const Gucharmap = imports.gi.Gucharmap;
```

## Widget vocabulary

`gucharmap-2.90` declares widgets, so it also carries what the GIR says about them, as
types and as values a test can read:

```ts
import type { Widgets, PropsOf } from '@girs/gucharmap-2.90/vocabulary';
import { OWN_PROPS, ENUM_NICKS, PROVENANCE } from '@girs/gucharmap-2.90/vocabulary';
```

Properties are keyed the way GObject registered them, writable-only and optional, so they
match `g_object_set`, GtkBuilder XML and Blueprint. `PROVENANCE.libraryVersion` names the
library release this was generated from, which lets a check tell "newer than what is
installed" from "wrong".

This subpath answers what the GIR says, not what the installed library has. For the
second question, ask the library.

## Building

The declarations need no build step. If you bundle, every bundler works, since there is
no runtime code to resolve. The [examples](https://github.com/gjsify/ts-for-gir/tree/main/examples)
show working setups for several.

## Other packages

Every pre-generated package is at [gjsify/types](https://github.com/gjsify/types).


