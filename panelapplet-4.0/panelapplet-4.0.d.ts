
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
import type xlib from '@girs/xlib-2.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GConf from '@girs/gconf-2.0';

export namespace PanelApplet {

    /**
     * PanelApplet-4.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AppletOrient {
        export const $gtype: GObject.GType<AppletOrient>;
    }

    /**
     * Type defining the orientation of the applet. The values may seem backward
     * (e.g. {@link PanelApplet.AppletOrient.RIGHT} means the panel is on the left side), but
     * this represents the direction the applet is oriented to.
     * @gir-type Enum
     */
    enum AppletOrient {
        UP,
        DOWN,
        LEFT,
        RIGHT,
    }


    const APPLET_FLAGS_ALL: number;

    /**
     * @gir-type Callback
     */
    interface AppletFactoryCallback {
        (applet: Applet, iid: string): boolean;
    }

    /**
     * @gir-type Flags
     */
    export namespace AppletFlags {
        export const $gtype: GObject.GType<AppletFlags>;
    }

    /**
     * Flags to be used with `panel_applet_get_flags()`/panel_applet_set_flags(), to
     * indicate to the panel a specific behavior requested by the {@link PanelApplet.Applet}.
     * @gir-type Flags
     */
    enum AppletFlags {
        FLAGS_NONE,
        EXPAND_MAJOR,
        EXPAND_MINOR,
        HAS_HANDLE,
    }


