/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './panelapplet-4.0-ambient.d.ts';
import './panelapplet-4.0-import.d.ts';
/**
 * PanelApplet-4.0
 */

import type xlib from '@girs/xlib-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type GConf from '@girs/gconf-2.0';

export namespace PanelApplet {
    /**
     * Type defining the orientation of the applet. The values may seem backward
     * (e.g. %PANEL_APPLET_ORIENT_RIGHT means the panel is on the left side), but
     * this represents the direction the applet is oriented to.
     */
    enum AppletOrient {
        UP,
        DOWN,
        LEFT,
        RIGHT,
    }
    const APPLET_FLAGS_ALL: number;
    interface AppletFactoryCallback {
        (applet: Applet, iid: string): boolean;
    }
    /**
     * Flags to be used with panel_applet_get_flags()/panel_applet_set_flags(), to
     * indicate to the panel a specific behavior requested by the #PanelApplet.
     */
    enum AppletFlags {
        FLAGS_NONE,
        EXPAND_MAJOR,
        EXPAND_MINOR,
        HAS_HANDLE,
    }
    module Applet {
        // Signal callback interfaces

        interface ChangeBackground {
            (pattern: cairo.Pattern): void;
        }

        interface ChangeOrient {
            (orient: number): void;
        }

        interface ChangeSize {
            (size: number): void;
        }

        interface MoveFocusOutOfApplet {
            (direction: Gtk.DirectionType): void;
        }

        // Constructor properties interface
    }

    class Applet extends Gtk.EventBox {
        // Own properties of PanelApplet-4.0.Applet

        /**
         * The #PanelAppletFlags of the applet.
         */
        flags: number;
        /**
         * Whether the panel the applet is on is locked down.
         */
        locked_down: boolean;
        /**
         * Whether the panel the applet is on is locked down.
         */
        lockedDown: boolean;
        /**
         * The #PanelAppletOrient of the applet.
         *
         * This property gets set when the applet gets embedded, and can change
         * when the panel position changes.
         */
        orient: number;
        /**
         * The GConf path to the per-instance settings of the applet.
         *
         * This property gets set when the applet gets embedded.
         */
        prefs_key: string;
        /**
         * The GConf path to the per-instance settings of the applet.
         *
         * This property gets set when the applet gets embedded.
         */
        prefsKey: string;
        /**
         * The GSettings path to the per-instance settings of the applet.
         *
         * This property gets set when the applet gets embedded.
         */
        settings_path: string;
        /**
         * The GSettings path to the per-instance settings of the applet.
         *
         * This property gets set when the applet gets embedded.
         */
        settingsPath: string;
        /**
         * The size of the panel the applet is on. For a horizontal panel, the
         * size if the height of the panel; for a vertical panel, the size is
         * the width of the panel.
         *
         * This property gets set when the applet gets embedded, and can change
         * when the panel size changes.
         */
        size: number;
        /**
         * The size hints set for the applet. See panel_applet_set_size_hints().
         */
        size_hints: any;
        /**
         * The size hints set for the applet. See panel_applet_set_size_hints().
         */
        sizeHints: any;

        // Own fields of PanelApplet-4.0.Applet

        event_box: Gtk.EventBox;

        // Owm methods of PanelApplet-4.0.Applet

        /**
         * Creates the applet factory for `factory_id,` so that the factory can create
         * instances of the applet types it is associated with.
         *
         * Applet instances created by the applet factory will use `applet_type` as
         * GType. Unless you subclass #PanelApplet, you should use %PANEL_TYPE_APPLET
         * as `applet_type`.
         *
         * On creation of the applet instances, `callback` is called to setup the
         * applet. If `callback` returns %FALSE, the creation of the applet instance is
         * cancelled.
         *
         * If using C, it is recommended to use #PANEL_APPLET_OUT_PROCESS_FACTORY
         * instead as it will create a main() function for you.
         *
         * It can only be used once, and is incompatible with the use of
         * %PANEL_APPLET_IN_PROCESS_FACTORY and %PANEL_APPLET_OUT_PROCESS_FACTORY.
         * @param factory_id identifier of an applet factory.
         * @param applet_type GType of the applet this factory creates.
         * @param callback callback to be called when a new applet is created.
         */
        static factory_main(factory_id: string, applet_type: GObject.GType, callback: AppletFactoryCallback): number;

        // Owm methods of PanelApplet-4.0.Applet

