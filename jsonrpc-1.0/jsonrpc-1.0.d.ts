
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

export namespace Jsonrpc {

    /**
     * Jsonrpc-1.0
     */


    /**
     * @gir-type Enum
     */
    enum ClientError {
        PARSE_ERROR,
        INVALID_REQUEST,
        METHOD_NOT_FOUND,
        INVALID_PARAMS,
        INTERNAL_ERROR,
    }


    /**
     * jsonrpc-glib major version component (e.g. 1 if `JSONRPC_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;

    /**
     * jsonrpc-glib micro version component (e.g. 3 if `JSONRPC_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;

    /**
     * jsonrpc-glib minor version component (e.g. 2 if `JSONRPC_VERSION` is 1.2.3)
     */
    const MINOR_VERSION: number;

    /**
     * jsonrpc-glib version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;

    /**
     * @gir-type Callback
     */
    interface ServerHandler {
        (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "failed" signal is called when the client has failed communication
             * or the connection has been knowingly closed.
             * @signal
             * @since 3.28
             * @run-last
             */
            failed: () => void;
            /**
             * This signal is emitted when an RPC has been received from the peer we
             * are connected to. Return `true` if you have handled this message, even
             * asynchronously. If no handler has returned `true` an error will be
             * synthesized.
             * 
             * If you handle the message, you are responsible for replying to the peer
             * in a timely manner using {@link Client.reply} or {@link Client.reply_async}.
             * 
             * Additionally, since 3.28 you may connect to the "detail" of this signal
             * to handle a specific method call. Use the method name as the detail of
             * the signal.
             * @signal
             * @since 3.26
             * @detailed
             * @run-last
             */
            "handle-call": (arg0: string, arg1: GLib.Variant, arg2: GLib.Variant | null) => boolean | void;
            /**
             * This signal is emitted when a notification has been received from a
             * peer. Unlike `Jsonrpc.Client::handle-call`, this does not have an "id"
             * parameter because notifications do not have ids. They do not round
             * trip.
             * @signal
             * @since 3.26
             * @detailed
             * @run-last
             */
            notification: (arg0: string, arg1: GLib.Variant | null) => void;
            "notify::io-stream": (pspec: GObject.ParamSpec) => void;
            "notify::use-gvariant": (pspec: GObject.ParamSpec) => void;
            /**
             * This signal is emitted when an RPC has been received from the peer we
             * are connected to. Return `true` if you have handled this message, even
             * asynchronously. If no handler has returned `true` an error will be
             * synthesized.
             * 
             * If you handle the message, you are responsible for replying to the peer
             * in a timely manner using {@link Client.reply} or {@link Client.reply_async}.
             * 
             * Additionally, since 3.28 you may connect to the "detail" of this signal
             * to handle a specific method call. Use the method name as the detail of
             * the signal.
             * @signal
             * @since 3.26
             * @detailed
             * @run-last
             */
            "handle-call::io-stream": (arg0: string, arg1: GLib.Variant, arg2: GLib.Variant | null) => boolean | void;
            /**
             * This signal is emitted when an RPC has been received from the peer we
             * are connected to. Return `true` if you have handled this message, even
             * asynchronously. If no handler has returned `true` an error will be
             * synthesized.
             * 
             * If you handle the message, you are responsible for replying to the peer
             * in a timely manner using {@link Client.reply} or {@link Client.reply_async}.
             * 
             * Additionally, since 3.28 you may connect to the "detail" of this signal
             * to handle a specific method call. Use the method name as the detail of
             * the signal.
             * @signal
             * @since 3.26
             * @detailed
             * @run-last
             */
            "handle-call::use-gvariant": (arg0: string, arg1: GLib.Variant, arg2: GLib.Variant | null) => boolean | void;
            [key: `handle-call::${string}`]: (arg0: string, arg1: GLib.Variant, arg2: GLib.Variant | null) => boolean | void;
            /**
             * This signal is emitted when a notification has been received from a
             * peer. Unlike `Jsonrpc.Client::handle-call`, this does not have an "id"
             * parameter because notifications do not have ids. They do not round
             * trip.
             * @signal
             * @since 3.26
             * @detailed
             * @run-last
             */
            "notification::io-stream": (arg0: string, arg1: GLib.Variant | null) => void;
            /**
             * This signal is emitted when a notification has been received from a
             * peer. Unlike `Jsonrpc.Client::handle-call`, this does not have an "id"
             * parameter because notifications do not have ids. They do not round
             * trip.
             * @signal
             * @since 3.26
             * @detailed
             * @run-last
             */
            "notification::use-gvariant": (arg0: string, arg1: GLib.Variant | null) => void;
            [key: `notification::${string}`]: (arg0: string, arg1: GLib.Variant | null) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            io_stream: Gio.IOStream;
            ioStream: Gio.IOStream;
            use_gvariant: boolean;
            useGvariant: boolean;
        }
    }

