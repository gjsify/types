
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gupnpav-1.0-import.d.ts';
    
/**
 * GUPnPAV-1.0
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum CDSLastChangeEvent {
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
export enum DIDLLiteFragmentResult {
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
export enum ProtocolError {
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
export enum SearchCriteriaOp {
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
export enum SearchCriteriaParserError {
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
export enum DLNAConversion {
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
export enum DLNAFlags {
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
export enum DLNAOperation {
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
export enum OCMFlags {
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
export const DIDL_LITE_WRITER_NAMESPACE_DC: string
export const DIDL_LITE_WRITER_NAMESPACE_DLNA: string
export const DIDL_LITE_WRITER_NAMESPACE_PV: string
export const DIDL_LITE_WRITER_NAMESPACE_UPNP: string
/**
 * Get the representation of DateTime as an ISO8601 string.
 * 
 * DLNA requires a specific subset of ISO8601
 * @param dateTime DateTime to format
 * @param dateOnly 
 * @returns @date_time formatted as an ISO8601 string
 */
export function formatDateTimeForDidlLite(dateTime: GLib.DateTime, dateOnly: boolean): string | null
export function protocolErrorQuark(): GLib.Quark
export module CDSLastChangeParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CDSLastChangeParser {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    /**
     * Parse a LastChange XML document in the flavor defined by the
     * ContentDirectory:3 specification.
     * @param lastChange XML string to parse
     * @returns  List of #GUPnPCDSLastChangeEntry<!-- -->s
     */
    parse(lastChange: string): CDSLastChangeEntry[]

    // Class property signals of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

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

export class CDSLastChangeParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    constructor(config?: CDSLastChangeParser.ConstructorProperties) 
    /**
     * Create a new #GUPnPCDSLastChangeParser.
     * 
     * This parser is able to parse LastChange as defined in the
     * ContentDirectory:3 specification.
     * @constructor 
     * @returns A new instance of #GUPnPCDSLastChangeParser.
     */
    constructor() 
    /**
     * Create a new #GUPnPCDSLastChangeParser.
     * 
     * This parser is able to parse LastChange as defined in the
     * ContentDirectory:3 specification.
     * @constructor 
     * @returns A new instance of #GUPnPCDSLastChangeParser.
     */
    static new(): CDSLastChangeParser
    _init(config?: CDSLastChangeParser.ConstructorProperties): void
}

export module DIDLLiteContainer {

    // Constructor properties interface

    export interface ConstructorProperties extends DIDLLiteObject.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

        /**
         * The child count of this container.
         */
        child_count?: number | null
        /**
         * Update ID of this container.
         */
        container_update_id?: number | null
        /**
         * Whether this container is searchable.
         */
        searchable?: boolean | null
        /**
         * The number of bytes used by all child items of this container.
         */
        storage_used?: number | null
        /**
         * Total deleted child count of this container.
         */
        total_deleted_child_count?: number | null
    }

}

export interface DIDLLiteContainer {

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
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    parentInstance: any

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
     * @returns %TRUE if update ID is set, otherwise %FALSE
     */
    containerUpdateIdIsSet(): boolean
    /**
     * Get the child count of the `container`.  If the child count is unknown, -1 is
     * returned.
     * @returns The child count of the @container, or -1 if it is unknown.
     */
    getChildCount(): number
    /**
     * Get the container update ID of the `container`.
     * @returns The container update ID of the @container.
     */
    getContainerUpdateId(): number
    /**
     * Gets the list of create classes of the `container`.
     * @returns The list of create classes belonging to @container, or %NULL. #g_list_free the returned list after usage and #g_free each string in it.
     */
    getCreateClasses(): string[]
    /**
     * Gets the list of create classes of the `container`.
     * @returns The list of create classes belonging to @container, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    getCreateClassesFull(): DIDLLiteCreateClass[]
    /**
     * Gets the list of search classes of the `container`.
     * @returns The list of search classes belonging to @container, or %NULL. #g_list_free the returned list after usage and #g_free each string in it.
     */
    getSearchClasses(): string[]
    /**
     * Checks whether `container` is searchable.
     * @returns #TRUE if @container is searchable.
     */
    getSearchable(): boolean
    /**
     * Get the number of bytes used by all child items of the `container`.
     * If storage used is unknown, -1 is returned.
     * @returns The number of bytes used by all children of the @container, or -1 if it is unknown.
     */
    getStorageUsed(): number
    /**
     * Get the total deleted child count of the `container`.
     * @returns The total deleted child count of the @container.
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
     * @returns %TRUE if property is set, otherwise %FALSE
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class DIDLLiteContainer extends DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    constructor(config?: DIDLLiteContainer.ConstructorProperties) 
    _init(config?: DIDLLiteContainer.ConstructorProperties): void
}

export module DIDLLiteContributor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        xml_node?: any | null
    }

}

export interface DIDLLiteContributor {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    /**
     * The name of this contributor.
     */
    name: string | null
    /**
     * The role of this contributor.
     */
    role: string | null
    /**
     * The pointer to object node in XML document.
     */
    readonly xmlNode: any
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    /**
     * Get the name of the `contributor`.
     * @returns The name of the @contributor or %NULL.
     */
    getName(): string
    /**
     * Get the role of the `contributor`.
     * @returns The role of the @contributor, or %NULL.
     */
    getRole(): string
    /**
     * Get the pointer to relevant node in XML document.
     * @returns The pointer to relevant node in XML document.
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

export class DIDLLiteContributor extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    constructor(config?: DIDLLiteContributor.ConstructorProperties) 
    _init(config?: DIDLLiteContributor.ConstructorProperties): void
}

export module DIDLLiteCreateClass {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

        /**
         * The content of this create Class.
         */
        content?: string | null
        /**
         * The friendly name of this create Class.
         */
        friendly_name?: string | null
        /**
         * Whether this create Class can be derived.
         */
        include_derived?: boolean | null
        /**
         * The pointer to desc node in XML document.
         */
        xml_node?: any | null
    }

}

