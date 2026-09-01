
# GcrUi-3

![version](https://img.shields.io/npm/v/@girs/gcrui-3)
![downloads/week](https://img.shields.io/npm/dw/@girs/gcrui-3)

GJS TypeScript type definitions for GcrUi-3 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v4.5.0.

This package contains type declarations only. It ships no runtime code, so it adds
nothing to your program and works with any bundler or none at all.

## Install

```bash
npm install @girs/gcrui-3
```

Any package manager works. The package has no dependencies beyond other `@girs/*`
type packages.

## What it exports

| Import | What you get |
|---|---|
| `@girs/gcrui-3` | the namespace as a default export, plus the ambient and global declarations |
| `@girs/gcrui-3/ambient` | only the `gi://` module declarations |
| `@girs/gcrui-3/import` | only the `imports.gi` declarations |
| `@girs/gcrui-3/gcrui-3` | the namespace, without the side-effecting declarations |
| `@girs/gcrui-3/vocabulary` | GIR-derived widget data: settable properties, enum nicks, slot candidates |

## Three ways to import

Which one you use depends on how you write imports elsewhere, not on your toolchain.

### As a module

```ts
import GcrUi from '@girs/gcrui-3';
```

### As `gi://`

GJS resolves `gi://` at runtime. To give it types, reference the package once, either
from your entry point or from `tsconfig.json`:

```ts
import '@girs/gcrui-3';
```

```json
{ "include": ["@girs/gcrui-3"] }
```

Then the runtime spelling type-checks:

```ts
import GcrUi from 'gi://GcrUi?version=3';
```

Referencing `@girs/gcrui-3/ambient` instead pulls in these declarations
alone. See [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules).

### As `imports.gi`

GJS's global object works the same way, via `@girs/gcrui-3/import`:

```ts
const GcrUi = imports.gi.GcrUi;
```

## Widget vocabulary

`gcrui-3` declares widgets, so it also carries what the GIR says about them, as
types and as values a test can read:

```ts
import type { Widgets, PropsOf } from '@girs/gcrui-3/vocabulary';
import { OWN_PROPS, ENUM_NICKS, PROVENANCE } from '@girs/gcrui-3/vocabulary';
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


