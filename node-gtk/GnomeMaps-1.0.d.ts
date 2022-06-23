// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeMaps-1.0
 */

import type Rest from './Rest-0.7';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GeocodeGlib from './GeocodeGlib-1.0';
import type Json from './Json-1.0';
import type Champlain from './Champlain-0.12';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace GnomeMaps {

enum ContactStoreState {
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
function osmFinalize(): void
function osmInit(): void
function osmParse(content: string, length: number): OSMObject
interface ContactGeocodeCallback {
    (contact: Contact): void
}
interface ContactStoreLookupCallback {
    (contact: Contact): void
}
interface Contact_ConstructProps extends GObject.Object_ConstructProps {

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

interface Contact {

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
    id: string
    /**
     * The name of the contact.
     */
    name: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Contact extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.Contact

    static name: string
    static $gtype: GObject.GType<Contact>

    // Constructors of GnomeMaps-1.0.GnomeMaps.Contact

    constructor(config?: Contact_ConstructProps) 
    constructor() 
    static new(): Contact
    _init(config?: Contact_ConstructProps): void
}

interface ContactStore_ConstructProps extends GObject.Object_ConstructProps {
}

interface ContactStore {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    /**
     * The type of the contact.
     */
    readonly state: ContactStoreState

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStore

    parentInstance: GObject.Object
    priv: ContactStorePrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.ContactStore

    getContacts(): Contact[]
    /**
     * Load contacts from available backends.
     */
    load(): void
    lookup(id: string, callback: ContactStoreLookupCallback): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.ContactStore

    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContactStore extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    static name: string
    static $gtype: GObject.GType<ContactStore>

    // Constructors of GnomeMaps-1.0.GnomeMaps.ContactStore

    constructor(config?: ContactStore_ConstructProps) 
    constructor() 
    static new(): ContactStore
    _init(config?: ContactStore_ConstructProps): void
}

interface FileTileSource_ConstructProps extends Champlain.TileSource_ConstructProps {

    // Own constructor properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    /**
     * The path to the tile source.
     */
    path?: string | null
}

interface FileTileSource {

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
    path: string
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     */
    readonly world: Champlain.BoundingBox

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSource

    parentInstance: Champlain.TileSource
    priv: FileTileSourcePrivate

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
class FileTileSource extends Champlain.TileSource {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    static name: string
    static $gtype: GObject.GType<FileTileSource>

    // Constructors of GnomeMaps-1.0.GnomeMaps.FileTileSource

    constructor(config?: FileTileSource_ConstructProps) 
    _init(config?: FileTileSource_ConstructProps): void
}

interface OSMChangeset_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    /**
     * The comment of the changes.
     */
    comment?: string | null
    createdBy?: string | null
}

interface OSMChangeset {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    /**
     * The comment of the changes.
     */
    comment: string
    createdBy: string

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    parentInstance: GObject.Object
    priv: OSMChangesetPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    serialize(): string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OSMChangeset extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    static name: string
    static $gtype: GObject.GType<OSMChangeset>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    constructor(config?: OSMChangeset_ConstructProps) 
    constructor(comment: string | null, createdBy: string | null) 
    static new(comment: string | null, createdBy: string | null): OSMChangeset
    _init(config?: OSMChangeset_ConstructProps): void
}

interface OSMNode_ConstructProps extends OSMObject_ConstructProps {

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

interface OSMNode {

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

    parentInstance: OSMObject
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

class OSMNode extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNode

    static name: string
    static $gtype: GObject.GType<OSMNode>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMNode

    constructor(config?: OSMNode_ConstructProps) 
    constructor(id: number, version: number, changeset: number, longitude: number, latitude: number) 
    static new(id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode
    _init(config?: OSMNode_ConstructProps): void
}

interface OSMOAuthProxyCall_ConstructProps extends Rest.OAuthProxyCall_ConstructProps {
}

interface OSMOAuthProxyCall {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    parent: Rest.OAuthProxyCall
    priv: OSMOAuthProxyCallPrivate

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

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

class OSMOAuthProxyCall extends Rest.OAuthProxyCall {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    static name: string
    static $gtype: GObject.GType<OSMOAuthProxyCall>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    constructor(config?: OSMOAuthProxyCall_ConstructProps) 
    constructor(proxy: Rest.OAuthProxy, content: string) 
    static new(proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall
    _init(config?: OSMOAuthProxyCall_ConstructProps): void
}

interface OSMObject_ConstructProps extends GObject.Object_ConstructProps {

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

interface OSMObject {

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

    parentInstance: GObject.Object

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMObject

    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OSMObject extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObject

    static name: string
    static $gtype: GObject.GType<OSMObject>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMObject

    constructor(config?: OSMObject_ConstructProps) 
    _init(config?: OSMObject_ConstructProps): void
}

interface OSMRelation_ConstructProps extends OSMObject_ConstructProps {
}

interface OSMRelation {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelation

    parentInstance: OSMObject
    priv: OSMRelationPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMRelation

    addMember(role: string, type: number, ref: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMRelation

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

class OSMRelation extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelation

    static name: string
    static $gtype: GObject.GType<OSMRelation>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMRelation

    constructor(config?: OSMRelation_ConstructProps) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMRelation
    _init(config?: OSMRelation_ConstructProps): void
}

interface OSMWay_ConstructProps extends OSMObject_ConstructProps {
}

interface OSMWay {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWay

    parentInstance: OSMObject
    priv: OSMWayPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMWay

    addNodeId(id: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMWay

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

class OSMWay extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWay

    static name: string
    static $gtype: GObject.GType<OSMWay>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMWay

    constructor(config?: OSMWay_ConstructProps) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMWay
    _init(config?: OSMWay_ConstructProps): void
}

interface ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactClass

    parentClass: GObject.ObjectClass
}

abstract class ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactClass

    static name: string
}

interface ContactPrivate {
}

class ContactPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactPrivate

    static name: string
}

interface ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStoreClass

    parentClass: GObject.ObjectClass
}

abstract class ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStoreClass

    static name: string
}

interface ContactStorePrivate {
}

class ContactStorePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStorePrivate

    static name: string
}

interface FileTileSourceClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass

    parentClass: Champlain.TileSourceClass
}

abstract class FileTileSourceClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass

    static name: string
}

interface FileTileSourcePrivate {
}

class FileTileSourcePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSourcePrivate

    static name: string
}

interface OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass

    parentClass: GObject.ObjectClass
}

