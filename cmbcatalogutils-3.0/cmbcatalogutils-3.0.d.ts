/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace CmbCatalogUtils {
    /**
     * CmbCatalogUtils-3.0
     */

    /**
     * @param accessible
     */
    function a11y_action_get_name(accessible: Atk.Object): string;
    /**
     * Return internal child
     * @param buildable Object to check
     * @param childname internal child
     * @returns the internal child of the buildable object
     */
    function buildable_get_internal_child<T = GObject.Object>(buildable: Gtk.Buildable, childname: string): T;
    /**
     * Return the list of properties declared in `name`
     * @param name Class name
     * @returns class properties
     */
    function get_class_properties(name: string): GObject.ParamSpec[];
    /**
     * Return the list of properties declared in `name` iface
     * @param name Interface type name
     * @returns iface properties
     */
    function get_iface_properties(name: string): GObject.ParamSpec[];
    /**
     * Return whether buildable implements `add_child()` or not
     * @param buildable Object to check
     */
    function implements_buildable_add_child(buildable: GObject.Object): boolean;
    /**
     * @param gtype
     * @param default_value
     */
    function pspec_enum_get_default_nick(gtype: GObject.GType, default_value: number): string;
    /**
     * @param gtype
     * @param default_value
     */
    function pspec_flags_get_default_nick(gtype: GObject.GType, default_value: number): string;
    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default CmbCatalogUtils;

// END
