/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './jsonrpc-1.0-ambient.d.ts';
import './jsonrpc-1.0-import.d.ts';
/**
 * Jsonrpc-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Jsonrpc {
    enum ClientError {
        PARSE_ERROR,
        INVALID_REQUEST,
        METHOD_NOT_FOUND,
        INVALID_PARAMS,
        INTERNAL_ERROR,
    }
    /**
     * jsonrpc-glib major version component (e.g. 1 if %JSONRPC_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * jsonrpc-glib micro version component (e.g. 3 if %JSONRPC_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * jsonrpc-glib minor version component (e.g. 2 if %JSONRPC_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * jsonrpc-glib version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    interface ServerHandler {
        (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void;
    }
    module Client {
        // Signal callback interfaces

        interface Failed {
            (): void;
        }

        interface HandleCall {
            (method: string, id: GLib.Variant, params?: GLib.Variant | null): boolean;
        }

        interface Notification {
            (method: string, params?: GLib.Variant | null): void;
        }

        // Constructor properties interface
    }

    /**
     * A client for JSON-RPC communication
     *
     * The #JsonrpcClient class provides a convenient API to coordinate with a
     * JSON-RPC server. You can provide the underlying [class`Gio`.IOStream] to communicate
     * with allowing you to control the negotiation of how you setup your
     * communications channel. One such method might be to use a [class`Gio`.Subprocess] and
     * communicate over stdin and stdout.
     *
     * Because JSON-RPC allows for out-of-band notifications from the server to
     * the client, it is important that the consumer of this API calls
     * [method`Client`.close] or [method`Client`.close_async] when they no longer
     * need the client. This is because #JsonrpcClient contains an asynchronous
     * read-loop to process incoming messages. Until [method`Client`.close] or
     * [method`Client`.close_async] have been called, this read loop will prevent
     * the object from finalizing (being freed).
     *
     * To make an RPC call, use [method`Client`.call] or
     * [method`Client`.call_async] and provide the method name and the parameters
     * as a [struct`GLib`.Variant] for call.
     *
     * It is a programming error to mix synchronous and asynchronous API calls
     * of the #JsonrpcClient class.
     *
     * For synchronous calls, #JsonrpcClient will use the thread-default
     * [struct`GLib`.MainContext]. If you have special needs here ensure you've set the context
     * before calling into any #JsonrpcClient API.
     */
    class Client extends GObject.Object {
        // Own properties of Jsonrpc-1.0.Client

        /**
         * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
         * with a JSON-RPC peer.
         */
        io_stream: Gio.IOStream;
        /**
         * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
         * with a JSON-RPC peer.
         */
        ioStream: Gio.IOStream;
        /**
         * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
         * communicate with the peer instead of JSON. You should only set this
         * if you know the peer is also a Jsonrpc-GLib based client.
         *
         * Setting this property allows the peers to communicate using GVariant
         * instead of JSON. This means that we can access the messages without
         * expensive memory allocations and parsing costs associated with JSON.
         * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
         */
        use_gvariant: boolean;
        /**
         * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
         * communicate with the peer instead of JSON. You should only set this
         * if you know the peer is also a Jsonrpc-GLib based client.
         *
         * Setting this property allows the peers to communicate using GVariant
         * instead of JSON. This means that we can access the messages without
         * expensive memory allocations and parsing costs associated with JSON.
         * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
         */
        useGvariant: boolean;

        // Constructors of Jsonrpc-1.0.Client

        static ['new'](io_stream: Gio.IOStream): Client;

        // Owm methods of Jsonrpc-1.0.Client

        static error_quark(): GLib.Quark;

        // Owm methods of Jsonrpc-1.0.Client

        /**
         * Synchronously calls `method` with `params` on the remote peer.
         *
         * once a reply has been received, or failure, this function will return.
         * If successful, `return_value` will be set with the reslut field of
         * the response.
         *
         * If `params` is floating then this function consumes the reference.
         * @param method The name of the method to call
         * @param params A [struct@GLib.Variant] of parameters or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @returns %TRUE on success; otherwise %FALSE and @error is set.
         */
        call(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         *
         * Upon completion or failure, `callback` is executed and it should
         * call [method`Client`.call_finish] to complete the request and release
         * any memory held.
         *
         * If `params` is floating, the floating reference is consumed.
         * @param method The name of the method to call
         * @param params A [struct@GLib.Variant] of parameters or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @param callback a callback to executed upon completion
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous call to [method`Client`.call_async].
         * @param result A #GAsyncResult provided to the callback in [method@Client.call_async]
         * @returns %TRUE if successful and @return_value is set, otherwise %FALSE and @error is set.
         */
        call_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously calls `method` with `params` on the remote peer.
         *
         * Upon completion or failure, `callback` is executed and it should
         * call [method`Client`.call_finish] to complete the request and release
         * any memory held.
         *
         * This function is similar to [method`Client`.call_async] except that
         * it allows the caller to get the id of the command which might be useful
         * in systems where you can cancel the operation (such as the Language
         * Server Protocol).
         *
         * If `params` is floating, the floating reference is consumed.
         * @param method The name of the method to call
         * @param params A [struct@GLib.Variant] of parameters or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @param callback Callback to executed upon completion
         */
        call_with_id_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Closes the underlying streams and cancels any inflight operations of the
         * #JsonrpcClient.
         *
         * This is important to call when you are done with the
         * client so that any outstanding operations that have caused `self` to
         * hold additional references are cancelled.
         *
         * Failure to call this method results in a leak of #JsonrpcClient.
         * @param cancellable
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        close(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronous version of [method`Client`.close].
         *
         * Currently this operation is implemented synchronously, but in the future may
         * be converted to using asynchronous operations.
         * @param cancellable
         * @param callback
         */
        close_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes an asynchronous request of [method`Client`.close_async].
         * @param result
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        close_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets the [property`Client:`use-gvariant] property.
         *
         * Indicates if [struct`GLib`.Variant] is being used to communicate with the peer.
         * @returns %TRUE if [struct@GLib.Variant] is being used; otherwise %FALSE.
         */
        get_use_gvariant(): boolean;
        /**
         * Synchronous variant of [method`Client`.reply_async].
         *
         * If `id` or `result` are floating, there floating references are consumed.
         * @param id The id of the message to reply
         * @param result The return value or %NULL
         * @param cancellable A #GCancellable, or %NULL
         */
        reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;
        reply_async(
            id: GLib.Variant,
            result: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously replies to the peer, sending a JSON-RPC error message.
         *
         * Call [method`Client`.reply_error_finish] to get the result of this operation.
         *
         * If `id` is floating, it's floating reference is consumed.
         * @param id A [struct@GLib.Variant] containing the call id
         * @param code The error code
         * @param message An optional error message
         * @param cancellable A #GCancellable, or %NULL
         * @param callback A #GAsyncReadyCallback or %NULL
         */
        reply_error_async(
            id: GLib.Variant,
            code: number,
            message?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        reply_error_finish(result: Gio.AsyncResult): boolean;
        /**
         * Completes an asynchronous request to [method`Client`.reply_async].
         * @param result A #GAsyncResult
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        reply_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously calls `method` with `params` on the remote peer.
         *
         * This function will not wait or expect a reply from the peer.
         *
         * If `params` is floating then the reference is consumed.
         * @param method The name of the method to call
         * @param params A [struct@GLib.Variant] of parameters or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @returns %TRUE on success; otherwise %FALSE and @error is set.
         */
        send_notification(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean;
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
         * @param params A [struct@GLib.Variant] of parameters or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @param callback
         */
        send_notification_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous call to [method`Client`.send_notification_async].
         *
         * Successful completion of this function only indicates that the request
         * has been written to the underlying buffer, not that the peer has received
         * the notification.
         * @param result
         * @returns %TRUE if the bytes have been flushed to the [class@Gio.IOStream]; otherwise   %FALSE and @error is set.
         */
        send_notification_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the [property`Client:`use-gvariant] property.
         *
         * This function sets if [struct`GLib`.Variant] should be used to communicate with the
         * peer. Doing so can allow for more efficient communication by avoiding
         * expensive parsing overhead and memory allocations. However, it requires
         * that the peer also supports [struct`GLib`.Variant] encoding.
         * @param use_gvariant If [struct@GLib.Variant] should be used
         */
        set_use_gvariant(use_gvariant: boolean): void;
        /**
         * This function requests that client start processing incoming
         * messages from the peer.
         */
        start_listening(): void;
    }

    module InputStream {
        // Constructor properties interface
    }

    class InputStream extends Gio.DataInputStream {
        // Constructors of Jsonrpc-1.0.InputStream

        static ['new'](base_stream: Gio.InputStream): InputStream;

        // Owm methods of Jsonrpc-1.0.InputStream

        read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean;
        read_message_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean;
    }

    module OutputStream {
        // Constructor properties interface
    }

    class OutputStream extends Gio.DataOutputStream {
        // Own properties of Jsonrpc-1.0.OutputStream

        use_gvariant: boolean;
        useGvariant: boolean;

        // Constructors of Jsonrpc-1.0.OutputStream

        static ['new'](base_stream: Gio.OutputStream): OutputStream;

        // Owm methods of Jsonrpc-1.0.OutputStream

        get_use_gvariant(): boolean;
        set_use_gvariant(use_gvariant: boolean): void;
        /**
         * Synchronously sends a message to the peer.
         *
         * This operation will complete once the message has been buffered. There
         * is no guarantee the peer received it.
         * @param message a #GVariant
         * @param cancellable a #GCancellable or %NULL
         */
        write_message(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously sends a message to the peer.
         *
         * This asynchronous operation will complete once the message has
         * been buffered, and there is no guarantee the peer received it.
         * @param message a #GVariant
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback or %NULL
         */
        write_message_async(
            message: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_message_finish(result: Gio.AsyncResult): boolean;
    }

    module Server {
        // Signal callback interfaces

        interface ClientAccepted {
            (client: Client): void;
        }

        interface ClientClosed {
            (client: Client): void;
        }

        interface HandleCall {
            (client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean;
        }

        interface Notification {
            (client: Client, method: string, id: GLib.Variant): void;
        }

        // Constructor properties interface
    }

    /**
     * A server for JSON-RPC communication
     *
     * The #JsonrpcServer class can help you implement a JSON-RPC server. You can
     * accept connections and then communicate with clients using the
     * [class`Client]` API.
     */
    class Server extends GObject.Object {
        // Constructors of Jsonrpc-1.0.Server

        static ['new'](): Server;

        // Owm methods of Jsonrpc-1.0.Server

        /**
         * This function accepts `io_stream` as a new client to the #JsonrpcServer
         * by wrapping it in a #JsonrpcClient and starting the message accept
         * loop.
         * @param io_stream A #GIOStream
         */
        accept_io_stream(io_stream: Gio.IOStream): void;
        /**
         * Adds a new handler that will be dispatched when a matching `method` arrives.
         * @param method A method to handle
         * @param handler A handler to   execute when an incoming method matches @methods
         * @returns A handler id that can be used to remove the handler with   [method@Server.remove_handler].
         */
        add_handler(method: string, handler: ServerHandler): number;
        /**
         * Calls `foreach_func` for every client connected.
         * @param foreach_func A callback for each client
         */
        foreach(foreach_func: GLib.Func): void;
        /**
         * Removes a handler that was previously registered with [method`Server`.add_handler].
         * @param handler_id A handler returned from [method@Server.add_handler]
         */
        remove_handler(handler_id: number): void;
    }

    class ClientClass {}

    class InputStreamClass {}

    class MessageAny {
        // Own fields of Jsonrpc-1.0.MessageAny

        magic: MessageMagic;

        // Constructors of Jsonrpc-1.0.MessageAny

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
            }>,
        );
    }

    class MessageGetBoolean {
        // Own fields of Jsonrpc-1.0.MessageGetBoolean

        magic: MessageMagic;
        valptr: boolean;

        // Constructors of Jsonrpc-1.0.MessageGetBoolean

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                valptr: boolean;
            }>,
        );
    }

    class MessageGetDict {
        // Own fields of Jsonrpc-1.0.MessageGetDict

        magic: MessageMagic;
    }

    class MessageGetDouble {
        // Own fields of Jsonrpc-1.0.MessageGetDouble

        magic: MessageMagic;
        valptr: number;

        // Constructors of Jsonrpc-1.0.MessageGetDouble

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                valptr: number;
            }>,
        );
    }

    class MessageGetInt32 {
        // Own fields of Jsonrpc-1.0.MessageGetInt32

        magic: MessageMagic;
        valptr: number;

        // Constructors of Jsonrpc-1.0.MessageGetInt32

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                valptr: number;
            }>,
        );
    }

    class MessageGetInt64 {
        // Own fields of Jsonrpc-1.0.MessageGetInt64

        magic: MessageMagic;
        valptr: number;

        // Constructors of Jsonrpc-1.0.MessageGetInt64

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                valptr: number;
            }>,
        );
    }

    class MessageGetIter {
        // Own fields of Jsonrpc-1.0.MessageGetIter

        magic: MessageMagic;
    }

    class MessageGetString {
        // Own fields of Jsonrpc-1.0.MessageGetString

        magic: MessageMagic;
        valptr: string;

        // Constructors of Jsonrpc-1.0.MessageGetString

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                valptr: string;
            }>,
        );
    }

    class MessageGetStrv {
        // Own fields of Jsonrpc-1.0.MessageGetStrv

        magic: MessageMagic;
        valptr: string;

        // Constructors of Jsonrpc-1.0.MessageGetStrv

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                valptr: string;
            }>,
        );
    }

    class MessageGetVariant {
        // Own fields of Jsonrpc-1.0.MessageGetVariant

        magic: MessageMagic;
    }

    class MessageMagic {
        // Own fields of Jsonrpc-1.0.MessageMagic

        bytes: number[];

        // Constructors of Jsonrpc-1.0.MessageMagic

        constructor(
            properties?: Partial<{
                bytes: number[];
            }>,
        );
    }

    class MessagePutBoolean {
        // Own fields of Jsonrpc-1.0.MessagePutBoolean

        magic: MessageMagic;
        val: boolean;

        // Constructors of Jsonrpc-1.0.MessagePutBoolean

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                val: boolean;
            }>,
        );
    }

    class MessagePutDouble {
        // Own fields of Jsonrpc-1.0.MessagePutDouble

        magic: MessageMagic;
        val: number;

        // Constructors of Jsonrpc-1.0.MessagePutDouble

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                val: number;
            }>,
        );
    }

    class MessagePutInt32 {
        // Own fields of Jsonrpc-1.0.MessagePutInt32

        magic: MessageMagic;
        val: number;

        // Constructors of Jsonrpc-1.0.MessagePutInt32

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                val: number;
            }>,
        );
    }

    class MessagePutInt64 {
        // Own fields of Jsonrpc-1.0.MessagePutInt64

        magic: MessageMagic;
        val: number;

        // Constructors of Jsonrpc-1.0.MessagePutInt64

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                val: number;
            }>,
        );
    }

    class MessagePutString {
        // Own fields of Jsonrpc-1.0.MessagePutString

        magic: MessageMagic;
        val: string;

        // Constructors of Jsonrpc-1.0.MessagePutString

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                val: string;
            }>,
        );
    }

    class MessagePutStrv {
        // Own fields of Jsonrpc-1.0.MessagePutStrv

        magic: MessageMagic;
        val: string;

        // Constructors of Jsonrpc-1.0.MessagePutStrv

        constructor(
            properties?: Partial<{
                magic: MessageMagic;
                val: string;
            }>,
        );
    }

    class MessagePutVariant {
        // Own fields of Jsonrpc-1.0.MessagePutVariant

        magic: MessageMagic;
    }

    class OutputStreamClass {}

    class ServerClass {}

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
