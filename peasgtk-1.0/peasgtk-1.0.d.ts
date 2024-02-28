/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './peasgtk-1.0-ambient.d.ts';
import './peasgtk-1.0-import.d.ts';
/**
 * PeasGtk-1.0
 */

import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace PeasGtk {
    module PluginManager {
        // Constructor properties interface
    }

    /**
     * The #PeasGtkPluginManager structure contains only private data
     * and should only be accessed using the provided API.
     */
    class PluginManager extends Gtk.Box {
        // Own properties of PeasGtk-1.0.PluginManager

        /**
         * The [class`Peas`.Engine] this manager is attached to.
         */
        engine: Peas.Engine;
        /**
         * The [class`PluginManagerView]` shown in the #PeasGtkPluginManager.
         */
        view: PluginManagerView;

        // Own fields of PeasGtk-1.0.PluginManager

        box: Gtk.Box;

        // Constructors of PeasGtk-1.0.PluginManager

        static ['new'](engine?: Peas.Engine | null): PluginManager;

        // Owm methods of PeasGtk-1.0.PluginManager

        /**
         * Returns the [class`PluginManagerView]` of `pm`.
         * @returns the #GtkTreeView of @pm.
         */
        get_view(): Gtk.Widget;
    }

    module PluginManagerView {
        // Signal callback interfaces

        interface PopulatePopup {
            (menu: Gtk.Menu): void;
        }

        // Constructor properties interface
    }

    /**
     * The #PeasGtkPluginManagerView structure contains only private data
     * and should only be accessed using the provided API.
     */
    class PluginManagerView extends Gtk.TreeView {
        // Own properties of PeasGtk-1.0.PluginManagerView

        engine: Peas.Engine;
        /**
         * If builtin plugins should be shown.
         */
        show_builtin: boolean;
        /**
         * If builtin plugins should be shown.
         */
        showBuiltin: boolean;

        // Constructors of PeasGtk-1.0.PluginManagerView

        static ['new'](engine?: Peas.Engine | null): PluginManagerView;

        // Owm methods of PeasGtk-1.0.PluginManagerView

        /**
         * Returns the currently selected plugin, or %NULL if a plugin is not selected.
         * @returns the selected plugin.
         */
        get_selected_plugin(): Peas.PluginInfo | null;
        /**
         * Returns if builtin plugins should be shown.
         * @returns if builtin plugins should be shown.
         */
        get_show_builtin(): boolean;
        /**
         * Selects the given plugin.
         * @param info A #PeasPluginInfo.
         */
        set_selected_plugin(info: Peas.PluginInfo): void;
        /**
         * Sets if builtin plugins should be shown.
         * @param show_builtin If builtin plugins should be shown.
         */
        set_show_builtin(show_builtin: boolean): void;
    }

    /**
     * Provides an interface for configurable plugins.
     */
    class ConfigurableInterface {}

    /**
     * The class structure for #PeasGtkPluginManager.
     */
    class PluginManagerClass {}

    class PluginManagerPrivate {}

    /**
     * The class structure for #PeasGtkPluginManagerView.
     */
    class PluginManagerViewClass {}

    class PluginManagerViewPrivate {}

    interface Configurable {
        // Owm methods of PeasGtk-1.0.Configurable

        /**
         * Creates the configure widget for the plugin.
         *
         * The returned widget should allow configuring all the relevant aspects of the
         * plugin, and should allow instant-apply, as promoted by the Gnome Human
         * Interface Guidelines.
         *
         * [class`PluginManager]` will embed the returned widget into a dialog box,
         * but you shouldn't take this behaviour for granted as other implementations
         * of a plugin manager UI might do otherwise.
         *
         * This method should always return a valid [class`Gtk`.Widget] instance, never %NULL.
         * @returns A #GtkWidget used for configuration.
         */
        create_configure_widget(): Gtk.Widget;

        // Own virtual methods of PeasGtk-1.0.Configurable

        /**
         * Creates the configure widget for the plugin.
         *
         * The returned widget should allow configuring all the relevant aspects of the
         * plugin, and should allow instant-apply, as promoted by the Gnome Human
         * Interface Guidelines.
         *
         * [class`PluginManager]` will embed the returned widget into a dialog box,
         * but you shouldn't take this behaviour for granted as other implementations
         * of a plugin manager UI might do otherwise.
         *
         * This method should always return a valid [class`Gtk`.Widget] instance, never %NULL.
         */
        vfunc_create_configure_widget(): Gtk.Widget;
    }

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

export default PeasGtk;
// END
