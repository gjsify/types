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

export namespace Gtk4SessionLock {
    /**
     * Gtk4SessionLock-1.0
     */

    /**
     * May block for a Wayland roundtrip the first time it's called.
     * @returns `true` if the platform is Wayland and Wayland compositor supports the Session Lock protocol.
     */
    function is_supported(): boolean;
    namespace Instance {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::failed signal is fired when the lock could not be acquired.
             * @signal
             * @run-first
             */
            failed: () => void;
            /**
             * The ::locked signal is fired when the screen is successfully locked.
             * @signal
             * @run-first
             */
            locked: () => void;
            /**
             * The ::monitor signal is fired once for each monitor that exists when a lock is started, and then whenever a new
             * monitor is detected during the lock. You generally want to call `gtk_session_lock_instance_assign_window_to_monitor()`
             * once in the handler for this signal with a newly created window and the given monitor.
             *
             * This API does not directly tell you when a monitor is removed (GTK APIs can be used for that), however the window you
             * send to `gtk_session_lock_instance_assign_window_to_monitor()` will be automatically unmapped and dereferenced when its
             * monitor is removed or the screen is unlocked.
             * @signal
             * @since 1.2
             * @run-first
             */
            monitor: (arg0: Gdk.Monitor) => void;
            /**
             * The ::unlocked signal is fired when the session is unlocked, which may have been caused by a call to
             * `gtk_session_lock_instance_unlock()` or by the compositor.
             * @signal
             * @run-first
             */
            unlocked: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An instance of the object used to control locking the screen.
     * Multiple instances can exist at once, but only one can be locked at a time.
     * @gir-type Class
     * @since 1.1
     */
    class Instance extends GObject.Object {
        static $gtype: GObject.GType<Instance>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Instance.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Instance.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Instance;

        // Signals

        /** @signal */
        connect<K extends keyof Instance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Instance.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Instance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Instance.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Instance.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Instance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This must be called with a different unrealized window once for each monitor immediately after calling
         * `gtk_session_lock_lock()`. Hiding a window that is active on a monitor or not letting a window be resized by the
         * library is not allowed (may result in a Wayland protocol error). The window will be unmapped and `gtk_window_destroy()`
         * called on it when the current lock ends.
         * @param window The GTK Window to use as a lock surface
         * @param monitor The monitor to show it on
         */
        assign_window_to_monitor(window: Gtk.Window, monitor: Gdk.Monitor): void;
        /**
         * Returns if this instance currently holds a lock.
         */
        is_locked(): boolean;
        /**
         * Lock the screen. This should be called before assigning any windows to monitors. If this function fails the ::failed
         * signal is emitted, if it succeeds the ::locked signal is emitted. The ::failed signal may be emitted before the
         * function returns (for example, if another {@link Gtk4SessionLock.Instance} holds a lock) or later (if another process holds a
         * lock). The only case where neither signal is triggered is if the instance is already locked.
         * @returns false on immediate fail, true if lock acquisition was successfully started
         */
        lock(): boolean;
        /**
         * If the screen is locked by this instance unlocks it and fires ::unlocked. Otherwise has no effect
         */
        unlock(): void;
    }

    /**
     * @gir-type Alias
     */
    type InstanceClass = typeof Instance;
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

export default Gtk4SessionLock;

// END
