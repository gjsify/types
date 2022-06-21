// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeMaps-1.0
 */

import type * as Gjs from './Gjs';
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
function osm_finalize(): void
function osm_init(): void
function osm_parse(content: string, length: number): OSMObject
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
    readonly bounding_box: Champlain.BoundingBox
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

    parent_instance: GObject.Object
    priv: ContactStorePrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.ContactStore

    get_contacts(): Contact[]
    /**
     * Load contacts from available backends.
     */
    load(): void
    lookup(id: string, callback: ContactStoreLookupCallback): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.ContactStore

    connect(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: ContactStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly max_zoom: number
    /**
     * The minimum zoom level of the tile source.
     */
    readonly min_zoom: number
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

    parent_instance: Champlain.TileSource
    priv: FileTileSourcePrivate

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
    created_by?: string | null
}

interface OSMChangeset {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    /**
     * The comment of the changes.
     */
    comment: string
    created_by: string

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    parent_instance: GObject.Object
    priv: OSMChangesetPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    serialize(): string

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

class OSMChangeset extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    static name: string
    static $gtype: GObject.GType<OSMChangeset>

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    constructor(config?: OSMChangeset_ConstructProps) 
    constructor(comment: string | null, created_by: string | null) 
    static new(comment: string | null, created_by: string | null): OSMChangeset
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

    parent_instance: OSMObject
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

    connect(sigName: "notify::proxy", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: OSMOAuthProxyCall, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: GObject.Object

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMObject

    delete_tag(key: string): void
    get_tag(key: string): string
    serialize(): string
    set_tag(key: string, value: string): void

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

    parent_instance: OSMObject
    priv: OSMRelationPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMRelation

    add_member(role: string, type: number, ref: number): void

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

    parent_instance: OSMObject
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: Champlain.TileSourceClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: OSMObjectClass
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

    parent_class: Rest.OAuthProxyCallClass
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

    parent_class: GObject.ObjectClass
    get_xml_tag_name: () => string
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

    parent_class: OSMObjectClass
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

    parent_class: OSMObjectClass
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

    parent_class: GObject.ObjectClass
}

class _ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactClass

    static name: string
}

interface _ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    parent_class: GObject.ObjectClass
}

class _ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    static name: string
}

interface _OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    parent_class: GObject.ObjectClass
}

class _OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    static name: string
}

interface _OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    parent_class: OSMObjectClass
}

class _OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    static name: string
}

interface _OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    parent_class: OSMObjectClass
}

class _OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    static name: string
}

interface _OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    parent_class: OSMObjectClass
}

class _OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    static name: string
}

}
export default GnomeMaps;