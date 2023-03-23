
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * ArrowFlight-1.0
 */

import type Arrow from '@girs/node-arrow-1.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace ArrowFlight {

module CallOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CallOptions {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptions

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.CallOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.CallOptions

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
}

class CallOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptions

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.CallOptions

    constructor(config?: CallOptions.ConstructorProperties) 
    constructor() 
    static new(): CallOptions
    _init(config?: CallOptions.ConstructorProperties): void
}

module Client {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Client

        client?: any | null
    }

}

interface Client {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Client

    readonly client: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Client

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Client

    doGet(ticket: Ticket, options: CallOptions | null): StreamReader | null
    listFlights(criteria: Criteria | null, options: CallOptions | null): Info[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Client

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
}

class Client extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Client

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(location: Location, options: ClientOptions | null) 
    static new(location: Location, options: ClientOptions | null): Client
    _init(config?: Client.ConstructorProperties): void
}

module ClientOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ClientOptions {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptions

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ClientOptions

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
}

class ClientOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptions

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.ClientOptions

    constructor(config?: ClientOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions.ConstructorProperties): void
}

module CommandDescriptor {

    // Constructor properties interface

    interface ConstructorProperties extends Descriptor.ConstructorProperties {
    }

}

interface CommandDescriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    parentInstance: any

    // Owm methods of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    getCommand(): string | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::descriptor", callback: (...args: any[]) => void): number
    on(sigName: "notify::descriptor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::descriptor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::descriptor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CommandDescriptor extends Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    constructor(config?: CommandDescriptor.ConstructorProperties) 
    constructor(command: string | null) 
    static new(command: string | null): CommandDescriptor
    _init(config?: CommandDescriptor.ConstructorProperties): void
}

module Criteria {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Criteria

        /**
         * Opaque criteria expression, dependent on server implementation.
         */
        expression?: any | null
    }

}

interface Criteria {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Criteria

    /**
     * Opaque criteria expression, dependent on server implementation.
     */
    expression: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Criteria

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Criteria

    connect(sigName: "notify::expression", callback: (...args: any[]) => void): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expression", ...args: any[]): void
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
}

class Criteria extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Criteria

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Criteria

    constructor(config?: Criteria.ConstructorProperties) 
    constructor(expression: any) 
    static new(expression: any): Criteria
    _init(config?: Criteria.ConstructorProperties): void
}

module DataStream {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.DataStream

        stream?: any | null
    }

}

interface DataStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStream

    readonly stream: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.DataStream

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.DataStream

    connect(sigName: "notify::stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream", ...args: any[]): void
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
}

class DataStream extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStream

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.DataStream

    constructor(config?: DataStream.ConstructorProperties) 
    _init(config?: DataStream.ConstructorProperties): void
}

module Descriptor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Descriptor

        descriptor?: any | null
    }

}

interface Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    readonly descriptor: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Descriptor

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Descriptor

    equal(otherDescriptor: Descriptor): boolean
    toString(): string | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Descriptor

    connect(sigName: "notify::descriptor", callback: (...args: any[]) => void): number
    on(sigName: "notify::descriptor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::descriptor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::descriptor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::descriptor", ...args: any[]): void
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
}

class Descriptor extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Descriptor

    constructor(config?: Descriptor.ConstructorProperties) 
    _init(config?: Descriptor.ConstructorProperties): void
}

module Endpoint {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Endpoint {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Endpoint

    /**
     * Opaque ticket identify; use with DoGet RPC.
     */
    readonly ticket: Ticket
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Endpoint

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Endpoint

    equal(otherEndpoint: Endpoint): boolean
    getLocations(): Location[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Endpoint

    connect(sigName: "notify::ticket", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticket", ...args: any[]): void
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
}

class Endpoint extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Endpoint

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Endpoint

    constructor(config?: Endpoint.ConstructorProperties) 
    constructor(ticket: Ticket, locations: Location[]) 
    static new(ticket: Ticket, locations: Location[]): Endpoint
    _init(config?: Endpoint.ConstructorProperties): void
}

module Info {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Info

        info?: any | null
    }

}

interface Info {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Info

    readonly info: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Info

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Info

    equal(otherInfo: Info): boolean
    getDescriptor(): Descriptor
    getEndpoints(): Endpoint[]
    getSchema(options: Arrow.ReadOptions | null): Arrow.Schema
    getTotalBytes(): number
    getTotalRecords(): number

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Info

