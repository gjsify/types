// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Plasma-1.0
 */

import type * as Gjs from './Gjs';
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

class Client extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Plasma-1.0.Plasma.Client

    constructor(config?: Client_ConstructProps) 
    constructor(store_socket_name: string, options: ClientOptions | null) 
    static new(store_socket_name: string, options: ClientOptions | null): Client
    _init(config?: Client_ConstructProps): void
}

interface ClientCreateOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Plasma-1.0.Plasma.ClientCreateOptions

    gpu_device?: number | null
}

interface ClientCreateOptions {

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

    n_retries?: number | null
}

interface ClientOptions {

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

    parent_instance: Object

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
    gpu_device?: number | null
    id?: ObjectID | null
    metadata?: Arrow.Buffer | null
    raw_data?: object | null
    raw_metadata?: object | null
}

interface Object {

    // Own properties of Plasma-1.0.Plasma.Object

    readonly client: Client
    readonly data: Arrow.Buffer
    readonly gpu_device: number
    readonly id: ObjectID
    readonly metadata: Arrow.Buffer
    readonly raw_data: object
    readonly raw_metadata: object

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

    parent_instance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ObjectID

    to_binary(): Uint8Array
    to_hex(): string

    // Class property signals of Plasma-1.0.Plasma.ObjectID

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: Object

    // Owm methods of Plasma-1.0.Plasma.ReferredObject

    /**
     * Releases the object explicitly. The object is no longer valid.
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

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of Plasma-1.0.Plasma.ClientClass

    static name: string
}

interface ClientCreateOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ClientCreateOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptionsClass

    static name: string
}

interface ClientOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ClientOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientOptionsClass

    static name: string
}

interface CreatedObjectClass {

    // Own fields of Plasma-1.0.Plasma.CreatedObjectClass

    parent_class: ObjectClass
}

abstract class CreatedObjectClass {

    // Own properties of Plasma-1.0.Plasma.CreatedObjectClass

    static name: string
}

interface ObjectClass {

    // Own fields of Plasma-1.0.Plasma.ObjectClass

    parent_class: GObject.ObjectClass
}

abstract class ObjectClass {

    // Own properties of Plasma-1.0.Plasma.ObjectClass

    static name: string
}

interface ObjectIDClass {

    // Own fields of Plasma-1.0.Plasma.ObjectIDClass

    parent_class: GObject.ObjectClass
}

abstract class ObjectIDClass {

    // Own properties of Plasma-1.0.Plasma.ObjectIDClass

    static name: string
}

interface ReferredObjectClass {

    // Own fields of Plasma-1.0.Plasma.ReferredObjectClass

    parent_class: ObjectClass
}

abstract class ReferredObjectClass {

    // Own properties of Plasma-1.0.Plasma.ReferredObjectClass

    static name: string
}

}
export default Plasma;