    namespace Applet {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * Emitted when the background of `applet` has changed.
             * @signal
             * @run-last
             */
            "change-background": (arg0: cairo.Pattern) => void;
            /**
             * Emitted when the {@link PanelApplet.AppletOrient} of `applet` has changed.
             * @signal
             * @run-last
             */
            "change-orient": (arg0: number) => void;
            /**
             * Emitted when the size of the panel `applet` is on has changed.
             * @signal
             * @run-last
             */
            "change-size": (arg0: number) => void;
            /**
             * Emitted when the focus is moved out of `applet`. This is an
             * implementation detail.
             * @signal
             * @action
             * @run-last
             */
            "move-focus-out-of-applet": (arg0: Gtk.DirectionType) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::locked-down": (pspec: GObject.ParamSpec) => void;
            "notify::orient": (pspec: GObject.ParamSpec) => void;
            "notify::prefs-key": (pspec: GObject.ParamSpec) => void;
            "notify::settings-path": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-hints": (pspec: GObject.ParamSpec) => void;
            "notify::above-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-window": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            flags: number;
            locked_down: boolean;
            lockedDown: boolean;
            orient: number;
            prefs_key: string;
            prefsKey: string;
            settings_path: string;
            settingsPath: string;
            size: number;
            size_hints: never;
            sizeHints: never;
        }
    }

    /**
     * @gir-type Class
     */
    class Applet extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Applet>;

        // Properties
        /**
         * The {@link PanelApplet.AppletFlags} of the applet.
         */
        get flags(): number;
        set flags(val: number);

        /**
         * Whether the panel the applet is on is locked down.
         */
        get locked_down(): boolean;
        set locked_down(val: boolean);

        /**
         * Whether the panel the applet is on is locked down.
         */
        get lockedDown(): boolean;
        set lockedDown(val: boolean);

        /**
         * The {@link PanelApplet.AppletOrient} of the applet.
         * 
         * This property gets set when the applet gets embedded, and can change
         * when the panel position changes.
         */
        get orient(): number;
        set orient(val: number);

        /**
         * The GConf path to the per-instance settings of the applet.
         * 
         * This property gets set when the applet gets embedded.
         */
        get prefs_key(): string;
        set prefs_key(val: string);

        /**
         * The GConf path to the per-instance settings of the applet.
         * 
         * This property gets set when the applet gets embedded.
         */
        get prefsKey(): string;
        set prefsKey(val: string);

        /**
         * The GSettings path to the per-instance settings of the applet.
         * 
         * This property gets set when the applet gets embedded.
         */
        get settings_path(): string;
        set settings_path(val: string);

        /**
         * The GSettings path to the per-instance settings of the applet.
         * 
         * This property gets set when the applet gets embedded.
         */
        get settingsPath(): string;
        set settingsPath(val: string);

        /**
         * The size of the panel the applet is on. For a horizontal panel, the
         * size if the height of the panel; for a vertical panel, the size is
         * the width of the panel.
         * 
         * This property gets set when the applet gets embedded, and can change
         * when the panel size changes.
         */
        get size(): number;
        set size(val: number);

        /**
         * The size hints set for the applet. See `panel_applet_set_size_hints()`.
         */
        get size_hints(): null;
        set size_hints(val: never);

        /**
         * The size hints set for the applet. See `panel_applet_set_size_hints()`.
         */
        get sizeHints(): null;
        set sizeHints(val: never);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Applet.SignalSignatures;

        // Fields
        event_box: Gtk.EventBox;

        // Constructors
        constructor(properties?: Partial<Applet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Applet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Applet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Applet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Applet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Applet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Applet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates the applet factory for `factory_id`, so that the factory can create
         * instances of the applet types it is associated with.
         * 
         * Applet instances created by the applet factory will use `applet_type` as
         * GType. Unless you subclass {@link PanelApplet.Applet}, you should use `PANEL_TYPE_APPLET`
         * as `applet_type`.
         * 
         * On creation of the applet instances, `callback` is called to setup the
         * applet. If `callback` returns `false`, the creation of the applet instance is
         * cancelled.
         * 
         * If using C, it is recommended to use #PANEL_APPLET_OUT_PROCESS_FACTORY
         * instead as it will create a `main()` function for you.
         * 
         * It can only be used once, and is incompatible with the use of
         * `PANEL_APPLET_IN_PROCESS_FACTORY` and `PANEL_APPLET_OUT_PROCESS_FACTORY`.
         * @param factory_id identifier of an applet factory.
         * @param applet_type GType of the applet this factory creates.
         * @param callback callback to be called when a new applet is created.
         */
        static factory_main(factory_id: string, applet_type: GObject.GType, callback: AppletFactoryCallback): number;

        // Virtual methods
        /**
         * @param pattern 
         * @virtual
         */
        vfunc_change_background(pattern: cairo.Pattern): void;

        /**
         * @param orient 
         * @virtual
         */
        vfunc_change_orient(orient: AppletOrient): void;

        /**
         * @param size 
         * @virtual
         */
        vfunc_change_size(size: number): void;

        /**
         * @param direction 
         * @virtual
         */
        vfunc_move_focus_out_of_applet(direction: Gtk.DirectionType): void;

        // Methods
        /**
         * Associates the per-instance GConf directory of `applet` to the schemas
         * defined in `schema_dir`. This must be called if the applet will save
         * per-instance settings, to ensure that each key in the per-instance GConf
         * directory has a defined type, sane default and documentation.
         * @param schema_dir a GConf path of a schema directory.
         */
        add_preferences(schema_dir: string): void;

        /**
         * Convenience wrapper around `gconf_client_get_bool()` to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of `key`.
         */
        gconf_get_bool(key: string): boolean;

        /**
         * Convenience wrapper around `gconf_client_get_float()` to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of `key`.
         */
        gconf_get_float(key: string): number;

        /**
         * Returns the full GConf path of `key`, in the per-instance GConf directory of
         * `applet`. The string should be freed by the caller.
         * @param key a GConf key name.
         */
        gconf_get_full_key(key: string): string;

        /**
         * Convenience wrapper around `gconf_client_get_int()` to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of `key`.
         */
        gconf_get_int(key: string): number;

        /**
         * Convenience wrapper around `gconf_client_get_string()` to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of `key`. The string should be freed by the caller.
         */
        gconf_get_string(key: string): string;

        /**
         * Convenience wrapper around `gconf_client_get_value()` to get the value of `key`
         * in the per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @returns the value of `key`.
         */
        gconf_get_value(key: string): GConf.Value;

        /**
         * Convenience wrapper around `gconf_client_set_bool()` to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_bool new value for `key`.
         */
        gconf_set_bool(key: string, the_bool: boolean): void;

        /**
         * Convenience wrapper around `gconf_client_set_float()` to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_float new value for `key`.
         */
        gconf_set_float(key: string, the_float: number): void;

        /**
         * Convenience wrapper around `gconf_client_set_int()` to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_int new value for `key`.
         */
        gconf_set_int(key: string, the_int: number): void;

        /**
         * Convenience wrapper around `gconf_client_set_string()` to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param the_string new value for `key`.
         */
        gconf_set_string(key: string, the_string: string): void;

        /**
         * Convenience wrapper around `gconf_client_set_value()` to update `key` in the
         * per-instance GConf directory of `applet`.
         * @param key a GConf key name.
         * @param value new value for `key`.
         */
        gconf_set_value(key: string, value: GConf.Value): void;

        /**
         * Gets the background pattern for `applet`, or `null` if there is none.
         * @returns a new {@link cairo.Pattern} to use as background for `applet`.
         */
        get_background(): cairo.Pattern;

        /**
         * Gets the {@link PanelApplet.AppletFlags} of `applet`.
         * @returns the {@link PanelApplet.AppletFlags} of `applet`.
         */
        get_flags(): AppletFlags;

        /**
         * Gets whether the panel `applet` is on is locked down or not. A locked down
         * applet should not allow any change to its configuration.
         * @returns `true` if the panel `applet` is on is locked down, `false` otherwise.
         */
        get_locked_down(): boolean;

        /**
         * Gets the {@link PanelApplet.AppletOrient} of `applet`.
         * @returns the {@link PanelApplet.AppletOrient} of `applet`.
         */
        get_orient(): AppletOrient;

        /**
         * Gets the GConf path to the per-instance settings of `applet`.
         * @returns a copy of the GConf path to the per-instance settings of `applet`.
         */
        get_preferences_key(): string;

        /**
         * Gets the size of the panel `applet` is on. For a horizontal panel, the
         * size if the height of the panel; for a vertical panel, the size is the width
         * of the panel.
         * @returns the size of the panel `applet` is on.
         */
        get_size(): number;

        /**
         * Requests focus for `applet`. There is no guarantee that `applet` will
         * successfully get focus after that call.
         * @param timestamp the timestamp of the user interaction (typically a button or key press event) which triggered this call.
         */
        request_focus(timestamp: number): void;

        /**
         * Configure {@link PanelApplet.Applet} to automatically draw the background of the applet on
         * `widget`. It is generally enough to call this function with `applet` as
         * `widget`.
         * @param widget a {@link Gtk.Widget}.
         */
        set_background_widget(widget: Gtk.Widget): void;

        /**
         * Sets the {@link PanelApplet.AppletFlags} of `applet`. Most of the time, at least
         * {@link PanelApplet.AppletFlags.EXPAND_MINOR} should be used.
         * @param flags {@link PanelApplet.AppletFlags} to use for `applet`.
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
         * `base_size` will be added to all sizes in `size_hints`, and is therefore a way
         * to guarantee a minimum size to `applet`.
         * 
         * The panel will try to allocate a size that is acceptable to `applet`, i.e. in
         * one of the (`base_size` + max, `base_size` + min) ranges.
         * 
         * {@link PanelApplet.AppletFlags.EXPAND_MAJOR} must be set for `applet` to use size hints.
         * @param size_hints array of sizes.
         * @param n_elements length of `size_hints`.
         * @param base_size base size of the applet.
         */
        set_size_hints(size_hints: number, n_elements: number, base_size: number): void;

        /**
         * Sets up the context menu of `applet`. `xml` is a {@link Gtk.UIManager} UI definition,
         * describing how to display the menu items. `action_group` contains the
         * various {@link Gtk.Action} that are referenced in `xml`.
         * 
         * See also the <link linkend="getting-started.context-menu">Context
         * Menu</link> section.
         * @param xml a menu XML string.
         * @param action_group a {@link Gtk.ActionGroup}.
         */
        setup_menu(xml: string, action_group: Gtk.ActionGroup): void;

        /**
         * Sets up the context menu of `applet`. `filename` is the path to a menu XML
         * file, containing a {@link Gtk.UIManager} UI definition that describes how to display
         * the menu items. `action_group` contains the various {@link Gtk.Action} that
         * are referenced in `xml`.
         * 
         * See also the <link linkend="getting-started.context-menu">Context
         * Menu</link> section.
         * @param filename path to a menu XML file.
         * @param action_group a {@link Gtk.ActionGroup}.
         */
        setup_menu_from_file(filename: string, action_group: Gtk.ActionGroup): void;

        /**
         * Sets up the context menu of `applet`. `filename` is a resource path to a menu
         * XML file, containing a {@link Gtk.UIManager} UI definition that describes how to
         * display the menu items. `action_group` contains the various {@link Gtk.Action} that
         * are referenced in `xml`.
         * 
         * See also the <link linkend="getting-started.context-menu">Context
         * Menu</link> section.
         * @param resource_path a resource path
         * @param action_group a {@link Gtk.ActionGroup}.
         */
        setup_menu_from_resource(resource_path: string, action_group: Gtk.ActionGroup): void;
    }


    /**
     * @gir-type Alias
     */
    type AppletClass = typeof Applet;

    /**
     * @gir-type Struct
     */
    abstract class AppletPrivate {
        static $gtype: GObject.GType<AppletPrivate>;
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

export default PanelApplet;

// END
