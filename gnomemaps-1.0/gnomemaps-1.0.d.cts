
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomemaps-1.0-ambient.d.ts';
import './gnomemaps-1.0-import.d.ts';
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
export function osm_finalize(): void
export function osm_init(): void
export function osm_parse(content: string | null, length: number): OSMObject
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
    readonly bounding_box: Champlain.BoundingBox
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

    // Own fields of GnomeMaps-1.0.GnomeMaps.Contact

    parent_instance: GObject.Object
    priv: ContactPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.Contact

    add_place(place: GeocodeGlib.Place): void
    geocode(callback: ContactGeocodeCallback): void
    get_places(): GeocodeGlib.Place[]

    // Class property signals of GnomeMaps-1.0.GnomeMaps.Contact

    connect(sigName: "notify::bounding-box", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bounding-box", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Contact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Contact extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.Contact

    static name: string
    static $gtype: GObject.GType<Contact>

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

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStore

    parent_instance: GObject.Object
    priv: ContactStorePrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.ContactStore

    get_contacts(): Contact[]
    /**
     * Load contacts from available backends.
     */
    load(): void
    lookup(id: string | null, callback: ContactStoreLookupCallback): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.ContactStore

    connect(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ContactStore extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    static name: string
    static $gtype: GObject.GType<ContactStore>

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
    readonly max_zoom: number
    /**
     * The minimum zoom level of the tile source.
     */
    readonly min_zoom: number
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

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSource

    parent_instance: Champlain.TileSource & Champlain.MapSource & GObject.InitiallyUnowned & GObject.InitiallyUnowned
    priv: any

    // Owm methods of GnomeMaps-1.0.GnomeMaps.FileTileSource

    prepare(): boolean

    // Class property signals of GnomeMaps-1.0.GnomeMaps.FileTileSource

    connect(sigName: "notify::max-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom", ...args: any[]): void
    connect(sigName: "notify::min-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::world", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::world", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::world", ...args: any[]): void
    connect(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: (($obj: FileTileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #MapsFileTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class FileTileSource extends Champlain.TileSource {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    static name: string
    static $gtype: GObject.GType<FileTileSource>

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
        created_by?: string | null
    }

}

export interface OSMChangeset {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    /**
     * The comment of the changes.
     */
    comment: string | null
    created_by: string | null

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    parent_instance: GObject.Object
    priv: OSMChangesetPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    serialize(): string | null

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    connect(sigName: "notify::comment", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::created-by", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-by", callback: (($obj: OSMChangeset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created-by", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OSMChangeset extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    static name: string
    static $gtype: GObject.GType<OSMChangeset>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    constructor(config?: OSMChangeset.ConstructorProperties) 
    constructor(comment: string | null, created_by: string | null) 
    static new(comment: string | null, created_by: string | null): OSMChangeset
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

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMNode

    parent_instance: OSMObject & GObject.Object
    priv: OSMNodePrivate

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMNode

    connect(sigName: "notify::latitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::changeset", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OSMNode extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNode

    static name: string
    static $gtype: GObject.GType<OSMNode>

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

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    parent: Rest.OAuthProxyCall & Rest.ProxyCall & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    connect(sigName: "notify::proxy", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OSMOAuthProxyCall extends Rest.OAuthProxyCall {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    static name: string
    static $gtype: GObject.GType<OSMOAuthProxyCall>

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

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMObject

    parent_instance: GObject.Object

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMObject

    delete_tag(key: string | null): void
    get_tag(key: string | null): string | null
    serialize(): string | null
    set_tag(key: string | null, value: string | null): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMObject

    connect(sigName: "notify::changeset", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OSMObject extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObject

    static name: string
    static $gtype: GObject.GType<OSMObject>

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

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelation

    parent_instance: OSMObject & GObject.Object
    priv: OSMRelationPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMRelation

    add_member(role: string | null, type: number, ref: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMRelation

    connect(sigName: "notify::changeset", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMRelation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OSMRelation extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelation

    static name: string
    static $gtype: GObject.GType<OSMRelation>

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

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWay

    parent_instance: OSMObject & GObject.Object
    priv: OSMWayPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMWay

    add_node_id(id: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMWay

    connect(sigName: "notify::changeset", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: OSMWay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class OSMWay extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWay

    static name: string
    static $gtype: GObject.GType<OSMWay>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMWay

    constructor(config?: OSMWay.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMWay
    _init(config?: OSMWay.ConstructorProperties): void
}

export interface ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactClass

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: Champlain.TileSourceClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: OSMObjectClass
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

    parent_class: Rest.OAuthProxyCallClass
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

    parent_class: GObject.ObjectClass
    get_xml_tag_name: () => string | null
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

    parent_class: OSMObjectClass
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

    parent_class: OSMObjectClass
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

    parent_class: GObject.ObjectClass
}

export class _ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactClass

    static name: string
}

export interface _ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    parent_class: GObject.ObjectClass
}

export class _ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    static name: string
}

export interface _OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    parent_class: GObject.ObjectClass
}

export class _OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    static name: string
}

export interface _OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    parent_class: OSMObjectClass
}

export class _OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    static name: string
}

export interface _OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    parent_class: OSMObjectClass
}

export class _OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    static name: string
}

export interface _OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    parent_class: OSMObjectClass
}

export class _OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMWayClass

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