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

export namespace GtkSessionLock {
    /**
     * GtkSessionLock-0.1
     */

    /**
     * @param window A lock surface.
     * @returns The underlying lock surface Wayland object
     */
    function get_ext_session_lock_surface_v1(window: Gtk.Window): any | null;
    /**
     * @returns the major version number of the GTK Session Lock library
     */
    function get_major_version(): number;
    /**
     * @returns the micro/patch version number of the GTK Session Lock library
     */
    function get_micro_version(): number;
    /**
     * @returns the minor version number of the GTK Session Lock library
     */
    function get_minor_version(): number;
    /**
     * May block for a Wayland roundtrip the first time it's called.
     * @returns version of the ext_session_lock_v1 protocol supported by the compositor or 0 if the protocol is not supported.
     */
    function get_protocol_version(): number;
    /**
     * @param window A {@link Gtk.Window} that may or may not have a lock surface.
     * @returns if `window` has been initialized as a lock surface.
     */
    function is_lock_window(window: Gtk.Window): boolean;
    /**
     * May block for a Wayland roundtrip the first time it's called.
     * @returns `true` if the platform is Wayland and Wayland compositor supports the ext_session_lock_v1 protocol.
     */
    function is_supported(): boolean;
    /**
     * Prepare a new `SessionLockLock`. You should connect signals to it before
     * calling its lock method.
     * @returns A new `SessionLockLock`.
     */
    function prepare_lock(): Lock;
    /**
     * If the given window is a lock window, unmap the surface. This must be called
     * before the window is unmapped (e.g. hidden).
     * @param window
     * @since 0.2
     */
    function unmap_lock_window(window: Gtk.Window): void;
    namespace Lock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            finished: () => void;
            /**
             * @signal
             * @run-first
             */
            locked: () => void;
            'notify::lock-manager': (pspec: GObject.ParamSpec) => void;
            'notify::lock-obj': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            lock_manager: any;
            lockManager: any;
            lock_obj: any;
            lockObj: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Lock extends GObject.Object {
        static $gtype: GObject.GType<Lock>;

        // Properties

        /**
         * @construct-only
         */
        get lock_manager(): any;
        /**
         * @construct-only
         */
        get lockManager(): any;
        get lock_obj(): any;
        set lock_obj(val: any);
        get lockObj(): any;
        set lockObj(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Lock.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Lock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Lock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Lock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Lock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Lock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Destory an inactive lock object. You should call this method only after
         * receiving the finished signal.
         */
        destroy(): void;
        /**
         * Actually perform the locking operation. This should be run after connecting
         * to this object's signals.
         *
         * The compositor will hide all surfaces except those created via the
         * `gtk_session_lock_lock_new_surface` method.
         */
        lock_lock(): void;
        /**
         * This method must be called after gtk_session_lock_lock_lock. If the session
         * is locked successfully, the specified window will be shown on the given
         * monitor. You must only ever call this method once for a given lock and
         * monitor. The window will automatically be stretched to cover the entire
         * screen.
         * @param gtk_window
         * @param monitor
         */
        new_surface(gtk_window: Gtk.Window, monitor: Gdk.Monitor): void;
        /**
         * Unlock an active session lock and dispose of it. It cannot be reused.
         * You should generally call this method only after verifying a user's
         * identity.
         */
        unlock_and_destroy(): void;
    }

    /**
     * @gir-type Alias
     */
    type LockClass = typeof Lock;
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

export default GtkSessionLock;

// END
