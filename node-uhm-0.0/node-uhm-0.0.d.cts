
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-uhm-0.0-import.d.ts';
    
/**
 * Uhm-0.0
 */

import type Soup from '@girs/node-soup-2.4';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * Error codes for #UhmServer operations.
 */
export enum ServerError {
    /**
     * In comparison mode, a message received from the client did not match the next message in the current trace file.
     */
    SERVER_ERROR_MESSAGE_MISMATCH,
}
/**
 * Evaluates to the major version of the libuhttpmock headers at compile time.
 * (e.g. in libuhttpmock version 1.2.3 this is 1).
 */
export const MAJOR_VERSION: number
/**
 * Evaluates to the micro version of the libuhttpmock headers at compile time.
 * (e.g. in libuhttpmock version 1.2.3 this is 3).
 */
export const MICRO_VERSION: number
/**
 * Evaluates to the minor version of the libuhttpmock headers at compile time.
 * (e.g. in libuhttpmock version 1.2.3 this is 2).
 */
export const MINOR_VERSION: number
export module Resolver {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Resolver.ConstructorProperties {
    }

}

export interface Resolver {

    // Own properties of Uhm-0.0.Uhm.Resolver

    __gtype__: number

    // Owm methods of Uhm-0.0.Uhm.Resolver

    /**
     * Adds a resolution mapping from the host name `hostname` to the IP address `addr`.
     * @param hostname the hostname to match
     * @param addr the IP address to resolve to
     * @returns %TRUE on success; %FALSE otherwise
     */
    addA(hostname: string | null, addr: string | null): boolean
    /**
     * Adds a resolution mapping the given `service` (on `protocol` and `domain)` to the IP address `addr` and given `port`.
     * @param service the service name to match
     * @param protocol the protocol name to match
     * @param domain the domain name to match
     * @param addr the IP address to resolve to
     * @param port the port to resolve to
     * @returns %TRUE on success; %FALSE otherwise
     */
    addSRV(service: string | null, protocol: string | null, domain: string | null, addr: string | null, port: number): boolean
    /**
     * Resets the state of the #UhmResolver, deleting all records added with uhm_resolver_add_A() and uhm_resolver_add_SRV().
     */
    reset(): void

    // Class property signals of Uhm-0.0.Uhm.Resolver

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #UhmResolver structure are private and should never be accessed directly.
 * @class 
 */
export class Resolver extends Gio.Resolver {

    // Own properties of Uhm-0.0.Uhm.Resolver

    static name: string

    // Constructors of Uhm-0.0.Uhm.Resolver

    constructor(config?: Resolver.ConstructorProperties) 
    /**
     * Creates a new #UhmResolver with default property values.
     * @constructor 
     * @returns a new #UhmResolver; unref with g_object_unref()
     */
    constructor() 
    /**
     * Creates a new #UhmResolver with default property values.
     * @constructor 
     * @returns a new #UhmResolver; unref with g_object_unref()
     */
    static new(): Resolver
    _init(config?: Resolver.ConstructorProperties): void
}

export module Server {

    // Signal callback interfaces

    /**
     * Signal callback interface for `compare-messages`
     */
    export interface CompareMessagesSignalCallback {
        (expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext): boolean
    }

    /**
     * Signal callback interface for `handle-message`
     */
    export interface HandleMessageSignalCallback {
        (message: Soup.Message, client: Soup.ClientContext): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Uhm-0.0.Uhm.Server

