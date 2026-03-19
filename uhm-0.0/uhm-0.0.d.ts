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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Uhm {
    /**
     * Uhm-0.0
     */

    /**
     * Error codes for {@link Uhm.Server} operations.
     * @gir-type Enum
     */
    enum ServerError {
        /**
         * In comparison mode, a message received from the client did not match the next message in the current trace file.
         */
        SERVER_ERROR_MESSAGE_MISMATCH,
    }

    /**
     * Evaluates to the major version of the libuhttpmock headers at compile time.
     * (e.g. in libuhttpmock version 1.2.3 this is 1).
     * @since 0.1.0
     */
    const MAJOR_VERSION: number;
    /**
     * Evaluates to the micro version of the libuhttpmock headers at compile time.
     * (e.g. in libuhttpmock version 1.2.3 this is 3).
     * @since 0.1.0
     */
    const MICRO_VERSION: number;
    /**
     * Evaluates to the minor version of the libuhttpmock headers at compile time.
     * (e.g. in libuhttpmock version 1.2.3 this is 2).
     * @since 0.1.0
     */
    const MINOR_VERSION: number;
    namespace Resolver {
        // Signal signatures
        interface SignalSignatures extends Gio.Resolver.SignalSignatures {
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.Resolver.ConstructorProps {}
    }

    /**
     * All the fields in the {@link Uhm.Resolver} structure are private and should never be accessed directly.
     * @gir-type Class
     * @since 0.1.0
     */
    class Resolver extends Gio.Resolver {
        static $gtype: GObject.GType<Resolver>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Resolver.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Resolver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Resolver;

        // Signals

        /** @signal */
        connect<K extends keyof Resolver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resolver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Resolver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resolver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Resolver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Resolver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a resolution mapping from the host name `hostname` to the IP address `addr`.
         * @param hostname the hostname to match
         * @param addr the IP address to resolve to
         * @returns `true` on success; `false` otherwise
         */
        add_A(hostname: string, addr: string): boolean;
        /**
         * Adds a resolution mapping the given `service` (on `protocol` and `domain`) to the IP address `addr` and given `port`.
         * @param service the service name to match
         * @param protocol the protocol name to match
         * @param domain the domain name to match
         * @param addr the IP address to resolve to
         * @param port the port to resolve to
         * @returns `true` on success; `false` otherwise
         */
        add_SRV(service: string, protocol: string, domain: string, addr: string, port: number): boolean;
        /**
         * Resets the state of the {@link Uhm.Resolver}, deleting all records added with uhm_resolver_add_A() and uhm_resolver_add_SRV().
         */
        reset(): void;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted whenever the mock server must compare two {@link Soup.Message}<!-- -->s for equality; e.g. when in the testing or comparison modes.
             * Test code may connect to this signal and implement a handler which checks custom properties of the messages. The default handler compares
             * the URI and method of the messages, but no headers and not the message bodies.
             *
             * Signal handlers should return `true` if the messages match; and `false` otherwise. The first signal handler executed when
             * this signal is emitted wins.
             * @signal
             * @since 0.1.0
             */
            'compare-messages': (arg0: Soup.Message, arg1: Soup.Message, arg2: Soup.ClientContext) => boolean | void;
            /**
             * Emitted whenever the mock server is running and receives a request from a client. Test code may connect to this signal and implement a handler
             * which builds and returns a suitable response for a given message. The default handler reads a request–response pair from the current trace file,
             * matches the requests and then returns the given response. If the requests don't match, an error is raised.
             *
             * Signal handlers should return `true` if they have handled the request and set an appropriate response; and `false` otherwise.
             * @signal
             * @since 0.1.0
             */
            'handle-message': (arg0: Soup.Message, arg1: Soup.ClientContext) => boolean | void;
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::enable-logging': (pspec: GObject.ParamSpec) => void;
            'notify::enable-online': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::resolver': (pspec: GObject.ParamSpec) => void;
            'notify::tls-certificate': (pspec: GObject.ParamSpec) => void;
            'notify::trace-directory': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            address: string;
            enable_logging: boolean;
            enableLogging: boolean;
            enable_online: boolean;
            enableOnline: boolean;
            port: number;
            resolver: Resolver;
            tls_certificate: Gio.TlsCertificate;
            tlsCertificate: Gio.TlsCertificate;
            trace_directory: Gio.File;
            traceDirectory: Gio.File;
        }
    }

    /**
     * All the fields in the {@link Uhm.Server} structure are private and should never be accessed directly.
     * @gir-type Class
     * @since 0.1.0
     */
    class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;

        // Properties

        /**
         * Address of the local mock server if it's running, or `null` otherwise. This will be non-`null` between calls to `uhm_server_run()` and
         * `uhm_server_stop()`. The address is a physical IP address, e.g. <code class="literal">127.0.0.1</code>.
         *
         * This should not normally need to be passed into client code under test, unless the code references IP addresses specifically. The mock server
         * runs a DNS resolver which automatically redirects client requests for known domain names to this address ({@link Uhm.Server.resolver}).
         * @since 0.1.0
         */
        get address(): string;
        /**
         * `true` if network traffic should be logged to a trace file (specified by calling `uhm_server_start_trace()`). This operates independently
         * of whether traffic is online or being handled locally by the mock server.
         * Use this in conjunction with {@link Uhm.Server.enable_online} to either log online traffic, or replay logged traffic locally.
         * @since 0.1.0
         */
        get enable_logging(): boolean;
        set enable_logging(val: boolean);
        /**
         * `true` if network traffic should be logged to a trace file (specified by calling `uhm_server_start_trace()`). This operates independently
         * of whether traffic is online or being handled locally by the mock server.
         * Use this in conjunction with {@link Uhm.Server.enable_online} to either log online traffic, or replay logged traffic locally.
         * @since 0.1.0
         */
        get enableLogging(): boolean;
        set enableLogging(val: boolean);
        /**
         * `true` if network traffic should reach the Internet as normal; `false` to redirect it to the local mock server.
         * Use this in conjunction with {@link Uhm.Server.enable_logging} to either log online traffic, or replay logged traffic locally.
         * @since 0.1.0
         */
        get enable_online(): boolean;
        set enable_online(val: boolean);
        /**
         * `true` if network traffic should reach the Internet as normal; `false` to redirect it to the local mock server.
         * Use this in conjunction with {@link Uhm.Server.enable_logging} to either log online traffic, or replay logged traffic locally.
         * @since 0.1.0
         */
        get enableOnline(): boolean;
        set enableOnline(val: boolean);
        /**
         * Port of the local mock server if it's running, or <code class="literal">0</code> otherwise. This will be non-<code class="literal">0</code> between
         * calls to `uhm_server_run()` and `uhm_server_stop()`.
         *
         * It is intended that this port be passed into the client code under test, to substitute for the default HTTPS port (443) which it would otherwise
         * use.
         * @since 0.1.0
         */
        get port(): number;
        /**
         * Mock resolver used to redirect HTTP requests from specified domain names to the local mock server instance. This will always be set while the
         * server is running (between calls to `uhm_server_run()` and `uhm_server_stop()`), and is `null` otherwise.
         *
         * Use the resolver specified in this property to add domain names which are expected to be requested by the current trace. Domain names not added
         * to the resolver will be rejected by the mock server. The set of domain names in the resolver will be reset when `uhm_server_stop()` is
         * called.
         * @since 0.1.0
         */
        get resolver(): Resolver;
        /**
         * TLS certificate for the mock server to use when serving HTTPS pages. If this is non-`null`, the server will always use HTTPS. If it is `null`,
         * the server will always use HTTP. The TLS certificate may be changed after constructing the {@link Uhm.Server}, but changes to the property will not
         * take effect until the next call to `uhm_server_run()`.
         *
         * A certificate and private key may be generated by executing:
         * <code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -nodes</code>. These files may then be used to construct a
         * {@link Gio.TlsCertificate} by calling `g_tls_certificate_new_from_files()`.
         *
         * Alternatively, a default {@link Gio.TlsCertificate} which wraps a dummy certificate (not signed by any certificate authority) may be set by
         * calling `uhm_server_set_default_tls_certificate()`. This may be used as the {@link Uhm.Server.tls_certificate} if the code under test has no specific
         * requirements of the certificate used by the mock server it's tested against.
         * @since 0.1.0
         */
        get tls_certificate(): Gio.TlsCertificate;
        set tls_certificate(val: Gio.TlsCertificate);
        /**
         * TLS certificate for the mock server to use when serving HTTPS pages. If this is non-`null`, the server will always use HTTPS. If it is `null`,
         * the server will always use HTTP. The TLS certificate may be changed after constructing the {@link Uhm.Server}, but changes to the property will not
         * take effect until the next call to `uhm_server_run()`.
         *
         * A certificate and private key may be generated by executing:
         * <code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -nodes</code>. These files may then be used to construct a
         * {@link Gio.TlsCertificate} by calling `g_tls_certificate_new_from_files()`.
         *
         * Alternatively, a default {@link Gio.TlsCertificate} which wraps a dummy certificate (not signed by any certificate authority) may be set by
         * calling `uhm_server_set_default_tls_certificate()`. This may be used as the {@link Uhm.Server.tls_certificate} if the code under test has no specific
         * requirements of the certificate used by the mock server it's tested against.
         * @since 0.1.0
         */
        get tlsCertificate(): Gio.TlsCertificate;
        set tlsCertificate(val: Gio.TlsCertificate);
        /**
         * Directory relative to which all trace files specified in calls to `uhm_server_start_trace()` will be resolved.
         * This is not used for any other methods, but must be non-`null` if `uhm_server_start_trace()` is called.
         * @since 0.1.0
         */
        get trace_directory(): Gio.File;
        set trace_directory(val: Gio.File);
        /**
         * Directory relative to which all trace files specified in calls to `uhm_server_start_trace()` will be resolved.
         * This is not used for any other methods, but must be non-`null` if `uhm_server_start_trace()` is called.
         * @since 0.1.0
         */
        get traceDirectory(): Gio.File;
        set traceDirectory(val: Gio.File);

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

        static ['new'](): Server;

        // Signals

        /** @signal */
        connect<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Server.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Server.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Server.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Server.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;
        /**
         * Convenience version of `uhm_server_received_message_chunk()` which can be passed directly to `soup_logger_set_printer()`
         * to forward all libsoup traffic logging to a {@link Uhm.Server}. The {@link Uhm.Server} must be passed to `soup_logger_set_printer()` as
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
         * @param logger a {@link Soup.Logger}
         * @param level the detail level of this log message
         * @param direction the transmission direction of the message
         * @param data message data
         * @param user_data user data passed to the {@link Soup.Logger}, or `null`
         */
        static received_message_chunk_from_soup(
            logger: Soup.Logger,
            level: Soup.LoggerLogLevel,
            direction: number,
            data: string,
            user_data?: any | null,
        ): void;

        // Virtual methods

        /**
         * @param expected_message
         * @param actual_message
         * @param actual_client
         * @virtual
         */
        vfunc_compare_messages(
            expected_message: Soup.Message,
            actual_message: Soup.Message,
            actual_client: Soup.ClientContext,
        ): boolean;
        /**
         * @param message
         * @param client
         * @virtual
         */
        vfunc_handle_message(message: Soup.Message, client: Soup.ClientContext): boolean;

        // Methods

        /**
         * Remove a {@link Uhm.Server.compare_messages} filter function installed previously by
         * calling something like `uhm_server_filter_ignore_parameter_values()`.
         *
         * It is an error to call this function with an invalid `filter_id`.
         * @param filter_id filter ID returned by the filter addition function
         */
        compare_messages_remove_filter(filter_id: number): void;
        /**
         * Convenience function to finish logging to or reading from a trace file previously passed to `uhm_server_start_trace()` or
         * `uhm_server_start_trace_full()`.
         *
         * If {@link Uhm.Server.enable_online} is `false`, this will shut down the mock server (as if `uhm_server_stop()` had been called).
         */
        end_trace(): void;
        /**
         * Install a {@link Uhm.Server.compare_messages} filter function which will override the
         * default comparison function to one which ignores differences in the values of
         * the given query `parameter_names`. The named parameters must still be present
         * in the query, however.
         *
         * The filter will remain in place for the lifetime of the {@link Uhm.Server}, until
         * `uhm_server_compare_messages_remove_filter`() is called with the returned
         * filter ID.
         *
         * Note that currently only one of the installed comparison functions will be
         * used. This may change in future.
         * @param parameter_names `null`-terminated array of    parameter names to ignore
         * @returns opaque filter ID used with    `uhm_server_compare_messages_remove_filter()` to remove the filter later
         */
        filter_ignore_parameter_values(parameter_names: string[]): number;
        /**
         * Gets the value of the {@link Uhm.Server.address} property.
         * @returns the physical address of the listening socket the server is currently bound to; or `null` if the server is not running
         */
        get_address(): string | null;
        /**
         * Gets the value of the {@link Uhm.Server.enable_logging} property.
         * @returns `true` if client network traffic is being logged to a trace file; `false` otherwise
         */
        get_enable_logging(): boolean;
        /**
         * Gets the value of the {@link Uhm.Server.enable_online} property.
         * @returns `true` if the server does not intercept and handle network connections from client code; `false` otherwise
         */
        get_enable_online(): boolean;
        /**
         * Gets the value of the {@link Uhm.Server.port} property.
         * @returns the port of the listening socket the server is currently bound to; or <code class="literal">0</code> if the server is not running
         */
        get_port(): number;
        /**
         * Gets the value of the {@link Uhm.Server.resolver} property.
         * @returns the mock resolver in use by the mock server, or `null` if no resolver is active
         */
        get_resolver(): Resolver | null;
        /**
         * Gets the value of the {@link Uhm.Server.tls_certificate} property.
         * @returns the server's current TLS certificate; or `null` if it's serving HTTP only
         */
        get_tls_certificate(): Gio.TlsCertificate | null;
        /**
         * Gets the value of the {@link Uhm.Server.trace_directory} property.
         * @returns the directory to load/store trace files from, or `null`
         */
        get_trace_directory(): Gio.File | null;
        /**
         * Synchronously loads the given `trace_file` of network messages, ready to simulate a network conversation by matching
         * requests against the file and returning the associated responses. Call `uhm_server_run()` to start the mock
         * server afterwards.
         *
         * Loading the trace file may be cancelled from another thread using `cancellable`.
         *
         * On error, `error` will be set and the state of the {@link Uhm.Server} will not change. A {@link GLib.IOError} will be set if there is
         * a problem reading the trace file.
         * @param trace_file trace file to load
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        load_trace(trace_file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        /**
         * Asynchronous version of `uhm_server_load_trace()`. In `callback`, call `uhm_server_load_trace_finish()` to complete the operation.
         * @param trace_file trace file to load
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        load_trace_async(trace_file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * Asynchronous version of `uhm_server_load_trace()`. In `callback`, call `uhm_server_load_trace_finish()` to complete the operation.
         * @param trace_file trace file to load
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback function to call once the async operation is complete
         */
        load_trace_async(
            trace_file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous version of `uhm_server_load_trace()`. In `callback`, call `uhm_server_load_trace_finish()` to complete the operation.
         * @param trace_file trace file to load
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback function to call once the async operation is complete
         */
        load_trace_async(
            trace_file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * Finishes an asynchronous operation started by `uhm_server_load_trace_async()`.
         *
         * On error, `error` will be set and the state of the {@link Uhm.Server} will not change.
         * See `uhm_server_load_trace()` for details on the error domains used.
         * @param result asynchronous operation result passed to the callback
         */
        load_trace_finish(result: Gio.AsyncResult): void;
        /**
         * Indicates to the mock server that a single new line of a message was received from the real server. The message line may be
         * appended to the current trace file if logging is enabled ({@link Uhm.Server.enable_logging} is `true`), adding a newline character
         * at the end. If logging is disabled but online mode is enabled ({@link Uhm.Server.enable_online} is `true`), the message line will
         * be compared to the next expected line in the existing trace file. Otherwise, this function is a no-op.
         *
         * On failure, `error` will be set and the {@link Uhm.Server} state will remain unchanged apart from the parse state machine, which will remain
         * in the state reached after parsing `message_chunk`. A `G_IO_ERROR` will be returned if writing to the trace file failed. If in
         * comparison mode and the received message chunk corresponds to an unexpected message in the trace file, a `UHM_SERVER_ERROR` will
         * be returned.
         *
         * <note><para>In common cases where message log data only needs to be passed to a {@link Uhm.Server} and not (for example) logged to an
         * application-specific file or the command line as  well, it is simpler to use `uhm_server_received_message_chunk_from_soup()`, passing
         * it directly to `soup_logger_set_printer()`. See the documentation for `uhm_server_received_message_chunk_from_soup()` for details.</para></note>
         * @param message_chunk single line of a message which was received
         * @param message_chunk_length length of `message_chunk` in bytes
         */
        received_message_chunk(message_chunk: string, message_chunk_length: number): void;
        /**
         * Convenience version of `uhm_server_received_message_chunk()` which takes the
         * message `direction` and `data` separately, as provided by libsoup in a
         * {@link Soup.LoggerPrinter} callback.
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
         * @param data_length length of `data` in bytes
         */
        received_message_chunk_with_direction(direction: number, data: string, data_length: number): void;
        /**
         * Runs the mock server, binding to a loopback TCP/IP interface and preparing a HTTPS server which is ready to accept requests.
         * The TCP/IP address and port number are chosen randomly out of the loopback addresses, and are exposed as {@link Uhm.Server.address} and {@link Uhm.Server.port}
         * once this function has returned. A {@link Uhm.Resolver} (exposed as {@link Uhm.Server.resolver}) is set as the default {@link Gio.Resolver} while the server is running.
         *
         * The server is started in a worker thread, so this function returns immediately and the server continues to run in the background. Use `uhm_server_stop()`
         * to shut it down.
         *
         * This function always succeeds.
         */
        run(): void;
        /**
         * Sets the value of the {@link Uhm.Server.tls_certificate} property to the default TLS certificate built in to libuhttpmock.
         * This default certificate is not signed by any certificate authority, and contains minimal metadata details. It may
         * be used by clients which have no special certificate requirements; clients which have special requirements should
         * construct a custom {@link Gio.TlsCertificate} and pass it to `uhm_server_set_tls_certificate()`.
         * @returns the default certificate set as {@link Uhm.Server.tls_certificate}
         */
        set_default_tls_certificate(): Gio.TlsCertificate;
        /**
         * Sets the value of the {@link Uhm.Server.enable_logging} property.
         * @param enable_logging `true` to log client network traffic to a trace file; `false` otherwise
         */
        set_enable_logging(enable_logging: boolean): void;
        /**
         * Sets the value of the {@link Uhm.Server.enable_online} property.
         * @param enable_online `true` to not intercept and handle network connections from client code; `false` otherwise
         */
        set_enable_online(enable_online: boolean): void;
        /**
         * Set the domain names which are expected to have requests made of them by the client code interacting with this {@link Uhm.Server}.
         * This is a convenience method which calls uhm_resolver_add_A() on the server’s {@link Uhm.Resolver} for each of the domain names
         * listed in `domain_names`. It associates them with the server’s current IP address, and automatically updates the mappings
         * if the IP address or resolver change.
         *
         * Note that this will reset all records on the server’s {@link Uhm.Resolver}, replacing all of them with the provided `domain_names`.
         *
         * It is safe to add further domain names to the {@link Uhm.Resolver} in a callback for the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal for {@link Uhm.Server.resolver};
         * that signal is emitted after the resolver is cleared and these `domain_names` are added.
         * @param domain_names `null`-terminated array of domain names to expect, or `null` to not expect any
         */
        set_expected_domain_names(domain_names?: string[] | null): void;
        /**
         * Sets the value of the {@link Uhm.Server.tls_certificate} property.
         * @param tls_certificate TLS certificate for the server to use; or `null` to serve HTTP only
         */
        set_tls_certificate(tls_certificate?: Gio.TlsCertificate | null): void;
        /**
         * Sets the value of the {@link Uhm.Server.trace_directory} property.
         * @param trace_directory a directory to load/store trace files from, or `null` to unset it
         */
        set_trace_directory(trace_directory?: Gio.File | null): void;
        /**
         * Starts a mock server which follows the trace file of filename `trace_name` in the {@link Uhm.Server.trace_directory} directory.
         * See `uhm_server_start_trace_full()` for further documentation.
         *
         * This function has undefined behaviour if {@link Uhm.Server.trace_directory} is `null`.
         *
         * On failure, `error` will be set and the {@link Uhm.Server} state will remain unchanged. See `uhm_server_start_trace_full()` for
         * details of the error domains used.
         * @param trace_name name of the trace
         */
        start_trace(trace_name: string): void;
        /**
         * Convenience function to start logging to or reading from the given `trace_file`, depending on the values of {@link Uhm.Server.enable_logging} and
         * {@link Uhm.Server.enable_online}.
         *
         * If {@link Uhm.Server.enable_logging} is `true`, a log handler will be set up to redirect all client network activity into the given `trace_file`.
         * If `trace_file` already exists, it will be overwritten.
         *
         * If {@link Uhm.Server.enable_online} is `false`, the given `trace_file` is loaded using `uhm_server_load_trace()` and then a mock server is
         * started using `uhm_server_run()`.
         *
         * On failure, `error` will be set and the {@link Uhm.Server} state will remain unchanged. A {@link GLib.IOError} will be set if logging is enabled
         * ({@link Uhm.Server.enable_logging}) and there is a problem writing to the trace file; or if a trace needs to be loaded and there is a problem
         * reading from the trace file.
         * @param trace_file a trace file to load
         */
        start_trace_full(trace_file: Gio.File): void;
        /**
         * Stops a mock server started by calling `uhm_server_run()`. This shuts down the server's worker thread and unbinds it from its TCP/IP socket.
         *
         * This unloads any trace file loaded by calling `uhm_server_load_trace()` (or its asynchronous counterpart). It also resets the set of domain
         * names loaded into the {@link Uhm.Server.resolver}.
         *
         * This function always succeeds.
         */
        stop(): void;
        /**
         * Unloads the current trace file of network messages, as loaded by `uhm_server_load_trace()` or `uhm_server_load_trace_async()`.
         */
        unload_trace(): void;
    }

    /**
     * @gir-type Alias
     */
    type ResolverClass = typeof Resolver;
    /**
     * @gir-type Struct
     */
    abstract class ResolverPrivate {
        static $gtype: GObject.GType<ResolverPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ServerClass = typeof Server;
    /**
     * @gir-type Struct
     */
    abstract class ServerPrivate {
        static $gtype: GObject.GType<ServerPrivate>;
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

export default Uhm;

// END
