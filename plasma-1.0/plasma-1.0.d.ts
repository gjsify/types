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
import type ArrowCUDA from '@girs/arrowcuda-1.0';
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Plasma {
    /**
     * Plasma-1.0
     */

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

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

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

        static ['new'](store_socket_name: string, options?: ClientOptions | null): Client;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        create(id: ObjectID, data_size: number, options?: ClientCreateOptions | null): CreatedObject | null;
        disconnect(): boolean;
        // Conflicted with GObject.Object.disconnect
        disconnect(...args: never[]): any;
        refer_object(id: ObjectID, timeout_ms: number): ReferredObject | null;
    }

    namespace ClientCreateOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::gpu-device': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gpu_device: number;
            gpuDevice: number;
        }
    }

    class ClientCreateOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientCreateOptions>;

        // Properties

        get gpu_device(): number;
        set gpu_device(val: number);
        get gpuDevice(): number;
        set gpuDevice(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientCreateOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientCreateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientCreateOptions;

        // Signals

        connect<K extends keyof ClientCreateOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientCreateOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientCreateOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientCreateOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientCreateOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientCreateOptions.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_metadata(): Uint8Array | null;
        set_metadata(metadata?: Uint8Array | null): void;
    }

    namespace ClientOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::n-retries': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            n_retries: number;
            nRetries: number;
        }
    }

    class ClientOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientOptions>;

        // Properties

        get n_retries(): number;
        set n_retries(val: number);
        get nRetries(): number;
        set nRetries(val: number);

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

        connect<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_n_retries(): number;
        set_n_retries(n_retries: number): void;
    }

    namespace CreatedObject {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::gpu-device': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::raw-data': (pspec: GObject.ParamSpec) => void;
            'notify::raw-metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CreatedObject extends Object {
        static $gtype: GObject.GType<CreatedObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CreatedObject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CreatedObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CreatedObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CreatedObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CreatedObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CreatedObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CreatedObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CreatedObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Aborts the object in the object store. You can't use the aborted
         * object anymore.
         * @returns %TRUE on success, %FALSE on error.
         */
        abort(): boolean;
        /**
         * Seals the object in the object store. You can't use the sealed
         * object anymore.
         * @returns %TRUE on success, %FALSE on error.
         */
        seal(): boolean;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::gpu-device': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::raw-data': (pspec: GObject.ParamSpec) => void;
            'notify::raw-metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: Client;
            data: Arrow.Buffer;
            gpu_device: number;
            gpuDevice: number;
            id: ObjectID;
            metadata: Arrow.Buffer;
            raw_data: any;
            rawData: any;
            raw_metadata: any;
            rawMetadata: any;
        }
    }

    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        get client(): Client;
        get data(): Arrow.Buffer;
        get gpu_device(): number;
        get gpuDevice(): number;
        get id(): ObjectID;
        get metadata(): Arrow.Buffer;
        set raw_data(val: any);
        set rawData(val: any);
        set raw_metadata(val: any);
        set rawMetadata(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ObjectID {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ObjectID extends GObject.Object {
        static $gtype: GObject.GType<ObjectID>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectID.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectID.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: Uint8Array | string): ObjectID;

        // Signals

        connect<K extends keyof ObjectID.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectID.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ObjectID.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectID.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ObjectID.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectID.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_binary(): Uint8Array;
        to_hex(): string;
    }

    namespace ReferredObject {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::gpu-device': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::raw-data': (pspec: GObject.ParamSpec) => void;
            'notify::raw-metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class ReferredObject extends Object {
        static $gtype: GObject.GType<ReferredObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ReferredObject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ReferredObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ReferredObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReferredObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ReferredObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ReferredObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ReferredObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ReferredObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Releases the object explicitly. The object is no longer valid.
         * @returns %TRUE on success, %FALSE on error.
         */
        release(): boolean;
    }

    type ClientClass = typeof Client;
    type ClientCreateOptionsClass = typeof ClientCreateOptions;
    type ClientOptionsClass = typeof ClientOptions;
    type CreatedObjectClass = typeof CreatedObject;
    type ObjectClass = typeof Object;
    type ObjectIDClass = typeof ObjectID;
    type ReferredObjectClass = typeof ReferredObject;
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

export default Plasma;

// END
