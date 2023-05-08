
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Plasma-1.0
 */

import type ArrowCUDA from '@girs/arrowcuda-1.0';
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.Client

        client?: any | null
    }

}

export interface Client {

    // Own properties of Plasma-1.0.Plasma.Client

    readonly client: any

    // Own fields of Plasma-1.0.Plasma.Client

    parent_instance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.Client

    create(id: ObjectID, data_size: number, options: ClientCreateOptions | null): CreatedObject | null
    disconnect(): boolean
    refer_object(id: ObjectID, timeout_ms: number): ReferredObject | null

    // Class property signals of Plasma-1.0.Plasma.Client

    connect(sigName: "notify::client", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Client extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Plasma-1.0.Plasma.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(store_socket_name: string | null, options: ClientOptions | null) 
    static new(store_socket_name: string | null, options: ClientOptions | null): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ClientCreateOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.ClientCreateOptions

        gpu_device?: number | null
    }

}

export interface ClientCreateOptions {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    gpu_device: number

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptions

    parent_instance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientCreateOptions

    get_metadata(): Uint8Array | null
    set_metadata(metadata: Uint8Array | null): void

    // Class property signals of Plasma-1.0.Plasma.ClientCreateOptions

    connect(sigName: "notify::gpu-device", callback: (($obj: ClientCreateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gpu-device", callback: (($obj: ClientCreateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ClientCreateOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    static name: string
    static $gtype: GObject.GType<ClientCreateOptions>

    // Constructors of Plasma-1.0.Plasma.ClientCreateOptions

    constructor(config?: ClientCreateOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientCreateOptions
    _init(config?: ClientCreateOptions.ConstructorProperties): void
}

export module ClientOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.ClientOptions

        n_retries?: number | null
    }

}

export interface ClientOptions {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    n_retries: number

    // Own fields of Plasma-1.0.Plasma.ClientOptions

    parent_instance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientOptions

    get_n_retries(): number
    set_n_retries(n_retries: number): void

    // Class property signals of Plasma-1.0.Plasma.ClientOptions

    connect(sigName: "notify::n-retries", callback: (($obj: ClientOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-retries", callback: (($obj: ClientOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-retries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ClientOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    static name: string
    static $gtype: GObject.GType<ClientOptions>

    // Constructors of Plasma-1.0.Plasma.ClientOptions

    constructor(config?: ClientOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions.ConstructorProperties): void
}

export module CreatedObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface CreatedObject {

    // Own fields of Plasma-1.0.Plasma.CreatedObject

    parent_instance: Object & GObject.Object

    // Owm methods of Plasma-1.0.Plasma.CreatedObject

    /**
     * Aborts the object in the object store. You can't use the aborted
     * object anymore.
     * @returns %TRUE on success, %FALSE on error.
     */
    abort(): boolean
    /**
     * Seals the object in the object store. You can't use the sealed
     * object anymore.
     * @returns %TRUE on success, %FALSE on error.
     */
    seal(): boolean

    // Class property signals of Plasma-1.0.Plasma.CreatedObject

    connect(sigName: "notify::client", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gpu-device", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-data", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-metadata", callback: (($obj: CreatedObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CreatedObject extends Object {

    // Own properties of Plasma-1.0.Plasma.CreatedObject

    static name: string
    static $gtype: GObject.GType<CreatedObject>

    // Constructors of Plasma-1.0.Plasma.CreatedObject

    constructor(config?: CreatedObject.ConstructorProperties) 
    _init(config?: CreatedObject.ConstructorProperties): void
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.Object

        client?: Client | null
        data?: Arrow.Buffer | null
        gpu_device?: number | null
        id?: ObjectID | null
        metadata?: Arrow.Buffer | null
        raw_data?: any | null
        raw_metadata?: any | null
    }

}

export interface Object {

    // Own properties of Plasma-1.0.Plasma.Object

    readonly client: Client
    readonly data: Arrow.Buffer
    readonly gpu_device: number
    readonly id: ObjectID
    readonly metadata: Arrow.Buffer
    readonly raw_data: any
    readonly raw_metadata: any

    // Own fields of Plasma-1.0.Plasma.Object

    parent_instance: GObject.Object

    // Class property signals of Plasma-1.0.Plasma.Object

    connect(sigName: "notify::client", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gpu-device", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-data", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-metadata", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Object extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Plasma-1.0.Plasma.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module ObjectID {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ObjectID {

    // Own fields of Plasma-1.0.Plasma.ObjectID

    parent_instance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ObjectID

    to_binary(): Uint8Array
    to_hex(): string | null

    // Class property signals of Plasma-1.0.Plasma.ObjectID

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ObjectID extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ObjectID

    static name: string
    static $gtype: GObject.GType<ObjectID>

    // Constructors of Plasma-1.0.Plasma.ObjectID

    constructor(config?: ObjectID.ConstructorProperties) 
    constructor(id: Uint8Array) 
    static new(id: Uint8Array): ObjectID
    _init(config?: ObjectID.ConstructorProperties): void
}

export module ReferredObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface ReferredObject {

    // Own fields of Plasma-1.0.Plasma.ReferredObject

    parent_instance: Object & GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ReferredObject

    /**
     * Releases the object explicitly. The object is no longer valid.
     * @returns %TRUE on success, %FALSE on error.
     */
    release(): boolean

    // Class property signals of Plasma-1.0.Plasma.ReferredObject

    connect(sigName: "notify::client", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gpu-device", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-data", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-metadata", callback: (($obj: ReferredObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ReferredObject extends Object {

    // Own properties of Plasma-1.0.Plasma.ReferredObject

    static name: string
    static $gtype: GObject.GType<ReferredObject>

    // Constructors of Plasma-1.0.Plasma.ReferredObject

    constructor(config?: ReferredObject.ConstructorProperties) 
    _init(config?: ReferredObject.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of Plasma-1.0.Plasma.ClientClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of Plasma-1.0.Plasma.ClientClass

    static name: string
}

export interface ClientCreateOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptionsClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientCreateOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptionsClass

    static name: string
}

export interface ClientOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientOptionsClass

    parent_class: GObject.ObjectClass
}

export abstract class ClientOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientOptionsClass

    static name: string
}

export interface CreatedObjectClass {

    // Own fields of Plasma-1.0.Plasma.CreatedObjectClass

    parent_class: ObjectClass
}

export abstract class CreatedObjectClass {

    // Own properties of Plasma-1.0.Plasma.CreatedObjectClass

    static name: string
}

export interface ObjectClass {

    // Own fields of Plasma-1.0.Plasma.ObjectClass

    parent_class: GObject.ObjectClass
}

export abstract class ObjectClass {

    // Own properties of Plasma-1.0.Plasma.ObjectClass

    static name: string
}

export interface ObjectIDClass {

    // Own fields of Plasma-1.0.Plasma.ObjectIDClass

    parent_class: GObject.ObjectClass
}

export abstract class ObjectIDClass {

    // Own properties of Plasma-1.0.Plasma.ObjectIDClass

    static name: string
}

export interface ReferredObjectClass {

    // Own fields of Plasma-1.0.Plasma.ReferredObjectClass

    parent_class: ObjectClass
}

export abstract class ReferredObjectClass {

    // Own properties of Plasma-1.0.Plasma.ReferredObjectClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END