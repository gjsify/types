// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPAV-1.0
 */

import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUPnPAV {

enum CDSLastChangeEvent {
    /**
     * Invalid #GUPnPCDSLastChangeEntry.
     */
    INVALID,
    /**
     * The #GUPnPCDSLastChangeEntry is
     * an object added event.
     */
    OBJECT_ADDED,
    /**
     * The #GUPnPCDSLastChangeEntry
     * is an object removal event.
     */
    OBJECT_REMOVED,
    /**
     * The #GUPnPCDSLastChangeEntry
     * is an object modification event.
     */
    OBJECT_MODIFIED,
    /**
     * The #GUPnPCDSLastChangeEntry is a
     * subtree update done event.
     */
    ST_DONE,
}
/**
 * Possible return values of the gupnp_didl_lite_object_apply_fragments() call.
 */
enum DIDLLiteFragmentResult {
    /**
     * Operation succeeded.
     */
    OK,
    /**
     * Current set of fragments
     * is bad XML
     */
    CURRENT_BAD_XML,
    /**
     * New set of fragments is bad
     * XML
     */
    NEW_BAD_XML,
    /**
     * Current set of fragments
     * is invalid
     */
    CURRENT_INVALID,
    /**
     * New set of fragments is
     * invalid
     */
    NEW_INVALID,
    /**
     * Trying to remove a required
     * tag
     */
    REQUIRED_TAG,
    /**
     * Trying to modify or remove a
     * read-only tag
     */
    READONLY_TAG,
    /**
     * Length of the two fragment sets
     * does not match
     */
    MISMATCH,
    /**
     * General error sink if none
     * of the others applies.
     */
    UNKNOWN_ERROR,
}
/**
 * #GError codes used for errors in the #GUPNP_PROTOCOL_ERROR domain, upon any
 * protocol related errors.
 */
enum ProtocolError {
    /**
     * Invalid syntax.
     */
    INVALID_SYNTAX,
    /**
     * Unknown/unhandled protocol related errors.
     */
    OTHER,
}
/**
 * The possible operators in SearchCriteria strings.
 */
enum SearchCriteriaOp {
    /**
     * '='
     */
    EQ,
    /**
     * '!='
     */
    NEQ,
    /**
     * '<'
     */
    LESS,
    /**
     * '<='
     */
    LEQ,
    /**
     * '>'
     */
    GREATER,
    /**
     * '>='
     */
    GEQ,
    /**
     * 'contains'
     */
    CONTAINS,
    /**
     * 'doesNotContain'
     */
    DOES_NOT_CONTAIN,
    /**
     * 'derivedFrom'
     */
    DERIVED_FROM,
    /**
     * 'exists'
     */
    EXISTS,
}
enum SearchCriteriaParserError {
    /**
     * Parsing the search criteria
     * failed.
     */
    SEARCH_CRITERIA_PARSER_ERROR_FAILED,
}
/**
 * The DLNA conversion flags for a resource.
 * @bitfield 
 */
enum DLNAConversion {
    /**
     * Content is in original source format
     */
    NONE,
    /**
     * Content is transcoded
     */
    TRANSCODED,
}
/**
 * The miscellaneous operations supported by a resource. For details on these
 * flags please refer to section 7.3.37.2 of DLNA Networked Device
 * Interoperability Guidelines Volume 1, October 2006.
 * 
 * Updated DTCP Flags based on 2011 Guidelines, section 7.4.1.3.23.2
 * @bitfield 
 */
enum DLNAFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Content source is the clock source during
     *                                 transport
     */
    SENDER_PACED,
    /**
     * Limited Operation: time-seek supported
     */
    TIME_BASED_SEEK,
    /**
     * Limited Operation: byte-seek supported
     */
    BYTE_BASED_SEEK,
    /**
     * Resource supports 'Container Playback'
     */
    PLAY_CONTAINER,
    /**
     * Content does not have a fixed beginning
     */
    S0_INCREASE,
    /**
     * Content does not have a fixed end
     */
    SN_INCREASE,
    /**
     * RTSP resource supports pausing of media
     *                               transfer
     */
    RTSP_PAUSE,
    /**
     * Streaming transfer mode supported
     */
    STREAMING_TRANSFER_MODE,
    /**
     * Interactive transfer mode
     *                                              supported
     */
    INTERACTIVE_TRANSFER_MODE,
    /**
     * Background transfer mode
     *                                             supported
     */
    BACKGROUND_TRANSFER_MODE,
    /**
     * No content transfer when paused.
     */
    CONNECTION_STALL,
    /**
     * DLNAv1.5 version flag
     */
    DLNA_V15,
    /**
     * The content is protected.
     */
    LINK_PROTECTED_CONTENT,
    /**
     * Full byte seek on cleartext
     *                                              domain is supported.
     */
    CLEARTEXT_BYTESEEK_FULL,
    /**
     * Limited operations on
     *                                              byte seek in cleartext domain.
     */
    LOP_CLEARTEXT_BYTESEEK,
}
/**
 * The seek operations supported by a resource.
 * @bitfield 
 */
enum DLNAOperation {
    /**
     * Resource does not support seeking of any type
     */
    NONE,
    /**
     * Resource supports byte-seek
     */
    RANGE,
    /**
     * Resource supports time-seek
     */
    TIMESEEK,
}
/**
 * The DLNA OCM flags supported by a DIDL-Lite Object. For details on these
 * flags please refer to section 7.3.118.4 of DLNA Networked Device
 * Interoperability Guidelines Volume 1, October 2006.
 * @bitfield 
 */
enum OCMFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Indicates support for content upload.
     */
    UPLOAD,
    /**
     * Indicates support for creation of child
     *                                    container.
     */
    CREATE_CONTAINER,
    /**
     * This object is destroyable.
     */
    DESTROYABLE,
    /**
     * Indicates support for upload of
     *                                      destroyable content.
     */
    UPLOAD_DESTROYABLE,
    /**
     * Indicates support for changing metadata.
     */
    CHANGE_METADATA,
}
const DIDL_LITE_WRITER_NAMESPACE_DC: string
const DIDL_LITE_WRITER_NAMESPACE_DLNA: string
const DIDL_LITE_WRITER_NAMESPACE_PV: string
const DIDL_LITE_WRITER_NAMESPACE_UPNP: string
function protocolErrorQuark(): GLib.Quark
interface CDSLastChangeParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface CDSLastChangeParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    /**
     * Parse a LastChange XML document in the flavor defined by the
     * ContentDirectory:3 specification.
     * @param lastChange XML string to parse
     */
    parse(lastChange: string): CDSLastChangeEntry[]

    // Class property signals of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CDSLastChangeParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    static name: string
    static $gtype: GObject.GType<CDSLastChangeParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    constructor(config?: CDSLastChangeParser_ConstructProps) 
    /**
     * Create a new #GUPnPCDSLastChangeParser.
     * 
     * This parser is able to parse LastChange as defined in the
     * ContentDirectory:3 specification.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GUPnPCDSLastChangeParser.
     * 
     * This parser is able to parse LastChange as defined in the
     * ContentDirectory:3 specification.
     * @constructor 
     */
    static new(): CDSLastChangeParser
    _init(config?: CDSLastChangeParser_ConstructProps): void
}

interface DIDLLiteContainer_ConstructProps extends DIDLLiteObject_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    /**
     * The child count of this container.
     */
    childCount?: number | null
    /**
     * Update ID of this container.
     */
    containerUpdateId?: number | null
    /**
     * Whether this container is searchable.
     */
    searchable?: boolean | null
    /**
     * The number of bytes used by all child items of this container.
     */
    storageUsed?: number | null
    /**
     * Total deleted child count of this container.
     */
    totalDeletedChildCount?: number | null
}

