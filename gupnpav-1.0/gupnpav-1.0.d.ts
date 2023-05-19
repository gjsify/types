
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gupnpav-1.0-ambient.d.ts';
import './gupnpav-1.0-import.d.ts';
/**
 * GUPnPAV-1.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
const DIDL_LITE_WRITER_NAMESPACE_DC: string | null
const DIDL_LITE_WRITER_NAMESPACE_DLNA: string | null
const DIDL_LITE_WRITER_NAMESPACE_PV: string | null
const DIDL_LITE_WRITER_NAMESPACE_UPNP: string | null
/**
 * Get the representation of DateTime as an ISO8601 string.
 * 
 * DLNA requires a specific subset of ISO8601
 * @param date_time DateTime to format
 * @param date_only 
 * @returns @date_time formatted as an ISO8601 string
 */
function format_date_time_for_didl_lite(date_time: GLib.DateTime, date_only: boolean): string | null
function protocol_error_quark(): GLib.Quark
module CDSLastChangeParser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CDSLastChangeParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    /**
     * Parse a LastChange XML document in the flavor defined by the
     * ContentDirectory:3 specification.
     * @param last_change XML string to parse
     * @returns  List of #GUPnPCDSLastChangeEntry<!-- -->s
     */
    parse(last_change: string | null): CDSLastChangeEntry[]

    // Class property signals of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CDSLastChangeParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParser

    static name: string
    static $gtype: GObject.GType<CDSLastChangeParser>

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

module DIDLLiteContainer {

    // Constructor properties interface

    interface ConstructorProperties extends DIDLLiteObject.ConstructorProperties {

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

interface DIDLLiteContainer {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    /**
     * The child count of this container.
     */
    child_count: number
    /**
     * Update ID of this container.
     */
    container_update_id: number
    /**
     * Whether this container is searchable.
     */
    searchable: boolean
    /**
     * The number of bytes used by all child items of this container.
     */
    storage_used: number
    /**
     * Total deleted child count of this container.
     */
    total_deleted_child_count: number

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    parent_instance: DIDLLiteObject & GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    /**
     * Add a new create class to the `container`. includeDerived defaults to "0".
     * @param create_class The createClass to add.
     */
    add_create_class(create_class: string | null): void
    /**
     * Add a new create class to the `container`.
     * @param create_class The createClass to add.
     * @param include_derived Whether object with dervied classes may be created in this container or not.
     */
    add_create_class_full(create_class: string | null, include_derived: boolean): void
    /**
     * Add a new search class to the `container`.
     * @param search_class The searchClass to add.
     */
    add_search_class(search_class: string | null): void
    /**
     * Add a new search class to the `container`.
     * @param search_class The searchClass to add.
     * @param include_derived includeDerived attribute of the DIDL
     */
    add_search_class_full(search_class: string | null, include_derived: boolean): void
    /**
     * Get whether the container update ID of the `container` is set.
     * @returns %TRUE if update ID is set, otherwise %FALSE
     */
    container_update_id_is_set(): boolean
    /**
     * Get the child count of the `container`.  If the child count is unknown, -1 is
     * returned.
     * @returns The child count of the @container, or -1 if it is unknown.
     */
    get_child_count(): number
    /**
     * Get the container update ID of the `container`.
     * @returns The container update ID of the @container.
     */
    get_container_update_id(): number
    /**
     * Gets the list of create classes of the `container`.
     * @returns The list of create classes belonging to @container, or %NULL. #g_list_free the returned list after usage and #g_free each string in it.
     */
    get_create_classes(): string[]
    /**
     * Gets the list of create classes of the `container`.
     * @returns The list of create classes belonging to @container, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    get_create_classes_full(): DIDLLiteCreateClass[]
    /**
     * Gets the list of search classes of the `container`.
     * @returns The list of search classes belonging to @container, or %NULL. #g_list_free the returned list after usage and #g_free each string in it.
     */
    get_search_classes(): string[]
    /**
     * Checks whether `container` is searchable.
     * @returns #TRUE if @container is searchable.
     */
    get_searchable(): boolean
    /**
     * Get the number of bytes used by all child items of the `container`.
     * If storage used is unknown, -1 is returned.
     * @returns The number of bytes used by all children of the @container, or -1 if it is unknown.
     */
    get_storage_used(): number
    /**
     * Get the total deleted child count of the `container`.
     * @returns The total deleted child count of the @container.
     */
    get_total_deleted_child_count(): number
    /**
     * Set the child count of the `container`.
     * @param child_count The child count
     */
    set_child_count(child_count: number): void
    /**
     * Set the container update ID of the `container`.
     * @param update_id The container update ID
     */
    set_container_update_id(update_id: number): void
    /**
     * (Un)set the searchibility of `container`.
     * @param searchable The searchibility
     */
    set_searchable(searchable: boolean): void
    /**
     * Set the number of bytes used by all child items of the `container`.
     * @param storage_used The number of bytes used by all child items of the                `container` or -1 if unknown.
     */
    set_storage_used(storage_used: number): void
    /**
     * Set the container update ID of the `container`.
     * @param count The container update ID
     */
    set_total_deleted_child_count(count: number): void
    /**
     * Get whether the total deleted child conut of the `container` is set.
     * @returns %TRUE if property is set, otherwise %FALSE
     */
    total_deleted_child_count_is_set(): boolean
    /**
     * Unset the container update ID property of the `container`.
     */
    unset_container_update_id(): void
    /**
     * Unset the total deleted child count property of the `container`.
     */
    unset_total_deleted_child_count(): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    connect(sigName: "notify::child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-count", ...args: any[]): void
    connect(sigName: "notify::container-update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::container-update-id", ...args: any[]): void
    connect(sigName: "notify::searchable", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searchable", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::searchable", ...args: any[]): void
    connect(sigName: "notify::storage-used", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-used", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage-used", ...args: any[]): void
    connect(sigName: "notify::total-deleted-child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-deleted-child-count", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-deleted-child-count", ...args: any[]): void
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::dc-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dc-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dc-namespace", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-managed", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restricted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::upnp-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-namespace", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-namespace", ...args: any[]): void
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-status", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteContainer extends DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    static name: string
    static $gtype: GObject.GType<DIDLLiteContainer>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainer

