/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GUPnPAV {
    /**
     * GUPnPAV-1.0
     */

    export namespace CDSLastChangeEvent {
        export const $gtype: GObject.GType<CDSLastChangeEvent>;
    }

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

    /**
     * Possible return values of the gupnp_didl_lite_object_apply_fragments() call.
     */
    export namespace DIDLLiteFragmentResult {
        export const $gtype: GObject.GType<DIDLLiteFragmentResult>;
    }

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
        static $gtype: GObject.GType<ProtocolError>;

        // Static fields of GUPnPAV.ProtocolError

        /**
         * Invalid syntax.
         */
        static INVALID_SYNTAX: number;
        /**
         * Unknown/unhandled protocol related errors.
         */
        static OTHER: number;

        // Constructors of GUPnPAV.ProtocolError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * The possible operators in SearchCriteria strings.
     */

    /**
     * The possible operators in SearchCriteria strings.
     */
    export namespace SearchCriteriaOp {
        export const $gtype: GObject.GType<SearchCriteriaOp>;
    }

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

    export namespace SearchCriteriaParserError {
        export const $gtype: GObject.GType<SearchCriteriaParserError>;
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

    /**
     * The DLNA conversion flags for a resource.
     */
    export namespace DLNAConversion {
        export const $gtype: GObject.GType<DLNAConversion>;
    }

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

    /**
     * The miscellaneous operations supported by a resource. For details on these
     * flags please refer to section 7.3.37.2 of DLNA Networked Device
     * Interoperability Guidelines Volume 1, October 2006.
     *
     * Updated DTCP Flags based on 2011 Guidelines, section 7.4.1.3.23.2
     */
    export namespace DLNAFlags {
        export const $gtype: GObject.GType<DLNAFlags>;
    }

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

    /**
     * The seek operations supported by a resource.
     */
    export namespace DLNAOperation {
        export const $gtype: GObject.GType<DLNAOperation>;
    }

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

    /**
     * The DLNA OCM flags supported by a DIDL-Lite Object. For details on these
     * flags please refer to section 7.3.118.4 of DLNA Networked Device
     * Interoperability Guidelines Volume 1, October 2006.
     */
    export namespace OCMFlags {
        export const $gtype: GObject.GType<OCMFlags>;
    }

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CDSLastChangeParser extends GObject.Object {
        static $gtype: GObject.GType<CDSLastChangeParser>;

        // Constructors of GUPnPAV.CDSLastChangeParser

        constructor(properties?: Partial<CDSLastChangeParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CDSLastChangeParser;

        // Own methods of GUPnPAV.CDSLastChangeParser

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

        interface ConstructorProps extends DIDLLiteObject.ConstructorProps {
            child_count: number;
            childCount: number;
            container_update_id: number;
            containerUpdateId: number;
            searchable: boolean;
            storage_used: number;
            storageUsed: number;
            total_deleted_child_count: number;
            totalDeletedChildCount: number;
        }
    }

    class DIDLLiteContainer extends DIDLLiteObject {
        static $gtype: GObject.GType<DIDLLiteContainer>;

        // Own properties of GUPnPAV.DIDLLiteContainer

        /**
         * The child count of this container.
         */
        get child_count(): number;
        set child_count(val: number);
        /**
         * The child count of this container.
         */
        get childCount(): number;
        set childCount(val: number);
        /**
         * Update ID of this container.
         */
        get container_update_id(): number;
        set container_update_id(val: number);
        /**
         * Update ID of this container.
         */
        get containerUpdateId(): number;
        set containerUpdateId(val: number);
        /**
         * Whether this container is searchable.
         */
        get searchable(): boolean;
        set searchable(val: boolean);
        /**
         * The number of bytes used by all child items of this container.
         */
        get storage_used(): number;
        set storage_used(val: number);
        /**
         * The number of bytes used by all child items of this container.
         */
        get storageUsed(): number;
        set storageUsed(val: number);
        /**
         * Total deleted child count of this container.
         */
        get total_deleted_child_count(): number;
        set total_deleted_child_count(val: number);
        /**
         * Total deleted child count of this container.
         */
        get totalDeletedChildCount(): number;
        set totalDeletedChildCount(val: number);

        // Constructors of GUPnPAV.DIDLLiteContainer

        constructor(properties?: Partial<DIDLLiteContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.DIDLLiteContainer

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            role: string;
            xml_node: any;
            xmlNode: any;
        }
    }

    class DIDLLiteContributor extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteContributor>;

        // Own properties of GUPnPAV.DIDLLiteContributor

        /**
         * The name of this contributor.
         */
        get name(): string;
        set name(val: string);
        /**
         * The role of this contributor.
         */
        get role(): string;
        set role(val: string);
        /**
         * The pointer to object node in XML document.
         */
        get xml_node(): any;
        /**
         * The pointer to object node in XML document.
         */
        get xmlNode(): any;

        // Constructors of GUPnPAV.DIDLLiteContributor

        constructor(properties?: Partial<DIDLLiteContributor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.DIDLLiteContributor

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content: string;
            friendly_name: string;
            friendlyName: string;
            include_derived: boolean;
            includeDerived: boolean;
            xml_node: any;
            xmlNode: any;
        }
    }

    class DIDLLiteCreateClass extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteCreateClass>;

        // Own properties of GUPnPAV.DIDLLiteCreateClass

        /**
         * The content of this create Class.
         */
        get content(): string;
        set content(val: string);
        /**
         * The friendly name of this create Class.
         */
        get friendly_name(): string;
        set friendly_name(val: string);
        /**
         * The friendly name of this create Class.
         */
        get friendlyName(): string;
        set friendlyName(val: string);
        /**
         * Whether this create Class can be derived.
         */
        get include_derived(): boolean;
        set include_derived(val: boolean);
        /**
         * Whether this create Class can be derived.
         */
        get includeDerived(): boolean;
        set includeDerived(val: boolean);
        /**
         * The pointer to desc node in XML document.
         */
        get xml_node(): any;
        /**
         * The pointer to desc node in XML document.
         */
        get xmlNode(): any;

        // Constructors of GUPnPAV.DIDLLiteCreateClass

        constructor(properties?: Partial<DIDLLiteCreateClass.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.DIDLLiteCreateClass

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content: string;
            id: string;
            metadata_type: string;
            metadataType: string;
            name_space: string;
            nameSpace: string;
            xml_node: any;
            xmlNode: any;
        }
    }

    class DIDLLiteDescriptor extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteDescriptor>;

        // Own properties of GUPnPAV.DIDLLiteDescriptor

        /**
         * The content of this descriptor.
         */
        get content(): string;
        set content(val: string);
        /**
         * The ID of this descriptor.
         */
        get id(): string;
        set id(val: string);
        /**
         * The type of this descriptor.
         */
        get metadata_type(): string;
        set metadata_type(val: string);
        /**
         * The type of this descriptor.
         */
        get metadataType(): string;
        set metadataType(val: string);
        /**
         * The name space associated with this descriptor.
         */
        get name_space(): string;
        set name_space(val: string);
        /**
         * The name space associated with this descriptor.
         */
        get nameSpace(): string;
        set nameSpace(val: string);
        /**
         * The pointer to desc node in XML document.
         */
        get xml_node(): any;
        /**
         * The pointer to desc node in XML document.
         */
        get xmlNode(): any;

        // Constructors of GUPnPAV.DIDLLiteDescriptor

        constructor(properties?: Partial<DIDLLiteDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DIDLLiteDescriptor;

        // Own methods of GUPnPAV.DIDLLiteDescriptor

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

        interface ConstructorProps extends DIDLLiteObject.ConstructorProps {
            lifetime: number;
            ref_id: string;
            refId: string;
        }
    }

    class DIDLLiteItem extends DIDLLiteObject {
        static $gtype: GObject.GType<DIDLLiteItem>;

        // Own properties of GUPnPAV.DIDLLiteItem

        /**
         * The lifetime in seconds of this DIDLLite item in a media collection.
         */
        get lifetime(): number;
        set lifetime(val: number);
        /**
         * The ref ID of this item.
         */
        get ref_id(): string;
        set ref_id(val: string);
        /**
         * The ref ID of this item.
         */
        get refId(): string;
        set refId(val: string);

        // Constructors of GUPnPAV.DIDLLiteItem

        constructor(properties?: Partial<DIDLLiteItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.DIDLLiteItem

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            album: string;
            album_art: string;
            albumArt: string;
            artist: string;
            author: string;
            creator: string;
            date: string;
            dc_namespace: any;
            dcNamespace: any;
            description: string;
            dlna_managed: OCMFlags;
            dlnaManaged: OCMFlags;
            dlna_namespace: any;
            dlnaNamespace: any;
            genre: string;
            id: string;
            parent_id: string;
            parentId: string;
            pv_namespace: any;
            pvNamespace: any;
            restricted: boolean;
            title: string;
            track_number: number;
            trackNumber: number;
            update_id: number;
            updateId: number;
            upnp_class: string;
            upnpClass: string;
            upnp_namespace: any;
            upnpNamespace: any;
            write_status: string;
            writeStatus: string;
            xml_node: any;
            xmlNode: any;
        }
    }

    abstract class DIDLLiteObject extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteObject>;

        // Own properties of GUPnPAV.DIDLLiteObject

        /**
         * The album of this object.
         */
        get album(): string;
        set album(val: string);
        /**
         * The URI to album art of this object.
         */
        get album_art(): string;
        set album_art(val: string);
        /**
         * The URI to album art of this object.
         */
        get albumArt(): string;
        set albumArt(val: string);
        /**
         * The artist of this object.
         */
        get artist(): string;
        set artist(val: string);
        /**
         * The author of this object.
         */
        get author(): string;
        set author(val: string);
        /**
         * The creator of this object.
         */
        get creator(): string;
        set creator(val: string);
        /**
         * The date of this object.
         */
        get date(): string;
        set date(val: string);
        /**
         * Pointer to the DublinCore namespace registered with the XML document
         * containing this object.
         */
        get dc_namespace(): any;
        /**
         * Pointer to the DublinCore namespace registered with the XML document
         * containing this object.
         */
        get dcNamespace(): any;
        /**
         * The description of this object.
         */
        get description(): string;
        set description(val: string);
        /**
         * The 'dlna:dlnaManaged' attribute.
         */
        get dlna_managed(): OCMFlags;
        set dlna_managed(val: OCMFlags);
        /**
         * The 'dlna:dlnaManaged' attribute.
         */
        get dlnaManaged(): OCMFlags;
        set dlnaManaged(val: OCMFlags);
        /**
         * Pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         */
        get dlna_namespace(): any;
        /**
         * Pointer to the DLNA metadata namespace registered with the XML
         * document containing this object.
         */
        get dlnaNamespace(): any;
        /**
         * The genre of this object.
         */
        get genre(): string;
        set genre(val: string);
        /**
         * The ID of this object.
         */
        get id(): string;
        set id(val: string);
        /**
         * The ID of the parent container of this object.
         */
        get parent_id(): string;
        set parent_id(val: string);
        /**
         * The ID of the parent container of this object.
         */
        get parentId(): string;
        set parentId(val: string);
        /**
         * Pointer to the PV metadata namespace registered with the XML
         * document containing this object.
         */
        get pv_namespace(): any;
        /**
         * Pointer to the PV metadata namespace registered with the XML
         * document containing this object.
         */
        get pvNamespace(): any;
        /**
         * Whether this object is restricted.
         */
        get restricted(): boolean;
        set restricted(val: boolean);
        /**
         * The title of this object.
         */
        get title(): string;
        set title(val: string);
        /**
         * The original track number of this object.
         */
        get track_number(): number;
        set track_number(val: number);
        /**
         * The original track number of this object.
         */
        get trackNumber(): number;
        set trackNumber(val: number);
        /**
         * Update ID of this object.
         */
        get update_id(): number;
        set update_id(val: number);
        /**
         * Update ID of this object.
         */
        get updateId(): number;
        set updateId(val: number);
        /**
         * The UPnP class of this object.
         */
        get upnp_class(): string;
        set upnp_class(val: string);
        /**
         * The UPnP class of this object.
         */
        get upnpClass(): string;
        set upnpClass(val: string);
        /**
         * Pointer to the UPnP namespace registered with the XML document
         * containing this object.
         */
        get upnp_namespace(): any;
        /**
         * Pointer to the UPnP namespace registered with the XML document
         * containing this object.
         */
        get upnpNamespace(): any;
        /**
         * The write status of this object.
         */
        get write_status(): string;
        set write_status(val: string);
        /**
         * The write status of this object.
         */
        get writeStatus(): string;
        set writeStatus(val: string);
        /**
         * The pointer to object node in XML document.
         */
        get xml_node(): any;
        /**
         * The pointer to object node in XML document.
         */
        get xmlNode(): any;

        // Constructors of GUPnPAV.DIDLLiteObject

        constructor(properties?: Partial<DIDLLiteObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.DIDLLiteObject

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DIDLLiteParser extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteParser>;

        // Constructors of GUPnPAV.DIDLLiteParser

        constructor(properties?: Partial<DIDLLiteParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DIDLLiteParser;

        // Own signals of GUPnPAV.DIDLLiteParser

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'container-available', callback: (_source: this, container: DIDLLiteContainer) => void): number;
        connect_after(
            signal: 'container-available',
            callback: (_source: this, container: DIDLLiteContainer) => void,
        ): number;
        emit(signal: 'container-available', container: DIDLLiteContainer): void;
        connect(signal: 'item-available', callback: (_source: this, item: DIDLLiteItem) => void): number;
        connect_after(signal: 'item-available', callback: (_source: this, item: DIDLLiteItem) => void): number;
        emit(signal: 'item-available', item: DIDLLiteItem): void;
        connect(signal: 'object-available', callback: (_source: this, object: DIDLLiteObject) => void): number;
        connect_after(signal: 'object-available', callback: (_source: this, object: DIDLLiteObject) => void): number;
        emit(signal: 'object-available', object: DIDLLiteObject): void;

        // Own virtual methods of GUPnPAV.DIDLLiteParser

        vfunc_container_available(container: DIDLLiteContainer): void;
        vfunc_item_available(item: DIDLLiteItem): void;
        vfunc_object_available(object: DIDLLiteObject): void;

        // Own methods of GUPnPAV.DIDLLiteParser

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            audio_channels: number;
            audioChannels: number;
            bitrate: number;
            bits_per_sample: number;
            bitsPerSample: number;
            cleartext_size: number;
            cleartextSize: number;
            color_depth: number;
            colorDepth: number;
            dlna_namespace: any;
            dlnaNamespace: any;
            duration: number;
            height: number;
            import_uri: string;
            importUri: string;
            protection: string;
            protocol_info: ProtocolInfo;
            protocolInfo: ProtocolInfo;
            pv_namespace: any;
            pvNamespace: any;
            sample_freq: number;
            sampleFreq: number;
            size: number;
            size64: number;
            subtitle_file_type: string;
            subtitleFileType: string;
            subtitle_file_uri: string;
            subtitleFileUri: string;
            track_total: number;
            trackTotal: number;
            update_count: number;
            updateCount: number;
            uri: string;
            width: number;
            xml_node: any;
            xmlNode: any;
        }
    }

    class DIDLLiteResource extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteResource>;

        // Own properties of GUPnPAV.DIDLLiteResource

        /**
         * The number of audio channels in this resource.
         */
        get audio_channels(): number;
        set audio_channels(val: number);
        /**
         * The number of audio channels in this resource.
         */
        get audioChannels(): number;
        set audioChannels(val: number);
        /**
         * The bitrate of this resource.
         */
        get bitrate(): number;
        set bitrate(val: number);
        /**
         * The sample size of this resource.
         */
        get bits_per_sample(): number;
        set bits_per_sample(val: number);
        /**
         * The sample size of this resource.
         */
        get bitsPerSample(): number;
        set bitsPerSample(val: number);
        get cleartext_size(): number;
        set cleartext_size(val: number);
        get cleartextSize(): number;
        set cleartextSize(val: number);
        /**
         * The color-depth of this image/video resource.
         */
        get color_depth(): number;
        set color_depth(val: number);
        /**
         * The color-depth of this image/video resource.
         */
        get colorDepth(): number;
        set colorDepth(val: number);
        /**
         * Pointer to the DLNA metadata namespace registered with the
         * resource object.
         */
        get dlna_namespace(): any;
        /**
         * Pointer to the DLNA metadata namespace registered with the
         * resource object.
         */
        get dlnaNamespace(): any;
        /**
         * The duration (in seconds) of this resource.
         */
        get duration(): number;
        set duration(val: number);
        /**
         * The height of this image/video resource.
         */
        get height(): number;
        set height(val: number);
        /**
         * The Import URI associated with this resource.
         */
        get import_uri(): string;
        set import_uri(val: string);
        /**
         * The Import URI associated with this resource.
         */
        get importUri(): string;
        set importUri(val: string);
        /**
         * The protection system used for this resource.
         */
        get protection(): string;
        set protection(val: string);
        /**
         * The protocol info associated with this resource.
         */
        get protocol_info(): ProtocolInfo;
        set protocol_info(val: ProtocolInfo);
        /**
         * The protocol info associated with this resource.
         */
        get protocolInfo(): ProtocolInfo;
        set protocolInfo(val: ProtocolInfo);
        /**
         * Pointer to the PV metadata namespace registered with the
         * resource object.
         */
        get pv_namespace(): any;
        /**
         * Pointer to the PV metadata namespace registered with the
         * resource object.
         */
        get pvNamespace(): any;
        /**
         * The sample frequency of this resource.
         */
        get sample_freq(): number;
        set sample_freq(val: number);
        /**
         * The sample frequency of this resource.
         */
        get sampleFreq(): number;
        set sampleFreq(val: number);
        /**
         * The size (in bytes) of this resource.
         */
        get size(): number;
        set size(val: number);
        /**
         * The size (in bytes) of this resource.
         */
        get size64(): number;
        set size64(val: number);
        /**
         * Type of external subtitle file. Usually SRT or SMI.
         */
        get subtitle_file_type(): string;
        set subtitle_file_type(val: string);
        /**
         * Type of external subtitle file. Usually SRT or SMI.
         */
        get subtitleFileType(): string;
        set subtitleFileType(val: string);
        /**
         * Uri to external subtitle file.
         */
        get subtitle_file_uri(): string;
        set subtitle_file_uri(val: string);
        /**
         * Uri to external subtitle file.
         */
        get subtitleFileUri(): string;
        set subtitleFileUri(val: string);
        /**
         * Number of tracks in a DIDL_S or DIDL_V resource.
         */
        get track_total(): number;
        set track_total(val: number);
        /**
         * Number of tracks in a DIDL_S or DIDL_V resource.
         */
        get trackTotal(): number;
        set trackTotal(val: number);
        get update_count(): number;
        set update_count(val: number);
        get updateCount(): number;
        set updateCount(val: number);
        /**
         * The URI associated with this resource.
         */
        get uri(): string;
        set uri(val: string);
        /**
         * The width of this image/video resource.
         */
        get width(): number;
        set width(val: number);
        /**
         * The pointer to res node in XML document.
         */
        get xml_node(): any;
        /**
         * The pointer to res node in XML document.
         */
        get xmlNode(): any;

        // Constructors of GUPnPAV.DIDLLiteResource

        constructor(properties?: Partial<DIDLLiteResource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.DIDLLiteResource

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            language: string;
            xml_node: any;
            xmlNode: any;
        }
    }

    class DIDLLiteWriter extends GObject.Object {
        static $gtype: GObject.GType<DIDLLiteWriter>;

        // Own properties of GUPnPAV.DIDLLiteWriter

        /**
         * The language the DIDL-Lite fragment is in.
         */
        get language(): string;
        /**
         * The pointer to root node in XML document.
         */
        get xml_node(): any;
        /**
         * The pointer to root node in XML document.
         */
        get xmlNode(): any;

        // Constructors of GUPnPAV.DIDLLiteWriter

        constructor(properties?: Partial<DIDLLiteWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](language?: string | null): DIDLLiteWriter;

        // Own methods of GUPnPAV.DIDLLiteWriter

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            object_ids: string;
            objectIds: string;
            version: string;
        }
    }

    class Feature extends GObject.Object {
        static $gtype: GObject.GType<Feature>;

        // Own properties of GUPnPAV.Feature

        /**
         * The name of this feature.
         */
        get name(): string;
        /**
         * The object IDs related to this feature.
         */
        get object_ids(): string;
        /**
         * The object IDs related to this feature.
         */
        get objectIds(): string;
        /**
         * The version of this feature.
         */
        get version(): string;

        // Constructors of GUPnPAV.Feature

        constructor(properties?: Partial<Feature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.Feature

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FeatureListParser extends GObject.Object {
        static $gtype: GObject.GType<FeatureListParser>;

        // Constructors of GUPnPAV.FeatureListParser

        constructor(properties?: Partial<FeatureListParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeatureListParser;

        // Own methods of GUPnPAV.FeatureListParser

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class LastChangeParser extends GObject.Object {
        static $gtype: GObject.GType<LastChangeParser>;

        // Constructors of GUPnPAV.LastChangeParser

        constructor(properties?: Partial<LastChangeParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LastChangeParser;
    }

    module MediaCollection {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            author: string;
            data: string;
            mutable: boolean;
            title: string;
        }
    }

    class MediaCollection extends GObject.Object {
        static $gtype: GObject.GType<MediaCollection>;

        // Own properties of GUPnPAV.MediaCollection

        /**
         * The author of this media collection.
         */
        get author(): string;
        set author(val: string);
        /**
         * Block of data to parse a collection from. If data is set upon
         * construction it will override the other properties and create a
         * unmutable collection parsed from data.
         */
        set data(val: string);
        /**
         * Whether this media collation is modifyable or not.
         */
        get mutable(): boolean;
        /**
         * The title of this media collection.
         */
        get title(): string;
        set title(val: string);

        // Constructors of GUPnPAV.MediaCollection

        constructor(properties?: Partial<MediaCollection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MediaCollection;

        static new_from_string(data: string): MediaCollection;

        // Own methods of GUPnPAV.MediaCollection

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dlna_conversion: DLNAConversion;
            dlnaConversion: DLNAConversion;
            dlna_flags: DLNAFlags;
            dlnaFlags: DLNAFlags;
            dlna_operation: DLNAOperation;
            dlnaOperation: DLNAOperation;
            dlna_profile: string;
            dlnaProfile: string;
            mime_type: string;
            mimeType: string;
            network: string;
            play_speeds: string[];
            playSpeeds: string[];
            protocol: string;
        }
    }

    class ProtocolInfo extends GObject.Object {
        static $gtype: GObject.GType<ProtocolInfo>;

        // Own properties of GUPnPAV.ProtocolInfo

        /**
         * The DLNA conversion flags.
         */
        get dlna_conversion(): DLNAConversion;
        set dlna_conversion(val: DLNAConversion);
        /**
         * The DLNA conversion flags.
         */
        get dlnaConversion(): DLNAConversion;
        set dlnaConversion(val: DLNAConversion);
        /**
         * Various generic DLNA flags.
         */
        get dlna_flags(): DLNAFlags;
        set dlna_flags(val: DLNAFlags);
        /**
         * Various generic DLNA flags.
         */
        get dlnaFlags(): DLNAFlags;
        set dlnaFlags(val: DLNAFlags);
        /**
         * The DLNA operation flags.
         */
        get dlna_operation(): DLNAOperation;
        set dlna_operation(val: DLNAOperation);
        /**
         * The DLNA operation flags.
         */
        get dlnaOperation(): DLNAOperation;
        set dlnaOperation(val: DLNAOperation);
        /**
         * The DLNA profile of this info.
         */
        get dlna_profile(): string;
        set dlna_profile(val: string);
        /**
         * The DLNA profile of this info.
         */
        get dlnaProfile(): string;
        set dlnaProfile(val: string);
        /**
         * The MIME-type of this info.
         */
        get mime_type(): string;
        set mime_type(val: string);
        /**
         * The MIME-type of this info.
         */
        get mimeType(): string;
        set mimeType(val: string);
        /**
         * The network this info is associated with.
         */
        get network(): string;
        set network(val: string);
        /**
         * The allowed play speeds on this info in the form of array of
         * strings.
         */
        get play_speeds(): string[];
        set play_speeds(val: string[]);
        /**
         * The allowed play speeds on this info in the form of array of
         * strings.
         */
        get playSpeeds(): string[];
        set playSpeeds(val: string[]);
        /**
         * The protocol of this info.
         */
        get protocol(): string;
        set protocol(val: string);

        // Constructors of GUPnPAV.ProtocolInfo

        constructor(properties?: Partial<ProtocolInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ProtocolInfo;

        static new_from_string(protocol_info: string): ProtocolInfo;

        // Own methods of GUPnPAV.ProtocolInfo

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class SearchCriteriaParser extends GObject.Object {
        static $gtype: GObject.GType<SearchCriteriaParser>;

        // Constructors of GUPnPAV.SearchCriteriaParser

        constructor(properties?: Partial<SearchCriteriaParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SearchCriteriaParser;

        // Own signals of GUPnPAV.SearchCriteriaParser

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'begin-parens', callback: (_source: this) => void): number;
        connect_after(signal: 'begin-parens', callback: (_source: this) => void): number;
        emit(signal: 'begin-parens'): void;
        connect(signal: 'conjunction', callback: (_source: this) => void): number;
        connect_after(signal: 'conjunction', callback: (_source: this) => void): number;
        emit(signal: 'conjunction'): void;
        connect(signal: 'disjunction', callback: (_source: this) => void): number;
        connect_after(signal: 'disjunction', callback: (_source: this) => void): number;
        emit(signal: 'disjunction'): void;
        connect(signal: 'end-parens', callback: (_source: this) => void): number;
        connect_after(signal: 'end-parens', callback: (_source: this) => void): number;
        emit(signal: 'end-parens'): void;
        connect(
            signal: 'expression',
            callback: (
                _source: this,
                property: string,
                op: SearchCriteriaOp,
                value: string,
                error: any | null,
            ) => boolean,
        ): number;
        connect_after(
            signal: 'expression',
            callback: (
                _source: this,
                property: string,
                op: SearchCriteriaOp,
                value: string,
                error: any | null,
            ) => boolean,
        ): number;
        emit(signal: 'expression', property: string, op: SearchCriteriaOp, value: string, error?: any | null): void;

        // Own static methods of GUPnPAV.SearchCriteriaParser

        static error_quark(): GLib.Quark;

        // Own virtual methods of GUPnPAV.SearchCriteriaParser

        vfunc_begin_parens(): void;
        vfunc_conjunction(): void;
        vfunc_disjunction(): void;
        vfunc_end_parens(): void;
        vfunc_expression(property: string, op: SearchCriteriaOp, value: string): boolean;

        // Own methods of GUPnPAV.SearchCriteriaParser

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
    abstract class CDSLastChangeEntry {
        static $gtype: GObject.GType<CDSLastChangeEntry>;

        // Constructors of GUPnPAV.CDSLastChangeEntry

        _init(...args: any[]): void;

        // Own methods of GUPnPAV.CDSLastChangeEntry

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

    type CDSLastChangeParserClass = typeof CDSLastChangeParser;
    type DIDLLiteContainerClass = typeof DIDLLiteContainer;
    type DIDLLiteContributorClass = typeof DIDLLiteContributor;
    type DIDLLiteCreateClassClass = typeof DIDLLiteCreateClass;
    type DIDLLiteDescriptorClass = typeof DIDLLiteDescriptor;
    type DIDLLiteItemClass = typeof DIDLLiteItem;
    type DIDLLiteObjectClass = typeof DIDLLiteObject;
    abstract class DIDLLiteObjectPrivate {
        static $gtype: GObject.GType<DIDLLiteObjectPrivate>;

        // Constructors of GUPnPAV.DIDLLiteObjectPrivate

        _init(...args: any[]): void;
    }

    type DIDLLiteParserClass = typeof DIDLLiteParser;
    type DIDLLiteResourceClass = typeof DIDLLiteResource;
    type DIDLLiteWriterClass = typeof DIDLLiteWriter;
    type FeatureClass = typeof Feature;
    type FeatureListParserClass = typeof FeatureListParser;
    type LastChangeParserClass = typeof LastChangeParser;
    type MediaCollectionClass = typeof MediaCollection;
    type ProtocolInfoClass = typeof ProtocolInfo;
    type SearchCriteriaParserClass = typeof SearchCriteriaParser;
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
