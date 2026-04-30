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
import type Libxfce4windowing from '@girs/libxfce4windowing-0.0';
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

export namespace Libxfce4windowingui {
    /**
     * Libxfce4windowingui-0.0
     */

    namespace WindowActionMenu {
        // Signal signatures
        interface SignalSignatures extends Gtk.Menu.SignalSignatures {
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::accel-group': (pspec: GObject.ParamSpec) => void;
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-hints': (pspec: GObject.ParamSpec) => void;
            'notify::attach-widget': (pspec: GObject.ParamSpec) => void;
            'notify::menu-type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::monitor': (pspec: GObject.ParamSpec) => void;
            'notify::rect-anchor-dx': (pspec: GObject.ParamSpec) => void;
            'notify::rect-anchor-dy': (pspec: GObject.ParamSpec) => void;
            'notify::reserve-toggle-size': (pspec: GObject.ParamSpec) => void;
            'notify::tearoff-state': (pspec: GObject.ParamSpec) => void;
            'notify::tearoff-title': (pspec: GObject.ParamSpec) => void;
            'notify::take-focus': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Menu.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            window: Libxfce4windowing.Window | any;
        }
    }

    /**
     * @gir-type Class
     */
    class WindowActionMenu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WindowActionMenu>;

        // Properties

        /**
         * The {@link Libxfce4windowing.Window} instance used to create the action menu.
         * @construct-only
         */
        // This accessor conflicts with another accessor's type in a parent class or interface.
        get window(): Libxfce4windowing.Window | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowActionMenu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowActionMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](window: Libxfce4windowing.Window): WindowActionMenu;
        // Conflicted with Gtk.Menu.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof WindowActionMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowActionMenu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowActionMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowActionMenu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowActionMenu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowActionMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WindowListMenu {
        // Signal signatures
        interface SignalSignatures extends Gtk.Menu.SignalSignatures {
            'notify::minimized-icon-saturation': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::show-all-workspaces': (pspec: GObject.ParamSpec) => void;
            'notify::show-icons': (pspec: GObject.ParamSpec) => void;
            'notify::show-sticky-windows-once': (pspec: GObject.ParamSpec) => void;
            'notify::show-urgent-windows-section': (pspec: GObject.ParamSpec) => void;
            'notify::show-workspace-actions': (pspec: GObject.ParamSpec) => void;
            'notify::show-workspace-names': (pspec: GObject.ParamSpec) => void;
            'notify::show-workspace-submenus': (pspec: GObject.ParamSpec) => void;
            'notify::window-title-ellipsize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::window-title-max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::accel-group': (pspec: GObject.ParamSpec) => void;
            'notify::accel-path': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::anchor-hints': (pspec: GObject.ParamSpec) => void;
            'notify::attach-widget': (pspec: GObject.ParamSpec) => void;
            'notify::menu-type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::monitor': (pspec: GObject.ParamSpec) => void;
            'notify::rect-anchor-dx': (pspec: GObject.ParamSpec) => void;
            'notify::rect-anchor-dy': (pspec: GObject.ParamSpec) => void;
            'notify::reserve-toggle-size': (pspec: GObject.ParamSpec) => void;
            'notify::tearoff-state': (pspec: GObject.ParamSpec) => void;
            'notify::tearoff-title': (pspec: GObject.ParamSpec) => void;
            'notify::take-focus': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Menu.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            minimized_icon_saturation: number;
            minimizedIconSaturation: number;
            screen: Libxfce4windowing.Screen;
            show_all_workspaces: boolean;
            showAllWorkspaces: boolean;
            show_icons: boolean;
            showIcons: boolean;
            show_sticky_windows_once: boolean;
            showStickyWindowsOnce: boolean;
            show_urgent_windows_section: boolean;
            showUrgentWindowsSection: boolean;
            show_workspace_actions: boolean;
            showWorkspaceActions: boolean;
            show_workspace_names: boolean;
            showWorkspaceNames: boolean;
            show_workspace_submenus: boolean;
            showWorkspaceSubmenus: boolean;
            window_title_ellipsize_mode: Pango.EllipsizeMode;
            windowTitleEllipsizeMode: Pango.EllipsizeMode;
            window_title_max_width_chars: number;
            windowTitleMaxWidthChars: number;
        }
    }

    /**
     * @gir-type Class
     */
    class WindowListMenu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WindowListMenu>;

        // Properties

        /**
         * The saturation of icons for minimized windows.  The value should be
         * between 0 and 100.  Lower values will make the icon look more like a
         * greyscale image.
         * @default 50
         */
        get minimized_icon_saturation(): number;
        set minimized_icon_saturation(val: number);
        /**
         * The saturation of icons for minimized windows.  The value should be
         * between 0 and 100.  Lower values will make the icon look more like a
         * greyscale image.
         * @default 50
         */
        get minimizedIconSaturation(): number;
        set minimizedIconSaturation(val: number);
        /**
         * The {@link Libxfce4windowing.Screen} to use when populating the menu.
         * @construct-only
         */
        get screen(): Libxfce4windowing.Screen;
        /**
         * Whether or not to show all workspaces in the list, or just the current
         * workspace.
         * @default true
         */
        get show_all_workspaces(): boolean;
        set show_all_workspaces(val: boolean);
        /**
         * Whether or not to show all workspaces in the list, or just the current
         * workspace.
         * @default true
         */
        get showAllWorkspaces(): boolean;
        set showAllWorkspaces(val: boolean);
        /**
         * Whether or not to show icons in the menu.
         * @default true
         */
        get show_icons(): boolean;
        set show_icons(val: boolean);
        /**
         * Whether or not to show icons in the menu.
         * @default true
         */
        get showIcons(): boolean;
        set showIcons(val: boolean);
        /**
         * Whether or not sticky/pinned windows should be shown once (on the active
         * workspace), or in each workspace list.
         * @default false
         */
        get show_sticky_windows_once(): boolean;
        set show_sticky_windows_once(val: boolean);
        /**
         * Whether or not sticky/pinned windows should be shown once (on the active
         * workspace), or in each workspace list.
         * @default false
         */
        get showStickyWindowsOnce(): boolean;
        set showStickyWindowsOnce(val: boolean);
        /**
         * Whether or not to show an extra section that lists urgent windows on
         * other workspaces.
         * @default false
         */
        get show_urgent_windows_section(): boolean;
        set show_urgent_windows_section(val: boolean);
        /**
         * Whether or not to show an extra section that lists urgent windows on
         * other workspaces.
         * @default false
         */
        get showUrgentWindowsSection(): boolean;
        set showUrgentWindowsSection(val: boolean);
        /**
         * Whether or not to show a section in the menu with items to add and
         * remove workspaces.
         * @default true
         */
        get show_workspace_actions(): boolean;
        set show_workspace_actions(val: boolean);
        /**
         * Whether or not to show a section in the menu with items to add and
         * remove workspaces.
         * @default true
         */
        get showWorkspaceActions(): boolean;
        set showWorkspaceActions(val: boolean);
        /**
         * Whether or not to show a heading with the workspace name before the list
         * of windows on that workspace.
         * @default true
         */
        get show_workspace_names(): boolean;
        set show_workspace_names(val: boolean);
        /**
         * Whether or not to show a heading with the workspace name before the list
         * of windows on that workspace.
         * @default true
         */
        get showWorkspaceNames(): boolean;
        set showWorkspaceNames(val: boolean);
        /**
         * Whether or not the lists of windows should be in submenus for each
         * workspace.
         * @default false
         */
        get show_workspace_submenus(): boolean;
        set show_workspace_submenus(val: boolean);
        /**
         * Whether or not the lists of windows should be in submenus for each
         * workspace.
         * @default false
         */
        get showWorkspaceSubmenus(): boolean;
        set showWorkspaceSubmenus(val: boolean);
        /**
         * The {@link Pango.EllipsizeMode} to use when ellipsizing window titles.
         * @default Pango.EllipsizeMode.MIDDLE
         */
        get window_title_ellipsize_mode(): Pango.EllipsizeMode;
        set window_title_ellipsize_mode(val: Pango.EllipsizeMode);
        /**
         * The {@link Pango.EllipsizeMode} to use when ellipsizing window titles.
         * @default Pango.EllipsizeMode.MIDDLE
         */
        get windowTitleEllipsizeMode(): Pango.EllipsizeMode;
        set windowTitleEllipsizeMode(val: Pango.EllipsizeMode);
        /**
         * The maximum width (in characters) of window titles to display before
         * ellipsizing.
         * @default 24
         */
        get window_title_max_width_chars(): number;
        set window_title_max_width_chars(val: number);
        /**
         * The maximum width (in characters) of window titles to display before
         * ellipsizing.
         * @default 24
         */
        get windowTitleMaxWidthChars(): number;
        set windowTitleMaxWidthChars(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowListMenu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowListMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](screen: Libxfce4windowing.Screen): WindowListMenu;
        // Conflicted with Gtk.Menu.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof WindowListMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowListMenu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowListMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowListMenu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowListMenu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowListMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type WindowActionMenuClass = typeof WindowActionMenu;
    /**
     * @gir-type Struct
     */
    abstract class WindowActionMenuPrivate {
        static $gtype: GObject.GType<WindowActionMenuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WindowListMenuClass = typeof WindowListMenu;
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

export default Libxfce4windowingui;

// END