export interface DIDLLiteCreateClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * The content of this create Class.
     */
    content: string | null
    /**
     * The friendly name of this create Class.
     */
    friendlyName: string | null
    /**
     * Whether this create Class can be derived.
     */
    includeDerived: boolean
    /**
     * The pointer to desc node in XML document.
     */
    readonly xmlNode: any
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * Get the content of the `create_class`.
     * @returns The Content of the @create_class, or %NULL.
     */
    getContent(): string
    /**
     * Get the friendly name of the `create_class`.
     * @returns The FriendlyName of the @create_class, or %NULL.
     */
    getFriendlyName(): string
    /**
     * Checks whether `create_class` can be derived.
     * @returns #TRUE if @create_class can be derived.
     */
    getIncludeDerived(): boolean
    /**
     * Get the pointer to relevant node in XML document.
     * @returns The pointer to relevant node in XML document.
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

export class DIDLLiteCreateClass extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    constructor(config?: DIDLLiteCreateClass.ConstructorProperties) 
    _init(config?: DIDLLiteCreateClass.ConstructorProperties): void
}

export module DIDLLiteDescriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        metadata_type?: string | null
        /**
         * The name space associated with this descriptor.
         */
        name_space?: string | null
        /**
         * The pointer to desc node in XML document.
         */
        xml_node?: any | null
    }

}

export interface DIDLLiteDescriptor {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    /**
     * The content of this descriptor.
     */
    content: string | null
    /**
     * The ID of this descriptor.
     */
    id: string | null
    /**
     * The type of this descriptor.
     */
    metadataType: string | null
    /**
     * The name space associated with this descriptor.
     */
    nameSpace: string | null
    /**
     * The pointer to desc node in XML document.
     */
    readonly xmlNode: any
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    /**
     * Get the content of the `descriptor`.
     * @returns The content of the @descriptor or %NULL.
     */
    getContent(): string
    /**
     * Get the ID of the `descriptor`.
     * @returns The ID string or %NULL.
     */
    getId(): string
    /**
     * Get the metadata type of the `descriptor`.
     * @returns The type as string or %NULL.
     */
    getMetadataType(): string
    /**
     * Get the name space associated with the `descriptor`.
     * @returns The name space or %NULL.
     */
    getNameSpace(): string
    /**
     * Get the pointer to desc node in XML document.
     * @returns The pointer to desc node in XML document.
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

export class DIDLLiteDescriptor extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    constructor(config?: DIDLLiteDescriptor.ConstructorProperties) 
    constructor() 
    static new(): DIDLLiteDescriptor
    _init(config?: DIDLLiteDescriptor.ConstructorProperties): void
}

export module DIDLLiteItem {

    // Constructor properties interface

    export interface ConstructorProperties extends DIDLLiteObject.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

        /**
         * The lifetime in seconds of this DIDLLite item in a media collection.
         */
        lifetime?: number | null
        /**
         * The ref ID of this item.
         */
        ref_id?: string | null
    }

}

export interface DIDLLiteItem {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    /**
     * The lifetime in seconds of this DIDLLite item in a media collection.
     */
    lifetime: number
    /**
     * The ref ID of this item.
     */
    refId: string | null
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    parentInstance: any

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    getLifetime(): number
    /**
     * Get the ref ID of the `item`.
     * @returns The ref ID of the @item, or %NULL.
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class DIDLLiteItem extends DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    constructor(config?: DIDLLiteItem.ConstructorProperties) 
    _init(config?: DIDLLiteItem.ConstructorProperties): void
}

export module DIDLLiteObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

        /**
         * The album of this object.
         */
        album?: string | null
        /**
         * The URI to album art of this object.
         */
        album_art?: string | null
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
        dc_namespace?: any | null
        /**
         * The description of this object.
         */
        description?: string | null
        /**
         * The 'dlna:dlnaManaged' attribute.
         */
        dlna_managed?: OCMFlags | null
        /**
         * Pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         */
        dlna_namespace?: any | null
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
        parent_id?: string | null
        /**
         * Pointer to the PV metadata namespace registered with the XML
         * document containing this object.
         */
        pv_namespace?: any | null
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
        track_number?: number | null
        /**
         * Update ID of this object.
         */
        update_id?: number | null
        /**
         * The UPnP class of this object.
         */
        upnp_class?: string | null
        /**
         * Pointer to the UPnP namespace registered with the XML document
         * containing this object.
         */
        upnp_namespace?: any | null
        /**
         * The write status of this object.
         */
        write_status?: string | null
        /**
         * The pointer to object node in XML document.
         */
        xml_node?: any | null
    }

}