    connect(sigName: "notify::info", callback: (...args: any[]) => void): number
    on(sigName: "notify::info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::info", ...args: any[]): void
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
}

class Info extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Info

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Info

    constructor(config?: Info.ConstructorProperties) 
    constructor(schema: Arrow.Schema, descriptor: Descriptor, endpoints: Endpoint[], totalRecords: number, totalBytes: number) 
    static new(schema: Arrow.Schema, descriptor: Descriptor, endpoints: Endpoint[], totalRecords: number, totalBytes: number): Info
    _init(config?: Info.ConstructorProperties): void
}

module Location {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Location {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Location

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Location

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Location

    equal(otherLocation: Location): boolean
    getScheme(): string | null
    toString(): string | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Location

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
}

class Location extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Location

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Location

    constructor(config?: Location.ConstructorProperties) 
    constructor(uri: string | null) 
    static new(uri: string | null): Location
    _init(config?: Location.ConstructorProperties): void
}

module PathDescriptor {

    // Constructor properties interface

    interface ConstructorProperties extends Descriptor.ConstructorProperties {
    }

}

interface PathDescriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    parentInstance: any

    // Owm methods of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    getPaths(): string[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::descriptor", callback: (...args: any[]) => void): number
    on(sigName: "notify::descriptor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::descriptor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::descriptor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PathDescriptor extends Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    constructor(config?: PathDescriptor.ConstructorProperties) 
    constructor(paths: string[]) 
    static new(paths: string[]): PathDescriptor
    _init(config?: PathDescriptor.ConstructorProperties): void
}

module RecordBatchReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

        reader?: any | null
    }

}

interface RecordBatchReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    readonly reader: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    readAll(): Arrow.Table
    readNext(): StreamChunk

    // Class property signals of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    connect(sigName: "notify::reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reader", ...args: any[]): void
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
}

class RecordBatchReader extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    constructor(config?: RecordBatchReader.ConstructorProperties) 
    _init(config?: RecordBatchReader.ConstructorProperties): void
}

module RecordBatchStream {

    // Constructor properties interface

    interface ConstructorProperties extends DataStream.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

        /**
         * The reader that produces record batches.
         */
        reader?: Arrow.RecordBatchReader | null
    }

}

interface RecordBatchStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    /**
     * The reader that produces record batches.
     */
    readonly reader: Arrow.RecordBatchReader
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    parentInstance: any

    // Class property signals of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    connect(sigName: "notify::reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RecordBatchStream extends DataStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    constructor(config?: RecordBatchStream.ConstructorProperties) 
    constructor(reader: Arrow.RecordBatchReader, options: Arrow.WriteOptions | null) 
    static new(reader: Arrow.RecordBatchReader, options: Arrow.WriteOptions | null): RecordBatchStream
    _init(config?: RecordBatchStream.ConstructorProperties): void
}

module Server {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Server {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Server

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Server

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Server

    // Has conflict: doGet(context: ServerCallContext, ticket: Ticket): DataStream
    getPort(): number
    // Has conflict: listFlights(context: ServerCallContext, criteria: Criteria | null): Info[]
    listen(options: ServerOptions): boolean
    /**
     * Shuts down the serve. This function can be called from signal
     * handler or another thread.
     * @returns %TRUE on success, %FALSE on error.
     */
    shutdown(): boolean
    wait(): boolean

    // Own virtual methods of ArrowFlight-1.0.ArrowFlight.Server

    doGet(context: ServerCallContext, ticket: Ticket): DataStream
    listFlights(context: ServerCallContext, criteria: Criteria | null): Info[]

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Server

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
}

class Server extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Server

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Server

    constructor(config?: Server.ConstructorProperties) 
    _init(config?: Server.ConstructorProperties): void
}

module ServerCallContext {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

        callContext?: any | null
    }

}

interface ServerCallContext {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    readonly callContext: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    connect(sigName: "notify::call-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::call-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::call-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::call-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::call-context", ...args: any[]): void
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
}

class ServerCallContext extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    constructor(config?: ServerCallContext.ConstructorProperties) 
    _init(config?: ServerCallContext.ConstructorProperties): void
}

module ServerOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

        location?: Location | null
    }

}

interface ServerOptions {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    readonly location: Location
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ServerOptions

    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
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
}

class ServerOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.ServerOptions

    constructor(config?: ServerOptions.ConstructorProperties) 
    constructor(location: Location) 
    static new(location: Location): ServerOptions
    _init(config?: ServerOptions.ConstructorProperties): void
}

