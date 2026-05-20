
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

export namespace Fep {

    /**
     * Fep-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace GAttrType {
        export const $gtype: GObject.GType<GAttrType>;
    }

    /**
     * @gir-type Enum
     */
    enum GAttrType {
        /**
         * Decorate with underline
         */
        UNDERLINE,
        /**
         * Foreground color
         */
        FOREGROUND,
        /**
         * Background color
         */
        BACKGROUND,
        /**
         * No attribute
         */
        NONE,
        /**
         * Reverse video
         */
        STANDOUT,
        /**
         * Bold
         */
        BOLD,
        /**
         * Blink
         */
        BLINK,
    }


    /**
     * @gir-type Enum
     */
    export namespace GAttrUnderline {
        export const $gtype: GObject.GType<GAttrUnderline>;
    }

    /**
     * @gir-type Enum
     */
    enum GAttrUnderline {
        /**
         * No underline
         */
        NONE,
        /**
         * Single underline
         */
        SINGLE,
        /**
         * Double underline
         */
        DOUBLE,
        /**
         * Low underline? FIXME
         */
        LOW,
        /**
         * Error underline
         */
        ERROR,
    }


    /**
     * @gir-type Enum
     */
    export namespace GEventType {
        export const $gtype: GObject.GType<GEventType>;
    }

    /**
     * @gir-type Enum
     */
    enum GEventType {
        /**
         * Nothing happend; used to indicate error
         */
        NOTHING,
        /**
         * Key is pressed
         */
        KEY_PRESS,
        /**
         * Window is resized
         */
        RESIZED,
    }


    namespace GClient {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::filter-event signal is emitted when key event is dispatched.
             * @signal
             * @run-last
             */
            "filter-event": (arg0: null) => boolean | void;
            /**
             * The ::filter-key-event signal is emitted when key event is dispatched.
             * @signal
             * @run-last
             */
            "filter-key-event": (arg0: number, arg1: number) => boolean | void;
            /**
             * The ::resized signal is emitted when terminal is resized.
             * @signal
             * @run-last
             */
            resized: (arg0: number, arg1: number) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            address: string;
        }
    }

    /**
     * @gir-type Class
     */
    class GClient extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<GClient>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get address(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GClient.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](address: string | null, cancellable: Gio.Cancellable | null): GClient;

        // Signals
        /** @signal */
        connect<K extends keyof GClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param event 
         * @virtual
         */
        vfunc_filter_event(event: GEvent): boolean;

        /**
         * class handler for {@link Fep.GClient.SignalSignatures.filter_key_event | Fep.GClient::filter-key-event}
         * @param keyval 
         * @param modifiers 
         * @virtual
         */
        vfunc_filter_key_event(keyval: number, modifiers: number): boolean;

        /**
         * class handler for {@link Fep.GClient.SignalSignatures.resized | Fep.GClient::resized}
         * @param cols 
         * @param rows 
         * @virtual
         */
        vfunc_resized(cols: number, rows: number): void;

        // Methods
        /**
         * Dispatch a key event.
         * @returns `true` if success, `false` on error.
         */
        dispatch(): boolean;

        /**
         * Request to send a key event to the child process of the FEP server.
         * @param keyval keysym value
         * @param modifiers modifiers
         */
        forward_key_event(keyval: number, modifiers: number): void;

        /**
         * Get the file descriptor of the control socket which can be used by `poll()`.
         * @returns a file descriptor
         */
        get_poll_fd(): number;

        /**
         * Request to send `data` to the child process of the FEP server.
         * @param data data to be sent
         * @param length length of `data`
         */
        send_data(data: string, length: bigint | number): void;

        /**
         * Request to send `data` to the child process of the FEP server.
         * `text` will be converted from UTF-8 to the local encoding in the
         * server.
         * @param text text to be sent
         */
        send_text(text: string): void;

        /**
         * Request to display `text` at the cursor position on the terminal.
         * @param text a cursor text
         * @param attr a {@link Fep.GAttribute}
         */
        set_cursor_text(text: string, attr: GAttribute | null): void;

        /**
         * Request to display `text` at the bottom of the terminal.
         * @param text a status text
         * @param attr a {@link Fep.GAttribute}
         */
        set_status_text(text: string, attr: GAttribute | null): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    /**
     * @gir-type Struct
     */
    class GAttribute {
        static $gtype: GObject.GType<GAttribute>;

        // Fields
        type: GAttrType;

        value: number;

        start_index: number;

        end_index: number;
    }


    /**
     * @gir-type Alias
     */
    type GClientClass = typeof GClient;

    /**
     * @gir-type Struct
     */
    abstract class GClientPrivate {
        static $gtype: GObject.GType<GClientPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class GEventAny {
        static $gtype: GObject.GType<GEventAny>;

        // Fields
        type: GEventType;
    }


    /**
     * @gir-type Struct
     */
    class GEventKey {
        static $gtype: GObject.GType<GEventKey>;

        // Fields
        type: GEventType;

        keyval: number;

        modifiers: number;

        source: string;

        source_length: number;
    }


    /**
     * @gir-type Struct
     */
    class GEventResize {
        static $gtype: GObject.GType<GEventResize>;

        // Fields
        type: GEventType;

        cols: number;

        rows: number;
    }


    /**
     * The {@link Fep.GEvent} struct contains a union of all of the event structs,
     * and allows access to the data fields in a number of ways.
     * @gir-type Struct
     */
    class GEvent {
        static $gtype: GObject.GType<GEvent>;

        // Constructors
        constructor(type: GEventType);

        static ["new"](type: GEventType): GEvent;

        // Methods
        copy(): GEvent;

        free(): void;
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

export default Fep;

// END
