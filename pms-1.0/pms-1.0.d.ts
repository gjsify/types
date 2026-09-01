
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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Adw from '@girs/adw-1';

export namespace Pms {

    /**
     * Pms-1.0
     */


    /**
     * @gir-type Enum
     */
    enum OsUpdateFlags {
        OS_UPDATE_FLAG_NONE = 0,
    }


    /**
     * @gir-type Enum
     */
    export namespace OsUpdateState {
        export const $gtype: GObject.GType<OsUpdateState>;
    }

    /**
     * @gir-type Enum
     */
    enum OsUpdateState {
        FAILED = -1,
        UNKNOWN = 0,
        READY = 1,
        FETCHING = 2,
        FETCHED = 3,
        INSTALLING = 4,
        INSTALLED = 5,
    }


    /**
     * Get the default os updater. Check it's `supported` property to figure out
     * if it is actually usable
     * @returns The updater
     */
    function get_default_os_updater_sync(): OsUpdater;

    /**
     * Initialise the library.
     */
    function init(): void;

    /**
     * Gets the country description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * 
     * This just wraps `gnome_get_country_from_locale()`.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the country description. Caller takes ownership.
     */
    function lang_get_country_from_locale(locale: string, translation: string | null): string;

    /**
     * Gets the language description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     * 
     * This just wraps `gnome_get_language_from_locale()`.
     * @param locale a locale string
     * @param translation a locale string
     * @returns the language description. Caller takes ownership.
     */
    function lang_get_language_from_locale(locale: string, translation: string | null): string;

    namespace LanguageChooser {
        // Signal signatures
        interface SignalSignatures extends Adw.Dialog.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "language-selected": () => void;
            "notify::can-close": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::content-height": (pspec: GObject.ParamSpec) => void;
            "notify::content-width": (pspec: GObject.ParamSpec) => void;
            "notify::current-breakpoint": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::follows-content-size": (pspec: GObject.ParamSpec) => void;
            "notify::presentation-mode": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.Dialog.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LanguageChooser extends Adw.Dialog implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.ShortcutManager {
        static $gtype: GObject.GType<LanguageChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LanguageChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LanguageChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): LanguageChooser;

        // Signals
        /** @signal */
        connect<K extends keyof LanguageChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LanguageChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LanguageChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LanguageChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LanguageChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        clear_filter(): void;

        get_language(): string;

        /**
         * @param language 
         */
        set_language(language: string): void;

        /**
         * Add a {@link Gtk.ShortcutController} to be managed.
         * @param controller 
         * @virtual
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;

        /**
         * Remove a {@link Gtk.ShortcutController} that had previously
         *   been added
         * @param controller 
         * @virtual
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
    }


    namespace OsUpdate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            progress: number;
            state: OsUpdateState;
            version: string;
        }
    }

    /**
     * An os update.
     * @gir-type Class
     */
    class OsUpdate extends GObject.Object {
        static $gtype: GObject.GType<OsUpdate>;

        // Properties
        /**
         * @read-only
         * @default 0
         */
        get progress(): number;

        /**
         * @read-only
         * @default Pms.OsUpdateState.UNKNOWN
         */
        get state(): OsUpdateState;

        /**
         * @construct-only
         * @default null
         */
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OsUpdate.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OsUpdate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof OsUpdate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsUpdate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OsUpdate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsUpdate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OsUpdate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OsUpdate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_progress(): number;

        get_state(): OsUpdateState;

        get_version(): string;
    }


    namespace OsUpdater {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::latest-update": (pspec: GObject.ParamSpec) => void;
            "notify::ready": (pspec: GObject.ParamSpec) => void;
            "notify::supported": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            latest_update: OsUpdate;
            latestUpdate: OsUpdate;
            ready: boolean;
            supported: boolean;
        }
    }

    /**
     * Class performing OS updates
     * @gir-type Class
     */
    class OsUpdater extends GObject.Object {
        static $gtype: GObject.GType<OsUpdater>;

        // Properties
        /**
         * The latest update to install
         * @read-only
         */
        get latest_update(): OsUpdate;

        /**
         * The latest update to install
         * @read-only
         */
        get latestUpdate(): OsUpdate;

        /**
         * Whether the updater is done checking for updates
         * @read-only
         * @default false
         */
        get ready(): boolean;