interface DIDLLiteContainer {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    /**
     * The child count of this container.
     */
    childCount: number
    /**
     * Update ID of this container.
     */
    containerUpdateId: number
    /**
     * Whether this container is searchable.
     */
    searchable: boolean
    /**
     * The number of bytes used by all child items of this container.
     */
    storageUsed: number
    /**
     * Total deleted child count of this container.
     */
    totalDeletedChildCount: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    parentInstance: DIDLLiteObject

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    /**
     * Add a new create class to the `container`. includeDerived defaults to "0".
     * @param createClass The createClass to add.
     */
    addCreateClass(createClass: string): void
    /**
     * Add a new create class to the `container`.
     * @param createClass The createClass to add.
     * @param includeDerived Whether object with dervied classes may be created in this container or not.
     */
    addCreateClassFull(createClass: string, includeDerived: boolean): void
    /**
     * Add a new search class to the `container`.
     * @param searchClass The searchClass to add.
     */
    addSearchClass(searchClass: string): void
    /**
     * Add a new search class to the `container`.
     * @param searchClass The searchClass to add.
     * @param includeDerived includeDerived attribute of the DIDL
     */
    addSearchClassFull(searchClass: string, includeDerived: boolean): void
    /**
     * Get whether the container update ID of the `container` is set.
     */
    containerUpdateIdIsSet(): boolean
    /**
     * Get the child count of the `container`.  If the child count is unknown, -1 is
     * returned.
     */
    getChildCount(): number
    /**
     * Get the container update ID of the `container`.
     */
    getContainerUpdateId(): number
    /**
     * Gets the list of create classes of the `container`.
     */
    getCreateClasses(): string[]
    /**
     * Gets the list of create classes of the `container`.
     */
    getCreateClassesFull(): DIDLLiteCreateClass[]
    /**
     * Gets the list of search classes of the `container`.
     */
    getSearchClasses(): string[]
    /**
     * Checks whether `container` is searchable.
     */
    getSearchable(): boolean
    /**
     * Get the number of bytes used by all child items of the `container`.
     * If storage used is unknown, -1 is returned.
     */
    getStorageUsed(): number
    /**
     * Get the total deleted child count of the `container`.
     */
    getTotalDeletedChildCount(): number
    /**
     * Set the child count of the `container`.
     * @param childCount The child count
     */
    setChildCount(childCount: number): void
    /**
     * Set the container update ID of the `container`.
     * @param updateId The container update ID
     */
    setContainerUpdateId(updateId: number): void
    /**
     * (Un)set the searchibility of `container`.
     * @param searchable The searchibility
     */
    setSearchable(searchable: boolean): void
    /**
     * Set the number of bytes used by all child items of the `container`.
     * @param storageUsed The number of bytes used by all child items of the                `container` or -1 if unknown.
     */
    setStorageUsed(storageUsed: number): void
    /**
     * Set the container update ID of the `container`.
     * @param count The container update ID
     */
    setTotalDeletedChildCount(count: number): void
    /**
     * Get whether the total deleted child conut of the `container` is set.
     */
    totalDeletedChildCountIsSet(): boolean
    /**
     * Unset the container update ID property of the `container`.
     */
    unsetContainerUpdateId(): void
    /**
     * Unset the total deleted child count property of the `container`.
     */
    unsetTotalDeletedChildCount(): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    connect(sigName: "notify::child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::container-update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::container-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::container-update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::container-update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::container-update-id", ...args: any[]): void
    connect(sigName: "notify::searchable", callback: (...args: any[]) => void): number
    on(sigName: "notify::searchable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::searchable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::searchable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::searchable", ...args: any[]): void
    connect(sigName: "notify::storage-used", callback: (...args: any[]) => void): number
    on(sigName: "notify::storage-used", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::storage-used", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::storage-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::storage-used", ...args: any[]): void
    connect(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-deleted-child-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-deleted-child-count", ...args: any[]): void
    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (...args: any[]) => void): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::dc-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dc-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dc-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dc-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dc-namespace", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-managed", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::restricted", callback: (...args: any[]) => void): number
    on(sigName: "notify::restricted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restricted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restricted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::track-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-namespace", ...args: any[]): void
    connect(sigName: "notify::write-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-status", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteContainer extends DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    static name: string
    static $gtype: GObject.GType<DIDLLiteContainer>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    constructor(config?: DIDLLiteContainer_ConstructProps) 
    _init(config?: DIDLLiteContainer_ConstructProps): void
}

interface DIDLLiteContributor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    /**
     * The name of this contributor.
     */
    name?: string | null
    /**
     * The role of this contributor.
     */
    role?: string | null
    /**
     * The pointer to object node in XML document.
     */
    xmlNode?: object | null
}

interface DIDLLiteContributor {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    /**
     * The name of this contributor.
     */
    name: string
    /**
     * The role of this contributor.
     */
    role: string
    /**
     * The pointer to object node in XML document.
     */
    readonly xmlNode: object

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    /**
     * Get the name of the `contributor`.
     */
    getName(): string
    /**
     * Get the role of the `contributor`.
     */
    getRole(): string
    /**
     * Get the pointer to relevant node in XML document.
     */
    getXmlNode(): libxml2.Node
    /**
     * Set the name of the `contributor` to `name`.
     * @param name The name of the contributor
     */
    setName(name: string): void
    /**
     * Set the role of the `contributor` to `role`.
     * @param role The role of the `contributor`
     */
    setRole(role: string): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::role", callback: (...args: any[]) => void): number
    on(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteContributor extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    static name: string
    static $gtype: GObject.GType<DIDLLiteContributor>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    constructor(config?: DIDLLiteContributor_ConstructProps) 
    _init(config?: DIDLLiteContributor_ConstructProps): void
}

interface DIDLLiteCreateClass_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * The content of this create Class.
     */
    content?: string | null
    /**
     * The friendly name of this create Class.
     */
    friendlyName?: string | null
    /**
     * Whether this create Class can be derived.
     */
    includeDerived?: boolean | null
    /**
     * The pointer to desc node in XML document.
     */
    xmlNode?: object | null
}

interface DIDLLiteCreateClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * The content of this create Class.
     */
    content: string
    /**
     * The friendly name of this create Class.
     */
    friendlyName: string
    /**
     * Whether this create Class can be derived.
     */
    includeDerived: boolean
    /**
     * The pointer to desc node in XML document.
     */
    readonly xmlNode: object

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * Get the content of the `create_class`.
     */
    getContent(): string
    /**
     * Get the friendly name of the `create_class`.
     */
    getFriendlyName(): string
    /**
     * Checks whether `create_class` can be derived.
     */
    getIncludeDerived(): boolean
    /**
     * Get the pointer to relevant node in XML document.
     */
    getXmlNode(): libxml2.Node
    /**
     * Set the content of the `create_class`.
     * @param content The content
     */
    setContent(content: string): void
    /**
     * Set the friendly name of the `create_class`.
     * @param friendlyName The friendly name
     */
    setFriendlyName(friendlyName: string): void
    /**
     * (Un)set the derivability of create_class.
     * @param includeDerived the derivability
     */
    setIncludeDerived(includeDerived: boolean): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::friendly-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::friendly-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::friendly-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::friendly-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::friendly-name", ...args: any[]): void
    connect(sigName: "notify::include-derived", callback: (...args: any[]) => void): number
    on(sigName: "notify::include-derived", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::include-derived", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::include-derived", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::include-derived", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteCreateClass extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    static name: string
    static $gtype: GObject.GType<DIDLLiteCreateClass>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    constructor(config?: DIDLLiteCreateClass_ConstructProps) 
    _init(config?: DIDLLiteCreateClass_ConstructProps): void
}

