// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Jsonrpc-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
const MAJOR_VERSION: number
/**
 * jsonrpc-glib micro version component (e.g. 3 if %JSONRPC_VERSION is 1.2.3)
 */
const MICRO_VERSION: number
/**
 * jsonrpc-glib minor version component (e.g. 2 if %JSONRPC_VERSION is 1.2.3)
 */
const MINOR_VERSION: number
/**
 * jsonrpc-glib version, encoded as a string, useful for printing and
 * concatenation.
 */
const VERSION_S: string
interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Jsonrpc-1.0.Jsonrpc.Client

    /**
     * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
     * with a JSON-RPC peer.
     */
    io_stream?: Gio.IOStream | null
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
    use_gvariant?: boolean | null
}

/**
 * Signal callback interface for `failed`
 */
interface Client_FailedSignalCallback {
    ($obj: Client): void
}

/**
 * Signal callback interface for `handle-call`
 */
interface Client_HandleCallSignalCallback {
    ($obj: Client, method: string, id: GLib.Variant, params: GLib.Variant | null): boolean
}

/**
 * Signal callback interface for `notification`
 */
interface Client_NotificationSignalCallback {
    ($obj: Client, method: string, params: GLib.Variant | null): void
}

interface Client {

    // Own properties of Jsonrpc-1.0.Jsonrpc.Client

    /**
     * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
     * with a JSON-RPC peer.
     */
    readonly io_stream: Gio.IOStream
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
    use_gvariant: boolean

    // Own fields of Jsonrpc-1.0.Jsonrpc.Client

    parent_instance: GObject.Object

    // Owm methods of Jsonrpc-1.0.Jsonrpc.Client

