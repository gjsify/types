
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

export namespace MatePanelApplet {

    /**
     * MatePanelApplet-4.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AppletBackgroundType {
        export const $gtype: GObject.GType<AppletBackgroundType>;
    }

    /**
     * @gir-type Enum
     */
    enum AppletBackgroundType {
        NO_BACKGROUND,
        COLOR_BACKGROUND,
        PIXMAP_BACKGROUND,
    }


    /**
     * @gir-type Enum
     */
    export namespace AppletOrient {
        export const $gtype: GObject.GType<AppletOrient>;
    }

    /**
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
             * @signal
             * @run-last
             */
            "change-background": (arg0: AppletBackgroundType, arg1: Gdk.RGBA, arg2: cairo.Pattern) => void;
            /**
             * @signal
             * @run-last
             */
            "change-orient": (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "change-size": (arg0: number) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "move-focus-out-of-applet": (arg0: Gtk.DirectionType) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::closure": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::locked": (pspec: GObject.ParamSpec) => void;
            "notify::locked-down": (pspec: GObject.ParamSpec) => void;
            "notify::orient": (pspec: GObject.ParamSpec) => void;
            "notify::out-of-process": (pspec: GObject.ParamSpec) => void;
            "notify::prefs-path": (pspec: GObject.ParamSpec) => void;
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
            background: string;
            closure: any;
            connection: Gio.DBusConnection;
            flags: number;
            id: string;
            locked: boolean;
            locked_down: boolean;
            lockedDown: boolean;
            orient: number;
            out_of_process: boolean;
            outOfProcess: boolean;
            prefs_path: string;
            prefsPath: string;
            size: number;
            size_hints: any;
            sizeHints: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Applet extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Applet>;

        // Properties
        /**
         * @default null
         */
        get background(): string;
        set background(val: string);

        /**
         * @construct-only
         */
        get closure(): any;

        /**
         * @construct-only
         */
        get connection(): Gio.DBusConnection;

        /**
         * @default 0
         */
        get flags(): number;
        set flags(val: number);

        /**
         * @construct-only
         * @default null
         */
        get id(): string;

        /**
         * @default false
         */
        get locked(): boolean;
        set locked(val: boolean);

        /**
         * @default false
         */
        get locked_down(): boolean;
        set locked_down(val: boolean);

        /**
         * @default false
         */
        get lockedDown(): boolean;
        set lockedDown(val: boolean);

        /**
         * @default 0
         */
        get orient(): number;
        set orient(val: number);

        /**
         * @construct-only
         * @default true
         */
        get out_of_process(): boolean;

        /**
         * @construct-only
         * @default true
         */
        get outOfProcess(): boolean;

        /**
         * @default null
         */
        get prefs_path(): string;
        set prefs_path(val: string);

        /**
         * @default null
         */
        get prefsPath(): string;
        set prefsPath(val: string);

        /**
         * @default 0
         */
        get size(): number;
        set size(val: number);

        get size_hints(): any;
        set size_hints(val: any);

        get sizeHints(): any;
        set sizeHints(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Applet.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Applet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Applet;

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
         * @param factory_id Factory ID.
         * @param out_process boolean, dummy to support applets sending it
         * @param applet_type GType of the applet this factory creates.
         * @param callback Callback to be called when a new applet is to be created.
         */
        static factory_main(factory_id: string, out_process: boolean, applet_type: GObject.GType, callback: AppletFactoryCallback): number;

        // Virtual methods
        /**
         * @param type 
         * @param color 
         * @param pattern 
         * @virtual
         */
        vfunc_change_background(type: AppletBackgroundType, color: Gdk.RGBA, pattern: cairo.Pattern): void;

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
         * @param color 
         * @param pattern 
         */
        get_background(color: Gdk.RGBA, pattern: cairo.Pattern): AppletBackgroundType;

        get_flags(): AppletFlags;

        get_locked_down(): boolean;

        get_orient(): AppletOrient;

        get_preferences_path(): string;

        get_size(): number;

        /**
         * @param timestamp 
         */
        request_focus(timestamp: number): void;

        /**
         * Configure `PanelApplet` to automatically draw the background of the applet on
         * `widget`. It is generally enough to call this function with `applet` as
         * `widget`.
         * @param widget a {@link Gtk.Widget}.
         */
        set_background_widget(widget: Gtk.Widget): void;

        /**
         * @param flags 
         */
        set_flags(flags: AppletFlags): void;

        /**
         * @param size_hints List of integers
         * @param base_size base_size
         */
        set_size_hints(size_hints: number[], base_size: number): void;

        /**
         * `applet` A {@link MatePanelApplet.Applet}
         * `schema` applet's schema id
         * @param schema 
         * @returns a {@link Gio.Settings}. free when you used it
         */
        settings_new(schema: string): Gio.Settings;

        /**
         * @param xml 
         * @param action_group 
         */
        setup_menu(xml: string, action_group: Gtk.ActionGroup): void;

        /**
         * @param filename 
         * @param action_group 
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

export default MatePanelApplet;

// END