interface DIDLLiteDescriptor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    /**
     * The content of this descriptor.
     */
    content?: string | null
    /**
     * The ID of this descriptor.
     */
    id?: string | null
    /**
     * The type of this descriptor.
     */
    metadataType?: string | null
    /**
     * The name space associated with this descriptor.
     */
    nameSpace?: string | null
    /**
     * The pointer to desc node in XML document.
     */
    xmlNode?: object | null
}

interface DIDLLiteDescriptor {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    /**
     * The content of this descriptor.
     */
    content: string
    /**
     * The ID of this descriptor.
     */
    id: string
    /**
     * The type of this descriptor.
     */
    metadataType: string
    /**
     * The name space associated with this descriptor.
     */
    nameSpace: string
    /**
     * The pointer to desc node in XML document.
     */
    readonly xmlNode: object

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    /**
     * Get the content of the `descriptor`.
     */
    getContent(): string
    /**
     * Get the ID of the `descriptor`.
     */
    getId(): string
    /**
     * Get the metadata type of the `descriptor`.
     */
    getMetadataType(): string
    /**
     * Get the name space associated with the `descriptor`.
     */
    getNameSpace(): string
    /**
     * Get the pointer to desc node in XML document.
     */
    getXmlNode(): libxml2.Node
    /**
     * Set the content of the `descriptor`.
     * @param content The content as string
     */
    setContent(content: string): void
    /**
     * Set the ID of the `descriptor`.
     * @param id The ID as string
     */
    setId(id: string): void
    /**
     * Set the metadata type of the `descriptor`.
     * @param type The metadata type as string
     */
    setMetadataType(type: string): void
    /**
     * Set the name space associated with the `descriptor`.
     * @param nameSpace The name space URI as string
     */
    setNameSpace(nameSpace: string): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata-type", ...args: any[]): void
    connect(sigName: "notify::name-space", callback: (...args: any[]) => void): number
    on(sigName: "notify::name-space", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name-space", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name-space", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name-space", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteDescriptor extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    static name: string
    static $gtype: GObject.GType<DIDLLiteDescriptor>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    constructor(config?: DIDLLiteDescriptor_ConstructProps) 
    constructor() 
    static new(): DIDLLiteDescriptor
    _init(config?: DIDLLiteDescriptor_ConstructProps): void
}

interface DIDLLiteItem_ConstructProps extends DIDLLiteObject_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    /**
     * The lifetime in seconds of this DIDLLite item in a media collection.
     */
    lifetime?: number | null
    /**
     * The ref ID of this item.
     */
    refId?: string | null
}

interface DIDLLiteItem {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    /**
     * The lifetime in seconds of this DIDLLite item in a media collection.
     */
    lifetime: number
    /**
     * The ref ID of this item.
     */
    refId: string

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    parentInstance: DIDLLiteObject

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    getLifetime(): number
    /**
     * Get the ref ID of the `item`.
     */
    getRefId(): string
    setLifetime(lifetime: number): void
    /**
     * Set the ref ID of the `item`.
     * @param refId The ref ID
     */
    setRefId(refId: string): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    connect(sigName: "notify::lifetime", callback: (...args: any[]) => void): number
    on(sigName: "notify::lifetime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lifetime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lifetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lifetime", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ref-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ref-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (...args: any[]) => void): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::dc-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dc-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dc-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dc-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dc-namespace", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-managed", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::restricted", callback: (...args: any[]) => void): number
    on(sigName: "notify::restricted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restricted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restricted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::track-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-namespace", ...args: any[]): void
    connect(sigName: "notify::write-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-status", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteItem extends DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    static name: string
    static $gtype: GObject.GType<DIDLLiteItem>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    constructor(config?: DIDLLiteItem_ConstructProps) 
    _init(config?: DIDLLiteItem_ConstructProps): void
}

interface DIDLLiteObject_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * The album of this object.
     */
    album?: string | null
    /**
     * The URI to album art of this object.
     */
    albumArt?: string | null
    /**
     * The artist of this object.
     */
    artist?: string | null
    /**
     * The author of this object.
     */
    author?: string | null
    /**
     * The creator of this object.
     */
    creator?: string | null
    /**
     * The date of this object.
     */
    date?: string | null
    /**
     * Pointer to the DublinCore namespace registered with the XML document
     * containing this object.
     */
    dcNamespace?: object | null
    /**
     * The description of this object.
     */
    description?: string | null
    /**
     * The 'dlna:dlnaManaged' attribute.
     */
    dlnaManaged?: OCMFlags | null
    /**
     * Pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    dlnaNamespace?: object | null
    /**
     * The genre of this object.
     */
    genre?: string | null
    /**
     * The ID of this object.
     */
    id?: string | null
    /**
     * The ID of the parent container of this object.
     */
    parentId?: string | null
    /**
     * Pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     */
    pvNamespace?: object | null
    /**
     * Whether this object is restricted.
     */
    restricted?: boolean | null
    /**
     * The title of this object.
     */
    title?: string | null
    /**
     * The original track number of this object.
     */
    trackNumber?: number | null
    /**
     * Update ID of this object.
     */
    updateId?: number | null
    /**
     * The UPnP class of this object.
     */
    upnpClass?: string | null
    /**
     * Pointer to the UPnP namespace registered with the XML document
     * containing this object.
     */
    upnpNamespace?: object | null
    /**
     * The write status of this object.
     */
    writeStatus?: string | null
    /**
     * The pointer to object node in XML document.
     */
    xmlNode?: object | null
}