module StreamChunk {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

        chunk?: any | null
    }

}

interface StreamChunk {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    readonly chunk: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamChunk

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.StreamChunk

    getData(): Arrow.RecordBatch

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    getMetadata(): Arrow.Buffer | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.StreamChunk

    connect(sigName: "notify::chunk", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunk", ...args: any[]): void
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
}

class StreamChunk extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.StreamChunk

    constructor(config?: StreamChunk.ConstructorProperties) 
    _init(config?: StreamChunk.ConstructorProperties): void
}

module StreamReader {

    // Constructor properties interface

    interface ConstructorProperties extends RecordBatchReader.ConstructorProperties {
    }

}

interface StreamReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReader

    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamReader

    parentInstance: any

    // Class property signals of ArrowFlight-1.0.ArrowFlight.StreamReader

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StreamReader extends RecordBatchReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReader

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.StreamReader

    constructor(config?: StreamReader.ConstructorProperties) 
    _init(config?: StreamReader.ConstructorProperties): void
}

module Ticket {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Ticket

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         */
        data?: any | null
    }

}

interface Ticket {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Ticket

    /**
     * Opaque identifier or credential to use when requesting a data
     * stream with the DoGet RPC.
     */
    data: any
    __gtype__: number

    // Own fields of ArrowFlight-1.0.ArrowFlight.Ticket

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Ticket

    equal(otherTicket: Ticket): boolean

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Ticket

    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
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
}

class Ticket extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Ticket

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Ticket

    constructor(config?: Ticket.ConstructorProperties) 
    constructor(data: any) 
    static new(data: any): Ticket
    _init(config?: Ticket.ConstructorProperties): void
}

interface CallOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CallOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class CallOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptionsClass

    static name: string
}

interface ClientClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientClass

    parentClass: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientClass

    static name: string
}

interface ClientOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class ClientOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptionsClass

    static name: string
}

interface CommandDescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CommandDescriptorClass

    parentClass: DescriptorClass
}

abstract class CommandDescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptorClass

    static name: string
}

interface CriteriaClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CriteriaClass

    parentClass: GObject.ObjectClass
}

abstract class CriteriaClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CriteriaClass

    static name: string
}

interface DataStreamClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.DataStreamClass

    parentClass: GObject.ObjectClass
}

abstract class DataStreamClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStreamClass

    static name: string
}

interface DescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.DescriptorClass

    parentClass: GObject.ObjectClass
}

abstract class DescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DescriptorClass

    static name: string
}

interface EndpointClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.EndpointClass

    parentClass: GObject.ObjectClass
}

abstract class EndpointClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.EndpointClass

    static name: string
}

interface InfoClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.InfoClass

    parentClass: GObject.ObjectClass
}

abstract class InfoClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.InfoClass

    static name: string
}

interface LocationClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.LocationClass

    parentClass: GObject.ObjectClass
}

abstract class LocationClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.LocationClass

    static name: string
}

interface PathDescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.PathDescriptorClass

    parentClass: DescriptorClass
}

abstract class PathDescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptorClass

    static name: string
}

interface RecordBatchReaderClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchReaderClass

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchReaderClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReaderClass

    static name: string
}

interface RecordBatchStreamClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchStreamClass

    parentClass: DataStreamClass
}

abstract class RecordBatchStreamClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStreamClass

    static name: string
}

interface ServerCallContextClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerCallContextClass

    parentClass: GObject.ObjectClass
}

abstract class ServerCallContextClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContextClass

    static name: string
}

interface ServerClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerClass

    parentClass: GObject.ObjectClass
    listFlights: (server: Server, context: ServerCallContext, criteria: Criteria | null) => Info[]
    doGet: (server: Server, context: ServerCallContext, ticket: Ticket) => DataStream
}

abstract class ServerClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerClass

    static name: string
}

interface ServerOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class ServerOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptionsClass

    static name: string
}

interface StreamChunkClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamChunkClass

    parentClass: GObject.ObjectClass
}

abstract class StreamChunkClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunkClass

    static name: string
}

interface StreamReaderClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamReaderClass

    parentClass: RecordBatchReaderClass
}

abstract class StreamReaderClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReaderClass

    static name: string
}

interface TicketClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.TicketClass

    parentClass: GObject.ObjectClass
}

abstract class TicketClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.TicketClass

    static name: string
}

}

export default ArrowFlight;