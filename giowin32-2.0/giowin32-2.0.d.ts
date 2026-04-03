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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GioWin32 {
    /**
     * GioWin32-2.0
     */

    /**
     * If `registry_key` is `null` then the default path
     * `HKEY_CURRENT_USER\Software\GSettings` is used.
     * @param registry_key the path to the registry key where                settings are stored, or `null`.
     * @returns a registry-backed {@link Gio.SettingsBackend}
     * @since 2.78
     */
    function registry_settings_backend_new(registry_key?: string | null): Gio.SettingsBackend;
    namespace InputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {
            'notify::close-handle': (pspec: GObject.ParamSpec) => void;
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.InputStream.ConstructorProps {
            close_handle: boolean;
            closeHandle: boolean;
            handle: any;
        }
    }

    /**
     * {@link GioWin32.InputStream} implements {@link Gio.InputStream} for reading from a
     * Windows file handle.
     *
     * Note that `<gio/gwin32inputstream.h>` belongs to the Windows-specific GIO
     * interfaces, thus you have to use the `gio-windows-2.0.pc` pkg-config file
     * when using it.
     * @gir-type Class
     */
    class InputStream extends Gio.InputStream {
        static $gtype: GObject.GType<InputStream>;

        // Properties

        /**
         * Whether to close the file handle when the stream is closed.
         * @since 2.26
         */
        get close_handle(): boolean;
        set close_handle(val: boolean);
        /**
         * Whether to close the file handle when the stream is closed.
         * @since 2.26
         */
        get closeHandle(): boolean;
        set closeHandle(val: boolean);
        /**
         * The handle that the stream reads from.
         * @since 2.26
         * @construct-only
         */
        get handle(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](handle: any | null, close_handle: boolean): InputStream;

        // Signals

        /** @signal */
        connect<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns whether the handle of `stream` will be
         * closed when the stream is closed.
         * @returns `true` if the handle is closed when done
         */
        get_close_handle(): boolean;
        /**
         * Return the Windows file handle that the stream reads from.
         * @returns The file handle of `stream`
         */
        get_handle(): any | null;
        /**
         * Sets whether the handle of `stream` shall be closed
         * when the stream is closed.
         * @param close_handle `true` to close the handle when done
         */
        set_close_handle(close_handle: boolean): void;
    }

    namespace OutputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.OutputStream.SignalSignatures {
            'notify::close-handle': (pspec: GObject.ParamSpec) => void;
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.OutputStream.ConstructorProps {
            close_handle: boolean;
            closeHandle: boolean;
            handle: any;
        }
    }

    /**
     * {@link GioWin32.OutputStream} implements {@link Gio.OutputStream} for writing to a
     * Windows file handle.
     *
     * Note that `<gio/gwin32outputstream.h>` belongs to the Windows-specific GIO
     * interfaces, thus you have to use the `gio-windows-2.0.pc` pkg-config file
     * when using it.
     * @gir-type Class
     */
    class OutputStream extends Gio.OutputStream {
        static $gtype: GObject.GType<OutputStream>;

        // Properties

        /**
         * Whether to close the file handle when the stream is closed.
         * @since 2.26
         */
        get close_handle(): boolean;
        set close_handle(val: boolean);
        /**
         * Whether to close the file handle when the stream is closed.
         * @since 2.26
         */
        get closeHandle(): boolean;
        set closeHandle(val: boolean);
        /**
         * The file handle that the stream writes to.
         * @since 2.26
         * @construct-only
         */
        get handle(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](handle: any | null, close_handle: boolean): OutputStream;

        // Signals

        /** @signal */
        connect<K extends keyof OutputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OutputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OutputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OutputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OutputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns whether the handle of `stream` will be closed when the
         * stream is closed.
         * @returns `true` if the handle is closed when done
         */
        get_close_handle(): boolean;
        /**
         * Return the Windows handle that the stream writes to.
         * @returns The handle descriptor of `stream`
         */
        get_handle(): any | null;
        /**
         * Sets whether the handle of `stream` shall be closed when the stream
         * is closed.
         * @param close_handle `true` to close the handle when done
         */
        set_close_handle(close_handle: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type InputStreamClass = typeof InputStream;
    /**
     * @gir-type Struct
     */
    abstract class InputStreamPrivate {
        static $gtype: GObject.GType<InputStreamPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class NetworkMonitor {
        static $gtype: GObject.GType<NetworkMonitor>;
    }

    /**
     * @gir-type Struct
     */
    class NetworkMonitorClass {
        static $gtype: GObject.GType<NetworkMonitorClass>;

        // Constructors

        constructor(
            properties?: Partial<{
                parent_class: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class NetworkMonitorPrivate {
        static $gtype: GObject.GType<NetworkMonitorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OutputStreamClass = typeof OutputStream;
    /**
     * @gir-type Struct
     */
    abstract class OutputStreamPrivate {
        static $gtype: GObject.GType<OutputStreamPrivate>;
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

export default GioWin32;

// END