interface DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * The album of this object.
     */
    album: string
    /**
     * The URI to album art of this object.
     */
    albumArt: string
    /**
     * The artist of this object.
     */
    artist: string
    /**
     * The author of this object.
     */
    author: string
    /**
     * The creator of this object.
     */
    creator: string
    /**
     * The date of this object.
     */
    date: string
    /**
     * Pointer to the DublinCore namespace registered with the XML document
     * containing this object.
     */
    readonly dcNamespace: object
    /**
     * The description of this object.
     */
    description: string
    /**
     * The 'dlna:dlnaManaged' attribute.
     */
    dlnaManaged: OCMFlags
    /**
     * Pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    readonly dlnaNamespace: object
    /**
     * The genre of this object.
     */
    genre: string
    /**
     * The ID of this object.
     */
    id: string
    /**
     * The ID of the parent container of this object.
     */
    parentId: string
    /**
     * Pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     */
    readonly pvNamespace: object
    /**
     * Whether this object is restricted.
     */
    restricted: boolean
    /**
     * The title of this object.
     */
    title: string
    /**
     * The original track number of this object.
     */
    trackNumber: number
    /**
     * Update ID of this object.
     */
    updateId: number
    /**
     * The UPnP class of this object.
     */
    upnpClass: string
    /**
     * Pointer to the UPnP namespace registered with the XML document
     * containing this object.
     */
    readonly upnpNamespace: object
    /**
     * The write status of this object.
     */
    writeStatus: string
    /**
     * The pointer to object node in XML document.
     */
    readonly xmlNode: object

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * Add a new Artist node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     */
    addArtist(): DIDLLiteContributor
    /**
     * Add a new author node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     */
    addAuthor(): DIDLLiteContributor
    /**
     * Add a new creator node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     */
    addCreator(): DIDLLiteContributor
    /**
     * Creates a new descriptor, attaches it to `object` and returns it.
     */
    addDescriptor(): DIDLLiteDescriptor
    /**
     * Creates a new resource, attaches it to `object` and returns it.
     */
    addResource(): DIDLLiteResource
    /**
     * Updates object by applying `new_fragments` in places of
     * `current_fragments`. For `current_size` and `new_size` -1 can be
     * passed when respectively `current_fragments` and `new_fragments` are
     * NULL terminated.
     * @param currentFragments XML fragments of `object`.
     * @param newFragments Substitutes for `current_fragments`.
     */
    applyFragments(currentFragments: string[], newFragments: string[]): DIDLLiteFragmentResult
    /**
     * Get the album of the `object`.
     */
    getAlbum(): string
    /**
     * Get the URI to album art of the `object`.
     */
    getAlbumArt(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object album.
     */
    getAlbumXmlString(): string
    /**
     * Get the artist of the `object`. If role is not %NULL, it is set to the role
     * of the artist if available.
     */
    getArtist(): string
    /**
     * Get the artists of the `object`.
     */
    getArtists(): DIDLLiteContributor[]
    /**
     * Creates a string representation of the DIDL-Lite XML fragments related to the
     * object artists.
     */
    getArtistsXmlString(): string
    /**
     * Get the author of the `object`.
     */
    getAuthor(): string
    /**
     * Get the authors of the `object`.
     */
    getAuthors(): DIDLLiteContributor[]
    /**
     * Use this function to get a resource from the `object` that is compatible with
     * any of the protocols specified in the `sink_protocol_info`. The value of
     * `sink_protocol_info` will typically be acquired from 'Sink' argument of
     * 'GetProtocolInfo' action or 'SinkProtocolInfo' state-variable of a
     * ConnectionManager service.
     * 
     * If `lenient` is #TRUE, the first resource in the list is returned instead of
     * %NULL if none of resources and protocols are found to be compatible.
     * @param sinkProtocolInfo The SinkProtocolInfo string from MediaRenderer
     * @param lenient Enable lenient mode
     */
    getCompatResource(sinkProtocolInfo: string, lenient: boolean): DIDLLiteResource
    /**
     * Get the creator of the `object`.
     */
    getCreator(): string
    /**
     * Get the creators of the `object`.
     */
    getCreators(): DIDLLiteContributor[]
    /**
     * Get the date of the `object`.
     */
    getDate(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object date.
     */
    getDateXmlString(): string
    /**
     * Get the pointer to the DublinCore namespace registered with the XML document
     * containing this object.
     */
    getDcNamespace(): libxml2.NsPtr
    /**
     * Get the description of the `object`.
     */
    getDescription(): string
    /**
     * Get the descriptors of the `object`.
     */
    getDescriptors(): DIDLLiteDescriptor[]
    /**
     * Get the 'dlna:dlnaManaged' attribute of the `object`.
     */
    getDlnaManaged(): OCMFlags
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    getDlnaNamespace(): libxml2.NsPtr
    /**
     * Get the genre of the `object`.
     */
    getGenre(): string
    /**
     * Get the ID of the `object`.
     */
    getId(): string
    /**
     * Get the ID of the parent of the `object`.
     */
    getParentId(): string
    /**
     * Use this function to retreive property nodes by name.
     * @param name name of the properties
     */
    getProperties(name: string): libxml2.Node[]
    /**
     * Get the pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     */
    getPvNamespace(): libxml2.NsPtr
    /**
     * Use this function to retreive resources from the `object`.
     */
    getResources(): DIDLLiteResource[]
    /**
     * Whether the `object` is restricted or not.
     */
    getRestricted(): boolean
    /**
     * Get the title of the `object`.
     */
    getTitle(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object title.
     */
    getTitleXmlString(): string
    /**
     * Get the original track number of the `object`.
     */
    getTrackNumber(): number
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object track number.
     */
    getTrackNumberXmlString(): string
    /**
     * Get the update ID of the `object`.
     */
    getUpdateId(): number
    /**
     * Get the UPnP class of the `object`.
     */
    getUpnpClass(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object UPnP class.
     */
    getUpnpClassXmlString(): string
    /**
     * Get the pointer to the UPnP namespace registered with the XML document.
     */
    getUpnpNamespace(): libxml2.NsPtr
    /**
     * Get the write status of the `object`.
     */
    getWriteStatus(): string
    /**
     * Get the pointer to object node in XML document.
     */
    getXmlNode(): libxml2.Node
    /**
     * Get the representation of this object as an XML string.
     */
    getXmlString(): string
    /**
     * Whehter the restricted attribute exists on `object`
     */
    isRestrictedSet(): boolean
    /**
     * Set the album of the `object` to `album`.
     * @param album The album string
     */
    setAlbum(album: string): void
    /**
     * Set the URI to album art of the `object` to `album_art`.
     * @param albumArt The URI of album art
     */
    setAlbumArt(albumArt: string): void
    /**
     * Set the Artist of the `object` to `artist`.
     * @param artist The Artist
     */
    setArtist(artist: string): void
    /**
     * Set the Author of the `object` to `author`.
     * @param author The Author
     */
    setAuthor(author: string): void
    /**
     * Set the creator of the `object` to `creator`.
     * @param creator The creator
     */
    setCreator(creator: string): void
    /**
     * Set the date of the `object` to `date`.
     * @param date The date string
     */
    setDate(date: string): void
    /**
     * Set the description of the `object` to `description`.
     * @param description The description string
     */
    setDescription(description: string): void
    /**
     * Set the 'dlna:dlnaManaged' attribute of the `object` to `dlna_managed`.
     * @param dlnaManaged The #GUPnPOCMFlags.
     */
    setDlnaManaged(dlnaManaged: OCMFlags): void
    /**
     * Set the genre of the `object` to `genre`.
     * @param genre The Genre
     */
    setGenre(genre: string): void
    /**
     * Set the ID of the `object` to `id`.
     * @param id The ID
     */
    setId(id: string): void
    /**
     * Set the ID of the parent of the `object` to `parent_id`.
     * @param parentId The parent ID
     */
    setParentId(parentId: string): void
    /**
     * Set the restricted status of `object` to `restricted`.
     * @param restricted The restricted status
     */
    setRestricted(restricted: boolean): void
    /**
     * Set the title of the `object` to `title`.
     * @param title The title
     */
    setTitle(title: string): void
    /**
     * Set the original track number of the `object` to `track_number`.
     * @param trackNumber The original track number
     */
    setTrackNumber(trackNumber: number): void
    /**
     * Set the update ID of the `object`.
     * @param updateId Update ID
     */
    setUpdateId(updateId: number): void
    /**
     * Set the UPnP class of the `object` to `upnp_class`.
     * @param upnpClass The UPnP class as string.
     */
    setUpnpClass(upnpClass: string): void
    /**
     * Set the write status of the `object` to `write_status`.
     * @param writeStatus The write status string
     */
    setWriteStatus(writeStatus: string): void
    /**
     * Unset the artists properties of the `object`.
     */
    unsetArtists(): void
    /**
     * Unset the update ID property of the `object`.
     */
    unsetUpdateId(): void
    /**
     * Get whether the update ID of the `object` is set.
     */
    updateIdIsSet(): boolean

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    connect(sigName: "notify::album", callback: (...args: any[]) => void): number
    on(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (...args: any[]) => void): number
    on(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::album-art", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::album-art", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (...args: any[]) => void): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::date", callback: (...args: any[]) => void): number
    on(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::dc-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dc-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dc-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dc-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dc-namespace", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-managed", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (...args: any[]) => void): number
    on(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::genre", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::genre", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::restricted", callback: (...args: any[]) => void): number
    on(sigName: "notify::restricted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restricted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restricted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restricted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::track-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::update-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::upnp-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::upnp-namespace", ...args: any[]): void
    connect(sigName: "notify::write-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-status", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteObject extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    static name: string
    static $gtype: GObject.GType<DIDLLiteObject>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    constructor(config?: DIDLLiteObject_ConstructProps) 
    _init(config?: DIDLLiteObject_ConstructProps): void
}

interface DIDLLiteParser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `container-available`
 */
interface DIDLLiteParser_ContainerAvailableSignalCallback {
    (container: DIDLLiteContainer): void
}

/**
 * Signal callback interface for `item-available`
 */
interface DIDLLiteParser_ItemAvailableSignalCallback {
    (item: DIDLLiteItem): void
}

/**
 * Signal callback interface for `object-available`
 */
interface DIDLLiteParser_ObjectAvailableSignalCallback {
    (object: DIDLLiteObject): void
}

interface DIDLLiteParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    /**
     * Parses DIDL-Lite XML string `didl,` emitting the ::object-available,
     * ::item-available and ::container-available signals appropriately during the
     * process.
     * @param didl The DIDL-Lite XML string to be parsed
     */
    parseDidl(didl: string): boolean

    // Own signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    connect(sigName: "container-available", callback: DIDLLiteParser_ContainerAvailableSignalCallback): number
    on(sigName: "container-available", callback: DIDLLiteParser_ContainerAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-available", callback: DIDLLiteParser_ContainerAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-available", callback: DIDLLiteParser_ContainerAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "container-available", ...args: any[]): void
    connect(sigName: "item-available", callback: DIDLLiteParser_ItemAvailableSignalCallback): number
    on(sigName: "item-available", callback: DIDLLiteParser_ItemAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-available", callback: DIDLLiteParser_ItemAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-available", callback: DIDLLiteParser_ItemAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "item-available", ...args: any[]): void
    connect(sigName: "object-available", callback: DIDLLiteParser_ObjectAvailableSignalCallback): number
    on(sigName: "object-available", callback: DIDLLiteParser_ObjectAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-available", callback: DIDLLiteParser_ObjectAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-available", callback: DIDLLiteParser_ObjectAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "object-available", ...args: any[]): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    static name: string
    static $gtype: GObject.GType<DIDLLiteParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    constructor(config?: DIDLLiteParser_ConstructProps) 
    constructor() 
    static new(): DIDLLiteParser
    _init(config?: DIDLLiteParser_ConstructProps): void
}

interface DIDLLiteResource_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    /**
     * The number of audio channels in this resource.
     */
    audioChannels?: number | null
    /**
     * The bitrate of this resource.
     */
    bitrate?: number | null
    /**
     * The sample size of this resource.
     */
    bitsPerSample?: number | null
    cleartextSize?: number | null
    /**
     * The color-depth of this image/video resource.
     */
    colorDepth?: number | null
    /**
     * Pointer to the DLNA metadata namespace registered with the
     * resource object.
     */
    dlnaNamespace?: object | null
    /**
     * The duration (in seconds) of this resource.
     */
    duration?: number | null
    /**
     * The height of this image/video resource.
     */
    height?: number | null
    /**
     * The Import URI associated with this resource.
     */
    importUri?: string | null
    /**
     * The protection system used for this resource.
     */
    protection?: string | null
    /**
     * The protocol info associated with this resource.
     */
    protocolInfo?: ProtocolInfo | null
    /**
     * Pointer to the PV metadata namespace registered with the
     * resource object.
     */
    pvNamespace?: object | null
    /**
     * The sample frequency of this resource.
     */
    sampleFreq?: number | null
    /**
     * The size (in bytes) of this resource.
     */
    size?: number | null
    /**
     * The size (in bytes) of this resource.
     */
    size64?: number | null
    /**
     * Type of external subtitle file. Usually SRT or SMI.
     */
    subtitleFileType?: string | null
    /**
     * Uri to external subtitle file.
     */
    subtitleFileUri?: string | null
    /**
     * Number of tracks in a DIDL_S or DIDL_V resource.
     */
    trackTotal?: number | null
    updateCount?: number | null
    /**
     * The URI associated with this resource.
     */
    uri?: string | null
    /**
     * The width of this image/video resource.
     */
    width?: number | null
    /**
     * The pointer to res node in XML document.
     */
    xmlNode?: object | null
}

interface DIDLLiteResource {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    /**
     * The number of audio channels in this resource.
     */
    audioChannels: number
    /**
     * The bitrate of this resource.
     */
    bitrate: number
    /**
     * The sample size of this resource.
     */
    bitsPerSample: number
    cleartextSize: number
    /**
     * The color-depth of this image/video resource.
     */
    colorDepth: number
    /**
     * Pointer to the DLNA metadata namespace registered with the
     * resource object.
     */
    readonly dlnaNamespace: object
    /**
     * The duration (in seconds) of this resource.
     */
    duration: number
    /**
     * The height of this image/video resource.
     */
    height: number
    /**
     * The Import URI associated with this resource.
     */
    importUri: string
    /**
     * The protection system used for this resource.
     */
    protection: string
    /**
     * The protocol info associated with this resource.
     */
    protocolInfo: ProtocolInfo
    /**
     * Pointer to the PV metadata namespace registered with the
     * resource object.
     */
    readonly pvNamespace: object
    /**
     * The sample frequency of this resource.
     */
    sampleFreq: number
    /**
     * The size (in bytes) of this resource.
     */
    size: number
    /**
     * The size (in bytes) of this resource.
     */
    size64: number
    /**
     * Type of external subtitle file. Usually SRT or SMI.
     */
    subtitleFileType: string
    /**
     * Uri to external subtitle file.
     */
    subtitleFileUri: string
    /**
     * Number of tracks in a DIDL_S or DIDL_V resource.
     */
    trackTotal: number
    updateCount: number
    /**
     * The URI associated with this resource.
     */
    uri: string
    /**
     * The width of this image/video resource.
     */
    width: number
    /**
     * The pointer to res node in XML document.
     */
    readonly xmlNode: object

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    /**
     * Get the number of audio channels in the `resource`.
     */
    getAudioChannels(): number
    /**
     * Get the bitrate (in bytes per second) of the `resource`.
     */
    getBitrate(): number
    /**
     * Get the sample size of the `resource`.
     */
    getBitsPerSample(): number
    /**
     * Get the size (in bytes) of the `resource`.
     */
    getCleartextSize(): number
    /**
     * Get the color-depth of this image/video resource.
     */
    getColorDepth(): number
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    getDlnaNamespace(): libxml2.NsPtr
    /**
     * Get the duration (in seconds) of the `resource`.
     */
    getDuration(): number
    /**
     * Get the height of this image/video resource.
     */
    getHeight(): number
    /**
     * Get the import URI associated with the `resource`.
     */
    getImportUri(): string
    /**
     * Get the protection system used by the `resource`.
     */
    getProtection(): string
    /**
     * Get the protocol info associated with the `resource`.
     */
    getProtocolInfo(): ProtocolInfo | null
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    getPvNamespace(): libxml2.NsPtr
    /**
     * Get the sample frequency of the `resource`.
     */
    getSampleFreq(): number
    /**
     * Get the size (in bytes) of the `resource`.
     */
    getSize(): number
    /**
     * Get the size (in bytes) of the `resource`.
     */
    getSize64(): number
    getSubtitleFileType(): string
    getSubtitleFileUri(): string
    /**
     * Get the total track count of this resource.
     */
    getTrackTotal(): number
    /**
     * Get the update count of this resource.
     */
    getUpdateCount(): number
    /**
     * Get the URI associated with the `resource`.
     */
    getUri(): string | null
    /**
     * Get the width of this image/video resource.
     */
    getWidth(): number
    /**
     * Get the pointer to res node in XML document.
     */
    getXmlNode(): libxml2.Node
    /**
     * Set the number of audio channels in the `resource`. Passing a negative number
     * will unset this property.
     * @param nChannels The number of channels
     */
    setAudioChannels(nChannels: number): void
    /**
     * Set the bitrate (in bytes per second) of the `resource`. Passing a negative
     * number will unset this property.
     * @param bitrate The bitrate
     */
    setBitrate(bitrate: number): void
    /**
     * Set the sample size of the `resource`. Passing a negative number will unset
     * this property.
     * @param sampleSize The number of bits per sample
     */
    setBitsPerSample(sampleSize: number): void
    /**
     * Set the size (in bytes) of the `resource`. Passing a negative number will
     * unset this property.
     * @param cleartextSize The size (in bytes)
     */
    setCleartextSize(cleartextSize: number): void
    /**
     * Set the color-depth of this image/video resource. Passing a negative number
     * will unset this property.
     * @param colorDepth The color-depth
     */
    setColorDepth(colorDepth: number): void
    /**
     * Set the duration (in seconds) of the `resource`. Passing a negative number
     * will unset this property.
     * @param duration The duration (in seconds)
     */
    setDuration(duration: number): void
    /**
     * Set the height of this image/video resource. Setting both width and height to
     * a negative number will unset the resolution property.
     * @param height The height
     */
    setHeight(height: number): void
    /**
     * Set the import URI associated with the `resource`.
     * @param importUri The URI as string
     */
    setImportUri(importUri: string): void
    /**
     * Set the protection system used by the `resource`. Passing a negative number
     * will unset this property.
     * @param protection The protection system identifier as string
     */
    setProtection(protection: string): void
    /**
     * Set the protocol info associated with the `resource`.
     * @param info The protocol string
     */
    setProtocolInfo(info: ProtocolInfo): void
    /**
     * Set the sample frequency of the `resource`. Passing a negative number will
     * unset this property.
     * @param sampleFreq The sample frequency
     */
    setSampleFreq(sampleFreq: number): void
    /**
     * Set the size (in bytes) of the `resource`. Passing a negative number will
     * unset this property.
     * @param size The size (in bytes)
     */
    setSize(size: number): void
    /**
     * Set the size (in bytes) of the `resource`. Passing a negative number will
     * unset this property.
     * @param size The size (in bytes)
     */
    setSize64(size: number): void
    /**
     * Set the type of an external subtitle file, specified via
     * pv:subtitleFileUri using gupnp_didl_lite_resource_set_subtitle_file_uri().
     * 
     * When `type` is %NULL the value is removed.
     * @param type An URI to an external subtitle file
     */
    setSubtitleFileType(type: string | null): void
    /**
     * Set the URI of an external subtitle file to be used with this resource.
     * When `uri` is %NULL the value is removed.
     * @param uri An URI to an external subtitle file or %NULL to remove.
     */
    setSubtitleFileUri(uri: string | null): void
    /**
     * Set the total number of tracks in this resource.
     * @param trackTotal The total number of tracks in this resource
     */
    setTrackTotal(trackTotal: number): void
    /**
     * Set the update count of this resource.
     * @param updateCount The update_count
     */
    setUpdateCount(updateCount: number): void
    /**
     * Set the URI associated with the `resource`.
     * @param uri The URI as string
     */
    setUri(uri: string): void
    /**
     * Set the width of this image/video resource. Setting both width and height to
     * a negative number will unset the resolution property.
     * @param width The width
     */
    setWidth(width: number): void
    /**
     * Check whether the total track count property of this resource is set.
     */
    trackTotalIsSet(): boolean
    /**
     * Unset the total track count of this resource.
     */
    unsetTrackTotal(): void
    /**
     * Unset the update count of this resource.
     */
    unsetUpdateCount(): void
    /**
     * Check whether the update count property of this resource is set.
     */
    updateCountIsSet(): boolean

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    connect(sigName: "notify::audio-channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-channels", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::cleartext-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cleartext-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cleartext-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cleartext-size", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::import-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::import-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::import-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::import-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::import-uri", ...args: any[]): void
    connect(sigName: "notify::protection", callback: (...args: any[]) => void): number
    on(sigName: "notify::protection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protection", ...args: any[]): void
    connect(sigName: "notify::protocol-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol-info", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): number
    on(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pv-namespace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pv-namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (...args: any[]) => void): number
    on(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sample-freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sample-freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size64", callback: (...args: any[]) => void): number
    on(sigName: "notify::size64", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size64", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size64", ...args: any[]): void
    connect(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-file-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-file-type", ...args: any[]): void
    connect(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-file-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-file-uri", ...args: any[]): void
    connect(sigName: "notify::track-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-total", ...args: any[]): void
    connect(sigName: "notify::update-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-count", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteResource extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    static name: string
    static $gtype: GObject.GType<DIDLLiteResource>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    constructor(config?: DIDLLiteResource_ConstructProps) 
    _init(config?: DIDLLiteResource_ConstructProps): void
}

interface DIDLLiteWriter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * The language the DIDL-Lite fragment is in.
     */
    language?: string | null
}

interface DIDLLiteWriter {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * The language the DIDL-Lite fragment is in.
     */
    readonly language: string
    /**
     * The pointer to root node in XML document.
     */
    readonly xmlNode: object

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * Creates a new container, attaches it to `writer` and returns it.
     */
    addContainer(): DIDLLiteContainer
    /**
     * Creates a new descriptor, attaches it to `object` and returns it.
     */
    addDescriptor(): DIDLLiteDescriptor
    /**
     * Creates a new item, attaches it to `writer` and returns it.
     */
    addItem(): DIDLLiteItem
    /**
     * Clears the DIDL-Lite XML document of the properties not specified in the
     * `filter`. The passed filter string would typically come from the 'Filter'
     * argument of Browse or Search actions from a ContentDirectory control point.
     * Please refer to Section 2.3.15 of UPnP AV ContentDirectory version 3
     * specification for details on this string.
     * @param filter A filter string
     */
    filter(filter: string): void
    /**
     * Get the language the DIDL-Lite fragment is in.
     */
    getLanguage(): string
    /**
     * Creates a string representation of the DIDL-Lite XML document.
     */
    getString(): string
    /**
     * Get the pointer to root node in XML document.
     */
    getXmlNode(): libxml2.Node

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    connect(sigName: "notify::language", callback: (...args: any[]) => void): number
    on(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (...args: any[]) => void): number
    on(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xml-node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xml-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DIDLLiteWriter extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    static name: string
    static $gtype: GObject.GType<DIDLLiteWriter>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    constructor(config?: DIDLLiteWriter_ConstructProps) 
    /**
     * Note: `language` should always be set to %NULL, DLNA does not support the
     * language parameter.
     * @constructor 
     * @param language The language the DIDL-Lite fragment is in, or %NULL
     */
    constructor(language: string | null) 
    /**
     * Note: `language` should always be set to %NULL, DLNA does not support the
     * language parameter.
     * @constructor 
     * @param language The language the DIDL-Lite fragment is in, or %NULL
     */
    static new(language: string | null): DIDLLiteWriter
    _init(config?: DIDLLiteWriter_ConstructProps): void
}

interface Feature_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * The name of this feature.
     */
    name?: string | null
    /**
     * The object IDs related to this feature.
     */
    objectIds?: string | null
    /**
     * The version of this feature.
     */
    version?: string | null
}

interface Feature {

    // Own properties of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * The name of this feature.
     */
    readonly name: string
    /**
     * The object IDs related to this feature.
     */
    readonly objectIds: string
    /**
     * The version of this feature.
     */
    readonly version: string

    // Own fields of GUPnPAV-1.0.GUPnPAV.Feature

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * Get the name of the `feature`.
     */
    getName(): string
    /**
     * Get the object IDs related to the `feature`.
     */
    getObjectIds(): string
    /**
     * Get the version of the `feature`.
     */
    getVersion(): string

    // Class property signals of GUPnPAV-1.0.GUPnPAV.Feature

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::object-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-ids", ...args: any[]): void
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

class Feature extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.Feature

    static name: string
    static $gtype: GObject.GType<Feature>

    // Constructors of GUPnPAV-1.0.GUPnPAV.Feature

    constructor(config?: Feature_ConstructProps) 
    _init(config?: Feature_ConstructProps): void
}

interface FeatureListParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface FeatureListParser {

    // Owm methods of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    /**
     * Parses `text` and returns the list of available features.
     * If an error occured `error` will be set.
     * @param text The feature list string to be parsed
     */
    parseText(text: string): Feature[] | null

    // Class property signals of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FeatureListParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    static name: string
    static $gtype: GObject.GType<FeatureListParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    constructor(config?: FeatureListParser_ConstructProps) 
    constructor() 
    static new(): FeatureListParser
    _init(config?: FeatureListParser_ConstructProps): void
}

interface LastChangeParser_ConstructProps extends GObject.Object_ConstructProps {
}

interface LastChangeParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    parentInstance: GObject.Object

    // Class property signals of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LastChangeParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    static name: string
    static $gtype: GObject.GType<LastChangeParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    constructor(config?: LastChangeParser_ConstructProps) 
    constructor() 
    static new(): LastChangeParser
    _init(config?: LastChangeParser_ConstructProps): void
}

interface MediaCollection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.MediaCollection

    /**
     * The author of this media collection.
     */
    author?: string | null
    /**
     * Block of data to parse a collection from. If data is set upon
     * construction it will override the other properties and create a
     * unmutable collection parsed from data.
     */
    data?: string | null
    /**
     * The title of this media collection.
     */
    title?: string | null
}

interface MediaCollection {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollection

    /**
     * The author of this media collection.
     */
    author: string
    /**
     * Block of data to parse a collection from. If data is set upon
     * construction it will override the other properties and create a
     * unmutable collection parsed from data.
     */
    readonly data: string
    /**
     * Whether this media collation is modifyable or not.
     */
    readonly mutable: boolean
    /**
     * The title of this media collection.
     */
    title: string

    // Own fields of GUPnPAV-1.0.GUPnPAV.MediaCollection

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.MediaCollection

    addItem(): DIDLLiteItem
    getAuthor(): string
    getItems(): DIDLLiteItem[]
    getMutable(): boolean
    getString(): string
    getTitle(): string | null
    /**
     * Set the author of the media collection
     * @param author New author of this media collection.
     */
    setAuthor(author: string): void
    /**
     * Set the title of a #GUPnPMediaCollection.
     * @param title New Title of this collection;
     */
    setTitle(title: string): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.MediaCollection

    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (...args: any[]) => void): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaCollection extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollection

    static name: string
    static $gtype: GObject.GType<MediaCollection>

    // Constructors of GUPnPAV-1.0.GUPnPAV.MediaCollection

    constructor(config?: MediaCollection_ConstructProps) 
    /**
     * Create a new writable media collection.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new writable media collection.
     * @constructor 
     */
    static new(): MediaCollection
    /**
     * Parse a new #GUPnPMediaCollection from a block of XML data.
     * @constructor 
     * @param data XML string.
     */
    static newFromString(data: string): MediaCollection
    _init(config?: MediaCollection_ConstructProps): void
}

interface ProtocolInfo_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    /**
     * The DLNA conversion flags.
     */
    dlnaConversion?: DLNAConversion | null
    /**
     * Various generic DLNA flags.
     */
    dlnaFlags?: DLNAFlags | null
    /**
     * The DLNA operation flags.
     */
    dlnaOperation?: DLNAOperation | null
    /**
     * The DLNA profile of this info.
     */
    dlnaProfile?: string | null
    /**
     * The MIME-type of this info.
     */
    mimeType?: string | null
    /**
     * The network this info is associated with.
     */
    network?: string | null
    /**
     * The allowed play speeds on this info in the form of array of
     * strings.
     */
    playSpeeds?: string[] | null
    /**
     * The protocol of this info.
     */
    protocol?: string | null
}

interface ProtocolInfo {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    /**
     * The DLNA conversion flags.
     */
    dlnaConversion: DLNAConversion
    /**
     * Various generic DLNA flags.
     */
    dlnaFlags: DLNAFlags
    /**
     * The DLNA operation flags.
     */
    dlnaOperation: DLNAOperation
    /**
     * The DLNA profile of this info.
     */
    dlnaProfile: string
    /**
     * The MIME-type of this info.
     */
    mimeType: string
    /**
     * The network this info is associated with.
     */
    network: string
    /**
     * The allowed play speeds on this info in the form of array of
     * strings.
     */
    playSpeeds: string[]
    /**
     * The protocol of this info.
     */
    protocol: string

    // Own fields of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    /**
     * Get the DLNA conversion flags.
     */
    getDlnaConversion(): DLNAConversion
    /**
     * Get the gereric DLNA flags.
     */
    getDlnaFlags(): DLNAFlags
    /**
     * Get the DLNA operation flags.
     */
    getDlnaOperation(): DLNAOperation
    /**
     * Get the DLNA profile of this info.
     */
    getDlnaProfile(): string | null
    /**
     * Get the MIME-type of this info.
     */
    getMimeType(): string | null
    /**
     * Get the network this info is associated with.
     */
    getNetwork(): string | null
    /**
     * Get the allowed play speeds on this info in the form of array of strings.
     */
    getPlaySpeeds(): string[] | null
    /**
     * Get the protocol of this info.
     */
    getProtocol(): string | null
    /**
     * Checks if the given protocolInfo string is compatible with `info`.
     * @param info2 The second #GUPnPProtocolInfo
     */
    isCompatible(info2: ProtocolInfo): boolean
    /**
     * Set the DLNA conversion flags.
     * @param conversion The bitwise OR of one or more DLNA conversion flags
     */
    setDlnaConversion(conversion: DLNAConversion): void
    /**
     * Set the gereric DLNA flags.
     * @param flags The bitwise OR of one or more generic DLNA flags
     */
    setDlnaFlags(flags: DLNAFlags): void
    /**
     * Set the DLNA operation flags.
     * @param operation The bitwise OR of one or more DLNA operation flags
     */
    setDlnaOperation(operation: DLNAOperation): void
    /**
     * Set the DLNA profile of this info.
     * @param profile The DLNA profile string
     */
    setDlnaProfile(profile: string): void
    /**
     * Set the MIME-type of this info.
     * @param mimeType The MIME-type string
     */
    setMimeType(mimeType: string): void
    /**
     * Set the network this info is associated with.
     * @param network The network string
     */
    setNetwork(network: string): void
    /**
     * Set the allowed play speeds on this info in the form of array of strings.
     * @param speeds The allowed play speeds
     */
    setPlaySpeeds(speeds: string): void
    /**
     * Set the protocol of this info.
     * @param protocol The protocol string
     */
    setProtocol(protocol: string): void
    /**
     * Provides the string representation of `info`.
     */
    toString(): string | null

    // Class property signals of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    connect(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-conversion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-conversion", ...args: any[]): void
    connect(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-flags", ...args: any[]): void
    connect(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-operation", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-profile", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-profile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::network", callback: (...args: any[]) => void): number
    on(sigName: "notify::network", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::play-speeds", callback: (...args: any[]) => void): number
    on(sigName: "notify::play-speeds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::play-speeds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::play-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::play-speeds", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ProtocolInfo extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    static name: string
    static $gtype: GObject.GType<ProtocolInfo>

    // Constructors of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    constructor(config?: ProtocolInfo_ConstructProps) 
    constructor() 
    static new(): ProtocolInfo
    /**
     * Parses the `protocol_info` string and creates a new #GUPnPProtocolInfo object
     * as a result.
     * @constructor 
     * @param protocolInfo The protocol info string
     */
    static newFromString(protocolInfo: string): ProtocolInfo
    _init(config?: ProtocolInfo_ConstructProps): void
}

interface SearchCriteriaParser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `begin-parens`
 */
interface SearchCriteriaParser_BeginParensSignalCallback {
    (): void
}

/**
 * Signal callback interface for `conjunction`
 */
interface SearchCriteriaParser_ConjunctionSignalCallback {
    (): void
}

/**
 * Signal callback interface for `disjunction`
 */
interface SearchCriteriaParser_DisjunctionSignalCallback {
    (): void
}

/**
 * Signal callback interface for `end-parens`
 */
interface SearchCriteriaParser_EndParensSignalCallback {
    (): void
}

/**
 * Signal callback interface for `expression`
 */
interface SearchCriteriaParser_ExpressionSignalCallback {
    (property: string, op: SearchCriteriaOp, value: string, error: object | null): boolean
}

interface SearchCriteriaParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    /**
     * Parses `text,` emitting the various defined signals on the way. If an
     * error occured `error` will be set.
     * @param text The search criteria string to be parsed
     */
    parseText(text: string): boolean

    // Own signals of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    connect(sigName: "begin-parens", callback: SearchCriteriaParser_BeginParensSignalCallback): number
    on(sigName: "begin-parens", callback: SearchCriteriaParser_BeginParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-parens", callback: SearchCriteriaParser_BeginParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-parens", callback: SearchCriteriaParser_BeginParensSignalCallback): NodeJS.EventEmitter
    emit(sigName: "begin-parens", ...args: any[]): void
    connect(sigName: "conjunction", callback: SearchCriteriaParser_ConjunctionSignalCallback): number
    on(sigName: "conjunction", callback: SearchCriteriaParser_ConjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conjunction", callback: SearchCriteriaParser_ConjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conjunction", callback: SearchCriteriaParser_ConjunctionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conjunction", ...args: any[]): void
    connect(sigName: "disjunction", callback: SearchCriteriaParser_DisjunctionSignalCallback): number
    on(sigName: "disjunction", callback: SearchCriteriaParser_DisjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disjunction", callback: SearchCriteriaParser_DisjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disjunction", callback: SearchCriteriaParser_DisjunctionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disjunction", ...args: any[]): void
    connect(sigName: "end-parens", callback: SearchCriteriaParser_EndParensSignalCallback): number
    on(sigName: "end-parens", callback: SearchCriteriaParser_EndParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-parens", callback: SearchCriteriaParser_EndParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-parens", callback: SearchCriteriaParser_EndParensSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-parens", ...args: any[]): void
    connect(sigName: "expression", callback: SearchCriteriaParser_ExpressionSignalCallback): number
    on(sigName: "expression", callback: SearchCriteriaParser_ExpressionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "expression", callback: SearchCriteriaParser_ExpressionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "expression", callback: SearchCriteriaParser_ExpressionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "expression", op: SearchCriteriaOp, value: string, error: object | null, ...args: any[]): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SearchCriteriaParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    static name: string
    static $gtype: GObject.GType<SearchCriteriaParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    constructor(config?: SearchCriteriaParser_ConstructProps) 
    constructor() 
    static new(): SearchCriteriaParser
    _init(config?: SearchCriteriaParser_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface CDSLastChangeEntry {

    // Owm methods of GUPnPAV-1.0.GUPnPAV.CDSLastChangeEntry

    /**
     * Get the class of the object in this change entry. This is only
     * valid if gupnp_cds_last_change_entry_get_event() returns
     * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
     */
    getClass(): string
    /**
     * Get the type of the last change entry as defined in
     * #GUPnPCDSLastChangeEvent.
     */
    getEvent(): CDSLastChangeEvent
    /**
     * Get the ID of the object in this change entry.
     */
    getObjectId(): string
    /**
     * Get the parent object id of the object in this change entry. This is only
     * valid if gupnp_cds_last_change_entry_get_event() returns
     * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
     */
    getParentId(): string
    /**
     * Get the update id of the last change entry.
     */
    getUpdateId(): number
    /**
     * Returns whether this entry is part of a subtree update.
     */
    isSubtreeUpdate(): boolean
    /**
     * Increase reference count of a #GUPnPCDSLastChangeEntry.
     */
    ref(): CDSLastChangeEntry
    /**
     * Decrease reference count of a #GUPnPCDSLastChangeEntry. If the reference
     * count drops to 0, `entry` is freed.
     */
    unref(): void
}

/**
 * Opaque struct which contains information about the event.
 * @record 
 */
class CDSLastChangeEntry {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeEntry

    static name: string
}

interface CDSLastChangeParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParserClass

    parentClass: GObject.ObjectClass
}

abstract class CDSLastChangeParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParserClass

    static name: string
}

interface DIDLLiteContainerClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainerClass

    parentClass: DIDLLiteObjectClass
}

abstract class DIDLLiteContainerClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainerClass

    static name: string
}

interface DIDLLiteContributorClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributorClass

    parentClass: GObject.ObjectClass
}

abstract class DIDLLiteContributorClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributorClass

    static name: string
}

interface DIDLLiteCreateClassClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClassClass

    parentClass: GObject.ObjectClass
}

abstract class DIDLLiteCreateClassClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClassClass

    static name: string
}

interface DIDLLiteDescriptorClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptorClass

    parentClass: GObject.ObjectClass
}

abstract class DIDLLiteDescriptorClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptorClass

    static name: string
}

