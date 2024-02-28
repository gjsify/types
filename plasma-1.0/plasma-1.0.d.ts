/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './plasma-1.0-ambient.d.ts';
import './plasma-1.0-import.d.ts';
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
    }

    class Client extends GObject.Object {
        // Own properties of Plasma-1.0.Client

        client: any;

        // Constructors of Plasma-1.0.Client

        static ['new'](store_socket_name: string, options?: ClientOptions | null): Client;

        // Owm methods of Plasma-1.0.Client

        create(id: ObjectID, data_size: number, options?: ClientCreateOptions | null): CreatedObject | null;
        disconnect(): boolean;
        refer_object(id: ObjectID, timeout_ms: number): ReferredObject | null;
    }

    module ClientCreateOptions {
        // Constructor properties interface
    }

    class ClientCreateOptions extends GObject.Object {
        // Own properties of Plasma-1.0.ClientCreateOptions

        gpu_device: number;
        gpuDevice: number;

        // Constructors of Plasma-1.0.ClientCreateOptions

        static ['new'](): ClientCreateOptions;

        // Owm methods of Plasma-1.0.ClientCreateOptions

        get_metadata(): Uint8Array | null;
        set_metadata(metadata?: Uint8Array | null): void;
    }

    module ClientOptions {
        // Constructor properties interface
    }

    class ClientOptions extends GObject.Object {
        // Own properties of Plasma-1.0.ClientOptions

        n_retries: number;
        nRetries: number;

        // Constructors of Plasma-1.0.ClientOptions

        static ['new'](): ClientOptions;

        // Owm methods of Plasma-1.0.ClientOptions

        get_n_retries(): number;
        set_n_retries(n_retries: number): void;
    }

    module CreatedObject {
        // Constructor properties interface
    }

    class CreatedObject extends Object {
        // Owm methods of Plasma-1.0.CreatedObject

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
    }

    class Object extends GObject.Object {
        // Own properties of Plasma-1.0.Object

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

    module ObjectID {
        // Constructor properties interface
    }

    class ObjectID extends GObject.Object {
        // Constructors of Plasma-1.0.ObjectID

        static ['new'](id: Uint8Array): ObjectID;

        // Owm methods of Plasma-1.0.ObjectID

        to_binary(): Uint8Array;
        to_hex(): string;
    }

    module ReferredObject {
        // Constructor properties interface
    }

    class ReferredObject extends Object {
        // Owm methods of Plasma-1.0.ReferredObject

        /**
         * Releases the object explicitly. The object is no longer valid.
         * @returns %TRUE on success, %FALSE on error.
         */
        release(): boolean;
    }

    class ClientClass {}

    class ClientCreateOptionsClass {}

    class ClientOptionsClass {}

    class CreatedObjectClass {}

    class ObjectClass {}

    class ObjectIDClass {}

    class ReferredObjectClass {}

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