        /**
         * %TRUE if network traffic should be logged to a trace file (specified by calling uhm_server_start_trace()). This operates independently
         * of whether traffic is online or being handled locally by the mock server.
         * Use this in conjunction with #UhmServer:enable-online to either log online traffic, or replay logged traffic locally.
         */
        enableLogging?: boolean | null
        /**
         * %TRUE if network traffic should reach the Internet as normal; %FALSE to redirect it to the local mock server.
         * Use this in conjunction with #UhmServer:enable-logging to either log online traffic, or replay logged traffic locally.
         */
        enableOnline?: boolean | null
        /**
         * TLS certificate for the mock server to use when serving HTTPS pages. If this is non-%NULL, the server will always use HTTPS. If it is %NULL,
         * the server will always use HTTP. The TLS certificate may be changed after constructing the #UhmServer, but changes to the property will not
         * take effect until the next call to uhm_server_run().
         * 
         * A certificate and private key may be generated by executing:
         * <code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -nodes</code>. These files may then be used to construct a
         * #GTlsCertificate by calling g_tls_certificate_new_from_files().
         * 
         * Alternatively, a default #GTlsCertificate which wraps a dummy certificate (not signed by any certificate authority) may be set by
         * calling uhm_server_set_default_tls_certificate(). This may be used as the #UhmServer:tls-certificate if the code under test has no specific
         * requirements of the certificate used by the mock server it's tested against.
         */
        tlsCertificate?: Gio.TlsCertificate | null
        /**
         * Directory relative to which all trace files specified in calls to uhm_server_start_trace() will be resolved.
         * This is not used for any other methods, but must be non-%NULL if uhm_server_start_trace() is called.
         */
        traceDirectory?: Gio.File | null
    }

}

export interface Server {

    // Own properties of Uhm-0.0.Uhm.Server

    /**
     * Address of the local mock server if it's running, or %NULL otherwise. This will be non-%NULL between calls to uhm_server_run() and
     * uhm_server_stop(). The address is a physical IP address, e.g. <code class="literal">127.0.0.1</code>.
     * 
     * This should not normally need to be passed into client code under test, unless the code references IP addresses specifically. The mock server
     * runs a DNS resolver which automatically redirects client requests for known domain names to this address (#UhmServer:resolver).
     */
    readonly address: string | null
    /**
     * %TRUE if network traffic should be logged to a trace file (specified by calling uhm_server_start_trace()). This operates independently
     * of whether traffic is online or being handled locally by the mock server.
     * Use this in conjunction with #UhmServer:enable-online to either log online traffic, or replay logged traffic locally.
     */
    enableLogging: boolean
    /**
     * %TRUE if network traffic should reach the Internet as normal; %FALSE to redirect it to the local mock server.
     * Use this in conjunction with #UhmServer:enable-logging to either log online traffic, or replay logged traffic locally.
     */
    enableOnline: boolean
    /**
     * Port of the local mock server if it's running, or <code class="literal">0</code> otherwise. This will be non-<code class="literal">0</code> between
     * calls to uhm_server_run() and uhm_server_stop().
     * 
     * It is intended that this port be passed into the client code under test, to substitute for the default HTTPS port (443) which it would otherwise
     * use.
     */
    readonly port: number
    /**
     * Mock resolver used to redirect HTTP requests from specified domain names to the local mock server instance. This will always be set while the
     * server is running (between calls to uhm_server_run() and uhm_server_stop()), and is %NULL otherwise.
     * 
     * Use the resolver specified in this property to add domain names which are expected to be requested by the current trace. Domain names not added
     * to the resolver will be rejected by the mock server. The set of domain names in the resolver will be reset when uhm_server_stop() is
     * called.
     */
    readonly resolver: Resolver
    /**
     * TLS certificate for the mock server to use when serving HTTPS pages. If this is non-%NULL, the server will always use HTTPS. If it is %NULL,
     * the server will always use HTTP. The TLS certificate may be changed after constructing the #UhmServer, but changes to the property will not
     * take effect until the next call to uhm_server_run().
     * 
     * A certificate and private key may be generated by executing:
     * <code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -nodes</code>. These files may then be used to construct a
     * #GTlsCertificate by calling g_tls_certificate_new_from_files().
     * 
     * Alternatively, a default #GTlsCertificate which wraps a dummy certificate (not signed by any certificate authority) may be set by
     * calling uhm_server_set_default_tls_certificate(). This may be used as the #UhmServer:tls-certificate if the code under test has no specific
     * requirements of the certificate used by the mock server it's tested against.
     */
    tlsCertificate: Gio.TlsCertificate
    /**
     * Directory relative to which all trace files specified in calls to uhm_server_start_trace() will be resolved.
     * This is not used for any other methods, but must be non-%NULL if uhm_server_start_trace() is called.
     */
    traceDirectory: Gio.File
    __gtype__: number

