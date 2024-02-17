
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-plasma-1.0-import.d.ts';
    
/**
 * Plasma-1.0
 */

import type ArrowCUDA from '@girs/node-arrowcuda-1.0';
import type Arrow from '@girs/node-arrow-1.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace Plasma {

module Client {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.Client

        client?: any | null
    }

}

interface Client {

    // Own properties of Plasma-1.0.Plasma.Client

    readonly client: any
    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.Client

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.Client

    create(id: ObjectID, dataSize: number, options: ClientCreateOptions | null): CreatedObject | null
    disconnect(): boolean
    referObject(id: ObjectID, timeoutMs: number): ReferredObject | null

    // Class property signals of Plasma-1.0.Plasma.Client

    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
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
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Client

    static name: string

    // Constructors of Plasma-1.0.Plasma.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(storeSocketName: string, options: ClientOptions | null) 
    static new(storeSocketName: string, options: ClientOptions | null): Client
    _init(config?: Client.ConstructorProperties): void
}

module ClientCreateOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.ClientCreateOptions

        gpu_device?: number | null
    }

}

interface ClientCreateOptions {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    gpuDevice: number
    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptions

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientCreateOptions

    getMetadata(): number[] | null
    setMetadata(metadata: number[] | null): void

    // Class property signals of Plasma-1.0.Plasma.ClientCreateOptions

    connect(sigName: "notify::gpu-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gpu-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gpu-device", ...args: any[]): void
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
    disconnect(id: number): void
}

class ClientCreateOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    static name: string

    // Constructors of Plasma-1.0.Plasma.ClientCreateOptions

    constructor(config?: ClientCreateOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientCreateOptions
    _init(config?: ClientCreateOptions.ConstructorProperties): void
}

module ClientOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.ClientOptions

        n_retries?: number | null
    }

}

interface ClientOptions {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    nRetries: number
    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.ClientOptions

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientOptions

    getNRetries(): number
    setNRetries(nRetries: number): void

    // Class property signals of Plasma-1.0.Plasma.ClientOptions

    connect(sigName: "notify::n-retries", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-retries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-retries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-retries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-retries", ...args: any[]): void
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
    disconnect(id: number): void
}

class ClientOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    static name: string

    // Constructors of Plasma-1.0.Plasma.ClientOptions

    constructor(config?: ClientOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions.ConstructorProperties): void
}

module CreatedObject {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CreatedObject {

    // Own properties of Plasma-1.0.Plasma.CreatedObject

    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.CreatedObject

    parentInstance: any

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

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gpu-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CreatedObject extends Object {

    // Own properties of Plasma-1.0.Plasma.CreatedObject

    static name: string

    // Constructors of Plasma-1.0.Plasma.CreatedObject

    constructor(config?: CreatedObject.ConstructorProperties) 
    _init(config?: CreatedObject.ConstructorProperties): void
}

module Object {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface Object {

    // Own properties of Plasma-1.0.Plasma.Object

    readonly client: Client
    readonly data: Arrow.Buffer
    readonly gpuDevice: number
    readonly id: ObjectID
    readonly metadata: Arrow.Buffer
    readonly rawData: any
    readonly rawMetadata: any
    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.Object

    parentInstance: GObject.Object

    // Class property signals of Plasma-1.0.Plasma.Object

    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gpu-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
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
    disconnect(id: number): void
}

class Object extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Object

    static name: string

    // Constructors of Plasma-1.0.Plasma.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

module ObjectID {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ObjectID {

    // Own properties of Plasma-1.0.Plasma.ObjectID

    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.ObjectID

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ObjectID

    toBinary(): number[]
    toHex(): string | null

    // Class property signals of Plasma-1.0.Plasma.ObjectID

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
    disconnect(id: number): void
}

class ObjectID extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ObjectID

    static name: string

    // Constructors of Plasma-1.0.Plasma.ObjectID

    constructor(config?: ObjectID.ConstructorProperties) 
    constructor(id: number[]) 
    static new(id: number[]): ObjectID
    _init(config?: ObjectID.ConstructorProperties): void
}

module ReferredObject {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface ReferredObject {

    // Own properties of Plasma-1.0.Plasma.ReferredObject

    __gtype__: number

    // Own fields of Plasma-1.0.Plasma.ReferredObject

    parentInstance: any

    // Owm methods of Plasma-1.0.Plasma.ReferredObject

    /**
     * Releases the object explicitly. The object is no longer valid.
     * @returns %TRUE on success, %FALSE on error.
     */
    release(): boolean

    // Class property signals of Plasma-1.0.Plasma.ReferredObject

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::client", callback: (...args: any[]) => void): number
    on(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gpu-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ReferredObject extends Object {

    // Own properties of Plasma-1.0.Plasma.ReferredObject

    static name: string

    // Constructors of Plasma-1.0.Plasma.ReferredObject

    constructor(config?: ReferredObject.ConstructorProperties) 
    _init(config?: ReferredObject.ConstructorProperties): void
}

interface ClientClass {

    // Own fields of Plasma-1.0.Plasma.ClientClass

    parentClass: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of Plasma-1.0.Plasma.ClientClass

    static name: string
}

interface ClientCreateOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class ClientCreateOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptionsClass

    static name: string
}

interface ClientOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class ClientOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientOptionsClass

    static name: string
}

interface CreatedObjectClass {

    // Own fields of Plasma-1.0.Plasma.CreatedObjectClass

    parentClass: ObjectClass
}

abstract class CreatedObjectClass {

    // Own properties of Plasma-1.0.Plasma.CreatedObjectClass

    static name: string
}

interface ObjectClass {

    // Own fields of Plasma-1.0.Plasma.ObjectClass

    parentClass: GObject.ObjectClass
}

abstract class ObjectClass {

    // Own properties of Plasma-1.0.Plasma.ObjectClass

    static name: string
}

interface ObjectIDClass {

    // Own fields of Plasma-1.0.Plasma.ObjectIDClass

    parentClass: GObject.ObjectClass
}

abstract class ObjectIDClass {

    // Own properties of Plasma-1.0.Plasma.ObjectIDClass

    static name: string
}

interface ReferredObjectClass {

    // Own fields of Plasma-1.0.Plasma.ReferredObjectClass

    parentClass: ObjectClass
}

abstract class ReferredObjectClass {

    // Own properties of Plasma-1.0.Plasma.ReferredObjectClass

    static name: string
}

}

export default Plasma;
// END