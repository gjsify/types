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
import type Peas from '@girs/peas-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type cairo from 'cairo';
import type WebKit2 from '@girs/webkit2-4.0';
import type Soup from '@girs/soup-2.4';
import type JavaScriptCore from '@girs/javascriptcore-4.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Midori {
    /**
     * Midori-0.6
     */

    export namespace DebugFlags {
        export const $gtype: GObject.GType<DebugFlags>;
    }

    enum DebugFlags {
        NONE,
        HISTORY,
    }

    export namespace StartupType {
        export const $gtype: GObject.GType<StartupType>;
    }

    enum StartupType {
        SPEED_DIAL,
        HOMEPAGE,
        LAST_OPEN_PAGES,
        DELAYED_PAGES,
    }

    export namespace ProxyType {
        export const $gtype: GObject.GType<ProxyType>;
    }

    enum ProxyType {
        AUTOMATIC,
        HTTP,
        NONE,
    }
    class DatabaseError extends GLib.Error {
        static $gtype: GObject.GType<DatabaseError>;

        // Static fields

        static OPEN: number;
        static NAMING: number;
        static FILENAME: number;
        static EXECUTE: number;
        static COMPILE: number;
        static TYPE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    const keys: GLib.DebugKey[];
    interface DatabaseCallback {
        (): boolean;
    }
    namespace App {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            'notify::exec-path': (pspec: GObject.ParamSpec) => void;
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::app-menu': (pspec: GObject.ParamSpec) => void;
            'notify::menubar': (pspec: GObject.ParamSpec) => void;
            'notify::register-session': (pspec: GObject.ParamSpec) => void;
            'notify::screensaver-active': (pspec: GObject.ParamSpec) => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::inactivity-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::is-busy': (pspec: GObject.ParamSpec) => void;
            'notify::is-registered': (pspec: GObject.ParamSpec) => void;
            'notify::is-remote': (pspec: GObject.ParamSpec) => void;
            'notify::resource-base-path': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Application.ConstructorProps {
            exec_path: Gio.File;
            execPath: Gio.File;
        }
    }

    class App extends Gtk.Application {
        static $gtype: GObject.GType<App>;

        // Properties

        get exec_path(): Gio.File;
        set exec_path(val: Gio.File);
        get execPath(): Gio.File;
        set execPath(val: Gio.File);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): App;

        // Signals

        connect<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof App.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_exec_path(): Gio.File | null;
        set_exec_path(value?: Gio.File | null): void;
    }

    namespace Browser {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            'default-tab': () => boolean | void;
            'notify::web-context': (pspec: GObject.ParamSpec) => void;
            'notify::is-loading': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::tab': (pspec: GObject.ParamSpec) => void;
            'notify::trash': (pspec: GObject.ParamSpec) => void;
            'notify::is-fullscreen': (pspec: GObject.ParamSpec) => void;
            'notify::is-locked': (pspec: GObject.ParamSpec) => void;
            'notify::show-menubar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.ApplicationWindow.ConstructorProps {
            web_context: WebKit2.WebContext;
            webContext: WebKit2.WebContext;
            is_loading: boolean;
            isLoading: boolean;
            uri: string;
            tab: Tab;
            trash: Gio.ListStore;
            is_fullscreen: boolean;
            isFullscreen: boolean;
            is_locked: boolean;
            isLocked: boolean;
        }
    }

    class Browser extends Gtk.ApplicationWindow {
        static $gtype: GObject.GType<Browser>;

        // Properties

        get web_context(): WebKit2.WebContext;
        set web_context(val: WebKit2.WebContext);
        get webContext(): WebKit2.WebContext;
        set webContext(val: WebKit2.WebContext);
        get is_loading(): boolean;
        set is_loading(val: boolean);
        get isLoading(): boolean;
        set isLoading(val: boolean);
        get uri(): string;
        set uri(val: string);
        get tab(): Tab;
        set tab(val: Tab);
        get trash(): Gio.ListStore;
        set trash(val: Gio.ListStore);
        get is_fullscreen(): boolean;
        set is_fullscreen(val: boolean);
        get isFullscreen(): boolean;
        set isFullscreen(val: boolean);
        get is_locked(): boolean;
        set is_locked(val: boolean);
        get isLocked(): boolean;
        set isLocked(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Browser.SignalSignatures;

        // Fields

        tabs: Gtk.Stack;
        overlay: Gtk.Overlay;
        statusbar: Statusbar;

        // Constructors

        constructor(properties?: Partial<Browser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](app: App, is_locked: boolean): Browser;
        // Conflicted with Gtk.ApplicationWindow.new

        static ['new'](...args: never[]): any;

        static incognito(app: App): Browser;

        // Signals

        connect<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Browser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Browser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_button(button: Gtk.Button): void;
        add_panel(widget: Gtk.Widget): void;
        add(tab: Tab): void;
        get_web_context(): WebKit2.WebContext;
        set_web_context(value: WebKit2.WebContext): void;
        get_is_loading(): boolean;
        set_is_loading(value: boolean): void;
        get_uri(): string | null;
        set_uri(value?: string | null): void;
        get_tab(): Tab | null;
        set_tab(value?: Tab | null): void;
        get_trash(): Gio.ListStore;
        set_trash(value: Gio.ListStore): void;
        get_is_fullscreen(): boolean;
        set_is_fullscreen(value: boolean): void;
        get_is_locked(): boolean;
        set_is_locked(value: boolean): void;
    }

    namespace ClearPrivateData {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Dialog.ConstructorProps {}
    }

    class ClearPrivateData extends Gtk.Dialog {
        static $gtype: GObject.GType<ClearPrivateData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClearPrivateData.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClearPrivateData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: Gtk.Window): ClearPrivateData;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof ClearPrivateData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClearPrivateData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClearPrivateData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClearPrivateData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClearPrivateData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClearPrivateData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace SuggestionItem {
        // Signal signatures
        interface SignalSignatures extends DatabaseItem.SignalSignatures {
            'notify::search': (pspec: GObject.ParamSpec) => void;
            'notify::database': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DatabaseItem.ConstructorProps {
            search: string;
        }
    }

    class SuggestionItem extends DatabaseItem {
        static $gtype: GObject.GType<SuggestionItem>;

        // Properties

        get search(): string;
        set search(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SuggestionItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SuggestionItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static for_input(uri: string, title?: string | null): SuggestionItem;

        // Signals

        connect<K extends keyof SuggestionItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SuggestionItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SuggestionItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SuggestionItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SuggestionItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SuggestionItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_search(): string | null;
        set_search(value?: string | null): void;
    }

    namespace Completion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::incognito': (pspec: GObject.ParamSpec) => void;
            'notify::key': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps,
                Gio.ListModel.ConstructorProps {
            incognito: boolean;
            key: string;
        }
    }

    class Completion<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Completion>;

        // Properties

        get incognito(): boolean;
        set incognito(val: boolean);
        get key(): string;
        set key(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Completion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](incognito: boolean): Completion;

        // Signals

        connect<K extends keyof Completion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Completion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Completion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Completion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Completion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add(model: Gio.ListModel): void;
        get_incognito(): boolean;
        set_incognito(value: boolean): void;
        get_key(): string | null;
        set_key(value?: string | null): void;

        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         * @returns the #GType of the items contained in @list.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         * @returns the number of items in @list.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         * @param position the position of the item to fetch
         * @returns the object at @position.
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which @list changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DatabaseStatement {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::database': (pspec: GObject.ParamSpec) => void;
            'notify::query': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            database: Database;
            query: string;
        }
    }

    class DatabaseStatement extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<DatabaseStatement>;

        // Properties

        get database(): Database;
        set database(val: Database);
        get query(): string;
        set query(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DatabaseStatement.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DatabaseStatement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](database: Database, query: string): DatabaseStatement;

        // Signals

        connect<K extends keyof DatabaseStatement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatabaseStatement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DatabaseStatement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatabaseStatement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DatabaseStatement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DatabaseStatement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

        // Methods

        init(cancellable?: Gio.Cancellable | null): boolean;
        exec(): boolean;
        step(): boolean;
        row_id(): number;
        get_string(name: string): string | null;
        get_int64(name: string): number;
        get_double(name: string): number;
        get_database(): Database | null;
        set_database(value?: Database | null): void;
        get_query(): string | null;
        set_query(value?: string | null): void;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DatabaseItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::database': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            database: Database;
            id: number;
            uri: string;
            title: string;
            date: number;
        }
    }

    class DatabaseItem extends GObject.Object {
        static $gtype: GObject.GType<DatabaseItem>;

        // Properties

        get database(): Database;
        set database(val: Database);
        get id(): number;
        set id(val: number);
        get uri(): string;
        set uri(val: string);
        get title(): string;
        set title(val: string);
        get date(): number;
        set date(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DatabaseItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DatabaseItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string, title: string | null, date: number): DatabaseItem;

        // Signals

        connect<K extends keyof DatabaseItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatabaseItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DatabaseItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatabaseItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DatabaseItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DatabaseItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['delete'](): globalThis.Promise<boolean>;
        ['delete'](_callback_: Gio.AsyncReadyCallback<this> | null): void;
        ['delete'](_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
        delete_finish(_res_: Gio.AsyncResult): boolean;
        get_database(): Database | null;
        set_database(value?: Database | null): void;
        get_id(): number;
        set_id(value: number): void;
        get_uri(): string;
        set_uri(value: string): void;
        get_title(): string | null;
        set_title(value?: string | null): void;
        get_date(): number;
        set_date(value: number): void;
    }

    namespace Database {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::table': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::key': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
            'notify::first-use': (pspec: GObject.ParamSpec) => void;
            'notify::last-row-id': (pspec: GObject.ParamSpec) => void;
            'notify::errmsg': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps,
                Gio.Initable.ConstructorProps,
                Gio.ListModel.ConstructorProps,
                Loggable.ConstructorProps {
            table: string;
            path: string;
            key: string;
            readonly: boolean;
            first_use: boolean;
            firstUse: boolean;
            last_row_id: number;
            lastRowId: number;
            errmsg: string;
        }
    }

    class Database<A extends GObject.Object = GObject.Object>
        extends GObject.Object
        implements Gio.Initable, Gio.ListModel<A>, Loggable
    {
        static $gtype: GObject.GType<Database>;

        // Properties

        get table(): string;
        set table(val: string);
        get path(): string;
        set path(val: string);
        get key(): string;
        set key(val: string);
        get readonly(): boolean;
        set readonly(val: boolean);
        get first_use(): boolean;
        set first_use(val: boolean);
        get firstUse(): boolean;
        set firstUse(val: boolean);
        get last_row_id(): number;
        get lastRowId(): number;
        get errmsg(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Database.SignalSignatures;

        // Fields

        db: any;

        // Constructors

        constructor(properties?: Partial<Database.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): Database;

        // Signals

        connect<K extends keyof Database.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Database.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Database.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Database.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Database.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Database.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        vfunc_delete(item: DatabaseItem, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_delete_finish(_res_: Gio.AsyncResult): boolean;
        vfunc_lookup(uri: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_lookup_finish(_res_: Gio.AsyncResult): DatabaseItem | null;
        vfunc_query(
            filter: string | null,
            max_items: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_query_finish(_res_: Gio.AsyncResult): DatabaseItem[] | null;
        vfunc_update(item: DatabaseItem, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_update_finish(_res_: Gio.AsyncResult): boolean;
        vfunc_insert(item: DatabaseItem, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_insert_finish(_res_: Gio.AsyncResult): boolean;
        vfunc_clear(timespan: GLib.TimeSpan, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_clear_finish(_res_: Gio.AsyncResult): boolean;

        // Methods

        init(cancellable?: Gio.Cancellable | null): boolean;
        exists(path: string): boolean;
        exec_script(filename: string): boolean;
        transaction(callback: DatabaseCallback): boolean;
        exec(query: string): boolean;
        ['delete'](item: DatabaseItem): globalThis.Promise<boolean>;
        ['delete'](item: DatabaseItem, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        ['delete'](
            item: DatabaseItem,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        delete_finish(_res_: Gio.AsyncResult): boolean;
        lookup(uri: string): globalThis.Promise<DatabaseItem | null>;
        lookup(uri: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        lookup(
            uri: string,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DatabaseItem | null> | void;
        lookup_finish(_res_: Gio.AsyncResult): DatabaseItem | null;
        contains(item: DatabaseItem): boolean;
        query(
            filter: string | null,
            max_items: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<DatabaseItem[] | null>;
        query(
            filter: string | null,
            max_items: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        query(
            filter: string | null,
            max_items: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DatabaseItem[] | null> | void;
        query_finish(_res_: Gio.AsyncResult): DatabaseItem[] | null;
        update(item: DatabaseItem): globalThis.Promise<boolean>;
        update(item: DatabaseItem, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        update(
            item: DatabaseItem,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        update_finish(_res_: Gio.AsyncResult): boolean;
        insert(item: DatabaseItem): globalThis.Promise<boolean>;
        insert(item: DatabaseItem, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        insert(
            item: DatabaseItem,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        insert_finish(_res_: Gio.AsyncResult): boolean;
        clear(timespan: GLib.TimeSpan): globalThis.Promise<boolean>;
        clear(timespan: GLib.TimeSpan, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        clear(
            timespan: GLib.TimeSpan,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        clear_finish(_res_: Gio.AsyncResult): boolean;
        get_table(): string | null;
        set_table(value?: string | null): void;
        get_path(): string;
        set_path(value: string): void;
        get_key(): string | null;
        set_key(value?: string | null): void;
        get_readonly(): boolean;
        set_readonly(value: boolean): void;
        get_first_use(): boolean;
        set_first_use(value: boolean): void;
        get_last_row_id(): number;
        get_errmsg(): string;

        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         * @returns the #GType of the items contained in @list.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         * @returns the number of items in @list.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         * @param position the position of the item to fetch
         * @returns the object at @position.
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which @list changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
        get_domain(): string;
        get_logging(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DownloadButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            'show-downloads': () => void;
            'notify::always-show-image': (pspec: GObject.ParamSpec) => void;
            'notify::image': (pspec: GObject.ParamSpec) => void;
            'notify::image-position': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::relief': (pspec: GObject.ParamSpec) => void;
            'notify::use-stock': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Button.ConstructorProps {}
    }

    class DownloadButton extends Gtk.Button {
        static $gtype: GObject.GType<DownloadButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DownloadButton.SignalSignatures;

        // Fields

        popover: Gtk.Popover;
        clear: Gtk.Button;
        listbox: Gtk.ListBox;

        // Constructors

        constructor(properties?: Partial<DownloadButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DownloadButton;

        // Signals

        connect<K extends keyof DownloadButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DownloadButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DownloadButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DownloadButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DownloadButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DownloadButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_show_downloads(): void;

        // Methods

        create_row(item: GObject.Object): Gtk.Widget;
    }

    namespace DownloadItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            finished: () => void;
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::basename': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::download': (pspec: GObject.ParamSpec) => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::error': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_type: string;
            contentType: string;
            icon: Gio.Icon;
            filename: string;
            basename: string;
            progress: number;
            download: WebKit2.Download;
            loading: boolean;
            error: string;
        }
    }

    class DownloadItem extends GObject.Object {
        static $gtype: GObject.GType<DownloadItem>;

        // Properties

        get content_type(): string;
        get contentType(): string;
        get icon(): Gio.Icon;
        get filename(): string;
        set filename(val: string);
        get basename(): string;
        set basename(val: string);
        get progress(): number;
        set progress(val: number);
        get download(): WebKit2.Download;
        set download(val: WebKit2.Download);
        get loading(): boolean;
        set loading(val: boolean);
        get error(): string;
        set error(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DownloadItem.SignalSignatures;

        // Fields

        mime_type: string | null;

        // Constructors

        constructor(properties?: Partial<DownloadItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): DownloadItem;

        static with_download(download: WebKit2.Download): DownloadItem;

        // Signals

        connect<K extends keyof DownloadItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DownloadItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DownloadItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DownloadItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DownloadItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DownloadItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        cancel(): void;
        get_content_type(): string;
        get_icon(): Gio.Icon;
        get_filename(): string | null;
        set_filename(value?: string | null): void;
        get_basename(): string | null;
        set_basename(value?: string | null): void;
        get_progress(): number;
        set_progress(value: number): void;
        get_download(): WebKit2.Download | null;
        set_download(value?: WebKit2.Download | null): void;
        get_loading(): boolean;
        set_loading(value: boolean): void;
        get_error(): string | null;
        set_error(value?: string | null): void;
    }

    namespace DownloadRow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListBoxRow.SignalSignatures {
            'notify::item': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.ListBoxRow.ConstructorProps {
            item: DownloadItem;
        }
    }

    class DownloadRow extends Gtk.ListBoxRow {
        static $gtype: GObject.GType<DownloadRow>;

        // Properties

        get item(): DownloadItem;
        set item(val: DownloadItem);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DownloadRow.SignalSignatures;

        // Fields

        icon: Gtk.Image;
        filename: Gtk.Label;
        progress: Gtk.ProgressBar;
        cancel: Gtk.Button;
        open: Gtk.Button;
        error: Gtk.Image;
        status: Gtk.Label;

        // Constructors

        constructor(properties?: Partial<DownloadRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](item: DownloadItem): DownloadRow;
        // Conflicted with Gtk.ListBoxRow.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof DownloadRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DownloadRow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DownloadRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DownloadRow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DownloadRow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DownloadRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_item(): DownloadItem;
        set_item(value: DownloadItem): void;
    }

    namespace Favicon {
        // Signal signatures
        interface SignalSignatures extends Gtk.Image.SignalSignatures {
            'notify::surface': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-set': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::pixbuf-animation': (pspec: GObject.ParamSpec) => void;
            'notify::pixel-size': (pspec: GObject.ParamSpec) => void;
            'notify::resource': (pspec: GObject.ParamSpec) => void;
            'notify::stock': (pspec: GObject.ParamSpec) => void;
            'notify::storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::use-fallback': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Image.ConstructorProps {
            surface: cairo.Surface;
            uri: string;
        }
    }

    class Favicon extends Gtk.Image {
        static $gtype: GObject.GType<Favicon>;

        // Properties

        set surface(val: cairo.Surface);
        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Favicon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Favicon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Favicon;

        // Signals

        connect<K extends keyof Favicon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Favicon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Favicon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Favicon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Favicon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Favicon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_surface(value?: cairo.Surface | null): void;
        get_uri(): string | null;
        set_uri(value?: string | null): void;
    }

    namespace HistoryDatabase {
        // Signal signatures
        interface SignalSignatures extends Database.SignalSignatures {
            'notify::table': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::key': (pspec: GObject.ParamSpec) => void;
            'notify::readonly': (pspec: GObject.ParamSpec) => void;
            'notify::first-use': (pspec: GObject.ParamSpec) => void;
            'notify::last-row-id': (pspec: GObject.ParamSpec) => void;
            'notify::errmsg': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends Database.ConstructorProps<A> {}
    }

    class HistoryDatabase<A extends GObject.Object = GObject.Object> extends Database<A> {
        static $gtype: GObject.GType<HistoryDatabase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HistoryDatabase.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HistoryDatabase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof HistoryDatabase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HistoryDatabase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HistoryDatabase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HistoryDatabase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HistoryDatabase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HistoryDatabase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(incognito: boolean): HistoryDatabase;
    }

    namespace Navigationbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.ActionBar.SignalSignatures {
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

        interface ConstructorProps extends Gtk.ActionBar.ConstructorProps {}
    }

    class Navigationbar extends Gtk.ActionBar {
        static $gtype: GObject.GType<Navigationbar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Navigationbar.SignalSignatures;

        // Fields

        actionbox: Gtk.Box;
        go_back: Gtk.Button;
        go_forward: Gtk.Button;
        reload: Gtk.Button;
        stop_loading: Gtk.Button;
        homepage: Gtk.Button;
        urlbar: Urlbar;
        restore: Gtk.Button;

        // Constructors

        constructor(properties?: Partial<Navigationbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Navigationbar;

        // Signals

        connect<K extends keyof Navigationbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Navigationbar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Navigationbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Navigationbar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Navigationbar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Navigationbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace NetworkCheck {
        // Signal signatures
        interface SignalSignatures extends Gtk.ActionBar.SignalSignatures {
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

        interface ConstructorProps extends Gtk.ActionBar.ConstructorProps {}
    }

    class NetworkCheck extends Gtk.ActionBar {
        static $gtype: GObject.GType<NetworkCheck>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkCheck.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkCheck.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NetworkCheck;

        // Signals

        connect<K extends keyof NetworkCheck.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkCheck.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NetworkCheck.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkCheck.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NetworkCheck.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkCheck.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Plugins {
        // Signal signatures
        interface SignalSignatures extends Peas.Engine.SignalSignatures {
            'notify::builtin-path': (pspec: GObject.ParamSpec) => void;
            'notify::loaded-plugins': (pspec: GObject.ParamSpec) => void;
            'notify::nonglobal-loaders': (pspec: GObject.ParamSpec) => void;
            'notify::plugin-list': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Peas.Engine.ConstructorProps, Loggable.ConstructorProps {
            builtin_path: string;
            builtinPath: string;
        }
    }

    class Plugins extends Peas.Engine implements Loggable {
        static $gtype: GObject.GType<Plugins>;

        // Properties

        get builtin_path(): string;
        set builtin_path(val: string);
        get builtinPath(): string;
        set builtinPath(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugins.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugins.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Plugins.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugins.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plugins.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugins.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plugins.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugins.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        plug(
            t_type: GObject.GType,
            t_dup_func: GObject.BoxedCopyFunc,
            name: string,
            object: GObject.Object,
        ): Peas.ExtensionSet;
        get_builtin_path(): string;
        set_builtin_path(value: string): void;

        // Inherited methods
        get_domain(): string;
        get_logging(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace LabelWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            title: string;
            label: Gtk.Label;
            widget: Gtk.Widget | any;
        }
    }

    class LabelWidget extends Gtk.Box {
        static $gtype: GObject.GType<LabelWidget>;

        // Properties

        get title(): string;
        set title(val: string);
        get label(): Gtk.Label;
        set label(val: Gtk.Label);
        // This accessor conflicts with a property or field in a parent class or interface.
        widget: Gtk.Widget | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LabelWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LabelWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title?: string | null, widget?: Gtk.Widget | null): LabelWidget;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof LabelWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LabelWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LabelWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LabelWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LabelWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LabelWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_title(): string | null;
        set_title(value?: string | null): void;
        get_label(): Gtk.Label;
        set_label(value: Gtk.Label): void;
        get_widget(): Gtk.Widget | null;
        set_widget(value?: Gtk.Widget | null): void;
    }

    namespace Preferences {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            'notify::use-header-bar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Dialog.ConstructorProps {}
    }

    class Preferences extends Gtk.Dialog {
        static $gtype: GObject.GType<Preferences>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Preferences.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Preferences.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: Gtk.Window): Preferences;
        // Conflicted with Gtk.Dialog.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Preferences.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Preferences.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Preferences.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Preferences.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Preferences.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Preferences.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add(label: string, widget: Gtk.Widget): void;
        // Conflicted with Gtk.Container.add
        add(...args: never[]): any;
    }

    namespace CoreSettings {
        // Signal signatures
        interface SignalSignatures extends Settings.SignalSignatures {
            'notify::last-window-width': (pspec: GObject.ParamSpec) => void;
            'notify::last-window-height': (pspec: GObject.ParamSpec) => void;
            'notify::load-on-startup': (pspec: GObject.ParamSpec) => void;
            'notify::enable-spell-checking': (pspec: GObject.ParamSpec) => void;
            'notify::auto-load-images': (pspec: GObject.ParamSpec) => void;
            'notify::enable-javascript': (pspec: GObject.ParamSpec) => void;
            'notify::enable-plugins': (pspec: GObject.ParamSpec) => void;
            'notify::enable-caret-browsing': (pspec: GObject.ParamSpec) => void;
            'notify::close-buttons-on-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::location-entry-search': (pspec: GObject.ParamSpec) => void;
            'notify::homepage': (pspec: GObject.ParamSpec) => void;
            'notify::proxy-type': (pspec: GObject.ParamSpec) => void;
            'notify::http-proxy': (pspec: GObject.ParamSpec) => void;
            'notify::http-proxy-port': (pspec: GObject.ParamSpec) => void;
            'notify::first-party-cookies-only': (pspec: GObject.ParamSpec) => void;
            'notify::maximum-history-age': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Settings.ConstructorProps {
            last_window_width: number;
            lastWindowWidth: number;
            last_window_height: number;
            lastWindowHeight: number;
            load_on_startup: StartupType;
            loadOnStartup: StartupType;
            enable_spell_checking: boolean;
            enableSpellChecking: boolean;
            auto_load_images: boolean;
            autoLoadImages: boolean;
            enable_javascript: boolean;
            enableJavascript: boolean;
            enable_plugins: boolean;
            enablePlugins: boolean;
            enable_caret_browsing: boolean;
            enableCaretBrowsing: boolean;
            close_buttons_on_tabs: boolean;
            closeButtonsOnTabs: boolean;
            location_entry_search: string;
            locationEntrySearch: string;
            homepage: string;
            proxy_type: ProxyType;
            proxyType: ProxyType;
            http_proxy: string;
            httpProxy: string;
            http_proxy_port: number;
            httpProxyPort: number;
            first_party_cookies_only: boolean;
            firstPartyCookiesOnly: boolean;
            maximum_history_age: number;
            maximumHistoryAge: number;
        }
    }

    class CoreSettings extends Settings {
        static $gtype: GObject.GType<CoreSettings>;

        // Properties

        get last_window_width(): number;
        set last_window_width(val: number);
        get lastWindowWidth(): number;
        set lastWindowWidth(val: number);
        get last_window_height(): number;
        set last_window_height(val: number);
        get lastWindowHeight(): number;
        set lastWindowHeight(val: number);
        get load_on_startup(): StartupType;
        set load_on_startup(val: StartupType);
        get loadOnStartup(): StartupType;
        set loadOnStartup(val: StartupType);
        get enable_spell_checking(): boolean;
        set enable_spell_checking(val: boolean);
        get enableSpellChecking(): boolean;
        set enableSpellChecking(val: boolean);
        get auto_load_images(): boolean;
        set auto_load_images(val: boolean);
        get autoLoadImages(): boolean;
        set autoLoadImages(val: boolean);
        get enable_javascript(): boolean;
        set enable_javascript(val: boolean);
        get enableJavascript(): boolean;
        set enableJavascript(val: boolean);
        get enable_plugins(): boolean;
        set enable_plugins(val: boolean);
        get enablePlugins(): boolean;
        set enablePlugins(val: boolean);
        get enable_caret_browsing(): boolean;
        set enable_caret_browsing(val: boolean);
        get enableCaretBrowsing(): boolean;
        set enableCaretBrowsing(val: boolean);
        get close_buttons_on_tabs(): boolean;
        set close_buttons_on_tabs(val: boolean);
        get closeButtonsOnTabs(): boolean;
        set closeButtonsOnTabs(val: boolean);
        get location_entry_search(): string;
        set location_entry_search(val: string);
        get locationEntrySearch(): string;
        set locationEntrySearch(val: string);
        get homepage(): string;
        set homepage(val: string);
        get proxy_type(): ProxyType;
        set proxy_type(val: ProxyType);
        get proxyType(): ProxyType;
        set proxyType(val: ProxyType);
        get http_proxy(): string;
        set http_proxy(val: string);
        get httpProxy(): string;
        set httpProxy(val: string);
        get http_proxy_port(): number;
        set http_proxy_port(val: number);
        get httpProxyPort(): number;
        set httpProxyPort(val: number);
        get first_party_cookies_only(): boolean;
        set first_party_cookies_only(val: boolean);
        get firstPartyCookiesOnly(): boolean;
        set firstPartyCookiesOnly(val: boolean);
        get maximum_history_age(): number;
        set maximum_history_age(val: number);
        get maximumHistoryAge(): number;
        set maximumHistoryAge(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CoreSettings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CoreSettings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CoreSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoreSettings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CoreSettings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoreSettings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CoreSettings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CoreSettings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): CoreSettings;

        // Methods

        get_plugin_enabled(plugin: string): boolean;
        set_plugin_enabled(plugin: string, enabled: boolean): void;
        uri_for_search(keywords?: string | null, search?: string | null): string;
        get_last_window_width(): number;
        set_last_window_width(value: number): void;
        get_last_window_height(): number;
        set_last_window_height(value: number): void;
        get_load_on_startup(): StartupType;
        set_load_on_startup(value: StartupType | null): void;
        get_enable_spell_checking(): boolean;
        set_enable_spell_checking(value: boolean): void;
        get_auto_load_images(): boolean;
        set_auto_load_images(value: boolean): void;
        get_enable_javascript(): boolean;
        set_enable_javascript(value: boolean): void;
        get_enable_plugins(): boolean;
        set_enable_plugins(value: boolean): void;
        get_enable_caret_browsing(): boolean;
        set_enable_caret_browsing(value: boolean): void;
        get_close_buttons_on_tabs(): boolean;
        set_close_buttons_on_tabs(value: boolean): void;
        get_location_entry_search(): string;
        set_location_entry_search(value: string): void;
        get_homepage(): string;
        set_homepage(value: string): void;
        get_proxy_type(): ProxyType;
        set_proxy_type(value: ProxyType | null): void;
        get_http_proxy(): string;
        set_http_proxy(value: string): void;
        get_http_proxy_port(): number;
        set_http_proxy_port(value: number): void;
        get_first_party_cookies_only(): boolean;
        set_first_party_cookies_only(value: boolean): void;
        get_maximum_history_age(): number;
        set_maximum_history_age(value: number): void;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filename': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filename: string;
        }
    }

    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        get filename(): string;
        set filename(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Settings;

        // Signals

        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_boolean(group: string, key: string, value: boolean, _default_: boolean): void;
        get_boolean(group: string, key: string, _default_: boolean): boolean;
        set_string(group: string, key: string, value: string, _default_?: string | null): void;
        get_string(group: string, key: string, _default_?: string | null): string | null;
        get_filename(): string;
        set_filename(value: string): void;
    }

    namespace Statusbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Statusbar.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Statusbar.ConstructorProps {
            label: string;
        }
    }

    class Statusbar extends Gtk.Statusbar {
        static $gtype: GObject.GType<Statusbar>;

        // Properties

        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Statusbar.SignalSignatures;

        // Fields

        has_children: boolean;

        // Constructors

        constructor(properties?: Partial<Statusbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Statusbar;

        // Signals

        connect<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Statusbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_label(): string | null;
        set_label(value?: string | null): void;
    }

    namespace SuggestionRow {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListBoxRow.SignalSignatures {
            'notify::item': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::regex': (pspec: GObject.ParamSpec) => void;
            'notify::key': (pspec: GObject.ParamSpec) => void;
            'notify::activatable': (pspec: GObject.ParamSpec) => void;
            'notify::selectable': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.ListBoxRow.ConstructorProps {
            item: DatabaseItem;
            location: string;
            regex: GLib.Regex;
            key: string;
        }
    }

    class SuggestionRow extends Gtk.ListBoxRow {
        static $gtype: GObject.GType<SuggestionRow>;

        // Properties

        get item(): DatabaseItem;
        set item(val: DatabaseItem);
        get location(): string;
        set location(val: string);
        get regex(): GLib.Regex;
        set regex(val: GLib.Regex);
        get key(): string;
        set key(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SuggestionRow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SuggestionRow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](item: DatabaseItem): SuggestionRow;
        // Conflicted with Gtk.ListBoxRow.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof SuggestionRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SuggestionRow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SuggestionRow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SuggestionRow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SuggestionRow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SuggestionRow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_item(): DatabaseItem;
        set_item(value: DatabaseItem): void;
        get_location(): string | null;
        set_location(value?: string | null): void;
        get_regex(): GLib.Regex | null;
        set_regex(value?: GLib.Regex | null): void;
        get_key(): string | null;
        set_key(value?: string | null): void;
    }

    namespace Switcher {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::stack': (pspec: GObject.ParamSpec) => void;
            'notify::show-close-buttons': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Box.ConstructorProps {
            stack: Gtk.Stack;
            show_close_buttons: boolean;
            showCloseButtons: boolean;
        }
    }

    class Switcher extends Gtk.Box {
        static $gtype: GObject.GType<Switcher>;

        // Properties

        get stack(): Gtk.Stack;
        set stack(val: Gtk.Stack);
        get show_close_buttons(): boolean;
        set show_close_buttons(val: boolean);
        get showCloseButtons(): boolean;
        set showCloseButtons(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Switcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Switcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Switcher;

        // Signals

        connect<K extends keyof Switcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Switcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Switcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Switcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Switcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Switcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_stack(): Gtk.Stack | null;
        set_stack(value?: Gtk.Stack | null): void;
        get_show_close_buttons(): boolean;
        set_show_close_buttons(value: boolean): void;
    }

    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends WebKit2.WebView.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::can-go-back': (pspec: GObject.ParamSpec) => void;
            'notify::can-go-forward': (pspec: GObject.ParamSpec) => void;
            'notify::item': (pspec: GObject.ParamSpec) => void;
            'notify::display-uri': (pspec: GObject.ParamSpec) => void;
            'notify::display-title': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::pinned': (pspec: GObject.ParamSpec) => void;
            'notify::secure': (pspec: GObject.ParamSpec) => void;
            'notify::link-uri': (pspec: GObject.ParamSpec) => void;
            'notify::automation-presentation-type': (pspec: GObject.ParamSpec) => void;
            'notify::camera-capture-state': (pspec: GObject.ParamSpec) => void;
            'notify::default-content-security-policy': (pspec: GObject.ParamSpec) => void;
            'notify::display-capture-state': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-load-progress': (pspec: GObject.ParamSpec) => void;
            'notify::favicon': (pspec: GObject.ParamSpec) => void;
            'notify::is-controlled-by-automation': (pspec: GObject.ParamSpec) => void;
            'notify::is-ephemeral': (pspec: GObject.ParamSpec) => void;
            'notify::is-loading': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-playing-audio': (pspec: GObject.ParamSpec) => void;
            'notify::is-web-process-responsive': (pspec: GObject.ParamSpec) => void;
            'notify::microphone-capture-state': (pspec: GObject.ParamSpec) => void;
            'notify::page-id': (pspec: GObject.ParamSpec) => void;
            'notify::related-view': (pspec: GObject.ParamSpec) => void;
            'notify::settings': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::user-content-manager': (pspec: GObject.ParamSpec) => void;
            'notify::web-context': (pspec: GObject.ParamSpec) => void;
            'notify::web-extension-mode': (pspec: GObject.ParamSpec) => void;
            'notify::website-policies': (pspec: GObject.ParamSpec) => void;
            'notify::zoom-level': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends WebKit2.WebView.ConstructorProps {
            id: string;
            progress: number;
            can_go_back: boolean | any;
            canGoBack: boolean;
            can_go_forward: boolean | any;
            canGoForward: boolean;
            item: DatabaseItem;
            display_uri: string;
            displayUri: string;
            display_title: string;
            displayTitle: string;
            color: string;
            pinned: boolean;
            secure: boolean;
            link_uri: string;
            linkUri: string;
        }
    }

    class Tab extends WebKit2.WebView {
        static $gtype: GObject.GType<Tab>;

        // Properties

        get id(): string;
        get progress(): number;
        set progress(val: number);
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_go_back: boolean | any;
        get canGoBack(): boolean;
        set canGoBack(val: boolean);
        // This accessor conflicts with a field or function name in a parent class or interface.
        can_go_forward: boolean | any;
        get canGoForward(): boolean;
        set canGoForward(val: boolean);
        get item(): DatabaseItem;
        set item(val: DatabaseItem);
        get display_uri(): string;
        set display_uri(val: string);
        get displayUri(): string;
        set displayUri(val: string);
        get display_title(): string;
        set display_title(val: string);
        get displayTitle(): string;
        set displayTitle(val: string);
        get color(): string;
        set color(val: string);
        get pinned(): boolean;
        set pinned(val: boolean);
        get secure(): boolean;
        set secure(val: boolean);
        get link_uri(): string;
        set link_uri(val: string);
        get linkUri(): string;
        set linkUri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tab.SignalSignatures;

        // Fields

        popover: Gtk.Popover;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            related: Tab | null,
            web_context: WebKit2.WebContext,
            uri?: string | null,
            title?: string | null,
        ): Tab;
        // Conflicted with WebKit2.WebView.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_id(): string;
        get_progress(): number;
        set_progress(value: number): void;
        get_can_go_back(): boolean;
        set_can_go_back(value: boolean): void;
        get_can_go_forward(): boolean;
        set_can_go_forward(value: boolean): void;
        get_item(): DatabaseItem | null;
        set_item(value?: DatabaseItem | null): void;
        get_display_uri(): string;
        set_display_uri(value: string): void;
        get_display_title(): string;
        set_display_title(value: string): void;
        get_color(): string | null;
        set_color(value?: string | null): void;
        get_pinned(): boolean;
        set_pinned(value: boolean): void;
        get_secure(): boolean;
        set_secure(value: boolean): void;
        get_link_uri(): string;
        set_link_uri(value: string): void;
    }

    namespace Tally {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            clicked: () => void;
            'notify::tab': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::show-close': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.EventBox.ConstructorProps {
            tab: Tab;
            uri: string;
            title: string;
            show_close: boolean;
            showClose: boolean;
            active: boolean;
        }
    }

    class Tally extends Gtk.EventBox {
        static $gtype: GObject.GType<Tally>;

        // Properties

        get tab(): Tab;
        set tab(val: Tab);
        get uri(): string;
        set uri(val: string);
        get title(): string;
        set title(val: string);
        get show_close(): boolean;
        set show_close(val: boolean);
        get showClose(): boolean;
        set showClose(val: boolean);
        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tally.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tally.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](tab: Tab): Tally;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Tally.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tally.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tally.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tally.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tally.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tally.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_tab(): Tab;
        set_tab(value: Tab): void;
        get_uri(): string | null;
        set_uri(value?: string | null): void;
        get_title(): string | null;
        set_title(value?: string | null): void;
        get_show_close(): boolean;
        set_show_close(value: boolean): void;
        get_active(): boolean;
        set_active(value: boolean): void;
    }

    namespace Urlbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            'notify::key': (pspec: GObject.ParamSpec) => void;
            'notify::regex': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::secure': (pspec: GObject.ParamSpec) => void;
            'notify::activates-default': (pspec: GObject.ParamSpec) => void;
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::caps-lock-warning': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::enable-emoji-completion': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::inner-border': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char': (pspec: GObject.ParamSpec) => void;
            'notify::invisible-char-set': (pspec: GObject.ParamSpec) => void;
            'notify::max-length': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite-mode': (pspec: GObject.ParamSpec) => void;
            'notify::placeholder-text': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::primary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::progress-fraction': (pspec: GObject.ParamSpec) => void;
            'notify::progress-pulse-step': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-offset': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-activatable': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-gicon': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-pixbuf': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-stock': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-storage-type': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-icon-tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::selection-bound': (pspec: GObject.ParamSpec) => void;
            'notify::shadow-type': (pspec: GObject.ParamSpec) => void;
            'notify::show-emoji-icon': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::text-length': (pspec: GObject.ParamSpec) => void;
            'notify::truncate-multiline': (pspec: GObject.ParamSpec) => void;
            'notify::visibility': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends Gtk.Entry.ConstructorProps {
            key: string;
            regex: GLib.Regex;
            location: string;
            uri: string;
            secure: boolean;
        }
    }

    class Urlbar extends Gtk.Entry {
        static $gtype: GObject.GType<Urlbar>;

        // Properties

        get key(): string;
        set key(val: string);
        get regex(): GLib.Regex;
        set regex(val: GLib.Regex);
        get location(): string;
        set location(val: string);
        get uri(): string;
        set uri(val: string);
        get secure(): boolean;
        set secure(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Urlbar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Urlbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Urlbar;

        // Signals

        connect<K extends keyof Urlbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Urlbar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Urlbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Urlbar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Urlbar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Urlbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        create_row(item: GObject.Object): Gtk.Widget;
        popdown(): void;
        get_key(): string | null;
        set_key(value?: string | null): void;
        get_regex(): GLib.Regex | null;
        set_regex(value?: GLib.Regex | null): void;
        get_location(): string | null;
        set_location(value?: string | null): void;
        get_uri(): string;
        set_uri(value: string): void;
        get_secure(): boolean;
        set_secure(value: boolean): void;
    }

    type AppClass = typeof App;
    abstract class AppPrivate {
        static $gtype: GObject.GType<AppPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BrowserClass = typeof Browser;
    abstract class BrowserPrivate {
        static $gtype: GObject.GType<BrowserPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClearPrivateDataClass = typeof ClearPrivateData;
    abstract class ClearPrivateDataPrivate {
        static $gtype: GObject.GType<ClearPrivateDataPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SuggestionItemClass = typeof SuggestionItem;
    abstract class SuggestionItemPrivate {
        static $gtype: GObject.GType<SuggestionItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CompletionClass = typeof Completion;
    abstract class CompletionPrivate {
        static $gtype: GObject.GType<CompletionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DatabaseStatementClass = typeof DatabaseStatement;
    abstract class DatabaseStatementPrivate {
        static $gtype: GObject.GType<DatabaseStatementPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DatabaseItemClass = typeof DatabaseItem;
    abstract class DatabaseItemPrivate {
        static $gtype: GObject.GType<DatabaseItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DatabaseClass = typeof Database;
    abstract class DatabasePrivate {
        static $gtype: GObject.GType<DatabasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DownloadButtonClass = typeof DownloadButton;
    abstract class DownloadButtonPrivate {
        static $gtype: GObject.GType<DownloadButtonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DownloadItemClass = typeof DownloadItem;
    abstract class DownloadItemPrivate {
        static $gtype: GObject.GType<DownloadItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DownloadRowClass = typeof DownloadRow;
    abstract class DownloadRowPrivate {
        static $gtype: GObject.GType<DownloadRowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FaviconClass = typeof Favicon;
    abstract class FaviconPrivate {
        static $gtype: GObject.GType<FaviconPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type HistoryDatabaseClass = typeof HistoryDatabase;
    abstract class HistoryDatabasePrivate {
        static $gtype: GObject.GType<HistoryDatabasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NavigationbarClass = typeof Navigationbar;
    abstract class NavigationbarPrivate {
        static $gtype: GObject.GType<NavigationbarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NetworkCheckClass = typeof NetworkCheck;
    abstract class NetworkCheckPrivate {
        static $gtype: GObject.GType<NetworkCheckPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PluginsClass = typeof Plugins;
    abstract class PluginsPrivate {
        static $gtype: GObject.GType<PluginsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LabelWidgetClass = typeof LabelWidget;
    abstract class LabelWidgetPrivate {
        static $gtype: GObject.GType<LabelWidgetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PreferencesClass = typeof Preferences;
    abstract class PreferencesPrivate {
        static $gtype: GObject.GType<PreferencesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CoreSettingsClass = typeof CoreSettings;
    abstract class CoreSettingsPrivate {
        static $gtype: GObject.GType<CoreSettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StatusbarClass = typeof Statusbar;
    abstract class StatusbarPrivate {
        static $gtype: GObject.GType<StatusbarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SuggestionRowClass = typeof SuggestionRow;
    abstract class SuggestionRowPrivate {
        static $gtype: GObject.GType<SuggestionRowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SwitcherClass = typeof Switcher;
    abstract class SwitcherPrivate {
        static $gtype: GObject.GType<SwitcherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TabClass = typeof Tab;
    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TallyClass = typeof Tally;
    abstract class TallyPrivate {
        static $gtype: GObject.GType<TallyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UrlbarClass = typeof Urlbar;
    abstract class UrlbarPrivate {
        static $gtype: GObject.GType<UrlbarPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AppActivatableIface = typeof AppActivatable;
    type BrowserActivatableIface = typeof BrowserActivatable;
    type ClearPrivateDataActivatableIface = typeof ClearPrivateDataActivatable;
    type CompletionActivatableIface = typeof CompletionActivatable;
    type LoggableIface = typeof Loggable;
    type PreferencesActivatableIface = typeof PreferencesActivatable;
    type TabActivatableIface = typeof TabActivatable;
    namespace AppActivatable {
        // Constructor properties interface

        interface ConstructorProps extends Peas.ExtensionBase.ConstructorProps {
            app: App;
        }
    }

    export interface AppActivatableNamespace {
        $gtype: GObject.GType<AppActivatable>;
        prototype: AppActivatable;
    }
    interface AppActivatable extends Peas.ExtensionBase {
        // Properties

        get app(): App;
        set app(val: App);

        // Methods

        activate(): void;
        get_app(): App;
        set_app(value: App): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_get_app(): App;
        vfunc_set_app(value: App): void;
    }

    export const AppActivatable: AppActivatableNamespace & {
        new (): AppActivatable; // This allows `obj instanceof AppActivatable`
    };

    namespace BrowserActivatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            browser: Browser;
        }
    }

    export interface BrowserActivatableNamespace {
        $gtype: GObject.GType<BrowserActivatable>;
        prototype: BrowserActivatable;
    }
    interface BrowserActivatable extends GObject.Object {
        // Properties

        get browser(): Browser;
        set browser(val: Browser);

        // Methods

        activate(): void;
        get_browser(): Browser;
        set_browser(value: Browser): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_get_browser(): Browser;
        vfunc_set_browser(value: Browser): void;
    }

    export const BrowserActivatable: BrowserActivatableNamespace & {
        new (): BrowserActivatable; // This allows `obj instanceof BrowserActivatable`
    };

    namespace ClearPrivateDataActivatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            box: Gtk.Box;
        }
    }

    export interface ClearPrivateDataActivatableNamespace {
        $gtype: GObject.GType<ClearPrivateDataActivatable>;
        prototype: ClearPrivateDataActivatable;
    }
    interface ClearPrivateDataActivatable extends GObject.Object {
        // Properties

        get box(): Gtk.Box;
        set box(val: Gtk.Box);

        // Methods

        activate(): void;
        clear(timespan: GLib.TimeSpan): globalThis.Promise<void>;
        clear(timespan: GLib.TimeSpan, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        clear(
            timespan: GLib.TimeSpan,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        clear_finish(_res_: Gio.AsyncResult): void;
        get_box(): Gtk.Box;
        set_box(value: Gtk.Box): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_clear(timespan: GLib.TimeSpan, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_clear_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_box(): Gtk.Box;
        vfunc_set_box(value: Gtk.Box): void;
    }

    export const ClearPrivateDataActivatable: ClearPrivateDataActivatableNamespace & {
        new (): ClearPrivateDataActivatable; // This allows `obj instanceof ClearPrivateDataActivatable`
    };

    namespace CompletionActivatable {
        // Constructor properties interface

        interface ConstructorProps extends Peas.ExtensionBase.ConstructorProps {
            completion: Completion;
        }
    }

    export interface CompletionActivatableNamespace {
        $gtype: GObject.GType<CompletionActivatable>;
        prototype: CompletionActivatable;
    }
    interface CompletionActivatable extends Peas.ExtensionBase {
        // Properties

        get completion(): Completion;
        set completion(val: Completion);

        // Methods

        activate(): void;
        get_completion(): Completion;
        set_completion(value: Completion): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_get_completion(): Completion;
        vfunc_set_completion(value: Completion): void;
    }

    export const CompletionActivatable: CompletionActivatableNamespace & {
        new (): CompletionActivatable; // This allows `obj instanceof CompletionActivatable`
    };

    namespace Loggable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LoggableNamespace {
        $gtype: GObject.GType<Loggable>;
        prototype: Loggable;
    }
    interface Loggable extends GObject.Object {
        // Methods

        get_domain(): string;
        get_logging(): boolean;
    }

    export const Loggable: LoggableNamespace & {
        new (): Loggable; // This allows `obj instanceof Loggable`
    };

    namespace PreferencesActivatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            preferences: Preferences;
        }
    }

    export interface PreferencesActivatableNamespace {
        $gtype: GObject.GType<PreferencesActivatable>;
        prototype: PreferencesActivatable;
    }
    interface PreferencesActivatable extends GObject.Object {
        // Properties

        get preferences(): Preferences;
        set preferences(val: Preferences);

        // Methods

        activate(): void;
        get_preferences(): Preferences;
        set_preferences(value: Preferences): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_get_preferences(): Preferences;
        vfunc_set_preferences(value: Preferences): void;
    }

    export const PreferencesActivatable: PreferencesActivatableNamespace & {
        new (): PreferencesActivatable; // This allows `obj instanceof PreferencesActivatable`
    };

    namespace TabActivatable {
        // Constructor properties interface

        interface ConstructorProps extends Peas.ExtensionBase.ConstructorProps {
            tab: Tab;
        }
    }

    export interface TabActivatableNamespace {
        $gtype: GObject.GType<TabActivatable>;
        prototype: TabActivatable;
    }
    interface TabActivatable extends Peas.ExtensionBase {
        // Properties

        get tab(): Tab;
        set tab(val: Tab);

        // Methods

        activate(): void;
        get_tab(): Tab;
        set_tab(value: Tab): void;

        // Virtual methods

        vfunc_activate(): void;
        vfunc_get_tab(): Tab;
        vfunc_set_tab(value: Tab): void;
    }

    export const TabActivatable: TabActivatableNamespace & {
        new (): TabActivatable; // This allows `obj instanceof TabActivatable`
    };

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

export default Midori;

// END