    constructor(config?: DIDLLiteContainer.ConstructorProperties) 
    _init(config?: DIDLLiteContainer.ConstructorProperties): void
}

module DIDLLiteContributor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface DIDLLiteContributor {

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
    readonly xml_node: any

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    /**
     * Get the name of the `contributor`.
     * @returns The name of the @contributor or %NULL.
     */
    get_name(): string | null
    /**
     * Get the role of the `contributor`.
     * @returns The role of the @contributor, or %NULL.
     */
    get_role(): string | null
    /**
     * Get the pointer to relevant node in XML document.
     * @returns The pointer to relevant node in XML document.
     */
    get_xml_node(): libxml2.Node
    /**
     * Set the name of the `contributor` to `name`.
     * @param name The name of the contributor
     */
    set_name(name: string | null): void
    /**
     * Set the role of the `contributor` to `role`.
     * @param role The role of the `contributor`
     */
    set_role(role: string | null): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    connect(sigName: "notify::name", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteContributor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteContributor extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    static name: string
    static $gtype: GObject.GType<DIDLLiteContributor>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributor

    constructor(config?: DIDLLiteContributor.ConstructorProperties) 
    _init(config?: DIDLLiteContributor.ConstructorProperties): void
}

module DIDLLiteCreateClass {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface DIDLLiteCreateClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * The content of this create Class.
     */
    content: string | null
    /**
     * The friendly name of this create Class.
     */
    friendly_name: string | null
    /**
     * Whether this create Class can be derived.
     */
    include_derived: boolean
    /**
     * The pointer to desc node in XML document.
     */
    readonly xml_node: any

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    /**
     * Get the content of the `create_class`.
     * @returns The Content of the @create_class, or %NULL.
     */
    get_content(): string | null
    /**
     * Get the friendly name of the `create_class`.
     * @returns The FriendlyName of the @create_class, or %NULL.
     */
    get_friendly_name(): string | null
    /**
     * Checks whether `create_class` can be derived.
     * @returns #TRUE if @create_class can be derived.
     */
    get_include_derived(): boolean
    /**
     * Get the pointer to relevant node in XML document.
     * @returns The pointer to relevant node in XML document.
     */
    get_xml_node(): libxml2.Node
    /**
     * Set the content of the `create_class`.
     * @param content The content
     */
    set_content(content: string | null): void
    /**
     * Set the friendly name of the `create_class`.
     * @param friendly_name The friendly name
     */
    set_friendly_name(friendly_name: string | null): void
    /**
     * (Un)set the derivability of create_class.
     * @param include_derived the derivability
     */
    set_include_derived(include_derived: boolean): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    connect(sigName: "notify::content", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::friendly-name", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::friendly-name", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::friendly-name", ...args: any[]): void
    connect(sigName: "notify::include-derived", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-derived", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::include-derived", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteCreateClass, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteCreateClass extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    static name: string
    static $gtype: GObject.GType<DIDLLiteCreateClass>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClass

    constructor(config?: DIDLLiteCreateClass.ConstructorProperties) 
    _init(config?: DIDLLiteCreateClass.ConstructorProperties): void
}

module DIDLLiteDescriptor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface DIDLLiteDescriptor {

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
    metadata_type: string | null
    /**
     * The name space associated with this descriptor.
     */
    name_space: string | null
    /**
     * The pointer to desc node in XML document.
     */
    readonly xml_node: any

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    /**
     * Get the content of the `descriptor`.
     * @returns The content of the @descriptor or %NULL.
     */
    get_content(): string | null
    /**
     * Get the ID of the `descriptor`.
     * @returns The ID string or %NULL.
     */
    get_id(): string | null
    /**
     * Get the metadata type of the `descriptor`.
     * @returns The type as string or %NULL.
     */
    get_metadata_type(): string | null
    /**
     * Get the name space associated with the `descriptor`.
     * @returns The name space or %NULL.
     */
    get_name_space(): string | null
    /**
     * Get the pointer to desc node in XML document.
     * @returns The pointer to desc node in XML document.
     */
    get_xml_node(): libxml2.Node
    /**
     * Set the content of the `descriptor`.
     * @param content The content as string
     */
    set_content(content: string | null): void
    /**
     * Set the ID of the `descriptor`.
     * @param id The ID as string
     */
    set_id(id: string | null): void
    /**
     * Set the metadata type of the `descriptor`.
     * @param type The metadata type as string
     */
    set_metadata_type(type: string | null): void
    /**
     * Set the name space associated with the `descriptor`.
     * @param name_space The name space URI as string
     */
    set_name_space(name_space: string | null): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    connect(sigName: "notify::content", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata-type", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata-type", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata-type", ...args: any[]): void
    connect(sigName: "notify::name-space", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-space", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name-space", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteDescriptor extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    static name: string
    static $gtype: GObject.GType<DIDLLiteDescriptor>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptor

    constructor(config?: DIDLLiteDescriptor.ConstructorProperties) 
    constructor() 
    static new(): DIDLLiteDescriptor
    _init(config?: DIDLLiteDescriptor.ConstructorProperties): void
}

module DIDLLiteItem {

    // Constructor properties interface

    interface ConstructorProperties extends DIDLLiteObject.ConstructorProperties {

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

interface DIDLLiteItem {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    /**
     * The lifetime in seconds of this DIDLLite item in a media collection.
     */
    lifetime: number
    /**
     * The ref ID of this item.
     */
    ref_id: string | null

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    parent_instance: DIDLLiteObject & GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    get_lifetime(): number
    /**
     * Get the ref ID of the `item`.
     * @returns The ref ID of the @item, or %NULL.
     */
    get_ref_id(): string | null
    set_lifetime(lifetime: number): void
    /**
     * Set the ref ID of the `item`.
     * @param ref_id The ref ID
     */
    set_ref_id(ref_id: string | null): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    connect(sigName: "notify::lifetime", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lifetime", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lifetime", ...args: any[]): void
    connect(sigName: "notify::ref-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref-id", ...args: any[]): void
    connect(sigName: "notify::album", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::dc-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dc-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dc-namespace", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-managed", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restricted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::upnp-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-namespace", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-namespace", ...args: any[]): void
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-status", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteItem extends DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    static name: string
    static $gtype: GObject.GType<DIDLLiteItem>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteItem

    constructor(config?: DIDLLiteItem.ConstructorProperties) 
    _init(config?: DIDLLiteItem.ConstructorProperties): void
}

module DIDLLiteObject {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface DIDLLiteObject {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * The album of this object.
     */
    album: string | null
    /**
     * The URI to album art of this object.
     */
    album_art: string | null
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
    readonly dc_namespace: any
    /**
     * The description of this object.
     */
    description: string | null
    /**
     * The 'dlna:dlnaManaged' attribute.
     */
    dlna_managed: OCMFlags
    /**
     * Pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     */
    readonly dlna_namespace: any
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
    parent_id: string | null
    /**
     * Pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     */
    readonly pv_namespace: any
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
    track_number: number
    /**
     * Update ID of this object.
     */
    update_id: number
    /**
     * The UPnP class of this object.
     */
    upnp_class: string | null
    /**
     * Pointer to the UPnP namespace registered with the XML document
     * containing this object.
     */
    readonly upnp_namespace: any
    /**
     * The write status of this object.
     */
    write_status: string | null
    /**
     * The pointer to object node in XML document.
     */
    readonly xml_node: any

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    /**
     * Add a new Artist node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
     */
    add_artist(): DIDLLiteContributor
    /**
     * Add a new author node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
     */
    add_author(): DIDLLiteContributor
    /**
     * Add a new creator node to the `object` and return the associated
     * #GUPnPDIDLLiteContributor object.
     * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
     */
    add_creator(): DIDLLiteContributor
    /**
     * Creates a new descriptor, attaches it to `object` and returns it.
     * @returns A new #GUPnPDIDLLiteDescriptor object. Unref after usage.
     */
    add_descriptor(): DIDLLiteDescriptor
    /**
     * Creates a new resource, attaches it to `object` and returns it.
     * @returns A new #GUPnPDIDLLiteResource object. Unref after usage.
     */
    add_resource(): DIDLLiteResource
    /**
     * Updates object by applying `new_fragments` in places of
     * `current_fragments`. For `current_size` and `new_size` -1 can be
     * passed when respectively `current_fragments` and `new_fragments` are
     * NULL terminated.
     * @param current_fragments XML fragments of `object`.
     * @param new_fragments Substitutes for `current_fragments`.
     * @returns Result of operation.
     */
    apply_fragments(current_fragments: string[], new_fragments: string[]): DIDLLiteFragmentResult
    /**
     * Get the album of the `object`.
     * @returns The album of the @object, or %NULL.
     */
    get_album(): string | null
    /**
     * Get the URI to album art of the `object`.
     * @returns The URI to album art of the @object, or %NULL.
     */
    get_album_art(): string | null
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object album.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    get_album_xml_string(): string | null
    /**
     * Get the artist of the `object`. If role is not %NULL, it is set to the role
     * of the artist if available.
     * @returns The artist of the @object, or %NULL.
     */
    get_artist(): string | null
    /**
     * Get the artists of the `object`.
     * @returns The list of artists belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    get_artists(): DIDLLiteContributor[]
    /**
     * Creates a string representation of the DIDL-Lite XML fragments related to the
     * object artists.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    get_artists_xml_string(): string | null
    /**
     * Get the author of the `object`.
     * @returns The author of the @object, or %NULL.
     */
    get_author(): string | null
    /**
     * Get the authors of the `object`.
     * @returns The list of authors belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    get_authors(): DIDLLiteContributor[]
    /**
     * Use this function to get a resource from the `object` that is compatible with
     * any of the protocols specified in the `sink_protocol_info`. The value of
     * `sink_protocol_info` will typically be acquired from 'Sink' argument of
     * 'GetProtocolInfo' action or 'SinkProtocolInfo' state-variable of a
     * ConnectionManager service.
     * 
     * If `lenient` is #TRUE, the first resource in the list is returned instead of
     * %NULL if none of resources and protocols are found to be compatible.
     * @param sink_protocol_info The SinkProtocolInfo string from MediaRenderer
     * @param lenient Enable lenient mode
     * @returns The resource belonging to @object that is comaptible with any of the protocols specified in @sink_protocol_info, or %NULL. Unref after usage.
     */
    get_compat_resource(sink_protocol_info: string | null, lenient: boolean): DIDLLiteResource
    /**
     * Get the creator of the `object`.
     * @returns The creator of the @object, or %NULL.
     */
    get_creator(): string | null
    /**
     * Get the creators of the `object`.
     * @returns The list of creators belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    get_creators(): DIDLLiteContributor[]
    /**
     * Get the date of the `object`.
     * @returns The date of the @object, or %NULL.
     */
    get_date(): string | null
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object date.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    get_date_xml_string(): string | null
    /**
     * Get the pointer to the DublinCore namespace registered with the XML document
     * containing this object.
     * @returns The pointer to DublinCore namespace in XML document.
     */
    get_dc_namespace(): libxml2.NsPtr
    /**
     * Get the description of the `object`.
     * @returns The description of the @object, or %NULL.
     */
    get_description(): string | null
    /**
     * Get the descriptors of the `object`.
     * @returns The list of descriptors belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
     */
    get_descriptors(): DIDLLiteDescriptor[]
    /**
     * Get the 'dlna:dlnaManaged' attribute of the `object`.
     * @returns The 'dlna:dlnaManaged' attribute of the @object.
     */
    get_dlna_managed(): OCMFlags
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to DLNA namespace in XML document.
     */
    get_dlna_namespace(): libxml2.NsPtr
    /**
     * Get the genre of the `object`.
     * @returns The genre of the @object, or %NULL.
     */
    get_genre(): string | null
    /**
     * Get the ID of the `object`.
     * @returns The ID of the @object, or %NULL.
     */
    get_id(): string | null
    /**
     * Get the ID of the parent of the `object`.
     * @returns The ID of parent of the @object, or %NULL.
     */
    get_parent_id(): string | null
    /**
     * Use this function to retreive property nodes by name.
     * @param name name of the properties
     * @returns The list of property nodes by the name @property_name belonging to @object, or %NULL. #g_list_free the returned list after usage but do not modify the contents.
     */
    get_properties(name: string | null): libxml2.Node[]
    /**
     * Get the pointer to the PV metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to PV namespace in XML document.
     */
    get_pv_namespace(): libxml2.NsPtr
    /**
     * Use this function to retreive resources from the `object`.
     * @returns The list               of resources belonging to  @object, or %NULL. #g_list_free the               returned list after usage and unref each resource in it.
     */
    get_resources(): DIDLLiteResource[]
    /**
     * Whether the `object` is restricted or not.
     * @returns #TRUE if @object is restricted.
     */
    get_restricted(): boolean
    /**
     * Get the title of the `object`.
     * @returns The title of the @object, or %NULL.
     */
    get_title(): string | null
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object title.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    get_title_xml_string(): string | null
    /**
     * Get the original track number of the `object`.
     * @returns The original track number of the @object, or -1.
     */
    get_track_number(): number
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object track number.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    get_track_number_xml_string(): string | null
    /**
     * Get the update ID of the `object`.
     * @returns The update ID of the @object.
     */
    get_update_id(): number
    /**
     * Get the UPnP class of the `object`.
     * @returns The class of @object, or %NULL.
     */
    get_upnp_class(): string | null
    /**
     * Creates a string representation of the DIDL-Lite XML fragment related to the
     * object UPnP class.
     * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
     */
    get_upnp_class_xml_string(): string | null
    /**
     * Get the pointer to the UPnP namespace registered with the XML document.
     * @returns The pointer to UPnP namespace in XML document.
     */
    get_upnp_namespace(): libxml2.NsPtr
    /**
     * Get the write status of the `object`.
     * @returns The write status of the @object, or %NULL.
     */
    get_write_status(): string | null
    /**
     * Get the pointer to object node in XML document.
     * @returns The pointer to object node in XML document.
     */
    get_xml_node(): libxml2.Node
    /**
     * Get the representation of this object as an XML string.
     * @returns XML representation of this object as string.
     */
    get_xml_string(): string | null
    /**
     * Whehter the restricted attribute exists on `object`
     * @returns #TRUE if restricted exists, #FALSE otherwise.
     */
    is_restricted_set(): boolean
    /**
     * Set the album of the `object` to `album`.
     * @param album The album string
     */
    set_album(album: string | null): void
    /**
     * Set the URI to album art of the `object` to `album_art`.
     * @param album_art The URI of album art
     */
    set_album_art(album_art: string | null): void
    /**
     * Set the Artist of the `object` to `artist`.
     * @param artist The Artist
     */
    set_artist(artist: string | null): void
    /**
     * Set the Author of the `object` to `author`.
     * @param author The Author
     */
    set_author(author: string | null): void
    /**
     * Set the creator of the `object` to `creator`.
     * @param creator The creator
     */
    set_creator(creator: string | null): void
    /**
     * Set the date of the `object` to `date`.
     * @param date The date string
     */
    set_date(date: string | null): void
    /**
     * Set the description of the `object` to `description`.
     * @param description The description string
     */
    set_description(description: string | null): void
    /**
     * Set the 'dlna:dlnaManaged' attribute of the `object` to `dlna_managed`.
     * @param dlna_managed The #GUPnPOCMFlags.
     */
    set_dlna_managed(dlna_managed: OCMFlags): void
    /**
     * Set the genre of the `object` to `genre`.
     * @param genre The Genre
     */
    set_genre(genre: string | null): void
    /**
     * Set the ID of the `object` to `id`.
     * @param id The ID
     */
    set_id(id: string | null): void
    /**
     * Set the ID of the parent of the `object` to `parent_id`.
     * @param parent_id The parent ID
     */
    set_parent_id(parent_id: string | null): void
    /**
     * Set the restricted status of `object` to `restricted`.
     * @param restricted The restricted status
     */
    set_restricted(restricted: boolean): void
    /**
     * Set the title of the `object` to `title`.
     * @param title The title
     */
    set_title(title: string | null): void
    /**
     * Set the original track number of the `object` to `track_number`.
     * @param track_number The original track number
     */
    set_track_number(track_number: number): void
    /**
     * Set the update ID of the `object`.
     * @param update_id Update ID
     */
    set_update_id(update_id: number): void
    /**
     * Set the UPnP class of the `object` to `upnp_class`.
     * @param upnp_class The UPnP class as string.
     */
    set_upnp_class(upnp_class: string | null): void
    /**
     * Set the write status of the `object` to `write_status`.
     * @param write_status The write status string
     */
    set_write_status(write_status: string | null): void
    /**
     * Unset the artists properties of the `object`.
     */
    unset_artists(): void
    /**
     * Unset the update ID property of the `object`.
     */
    unset_update_id(): void
    /**
     * Get whether the update ID of the `object` is set.
     * @returns %TRUE if update ID is set, otherwise %FALSE
     */
    update_id_is_set(): boolean

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    connect(sigName: "notify::album", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album", ...args: any[]): void
    connect(sigName: "notify::album-art", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-art", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::album-art", ...args: any[]): void
    connect(sigName: "notify::artist", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::author", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::creator", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creator", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::dc-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dc-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dc-namespace", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-managed", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-managed", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::genre", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::genre", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::genre", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::restricted", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restricted", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restricted", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::track-number", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-number", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-number", ...args: any[]): void
    connect(sigName: "notify::update-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-id", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-id", ...args: any[]): void
    connect(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-class", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-class", ...args: any[]): void
    connect(sigName: "notify::upnp-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-namespace", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-namespace", ...args: any[]): void
    connect(sigName: "notify::write-status", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-status", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-status", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteObject extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    static name: string
    static $gtype: GObject.GType<DIDLLiteObject>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteObject

    constructor(config?: DIDLLiteObject.ConstructorProperties) 
    _init(config?: DIDLLiteObject.ConstructorProperties): void
}

module DIDLLiteParser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `container-available`
     */
    interface ContainerAvailableSignalCallback {
        ($obj: DIDLLiteParser, container: DIDLLiteContainer): void
    }

    /**
     * Signal callback interface for `item-available`
     */
    interface ItemAvailableSignalCallback {
        ($obj: DIDLLiteParser, item: DIDLLiteItem): void
    }

    /**
     * Signal callback interface for `object-available`
     */
    interface ObjectAvailableSignalCallback {
        ($obj: DIDLLiteParser, object: DIDLLiteObject): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DIDLLiteParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    /**
     * Parses DIDL-Lite XML string `didl,` emitting the ::object-available,
     * ::item-available and ::container-available signals appropriately during the
     * process.
     * @param didl The DIDL-Lite XML string to be parsed
     * @returns TRUE on success.
     */
    parse_didl(didl: string | null): boolean

    // Own virtual methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    vfunc_container_available(container: DIDLLiteContainer): void
    vfunc_item_available(item: DIDLLiteItem): void
    vfunc_object_available(object: DIDLLiteObject): void

    // Own signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    connect(sigName: "container-available", callback: DIDLLiteParser.ContainerAvailableSignalCallback): number
    connect_after(sigName: "container-available", callback: DIDLLiteParser.ContainerAvailableSignalCallback): number
    emit(sigName: "container-available", container: DIDLLiteContainer, ...args: any[]): void
    connect(sigName: "item-available", callback: DIDLLiteParser.ItemAvailableSignalCallback): number
    connect_after(sigName: "item-available", callback: DIDLLiteParser.ItemAvailableSignalCallback): number
    emit(sigName: "item-available", item: DIDLLiteItem, ...args: any[]): void
    connect(sigName: "object-available", callback: DIDLLiteParser.ObjectAvailableSignalCallback): number
    connect_after(sigName: "object-available", callback: DIDLLiteParser.ObjectAvailableSignalCallback): number
    emit(sigName: "object-available", object: DIDLLiteObject, ...args: any[]): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    static name: string
    static $gtype: GObject.GType<DIDLLiteParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteParser

    constructor(config?: DIDLLiteParser.ConstructorProperties) 
    constructor() 
    static new(): DIDLLiteParser
    _init(config?: DIDLLiteParser.ConstructorProperties): void
}

module DIDLLiteResource {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface DIDLLiteResource {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    /**
     * The number of audio channels in this resource.
     */
    audio_channels: number
    /**
     * The bitrate of this resource.
     */
    bitrate: number
    /**
     * The sample size of this resource.
     */
    bits_per_sample: number
    cleartext_size: number
    /**
     * The color-depth of this image/video resource.
     */
    color_depth: number
    /**
     * Pointer to the DLNA metadata namespace registered with the
     * resource object.
     */
    readonly dlna_namespace: any
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
    import_uri: string | null
    /**
     * The protection system used for this resource.
     */
    protection: string | null
    /**
     * The protocol info associated with this resource.
     */
    protocol_info: ProtocolInfo
    /**
     * Pointer to the PV metadata namespace registered with the
     * resource object.
     */
    readonly pv_namespace: any
    /**
     * The sample frequency of this resource.
     */
    sample_freq: number
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
    subtitle_file_type: string | null
    /**
     * Uri to external subtitle file.
     */
    subtitle_file_uri: string | null
    /**
     * Number of tracks in a DIDL_S or DIDL_V resource.
     */
    track_total: number
    update_count: number
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
    readonly xml_node: any

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    /**
     * Get the number of audio channels in the `resource`.
     * @returns The number of audio channels in the @resource or -1.
     */
    get_audio_channels(): number
    /**
     * Get the bitrate (in bytes per second) of the `resource`.
     * @returns The bitrate (in bytes per second) of the @resource or -1.
     */
    get_bitrate(): number
    /**
     * Get the sample size of the `resource`.
     * @returns The number of bits per sample of the @resource or -1.
     */
    get_bits_per_sample(): number
    /**
     * Get the size (in bytes) of the `resource`.
     * @returns The size (in bytes) of the @resource or -1.
     */
    get_cleartext_size(): number
    /**
     * Get the color-depth of this image/video resource.
     * @returns The color depth of the @resource or -1.
     */
    get_color_depth(): number
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to DLNA namespace in XML document.
     */
    get_dlna_namespace(): libxml2.NsPtr
    /**
     * Get the duration (in seconds) of the `resource`.
     * @returns The duration (in seconds) of the @resource or -1.
     */
    get_duration(): number
    /**
     * Get the height of this image/video resource.
     * @returns The height of the @resource or -1.
     */
    get_height(): number
    /**
     * Get the import URI associated with the `resource`.
     * @returns The import URI or %NULL.
     */
    get_import_uri(): string | null
    /**
     * Get the protection system used by the `resource`.
     * @returns The protection system in use by the @resource or %NULL.
     */
    get_protection(): string | null
    /**
     * Get the protocol info associated with the `resource`.
     * @returns The protocol info associated with the @resource or %NULL. The returned object must not be unrefed.
     */
    get_protocol_info(): ProtocolInfo | null
    /**
     * Get the pointer to the DLNA metadata namespace registered with the XML
     * document containing this object.
     * @returns The pointer to DLNA namespace in XML document.
     */
    get_pv_namespace(): libxml2.NsPtr
    /**
     * Get the sample frequency of the `resource`.
     * @returns The sample frequency of the @resource or -1.
     */
    get_sample_freq(): number
    /**
     * Get the size (in bytes) of the `resource`.
     * @returns The size (in bytes) of the @resource or -1.
     */
    get_size(): number
    /**
     * Get the size (in bytes) of the `resource`.
     * @returns The size (in bytes) of the @resource or -1.
     */
    get_size64(): number
    get_subtitle_file_type(): string | null
    get_subtitle_file_uri(): string | null
    /**
     * Get the total track count of this resource.
     * @returns The total track count of the @resource.
     */
    get_track_total(): number
    /**
     * Get the update count of this resource.
     * @returns The update count of the @resource.
     */
    get_update_count(): number
    /**
     * Get the URI associated with the `resource`.
     * @returns The of URI the @resource or %NULL.
     */
    get_uri(): string | null
    /**
     * Get the width of this image/video resource.
     * @returns The width of this image/video resource or -1.
     */
    get_width(): number
    /**
     * Get the pointer to res node in XML document.
     * @returns The pointer to res node in XML document.
     */
    get_xml_node(): libxml2.Node
    /**
     * Set the number of audio channels in the `resource`. Passing a negative number
     * will unset this property.
     * @param n_channels The number of channels
     */
    set_audio_channels(n_channels: number): void
    /**
     * Set the bitrate (in bytes per second) of the `resource`. Passing a negative
     * number will unset this property.
     * @param bitrate The bitrate
     */
    set_bitrate(bitrate: number): void
    /**
     * Set the sample size of the `resource`. Passing a negative number will unset
     * this property.
     * @param sample_size The number of bits per sample
     */
    set_bits_per_sample(sample_size: number): void
    /**
     * Set the size (in bytes) of the `resource`. Passing a negative number will
     * unset this property.
     * @param cleartext_size The size (in bytes)
     */
    set_cleartext_size(cleartext_size: number): void
    /**
     * Set the color-depth of this image/video resource. Passing a negative number
     * will unset this property.
     * @param color_depth The color-depth
     */
    set_color_depth(color_depth: number): void
    /**
     * Set the duration (in seconds) of the `resource`. Passing a negative number
     * will unset this property.
     * @param duration The duration (in seconds)
     */
    set_duration(duration: number): void
    /**
     * Set the height of this image/video resource. Setting both width and height to
     * a negative number will unset the resolution property.
     * @param height The height
     */
    set_height(height: number): void
    /**
     * Set the import URI associated with the `resource`.
     * @param import_uri The URI as string
     */
    set_import_uri(import_uri: string | null): void
    /**
     * Set the protection system used by the `resource`. Passing a negative number
     * will unset this property.
     * @param protection The protection system identifier as string
     */
    set_protection(protection: string | null): void
    /**
     * Set the protocol info associated with the `resource`.
     * @param info The protocol string
     */
    set_protocol_info(info: ProtocolInfo): void
    /**
     * Set the sample frequency of the `resource`. Passing a negative number will
     * unset this property.
     * @param sample_freq The sample frequency
     */
    set_sample_freq(sample_freq: number): void
    /**
     * Set the size (in bytes) of the `resource`. Passing a negative number will
     * unset this property.
     * @param size The size (in bytes)
     */
    set_size(size: number): void
    /**
     * Set the size (in bytes) of the `resource`. Passing a negative number will
     * unset this property.
     * @param size The size (in bytes)
     */
    set_size64(size: number): void
    /**
     * Set the type of an external subtitle file, specified via
     * pv:subtitleFileUri using gupnp_didl_lite_resource_set_subtitle_file_uri().
     * 
     * When `type` is %NULL the value is removed.
     * @param type An URI to an external subtitle file
     */
    set_subtitle_file_type(type: string | null): void
    /**
     * Set the URI of an external subtitle file to be used with this resource.
     * When `uri` is %NULL the value is removed.
     * @param uri An URI to an external subtitle file or %NULL to remove.
     */
    set_subtitle_file_uri(uri: string | null): void
    /**
     * Set the total number of tracks in this resource.
     * @param track_total The total number of tracks in this resource
     */
    set_track_total(track_total: number): void
    /**
     * Set the update count of this resource.
     * @param update_count The update_count
     */
    set_update_count(update_count: number): void
    /**
     * Set the URI associated with the `resource`.
     * @param uri The URI as string
     */
    set_uri(uri: string | null): void
    /**
     * Set the width of this image/video resource. Setting both width and height to
     * a negative number will unset the resolution property.
     * @param width The width
     */
    set_width(width: number): void
    /**
     * Check whether the total track count property of this resource is set.
     * @returns %TRUE if set, otherwise %FALSE.
     */
    track_total_is_set(): boolean
    /**
     * Unset the total track count of this resource.
     */
    unset_track_total(): void
    /**
     * Unset the update count of this resource.
     */
    unset_update_count(): void
    /**
     * Check whether the update count property of this resource is set.
     * @returns %TRUE if set, otherwise %FALSE.
     */
    update_count_is_set(): boolean

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    connect(sigName: "notify::audio-channels", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-channels", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-channels", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitrate", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::bits-per-sample", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bits-per-sample", ...args: any[]): void
    connect(sigName: "notify::cleartext-size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cleartext-size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cleartext-size", ...args: any[]): void
    connect(sigName: "notify::color-depth", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-depth", ...args: any[]): void
    connect(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-namespace", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-namespace", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::import-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::import-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::import-uri", ...args: any[]): void
    connect(sigName: "notify::protection", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protection", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protection", ...args: any[]): void
    connect(sigName: "notify::protocol-info", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol-info", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol-info", ...args: any[]): void
    connect(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pv-namespace", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pv-namespace", ...args: any[]): void
    connect(sigName: "notify::sample-freq", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-freq", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sample-freq", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size64", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size64", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size64", ...args: any[]): void
    connect(sigName: "notify::subtitle-file-type", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-file-type", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-file-type", ...args: any[]): void
    connect(sigName: "notify::subtitle-file-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-file-uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-file-uri", ...args: any[]): void
    connect(sigName: "notify::track-total", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-total", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-total", ...args: any[]): void
    connect(sigName: "notify::update-count", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-count", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-count", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteResource extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    static name: string
    static $gtype: GObject.GType<DIDLLiteResource>

    // Constructors of GUPnPAV-1.0.GUPnPAV.DIDLLiteResource

    constructor(config?: DIDLLiteResource.ConstructorProperties) 
    _init(config?: DIDLLiteResource.ConstructorProperties): void
}

module DIDLLiteWriter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

        /**
         * The language the DIDL-Lite fragment is in.
         */
        language?: string | null
    }

}

interface DIDLLiteWriter {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * The language the DIDL-Lite fragment is in.
     */
    readonly language: string | null
    /**
     * The pointer to root node in XML document.
     */
    readonly xml_node: any

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    /**
     * Creates a new container, attaches it to `writer` and returns it.
     * @returns A new #GUPnPDIDLLiteContainer object. Unref after usage.
     */
    add_container(): DIDLLiteContainer
    /**
     * Creates a new descriptor, attaches it to `object` and returns it.
     * @returns A new #GUPnPDIDLLiteDescriptor object. Unref after usage.
     */
    add_descriptor(): DIDLLiteDescriptor
    /**
     * Creates a new item, attaches it to `writer` and returns it.
     * @returns A new #GUPnPDIDLLiteItem object. Unref after usage.
     */
    add_item(): DIDLLiteItem
    /**
     * Clears the DIDL-Lite XML document of the properties not specified in the
     * `filter`. The passed filter string would typically come from the 'Filter'
     * argument of Browse or Search actions from a ContentDirectory control point.
     * Please refer to Section 2.3.15 of UPnP AV ContentDirectory version 3
     * specification for details on this string.
     * @param filter A filter string
     */
    filter(filter: string | null): void
    /**
     * Get the language the DIDL-Lite fragment is in.
     * @returns The language of the @writer, or %NULL.
     */
    get_language(): string | null
    /**
     * Creates a string representation of the DIDL-Lite XML document.
     * @returns The DIDL-Lite XML string, or %NULL. #g_free after usage.
     */
    get_string(): string | null
    /**
     * Get the pointer to root node in XML document.
     * @returns The pointer to root node in XML document.
     */
    get_xml_node(): libxml2.Node

    // Class property signals of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    connect(sigName: "notify::language", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::xml-node", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-node", callback: (($obj: DIDLLiteWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DIDLLiteWriter extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriter

    static name: string
    static $gtype: GObject.GType<DIDLLiteWriter>

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

module Feature {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface Feature {

    // Own properties of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * The name of this feature.
     */
    readonly name: string | null
    /**
     * The object IDs related to this feature.
     */
    readonly object_ids: string | null
    /**
     * The version of this feature.
     */
    readonly version: string | null

    // Own fields of GUPnPAV-1.0.GUPnPAV.Feature

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.Feature

    /**
     * Get the name of the `feature`.
     * @returns The name of the @feature.
     */
    get_name(): string | null
    /**
     * Get the object IDs related to the `feature`.
     * @returns The object IDs related to the @feature.
     */
    get_object_ids(): string | null
    /**
     * Get the version of the `feature`.
     * @returns The version of the @feature.
     */
    get_version(): string | null

    // Class property signals of GUPnPAV-1.0.GUPnPAV.Feature

    connect(sigName: "notify::name", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::object-ids", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-ids", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-ids", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Feature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Feature extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.Feature

    static name: string
    static $gtype: GObject.GType<Feature>

    // Constructors of GUPnPAV-1.0.GUPnPAV.Feature

    constructor(config?: Feature.ConstructorProperties) 
    _init(config?: Feature.ConstructorProperties): void
}

module FeatureListParser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FeatureListParser {

    // Owm methods of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    /**
     * Parses `text` and returns the list of available features.
     * If an error occured `error` will be set.
     * @param text The feature list string to be parsed
     * @returns The list of features or %NULL if an error occured.
     */
    parse_text(text: string | null): Feature[] | null

    // Class property signals of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FeatureListParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    static name: string
    static $gtype: GObject.GType<FeatureListParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.FeatureListParser

    constructor(config?: FeatureListParser.ConstructorProperties) 
    constructor() 
    static new(): FeatureListParser
    _init(config?: FeatureListParser.ConstructorProperties): void
}

module LastChangeParser {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LastChangeParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    parent_instance: GObject.Object

    // Class property signals of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LastChangeParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    static name: string
    static $gtype: GObject.GType<LastChangeParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.LastChangeParser

    constructor(config?: LastChangeParser.ConstructorProperties) 
    constructor() 
    static new(): LastChangeParser
    _init(config?: LastChangeParser.ConstructorProperties): void
}

module MediaCollection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface MediaCollection {

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

    // Own fields of GUPnPAV-1.0.GUPnPAV.MediaCollection

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.MediaCollection

    add_item(): DIDLLiteItem
    get_author(): string | null
    get_items(): DIDLLiteItem[]
    get_mutable(): boolean
    get_string(): string | null
    get_title(): string | null
    /**
     * Set the author of the media collection
     * @param author New author of this media collection.
     */
    set_author(author: string | null): void
    /**
     * Set the title of a #GUPnPMediaCollection.
     * @param title New Title of this collection;
     */
    set_title(title: string | null): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.MediaCollection

    connect(sigName: "notify::author", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MediaCollection extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollection

    static name: string
    static $gtype: GObject.GType<MediaCollection>

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
    static new_from_string(data: string | null): MediaCollection
    _init(config?: MediaCollection.ConstructorProperties): void
}

module ProtocolInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

interface ProtocolInfo {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    /**
     * The DLNA conversion flags.
     */
    dlna_conversion: DLNAConversion
    /**
     * Various generic DLNA flags.
     */
    dlna_flags: DLNAFlags
    /**
     * The DLNA operation flags.
     */
    dlna_operation: DLNAOperation
    /**
     * The DLNA profile of this info.
     */
    dlna_profile: string | null
    /**
     * The MIME-type of this info.
     */
    mime_type: string | null
    /**
     * The network this info is associated with.
     */
    network: string | null
    /**
     * The allowed play speeds on this info in the form of array of
     * strings.
     */
    play_speeds: string[]
    /**
     * The protocol of this info.
     */
    protocol: string | null

    // Own fields of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    /**
     * Get the DLNA conversion flags.
     * @returns The DLNA conversion flags.
     */
    get_dlna_conversion(): DLNAConversion
    /**
     * Get the gereric DLNA flags.
     * @returns The generic DLNA flags.
     */
    get_dlna_flags(): DLNAFlags
    /**
     * Get the DLNA operation flags.
     * @returns The DLNA operation flags.
     */
    get_dlna_operation(): DLNAOperation
    /**
     * Get the DLNA profile of this info.
     * @returns The DLNA profile of this info or %NULL. This string should not be freed.
     */
    get_dlna_profile(): string | null
    /**
     * Get the MIME-type of this info.
     * @returns The MIME-type of this info or %NULL. This string should not be freed.
     */
    get_mime_type(): string | null
    /**
     * Get the network this info is associated with.
     * @returns The network string or %NULL. This string should not be freed.
     */
    get_network(): string | null
    /**
     * Get the allowed play speeds on this info in the form of array of strings.
     * @returns The allowed play speeds as array of strings or %NULL. This return array and it's content must not be modified or freed.
     */
    get_play_speeds(): string[] | null
    /**
     * Get the protocol of this info.
     * @returns The protocol of this info or %NULL. This string should not be freed.
     */
    get_protocol(): string | null
    /**
     * Checks if the given protocolInfo string is compatible with `info`.
     * @param info2 The second #GUPnPProtocolInfo
     * @returns #TRUE if @protocol_info is compatible with @info, otherwise #FALSE.
     */
    is_compatible(info2: ProtocolInfo): boolean
    /**
     * Set the DLNA conversion flags.
     * @param conversion The bitwise OR of one or more DLNA conversion flags
     */
    set_dlna_conversion(conversion: DLNAConversion): void
    /**
     * Set the gereric DLNA flags.
     * @param flags The bitwise OR of one or more generic DLNA flags
     */
    set_dlna_flags(flags: DLNAFlags): void
    /**
     * Set the DLNA operation flags.
     * @param operation The bitwise OR of one or more DLNA operation flags
     */
    set_dlna_operation(operation: DLNAOperation): void
    /**
     * Set the DLNA profile of this info.
     * @param profile The DLNA profile string
     */
    set_dlna_profile(profile: string | null): void
    /**
     * Set the MIME-type of this info.
     * @param mime_type The MIME-type string
     */
    set_mime_type(mime_type: string | null): void
    /**
     * Set the network this info is associated with.
     * @param network The network string
     */
    set_network(network: string | null): void
    /**
     * Set the allowed play speeds on this info in the form of array of strings.
     * @param speeds The allowed play speeds
     */
    set_play_speeds(speeds: string | null): void
    /**
     * Set the protocol of this info.
     * @param protocol The protocol string
     */
    set_protocol(protocol: string | null): void
    /**
     * Provides the string representation of `info`.
     * @returns String representation of @info. #g_free after usage.
     */
    to_string(): string | null

    // Class property signals of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    connect(sigName: "notify::dlna-conversion", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-conversion", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-conversion", ...args: any[]): void
    connect(sigName: "notify::dlna-flags", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-flags", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-flags", ...args: any[]): void
    connect(sigName: "notify::dlna-operation", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-operation", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-operation", ...args: any[]): void
    connect(sigName: "notify::dlna-profile", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-profile", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-profile", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::network", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::play-speeds", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play-speeds", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::play-speeds", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: ProtocolInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProtocolInfo extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    static name: string
    static $gtype: GObject.GType<ProtocolInfo>

    // Constructors of GUPnPAV-1.0.GUPnPAV.ProtocolInfo

    constructor(config?: ProtocolInfo.ConstructorProperties) 
    constructor() 
    static new(): ProtocolInfo
    /**
     * Parses the `protocol_info` string and creates a new #GUPnPProtocolInfo object
     * as a result.
     * @constructor 
     * @param protocol_info The protocol info string
     * @returns A new #GUPnPProtocolInfo object. Unref after usage.
     */
    static new_from_string(protocol_info: string | null): ProtocolInfo
    _init(config?: ProtocolInfo.ConstructorProperties): void
}

module SearchCriteriaParser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-parens`
     */
    interface BeginParensSignalCallback {
        ($obj: SearchCriteriaParser): void
    }

    /**
     * Signal callback interface for `conjunction`
     */
    interface ConjunctionSignalCallback {
        ($obj: SearchCriteriaParser): void
    }

    /**
     * Signal callback interface for `disjunction`
     */
    interface DisjunctionSignalCallback {
        ($obj: SearchCriteriaParser): void
    }

    /**
     * Signal callback interface for `end-parens`
     */
    interface EndParensSignalCallback {
        ($obj: SearchCriteriaParser): void
    }

    /**
     * Signal callback interface for `expression`
     */
    interface ExpressionSignalCallback {
        ($obj: SearchCriteriaParser, property: string | null, op: SearchCriteriaOp, value: string | null, error: any | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SearchCriteriaParser {

    // Own fields of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    parent_instance: GObject.Object

    // Owm methods of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    /**
     * Parses `text,` emitting the various defined signals on the way. If an
     * error occured `error` will be set.
     * @param text The search criteria string to be parsed
     * @returns TRUE on success.
     */
    parse_text(text: string | null): boolean

    // Own virtual methods of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    vfunc_begin_parens(): void
    vfunc_conjunction(): void
    vfunc_disjunction(): void
    vfunc_end_parens(): void
    vfunc_expression(property: string | null, op: SearchCriteriaOp, value: string | null): boolean

    // Own signals of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    connect(sigName: "begin-parens", callback: SearchCriteriaParser.BeginParensSignalCallback): number
    connect_after(sigName: "begin-parens", callback: SearchCriteriaParser.BeginParensSignalCallback): number
    emit(sigName: "begin-parens", ...args: any[]): void
    connect(sigName: "conjunction", callback: SearchCriteriaParser.ConjunctionSignalCallback): number
    connect_after(sigName: "conjunction", callback: SearchCriteriaParser.ConjunctionSignalCallback): number
    emit(sigName: "conjunction", ...args: any[]): void
    connect(sigName: "disjunction", callback: SearchCriteriaParser.DisjunctionSignalCallback): number
    connect_after(sigName: "disjunction", callback: SearchCriteriaParser.DisjunctionSignalCallback): number
    emit(sigName: "disjunction", ...args: any[]): void
    connect(sigName: "end-parens", callback: SearchCriteriaParser.EndParensSignalCallback): number
    connect_after(sigName: "end-parens", callback: SearchCriteriaParser.EndParensSignalCallback): number
    emit(sigName: "end-parens", ...args: any[]): void
    connect(sigName: "expression", callback: SearchCriteriaParser.ExpressionSignalCallback): number
    connect_after(sigName: "expression", callback: SearchCriteriaParser.ExpressionSignalCallback): number
    emit(sigName: "expression", property: string | null, op: SearchCriteriaOp, value: string | null, error: any | null, ...args: any[]): void

    // Class property signals of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SearchCriteriaParser extends GObject.Object {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    static name: string
    static $gtype: GObject.GType<SearchCriteriaParser>

    // Constructors of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParser

    constructor(config?: SearchCriteriaParser.ConstructorProperties) 
    constructor() 
    static new(): SearchCriteriaParser
    _init(config?: SearchCriteriaParser.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

interface CDSLastChangeEntry {

    // Owm methods of GUPnPAV-1.0.GUPnPAV.CDSLastChangeEntry

    /**
     * Get the class of the object in this change entry. This is only
     * valid if gupnp_cds_last_change_entry_get_event() returns
     * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
     * @returns The upnp class of the object of this entry.
     */
    get_class(): string | null
    /**
     * Get the type of the last change entry as defined in
     * #GUPnPCDSLastChangeEvent.
     * @returns An event from the #GUPnPCDSLastChangeEvent or %GUPNP_CDS_LAST_CHANGE_EVENT_INVALID if the entry is not valid.
     */
    get_event(): CDSLastChangeEvent
    /**
     * Get the ID of the object in this change entry.
     * @returns The id of the object of this entry.
     */
    get_object_id(): string | null
    /**
     * Get the parent object id of the object in this change entry. This is only
     * valid if gupnp_cds_last_change_entry_get_event() returns
     * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
     * @returns The id of the object's parent of this entry.
     */
    get_parent_id(): string | null
    /**
     * Get the update id of the last change entry.
     * @returns update id of the entry or 0 if the entry is not valid.
     */
    get_update_id(): number
    /**
     * Returns whether this entry is part of a subtree update.
     * @returns %TRUE, if the entry is part of a subtree update, %FALSE otherwise.
     */
    is_subtree_update(): boolean
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
class CDSLastChangeEntry {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeEntry

    static name: string
}

interface CDSLastChangeParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParserClass

    parent_class: GObject.ObjectClass
}

abstract class CDSLastChangeParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.CDSLastChangeParserClass

    static name: string
}

interface DIDLLiteContainerClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainerClass

    parent_class: DIDLLiteObjectClass
}

abstract class DIDLLiteContainerClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContainerClass

    static name: string
}

interface DIDLLiteContributorClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributorClass

    parent_class: GObject.ObjectClass
}

abstract class DIDLLiteContributorClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteContributorClass

    static name: string
}

interface DIDLLiteCreateClassClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClassClass

    parent_class: GObject.ObjectClass
}

abstract class DIDLLiteCreateClassClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteCreateClassClass

    static name: string
}

interface DIDLLiteDescriptorClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptorClass

    parent_class: GObject.ObjectClass
}

abstract class DIDLLiteDescriptorClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteDescriptorClass

    static name: string
}

interface DIDLLiteItemClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteItemClass

    parent_class: DIDLLiteObjectClass
}

abstract class DIDLLiteItemClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteItemClass

    static name: string
}

interface DIDLLiteObjectClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteObjectClass

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
    object_available: (parser: DIDLLiteParser, object: DIDLLiteObject) => void
    item_available: (parser: DIDLLiteParser, item: DIDLLiteItem) => void
    container_available: (parser: DIDLLiteParser, container: DIDLLiteContainer) => void
}

abstract class DIDLLiteParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteParserClass

    static name: string
}

interface DIDLLiteResourceClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteResourceClass

    parent_class: GObject.ObjectClass
}

abstract class DIDLLiteResourceClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteResourceClass

    static name: string
}

interface DIDLLiteWriterClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriterClass

    parent_class: GObject.ObjectClass
}

abstract class DIDLLiteWriterClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.DIDLLiteWriterClass

    static name: string
}

interface FeatureClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.FeatureClass

    parent_class: GObject.ObjectClass
}

abstract class FeatureClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureClass

    static name: string
}

interface FeatureListParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.FeatureListParserClass

    parent_class: GObject.ObjectClass
}

abstract class FeatureListParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.FeatureListParserClass

    static name: string
}

interface LastChangeParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.LastChangeParserClass

    parent_class: GObject.ObjectClass
}

abstract class LastChangeParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.LastChangeParserClass

    static name: string
}

interface MediaCollectionClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.MediaCollectionClass

    parent_class: GObject.ObjectClass
}

abstract class MediaCollectionClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.MediaCollectionClass

    static name: string
}

interface ProtocolInfoClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.ProtocolInfoClass

    parent_class: GObject.ObjectClass
}

abstract class ProtocolInfoClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.ProtocolInfoClass

    static name: string
}

interface SearchCriteriaParserClass {

    // Own fields of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParserClass

    parent_class: GObject.ObjectClass
    begin_parens: (parser: SearchCriteriaParser) => void
    end_parens: (parser: SearchCriteriaParser) => void
    conjunction: (parser: SearchCriteriaParser) => void
    disjunction: (parser: SearchCriteriaParser) => void
    expression: (parser: SearchCriteriaParser, property: string | null, op: SearchCriteriaOp, value: string | null) => boolean
}

abstract class SearchCriteriaParserClass {

    // Own properties of GUPnPAV-1.0.GUPnPAV.SearchCriteriaParserClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GUPnPAV;
// END