export interface DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * The album of this object.
     */
    album: string | null
    /**
     * The URI to album art of this object.
     */
    albumArt: string | null
    /**
     * The artist of this object.
     */
    artist: string | null
    /**
     * The author of this object.
     */
    author: string | null
    /**
     * The creator of this object.
     */
    creator: string | null
    /**
     * The date of this object.
     */
    date: string | null
    /**
     * Pointer to the DublinCore namespace registered with the XML document
     * containing this object.
     */
    readonly dcNamespace: any
    /**
     * The description of this object.
     */
    description: string | null
    /**
     * The 'dlna:dlnaManaged' attribute.
     */
    dlnaManaged: OCMFlags
    /**
     * Pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    readonly dlnaNamespace: any
    /**
     * The genre of this object.
     */
    genre: string | null
    /**
     * The ID of this object.
     */
    id: string | null
    /**
     * The ID of the parent container of this object.
     */
    parentId: string | null
    /**
     * Pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     */
    readonly pvNamespace: any
    /**
     * Whether this object is restricted.
     */
    restricted: boolean
    /**
     * The title of this object.
     */
    title: string | null
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
    upnpClass: string | null
    /**
     * Pointer to the UPnP namespace registered with the XML document
     * containing this object.
     */
    readonly upnpNamespace: any
    /**
     * The write status of this object.
     */
    writeStatus: string | null
    /**
     * The pointer to object node in XML document.
     */
    readonly xmlNode: any
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * Add a new Artist node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
     */
    addArtist(): DIDLLiteContributor
    /**
     * Add a new author node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
     */
    addAuthor(): DIDLLiteContributor
    /**
     * Add a new creator node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
     */
    addCreator(): DIDLLiteContributor
    /**
     * Creates a new descriptor, attaches it to `object` and returns it.
     * @returns A new #GUPnPDIDLLiteDescriptor object. Unref after usage.
     */
    addDescriptor(): DIDLLiteDescriptor
    /**
     * Creates a new resource, attaches it to `object` and returns it.
     * @returns A new #GUPnPDIDLLiteResource object. Unref after usage.
     */
    addResource(): DIDLLiteResource
    /**
     * Updates object by applying `new_fragments` in places of
     * `current_fragments`. For `current_size` and `new_size` -1 can be
     * passed when respectively `current_fragments` and `new_fragments` are
     * NULL terminated.
     * @param currentFragments XML fragments of `object`.
     * @param newFragments Substitutes for `current_fragments`.
     * @returns Result of operation.
     */
    applyFragments(currentFragments: string[], newFragments: string[]): DIDLLiteFragmentResult
    /**
     * Get the album of the `object`.
     * @returns The album of the @object, or %NULL.
     */
    getAlbum(): string
    /**
     * Get the URI to album art of the `object`.
     * @returns The URI to album art of the @object, or %NULL.
     */
    getAlbumArt(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object album.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    getAlbumXmlString(): string | null
    /**
     * Get the artist of the `object`. If role is not %NULL, it is set to the role
     * of the artist if available.
     * @returns The artist of the @object, or %NULL.
     */
    getArtist(): string
    /**
     * Get the artists of the `object`.
     * @returns The list of artists belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    getArtists(): DIDLLiteContributor[]
    /**
     * Creates a string representation of the DIDL-Lite XML fragments related to the
     * object artists.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    getArtistsXmlString(): string | null
    /**
     * Get the author of the `object`.
     * @returns The author of the @object, or %NULL.
     */
    getAuthor(): string
    /**
     * Get the authors of the `object`.
     * @returns The list of authors belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
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
     * @returns The resource belonging to @object that is comaptible with any of the protocols specified in @sink_protocol_info, or %NULL. Unref after usage.
     */
    getCompatResource(sinkProtocolInfo: string, lenient: boolean): DIDLLiteResource
    /**
     * Get the creator of the `object`.
     * @returns The creator of the @object, or %NULL.
     */
    getCreator(): string
    /**
     * Get the creators of the `object`.
     * @returns The list of creators belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    getCreators(): DIDLLiteContributor[]
    /**
     * Get the date of the `object`.
     * @returns The date of the @object, or %NULL.
     */
    getDate(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object date.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    getDateXmlString(): string | null
    /**
     * Get the pointer to the DublinCore namespace registered with the XML document
     * containing this object.
     * @returns The pointer to DublinCore namespace in XML document.
     */
    getDcNamespace(): libxml2.NsPtr
    /**
     * Get the description of the `object`.
     * @returns The description of the @object, or %NULL.
     */
    getDescription(): string
    /**
     * Get the descriptors of the `object`.
     * @returns The list of descriptors belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    getDescriptors(): DIDLLiteDescriptor[]
    /**
     * Get the 'dlna:dlnaManaged' attribute of the `object`.
     * @returns The 'dlna:dlnaManaged' attribute of the @object.
     */
    getDlnaManaged(): OCMFlags
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to DLNA namespace in XML document.
     */
    getDlnaNamespace(): libxml2.NsPtr
    /**
     * Get the genre of the `object`.
     * @returns The genre of the @object, or %NULL.
     */
    getGenre(): string
    /**
     * Get the ID of the `object`.
     * @returns The ID of the @object, or %NULL.
     */
    getId(): string
    /**
     * Get the ID of the parent of the `object`.
     * @returns The ID of parent of the @object, or %NULL.
     */
    getParentId(): string
    /**
     * Use this function to retreive property nodes by name.
     * @param name name of the properties
     * @returns The list of property nodes by the name @property_name belonging to @object, or %NULL. #g_list_free the returned list after usage but do not modify the contents.
     */
    getProperties(name: string): libxml2.Node[]
    /**
     * Get the pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to PV namespace in XML document.
     */
    getPvNamespace(): libxml2.NsPtr
    /**
     * Use this function to retreive resources from the `object`.
     * @returns The list               of resources belonging to  @object, or %NULL. #g_list_free the               returned list after usage and unref each resource in it.
     */
    getResources(): DIDLLiteResource[]
    /**
     * Whether the `object` is restricted or not.
     * @returns #TRUE if @object is restricted.
     */
    getRestricted(): boolean
    /**
     * Get the title of the `object`.
     * @returns The title of the @object, or %NULL.
     */
    getTitle(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object title.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    getTitleXmlString(): string | null
    /**
     * Get the original track number of the `object`.
     * @returns The original track number of the @object, or -1.
     */
    getTrackNumber(): number
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object track number.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    getTrackNumberXmlString(): string | null
    /**
     * Get the update ID of the `object`.
     * @returns The update ID of the @object.
     */
    getUpdateId(): number
    /**
     * Get the UPnP class of the `object`.
     * @returns The class of @object, or %NULL.
     */
    getUpnpClass(): string
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object UPnP class.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    getUpnpClassXmlString(): string | null
    /**
     * Get the pointer to the UPnP namespace registered with the XML document.
     * @returns The pointer to UPnP namespace in XML document.
     */
    getUpnpNamespace(): libxml2.NsPtr
    /**
     * Get the write status of the `object`.
     * @returns The write status of the @object, or %NULL.
     */
    getWriteStatus(): string
    /**
     * Get the pointer to object node in XML document.
     * @returns The pointer to object node in XML document.
     */
    getXmlNode(): libxml2.Node
    /**
     * Get the representation of this object as an XML string.
     * @returns XML representation of this object as string.
     */
    getXmlString(): string | null
    /**
     * Whehter the restricted attribute exists on `object`
     * @returns #TRUE if restricted exists, #FALSE otherwise.
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
     * @returns %TRUE if update ID is set, otherwise %FALSE
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

export class DIDLLiteObject extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    constructor(config?: DIDLLiteObject.ConstructorProperties) 
    _init(config?: DIDLLiteObject.ConstructorProperties): void
}

export module DIDLLiteParser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `container-available`
     */
    export interface ContainerAvailableSignalCallback {
        (container: DIDLLiteContainer): void
    }

    /**
     * Signal callback interface for `item-available`
     */
    export interface ItemAvailableSignalCallback {
        (item: DIDLLiteItem): void
    }

    /**
     * Signal callback interface for `object-available`
     */
    export interface ObjectAvailableSignalCallback {
        (object: DIDLLiteObject): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DIDLLiteParser {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    /**
     * Parses DIDL-Lite XML string `didl,` emitting the ::object-available,
     * ::item-available and ::container-available signals appropriately during the
     * process.
     * @param didl The DIDL-Lite XML string to be parsed
     * @returns TRUE on success.
     */
    parseDidl(didl: string): boolean

    // Own virtual methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    containerAvailable(container: DIDLLiteContainer): void
    itemAvailable(item: DIDLLiteItem): void
    objectAvailable(object: DIDLLiteObject): void

    // Own signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    connect(sigName: "container-available", callback: DIDLLiteParser.ContainerAvailableSignalCallback): number
    on(sigName: "container-available", callback: DIDLLiteParser.ContainerAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "container-available", callback: DIDLLiteParser.ContainerAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "container-available", callback: DIDLLiteParser.ContainerAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "container-available", ...args: any[]): void
    connect(sigName: "item-available", callback: DIDLLiteParser.ItemAvailableSignalCallback): number
    on(sigName: "item-available", callback: DIDLLiteParser.ItemAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-available", callback: DIDLLiteParser.ItemAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-available", callback: DIDLLiteParser.ItemAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "item-available", ...args: any[]): void
    connect(sigName: "object-available", callback: DIDLLiteParser.ObjectAvailableSignalCallback): number
    on(sigName: "object-available", callback: DIDLLiteParser.ObjectAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-available", callback: DIDLLiteParser.ObjectAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-available", callback: DIDLLiteParser.ObjectAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "object-available", ...args: any[]): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

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

export class DIDLLiteParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    constructor(config?: DIDLLiteParser.ConstructorProperties) 
    constructor() 
    static new(): DIDLLiteParser
    _init(config?: DIDLLiteParser.ConstructorProperties): void
}

export module DIDLLiteResource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

        /**
         * The number of audio channels in this resource.
         */
        audio_channels?: number | null
        /**
         * The bitrate of this resource.
         */
        bitrate?: number | null
        /**
         * The sample size of this resource.
         */
        bits_per_sample?: number | null
        cleartext_size?: number | null
        /**
         * The color-depth of this image/video resource.
         */
        color_depth?: number | null
        /**
         * Pointer to the DLNA metadata namespace registered with the
         * resource object.
         */
        dlna_namespace?: any | null
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
        import_uri?: string | null
        /**
         * The protection system used for this resource.
         */
        protection?: string | null
        /**
         * The protocol info associated with this resource.
         */
        protocol_info?: ProtocolInfo | null
        /**
         * Pointer to the PV metadata namespace registered with the
         * resource object.
         */
        pv_namespace?: any | null
        /**
         * The sample frequency of this resource.
         */
        sample_freq?: number | null
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
        subtitle_file_type?: string | null
        /**
         * Uri to external subtitle file.
         */
        subtitle_file_uri?: string | null
        /**
         * Number of tracks in a DIDL_S or DIDL_V resource.
         */
        track_total?: number | null
        update_count?: number | null
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
        xml_node?: any | null
    }

}

export interface DIDLLiteResource {

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
    readonly dlnaNamespace: any
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
    importUri: string | null
    /**
     * The protection system used for this resource.
     */
    protection: string | null
    /**
     * The protocol info associated with this resource.
     */
    protocolInfo: ProtocolInfo
    /**
     * Pointer to the PV metadata namespace registered with the
     * resource object.
     */
    readonly pvNamespace: any
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
    subtitleFileType: string | null
    /**
     * Uri to external subtitle file.
     */
    subtitleFileUri: string | null
    /**
     * Number of tracks in a DIDL_S or DIDL_V resource.
     */
    trackTotal: number
    updateCount: number
    /**
     * The URI associated with this resource.
     */
    uri: string | null
    /**
     * The width of this image/video resource.
     */
    width: number
    /**
     * The pointer to res node in XML document.
     */
    readonly xmlNode: any
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    /**
     * Get the number of audio channels in the `resource`.
     * @returns The number of audio channels in the @resource or -1.
     */
    getAudioChannels(): number
    /**
     * Get the bitrate (in bytes per second) of the `resource`.
     * @returns The bitrate (in bytes per second) of the @resource or -1.
     */
    getBitrate(): number
    /**
     * Get the sample size of the `resource`.
     * @returns The number of bits per sample of the @resource or -1.
     */
    getBitsPerSample(): number
    /**
     * Get the size (in bytes) of the `resource`.
     * @returns The size (in bytes) of the @resource or -1.
     */
    getCleartextSize(): number
    /**
     * Get the color-depth of this image/video resource.
     * @returns The color depth of the @resource or -1.
     */
    getColorDepth(): number
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to DLNA namespace in XML document.
     */
    getDlnaNamespace(): libxml2.NsPtr
    /**
     * Get the duration (in seconds) of the `resource`.
     * @returns The duration (in seconds) of the @resource or -1.
     */
    getDuration(): number
    /**
     * Get the height of this image/video resource.
     * @returns The height of the @resource or -1.
     */
    getHeight(): number
    /**
     * Get the import URI associated with the `resource`.
     * @returns The import URI or %NULL.
     */
    getImportUri(): string
    /**
     * Get the protection system used by the `resource`.
     * @returns The protection system in use by the @resource or %NULL.
     */
    getProtection(): string
    /**
     * Get the protocol info associated with the `resource`.
     * @returns The protocol info associated with the @resource or %NULL. The returned object must not be unrefed.
     */
    getProtocolInfo(): ProtocolInfo | null
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to DLNA namespace in XML document.
     */
    getPvNamespace(): libxml2.NsPtr
    /**
     * Get the sample frequency of the `resource`.
     * @returns The sample frequency of the @resource or -1.
     */
    getSampleFreq(): number
    /**
     * Get the size (in bytes) of the `resource`.
     * @returns The size (in bytes) of the @resource or -1.
     */
    getSize(): number
    /**
     * Get the size (in bytes) of the `resource`.
     * @returns The size (in bytes) of the @resource or -1.
     */
    getSize64(): number
    getSubtitleFileType(): string
    getSubtitleFileUri(): string
    /**
     * Get the total track count of this resource.
     * @returns The total track count of the @resource.
     */
    getTrackTotal(): number
    /**
     * Get the update count of this resource.
     * @returns The update count of the @resource.
     */
    getUpdateCount(): number
    /**
     * Get the URI associated with the `resource`.
     * @returns The of URI the @resource or %NULL.
     */
    getUri(): string | null
    /**
     * Get the width of this image/video resource.
     * @returns The width of this image/video resource or -1.
     */
    getWidth(): number
    /**
     * Get the pointer to res node in XML document.
     * @returns The pointer to res node in XML document.
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
     * @returns %TRUE if set, otherwise %FALSE.
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
     * @returns %TRUE if set, otherwise %FALSE.
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

export class DIDLLiteResource extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    constructor(config?: DIDLLiteResource.ConstructorProperties) 
    _init(config?: DIDLLiteResource.ConstructorProperties): void
}

export module DIDLLiteWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

        /**
         * The language the DIDL-Lite fragment is in.
         */
        language?: string | null
    }

}

export interface DIDLLiteWriter {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * The language the DIDL-Lite fragment is in.
     */
    readonly language: string | null
    /**
     * The pointer to root node in XML document.
     */
    readonly xmlNode: any
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * Creates a new container, attaches it to `writer` and returns it.
     * @returns A new #GUPnPDIDLLiteContainer object. Unref after usage.
     */
    addContainer(): DIDLLiteContainer
    /**
     * Creates a new descriptor, attaches it to `object` and returns it.
     * @returns A new #GUPnPDIDLLiteDescriptor object. Unref after usage.
     */
    addDescriptor(): DIDLLiteDescriptor
    /**
     * Creates a new item, attaches it to `writer` and returns it.
     * @returns A new #GUPnPDIDLLiteItem object. Unref after usage.
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
     * @returns The language of the @writer, or %NULL.
     */
    getLanguage(): string
    /**
     * Creates a string representation of the DIDL-Lite XML document.
     * @returns The DIDL-Lite XML string, or %NULL. #g_free after usage.
     */
    getString(): string | null
    /**
     * Get the pointer to root node in XML document.
     * @returns The pointer to root node in XML document.
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

export class DIDLLiteWriter extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    constructor(config?: DIDLLiteWriter.ConstructorProperties) 
    /**
     * Note: `language` should always be set to %NULL, DLNA does not support the
     * language parameter.
     * @constructor 
     * @param language The language the DIDL-Lite fragment is in, or %NULL
     * @returns A new #GUPnPDIDLLiteWriter object.
     */
    constructor(language: string | null) 
    /**
     * Note: `language` should always be set to %NULL, DLNA does not support the
     * language parameter.
     * @constructor 
     * @param language The language the DIDL-Lite fragment is in, or %NULL
     * @returns A new #GUPnPDIDLLiteWriter object.
     */
    static new(language: string | null): DIDLLiteWriter
    _init(config?: DIDLLiteWriter.ConstructorProperties): void
}

export module Feature {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.Feature

        /**
         * The name of this feature.
         */
        name?: string | null
        /**
         * The object IDs related to this feature.
         */
        object_ids?: string | null
        /**
         * The version of this feature.
         */
        version?: string | null
    }

}

