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
    class ProtocolError extends GLib.Error {
        // Own fields of GUPnPAV-1.0.ProtocolError

        /**
         * Invalid syntax.
         */
        INVALID_SYNTAX: number;
        /**
         * Unknown/unhandled protocol related errors.
         */
        OTHER: number;

        // Constructors of GUPnPAV-1.0.ProtocolError

        constructor(options: { message: string; code: number });
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
    const DIDL_LITE_WRITER_NAMESPACE_DC: string;
    const DIDL_LITE_WRITER_NAMESPACE_DLNA: string;
    const DIDL_LITE_WRITER_NAMESPACE_PV: string;
    const DIDL_LITE_WRITER_NAMESPACE_UPNP: string;
    /**
     * Get the representation of DateTime as an ISO8601 string.
     *
     * DLNA requires a specific subset of ISO8601
     * @param date_time DateTime to format
     * @param date_only
     * @returns @date_time formatted as an ISO8601 string
     */
    function format_date_time_for_didl_lite(date_time: GLib.DateTime, date_only: boolean): string;
    function protocol_error_quark(): GLib.Quark;
    /**
     * The DLNA conversion flags for a resource.
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
    module CDSLastChangeParser {
        // Constructor properties interface
    }

    class CDSLastChangeParser extends GObject.Object {
        // Constructors of GUPnPAV-1.0.CDSLastChangeParser

        static ['new'](): CDSLastChangeParser;

        // Owm methods of GUPnPAV-1.0.CDSLastChangeParser

        /**
         * Parse a LastChange XML document in the flavor defined by the
         * ContentDirectory:3 specification.
         * @param last_change XML string to parse
         * @returns List of #GUPnPCDSLastChangeEntry<!-- -->s
         */
        parse(last_change: string): CDSLastChangeEntry[];
    }

    module DIDLLiteContainer {
        // Constructor properties interface
    }

    class DIDLLiteContainer extends DIDLLiteObject {
        // Own properties of GUPnPAV-1.0.DIDLLiteContainer

        /**
         * The child count of this container.
         */
        child_count: number;
        /**
         * The child count of this container.
         */
        childCount: number;
        /**
         * Update ID of this container.
         */
        container_update_id: number;
        /**
         * Update ID of this container.
         */
        containerUpdateId: number;
        /**
         * Whether this container is searchable.
         */
        searchable: boolean;
        /**
         * The number of bytes used by all child items of this container.
         */
        storage_used: number;
        /**
         * The number of bytes used by all child items of this container.
         */
        storageUsed: number;
        /**
         * Total deleted child count of this container.
         */
        total_deleted_child_count: number;
        /**
         * Total deleted child count of this container.
         */
        totalDeletedChildCount: number;

        // Owm methods of GUPnPAV-1.0.DIDLLiteContainer

        /**
         * Add a new create class to the `container`. includeDerived defaults to "0".
         * @param create_class The createClass to add.
         */
        add_create_class(create_class: string): void;
        /**
         * Add a new create class to the `container`.
         * @param create_class The createClass to add.
         * @param include_derived Whether object with dervied classes may be created in this container or not.
         */
        add_create_class_full(create_class: string, include_derived: boolean): void;
        /**
         * Add a new search class to the `container`.
         * @param search_class The searchClass to add.
         */
        add_search_class(search_class: string): void;
        /**
         * Add a new search class to the `container`.
         * @param search_class The searchClass to add.
         * @param include_derived includeDerived attribute of the DIDL
         */
        add_search_class_full(search_class: string, include_derived: boolean): void;
        /**
         * Get whether the container update ID of the `container` is set.
         * @returns %TRUE if update ID is set, otherwise %FALSE
         */
        container_update_id_is_set(): boolean;
        /**
         * Get the child count of the `container`.  If the child count is unknown, -1 is
         * returned.
         * @returns The child count of the @container, or -1 if it is unknown.
         */
        get_child_count(): number;
        /**
         * Get the container update ID of the `container`.
         * @returns The container update ID of the @container.
         */
        get_container_update_id(): number;
        /**
         * Gets the list of create classes of the `container`.
         * @returns The list of create classes belonging to @container, or %NULL. #g_list_free the returned list after usage and #g_free each string in it.
         */
        get_create_classes(): string[];
        /**
         * Gets the list of create classes of the `container`.
         * @returns The list of create classes belonging to @container, or %NULL. #g_list_free the returned list after usage and unref each object in it.
         */
        get_create_classes_full(): DIDLLiteCreateClass[];
        /**
         * Gets the list of search classes of the `container`.
         * @returns The list of search classes belonging to @container, or %NULL. #g_list_free the returned list after usage and #g_free each string in it.
         */
        get_search_classes(): string[];
        /**
         * Checks whether `container` is searchable.
         * @returns #TRUE if @container is searchable.
         */
        get_searchable(): boolean;
        /**
         * Get the number of bytes used by all child items of the `container`.
         * If storage used is unknown, -1 is returned.
         * @returns The number of bytes used by all children of the @container, or -1 if it is unknown.
         */
        get_storage_used(): number;
        /**
         * Get the total deleted child count of the `container`.
         * @returns The total deleted child count of the @container.
         */
        get_total_deleted_child_count(): number;
        /**
         * Set the child count of the `container`.
         * @param child_count The child count
         */
        set_child_count(child_count: number): void;
        /**
         * Set the container update ID of the `container`.
         * @param update_id The container update ID
         */
        set_container_update_id(update_id: number): void;
        /**
         * (Un)set the searchibility of `container`.
         * @param searchable The searchibility
         */
        set_searchable(searchable: boolean): void;
        /**
         * Set the number of bytes used by all child items of the `container`.
         * @param storage_used The number of bytes used by all child items of the                @container or -1 if unknown.
         */
        set_storage_used(storage_used: number): void;
        /**
         * Set the container update ID of the `container`.
         * @param count The container update ID
         */
        set_total_deleted_child_count(count: number): void;
        /**
         * Get whether the total deleted child conut of the `container` is set.
         * @returns %TRUE if property is set, otherwise %FALSE
         */
        total_deleted_child_count_is_set(): boolean;
        /**
         * Unset the container update ID property of the `container`.
         */
        unset_container_update_id(): void;
        /**
         * Unset the total deleted child count property of the `container`.
         */
        unset_total_deleted_child_count(): void;
    }

    module DIDLLiteContributor {
        // Constructor properties interface
    }

    class DIDLLiteContributor extends GObject.Object {
        // Own properties of GUPnPAV-1.0.DIDLLiteContributor

        /**
         * The name of this contributor.
         */
        name: string;
        /**
         * The role of this contributor.
         */
        role: string;
        /**
         * The pointer to object node in XML document.
         */
        xml_node: any;
        /**
         * The pointer to object node in XML document.
         */
        xmlNode: any;

        // Owm methods of GUPnPAV-1.0.DIDLLiteContributor

        /**
         * Get the name of the `contributor`.
         * @returns The name of the @contributor or %NULL.
         */
        get_name(): string;
        /**
         * Get the role of the `contributor`.
         * @returns The role of the @contributor, or %NULL.
         */
        get_role(): string;
        /**
         * Get the pointer to relevant node in XML document.
         * @returns The pointer to relevant node in XML document.
         */
        get_xml_node(): libxml2.Node;
        /**
         * Set the name of the `contributor` to `name`.
         * @param name The name of the contributor
         */
        set_name(name: string): void;
        /**
         * Set the role of the `contributor` to `role`.
         * @param role The role of the @contributor
         */
        set_role(role: string): void;
    }

    module DIDLLiteCreateClass {
        // Constructor properties interface
    }

    class DIDLLiteCreateClass extends GObject.Object {
        // Own properties of GUPnPAV-1.0.DIDLLiteCreateClass

        /**
         * The content of this create Class.
         */
        content: string;
        /**
         * The friendly name of this create Class.
         */
        friendly_name: string;
        /**
         * The friendly name of this create Class.
         */
        friendlyName: string;
        /**
         * Whether this create Class can be derived.
         */
        include_derived: boolean;
        /**
         * Whether this create Class can be derived.
         */
        includeDerived: boolean;
        /**
         * The pointer to desc node in XML document.
         */
        xml_node: any;
        /**
         * The pointer to desc node in XML document.
         */
        xmlNode: any;

        // Owm methods of GUPnPAV-1.0.DIDLLiteCreateClass

        /**
         * Get the content of the `create_class`.
         * @returns The Content of the @create_class, or %NULL.
         */
        get_content(): string;
        /**
         * Get the friendly name of the `create_class`.
         * @returns The FriendlyName of the @create_class, or %NULL.
         */
        get_friendly_name(): string;
        /**
         * Checks whether `create_class` can be derived.
         * @returns #TRUE if @create_class can be derived.
         */
        get_include_derived(): boolean;
        /**
         * Get the pointer to relevant node in XML document.
         * @returns The pointer to relevant node in XML document.
         */
        get_xml_node(): libxml2.Node;
        /**
         * Set the content of the `create_class`.
         * @param content The content
         */
        set_content(content: string): void;
        /**
         * Set the friendly name of the `create_class`.
         * @param friendly_name The friendly name
         */
        set_friendly_name(friendly_name: string): void;
        /**
         * (Un)set the derivability of create_class.
         * @param include_derived the derivability
         */
        set_include_derived(include_derived: boolean): void;
    }

    module DIDLLiteDescriptor {
        // Constructor properties interface
    }

    class DIDLLiteDescriptor extends GObject.Object {
        // Own properties of GUPnPAV-1.0.DIDLLiteDescriptor

        /**
         * The content of this descriptor.
         */
        content: string;
        /**
         * The ID of this descriptor.
         */
        id: string;
        /**
         * The type of this descriptor.
         */
        metadata_type: string;
        /**
         * The type of this descriptor.
         */
        metadataType: string;
        /**
         * The name space associated with this descriptor.
         */
        name_space: string;
        /**
         * The name space associated with this descriptor.
         */
        nameSpace: string;
        /**
         * The pointer to desc node in XML document.
         */
        xml_node: any;
        /**
         * The pointer to desc node in XML document.
         */
        xmlNode: any;

        // Constructors of GUPnPAV-1.0.DIDLLiteDescriptor

        static ['new'](): DIDLLiteDescriptor;

        // Owm methods of GUPnPAV-1.0.DIDLLiteDescriptor

        /**
         * Get the content of the `descriptor`.
         * @returns The content of the @descriptor or %NULL.
         */
        get_content(): string;
        /**
         * Get the ID of the `descriptor`.
         * @returns The ID string or %NULL.
         */
        get_id(): string;
        /**
         * Get the metadata type of the `descriptor`.
         * @returns The type as string or %NULL.
         */
        get_metadata_type(): string;
        /**
         * Get the name space associated with the `descriptor`.
         * @returns The name space or %NULL.
         */
        get_name_space(): string;
        /**
         * Get the pointer to desc node in XML document.
         * @returns The pointer to desc node in XML document.
         */
        get_xml_node(): libxml2.Node;
        /**
         * Set the content of the `descriptor`.
         * @param content The content as string
         */
        set_content(content: string): void;
        /**
         * Set the ID of the `descriptor`.
         * @param id The ID as string
         */
        set_id(id: string): void;
        /**
         * Set the metadata type of the `descriptor`.
         * @param type The metadata type as string
         */
        set_metadata_type(type: string): void;
        /**
         * Set the name space associated with the `descriptor`.
         * @param name_space The name space URI as string
         */
        set_name_space(name_space: string): void;
    }

    module DIDLLiteItem {
        // Constructor properties interface
    }

    class DIDLLiteItem extends DIDLLiteObject {
        // Own properties of GUPnPAV-1.0.DIDLLiteItem

        /**
         * The lifetime in seconds of this DIDLLite item in a media collection.
         */
        lifetime: number;
        /**
         * The ref ID of this item.
         */
        ref_id: string;
        /**
         * The ref ID of this item.
         */
        refId: string;

        // Owm methods of GUPnPAV-1.0.DIDLLiteItem

        get_lifetime(): number;
        /**
         * Get the ref ID of the `item`.
         * @returns The ref ID of the @item, or %NULL.
         */
        get_ref_id(): string;
        set_lifetime(lifetime: number): void;
        /**
         * Set the ref ID of the `item`.
         * @param ref_id The ref ID
         */
        set_ref_id(ref_id: string): void;
    }

    module DIDLLiteObject {
        // Constructor properties interface
    }

    abstract class DIDLLiteObject extends GObject.Object {
        // Own properties of GUPnPAV-1.0.DIDLLiteObject

        /**
         * The album of this object.
         */
        album: string;
        /**
         * The URI to album art of this object.
         */
        album_art: string;
        /**
         * The URI to album art of this object.
         */
        albumArt: string;
        /**
         * The artist of this object.
         */
        artist: string;
        /**
         * The author of this object.
         */
        author: string;
        /**
         * The creator of this object.
         */
        creator: string;
        /**
         * The date of this object.
         */
        date: string;
        /**
         * Pointer to the DublinCore namespace registered with the XML document
         * containing this object.
         */
        dc_namespace: any;
        /**
         * Pointer to the DublinCore namespace registered with the XML document
         * containing this object.
         */
        dcNamespace: any;
        /**
         * The description of this object.
         */
        description: string;
        /**
         * The 'dlna:dlnaManaged' attribute.
         */
        dlna_managed: OCMFlags;
        /**
         * The 'dlna:dlnaManaged' attribute.
         */
        dlnaManaged: OCMFlags;
        /**
         * Pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         */
        dlna_namespace: any;
        /**
         * Pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         */
        dlnaNamespace: any;
        /**
         * The genre of this object.
         */
        genre: string;
        /**
         * The ID of this object.
         */
        id: string;
        /**
         * The ID of the parent container of this object.
         */
        parent_id: string;
        /**
         * The ID of the parent container of this object.
         */
        parentId: string;
        /**
         * Pointer to the PV metadata namespace registered with the XML
         * document containing this object.
         */
        pv_namespace: any;
        /**
         * Pointer to the PV metadata namespace registered with the XML
         * document containing this object.
         */
        pvNamespace: any;
        /**
         * Whether this object is restricted.
         */
        restricted: boolean;
        /**
         * The title of this object.
         */
        title: string;
        /**
         * The original track number of this object.
         */
        track_number: number;
        /**
         * The original track number of this object.
         */
        trackNumber: number;
        /**
         * Update ID of this object.
         */
        update_id: number;
        /**
         * Update ID of this object.
         */
        updateId: number;
        /**
         * The UPnP class of this object.
         */
        upnp_class: string;
        /**
         * The UPnP class of this object.
         */
        upnpClass: string;
        /**
         * Pointer to the UPnP namespace registered with the XML document
         * containing this object.
         */
        upnp_namespace: any;
        /**
         * Pointer to the UPnP namespace registered with the XML document
         * containing this object.
         */
        upnpNamespace: any;
        /**
         * The write status of this object.
         */
        write_status: string;
        /**
         * The write status of this object.
         */
        writeStatus: string;
        /**
         * The pointer to object node in XML document.
         */
        xml_node: any;
        /**
         * The pointer to object node in XML document.
         */
        xmlNode: any;

        // Owm methods of GUPnPAV-1.0.DIDLLiteObject

        /**
         * Add a new Artist node to the `object` and return the associated
         * #GUPnPDIDLLiteContributor object.
         * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
         */
        add_artist(): DIDLLiteContributor;
        /**
         * Add a new author node to the `object` and return the associated
         * #GUPnPDIDLLiteContributor object.
         * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
         */
        add_author(): DIDLLiteContributor;
        /**
         * Add a new creator node to the `object` and return the associated
         * #GUPnPDIDLLiteContributor object.
         * @returns A new #GUPnPDIDLLiteContributor object. Unref after usage.
         */
        add_creator(): DIDLLiteContributor;
        /**
         * Creates a new descriptor, attaches it to `object` and returns it.
         * @returns A new #GUPnPDIDLLiteDescriptor object. Unref after usage.
         */
        add_descriptor(): DIDLLiteDescriptor;
        /**
         * Creates a new resource, attaches it to `object` and returns it.
         * @returns A new #GUPnPDIDLLiteResource object. Unref after usage.
         */
        add_resource(): DIDLLiteResource;
        /**
         * Updates object by applying `new_fragments` in places of
         * `current_fragments`. For `current_size` and `new_size` -1 can be
         * passed when respectively `current_fragments` and `new_fragments` are
         * NULL terminated.
         * @param current_fragments XML fragments of @object.
         * @param new_fragments Substitutes for @current_fragments.
         * @returns Result of operation.
         */
        apply_fragments(current_fragments: string[], new_fragments: string[]): DIDLLiteFragmentResult;
        /**
         * Get the album of the `object`.
         * @returns The album of the @object, or %NULL.
         */
        get_album(): string;
        /**
         * Get the URI to album art of the `object`.
         * @returns The URI to album art of the @object, or %NULL.
         */
        get_album_art(): string;
        /**
         * Creates a string representation of the DIDL-Lite XML fragment related to the
         * object album.
         * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
         */
        get_album_xml_string(): string;
        /**
         * Get the artist of the `object`. If role is not %NULL, it is set to the role
         * of the artist if available.
         * @returns The artist of the @object, or %NULL.
         */
        get_artist(): string;
        /**
         * Get the artists of the `object`.
         * @returns The list of artists belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
         */
        get_artists(): DIDLLiteContributor[];
        /**
         * Creates a string representation of the DIDL-Lite XML fragments related to the
         * object artists.
         * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
         */
        get_artists_xml_string(): string;
        /**
         * Get the author of the `object`.
         * @returns The author of the @object, or %NULL.
         */
        get_author(): string;
        /**
         * Get the authors of the `object`.
         * @returns The list of authors belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
         */
        get_authors(): DIDLLiteContributor[];
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
        get_compat_resource(sink_protocol_info: string, lenient: boolean): DIDLLiteResource;
        /**
         * Get the creator of the `object`.
         * @returns The creator of the @object, or %NULL.
         */
        get_creator(): string;
        /**
         * Get the creators of the `object`.
         * @returns The list of creators belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
         */
        get_creators(): DIDLLiteContributor[];
        /**
         * Get the date of the `object`.
         * @returns The date of the @object, or %NULL.
         */
        get_date(): string;
        /**
         * Creates a string representation of the DIDL-Lite XML fragment related to the
         * object date.
         * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
         */
        get_date_xml_string(): string;
        /**
         * Get the pointer to the DublinCore namespace registered with the XML document
         * containing this object.
         * @returns The pointer to DublinCore namespace in XML document.
         */
        get_dc_namespace(): libxml2.NsPtr;
        /**
         * Get the description of the `object`.
         * @returns The description of the @object, or %NULL.
         */
        get_description(): string;
        /**
         * Get the descriptors of the `object`.
         * @returns The list of descriptors belonging to @object, or %NULL. #g_list_free the returned list after usage and unref each object in it.
         */
        get_descriptors(): DIDLLiteDescriptor[];
        /**
         * Get the 'dlna:dlnaManaged' attribute of the `object`.
         * @returns The 'dlna:dlnaManaged' attribute of the @object.
         */
        get_dlna_managed(): OCMFlags;
        /**
         * Get the pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         * @returns The pointer to DLNA namespace in XML document.
         */
        get_dlna_namespace(): libxml2.NsPtr;
        /**
         * Get the genre of the `object`.
         * @returns The genre of the @object, or %NULL.
         */
        get_genre(): string;
        /**
         * Get the ID of the `object`.
         * @returns The ID of the @object, or %NULL.
         */
        get_id(): string;
        /**
         * Get the ID of the parent of the `object`.
         * @returns The ID of parent of the @object, or %NULL.
         */
        get_parent_id(): string;
        /**
         * Use this function to retreive property nodes by name.
         * @param name name of the properties
         * @returns The list of property nodes by the name @property_name belonging to @object, or %NULL. #g_list_free the returned list after usage but do not modify the contents.
         */
        get_properties(name: string): libxml2.Node[];
        /**
         * Get the pointer to the PV metadata namespace registered with the XML
         * document containing this object.
         * @returns The pointer to PV namespace in XML document.
         */
        get_pv_namespace(): libxml2.NsPtr;
        /**
         * Use this function to retreive resources from the `object`.
         * @returns The list               of resources belonging to  @object, or %NULL. #g_list_free the               returned list after usage and unref each resource in it.
         */
        get_resources(): DIDLLiteResource[];
        /**
         * Whether the `object` is restricted or not.
         * @returns #TRUE if @object is restricted.
         */
        get_restricted(): boolean;
        /**
         * Get the title of the `object`.
         * @returns The title of the @object, or %NULL.
         */
        get_title(): string;
        /**
         * Creates a string representation of the DIDL-Lite XML fragment related to the
         * object title.
         * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
         */
        get_title_xml_string(): string;
        /**
         * Get the original track number of the `object`.
         * @returns The original track number of the @object, or -1.
         */
        get_track_number(): number;
        /**
         * Creates a string representation of the DIDL-Lite XML fragment related to the
         * object track number.
         * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
         */
        get_track_number_xml_string(): string;
        /**
         * Get the update ID of the `object`.
         * @returns The update ID of the @object.
         */
        get_update_id(): number;
        /**
         * Get the UPnP class of the `object`.
         * @returns The class of @object, or %NULL.
         */
        get_upnp_class(): string;
        /**
         * Creates a string representation of the DIDL-Lite XML fragment related to the
         * object UPnP class.
         * @returns A DIDL-Lite XML fragment string, or %NULL. #g_free after usage.
         */
        get_upnp_class_xml_string(): string;
        /**
         * Get the pointer to the UPnP namespace registered with the XML document.
         * @returns The pointer to UPnP namespace in XML document.
         */
        get_upnp_namespace(): libxml2.NsPtr;
        /**
         * Get the write status of the `object`.
         * @returns The write status of the @object, or %NULL.
         */
        get_write_status(): string;
        /**
         * Get the pointer to object node in XML document.
         * @returns The pointer to object node in XML document.
         */
        get_xml_node(): libxml2.Node;
        /**
         * Get the representation of this object as an XML string.
         * @returns XML representation of this object as string.
         */
        get_xml_string(): string;
        /**
         * Whehter the restricted attribute exists on `object`
         * @returns #TRUE if restricted exists, #FALSE otherwise.
         */
        is_restricted_set(): boolean;
        /**
         * Set the album of the `object` to `album`.
         * @param album The album string
         */
        set_album(album: string): void;
        /**
         * Set the URI to album art of the `object` to `album_art`.
         * @param album_art The URI of album art
         */
        set_album_art(album_art: string): void;
        /**
         * Set the Artist of the `object` to `artist`.
         * @param artist The Artist
         */
        set_artist(artist: string): void;
        /**
         * Set the Author of the `object` to `author`.
         * @param author The Author
         */
        set_author(author: string): void;
        /**
         * Set the creator of the `object` to `creator`.
         * @param creator The creator
         */
        set_creator(creator: string): void;
        /**
         * Set the date of the `object` to `date`.
         * @param date The date string
         */
        set_date(date: string): void;
        /**
         * Set the description of the `object` to `description`.
         * @param description The description string
         */
        set_description(description: string): void;
        /**
         * Set the 'dlna:dlnaManaged' attribute of the `object` to `dlna_managed`.
         * @param dlna_managed The #GUPnPOCMFlags.
         */
        set_dlna_managed(dlna_managed: OCMFlags): void;
        /**
         * Set the genre of the `object` to `genre`.
         * @param genre The Genre
         */
        set_genre(genre: string): void;
        /**
         * Set the ID of the `object` to `id`.
         * @param id The ID
         */
        set_id(id: string): void;
        /**
         * Set the ID of the parent of the `object` to `parent_id`.
         * @param parent_id The parent ID
         */
        set_parent_id(parent_id: string): void;
        /**
         * Set the restricted status of `object` to `restricted`.
         * @param restricted The restricted status
         */
        set_restricted(restricted: boolean): void;
        /**
         * Set the title of the `object` to `title`.
         * @param title The title
         */
        set_title(title: string): void;
        /**
         * Set the original track number of the `object` to `track_number`.
         * @param track_number The original track number
         */
        set_track_number(track_number: number): void;
        /**
         * Set the update ID of the `object`.
         * @param update_id Update ID
         */
        set_update_id(update_id: number): void;
        /**
         * Set the UPnP class of the `object` to `upnp_class`.
         * @param upnp_class The UPnP class as string.
         */
        set_upnp_class(upnp_class: string): void;
        /**
         * Set the write status of the `object` to `write_status`.
         * @param write_status The write status string
         */
        set_write_status(write_status: string): void;
        /**
         * Unset the artists properties of the `object`.
         */
        unset_artists(): void;
        /**
         * Unset the update ID property of the `object`.
         */
        unset_update_id(): void;
        /**
         * Get whether the update ID of the `object` is set.
         * @returns %TRUE if update ID is set, otherwise %FALSE
         */
        update_id_is_set(): boolean;
    }

    module DIDLLiteParser {
        // Signal callback interfaces

        interface ContainerAvailable {
            (container: DIDLLiteContainer): void;
        }

        interface ItemAvailable {
            (item: DIDLLiteItem): void;
        }

        interface ObjectAvailable {
            (object: DIDLLiteObject): void;
        }

        // Constructor properties interface
    }

    class DIDLLiteParser extends GObject.Object {
        // Constructors of GUPnPAV-1.0.DIDLLiteParser

        static ['new'](): DIDLLiteParser;

        // Owm methods of GUPnPAV-1.0.DIDLLiteParser

        /**
         * Parses DIDL-Lite XML string `didl,` emitting the ::object-available,
         * ::item-available and ::container-available signals appropriately during the
         * process.
         * @param didl The DIDL-Lite XML string to be parsed
         * @returns TRUE on success.
         */
        parse_didl(didl: string): boolean;
    }

    module DIDLLiteResource {
        // Constructor properties interface
    }

    class DIDLLiteResource extends GObject.Object {
        // Own properties of GUPnPAV-1.0.DIDLLiteResource

        /**
         * The number of audio channels in this resource.
         */
        audio_channels: number;
        /**
         * The number of audio channels in this resource.
         */
        audioChannels: number;
        /**
         * The bitrate of this resource.
         */
        bitrate: number;
        /**
         * The sample size of this resource.
         */
        bits_per_sample: number;
        /**
         * The sample size of this resource.
         */
        bitsPerSample: number;
        cleartext_size: number;
        cleartextSize: number;
        /**
         * The color-depth of this image/video resource.
         */
        color_depth: number;
        /**
         * The color-depth of this image/video resource.
         */
        colorDepth: number;
        /**
         * Pointer to the DLNA metadata namespace registered with the
         * resource object.
         */
        dlna_namespace: any;
        /**
         * Pointer to the DLNA metadata namespace registered with the
         * resource object.
         */
        dlnaNamespace: any;
        /**
         * The duration (in seconds) of this resource.
         */
        duration: number;
        /**
         * The height of this image/video resource.
         */
        height: number;
        /**
         * The Import URI associated with this resource.
         */
        import_uri: string;
        /**
         * The Import URI associated with this resource.
         */
        importUri: string;
        /**
         * The protection system used for this resource.
         */
        protection: string;
        /**
         * The protocol info associated with this resource.
         */
        protocol_info: ProtocolInfo;
        /**
         * The protocol info associated with this resource.
         */
        protocolInfo: ProtocolInfo;
        /**
         * Pointer to the PV metadata namespace registered with the
         * resource object.
         */
        pv_namespace: any;
        /**
         * Pointer to the PV metadata namespace registered with the
         * resource object.
         */
        pvNamespace: any;
        /**
         * The sample frequency of this resource.
         */
        sample_freq: number;
        /**
         * The sample frequency of this resource.
         */
        sampleFreq: number;
        /**
         * The size (in bytes) of this resource.
         */
        size: number;
        /**
         * The size (in bytes) of this resource.
         */
        size64: number;
        /**
         * Type of external subtitle file. Usually SRT or SMI.
         */
        subtitle_file_type: string;
        /**
         * Type of external subtitle file. Usually SRT or SMI.
         */
        subtitleFileType: string;
        /**
         * Uri to external subtitle file.
         */
        subtitle_file_uri: string;
        /**
         * Uri to external subtitle file.
         */
        subtitleFileUri: string;
        /**
         * Number of tracks in a DIDL_S or DIDL_V resource.
         */
        track_total: number;
        /**
         * Number of tracks in a DIDL_S or DIDL_V resource.
         */
        trackTotal: number;
        update_count: number;
        updateCount: number;
        /**
         * The URI associated with this resource.
         */
        uri: string;
        /**
         * The width of this image/video resource.
         */
        width: number;
        /**
         * The pointer to res node in XML document.
         */
        xml_node: any;
        /**
         * The pointer to res node in XML document.
         */
        xmlNode: any;

        // Owm methods of GUPnPAV-1.0.DIDLLiteResource

        /**
         * Get the number of audio channels in the `resource`.
         * @returns The number of audio channels in the @resource or -1.
         */
        get_audio_channels(): number;
        /**
         * Get the bitrate (in bytes per second) of the `resource`.
         * @returns The bitrate (in bytes per second) of the @resource or -1.
         */
        get_bitrate(): number;
        /**
         * Get the sample size of the `resource`.
         * @returns The number of bits per sample of the @resource or -1.
         */
        get_bits_per_sample(): number;
        /**
         * Get the size (in bytes) of the `resource`.
         * @returns The size (in bytes) of the @resource or -1.
         */
        get_cleartext_size(): number;
        /**
         * Get the color-depth of this image/video resource.
         * @returns The color depth of the @resource or -1.
         */
        get_color_depth(): number;
        /**
         * Get the pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         * @returns The pointer to DLNA namespace in XML document.
         */
        get_dlna_namespace(): libxml2.NsPtr;
        /**
         * Get the duration (in seconds) of the `resource`.
         * @returns The duration (in seconds) of the @resource or -1.
         */
        get_duration(): number;
        /**
         * Get the height of this image/video resource.
         * @returns The height of the @resource or -1.
         */
        get_height(): number;
        /**
         * Get the import URI associated with the `resource`.
         * @returns The import URI or %NULL.
         */
        get_import_uri(): string;
        /**
         * Get the protection system used by the `resource`.
         * @returns The protection system in use by the @resource or %NULL.
         */
        get_protection(): string;
        /**
         * Get the protocol info associated with the `resource`.
         * @returns The protocol info associated with the @resource or %NULL. The returned object must not be unrefed.
         */
        get_protocol_info(): ProtocolInfo | null;
        /**
         * Get the pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         * @returns The pointer to DLNA namespace in XML document.
         */
        get_pv_namespace(): libxml2.NsPtr;
        /**
         * Get the sample frequency of the `resource`.
         * @returns The sample frequency of the @resource or -1.
         */
        get_sample_freq(): number;
        /**
         * Get the size (in bytes) of the `resource`.
         * @returns The size (in bytes) of the @resource or -1.
         */
        get_size(): number;
        /**
         * Get the size (in bytes) of the `resource`.
         * @returns The size (in bytes) of the @resource or -1.
         */
        get_size64(): number;
        get_subtitle_file_type(): string;
        get_subtitle_file_uri(): string;
        /**
         * Get the total track count of this resource.
         * @returns The total track count of the @resource.
         */
        get_track_total(): number;
        /**
         * Get the update count of this resource.
         * @returns The update count of the @resource.
         */
        get_update_count(): number;
        /**
         * Get the URI associated with the `resource`.
         * @returns The of URI the @resource or %NULL.
         */
        get_uri(): string | null;
        /**
         * Get the width of this image/video resource.
         * @returns The width of this image/video resource or -1.
         */
        get_width(): number;
        /**
         * Get the pointer to res node in XML document.
         * @returns The pointer to res node in XML document.
         */
        get_xml_node(): libxml2.Node;
        /**
         * Set the number of audio channels in the `resource`. Passing a negative number
         * will unset this property.
         * @param n_channels The number of channels
         */
        set_audio_channels(n_channels: number): void;
        /**
         * Set the bitrate (in bytes per second) of the `resource`. Passing a negative
         * number will unset this property.
         * @param bitrate The bitrate
         */
        set_bitrate(bitrate: number): void;
        /**
         * Set the sample size of the `resource`. Passing a negative number will unset
         * this property.
         * @param sample_size The number of bits per sample
         */
        set_bits_per_sample(sample_size: number): void;
        /**
         * Set the size (in bytes) of the `resource`. Passing a negative number will
         * unset this property.
         * @param cleartext_size The size (in bytes)
         */
        set_cleartext_size(cleartext_size: number): void;
        /**
         * Set the color-depth of this image/video resource. Passing a negative number
         * will unset this property.
         * @param color_depth The color-depth
         */
        set_color_depth(color_depth: number): void;
        /**
         * Set the duration (in seconds) of the `resource`. Passing a negative number
         * will unset this property.
         * @param duration The duration (in seconds)
         */
        set_duration(duration: number): void;
        /**
         * Set the height of this image/video resource. Setting both width and height to
         * a negative number will unset the resolution property.
         * @param height The height
         */
        set_height(height: number): void;
        /**
         * Set the import URI associated with the `resource`.
         * @param import_uri The URI as string
         */
        set_import_uri(import_uri: string): void;
        /**
         * Set the protection system used by the `resource`. Passing a negative number
         * will unset this property.
         * @param protection The protection system identifier as string
         */
        set_protection(protection: string): void;
        /**
         * Set the protocol info associated with the `resource`.
         * @param info The protocol string
         */
        set_protocol_info(info: ProtocolInfo): void;
        /**
         * Set the sample frequency of the `resource`. Passing a negative number will
         * unset this property.
         * @param sample_freq The sample frequency
         */
        set_sample_freq(sample_freq: number): void;
        /**
         * Set the size (in bytes) of the `resource`. Passing a negative number will
         * unset this property.
         * @param size The size (in bytes)
         */
        set_size(size: number): void;
        /**
         * Set the size (in bytes) of the `resource`. Passing a negative number will
         * unset this property.
         * @param size The size (in bytes)
         */
        set_size64(size: number): void;
        /**
         * Set the type of an external subtitle file, specified via
         * pv:subtitleFileUri using gupnp_didl_lite_resource_set_subtitle_file_uri().
         *
         * When `type` is %NULL the value is removed.
         * @param type An URI to an external subtitle file
         */
        set_subtitle_file_type(type?: string | null): void;
        /**
         * Set the URI of an external subtitle file to be used with this resource.
         * When `uri` is %NULL the value is removed.
         * @param uri An URI to an external subtitle file or %NULL to remove.
         */
        set_subtitle_file_uri(uri?: string | null): void;
        /**
         * Set the total number of tracks in this resource.
         * @param track_total The total number of tracks in this resource
         */
        set_track_total(track_total: number): void;
        /**
         * Set the update count of this resource.
         * @param update_count The update_count
         */
        set_update_count(update_count: number): void;
        /**
         * Set the URI associated with the `resource`.
         * @param uri The URI as string
         */
        set_uri(uri: string): void;
        /**
         * Set the width of this image/video resource. Setting both width and height to
         * a negative number will unset the resolution property.
         * @param width The width
         */
        set_width(width: number): void;
        /**
         * Check whether the total track count property of this resource is set.
         * @returns %TRUE if set, otherwise %FALSE.
         */
        track_total_is_set(): boolean;
        /**
         * Unset the total track count of this resource.
         */
        unset_track_total(): void;
        /**
         * Unset the update count of this resource.
         */
        unset_update_count(): void;
        /**
         * Check whether the update count property of this resource is set.
         * @returns %TRUE if set, otherwise %FALSE.
         */
        update_count_is_set(): boolean;
    }

    module DIDLLiteWriter {
        // Constructor properties interface
    }

    class DIDLLiteWriter extends GObject.Object {
        // Own properties of GUPnPAV-1.0.DIDLLiteWriter

        /**
         * The language the DIDL-Lite fragment is in.
         */
        language: string;
        /**
         * The pointer to root node in XML document.
         */
        readonly xml_node: any;
        /**
         * The pointer to root node in XML document.
         */
        readonly xmlNode: any;

        // Constructors of GUPnPAV-1.0.DIDLLiteWriter

        static ['new'](language?: string | null): DIDLLiteWriter;

        // Owm methods of GUPnPAV-1.0.DIDLLiteWriter

        /**
         * Creates a new container, attaches it to `writer` and returns it.
         * @returns A new #GUPnPDIDLLiteContainer object. Unref after usage.
         */
        add_container(): DIDLLiteContainer;
        /**
         * Creates a new descriptor, attaches it to `object` and returns it.
         * @returns A new #GUPnPDIDLLiteDescriptor object. Unref after usage.
         */
        add_descriptor(): DIDLLiteDescriptor;
        /**
         * Creates a new item, attaches it to `writer` and returns it.
         * @returns A new #GUPnPDIDLLiteItem object. Unref after usage.
         */
        add_item(): DIDLLiteItem;
        /**
         * Clears the DIDL-Lite XML document of the properties not specified in the
         * `filter`. The passed filter string would typically come from the 'Filter'
         * argument of Browse or Search actions from a ContentDirectory control point.
         * Please refer to Section 2.3.15 of UPnP AV ContentDirectory version 3
         * specification for details on this string.
         * @param filter A filter string
         */
        filter(filter: string): void;
        /**
         * Get the language the DIDL-Lite fragment is in.
         * @returns The language of the @writer, or %NULL.
         */
        get_language(): string;
        /**
         * Creates a string representation of the DIDL-Lite XML document.
         * @returns The DIDL-Lite XML string, or %NULL. #g_free after usage.
         */
        get_string(): string;
        /**
         * Get the pointer to root node in XML document.
         * @returns The pointer to root node in XML document.
         */
        get_xml_node(): libxml2.Node;
    }

    module Feature {
        // Constructor properties interface
    }

    class Feature extends GObject.Object {
        // Own properties of GUPnPAV-1.0.Feature

        /**
         * The name of this feature.
         */
        name: string;
        /**
         * The object IDs related to this feature.
         */
        object_ids: string;
        /**
         * The object IDs related to this feature.
         */
        objectIds: string;
        /**
         * The version of this feature.
         */
        version: string;

        // Owm methods of GUPnPAV-1.0.Feature

        /**
         * Get the name of the `feature`.
         * @returns The name of the @feature.
         */
        get_name(): string;
        /**
         * Get the object IDs related to the `feature`.
         * @returns The object IDs related to the @feature.
         */
        get_object_ids(): string;
        /**
         * Get the version of the `feature`.
         * @returns The version of the @feature.
         */
        get_version(): string;
    }

    module FeatureListParser {
        // Constructor properties interface
    }

    class FeatureListParser extends GObject.Object {
        // Constructors of GUPnPAV-1.0.FeatureListParser

        static ['new'](): FeatureListParser;

        // Owm methods of GUPnPAV-1.0.FeatureListParser

        /**
         * Parses `text` and returns the list of available features.
         * If an error occured `error` will be set.
         * @param text The feature list string to be parsed
         * @returns The list of features or %NULL if an error occured.
         */
        parse_text(text: string): Feature[] | null;
    }

    module LastChangeParser {
        // Constructor properties interface
    }

    class LastChangeParser extends GObject.Object {
        // Constructors of GUPnPAV-1.0.LastChangeParser

        static ['new'](): LastChangeParser;
    }

    module MediaCollection {
        // Constructor properties interface
    }

    class MediaCollection extends GObject.Object {
        // Own properties of GUPnPAV-1.0.MediaCollection

        /**
         * The author of this media collection.
         */
        author: string;
        /**
         * Block of data to parse a collection from. If data is set upon
         * construction it will override the other properties and create a
         * unmutable collection parsed from data.
         */
        data: string;
        /**
         * Whether this media collation is modifyable or not.
         */
        readonly mutable: boolean;
        /**
         * The title of this media collection.
         */
        title: string;

        // Constructors of GUPnPAV-1.0.MediaCollection

        static ['new'](): MediaCollection;

        static new_from_string(data: string): MediaCollection;

        // Owm methods of GUPnPAV-1.0.MediaCollection

        add_item(): DIDLLiteItem;
        get_author(): string;
        get_items(): DIDLLiteItem[];
        get_mutable(): boolean;
        get_string(): string;
        get_title(): string | null;
        /**
         * Set the author of the media collection
         * @param author New author of this media collection.
         */
        set_author(author: string): void;
        /**
         * Set the title of a #GUPnPMediaCollection.
         * @param title New Title of this collection;
         */
        set_title(title: string): void;
    }

    module ProtocolInfo {
        // Constructor properties interface
    }

    class ProtocolInfo extends GObject.Object {
        // Own properties of GUPnPAV-1.0.ProtocolInfo

        /**
         * The DLNA conversion flags.
         */
        dlna_conversion: DLNAConversion;
        /**
         * The DLNA conversion flags.
         */
        dlnaConversion: DLNAConversion;
        /**
         * Various generic DLNA flags.
         */
        dlna_flags: DLNAFlags;
        /**
         * Various generic DLNA flags.
         */
        dlnaFlags: DLNAFlags;
        /**
         * The DLNA operation flags.
         */
        dlna_operation: DLNAOperation;
        /**
         * The DLNA operation flags.
         */
        dlnaOperation: DLNAOperation;
        /**
         * The DLNA profile of this info.
         */
        dlna_profile: string;
        /**
         * The DLNA profile of this info.
         */
        dlnaProfile: string;
        /**
         * The MIME-type of this info.
         */
        mime_type: string;
        /**
         * The MIME-type of this info.
         */
        mimeType: string;
        /**
         * The network this info is associated with.
         */
        network: string;
        /**
         * The allowed play speeds on this info in the form of array of
         * strings.
         */
        play_speeds: string[];
        /**
         * The allowed play speeds on this info in the form of array of
         * strings.
         */
        playSpeeds: string[];
        /**
         * The protocol of this info.
         */
        protocol: string;

        // Constructors of GUPnPAV-1.0.ProtocolInfo

        static ['new'](): ProtocolInfo;

        static new_from_string(protocol_info: string): ProtocolInfo;

        // Owm methods of GUPnPAV-1.0.ProtocolInfo

        /**
         * Get the DLNA conversion flags.
         * @returns The DLNA conversion flags.
         */
        get_dlna_conversion(): DLNAConversion;
        /**
         * Get the gereric DLNA flags.
         * @returns The generic DLNA flags.
         */
        get_dlna_flags(): DLNAFlags;
        /**
         * Get the DLNA operation flags.
         * @returns The DLNA operation flags.
         */
        get_dlna_operation(): DLNAOperation;
        /**
         * Get the DLNA profile of this info.
         * @returns The DLNA profile of this info or %NULL. This string should not be freed.
         */
        get_dlna_profile(): string | null;
        /**
         * Get the MIME-type of this info.
         * @returns The MIME-type of this info or %NULL. This string should not be freed.
         */
        get_mime_type(): string | null;
        /**
         * Get the network this info is associated with.
         * @returns The network string or %NULL. This string should not be freed.
         */
        get_network(): string | null;
        /**
         * Get the allowed play speeds on this info in the form of array of strings.
         * @returns The allowed play speeds as array of strings or %NULL. This return array and it's content must not be modified or freed.
         */
        get_play_speeds(): string[] | null;
        /**
         * Get the protocol of this info.
         * @returns The protocol of this info or %NULL. This string should not be freed.
         */
        get_protocol(): string | null;
        /**
         * Checks if the given protocolInfo string is compatible with `info`.
         * @param info2 The second #GUPnPProtocolInfo
         * @returns #TRUE if @protocol_info is compatible with @info, otherwise #FALSE.
         */
        is_compatible(info2: ProtocolInfo): boolean;
        /**
         * Set the DLNA conversion flags.
         * @param conversion The bitwise OR of one or more DLNA conversion flags
         */
        set_dlna_conversion(conversion: DLNAConversion): void;
        /**
         * Set the gereric DLNA flags.
         * @param flags The bitwise OR of one or more generic DLNA flags
         */
        set_dlna_flags(flags: DLNAFlags): void;
        /**
         * Set the DLNA operation flags.
         * @param operation The bitwise OR of one or more DLNA operation flags
         */
        set_dlna_operation(operation: DLNAOperation): void;
        /**
         * Set the DLNA profile of this info.
         * @param profile The DLNA profile string
         */
        set_dlna_profile(profile: string): void;
        /**
         * Set the MIME-type of this info.
         * @param mime_type The MIME-type string
         */
        set_mime_type(mime_type: string): void;
        /**
         * Set the network this info is associated with.
         * @param network The network string
         */
        set_network(network: string): void;
        /**
         * Set the allowed play speeds on this info in the form of array of strings.
         * @param speeds The allowed play speeds
         */
        set_play_speeds(speeds: string): void;
        /**
         * Set the protocol of this info.
         * @param protocol The protocol string
         */
        set_protocol(protocol: string): void;
        /**
         * Provides the string representation of `info`.
         * @returns String representation of @info. #g_free after usage.
         */
        to_string(): string | null;
    }

    module SearchCriteriaParser {
        // Signal callback interfaces

        interface BeginParens {
            (): void;
        }

        interface Conjunction {
            (): void;
        }

        interface Disjunction {
            (): void;
        }

        interface EndParens {
            (): void;
        }

        interface Expression {
            (property: string, op: SearchCriteriaOp, value: string, error?: any | null): boolean;
        }

        // Constructor properties interface
    }

    class SearchCriteriaParser extends GObject.Object {
        // Constructors of GUPnPAV-1.0.SearchCriteriaParser

        static ['new'](): SearchCriteriaParser;

        // Owm methods of GUPnPAV-1.0.SearchCriteriaParser

        static error_quark(): GLib.Quark;

        // Owm methods of GUPnPAV-1.0.SearchCriteriaParser

        /**
         * Parses `text,` emitting the various defined signals on the way. If an
         * error occured `error` will be set.
         * @param text The search criteria string to be parsed
         * @returns TRUE on success.
         */
        parse_text(text: string): boolean;
    }

    /**
     * Opaque struct which contains information about the event.
     */
    class CDSLastChangeEntry {
        // Owm methods of GUPnPAV-1.0.CDSLastChangeEntry

        /**
         * Get the class of the object in this change entry. This is only
         * valid if gupnp_cds_last_change_entry_get_event() returns
         * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
         * @returns The upnp class of the object of this entry.
         */
        get_class(): string;
        /**
         * Get the type of the last change entry as defined in
         * #GUPnPCDSLastChangeEvent.
         * @returns An event from the #GUPnPCDSLastChangeEvent or %GUPNP_CDS_LAST_CHANGE_EVENT_INVALID if the entry is not valid.
         */
        get_event(): CDSLastChangeEvent;
        /**
         * Get the ID of the object in this change entry.
         * @returns The id of the object of this entry.
         */
        get_object_id(): string;
        /**
         * Get the parent object id of the object in this change entry. This is only
         * valid if gupnp_cds_last_change_entry_get_event() returns
         * %GUPNP_CDS_LAST_CHANGE_EVENT_OBJECT_ADDED.
         * @returns The id of the object's parent of this entry.
         */
        get_parent_id(): string;
        /**
         * Get the update id of the last change entry.
         * @returns update id of the entry or 0 if the entry is not valid.
         */
        get_update_id(): number;
        /**
         * Returns whether this entry is part of a subtree update.
         * @returns %TRUE, if the entry is part of a subtree update, %FALSE otherwise.
         */
        is_subtree_update(): boolean;
        /**
         * Increase reference count of a #GUPnPCDSLastChangeEntry.
         * @returns The object passed in @entry.
         */
        ref(): CDSLastChangeEntry;
        /**
         * Decrease reference count of a #GUPnPCDSLastChangeEntry. If the reference
         * count drops to 0, `entry` is freed.
         */
        unref(): void;
    }

    class CDSLastChangeParserClass {}

    class DIDLLiteContainerClass {}

    class DIDLLiteContributorClass {}

    class DIDLLiteCreateClassClass {}

    class DIDLLiteDescriptorClass {}

    class DIDLLiteItemClass {}

    class DIDLLiteObjectClass {}

    class DIDLLiteObjectPrivate {}

    class DIDLLiteParserClass {}

    class DIDLLiteResourceClass {}

    class DIDLLiteWriterClass {}

    class FeatureClass {}

    class FeatureListParserClass {}

    class LastChangeParserClass {}

    class MediaCollectionClass {}

    class ProtocolInfoClass {}

    class SearchCriteriaParserClass {}

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GUPnPAV;
// END
