
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gnomeautoargtk-0.1-import.d.ts';
    
/**
 * GnomeAutoarGtk-0.1
 */

import type Gtk from '@girs/node-gtk-3.0';
import type xlib from '@girs/node-xlib-2.0';
import type Gdk from '@girs/node-gdk-3.0';
import type cairo from '@girs/node-cairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Atk from '@girs/node-atk-1.0';
import type GnomeAutoar from '@girs/node-gnomeautoar-0.1';

/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_advanced_new().
 * @param advanced a #GtkGrid returned by autoar_gtk_chooser_advanced_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @advanced, so @format and @filter are not modified.
 */
export function chooserAdvancedGet(advanced: Gtk.Widget, format: number, filter: number): boolean
/**
 * Create a #GtkGrid with two lists. One list shows all available formats,
 * and the other list shows all available filters.
 * @param defaultFormat an #AutoarFormat
 * @param defaultFilter an #AutoarFilter
 * @returns a new #GtkGrid widget
 */
export function chooserAdvancedNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_simple_new().
 * @param simple a #GtkComboBox returned by autoar_gtk_chooser_simple_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @simple, so @format and @filter are not modified.
 */
export function chooserSimpleGet(simple: Gtk.Widget, format: number, filter: number): boolean
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
 * @param defaultFormat an #AutoarFormat
 * @param defaultFilter an #AutoarFilter
 * @returns a new #GtkComboBox widget
 */
export function chooserSimpleNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
// END