export interface Feature {

    // Own properties of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * The name of this feature.
     */
    readonly name: string | null
    /**
     * The object IDs related to this feature.
     */
    readonly objectIds: string | null
    /**
     * The version of this feature.
     */
    readonly version: string | null
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.Feature

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * Get the name of the `feature`.
     * @returns The name of the @feature.
     */
    getName(): string
    /**
     * Get the object IDs related to the `feature`.
     * @returns The object IDs related to the @feature.
     */
    getObjectIds(): string
    /**
     * Get the version of the `feature`.
     * @returns The version of the @feature.
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

export class Feature extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.Feature

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.Feature

    constructor(config?: Feature.ConstructorProperties) 
    _init(config?: Feature.ConstructorProperties): void
}

export module FeatureListParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FeatureListParser {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    __gtype__: number

    // Owm methods of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    /**
     * Parses `text` and returns the list of available features.
     * If an error occured `error` will be set.
     * @param text The feature list string to be parsed
     * @returns The list of features or %NULL if an error occured.
     */
    parseText(text: string): Feature[] | null

    // Class property signals of GUPnPAV-1.0.GUPnPAV.FeatureListParser

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

export class FeatureListParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    constructor(config?: FeatureListParser.ConstructorProperties) 
    constructor() 
    static new(): FeatureListParser
    _init(config?: FeatureListParser.ConstructorProperties): void
}

