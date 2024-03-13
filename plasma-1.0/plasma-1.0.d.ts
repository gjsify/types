/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './plasma-1.0-ambient.d.ts';

/**
 * Plasma-1.0
 */

import type ArrowCUDA from '@girs/arrowcuda-1.0';
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Plasma {
    module Client {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: any;
        }
    }

    class Client extends GObject.Object {
        // Own properties of Plasma.Client

        set client(val: any);

        // Constructors of Plasma.Client

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](store_socket_name: string, options?: ClientOptions | null): Client;

        // Own methods of Plasma.Client

        create(id: ObjectID, data_size: number, options?: ClientCreateOptions | null): CreatedObject | null;
        disconnect(): boolean;
        disconnect(...args: never[]): any;
        refer_object(id: ObjectID, timeout_ms: number): ReferredObject | null;
    }

    module ClientCreateOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gpu_device: number;
            gpuDevice: number;
        }
    }

    class ClientCreateOptions extends GObject.Object {
        // Own properties of Plasma.ClientCreateOptions

        get gpu_device(): number;
        set gpu_device(val: number);
        get gpuDevice(): number;
        set gpuDevice(val: number);

        // Constructors of Plasma.ClientCreateOptions

        constructor(properties?: Partial<ClientCreateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientCreateOptions;

        // Own methods of Plasma.ClientCreateOptions

        get_metadata(): Uint8Array | null;
        set_metadata(metadata?: Uint8Array | null): void;
    }

    module ClientOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            n_retries: number;
            nRetries: number;
        }
    }

    class ClientOptions extends GObject.Object {
        // Own properties of Plasma.ClientOptions

        get n_retries(): number;
        set n_retries(val: number);
        get nRetries(): number;
        set nRetries(val: number);

        // Constructors of Plasma.ClientOptions

        constructor(properties?: Partial<ClientOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientOptions;

        // Own methods of Plasma.ClientOptions

        get_n_retries(): number;
        set_n_retries(n_retries: number): void;
    }

    module CreatedObject {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CreatedObject extends Object {
        // Constructors of Plasma.CreatedObject

        constructor(properties?: Partial<CreatedObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Plasma.CreatedObject

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

    module Object {
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
        // Own properties of Plasma.Object

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

        // Constructors of Plasma.Object

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ObjectID {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ObjectID extends GObject.Object {
        // Constructors of Plasma.ObjectID

        constructor(properties?: Partial<ObjectID.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: Uint8Array): ObjectID;

        // Own methods of Plasma.ObjectID

        to_binary(): Uint8Array;
        to_hex(): string;
    }

    module ReferredObject {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class ReferredObject extends Object {
        // Constructors of Plasma.ReferredObject

        constructor(properties?: Partial<ReferredObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Plasma.ReferredObject

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
