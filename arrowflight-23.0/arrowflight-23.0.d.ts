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
import type Arrow from '@girs/arrow-23.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace ArrowFlight {
    /**
     * ArrowFlight-23.0
     */

    /**
     * The major version.
     * @since 17.0.0
     */
    const VERSION_MAJOR: number;
    /**
     * The micro version.
     * @since 17.0.0
     */
    const VERSION_MICRO: number;
    /**
     * The minor version.
     * @since 17.0.0
     */
    const VERSION_MINOR: number;
    /**
     * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
     * for snapshot version.
     * @since 17.0.0
     */
    const VERSION_TAG: string;
    /**
     * @gir-type Callback
     */
    interface HeaderFunc {
        (name: string, value: string): void;
    }
    namespace CallOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            timeout: number;
        }
    }

    /**
     * @gir-type Class
     */
    class CallOptions extends GObject.Object {
        static $gtype: GObject.GType<CallOptions>;

        // Properties

        /**
         * An optional timeout for this call. Negative durations mean an
         * implementation-defined default behavior will be used
         * instead. This is the default value.
         * @since 18.0.0
         */
        get timeout(): number;
        set timeout(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CallOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CallOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CallOptions;

        // Signals

        /** @signal */
        connect<K extends keyof CallOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CallOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CallOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CallOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CallOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CallOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a header.
         * @param name A header name.
         * @param value A header value.
         */
        add_header(name: string, value: string): void;
        /**
         * Clear all headers.
         */
        clear_headers(): void;
        /**
         * Iterates over all headers in the options.
         * @param func The user's callback function.
         */
        foreach_header(func: HeaderFunc): void;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::client': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * @construct-only
         */
        set client(val: any);

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

        static ['new'](location: Location, options?: ClientOptions | null): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Authenticates to the server using basic HTTP style authentication.
         * @param user User name to be used.
         * @param password Password to be used.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns `true` on success, `false` if there was an error.
         */
        authenticate_basic_token(
            user: string,
            password: string,
            options: CallOptions | null,
        ): [boolean, string, string];
        /**
         * @returns `true` on success, `false` if there was an error.
         */
        close(): boolean;
        /**
         * @param ticket A {@link ArrowFlight.Ticket}.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns The {@link ArrowFlight.StreamReader} to read record batched from the server   on success, `null` on error.
         */
        do_get(ticket: Ticket, options?: CallOptions | null): StreamReader | null;
        /**
         * Upload data to a Flight described by the given descriptor. The
         * caller must call `garrow_record_batch_writer_close()` on the
         * returned stream once they are done writing.
         *
         * The reader and writer are linked; closing the writer will also
         * close the reader. Use `garrow_flight_stream_writer_done_writing()` to
         * only close the write side of the channel.
         * @param descriptor A {@link ArrowFlight.Descriptor}.
         * @param schema A {@link Arrow.Schema}.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns The `GAFlighDoPutResult` holding a reader and a writer on success,   `null` on error.
         */
        do_put(descriptor: Descriptor, schema: Arrow.Schema, options?: CallOptions | null): DoPutResult | null;
        /**
         * @param descriptor A {@link ArrowFlight.Descriptor} to be processed.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns The returned {@link ArrowFlight.Info} on   success, `null` on error.
         */
        get_flight_info(descriptor: Descriptor, options?: CallOptions | null): Info | null;
        /**
         * @param criteria A {@link ArrowFlight.Criteria}.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns The returned list of {@link ArrowFlight.Info} on success, `null` on error.
         */
        list_flights(criteria?: Criteria | null, options?: CallOptions | null): Info[] | null;
    }

    namespace ClientOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::certificate-chain': (pspec: GObject.ParamSpec) => void;
            'notify::disable-server-verification': (pspec: GObject.ParamSpec) => void;
            'notify::override-host-name': (pspec: GObject.ParamSpec) => void;
            'notify::private-key': (pspec: GObject.ParamSpec) => void;
            'notify::tls-root-certificates': (pspec: GObject.ParamSpec) => void;
            'notify::write-size-limit-bytes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            certificate_chain: string;
            certificateChain: string;
            disable_server_verification: boolean;
            disableServerVerification: boolean;
            override_host_name: string;
            overrideHostName: string;
            private_key: string;
            privateKey: string;
            tls_root_certificates: string;
            tlsRootCertificates: string;
            write_size_limit_bytes: number;
            writeSizeLimitBytes: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ClientOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientOptions>;

        // Properties

        /**
         * The client certificate to use if using Mutual TLS.
         * @since 14.0.0
         */
        get certificate_chain(): string;
        set certificate_chain(val: string);
        /**
         * The client certificate to use if using Mutual TLS.
         * @since 14.0.0
         */
        get certificateChain(): string;
        set certificateChain(val: string);
        /**
         * Whether use TLS without validating the server certificate. Use
         * with caution.
         * @since 9.0.0
         */
        get disable_server_verification(): boolean;
        set disable_server_verification(val: boolean);
        /**
         * Whether use TLS without validating the server certificate. Use
         * with caution.
         * @since 9.0.0
         */
        get disableServerVerification(): boolean;
        set disableServerVerification(val: boolean);
        /**
         * Override the host name checked by TLS. Use with caution.
         * @since 14.0.0
         */
        get override_host_name(): string;
        set override_host_name(val: string);
        /**
         * Override the host name checked by TLS. Use with caution.
         * @since 14.0.0
         */
        get overrideHostName(): string;
        set overrideHostName(val: string);
        /**
         * The private key associated with the client certificate for Mutual
         * TLS.
         * @since 14.0.0
         */
        get private_key(): string;
        set private_key(val: string);
        /**
         * The private key associated with the client certificate for Mutual
         * TLS.
         * @since 14.0.0
         */
        get privateKey(): string;
        set privateKey(val: string);
        /**
         * Root certificates to use for validating server certificates.
         * @since 14.0.0
         */
        get tls_root_certificates(): string;
        set tls_root_certificates(val: string);
        /**
         * Root certificates to use for validating server certificates.
         * @since 14.0.0
         */
        get tlsRootCertificates(): string;
        set tlsRootCertificates(val: string);
        /**
         * A soft limit on the number of bytes to write in a single batch
         * when sending Arrow data to a server.
         *
         * Used to help limit server memory consumption. Only enabled if
         * positive. When enabled, `GARROW_ERROR_IO` may be yielded.
         * @since 14.0.0
         */
        get write_size_limit_bytes(): number;
        set write_size_limit_bytes(val: number);
        /**
         * A soft limit on the number of bytes to write in a single batch
         * when sending Arrow data to a server.
         *
         * Used to help limit server memory consumption. Only enabled if
         * positive. When enabled, `GARROW_ERROR_IO` may be yielded.
         * @since 14.0.0
         */
        get writeSizeLimitBytes(): number;
        set writeSizeLimitBytes(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientOptions;

        // Signals

        /** @signal */
        connect<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CommandDescriptor {
        // Signal signatures
        interface SignalSignatures extends Descriptor.SignalSignatures {
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CommandDescriptor extends Descriptor {
        static $gtype: GObject.GType<CommandDescriptor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CommandDescriptor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CommandDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](command: string): CommandDescriptor;

        // Signals

        /** @signal */
        connect<K extends keyof CommandDescriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommandDescriptor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CommandDescriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CommandDescriptor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CommandDescriptor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CommandDescriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The opaque value used to express a command.   It should be freed with `g_free()` when no longer needed.
         */
        get_command(): string;
    }

    namespace Criteria {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::expression': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expression: GLib.Bytes;
        }
    }

    /**
     * @gir-type Class
     */
    class Criteria extends GObject.Object {
        static $gtype: GObject.GType<Criteria>;

        // Properties

        /**
         * Opaque criteria expression, dependent on server implementation.
         * @since 5.0.0
         */
        get expression(): GLib.Bytes;
        set expression(val: GLib.Bytes);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Criteria.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Criteria.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expression: GLib.Bytes | Uint8Array): Criteria;

        // Signals

        /** @signal */
        connect<K extends keyof Criteria.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Criteria.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Criteria.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Criteria.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Criteria.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Criteria.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DataStream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::stream': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stream: any;
        }
    }

    /**
     * @gir-type Class
     */
    class DataStream extends GObject.Object {
        static $gtype: GObject.GType<DataStream>;

        // Properties

        /**
         * @construct-only
         */
        set stream(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DataStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Descriptor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            descriptor: any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Descriptor extends GObject.Object {
        static $gtype: GObject.GType<Descriptor>;

        // Properties

        /**
         * @construct-only
         */
        set descriptor(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Descriptor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Descriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Descriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Descriptor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Descriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Descriptor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Descriptor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Descriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_descriptor A {@link ArrowFlight.Descriptor} to be compared.
         * @returns `true` if both of them represents the same descriptor,   `false` otherwise.
         */
        equal(other_descriptor: Descriptor): boolean;
        /**
         * @returns A descriptor as a string.   It should be freed with `g_free()` when no longer needed.
         */
        to_string(): string;
    }

    namespace DoPutResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::reader': (pspec: GObject.ParamSpec) => void;
            'notify::result': (pspec: GObject.ParamSpec) => void;
            'notify::writer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: MetadataReader;
            result: any;
            writer: StreamWriter;
        }
    }

    /**
     * @gir-type Class
     */
    class DoPutResult extends GObject.Object {
        static $gtype: GObject.GType<DoPutResult>;

        // Properties

        /**
         * A reader for application metadata from the server.
         * @since 18.0.0
         * @read-only
         */
        get reader(): MetadataReader;
        /**
         * @construct-only
         */
        set result(val: any);
        /**
         * A writer to write record batches to.
         * @since 18.0.0
         * @read-only
         */
        get writer(): StreamWriter;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DoPutResult.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DoPutResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DoPutResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DoPutResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DoPutResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DoPutResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DoPutResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DoPutResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Endpoint {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::ticket': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ticket: Ticket;
        }
    }

    /**
     * @gir-type Class
     */
    class Endpoint extends GObject.Object {
        static $gtype: GObject.GType<Endpoint>;

        // Properties

        /**
         * Opaque ticket identify; use with DoGet RPC.
         * @since 5.0.0
         * @read-only
         */
        get ticket(): Ticket;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Endpoint.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ticket: Ticket, locations: Location[]): Endpoint;

        // Signals

        /** @signal */
        connect<K extends keyof Endpoint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Endpoint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Endpoint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Endpoint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Endpoint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Endpoint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_endpoint A {@link ArrowFlight.Endpoint} to be compared.
         * @returns `true` if both of them represents the same endpoint,   `false` otherwise.
         */
        equal(other_endpoint: Endpoint): boolean;
        /**
         * @returns The locations in this endpoint.   It must be freed with `g_list_free()` and `g_object_unref()` when no   longer needed. You can use `g_list_free_full(locations,   g_object_unref)`.
         */
        get_locations(): Location[] | null;
    }

    namespace Info {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::info': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            info: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;

        // Properties

        /**
         * @construct-only
         */
        set info(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Info.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            descriptor: Descriptor,
            endpoints: Endpoint[],
            total_records: number,
            total_bytes: number,
        ): Info;

        // Signals

        /** @signal */
        connect<K extends keyof Info.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Info.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Info.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Info.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Info.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Info.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_info A {@link ArrowFlight.Info} to be compared.
         * @returns `true` if both of them represents the same information,   `false` otherwise.
         */
        equal(other_info: Info): boolean;
        /**
         * @returns The {@link ArrowFlight.Descriptor} of the information.
         */
        get_descriptor(): Descriptor;
        /**
         * @returns The list of {@link ArrowFlight.Endpoint} of the information.
         */
        get_endpoints(): Endpoint[];
        /**
         * @param options A {@link Arrow.ReadOptions}.
         * @returns Deserialized {@link Arrow.Schema}, `null` on error.
         */
        get_schema(options?: Arrow.ReadOptions | null): Arrow.Schema;
        /**
         * @returns The number of total bytes of the information.
         */
        get_total_bytes(): number;
        /**
         * @returns The number of total records of the information.
         */
        get_total_records(): number;
    }

    namespace Location {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Location extends GObject.Object {
        static $gtype: GObject.GType<Location>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Location.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Location;

        // Signals

        /** @signal */
        connect<K extends keyof Location.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Location.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Location.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Location.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Location.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Location.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_location A {@link ArrowFlight.Location} to be compared.
         * @returns `true` if both of them represents the same URI, `false` otherwise.
         */
        equal(other_location: Location): boolean;
        /**
         * @returns The scheme of this URI.   It should be freed with `g_free()` when no longer needed.
         */
        get_scheme(): string;
        /**
         * @returns A representation of this URI as a string.   It should be freed with `g_free()` when no longer needed.
         */
        to_string(): string;
    }

    namespace MessageReader {
        // Signal signatures
        interface SignalSignatures extends RecordBatchReader.SignalSignatures {
            'notify::is-owner': (pspec: GObject.ParamSpec) => void;
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MessageReader extends RecordBatchReader {
        static $gtype: GObject.GType<MessageReader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MessageReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageReader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MessageReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageReader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MessageReader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageReader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The descriptor for this upload.
         */
        get_descriptor(): Descriptor;
    }

    namespace MetadataReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: any;
        }
    }

    /**
     * @gir-type Class
     */
    class MetadataReader extends GObject.Object {
        static $gtype: GObject.GType<MetadataReader>;

        // Properties

        /**
         * @construct-only
         */
        set reader(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetadataReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MetadataReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MetadataReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataReader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MetadataReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataReader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MetadataReader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetadataReader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The metadata on success, `null` on error.
         */
        read(): Arrow.Buffer;
    }

    namespace MetadataWriter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::writer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            writer: any;
        }
    }

    /**
     * @gir-type Class
     */
    class MetadataWriter extends GObject.Object {
        static $gtype: GObject.GType<MetadataWriter>;

        // Properties

        /**
         * @construct-only
         */
        set writer(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetadataWriter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MetadataWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MetadataWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataWriter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MetadataWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataWriter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MetadataWriter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetadataWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Writes metadata to the client.
         * @param metadata A {@link Arrow.Buffer} to be sent.
         * @returns `true` on success, `false` on error.
         */
        write(metadata: Arrow.Buffer): boolean;
    }

    namespace PathDescriptor {
        // Signal signatures
        interface SignalSignatures extends Descriptor.SignalSignatures {
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PathDescriptor extends Descriptor {
        static $gtype: GObject.GType<PathDescriptor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PathDescriptor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PathDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](paths: string[]): PathDescriptor;

        // Signals

        /** @signal */
        connect<K extends keyof PathDescriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PathDescriptor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PathDescriptor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PathDescriptor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PathDescriptor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PathDescriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The paths in this descriptor.   It must be freed with `g_strfreev()` when no longer needed.
         */
        get_paths(): string[] | null;
    }

    namespace RecordBatchReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::is-owner': (pspec: GObject.ParamSpec) => void;
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_owner: boolean;
            isOwner: boolean;
            reader: any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;

        // Properties

        /**
         * @construct-only
         */
        set is_owner(val: boolean);
        /**
         * @construct-only
         */
        set isOwner(val: boolean);
        /**
         * @construct-only
         */
        set reader(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecordBatchReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBatchReader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBatchReader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecordBatchReader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The all data on success, `null` on error.
         */
        read_all(): Arrow.Table;
        /**
         * @returns The next chunk on success, `null` on end   of stream, `null` on error.
         */
        read_next(): StreamChunk;
    }

    namespace RecordBatchStream {
        // Signal signatures
        interface SignalSignatures extends DataStream.SignalSignatures {
            'notify::reader': (pspec: GObject.ParamSpec) => void;
            'notify::stream': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DataStream.ConstructorProps {
            reader: Arrow.RecordBatchReader;
        }
    }

    /**
     * @gir-type Class
     */
    class RecordBatchStream extends DataStream {
        static $gtype: GObject.GType<RecordBatchStream>;

        // Properties

        /**
         * The reader that produces record batches.
         * @since 6.0.0
         * @construct-only
         */
        get reader(): Arrow.RecordBatchReader;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecordBatchStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecordBatchStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reader: Arrow.RecordBatchReader, options?: Arrow.WriteOptions | null): RecordBatchStream;

        // Signals

        /** @signal */
        connect<K extends keyof RecordBatchStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBatchStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RecordBatchStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBatchStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RecordBatchStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecordBatchStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RecordBatchWriter {
        // Signal signatures
        interface SignalSignatures extends Arrow.RecordBatchWriter.SignalSignatures {
            'notify::record-batch-writer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Arrow.RecordBatchWriter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class RecordBatchWriter extends Arrow.RecordBatchWriter {
        static $gtype: GObject.GType<RecordBatchWriter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecordBatchWriter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecordBatchWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RecordBatchWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBatchWriter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RecordBatchWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBatchWriter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RecordBatchWriter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecordBatchWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Begins writing data with the given schema. Only used with
         * `DoExchange`.
         * @param schema A {@link Arrow.Schema}.
         * @param options A {@link Arrow.WriteOptions}.
         * @returns `true` on success, `false` on error.
         */
        begin(schema: Arrow.Schema, options?: Arrow.WriteOptions | null): boolean;
        /**
         * Write metadata.
         * @param metadata A {@link Arrow.Buffer}.
         * @returns `true` on success, `false` on error.
         */
        write_metadata(metadata: Arrow.Buffer): boolean;
        /**
         * Write a record batch with metadata.
         * @param record_batch A {@link Arrow.RecordBatch}.
         * @param metadata A {@link Arrow.Buffer}.
         * @returns `true` on success, `false` on error.
         */
        write_record_batch(record_batch: Arrow.RecordBatch, metadata?: Arrow.Buffer | null): boolean;
        /**
         * @param args
         */
        // Conflicted with Arrow.RecordBatchWriter.write_record_batch
        write_record_batch(...args: never[]): any;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Servable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class Server extends GObject.Object implements Servable {
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

        // Virtual methods

        /**
         * A virtual function to implement `DoGet` API.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param ticket A {@link ArrowFlight.Ticket}.
         * @virtual
         */
        vfunc_do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        /**
         * Processes a stream of IPC payloads sent from a client.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param reader A {@link ArrowFlight.MessageReader}.
         * @param writer A {@link ArrowFlight.MetadataWriter}.
         * @virtual
         */
        vfunc_do_put(context: ServerCallContext, reader: MessageReader, writer: MetadataWriter): boolean;
        /**
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param request A {@link ArrowFlight.Descriptor}.
         * @virtual
         */
        vfunc_get_flight_info(context: ServerCallContext, request: Descriptor): Info;
        /**
         * A virtual function to implement `ListFlights` API.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param criteria A {@link ArrowFlight.Criteria}.
         * @virtual
         */
        vfunc_list_flights(context: ServerCallContext, criteria?: Criteria | null): Info[];

        // Methods

        /**
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param ticket A {@link ArrowFlight.Ticket}.
         * @returns {@link ArrowFlight.DataStream} on success, `null` on error.
         */
        do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        /**
         * Processes a stream of IPC payloads sent from a client.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param reader A {@link ArrowFlight.MessageReader}.
         * @param writer A {@link ArrowFlight.MetadataWriter}.
         * @returns `true` on success, `false` on error.
         */
        do_put(context: ServerCallContext, reader: MessageReader, writer: MetadataWriter): boolean;
        /**
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param request A {@link ArrowFlight.Descriptor}.
         * @returns A {@link ArrowFlight.Info} on success, `null` on error.
         */
        get_flight_info(context: ServerCallContext, request: Descriptor): Info;
        get_port(): number;
        /**
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param criteria A {@link ArrowFlight.Criteria}.
         * @returns {@link GLib.List} of {@link ArrowFlight.Info} on success, `null` on error.
         */
        list_flights(context: ServerCallContext, criteria?: Criteria | null): Info[];
        /**
         * @param options A {@link ArrowFlight.ServerOptions}.
         * @returns `true` on success, `false` on error.
         */
        listen(options: ServerOptions): boolean;
        /**
         * Shuts down the serve. This function can be called from signal
         * handler or another thread.
         * @returns `true` on success, `false` on error.
         */
        shutdown(): boolean;
        wait(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ServerAuthHandler {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handler': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handler: any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class ServerAuthHandler extends GObject.Object {
        static $gtype: GObject.GType<ServerAuthHandler>;

        // Properties

        /**
         * @construct-only
         */
        set handler(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerAuthHandler.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerAuthHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ServerAuthHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerAuthHandler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerAuthHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerAuthHandler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerAuthHandler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerAuthHandler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ServerAuthReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: any;
        }
    }

    /**
     * @gir-type Class
     */
    class ServerAuthReader extends GObject.Object {
        static $gtype: GObject.GType<ServerAuthReader>;

        // Properties

        /**
         * @construct-only
         */
        set reader(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerAuthReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerAuthReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ServerAuthReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerAuthReader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerAuthReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerAuthReader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerAuthReader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerAuthReader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Reads a message from the client.
         * @returns Read data as {@link GLib.Bytes} on   success, `null` on error.
         */
        read(): GLib.Bytes | null;
    }

    namespace ServerAuthSender {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::sender': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            sender: any;
        }
    }

    /**
     * @gir-type Class
     */
    class ServerAuthSender extends GObject.Object {
        static $gtype: GObject.GType<ServerAuthSender>;

        // Properties

        /**
         * @construct-only
         */
        set sender(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerAuthSender.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerAuthSender.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ServerAuthSender.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerAuthSender.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerAuthSender.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerAuthSender.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerAuthSender.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerAuthSender.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Writes a message to the client.
         * @param message A {@link GLib.Bytes} to be sent.
         * @returns `true` on success, `false` on error.
         */
        write(message: GLib.Bytes | Uint8Array): boolean;
    }

    namespace ServerCallContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::call-context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            call_context: any;
            callContext: any;
        }
    }

    /**
     * @gir-type Class
     */
    class ServerCallContext extends GObject.Object {
        static $gtype: GObject.GType<ServerCallContext>;

        // Properties

        /**
         * @construct-only
         */
        set call_context(val: any);
        /**
         * @construct-only
         */
        set callContext(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerCallContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerCallContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ServerCallContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerCallContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerCallContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerCallContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerCallContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerCallContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Iterates over all incoming headers.
         * @param func The user's callback function.
         */
        foreach_incoming_header(func: HeaderFunc): void;
    }

    namespace ServerCustomAuthHandler {
        // Signal signatures
        interface SignalSignatures extends ServerAuthHandler.SignalSignatures {
            'notify::handler': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ServerAuthHandler.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ServerCustomAuthHandler extends ServerAuthHandler {
        static $gtype: GObject.GType<ServerCustomAuthHandler>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerCustomAuthHandler.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerCustomAuthHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ServerCustomAuthHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerCustomAuthHandler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerCustomAuthHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerCustomAuthHandler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerCustomAuthHandler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerCustomAuthHandler.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Authenticates the client on initial connection. The server can send
         * and read responses from the client at any time.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param sender A {@link ArrowFlight.ServerAuthSender}.
         * @param reader A {@link ArrowFlight.ServerAuthReader}.
         * @virtual
         */
        vfunc_authenticate(context: ServerCallContext, sender: ServerAuthSender, reader: ServerAuthReader): void;
        /**
         * Validates a per-call client token.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param token The client token. May be the empty string if the client does not   provide a token.
         * @virtual
         */
        vfunc_is_valid(context: ServerCallContext, token: GLib.Bytes | Uint8Array): GLib.Bytes | null;

        // Methods

        /**
         * Authenticates the client on initial connection. The server can send
         * and read responses from the client at any time.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param sender A {@link ArrowFlight.ServerAuthSender}.
         * @param reader A {@link ArrowFlight.ServerAuthReader}.
         */
        authenticate(context: ServerCallContext, sender: ServerAuthSender, reader: ServerAuthReader): void;
        /**
         * Validates a per-call client token.
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param token The client token. May be the empty string if the client does not   provide a token.
         * @returns The identity of the peer, if   this authentication method supports it.
         */
        is_valid(context: ServerCallContext, token: GLib.Bytes | Uint8Array): GLib.Bytes | null;
    }

    namespace ServerOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::auth-handler': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auth_handler: ServerAuthHandler;
            authHandler: ServerAuthHandler;
            location: Location;
        }
    }

    /**
     * @gir-type Class
     */
    class ServerOptions extends GObject.Object {
        static $gtype: GObject.GType<ServerOptions>;

        // Properties

        /**
         * The authentication handler.
         * @since 12.0.0
         */
        get auth_handler(): ServerAuthHandler;
        set auth_handler(val: ServerAuthHandler);
        /**
         * The authentication handler.
         * @since 12.0.0
         */
        get authHandler(): ServerAuthHandler;
        set authHandler(val: ServerAuthHandler);
        /**
         * The location to be listened.
         * @since 5.0.0
         * @construct-only
         */
        get location(): Location;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location): ServerOptions;

        // Signals

        /** @signal */
        connect<K extends keyof ServerOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamChunk {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::chunk': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunk: any;
        }
    }

    /**
     * @gir-type Class
     */
    class StreamChunk extends GObject.Object {
        static $gtype: GObject.GType<StreamChunk>;

        // Properties

        /**
         * @construct-only
         */
        set chunk(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamChunk.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StreamChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StreamChunk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamChunk.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamChunk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamChunk.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamChunk.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamChunk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The data of the chunk.
         */
        get_data(): Arrow.RecordBatch;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * @returns The metadata of the chunk.   The metadata may be NULL.
         */
        get_metadata(): Arrow.Buffer | null;
    }

    namespace StreamReader {
        // Signal signatures
        interface SignalSignatures extends RecordBatchReader.SignalSignatures {
            'notify::is-owner': (pspec: GObject.ParamSpec) => void;
            'notify::reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StreamReader extends RecordBatchReader {
        static $gtype: GObject.GType<StreamReader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StreamReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamReader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamReader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamReader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamReader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamWriter {
        // Signal signatures
        interface SignalSignatures extends RecordBatchWriter.SignalSignatures {
            'notify::record-batch-writer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchWriter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StreamWriter extends RecordBatchWriter {
        static $gtype: GObject.GType<StreamWriter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamWriter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StreamWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StreamWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamWriter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamWriter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamWriter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` on success, `false` on error.
         */
        done_writing(): boolean;
    }

    namespace Ticket {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes;
        }
    }

    /**
     * @gir-type Class
     */
    class Ticket extends GObject.Object {
        static $gtype: GObject.GType<Ticket>;

        // Properties

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         * @since 5.0.0
         */
        get data(): GLib.Bytes;
        set data(val: GLib.Bytes);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Ticket.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Ticket.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: GLib.Bytes | Uint8Array): Ticket;

        // Signals

        /** @signal */
        connect<K extends keyof Ticket.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Ticket.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Ticket.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Ticket.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Ticket.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Ticket.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_ticket A {@link ArrowFlight.Ticket} to be compared.
         * @returns `true` if both of them represents the same ticket, `false` otherwise.
         */
        equal(other_ticket: Ticket): boolean;
    }

    /**
     * @gir-type Alias
     */
    type CallOptionsClass = typeof CallOptions;
    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Alias
     */
    type ClientOptionsClass = typeof ClientOptions;
    /**
     * @gir-type Alias
     */
    type CommandDescriptorClass = typeof CommandDescriptor;
    /**
     * @gir-type Alias
     */
    type CriteriaClass = typeof Criteria;
    /**
     * @gir-type Alias
     */
    type DataStreamClass = typeof DataStream;
    /**
     * @gir-type Alias
     */
    type DescriptorClass = typeof Descriptor;
    /**
     * @gir-type Alias
     */
    type DoPutResultClass = typeof DoPutResult;
    /**
     * @gir-type Alias
     */
    type EndpointClass = typeof Endpoint;
    /**
     * @gir-type Alias
     */
    type InfoClass = typeof Info;
    /**
     * @gir-type Alias
     */
    type LocationClass = typeof Location;
    /**
     * @gir-type Alias
     */
    type MessageReaderClass = typeof MessageReader;
    /**
     * @gir-type Alias
     */
    type MetadataReaderClass = typeof MetadataReader;
    /**
     * @gir-type Alias
     */
    type MetadataWriterClass = typeof MetadataWriter;
    /**
     * @gir-type Alias
     */
    type PathDescriptorClass = typeof PathDescriptor;
    /**
     * @gir-type Alias
     */
    type RecordBatchReaderClass = typeof RecordBatchReader;
    /**
     * @gir-type Alias
     */
    type RecordBatchStreamClass = typeof RecordBatchStream;
    /**
     * @gir-type Alias
     */
    type RecordBatchWriterClass = typeof RecordBatchWriter;
    /**
     * @gir-type Alias
     */
    type ServableInterface = typeof Servable;
    /**
     * @gir-type Alias
     */
    type ServerAuthHandlerClass = typeof ServerAuthHandler;
    /**
     * @gir-type Alias
     */
    type ServerAuthReaderClass = typeof ServerAuthReader;
    /**
     * @gir-type Alias
     */
    type ServerAuthSenderClass = typeof ServerAuthSender;
    /**
     * @gir-type Alias
     */
    type ServerCallContextClass = typeof ServerCallContext;
    /**
     * @gir-type Alias
     */
    type ServerClass = typeof Server;
    /**
     * @gir-type Alias
     */
    type ServerCustomAuthHandlerClass = typeof ServerCustomAuthHandler;
    /**
     * @gir-type Alias
     */
    type ServerOptionsClass = typeof ServerOptions;
    /**
     * @gir-type Alias
     */
    type StreamChunkClass = typeof StreamChunk;
    /**
     * @gir-type Alias
     */
    type StreamReaderClass = typeof StreamReader;
    /**
     * @gir-type Alias
     */
    type StreamWriterClass = typeof StreamWriter;
    /**
     * @gir-type Alias
     */
    type TicketClass = typeof Ticket;
    namespace Servable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServableNamespace {
        $gtype: GObject.GType<Servable>;
        prototype: Servable;
    }
    /**
     * @gir-type Interface
     */
    interface Servable extends GObject.Object {}

    export const Servable: ServableNamespace & {
        new (): Servable; // This allows `obj instanceof Servable`
    };

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

export default ArrowFlight;

// END
