
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
import type Libxfce4util from '@girs/libxfce4util-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Libxfce4ui from '@girs/libxfce4ui-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Garcon from '@girs/garcon-1.0';

export namespace GarconGtk {

    /**
     * GarconGtk-1.0
     */


    namespace Menu {
        // Signal signatures
        interface SignalSignatures extends Gtk.Menu.SignalSignatures {
            "notify::menu": (pspec: GObject.ParamSpec) => void;
            "notify::right-click-edits": (pspec: GObject.ParamSpec) => void;
            "notify::show-desktop-actions": (pspec: GObject.ParamSpec) => void;
            "notify::show-generic-names": (pspec: GObject.ParamSpec) => void;
            "notify::show-menu-icons": (pspec: GObject.ParamSpec) => void;
            "notify::show-tooltips": (pspec: GObject.ParamSpec) => void;
            "notify::accel-group": (pspec: GObject.ParamSpec) => void;
            "notify::accel-path": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-hints": (pspec: GObject.ParamSpec) => void;
            "notify::attach-widget": (pspec: GObject.ParamSpec) => void;
            "notify::menu-type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::monitor": (pspec: GObject.ParamSpec) => void;
            "notify::rect-anchor-dx": (pspec: GObject.ParamSpec) => void;
            "notify::rect-anchor-dy": (pspec: GObject.ParamSpec) => void;
            "notify::reserve-toggle-size": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-state": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::take-focus": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Menu.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            menu: Garcon.Menu;
            right_click_edits: boolean;
            rightClickEdits: boolean;
            show_desktop_actions: boolean;
            showDesktopActions: boolean;
            show_generic_names: boolean;
            showGenericNames: boolean;
            show_menu_icons: boolean;
            showMenuIcons: boolean;
            show_tooltips: boolean;
            showTooltips: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Menu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Menu>;

        // Properties
        get menu(): Garcon.Menu;
        set menu(val: Garcon.Menu);

        /**
         * @default false
         */
        get right_click_edits(): boolean;
        set right_click_edits(val: boolean);

        /**
         * @default false
         */
        get rightClickEdits(): boolean;
        set rightClickEdits(val: boolean);

        /**
         * @default false
         */
        get show_desktop_actions(): boolean;
        set show_desktop_actions(val: boolean);

        /**
         * @default false
         */
        get showDesktopActions(): boolean;
        set showDesktopActions(val: boolean);

        /**
         * @default false
         */
        get show_generic_names(): boolean;
        set show_generic_names(val: boolean);

        /**
         * @default false
         */
        get showGenericNames(): boolean;
        set showGenericNames(val: boolean);

        /**
         * @default true
         */
        get show_menu_icons(): boolean;
        set show_menu_icons(val: boolean);

        /**
         * @default true
         */
        get showMenuIcons(): boolean;
        set showMenuIcons(val: boolean);

        /**
         * @default false
         */
        get show_tooltips(): boolean;
        set show_tooltips(val: boolean);

        /**
         * @default false
         */
        get showTooltips(): boolean;
        set showTooltips(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Menu.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](garcon_menu: Garcon.Menu | null): Menu;

        // Conflicted with Gtk.Menu.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Menu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Application icons are never shown on the action menu items.
         * @param item A {@link Garcon.MenuItem}
         */
        static get_desktop_actions_menu(item: Garcon.MenuItem): Gtk.Menu;

        // Methods
        /**
         * The {@link Garcon.Menu} used to create the {@link Gtk.Menu}.
         * 
         * The caller is responsible to releasing the returned {@link Garcon.Menu}
         * using `g_object_unref()`.
         * @returns the {@link Garcon.Menu} for `menu`.
         */
        get_menu(): Garcon.Menu;

        /**
         * @returns Whether an editor will be launched on secondary mouse clicks
         */
        get_right_click_edits(): boolean;

        /**
         * @returns Whether desktop actions are shown in a submenu.
         */
        get_show_desktop_actions(): boolean;

        /**
         * @returns if generic names are shown
         */
        get_show_generic_names(): boolean;

        /**
         * @returns if menu icons are shown
         */
        get_show_menu_icons(): boolean;

        /**
         * @returns Whether descriptions are shown in the tooltip.
         */
        get_show_tooltips(): boolean;

        /**
         * @param garcon_menu The {@link Garcon.Menu} to use
         */
        set_menu(garcon_menu: Garcon.Menu): void;

        /**
         * @param enable_right_click_edits Toggle showing whether to launch an editor when the menu is clicked with the secondary mouse button.
         */
        set_right_click_edits(enable_right_click_edits: boolean): void;

        /**
         * @param show_desktop_actions Toggle showing the desktop actions in a submenu.
         */
        set_show_desktop_actions(show_desktop_actions: boolean): void;

        /**
         * @param show_generic_names new value
         */
        set_show_generic_names(show_generic_names: boolean): void;

        /**
         * @param show_menu_icons new value
         */
        set_show_menu_icons(show_menu_icons: boolean): void;

        /**
         * @param show_tooltips new value
         */
        set_show_tooltips(show_tooltips: boolean): void;
    }


    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;

    /**
     * @gir-type Struct
     */
    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;
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

export default GarconGtk;

// END