        /**
         * Associates the per-instance GConf directory of `applet` to the schemas
         * defined in `schema_dir`. This must be called if the applet will save
         * per-instance settings, to ensure that each key in the per-instance GConf
         * directory has a defined type, sane default and documentation.
         * @param schema_dir a GConf path of a schema directory.
         */
        add_preferences(schema_dir: string): void;
        /**
         * Convenience wrapper around gconf_client_get_bool() to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of @key.
         */
        gconf_get_bool(key: string): boolean;
        /**
         * Convenience wrapper around gconf_client_get_float() to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of @key.
         */
        gconf_get_float(key: string): number;
        /**
         * Returns the full GConf path of `key,` in the per-instance GConf directory of
         * `applet`. The string should be freed by the caller.
         * @param key a GConf key name.
         */
        gconf_get_full_key(key: string): string;
        /**
         * Convenience wrapper around gconf_client_get_int() to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of @key.
         */
        gconf_get_int(key: string): number;
        /**
         * Convenience wrapper around gconf_client_get_string() to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of @key. The string should be freed by the caller.
         */
        gconf_get_string(key: string): string;
        /**
         * Convenience wrapper around gconf_client_get_value() to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of @key.
         */
        gconf_get_value(key: string): GConf.Value;
        /**
         * Convenience wrapper around gconf_client_set_bool() to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_bool new value for @key.
         */
        gconf_set_bool(key: string, the_bool: boolean): void;
        /**
         * Convenience wrapper around gconf_client_set_float() to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_float new value for @key.
         */
        gconf_set_float(key: string, the_float: number): void;
        /**
         * Convenience wrapper around gconf_client_set_int() to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_int new value for @key.
         */
        gconf_set_int(key: string, the_int: number): void;
        /**
         * Convenience wrapper around gconf_client_set_string() to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_string new value for @key.
         */
        gconf_set_string(key: string, the_string: string): void;
        /**
         * Convenience wrapper around gconf_client_set_value() to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param value new value for @key.
         */
        gconf_set_value(key: string, value: GConf.Value): void;
        /**
         * Gets the background pattern for `applet,` or %NULL if there is none.
         * @returns a new #cairo_pattern_t to use as background for @applet.
         */
        get_background(): cairo.Pattern;
        /**
         * Gets the #PanelAppletFlags of `applet`.
         * @returns the #PanelAppletFlags of @applet.
         */
        get_flags(): AppletFlags;
        /**
         * Gets whether the panel `applet` is on is locked down or not. A locked down
         * applet should not allow any change to its configuration.
         * @returns %TRUE if the panel @applet is on is locked down, %FALSE otherwise.
         */
        get_locked_down(): boolean;
        /**
         * Gets the #PanelAppletOrient of `applet`.
         * @returns the #PanelAppletOrient of @applet.
         */
        get_orient(): AppletOrient;
        /**
         * Gets the GConf path to the per-instance settings of `applet`.
         * @returns a copy of the GConf path to the per-instance settings of @applet.
         */
        get_preferences_key(): string;
        /**
         * Gets the size of the panel `applet` is on. For a horizontal panel, the
         * size if the height of the panel; for a vertical panel, the size is the width
         * of the panel.
         * @returns the size of the panel @applet is on.
         */
        get_size(): number;
        /**
         * Requests focus for `applet`. There is no guarantee that `applet` will
         * successfully get focus after that call.
         * @param timestamp the timestamp of the user interaction (typically a button or key press event) which triggered this call.
         */
        request_focus(timestamp: number): void;
        /**
         * Configure #PanelApplet to automatically draw the background of the applet on
         * `widget`. It is generally enough to call this function with `applet` as
         * `widget`.
         * @param widget a #GtkWidget.
         */
        set_background_widget(widget: Gtk.Widget): void;
        /**
         * Sets the #PanelAppletFlags of `applet`. Most of the time, at least
         * %PANEL_APPLET_EXPAND_MINOR should be used.
         * @param flags #PanelAppletFlags to use for @applet.
         */
        set_flags(flags: AppletFlags): void;
        /**
         * Give hints to the panel about sizes `applet` is comfortable with. This is
         * generally useful for applets that can take a lot of space, in case the panel
         * gets full and needs to restrict the size of some applets.
         *
         * `size_hints` should have an even number of sizes. It is an array of (max,
         * min) pairs where min(i) > max(i + 1).
         *
         * `base_size` will be added to all sizes in `size_hints,` and is therefore a way
         * to guarantee a minimum size to `applet`.
         *
         * The panel will try to allocate a size that is acceptable to `applet,` i.e. in
         * one of the (`base_size` + max, `base_size` + min) ranges.
         *
         * %PANEL_APPLET_EXPAND_MAJOR must be set for `applet` to use size hints.
         * @param size_hints array of sizes.
         * @param n_elements length of @size_hints.
         * @param base_size base size of the applet.
         */
        set_size_hints(size_hints: number, n_elements: number, base_size: number): void;
        /**
         * Sets up the context menu of `applet`. `xml` is a #GtkUIManager UI definition,
         * describing how to display the menu items. `action_group` contains the
         * various #GtkAction that are referenced in `xml`.
         *
         * See also the <link linkend="getting-started.context-menu">Context
         * Menu</link> section.
         * @param xml a menu XML string.
         * @param action_group a #GtkActionGroup.
         */
        setup_menu(xml: string, action_group: Gtk.ActionGroup): void;
        /**
         * Sets up the context menu of `applet`. `filename` is the path to a menu XML
         * file, containing a #GtkUIManager UI definition that describes how to display
         * the menu items. `action_group` contains the various #GtkAction that
         * are referenced in `xml`.
         *
         * See also the <link linkend="getting-started.context-menu">Context
         * Menu</link> section.
         * @param filename path to a menu XML file.
         * @param action_group a #GtkActionGroup.
         */
        setup_menu_from_file(filename: string, action_group: Gtk.ActionGroup): void;
        /**
         * Sets up the context menu of `applet`. `filename` is a resource path to a menu
         * XML file, containing a #GtkUIManager UI definition that describes how to
         * display the menu items. `action_group` contains the various #GtkAction that
         * are referenced in `xml`.
         *
         * See also the <link linkend="getting-started.context-menu">Context
         * Menu</link> section.
         * @param resource_path a resource path
         * @param action_group a #GtkActionGroup.
         */
        setup_menu_from_resource(resource_path: string, action_group: Gtk.ActionGroup): void;
    }

    class AppletClass {}

    class AppletPrivate {}

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

export default PanelApplet;
// END
