
# GtkFrdp-0.2

![version](https://img.shields.io/npm/v/@girs/gtkfrdp-0.2)
![downloads/week](https://img.shields.io/npm/dw/@girs/gtkfrdp-0.2)

GJS TypeScript type definitions for GtkFrdp-0.2 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.6.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/gtkfrdp-0.2
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/gtkfrdp-0.2` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/gtkfrdp-0.2/ambient` | only the `gi://` module declarations |
| `@girs/gtkfrdp-0.2/import` | only the `imports.gi` declarations |
| `@girs/gtkfrdp-0.2/gtkfrdp-0.2` | the namespace, without the side-effecting declarations |
| `@girs/gtkfrdp-0.2/vocabulary` | GIR-derived widget data: settable properties, enum nicks, slot candidates |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import GtkFrdp from '@girs/gtkfrdp-0.2';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/gtkfrdp-0.2';
```

```json
{ "include": ["@girs/gtkfrdp-0.2"] }
```

Then the runtime spelling type-checks:

```ts
import GtkFrdp from 'gi://GtkFrdp?version=0.2';
```

Referencing `@girs/gtkfrdp-0.2/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/gtkfrdp-0.2/import`:

```ts
const GtkFrdp = imports.gi.GtkFrdp;
```

## Widget vocabulary

`gtkfrdp-0.2` declares widgets, so it also carries what the GIR says about them, as
types and as values a test can read:

```ts
import type { Widgets, PropsOf } from '@girs/gtkfrdp-0.2/vocabulary';
import { OWN_PROPS, ENUM_NICKS, PROVENANCE } from '@girs/gtkfrdp-0.2/vocabulary';
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


