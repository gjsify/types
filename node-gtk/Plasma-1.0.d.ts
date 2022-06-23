// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Plasma-1.0
 */

import type ArrowCUDA from './ArrowCUDA-1.0';
import type Arrow from './Arrow-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Plasma {

interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Plasma-1.0.Plasma.Client

    client?: object | null
}

interface Client {

    // Own properties of Plasma-1.0.Plasma.Client

    readonly client: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Client extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Plasma-1.0.Plasma.Client

    constructor(config?: Client_ConstructProps) 
    constructor(storeSocketName: string, options: ClientOptions | null) 
    static new(storeSocketName: string, options: ClientOptions | null): Client
    _init(config?: Client_ConstructProps): void
}

interface ClientCreateOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Plasma-1.0.Plasma.ClientCreateOptions

    gpuDevice?: number | null
}

interface ClientCreateOptions {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    gpuDevice: number

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptions

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientCreateOptions

    getMetadata(): Uint8Array | null
    setMetadata(metadata: Uint8Array | null): void

    // Class property signals of Plasma-1.0.Plasma.ClientCreateOptions

    connect(sigName: "notify::gpu-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gpu-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gpu-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ClientCreateOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    static name: string
    static $gtype: GObject.GType<ClientCreateOptions>

    // Constructors of Plasma-1.0.Plasma.ClientCreateOptions

    constructor(config?: ClientCreateOptions_ConstructProps) 
    constructor() 
    static new(): ClientCreateOptions
    _init(config?: ClientCreateOptions_ConstructProps): void
}

interface ClientOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Plasma-1.0.Plasma.ClientOptions

    nRetries?: number | null
}

interface ClientOptions {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    nRetries: number

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ClientOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    static name: string
    static $gtype: GObject.GType<ClientOptions>

    // Constructors of Plasma-1.0.Plasma.ClientOptions

    constructor(config?: ClientOptions_ConstructProps) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions_ConstructProps): void
}

interface CreatedObject_ConstructProps extends Object_ConstructProps {
}

interface CreatedObject {

    // Own fields of Plasma-1.0.Plasma.CreatedObject

    parentInstance: Object

    // Owm methods of Plasma-1.0.Plasma.CreatedObject

    /**
     * Aborts the object in the object store. You can't use the aborted
     * object anymore.
     */
    abort(): boolean
    /**
     * Seals the object in the object store. You can't use the sealed
     * object anymore.
     */
    seal(): boolean

    // Class property signals of Plasma-1.0.Plasma.CreatedObject

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
}

class CreatedObject extends Object {

    // Own properties of Plasma-1.0.Plasma.CreatedObject

    static name: string
    static $gtype: GObject.GType<CreatedObject>

    // Constructors of Plasma-1.0.Plasma.CreatedObject

    constructor(config?: CreatedObject_ConstructProps) 
    _init(config?: CreatedObject_ConstructProps): void
}

interface Object_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Plasma-1.0.Plasma.Object

    client?: Client | null
    data?: Arrow.Buffer | null
    gpuDevice?: number | null
    id?: ObjectID | null
    metadata?: Arrow.Buffer | null
    rawData?: object | null
    rawMetadata?: object | null
}

interface Object {

    // Own properties of Plasma-1.0.Plasma.Object

    readonly client: Client
    readonly data: Arrow.Buffer
    readonly gpuDevice: number
    readonly id: ObjectID
    readonly metadata: Arrow.Buffer
    readonly rawData: object
    readonly rawMetadata: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Object extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Plasma-1.0.Plasma.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
}

interface ObjectID_ConstructProps extends GObject.Object_ConstructProps {
}

interface ObjectID {

    // Own fields of Plasma-1.0.Plasma.ObjectID

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ObjectID

    toBinary(): Uint8Array
    toHex(): string

    // Class property signals of Plasma-1.0.Plasma.ObjectID

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ObjectID extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ObjectID

    static name: string
    static $gtype: GObject.GType<ObjectID>

    // Constructors of Plasma-1.0.Plasma.ObjectID

    constructor(config?: ObjectID_ConstructProps) 
    constructor(id: Uint8Array) 
    static new(id: Uint8Array): ObjectID
    _init(config?: ObjectID_ConstructProps): void
}

interface ReferredObject_ConstructProps extends Object_ConstructProps {
}

interface ReferredObject {

    // Own fields of Plasma-1.0.Plasma.ReferredObject

    parentInstance: Object

    // Owm methods of Plasma-1.0.Plasma.ReferredObject

    /**
     * Releases the object explicitly. The object is no longer valid.
     */
    release(): boolean

    // Class property signals of Plasma-1.0.Plasma.ReferredObject

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
}

class ReferredObject extends Object {

    // Own properties of Plasma-1.0.Plasma.ReferredObject

    static name: string
    static $gtype: GObject.GType<ReferredObject>

    // Constructors of Plasma-1.0.Plasma.ReferredObject

    constructor(config?: ReferredObject_ConstructProps) 
    _init(config?: ReferredObject_ConstructProps): void
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