export module LastChangeParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LastChangeParser {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    parentInstance: GObject.Object

    // Class property signals of GUPnPAV-1.0.GUPnPAV.LastChangeParser

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

export class LastChangeParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    constructor(config?: LastChangeParser.ConstructorProperties) 
    constructor() 
    static new(): LastChangeParser
    _init(config?: LastChangeParser.ConstructorProperties): void
}

export module MediaCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface MediaCollection {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollection

    /**
     * The author of this media collection.
     */
    author: string | null
    /**
     * Block of data to parse a collection from. If data is set upon
     * construction it will override the other properties and create a
     * unmutable collection parsed from data.
     */
    readonly data: string | null
    /**
     * Whether this media collation is modifyable or not.
     */
    readonly mutable: boolean
    /**
     * The title of this media collection.
     */
    title: string | null
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.MediaCollection

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.MediaCollection

    addItem(): DIDLLiteItem
    getAuthor(): string
    getItems(): DIDLLiteItem[]
    getMutable(): boolean
    getString(): string | null
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

export class MediaCollection extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollection

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.MediaCollection

    constructor(config?: MediaCollection.ConstructorProperties) 
    /**
     * Create a new writable media collection.
     * @constructor 
     * @returns A new #GUPnPMediaCollection.
     */
    constructor() 
    /**
     * Create a new writable media collection.
     * @constructor 
     * @returns A new #GUPnPMediaCollection.
     */
    static new(): MediaCollection
    /**
     * Parse a new #GUPnPMediaCollection from a block of XML data.
     * @constructor 
     * @param data XML string.
     * @returns A new #GUPnPMediaCollection.
     */
    static newFromString(data: string): MediaCollection
    _init(config?: MediaCollection.ConstructorProperties): void
}

