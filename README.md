# GObject Introspection TypeScript Type Definitions

This repository contains TypeScript type definition files for [GObject introspection](https://gi.readthedocs.io/en/latest/) libraries targeting [GJS](https://gitlab.gnome.org/GNOME/gjs/) and [node-gtk](https://github.com/romgrk/node-gtk). These types are generated using [ts-for-gir](https://github.com/gjsify/ts-for-gir), a powerful TypeScript type definition generator for GObject Introspection GIR files.

Developers can now benefit from TypeScript's strong typing and improved code navigation, making it easier to build robust and powerful applications with GJS.

## Available Type Definitions

The pre-generated type definitions can be found in the [types](https://github.com/gjsify/types) repository. The repository includes types for various GObject Introspection modules, including:

- [GJS itself](https://www.npmjs.com/package/@girs/gjs)
- [Gtk-4.0](https://www.npmjs.com/package/@girs/gtk-4.0)
- [Adwaita](https://www.npmjs.com/package/@girs/adw-1)
- [Gio](https://www.npmjs.com/package/@girs/gio-2.0)
- [GLib](https://www.npmjs.com/package/@girs/glib-2.0)
- [GObject](https://www.npmjs.com/package/@girs/gobject-2.0)
- and [many more](https://github.com/gjsify/types)

> The types are also available pre-generated for Node.js, see for this [node-gtk](https://www.npmjs.com/package/@girs/node-gtk), [node-gtk-4.0](https://www.npmjs.com/package/@girs/node-gtk-4.0), [node-adw-1](https://www.npmjs.com/package/@girs/node-adw-1), [node-gio-2.0](https://www.npmjs.com/package/@girs/node-gio-2.0) and so on..

## Usage

To use these type definitions in your GJS project, you can install them via npm or yarn:

```bash
npm install @girs/gjs @girs/gtk-4.0 --save
# or
yarn add @girs/gjs @girs/gtk-4.0
```