abstract class OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass

    static name: string
}

interface OSMChangesetPrivate {
}

class OSMChangesetPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangesetPrivate

    static name: string
}

interface OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMNodeClass

    parentClass: OSMObjectClass
}

abstract class OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNodeClass

    static name: string
}

interface OSMNodePrivate {
}

class OSMNodePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNodePrivate

    static name: string
}

interface OSMOAuthProxyCallClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass

    parentClass: Rest.OAuthProxyCallClass
}

abstract class OSMOAuthProxyCallClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass

    static name: string
}

interface OSMOAuthProxyCallPrivate {
}

class OSMOAuthProxyCallPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallPrivate

    static name: string
}

interface OSMObjectClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMObjectClass

    parentClass: GObject.ObjectClass
    getXmlTagName: () => string
}

abstract class OSMObjectClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObjectClass

    static name: string
}

interface OSMObjectPrivate {
}

class OSMObjectPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObjectPrivate

    static name: string
}

interface OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelationClass

    parentClass: OSMObjectClass
}

abstract class OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelationClass

    static name: string
}

interface OSMRelationPrivate {
}

class OSMRelationPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelationPrivate

    static name: string
}

interface OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWayClass

    parentClass: OSMObjectClass
}

abstract class OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWayClass

    static name: string
}

interface OSMWayPrivate {
}

class OSMWayPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWayPrivate

    static name: string
}

interface _ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactClass

    parentClass: GObject.ObjectClass
}

class _ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactClass

    static name: string
}

interface _ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    parentClass: GObject.ObjectClass
}

class _ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    static name: string
}

interface _OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    parentClass: GObject.ObjectClass
}

class _OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    static name: string
}

interface _OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    parentClass: OSMObjectClass
}

class _OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    static name: string
}

interface _OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    parentClass: OSMObjectClass
}

class _OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    static name: string
}

interface _OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    parentClass: OSMObjectClass
}

class _OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    static name: string
}

}
export default GnomeMaps;