export module ProtocolInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

        /**
         * The DLNA conversion flags.
         */
        dlna_conversion?: DLNAConversion | null
        /**
         * Various generic DLNA flags.
         */
        dlna_flags?: DLNAFlags | null
        /**
         * The DLNA operation flags.
         */
        dlna_operation?: DLNAOperation | null
        /**
         * The DLNA profile of this info.
         */
        dlna_profile?: string | null
        /**
         * The MIME-type of this info.
         */
        mime_type?: string | null
        /**
         * The network this info is associated with.
         */
        network?: string | null
        /**
         * The allowed play speeds on this info in the form of array of
         * strings.
         */
        play_speeds?: string[] | null
        /**
         * The protocol of this info.
         */
        protocol?: string | null
    }

}

export interface ProtocolInfo {

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
    dlnaProfile: string | null
    /**
     * The MIME-type of this info.
     */
    mimeType: string | null
    /**
     * The network this info is associated with.
     */
    network: string | null
    /**
     * The allowed play speeds on this info in the form of array of
     * strings.
     */
    playSpeeds: string[]
    /**
     * The protocol of this info.
     */
    protocol: string | null
    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    /**
     * Get the DLNA conversion flags.
     * @returns The DLNA conversion flags.
     */
    getDlnaConversion(): DLNAConversion
    /**
     * Get the gereric DLNA flags.
     * @returns The generic DLNA flags.
     */
    getDlnaFlags(): DLNAFlags
    /**
     * Get the DLNA operation flags.
     * @returns The DLNA operation flags.
     */
    getDlnaOperation(): DLNAOperation
    /**
     * Get the DLNA profile of this info.
     * @returns The DLNA profile of this info or %NULL. This string should not be freed.
     */
    getDlnaProfile(): string | null
    /**
     * Get the MIME-type of this info.
     * @returns The MIME-type of this info or %NULL. This string should not be freed.
     */
    getMimeType(): string | null
    /**
     * Get the network this info is associated with.
     * @returns The network string or %NULL. This string should not be freed.
     */
    getNetwork(): string | null
    /**
     * Get the allowed play speeds on this info in the form of array of strings.
     * @returns The allowed play speeds as array of strings or %NULL. This return array and it's content must not be modified or freed.
     */
    getPlaySpeeds(): string[] | null
    /**
     * Get the protocol of this info.
     * @returns The protocol of this info or %NULL. This string should not be freed.
     */
    getProtocol(): string | null
    /**
     * Checks if the given protocolInfo string is compatible with `info`.
     * @param info2 The second #GUPnPProtocolInfo
     * @returns #TRUE if @protocol_info is compatible with @info, otherwise #FALSE.
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
     * @returns String representation of @info. #g_free after usage.
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

export class ProtocolInfo extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    constructor(config?: ProtocolInfo.ConstructorProperties) 
    constructor() 
    static new(): ProtocolInfo
    /**
     * Parses the `protocol_info` string and creates a new #GUPnPProtocolInfo object
     * as a result.
     * @constructor 
     * @param protocolInfo The protocol info string
     * @returns A new #GUPnPProtocolInfo object. Unref after usage.
     */
    static newFromString(protocolInfo: string): ProtocolInfo
    _init(config?: ProtocolInfo.ConstructorProperties): void
}