        /**
         * Whether the system supports this service.
         * @read-only
         * @default false
         */
        get supported(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OsUpdater.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OsUpdater.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof OsUpdater.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsUpdater.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OsUpdater.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OsUpdater.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OsUpdater.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OsUpdater.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         * @virtual
         */
        vfunc_cancel_fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param res 
         * @virtual
         */
        vfunc_cancel_fetch_update_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         * @virtual
         */
        vfunc_cancel_install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param res 
         * @virtual
         */
        vfunc_cancel_install_update_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         * @virtual
         */
        vfunc_fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param res 
         * @virtual
         */
        vfunc_fetch_update_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         * @virtual
         */
        vfunc_install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param res 
         * @virtual
         */
        vfunc_install_update_finish(res: Gio.AsyncResult): boolean;

        // Methods
        /**
         * @param update 
         * @param flags 
         * @param cancel 
         */
        cancel_fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        cancel_fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        cancel_fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param res 
         * @throws GLib.Error
         */
        cancel_fetch_update_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         */
        cancel_install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        cancel_install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        cancel_install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param res 
         * @throws GLib.Error
         */
        cancel_install_update_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         */
        fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        fetch_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param res 
         * @throws GLib.Error
         */
        fetch_update_finish(res: Gio.AsyncResult): boolean;

        /**
         * Get the latest update. This update, when applied would update the system
         * to the most recent version.
         * @returns the update
         */
        get_latest_update(): OsUpdate;

        get_ready(): boolean;

        get_supported(): boolean;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         */
        install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param update 
         * @param flags 
         * @param cancel 
         * @param callback 
         */
        install_update(update: OsUpdate, flags: OsUpdateFlags, cancel: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param res 
         * @throws GLib.Error
         */
        install_update_finish(res: Gio.AsyncResult): boolean;
    }


    namespace OskLayoutPrefs {
        // Signal signatures
        interface SignalSignatures extends Adw.PreferencesGroup.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::header-suffix": (pspec: GObject.ParamSpec) => void;
            "notify::separate-rows": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Adw.PreferencesGroup.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * A preferences group managing OSK layouts.
     * 
     * Layouts added via this dialog are automatically added to the list
     * of input sources available to the user.
     * @gir-type Class
     */
    class OskLayoutPrefs extends Adw.PreferencesGroup implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<OskLayoutPrefs>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OskLayoutPrefs.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OskLayoutPrefs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): OskLayoutPrefs;

        // Signals
        /** @signal */
        connect<K extends keyof OskLayoutPrefs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OskLayoutPrefs.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OskLayoutPrefs.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OskLayoutPrefs.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OskLayoutPrefs.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OskLayoutPrefs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add a layout based on the given information to the currently active
         * layouts.
         * @param locale The locale to add a layout for
         * @param flavor A flavor if s.th. like dvorak or colemak is preferred
         * @returns `TRUE` if a layout was added or the layout is already present.
         */
        add_for_locale(locale: string, flavor: string | null): boolean;

        /**
         * Load the layouts the currently running OSK can handle. This is a
         * blocking sync call. See [MsOskLayouts.load_osk_layouts_async] for
         * an async version.
         */
        load_osk_layouts(): void;

        /**
         * Load the layouts the currently running OSK can handle. This is an async call.
         * Use `ms_osk_layout_prefs_load_osk_layouts_async` to retrieve the result.
         * @param cancellable 
         */
        load_osk_layouts_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Load the layouts the currently running OSK can handle. This is an async call.
         * Use `ms_osk_layout_prefs_load_osk_layouts_async` to retrieve the result.
         * @param cancellable 
         * @param callback 
         */
        load_osk_layouts_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Load the layouts the currently running OSK can handle. This is an async call.
         * Use `ms_osk_layout_prefs_load_osk_layouts_async` to retrieve the result.
         * @param cancellable 
         * @param callback 
         */
        load_osk_layouts_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param res 
         * @throws GLib.Error
         */
        load_osk_layouts_finish(res: Gio.AsyncResult): boolean;
    }


    /**
     * @gir-type Alias
     */
    type LanguageChooserClass = typeof LanguageChooser;

    /**
     * @gir-type Alias
     */
    type OsUpdateClass = typeof OsUpdate;

    /**
     * @gir-type Alias
     */
    type OsUpdaterClass = typeof OsUpdater;

    /**
     * @gir-type Alias
     */
    type OskLayoutPrefsClass = typeof OskLayoutPrefs;

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

export default Pms;

// END
