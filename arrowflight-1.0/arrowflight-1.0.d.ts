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
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace ArrowFlight {
    /**
     * ArrowFlight-1.0
     */

    namespace CallOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CallOptions extends GObject.Object {
        static $gtype: GObject.GType<CallOptions>;

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
         * @param ticket A {@link ArrowFlight.Ticket}.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns The {@link ArrowFlight.StreamReader} to read record batched from the server   on success, `null` on error.
         */
        do_get(ticket: Ticket, options?: CallOptions | null): StreamReader | null;
        /**
         * @param criteria A {@link ArrowFlight.Criteria}.
         * @param options A {@link ArrowFlight.CallOptions}.
         * @returns The returned list of {@link ArrowFlight.Info} on success, `null` on error.
         */
        list_flights(criteria?: Criteria | null, options?: CallOptions | null): Info[] | null;
    }

    namespace ClientOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ClientOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientOptions>;

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
    class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;

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

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class Server extends GObject.Object {
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
         * @param context A {@link ArrowFlight.ServerCallContext}.
         * @param ticket A {@link ArrowFlight.Ticket}.
         * @virtual
         */
        vfunc_do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        /**
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
    }

    namespace ServerOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::location': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
    type ServerCallContextClass = typeof ServerCallContext;
    /**
     * @gir-type Alias
     */
    type ServerClass = typeof Server;
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
    type TicketClass = typeof Ticket;
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