export module SearchCriteriaParser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-parens`
     */
    export interface BeginParensSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `conjunction`
     */
    export interface ConjunctionSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `disjunction`
     */
    export interface DisjunctionSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `end-parens`
     */
    export interface EndParensSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `expression`
     */
    export interface ExpressionSignalCallback {
        (property: string | null, op: SearchCriteriaOp, value: string | null, error: any | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SearchCriteriaParser {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    __gtype__: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    parentInstance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    /**
     * Parses `text,` emitting the various defined signals on the way. If an
     * error occured `error` will be set.
     * @param text The search criteria string to be parsed
     * @returns TRUE on success.
     */
    parseText(text: string): boolean

    // Own virtual methods of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    beginParens(): void
    conjunction(): void
    disjunction(): void
    endParens(): void
    expression(property: string, op: SearchCriteriaOp, value: string): boolean

    // Own signals of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    connect(sigName: "begin-parens", callback: SearchCriteriaParser.BeginParensSignalCallback): number
    on(sigName: "begin-parens", callback: SearchCriteriaParser.BeginParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-parens", callback: SearchCriteriaParser.BeginParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-parens", callback: SearchCriteriaParser.BeginParensSignalCallback): NodeJS.EventEmitter
    emit(sigName: "begin-parens", ...args: any[]): void
    connect(sigName: "conjunction", callback: SearchCriteriaParser.ConjunctionSignalCallback): number
    on(sigName: "conjunction", callback: SearchCriteriaParser.ConjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conjunction", callback: SearchCriteriaParser.ConjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conjunction", callback: SearchCriteriaParser.ConjunctionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conjunction", ...args: any[]): void
    connect(sigName: "disjunction", callback: SearchCriteriaParser.DisjunctionSignalCallback): number
    on(sigName: "disjunction", callback: SearchCriteriaParser.DisjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disjunction", callback: SearchCriteriaParser.DisjunctionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disjunction", callback: SearchCriteriaParser.DisjunctionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disjunction", ...args: any[]): void
    connect(sigName: "end-parens", callback: SearchCriteriaParser.EndParensSignalCallback): number
    on(sigName: "end-parens", callback: SearchCriteriaParser.EndParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-parens", callback: SearchCriteriaParser.EndParensSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-parens", callback: SearchCriteriaParser.EndParensSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-parens", ...args: any[]): void
    connect(sigName: "expression", callback: SearchCriteriaParser.ExpressionSignalCallback): number
    on(sigName: "expression", callback: SearchCriteriaParser.ExpressionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "expression", callback: SearchCriteriaParser.ExpressionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "expression", callback: SearchCriteriaParser.ExpressionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "expression", op: SearchCriteriaOp, value: string | null, error: any | null, ...args: any[]): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

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

export class SearchCriteriaParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    static name: string

    // Constructors of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    constructor(config?: SearchCriteriaParser.ConstructorProperties) 
    constructor() 
    static new(): SearchCriteriaParser
    _init(config?: SearchCriteriaParser.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export interface CDSLastChangeEntry {

    // Owm methods of GUPnPAV-1.0.GUPnPAV.CDSLastChangeEntry

    /**
     * Get the class of the object in this change entry. This is only
     * valid if gupnp_cds_last_change_entry_get_event() returns
     * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
     * @returns The upnp class of the object of this entry.
     */
    getClass(): string
    /**
     * Get the type of the last change entry as defined in
     * #GUPnPCDSLastChangeEvent.
     * @returns An event from the #GUPnPCDSLastChangeEvent or %GUPNP_CDS_LAST_CHANGE_EVENT_INVALID if the entry is not valid.
     */
    getEvent(): CDSLastChangeEvent
    /**
     * Get the ID of the object in this change entry.
     * @returns The id of the object of this entry.
     */
    getObjectId(): string
    /**
     * Get the parent object id of the object in this change entry. This is only
     * valid if gupnp_cds_last_change_entry_get_event() returns
     * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
     * @returns The id of the object's parent of this entry.
     */
    getParentId(): string
    /**
     * Get the update id of the last change entry.
     * @returns update id of the entry or 0 if the entry is not valid.
     */
    getUpdateId(): number
    /**
     * Returns whether this entry is part of a subtree update.
     * @returns %TRUE, if the entry is part of a subtree update, %FALSE otherwise.
     */
    isSubtreeUpdate(): boolean
    /**
     * Increase reference count of a #GUPnPCDSLastChangeEntry.
     * @returns The object passed in @entry.
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
export class CDSLastChangeEntry {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeEntry

    static name: string
}

export interface CDSLastChangeParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParserClass

    parentClass: GObject.ObjectClass
}

export abstract class CDSLastChangeParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParserClass

    static name: string
}

export interface DIDLLiteContainerClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainerClass

    parentClass: DIDLLiteObjectClass
}

export abstract class DIDLLiteContainerClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainerClass

    static name: string
}

export interface DIDLLiteContributorClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributorClass

    parentClass: GObject.ObjectClass
}

export abstract class DIDLLiteContributorClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributorClass

    static name: string
}

export interface DIDLLiteCreateClassClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClassClass

    parentClass: GObject.ObjectClass
}

export abstract class DIDLLiteCreateClassClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClassClass

    static name: string
}

export interface DIDLLiteDescriptorClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptorClass

    parentClass: GObject.ObjectClass
}

export abstract class DIDLLiteDescriptorClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptorClass

    static name: string
}

export interface DIDLLiteItemClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteItemClass

    parentClass: DIDLLiteObjectClass
}

export abstract class DIDLLiteItemClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItemClass

    static name: string
}

export interface DIDLLiteObjectClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectClass

    parentClass: GObject.ObjectClass
}

export abstract class DIDLLiteObjectClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectClass

    static name: string
}

export interface DIDLLiteObjectPrivate {
}

export class DIDLLiteObjectPrivate {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectPrivate

    static name: string
}

export interface DIDLLiteParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteParserClass

    parentClass: GObject.ObjectClass
    objectAvailable: (parser: DIDLLiteParser, object: DIDLLiteObject) => void
    itemAvailable: (parser: DIDLLiteParser, item: DIDLLiteItem) => void
    containerAvailable: (parser: DIDLLiteParser, container: DIDLLiteContainer) => void
}

export abstract class DIDLLiteParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParserClass

    static name: string
}

export interface DIDLLiteResourceClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteResourceClass

    parentClass: GObject.ObjectClass
}

export abstract class DIDLLiteResourceClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResourceClass

    static name: string
}

export interface DIDLLiteWriterClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriterClass

    parentClass: GObject.ObjectClass
}

export abstract class DIDLLiteWriterClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriterClass

    static name: string
}

export interface FeatureClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.FeatureClass

    parentClass: GObject.ObjectClass
}

export abstract class FeatureClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureClass

    static name: string
}

export interface FeatureListParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.FeatureListParserClass

    parentClass: GObject.ObjectClass
}

export abstract class FeatureListParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParserClass

    static name: string
}

export interface LastChangeParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.LastChangeParserClass

    parentClass: GObject.ObjectClass
}

export abstract class LastChangeParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParserClass

    static name: string
}

export interface MediaCollectionClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.MediaCollectionClass

    parentClass: GObject.ObjectClass
}

export abstract class MediaCollectionClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollectionClass

    static name: string
}

export interface ProtocolInfoClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.ProtocolInfoClass

    parentClass: GObject.ObjectClass
}

export abstract class ProtocolInfoClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfoClass

    static name: string
}

export interface SearchCriteriaParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParserClass

    parentClass: GObject.ObjectClass
    beginParens: (parser: SearchCriteriaParser) => void
    endParens: (parser: SearchCriteriaParser) => void
    conjunction: (parser: SearchCriteriaParser) => void
    disjunction: (parser: SearchCriteriaParser) => void
    expression: (parser: SearchCriteriaParser, property: string, op: SearchCriteriaOp, value: string) => boolean
}

export abstract class SearchCriteriaParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParserClass

    static name: string
}

// END