    // Owm methods of Uhm-0.0.Uhm.Server

    /**
     * Remove a #UhmServer:compare-messages filter function installed previously by
     * calling something like uhm_server_filter_ignore_parameter_values().
     * 
     * It is an error to call this function with an invalid `filter_id`.
     * @param filterId filter ID returned by the filter addition function
     */
    compareMessagesRemoveFilter(filterId: number): void
    /**
     * Convenience function to finish logging to or reading from a trace file previously passed to uhm_server_start_trace() or
     * uhm_server_start_trace_full().
     * 
     * If #UhmServer:enable-online is %FALSE, this will shut down the mock server (as if uhm_server_stop() had been called).
     */
    endTrace(): void
    /**
     * Install a #UhmServer:compare-messages filter function which will override the
     * default comparison function to one which ignores differences in the values of
     * the given query `parameter_names`. The named parameters must still be present
     * in the query, however.
     * 
     * The filter will remain in place for the lifetime of the #UhmServer, until
     * `uhm_server_compare_messages_remove_filter(`) is called with the returned
     * filter ID.
     * 
     * Note that currently only one of the installed comparison functions will be
     * used. This may change in future.
     * @param parameterNames %NULL-terminated array of    parameter names to ignore
     * @returns opaque filter ID used with    uhm_server_compare_messages_remove_filter() to remove the filter later
     */
    filterIgnoreParameterValues(parameterNames: string[]): number
    /**
     * Gets the value of the #UhmServer:address property.
     * @returns the physical address of the listening socket the server is currently bound to; or %NULL if the server is not running
     */
    getAddress(): string | null
    /**
     * Gets the value of the #UhmServer:enable-logging property.
     * @returns %TRUE if client network traffic is being logged to a trace file; %FALSE otherwise
     */
    getEnableLogging(): boolean
    /**
     * Gets the value of the #UhmServer:enable-online property.
     * @returns %TRUE if the server does not intercept and handle network connections from client code; %FALSE otherwise
     */
    getEnableOnline(): boolean
    /**
     * Gets the value of the #UhmServer:port property.
     * @returns the port of the listening socket the server is currently bound to; or <code class="literal">0</code> if the server is not running
     */
    getPort(): number
    /**
     * Gets the value of the #UhmServer:resolver property.
     * @returns the mock resolver in use by the mock server, or %NULL if no resolver is active
     */
    getResolver(): Resolver | null
    /**
     * Gets the value of the #UhmServer:tls-certificate property.
     * @returns the server's current TLS certificate; or %NULL if it's serving HTTP only
     */
    getTlsCertificate(): Gio.TlsCertificate | null
    /**
     * Gets the value of the #UhmServer:trace-directory property.
     * @returns the directory to load/store trace files from, or %NULL
     */
    getTraceDirectory(): Gio.File | null
    /**
     * Synchronously loads the given `trace_file` of network messages, ready to simulate a network conversation by matching
     * requests against the file and returning the associated responses. Call uhm_server_run() to start the mock
     * server afterwards.
     * 
     * Loading the trace file may be cancelled from another thread using `cancellable`.
     * 
     * On error, `error` will be set and the state of the #UhmServer will not change. A #GIOError will be set if there is
     * a problem reading the trace file.
     * @param traceFile trace file to load
     * @param cancellable a #GCancellable, or %NULL
     */
    loadTrace(traceFile: Gio.File, cancellable: Gio.Cancellable | null): void
    /**
     * Asynchronous version of uhm_server_load_trace(). In `callback,` call uhm_server_load_trace_finish() to complete the operation.
     * @param traceFile trace file to load
     * @param cancellable a #GCancellable, or %NULL
     * @param callback function to call once the async operation is complete
     */
    loadTraceAsync(traceFile: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started by uhm_server_load_trace_async().
     * 
     * On error, `error` will be set and the state of the #UhmServer will not change.
     * See uhm_server_load_trace() for details on the error domains used.
     * @param result asynchronous operation result passed to the callback
     */
    loadTraceFinish(result: Gio.AsyncResult): void
    /**
     * Indicates to the mock server that a single new line of a message was received from the real server. The message line may be
     * appended to the current trace file if logging is enabled (#UhmServer:enable-logging is %TRUE), adding a newline character
     * at the end. If logging is disabled but online mode is enabled (#UhmServer:enable-online is %TRUE), the message line will
     * be compared to the next expected line in the existing trace file. Otherwise, this function is a no-op.
     * 
     * On failure, `error` will be set and the #UhmServer state will remain unchanged apart from the parse state machine, which will remain
     * in the state reached after parsing `message_chunk`. A %G_IO_ERROR will be returned if writing to the trace file failed. If in
     * comparison mode and the received message chunk corresponds to an unexpected message in the trace file, a %UHM_SERVER_ERROR will
     * be returned.
     * 
     * <note><para>In common cases where message log data only needs to be passed to a #UhmServer and not (for example) logged to an
     * application-specific file or the command line as  well, it is simpler to use uhm_server_received_message_chunk_from_soup(), passing
     * it directly to soup_logger_set_printer(). See the documentation for uhm_server_received_message_chunk_from_soup() for details.</para></note>
     * @param messageChunk single line of a message which was received
     * @param messageChunkLength length of `message_chunk` in bytes
     */
    receivedMessageChunk(messageChunk: string | null, messageChunkLength: number): void
    /**
     * Convenience version of uhm_server_received_message_chunk() which takes the
     * message `direction` and `data` separately, as provided by libsoup in a
     * #SoupLoggerPrinter callback.
     * 
     * <informalexample><programlisting>
     * UhmServer *mock_server;
     * SoupSession *session;
     * SoupLogger *logger;
     * 
     * static void
     * soup_log_printer (SoupLogger *logger, SoupLoggerLogLevel level, char direction, const char *data, gpointer user_data)
     * {
     * 	/<!-- -->* Pass the data to libuhttpmock. *<!-- -->/
     * UhmServer *mock_server = UHM_SERVER (user_data);
     * 	uhm_server_received_message_chunk_with_direction (mock_server, direction, data, strlen (data), NULL);
     * }
     * 
     * mock_server = uhm_server_new ();
     * session = soup_session_new ();
     * 
     * logger = soup_logger_new (SOUP_LOGGER_LOG_BODY, -1);
     * soup_logger_set_printer (logger, (SoupLoggerPrinter) soup_log_printer, g_object_ref (mock_server), g_object_unref);
     * soup_session_add_feature (session, SOUP_SESSION_FEATURE (logger));
     * g_object_unref (logger);
     * 
     * /<!-- -->* Do something with mock_server here. *<!-- -->/
     * </programlisting></informalexample>
     * @param direction single character indicating the direction of message transmission
     * @param data single line of a message which was received
     * @param dataLength length of `data` in bytes
     */
    receivedMessageChunkWithDirection(direction: number, data: string | null, dataLength: number): void
    /**
     * Runs the mock server, binding to a loopback TCP/IP interface and preparing a HTTPS server which is ready to accept requests.
     * The TCP/IP address and port number are chosen randomly out of the loopback addresses, and are exposed as #UhmServer:address and #UhmServer:port
     * once this function has returned. A #UhmResolver (exposed as #UhmServer:resolver) is set as the default #GResolver while the server is running.
     * 
     * The server is started in a worker thread, so this function returns immediately and the server continues to run in the background. Use uhm_server_stop()
     * to shut it down.
     * 
     * This function always succeeds.
     */
    run(): void
    /**
     * Sets the value of the #UhmServer:tls-certificate property to the default TLS certificate built in to libuhttpmock.
     * This default certificate is not signed by any certificate authority, and contains minimal metadata details. It may
     * be used by clients which have no special certificate requirements; clients which have special requirements should
     * construct a custom #GTlsCertificate and pass it to uhm_server_set_tls_certificate().
     * @returns the default certificate set as #UhmServer:tls-certificate
     */
    setDefaultTlsCertificate(): Gio.TlsCertificate
    /**
     * Sets the value of the #UhmServer:enable-logging property.
     * @param enableLogging %TRUE to log client network traffic to a trace file; %FALSE otherwise
     */
    setEnableLogging(enableLogging: boolean): void
    /**
     * Sets the value of the #UhmServer:enable-online property.
     * @param enableOnline %TRUE to not intercept and handle network connections from client code; %FALSE otherwise
     */
    setEnableOnline(enableOnline: boolean): void
    /**
     * Set the domain names which are expected to have requests made of them by the client code interacting with this #UhmServer.
     * This is a convenience method which calls uhm_resolver_add_A() on the server’s #UhmResolver for each of the domain names
     * listed in `domain_names`. It associates them with the server’s current IP address, and automatically updates the mappings
     * if the IP address or resolver change.
     * 
     * Note that this will reset all records on the server’s #UhmResolver, replacing all of them with the provided `domain_names`.
     * 
     * It is safe to add further domain names to the #UhmResolver in a callback for the #GObject::notify signal for #UhmServer:resolver;
     * that signal is emitted after the resolver is cleared and these `domain_names` are added.
     * @param domainNames %NULL-terminated array of domain names to expect, or %NULL to not expect any
     */
    setExpectedDomainNames(domainNames: string[] | null): void
    /**
     * Sets the value of the #UhmServer:tls-certificate property.
     * @param tlsCertificate TLS certificate for the server to use; or %NULL to serve HTTP only
     */
    setTlsCertificate(tlsCertificate: Gio.TlsCertificate | null): void
    /**
     * Sets the value of the #UhmServer:trace-directory property.
     * @param traceDirectory a directory to load/store trace files from, or %NULL to unset it
     */
    setTraceDirectory(traceDirectory: Gio.File | null): void
    /**
     * Starts a mock server which follows the trace file of filename `trace_name` in the #UhmServer:trace-directory directory.
     * See uhm_server_start_trace_full() for further documentation.
     * 
     * This function has undefined behaviour if #UhmServer:trace-directory is %NULL.
     * 
     * On failure, `error` will be set and the #UhmServer state will remain unchanged. See uhm_server_start_trace_full() for
     * details of the error domains used.
     * @param traceName name of the trace
     */
    startTrace(traceName: string | null): void
    /**
     * Convenience function to start logging to or reading from the given `trace_file,` depending on the values of #UhmServer:enable-logging and
     * #UhmServer:enable-online.
     * 
     * If #UhmServer:enable-logging is %TRUE, a log handler will be set up to redirect all client network activity into the given `trace_file`.
     * If `trace_file` already exists, it will be overwritten.
     * 
     * If #UhmServer:enable-online is %FALSE, the given `trace_file` is loaded using uhm_server_load_trace() and then a mock server is
     * started using uhm_server_run().
     * 
     * On failure, `error` will be set and the #UhmServer state will remain unchanged. A #GIOError will be set if logging is enabled
     * (#UhmServer:enable-logging) and there is a problem writing to the trace file; or if a trace needs to be loaded and there is a problem
     * reading from the trace file.
     * @param traceFile a trace file to load
     */
    startTraceFull(traceFile: Gio.File): void
    /**
     * Stops a mock server started by calling uhm_server_run(). This shuts down the server's worker thread and unbinds it from its TCP/IP socket.
     * 
     * This unloads any trace file loaded by calling uhm_server_load_trace() (or its asynchronous counterpart). It also resets the set of domain
     * names loaded into the #UhmServer:resolver.
     * 
     * This function always succeeds.
     */
    stop(): void
    /**
     * Unloads the current trace file of network messages, as loaded by uhm_server_load_trace() or uhm_server_load_trace_async().
     */
    unloadTrace(): void

    // Own virtual methods of Uhm-0.0.Uhm.Server

    compareMessages(expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext): boolean
    handleMessage(message: Soup.Message, client: Soup.ClientContext): boolean

    // Own signals of Uhm-0.0.Uhm.Server

    connect(sigName: "compare-messages", callback: Server.CompareMessagesSignalCallback): number
    on(sigName: "compare-messages", callback: Server.CompareMessagesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "compare-messages", callback: Server.CompareMessagesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "compare-messages", callback: Server.CompareMessagesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "compare-messages", actualMessage: Soup.Message, actualClient: Soup.ClientContext, ...args: any[]): void
    connect(sigName: "handle-message", callback: Server.HandleMessageSignalCallback): number
    on(sigName: "handle-message", callback: Server.HandleMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-message", callback: Server.HandleMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-message", callback: Server.HandleMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-message", client: Soup.ClientContext, ...args: any[]): void

    // Class property signals of Uhm-0.0.Uhm.Server

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::enable-logging", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-logging", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-logging", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-logging", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-logging", ...args: any[]): void
    connect(sigName: "notify::enable-online", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-online", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolver", ...args: any[]): void
    connect(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-certificate", ...args: any[]): void
    connect(sigName: "notify::trace-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::trace-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::trace-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::trace-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::trace-directory", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #UhmServer structure are private and should never be accessed directly.
 * @class 
 */
export class Server extends GObject.Object {

    // Own properties of Uhm-0.0.Uhm.Server

    static name: string

    // Constructors of Uhm-0.0.Uhm.Server

    constructor(config?: Server.ConstructorProperties) 
    /**
     * Creates a new #UhmServer with default properties.
     * @constructor 
     * @returns a new #UhmServer; unref with g_object_unref()
     */
    constructor() 
    /**
     * Creates a new #UhmServer with default properties.
     * @constructor 
     * @returns a new #UhmServer; unref with g_object_unref()
     */
    static new(): Server
    _init(config?: Server.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    /**
     * Convenience version of uhm_server_received_message_chunk() which can be passed directly to soup_logger_set_printer()
     * to forward all libsoup traffic logging to a #UhmServer. The #UhmServer must be passed to soup_logger_set_printer() as
     * its user data.
     * 
     * <informalexample><programlisting>
     * UhmServer *mock_server;
     * SoupSession *session;
     * SoupLogger *logger;
     * 
     * mock_server = uhm_server_new ();
     * session = soup_session_new ();
     * 
     * logger = soup_logger_new (SOUP_LOGGER_LOG_BODY, -1);
     * soup_logger_set_printer (logger, uhm_server_received_message_chunk_from_soup, g_object_ref (mock_server), g_object_unref);
     * soup_session_add_feature (session, SOUP_SESSION_FEATURE (logger));
     * g_object_unref (logger);
     * 
     * /<!-- -->* Do something with mock_server here. *<!-- -->/
     * </programlisting></informalexample>
     * @param logger a #SoupLogger
     * @param level the detail level of this log message
     * @param direction the transmission direction of the message
     * @param data message data
     * @param userData user data passed to the #SoupLogger, or %NULL
     */
    static receivedMessageChunkFromSoup(logger: Soup.Logger, level: Soup.LoggerLogLevel, direction: number, data: string | null, userData: any | null): void
}

export interface ResolverClass {
}

/**
 * All the fields in the #UhmResolverClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class ResolverClass {

    // Own properties of Uhm-0.0.Uhm.ResolverClass

    static name: string
}

export interface ResolverPrivate {
}

export class ResolverPrivate {

    // Own properties of Uhm-0.0.Uhm.ResolverPrivate

    static name: string
}

export interface ServerClass {

    // Own fields of Uhm-0.0.Uhm.ServerClass

    handleMessage: (self: Server, message: Soup.Message, client: Soup.ClientContext) => boolean
    compareMessages: (self: Server, expectedMessage: Soup.Message, actualMessage: Soup.Message, actualClient: Soup.ClientContext) => boolean
}

/**
 * Most of the fields in the #UhmServerClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class ServerClass {

    // Own properties of Uhm-0.0.Uhm.ServerClass

    static name: string
}

export interface ServerPrivate {
}

export class ServerPrivate {

    // Own properties of Uhm-0.0.Uhm.ServerPrivate

    static name: string
}

// END