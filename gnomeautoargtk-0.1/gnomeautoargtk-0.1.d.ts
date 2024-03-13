
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomeautoargtk-0.1-ambient.d.ts';
import './gnomeautoargtk-0.1-import.d.ts';
/**
 * GnomeAutoarGtk-0.1
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type GnomeAutoar from '@girs/gnomeautoar-0.1';

export namespace GnomeAutoarGtk {

/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_advanced_new().
 * @param advanced a #GtkGrid returned by autoar_gtk_chooser_advanced_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @advanced, so @format and @filter are not modified.
 */
function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean
/**
 * Create a #GtkGrid with two lists. One list shows all available formats,
 * and the other list shows all available filters.
 * @param default_format an #AutoarFormat
 * @param default_filter an #AutoarFilter
 * @returns a new #GtkGrid widget
 */
function chooser_advanced_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget
/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_simple_new().
 * @param simple a #GtkComboBox returned by autoar_gtk_chooser_simple_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @simple, so @format and @filter are not modified.
 */
function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean
/**
 * Create a #GtkComboBox with a list of common archive format. There is also
 * an option called "Other format…", which will use
 * autoar_gtk_chooser_advanced_new() and
 * autoar_gtk_chooser_advanced_get() to select less common archive
 * format. Arguments `default_format` and `default_filter` are the default archive
 * format selected on the returned widget. You may want to get the preferred
 * format of users using autoar_pref_get_default_format() and
 * autoar_pref_get_default_filter(), or just set them to 1 to select
 * the default archive format.
 * @param default_format an #AutoarFormat
 * @param default_filter an #AutoarFilter
 * @returns a new #GtkComboBox widget
 */
function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget
/**
 * Name of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GnomeAutoarGtk;
// END