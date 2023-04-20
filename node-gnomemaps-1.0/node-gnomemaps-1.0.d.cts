
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GnomeMaps-1.0
 */

import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GeocodeGlib from '@girs/geocodeglib-1.0';
import type Json from '@girs/json-1.0';
import type Champlain from '@girs/champlain-0.12';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export enum ContactStoreState {
    /**
     * Initial state
     */
    INITIAL,
    /**
     * Loading
     */
    LOADING,
    /**
     * Loaded
     */
    LOADED,
}
export function osmFinalize(): void
export function osmInit(): void
export function osmParse(content: string | null, length: number): OSMObject
export interface ContactGeocodeCallback {
    (contact: Contact): void
}
export interface ContactStoreLookupCallback {
    (contact: Contact): void
}
export module Contact {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.Contact

        /**
         * The icon of the contact.
         */
        icon?: Gio.Icon | null
        /**
         * The unique id of the contact.
         */
        id?: string | null
        /**
         * The name of the contact.
         */
        name?: string | null
    }

}

export interface Contact {

    // Own properties of GnomeMaps-1.0.GnomeMaps.Contact

    /**
     * The bounding box for the contact.
     */
    readonly boundingBox: Champlain.BoundingBox
    /**
     * The icon of the contact.
     */
    icon: Gio.Icon
    /**
     * The unique id of the contact.
     */
    id: string | null
    /**
     * The name of the contact.
     */
    name: string | null
    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.Contact

    parentInstance: GObject.Object
    priv: ContactPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.Contact

    addPlace(place: GeocodeGlib.Place): void
    geocode(callback: ContactGeocodeCallback): void
    getPlaces(): GeocodeGlib.Place[]

    // Class property signals of GnomeMaps-1.0.GnomeMaps.Contact

    connect(sigName: "notify::bounding-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::bounding-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bounding-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bounding-box", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

export class Contact extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.Contact

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.Contact

    constructor(config?: Contact.ConstructorProperties) 
    constructor() 
    static new(): Contact
    _init(config?: Contact.ConstructorProperties): void
}

export module ContactStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContactStore {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    /**
     * The type of the contact.
     */
    readonly state: ContactStoreState
    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStore

    parentInstance: GObject.Object
    priv: ContactStorePrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.ContactStore

    getContacts(): Contact[]
    /**
     * Load contacts from available backends.
     */
    load(): void
    lookup(id: string | null, callback: ContactStoreLookupCallback): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.ContactStore

    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
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

export class ContactStore extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.ContactStore

    constructor(config?: ContactStore.ConstructorProperties) 
    constructor() 
    static new(): ContactStore
    _init(config?: ContactStore.ConstructorProperties): void
}

export module FileTileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends Champlain.TileSource.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

        /**
         * The path to the tile source.
         */
        path?: string | null
    }

}

export interface FileTileSource {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    /**
     * The maximum zoom level of the tile source.
     */
    readonly maxZoom: number
    /**
     * The minimum zoom level of the tile source.
     */
    readonly minZoom: number
    /**
     * The path to the tile source.
     */
    path: string | null
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     */
    readonly world: Champlain.BoundingBox
    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSource

    parentInstance: any
    priv: any

    // Owm methods of GnomeMaps-1.0.GnomeMaps.FileTileSource

    prepare(): boolean

    // Class property signals of GnomeMaps-1.0.GnomeMaps.FileTileSource

    connect(sigName: "notify::max-zoom", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom", ...args: any[]): void
    connect(sigName: "notify::min-zoom", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::world", callback: (...args: any[]) => void): number
    on(sigName: "notify::world", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::world", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::world", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (...args: any[]) => void): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MapsFileTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class FileTileSource extends Champlain.TileSource {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.FileTileSource

    constructor(config?: FileTileSource.ConstructorProperties) 
    _init(config?: FileTileSource.ConstructorProperties): void
}

export module OSMChangeset {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

        /**
         * The comment of the changes.
         */
        comment?: string | null
        createdBy?: string | null
    }

}

export interface OSMChangeset {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    /**
     * The comment of the changes.
     */
    comment: string | null
    createdBy: string | null
    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    parentInstance: GObject.Object
    priv: OSMChangesetPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    serialize(): string | null

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    connect(sigName: "notify::comment", callback: (...args: any[]) => void): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::created-by", callback: (...args: any[]) => void): number
    on(sigName: "notify::created-by", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::created-by", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::created-by", ...args: any[]): void
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

export class OSMChangeset extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    constructor(config?: OSMChangeset.ConstructorProperties) 
    constructor(comment: string | null, createdBy: string | null) 
    static new(comment: string | null, createdBy: string | null): OSMChangeset
    _init(config?: OSMChangeset.ConstructorProperties): void
}

export module OSMNode {

    // Constructor properties interface

    export interface ConstructorProperties extends OSMObject.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMNode

        /**
         * The latitude of the node.
         */
        latitude?: number | null
        /**
         * The longitude of the node.
         */
        longitude?: number | null
    }

}

export interface OSMNode {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNode

    /**
     * The latitude of the node.
     */
    latitude: number
    /**
     * The longitude of the node.
     */
    longitude: number
    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMNode

    parentInstance: any
    priv: OSMNodePrivate

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMNode

    connect(sigName: "notify::latitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (...args: any[]) => void): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::changeset", callback: (...args: any[]) => void): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OSMNode extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNode

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMNode

    constructor(config?: OSMNode.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number, longitude: number, latitude: number) 
    static new(id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode
    _init(config?: OSMNode.ConstructorProperties): void
}

export module OSMOAuthProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.OAuthProxyCall.ConstructorProperties {
    }

}

export interface OSMOAuthProxyCall {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    parent: Rest.OAuthProxyCall & Rest.ProxyCall & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OSMOAuthProxyCall extends Rest.OAuthProxyCall {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    constructor(config?: OSMOAuthProxyCall.ConstructorProperties) 
    constructor(proxy: Rest.OAuthProxy, content: string | null) 
    static new(proxy: Rest.OAuthProxy, content: string | null): OSMOAuthProxyCall
    _init(config?: OSMOAuthProxyCall.ConstructorProperties): void
}

export module OSMObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMObject

        /**
         * The OSM changeset for the current upload of the object.
         */
        changeset?: number | null
        /**
         * The OSM id of the object.
         */
        id?: number | null
        /**
         * The latest OSM version of the object.
         */
        version?: number | null
    }

}

export interface OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObject

    /**
     * The OSM changeset for the current upload of the object.
     */
    changeset: number
    /**
     * The OSM id of the object.
     */
    id: number
    /**
     * The latest OSM version of the object.
     */
    version: number
    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMObject

    parentInstance: GObject.Object

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMObject

    deleteTag(key: string | null): void
    getTag(key: string | null): string | null
    serialize(): string | null
    setTag(key: string | null, value: string | null): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMObject

    connect(sigName: "notify::changeset", callback: (...args: any[]) => void): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
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

export class OSMObject extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObject

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMObject

    constructor(config?: OSMObject.ConstructorProperties) 
    _init(config?: OSMObject.ConstructorProperties): void
}

export module OSMRelation {

    // Constructor properties interface

    export interface ConstructorProperties extends OSMObject.ConstructorProperties {
    }

}

export interface OSMRelation {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelation

    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelation

    parentInstance: any
    priv: OSMRelationPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMRelation

    addMember(role: string | null, type: number, ref: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMRelation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::changeset", callback: (...args: any[]) => void): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OSMRelation extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelation

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMRelation

    constructor(config?: OSMRelation.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMRelation
    _init(config?: OSMRelation.ConstructorProperties): void
}

export module OSMWay {

    // Constructor properties interface

    export interface ConstructorProperties extends OSMObject.ConstructorProperties {
    }

}

export interface OSMWay {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWay

    __gtype__: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWay

    parentInstance: any
    priv: OSMWayPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMWay

    addNodeId(id: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMWay

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::changeset", callback: (...args: any[]) => void): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OSMWay extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWay

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMWay

    constructor(config?: OSMWay.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMWay
    _init(config?: OSMWay.ConstructorProperties): void
}

export interface ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactClass

    parentClass: GObject.ObjectClass
}

export abstract class ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactClass

    static name: string
}

export interface ContactPrivate {
}

export class ContactPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactPrivate

    static name: string
}

export interface ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStoreClass

    parentClass: GObject.ObjectClass
}

export abstract class ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStoreClass

    static name: string
}

export interface ContactStorePrivate {
}

export class ContactStorePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStorePrivate

    static name: string
}

export interface FileTileSourceClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass

    parentClass: Champlain.TileSourceClass
}

export abstract class FileTileSourceClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass

    static name: string
}

export interface FileTileSourcePrivate {
}

export class FileTileSourcePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSourcePrivate

    static name: string
}

export interface OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass

    parentClass: GObject.ObjectClass
}

export abstract class OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass

    static name: string
}

export interface OSMChangesetPrivate {
}

export class OSMChangesetPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangesetPrivate

    static name: string
}

export interface OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMNodeClass

    parentClass: OSMObjectClass
}

export abstract class OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNodeClass

    static name: string
}

export interface OSMNodePrivate {
}

export class OSMNodePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNodePrivate

    static name: string
}

export interface OSMOAuthProxyCallClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass

    parentClass: Rest.OAuthProxyCallClass
}

export abstract class OSMOAuthProxyCallClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass

    static name: string
}

export interface OSMOAuthProxyCallPrivate {
}

export class OSMOAuthProxyCallPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallPrivate

    static name: string
}

export interface OSMObjectClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMObjectClass

    parentClass: GObject.ObjectClass
    getXmlTagName: () => string | null
}

export abstract class OSMObjectClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObjectClass

    static name: string
}

export interface OSMObjectPrivate {
}

export class OSMObjectPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObjectPrivate

    static name: string
}

export interface OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelationClass

    parentClass: OSMObjectClass
}

export abstract class OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelationClass

    static name: string
}

export interface OSMRelationPrivate {
}

export class OSMRelationPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelationPrivate

    static name: string
}

export interface OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWayClass

    parentClass: OSMObjectClass
}

export abstract class OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWayClass

    static name: string
}

export interface OSMWayPrivate {
}

export class OSMWayPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWayPrivate

    static name: string
}

export interface _ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactClass

    parentClass: GObject.ObjectClass
}

export class _ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactClass

    static name: string
}

export interface _ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    parentClass: GObject.ObjectClass
}

export class _ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    static name: string
}

export interface _OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    parentClass: GObject.ObjectClass
}

export class _OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    static name: string
}

export interface _OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    parentClass: OSMObjectClass
}

export class _OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    static name: string
}

export interface _OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    parentClass: OSMObjectClass
}

export class _OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    static name: string
}

export interface _OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    parentClass: OSMObjectClass
}

export class _OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    static name: string
}