    /**
     * Synchronously calls `method` with `params` on the remote peer.
     * 
     * once a reply has been received, or failure, this function will return.
     * If successful, `return_value` will be set with the reslut field of
     * the response.
     * 
     * If `params` is floating then this function consumes the reference.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     */
    call(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* return_value */ GLib.Variant | null ]
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * Upon completion or failure, `callback` is executed and it should
     * call [method`Client`.call_finish] to complete the request and release
     * any memory held.
     * 
     * If `params` is floating, the floating reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback a callback to executed upon completion
     */
    call_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call to [method`Client`.call_async].
     * @param result A #GAsyncResult provided to the callback in [method`Client`.call_async]
     */
    call_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* return_value */ GLib.Variant | null ]
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
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback Callback to executed upon completion
     */
    call_with_id_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): /* id */ GLib.Variant
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
     */
    close(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of [method`Client`.close].
     * 
     * Currently this operation is implemented synchronously, but in the future may
     * be converted to using asynchronous operations.
     * @param cancellable 
     * @param callback 
     */
    close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous request of [method`Client`.close_async].
     * @param result 
     */
    close_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the [property`Client:`use-gvariant] property.
     * 
     * Indicates if [struct`GLib`.Variant] is being used to communicate with the peer.
     */
    get_use_gvariant(): boolean
    /**
     * Synchronous variant of [method`Client`.reply_async].
     * 
     * If `id` or `result` are floating, there floating references are consumed.
     * @param id The id of the message to reply
     * @param result The return value or %NULL
     * @param cancellable A #GCancellable, or %NULL
     */
    reply(id: GLib.Variant, result: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    reply_async(id: GLib.Variant, result: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously replies to the peer, sending a JSON-RPC error message.
     * 
     * Call [method`Client`.reply_error_finish] to get the result of this operation.
     * 
     * If `id` is floating, it's floating reference is consumed.
     * @param id A [struct`GLib`.Variant] containing the call id
     * @param code The error code
     * @param message An optional error message
     * @param cancellable A #GCancellable, or %NULL
     * @param callback A #GAsyncReadyCallback or %NULL
     */
    reply_error_async(id: GLib.Variant, code: number, message: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    reply_error_finish(result: Gio.AsyncResult): boolean
    /**
     * Completes an asynchronous request to [method`Client`.reply_async].
     * @param result A #GAsyncResult
     */
    reply_finish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously calls `method` with `params` on the remote peer.
     * 
     * This function will not wait or expect a reply from the peer.
     * 
     * If `params` is floating then the reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     */
    send_notification(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback 
     */
    send_notification_async(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call to [method`Client`.send_notification_async].
     * 
     * Successful completion of this function only indicates that the request
     * has been written to the underlying buffer, not that the peer has received
     * the notification.
     * @param result 
     */
    send_notification_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the [property`Client:`use-gvariant] property.
     * 
     * This function sets if [struct`GLib`.Variant] should be used to communicate with the
     * peer. Doing so can allow for more efficient communication by avoiding
     * expensive parsing overhead and memory allocations. However, it requires
     * that the peer also supports [struct`GLib`.Variant] encoding.
     * @param use_gvariant If [struct`GLib`.Variant] should be used
     */
    set_use_gvariant(use_gvariant: boolean): void
    /**
     * This function requests that client start processing incoming
     * messages from the peer.
     */
    start_listening(): void

    // Own virtual methods of Jsonrpc-1.0.Jsonrpc.Client

    vfunc_failed(): void
    vfunc_handle_call(method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfunc_notification(method_name: string, params: GLib.Variant): void

    // Own signals of Jsonrpc-1.0.Jsonrpc.Client

    connect(sigName: "failed", callback: Client_FailedSignalCallback): number
    connect_after(sigName: "failed", callback: Client_FailedSignalCallback): number
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "handle-call", callback: Client_HandleCallSignalCallback): number
    connect_after(sigName: "handle-call", callback: Client_HandleCallSignalCallback): number
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params: GLib.Variant | null, ...args: any[]): void
    connect(sigName: "notification", callback: Client_NotificationSignalCallback): number
    connect_after(sigName: "notification", callback: Client_NotificationSignalCallback): number
    emit(sigName: "notification", method: string, params: GLib.Variant | null, ...args: any[]): void

    // Class property signals of Jsonrpc-1.0.Jsonrpc.Client

    connect(sigName: "notify::io-stream", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::io-stream", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::io-stream", ...args: any[]): void
    connect(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-gvariant", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of Jsonrpc-1.0.Jsonrpc.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Jsonrpc-1.0.Jsonrpc.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Creates a new #JsonrpcClient instance.
     * 
     * If you want to communicate with a process using stdin/stdout, consider using
     * [class`Gio`.Subprocess] to launch the process and create a [class`Gio`.SimpleIOStream] using the
     * [method`Gio`.Subprocess.get_stdin_pipe] and [method`Gio`.Subprocess.get_stdout_pipe].
     * @constructor 
     * @param io_stream A [class`Gio`.IOStream]
     */
    constructor(io_stream: Gio.IOStream) 
    /**
     * Creates a new #JsonrpcClient instance.
     * 
     * If you want to communicate with a process using stdin/stdout, consider using
     * [class`Gio`.Subprocess] to launch the process and create a [class`Gio`.SimpleIOStream] using the
     * [method`Gio`.Subprocess.get_stdin_pipe] and [method`Gio`.Subprocess.get_stdout_pipe].
     * @constructor 
     * @param io_stream A [class`Gio`.IOStream]
     */
    static new(io_stream: Gio.IOStream): Client
    _init(config?: Client_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface InputStream_ConstructProps extends Gio.Seekable_ConstructProps, Gio.DataInputStream_ConstructProps {
}

interface InputStream extends Gio.Seekable {

    // Own fields of Jsonrpc-1.0.Jsonrpc.InputStream

    parent_instance: Gio.DataInputStream

    // Owm methods of Jsonrpc-1.0.Jsonrpc.InputStream

    read_message(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    read_message_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    read_message_finish(result: Gio.AsyncResult, message: GLib.Variant): boolean

    // Class property signals of Jsonrpc-1.0.Jsonrpc.InputStream

    connect(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::byte-order", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputStream extends Gio.DataInputStream {

    // Own properties of Jsonrpc-1.0.Jsonrpc.InputStream

    static name: string
    static $gtype: GObject.GType<InputStream>

    // Constructors of Jsonrpc-1.0.Jsonrpc.InputStream

    constructor(config?: InputStream_ConstructProps) 
    constructor(base_stream: Gio.InputStream) 
    static new(base_stream: Gio.InputStream): InputStream

    // Overloads of new

    /**
     * Creates a new data input stream for the `base_stream`.
     * @constructor 
     * @param base_stream a #GInputStream.
     */
    static new(base_stream: Gio.InputStream): Gio.DataInputStream
    /**
     * Creates a new #GInputStream from the given `base_stream,` with
     * a buffer set to the default size (4 kilobytes).
     * @constructor 
     * @param base_stream a #GInputStream
     */
    static new(base_stream: Gio.InputStream): Gio.BufferedInputStream
    _init(config?: InputStream_ConstructProps): void
}

interface OutputStream_ConstructProps extends Gio.Seekable_ConstructProps, Gio.DataOutputStream_ConstructProps {

    // Own constructor properties of Jsonrpc-1.0.Jsonrpc.OutputStream

    use_gvariant?: boolean | null
}

interface OutputStream extends Gio.Seekable {

    // Own properties of Jsonrpc-1.0.Jsonrpc.OutputStream

    use_gvariant: boolean

    // Own fields of Jsonrpc-1.0.Jsonrpc.OutputStream

    parent_instance: Gio.DataOutputStream

    // Owm methods of Jsonrpc-1.0.Jsonrpc.OutputStream

    get_use_gvariant(): boolean
    set_use_gvariant(use_gvariant: boolean): void
    /**
     * Synchronously sends a message to the peer.
     * 
     * This operation will complete once the message has been buffered. There
     * is no guarantee the peer received it.
     * @param message a #GVariant
     * @param cancellable a #GCancellable or %NULL
     */
    write_message(message: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sends a message to the peer.
     * 
     * This asynchronous operation will complete once the message has
     * been buffered, and there is no guarantee the peer received it.
     * @param message a #GVariant
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback or %NULL
     */
    write_message_async(message: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    write_message_finish(result: Gio.AsyncResult): boolean

    // Class property signals of Jsonrpc-1.0.Jsonrpc.OutputStream

    connect(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-gvariant", ...args: any[]): void
    connect(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::byte-order", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputStream extends Gio.DataOutputStream {

    // Own properties of Jsonrpc-1.0.Jsonrpc.OutputStream

    static name: string
    static $gtype: GObject.GType<OutputStream>

    // Constructors of Jsonrpc-1.0.Jsonrpc.OutputStream

    constructor(config?: OutputStream_ConstructProps) 
    constructor(base_stream: Gio.OutputStream) 
    static new(base_stream: Gio.OutputStream): OutputStream

    // Overloads of new

    /**
     * Creates a new data output stream for `base_stream`.
     * @constructor 
     * @param base_stream a #GOutputStream.
     */
    static new(base_stream: Gio.OutputStream): Gio.DataOutputStream
    _init(config?: OutputStream_ConstructProps): void
}

interface Server_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `client-accepted`
 */
interface Server_ClientAcceptedSignalCallback {
    ($obj: Server, client: Client): void
}

/**
 * Signal callback interface for `client-closed`
 */
interface Server_ClientClosedSignalCallback {
    ($obj: Server, client: Client): void
}

/**
 * Signal callback interface for `handle-call`
 */
interface Server_HandleCallSignalCallback {
    ($obj: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
}

/**
 * Signal callback interface for `notification`
 */
interface Server_NotificationSignalCallback {
    ($obj: Server, client: Client, method: string, id: GLib.Variant): void
}

interface Server {

    // Own fields of Jsonrpc-1.0.Jsonrpc.Server

    parent_instance: GObject.Object

    // Owm methods of Jsonrpc-1.0.Jsonrpc.Server

    /**
     * This function accepts `io_stream` as a new client to the #JsonrpcServer
     * by wrapping it in a #JsonrpcClient and starting the message accept
     * loop.
     * @param io_stream A #GIOStream
     */
    accept_io_stream(io_stream: Gio.IOStream): void
    /**
     * Adds a new handler that will be dispatched when a matching `method` arrives.
     * @param method A method to handle
     * @param handler A handler to   execute when an incoming method matches `methods`
     */
    add_handler(method: string, handler: ServerHandler): number
    /**
     * Calls `foreach_func` for every client connected.
     * @param foreach_func A callback for each client
     */
    foreach(foreach_func: GLib.Func): void
    /**
     * Removes a handler that was previously registered with [method`Server`.add_handler].
     * @param handler_id A handler returned from [method`Server`.add_handler]
     */
    remove_handler(handler_id: number): void

    // Own virtual methods of Jsonrpc-1.0.Jsonrpc.Server

    vfunc_client_accepted(client: Client): void
    vfunc_client_closed(client: Client): void
    vfunc_handle_call(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
    vfunc_notification(client: Client, method: string, params: GLib.Variant): void

    // Own signals of Jsonrpc-1.0.Jsonrpc.Server

    connect(sigName: "client-accepted", callback: Server_ClientAcceptedSignalCallback): number
    connect_after(sigName: "client-accepted", callback: Server_ClientAcceptedSignalCallback): number
    emit(sigName: "client-accepted", client: Client, ...args: any[]): void
    connect(sigName: "client-closed", callback: Server_ClientClosedSignalCallback): number
    connect_after(sigName: "client-closed", callback: Server_ClientClosedSignalCallback): number
    emit(sigName: "client-closed", client: Client, ...args: any[]): void
    connect(sigName: "handle-call", callback: Server_HandleCallSignalCallback): number
    connect_after(sigName: "handle-call", callback: Server_HandleCallSignalCallback): number
    emit(sigName: "handle-call", client: Client, method: string, id: GLib.Variant, params: GLib.Variant, ...args: any[]): void
    connect(sigName: "notification", callback: Server_NotificationSignalCallback): number
    connect_after(sigName: "notification", callback: Server_NotificationSignalCallback): number
    emit(sigName: "notification", client: Client, method: string, id: GLib.Variant, ...args: any[]): void

    // Class property signals of Jsonrpc-1.0.Jsonrpc.Server

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A server for JSON-RPC communication
 * 
 * The #JsonrpcServer class can help you implement a JSON-RPC server. You can
 * accept connections and then communicate with clients using the
 * [class`Client]` API.
 * @class 
 */
class Server extends GObject.Object {

    // Own properties of Jsonrpc-1.0.Jsonrpc.Server

    static name: string
    static $gtype: GObject.GType<Server>

    // Constructors of Jsonrpc-1.0.Jsonrpc.Server

    constructor(config?: Server_ConstructProps) 
    /**
     * Creates a new #JsonrpcServer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #JsonrpcServer.
     * @constructor 
     */
    static new(): Server
    _init(config?: Server_ConstructProps): void
}

interface ClientClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.ClientClass

    parent_class: GObject.ObjectClass
    notification: (self: Client, method_name: string, params: GLib.Variant) => void
    handle_call: (self: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    failed: (self: Client) => void
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
}

abstract class ClientClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.ClientClass

    static name: string
}

interface InputStreamClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.InputStreamClass

    parent_class: Gio.DataInputStreamClass
    _reserved1: object
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
}

abstract class InputStreamClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.InputStreamClass

    static name: string
}

interface MessageAny {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageAny

    magic: MessageMagic
}

class MessageAny {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageAny

    static name: string
}

interface MessageGetBoolean {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean

    magic: MessageMagic
    valptr: boolean
}

class MessageGetBoolean {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean

    static name: string
}

interface MessageGetDict {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetDict

    magic: MessageMagic
    dictptr: GLib.VariantDict
}

class MessageGetDict {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetDict

    static name: string
}

interface MessageGetDouble {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetDouble

    magic: MessageMagic
    valptr: number
}

class MessageGetDouble {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetDouble

    static name: string
}

interface MessageGetInt32 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt32

    magic: MessageMagic
    valptr: number
}

class MessageGetInt32 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetInt32

    static name: string
}

interface MessageGetInt64 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt64

    magic: MessageMagic
    valptr: number
}

class MessageGetInt64 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetInt64

    static name: string
}

interface MessageGetIter {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetIter

    magic: MessageMagic
}

class MessageGetIter {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetIter

    static name: string
}

interface MessageGetString {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetString

    magic: MessageMagic
    valptr: string
}

class MessageGetString {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetString

    static name: string
}

interface MessageGetStrv {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetStrv

    magic: MessageMagic
    valptr: string
}

class MessageGetStrv {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetStrv

    static name: string
}

interface MessageGetVariant {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetVariant

    magic: MessageMagic
    variantptr: GLib.Variant
}

class MessageGetVariant {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetVariant

    static name: string
}

interface MessageMagic {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageMagic

    bytes: number[]
}

class MessageMagic {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageMagic

    static name: string
}

interface MessagePutBoolean {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean

    magic: MessageMagic
    val: boolean
}

class MessagePutBoolean {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean

    static name: string
}

interface MessagePutDouble {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutDouble

    magic: MessageMagic
    val: number
}

class MessagePutDouble {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutDouble

    static name: string
}

interface MessagePutInt32 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt32

    magic: MessageMagic
    val: number
}

class MessagePutInt32 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutInt32

    static name: string
}

interface MessagePutInt64 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt64

    magic: MessageMagic
    val: number
}

class MessagePutInt64 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutInt64

    static name: string
}

interface MessagePutString {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutString

    magic: MessageMagic
    val: string
}

class MessagePutString {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutString

    static name: string
}

interface MessagePutStrv {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutStrv

    magic: MessageMagic
    val: string
}

class MessagePutStrv {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutStrv

    static name: string
}

interface MessagePutVariant {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutVariant

    magic: MessageMagic
    val: GLib.Variant
}

class MessagePutVariant {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutVariant

    static name: string
}

interface OutputStreamClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.OutputStreamClass

    parent_class: Gio.DataOutputStreamClass
    _reserved1: object
    _reserved2: object
    _reserved3: object
    _reserved4: object
    _reserved5: object
    _reserved6: object
    _reserved7: object
    _reserved8: object
    _reserved9: object
    _reserved10: object
    _reserved11: object
    _reserved12: object
}

abstract class OutputStreamClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.OutputStreamClass

    static name: string
}

interface ServerClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.ServerClass

    parent_class: GObject.ObjectClass
    handle_call: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    client_accepted: (self: Server, client: Client) => void
    client_closed: (self: Server, client: Client) => void
}

abstract class ServerClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.ServerClass

    static name: string
}

}
export default Jsonrpc;