    /**
     * A client for JSON-RPC communication
     * 
     * The {@link Jsonrpc.Client} class provides a convenient API to coordinate with a
     * JSON-RPC server. You can provide the underlying {@link Gio.IOStream} to communicate
     * with allowing you to control the negotiation of how you setup your
     * communications channel. One such method might be to use a {@link Gio.Subprocess} and
     * communicate over stdin and stdout.
     * 
     * Because JSON-RPC allows for out-of-band notifications from the server to
     * the client, it is important that the consumer of this API calls
     * {@link Client.close} or {@link Client.close_async} when they no longer
     * need the client. This is because {@link Jsonrpc.Client} contains an asynchronous
     * read-loop to process incoming messages. Until {@link Client.close} or
     * {@link Client.close_async} have been called, this read loop will prevent
     * the object from finalizing (being freed).
     * 
     * To make an RPC call, use {@link Client.call} or
     * {@link Client.call_async} and provide the method name and the parameters
     * as a {@link GLib.Variant} for call.
     * 
     * It is a programming error to mix synchronous and asynchronous API calls
     * of the {@link Jsonrpc.Client} class.
     * 
     * For synchronous calls, {@link Jsonrpc.Client} will use the thread-default
     * {@link GLib.MainContext}. If you have special needs here ensure you've set the context
     * before calling into any {@link Jsonrpc.Client} API.
     * @gir-type Class
     * @since 3.26
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties
        /**
         * The "io-stream" property is the {@link Gio.IOStream} to use for communicating
         * with a JSON-RPC peer.
         * @since 3.26
         * @construct-only
         */
        set io_stream(val: Gio.IOStream);

        /**
         * The "io-stream" property is the {@link Gio.IOStream} to use for communicating
         * with a JSON-RPC peer.
         * @since 3.26
         * @construct-only
         */
        set ioStream(val: Gio.IOStream);

        /**
         * The "use-gvariant" property denotes if {@link GLib.Variant} should be used to
         * communicate with the peer instead of JSON. You should only set this
         * if you know the peer is also a Jsonrpc-GLib based client.
         * 
         * Setting this property allows the peers to communicate using GVariant
         * instead of JSON. This means that we can access the messages without
         * expensive memory allocations and parsing costs associated with JSON.
         * {@link GLib.Variant} is much more optimal for memory-bassed message passing.
         * @since 3.26
         * @default false
         */
        get use_gvariant(): boolean;
        set use_gvariant(val: boolean);

        /**
         * The "use-gvariant" property denotes if {@link GLib.Variant} should be used to
         * communicate with the peer instead of JSON. You should only set this
         * if you know the peer is also a Jsonrpc-GLib based client.
         * 
         * Setting this property allows the peers to communicate using GVariant
         * instead of JSON. This means that we can access the messages without
         * expensive memory allocations and parsing costs associated with JSON.
         * {@link GLib.Variant} is much more optimal for memory-bassed message passing.
         * @since 3.26
         * @default false
         */
        get useGvariant(): boolean;
        set useGvariant(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](io_stream: Gio.IOStream): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_failed(): void;

        /**
         * @param method 
         * @param id 
         * @param params 
         * @virtual
         */
        vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean;

        /**
         * @param method_name 
         * @param params 
         * @virtual
         */
        vfunc_notification(method_name: string, params: GLib.Variant): void;