interface DIDLLiteItemClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteItemClass

    parentClass: DIDLLiteObjectClass
}

abstract class DIDLLiteItemClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItemClass

    static name: string
}

interface DIDLLiteObjectClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectClass

    parentClass: GObject.ObjectClass
}

abstract class DIDLLiteObjectClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectClass

    static name: string
}

interface DIDLLiteObjectPrivate {
}

class DIDLLiteObjectPrivate {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectPrivate

    static name: string
}

interface DIDLLiteParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteParserClass

    parentClass: GObject.ObjectClass
    objectAvailable: (parser: DIDLLiteParser, object: DIDLLiteObject) => void
    itemAvailable: (parser: DIDLLiteParser, item: DIDLLiteItem) => void
    containerAvailable: (parser: DIDLLiteParser, container: DIDLLiteContainer) => void
}

abstract class DIDLLiteParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParserClass

    static name: string
}

interface DIDLLiteResourceClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteResourceClass

    parentClass: GObject.ObjectClass
}

abstract class DIDLLiteResourceClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResourceClass

    static name: string
}

interface DIDLLiteWriterClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriterClass

    parentClass: GObject.ObjectClass
}

abstract class DIDLLiteWriterClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriterClass

    static name: string
}

interface FeatureClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.FeatureClass

    parentClass: GObject.ObjectClass
}

abstract class FeatureClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureClass

    static name: string
}

interface FeatureListParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.FeatureListParserClass

    parentClass: GObject.ObjectClass
}

abstract class FeatureListParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParserClass

    static name: string
}

interface LastChangeParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.LastChangeParserClass

    parentClass: GObject.ObjectClass
}

abstract class LastChangeParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParserClass

    static name: string
}

interface MediaCollectionClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.MediaCollectionClass

    parentClass: GObject.ObjectClass
}

abstract class MediaCollectionClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollectionClass

    static name: string
}

interface ProtocolInfoClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.ProtocolInfoClass

    parentClass: GObject.ObjectClass
}

abstract class ProtocolInfoClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfoClass

    static name: string
}

interface SearchCriteriaParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParserClass

    parentClass: GObject.ObjectClass
    beginParens: (parser: SearchCriteriaParser) => void
    endParens: (parser: SearchCriteriaParser) => void
    conjunction: (parser: SearchCriteriaParser) => void
    disjunction: (parser: SearchCriteriaParser) => void
    expression: (parser: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string) => boolean
}

abstract class SearchCriteriaParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParserClass

    static name: string
}

}
export default GUPnPAV;