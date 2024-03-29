
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gxml-0.20-ambient.d.ts';
import './gxml-0.20-import.d.ts';
/**
 * GXml-0.20
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';

export enum CssCombiner {
    NULL,
    NONE,
    INSIDE,
    AND,
    PARENT,
    AFTER,
    PRECEDED,
}
export enum CssSelectorType {
    CLASS,
    ID,
    ALL,
    ELEMENT,
    ATTRIBUTE,
    ATTRIBUTE_EQUAL,
    ATTRIBUTE_CONTAINS,
    ATTRIBUTE_SUBSTRING,
    ATTRIBUTE_STARTS_WITH,
    ATTRIBUTE_STARTS_WITH_WORD,
    ATTRIBUTE_ENDS_WITH,
    PSEUDO_CLASS,
}
export enum NodeType {
    INVALID,
    ELEMENT,
    ATTRIBUTE,
    TEXT,
    CDATA_SECTION,
    ENTITY_REFERENCE,
    ENTITY,
    PROCESSING_INSTRUCTION,
    COMMENT,
    DOCUMENT,
    DOCUMENT_TYPE,
    DOCUMENT_FRAGMENT,
    NOTATION,
}
export enum XPathObjectType {
    UNDEFINED,
    NODESET,
    BOOLEAN,
    NUMBER,
    STRING,
    POINT,
    RANGE,
    LOCATIONSET,
    USERS,
    XSLT_TREE,
}
export enum CssSelectorError {
    NULL,
    EOF,
    NOT,
    PSEUDO,
    ATTRIBUTE,
    IDENTIFIER,
    COMBINER,
}
export enum DomDocumentError {
    FILE_NOT_FOUND_ERROR,
    INVALID_DOCUMENT_ERROR,
}
export enum DomError {
    INDEX_SIZE_ERROR,
    DOMSTRING_SIZE_ERROR,
    HIERARCHY_REQUEST_ERROR,
    WRONG_DOCUMENT_ERROR,
    INVALID_CHARACTER_ERROR,
    NO_DATA_ALLOWED_ERROR,
    NO_MODIFICATION_ALLOWED_ERROR,
    NOT_FOUND_ERROR,
    NOT_SUPPORTED_ERROR,
    INUSE_ATTRIBUTE_ERROR,
    INVALID_STATE_ERROR,
    SYNTAX_ERROR,
    INVALID_MODIFICATION_ERROR,
    NAMESPACE_ERROR,
    INVALID_ACCESS_ERROR,
    VALIDATION_ERROR,
    TYPE_MISMATCH_ERROR,
    SECURITY_ERROR,
    NETWORK_ERROR,
    ABORT_ERROR,
    URL_MISMATCH_ERROR,
    QUOTA_EXCEEDED_ERROR,
    TIME_OUT_ERROR,
    INVALID_NODE_TYPE_ERROR,
    DATA_CLONE_ERROR,
}
export enum EnumerationError {
    INVALID_VALUE,
    INVALID_TEXT,
}
export enum IXsdSchemaError {
    INVALIDATION_ERROR,
}
export enum ParserError {
    INVALID_DATA_ERROR,
    INVALID_FILE_ERROR,
    INVALID_STREAM_ERROR,
}
export enum Error {
    NOT_SUPPORTED,
    PARSER,
    WRITER,
}
export enum XPathError {
    EXPRESSION_OK,
    NUMBER_ERROR,
    UNFINISHED_LITERAL_ERROR,
    START_LITERAL_ERROR,
    VARIABLE_REF_ERROR,
    UNDEF_VARIABLE_ERROR,
    INVALID_PREDICATE_ERROR,
    EXPR_ERROR,
    UNCLOSED_ERROR,
    UNKNOWN_FUNC_ERROR,
    INVALID_OPERAND,
    INVALID_TYPE,
    INVALID_ARITY,
    INVALID_CTXT_SIZE,
    INVALID_CTXT_POSITION,
    MEMORY_ERROR,
    XPTR_SYNTAX_ERROR,
    XPTR_RESOURCE_ERROR,
    XPTR_SUB_RESOURCE_ERROR,
    UNDEF_PREFIX_ERROR,
    ENCODING_ERROR,
    INVALID_CHAR_ERROR,
    INVALID_CTXT,
}
export enum XPathObjectError {
    INVALID_NAMESPACE_ERROR,
}
export enum DomNodeFilterFilter {
    ACCEPT,
    REJECT,
    SKIP,
}
export enum DomEventPhase {
    NONE,
    CAPTURING_PHASE,
    AT_TARGET,
    BUBBLING_PHASE,
}
export enum DomNodeNodeType {
    INVALID,
    ELEMENT_NODE,
    ATTRIBUTE_NODE,
    TEXT_NODE,
    CDATA_SECTION_NODE,
    ENTITY_REFERENCE_NODE,
    ENTITY_NODE,
    PROCESSING_INSTRUCTION_NODE,
    COMMENT_NODE,
    DOCUMENT_NODE,
    DOCUMENT_TYPE_NODE,
    DOCUMENT_FRAGMENT_NODE,
    NOTATION_NODE,
}
export enum DomRangeBoundaryPoints {
    START_TO_START,
    START_TO_END,
    END_TO_END,
    END_TO_START,
}
export enum DomEventFlags {
    STOP_PROPAGATION_FLAG,
    STOP_IMMEDIATE_PROPAGATION_FLAG,
    CANCELED_FLAG,
    INITIALIZED_FLAG,
    DISPATCH_FLAG,
}
export enum DomNodeDocumentPosition {
    NONE,
    DISCONNECTED,
    PRECEDING,
    FOLLOWING,
    CONTAINS,
    CONTAINED_BY,
    IMPLEMENTATION_SPECIFIC,
}
export interface DomMutationCallback {
    (mutations: Gee.List, observer: DomMutationObserver): void
}
export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Collection

        element?: DomElement | null
        itemsType?: GObject.GType | null
    }

}

export interface Collection extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Collection

    readonly nodesIndex: GLib.Queue
    element: DomElement
    readonly itemsName: string | null
    itemsType: GObject.GType

    // Owm methods of GXml-0.20.GXml.Collection

    get_nodes_index(): GLib.Queue
    get_element(): DomElement
    set_element(value: DomElement): void
    get_items_name(): string
    get_items_type(): GObject.GType
    set_items_type(value: GObject.GType): void
    search(): void
    get_item(index: number): DomElement | null
    append(node: DomElement): void
    get_length(): number
    initialize(t: GObject.GType): void
    create_item(): DomElement | null
    validate_append(index: number, element: DomElement): boolean
    clear(): void

    // Own virtual methods of GXml-0.20.GXml.Collection

    vfunc_get_nodes_index(): GLib.Queue
    vfunc_get_element(): DomElement
    vfunc_set_element(value: DomElement): void
    vfunc_get_items_name(): string
    vfunc_get_items_type(): GObject.GType
    vfunc_set_items_type(value: GObject.GType): void
    vfunc_search(): void
    vfunc_get_item(index: number): DomElement | null
    vfunc_append(node: DomElement): void
    vfunc_get_length(): number
    vfunc_initialize(t: GObject.GType): void
    vfunc_create_item(): DomElement | null
    vfunc_validate_append(index: number, element: DomElement): boolean
    vfunc_clear(): void

    // Class property signals of GXml-0.20.GXml.Collection

    connect(sigName: "notify::nodes-index", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Collection {

    // Own properties of GXml-0.20.GXml.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of GXml-0.20.GXml.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
}

export module List {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {
    }

}

export interface List extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Class property signals of GXml-0.20.GXml.List

    connect(sigName: "notify::nodes-index", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class List {

    // Own properties of GXml-0.20.GXml.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of GXml-0.20.GXml.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
}

export module MappeableElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface MappeableElement extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElement

    get_map_key(): string | null

    // Own virtual methods of GXml-0.20.GXml.MappeableElement

    vfunc_get_map_key(): string | null

    // Class property signals of GXml-0.20.GXml.MappeableElement

    connect(sigName: "notify::namespace-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: MappeableElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MappeableElement {

    // Own properties of GXml-0.20.GXml.MappeableElement

    static name: string
    static $gtype: GObject.GType<MappeableElement>

    // Constructors of GXml-0.20.GXml.MappeableElement

    constructor(config?: MappeableElement.ConstructorProperties) 
    _init(config?: MappeableElement.ConstructorProperties): void
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Map

        attributeKey?: string | null
    }

}

export interface Map extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.Map

    attributeKey: string | null
    readonly keysSet: Gee.Set

    // Owm methods of GXml-0.20.GXml.Map

    get_attribute_key(): string
    set_attribute_key(value: string): void
    item(key: string): DomElement | null
    has_key(key: string): boolean
    get_keys_set(): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.Map

    vfunc_get_attribute_key(): string
    vfunc_set_attribute_key(value: string): void
    vfunc_item(key: string): DomElement | null
    vfunc_has_key(key: string): boolean
    vfunc_get_keys_set(): Gee.Set

    // Class property signals of GXml-0.20.GXml.Map

    connect(sigName: "notify::attribute-key", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-key", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-key", ...args: any[]): void
    connect(sigName: "notify::keys-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys-set", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Map {

    // Own properties of GXml-0.20.GXml.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of GXml-0.20.GXml.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
}

export module MappeableElementPairKey {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface MappeableElementPairKey extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElementPairKey

    get_map_primary_key(): string | null
    get_map_secondary_key(): string | null

    // Own virtual methods of GXml-0.20.GXml.MappeableElementPairKey

    vfunc_get_map_primary_key(): string | null
    vfunc_get_map_secondary_key(): string | null

    // Class property signals of GXml-0.20.GXml.MappeableElementPairKey

    connect(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: MappeableElementPairKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MappeableElementPairKey {

    // Own properties of GXml-0.20.GXml.MappeableElementPairKey

    static name: string
    static $gtype: GObject.GType<MappeableElementPairKey>

    // Constructors of GXml-0.20.GXml.MappeableElementPairKey

    constructor(config?: MappeableElementPairKey.ConstructorProperties) 
    _init(config?: MappeableElementPairKey.ConstructorProperties): void
}

export module PairedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.PairedMap

        attributePrimaryKey?: string | null
        attributeSecondaryKey?: string | null
    }

}

export interface PairedMap extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.PairedMap

    attributePrimaryKey: string | null
    attributeSecondaryKey: string | null
    readonly primaryKeysSet: Gee.Set

    // Owm methods of GXml-0.20.GXml.PairedMap

    get_attribute_primary_key(): string
    set_attribute_primary_key(value: string): void
    get_attribute_secondary_key(): string
    set_attribute_secondary_key(value: string): void
    get_primary_keys_set(): Gee.Set
    item(primary_key: string, secondary_key: string): DomElement | null
    has_primary_key(key: string): boolean
    has_secondary_key(pkey: string, key: string): boolean
    secondary_keys_set(pkey: string): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.PairedMap

    vfunc_get_attribute_primary_key(): string
    vfunc_set_attribute_primary_key(value: string): void
    vfunc_get_attribute_secondary_key(): string
    vfunc_set_attribute_secondary_key(value: string): void
    vfunc_get_primary_keys_set(): Gee.Set
    vfunc_item(primary_key: string, secondary_key: string): DomElement | null
    vfunc_has_primary_key(key: string): boolean
    vfunc_has_secondary_key(pkey: string, key: string): boolean
    vfunc_secondary_keys_set(pkey: string): Gee.Set

    // Class property signals of GXml-0.20.GXml.PairedMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: PairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PairedMap {

    // Own properties of GXml-0.20.GXml.PairedMap

    static name: string
    static $gtype: GObject.GType<PairedMap>

    // Constructors of GXml-0.20.GXml.PairedMap

    constructor(config?: PairedMap.ConstructorProperties) 
    _init(config?: PairedMap.ConstructorProperties): void
}

export module MappeableElementThreeKey {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface MappeableElementThreeKey extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElementThreeKey

    get_map_pkey(): string | null
    get_map_skey(): string | null
    get_map_tkey(): string | null

    // Own virtual methods of GXml-0.20.GXml.MappeableElementThreeKey

    vfunc_get_map_pkey(): string | null
    vfunc_get_map_skey(): string | null
    vfunc_get_map_tkey(): string | null

    // Class property signals of GXml-0.20.GXml.MappeableElementThreeKey

    connect(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: MappeableElementThreeKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MappeableElementThreeKey {

    // Own properties of GXml-0.20.GXml.MappeableElementThreeKey

    static name: string
    static $gtype: GObject.GType<MappeableElementThreeKey>

    // Constructors of GXml-0.20.GXml.MappeableElementThreeKey

    constructor(config?: MappeableElementThreeKey.ConstructorProperties) 
    _init(config?: MappeableElementThreeKey.ConstructorProperties): void
}

export module ThreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.ThreeMap

        attributePrimaryKey?: string | null
        attributeSecondaryKey?: string | null
        attributeThirdKey?: string | null
    }

}

export interface ThreeMap extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.ThreeMap

    attributePrimaryKey: string | null
    attributeSecondaryKey: string | null
    attributeThirdKey: string | null
    readonly primaryKeysSet: Gee.Set

    // Owm methods of GXml-0.20.GXml.ThreeMap

    get_attribute_primary_key(): string
    set_attribute_primary_key(value: string): void
    get_attribute_secondary_key(): string
    set_attribute_secondary_key(value: string): void
    get_attribute_third_key(): string
    set_attribute_third_key(value: string): void
    get_primary_keys_set(): Gee.Set
    item(primary_key: string, secondary_key: string, third_key: string): DomElement | null
    has_primary_key(key: string): boolean
    has_secondary_key(pkey: string, key: string): boolean
    has_third_key(pkey: string, skey: string, key: string): boolean
    secondary_keys_set(pkey: string): Gee.Set
    third_keys_set(pkey: string, skey: string): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.ThreeMap

    vfunc_get_attribute_primary_key(): string
    vfunc_set_attribute_primary_key(value: string): void
    vfunc_get_attribute_secondary_key(): string
    vfunc_set_attribute_secondary_key(value: string): void
    vfunc_get_attribute_third_key(): string
    vfunc_set_attribute_third_key(value: string): void
    vfunc_get_primary_keys_set(): Gee.Set
    vfunc_item(primary_key: string, secondary_key: string, third_key: string): DomElement | null
    vfunc_has_primary_key(key: string): boolean
    vfunc_has_secondary_key(pkey: string, key: string): boolean
    vfunc_has_third_key(pkey: string, skey: string, key: string): boolean
    vfunc_secondary_keys_set(pkey: string): Gee.Set
    vfunc_third_keys_set(pkey: string, skey: string): Gee.Set

    // Class property signals of GXml-0.20.GXml.ThreeMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-third-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-third-key", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-third-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: ThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ThreeMap {

    // Own properties of GXml-0.20.GXml.ThreeMap

    static name: string
    static $gtype: GObject.GType<ThreeMap>

    // Constructors of GXml-0.20.GXml.ThreeMap

    constructor(config?: ThreeMap.ConstructorProperties) 
    _init(config?: ThreeMap.ConstructorProperties): void
}

export module CollectionParent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties {
    }

}

export interface CollectionParent extends GObject.Object, Collection {

    // Owm methods of GXml-0.20.GXml.CollectionParent

    get_types(): GLib.HashTable

    // Own virtual methods of GXml-0.20.GXml.CollectionParent

    vfunc_get_types(): GLib.HashTable

    // Class property signals of GXml-0.20.GXml.CollectionParent

    connect(sigName: "notify::nodes-index", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: CollectionParent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CollectionParent {

    // Own properties of GXml-0.20.GXml.CollectionParent

    static name: string
    static $gtype: GObject.GType<CollectionParent>

    // Constructors of GXml-0.20.GXml.CollectionParent

    constructor(config?: CollectionParent.ConstructorProperties) 
    _init(config?: CollectionParent.ConstructorProperties): void
    static add_supported_type(types: GLib.HashTable, parent_type: GObject.GType, type: GObject.GType): void
    static add_supported_types(table: GLib.HashTable, parent_type: GObject.GType, types: GObject.GType[]): void
}

export module DomAttr {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomAttr

        value?: string | null
    }

}

export interface DomAttr extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomAttr

    readonly namespaceUri: string | null
    readonly prefix: string | null
    readonly localName: string | null
    readonly name: string | null
    value: string | null

    // Owm methods of GXml-0.20.GXml.DomAttr

    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_name(): string | null
    get_value(): string | null
    set_value(value: string): void
    get_specified(): boolean

    // Own virtual methods of GXml-0.20.GXml.DomAttr

    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_name(): string | null
    vfunc_get_value(): string | null
    vfunc_set_value(value: string): void
    vfunc_get_specified(): boolean

    // Class property signals of GXml-0.20.GXml.DomAttr

    connect(sigName: "notify::namespace-uri", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DomAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomAttr {

    // Own properties of GXml-0.20.GXml.DomAttr

    static name: string
    static $gtype: GObject.GType<DomAttr>

    // Constructors of GXml-0.20.GXml.DomAttr

    constructor(config?: DomAttr.ConstructorProperties) 
    _init(config?: DomAttr.ConstructorProperties): void
}

export module DomCharacterData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomNonDocumentTypeChildNode.ConstructorProperties, DomChildNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomCharacterData

        data?: string | null
    }

}

export interface DomCharacterData extends GObject.Object, DomNode, DomNonDocumentTypeChildNode, DomChildNode {

    // Own properties of GXml-0.20.GXml.DomCharacterData

    data: string | null

    // Owm methods of GXml-0.20.GXml.DomCharacterData

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    get_length(): number
    substring_data(offset: number, count: number): string | null
    append_data(data: string): void
    insert_data(offset: number, data: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, data: string): void

    // Own virtual methods of GXml-0.20.GXml.DomCharacterData

    vfunc_get_data(): string | null
    vfunc_set_data(value: string): void
    vfunc_get_length(): number
    vfunc_substring_data(offset: number, count: number): string | null
    vfunc_append_data(data: string): void
    vfunc_insert_data(offset: number, data: string): void
    vfunc_delete_data(offset: number, count: number): void
    vfunc_replace_data(offset: number, count: number, data: string): void

    // Class property signals of GXml-0.20.GXml.DomCharacterData

    connect(sigName: "notify::data", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomCharacterData {

    // Own properties of GXml-0.20.GXml.DomCharacterData

    static name: string
    static $gtype: GObject.GType<DomCharacterData>

    // Constructors of GXml-0.20.GXml.DomCharacterData

    constructor(config?: DomCharacterData.ConstructorProperties) 
    _init(config?: DomCharacterData.ConstructorProperties): void
}

export module DomText {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DomText extends DomCharacterData {

    // Owm methods of GXml-0.20.GXml.DomText

    split_text(offset: number): DomText
    get_whole_text(): string | null

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Own virtual methods of GXml-0.20.GXml.DomText

    vfunc_split_text(offset: number): DomText
    vfunc_get_whole_text(): string | null

    // Class property signals of GXml-0.20.GXml.DomText

    connect(sigName: "notify::data", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomText extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomText

    static name: string
    static $gtype: GObject.GType<DomText>

    // Constructors of GXml-0.20.GXml.DomText

    constructor(config?: DomText.ConstructorProperties) 
    _init(config?: DomText.ConstructorProperties): void
}

export module DomProcessingInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DomProcessingInstruction extends DomCharacterData {

    // Own properties of GXml-0.20.GXml.DomProcessingInstruction

    readonly target: string | null

    // Owm methods of GXml-0.20.GXml.DomProcessingInstruction

    get_target(): string | null

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Own virtual methods of GXml-0.20.GXml.DomProcessingInstruction

    vfunc_get_target(): string | null

    // Class property signals of GXml-0.20.GXml.DomProcessingInstruction

    connect(sigName: "notify::target", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomProcessingInstruction extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomProcessingInstruction

    static name: string
    static $gtype: GObject.GType<DomProcessingInstruction>

    // Constructors of GXml-0.20.GXml.DomProcessingInstruction

    constructor(config?: DomProcessingInstruction.ConstructorProperties) 
    _init(config?: DomProcessingInstruction.ConstructorProperties): void
}

export module DomComment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DomComment extends DomCharacterData {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.DomComment

    connect(sigName: "notify::data", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomComment extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomComment

    static name: string
    static $gtype: GObject.GType<DomComment>

    // Constructors of GXml-0.20.GXml.DomComment

    constructor(config?: DomComment.ConstructorProperties) 
    _init(config?: DomComment.ConstructorProperties): void
}

export module DomNonElementParentNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNonElementParentNode extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomNonElementParentNode

    get_element_by_id(element_id: string): DomElement | null

    // Own virtual methods of GXml-0.20.GXml.DomNonElementParentNode

    vfunc_get_element_by_id(element_id: string): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomNonElementParentNode

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNonElementParentNode {

    // Own properties of GXml-0.20.GXml.DomNonElementParentNode

    static name: string
    static $gtype: GObject.GType<DomNonElementParentNode>

    // Constructors of GXml-0.20.GXml.DomNonElementParentNode

    constructor(config?: DomNonElementParentNode.ConstructorProperties) 
    _init(config?: DomNonElementParentNode.ConstructorProperties): void
}

export module DomParentNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomParentNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomParentNode

    readonly children: DomHTMLCollection
    readonly firstElementChild: DomElement
    readonly lastElementChild: DomElement
    readonly childElementCount: number

    // Owm methods of GXml-0.20.GXml.DomParentNode

    get_children(): DomHTMLCollection
    get_first_element_child(): DomElement | null
    get_last_element_child(): DomElement | null
    get_child_element_count(): number
    query_selector(selectors: string): DomElement | null
    query_selector_all(selectors: string): DomNodeList
    get_elements_by_property_value(property: string, value: string): DomElementList

    // Own virtual methods of GXml-0.20.GXml.DomParentNode

    vfunc_get_children(): DomHTMLCollection
    vfunc_get_first_element_child(): DomElement | null
    vfunc_get_last_element_child(): DomElement | null
    vfunc_get_child_element_count(): number
    vfunc_query_selector(selectors: string): DomElement | null
    vfunc_query_selector_all(selectors: string): DomNodeList
    vfunc_get_elements_by_property_value(property: string, value: string): DomElementList

    // Class property signals of GXml-0.20.GXml.DomParentNode

    connect(sigName: "notify::children", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomParentNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomParentNode {

    // Own properties of GXml-0.20.GXml.DomParentNode

    static name: string
    static $gtype: GObject.GType<DomParentNode>

    // Constructors of GXml-0.20.GXml.DomParentNode

    constructor(config?: DomParentNode.ConstructorProperties) 
    _init(config?: DomParentNode.ConstructorProperties): void
}

export module DomNonDocumentTypeChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNonDocumentTypeChildNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    readonly previousElementSibling: DomElement
    readonly nextElementSibling: DomElement

    // Owm methods of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    get_previous_element_sibling(): DomElement | null
    get_next_element_sibling(): DomElement | null

    // Own virtual methods of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    vfunc_get_previous_element_sibling(): DomElement | null
    vfunc_get_next_element_sibling(): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomNonDocumentTypeChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNonDocumentTypeChildNode {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    static name: string
    static $gtype: GObject.GType<DomNonDocumentTypeChildNode>

    // Constructors of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    constructor(config?: DomNonDocumentTypeChildNode.ConstructorProperties) 
    _init(config?: DomNonDocumentTypeChildNode.ConstructorProperties): void
}

export module DomChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomChildNode extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomChildNode

    remove(): void

    // Own virtual methods of GXml-0.20.GXml.DomChildNode

    vfunc_remove(): void

    // Class property signals of GXml-0.20.GXml.DomChildNode

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomChildNode {

    // Own properties of GXml-0.20.GXml.DomChildNode

    static name: string
    static $gtype: GObject.GType<DomChildNode>

    // Constructors of GXml-0.20.GXml.DomChildNode

    constructor(config?: DomChildNode.ConstructorProperties) 
    _init(config?: DomChildNode.ConstructorProperties): void
}

export module DomNodeList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.BidirList.ConstructorProperties {
    }

}

export interface DomNodeList extends GObject.Object, Gee.BidirList {

    // Own properties of GXml-0.20.GXml.DomNodeList

    readonly length: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomNodeList

    item(index: number): DomNode | null
    get_length(): number

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomNodeList

    vfunc_item(index: number): DomNode | null
    vfunc_get_length(): number

    // Class property signals of GXml-0.20.GXml.DomNodeList

    connect(sigName: "notify::length", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNodeList {

    // Own properties of GXml-0.20.GXml.DomNodeList

    static name: string
    static $gtype: GObject.GType<DomNodeList>

    // Constructors of GXml-0.20.GXml.DomNodeList

    constructor(config?: DomNodeList.ConstructorProperties) 
    _init(config?: DomNodeList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module DomHTMLCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.BidirList.ConstructorProperties {
    }

}

export interface DomHTMLCollection extends GObject.Object, Gee.BidirList {

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomHTMLCollection

    get_element(index: number): DomElement | null
    to_array(): DomElement[]

    // Overloads of to_array

    to_array(): any[]
    get_length(): number
    item(index: number): DomElement | null
    named_item(name: string): DomElement | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomHTMLCollection

    vfunc_get_element(index: number): DomElement | null
    vfunc_to_array(): DomElement[]

    // Overloads of vfunc_to_array

    vfunc_to_array(): any[]
    vfunc_get_length(): number
    vfunc_item(index: number): DomElement | null
    vfunc_named_item(name: string): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomHTMLCollection

    connect(sigName: "notify::read-only-view", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomHTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomHTMLCollection {

    // Own properties of GXml-0.20.GXml.DomHTMLCollection

    static name: string
    static $gtype: GObject.GType<DomHTMLCollection>

    // Constructors of GXml-0.20.GXml.DomHTMLCollection

    constructor(config?: DomHTMLCollection.ConstructorProperties) 
    _init(config?: DomHTMLCollection.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module DomNodeIterator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accept-node`
     */
    export interface AcceptNodeSignalCallback {
        ($obj: DomNodeIterator, node: DomNode): DomNodeFilterFilter
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNodeIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNodeIterator

    readonly root: DomNode
    readonly referenceNode: DomNode
    readonly pointerBeforeReferenceNode: boolean
    readonly whatToShow: number

    // Owm methods of GXml-0.20.GXml.DomNodeIterator

    get_root(): DomNode
    get_reference_node(): DomNode
    get_pointer_before_reference_node(): boolean
    get_what_to_show(): number
    next_node(): DomNode | null
    previous_node(): DomNode | null
    detach(): void

    // Own virtual methods of GXml-0.20.GXml.DomNodeIterator

    vfunc_get_root(): DomNode
    vfunc_get_reference_node(): DomNode
    vfunc_get_pointer_before_reference_node(): boolean
    vfunc_get_what_to_show(): number
    vfunc_next_node(): DomNode | null
    vfunc_previous_node(): DomNode | null
    vfunc_detach(): void

    // Own signals of GXml-0.20.GXml.DomNodeIterator

    connect(sigName: "accept-node", callback: DomNodeIterator.AcceptNodeSignalCallback): number
    connect_after(sigName: "accept-node", callback: DomNodeIterator.AcceptNodeSignalCallback): number
    emit(sigName: "accept-node", node: DomNode, ...args: any[]): void

    // Class property signals of GXml-0.20.GXml.DomNodeIterator

    connect(sigName: "notify::root", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference-node", ...args: any[]): void
    connect(sigName: "notify::pointer-before-reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-before-reference-node", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-before-reference-node", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: DomNodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNodeIterator {

    // Own properties of GXml-0.20.GXml.DomNodeIterator

    static name: string
    static $gtype: GObject.GType<DomNodeIterator>

    // Constructors of GXml-0.20.GXml.DomNodeIterator

    constructor(config?: DomNodeIterator.ConstructorProperties) 
    _init(config?: DomNodeIterator.ConstructorProperties): void
}

export module DomTreeWalker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accept-node`
     */
    export interface AcceptNodeSignalCallback {
        ($obj: DomTreeWalker, node: DomNode): DomNodeFilterFilter
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomTreeWalker extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomTreeWalker

    readonly root: DomNode
    readonly whatToShow: number
    readonly currentNode: DomNode

    // Owm methods of GXml-0.20.GXml.DomTreeWalker

    get_root(): DomNode
    get_what_to_show(): number
    get_current_node(): DomNode
    parent_node(): DomNode | null
    first_child(): DomNode | null
    last_child(): DomNode | null
    previous_sibling(): DomNode | null
    next_sibling(): DomNode | null
    previous_node(): DomNode | null
    next_node(): DomNode | null

    // Own virtual methods of GXml-0.20.GXml.DomTreeWalker

    vfunc_get_root(): DomNode
    vfunc_get_what_to_show(): number
    vfunc_get_current_node(): DomNode
    vfunc_parent_node(): DomNode | null
    vfunc_first_child(): DomNode | null
    vfunc_last_child(): DomNode | null
    vfunc_previous_sibling(): DomNode | null
    vfunc_next_sibling(): DomNode | null
    vfunc_previous_node(): DomNode | null
    vfunc_next_node(): DomNode | null

    // Own signals of GXml-0.20.GXml.DomTreeWalker

    connect(sigName: "accept-node", callback: DomTreeWalker.AcceptNodeSignalCallback): number
    connect_after(sigName: "accept-node", callback: DomTreeWalker.AcceptNodeSignalCallback): number
    emit(sigName: "accept-node", node: DomNode, ...args: any[]): void

    // Class property signals of GXml-0.20.GXml.DomTreeWalker

    connect(sigName: "notify::root", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: "notify::current-node", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-node", callback: (($obj: DomTreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomTreeWalker {

    // Own properties of GXml-0.20.GXml.DomTreeWalker

    static name: string
    static $gtype: GObject.GType<DomTreeWalker>

    // Constructors of GXml-0.20.GXml.DomTreeWalker

    constructor(config?: DomTreeWalker.ConstructorProperties) 
    _init(config?: DomTreeWalker.ConstructorProperties): void
}

export module DomNamedNodeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.Map.ConstructorProperties {
    }

}

export interface DomNamedNodeMap extends GObject.Object, Gee.Map {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMap

    readonly length: number

    // Owm methods of GXml-0.20.GXml.DomNamedNodeMap

    get_length(): number
    item(index: number): DomNode | null
    get_named_item(name: string): DomNode | null
    set_named_item(node: DomNode): DomNode | null
    remove_named_item(name: string): DomNode | null
    remove_named_item_ns(namespace_uri: string, localName: string): DomNode | null
    get_named_item_ns(namespace_uri: string, local_name: string): DomNode | null
    set_named_item_ns(node: DomNode): DomNode | null

    // Own virtual methods of GXml-0.20.GXml.DomNamedNodeMap

    vfunc_get_length(): number
    vfunc_item(index: number): DomNode | null
    vfunc_get_named_item(name: string): DomNode | null
    vfunc_set_named_item(node: DomNode): DomNode | null
    vfunc_remove_named_item(name: string): DomNode | null
    vfunc_remove_named_item_ns(namespace_uri: string, localName: string): DomNode | null
    vfunc_get_named_item_ns(namespace_uri: string, local_name: string): DomNode | null
    vfunc_set_named_item_ns(node: DomNode): DomNode | null

    // Class property signals of GXml-0.20.GXml.DomNamedNodeMap

    connect(sigName: "notify::length", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomNamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNamedNodeMap {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMap

    static name: string
    static $gtype: GObject.GType<DomNamedNodeMap>

    // Constructors of GXml-0.20.GXml.DomNamedNodeMap

    constructor(config?: DomNamedNodeMap.ConstructorProperties) 
    _init(config?: DomNamedNodeMap.ConstructorProperties): void
}

export module DomTokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.BidirList.ConstructorProperties {
    }

}

export interface DomTokenList extends GObject.Object, Gee.BidirList {

    // Own properties of GXml-0.20.GXml.DomTokenList

    readonly length: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomTokenList

    get_length(): number
    item(index: number): string | null
    contains(token: string): boolean

    // Overloads of contains

    contains(item: any): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: any): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: any): boolean
    toggle(token: string, force: boolean, _auto_: boolean): boolean
    to_string(): string | null

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomTokenList

    vfunc_get_length(): number
    vfunc_item(index: number): string | null
    vfunc_contains(token: string): boolean

    // Overloads of vfunc_contains

    vfunc_contains(item: any): boolean
    vfunc_add(tokens: string[]): void

    // Overloads of vfunc_add

    vfunc_add(item: any): boolean
    vfunc_remove(tokens: string[]): void

    // Overloads of vfunc_remove

    vfunc_remove(item: any): boolean
    vfunc_toggle(token: string, force: boolean, _auto_: boolean): boolean
    vfunc_to_string(): string | null

    // Class property signals of GXml-0.20.GXml.DomTokenList

    connect(sigName: "notify::length", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomTokenList {

    // Own properties of GXml-0.20.GXml.DomTokenList

    static name: string
    static $gtype: GObject.GType<DomTokenList>

    // Constructors of GXml-0.20.GXml.DomTokenList

    constructor(config?: DomTokenList.ConstructorProperties) 
    _init(config?: DomTokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module DomSettableTokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomTokenList.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomSettableTokenList

        value?: string | null
    }

}

export interface DomSettableTokenList extends GObject.Object, DomTokenList {

    // Own properties of GXml-0.20.GXml.DomSettableTokenList

    value: string | null

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomSettableTokenList

    get_value(): string | null
    set_value(value: string): void

    // Conflicting methods

    contains(token: string): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_contains(token: string): boolean

    // Overloads of vfunc_contains

    vfunc_contains(item: any): boolean
    vfunc_contains(item: any): boolean
    vfunc_add(tokens: string[]): void

    // Overloads of vfunc_add

    vfunc_add(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_remove(tokens: string[]): void

    // Overloads of vfunc_remove

    vfunc_remove(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomSettableTokenList

    vfunc_get_value(): string | null
    vfunc_set_value(value: string): void

    // Class property signals of GXml-0.20.GXml.DomSettableTokenList

    connect(sigName: "notify::value", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomSettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomSettableTokenList {

    // Own properties of GXml-0.20.GXml.DomSettableTokenList

    static name: string
    static $gtype: GObject.GType<DomSettableTokenList>

    // Constructors of GXml-0.20.GXml.DomSettableTokenList

    constructor(config?: DomSettableTokenList.ConstructorProperties) 
    _init(config?: DomSettableTokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module DomDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties {
    }

}

export interface DomDocument extends GObject.Object, DomNode, DomParentNode, DomNonElementParentNode {

    // Own properties of GXml-0.20.GXml.DomDocument

    readonly implementation: DomImplementation
    readonly url: string | null
    readonly documentUri: string | null
    readonly origin: string | null
    readonly compatMode: string | null
    readonly characterSet: string | null
    readonly contentType: string | null
    readonly doctype: DomDocumentType
    readonly documentElement: DomElement

    // Owm methods of GXml-0.20.GXml.DomDocument

    get_implementation(): DomImplementation
    get_url(): string
    get_document_uri(): string
    get_origin(): string
    get_compat_mode(): string
    get_character_set(): string
    get_content_type(): string
    get_doctype(): DomDocumentType | null
    get_document_element(): DomElement | null
    get_elements_by_tag_name(local_name: string): DomHTMLCollection
    get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    get_elements_by_class_name(classNames: string): DomHTMLCollection
    create_element(local_name: string): DomElement
    create_element_ns(namespace: string | null, qualified_name: string): DomElement
    create_document_fragment(): DomDocumentFragment
    create_text_node(data: string): DomText
    create_comment(data: string): DomComment
    create_processing_instruction(target: string, data: string): DomProcessingInstruction
    import_node(node: DomNode, deep: boolean): DomNode
    adopt_node(node: DomNode): DomNode
    create_event(interface: string): DomEvent
    create_range(): DomRange
    create_node_iterator(root: DomNode, whatToShow: number): DomNodeIterator
    create_tree_walker(root: DomNode, what_to_show: number): DomTreeWalker
    write_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    write_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_file_async

    /**
     * Promisified version of {@link write_file_async}
     * 
     * 
     * @param file 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_file_async}
     */
    write_file_async(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    write_file_finish(_res_: Gio.AsyncResult): void
    write_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): void
    write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_stream_async

    /**
     * Promisified version of {@link write_stream_async}
     * 
     * 
     * @param stream 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_stream_async}
     */
    write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    write_stream_finish(_res_: Gio.AsyncResult): void
    create_stream(): Gio.InputStream
    create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_stream_async

    /**
     * Promisified version of {@link create_stream_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link create_stream_async}
     */
    create_stream_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    write_string(cancellable: Gio.Cancellable | null): string | null
    write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_string_async

    /**
     * Promisified version of {@link write_string_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_string_async}
     */
    write_string_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string | null>
    write_string_finish(_res_: Gio.AsyncResult): string | null
    read_from_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    read_from_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_file_async

    /**
     * Promisified version of {@link read_from_file_async}
     * 
     * 
     * @param file 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_file_async}
     */
    read_from_file_async(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_file_finish(_res_: Gio.AsyncResult): void
    read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_string_async

    /**
     * Promisified version of {@link read_from_string_async}
     * 
     * 
     * @param str 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_string_async}
     */
    read_from_string_async(str: string, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_string_finish(_res_: Gio.AsyncResult): void
    read_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    read_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_stream_async

    /**
     * Promisified version of {@link read_from_stream_async}
     * 
     * 
     * @param stream 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_stream_async}
     */
    read_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_stream_finish(_res_: Gio.AsyncResult): void
    get_xml_parser(): Parser
    set_xml_parser(parser: Parser): void

    // Own virtual methods of GXml-0.20.GXml.DomDocument

    vfunc_get_implementation(): DomImplementation
    vfunc_get_url(): string
    vfunc_get_document_uri(): string
    vfunc_get_origin(): string
    vfunc_get_compat_mode(): string
    vfunc_get_character_set(): string
    vfunc_get_content_type(): string
    vfunc_get_doctype(): DomDocumentType | null
    vfunc_get_document_element(): DomElement | null
    vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection
    vfunc_get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    vfunc_get_elements_by_class_name(classNames: string): DomHTMLCollection
    vfunc_create_element(local_name: string): DomElement
    vfunc_create_element_ns(namespace: string | null, qualified_name: string): DomElement
    vfunc_create_document_fragment(): DomDocumentFragment
    vfunc_create_text_node(data: string): DomText
    vfunc_create_comment(data: string): DomComment
    vfunc_create_processing_instruction(target: string, data: string): DomProcessingInstruction
    vfunc_import_node(node: DomNode, deep: boolean): DomNode
    vfunc_adopt_node(node: DomNode): DomNode
    vfunc_create_event(interface: string): DomEvent
    vfunc_create_range(): DomRange
    vfunc_create_node_iterator(root: DomNode, whatToShow: number): DomNodeIterator
    vfunc_create_tree_walker(root: DomNode, what_to_show: number): DomTreeWalker
    vfunc_write_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_write_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_file_finish(_res_: Gio.AsyncResult): void
    vfunc_write_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): void
    vfunc_write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_create_stream(): Gio.InputStream
    vfunc_create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    vfunc_write_string(cancellable: Gio.Cancellable | null): string | null
    vfunc_write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_string_finish(_res_: Gio.AsyncResult): string | null
    vfunc_read_from_file(file: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_file_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_string_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_get_xml_parser(): Parser
    vfunc_set_xml_parser(parser: Parser): void

    // Class property signals of GXml-0.20.GXml.DomDocument

    connect(sigName: "notify::implementation", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomDocument {

    // Own properties of GXml-0.20.GXml.DomDocument

    static name: string
    static $gtype: GObject.GType<DomDocument>

    // Constructors of GXml-0.20.GXml.DomDocument

    constructor(config?: DomDocument.ConstructorProperties) 
    _init(config?: DomDocument.ConstructorProperties): void
}

export module DomXMLDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomDocument.ConstructorProperties {
    }

}

export interface DomXMLDocument extends GObject.Object, DomDocument {

    // Class property signals of GXml-0.20.GXml.DomXMLDocument

    connect(sigName: "notify::implementation", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomXMLDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomXMLDocument {

    // Own properties of GXml-0.20.GXml.DomXMLDocument

    static name: string
    static $gtype: GObject.GType<DomXMLDocument>

    // Constructors of GXml-0.20.GXml.DomXMLDocument

    constructor(config?: DomXMLDocument.ConstructorProperties) 
    _init(config?: DomXMLDocument.ConstructorProperties): void
}

export module DomImplementation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomImplementation extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomImplementation

    create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType
    create_document(nspace: string | null, qualified_name: string | null, doctype: DomDocumentType | null): DomXMLDocument
    create_html_document(title: string): DomDocument
    has_feature(): boolean

    // Own virtual methods of GXml-0.20.GXml.DomImplementation

    vfunc_create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType
    vfunc_create_document(nspace: string | null, qualified_name: string | null, doctype: DomDocumentType | null): DomXMLDocument
    vfunc_create_html_document(title: string): DomDocument
    vfunc_has_feature(): boolean

    // Class property signals of GXml-0.20.GXml.DomImplementation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomImplementation {

    // Own properties of GXml-0.20.GXml.DomImplementation

    static name: string
    static $gtype: GObject.GType<DomImplementation>

    // Constructors of GXml-0.20.GXml.DomImplementation

    constructor(config?: DomImplementation.ConstructorProperties) 
    _init(config?: DomImplementation.ConstructorProperties): void
}

export module DomDocumentFragment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties {
    }

}

export interface DomDocumentFragment extends GObject.Object, DomNode, DomParentNode, DomNonElementParentNode {

    // Class property signals of GXml-0.20.GXml.DomDocumentFragment

    connect(sigName: "notify::node-type", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomDocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomDocumentFragment {

    // Own properties of GXml-0.20.GXml.DomDocumentFragment

    static name: string
    static $gtype: GObject.GType<DomDocumentFragment>

    // Constructors of GXml-0.20.GXml.DomDocumentFragment

    constructor(config?: DomDocumentFragment.ConstructorProperties) 
    _init(config?: DomDocumentFragment.ConstructorProperties): void
}

export module DomDocumentType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomChildNode.ConstructorProperties {
    }

}

export interface DomDocumentType extends GObject.Object, DomNode, DomChildNode {

    // Own properties of GXml-0.20.GXml.DomDocumentType

    readonly name: string | null
    readonly publicId: string | null
    readonly systemId: string | null

    // Owm methods of GXml-0.20.GXml.DomDocumentType

    get_name(): string
    get_public_id(): string
    get_system_id(): string

    // Own virtual methods of GXml-0.20.GXml.DomDocumentType

    vfunc_get_name(): string
    vfunc_get_public_id(): string
    vfunc_get_system_id(): string

    // Class property signals of GXml-0.20.GXml.DomDocumentType

    connect(sigName: "notify::name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::public-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::public-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomDocumentType {

    // Own properties of GXml-0.20.GXml.DomDocumentType

    static name: string
    static $gtype: GObject.GType<DomDocumentType>

    // Constructors of GXml-0.20.GXml.DomDocumentType

    constructor(config?: DomDocumentType.ConstructorProperties) 
    _init(config?: DomDocumentType.ConstructorProperties): void
}

export module DomHtmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomDocument.ConstructorProperties {
    }

}

export interface DomHtmlDocument extends GObject.Object, DomDocument {

    // Owm methods of GXml-0.20.GXml.DomHtmlDocument

    read_from_string(str: string): void

    // Overloads of read_from_string

    read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    read_from_string_tolerant(str: string): void
    to_html(): string | null

    // Own virtual methods of GXml-0.20.GXml.DomHtmlDocument

    vfunc_read_from_string(str: string): void

    // Overloads of vfunc_read_from_string

    vfunc_read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_string_tolerant(str: string): void
    vfunc_to_html(): string | null

    // Class property signals of GXml-0.20.GXml.DomHtmlDocument

    connect(sigName: "notify::implementation", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomHtmlDocument {

    // Own properties of GXml-0.20.GXml.DomHtmlDocument

    static name: string
    static $gtype: GObject.GType<DomHtmlDocument>

    // Constructors of GXml-0.20.GXml.DomHtmlDocument

    constructor(config?: DomHtmlDocument.ConstructorProperties) 
    _init(config?: DomHtmlDocument.ConstructorProperties): void
}

export module DomElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomChildNode.ConstructorProperties, DomNonDocumentTypeChildNode.ConstructorProperties, DomParentNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomElement

        id?: string | null
        className?: string | null
    }

}

export interface DomElement extends GObject.Object, DomNode, DomChildNode, DomNonDocumentTypeChildNode, DomParentNode {

    // Own properties of GXml-0.20.GXml.DomElement

    readonly namespaceUri: string | null
    readonly prefix: string | null
    readonly localName: string | null
    readonly tagName: string | null
    id: string | null
    className: string | null
    readonly classList: DomTokenList
    readonly attributes: DomNamedNodeMap

    // Owm methods of GXml-0.20.GXml.DomElement

    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_tag_name(): string | null
    get_id(): string | null
    set_id(value: string | null): void
    get_class_name(): string | null
    set_class_name(value: string | null): void
    get_class_list(): DomTokenList
    get_attributes(): DomNamedNodeMap
    get_attribute(name: string): string | null
    get_attribute_ns(namespace: string | null, local_name: string): string | null
    set_attribute(name: string, value: string): void
    set_attribute_ns(namespace: string | null, name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute_ns(namespace: string | null, local_name: string): void
    has_attribute(name: string): boolean
    has_attribute_ns(namespace: string | null, local_name: string): boolean
    get_elements_by_tag_name(local_name: string): DomHTMLCollection
    get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    get_elements_by_class_name(class_names: string): DomHTMLCollection
    matches(selectors: string): boolean
    read_from_uri(uri: string): void
    read_from_uri_async(uri: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_uri_async

    /**
     * Promisified version of {@link read_from_uri_async}
     * 
     * 
     * @param uri 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_uri_async}
     */
    read_from_uri_async(uri: string, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_uri_finish(_res_: Gio.AsyncResult): void
    read_from_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    read_from_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_file_async

    /**
     * Promisified version of {@link read_from_file_async}
     * 
     * 
     * @param f 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_file_async}
     */
    read_from_file_async(f: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_file_finish(_res_: Gio.AsyncResult): void
    read_from_stream(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    read_from_stream_async(istream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_stream_async

    /**
     * Promisified version of {@link read_from_stream_async}
     * 
     * 
     * @param istream 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_stream_async}
     */
    read_from_stream_async(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_stream_finish(_res_: Gio.AsyncResult): void
    read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_from_string_async

    /**
     * Promisified version of {@link read_from_string_async}
     * 
     * 
     * @param str 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_from_string_async}
     */
    read_from_string_async(str: string, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    read_from_string_finish(_res_: Gio.AsyncResult): void
    write_string(cancellable: Gio.Cancellable | null): string | null
    write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_string_async

    /**
     * Promisified version of {@link write_string_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_string_async}
     */
    write_string_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string | null>
    write_string_finish(_res_: Gio.AsyncResult): string | null
    write_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    write_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_file_async

    /**
     * Promisified version of {@link write_file_async}
     * 
     * 
     * @param f 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_file_async}
     */
    write_file_async(f: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    write_file_finish(_res_: Gio.AsyncResult): void
    write_stream(stream: Gio.OutputStream): void
    write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_stream_async

    /**
     * Promisified version of {@link write_stream_async}
     * 
     * 
     * @param stream 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_stream_async}
     */
    write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    write_stream_finish(_res_: Gio.AsyncResult): void
    create_stream(): Gio.InputStream
    create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_stream_async

    /**
     * Promisified version of {@link create_stream_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link create_stream_async}
     */
    create_stream_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream

    // Own virtual methods of GXml-0.20.GXml.DomElement

    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_tag_name(): string | null
    vfunc_get_id(): string | null
    vfunc_set_id(value: string | null): void
    vfunc_get_class_name(): string | null
    vfunc_set_class_name(value: string | null): void
    vfunc_get_class_list(): DomTokenList
    vfunc_get_attributes(): DomNamedNodeMap
    vfunc_get_attribute(name: string): string | null
    vfunc_get_attribute_ns(namespace: string | null, local_name: string): string | null
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute_ns(namespace: string | null, name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute_ns(namespace: string | null, local_name: string): void
    vfunc_has_attribute(name: string): boolean
    vfunc_has_attribute_ns(namespace: string | null, local_name: string): boolean
    vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection
    vfunc_get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection
    vfunc_get_elements_by_class_name(class_names: string): DomHTMLCollection
    vfunc_matches(selectors: string): boolean
    vfunc_read_from_uri(uri: string): void
    vfunc_read_from_uri_async(uri: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_uri_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_file_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_stream(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_stream_async(istream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_string_async(str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_from_string_finish(_res_: Gio.AsyncResult): void
    vfunc_write_string(cancellable: Gio.Cancellable | null): string | null
    vfunc_write_string_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_string_finish(_res_: Gio.AsyncResult): string | null
    vfunc_write_file(f: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_write_file_async(f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_file_finish(_res_: Gio.AsyncResult): void
    vfunc_write_stream(stream: Gio.OutputStream): void
    vfunc_write_stream_async(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_create_stream(): Gio.InputStream
    vfunc_create_stream_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream

    // Class property signals of GXml-0.20.GXml.DomElement

    connect(sigName: "notify::namespace-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DomElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomElement {

    // Own properties of GXml-0.20.GXml.DomElement

    static name: string
    static $gtype: GObject.GType<DomElement>

    // Constructors of GXml-0.20.GXml.DomElement

    constructor(config?: DomElement.ConstructorProperties) 
    _init(config?: DomElement.ConstructorProperties): void
}

export module DomEventTarget {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomEventTarget extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomEventTarget

    add_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    remove_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    dispatch_event(event: DomEvent): boolean

    // Own virtual methods of GXml-0.20.GXml.DomEventTarget

    vfunc_add_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    vfunc_remove_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void
    vfunc_dispatch_event(event: DomEvent): boolean

    // Class property signals of GXml-0.20.GXml.DomEventTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomEventTarget {

    // Own properties of GXml-0.20.GXml.DomEventTarget

    static name: string
    static $gtype: GObject.GType<DomEventTarget>

    // Constructors of GXml-0.20.GXml.DomEventTarget

    constructor(config?: DomEventTarget.ConstructorProperties) 
    _init(config?: DomEventTarget.ConstructorProperties): void
}

export module DomEventListener {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomEventListener extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomEventListener

    handle_event(event: DomEvent): void

    // Own virtual methods of GXml-0.20.GXml.DomEventListener

    vfunc_handle_event(event: DomEvent): void

    // Class property signals of GXml-0.20.GXml.DomEventListener

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomEventListener {

    // Own properties of GXml-0.20.GXml.DomEventListener

    static name: string
    static $gtype: GObject.GType<DomEventListener>

    // Constructors of GXml-0.20.GXml.DomEventListener

    constructor(config?: DomEventListener.ConstructorProperties) 
    _init(config?: DomEventListener.ConstructorProperties): void
}

export module DomEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomEvent extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomEvent

    readonly etype: string | null
    readonly eventTarget: DomEventTarget
    readonly currentTarget: DomEventTarget
    readonly bubbles: boolean
    readonly cancelable: boolean
    readonly isTrusted: boolean
    readonly timeStamp: DomTimeStamp
    readonly defaultPrevented: boolean
    readonly eventPhase: DomEventPhase

    // Owm methods of GXml-0.20.GXml.DomEvent

    get_etype(): string
    get_event_target(): DomEventTarget | null
    get_current_target(): DomEventTarget | null
    get_bubbles(): boolean
    get_cancelable(): boolean
    get_is_trusted(): boolean
    get_time_stamp(): DomTimeStamp
    get_default_prevented(): boolean
    get_event_phase(): DomEventPhase
    stop_propagation(): void
    stop_immediate_propagation(): void
    prevent_default(): void
    init_event(type: string, bubbles: boolean, cancelable: boolean): void

    // Own virtual methods of GXml-0.20.GXml.DomEvent

    vfunc_get_etype(): string
    vfunc_get_event_target(): DomEventTarget | null
    vfunc_get_current_target(): DomEventTarget | null
    vfunc_get_bubbles(): boolean
    vfunc_get_cancelable(): boolean
    vfunc_get_is_trusted(): boolean
    vfunc_get_time_stamp(): DomTimeStamp
    vfunc_get_default_prevented(): boolean
    vfunc_get_event_phase(): DomEventPhase
    vfunc_stop_propagation(): void
    vfunc_stop_immediate_propagation(): void
    vfunc_prevent_default(): void
    vfunc_init_event(type: string, bubbles: boolean, cancelable: boolean): void

    // Class property signals of GXml-0.20.GXml.DomEvent

    connect(sigName: "notify::etype", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etype", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-target", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-trusted", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-stamp", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-prevented", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-phase", callback: (($obj: DomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomEvent {

    // Own properties of GXml-0.20.GXml.DomEvent

    static name: string
    static $gtype: GObject.GType<DomEvent>

    // Constructors of GXml-0.20.GXml.DomEvent

    constructor(config?: DomEvent.ConstructorProperties) 
    _init(config?: DomEvent.ConstructorProperties): void
}

export module DomCustomEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomEvent.ConstructorProperties {
    }

}

export interface DomCustomEvent extends GObject.Object, DomEvent {

    // Own properties of GXml-0.20.GXml.DomCustomEvent

    readonly detail: any

    // Owm methods of GXml-0.20.GXml.DomCustomEvent

    get_detail(): /* result */ any
    init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: any): void

    // Own virtual methods of GXml-0.20.GXml.DomCustomEvent

    vfunc_get_detail(): /* result */ any
    vfunc_init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: any): void

    // Class property signals of GXml-0.20.GXml.DomCustomEvent

    connect(sigName: "notify::detail", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::etype", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etype", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-target", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-trusted", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-stamp", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-prevented", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-phase", callback: (($obj: DomCustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomCustomEvent {

    // Own properties of GXml-0.20.GXml.DomCustomEvent

    static name: string
    static $gtype: GObject.GType<DomCustomEvent>

    // Constructors of GXml-0.20.GXml.DomCustomEvent

    constructor(config?: DomCustomEvent.ConstructorProperties) 
    _init(config?: DomCustomEvent.ConstructorProperties): void
}

export module DomMutationObserver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomMutationObserver extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomMutationObserver

    observe(target: Node, options: DomMutationObserverInit): void
    disconnect(): void
    take_records(): Gee.List

    // Own virtual methods of GXml-0.20.GXml.DomMutationObserver

    vfunc_observe(target: Node, options: DomMutationObserverInit): void
    vfunc_disconnect(): void
    vfunc_take_records(): Gee.List

    // Class property signals of GXml-0.20.GXml.DomMutationObserver

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomMutationObserver {

    // Own properties of GXml-0.20.GXml.DomMutationObserver

    static name: string
    static $gtype: GObject.GType<DomMutationObserver>

    // Constructors of GXml-0.20.GXml.DomMutationObserver

    constructor(config?: DomMutationObserver.ConstructorProperties) 
    _init(config?: DomMutationObserver.ConstructorProperties): void
}

export module DomMutationRecord {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomMutationRecord

        addedNodes?: DomNodeList | null
        removedNodes?: DomNodeList | null
    }

}

export interface DomMutationRecord extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomMutationRecord

    readonly mtype: string | null
    readonly target: DomNode
    addedNodes: DomNodeList
    removedNodes: DomNodeList
    readonly previousSibling: DomNode
    readonly nextSibling: DomNode
    readonly attributeName: string | null
    readonly attributeNamespace: string | null
    readonly oldValue: string | null

    // Owm methods of GXml-0.20.GXml.DomMutationRecord

    get_mtype(): string
    get_target(): DomNode
    get_added_nodes(): DomNodeList
    set_added_nodes(value: DomNodeList): void
    get_removed_nodes(): DomNodeList
    set_removed_nodes(value: DomNodeList): void
    get_previous_sibling(): DomNode | null
    get_next_sibling(): DomNode | null
    get_attribute_name(): string | null
    get_attribute_namespace(): string | null
    get_old_value(): string | null

    // Own virtual methods of GXml-0.20.GXml.DomMutationRecord

    vfunc_get_mtype(): string
    vfunc_get_target(): DomNode
    vfunc_get_added_nodes(): DomNodeList
    vfunc_set_added_nodes(value: DomNodeList): void
    vfunc_get_removed_nodes(): DomNodeList
    vfunc_set_removed_nodes(value: DomNodeList): void
    vfunc_get_previous_sibling(): DomNode | null
    vfunc_get_next_sibling(): DomNode | null
    vfunc_get_attribute_name(): string | null
    vfunc_get_attribute_namespace(): string | null
    vfunc_get_old_value(): string | null

    // Class property signals of GXml-0.20.GXml.DomMutationRecord

    connect(sigName: "notify::mtype", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtype", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtype", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::added-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::added-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::added-nodes", ...args: any[]): void
    connect(sigName: "notify::removed-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removed-nodes", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::removed-nodes", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::attribute-name", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-name", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-name", ...args: any[]): void
    connect(sigName: "notify::attribute-namespace", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-namespace", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-namespace", ...args: any[]): void
    connect(sigName: "notify::old-value", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-value", callback: (($obj: DomMutationRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::old-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomMutationRecord {

    // Own properties of GXml-0.20.GXml.DomMutationRecord

    static name: string
    static $gtype: GObject.GType<DomMutationRecord>

    // Constructors of GXml-0.20.GXml.DomMutationRecord

    constructor(config?: DomMutationRecord.ConstructorProperties) 
    _init(config?: DomMutationRecord.ConstructorProperties): void
}

export module DomNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomEventTarget.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomNode

        ownerDocument?: DomDocument | null
        nodeValue?: string | null
        textContent?: string | null
    }

}

export interface DomNode extends GObject.Object, DomEventTarget {

    // Own properties of GXml-0.20.GXml.DomNode

    readonly nodeType: DomNodeNodeType
    readonly nodeName: string | null
    readonly baseUri: string | null
    ownerDocument: DomDocument
    readonly parentNode: DomNode
    readonly parentElement: DomElement
    readonly childNodes: DomNodeList
    readonly firstChild: DomNode
    readonly lastChild: DomNode
    readonly previousSibling: DomNode
    readonly nextSibling: DomNode
    nodeValue: string | null
    textContent: string | null

    // Owm methods of GXml-0.20.GXml.DomNode

    get_node_type(): DomNodeNodeType
    get_node_name(): string | null
    get_base_uri(): string | null
    get_owner_document(): DomDocument | null
    set_owner_document(value: DomDocument | null): void
    get_parent_node(): DomNode | null
    get_parent_element(): DomElement | null
    get_child_nodes(): DomNodeList
    get_first_child(): DomNode | null
    get_last_child(): DomNode | null
    get_previous_sibling(): DomNode | null
    get_next_sibling(): DomNode | null
    get_node_value(): string | null
    set_node_value(value: string | null): void
    get_text_content(): string | null
    set_text_content(value: string | null): void
    has_child_nodes(): boolean
    normalize(): void
    is_equal_node(node: DomNode | null): boolean
    compare_document_position(other: DomNode): DomNodeDocumentPosition
    contains(other: DomNode | null): boolean
    lookup_prefix(nspace: string | null): string | null
    lookup_namespace_uri(prefix: string | null): string | null
    is_default_namespace(nspace: string | null): boolean
    insert_before(node: DomNode, child: DomNode | null): DomNode
    append_child(node: DomNode): DomNode
    replace_child(node: DomNode, child: DomNode): DomNode
    remove_child(child: DomNode): DomNode

    // Own virtual methods of GXml-0.20.GXml.DomNode

    vfunc_get_node_type(): DomNodeNodeType
    vfunc_get_node_name(): string | null
    vfunc_get_base_uri(): string | null
    vfunc_get_owner_document(): DomDocument | null
    vfunc_set_owner_document(value: DomDocument | null): void
    vfunc_get_parent_node(): DomNode | null
    vfunc_get_parent_element(): DomElement | null
    vfunc_get_child_nodes(): DomNodeList
    vfunc_get_first_child(): DomNode | null
    vfunc_get_last_child(): DomNode | null
    vfunc_get_previous_sibling(): DomNode | null
    vfunc_get_next_sibling(): DomNode | null
    vfunc_get_node_value(): string | null
    vfunc_set_node_value(value: string | null): void
    vfunc_get_text_content(): string | null
    vfunc_set_text_content(value: string | null): void
    vfunc_has_child_nodes(): boolean
    vfunc_normalize(): void
    vfunc_is_equal_node(node: DomNode | null): boolean
    vfunc_compare_document_position(other: DomNode): DomNodeDocumentPosition
    vfunc_contains(other: DomNode | null): boolean
    vfunc_lookup_prefix(nspace: string | null): string | null
    vfunc_lookup_namespace_uri(prefix: string | null): string | null
    vfunc_is_default_namespace(nspace: string | null): boolean
    vfunc_insert_before(node: DomNode, child: DomNode | null): DomNode
    vfunc_append_child(node: DomNode): DomNode
    vfunc_replace_child(node: DomNode, child: DomNode): DomNode
    vfunc_remove_child(child: DomNode): DomNode

    // Class property signals of GXml-0.20.GXml.DomNode

    connect(sigName: "notify::node-type", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DomNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNode {

    // Own properties of GXml-0.20.GXml.DomNode

    static name: string
    static $gtype: GObject.GType<DomNode>

    // Constructors of GXml-0.20.GXml.DomNode

    constructor(config?: DomNode.ConstructorProperties) 
    _init(config?: DomNode.ConstructorProperties): void
    static copy(doc: DomDocument, node: DomNode, source: DomNode, deep: boolean): boolean
}

export module DomRange {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomRange extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomRange

    readonly startContainer: DomNode
    readonly startOffset: number
    readonly endContainer: DomNode
    readonly endOffset: number
    readonly collapsed: boolean
    readonly commonAncestorContainer: DomNode

    // Owm methods of GXml-0.20.GXml.DomRange

    get_start_container(): DomNode
    get_start_offset(): number
    get_end_container(): DomNode
    get_end_offset(): number
    get_collapsed(): boolean
    get_common_ancestor_container(): DomNode
    set_start(node: DomNode, offset: number): void
    set_end(node: DomNode, offset: number): void
    set_start_before(node: DomNode): void
    set_start_after(node: DomNode): void
    set_end_before(node: DomNode): void
    set_end_after(node: DomNode): void
    collapse(to_start: boolean): void
    select_node(node: DomNode): void
    select_node_contents(node: DomNode): void
    compare_boundary_points(how: DomRangeBoundaryPoints, sourceRange: DomRange): number
    delete_contents(): void
    extract_contents(): DomDocumentFragment | null
    clone_contents(): DomDocumentFragment | null
    insert_node(node: DomNode): void
    surround_contents(newParent: DomNode): void
    clone_range(): DomRange
    detach(): void
    is_point_in_range(node: DomNode, offset: number): boolean
    compare_point(node: DomNode, offset: number): number
    intersects_node(node: DomNode): boolean
    to_string(): string | null

    // Own virtual methods of GXml-0.20.GXml.DomRange

    vfunc_get_start_container(): DomNode
    vfunc_get_start_offset(): number
    vfunc_get_end_container(): DomNode
    vfunc_get_end_offset(): number
    vfunc_get_collapsed(): boolean
    vfunc_get_common_ancestor_container(): DomNode
    vfunc_set_start(node: DomNode, offset: number): void
    vfunc_set_end(node: DomNode, offset: number): void
    vfunc_set_start_before(node: DomNode): void
    vfunc_set_start_after(node: DomNode): void
    vfunc_set_end_before(node: DomNode): void
    vfunc_set_end_after(node: DomNode): void
    vfunc_collapse(to_start: boolean): void
    vfunc_select_node(node: DomNode): void
    vfunc_select_node_contents(node: DomNode): void
    vfunc_compare_boundary_points(how: DomRangeBoundaryPoints, sourceRange: DomRange): number
    vfunc_delete_contents(): void
    vfunc_extract_contents(): DomDocumentFragment | null
    vfunc_clone_contents(): DomDocumentFragment | null
    vfunc_insert_node(node: DomNode): void
    vfunc_surround_contents(newParent: DomNode): void
    vfunc_clone_range(): DomRange
    vfunc_detach(): void
    vfunc_is_point_in_range(node: DomNode, offset: number): boolean
    vfunc_compare_point(node: DomNode, offset: number): number
    vfunc_intersects_node(node: DomNode): boolean
    vfunc_to_string(): string | null

    // Class property signals of GXml-0.20.GXml.DomRange

    connect(sigName: "notify::start-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-container", ...args: any[]): void
    connect(sigName: "notify::start-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-offset", ...args: any[]): void
    connect(sigName: "notify::end-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-container", ...args: any[]): void
    connect(sigName: "notify::end-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-offset", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-offset", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::common-ancestor-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-ancestor-container", callback: (($obj: DomRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::common-ancestor-container", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomRange {

    // Own properties of GXml-0.20.GXml.DomRange

    static name: string
    static $gtype: GObject.GType<DomRange>

    // Constructors of GXml-0.20.GXml.DomRange

    constructor(config?: DomRange.ConstructorProperties) 
    _init(config?: DomRange.ConstructorProperties): void
}

export module IXsdSchema {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdSchema

        elementDefinitions?: IXsdListElements | null
        simpleTypeDefinitions?: IXsdListSimpleTypes | null
        complexTypeDefinitions?: IXsdListComplexTypes | null
    }

}

export interface IXsdSchema extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdSchema

    elementDefinitions: IXsdListElements
    simpleTypeDefinitions: IXsdListSimpleTypes
    complexTypeDefinitions: IXsdListComplexTypes

    // Owm methods of GXml-0.20.GXml.IXsdSchema

    get_element_definitions(): IXsdListElements
    set_element_definitions(value: IXsdListElements): void
    get_simple_type_definitions(): IXsdListSimpleTypes
    set_simple_type_definitions(value: IXsdListSimpleTypes): void
    get_complex_type_definitions(): IXsdListComplexTypes
    set_complex_type_definitions(value: IXsdListComplexTypes): void

    // Own virtual methods of GXml-0.20.GXml.IXsdSchema

    vfunc_get_element_definitions(): IXsdListElements
    vfunc_set_element_definitions(value: IXsdListElements): void
    vfunc_get_simple_type_definitions(): IXsdListSimpleTypes
    vfunc_set_simple_type_definitions(value: IXsdListSimpleTypes): void
    vfunc_get_complex_type_definitions(): IXsdListComplexTypes
    vfunc_set_complex_type_definitions(value: IXsdListComplexTypes): void

    // Class property signals of GXml-0.20.GXml.IXsdSchema

    connect(sigName: "notify::element-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-definitions", ...args: any[]): void
    connect(sigName: "notify::simple-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type-definitions", ...args: any[]): void
    connect(sigName: "notify::complex-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type-definitions", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type-definitions", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdSchema {

    // Own properties of GXml-0.20.GXml.IXsdSchema

    static name: string
    static $gtype: GObject.GType<IXsdSchema>

    // Constructors of GXml-0.20.GXml.IXsdSchema

    constructor(config?: IXsdSchema.ConstructorProperties) 
    _init(config?: IXsdSchema.ConstructorProperties): void
}

export module IXsdBaseType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdBaseType

        anotation?: IXsdAnnotation | null
    }

}

export interface IXsdBaseType extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseType

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseType

    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseType

    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseType

    connect(sigName: "notify::anotation", callback: (($obj: IXsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdBaseType

    static name: string
    static $gtype: GObject.GType<IXsdBaseType>

    // Constructors of GXml-0.20.GXml.IXsdBaseType

    constructor(config?: IXsdBaseType.ConstructorProperties) 
    _init(config?: IXsdBaseType.ConstructorProperties): void
}

export module IXsdSimpleType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties, IXsdBaseType.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdSimpleType

        final?: string | null
        id?: string | null
        name?: string | null
        annotation?: IXsdAnnotation | null
        list?: IXsdTypeList | null
        union?: IXsdTypeUnion | null
        restriction?: IXsdTypeRestriction | null
    }

}

export interface IXsdSimpleType extends GObject.Object, DomElement, IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdSimpleType

    final: string | null
    id: string | null
    name: string | null
    annotation: IXsdAnnotation
    list: IXsdTypeList
    union: IXsdTypeUnion
    restriction: IXsdTypeRestriction

    // Owm methods of GXml-0.20.GXml.IXsdSimpleType

    get_final(): string
    set_final(value: string): void
    get_id(): string

    // Overloads of get_id

    get_id(): string | null
    set_id(value: string): void

    // Overloads of set_id

    set_id(value: string | null): void
    get_name(): string
    set_name(value: string): void
    get_annotation(): IXsdAnnotation
    set_annotation(value: IXsdAnnotation): void
    get_list(): IXsdTypeList
    set_list(value: IXsdTypeList): void
    get_union(): IXsdTypeUnion
    set_union(value: IXsdTypeUnion): void
    get_restriction(): IXsdTypeRestriction
    set_restriction(value: IXsdTypeRestriction): void

    // Own virtual methods of GXml-0.20.GXml.IXsdSimpleType

    vfunc_get_final(): string
    vfunc_set_final(value: string): void
    vfunc_get_id(): string

    // Overloads of vfunc_get_id

    vfunc_get_id(): string | null
    vfunc_set_id(value: string): void

    // Overloads of vfunc_set_id

    vfunc_set_id(value: string | null): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_annotation(): IXsdAnnotation
    vfunc_set_annotation(value: IXsdAnnotation): void
    vfunc_get_list(): IXsdTypeList
    vfunc_set_list(value: IXsdTypeList): void
    vfunc_get_union(): IXsdTypeUnion
    vfunc_set_union(value: IXsdTypeUnion): void
    vfunc_get_restriction(): IXsdTypeRestriction
    vfunc_set_restriction(value: IXsdTypeRestriction): void

    // Class property signals of GXml-0.20.GXml.IXsdSimpleType

    connect(sigName: "notify::final", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::union", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::union", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::union", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdSimpleType {

    // Own properties of GXml-0.20.GXml.IXsdSimpleType

    static name: string
    static $gtype: GObject.GType<IXsdSimpleType>

    // Constructors of GXml-0.20.GXml.IXsdSimpleType

    constructor(config?: IXsdSimpleType.ConstructorProperties) 
    _init(config?: IXsdSimpleType.ConstructorProperties): void
}

export module IXsdTypeDef {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdTypeDef extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdTypeDef

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeDef

    static name: string
    static $gtype: GObject.GType<IXsdTypeDef>

    // Constructors of GXml-0.20.GXml.IXsdTypeDef

    constructor(config?: IXsdTypeDef.ConstructorProperties) 
    _init(config?: IXsdTypeDef.ConstructorProperties): void
}

export module IXsdTypeRestriction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestriction

        base?: string | null
        id?: string | null
        simpleType?: IXsdSimpleType | null
        enumerations?: IXsdListTypeRestrictionEnumerations | null
        whiteSpaces?: IXsdListTypeRestrictionWhiteSpaces | null
    }

}

export interface IXsdTypeRestriction extends GObject.Object, IXsdTypeDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestriction

    base: string | null
    id: string | null
    simpleType: IXsdSimpleType
    enumerations: IXsdListTypeRestrictionEnumerations
    whiteSpaces: IXsdListTypeRestrictionWhiteSpaces

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestriction

    get_base(): string
    set_base(value: string): void
    get_id(): string
    set_id(value: string): void
    get_simple_type(): IXsdSimpleType
    set_simple_type(value: IXsdSimpleType): void
    get_enumerations(): IXsdListTypeRestrictionEnumerations
    set_enumerations(value: IXsdListTypeRestrictionEnumerations): void
    get_white_spaces(): IXsdListTypeRestrictionWhiteSpaces
    set_white_spaces(value: IXsdListTypeRestrictionWhiteSpaces): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestriction

    vfunc_get_base(): string
    vfunc_set_base(value: string): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_simple_type(): IXsdSimpleType
    vfunc_set_simple_type(value: IXsdSimpleType): void
    vfunc_get_enumerations(): IXsdListTypeRestrictionEnumerations
    vfunc_set_enumerations(value: IXsdListTypeRestrictionEnumerations): void
    vfunc_get_white_spaces(): IXsdListTypeRestrictionWhiteSpaces
    vfunc_set_white_spaces(value: IXsdListTypeRestrictionWhiteSpaces): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestriction

    connect(sigName: "notify::base", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::enumerations", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enumerations", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enumerations", ...args: any[]): void
    connect(sigName: "notify::white-spaces", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-spaces", callback: (($obj: IXsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::white-spaces", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestriction {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestriction

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestriction>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestriction

    constructor(config?: IXsdTypeRestriction.ConstructorProperties) 
    _init(config?: IXsdTypeRestriction.ConstructorProperties): void
}

export module IXsdTypeList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeDef.ConstructorProperties {
    }

}

export interface IXsdTypeList extends GObject.Object, IXsdTypeDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeList {

    // Own properties of GXml-0.20.GXml.IXsdTypeList

    static name: string
    static $gtype: GObject.GType<IXsdTypeList>

    // Constructors of GXml-0.20.GXml.IXsdTypeList

    constructor(config?: IXsdTypeList.ConstructorProperties) 
    _init(config?: IXsdTypeList.ConstructorProperties): void
}

export module IXsdTypeUnion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeDef.ConstructorProperties {
    }

}

export interface IXsdTypeUnion extends GObject.Object, IXsdTypeDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeUnion

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeUnion {

    // Own properties of GXml-0.20.GXml.IXsdTypeUnion

    static name: string
    static $gtype: GObject.GType<IXsdTypeUnion>

    // Constructors of GXml-0.20.GXml.IXsdTypeUnion

    constructor(config?: IXsdTypeUnion.ConstructorProperties) 
    _init(config?: IXsdTypeUnion.ConstructorProperties): void
}

export module IXsdTypeRestrictionDef {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

        annotation?: IXsdAnnotation | null
    }

}

export interface IXsdTypeRestrictionDef extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    annotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionDef

    get_annotation(): IXsdAnnotation
    set_annotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionDef

    vfunc_get_annotation(): IXsdAnnotation
    vfunc_set_annotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionDef

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionDef>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionDef

    constructor(config?: IXsdTypeRestrictionDef.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionDef.ConstructorProperties): void
}

export module IXsdTypeRestrictionMinExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMinExclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionMinExclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMinExclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    constructor(config?: IXsdTypeRestrictionMinExclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMinExclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionMinInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMinInclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionMinInclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMinInclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    constructor(config?: IXsdTypeRestrictionMinInclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMinInclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionMaxExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMaxExclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionMaxExclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMaxExclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    constructor(config?: IXsdTypeRestrictionMaxExclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMaxExclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionMaxInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMaxInclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionMaxInclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMaxInclusive>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    constructor(config?: IXsdTypeRestrictionMaxInclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMaxInclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionTotalDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionTotalDigits extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionTotalDigits {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionTotalDigits>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    constructor(config?: IXsdTypeRestrictionTotalDigits.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionTotalDigits.ConstructorProperties): void
}

export module IXsdTypeRestrictionFractionDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionFractionDigits extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionFractionDigits {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionFractionDigits>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    constructor(config?: IXsdTypeRestrictionFractionDigits.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionFractionDigits.ConstructorProperties): void
}

export module IXsdTypeRestrictionLength {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionLength

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionLength

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionLength>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionLength

    constructor(config?: IXsdTypeRestrictionLength.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionLength.ConstructorProperties): void
}

export module IXsdTypeRestrictionMinLength {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMinLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionMinLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMinLength>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    constructor(config?: IXsdTypeRestrictionMinLength.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMinLength.ConstructorProperties): void
}

export module IXsdTypeRestrictionMaxLength {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMaxLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionMaxLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionMaxLength>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    constructor(config?: IXsdTypeRestrictionMaxLength.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMaxLength.ConstructorProperties): void
}

export module IXsdTypeRestrictionEnumeration {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

        id?: string | null
        value?: string | null
    }

}

export interface IXsdTypeRestrictionEnumeration extends GObject.Object, IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    id: string | null
    value: string | null

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    get_id(): string
    set_id(value: string): void
    get_value(): string
    set_value(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_value(): string
    vfunc_set_value(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    connect(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionEnumeration {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionEnumeration>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    constructor(config?: IXsdTypeRestrictionEnumeration.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionEnumeration.ConstructorProperties): void
}

export module IXsdTypeRestrictionWhiteSpace {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

        fixed?: boolean | null
        id?: string | null
        value?: string | null
    }

}

export interface IXsdTypeRestrictionWhiteSpace extends GObject.Object, IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    fixed: boolean
    id: string | null
    value: string | null

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    get_fixed(): boolean
    set_fixed(value: boolean): void
    get_id(): string
    set_id(value: string): void
    get_value(): string
    set_value(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    vfunc_get_fixed(): boolean
    vfunc_set_fixed(value: boolean): void
    vfunc_get_id(): string
    vfunc_set_id(value: string): void
    vfunc_get_value(): string
    vfunc_set_value(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    connect(sigName: "notify::fixed", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionWhiteSpace {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionWhiteSpace>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    constructor(config?: IXsdTypeRestrictionWhiteSpace.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionWhiteSpace.ConstructorProperties): void
}

export module IXsdTypeRestrictionPattern {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionPattern extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionPattern {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionPattern>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    constructor(config?: IXsdTypeRestrictionPattern.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionPattern.ConstructorProperties): void
}

export module IXsdTypeRestrictionAssertion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionAssertion extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionAssertion {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionAssertion>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    constructor(config?: IXsdTypeRestrictionAssertion.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionAssertion.ConstructorProperties): void
}

export module IXsdTypeRestrictionExplicitTimezone {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionExplicitTimezone extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    connect(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: IXsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdTypeRestrictionExplicitTimezone {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    static name: string
    static $gtype: GObject.GType<IXsdTypeRestrictionExplicitTimezone>

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    constructor(config?: IXsdTypeRestrictionExplicitTimezone.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionExplicitTimezone.ConstructorProperties): void
}

export module IXsdComplexType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties, IXsdBaseType.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdComplexType

        abstract?: boolean | null
        block?: string | null
        final?: string | null
        mixed?: boolean | null
        name?: string | null
        defaultAttributesApply?: boolean | null
        contentType?: IXsdBaseContent | null
    }

}

export interface IXsdComplexType extends GObject.Object, DomElement, IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdComplexType

    abstract: boolean
    block: string | null
    final: string | null
    mixed: boolean
    name: string | null
    defaultAttributesApply: boolean
    contentType: IXsdBaseContent
    readonly typeAttributes: IXsdListAttributes
    readonly groupAttributes: IXsdListAttributesGroup

    // Owm methods of GXml-0.20.GXml.IXsdComplexType

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_final(): string
    set_final(value: string): void
    get_mixed(): boolean
    set_mixed(value: boolean): void
    get_name(): string
    set_name(value: string): void
    get_default_attributes_apply(): boolean
    set_default_attributes_apply(value: boolean): void
    get_content_type(): IXsdBaseContent
    set_content_type(value: IXsdBaseContent): void
    get_type_attributes(): IXsdListAttributes
    get_group_attributes(): IXsdListAttributesGroup

    // Own virtual methods of GXml-0.20.GXml.IXsdComplexType

    vfunc_get_abstract(): boolean
    vfunc_set_abstract(value: boolean): void
    vfunc_get_block(): string
    vfunc_set_block(value: string): void
    vfunc_get_final(): string
    vfunc_set_final(value: string): void
    vfunc_get_mixed(): boolean
    vfunc_set_mixed(value: boolean): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_default_attributes_apply(): boolean
    vfunc_set_default_attributes_apply(value: boolean): void
    vfunc_get_content_type(): IXsdBaseContent
    vfunc_set_content_type(value: IXsdBaseContent): void
    vfunc_get_type_attributes(): IXsdListAttributes
    vfunc_get_group_attributes(): IXsdListAttributesGroup

    // Class property signals of GXml-0.20.GXml.IXsdComplexType

    connect(sigName: "notify::abstract", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::mixed", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixed", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mixed", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::default-attributes-apply", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-attributes-apply", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-attributes-apply", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::type-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-attributes", ...args: any[]): void
    connect(sigName: "notify::group-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-attributes", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdComplexType {

    // Own properties of GXml-0.20.GXml.IXsdComplexType

    static name: string
    static $gtype: GObject.GType<IXsdComplexType>

    // Constructors of GXml-0.20.GXml.IXsdComplexType

    constructor(config?: IXsdComplexType.ConstructorProperties) 
    _init(config?: IXsdComplexType.ConstructorProperties): void
}

export module IXsdExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdExtension

        base?: string | null
    }

}

export interface IXsdExtension extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdExtension

    base: string | null

    // Owm methods of GXml-0.20.GXml.IXsdExtension

    get_base(): string
    set_base(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdExtension

    vfunc_get_base(): string
    vfunc_set_base(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdExtension

    connect(sigName: "notify::base", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdExtension {

    // Own properties of GXml-0.20.GXml.IXsdExtension

    static name: string
    static $gtype: GObject.GType<IXsdExtension>

    // Constructors of GXml-0.20.GXml.IXsdExtension

    constructor(config?: IXsdExtension.ConstructorProperties) 
    _init(config?: IXsdExtension.ConstructorProperties): void
}

export module IXsdElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdElement

        abstract?: boolean | null
        block?: string | null
        "default"?: string | null
        final?: string | null
        fixed?: string | null
        form?: string | null
        id?: string | null
        maxOccurs?: string | null
        minOccurs?: string | null
        name?: string | null
        nillable?: boolean | null
        ref?: string | null
        substitutionGroup?: DomTokenList | null
        targetNamespace?: string | null
        objectType?: string | null
        anotation?: IXsdAnnotation | null
        simpleType?: IXsdSimpleType | null
        complexType?: IXsdComplexType | null
    }

}

export interface IXsdElement extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdElement

    abstract: boolean
    block: string | null
    "default": string | null
    final: string | null
    fixed: string | null
    form: string | null
    id: string | null
    maxOccurs: string | null
    minOccurs: string | null
    name: string | null
    nillable: boolean
    // Has conflict: ref: string | null
    substitutionGroup: DomTokenList
    targetNamespace: string | null
    objectType: string | null
    anotation: IXsdAnnotation
    simpleType: IXsdSimpleType
    complexType: IXsdComplexType

    // Owm methods of GXml-0.20.GXml.IXsdElement

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_default(): string
    set_default(value: string): void
    get_final(): string
    set_final(value: string): void
    get_fixed(): string
    set_fixed(value: string): void
    get_form(): string
    set_form(value: string): void
    get_id(): string | null
    set_id(value: string | null): void
    get_maxOccurs(): string
    set_maxOccurs(value: string): void
    get_minOccurs(): string
    set_minOccurs(value: string): void
    get_name(): string
    set_name(value: string): void
    get_nillable(): boolean
    set_nillable(value: boolean): void
    get_ref(): string
    set_ref(value: string): void
    get_substitution_group(): DomTokenList
    set_substitution_group(value: DomTokenList): void
    get_target_namespace(): string
    set_target_namespace(value: string): void
    get_object_type(): string
    set_object_type(value: string): void
    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void
    get_simple_type(): IXsdSimpleType
    set_simple_type(value: IXsdSimpleType): void
    get_complex_type(): IXsdComplexType
    set_complex_type(value: IXsdComplexType): void

    // Own virtual methods of GXml-0.20.GXml.IXsdElement

    vfunc_get_abstract(): boolean
    vfunc_set_abstract(value: boolean): void
    vfunc_get_block(): string
    vfunc_set_block(value: string): void
    vfunc_get_default(): string
    vfunc_set_default(value: string): void
    vfunc_get_final(): string
    vfunc_set_final(value: string): void
    vfunc_get_fixed(): string
    vfunc_set_fixed(value: string): void
    vfunc_get_form(): string
    vfunc_set_form(value: string): void
    vfunc_get_id(): string | null
    vfunc_set_id(value: string | null): void
    vfunc_get_maxOccurs(): string
    vfunc_set_maxOccurs(value: string): void
    vfunc_get_minOccurs(): string
    vfunc_set_minOccurs(value: string): void
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_nillable(): boolean
    vfunc_set_nillable(value: boolean): void
    vfunc_get_ref(): string
    vfunc_set_ref(value: string): void
    vfunc_get_substitution_group(): DomTokenList
    vfunc_set_substitution_group(value: DomTokenList): void
    vfunc_get_target_namespace(): string
    vfunc_set_target_namespace(value: string): void
    vfunc_get_object_type(): string
    vfunc_set_object_type(value: string): void
    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void
    vfunc_get_simple_type(): IXsdSimpleType
    vfunc_set_simple_type(value: IXsdSimpleType): void
    vfunc_get_complex_type(): IXsdComplexType
    vfunc_set_complex_type(value: IXsdComplexType): void

    // Class property signals of GXml-0.20.GXml.IXsdElement

    connect(sigName: "notify::abstract", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::default", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::form", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::maxOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maxOccurs", ...args: any[]): void
    connect(sigName: "notify::minOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minOccurs", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minOccurs", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nillable", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nillable", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nillable", ...args: any[]): void
    connect(sigName: "notify::ref", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref", ...args: any[]): void
    connect(sigName: "notify::substitution-group", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::substitution-group", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::substitution-group", ...args: any[]): void
    connect(sigName: "notify::target-namespace", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-namespace", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target-namespace", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::complex-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: IXsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdElement {

    // Own properties of GXml-0.20.GXml.IXsdElement

    static name: string
    static $gtype: GObject.GType<IXsdElement>

    // Constructors of GXml-0.20.GXml.IXsdElement

    constructor(config?: IXsdElement.ConstructorProperties) 
    _init(config?: IXsdElement.ConstructorProperties): void
}

export module IXsdAnnotation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdAnnotation extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAnnotation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdAnnotation {

    // Own properties of GXml-0.20.GXml.IXsdAnnotation

    static name: string
    static $gtype: GObject.GType<IXsdAnnotation>

    // Constructors of GXml-0.20.GXml.IXsdAnnotation

    constructor(config?: IXsdAnnotation.ConstructorProperties) 
    _init(config?: IXsdAnnotation.ConstructorProperties): void
}

export module IXsdBaseContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdBaseContent

        anotation?: IXsdAnnotation | null
    }

}

export interface IXsdBaseContent extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseContent

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseContent

    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseContent

    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdBaseContent {

    // Own properties of GXml-0.20.GXml.IXsdBaseContent

    static name: string
    static $gtype: GObject.GType<IXsdBaseContent>

    // Constructors of GXml-0.20.GXml.IXsdBaseContent

    constructor(config?: IXsdBaseContent.ConstructorProperties) 
    _init(config?: IXsdBaseContent.ConstructorProperties): void
}

export module IXsdSimpleContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdBaseContent.ConstructorProperties {
    }

}

export interface IXsdSimpleContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdSimpleContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdSimpleContent {

    // Own properties of GXml-0.20.GXml.IXsdSimpleContent

    static name: string
    static $gtype: GObject.GType<IXsdSimpleContent>

    // Constructors of GXml-0.20.GXml.IXsdSimpleContent

    constructor(config?: IXsdSimpleContent.ConstructorProperties) 
    _init(config?: IXsdSimpleContent.ConstructorProperties): void
}

export module IXsdComplexContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdBaseContent.ConstructorProperties {
    }

}

export interface IXsdComplexContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdComplexContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdComplexContent {

    // Own properties of GXml-0.20.GXml.IXsdComplexContent

    static name: string
    static $gtype: GObject.GType<IXsdComplexContent>

    // Constructors of GXml-0.20.GXml.IXsdComplexContent

    constructor(config?: IXsdComplexContent.ConstructorProperties) 
    _init(config?: IXsdComplexContent.ConstructorProperties): void
}

export module IXsdOpenContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdBaseContent.ConstructorProperties {
    }

}

export interface IXsdOpenContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdOpenContent

    connect(sigName: "notify::anotation", callback: (($obj: IXsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdOpenContent {

    // Own properties of GXml-0.20.GXml.IXsdOpenContent

    static name: string
    static $gtype: GObject.GType<IXsdOpenContent>

    // Constructors of GXml-0.20.GXml.IXsdOpenContent

    constructor(config?: IXsdOpenContent.ConstructorProperties) 
    _init(config?: IXsdOpenContent.ConstructorProperties): void
}

export module IXsdBaseAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdBaseAttribute

        anotation?: IXsdAnnotation | null
    }

}

export interface IXsdBaseAttribute extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttribute

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseAttribute

    get_anotation(): IXsdAnnotation
    set_anotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseAttribute

    vfunc_get_anotation(): IXsdAnnotation
    vfunc_set_anotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseAttribute

    connect(sigName: "notify::anotation", callback: (($obj: IXsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: IXsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttribute

    static name: string
    static $gtype: GObject.GType<IXsdBaseAttribute>

    // Constructors of GXml-0.20.GXml.IXsdBaseAttribute

    constructor(config?: IXsdBaseAttribute.ConstructorProperties) 
    _init(config?: IXsdBaseAttribute.ConstructorProperties): void
}

export module IXsdAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdAttribute extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAttribute

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdAttribute {

    // Own properties of GXml-0.20.GXml.IXsdAttribute

    static name: string
    static $gtype: GObject.GType<IXsdAttribute>

    // Constructors of GXml-0.20.GXml.IXsdAttribute

    constructor(config?: IXsdAttribute.ConstructorProperties) 
    _init(config?: IXsdAttribute.ConstructorProperties): void
}

export module IXsdAttributeGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdAttributeGroup extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAttributeGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdAttributeGroup {

    // Own properties of GXml-0.20.GXml.IXsdAttributeGroup

    static name: string
    static $gtype: GObject.GType<IXsdAttributeGroup>

    // Constructors of GXml-0.20.GXml.IXsdAttributeGroup

    constructor(config?: IXsdAttributeGroup.ConstructorProperties) 
    _init(config?: IXsdAttributeGroup.ConstructorProperties): void
}

export module IXsdList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdList

        element?: DomElement | null
        itemsType?: GObject.GType | null
        itemsName?: GObject.GType | null
    }

}

export interface IXsdList extends GObject.Object, Collection {

    // Own properties of GXml-0.20.GXml.IXsdList

    element: DomElement
    itemsType: GObject.GType
    itemsName: any
    readonly length: number

    // Owm methods of GXml-0.20.GXml.IXsdList

    get_element(): DomElement
    set_element(value: DomElement): void
    get_items_type(): GObject.GType
    set_items_type(value: GObject.GType): void
    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    set_items_name(value: GObject.GType): void
    get_length(): number
    get_item(index: number): DomElement | null
    append(element: DomElement): void
    remove(index: number): void
    index_of(element: DomElement): number

    // Own virtual methods of GXml-0.20.GXml.IXsdList

    vfunc_get_element(): DomElement
    vfunc_set_element(value: DomElement): void
    vfunc_get_items_type(): GObject.GType
    vfunc_set_items_type(value: GObject.GType): void
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_set_items_name(value: GObject.GType): void
    vfunc_get_length(): number
    vfunc_get_item(index: number): DomElement | null
    vfunc_append(element: DomElement): void
    vfunc_remove(index: number): void
    vfunc_index_of(element: DomElement): number

    // Class property signals of GXml-0.20.GXml.IXsdList

    connect(sigName: "notify::element", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdList {

    // Own properties of GXml-0.20.GXml.IXsdList

    static name: string
    static $gtype: GObject.GType<IXsdList>

    // Constructors of GXml-0.20.GXml.IXsdList

    constructor(config?: IXsdList.ConstructorProperties) 
    _init(config?: IXsdList.ConstructorProperties): void
}

export module IXsdListElements {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListElements extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListElements

    connect(sigName: "notify::element", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListElements {

    // Own properties of GXml-0.20.GXml.IXsdListElements

    static name: string
    static $gtype: GObject.GType<IXsdListElements>

    // Constructors of GXml-0.20.GXml.IXsdListElements

    constructor(config?: IXsdListElements.ConstructorProperties) 
    _init(config?: IXsdListElements.ConstructorProperties): void
}

export module IXsdListSimpleTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListSimpleTypes extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListSimpleTypes

    connect(sigName: "notify::element", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListSimpleTypes {

    // Own properties of GXml-0.20.GXml.IXsdListSimpleTypes

    static name: string
    static $gtype: GObject.GType<IXsdListSimpleTypes>

    // Constructors of GXml-0.20.GXml.IXsdListSimpleTypes

    constructor(config?: IXsdListSimpleTypes.ConstructorProperties) 
    _init(config?: IXsdListSimpleTypes.ConstructorProperties): void
}

export module IXsdListComplexTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListComplexTypes extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListComplexTypes

    connect(sigName: "notify::element", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListComplexTypes {

    // Own properties of GXml-0.20.GXml.IXsdListComplexTypes

    static name: string
    static $gtype: GObject.GType<IXsdListComplexTypes>

    // Constructors of GXml-0.20.GXml.IXsdListComplexTypes

    constructor(config?: IXsdListComplexTypes.ConstructorProperties) 
    _init(config?: IXsdListComplexTypes.ConstructorProperties): void
}

export module IXsdListAttributes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListAttributes extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListAttributes

    connect(sigName: "notify::element", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListAttributes {

    // Own properties of GXml-0.20.GXml.IXsdListAttributes

    static name: string
    static $gtype: GObject.GType<IXsdListAttributes>

    // Constructors of GXml-0.20.GXml.IXsdListAttributes

    constructor(config?: IXsdListAttributes.ConstructorProperties) 
    _init(config?: IXsdListAttributes.ConstructorProperties): void
}

export module IXsdListAttributesGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListAttributesGroup extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListAttributesGroup

    connect(sigName: "notify::element", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListAttributesGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListAttributesGroup {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesGroup

    static name: string
    static $gtype: GObject.GType<IXsdListAttributesGroup>

    // Constructors of GXml-0.20.GXml.IXsdListAttributesGroup

    constructor(config?: IXsdListAttributesGroup.ConstructorProperties) 
    _init(config?: IXsdListAttributesGroup.ConstructorProperties): void
}

export module IXsdListTypeRestrictionEnumerations {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListTypeRestrictionEnumerations extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    connect(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListTypeRestrictionEnumerations {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    static name: string
    static $gtype: GObject.GType<IXsdListTypeRestrictionEnumerations>

    // Constructors of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    constructor(config?: IXsdListTypeRestrictionEnumerations.ConstructorProperties) 
    _init(config?: IXsdListTypeRestrictionEnumerations.ConstructorProperties): void
}

export module IXsdListTypeRestrictionWhiteSpaces {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListTypeRestrictionWhiteSpaces extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    get_items_name(): GObject.GType

    // Overloads of get_items_name

    get_items_name(): string
    get_items_name(): string
    vfunc_get_items_name(): GObject.GType

    // Overloads of vfunc_get_items_name

    vfunc_get_items_name(): string
    vfunc_get_items_name(): string

    // Class property signals of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    connect(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: IXsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IXsdListTypeRestrictionWhiteSpaces {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    static name: string
    static $gtype: GObject.GType<IXsdListTypeRestrictionWhiteSpaces>

    // Constructors of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    constructor(config?: IXsdListTypeRestrictionWhiteSpaces.ConstructorProperties) 
    _init(config?: IXsdListTypeRestrictionWhiteSpaces.ConstructorProperties): void
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface Object extends GObject.Object, DomNode, DomElement {

    // Owm methods of GXml-0.20.GXml.Object

    get_properties_list(): GObject.ParamSpec[]
    find_property_name(nick: string): GObject.ParamSpec | null
    find_object_property_name(pname: string): GObject.ParamSpec | null
    get_property_element_list(): GObject.ParamSpec[]
    get_property_string(prop: GObject.ParamSpec): string | null
    get_attribute(name: string): string | null
    find_property(name: string): Property | null
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    get_child(name: string): DomElement | null
    find_elements(name: string): DomElementList
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    set_instance_property(name: string): boolean
    clean_property_elements(name: string): void

    // Own virtual methods of GXml-0.20.GXml.Object

    vfunc_get_properties_list(): GObject.ParamSpec[]
    vfunc_find_property_name(nick: string): GObject.ParamSpec | null
    vfunc_find_object_property_name(pname: string): GObject.ParamSpec | null
    vfunc_get_property_element_list(): GObject.ParamSpec[]
    vfunc_get_property_string(prop: GObject.ParamSpec): string | null
    vfunc_get_attribute(name: string): string | null
    vfunc_find_property(name: string): Property | null
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_get_child(name: string): DomElement | null
    vfunc_find_elements(name: string): DomElementList
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void
    vfunc_set_instance_property(name: string): boolean
    vfunc_clean_property_elements(name: string): void

    // Class property signals of GXml-0.20.GXml.Object

    connect(sigName: "notify::node-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Object {

    // Own properties of GXml-0.20.GXml.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of GXml-0.20.GXml.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Parser

        backup?: boolean | null
        indent?: boolean | null
        cancellable?: Gio.Cancellable | null
    }

}

export interface Parser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Parser

    backup: boolean
    indent: boolean
    cancellable: Gio.Cancellable
    readonly node: DomNode
    readonly types: GLib.HashTable

    // Owm methods of GXml-0.20.GXml.Parser

    get_backup(): boolean
    set_backup(value: boolean): void
    get_indent(): boolean
    set_indent(value: boolean): void
    get_cancellable(): Gio.Cancellable | null
    set_cancellable(value: Gio.Cancellable | null): void
    get_node(): DomNode
    get_types(): GLib.HashTable
    write_file(file: Gio.File): void
    write_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_file_async

    /**
     * Promisified version of {@link write_file_async}
     * 
     * 
     * @param file 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_file_async}
     */
    write_file_async(file: Gio.File): globalThis.Promise<void>
    write_file_finish(_res_: Gio.AsyncResult): void
    write_string(): string | null
    write_string_async(_callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_string_async

    /**
     * Promisified version of {@link write_string_async}
     * 
     * 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_string_async}
     */
    write_string_async(): globalThis.Promise<string | null>
    write_string_finish(_res_: Gio.AsyncResult): string | null
    write_stream(stream: Gio.OutputStream): void
    write_stream_async(stream: Gio.OutputStream, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_stream_async

    /**
     * Promisified version of {@link write_stream_async}
     * 
     * 
     * @param stream 
     * @param _callback_ 
     * @returns A Promise of the result of {@link write_stream_async}
     */
    write_stream_async(stream: Gio.OutputStream): globalThis.Promise<void>
    write_stream_finish(_res_: Gio.AsyncResult): void
    read_file(file: Gio.File): void
    read_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_file_async

    /**
     * Promisified version of {@link read_file_async}
     * 
     * 
     * @param file 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_file_async}
     */
    read_file_async(file: Gio.File): globalThis.Promise<void>
    read_file_finish(_res_: Gio.AsyncResult): void
    read_stream(stream: Gio.InputStream): void
    read_stream_async(stream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_stream_async

    /**
     * Promisified version of {@link read_stream_async}
     * 
     * 
     * @param stream 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_stream_async}
     */
    read_stream_async(stream: Gio.InputStream): globalThis.Promise<void>
    read_stream_finish(_res_: Gio.AsyncResult): void
    read_string(str: string): void
    read_string_async(str: string, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_string_async

    /**
     * Promisified version of {@link read_string_async}
     * 
     * 
     * @param str 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_string_async}
     */
    read_string_async(str: string): globalThis.Promise<void>
    read_string_finish(_res_: Gio.AsyncResult): void
    create_stream(): Gio.InputStream
    create_stream_async(_callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_stream_async

    /**
     * Promisified version of {@link create_stream_async}
     * 
     * 
     * @param _callback_ 
     * @returns A Promise of the result of {@link create_stream_async}
     */
    create_stream_async(): globalThis.Promise<Gio.InputStream>
    create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    read_child_nodes(parent: DomNode): void
    read_child_nodes_async(parent: DomNode, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_child_nodes_async

    /**
     * Promisified version of {@link read_child_nodes_async}
     * 
     * 
     * @param parent 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_child_nodes_async}
     */
    read_child_nodes_async(parent: DomNode): globalThis.Promise<void>
    read_child_nodes_finish(_res_: Gio.AsyncResult): void
    read_child_node(parent: DomNode): boolean
    read_child_element(parent: DomNode): boolean
    read_element_property(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    add_element_collection(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    read_child_nodes_stream(istream: Gio.InputStream): void
    read_child_nodes_string(str: string): void
    read_unparsed(): string | null
    move_next_node(): boolean
    current_is_empty_element(): boolean
    current_is_element(): boolean
    current_is_document(): boolean
    current_node_name(): string | null
    create_element(parent: DomNode): DomElement | null
    read_element(element: DomElement): void

    // Own virtual methods of GXml-0.20.GXml.Parser

    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_cancellable(): Gio.Cancellable | null
    vfunc_set_cancellable(value: Gio.Cancellable | null): void
    vfunc_get_node(): DomNode
    vfunc_get_types(): GLib.HashTable
    vfunc_write_file(file: Gio.File): void
    vfunc_write_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_file_finish(_res_: Gio.AsyncResult): void
    vfunc_write_string(): string | null
    vfunc_write_string_async(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_string_finish(_res_: Gio.AsyncResult): string | null
    vfunc_write_stream(stream: Gio.OutputStream): void
    vfunc_write_stream_async(stream: Gio.OutputStream, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_write_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_read_file(file: Gio.File): void
    vfunc_read_file_async(file: Gio.File, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_file_finish(_res_: Gio.AsyncResult): void
    vfunc_read_stream(stream: Gio.InputStream): void
    vfunc_read_stream_async(stream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_stream_finish(_res_: Gio.AsyncResult): void
    vfunc_read_string(str: string): void
    vfunc_read_string_async(str: string, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_string_finish(_res_: Gio.AsyncResult): void
    vfunc_create_stream(): Gio.InputStream
    vfunc_create_stream_async(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream
    vfunc_read_child_nodes(parent: DomNode): void
    vfunc_read_child_nodes_async(parent: DomNode, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_read_child_nodes_finish(_res_: Gio.AsyncResult): void
    vfunc_read_child_node(parent: DomNode): boolean
    vfunc_read_child_element(parent: DomNode): boolean
    vfunc_read_element_property(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    vfunc_add_element_collection(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    vfunc_read_child_nodes_stream(istream: Gio.InputStream): void
    vfunc_read_child_nodes_string(str: string): void
    vfunc_read_unparsed(): string | null
    vfunc_move_next_node(): boolean
    vfunc_current_is_empty_element(): boolean
    vfunc_current_is_element(): boolean
    vfunc_current_is_document(): boolean
    vfunc_current_node_name(): string | null
    vfunc_create_element(parent: DomNode): DomElement | null
    vfunc_read_element(element: DomElement): void

    // Class property signals of GXml-0.20.GXml.Parser

    connect(sigName: "notify::backup", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::types", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::types", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Parser {

    // Own properties of GXml-0.20.GXml.Parser

    static name: string
    static $gtype: GObject.GType<Parser>

    // Constructors of GXml-0.20.GXml.Parser

    constructor(config?: Parser.ConstructorProperties) 
    _init(config?: Parser.ConstructorProperties): void
}

export module Property {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Property

        value?: string | null
    }

}

export interface Property extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Property

    value: string | null

    // Owm methods of GXml-0.20.GXml.Property

    get_value(): string | null
    set_value(value: string | null): void
    validate_value(val: string | null): boolean

    // Own virtual methods of GXml-0.20.GXml.Property

    vfunc_get_value(): string | null
    vfunc_set_value(value: string | null): void
    vfunc_validate_value(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Property

    connect(sigName: "notify::value", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Property {

    // Own properties of GXml-0.20.GXml.Property

    static name: string
    static $gtype: GObject.GType<Property>

    // Constructors of GXml-0.20.GXml.Property

    constructor(config?: Property.ConstructorProperties) 
    _init(config?: Property.ConstructorProperties): void
}

export module XPathContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XPathContext extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.XPathContext

    evaluate(expression: string, resolver: Gee.Map | null): XPathObject

    // Own virtual methods of GXml-0.20.GXml.XPathContext

    vfunc_evaluate(expression: string, resolver: Gee.Map | null): XPathObject

    // Class property signals of GXml-0.20.GXml.XPathContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XPathContext {

    // Own properties of GXml-0.20.GXml.XPathContext

    static name: string
    static $gtype: GObject.GType<XPathContext>

    // Constructors of GXml-0.20.GXml.XPathContext

    constructor(config?: XPathContext.ConstructorProperties) 
    _init(config?: XPathContext.ConstructorProperties): void
}

export module XPathObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XPathObject extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XPathObject

    readonly objectType: XPathObjectType
    readonly booleanValue: boolean
    readonly stringValue: string | null
    readonly numberValue: number
    readonly nodeset: DomHTMLCollection

    // Owm methods of GXml-0.20.GXml.XPathObject

    get_object_type(): XPathObjectType
    get_boolean_value(): boolean
    get_string_value(): string
    get_number_value(): number
    get_nodeset(): DomHTMLCollection

    // Own virtual methods of GXml-0.20.GXml.XPathObject

    vfunc_get_object_type(): XPathObjectType
    vfunc_get_boolean_value(): boolean
    vfunc_get_string_value(): string
    vfunc_get_number_value(): number
    vfunc_get_nodeset(): DomHTMLCollection

    // Class property signals of GXml-0.20.GXml.XPathObject

    connect(sigName: "notify::object-type", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::boolean-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boolean-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boolean-value", ...args: any[]): void
    connect(sigName: "notify::string-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string-value", ...args: any[]): void
    connect(sigName: "notify::number-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-value", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number-value", ...args: any[]): void
    connect(sigName: "notify::nodeset", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeset", callback: (($obj: XPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodeset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XPathObject {

    // Own properties of GXml-0.20.GXml.XPathObject

    static name: string
    static $gtype: GObject.GType<XPathObject>

    // Constructors of GXml-0.20.GXml.XPathObject

    constructor(config?: XPathObject.ConstructorProperties) 
    _init(config?: XPathObject.ConstructorProperties): void
}

export module ArrayList {

    // Constructor properties interface

    export interface ConstructorProperties extends List.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface ArrayList extends List {

    // Class property signals of GXml-0.20.GXml.ArrayList

    connect(sigName: "notify::nodes-index", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ArrayList extends BaseCollection {

    // Own properties of GXml-0.20.GXml.ArrayList

    static name: string
    static $gtype: GObject.GType<ArrayList>

    // Constructors of GXml-0.20.GXml.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor() 
    static new(): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void
}

export module Attr {

    // Constructor properties interface

    export interface ConstructorProperties extends DomAttr.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface Attr extends DomAttr {

    // Own properties of GXml-0.20.GXml.Attr

    readonly isReferenced: boolean

    // Own fields of GXml-0.20.GXml.Attr

    _namespace_uri: string | null
    prop: Property

    // Owm methods of GXml-0.20.GXml.Attr

    get_is_referenced(): boolean

    // Class property signals of GXml-0.20.GXml.Attr

    connect(sigName: "notify::is-referenced", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-referenced", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-referenced", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Attr extends Node {

    // Own properties of GXml-0.20.GXml.Attr

    static name: string
    static $gtype: GObject.GType<Attr>

    // Constructors of GXml-0.20.GXml.Attr

    constructor(config?: Attr.ConstructorProperties) 
    constructor(element: DomElement, name: string, val: string) 
    static new(element: DomElement, name: string, val: string): Attr

    // Overloads of new

    static new(): Node
    static namespace(element: DomElement, namespace_uri: string, prefix: string | null, name: string, val: string): Attr
    static reference(element: DomElement, name: string): Attr
    _init(config?: Attr.ConstructorProperties): void
}

export module BaseCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BaseCollection extends Gee.Traversable, Gee.Iterable, Collection {

    // Own fields of GXml-0.20.GXml.BaseCollection

    _nodes_index: GLib.Queue
    _element: Element
    _items_name: string | null
    _items_type: GObject.GType

    // Owm methods of GXml-0.20.GXml.BaseCollection

    initialize_element(e: Element): void
    validate_append(index: number, element: DomElement): boolean
    clear(): void

    // Own virtual methods of GXml-0.20.GXml.BaseCollection

    vfunc_validate_append(index: number, element: DomElement): boolean
    vfunc_clear(): void

    // Class property signals of GXml-0.20.GXml.BaseCollection

    connect(sigName: "notify::nodes-index", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: BaseCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BaseCollection extends GObject.Object {

    // Own properties of GXml-0.20.GXml.BaseCollection

    static name: string
    static $gtype: GObject.GType<BaseCollection>

    // Constructors of GXml-0.20.GXml.BaseCollection

    constructor(config?: BaseCollection.ConstructorProperties) 
    _init(config?: BaseCollection.ConstructorProperties): void
}

export module CssSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.CssSelector

        selectorType?: CssSelectorType | null
        name?: string | null
        value?: string | null
        combiner?: CssCombiner | null
    }

}

export interface CssSelector {

    // Own properties of GXml-0.20.GXml.CssSelector

    selectorType: CssSelectorType
    name: string | null
    value: string | null
    combiner: CssCombiner

    // Owm methods of GXml-0.20.GXml.CssSelector

    get_selector_type(): CssSelectorType
    set_selector_type(value: CssSelectorType): void
    get_name(): string
    set_name(value: string): void
    get_value(): string
    set_value(value: string): void
    get_combiner(): CssCombiner
    set_combiner(value: CssCombiner): void

    // Class property signals of GXml-0.20.GXml.CssSelector

    connect(sigName: "notify::selector-type", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CssSelector extends GObject.Object {

    // Own properties of GXml-0.20.GXml.CssSelector

    static name: string
    static $gtype: GObject.GType<CssSelector>

    // Constructors of GXml-0.20.GXml.CssSelector

    constructor(config?: CssSelector.ConstructorProperties) 
    constructor(t: CssSelectorType, name: string) 
    static new(t: CssSelectorType, name: string): CssSelector
    static with_value(t: CssSelectorType, name: string, value: string): CssSelector
    _init(config?: CssSelector.ConstructorProperties): void
}

export module CssElementSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends CssSelector.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.CssElementSelector

        prefix?: string | null
        localName?: string | null
    }

}

export interface CssElementSelector {

    // Own properties of GXml-0.20.GXml.CssElementSelector

    readonly prefixed: boolean
    prefix: string | null
    localName: string | null

    // Owm methods of GXml-0.20.GXml.CssElementSelector

    get_prefixed(): boolean
    get_prefix(): string | null
    set_prefix(value: string | null): void
    get_local_name(): string | null
    set_local_name(value: string): void

    // Class property signals of GXml-0.20.GXml.CssElementSelector

    connect(sigName: "notify::prefixed", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefixed", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefixed", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssElementSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CssElementSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssElementSelector

    static name: string
    static $gtype: GObject.GType<CssElementSelector>

    // Constructors of GXml-0.20.GXml.CssElementSelector

    constructor(config?: CssElementSelector.ConstructorProperties) 
    constructor(prefix: string | null, local_name: string) 
    static new(prefix: string | null, local_name: string): CssElementSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssElementSelector.ConstructorProperties): void
}

export module CssAttributeSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends CssSelector.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.CssAttributeSelector

        prefix?: string | null
        localName?: string | null
    }

}

export interface CssAttributeSelector {

    // Own properties of GXml-0.20.GXml.CssAttributeSelector

    prefix: string | null
    localName: string | null

    // Owm methods of GXml-0.20.GXml.CssAttributeSelector

    get_prefix(): string | null
    set_prefix(value: string | null): void
    get_local_name(): string
    set_local_name(value: string): void

    // Class property signals of GXml-0.20.GXml.CssAttributeSelector

    connect(sigName: "notify::prefix", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssAttributeSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CssAttributeSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssAttributeSelector

    static name: string
    static $gtype: GObject.GType<CssAttributeSelector>

    // Constructors of GXml-0.20.GXml.CssAttributeSelector

    constructor(config?: CssAttributeSelector.ConstructorProperties) 
    constructor(prefix: string | null, local_name: string) 
    static new(prefix: string | null, local_name: string): CssAttributeSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssAttributeSelector.ConstructorProperties): void
}

export module CssNotSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends CssSelector.ConstructorProperties {
    }

}

export interface CssNotSelector {

    // Own properties of GXml-0.20.GXml.CssNotSelector

    readonly selectors: Gee.List

    // Owm methods of GXml-0.20.GXml.CssNotSelector

    get_selectors(): Gee.List

    // Class property signals of GXml-0.20.GXml.CssNotSelector

    connect(sigName: "notify::selectors", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectors", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectors", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selector-type", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::combiner", callback: (($obj: CssNotSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CssNotSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssNotSelector

    static name: string
    static $gtype: GObject.GType<CssNotSelector>

    // Constructors of GXml-0.20.GXml.CssNotSelector

    constructor(config?: CssNotSelector.ConstructorProperties) 
    constructor() 
    static new(): CssNotSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssNotSelector.ConstructorProperties): void
}

export module CssSelectorParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CssSelectorParser {

    // Own properties of GXml-0.20.GXml.CssSelectorParser

    readonly selectors: Gee.List

    // Owm methods of GXml-0.20.GXml.CssSelectorParser

    parse(selectors: string): void
    get_selectors(): Gee.List
    match(element: DomElement): boolean
    query_selector_all(element: DomElement): DomNodeList

    // Class property signals of GXml-0.20.GXml.CssSelectorParser

    connect(sigName: "notify::selectors", callback: (($obj: CssSelectorParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectors", callback: (($obj: CssSelectorParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectors", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CssSelectorParser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.CssSelectorParser

    static name: string
    static $gtype: GObject.GType<CssSelectorParser>

    // Constructors of GXml-0.20.GXml.CssSelectorParser

    constructor(config?: CssSelectorParser.ConstructorProperties) 
    constructor() 
    static new(): CssSelectorParser
    _init(config?: CssSelectorParser.ConstructorProperties): void
}

export module Document {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties, DomDocument.ConstructorProperties, DomXMLDocument.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface Document extends DomParentNode, DomNonElementParentNode, DomDocument, DomXMLDocument {

    // Own fields of GXml-0.20.GXml.Document

    _implementation: DomImplementation
    _url: string | null
    _origin: string | null
    _compat_mode: string | null
    _character_set: string | null
    _content_type: string | null
    _constructor: DomEvent
    _parser: Parser

    // Owm methods of GXml-0.20.GXml.Document

    search_root_element_property(): Element

    // Class property signals of GXml-0.20.GXml.Document

    connect(sigName: "notify::children", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Document extends Node {

    // Own properties of GXml-0.20.GXml.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of GXml-0.20.GXml.Document

    constructor(config?: Document.ConstructorProperties) 
    constructor() 
    static new(): Document

    // Overloads of new

    static new(): Node
    static from_path(path: string): Document
    static from_uri(uri: string): Document
    static from_file(file: Gio.File): Document
    static from_stream(stream: Gio.InputStream): Document
    static from_string(str: string): Document
    _init(config?: Document.ConstructorProperties): void
}

export module Implementation {

    // Constructor properties interface

    export interface ConstructorProperties extends DomImplementation.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Implementation extends DomImplementation {

    // Class property signals of GXml-0.20.GXml.Implementation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Implementation extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Implementation

    static name: string
    static $gtype: GObject.GType<Implementation>

    // Constructors of GXml-0.20.GXml.Implementation

    constructor(config?: Implementation.ConstructorProperties) 
    constructor() 
    static new(): Implementation
    _init(config?: Implementation.ConstructorProperties): void
}

export module DocumentType {

    // Constructor properties interface

    export interface ConstructorProperties extends DomChildNode.ConstructorProperties, DomDocumentType.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface DocumentType extends DomChildNode, DomDocumentType {

    // Own fields of GXml-0.20.GXml.DocumentType

    _name: string | null
    _public_id: string | null
    _system_id: string | null

    // Class property signals of GXml-0.20.GXml.DocumentType

    connect(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::public-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::public-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DocumentType extends Node {

    // Own properties of GXml-0.20.GXml.DocumentType

    static name: string
    static $gtype: GObject.GType<DocumentType>

    // Constructors of GXml-0.20.GXml.DocumentType

    constructor(config?: DocumentType.ConstructorProperties) 
    constructor(doc: DomDocument, name: string, public_id: string | null, system_id: string | null) 
    static new(doc: DomDocument, name: string, public_id: string | null, system_id: string | null): DocumentType

    // Overloads of new

    static new(): Node
    static with_name(doc: DomDocument, name: string): DocumentType
    static with_ids(doc: DomDocument, name: string, public_id: string, system_id: string): DocumentType
    _init(config?: DocumentType.ConstructorProperties): void
}

export module DocumentFragment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties, DomDocumentFragment.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface DocumentFragment extends DomParentNode, DomNonElementParentNode, DomDocumentFragment {

    // Class property signals of GXml-0.20.GXml.DocumentFragment

    connect(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DocumentFragment extends Node {

    // Own properties of GXml-0.20.GXml.DocumentFragment

    static name: string
    static $gtype: GObject.GType<DocumentFragment>

    // Constructors of GXml-0.20.GXml.DocumentFragment

    constructor(config?: DocumentFragment.ConstructorProperties) 
    constructor(doc: DomDocument) 
    static new(doc: DomDocument): DocumentFragment

    // Overloads of new

    static new(): Node
    _init(config?: DocumentFragment.ConstructorProperties): void
}

export module DomNodeFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNodeFilter {

    // Class property signals of GXml-0.20.GXml.DomNodeFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomNodeFilter extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNodeFilter

    static name: string
    static $gtype: GObject.GType<DomNodeFilter>

    // Constructors of GXml-0.20.GXml.DomNodeFilter

    constructor(config?: DomNodeFilter.ConstructorProperties) 
    constructor() 
    static new(): DomNodeFilter
    _init(config?: DomNodeFilter.ConstructorProperties): void
}

export module DomElementList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomHTMLCollection.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface DomElementList extends DomHTMLCollection {

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    to_array(): DomElement[]

    // Overloads of to_array

    to_array(): any[]
    to_array(): any[]
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_to_array(): DomElement[]

    // Overloads of vfunc_to_array

    vfunc_to_array(): any[]
    vfunc_to_array(): any[]
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of GXml-0.20.GXml.DomElementList

    connect(sigName: "notify::g-type", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: DomElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomElementList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.DomElementList

    static name: string
    static $gtype: GObject.GType<DomElementList>

    // Constructors of GXml-0.20.GXml.DomElementList

    constructor(config?: DomElementList.ConstructorProperties) 
    constructor() 
    static new(): DomElementList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: DomElementList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module DomEventInit {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomEventInit

        bubbles?: boolean | null
        cancelable?: boolean | null
    }

}

export interface DomEventInit {

    // Own properties of GXml-0.20.GXml.DomEventInit

    bubbles: boolean
    cancelable: boolean

    // Owm methods of GXml-0.20.GXml.DomEventInit

    get_bubbles(): boolean
    set_bubbles(value: boolean): void
    get_cancelable(): boolean
    set_cancelable(value: boolean): void

    // Class property signals of GXml-0.20.GXml.DomEventInit

    connect(sigName: "notify::bubbles", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomEventInit extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomEventInit

    static name: string
    static $gtype: GObject.GType<DomEventInit>

    // Constructors of GXml-0.20.GXml.DomEventInit

    constructor(config?: DomEventInit.ConstructorProperties) 
    constructor() 
    static new(): DomEventInit
    _init(config?: DomEventInit.ConstructorProperties): void
}

export module DomCustomEventInit {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEventInit.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomCustomEventInit

        detail?: any | null
    }

}

export interface DomCustomEventInit {

    // Own properties of GXml-0.20.GXml.DomCustomEventInit

    detail: any

    // Owm methods of GXml-0.20.GXml.DomCustomEventInit

    get_detail(): /* result */ any
    set_detail(value: any): void

    // Class property signals of GXml-0.20.GXml.DomCustomEventInit

    connect(sigName: "notify::detail", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: DomCustomEventInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomCustomEventInit extends DomEventInit {

    // Own properties of GXml-0.20.GXml.DomCustomEventInit

    static name: string
    static $gtype: GObject.GType<DomCustomEventInit>

    // Constructors of GXml-0.20.GXml.DomCustomEventInit

    constructor(config?: DomCustomEventInit.ConstructorProperties) 
    constructor() 
    static new(): DomCustomEventInit

    // Overloads of new

    static new(): DomEventInit
    _init(config?: DomCustomEventInit.ConstructorProperties): void
}

export module DomTimeStamp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomTimeStamp

        time?: GLib.DateTime | null
    }

}

export interface DomTimeStamp {

    // Own properties of GXml-0.20.GXml.DomTimeStamp

    time: GLib.DateTime

    // Owm methods of GXml-0.20.GXml.DomTimeStamp

    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void
    to_string(): string | null

    // Class property signals of GXml-0.20.GXml.DomTimeStamp

    connect(sigName: "notify::time", callback: (($obj: DomTimeStamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: DomTimeStamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomTimeStamp extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomTimeStamp

    static name: string
    static $gtype: GObject.GType<DomTimeStamp>

    // Constructors of GXml-0.20.GXml.DomTimeStamp

    constructor(config?: DomTimeStamp.ConstructorProperties) 
    constructor() 
    static new(): DomTimeStamp
    _init(config?: DomTimeStamp.ConstructorProperties): void
}

export module DomMutationObserverInit {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomMutationObserverInit

        childList?: boolean | null
        attributes?: boolean | null
        characterData?: boolean | null
        subtree?: boolean | null
        attributeOldValue?: boolean | null
        characterDataOldValue?: boolean | null
        attributeFilter?: Gee.List | null
    }

}

export interface DomMutationObserverInit {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInit

    childList: boolean
    attributes: boolean
    characterData: boolean
    subtree: boolean
    attributeOldValue: boolean
    characterDataOldValue: boolean
    attributeFilter: Gee.List

    // Owm methods of GXml-0.20.GXml.DomMutationObserverInit

    get_child_list(): boolean
    set_child_list(value: boolean): void
    get_attributes(): boolean
    set_attributes(value: boolean): void
    get_character_data(): boolean
    set_character_data(value: boolean): void
    get_subtree(): boolean
    set_subtree(value: boolean): void
    get_attribute_old_value(): boolean
    set_attribute_old_value(value: boolean): void
    get_character_data_old_value(): boolean
    set_character_data_old_value(value: boolean): void
    get_attribute_filter(): Gee.List
    set_attribute_filter(value: Gee.List): void

    // Class property signals of GXml-0.20.GXml.DomMutationObserverInit

    connect(sigName: "notify::child-list", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-list", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::character-data", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-data", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-data", ...args: any[]): void
    connect(sigName: "notify::subtree", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtree", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtree", ...args: any[]): void
    connect(sigName: "notify::attribute-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-old-value", ...args: any[]): void
    connect(sigName: "notify::character-data-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-data-old-value", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-data-old-value", ...args: any[]): void
    connect(sigName: "notify::attribute-filter", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-filter", callback: (($obj: DomMutationObserverInit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-filter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomMutationObserverInit extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInit

    static name: string
    static $gtype: GObject.GType<DomMutationObserverInit>

    // Constructors of GXml-0.20.GXml.DomMutationObserverInit

    constructor(config?: DomMutationObserverInit.ConstructorProperties) 
    constructor() 
    static new(): DomMutationObserverInit
    _init(config?: DomMutationObserverInit.ConstructorProperties): void
}

export module DomErrorName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomErrorName {

    // Owm methods of GXml-0.20.GXml.DomErrorName

    get_name(error_code: number): string | null
    get_code(error_name: string): number

    // Class property signals of GXml-0.20.GXml.DomErrorName

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomErrorName extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomErrorName

    static name: string
    static $gtype: GObject.GType<DomErrorName>

    // Constructors of GXml-0.20.GXml.DomErrorName

    constructor(config?: DomErrorName.ConstructorProperties) 
    constructor() 
    static new(): DomErrorName
    _init(config?: DomErrorName.ConstructorProperties): void
}

export module Element {

    // Constructor properties interface

    export interface ConstructorProperties extends DomChildNode.ConstructorProperties, DomNonDocumentTypeChildNode.ConstructorProperties, DomParentNode.ConstructorProperties, DomElement.ConstructorProperties, Object.ConstructorProperties, Node.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Element

        parseChildren?: boolean | null
        unparsed?: string | null
        readBuffer?: Gio.MemoryOutputStream | null
    }

}

export interface Element extends DomChildNode, DomNonDocumentTypeChildNode, DomParentNode, DomElement, Object {

    // Own properties of GXml-0.20.GXml.Element

    parseChildren: boolean
    unparsed: string | null
    readBuffer: Gio.MemoryOutputStream

    // Own fields of GXml-0.20.GXml.Element

    _attributes: ElementAttributes
    _namespace_uri: string | null

    // Owm methods of GXml-0.20.GXml.Element

    lookup_prefix(nspace: string | null): string | null
    lookup_namespace_uri(prefix: string | null): string | null
    initialize(local_name: string): void
    initialize_document(doc: DomDocument, local_name: string): void
    initialize_with_namespace(namespace_uri: string | null, prefix: string | null, local_name: string): void
    initialize_document_with_namespace(doc: DomDocument, namespace_uri: string | null, prefix: string | null, local_name: string): void
    get_parse_children(): boolean
    set_parse_children(value: boolean): void
    get_unparsed(): string
    set_unparsed(value: string): void
    read_unparsed(): void
    get_read_buffer(): Gio.MemoryOutputStream
    set_read_buffer(value: Gio.MemoryOutputStream): void
    parse_buffer(): void
    parse_pending(): number
    parse_buffer_async(_callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of parse_buffer_async

    /**
     * Promisified version of {@link parse_buffer_async}
     * 
     * 
     * @param _callback_ 
     * @returns A Promise of the result of {@link parse_buffer_async}
     */
    parse_buffer_async(): globalThis.Promise<void>
    parse_buffer_finish(_res_: Gio.AsyncResult): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.Element

    connect(sigName: "notify::parse-children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Element extends Node {

    // Own properties of GXml-0.20.GXml.Element

    static name: string
    static $gtype: GObject.GType<Element>

    // Constructors of GXml-0.20.GXml.Element

    constructor(config?: Element.ConstructorProperties) 
    constructor() 
    static new(): Element

    // Overloads of new

    static new(): Node
    _init(config?: Element.ConstructorProperties): void
}

export module ElementAttributes {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNamedNodeMap.ConstructorProperties, Gee.HashMap.ConstructorProperties {
    }

}

export interface ElementAttributes extends DomNamedNodeMap {

    // Own fields of GXml-0.20.GXml.ElementAttributes

    _element: Element

    // Owm methods of GXml-0.20.GXml.ElementAttributes

    add_reference(name: string): void

    // Class property signals of GXml-0.20.GXml.ElementAttributes

    connect(sigName: "notify::k-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: ElementAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ElementAttributes extends Gee.HashMap {

    // Own properties of GXml-0.20.GXml.ElementAttributes

    static name: string
    static $gtype: GObject.GType<ElementAttributes>

    // Constructors of GXml-0.20.GXml.ElementAttributes

    constructor(config?: ElementAttributes.ConstructorProperties) 
    constructor(element: Element) 
    static new(element: Element): ElementAttributes

    // Overloads of new

    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ElementAttributes.ConstructorProperties): void
}

export interface Enumeration {

    // Own fields of GXml-0.20.GXml.Enumeration

    ref_count: number
}

export class Enumeration {

    // Own properties of GXml-0.20.GXml.Enumeration

    static name: string

    // Constructors of GXml-0.20.GXml.Enumeration

    constructor() 
    static new(): Enumeration
    static get_nick(enumeration: GObject.GType, val: number): string | null
    static get_nick_camelcase(enumeration: GObject.GType, val: number): string | null
    static get_string(enumeration: GObject.GType, val: number, use_nick: boolean, camelcase: boolean): string | null
    static parse(enumeration: GObject.GType, val: string): GObject.EnumValue | null
    static to_array(enumeration: GObject.GType): GObject.EnumValue[]
    static parse_integer(enumeration: GObject.GType, val: number): GObject.EnumValue | null
    static to_string_array(enumeration: GObject.GType): string[]
}

export module Event {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEvent.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Event extends DomEvent {

    // Own fields of GXml-0.20.GXml.Event

    _etype: string | null
    _event_target: DomEventTarget
    _current_target: DomEventTarget
    _bubbles: boolean
    _cancelable: boolean
    _is_trusted: boolean
    _time_stamp: DomTimeStamp
    _default_prevented: boolean
    _event_phase: DomEventPhase
    _flags: DomEventFlags

    // Class property signals of GXml-0.20.GXml.Event

    connect(sigName: "notify::etype", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etype", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-target", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bubbles", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-trusted", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-stamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-prevented", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-phase", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Event extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Event

    static name: string
    static $gtype: GObject.GType<Event>

    // Constructors of GXml-0.20.GXml.Event

    constructor(config?: Event.ConstructorProperties) 
    constructor() 
    static new(): Event
    _init(config?: Event.ConstructorProperties): void
}

export module CustomEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Event.ConstructorProperties {
    }

}

export interface CustomEvent {

    // Own properties of GXml-0.20.GXml.CustomEvent

    readonly detail: any

    // Own fields of GXml-0.20.GXml.CustomEvent

    _detail: any

    // Owm methods of GXml-0.20.GXml.CustomEvent

    get_detail(): /* result */ any
    init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: any | null): void

    // Class property signals of GXml-0.20.GXml.CustomEvent

    connect(sigName: "notify::detail", callback: (($obj: CustomEvent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: CustomEvent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CustomEvent extends Event {

    // Own properties of GXml-0.20.GXml.CustomEvent

    static name: string
    static $gtype: GObject.GType<CustomEvent>

    // Constructors of GXml-0.20.GXml.CustomEvent

    constructor(config?: CustomEvent.ConstructorProperties) 
    constructor() 
    static new(): CustomEvent

    // Overloads of new

    static new(): Event
    _init(config?: CustomEvent.ConstructorProperties): void
}

export module HashMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Map.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface HashMap extends Map {

    // Own fields of GXml-0.20.GXml.HashMap

    _hashtable: Gee.HashMap
    _attribute_key: string | null

    // Owm methods of GXml-0.20.GXml.HashMap

    initialize_element_with_key(element: Element, items_type: GObject.GType, attribute_key: string): void
    initialize_with_key(items_type: GObject.GType, attribute_key: string): void
    get(key: string): DomElement | null
    get_keys(): string[]

    // Class property signals of GXml-0.20.GXml.HashMap

    connect(sigName: "notify::attribute-key", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-key", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-key", ...args: any[]): void
    connect(sigName: "notify::keys-set", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys-set", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HashMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashMap

    static name: string
    static $gtype: GObject.GType<HashMap>

    // Constructors of GXml-0.20.GXml.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor() 
    static new(): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

export module HashPairedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends PairedMap.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface HashPairedMap extends PairedMap {

    // Own fields of GXml-0.20.GXml.HashPairedMap

    _hashtable: Gee.HashMap
    _attribute_primary_key: string | null
    _attribute_secondary_key: string | null

    // Owm methods of GXml-0.20.GXml.HashPairedMap

    initialize_element_with_keys(element: Element, items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string): void
    initialize_with_keys(items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string): void
    get(primary_key: string, secondary_key: string): DomElement | null
    get_primary_keys(): string[]
    get_secondary_keys(pkey: string): string[]

    // Class property signals of GXml-0.20.GXml.HashPairedMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: HashPairedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HashPairedMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashPairedMap

    static name: string
    static $gtype: GObject.GType<HashPairedMap>

    // Constructors of GXml-0.20.GXml.HashPairedMap

    constructor(config?: HashPairedMap.ConstructorProperties) 
    constructor() 
    static new(): HashPairedMap
    _init(config?: HashPairedMap.ConstructorProperties): void
}

export module HashThreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends ThreeMap.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface HashThreeMap extends ThreeMap {

    // Own fields of GXml-0.20.GXml.HashThreeMap

    _hashtable: Gee.HashMap
    _attribute_primary_key: string | null
    _attribute_secondary_key: string | null
    _attribute_third_key: string | null

    // Owm methods of GXml-0.20.GXml.HashThreeMap

    initialize_element_with_keys(element: Element, items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string, attribute_third_key: string): void
    initialize_with_keys(items_type: GObject.GType, attribute_primary_key: string, attribute_secondary_key: string, attribute_third_key: string): void
    get(primary_key: string, secondary_key: string, third_key: string): DomElement | null
    get_primary_keys(): string[]
    get_secondary_keys(pkey: string): string[]
    get_third_keys(pkey: string, skey: string): string[]

    // Class property signals of GXml-0.20.GXml.HashThreeMap

    connect(sigName: "notify::attribute-primary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-primary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-secondary-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-third-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-third-key", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-third-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys-set", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodes-index", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-name", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-type", callback: (($obj: HashThreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HashThreeMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashThreeMap

    static name: string
    static $gtype: GObject.GType<HashThreeMap>

    // Constructors of GXml-0.20.GXml.HashThreeMap

    constructor(config?: HashThreeMap.ConstructorProperties) 
    constructor() 
    static new(): HashThreeMap
    _init(config?: HashThreeMap.ConstructorProperties): void
}

export module HTMLCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends DomHTMLCollection.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface HTMLCollection extends DomHTMLCollection {

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    to_array(): DomElement[]

    // Overloads of to_array

    to_array(): any[]
    to_array(): any[]
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_to_array(): DomElement[]

    // Overloads of vfunc_to_array

    vfunc_to_array(): any[]
    vfunc_to_array(): any[]
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of GXml-0.20.GXml.HTMLCollection

    connect(sigName: "notify::g-type", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HTMLCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HTMLCollection extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.HTMLCollection

    static name: string
    static $gtype: GObject.GType<HTMLCollection>

    // Constructors of GXml-0.20.GXml.HTMLCollection

    constructor(config?: HTMLCollection.ConstructorProperties) 
    constructor() 
    static new(): HTMLCollection

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: HTMLCollection.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module HtmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends Document.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.HtmlDocument

        html?: DomElement | null
    }

}

export interface HtmlDocument {

    // Own properties of GXml-0.20.GXml.HtmlDocument

    html: DomElement

    // Owm methods of GXml-0.20.GXml.HtmlDocument

    get_html(): DomElement
    set_html(value: DomElement): void

    // Class property signals of GXml-0.20.GXml.HtmlDocument

    connect(sigName: "notify::html", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::html", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::html", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HtmlDocument extends Document {

    // Own properties of GXml-0.20.GXml.HtmlDocument

    static name: string
    static $gtype: GObject.GType<HtmlDocument>

    // Constructors of GXml-0.20.GXml.HtmlDocument

    constructor(config?: HtmlDocument.ConstructorProperties) 
    constructor() 
    static new(): HtmlDocument

    // Overloads of new

    static new(): Document
    static new(): Node
    _init(config?: HtmlDocument.ConstructorProperties): void
}

export module HtmlElement {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {
    }

}

export interface HtmlElement {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.HtmlElement

    connect(sigName: "notify::parse-children", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: HtmlElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class HtmlElement extends Element {

    // Own properties of GXml-0.20.GXml.HtmlElement

    static name: string
    static $gtype: GObject.GType<HtmlElement>

    // Constructors of GXml-0.20.GXml.HtmlElement

    constructor(config?: HtmlElement.ConstructorProperties) 
    constructor() 
    static new(): HtmlElement

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: HtmlElement.ConstructorProperties): void
}

export module LXPathObject {

    // Constructor properties interface

    export interface ConstructorProperties extends XPathObject.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface LXPathObject extends XPathObject {

    // Class property signals of GXml-0.20.GXml.LXPathObject

    connect(sigName: "notify::object-type", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::boolean-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boolean-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::boolean-value", ...args: any[]): void
    connect(sigName: "notify::string-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string-value", ...args: any[]): void
    connect(sigName: "notify::number-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-value", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number-value", ...args: any[]): void
    connect(sigName: "notify::nodeset", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeset", callback: (($obj: LXPathObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodeset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LXPathObject extends GObject.Object {

    // Own properties of GXml-0.20.GXml.LXPathObject

    static name: string
    static $gtype: GObject.GType<LXPathObject>

    // Constructors of GXml-0.20.GXml.LXPathObject

    constructor(config?: LXPathObject.ConstructorProperties) 
    constructor(document: XDocument, pointer: any | null) 
    static new(document: XDocument, pointer: any | null): LXPathObject
    _init(config?: LXPathObject.ConstructorProperties): void
}

export module Node {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEventTarget.ConstructorProperties, DomNode.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Node extends DomEventTarget, DomNode {

    // Own fields of GXml-0.20.GXml.Node

    _local_name: string | null
    _prefix: string | null
    _base_uri: string | null
    _node_value: string | null
    _parent: DomNode
    _node_type: DomNodeNodeType
    _child_nodes: NodeList
    _document: DomDocument

    // Class property signals of GXml-0.20.GXml.Node

    connect(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Node extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of GXml-0.20.GXml.Node

    constructor(config?: Node.ConstructorProperties) 
    constructor() 
    static new(): Node
    _init(config?: Node.ConstructorProperties): void
}

export module NodeList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNodeList.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface NodeList extends DomNodeList {

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of GXml-0.20.GXml.NodeList

    connect(sigName: "notify::g-type", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NodeList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.NodeList

    static name: string
    static $gtype: GObject.GType<NodeList>

    // Constructors of GXml-0.20.GXml.NodeList

    constructor(config?: NodeList.ConstructorProperties) 
    constructor() 
    static new(): NodeList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: NodeList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module NodeIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNodeIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface NodeIterator extends DomNodeIterator {

    // Own fields of GXml-0.20.GXml.NodeIterator

    _root: DomNode
    _reference_node: DomNode
    _pointer_before_reference_node: boolean
    _what_to_show: number

    // Class property signals of GXml-0.20.GXml.NodeIterator

    connect(sigName: "notify::root", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reference-node", ...args: any[]): void
    connect(sigName: "notify::pointer-before-reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-before-reference-node", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-before-reference-node", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: NodeIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NodeIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.NodeIterator

    static name: string
    static $gtype: GObject.GType<NodeIterator>

    // Constructors of GXml-0.20.GXml.NodeIterator

    constructor(config?: NodeIterator.ConstructorProperties) 
    constructor(n: DomNode, what_to_show: number) 
    static new(n: DomNode, what_to_show: number): NodeIterator
    _init(config?: NodeIterator.ConstructorProperties): void
}

export module BaseProperty {

    // Constructor properties interface

    export interface ConstructorProperties extends Property.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.BaseProperty

        value?: string | null
    }

}

export interface BaseProperty extends Property {

    // Own properties of GXml-0.20.GXml.BaseProperty

    value: string | null

    // Owm methods of GXml-0.20.GXml.BaseProperty

    get_value(): string | null
    set_value(value: string | null): void
    validate_value(val: string | null): boolean

    // Own virtual methods of GXml-0.20.GXml.BaseProperty

    vfunc_get_value(): string | null
    vfunc_set_value(value: string | null): void
    vfunc_validate_value(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.BaseProperty

    connect(sigName: "notify::value", callback: (($obj: BaseProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BaseProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BaseProperty extends GObject.Object {

    // Own properties of GXml-0.20.GXml.BaseProperty

    static name: string
    static $gtype: GObject.GType<BaseProperty>

    // Constructors of GXml-0.20.GXml.BaseProperty

    constructor(config?: BaseProperty.ConstructorProperties) 
    _init(config?: BaseProperty.ConstructorProperties): void
}

export module String {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface String {

    // Own fields of GXml-0.20.GXml.String

    _value: string | null

    // Class property signals of GXml-0.20.GXml.String

    connect(sigName: "notify::value", callback: (($obj: String, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: String, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class String extends BaseProperty {

    // Own properties of GXml-0.20.GXml.String

    static name: string
    static $gtype: GObject.GType<String>

    // Constructors of GXml-0.20.GXml.String

    constructor(config?: String.ConstructorProperties) 
    static with_string(str: string): String
    constructor() 
    static new(): String
    _init(config?: String.ConstructorProperties): void
}

export module ArrayString {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface ArrayString {

    // Own fields of GXml-0.20.GXml.ArrayString

    _value: string | null
    _values: string[]
    _values_length1: number

    // Owm methods of GXml-0.20.GXml.ArrayString

    get_values(): string[]
    initialize_strings(strs: string[]): void
    is_valid_value(): boolean
    select(index: number): void
    search(str: string): boolean

    // Class property signals of GXml-0.20.GXml.ArrayString

    connect(sigName: "notify::value", callback: (($obj: ArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ArrayString extends BaseProperty {

    // Own properties of GXml-0.20.GXml.ArrayString

    static name: string
    static $gtype: GObject.GType<ArrayString>

    // Constructors of GXml-0.20.GXml.ArrayString

    constructor(config?: ArrayString.ConstructorProperties) 
    constructor() 
    static new(): ArrayString
    _init(config?: ArrayString.ConstructorProperties): void
}

export module XsdArrayString {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayString.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdArrayString

        simpleType?: string | null
        source?: Gio.File | null
    }

}

export interface XsdArrayString {

    // Own properties of GXml-0.20.GXml.XsdArrayString

    simpleType: string | null
    source: Gio.File

    // Own fields of GXml-0.20.GXml.XsdArrayString

    _source: Gio.File
    _simple_type: string | null

    // Owm methods of GXml-0.20.GXml.XsdArrayString

    get_simple_type(): string
    set_simple_type(value: string): void
    get_source(): Gio.File
    set_source(value: Gio.File): void
    load(): void

    // Class property signals of GXml-0.20.GXml.XsdArrayString

    connect(sigName: "notify::simple-type", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdArrayString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdArrayString extends ArrayString {

    // Own properties of GXml-0.20.GXml.XsdArrayString

    static name: string
    static $gtype: GObject.GType<XsdArrayString>

    // Constructors of GXml-0.20.GXml.XsdArrayString

    constructor(config?: XsdArrayString.ConstructorProperties) 
    constructor() 
    static new(): XsdArrayString

    // Overloads of new

    static new(): ArrayString
    _init(config?: XsdArrayString.ConstructorProperties): void
}

export module Double {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Double

        decimals?: number | null
    }

}

export interface Double {

    // Own properties of GXml-0.20.GXml.Double

    decimals: number

    // Own fields of GXml-0.20.GXml.Double

    _value: number

    // Owm methods of GXml-0.20.GXml.Double

    get_decimals(): number
    set_decimals(value: number): void
    get_double(): number
    set_double(value: number): void

    // Class property signals of GXml-0.20.GXml.Double

    connect(sigName: "notify::decimals", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimals", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimals", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Double, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Double extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Double

    static name: string
    static $gtype: GObject.GType<Double>

    // Constructors of GXml-0.20.GXml.Double

    constructor(config?: Double.ConstructorProperties) 
    constructor() 
    static new(): Double
    _init(config?: Double.ConstructorProperties): void
}

export module Float {

    // Constructor properties interface

    export interface ConstructorProperties extends Double.ConstructorProperties {
    }

}

export interface Float {

    // Owm methods of GXml-0.20.GXml.Float

    get_float(): number
    set_float(value: number): void

    // Class property signals of GXml-0.20.GXml.Float

    connect(sigName: "notify::decimals", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimals", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimals", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Float, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Float extends Double {

    // Own properties of GXml-0.20.GXml.Float

    static name: string
    static $gtype: GObject.GType<Float>

    // Constructors of GXml-0.20.GXml.Float

    constructor(config?: Float.ConstructorProperties) 
    constructor() 
    static new(): Float

    // Overloads of new

    static new(): Double
    _init(config?: Float.ConstructorProperties): void
}

export module Int {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface Int {

    // Own fields of GXml-0.20.GXml.Int

    _value: number

    // Owm methods of GXml-0.20.GXml.Int

    get_integer(): number
    set_integer(value: number): void

    // Class property signals of GXml-0.20.GXml.Int

    connect(sigName: "notify::value", callback: (($obj: Int, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Int, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Int extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Int

    static name: string
    static $gtype: GObject.GType<Int>

    // Constructors of GXml-0.20.GXml.Int

    constructor(config?: Int.ConstructorProperties) 
    constructor() 
    static new(): Int
    _init(config?: Int.ConstructorProperties): void
}

export module Boolean {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface Boolean {

    // Own fields of GXml-0.20.GXml.Boolean

    _value: boolean

    // Owm methods of GXml-0.20.GXml.Boolean

    get_boolean(): boolean
    set_boolean(value: boolean): void

    // Class property signals of GXml-0.20.GXml.Boolean

    connect(sigName: "notify::value", callback: (($obj: Boolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Boolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Boolean extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Boolean

    static name: string
    static $gtype: GObject.GType<Boolean>

    // Constructors of GXml-0.20.GXml.Boolean

    constructor(config?: Boolean.ConstructorProperties) 
    constructor() 
    static new(): Boolean
    _init(config?: Boolean.ConstructorProperties): void
}

export module Enum {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Enum

        useNick?: boolean | null
        camelCase?: boolean | null
        upperCase?: boolean | null
        enumType?: GObject.GType | null
    }

}

export interface Enum {

    // Own properties of GXml-0.20.GXml.Enum

    useNick: boolean
    camelCase: boolean
    upperCase: boolean
    enumType: GObject.GType

    // Own fields of GXml-0.20.GXml.Enum

    _value: number
    _enum_type: GObject.GType
    _val: string | null

    // Owm methods of GXml-0.20.GXml.Enum

    get_use_nick(): boolean
    set_use_nick(value: boolean): void
    get_camel_case(): boolean
    set_camel_case(value: boolean): void
    get_upper_case(): boolean
    set_upper_case(value: boolean): void
    get_enum_type(): GObject.GType
    set_enum_type(value: GObject.GType): void
    initialize_enum(enum_type: GObject.GType): void
    get_enum(): number
    set_enum(value: number): void
    is_valid(): boolean

    // Class property signals of GXml-0.20.GXml.Enum

    connect(sigName: "notify::use-nick", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-nick", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-nick", ...args: any[]): void
    connect(sigName: "notify::camel-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camel-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::camel-case", ...args: any[]): void
    connect(sigName: "notify::upper-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upper-case", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upper-case", ...args: any[]): void
    connect(sigName: "notify::enum-type", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enum-type", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enum-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Enum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Enum extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Enum

    static name: string
    static $gtype: GObject.GType<Enum>

    // Constructors of GXml-0.20.GXml.Enum

    constructor(config?: Enum.ConstructorProperties) 
    constructor() 
    static new(): Enum
    _init(config?: Enum.ConstructorProperties): void
}

export module Date {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface Date {

    // Own fields of GXml-0.20.GXml.Date

    _value: GLib.Date

    // Owm methods of GXml-0.20.GXml.Date

    get_date(): /* result */ GLib.Date
    set_date(date: GLib.Date): void

    // Class property signals of GXml-0.20.GXml.Date

    connect(sigName: "notify::value", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Date, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Date extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Date

    static name: string
    static $gtype: GObject.GType<Date>

    // Constructors of GXml-0.20.GXml.Date

    constructor(config?: Date.ConstructorProperties) 
    constructor() 
    static new(): Date
    _init(config?: Date.ConstructorProperties): void
}

export module DateTime {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DateTime

        format?: string | null
    }

}

export interface DateTime {

    // Own properties of GXml-0.20.GXml.DateTime

    format: string | null

    // Own fields of GXml-0.20.GXml.DateTime

    _value: GLib.DateTime

    // Owm methods of GXml-0.20.GXml.DateTime

    get_format(): string
    set_format(value: string): void
    get_datetime(): GLib.DateTime
    set_datetime(dt: GLib.DateTime): void

    // Class property signals of GXml-0.20.GXml.DateTime

    connect(sigName: "notify::format", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DateTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DateTime extends BaseProperty {

    // Own properties of GXml-0.20.GXml.DateTime

    static name: string
    static $gtype: GObject.GType<DateTime>

    // Constructors of GXml-0.20.GXml.DateTime

    constructor(config?: DateTime.ConstructorProperties) 
    constructor() 
    static new(): DateTime
    _init(config?: DateTime.ConstructorProperties): void
}

export module Range {

    // Constructor properties interface

    export interface ConstructorProperties extends DomRange.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Range extends DomRange {

    // Own fields of GXml-0.20.GXml.Range

    _document: DomDocument
    _start_container: DomNode
    _start_offset: number
    _end_container: DomNode
    _end_offset: number
    _collapse: boolean
    _common_ancestor_container: DomNode

    // Class property signals of GXml-0.20.GXml.Range

    connect(sigName: "notify::start-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-container", ...args: any[]): void
    connect(sigName: "notify::start-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-offset", ...args: any[]): void
    connect(sigName: "notify::end-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-container", ...args: any[]): void
    connect(sigName: "notify::end-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-offset", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end-offset", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsed", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::common-ancestor-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-ancestor-container", callback: (($obj: Range, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::common-ancestor-container", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Range extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Range

    static name: string
    static $gtype: GObject.GType<Range>

    // Constructors of GXml-0.20.GXml.Range

    constructor(config?: Range.ConstructorProperties) 
    constructor(doc: DomDocument) 
    static new(doc: DomDocument): Range
    _init(config?: Range.ConstructorProperties): void
}

export module SettableTokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomSettableTokenList.ConstructorProperties, TokenList.ConstructorProperties {
    }

}

export interface SettableTokenList extends DomSettableTokenList {

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    contains(token: string): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    contains(item: any): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    add(item: any): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    remove(item: any): boolean
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_contains(token: string): boolean

    // Overloads of vfunc_contains

    vfunc_contains(item: any): boolean
    vfunc_contains(item: any): boolean
    vfunc_contains(item: any): boolean
    vfunc_add(tokens: string[]): void

    // Overloads of vfunc_add

    vfunc_add(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_remove(tokens: string[]): void

    // Overloads of vfunc_remove

    vfunc_remove(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of GXml-0.20.GXml.SettableTokenList

    connect(sigName: "notify::g-type", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SettableTokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettableTokenList extends TokenList {

    // Own properties of GXml-0.20.GXml.SettableTokenList

    static name: string
    static $gtype: GObject.GType<SettableTokenList>

    // Constructors of GXml-0.20.GXml.SettableTokenList

    constructor(config?: SettableTokenList.ConstructorProperties) 
    constructor(e: DomElement, attr: string | null) 
    static new(e: DomElement, attr: string | null): SettableTokenList

    // Overloads of new

    static new(e: DomElement, attr: string | null): TokenList
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: SettableTokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module StringRef {

    // Constructor properties interface

    export interface ConstructorProperties extends Property.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface StringRef extends Property {

    // Class property signals of GXml-0.20.GXml.StringRef

    connect(sigName: "notify::value", callback: (($obj: StringRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StringRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StringRef extends GObject.Object {

    // Own properties of GXml-0.20.GXml.StringRef

    static name: string
    static $gtype: GObject.GType<StringRef>

    // Constructors of GXml-0.20.GXml.StringRef

    constructor(config?: StringRef.ConstructorProperties) 
    constructor(obj: Object, name: string) 
    static new(obj: Object, name: string): StringRef
    _init(config?: StringRef.ConstructorProperties): void
}

export module CharacterData {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNonDocumentTypeChildNode.ConstructorProperties, DomChildNode.ConstructorProperties, DomCharacterData.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface CharacterData extends DomNonDocumentTypeChildNode, DomChildNode, DomCharacterData {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.CharacterData

    connect(sigName: "notify::previous-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CharacterData extends Node {

    // Own properties of GXml-0.20.GXml.CharacterData

    static name: string
    static $gtype: GObject.GType<CharacterData>

    // Constructors of GXml-0.20.GXml.CharacterData

    constructor(config?: CharacterData.ConstructorProperties) 
    constructor() 
    static new(): CharacterData

    // Overloads of new

    static new(): Node
    _init(config?: CharacterData.ConstructorProperties): void
}

export module Text {

    // Constructor properties interface

    export interface ConstructorProperties extends DomText.ConstructorProperties, CharacterData.ConstructorProperties {
    }

}

export interface Text extends DomText {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.Text

    connect(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Text extends CharacterData {

    // Own properties of GXml-0.20.GXml.Text

    static name: string
    static $gtype: GObject.GType<Text>

    // Constructors of GXml-0.20.GXml.Text

    constructor(config?: Text.ConstructorProperties) 
    constructor(doc: DomDocument, data: string) 
    static new(doc: DomDocument, data: string): Text

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: Text.ConstructorProperties): void
}

export module ProcessingInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends DomProcessingInstruction.ConstructorProperties, CharacterData.ConstructorProperties {
    }

}

export interface ProcessingInstruction extends DomProcessingInstruction {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.ProcessingInstruction

    connect(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ProcessingInstruction extends CharacterData {

    // Own properties of GXml-0.20.GXml.ProcessingInstruction

    static name: string
    static $gtype: GObject.GType<ProcessingInstruction>

    // Constructors of GXml-0.20.GXml.ProcessingInstruction

    constructor(config?: ProcessingInstruction.ConstructorProperties) 
    constructor(doc: DomDocument, target: string, data: string) 
    static new(doc: DomDocument, target: string, data: string): ProcessingInstruction

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: ProcessingInstruction.ConstructorProperties): void
}

export module Comment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomComment.ConstructorProperties, CharacterData.ConstructorProperties {
    }

}

export interface Comment extends DomComment {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.Comment

    connect(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Comment extends CharacterData {

    // Own properties of GXml-0.20.GXml.Comment

    static name: string
    static $gtype: GObject.GType<Comment>

    // Constructors of GXml-0.20.GXml.Comment

    constructor(config?: Comment.ConstructorProperties) 
    constructor(doc: DomDocument, data: string) 
    static new(doc: DomDocument, data: string): Comment

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: Comment.ConstructorProperties): void
}

export module TokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomTokenList.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface TokenList extends DomTokenList {

    // Conflicting properties

    readOnlyView: any

    // Own fields of GXml-0.20.GXml.TokenList

    _element: DomElement
    _attr: string | null

    // Owm methods of GXml-0.20.GXml.TokenList

    update(): void

    // Conflicting methods

    contains(token: string): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    contains(item: any): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    add(item: any): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    remove(item: any): boolean
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    vfunc_contains(token: string): boolean

    // Overloads of vfunc_contains

    vfunc_contains(item: any): boolean
    vfunc_contains(item: any): boolean
    vfunc_contains(item: any): boolean
    vfunc_add(tokens: string[]): void

    // Overloads of vfunc_add

    vfunc_add(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_remove(tokens: string[]): void

    // Overloads of vfunc_remove

    vfunc_remove(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection

    // Class property signals of GXml-0.20.GXml.TokenList

    connect(sigName: "notify::g-type", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TokenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TokenList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.TokenList

    static name: string
    static $gtype: GObject.GType<TokenList>

    // Constructors of GXml-0.20.GXml.TokenList

    constructor(config?: TokenList.ConstructorProperties) 
    constructor(e: DomElement, attr: string | null) 
    static new(e: DomElement, attr: string | null): TokenList

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: TokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module TreeWalker {

    // Constructor properties interface

    export interface ConstructorProperties extends DomTreeWalker.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TreeWalker extends DomTreeWalker {

    // Own fields of GXml-0.20.GXml.TreeWalker

    _root: DomNode
    _what_to_show: number
    _current_node: DomNode

    // Class property signals of GXml-0.20.GXml.TreeWalker

    connect(sigName: "notify::root", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::what-to-show", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: "notify::current-node", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-node", callback: (($obj: TreeWalker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TreeWalker extends GObject.Object {

    // Own properties of GXml-0.20.GXml.TreeWalker

    static name: string
    static $gtype: GObject.GType<TreeWalker>

    // Constructors of GXml-0.20.GXml.TreeWalker

    constructor(config?: TreeWalker.ConstructorProperties) 
    constructor(root: DomNode, w: number) 
    static new(root: DomNode, w: number): TreeWalker
    _init(config?: TreeWalker.ConstructorProperties): void
}

export module XAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends DomAttr.ConstructorProperties, XNode.ConstructorProperties {
    }

}

export interface XAttribute extends DomAttr {

    // Class property signals of GXml-0.20.GXml.XAttribute

    connect(sigName: "notify::attrs", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: XAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XAttribute extends XNode {

    // Own properties of GXml-0.20.GXml.XAttribute

    static name: string
    static $gtype: GObject.GType<XAttribute>

    // Constructors of GXml-0.20.GXml.XAttribute

    constructor(config?: XAttribute.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XAttribute
    _init(config?: XAttribute.ConstructorProperties): void
}

export module XCharacterData {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, XNonDocumentChildNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XCharacterData

        str?: string | null
    }

}

export interface XCharacterData extends DomCharacterData {

    // Own properties of GXml-0.20.GXml.XCharacterData

    str: string | null

    // Owm methods of GXml-0.20.GXml.XCharacterData

    get_str(): string | null
    set_str(value: string): void

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.XCharacterData

    connect(sigName: "notify::str", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XCharacterData extends XNonDocumentChildNode {

    // Own properties of GXml-0.20.GXml.XCharacterData

    static name: string
    static $gtype: GObject.GType<XCharacterData>

    // Constructors of GXml-0.20.GXml.XCharacterData

    constructor(config?: XCharacterData.ConstructorProperties) 
    constructor() 
    static new(): XCharacterData

    // Overloads of new

    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XCharacterData.ConstructorProperties): void
}

export module XChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends DomChildNode.ConstructorProperties, XNode.ConstructorProperties {
    }

}

export interface XChildNode extends DomChildNode {

    // Class property signals of GXml-0.20.GXml.XChildNode

    connect(sigName: "notify::attrs", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XChildNode extends XNode {

    // Own properties of GXml-0.20.GXml.XChildNode

    static name: string
    static $gtype: GObject.GType<XChildNode>

    // Constructors of GXml-0.20.GXml.XChildNode

    constructor(config?: XChildNode.ConstructorProperties) 
    constructor() 
    static new(): XChildNode
    _init(config?: XChildNode.ConstructorProperties): void
}

export module XNonDocumentChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNonDocumentTypeChildNode.ConstructorProperties, XChildNode.ConstructorProperties {
    }

}

export interface XNonDocumentChildNode extends DomNonDocumentTypeChildNode {

    // Class property signals of GXml-0.20.GXml.XNonDocumentChildNode

    connect(sigName: "notify::attrs", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XNonDocumentChildNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XNonDocumentChildNode extends XChildNode {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNode

    static name: string
    static $gtype: GObject.GType<XNonDocumentChildNode>

    // Constructors of GXml-0.20.GXml.XNonDocumentChildNode

    constructor(config?: XNonDocumentChildNode.ConstructorProperties) 
    constructor() 
    static new(): XNonDocumentChildNode

    // Overloads of new

    static new(): XChildNode
    _init(config?: XNonDocumentChildNode.ConstructorProperties): void
}

export module XComment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomComment.ConstructorProperties, XCharacterData.ConstructorProperties {
    }

}

export interface XComment extends DomComment {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.XComment

    connect(sigName: "notify::str", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XComment extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XComment

    static name: string
    static $gtype: GObject.GType<XComment>

    // Constructors of GXml-0.20.GXml.XComment

    constructor(config?: XComment.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XComment

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XComment.ConstructorProperties): void
}

export module XDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties, DomDocument.ConstructorProperties, DomXMLDocument.ConstructorProperties, XPathContext.ConstructorProperties, XNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XDocument

        indent?: boolean | null
        nsTop?: boolean | null
        prefixDefaultNs?: boolean | null
        backup?: boolean | null
        file?: Gio.File | null
    }

}

export interface XDocument extends DomParentNode, DomNonElementParentNode, DomDocument, DomXMLDocument, XPathContext {

    // Own properties of GXml-0.20.GXml.XDocument

    indent: boolean
    nsTop: boolean
    prefixDefaultNs: boolean
    backup: boolean
    file: Gio.File
    readonly root: DomNode

    // Own fields of GXml-0.20.GXml.XDocument

    doc: any | null
    _buffer: any
    _parser: Parser
    _implementation: DomImplementation
    _url: string | null
    _origin: string | null
    _compat_mode: string | null
    _character_set: string | null
    _content_type: string | null
    _constructor: DomEvent

    // Owm methods of GXml-0.20.GXml.XDocument

    get_indent(): boolean
    set_indent(value: boolean): void
    get_ns_top(): boolean
    set_ns_top(value: boolean): void
    get_prefix_default_ns(): boolean
    set_prefix_default_ns(value: boolean): void
    get_backup(): boolean
    set_backup(value: boolean): void
    get_file(): Gio.File
    set_file(value: Gio.File): void
    get_root(): DomNode
    create_pi(target: string, data: string): DomNode
    create_text(text: string): DomNode
    libxml_to_string(): string | null
    save(cancellable: Gio.Cancellable | null): boolean
    save_as(f: Gio.File, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of GXml-0.20.GXml.XDocument

    vfunc_save(cancellable: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GXml-0.20.GXml.XDocument

    connect(sigName: "notify::indent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::ns-top", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ns-top", ...args: any[]): void
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix-default-ns", ...args: any[]): void
    connect(sigName: "notify::backup", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XDocument extends XNode {

    // Own properties of GXml-0.20.GXml.XDocument

    static name: string
    static $gtype: GObject.GType<XDocument>

    // Constructors of GXml-0.20.GXml.XDocument

    constructor(config?: XDocument.ConstructorProperties) 
    constructor() 
    static new(): XDocument
    static from_path(path: string, options: number): XDocument
    static from_uri(uri: string, options: number): XDocument
    static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XDocument
    static from_string(str: string, options: number): XDocument
    static from_stream(istream: Gio.InputStream): XDocument
    static from_doc(doc: libxml2.Doc): XDocument
    _init(config?: XDocument.ConstructorProperties): void
}

export module XElement {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomElement.ConstructorProperties, XPathContext.ConstructorProperties, XNonDocumentChildNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XElement

        content?: string | null
    }

}

export interface XElement extends DomParentNode, DomElement, XPathContext {

    // Own properties of GXml-0.20.GXml.XElement

    content: string | null

    // Owm methods of GXml-0.20.GXml.XElement

    set_attr(aname: string, avalue: string): void
    get_attr(name: string): DomNode | null
    set_ns_attr(ns: string, aname: string, value: string): void
    get_ns_attr(name: string, uri: string): DomNode | null
    normalize(): void
    get_content(): string | null
    set_content(value: string): void
    remove_attr(name: string): void
    remove_ns_attr(name: string, uri: string): void

    // Class property signals of GXml-0.20.GXml.XElement

    connect(sigName: "notify::content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-list", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XElement extends XNonDocumentChildNode {

    // Own properties of GXml-0.20.GXml.XElement

    static name: string
    static $gtype: GObject.GType<XElement>

    // Constructors of GXml-0.20.GXml.XElement

    constructor(config?: XElement.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XElement

    // Overloads of new

    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XElement.ConstructorProperties): void
}

export module XHashMapAttr {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNamedNodeMap.ConstructorProperties, Gee.AbstractMap.ConstructorProperties {
    }

}

export interface XHashMapAttr extends DomNamedNodeMap {

    // Class property signals of GXml-0.20.GXml.XHashMapAttr

    connect(sigName: "notify::k-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XHashMapAttr extends Gee.AbstractMap {

    // Own properties of GXml-0.20.GXml.XHashMapAttr

    static name: string
    static $gtype: GObject.GType<XHashMapAttr>

    // Constructors of GXml-0.20.GXml.XHashMapAttr

    constructor(config?: XHashMapAttr.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XHashMapAttr
    _init(config?: XHashMapAttr.ConstructorProperties): void
}

export module XHashMapAttrEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.MapEntry.ConstructorProperties {
    }

}

export interface XHashMapAttrEntry {

    // Class property signals of GXml-0.20.GXml.XHashMapAttrEntry

    connect(sigName: "notify::k-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XHashMapAttrEntry extends Gee.MapEntry {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntry

    static name: string
    static $gtype: GObject.GType<XHashMapAttrEntry>

    // Constructors of GXml-0.20.GXml.XHashMapAttrEntry

    constructor(config?: XHashMapAttrEntry.ConstructorProperties) 
    constructor(doc: XDocument, attr: any | null) 
    static new(doc: XDocument, attr: any | null): XHashMapAttrEntry
    _init(config?: XHashMapAttrEntry.ConstructorProperties): void
}

export module XHashMapAttrIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.MapIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface XHashMapAttrIterator extends Gee.MapIterator {

    // Class property signals of GXml-0.20.GXml.XHashMapAttrIterator

    connect(sigName: "notify::valid", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XHashMapAttrIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIterator

    static name: string
    static $gtype: GObject.GType<XHashMapAttrIterator>

    // Constructors of GXml-0.20.GXml.XHashMapAttrIterator

    constructor(config?: XHashMapAttrIterator.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XHashMapAttrIterator
    _init(config?: XHashMapAttrIterator.ConstructorProperties): void
}

export module XHtmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends DomHtmlDocument.ConstructorProperties, XDocument.ConstructorProperties {
    }

}

export interface XHtmlDocument extends DomHtmlDocument {

    // Conflicting methods

    read_from_string(str: string): void

    // Overloads of read_from_string

    read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_string(str: string): void

    // Overloads of vfunc_read_from_string

    vfunc_read_from_string(str: string, cancellable: Gio.Cancellable | null): void
    vfunc_read_from_string(str: string, cancellable: Gio.Cancellable | null): void

    // Class property signals of GXml-0.20.GXml.XHtmlDocument

    connect(sigName: "notify::indent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::ns-top", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ns-top", ...args: any[]): void
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix-default-ns", ...args: any[]): void
    connect(sigName: "notify::backup", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat-mode", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::character-set", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-element-child", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-element-count", callback: (($obj: XHtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XHtmlDocument extends XDocument {

    // Own properties of GXml-0.20.GXml.XHtmlDocument

    static name: string
    static $gtype: GObject.GType<XHtmlDocument>

    // Constructors of GXml-0.20.GXml.XHtmlDocument

    constructor(config?: XHtmlDocument.ConstructorProperties) 
    static from_path(path: string, options: number): XHtmlDocument

    // Overloads of from_path

    static from_path(path: string, options: number): XDocument
    static from_uri(uri: string, options: number): XHtmlDocument

    // Overloads of from_uri

    static from_uri(uri: string, options: number): XDocument
    static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XHtmlDocument

    // Overloads of from_file

    static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XDocument
    static from_string(html: string, options: number): XHtmlDocument

    // Overloads of from_string

    static from_string(str: string, options: number): XDocument
    static from_string_context(html: string, options: number): XHtmlDocument
    static from_string_doc(html: string, options: number): XHtmlDocument
    constructor() 
    static new(): XHtmlDocument

    // Overloads of new

    static new(): XDocument
    _init(config?: XHtmlDocument.ConstructorProperties): void
    static get_default_options(): number
}

export module XListChildren {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNodeList.ConstructorProperties, DomHTMLCollection.ConstructorProperties, Gee.AbstractBidirList.ConstructorProperties {
    }

}

export interface XListChildren extends DomNodeList, DomHTMLCollection {

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    item(index: number): DomNode | null
    item(index: number): DomElement | null
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.BidirList
    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.List
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.List

    // Overloads of get_read_only_view

    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    get_read_only_view(): Gee.Collection
    to_array(): DomElement[]

    // Overloads of to_array

    to_array(): any[]
    to_array(): any[]
    vfunc_item(index: number): DomNode | null
    vfunc_item(index: number): DomElement | null
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_to_array(): DomElement[]

    // Overloads of vfunc_to_array

    vfunc_to_array(): any[]
    vfunc_to_array(): any[]

    // Class property signals of GXml-0.20.GXml.XListChildren

    connect(sigName: "notify::g-type", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XListChildren extends Gee.AbstractBidirList {

    // Own properties of GXml-0.20.GXml.XListChildren

    static name: string
    static $gtype: GObject.GType<XListChildren>

    // Constructors of GXml-0.20.GXml.XListChildren

    constructor(config?: XListChildren.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XListChildren
    _init(config?: XListChildren.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Gee.Collection
}

export module XListChildrenIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Traversable.ConstructorProperties, Gee.Iterator.ConstructorProperties, Gee.BidirIterator.ConstructorProperties, Gee.ListIterator.ConstructorProperties, Gee.BidirListIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface XListChildrenIterator extends Gee.Traversable, Gee.Iterator, Gee.BidirIterator, Gee.ListIterator, Gee.BidirListIterator {

    // Class property signals of GXml-0.20.GXml.XListChildrenIterator

    connect(sigName: "notify::valid", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: XListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XListChildrenIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XListChildrenIterator

    static name: string
    static $gtype: GObject.GType<XListChildrenIterator>

    // Constructors of GXml-0.20.GXml.XListChildrenIterator

    constructor(config?: XListChildrenIterator.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XListChildrenIterator
    _init(config?: XListChildrenIterator.ConstructorProperties): void
}

export module XNode {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEventTarget.ConstructorProperties, DomNode.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XNode

        value?: string | null
    }

}

export interface XNode extends DomEventTarget, DomNode {

    // Own properties of GXml-0.20.GXml.XNode

    readonly attrs: Gee.Map
    readonly childrenNodes: Gee.BidirList
    readonly document: DomDocument
    readonly parent: DomNode
    readonly typeNode: NodeType
    readonly name: string | null
    value: string | null

    // Own fields of GXml-0.20.GXml.XNode

    _doc: XDocument
    _node: any | null
    owned_node: boolean
    _base_uri: string | null

    // Owm methods of GXml-0.20.GXml.XNode

    set_namespace(uri: string, prefix: string | null): boolean
    get_attrs(): Gee.Map
    get_children_nodes(): Gee.BidirList
    get_document(): DomDocument
    get_parent(): DomNode
    get_type_node(): NodeType
    get_name(): string | null
    get_value(): string | null
    set_value(value: string): void
    to_string(): string | null
    get_internal_node(): any | null
    clone_node(deep: boolean): DomNode

    // Own virtual methods of GXml-0.20.GXml.XNode

    vfunc_set_namespace(uri: string, prefix: string | null): boolean
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children_nodes(): Gee.BidirList
    vfunc_get_document(): DomDocument
    vfunc_get_parent(): DomNode
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string | null
    vfunc_get_value(): string | null
    vfunc_set_value(value: string): void
    vfunc_to_string(): string | null

    // Class property signals of GXml-0.20.GXml.XNode

    connect(sigName: "notify::attrs", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XNode

    static name: string
    static $gtype: GObject.GType<XNode>

    // Constructors of GXml-0.20.GXml.XNode

    constructor(config?: XNode.ConstructorProperties) 
    _init(config?: XNode.ConstructorProperties): void
    static to_gnode(doc: XDocument, node: any | null, take_node: boolean): DomNode
}

export module XParser {

    // Constructor properties interface

    export interface ConstructorProperties extends Parser.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface XParser extends Parser {

    // Owm methods of GXml-0.20.GXml.XParser

    read_node(node: DomNode): void
    read_child_nodes_stream_async(istream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_child_nodes_stream_async

    /**
     * Promisified version of {@link read_child_nodes_stream_async}
     * 
     * 
     * @param istream 
     * @param _callback_ 
     * @returns A Promise of the result of {@link read_child_nodes_stream_async}
     */
    read_child_nodes_stream_async(istream: Gio.InputStream): globalThis.Promise<void>
    read_child_nodes_stream_finish(_res_: Gio.AsyncResult): void

    // Class property signals of GXml-0.20.GXml.XParser

    connect(sigName: "notify::backup", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::types", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::types", callback: (($obj: XParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XParser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XParser

    static name: string
    static $gtype: GObject.GType<XParser>

    // Constructors of GXml-0.20.GXml.XParser

    constructor(config?: XParser.ConstructorProperties) 
    constructor(node: DomNode) 
    static new(node: DomNode): XParser
    _init(config?: XParser.ConstructorProperties): void
}

export module XProcessingInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends DomProcessingInstruction.ConstructorProperties, XCharacterData.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XProcessingInstruction

        data?: string | null
    }

}

export interface XProcessingInstruction extends DomProcessingInstruction {

    // Own properties of GXml-0.20.GXml.XProcessingInstruction

    data: string | null

    // Owm methods of GXml-0.20.GXml.XProcessingInstruction

    get_data(): string | null

    // Overloads of get_data

    get_data(): string | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    set_data(value: string): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.XProcessingInstruction

    connect(sigName: "notify::data", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::str", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XProcessingInstruction extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XProcessingInstruction

    static name: string
    static $gtype: GObject.GType<XProcessingInstruction>

    // Constructors of GXml-0.20.GXml.XProcessingInstruction

    constructor(config?: XProcessingInstruction.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XProcessingInstruction

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XProcessingInstruction.ConstructorProperties): void
}

export module XsdSchema {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdSchema

        elementDefinitions?: XsdListElements | null
        simpleTypeDefinitions?: XsdListSimpleTypes | null
        complexTypeDefinitions?: XsdListComplexTypes | null
    }

}

export interface XsdSchema {

    // Own properties of GXml-0.20.GXml.XsdSchema

    elementDefinitions: XsdListElements
    simpleTypeDefinitions: XsdListSimpleTypes
    complexTypeDefinitions: XsdListComplexTypes

    // Owm methods of GXml-0.20.GXml.XsdSchema

    get_element_definitions(): XsdListElements
    set_element_definitions(value: XsdListElements): void
    get_simple_type_definitions(): XsdListSimpleTypes
    set_simple_type_definitions(value: XsdListSimpleTypes): void
    get_complex_type_definitions(): XsdListComplexTypes
    set_complex_type_definitions(value: XsdListComplexTypes): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdSchema

    connect(sigName: "notify::element-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-definitions", ...args: any[]): void
    connect(sigName: "notify::simple-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type-definitions", ...args: any[]): void
    connect(sigName: "notify::complex-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type-definitions", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type-definitions", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdSchema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdSchema extends Element {

    // Own properties of GXml-0.20.GXml.XsdSchema

    static name: string
    static $gtype: GObject.GType<XsdSchema>

    // Constructors of GXml-0.20.GXml.XsdSchema

    constructor(config?: XsdSchema.ConstructorProperties) 
    constructor() 
    static new(): XsdSchema

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdSchema.ConstructorProperties): void
}

export module XsdSimpleType {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdSimpleType

        final?: string | null
        name?: string | null
        annotation?: XsdAnnotation | null
        list?: XsdTypeList | null
        union?: XsdTypeUnion | null
        restriction?: XsdTypeRestriction | null
    }

}

export interface XsdSimpleType {

    // Own properties of GXml-0.20.GXml.XsdSimpleType

    final: string | null
    name: string | null
    annotation: XsdAnnotation
    list: XsdTypeList
    union: XsdTypeUnion
    restriction: XsdTypeRestriction

    // Owm methods of GXml-0.20.GXml.XsdSimpleType

    get_final(): string
    set_final(value: string): void
    get_name(): string
    set_name(value: string): void
    get_annotation(): XsdAnnotation
    set_annotation(value: XsdAnnotation): void
    get_list(): XsdTypeList
    set_list(value: XsdTypeList): void
    get_union(): XsdTypeUnion
    set_union(value: XsdTypeUnion): void
    get_restriction(): XsdTypeRestriction
    set_restriction(value: XsdTypeRestriction): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdSimpleType

    connect(sigName: "notify::final", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::list", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::list", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::union", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::union", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::union", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdSimpleType extends Element {

    // Own properties of GXml-0.20.GXml.XsdSimpleType

    static name: string
    static $gtype: GObject.GType<XsdSimpleType>

    // Constructors of GXml-0.20.GXml.XsdSimpleType

    constructor(config?: XsdSimpleType.ConstructorProperties) 
    constructor() 
    static new(): XsdSimpleType

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdSimpleType.ConstructorProperties): void
}

export module XsdTypeDefinition {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeDefinition

        annotation?: XsdAnnotation | null
    }

}

export interface XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinition

    annotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdTypeDefinition

    get_annotation(): XsdAnnotation
    set_annotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeDefinition

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeDefinition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeDefinition extends Element {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinition

    static name: string
    static $gtype: GObject.GType<XsdTypeDefinition>

    // Constructors of GXml-0.20.GXml.XsdTypeDefinition

    constructor(config?: XsdTypeDefinition.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeDefinition

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdTypeDefinition.ConstructorProperties): void
}

export module XsdTypeList {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeDefinition.ConstructorProperties {
    }

}

export interface XsdTypeList {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeList

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeList extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeList

    static name: string
    static $gtype: GObject.GType<XsdTypeList>

    // Constructors of GXml-0.20.GXml.XsdTypeList

    constructor(config?: XsdTypeList.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeList

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeList.ConstructorProperties): void
}

export module XsdTypeUnion {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeDefinition.ConstructorProperties {
    }

}

export interface XsdTypeUnion {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeUnion

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeUnion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeUnion extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeUnion

    static name: string
    static $gtype: GObject.GType<XsdTypeUnion>

    // Constructors of GXml-0.20.GXml.XsdTypeUnion

    constructor(config?: XsdTypeUnion.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeUnion

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeUnion.ConstructorProperties): void
}

export module XsdTypeRestriction {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeDefinition.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestriction

        base?: string | null
        simpleType?: XsdSimpleType | null
        enumerations?: XsdListTypeRestrictionEnumerations | null
        whiteSpaces?: XsdListTypeRestrictionWhiteSpaces | null
    }

}

export interface XsdTypeRestriction {

    // Own properties of GXml-0.20.GXml.XsdTypeRestriction

    base: string | null
    simpleType: XsdSimpleType
    enumerations: XsdListTypeRestrictionEnumerations
    whiteSpaces: XsdListTypeRestrictionWhiteSpaces

    // Owm methods of GXml-0.20.GXml.XsdTypeRestriction

    get_base(): string
    set_base(value: string): void
    get_simple_type(): XsdSimpleType
    set_simple_type(value: XsdSimpleType): void
    get_enumerations(): XsdListTypeRestrictionEnumerations
    set_enumerations(value: XsdListTypeRestrictionEnumerations): void
    get_white_spaces(): XsdListTypeRestrictionWhiteSpaces
    set_white_spaces(value: XsdListTypeRestrictionWhiteSpaces): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestriction

    connect(sigName: "notify::base", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::enumerations", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enumerations", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enumerations", ...args: any[]): void
    connect(sigName: "notify::white-spaces", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::white-spaces", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::white-spaces", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestriction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestriction extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeRestriction

    static name: string
    static $gtype: GObject.GType<XsdTypeRestriction>

    // Constructors of GXml-0.20.GXml.XsdTypeRestriction

    constructor(config?: XsdTypeRestriction.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestriction

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestriction.ConstructorProperties): void
}

export module XsdTypeRestrictionDef {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionDef

        annotation?: XsdAnnotation | null
    }

}

export interface XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    annotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionDef

    get_annotation(): XsdAnnotation
    set_annotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionDef

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionDef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionDef extends Element {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionDef>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionDef

    constructor(config?: XsdTypeRestrictionDef.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionDef

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionDef.ConstructorProperties): void
}

export module XsdTypeRestrictionMinExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMinExclusive {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionMinExclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMinExclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    constructor(config?: XsdTypeRestrictionMinExclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMinExclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinExclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionMinInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMinInclusive {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionMinInclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMinInclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    constructor(config?: XsdTypeRestrictionMinInclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMinInclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinInclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionMaxExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMaxExclusive {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxExclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionMaxExclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMaxExclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    constructor(config?: XsdTypeRestrictionMaxExclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMaxExclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxExclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionMaxInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMaxInclusive {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxInclusive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionMaxInclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMaxInclusive>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    constructor(config?: XsdTypeRestrictionMaxInclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMaxInclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxInclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionTotalDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionTotalDigits {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionTotalDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionTotalDigits extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionTotalDigits>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    constructor(config?: XsdTypeRestrictionTotalDigits.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionTotalDigits

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionTotalDigits.ConstructorProperties): void
}

export module XsdTypeRestrictionFractionDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionFractionDigits {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionFractionDigits, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionFractionDigits extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionFractionDigits>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    constructor(config?: XsdTypeRestrictionFractionDigits.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionFractionDigits

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionFractionDigits.ConstructorProperties): void
}

export module XsdTypeRestrictionLength {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionLength {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionLength

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLength

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionLength>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionLength

    constructor(config?: XsdTypeRestrictionLength.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionLength.ConstructorProperties): void
}

export module XsdTypeRestrictionMinLength {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMinLength {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMinLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionMinLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMinLength>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    constructor(config?: XsdTypeRestrictionMinLength.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMinLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinLength.ConstructorProperties): void
}

export module XsdTypeRestrictionMaxLength {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMaxLength {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionMaxLength, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionMaxLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionMaxLength>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    constructor(config?: XsdTypeRestrictionMaxLength.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMaxLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxLength.ConstructorProperties): void
}

export module XsdTypeRestrictionEnumeration {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

        value?: string | null
    }

}

export interface XsdTypeRestrictionEnumeration {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    value: string | null

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    get_value(): string
    set_value(value: string): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    connect(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionEnumeration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionEnumeration extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionEnumeration>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    constructor(config?: XsdTypeRestrictionEnumeration.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionEnumeration

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionEnumeration.ConstructorProperties): void
}

export module XsdTypeRestrictionWhiteSpace {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

        fixed?: XsdTypeRestrictionWhiteSpaceFixed | null
        value?: string | null
    }

}

export interface XsdTypeRestrictionWhiteSpace {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    fixed: XsdTypeRestrictionWhiteSpaceFixed
    value: string | null

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    get_fixed(): XsdTypeRestrictionWhiteSpaceFixed
    set_fixed(value: XsdTypeRestrictionWhiteSpaceFixed): void
    get_value(): string
    set_value(value: string): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    connect(sigName: "notify::fixed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionWhiteSpace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionWhiteSpace extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionWhiteSpace>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    constructor(config?: XsdTypeRestrictionWhiteSpace.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionWhiteSpace

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionWhiteSpace.ConstructorProperties): void
}

export module XsdTypeRestrictionWhiteSpaceFixed {

    // Constructor properties interface

    export interface ConstructorProperties extends Boolean.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionWhiteSpaceFixed {

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    connect(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpaceFixed, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XsdTypeRestrictionWhiteSpaceFixed, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionWhiteSpaceFixed extends Boolean {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionWhiteSpaceFixed>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    constructor(config?: XsdTypeRestrictionWhiteSpaceFixed.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionWhiteSpaceFixed

    // Overloads of new

    static new(): Boolean
    _init(config?: XsdTypeRestrictionWhiteSpaceFixed.ConstructorProperties): void
}

export module XsdTypeRestrictionPattern {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionPattern {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionPattern

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionPattern, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionPattern extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPattern

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionPattern>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionPattern

    constructor(config?: XsdTypeRestrictionPattern.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionPattern

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionPattern.ConstructorProperties): void
}

export module XsdTypeRestrictionAssertion {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionAssertion {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionAssertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionAssertion extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionAssertion>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    constructor(config?: XsdTypeRestrictionAssertion.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionAssertion

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionAssertion.ConstructorProperties): void
}

export module XsdTypeRestrictionExplicitTimezone {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionExplicitTimezone {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    connect(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::annotation", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdTypeRestrictionExplicitTimezone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdTypeRestrictionExplicitTimezone extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    static name: string
    static $gtype: GObject.GType<XsdTypeRestrictionExplicitTimezone>

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    constructor(config?: XsdTypeRestrictionExplicitTimezone.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionExplicitTimezone

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionExplicitTimezone.ConstructorProperties): void
}

export module XsdComplexType {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseType.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdComplexType

        abstract?: boolean | null
        block?: string | null
        final?: string | null
        mixed?: boolean | null
        name?: string | null
        defaultAttributesApply?: boolean | null
        contentType?: XsdBaseContent | null
    }

}

export interface XsdComplexType {

    // Own properties of GXml-0.20.GXml.XsdComplexType

    abstract: boolean
    block: string | null
    final: string | null
    mixed: boolean
    name: string | null
    defaultAttributesApply: boolean
    contentType: XsdBaseContent
    readonly typeAttributes: XsdList
    readonly groupAttributes: XsdList

    // Own fields of GXml-0.20.GXml.XsdComplexType

    _type_attributes: XsdList
    _group_attributes: XsdList

    // Owm methods of GXml-0.20.GXml.XsdComplexType

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_final(): string
    set_final(value: string): void
    get_mixed(): boolean
    set_mixed(value: boolean): void
    get_name(): string
    set_name(value: string): void
    get_default_attributes_apply(): boolean
    set_default_attributes_apply(value: boolean): void
    get_content_type(): XsdBaseContent
    set_content_type(value: XsdBaseContent): void
    get_type_attributes(): XsdList
    get_group_attributes(): XsdList

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdComplexType

    connect(sigName: "notify::abstract", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::mixed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mixed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mixed", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::default-attributes-apply", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-attributes-apply", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-attributes-apply", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::type-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-attributes", ...args: any[]): void
    connect(sigName: "notify::group-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-attributes", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-attributes", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdComplexType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdComplexType extends XsdBaseType {

    // Own properties of GXml-0.20.GXml.XsdComplexType

    static name: string
    static $gtype: GObject.GType<XsdComplexType>

    // Constructors of GXml-0.20.GXml.XsdComplexType

    constructor(config?: XsdComplexType.ConstructorProperties) 
    constructor() 
    static new(): XsdComplexType

    // Overloads of new

    static new(): XsdBaseType
    static new(): Element
    static new(): Node
    _init(config?: XsdComplexType.ConstructorProperties): void
}

export module XsdExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdExtension

        base?: string | null
    }

}

export interface XsdExtension {

    // Own properties of GXml-0.20.GXml.XsdExtension

    base: string | null

    // Owm methods of GXml-0.20.GXml.XsdExtension

    get_base(): string
    set_base(value: string): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdExtension

    connect(sigName: "notify::base", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdExtension extends Element {

    // Own properties of GXml-0.20.GXml.XsdExtension

    static name: string
    static $gtype: GObject.GType<XsdExtension>

    // Constructors of GXml-0.20.GXml.XsdExtension

    constructor(config?: XsdExtension.ConstructorProperties) 
    constructor() 
    static new(): XsdExtension

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdExtension.ConstructorProperties): void
}

export module XsdElement {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdElement

        abstract?: boolean | null
        block?: string | null
        "default"?: string | null
        final?: string | null
        fixed?: string | null
        form?: string | null
        maxOccurs?: string | null
        minOccurs?: string | null
        name?: string | null
        nillable?: boolean | null
        ref?: string | null
        substitutionGroup?: DomTokenList | null
        targetNamespace?: string | null
        objectType?: string | null
        anotation?: XsdAnnotation | null
        simpleType?: XsdSimpleType | null
        complexType?: XsdComplexType | null
    }

}

export interface XsdElement {

    // Own properties of GXml-0.20.GXml.XsdElement

    abstract: boolean
    block: string | null
    "default": string | null
    final: string | null
    fixed: string | null
    form: string | null
    maxOccurs: string | null
    minOccurs: string | null
    name: string | null
    nillable: boolean
    // Has conflict: ref: string | null
    substitutionGroup: DomTokenList
    targetNamespace: string | null
    objectType: string | null
    anotation: XsdAnnotation
    simpleType: XsdSimpleType
    complexType: XsdComplexType

    // Owm methods of GXml-0.20.GXml.XsdElement

    get_abstract(): boolean
    set_abstract(value: boolean): void
    get_block(): string
    set_block(value: string): void
    get_default(): string
    set_default(value: string): void
    get_final(): string
    set_final(value: string): void
    get_fixed(): string
    set_fixed(value: string): void
    get_form(): string
    set_form(value: string): void
    get_max_occurs(): string
    set_max_occurs(value: string): void
    get_min_occurs(): string
    set_min_occurs(value: string): void
    get_name(): string
    set_name(value: string): void
    get_nillable(): boolean
    set_nillable(value: boolean): void
    get_ref(): string
    set_ref(value: string): void
    get_substitution_group(): DomTokenList
    set_substitution_group(value: DomTokenList): void
    get_target_namespace(): string
    set_target_namespace(value: string): void
    get_object_type(): string
    set_object_type(value: string): void
    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void
    get_simple_type(): XsdSimpleType
    set_simple_type(value: XsdSimpleType): void
    get_complex_type(): XsdComplexType
    set_complex_type(value: XsdComplexType): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdElement

    connect(sigName: "notify::abstract", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abstract", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::default", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::final", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::final", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::form", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::max-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-occurs", ...args: any[]): void
    connect(sigName: "notify::min-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-occurs", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-occurs", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nillable", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nillable", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nillable", ...args: any[]): void
    connect(sigName: "notify::ref", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ref", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ref", ...args: any[]): void
    connect(sigName: "notify::substitution-group", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::substitution-group", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::substitution-group", ...args: any[]): void
    connect(sigName: "notify::target-namespace", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target-namespace", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target-namespace", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::complex-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::complex-type", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::complex-type", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdElement extends Element {

    // Own properties of GXml-0.20.GXml.XsdElement

    static name: string
    static $gtype: GObject.GType<XsdElement>

    // Constructors of GXml-0.20.GXml.XsdElement

    constructor(config?: XsdElement.ConstructorProperties) 
    constructor() 
    static new(): XsdElement

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdElement.ConstructorProperties): void
}

export module XsdAnnotation {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {
    }

}

export interface XsdAnnotation {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdAnnotation

    connect(sigName: "notify::parse-children", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdAnnotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdAnnotation extends Element {

    // Own properties of GXml-0.20.GXml.XsdAnnotation

    static name: string
    static $gtype: GObject.GType<XsdAnnotation>

    // Constructors of GXml-0.20.GXml.XsdAnnotation

    constructor(config?: XsdAnnotation.ConstructorProperties) 
    constructor() 
    static new(): XsdAnnotation

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdAnnotation.ConstructorProperties): void
}

export module XsdBaseType {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdBaseType

        anotation?: XsdAnnotation | null
    }

}

export interface XsdBaseType {

    // Own properties of GXml-0.20.GXml.XsdBaseType

    anotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdBaseType

    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdBaseType

    connect(sigName: "notify::anotation", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdBaseType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdBaseType extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseType

    static name: string
    static $gtype: GObject.GType<XsdBaseType>

    // Constructors of GXml-0.20.GXml.XsdBaseType

    constructor(config?: XsdBaseType.ConstructorProperties) 
    constructor() 
    static new(): XsdBaseType

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseType.ConstructorProperties): void
}

export module XsdBaseContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdBaseContent

        anotation?: XsdAnnotation | null
    }

}

export interface XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdBaseContent

    anotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdBaseContent

    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdBaseContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdBaseContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdBaseContent extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseContent

    static name: string
    static $gtype: GObject.GType<XsdBaseContent>

    // Constructors of GXml-0.20.GXml.XsdBaseContent

    constructor(config?: XsdBaseContent.ConstructorProperties) 
    constructor() 
    static new(): XsdBaseContent

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseContent.ConstructorProperties): void
}

export module XsdSimpleContent {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseContent.ConstructorProperties {
    }

}

export interface XsdSimpleContent {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdSimpleContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdSimpleContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdSimpleContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdSimpleContent

    static name: string
    static $gtype: GObject.GType<XsdSimpleContent>

    // Constructors of GXml-0.20.GXml.XsdSimpleContent

    constructor(config?: XsdSimpleContent.ConstructorProperties) 
    constructor() 
    static new(): XsdSimpleContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdSimpleContent.ConstructorProperties): void
}

export module XsdComplexContent {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseContent.ConstructorProperties {
    }

}

export interface XsdComplexContent {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdComplexContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdComplexContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdComplexContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdComplexContent

    static name: string
    static $gtype: GObject.GType<XsdComplexContent>

    // Constructors of GXml-0.20.GXml.XsdComplexContent

    constructor(config?: XsdComplexContent.ConstructorProperties) 
    constructor() 
    static new(): XsdComplexContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdComplexContent.ConstructorProperties): void
}

export module XsdOpenContent {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseContent.ConstructorProperties {
    }

}

export interface XsdOpenContent {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdOpenContent

    connect(sigName: "notify::anotation", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdOpenContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdOpenContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdOpenContent

    static name: string
    static $gtype: GObject.GType<XsdOpenContent>

    // Constructors of GXml-0.20.GXml.XsdOpenContent

    constructor(config?: XsdOpenContent.ConstructorProperties) 
    constructor() 
    static new(): XsdOpenContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdOpenContent.ConstructorProperties): void
}

export module XsdBaseAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdBaseAttribute

        anotation?: XsdAnnotation | null
    }

}

export interface XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdBaseAttribute

    anotation: XsdAnnotation

    // Owm methods of GXml-0.20.GXml.XsdBaseAttribute

    get_anotation(): XsdAnnotation
    set_anotation(value: XsdAnnotation): void

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdBaseAttribute

    connect(sigName: "notify::anotation", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdBaseAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdBaseAttribute extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseAttribute

    static name: string
    static $gtype: GObject.GType<XsdBaseAttribute>

    // Constructors of GXml-0.20.GXml.XsdBaseAttribute

    constructor(config?: XsdBaseAttribute.ConstructorProperties) 
    constructor() 
    static new(): XsdBaseAttribute

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseAttribute.ConstructorProperties): void
}

export module XsdAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseAttribute.ConstructorProperties {
    }

}

export interface XsdAttribute {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdAttribute

    connect(sigName: "notify::anotation", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdAttribute extends XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdAttribute

    static name: string
    static $gtype: GObject.GType<XsdAttribute>

    // Constructors of GXml-0.20.GXml.XsdAttribute

    constructor(config?: XsdAttribute.ConstructorProperties) 
    constructor() 
    static new(): XsdAttribute

    // Overloads of new

    static new(): XsdBaseAttribute
    static new(): Element
    static new(): Node
    _init(config?: XsdAttribute.ConstructorProperties): void
}

export module XsdAttributeGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseAttribute.ConstructorProperties {
    }

}

export interface XsdAttributeGroup {

    // Conflicting methods

    set_attribute(name: string, value: string): void
    set_attribute(name: string, val: string): boolean

    // Overloads of set_attribute

    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    remove_attribute(name: string): boolean

    // Overloads of remove_attribute

    remove_attribute(name: string): void
    vfunc_set_attribute(name: string, value: string): void
    vfunc_set_attribute(name: string, val: string): boolean

    // Overloads of vfunc_set_attribute

    vfunc_set_attribute(name: string, value: string): void
    vfunc_remove_attribute(name: string): void
    vfunc_remove_attribute(name: string): boolean

    // Overloads of vfunc_remove_attribute

    vfunc_remove_attribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdAttributeGroup

    connect(sigName: "notify::anotation", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anotation", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parse-children", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unparsed", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-buffer", callback: (($obj: XsdAttributeGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdAttributeGroup extends XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroup

    static name: string
    static $gtype: GObject.GType<XsdAttributeGroup>

    // Constructors of GXml-0.20.GXml.XsdAttributeGroup

    constructor(config?: XsdAttributeGroup.ConstructorProperties) 
    constructor() 
    static new(): XsdAttributeGroup

    // Overloads of new

    static new(): XsdBaseAttribute
    static new(): Element
    static new(): Node
    _init(config?: XsdAttributeGroup.ConstructorProperties): void
}

export module XsdList {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayList.ConstructorProperties {
    }

}

export interface XsdList {

    // Own properties of GXml-0.20.GXml.XsdList

    readonly length: number

    // Owm methods of GXml-0.20.GXml.XsdList

    get_length(): number
    remove(index: number): void
    index_of(element: DomElement): number

    // Class property signals of GXml-0.20.GXml.XsdList

    connect(sigName: "notify::length", callback: (($obj: XsdList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdList extends ArrayList {

    // Own properties of GXml-0.20.GXml.XsdList

    static name: string
    static $gtype: GObject.GType<XsdList>

    // Constructors of GXml-0.20.GXml.XsdList

    constructor(config?: XsdList.ConstructorProperties) 
    constructor() 
    static new(): XsdList

    // Overloads of new

    static new(): ArrayList
    _init(config?: XsdList.ConstructorProperties): void
}

export module XsdListElements {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListElements {

    // Class property signals of GXml-0.20.GXml.XsdListElements

    connect(sigName: "notify::length", callback: (($obj: XsdListElements, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListElements, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdListElements extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListElements

    static name: string
    static $gtype: GObject.GType<XsdListElements>

    // Constructors of GXml-0.20.GXml.XsdListElements

    constructor(config?: XsdListElements.ConstructorProperties) 
    constructor() 
    static new(): XsdListElements

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListElements.ConstructorProperties): void
}

export module XsdListSimpleTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListSimpleTypes {

    // Class property signals of GXml-0.20.GXml.XsdListSimpleTypes

    connect(sigName: "notify::length", callback: (($obj: XsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListSimpleTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdListSimpleTypes extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypes

    static name: string
    static $gtype: GObject.GType<XsdListSimpleTypes>

    // Constructors of GXml-0.20.GXml.XsdListSimpleTypes

    constructor(config?: XsdListSimpleTypes.ConstructorProperties) 
    constructor() 
    static new(): XsdListSimpleTypes

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListSimpleTypes.ConstructorProperties): void
}

export module XsdListComplexTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListComplexTypes {

    // Class property signals of GXml-0.20.GXml.XsdListComplexTypes

    connect(sigName: "notify::length", callback: (($obj: XsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListComplexTypes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdListComplexTypes extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypes

    static name: string
    static $gtype: GObject.GType<XsdListComplexTypes>

    // Constructors of GXml-0.20.GXml.XsdListComplexTypes

    constructor(config?: XsdListComplexTypes.ConstructorProperties) 
    constructor() 
    static new(): XsdListComplexTypes

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListComplexTypes.ConstructorProperties): void
}

export module XsdListTypeRestrictionEnumerations {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListTypeRestrictionEnumerations {

    // Class property signals of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    connect(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionEnumerations, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdListTypeRestrictionEnumerations extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    static name: string
    static $gtype: GObject.GType<XsdListTypeRestrictionEnumerations>

    // Constructors of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    constructor(config?: XsdListTypeRestrictionEnumerations.ConstructorProperties) 
    constructor() 
    static new(): XsdListTypeRestrictionEnumerations

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListTypeRestrictionEnumerations.ConstructorProperties): void
}

export module XsdListTypeRestrictionWhiteSpaces {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListTypeRestrictionWhiteSpaces {

    // Class property signals of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    connect(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: XsdListTypeRestrictionWhiteSpaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XsdListTypeRestrictionWhiteSpaces extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    static name: string
    static $gtype: GObject.GType<XsdListTypeRestrictionWhiteSpaces>

    // Constructors of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    constructor(config?: XsdListTypeRestrictionWhiteSpaces.ConstructorProperties) 
    constructor() 
    static new(): XsdListTypeRestrictionWhiteSpaces

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListTypeRestrictionWhiteSpaces.ConstructorProperties): void
}

export module XText {

    // Constructor properties interface

    export interface ConstructorProperties extends DomText.ConstructorProperties, XCharacterData.ConstructorProperties {
    }

}

export interface XText extends DomText {

    // Conflicting methods

    get_data(): string | null

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string): any | null
    set_data(value: string): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: any | null): void

    // Class property signals of GXml-0.20.GXml.XText

    connect(sigName: "notify::str", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-element", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-content", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-element-sibling", callback: (($obj: XText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class XText extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XText

    static name: string
    static $gtype: GObject.GType<XText>

    // Constructors of GXml-0.20.GXml.XText

    constructor(config?: XText.ConstructorProperties) 
    constructor(doc: XDocument, node: any | null) 
    static new(doc: XDocument, node: any | null): XText

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XText.ConstructorProperties): void
}

export interface ArrayListClass {
}

export abstract class ArrayListClass {

    // Own properties of GXml-0.20.GXml.ArrayListClass

    static name: string
}

export interface ArrayListPrivate {
}

export class ArrayListPrivate {

    // Own properties of GXml-0.20.GXml.ArrayListPrivate

    static name: string
}

export interface AttrClass {
}

export abstract class AttrClass {

    // Own properties of GXml-0.20.GXml.AttrClass

    static name: string
}

export interface AttrPrivate {
}

export class AttrPrivate {

    // Own properties of GXml-0.20.GXml.AttrPrivate

    static name: string
}

export interface BaseCollectionClass {

    // Own fields of GXml-0.20.GXml.BaseCollectionClass

    validate_append: (self: BaseCollection, index: number, element: DomElement) => boolean
    clear: (self: BaseCollection) => void
}

export abstract class BaseCollectionClass {

    // Own properties of GXml-0.20.GXml.BaseCollectionClass

    static name: string
}

export interface BaseCollectionPrivate {
}

export class BaseCollectionPrivate {

    // Own properties of GXml-0.20.GXml.BaseCollectionPrivate

    static name: string
}

export interface CssSelectorClass {
}

export abstract class CssSelectorClass {

    // Own properties of GXml-0.20.GXml.CssSelectorClass

    static name: string
}

export interface CssSelectorPrivate {
}

export class CssSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssSelectorPrivate

    static name: string
}

export interface CssElementSelectorClass {
}

export abstract class CssElementSelectorClass {

    // Own properties of GXml-0.20.GXml.CssElementSelectorClass

    static name: string
}

export interface CssElementSelectorPrivate {
}

export class CssElementSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssElementSelectorPrivate

    static name: string
}

export interface CssAttributeSelectorClass {
}

export abstract class CssAttributeSelectorClass {

    // Own properties of GXml-0.20.GXml.CssAttributeSelectorClass

    static name: string
}

export interface CssAttributeSelectorPrivate {
}

export class CssAttributeSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssAttributeSelectorPrivate

    static name: string
}

export interface CssNotSelectorClass {
}

export abstract class CssNotSelectorClass {

    // Own properties of GXml-0.20.GXml.CssNotSelectorClass

    static name: string
}

export interface CssNotSelectorPrivate {
}

export class CssNotSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssNotSelectorPrivate

    static name: string
}

export interface CssSelectorParserClass {
}

export abstract class CssSelectorParserClass {

    // Own properties of GXml-0.20.GXml.CssSelectorParserClass

    static name: string
}

export interface CssSelectorParserPrivate {
}

export class CssSelectorParserPrivate {

    // Own properties of GXml-0.20.GXml.CssSelectorParserPrivate

    static name: string
}

export interface DocumentClass {
}

export abstract class DocumentClass {

    // Own properties of GXml-0.20.GXml.DocumentClass

    static name: string
}

export interface DocumentPrivate {
}

export class DocumentPrivate {

    // Own properties of GXml-0.20.GXml.DocumentPrivate

    static name: string
}

export interface ImplementationClass {
}

export abstract class ImplementationClass {

    // Own properties of GXml-0.20.GXml.ImplementationClass

    static name: string
}

export interface ImplementationPrivate {
}

export class ImplementationPrivate {

    // Own properties of GXml-0.20.GXml.ImplementationPrivate

    static name: string
}

export interface DocumentTypeClass {
}

export abstract class DocumentTypeClass {

    // Own properties of GXml-0.20.GXml.DocumentTypeClass

    static name: string
}

export interface DocumentTypePrivate {
}

export class DocumentTypePrivate {

    // Own properties of GXml-0.20.GXml.DocumentTypePrivate

    static name: string
}

export interface DocumentFragmentClass {
}

export abstract class DocumentFragmentClass {

    // Own properties of GXml-0.20.GXml.DocumentFragmentClass

    static name: string
}

export interface DocumentFragmentPrivate {
}

export class DocumentFragmentPrivate {

    // Own properties of GXml-0.20.GXml.DocumentFragmentPrivate

    static name: string
}

export interface DomNodeFilterClass {
}

export abstract class DomNodeFilterClass {

    // Own properties of GXml-0.20.GXml.DomNodeFilterClass

    static name: string
}

export interface DomNodeFilterPrivate {
}

export class DomNodeFilterPrivate {

    // Own properties of GXml-0.20.GXml.DomNodeFilterPrivate

    static name: string
}

export interface DomElementListClass {
}

export abstract class DomElementListClass {

    // Own properties of GXml-0.20.GXml.DomElementListClass

    static name: string
}

export interface DomElementListPrivate {
}

export class DomElementListPrivate {

    // Own properties of GXml-0.20.GXml.DomElementListPrivate

    static name: string
}

export interface DomEventInitClass {
}

export abstract class DomEventInitClass {

    // Own properties of GXml-0.20.GXml.DomEventInitClass

    static name: string
}

export interface DomEventInitPrivate {
}

export class DomEventInitPrivate {

    // Own properties of GXml-0.20.GXml.DomEventInitPrivate

    static name: string
}

export interface DomCustomEventInitClass {
}

export abstract class DomCustomEventInitClass {

    // Own properties of GXml-0.20.GXml.DomCustomEventInitClass

    static name: string
}

export interface DomCustomEventInitPrivate {
}

export class DomCustomEventInitPrivate {

    // Own properties of GXml-0.20.GXml.DomCustomEventInitPrivate

    static name: string
}

export interface DomTimeStampClass {
}

export abstract class DomTimeStampClass {

    // Own properties of GXml-0.20.GXml.DomTimeStampClass

    static name: string
}

export interface DomTimeStampPrivate {
}

export class DomTimeStampPrivate {

    // Own properties of GXml-0.20.GXml.DomTimeStampPrivate

    static name: string
}

export interface DomMutationObserverInitClass {
}

export abstract class DomMutationObserverInitClass {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInitClass

    static name: string
}

export interface DomMutationObserverInitPrivate {
}

export class DomMutationObserverInitPrivate {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInitPrivate

    static name: string
}

export interface DomErrorNameClass {
}

export abstract class DomErrorNameClass {

    // Own properties of GXml-0.20.GXml.DomErrorNameClass

    static name: string
}

export interface DomErrorNamePrivate {
}

export class DomErrorNamePrivate {

    // Own properties of GXml-0.20.GXml.DomErrorNamePrivate

    static name: string
}

export interface ElementClass {
}

export abstract class ElementClass {

    // Own properties of GXml-0.20.GXml.ElementClass

    static name: string
}

export interface ElementPrivate {
}

export class ElementPrivate {

    // Own properties of GXml-0.20.GXml.ElementPrivate

    static name: string
}

export interface ElementAttributesClass {
}

export abstract class ElementAttributesClass {

    // Own properties of GXml-0.20.GXml.ElementAttributesClass

    static name: string
}

export interface ElementAttributesPrivate {
}

export class ElementAttributesPrivate {

    // Own properties of GXml-0.20.GXml.ElementAttributesPrivate

    static name: string
}

export interface EnumerationClass {
}

export abstract class EnumerationClass {

    // Own properties of GXml-0.20.GXml.EnumerationClass

    static name: string
}

export interface EnumerationPrivate {
}

export class EnumerationPrivate {

    // Own properties of GXml-0.20.GXml.EnumerationPrivate

    static name: string
}

export interface EventClass {
}

export abstract class EventClass {

    // Own properties of GXml-0.20.GXml.EventClass

    static name: string
}

export interface EventPrivate {
}

export class EventPrivate {

    // Own properties of GXml-0.20.GXml.EventPrivate

    static name: string
}

export interface CustomEventClass {
}

export abstract class CustomEventClass {

    // Own properties of GXml-0.20.GXml.CustomEventClass

    static name: string
}

export interface CustomEventPrivate {
}

export class CustomEventPrivate {

    // Own properties of GXml-0.20.GXml.CustomEventPrivate

    static name: string
}

export interface HashMapClass {
}

export abstract class HashMapClass {

    // Own properties of GXml-0.20.GXml.HashMapClass

    static name: string
}

export interface HashMapPrivate {
}

export class HashMapPrivate {

    // Own properties of GXml-0.20.GXml.HashMapPrivate

    static name: string
}

export interface HashPairedMapClass {
}

export abstract class HashPairedMapClass {

    // Own properties of GXml-0.20.GXml.HashPairedMapClass

    static name: string
}

export interface HashPairedMapPrivate {
}

export class HashPairedMapPrivate {

    // Own properties of GXml-0.20.GXml.HashPairedMapPrivate

    static name: string
}

export interface HashThreeMapClass {
}

export abstract class HashThreeMapClass {

    // Own properties of GXml-0.20.GXml.HashThreeMapClass

    static name: string
}

export interface HashThreeMapPrivate {
}

export class HashThreeMapPrivate {

    // Own properties of GXml-0.20.GXml.HashThreeMapPrivate

    static name: string
}

export interface HTMLCollectionClass {
}

export abstract class HTMLCollectionClass {

    // Own properties of GXml-0.20.GXml.HTMLCollectionClass

    static name: string
}

export interface HTMLCollectionPrivate {
}

export class HTMLCollectionPrivate {

    // Own properties of GXml-0.20.GXml.HTMLCollectionPrivate

    static name: string
}

export interface HtmlDocumentClass {
}

export abstract class HtmlDocumentClass {

    // Own properties of GXml-0.20.GXml.HtmlDocumentClass

    static name: string
}

export interface HtmlDocumentPrivate {
}

export class HtmlDocumentPrivate {

    // Own properties of GXml-0.20.GXml.HtmlDocumentPrivate

    static name: string
}

export interface HtmlElementClass {
}

export abstract class HtmlElementClass {

    // Own properties of GXml-0.20.GXml.HtmlElementClass

    static name: string
}

export interface HtmlElementPrivate {
}

export class HtmlElementPrivate {

    // Own properties of GXml-0.20.GXml.HtmlElementPrivate

    static name: string
}

export interface LXPathObjectClass {
}

export abstract class LXPathObjectClass {

    // Own properties of GXml-0.20.GXml.LXPathObjectClass

    static name: string
}

export interface LXPathObjectPrivate {
}

export class LXPathObjectPrivate {

    // Own properties of GXml-0.20.GXml.LXPathObjectPrivate

    static name: string
}

export interface NodeClass {
}

export abstract class NodeClass {

    // Own properties of GXml-0.20.GXml.NodeClass

    static name: string
}

export interface NodePrivate {
}

export class NodePrivate {

    // Own properties of GXml-0.20.GXml.NodePrivate

    static name: string
}

export interface NodeListClass {
}

export abstract class NodeListClass {

    // Own properties of GXml-0.20.GXml.NodeListClass

    static name: string
}

export interface NodeListPrivate {
}

export class NodeListPrivate {

    // Own properties of GXml-0.20.GXml.NodeListPrivate

    static name: string
}

export interface NodeIteratorClass {
}

export abstract class NodeIteratorClass {

    // Own properties of GXml-0.20.GXml.NodeIteratorClass

    static name: string
}

export interface NodeIteratorPrivate {
}

export class NodeIteratorPrivate {

    // Own properties of GXml-0.20.GXml.NodeIteratorPrivate

    static name: string
}

export interface BasePropertyClass {

    // Own fields of GXml-0.20.GXml.BasePropertyClass

    validate_value: (self: BaseProperty, val: string | null) => boolean
}

export abstract class BasePropertyClass {

    // Own properties of GXml-0.20.GXml.BasePropertyClass

    static name: string
}

export interface BasePropertyPrivate {
}

export class BasePropertyPrivate {

    // Own properties of GXml-0.20.GXml.BasePropertyPrivate

    static name: string
}

export interface StringClass {
}

export abstract class StringClass {

    // Own properties of GXml-0.20.GXml.StringClass

    static name: string
}

export interface StringPrivate {
}

export class StringPrivate {

    // Own properties of GXml-0.20.GXml.StringPrivate

    static name: string
}

export interface ArrayStringClass {
}

export abstract class ArrayStringClass {

    // Own properties of GXml-0.20.GXml.ArrayStringClass

    static name: string
}

export interface ArrayStringPrivate {
}

export class ArrayStringPrivate {

    // Own properties of GXml-0.20.GXml.ArrayStringPrivate

    static name: string
}

export interface XsdArrayStringClass {
}

export abstract class XsdArrayStringClass {

    // Own properties of GXml-0.20.GXml.XsdArrayStringClass

    static name: string
}

export interface XsdArrayStringPrivate {
}

export class XsdArrayStringPrivate {

    // Own properties of GXml-0.20.GXml.XsdArrayStringPrivate

    static name: string
}

export interface DoubleClass {
}

export abstract class DoubleClass {

    // Own properties of GXml-0.20.GXml.DoubleClass

    static name: string
}

export interface DoublePrivate {
}

export class DoublePrivate {

    // Own properties of GXml-0.20.GXml.DoublePrivate

    static name: string
}

export interface FloatClass {
}

export abstract class FloatClass {

    // Own properties of GXml-0.20.GXml.FloatClass

    static name: string
}

export interface FloatPrivate {
}

export class FloatPrivate {

    // Own properties of GXml-0.20.GXml.FloatPrivate

    static name: string
}

export interface IntClass {
}

export abstract class IntClass {

    // Own properties of GXml-0.20.GXml.IntClass

    static name: string
}

export interface IntPrivate {
}

export class IntPrivate {

    // Own properties of GXml-0.20.GXml.IntPrivate

    static name: string
}

export interface BooleanClass {
}

export abstract class BooleanClass {

    // Own properties of GXml-0.20.GXml.BooleanClass

    static name: string
}

export interface BooleanPrivate {
}

export class BooleanPrivate {

    // Own properties of GXml-0.20.GXml.BooleanPrivate

    static name: string
}

export interface EnumClass {
}

export abstract class EnumClass {

    // Own properties of GXml-0.20.GXml.EnumClass

    static name: string
}

export interface EnumPrivate {
}

export class EnumPrivate {

    // Own properties of GXml-0.20.GXml.EnumPrivate

    static name: string
}

export interface DateClass {
}

export abstract class DateClass {

    // Own properties of GXml-0.20.GXml.DateClass

    static name: string
}

export interface DatePrivate {
}

export class DatePrivate {

    // Own properties of GXml-0.20.GXml.DatePrivate

    static name: string
}

export interface DateTimeClass {
}

export abstract class DateTimeClass {

    // Own properties of GXml-0.20.GXml.DateTimeClass

    static name: string
}

export interface DateTimePrivate {
}

export class DateTimePrivate {

    // Own properties of GXml-0.20.GXml.DateTimePrivate

    static name: string
}

export interface RangeClass {
}

export abstract class RangeClass {

    // Own properties of GXml-0.20.GXml.RangeClass

    static name: string
}

export interface RangePrivate {
}

export class RangePrivate {

    // Own properties of GXml-0.20.GXml.RangePrivate

    static name: string
}

export interface SettableTokenListClass {
}

export abstract class SettableTokenListClass {

    // Own properties of GXml-0.20.GXml.SettableTokenListClass

    static name: string
}

export interface SettableTokenListPrivate {
}

export class SettableTokenListPrivate {

    // Own properties of GXml-0.20.GXml.SettableTokenListPrivate

    static name: string
}

export interface StringRefClass {
}

export abstract class StringRefClass {

    // Own properties of GXml-0.20.GXml.StringRefClass

    static name: string
}

export interface StringRefPrivate {
}

export class StringRefPrivate {

    // Own properties of GXml-0.20.GXml.StringRefPrivate

    static name: string
}

export interface CharacterDataClass {
}

export abstract class CharacterDataClass {

    // Own properties of GXml-0.20.GXml.CharacterDataClass

    static name: string
}

export interface CharacterDataPrivate {
}

export class CharacterDataPrivate {

    // Own properties of GXml-0.20.GXml.CharacterDataPrivate

    static name: string
}

export interface TextClass {
}

export abstract class TextClass {

    // Own properties of GXml-0.20.GXml.TextClass

    static name: string
}

export interface TextPrivate {
}

export class TextPrivate {

    // Own properties of GXml-0.20.GXml.TextPrivate

    static name: string
}

export interface ProcessingInstructionClass {
}

export abstract class ProcessingInstructionClass {

    // Own properties of GXml-0.20.GXml.ProcessingInstructionClass

    static name: string
}

export interface ProcessingInstructionPrivate {
}

export class ProcessingInstructionPrivate {

    // Own properties of GXml-0.20.GXml.ProcessingInstructionPrivate

    static name: string
}

export interface CommentClass {
}

export abstract class CommentClass {

    // Own properties of GXml-0.20.GXml.CommentClass

    static name: string
}

export interface CommentPrivate {
}

export class CommentPrivate {

    // Own properties of GXml-0.20.GXml.CommentPrivate

    static name: string
}

export interface TokenListClass {
}

export abstract class TokenListClass {

    // Own properties of GXml-0.20.GXml.TokenListClass

    static name: string
}

export interface TokenListPrivate {
}

export class TokenListPrivate {

    // Own properties of GXml-0.20.GXml.TokenListPrivate

    static name: string
}

export interface TreeWalkerClass {
}

export abstract class TreeWalkerClass {

    // Own properties of GXml-0.20.GXml.TreeWalkerClass

    static name: string
}

export interface TreeWalkerPrivate {
}

export class TreeWalkerPrivate {

    // Own properties of GXml-0.20.GXml.TreeWalkerPrivate

    static name: string
}

export interface XAttributeClass {
}

export abstract class XAttributeClass {

    // Own properties of GXml-0.20.GXml.XAttributeClass

    static name: string
}

export interface XAttributePrivate {
}

export class XAttributePrivate {

    // Own properties of GXml-0.20.GXml.XAttributePrivate

    static name: string
}

export interface XCharacterDataClass {
}

export abstract class XCharacterDataClass {

    // Own properties of GXml-0.20.GXml.XCharacterDataClass

    static name: string
}

export interface XCharacterDataPrivate {
}

export class XCharacterDataPrivate {

    // Own properties of GXml-0.20.GXml.XCharacterDataPrivate

    static name: string
}

export interface XChildNodeClass {
}

export abstract class XChildNodeClass {

    // Own properties of GXml-0.20.GXml.XChildNodeClass

    static name: string
}

export interface XChildNodePrivate {
}

export class XChildNodePrivate {

    // Own properties of GXml-0.20.GXml.XChildNodePrivate

    static name: string
}

export interface XNonDocumentChildNodeClass {
}

export abstract class XNonDocumentChildNodeClass {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNodeClass

    static name: string
}

export interface XNonDocumentChildNodePrivate {
}

export class XNonDocumentChildNodePrivate {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNodePrivate

    static name: string
}

export interface XCommentClass {
}

export abstract class XCommentClass {

    // Own properties of GXml-0.20.GXml.XCommentClass

    static name: string
}

export interface XCommentPrivate {
}

export class XCommentPrivate {

    // Own properties of GXml-0.20.GXml.XCommentPrivate

    static name: string
}

export interface XDocumentClass {

    // Own fields of GXml-0.20.GXml.XDocumentClass

    save: (self: XDocument, cancellable: Gio.Cancellable | null) => boolean
    save_as: (self: XDocument, f: Gio.File, cancellable: Gio.Cancellable | null) => boolean
}

export abstract class XDocumentClass {

    // Own properties of GXml-0.20.GXml.XDocumentClass

    static name: string
}

export interface XDocumentPrivate {
}

export class XDocumentPrivate {

    // Own properties of GXml-0.20.GXml.XDocumentPrivate

    static name: string
}

export interface XElementClass {
}

export abstract class XElementClass {

    // Own properties of GXml-0.20.GXml.XElementClass

    static name: string
}

export interface XElementPrivate {
}

export class XElementPrivate {

    // Own properties of GXml-0.20.GXml.XElementPrivate

    static name: string
}

export interface XHashMapAttrClass {
}

export abstract class XHashMapAttrClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrClass

    static name: string
}

export interface XHashMapAttrPrivate {
}

export class XHashMapAttrPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrPrivate

    static name: string
}

export interface XHashMapAttrEntryClass {
}

export abstract class XHashMapAttrEntryClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntryClass

    static name: string
}

export interface XHashMapAttrEntryPrivate {
}

export class XHashMapAttrEntryPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntryPrivate

    static name: string
}

export interface XHashMapAttrIteratorClass {
}

export abstract class XHashMapAttrIteratorClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIteratorClass

    static name: string
}

export interface XHashMapAttrIteratorPrivate {
}

export class XHashMapAttrIteratorPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIteratorPrivate

    static name: string
}

export interface XHtmlDocumentClass {
}

export abstract class XHtmlDocumentClass {

    // Own properties of GXml-0.20.GXml.XHtmlDocumentClass

    static name: string
}

export interface XHtmlDocumentPrivate {
}

export class XHtmlDocumentPrivate {

    // Own properties of GXml-0.20.GXml.XHtmlDocumentPrivate

    static name: string
}

export interface XListChildrenClass {
}

export abstract class XListChildrenClass {

    // Own properties of GXml-0.20.GXml.XListChildrenClass

    static name: string
}

export interface XListChildrenPrivate {
}

export class XListChildrenPrivate {

    // Own properties of GXml-0.20.GXml.XListChildrenPrivate

    static name: string
}

export interface XListChildrenIteratorClass {
}

export abstract class XListChildrenIteratorClass {

    // Own properties of GXml-0.20.GXml.XListChildrenIteratorClass

    static name: string
}

export interface XListChildrenIteratorPrivate {
}

export class XListChildrenIteratorPrivate {

    // Own properties of GXml-0.20.GXml.XListChildrenIteratorPrivate

    static name: string
}

export interface XNodeClass {

    // Own fields of GXml-0.20.GXml.XNodeClass

    set_namespace: (self: XNode, uri: string, prefix: string | null) => boolean
    to_string: (self: XNode) => string | null
}

export abstract class XNodeClass {

    // Own properties of GXml-0.20.GXml.XNodeClass

    static name: string
}

export interface XNodePrivate {
}

export class XNodePrivate {

    // Own properties of GXml-0.20.GXml.XNodePrivate

    static name: string
}

export interface XParserClass {
}

export abstract class XParserClass {

    // Own properties of GXml-0.20.GXml.XParserClass

    static name: string
}

export interface XParserPrivate {
}

export class XParserPrivate {

    // Own properties of GXml-0.20.GXml.XParserPrivate

    static name: string
}

export interface XProcessingInstructionClass {
}

export abstract class XProcessingInstructionClass {

    // Own properties of GXml-0.20.GXml.XProcessingInstructionClass

    static name: string
}

export interface XProcessingInstructionPrivate {
}

export class XProcessingInstructionPrivate {

    // Own properties of GXml-0.20.GXml.XProcessingInstructionPrivate

    static name: string
}

export interface XsdSchemaClass {
}

export abstract class XsdSchemaClass {

    // Own properties of GXml-0.20.GXml.XsdSchemaClass

    static name: string
}

export interface XsdSchemaPrivate {
}

export class XsdSchemaPrivate {

    // Own properties of GXml-0.20.GXml.XsdSchemaPrivate

    static name: string
}

export interface XsdSimpleTypeClass {
}

export abstract class XsdSimpleTypeClass {

    // Own properties of GXml-0.20.GXml.XsdSimpleTypeClass

    static name: string
}

export interface XsdSimpleTypePrivate {
}

export class XsdSimpleTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdSimpleTypePrivate

    static name: string
}

export interface XsdTypeDefinitionClass {
}

export abstract class XsdTypeDefinitionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinitionClass

    static name: string
}

export interface XsdTypeDefinitionPrivate {
}

export class XsdTypeDefinitionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinitionPrivate

    static name: string
}

export interface XsdTypeListClass {
}

export abstract class XsdTypeListClass {

    // Own properties of GXml-0.20.GXml.XsdTypeListClass

    static name: string
}

export interface XsdTypeListPrivate {
}

export class XsdTypeListPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeListPrivate

    static name: string
}

export interface XsdTypeUnionClass {
}

export abstract class XsdTypeUnionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeUnionClass

    static name: string
}

export interface XsdTypeUnionPrivate {
}

export class XsdTypeUnionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeUnionPrivate

    static name: string
}

export interface XsdTypeRestrictionClass {
}

export abstract class XsdTypeRestrictionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionClass

    static name: string
}

export interface XsdTypeRestrictionPrivate {
}

export class XsdTypeRestrictionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPrivate

    static name: string
}

export interface XsdTypeRestrictionDefClass {
}

export abstract class XsdTypeRestrictionDefClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDefClass

    static name: string
}

export interface XsdTypeRestrictionDefPrivate {
}

export class XsdTypeRestrictionDefPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDefPrivate

    static name: string
}

export interface XsdTypeRestrictionMinExclusiveClass {
}

export abstract class XsdTypeRestrictionMinExclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMinExclusivePrivate {
}

export class XsdTypeRestrictionMinExclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionMinInclusiveClass {
}

export abstract class XsdTypeRestrictionMinInclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMinInclusivePrivate {
}

export class XsdTypeRestrictionMinInclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionMaxExclusiveClass {
}

export abstract class XsdTypeRestrictionMaxExclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMaxExclusivePrivate {
}

export class XsdTypeRestrictionMaxExclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionMaxInclusiveClass {
}

export abstract class XsdTypeRestrictionMaxInclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMaxInclusivePrivate {
}

export class XsdTypeRestrictionMaxInclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionTotalDigitsClass {
}

export abstract class XsdTypeRestrictionTotalDigitsClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigitsClass

    static name: string
}

export interface XsdTypeRestrictionTotalDigitsPrivate {
}

export class XsdTypeRestrictionTotalDigitsPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigitsPrivate

    static name: string
}

export interface XsdTypeRestrictionFractionDigitsClass {
}

export abstract class XsdTypeRestrictionFractionDigitsClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigitsClass

    static name: string
}

export interface XsdTypeRestrictionFractionDigitsPrivate {
}

export class XsdTypeRestrictionFractionDigitsPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigitsPrivate

    static name: string
}

export interface XsdTypeRestrictionLengthClass {
}

export abstract class XsdTypeRestrictionLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLengthClass

    static name: string
}

export interface XsdTypeRestrictionLengthPrivate {
}

export class XsdTypeRestrictionLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLengthPrivate

    static name: string
}

export interface XsdTypeRestrictionMinLengthClass {
}

export abstract class XsdTypeRestrictionMinLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLengthClass

    static name: string
}

export interface XsdTypeRestrictionMinLengthPrivate {
}

export class XsdTypeRestrictionMinLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLengthPrivate

    static name: string
}

export interface XsdTypeRestrictionMaxLengthClass {
}

export abstract class XsdTypeRestrictionMaxLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLengthClass

    static name: string
}

export interface XsdTypeRestrictionMaxLengthPrivate {
}

export class XsdTypeRestrictionMaxLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLengthPrivate

    static name: string
}

export interface XsdTypeRestrictionEnumerationClass {
}

export abstract class XsdTypeRestrictionEnumerationClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumerationClass

    static name: string
}

export interface XsdTypeRestrictionEnumerationPrivate {
}

export class XsdTypeRestrictionEnumerationPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumerationPrivate

    static name: string
}

export interface XsdTypeRestrictionWhiteSpaceClass {
}

export abstract class XsdTypeRestrictionWhiteSpaceClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceClass

    static name: string
}

export interface XsdTypeRestrictionWhiteSpacePrivate {
}

export class XsdTypeRestrictionWhiteSpacePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpacePrivate

    static name: string
}

export interface XsdTypeRestrictionWhiteSpaceFixedClass {
}

export abstract class XsdTypeRestrictionWhiteSpaceFixedClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixedClass

    static name: string
}

export interface XsdTypeRestrictionWhiteSpaceFixedPrivate {
}

export class XsdTypeRestrictionWhiteSpaceFixedPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixedPrivate

    static name: string
}

export interface XsdTypeRestrictionPatternClass {
}

export abstract class XsdTypeRestrictionPatternClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPatternClass

    static name: string
}

export interface XsdTypeRestrictionPatternPrivate {
}

export class XsdTypeRestrictionPatternPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPatternPrivate

    static name: string
}

export interface XsdTypeRestrictionAssertionClass {
}

export abstract class XsdTypeRestrictionAssertionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertionClass

    static name: string
}

export interface XsdTypeRestrictionAssertionPrivate {
}

export class XsdTypeRestrictionAssertionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertionPrivate

    static name: string
}

export interface XsdTypeRestrictionExplicitTimezoneClass {
}

export abstract class XsdTypeRestrictionExplicitTimezoneClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezoneClass

    static name: string
}

export interface XsdTypeRestrictionExplicitTimezonePrivate {
}

export class XsdTypeRestrictionExplicitTimezonePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezonePrivate

    static name: string
}

export interface XsdComplexTypeClass {
}

export abstract class XsdComplexTypeClass {

    // Own properties of GXml-0.20.GXml.XsdComplexTypeClass

    static name: string
}

export interface XsdComplexTypePrivate {
}

export class XsdComplexTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdComplexTypePrivate

    static name: string
}

export interface XsdExtensionClass {
}

export abstract class XsdExtensionClass {

    // Own properties of GXml-0.20.GXml.XsdExtensionClass

    static name: string
}

export interface XsdExtensionPrivate {
}

export class XsdExtensionPrivate {

    // Own properties of GXml-0.20.GXml.XsdExtensionPrivate

    static name: string
}

export interface XsdElementClass {
}

export abstract class XsdElementClass {

    // Own properties of GXml-0.20.GXml.XsdElementClass

    static name: string
}

export interface XsdElementPrivate {
}

export class XsdElementPrivate {

    // Own properties of GXml-0.20.GXml.XsdElementPrivate

    static name: string
}

export interface XsdAnnotationClass {
}

export abstract class XsdAnnotationClass {

    // Own properties of GXml-0.20.GXml.XsdAnnotationClass

    static name: string
}

export interface XsdAnnotationPrivate {
}

export class XsdAnnotationPrivate {

    // Own properties of GXml-0.20.GXml.XsdAnnotationPrivate

    static name: string
}

export interface XsdBaseTypeClass {
}

export abstract class XsdBaseTypeClass {

    // Own properties of GXml-0.20.GXml.XsdBaseTypeClass

    static name: string
}

export interface XsdBaseTypePrivate {
}

export class XsdBaseTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseTypePrivate

    static name: string
}

export interface XsdBaseContentClass {
}

export abstract class XsdBaseContentClass {

    // Own properties of GXml-0.20.GXml.XsdBaseContentClass

    static name: string
}

export interface XsdBaseContentPrivate {
}

export class XsdBaseContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseContentPrivate

    static name: string
}

export interface XsdSimpleContentClass {
}

export abstract class XsdSimpleContentClass {

    // Own properties of GXml-0.20.GXml.XsdSimpleContentClass

    static name: string
}

export interface XsdSimpleContentPrivate {
}

export class XsdSimpleContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdSimpleContentPrivate

    static name: string
}

export interface XsdComplexContentClass {
}

export abstract class XsdComplexContentClass {

    // Own properties of GXml-0.20.GXml.XsdComplexContentClass

    static name: string
}

export interface XsdComplexContentPrivate {
}

export class XsdComplexContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdComplexContentPrivate

    static name: string
}

export interface XsdOpenContentClass {
}

export abstract class XsdOpenContentClass {

    // Own properties of GXml-0.20.GXml.XsdOpenContentClass

    static name: string
}

export interface XsdOpenContentPrivate {
}

export class XsdOpenContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdOpenContentPrivate

    static name: string
}

export interface XsdBaseAttributeClass {
}

export abstract class XsdBaseAttributeClass {

    // Own properties of GXml-0.20.GXml.XsdBaseAttributeClass

    static name: string
}

export interface XsdBaseAttributePrivate {
}

export class XsdBaseAttributePrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseAttributePrivate

    static name: string
}

export interface XsdAttributeClass {
}

export abstract class XsdAttributeClass {

    // Own properties of GXml-0.20.GXml.XsdAttributeClass

    static name: string
}

export interface XsdAttributePrivate {
}

export class XsdAttributePrivate {

    // Own properties of GXml-0.20.GXml.XsdAttributePrivate

    static name: string
}

export interface XsdAttributeGroupClass {
}

export abstract class XsdAttributeGroupClass {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroupClass

    static name: string
}

export interface XsdAttributeGroupPrivate {
}

export class XsdAttributeGroupPrivate {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroupPrivate

    static name: string
}

export interface XsdListClass {
}

export abstract class XsdListClass {

    // Own properties of GXml-0.20.GXml.XsdListClass

    static name: string
}

export interface XsdListPrivate {
}

export class XsdListPrivate {

    // Own properties of GXml-0.20.GXml.XsdListPrivate

    static name: string
}

export interface XsdListElementsClass {
}

export abstract class XsdListElementsClass {

    // Own properties of GXml-0.20.GXml.XsdListElementsClass

    static name: string
}

export interface XsdListElementsPrivate {
}

export class XsdListElementsPrivate {

    // Own properties of GXml-0.20.GXml.XsdListElementsPrivate

    static name: string
}

export interface XsdListSimpleTypesClass {
}

export abstract class XsdListSimpleTypesClass {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypesClass

    static name: string
}

export interface XsdListSimpleTypesPrivate {
}

export class XsdListSimpleTypesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypesPrivate

    static name: string
}

export interface XsdListComplexTypesClass {
}

export abstract class XsdListComplexTypesClass {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypesClass

    static name: string
}

export interface XsdListComplexTypesPrivate {
}

export class XsdListComplexTypesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypesPrivate

    static name: string
}

export interface XsdListTypeRestrictionEnumerationsClass {
}

export abstract class XsdListTypeRestrictionEnumerationsClass {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerationsClass

    static name: string
}

export interface XsdListTypeRestrictionEnumerationsPrivate {
}

export class XsdListTypeRestrictionEnumerationsPrivate {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerationsPrivate

    static name: string
}

export interface XsdListTypeRestrictionWhiteSpacesClass {
}

export abstract class XsdListTypeRestrictionWhiteSpacesClass {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpacesClass

    static name: string
}

export interface XsdListTypeRestrictionWhiteSpacesPrivate {
}

export class XsdListTypeRestrictionWhiteSpacesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpacesPrivate

    static name: string
}

export interface XTextClass {
}

export abstract class XTextClass {

    // Own properties of GXml-0.20.GXml.XTextClass

    static name: string
}

export interface XTextPrivate {
}

export class XTextPrivate {

    // Own properties of GXml-0.20.GXml.XTextPrivate

    static name: string
}

export interface CollectionIface {

    // Own fields of GXml-0.20.GXml.CollectionIface

    search: (self: Collection) => void
    get_item: (self: Collection, index: number) => DomElement | null
    append: (self: Collection, node: DomElement) => void
    initialize: (self: Collection, t: GObject.GType) => void
    create_item: (self: Collection) => DomElement | null
    validate_append: (self: Collection, index: number, element: DomElement) => boolean
    clear: (self: Collection) => void
    get_nodes_index: (self: Collection) => GLib.Queue
    get_element: (self: Collection) => DomElement
    set_element: (self: Collection, value: DomElement) => void
    get_items_name: (self: Collection) => string
    get_items_type: (self: Collection) => GObject.GType
    set_items_type: (self: Collection, value: GObject.GType) => void
    get_length: (self: Collection) => number
}

export abstract class CollectionIface {

    // Own properties of GXml-0.20.GXml.CollectionIface

    static name: string
}

export interface ListIface {
}

export abstract class ListIface {

    // Own properties of GXml-0.20.GXml.ListIface

    static name: string
}

export interface MappeableElementIface {

    // Own fields of GXml-0.20.GXml.MappeableElementIface

    get_map_key: (self: MappeableElement) => string | null
}

export abstract class MappeableElementIface {

    // Own properties of GXml-0.20.GXml.MappeableElementIface

    static name: string
}

export interface MapIface {

    // Own fields of GXml-0.20.GXml.MapIface

    item: (self: Map, key: string) => DomElement | null
    has_key: (self: Map, key: string) => boolean
    get_attribute_key: (self: Map) => string
    set_attribute_key: (self: Map, value: string) => void
    get_keys_set: (self: Map) => Gee.Set
}

export abstract class MapIface {

    // Own properties of GXml-0.20.GXml.MapIface

    static name: string
}

export interface MappeableElementPairKeyIface {

    // Own fields of GXml-0.20.GXml.MappeableElementPairKeyIface

    get_map_primary_key: (self: MappeableElementPairKey) => string | null
    get_map_secondary_key: (self: MappeableElementPairKey) => string | null
}

export abstract class MappeableElementPairKeyIface {

    // Own properties of GXml-0.20.GXml.MappeableElementPairKeyIface

    static name: string
}

export interface PairedMapIface {

    // Own fields of GXml-0.20.GXml.PairedMapIface

    item: (self: PairedMap, primary_key: string, secondary_key: string) => DomElement | null
    has_primary_key: (self: PairedMap, key: string) => boolean
    has_secondary_key: (self: PairedMap, pkey: string, key: string) => boolean
    secondary_keys_set: (self: PairedMap, pkey: string) => Gee.Set
    get_attribute_primary_key: (self: PairedMap) => string
    set_attribute_primary_key: (self: PairedMap, value: string) => void
    get_attribute_secondary_key: (self: PairedMap) => string
    set_attribute_secondary_key: (self: PairedMap, value: string) => void
    get_primary_keys_set: (self: PairedMap) => Gee.Set
}

export abstract class PairedMapIface {

    // Own properties of GXml-0.20.GXml.PairedMapIface

    static name: string
}

export interface MappeableElementThreeKeyIface {

    // Own fields of GXml-0.20.GXml.MappeableElementThreeKeyIface

    get_map_pkey: (self: MappeableElementThreeKey) => string | null
    get_map_skey: (self: MappeableElementThreeKey) => string | null
    get_map_tkey: (self: MappeableElementThreeKey) => string | null
}

export abstract class MappeableElementThreeKeyIface {

    // Own properties of GXml-0.20.GXml.MappeableElementThreeKeyIface

    static name: string
}

export interface ThreeMapIface {

    // Own fields of GXml-0.20.GXml.ThreeMapIface

    item: (self: ThreeMap, primary_key: string, secondary_key: string, third_key: string) => DomElement | null
    has_primary_key: (self: ThreeMap, key: string) => boolean
    has_secondary_key: (self: ThreeMap, pkey: string, key: string) => boolean
    has_third_key: (self: ThreeMap, pkey: string, skey: string, key: string) => boolean
    secondary_keys_set: (self: ThreeMap, pkey: string) => Gee.Set
    third_keys_set: (self: ThreeMap, pkey: string, skey: string) => Gee.Set
    get_attribute_primary_key: (self: ThreeMap) => string
    set_attribute_primary_key: (self: ThreeMap, value: string) => void
    get_attribute_secondary_key: (self: ThreeMap) => string
    set_attribute_secondary_key: (self: ThreeMap, value: string) => void
    get_attribute_third_key: (self: ThreeMap) => string
    set_attribute_third_key: (self: ThreeMap, value: string) => void
    get_primary_keys_set: (self: ThreeMap) => Gee.Set
}

export abstract class ThreeMapIface {

    // Own properties of GXml-0.20.GXml.ThreeMapIface

    static name: string
}

export interface CollectionParentIface {

    // Own fields of GXml-0.20.GXml.CollectionParentIface

    get_types: (self: CollectionParent) => GLib.HashTable
}

export abstract class CollectionParentIface {

    // Own properties of GXml-0.20.GXml.CollectionParentIface

    static name: string
}

export interface DomAttrIface {

    // Own fields of GXml-0.20.GXml.DomAttrIface

    get_namespace_uri: (self: DomAttr) => string | null
    get_prefix: (self: DomAttr) => string | null
    get_local_name: (self: DomAttr) => string | null
    get_name: (self: DomAttr) => string | null
    get_value: (self: DomAttr) => string | null
    set_value: (self: DomAttr, value: string) => void
    get_specified: (self: DomAttr) => boolean
}

export abstract class DomAttrIface {

    // Own properties of GXml-0.20.GXml.DomAttrIface

    static name: string
}

export interface DomCharacterDataIface {

    // Own fields of GXml-0.20.GXml.DomCharacterDataIface

    substring_data: (self: DomCharacterData, offset: number, count: number) => string | null
    append_data: (self: DomCharacterData, data: string) => void
    insert_data: (self: DomCharacterData, offset: number, data: string) => void
    delete_data: (self: DomCharacterData, offset: number, count: number) => void
    replace_data: (self: DomCharacterData, offset: number, count: number, data: string) => void
    get_data: (self: DomCharacterData) => string | null
    set_data: (self: DomCharacterData, value: string) => void
    get_length: (self: DomCharacterData) => number
}

export abstract class DomCharacterDataIface {

    // Own properties of GXml-0.20.GXml.DomCharacterDataIface

    static name: string
}

export interface DomTextIface {

    // Own fields of GXml-0.20.GXml.DomTextIface

    split_text: (self: DomText, offset: number) => DomText
    get_whole_text: (self: DomText) => string | null
}

export abstract class DomTextIface {

    // Own properties of GXml-0.20.GXml.DomTextIface

    static name: string
}

export interface DomProcessingInstructionIface {

    // Own fields of GXml-0.20.GXml.DomProcessingInstructionIface

    get_target: (self: DomProcessingInstruction) => string | null
}

export abstract class DomProcessingInstructionIface {

    // Own properties of GXml-0.20.GXml.DomProcessingInstructionIface

    static name: string
}

export interface DomCommentIface {
}

export abstract class DomCommentIface {

    // Own properties of GXml-0.20.GXml.DomCommentIface

    static name: string
}

export interface DomNonElementParentNodeIface {

    // Own fields of GXml-0.20.GXml.DomNonElementParentNodeIface

    get_element_by_id: (self: DomNonElementParentNode, element_id: string) => DomElement | null
}

export abstract class DomNonElementParentNodeIface {

    // Own properties of GXml-0.20.GXml.DomNonElementParentNodeIface

    static name: string
}

export interface DomParentNodeIface {

    // Own fields of GXml-0.20.GXml.DomParentNodeIface

    query_selector: (self: DomParentNode, selectors: string) => DomElement | null
    query_selector_all: (self: DomParentNode, selectors: string) => DomNodeList
    get_elements_by_property_value: (self: DomParentNode, property: string, value: string) => DomElementList
    get_children: (self: DomParentNode) => DomHTMLCollection
    get_first_element_child: (self: DomParentNode) => DomElement | null
    get_last_element_child: (self: DomParentNode) => DomElement | null
    get_child_element_count: (self: DomParentNode) => number
}

export abstract class DomParentNodeIface {

    // Own properties of GXml-0.20.GXml.DomParentNodeIface

    static name: string
}

export interface DomNonDocumentTypeChildNodeIface {

    // Own fields of GXml-0.20.GXml.DomNonDocumentTypeChildNodeIface

    get_previous_element_sibling: (self: DomNonDocumentTypeChildNode) => DomElement | null
    get_next_element_sibling: (self: DomNonDocumentTypeChildNode) => DomElement | null
}

export abstract class DomNonDocumentTypeChildNodeIface {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNodeIface

    static name: string
}

export interface DomChildNodeIface {

    // Own fields of GXml-0.20.GXml.DomChildNodeIface

    remove: (self: DomChildNode) => void
}

export abstract class DomChildNodeIface {

    // Own properties of GXml-0.20.GXml.DomChildNodeIface

    static name: string
}

export interface DomNodeListIface {

    // Own fields of GXml-0.20.GXml.DomNodeListIface

    item: (self: DomNodeList, index: number) => DomNode | null
    get_length: (self: DomNodeList) => number
}

export abstract class DomNodeListIface {

    // Own properties of GXml-0.20.GXml.DomNodeListIface

    static name: string
}

export interface DomHTMLCollectionIface {

    // Own fields of GXml-0.20.GXml.DomHTMLCollectionIface

    get_element: (self: DomHTMLCollection, index: number) => DomElement | null
    to_array: () => [ /* returnType */ DomElement[], /* result_length1 */ number ]
    item: (self: DomHTMLCollection, index: number) => DomElement | null
    named_item: (self: DomHTMLCollection, name: string) => DomElement | null
    get_length: (self: DomHTMLCollection) => number
}

export abstract class DomHTMLCollectionIface {

    // Own properties of GXml-0.20.GXml.DomHTMLCollectionIface

    static name: string
}

export interface DomNodeIteratorIface {

    // Own fields of GXml-0.20.GXml.DomNodeIteratorIface

    next_node: (self: DomNodeIterator) => DomNode | null
    previous_node: (self: DomNodeIterator) => DomNode | null
    detach: (self: DomNodeIterator) => void
    get_root: (self: DomNodeIterator) => DomNode
    get_reference_node: (self: DomNodeIterator) => DomNode
    get_pointer_before_reference_node: (self: DomNodeIterator) => boolean
    get_what_to_show: (self: DomNodeIterator) => number
}

export abstract class DomNodeIteratorIface {

    // Own properties of GXml-0.20.GXml.DomNodeIteratorIface

    static name: string
}

export interface DomTreeWalkerIface {

    // Own fields of GXml-0.20.GXml.DomTreeWalkerIface

    parent_node: (self: DomTreeWalker) => DomNode | null
    first_child: (self: DomTreeWalker) => DomNode | null
    last_child: (self: DomTreeWalker) => DomNode | null
    previous_sibling: (self: DomTreeWalker) => DomNode | null
    next_sibling: (self: DomTreeWalker) => DomNode | null
    previous_node: (self: DomTreeWalker) => DomNode | null
    next_node: (self: DomTreeWalker) => DomNode | null
    get_root: (self: DomTreeWalker) => DomNode
    get_what_to_show: (self: DomTreeWalker) => number
    get_current_node: (self: DomTreeWalker) => DomNode
}

export abstract class DomTreeWalkerIface {

    // Own properties of GXml-0.20.GXml.DomTreeWalkerIface

    static name: string
}

export interface DomNamedNodeMapIface {

    // Own fields of GXml-0.20.GXml.DomNamedNodeMapIface

    item: (self: DomNamedNodeMap, index: number) => DomNode | null
    get_named_item: (self: DomNamedNodeMap, name: string) => DomNode | null
    set_named_item: (self: DomNamedNodeMap, node: DomNode) => DomNode | null
    remove_named_item: (self: DomNamedNodeMap, name: string) => DomNode | null
    remove_named_item_ns: (self: DomNamedNodeMap, namespace_uri: string, localName: string) => DomNode | null
    get_named_item_ns: (self: DomNamedNodeMap, namespace_uri: string, local_name: string) => DomNode | null
    set_named_item_ns: (self: DomNamedNodeMap, node: DomNode) => DomNode | null
    get_length: (self: DomNamedNodeMap) => number
}

export abstract class DomNamedNodeMapIface {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMapIface

    static name: string
}

export interface DomTokenListIface {

    // Own fields of GXml-0.20.GXml.DomTokenListIface

    item: (self: DomTokenList, index: number) => string | null
    contains: (self: DomTokenList, token: string) => boolean
    add: (self: DomTokenList, tokens: string[]) => void
    remove: (self: DomTokenList, tokens: string[]) => void
    toggle: (self: DomTokenList, token: string, force: boolean, _auto_: boolean) => boolean
    to_string: (self: DomTokenList) => string | null
    get_length: (self: DomTokenList) => number
}

export abstract class DomTokenListIface {

    // Own properties of GXml-0.20.GXml.DomTokenListIface

    static name: string
}

export interface DomSettableTokenListIface {

    // Own fields of GXml-0.20.GXml.DomSettableTokenListIface

    get_value: (self: DomSettableTokenList) => string | null
    set_value: (self: DomSettableTokenList, value: string) => void
}

export abstract class DomSettableTokenListIface {

    // Own properties of GXml-0.20.GXml.DomSettableTokenListIface

    static name: string
}

export interface DomDocumentIface {

    // Own fields of GXml-0.20.GXml.DomDocumentIface

    get_elements_by_tag_name: (self: DomDocument, local_name: string) => DomHTMLCollection
    get_elements_by_tag_name_ns: (self: DomDocument, namespace: string | null, local_name: string) => DomHTMLCollection
    get_elements_by_class_name: (self: DomDocument, classNames: string) => DomHTMLCollection
    create_element: (self: DomDocument, local_name: string) => DomElement
    create_element_ns: (self: DomDocument, namespace: string | null, qualified_name: string) => DomElement
    create_document_fragment: (self: DomDocument) => DomDocumentFragment
    create_text_node: (self: DomDocument, data: string) => DomText
    create_comment: (self: DomDocument, data: string) => DomComment
    create_processing_instruction: (self: DomDocument, target: string, data: string) => DomProcessingInstruction
    import_node: (self: DomDocument, node: DomNode, deep: boolean) => DomNode
    adopt_node: (self: DomDocument, node: DomNode) => DomNode
    create_event: (self: DomDocument, interface: string) => DomEvent
    create_range: (self: DomDocument) => DomRange
    create_node_iterator: (self: DomDocument, root: DomNode, whatToShow: number) => DomNodeIterator
    create_tree_walker: (self: DomDocument, root: DomNode, what_to_show: number) => DomTreeWalker
    write_file: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    write_file_async: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_file_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    write_stream: (self: DomDocument, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => void
    write_stream_async: (self: DomDocument, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_stream_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    create_stream: (self: DomDocument) => Gio.InputStream
    create_stream_async: (self: DomDocument, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    create_stream_finish: (self: DomDocument, _res_: Gio.AsyncResult) => Gio.InputStream
    write_string: (self: DomDocument, cancellable: Gio.Cancellable | null) => string | null
    write_string_async: (self: DomDocument, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_string_finish: (self: DomDocument, _res_: Gio.AsyncResult) => string | null
    read_from_file: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    read_from_file_async: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_file_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    read_from_string: (self: DomDocument, str: string, cancellable: Gio.Cancellable | null) => void
    read_from_string_async: (self: DomDocument, str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_string_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    read_from_stream: (self: DomDocument, stream: Gio.InputStream, cancellable: Gio.Cancellable | null) => void
    read_from_stream_async: (self: DomDocument, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_stream_finish: (self: DomDocument, _res_: Gio.AsyncResult) => void
    get_xml_parser: (self: DomDocument) => Parser
    set_xml_parser: (self: DomDocument, parser: Parser) => void
    get_implementation: (self: DomDocument) => DomImplementation
    get_url: (self: DomDocument) => string
    get_document_uri: (self: DomDocument) => string
    get_origin: (self: DomDocument) => string
    get_compat_mode: (self: DomDocument) => string
    get_character_set: (self: DomDocument) => string
    get_content_type: (self: DomDocument) => string
    get_doctype: (self: DomDocument) => DomDocumentType | null
    get_document_element: (self: DomDocument) => DomElement | null
}

export abstract class DomDocumentIface {

    // Own properties of GXml-0.20.GXml.DomDocumentIface

    static name: string
}

export interface DomXMLDocumentIface {
}

export abstract class DomXMLDocumentIface {

    // Own properties of GXml-0.20.GXml.DomXMLDocumentIface

    static name: string
}

export interface DomImplementationIface {

    // Own fields of GXml-0.20.GXml.DomImplementationIface

    create_document_type: (self: DomImplementation, qualified_name: string, public_id: string, system_id: string) => DomDocumentType
    create_document: (self: DomImplementation, nspace: string | null, qualified_name: string | null, doctype: DomDocumentType | null) => DomXMLDocument
    create_html_document: (self: DomImplementation, title: string) => DomDocument
    has_feature: (self: DomImplementation) => boolean
}

export abstract class DomImplementationIface {

    // Own properties of GXml-0.20.GXml.DomImplementationIface

    static name: string
}

export interface DomDocumentFragmentIface {
}

export abstract class DomDocumentFragmentIface {

    // Own properties of GXml-0.20.GXml.DomDocumentFragmentIface

    static name: string
}

export interface DomDocumentTypeIface {

    // Own fields of GXml-0.20.GXml.DomDocumentTypeIface

    get_name: (self: DomDocumentType) => string
    get_public_id: (self: DomDocumentType) => string
    get_system_id: (self: DomDocumentType) => string
}

export abstract class DomDocumentTypeIface {

    // Own properties of GXml-0.20.GXml.DomDocumentTypeIface

    static name: string
}

export interface DomHtmlDocumentIface {

    // Own fields of GXml-0.20.GXml.DomHtmlDocumentIface

    read_from_string: (self: DomHtmlDocument, str: string) => void
    read_from_string_tolerant: (self: DomHtmlDocument, str: string) => void
    to_html: (self: DomHtmlDocument) => string | null
}

export abstract class DomHtmlDocumentIface {

    // Own properties of GXml-0.20.GXml.DomHtmlDocumentIface

    static name: string
}

export interface DomElementIface {

    // Own fields of GXml-0.20.GXml.DomElementIface

    get_attribute: (self: DomElement, name: string) => string | null
    get_attribute_ns: (self: DomElement, namespace: string | null, local_name: string) => string | null
    set_attribute: (self: DomElement, name: string, value: string) => void
    set_attribute_ns: (self: DomElement, namespace: string | null, name: string, value: string) => void
    remove_attribute: (self: DomElement, name: string) => void
    remove_attribute_ns: (self: DomElement, namespace: string | null, local_name: string) => void
    has_attribute: (self: DomElement, name: string) => boolean
    has_attribute_ns: (self: DomElement, namespace: string | null, local_name: string) => boolean
    get_elements_by_tag_name: (self: DomElement, local_name: string) => DomHTMLCollection
    get_elements_by_tag_name_ns: (self: DomElement, namespace: string | null, local_name: string) => DomHTMLCollection
    get_elements_by_class_name: (self: DomElement, class_names: string) => DomHTMLCollection
    matches: (self: DomElement, selectors: string) => boolean
    read_from_uri: (self: DomElement, uri: string) => void
    read_from_uri_async: (self: DomElement, uri: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_uri_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    read_from_file: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null) => void
    read_from_file_async: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_file_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    read_from_stream: (self: DomElement, istream: Gio.InputStream, cancellable: Gio.Cancellable | null) => void
    read_from_stream_async: (self: DomElement, istream: Gio.InputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_stream_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    read_from_string: (self: DomElement, str: string, cancellable: Gio.Cancellable | null) => void
    read_from_string_async: (self: DomElement, str: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    read_from_string_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    write_string: (self: DomElement, cancellable: Gio.Cancellable | null) => string | null
    write_string_async: (self: DomElement, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_string_finish: (self: DomElement, _res_: Gio.AsyncResult) => string | null
    write_file: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null) => void
    write_file_async: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_file_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    write_stream: (self: DomElement, stream: Gio.OutputStream) => void
    write_stream_async: (self: DomElement, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    write_stream_finish: (self: DomElement, _res_: Gio.AsyncResult) => void
    create_stream: (self: DomElement) => Gio.InputStream
    create_stream_async: (self: DomElement, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    create_stream_finish: (self: DomElement, _res_: Gio.AsyncResult) => Gio.InputStream
    get_namespace_uri: (self: DomElement) => string | null
    get_prefix: (self: DomElement) => string | null
    get_local_name: (self: DomElement) => string | null
    get_tag_name: (self: DomElement) => string | null
    get_id: (self: DomElement) => string | null
    set_id: (self: DomElement, value: string | null) => void
    get_class_name: (self: DomElement) => string | null
    set_class_name: (self: DomElement, value: string | null) => void
    get_class_list: (self: DomElement) => DomTokenList
    get_attributes: (self: DomElement) => DomNamedNodeMap
}

export abstract class DomElementIface {

    // Own properties of GXml-0.20.GXml.DomElementIface

    static name: string
}

export interface DomEventTargetIface {

    // Own fields of GXml-0.20.GXml.DomEventTargetIface

    add_event_listener: (self: DomEventTarget, type: string, callback: DomEventListener | null, capture: boolean) => void
    remove_event_listener: (self: DomEventTarget, type: string, callback: DomEventListener | null, capture: boolean) => void
    dispatch_event: (self: DomEventTarget, event: DomEvent) => boolean
}

export abstract class DomEventTargetIface {

    // Own properties of GXml-0.20.GXml.DomEventTargetIface

    static name: string
}

export interface DomEventListenerIface {

    // Own fields of GXml-0.20.GXml.DomEventListenerIface

    handle_event: (self: DomEventListener, event: DomEvent) => void
}

export abstract class DomEventListenerIface {

    // Own properties of GXml-0.20.GXml.DomEventListenerIface

    static name: string
}

export interface DomEventIface {

    // Own fields of GXml-0.20.GXml.DomEventIface

    stop_propagation: (self: DomEvent) => void
    stop_immediate_propagation: (self: DomEvent) => void
    prevent_default: (self: DomEvent) => void
    init_event: (self: DomEvent, type: string, bubbles: boolean, cancelable: boolean) => void
    get_etype: (self: DomEvent) => string
    get_event_target: (self: DomEvent) => DomEventTarget | null
    get_current_target: (self: DomEvent) => DomEventTarget | null
    get_bubbles: (self: DomEvent) => boolean
    get_cancelable: (self: DomEvent) => boolean
    get_is_trusted: (self: DomEvent) => boolean
    get_time_stamp: (self: DomEvent) => DomTimeStamp
    get_default_prevented: (self: DomEvent) => boolean
    get_event_phase: (self: DomEvent) => DomEventPhase
}

export abstract class DomEventIface {

    // Own properties of GXml-0.20.GXml.DomEventIface

    static name: string
}

export interface DomCustomEventIface {

    // Own fields of GXml-0.20.GXml.DomCustomEventIface

    init_custom_event: (self: DomCustomEvent, type: string, bubbles: boolean, cancelable: boolean, detail: any) => void
    get_detail: (self: DomCustomEvent) => /* result */ any
}

export abstract class DomCustomEventIface {

    // Own properties of GXml-0.20.GXml.DomCustomEventIface

    static name: string
}

export interface DomMutationObserverIface {

    // Own fields of GXml-0.20.GXml.DomMutationObserverIface

    observe: (self: DomMutationObserver, target: Node, options: DomMutationObserverInit) => void
    // Has conflict: disconnect: (self: DomMutationObserver) => void
    take_records: (self: DomMutationObserver) => Gee.List
}

export abstract class DomMutationObserverIface {

    // Own properties of GXml-0.20.GXml.DomMutationObserverIface

    static name: string
}

export interface DomMutationRecordIface {

    // Own fields of GXml-0.20.GXml.DomMutationRecordIface

    get_mtype: (self: DomMutationRecord) => string
    get_target: (self: DomMutationRecord) => DomNode
    get_added_nodes: (self: DomMutationRecord) => DomNodeList
    set_added_nodes: (self: DomMutationRecord, value: DomNodeList) => void
    get_removed_nodes: (self: DomMutationRecord) => DomNodeList
    set_removed_nodes: (self: DomMutationRecord, value: DomNodeList) => void
    get_previous_sibling: (self: DomMutationRecord) => DomNode | null
    get_next_sibling: (self: DomMutationRecord) => DomNode | null
    get_attribute_name: (self: DomMutationRecord) => string | null
    get_attribute_namespace: (self: DomMutationRecord) => string | null
    get_old_value: (self: DomMutationRecord) => string | null
}

export abstract class DomMutationRecordIface {

    // Own properties of GXml-0.20.GXml.DomMutationRecordIface

    static name: string
}

export interface DomNodeIface {

    // Own fields of GXml-0.20.GXml.DomNodeIface

    has_child_nodes: (self: DomNode) => boolean
    normalize: (self: DomNode) => void
    is_equal_node: (self: DomNode, node: DomNode | null) => boolean
    compare_document_position: (self: DomNode, other: DomNode) => DomNodeDocumentPosition
    contains: (self: DomNode, other: DomNode | null) => boolean
    lookup_prefix: (self: DomNode, nspace: string | null) => string | null
    lookup_namespace_uri: (self: DomNode, prefix: string | null) => string | null
    is_default_namespace: (self: DomNode, nspace: string | null) => boolean
    insert_before: (self: DomNode, node: DomNode, child: DomNode | null) => DomNode
    append_child: (self: DomNode, node: DomNode) => DomNode
    replace_child: (self: DomNode, node: DomNode, child: DomNode) => DomNode
    remove_child: (self: DomNode, child: DomNode) => DomNode
    get_node_type: (self: DomNode) => DomNodeNodeType
    get_node_name: (self: DomNode) => string | null
    get_base_uri: (self: DomNode) => string | null
    get_owner_document: (self: DomNode) => DomDocument | null
    set_owner_document: (self: DomNode, value: DomDocument | null) => void
    get_parent_node: (self: DomNode) => DomNode | null
    get_parent_element: (self: DomNode) => DomElement | null
    get_child_nodes: (self: DomNode) => DomNodeList
    get_first_child: (self: DomNode) => DomNode | null
    get_last_child: (self: DomNode) => DomNode | null
    get_previous_sibling: (self: DomNode) => DomNode | null
    get_next_sibling: (self: DomNode) => DomNode | null
    get_node_value: (self: DomNode) => string | null
    set_node_value: (self: DomNode, value: string | null) => void
    get_text_content: (self: DomNode) => string | null
    set_text_content: (self: DomNode, value: string | null) => void
}

export abstract class DomNodeIface {

    // Own properties of GXml-0.20.GXml.DomNodeIface

    static name: string
}

export interface DomRangeIface {

    // Own fields of GXml-0.20.GXml.DomRangeIface

    set_start: (self: DomRange, node: DomNode, offset: number) => void
    set_end: (self: DomRange, node: DomNode, offset: number) => void
    set_start_before: (self: DomRange, node: DomNode) => void
    set_start_after: (self: DomRange, node: DomNode) => void
    set_end_before: (self: DomRange, node: DomNode) => void
    set_end_after: (self: DomRange, node: DomNode) => void
    collapse: (self: DomRange, to_start: boolean) => void
    select_node: (self: DomRange, node: DomNode) => void
    select_node_contents: (self: DomRange, node: DomNode) => void
    compare_boundary_points: (self: DomRange, how: DomRangeBoundaryPoints, sourceRange: DomRange) => number
    delete_contents: (self: DomRange) => void
    extract_contents: (self: DomRange) => DomDocumentFragment | null
    clone_contents: (self: DomRange) => DomDocumentFragment | null
    insert_node: (self: DomRange, node: DomNode) => void
    surround_contents: (self: DomRange, newParent: DomNode) => void
    clone_range: (self: DomRange) => DomRange
    detach: (self: DomRange) => void
    is_point_in_range: (self: DomRange, node: DomNode, offset: number) => boolean
    compare_point: (self: DomRange, node: DomNode, offset: number) => number
    intersects_node: (self: DomRange, node: DomNode) => boolean
    to_string: (self: DomRange) => string | null
    get_start_container: (self: DomRange) => DomNode
    get_start_offset: (self: DomRange) => number
    get_end_container: (self: DomRange) => DomNode
    get_end_offset: (self: DomRange) => number
    get_collapsed: (self: DomRange) => boolean
    get_common_ancestor_container: (self: DomRange) => DomNode
}

export abstract class DomRangeIface {

    // Own properties of GXml-0.20.GXml.DomRangeIface

    static name: string
}

export interface IXsdSchemaIface {

    // Own fields of GXml-0.20.GXml.IXsdSchemaIface

    get_element_definitions: (self: IXsdSchema) => IXsdListElements
    set_element_definitions: (self: IXsdSchema, value: IXsdListElements) => void
    get_simple_type_definitions: (self: IXsdSchema) => IXsdListSimpleTypes
    set_simple_type_definitions: (self: IXsdSchema, value: IXsdListSimpleTypes) => void
    get_complex_type_definitions: (self: IXsdSchema) => IXsdListComplexTypes
    set_complex_type_definitions: (self: IXsdSchema, value: IXsdListComplexTypes) => void
}

export abstract class IXsdSchemaIface {

    // Own properties of GXml-0.20.GXml.IXsdSchemaIface

    static name: string
}

export interface IXsdBaseTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseTypeIface

    get_anotation: (self: IXsdBaseType) => IXsdAnnotation
    set_anotation: (self: IXsdBaseType, value: IXsdAnnotation) => void
}

export abstract class IXsdBaseTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseTypeIface

    static name: string
}

export interface IXsdSimpleTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdSimpleTypeIface

    get_final: (self: IXsdSimpleType) => string
    set_final: (self: IXsdSimpleType, value: string) => void
    get_id: (self: IXsdSimpleType) => string
    set_id: (self: IXsdSimpleType, value: string) => void
    get_name: (self: IXsdSimpleType) => string
    set_name: (self: IXsdSimpleType, value: string) => void
    get_annotation: (self: IXsdSimpleType) => IXsdAnnotation
    set_annotation: (self: IXsdSimpleType, value: IXsdAnnotation) => void
    get_list: (self: IXsdSimpleType) => IXsdTypeList
    set_list: (self: IXsdSimpleType, value: IXsdTypeList) => void
    get_union: (self: IXsdSimpleType) => IXsdTypeUnion
    set_union: (self: IXsdSimpleType, value: IXsdTypeUnion) => void
    get_restriction: (self: IXsdSimpleType) => IXsdTypeRestriction
    set_restriction: (self: IXsdSimpleType, value: IXsdTypeRestriction) => void
}

export abstract class IXsdSimpleTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdSimpleTypeIface

    static name: string
}

export interface IXsdTypeDefIface {
}

export abstract class IXsdTypeDefIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeDefIface

    static name: string
}

export interface IXsdTypeRestrictionIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionIface

    get_base: (self: IXsdTypeRestriction) => string
    set_base: (self: IXsdTypeRestriction, value: string) => void
    get_id: (self: IXsdTypeRestriction) => string
    set_id: (self: IXsdTypeRestriction, value: string) => void
    get_simple_type: (self: IXsdTypeRestriction) => IXsdSimpleType
    set_simple_type: (self: IXsdTypeRestriction, value: IXsdSimpleType) => void
    get_enumerations: (self: IXsdTypeRestriction) => IXsdListTypeRestrictionEnumerations
    set_enumerations: (self: IXsdTypeRestriction, value: IXsdListTypeRestrictionEnumerations) => void
    get_white_spaces: (self: IXsdTypeRestriction) => IXsdListTypeRestrictionWhiteSpaces
    set_white_spaces: (self: IXsdTypeRestriction, value: IXsdListTypeRestrictionWhiteSpaces) => void
}

export abstract class IXsdTypeRestrictionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionIface

    static name: string
}

export interface IXsdTypeListIface {
}

export abstract class IXsdTypeListIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeListIface

    static name: string
}

export interface IXsdTypeUnionIface {
}

export abstract class IXsdTypeUnionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeUnionIface

    static name: string
}

export interface IXsdTypeRestrictionDefIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionDefIface

    get_annotation: (self: IXsdTypeRestrictionDef) => IXsdAnnotation
    set_annotation: (self: IXsdTypeRestrictionDef, value: IXsdAnnotation) => void
}

export abstract class IXsdTypeRestrictionDefIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDefIface

    static name: string
}

export interface IXsdTypeRestrictionMinExclusiveIface {
}

export abstract class IXsdTypeRestrictionMinExclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionMinInclusiveIface {
}

export abstract class IXsdTypeRestrictionMinInclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionMaxExclusiveIface {
}

export abstract class IXsdTypeRestrictionMaxExclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionMaxInclusiveIface {
}

export abstract class IXsdTypeRestrictionMaxInclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionTotalDigitsIface {
}

export abstract class IXsdTypeRestrictionTotalDigitsIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigitsIface

    static name: string
}

export interface IXsdTypeRestrictionFractionDigitsIface {
}

export abstract class IXsdTypeRestrictionFractionDigitsIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigitsIface

    static name: string
}

export interface IXsdTypeRestrictionLengthIface {
}

export abstract class IXsdTypeRestrictionLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionLengthIface

    static name: string
}

export interface IXsdTypeRestrictionMinLengthIface {
}

export abstract class IXsdTypeRestrictionMinLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinLengthIface

    static name: string
}

export interface IXsdTypeRestrictionMaxLengthIface {
}

export abstract class IXsdTypeRestrictionMaxLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxLengthIface

    static name: string
}

export interface IXsdTypeRestrictionEnumerationIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionEnumerationIface

    get_id: (self: IXsdTypeRestrictionEnumeration) => string
    set_id: (self: IXsdTypeRestrictionEnumeration, value: string) => void
    get_value: (self: IXsdTypeRestrictionEnumeration) => string
    set_value: (self: IXsdTypeRestrictionEnumeration, value: string) => void
}

export abstract class IXsdTypeRestrictionEnumerationIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumerationIface

    static name: string
}

export interface IXsdTypeRestrictionWhiteSpaceIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpaceIface

    get_fixed: (self: IXsdTypeRestrictionWhiteSpace) => boolean
    set_fixed: (self: IXsdTypeRestrictionWhiteSpace, value: boolean) => void
    get_id: (self: IXsdTypeRestrictionWhiteSpace) => string
    set_id: (self: IXsdTypeRestrictionWhiteSpace, value: string) => void
    get_value: (self: IXsdTypeRestrictionWhiteSpace) => string
    set_value: (self: IXsdTypeRestrictionWhiteSpace, value: string) => void
}

export abstract class IXsdTypeRestrictionWhiteSpaceIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpaceIface

    static name: string
}

export interface IXsdTypeRestrictionPatternIface {
}

export abstract class IXsdTypeRestrictionPatternIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionPatternIface

    static name: string
}

export interface IXsdTypeRestrictionAssertionIface {
}

export abstract class IXsdTypeRestrictionAssertionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionAssertionIface

    static name: string
}

export interface IXsdTypeRestrictionExplicitTimezoneIface {
}

export abstract class IXsdTypeRestrictionExplicitTimezoneIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezoneIface

    static name: string
}

export interface IXsdComplexTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdComplexTypeIface

    get_abstract: (self: IXsdComplexType) => boolean
    set_abstract: (self: IXsdComplexType, value: boolean) => void
    get_block: (self: IXsdComplexType) => string
    set_block: (self: IXsdComplexType, value: string) => void
    get_final: (self: IXsdComplexType) => string
    set_final: (self: IXsdComplexType, value: string) => void
    get_mixed: (self: IXsdComplexType) => boolean
    set_mixed: (self: IXsdComplexType, value: boolean) => void
    get_name: (self: IXsdComplexType) => string
    set_name: (self: IXsdComplexType, value: string) => void
    get_default_attributes_apply: (self: IXsdComplexType) => boolean
    set_default_attributes_apply: (self: IXsdComplexType, value: boolean) => void
    get_content_type: (self: IXsdComplexType) => IXsdBaseContent
    set_content_type: (self: IXsdComplexType, value: IXsdBaseContent) => void
    get_type_attributes: (self: IXsdComplexType) => IXsdListAttributes
    get_group_attributes: (self: IXsdComplexType) => IXsdListAttributesGroup
}

export abstract class IXsdComplexTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdComplexTypeIface

    static name: string
}

export interface IXsdExtensionIface {

    // Own fields of GXml-0.20.GXml.IXsdExtensionIface

    get_base: (self: IXsdExtension) => string
    set_base: (self: IXsdExtension, value: string) => void
}

export abstract class IXsdExtensionIface {

    // Own properties of GXml-0.20.GXml.IXsdExtensionIface

    static name: string
}

export interface IXsdElementIface {

    // Own fields of GXml-0.20.GXml.IXsdElementIface

    get_abstract: (self: IXsdElement) => boolean
    set_abstract: (self: IXsdElement, value: boolean) => void
    get_block: (self: IXsdElement) => string
    set_block: (self: IXsdElement, value: string) => void
    get_default: (self: IXsdElement) => string
    set_default: (self: IXsdElement, value: string) => void
    get_final: (self: IXsdElement) => string
    set_final: (self: IXsdElement, value: string) => void
    get_fixed: (self: IXsdElement) => string
    set_fixed: (self: IXsdElement, value: string) => void
    get_form: (self: IXsdElement) => string
    set_form: (self: IXsdElement, value: string) => void
    get_id: (self: IXsdElement) => string | null
    set_id: (self: IXsdElement, value: string | null) => void
    get_maxOccurs: (self: IXsdElement) => string
    set_maxOccurs: (self: IXsdElement, value: string) => void
    get_minOccurs: (self: IXsdElement) => string
    set_minOccurs: (self: IXsdElement, value: string) => void
    get_name: (self: IXsdElement) => string
    set_name: (self: IXsdElement, value: string) => void
    get_nillable: (self: IXsdElement) => boolean
    set_nillable: (self: IXsdElement, value: boolean) => void
    get_ref: (self: IXsdElement) => string
    set_ref: (self: IXsdElement, value: string) => void
    get_substitution_group: (self: IXsdElement) => DomTokenList
    set_substitution_group: (self: IXsdElement, value: DomTokenList) => void
    get_target_namespace: (self: IXsdElement) => string
    set_target_namespace: (self: IXsdElement, value: string) => void
    get_object_type: (self: IXsdElement) => string
    set_object_type: (self: IXsdElement, value: string) => void
    get_anotation: (self: IXsdElement) => IXsdAnnotation
    set_anotation: (self: IXsdElement, value: IXsdAnnotation) => void
    get_simple_type: (self: IXsdElement) => IXsdSimpleType
    set_simple_type: (self: IXsdElement, value: IXsdSimpleType) => void
    get_complex_type: (self: IXsdElement) => IXsdComplexType
    set_complex_type: (self: IXsdElement, value: IXsdComplexType) => void
}

export abstract class IXsdElementIface {

    // Own properties of GXml-0.20.GXml.IXsdElementIface

    static name: string
}

export interface IXsdAnnotationIface {
}

export abstract class IXsdAnnotationIface {

    // Own properties of GXml-0.20.GXml.IXsdAnnotationIface

    static name: string
}

export interface IXsdBaseContentIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseContentIface

    get_anotation: (self: IXsdBaseContent) => IXsdAnnotation
    set_anotation: (self: IXsdBaseContent, value: IXsdAnnotation) => void
}

export abstract class IXsdBaseContentIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseContentIface

    static name: string
}

export interface IXsdSimpleContentIface {
}

export abstract class IXsdSimpleContentIface {

    // Own properties of GXml-0.20.GXml.IXsdSimpleContentIface

    static name: string
}

export interface IXsdComplexContentIface {
}

export abstract class IXsdComplexContentIface {

    // Own properties of GXml-0.20.GXml.IXsdComplexContentIface

    static name: string
}

export interface IXsdOpenContentIface {
}

export abstract class IXsdOpenContentIface {

    // Own properties of GXml-0.20.GXml.IXsdOpenContentIface

    static name: string
}

export interface IXsdBaseAttributeIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseAttributeIface

    get_anotation: (self: IXsdBaseAttribute) => IXsdAnnotation
    set_anotation: (self: IXsdBaseAttribute, value: IXsdAnnotation) => void
}

export abstract class IXsdBaseAttributeIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttributeIface

    static name: string
}

export interface IXsdAttributeIface {
}

export abstract class IXsdAttributeIface {

    // Own properties of GXml-0.20.GXml.IXsdAttributeIface

    static name: string
}

export interface IXsdAttributeGroupIface {
}

export abstract class IXsdAttributeGroupIface {

    // Own properties of GXml-0.20.GXml.IXsdAttributeGroupIface

    static name: string
}

export interface IXsdListIface {

    // Own fields of GXml-0.20.GXml.IXsdListIface

    get_item: (self: IXsdList, index: number) => DomElement | null
    append: (self: IXsdList, element: DomElement) => void
    remove: (self: IXsdList, index: number) => void
    index_of: (self: IXsdList, element: DomElement) => number
    get_element: (self: IXsdList) => DomElement
    set_element: (self: IXsdList, value: DomElement) => void
    get_items_type: (self: IXsdList) => GObject.GType
    set_items_type: (self: IXsdList, value: GObject.GType) => void
    get_items_name: (self: IXsdList) => GObject.GType
    set_items_name: (self: IXsdList, value: GObject.GType) => void
    get_length: (self: IXsdList) => number
}

export abstract class IXsdListIface {

    // Own properties of GXml-0.20.GXml.IXsdListIface

    static name: string
}

export interface IXsdListElementsIface {
}

export abstract class IXsdListElementsIface {

    // Own properties of GXml-0.20.GXml.IXsdListElementsIface

    static name: string
}

export interface IXsdListSimpleTypesIface {
}

export abstract class IXsdListSimpleTypesIface {

    // Own properties of GXml-0.20.GXml.IXsdListSimpleTypesIface

    static name: string
}

export interface IXsdListComplexTypesIface {
}

export abstract class IXsdListComplexTypesIface {

    // Own properties of GXml-0.20.GXml.IXsdListComplexTypesIface

    static name: string
}

export interface IXsdListAttributesIface {
}

export abstract class IXsdListAttributesIface {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesIface

    static name: string
}

export interface IXsdListAttributesGroupIface {
}

export abstract class IXsdListAttributesGroupIface {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesGroupIface

    static name: string
}

export interface IXsdListTypeRestrictionEnumerationsIface {
}

export abstract class IXsdListTypeRestrictionEnumerationsIface {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerationsIface

    static name: string
}

export interface IXsdListTypeRestrictionWhiteSpacesIface {
}

export abstract class IXsdListTypeRestrictionWhiteSpacesIface {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpacesIface

    static name: string
}

export interface ObjectIface {

    // Own fields of GXml-0.20.GXml.ObjectIface

    get_properties_list: (self: Object) => GObject.ParamSpec[]
    find_property_name: (self: Object, nick: string) => GObject.ParamSpec | null
    find_object_property_name: (self: Object, pname: string) => GObject.ParamSpec | null
    get_property_element_list: (self: Object) => GObject.ParamSpec[]
    get_property_string: (self: Object, prop: GObject.ParamSpec) => string | null
    get_attribute: (self: Object, name: string) => string | null
    find_property: (self: Object, name: string) => Property | null
    set_attribute: (self: Object, name: string, val: string) => boolean
    get_child: (self: Object, name: string) => DomElement | null
    find_elements: (self: Object, name: string) => DomElementList
    remove_attribute: (self: Object, name: string) => boolean
    set_instance_property: (self: Object, name: string) => boolean
    clean_property_elements: (self: Object, name: string) => void
}

export abstract class ObjectIface {

    // Own properties of GXml-0.20.GXml.ObjectIface

    static name: string
}

export interface ParserIface {

    // Own fields of GXml-0.20.GXml.ParserIface

    write_file: (self: Parser, file: Gio.File) => void
    write_file_async: (self: Parser, file: Gio.File, _callback_: Gio.AsyncReadyCallback | null) => void
    write_file_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    write_string: (self: Parser) => string | null
    write_string_async: (self: Parser, _callback_: Gio.AsyncReadyCallback | null) => void
    write_string_finish: (self: Parser, _res_: Gio.AsyncResult) => string | null
    write_stream: (self: Parser, stream: Gio.OutputStream) => void
    write_stream_async: (self: Parser, stream: Gio.OutputStream, _callback_: Gio.AsyncReadyCallback | null) => void
    write_stream_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_file: (self: Parser, file: Gio.File) => void
    read_file_async: (self: Parser, file: Gio.File, _callback_: Gio.AsyncReadyCallback | null) => void
    read_file_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_stream: (self: Parser, stream: Gio.InputStream) => void
    read_stream_async: (self: Parser, stream: Gio.InputStream, _callback_: Gio.AsyncReadyCallback | null) => void
    read_stream_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_string: (self: Parser, str: string) => void
    read_string_async: (self: Parser, str: string, _callback_: Gio.AsyncReadyCallback | null) => void
    read_string_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    create_stream: (self: Parser) => Gio.InputStream
    create_stream_async: (self: Parser, _callback_: Gio.AsyncReadyCallback | null) => void
    create_stream_finish: (self: Parser, _res_: Gio.AsyncResult) => Gio.InputStream
    read_child_nodes: (self: Parser, parent: DomNode) => void
    read_child_nodes_async: (self: Parser, parent: DomNode, _callback_: Gio.AsyncReadyCallback | null) => void
    read_child_nodes_finish: (self: Parser, _res_: Gio.AsyncResult) => void
    read_child_node: (self: Parser, parent: DomNode) => boolean
    read_child_element: (self: Parser, parent: DomNode) => boolean
    read_element_property: (self: Parser, parent: DomNode) => [ /* returnType */ boolean, /* element */ DomNode ]
    add_element_collection: (self: Parser, parent: DomNode) => [ /* returnType */ boolean, /* element */ DomNode ]
    read_child_nodes_stream: (self: Parser, istream: Gio.InputStream) => void
    read_child_nodes_string: (self: Parser, str: string) => void
    read_unparsed: (self: Parser) => string | null
    move_next_node: (self: Parser) => boolean
    current_is_empty_element: (self: Parser) => boolean
    current_is_element: (self: Parser) => boolean
    current_is_document: (self: Parser) => boolean
    current_node_name: (self: Parser) => string | null
    create_element: (self: Parser, parent: DomNode) => DomElement | null
    read_element: (self: Parser, element: DomElement) => void
    get_backup: (self: Parser) => boolean
    set_backup: (self: Parser, value: boolean) => void
    get_indent: (self: Parser) => boolean
    set_indent: (self: Parser, value: boolean) => void
    get_cancellable: (self: Parser) => Gio.Cancellable | null
    set_cancellable: (self: Parser, value: Gio.Cancellable | null) => void
    get_node: (self: Parser) => DomNode
    get_types: (self: Parser) => GLib.HashTable
}

export abstract class ParserIface {

    // Own properties of GXml-0.20.GXml.ParserIface

    static name: string
}

export interface PropertyIface {

    // Own fields of GXml-0.20.GXml.PropertyIface

    validate_value: (self: Property, val: string | null) => boolean
    get_value: (self: Property) => string | null
    set_value: (self: Property, value: string | null) => void
}

export abstract class PropertyIface {

    // Own properties of GXml-0.20.GXml.PropertyIface

    static name: string
}

export interface XPathContextIface {

    // Own fields of GXml-0.20.GXml.XPathContextIface

    evaluate: (self: XPathContext, expression: string, resolver: Gee.Map | null) => XPathObject
}

export abstract class XPathContextIface {

    // Own properties of GXml-0.20.GXml.XPathContextIface

    static name: string
}

export interface XPathObjectIface {

    // Own fields of GXml-0.20.GXml.XPathObjectIface

    get_object_type: (self: XPathObject) => XPathObjectType
    get_boolean_value: (self: XPathObject) => boolean
    get_string_value: (self: XPathObject) => string
    get_number_value: (self: XPathObject) => number
    get_nodeset: (self: XPathObject) => DomHTMLCollection
}

export abstract class XPathObjectIface {

    // Own properties of GXml-0.20.GXml.XPathObjectIface

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