        // Methods
        /**
         * Synchronously calls `method` with `params` on the remote peer.
         * 
         * once a reply has been received, or failure, this function will return.
         * If successful, `return_value` will be set with the reslut field of
         * the response.
         * 
         * If `params` is floating then this function consumes the reference.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @returns `true` on success; otherwise `false` and `error` is set.
         */
        call(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): [boolean, GLib.Variant | null];

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * Upon completion or failure, `callback` is executed and it should
         * call {@link Client.call_finish} to complete the request and release
         * any memory held.
         * 
         * If `params` is floating, the floating reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         */
        call_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * Upon completion or failure, `callback` is executed and it should
         * call {@link Client.call_finish} to complete the request and release
         * any memory held.
         * 
         * If `params` is floating, the floating reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @param callback a callback to executed upon completion
         */
        call_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * Upon completion or failure, `callback` is executed and it should
         * call {@link Client.call_finish} to complete the request and release
         * any memory held.
         * 
         * If `params` is floating, the floating reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @param callback a callback to executed upon completion
         */
        call_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant | null> | void;

        /**
         * Completes an asynchronous call to {@link Client.call_async}.
         * @param result A {@link Gio.AsyncResult} provided to the callback in {@link Client.call_async}
         * @returns `true` if successful and `return_value` is set, otherwise `false` and `error` is set.
         */
        call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * Upon completion or failure, `callback` is executed and it should
         * call {@link Client.call_finish} to complete the request and release
         * any memory held.
         * 
         * This function is similar to {@link Client.call_async} except that
         * it allows the caller to get the id of the command which might be useful
         * in systems where you can cancel the operation (such as the Language
         * Server Protocol).
         * 
         * If `params` is floating, the floating reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @param callback Callback to executed upon completion
         */
        call_with_id_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): GLib.Variant | null;

        /**
         * Closes the underlying streams and cancels any inflight operations of the
         * {@link Jsonrpc.Client}.
         * 
         * This is important to call when you are done with the
         * client so that any outstanding operations that have caused `self` to
         * hold additional references are cancelled.
         * 
         * Failure to call this method results in a leak of {@link Jsonrpc.Client}.
         * @param cancellable 
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        close(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronous version of {@link Client.close}.
         * 
         * Currently this operation is implemented synchronously, but in the future may
         * be converted to using asynchronous operations.
         * @param cancellable 
         */
        close_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronous version of {@link Client.close}.
         * 
         * Currently this operation is implemented synchronously, but in the future may
         * be converted to using asynchronous operations.
         * @param cancellable 
         * @param callback 
         */
        close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronous version of {@link Client.close}.
         * 
         * Currently this operation is implemented synchronously, but in the future may
         * be converted to using asynchronous operations.
         * @param cancellable 
         * @param callback 
         */
        close_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Completes an asynchronous request of {@link Client.close_async}.
         * @param result 
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        close_finish(result: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Client.use_gvariant} property.
         * 
         * Indicates if {@link GLib.Variant} is being used to communicate with the peer.
         * @returns `true` if {@link GLib.Variant} is being used; otherwise `false`.
         */
        get_use_gvariant(): boolean;

        /**
         * Synchronous variant of {@link Client.reply_async}.
         * 
         * If `id` or `result` are floating, there floating references are consumed.
         * @param id The id of the message to reply
         * @param result The return value or `null`
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         */
        reply(id: GLib.Variant, result: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;

        /**
         * @param id 
         * @param result 
         * @param cancellable 
         */
        reply_async(id: GLib.Variant, result: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param id 
         * @param result 
         * @param cancellable 
         * @param callback 
         */
        reply_async(id: GLib.Variant, result: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param id 
         * @param result 
         * @param cancellable 
         * @param callback 
         */
        reply_async(id: GLib.Variant, result: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Asynchronously replies to the peer, sending a JSON-RPC error message.
         * 
         * Call {@link Client.reply_error_finish} to get the result of this operation.
         * 
         * If `id` is floating, it's floating reference is consumed.
         * @param id A {@link GLib.Variant} containing the call id
         * @param code The error code
         * @param message An optional error message
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         */
        reply_error_async(id: GLib.Variant, code: number, message: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously replies to the peer, sending a JSON-RPC error message.
         * 
         * Call {@link Client.reply_error_finish} to get the result of this operation.
         * 
         * If `id` is floating, it's floating reference is consumed.
         * @param id A {@link GLib.Variant} containing the call id
         * @param code The error code
         * @param message An optional error message
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @param callback A {@link Gio.AsyncReadyCallback} or `null`
         */
        reply_error_async(id: GLib.Variant, code: number, message: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously replies to the peer, sending a JSON-RPC error message.
         * 
         * Call {@link Client.reply_error_finish} to get the result of this operation.
         * 
         * If `id` is floating, it's floating reference is consumed.
         * @param id A {@link GLib.Variant} containing the call id
         * @param code The error code
         * @param message An optional error message
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @param callback A {@link Gio.AsyncReadyCallback} or `null`
         */
        reply_error_async(id: GLib.Variant, code: number, message: string | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param result 
         */
        reply_error_finish(result: Gio.AsyncResult): boolean;

        /**
         * Completes an asynchronous request to {@link Client.reply_async}.
         * @param result A {@link Gio.AsyncResult}
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        reply_finish(result: Gio.AsyncResult): boolean;

        /**
         * Synchronously calls `method` with `params` on the remote peer.
         * 
         * This function will not wait or expect a reply from the peer.
         * 
         * If `params` is floating then the reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @returns `true` on success; otherwise `false` and `error` is set.
         */
        send_notification(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * This function will not wait or expect a reply from the peer.
         * 
         * This function is useful when the caller wants to be notified that
         * the bytes have been delivered to the underlying stream. This does
         * not indicate that the peer has received them.
         * 
         * If `params` is floating then the reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         */
        send_notification_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * This function will not wait or expect a reply from the peer.
         * 
         * This function is useful when the caller wants to be notified that
         * the bytes have been delivered to the underlying stream. This does
         * not indicate that the peer has received them.
         * 
         * If `params` is floating then the reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @param callback 
         */
        send_notification_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         * 
         * This function will not wait or expect a reply from the peer.
         * 
         * This function is useful when the caller wants to be notified that
         * the bytes have been delivered to the underlying stream. This does
         * not indicate that the peer has received them.
         * 
         * If `params` is floating then the reference is consumed.
         * @param method The name of the method to call
         * @param params A {@link GLib.Variant} of parameters or `null`
         * @param cancellable A {@link Gio.Cancellable} or `null`
         * @param callback 
         */
        send_notification_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Completes an asynchronous call to {@link Client.send_notification_async}.
         * 
         * Successful completion of this function only indicates that the request
         * has been written to the underlying buffer, not that the peer has received
         * the notification.
         * @param result 
         * @returns `true` if the bytes have been flushed to the {@link Gio.IOStream}; otherwise   `false` and `error` is set.
         */
        send_notification_finish(result: Gio.AsyncResult): boolean;

        /**
         * Sets the {@link Client.use_gvariant} property.
         * 
         * This function sets if {@link GLib.Variant} should be used to communicate with the
         * peer. Doing so can allow for more efficient communication by avoiding
         * expensive parsing overhead and memory allocations. However, it requires
         * that the peer also supports {@link GLib.Variant} encoding.
         * @param use_gvariant If {@link GLib.Variant} should be used
         */
        set_use_gvariant(use_gvariant: boolean): void;

        /**
         * This function requests that client start processing incoming
         * messages from the peer.
         */
        start_listening(): void;
    }


    namespace InputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.DataInputStream.SignalSignatures {
            "notify::byte-order": (pspec: GObject.ParamSpec) => void;
            "notify::newline-type": (pspec: GObject.ParamSpec) => void;
            "notify::buffer-size": (pspec: GObject.ParamSpec) => void;
            "notify::base-stream": (pspec: GObject.ParamSpec) => void;
            "notify::close-base-stream": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DataInputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class InputStream extends Gio.DataInputStream implements Gio.Seekable {
        static $gtype: GObject.GType<InputStream>;

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

        static ["new"](base_stream: Gio.InputStream): InputStream;

        // Signals
        /** @signal */
        connect<K extends keyof InputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof InputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof InputStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param cancellable 
         * @param message 
         */
        read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean;

        /**
         * @param cancellable 
         */
        read_message_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        read_message_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        read_message_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param result 
         * @param message 
         */
        read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean;
    }


    namespace OutputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.DataOutputStream.SignalSignatures {
            "notify::use-gvariant": (pspec: GObject.ParamSpec) => void;
            "notify::byte-order": (pspec: GObject.ParamSpec) => void;
            "notify::base-stream": (pspec: GObject.ParamSpec) => void;
            "notify::close-base-stream": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DataOutputStream.ConstructorProps, Gio.Seekable.ConstructorProps {
            use_gvariant: boolean;
            useGvariant: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class OutputStream extends Gio.DataOutputStream implements Gio.Seekable {
        static $gtype: GObject.GType<OutputStream>;

        // Properties
        /**
         * @default false
         */
        get use_gvariant(): boolean;
        set use_gvariant(val: boolean);

        /**
         * @default false
         */
        get useGvariant(): boolean;
        set useGvariant(val: boolean);

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

        static ["new"](base_stream: Gio.OutputStream): OutputStream;

        // Signals
        /** @signal */
        connect<K extends keyof OutputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OutputStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OutputStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_use_gvariant(): boolean;

        /**
         * @param use_gvariant 
         */
        set_use_gvariant(use_gvariant: boolean): void;

        /**
         * Synchronously sends a message to the peer.
         * 
         * This operation will complete once the message has been buffered. There
         * is no guarantee the peer received it.
         * @param message a {@link GLib.Variant}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        write_message(message: GLib.Variant, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously sends a message to the peer.
         * 
         * This asynchronous operation will complete once the message has
         * been buffered, and there is no guarantee the peer received it.
         * @param message a {@link GLib.Variant}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        write_message_async(message: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously sends a message to the peer.
         * 
         * This asynchronous operation will complete once the message has
         * been buffered, and there is no guarantee the peer received it.
         * @param message a {@link GLib.Variant}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} or `null`
         */
        write_message_async(message: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously sends a message to the peer.
         * 
         * This asynchronous operation will complete once the message has
         * been buffered, and there is no guarantee the peer received it.
         * @param message a {@link GLib.Variant}
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} or `null`
         */
        write_message_async(message: GLib.Variant, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param result 
         */
        write_message_finish(result: Gio.AsyncResult): boolean;

        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @returns `true` if `seekable` can be seeked. `false` otherwise.
         */
        can_seek(): boolean;

        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @returns `true` if the stream can be truncated, `false` otherwise.
         */
        can_truncate(): boolean;

        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
         * 
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         * 
         * Any operation that would result in a negative offset will fail.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        seek(offset: bigint | number, type: GLib.SeekType, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;

        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        truncate(offset: bigint | number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @virtual
         */
        vfunc_can_seek(): boolean;

        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @virtual
         */
        vfunc_can_truncate(): boolean;

        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
         * 
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         * 
         * Any operation that would result in a negative offset will fail.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tells the current position within the stream.
         * @virtual
         */
        vfunc_tell(): bigint | number;

        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_truncate_fn(offset: number, cancellable: Gio.Cancellable | null): boolean;
    }


    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when a new client has been accepted.
             * @signal
             * @since 3.28
             * @run-last
             */
            "client-accepted": (arg0: Client) => void;
            /**
             * This signal is emitted when a new client has been lost.
             * @signal
             * @since 3.30
             * @run-last
             */
            "client-closed": (arg0: Client) => void;
            /**
             * This method is emitted when the client requests a method call.
             * 
             * If you return `true` from this function, you should reply to it (even upon
             * failure), using {@link Client.reply} or {@link Client.reply_async}.
             * @signal
             * @since 3.26
             * @run-last
             */
            "handle-call": (arg0: Client, arg1: string, arg2: GLib.Variant, arg3: GLib.Variant) => boolean | void;
            /**
             * This signal is emitted when the client has sent a notification to us.
             * @signal
             * @since 3.26
             * @run-last
             */
            notification: (arg0: Client, arg1: string, arg2: GLib.Variant) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A server for JSON-RPC communication
     * 
     * The {@link Jsonrpc.Server} class can help you implement a JSON-RPC server. You can
     * accept connections and then communicate with clients using the
     * {@link Client} API.
     * @gir-type Class
     */
    class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Server.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Server;

        // Signals
        /** @signal */
        connect<K extends keyof Server.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Server.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Server.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param client 
         * @virtual
         */
        vfunc_client_accepted(client: Client): void;

        /**
         * @param client 
         * @virtual
         */
        vfunc_client_closed(client: Client): void;

        /**
         * @param client 
         * @param method 
         * @param id 
         * @param params 
         * @virtual
         */
        vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean;

        /**
         * @param client 
         * @param method 
         * @param params 
         * @virtual
         */
        vfunc_notification(client: Client, method: string, params: GLib.Variant): void;

        // Methods
        /**
         * This function accepts `io_stream` as a new client to the {@link Jsonrpc.Server}
         * by wrapping it in a {@link Jsonrpc.Client} and starting the message accept
         * loop.
         * @param io_stream A {@link Gio.IOStream}
         */
        accept_io_stream(io_stream: Gio.IOStream): void;

        /**
         * Adds a new handler that will be dispatched when a matching `method` arrives.
         * @param method A method to handle
         * @param handler A handler to   execute when an incoming method matches `methods`
         * @returns A handler id that can be used to remove the handler with   {@link Server.remove_handler}.
         */
        add_handler(method: string, handler: ServerHandler): number;

        /**
         * Calls `foreach_func` for every client connected.
         * @param foreach_func A callback for each client
         */
        foreach(foreach_func: GLib.Func): void;

        /**
         * Removes a handler that was previously registered with {@link Server.add_handler}.
         * @param handler_id A handler returned from {@link Server.add_handler}
         */
        remove_handler(handler_id: number): void;
    }


    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * @gir-type Alias
     */
    type InputStreamClass = typeof InputStream;

    /**
     * @gir-type Struct
     */
    class MessageAny {
        static $gtype: GObject.GType<MessageAny>;

        // Fields
        magic: MessageMagic;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessageGetBoolean {
        static $gtype: GObject.GType<MessageGetBoolean>;

        // Fields
        magic: MessageMagic;

        valptr: boolean;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            valptr: boolean;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessageGetDict {
        static $gtype: GObject.GType<MessageGetDict>;

        // Fields
        magic: MessageMagic;
    }


    /**
     * @gir-type Struct
     */
    class MessageGetDouble {
        static $gtype: GObject.GType<MessageGetDouble>;

        // Fields
        magic: MessageMagic;

        valptr: number;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            valptr: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessageGetInt32 {
        static $gtype: GObject.GType<MessageGetInt32>;

        // Fields
        magic: MessageMagic;

        valptr: number;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            valptr: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessageGetInt64 {
        static $gtype: GObject.GType<MessageGetInt64>;

        // Fields
        magic: MessageMagic;

        valptr: number;
    }


    /**
     * @gir-type Struct
     */
    class MessageGetIter {
        static $gtype: GObject.GType<MessageGetIter>;

        // Fields
        magic: MessageMagic;
    }


    /**
     * @gir-type Struct
     */
    class MessageGetString {
        static $gtype: GObject.GType<MessageGetString>;

        // Fields
        magic: MessageMagic;

        valptr: string;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            valptr: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessageGetStrv {
        static $gtype: GObject.GType<MessageGetStrv>;

        // Fields
        magic: MessageMagic;

        valptr: string;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            valptr: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessageGetVariant {
        static $gtype: GObject.GType<MessageGetVariant>;

        // Fields
        magic: MessageMagic;
    }


    /**
     * @gir-type Struct
     */
    class MessageMagic {
        static $gtype: GObject.GType<MessageMagic>;

        // Fields
        bytes: number[];

        // Constructors

        constructor(properties?: Partial<{
            bytes: number[];
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessagePutBoolean {
        static $gtype: GObject.GType<MessagePutBoolean>;

        // Fields
        magic: MessageMagic;

        val: boolean;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            val: boolean;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessagePutDouble {
        static $gtype: GObject.GType<MessagePutDouble>;

        // Fields
        magic: MessageMagic;

        val: number;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            val: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessagePutInt32 {
        static $gtype: GObject.GType<MessagePutInt32>;

        // Fields
        magic: MessageMagic;

        val: number;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            val: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessagePutInt64 {
        static $gtype: GObject.GType<MessagePutInt64>;

        // Fields
        magic: MessageMagic;

        val: number;
    }


    /**
     * @gir-type Struct
     */
    class MessagePutString {
        static $gtype: GObject.GType<MessagePutString>;

        // Fields
        magic: MessageMagic;

        val: string;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            val: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessagePutStrv {
        static $gtype: GObject.GType<MessagePutStrv>;

        // Fields
        magic: MessageMagic;

        val: string;

        // Constructors

        constructor(properties?: Partial<{
            magic: MessageMagic;
            val: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MessagePutVariant {
        static $gtype: GObject.GType<MessagePutVariant>;

        // Fields
        magic: MessageMagic;
    }


    /**
     * @gir-type Alias
     */
    type OutputStreamClass = typeof OutputStream;

    /**
     * @gir-type Alias
     */
    type ServerClass = typeof Server;

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

export default Jsonrpc;

// END
