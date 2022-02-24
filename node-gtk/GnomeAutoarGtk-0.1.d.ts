/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeAutoarGtk-0.1
 */

import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type GnomeAutoar from './GnomeAutoar-0.1';

export namespace GnomeAutoarGtk {

function chooserAdvancedGet(advanced: Gtk.Widget, format: number, filter: number): boolean
function chooserAdvancedNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
function chooserSimpleGet(simple: Gtk.Widget, format: number, filter: number): boolean
function chooserSimpleNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
}
export default GnomeAutoarGtk;