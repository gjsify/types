/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gxml-0.14-ambient.d.ts';
import './gxml-0.14-import.d.ts';
/**
 * GXml-0.14
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';

export namespace GXml {
    enum NodeType {
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
    enum XPathObjectType {
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
    class DocumentError extends GLib.Error {
        // Own fields of GXml-0.14.DocumentError

        INVALID_DOCUMENT_ERROR: number;
        INVALID_FILE: number;

        // Constructors of GXml-0.14.DocumentError

        constructor(options: { message: string; code: number });
    }

    class SerializableError extends GLib.Error {
        // Own fields of GXml-0.14.SerializableError

        UNSUPPORTED_TYPE_ERROR: number;
        STR_TO_VALUE_ERROR: number;

        // Constructors of GXml-0.14.SerializableError

        constructor(options: { message: string; code: number });
    }

    class SerializableEnumError extends GLib.Error {
        // Own fields of GXml-0.14.SerializableEnumError

        INVALID_VALUE_ERROR: number;
        PARSE_ERROR: number;

        // Constructors of GXml-0.14.SerializableEnumError

        constructor(options: { message: string; code: number });
    }

    class EnumerationError extends GLib.Error {
        // Own fields of GXml-0.14.EnumerationError

        INVALID_VALUE: number;
        INVALID_TEXT: number;

        // Constructors of GXml-0.14.EnumerationError

        constructor(options: { message: string; code: number });
    }

    class Error extends GLib.Error {
        // Own fields of GXml-0.14.Error

        NOT_SUPPORTED: number;
        PARSER: number;
        WRITER: number;

        // Constructors of GXml-0.14.Error

        constructor(options: { message: string; code: number });
    }

    class DomError extends GLib.Error {
        // Own fields of GXml-0.14.DomError

        INDEX_SIZE_ERROR: number;
        DOMSTRING_SIZE_ERROR: number;
        HIERARCHY_REQUEST_ERROR: number;
        WRONG_DOCUMENT_ERROR: number;
        INVALID_CHARACTER_ERROR: number;
        NO_DATA_ALLOWED_ERROR: number;
        NO_MODIFICATION_ALLOWED_ERROR: number;
        NOT_FOUND_ERROR: number;
        NOT_SUPPORTED_ERROR: number;
        INUSE_ATTRIBUTE_ERROR: number;
        INVALID_STATE_ERROR: number;
        SYNTAX_ERROR: number;
        INVALID_MODIFICATION_ERROR: number;
        NAMESPACE_ERROR: number;
        INVALID_ACCESS_ERROR: number;
        VALIDATION_ERROR: number;
        TYPE_MISMATCH_ERROR: number;
        SECURITY_ERROR: number;
        NETWORK_ERROR: number;
        ABORT_ERROR: number;
        URL_MISMATCH_ERROR: number;
        QUOTA_EXCEEDED_ERROR: number;
        TIME_OUT_ERROR: number;
        INVALID_NODE_TYPE_ERROR: number;
        DATA_CLONE_ERROR: number;

        // Constructors of GXml-0.14.DomError

        constructor(options: { message: string; code: number });
    }

    class XPathError extends GLib.Error {
        // Own fields of GXml-0.14.XPathError

        EXPRESSION_OK: number;
        NUMBER_ERROR: number;
        UNFINISHED_LITERAL_ERROR: number;
        START_LITERAL_ERROR: number;
        VARIABLE_REF_ERROR: number;
        UNDEF_VARIABLE_ERROR: number;
        INVALID_PREDICATE_ERROR: number;
        EXPR_ERROR: number;
        UNCLOSED_ERROR: number;
        UNKNOWN_FUNC_ERROR: number;
        INVALID_OPERAND: number;
        INVALID_TYPE: number;
        INVALID_ARITY: number;
        INVALID_CTXT_SIZE: number;
        INVALID_CTXT_POSITION: number;
        MEMORY_ERROR: number;
        XPTR_SYNTAX_ERROR: number;
        XPTR_RESOURCE_ERROR: number;
        XPTR_SUB_RESOURCE_ERROR: number;
        UNDEF_PREFIX_ERROR: number;
        ENCODING_ERROR: number;
        INVALID_CHAR_ERROR: number;
        INVALID_CTXT: number;

        // Constructors of GXml-0.14.XPathError

        constructor(options: { message: string; code: number });
    }

    class ParserError extends GLib.Error {
        // Own fields of GXml-0.14.ParserError

        INVALID_DATA_ERROR: number;
        INVALID_FILE_ERROR: number;
        INVALID_STREAM_ERROR: number;

        // Constructors of GXml-0.14.ParserError

        constructor(options: { message: string; code: number });
    }

    class IXsdSchemaError extends GLib.Error {
        // Own fields of GXml-0.14.IXsdSchemaError

        INVALIDATION_ERROR: number;

        // Constructors of GXml-0.14.IXsdSchemaError

        constructor(options: { message: string; code: number });
    }

    enum TDocumentReadType {
        NEXT,
        CONTINUE,
        STOP,
    }
    enum DomEventPhase {
        NONE,
        CAPTURING_PHASE,
        AT_TARGET,
        BUBBLING_PHASE,
    }
    enum DomNodeNodeType {
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
    enum DomRangeBoundaryPoints {
        START_TO_START,
        START_TO_END,
        END_TO_END,
        END_TO_START,
    }
    interface DomMutationCallback {
        (mutations: Gee.List, observer: DomMutationObserver): void;
    }
    enum DomEventFlags {
        STOP_PROPAGATION_FLAG,
        STOP_IMMEDIATE_PROPAGATION_FLAG,
        CANCELED_FLAG,
        INITIALIZED_FLAG,
        DISPATCH_FLAG,
    }
    enum DomNodeDocumentPosition {
        NONE,
        DISCONNECTED,
        PRECEDING,
        FOLLOWING,
        CONTAINS,
        CONTAINED_BY,
        IMPLEMENTATION_SPECIFIC,
    }
    module ElementList {
        // Constructor properties interface
    }

    class ElementList extends Gee.ArrayList {
        // Constructors of GXml-0.14.ElementList

        static ['new'](): ElementList;
    }

    module NodeList {
        // Constructor properties interface
    }

    class NodeList extends Gee.ArrayList {
        // Constructors of GXml-0.14.NodeList

        static ['new'](): NodeList;

        // Owm methods of GXml-0.14.NodeList

        get(index: number): Node;
        to_array(): Node[];
    }

    module SerializableBool {
        // Constructor properties interface
    }

    class SerializableBool extends GObject.Object {
        // Constructors of GXml-0.14.SerializableBool

        static ['new'](): SerializableBool;

        // Owm methods of GXml-0.14.SerializableBool

        get_value(): boolean;
        set_value(val: boolean): void;
        to_string(): string;
    }

    module SerializableDouble {
        // Constructor properties interface
    }

    class SerializableDouble extends GObject.Object {
        // Constructors of GXml-0.14.SerializableDouble

        static ['new'](): SerializableDouble;

        // Owm methods of GXml-0.14.SerializableDouble

        get_fraction(): number;
        set_fraction(fraction: number): void;
        get_value(): number;
        set_value(val: number): void;
        to_string(): string;
        format(f: string): string;
    }

    module SerializableFloat {
        // Constructor properties interface
    }

    class SerializableFloat extends SerializableDouble {
        // Constructors of GXml-0.14.SerializableFloat

        static ['new'](): SerializableFloat;

        // Owm methods of GXml-0.14.SerializableFloat

        get_value(): number;
        set_value(val: number): void;
    }

    module SerializableEnum {
        // Constructor properties interface
    }

    class SerializableEnum extends GObject.Object {
        // Constructors of GXml-0.14.SerializableEnum

        static with_enum(type: GObject.GType): SerializableEnum;

        static ['new'](): SerializableEnum;

        // Owm methods of GXml-0.14.SerializableEnum

        set_enum_type(type: GObject.GType): void;
        get_enum_type(): GObject.GType;
        parse(str: string): void;
        parse_integer(v: number): void;
        to_integer(): number;
        to_string(): string;
    }

    module SerializableInt {
        // Constructor properties interface
    }

    class SerializableInt extends SerializableDouble {
        // Constructors of GXml-0.14.SerializableInt

        static ['new'](): SerializableInt;

        // Owm methods of GXml-0.14.SerializableInt

        get_value(): number;
        set_value(val: number): void;
    }

    module SerializableValueList {
        // Constructor properties interface
    }

    class SerializableValueList extends GObject.Object {
        // Own fields of GXml-0.14.SerializableValueList

        extra: Gee.ArrayList;

        // Constructors of GXml-0.14.SerializableValueList

        static ['new'](): SerializableValueList;

        // Owm methods of GXml-0.14.SerializableValueList

        get_values(): Gee.List;
        add_values(vals: string[]): void;
        get_value_at(index: number): string;
        select_value_at(index: number): void;
        get_values_array(): string[];
        is_value(): boolean;
        to_string(): string;
    }

    module SerializableObjectModel {
        // Constructor properties interface
    }

    abstract class SerializableObjectModel extends GObject.Object {
        // Own properties of GXml-0.14.SerializableObjectModel

        properties: GObject.ParamSpec[];
        ignored_serializable_properties: GLib.HashTable<string, GObject.ParamSpec>;
        ignoredSerializableProperties: GLib.HashTable<string, GObject.ParamSpec>;

        // Owm methods of GXml-0.14.SerializableObjectModel

        get_enable_unknown_serializable_property(): boolean;
        serialize_use_xml_node_value(): boolean;
        property_use_nick(): boolean;
        set_default_namespace(node: Node): boolean;
        node_name(): string;
        default_node_name(): string;
        find_property_spec(property_name: string): GObject.ParamSpec;
        list_serializable_properties(): GObject.ParamSpec[];
        serialize(node: Node): Node;
        default_serialize(node: Node): Node;
        serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        default_serialize_property(element: Element, prop: GObject.ParamSpec): Node;
        deserialize(node: Node): boolean;
        default_deserialize(node: Node): boolean;
        deserialize_property(property_node: Node): boolean;
        default_deserialize_property(property_node: Node): boolean;
        to_string(): string;
        get_properties(): GObject.ParamSpec[];
        set_properties(value: GObject.ParamSpec[]): void;
        get_ignored_serializable_properties(): GLib.HashTable<string, GObject.ParamSpec>;
        set_ignored_serializable_properties(value: GLib.HashTable<string, GObject.ParamSpec>): void;
    }

    module SerializableTreeMap {
        // Constructor properties interface
    }

    class SerializableTreeMap extends Gee.TreeMap {
        // Own properties of GXml-0.14.SerializableTreeMap

        properties: GObject.ParamSpec[];
        ignored_serializable_properties: GLib.HashTable<string, GObject.ParamSpec>;
        ignoredSerializableProperties: GLib.HashTable<string, GObject.ParamSpec>;

        // Constructors of GXml-0.14.SerializableTreeMap

        static ['new'](): SerializableTreeMap;

        // Owm methods of GXml-0.14.SerializableTreeMap

        deserialize_proceed(): boolean;
        deserialized(): boolean;
        deserialize_node(node: Node): boolean;
        deserialize_children(): boolean;
        set_default_namespace(node: Node): boolean;
        serialize_use_xml_node_value(): boolean;
        property_use_nick(): boolean;
        node_name(): string;
        find_property_spec(property_name: string): GObject.ParamSpec;
        list_serializable_properties(): GObject.ParamSpec[];
        serialize(node: Node): Node;
        default_serialize(node: Node): Node;
        serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        default_serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        deserialize(node: Node): boolean;
        default_deserialize(node: Node): boolean;
        deserialize_property(property_node: Node): boolean;
        default_deserialize_property(property_node: Node): boolean;
        get_properties(): GObject.ParamSpec[];
        set_properties(value: GObject.ParamSpec[]): void;
        get_ignored_serializable_properties(): GLib.HashTable<string, GObject.ParamSpec>;
        set_ignored_serializable_properties(value: GLib.HashTable<string, GObject.ParamSpec>): void;
    }

    module SerializableHashMap {
        // Constructor properties interface
    }

    class SerializableHashMap extends Gee.HashMap {
        // Own properties of GXml-0.14.SerializableHashMap

        properties: GObject.ParamSpec[];
        ignored_serializable_properties: GLib.HashTable<string, GObject.ParamSpec>;
        ignoredSerializableProperties: GLib.HashTable<string, GObject.ParamSpec>;

        // Constructors of GXml-0.14.SerializableHashMap

        static ['new'](): SerializableHashMap;

        // Owm methods of GXml-0.14.SerializableHashMap

        deserialize_proceed(): boolean;
        deserialized(): boolean;
        deserialize_node(node: Node): boolean;
        deserialize_children(): boolean;
        set_default_namespace(node: Node): boolean;
        get_enable_unknown_serializable_property(): boolean;
        serialize_use_xml_node_value(): boolean;
        property_use_nick(): boolean;
        node_name(): string;
        find_property_spec(property_name: string): GObject.ParamSpec;
        list_serializable_properties(): GObject.ParamSpec[];
        serialize(node: Node): Node;
        default_serialize(node: Node): Node;
        serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        default_serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        deserialize(node: Node): boolean;
        default_deserialize(node: Node): boolean;
        deserialize_property(property_node: Node): boolean;
        default_deserialize_property(property_node: Node): boolean;
        get_properties(): GObject.ParamSpec[];
        set_properties(value: GObject.ParamSpec[]): void;
        get_ignored_serializable_properties(): GLib.HashTable<string, GObject.ParamSpec>;
        set_ignored_serializable_properties(value: GLib.HashTable<string, GObject.ParamSpec>): void;
    }

    module SerializableDualKeyMap {
        // Constructor properties interface
    }

    class SerializableDualKeyMap extends GObject.Object {
        // Own properties of GXml-0.14.SerializableDualKeyMap

        readonly value_type: GObject.GType;
        readonly valueType: GObject.GType;
        readonly primary_key_type: GObject.GType;
        readonly primaryKeyType: GObject.GType;
        readonly secondary_key_type: GObject.GType;
        readonly secondaryKeyType: GObject.GType;
        readonly primary_keys: Gee.Collection;
        readonly primaryKeys: Gee.Collection;
        readonly size: number;
        properties: GObject.ParamSpec[];
        ignored_serializable_properties: GLib.HashTable<string, GObject.ParamSpec>;
        ignoredSerializableProperties: GLib.HashTable<string, GObject.ParamSpec>;

        // Own fields of GXml-0.14.SerializableDualKeyMap

        storage: Gee.HashMultiMap;

        // Constructors of GXml-0.14.SerializableDualKeyMap

        static ['new'](): SerializableDualKeyMap;

        // Owm methods of GXml-0.14.SerializableDualKeyMap

        deserialize_proceed(): boolean;
        deserialized(): boolean;
        deserialize_node(node: Node): boolean;
        deserialize_children(): boolean;
        secondary_keys(key: any): Gee.Collection;
        values_for_key(primary_key: any): Gee.Collection;
        values(): Gee.Collection;
        set(primary_key: any, secundary_key: any, val: any): void;
        get(primary_key: any, secondary_key: any): any;
        set_default_namespace(node: Node): boolean;
        get_enable_unknown_serializable_property(): boolean;
        serialize_use_xml_node_value(): boolean;
        property_use_nick(): boolean;
        node_name(): string;
        find_property_spec(property_name: string): GObject.ParamSpec;
        list_serializable_properties(): GObject.ParamSpec[];
        serialize(node: Node): Node;
        default_serialize(node: Node): Node;
        serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        default_serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        deserialize(node: Node): boolean;
        default_deserialize(node: Node): boolean;
        deserialize_property(property_node: Node): boolean;
        default_deserialize_property(property_node: Node): boolean;
        get_value_type(): GObject.GType;
        get_primary_key_type(): GObject.GType;
        get_secondary_key_type(): GObject.GType;
        get_primary_keys(): Gee.Collection;
        get_size(): number;
        get_properties(): GObject.ParamSpec[];
        set_properties(value: GObject.ParamSpec[]): void;
        get_ignored_serializable_properties(): GLib.HashTable<string, GObject.ParamSpec>;
        set_ignored_serializable_properties(value: GLib.HashTable<string, GObject.ParamSpec>): void;
    }

    module SerializableArrayList {
        // Constructor properties interface
    }

    class SerializableArrayList extends Gee.ArrayList {
        // Own properties of GXml-0.14.SerializableArrayList

        properties: GObject.ParamSpec[];
        ignored_serializable_properties: GLib.HashTable<string, GObject.ParamSpec>;
        ignoredSerializableProperties: GLib.HashTable<string, GObject.ParamSpec>;

        // Constructors of GXml-0.14.SerializableArrayList

        static ['new'](): SerializableArrayList;

        // Owm methods of GXml-0.14.SerializableArrayList

        deserialize_proceed(): boolean;
        deserialized(): boolean;
        deserialize_node(node: Node): boolean;
        deserialize_children(): boolean;
        set_default_namespace(node: Node): boolean;
        serialize_use_xml_node_value(): boolean;
        property_use_nick(): boolean;
        node_name(): string;
        find_property_spec(property_name: string): GObject.ParamSpec;
        list_serializable_properties(): GObject.ParamSpec[];
        serialize(node: Node): Node;
        default_serialize(node: Node): Node;
        serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        default_serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        deserialize(node: Node): boolean;
        default_deserialize(node: Node): boolean;
        deserialize_property(property_node: Node): boolean;
        default_deserialize_property(property_node: Node): boolean;
        get_properties(): GObject.ParamSpec[];
        set_properties(value: GObject.ParamSpec[]): void;
        get_ignored_serializable_properties(): GLib.HashTable<string, GObject.ParamSpec>;
        set_ignored_serializable_properties(value: GLib.HashTable<string, GObject.ParamSpec>): void;
    }

    module SerializableContainer {
        // Constructor properties interface
    }

    abstract class SerializableContainer extends SerializableObjectModel {
        // Owm methods of GXml-0.14.SerializableContainer

        init_containers(): void;
    }

    module TAttribute {
        // Constructor properties interface
    }

    class TAttribute extends TNode {
        // Constructors of GXml-0.14.TAttribute

        static ['new'](d: Document, name: string, value: string): TAttribute;
    }

    module TComment {
        // Constructor properties interface
    }

    class TComment extends TNode {
        // Constructors of GXml-0.14.TComment

        static ['new'](doc: Document, text: string): TComment;
    }

    module TCDATA {
        // Constructor properties interface
    }

    class TCDATA extends TNode {
        // Constructors of GXml-0.14.TCDATA

        static ['new'](d: Document, text: string): TCDATA;
    }

    module TDocument {
        // Constructor properties interface
    }

    class TDocument extends TNode {
        // Constructors of GXml-0.14.TDocument

        static ['new'](): TDocument;

        static from_path(path: string): TDocument;

        static from_uri(uri: string): TDocument;

        static from_file(file: Gio.File): TDocument;

        static from_stream(stream: Gio.InputStream): TDocument;

        static from_string(str: string): TDocument;

        static from_path_with_readtype_func(path: string, func: TDocumentReadTypeFunc): TDocument;

        static from_uri_with_readtype_func(uri: string, func: TDocumentReadTypeFunc): TDocument;

        static from_file_with_readtype_func(file: Gio.File, func: TDocumentReadTypeFunc): TDocument;

        static from_stream_with_readtype_func(stream: Gio.InputStream, func: TDocumentReadTypeFunc): TDocument;

        static from_string_with_readtype_func(str: string, func: TDocumentReadTypeFunc): TDocument;

        // Owm methods of GXml-0.14.TDocument

        static tw_save_as(doc: Document, f: Gio.File, cancellable: Gio.Cancellable): boolean;
        static write_document(doc: Document, tw: libxml2.TextWriter): void;
        static start_node(
            doc: Document,
            tw: libxml2.TextWriter,
            node: Node,
            root: boolean,
            declared_ns: Gee.ArrayList,
        ): void;
        static read_doc(doc: Document, file: Gio.File, rtfunc: TDocumentReadTypeFunc): void;
        static read_doc_stream(doc: Document, istream: Gio.InputStream, rtfunc: TDocumentReadTypeFunc): void;
        static read_node(node: Node, tr: libxml2.TextReader, rntfunc: TDocumentReadTypeFunc): TDocumentReadType;

        // Owm methods of GXml-0.14.TDocument

        save_to(f: Gio.File, cancellable: Gio.Cancellable): boolean;
    }

    module TElement {
        // Constructor properties interface
    }

    class TElement extends TNode {
        // Constructors of GXml-0.14.TElement

        static ['new'](d: Document, name: string): TElement;
    }

    module TNamespace {
        // Constructor properties interface
    }

    class TNamespace extends TNode {
        // Constructors of GXml-0.14.TNamespace

        static ['new'](d: Document, uri: string, prefix: string): TNamespace;
    }

    module TNode {
        // Constructor properties interface
    }

    abstract class TNode extends GObject.Object {
        // Own properties of GXml-0.14.TNode

        readonly attrs: Gee.Map;
        readonly children_nodes: Gee.BidirList;
        readonly childrenNodes: Gee.BidirList;
        readonly document: Document;
        readonly name: string;
        readonly namespaces: Gee.List;
        readonly type_node: NodeType;
        readonly typeNode: NodeType;
        value: string;
        readonly parent: Node;

        // Owm methods of GXml-0.14.TNode

        set_namespace(uri: string, prefix: string): boolean;
        to_string(): string;
        set_parent(node: Node): void;
        get_attrs(): Gee.Map;
        get_children_nodes(): Gee.BidirList;
        get_document(): Document;
        get_name(): string;
        get_namespaces(): Gee.List;
        get_type_node(): NodeType;
        get_value(): string;
        set_value(value: string): void;
        get_parent(): Node;
    }

    module TNodeTChildrenList {
        // Constructor properties interface
    }

    class TNodeTChildrenList extends Gee.AbstractBidirList {
        // Constructors of GXml-0.14.TNodeTChildrenList

        static ['new'](e: Node): TNodeTChildrenList;
    }

    module TProcessingInstruction {
        // Constructor properties interface
    }

    class TProcessingInstruction extends TNode {
        // Constructors of GXml-0.14.TProcessingInstruction

        static ['new'](doc: Document, target: string, data: string): TProcessingInstruction;
    }

    module TText {
        // Constructor properties interface
    }

    class TText extends TNode {
        // Constructors of GXml-0.14.TText

        static ['new'](d: Document, text: string): TText;
    }

    module HtmlDocument {
        // Constructor properties interface
    }

    class HtmlDocument extends GDocument {
        // Own properties of GXml-0.14.HtmlDocument

        readonly default_options: number;
        readonly defaultOptions: number;

        // Constructors of GXml-0.14.HtmlDocument

        static from_path(path: string, options: number): HtmlDocument;

        static from_uri(uri: string, options: number): HtmlDocument;

        static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable): HtmlDocument;

        static from_string(html: string, options: number): HtmlDocument;

        static ['new'](): HtmlDocument;

        // Owm methods of GXml-0.14.HtmlDocument

        static get_default_options(): number;
    }

    module GAttribute {
        // Constructor properties interface
    }

    class GAttribute extends GNode {
        // Constructors of GXml-0.14.GAttribute

        static ['new'](doc: GDocument, node: any): GAttribute;
    }

    module GComment {
        // Constructor properties interface
    }

    class GComment extends GCharacterData {
        // Constructors of GXml-0.14.GComment

        static ['new'](doc: GDocument, node: any): GComment;
    }

    module GCharacterData {
        // Constructor properties interface
    }

    class GCharacterData extends GNonDocumentChildNode {
        // Constructors of GXml-0.14.GCharacterData

        static ['new'](): GCharacterData;
    }

    module GChildNode {
        // Constructor properties interface
    }

    class GChildNode extends GNode {
        // Constructors of GXml-0.14.GChildNode

        static ['new'](): GChildNode;
    }

    module GNonDocumentChildNode {
        // Constructor properties interface
    }

    class GNonDocumentChildNode extends GChildNode {
        // Constructors of GXml-0.14.GNonDocumentChildNode

        static ['new'](): GNonDocumentChildNode;
    }

    module GCDATA {
        // Constructor properties interface
    }

    class GCDATA extends GNode {
        // Constructors of GXml-0.14.GCDATA

        static ['new'](doc: GDocument, node: any): GCDATA;
    }

    module GDocument {
        // Constructor properties interface
    }

    class GDocument extends GNode {
        // Own fields of GXml-0.14.GDocument

        doc: any;

        // Constructors of GXml-0.14.GDocument

        static ['new'](): GDocument;

        static from_path(path: string, options: number): GDocument;

        static from_uri(uri: string, options: number): GDocument;

        static from_file(file: Gio.File, options: number, cancel: Gio.Cancellable): GDocument;

        static from_string(str: string, options: number): GDocument;

        static from_stream(istream: Gio.InputStream): GDocument;

        static from_doc(doc: libxml2.Doc): GDocument;

        // Owm methods of GXml-0.14.GDocument

        libxml_to_string(): string;
        save(cancellable: Gio.Cancellable): boolean;
        save_as(f: Gio.File, cancellable: Gio.Cancellable): boolean;
    }

    module GImplementation {
        // Constructor properties interface
    }

    class GImplementation extends GObject.Object {
        // Constructors of GXml-0.14.GImplementation

        static ['new'](): GImplementation;
    }

    module GDocumentType {
        // Constructor properties interface
    }

    class GDocumentType extends GChildNode {
        // Constructors of GXml-0.14.GDocumentType

        static with_name(name: string): GDocumentType;

        static with_ids(name: string, public_id: string, system_id: string): GDocumentType;

        static ['new'](): GDocumentType;
    }

    module GDocumentFragment {
        // Constructor properties interface
    }

    class GDocumentFragment extends GDocument {
        // Constructors of GXml-0.14.GDocumentFragment

        static ['new'](d: GDocument): GDocumentFragment;
    }

    module GDomNodeIterator {
        // Constructor properties interface
    }

    class GDomNodeIterator extends GObject.Object {
        // Constructors of GXml-0.14.GDomNodeIterator

        static ['new'](n: DomNode, what_to_show: number, filter: DomNodeFilter): GDomNodeIterator;
    }

    module GDomTreeWalker {
        // Constructor properties interface
    }

    class GDomTreeWalker extends GObject.Object {
        // Constructors of GXml-0.14.GDomTreeWalker

        static ['new'](r: DomNode, w: number, f: DomNodeFilter): GDomTreeWalker;
    }

    module GDomTokenList {
        // Constructor properties interface
    }

    class GDomTokenList extends Gee.ArrayList {
        // Constructors of GXml-0.14.GDomTokenList

        static ['new'](e: DomElement, attr: string): GDomTokenList;

        // Owm methods of GXml-0.14.GDomTokenList

        update(): void;
    }

    module GDomSettableTokenList {
        // Constructor properties interface
    }

    class GDomSettableTokenList extends GDomTokenList {
        // Constructors of GXml-0.14.GDomSettableTokenList

        static ['new'](e: DomElement, attr: string): GDomSettableTokenList;
    }

    module GDomHTMLCollection {
        // Constructor properties interface
    }

    class GDomHTMLCollection extends Gee.ArrayList {
        // Constructors of GXml-0.14.GDomHTMLCollection

        static ['new'](): GDomHTMLCollection;
    }

    module GDomEvent {
        // Constructor properties interface
    }

    class GDomEvent extends GObject.Object {
        // Constructors of GXml-0.14.GDomEvent

        static ['new'](): GDomEvent;
    }

    module GDomCustomEvent {
        // Constructor properties interface
    }

    class GDomCustomEvent extends GDomEvent {
        // Own properties of GXml-0.14.GDomCustomEvent

        readonly detail: GObject.Value;

        // Constructors of GXml-0.14.GDomCustomEvent

        static ['new'](): GDomCustomEvent;

        // Owm methods of GXml-0.14.GDomCustomEvent

        init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: GObject.Value): void;
        get_detail(): GObject.Value;
    }

    module GDomRange {
        // Constructor properties interface
    }

    class GDomRange extends GObject.Object {
        // Constructors of GXml-0.14.GDomRange

        static ['new'](doc: DomDocument): GDomRange;
    }

    module GElement {
        // Constructor properties interface
    }

    class GElement extends GNonDocumentChildNode {
        // Constructors of GXml-0.14.GElement

        static ['new'](doc: GDocument, node: any): GElement;
    }

    module GNamespace {
        // Constructor properties interface
    }

    class GNamespace extends GObject.Object {
        // Constructors of GXml-0.14.GNamespace

        static ['new'](ns: any): GNamespace;

        // Owm methods of GXml-0.14.GNamespace

        get_internal_ns(): any;
    }

    module GNode {
        // Constructor properties interface
    }

    abstract class GNode extends GObject.Object {
        // Own properties of GXml-0.14.GNode

        readonly attrs: Gee.Map;
        readonly children_nodes: Gee.BidirList;
        readonly childrenNodes: Gee.BidirList;
        readonly namespaces: Gee.List;
        readonly document: Document;
        readonly parent: Node;
        readonly type_node: NodeType;
        readonly typeNode: NodeType;
        readonly name: string;
        value: string;

        // Owm methods of GXml-0.14.GNode

        static to_gnode(doc: GDocument, node: any): Node;

        // Owm methods of GXml-0.14.GNode

        set_namespace(uri: string, prefix: string): boolean;
        to_string(): string;
        get_internal_node(): any;
        get_attrs(): Gee.Map;
        get_children_nodes(): Gee.BidirList;
        get_namespaces(): Gee.List;
        get_document(): Document;
        get_parent(): Node;
        get_type_node(): NodeType;
        get_name(): string;
        get_value(): string;
        set_value(value: string): void;
    }

    module GProcessingInstruction {
        // Constructor properties interface
    }

    class GProcessingInstruction extends GCharacterData {
        // Constructors of GXml-0.14.GProcessingInstruction

        static ['new'](doc: GDocument, node: any): GProcessingInstruction;
    }

    module GText {
        // Constructor properties interface
    }

    class GText extends GCharacterData {
        // Constructors of GXml-0.14.GText

        static ['new'](doc: GDocument, node: any): GText;
    }

    module GHashMapAttr {
        // Constructor properties interface
    }

    class GHashMapAttr extends Gee.AbstractMap {
        // Constructors of GXml-0.14.GHashMapAttr

        static ['new'](doc: GDocument, node: any): GHashMapAttr;
    }

    module GHashMapAttrEntry {
        // Constructor properties interface
    }

    class GHashMapAttrEntry extends Gee.MapEntry {
        // Constructors of GXml-0.14.GHashMapAttrEntry

        static ['new'](doc: GDocument, attr: any): GHashMapAttrEntry;
    }

    module GHashMapAttrIterator {
        // Constructor properties interface
    }

    class GHashMapAttrIterator extends GObject.Object {
        // Constructors of GXml-0.14.GHashMapAttrIterator

        static ['new'](doc: GDocument, node: any): GHashMapAttrIterator;
    }

    module GListChildren {
        // Constructor properties interface
    }

    class GListChildren extends Gee.AbstractBidirList {
        // Constructors of GXml-0.14.GListChildren

        static ['new'](doc: GDocument, node: any): GListChildren;
    }

    module GListChildrenIterator {
        // Constructor properties interface
    }

    class GListChildrenIterator extends GObject.Object {
        // Constructors of GXml-0.14.GListChildrenIterator

        static ['new'](doc: GDocument, node: any): GListChildrenIterator;
    }

    module GListNamespaces {
        // Constructor properties interface
    }

    class GListNamespaces extends Gee.AbstractList {
        // Constructors of GXml-0.14.GListNamespaces

        static ['new'](doc: GDocument, node: any): GListNamespaces;
    }

    module GListNamespacesIterator {
        // Constructor properties interface
    }

    class GListNamespacesIterator extends GObject.Object {
        // Constructors of GXml-0.14.GListNamespacesIterator

        static ['new'](node: any): GListNamespacesIterator;
    }

    module DomNodeFilter {
        // Constructor properties interface
    }

    class DomNodeFilter extends GObject.Object {
        // Constructors of GXml-0.14.DomNodeFilter

        static ['new'](): DomNodeFilter;
    }

    module DomElementList {
        // Constructor properties interface
    }

    class DomElementList extends Gee.ArrayList {
        // Constructors of GXml-0.14.DomElementList

        static ['new'](): DomElementList;
    }

    module DomEventInit {
        // Constructor properties interface
    }

    class DomEventInit extends GObject.Object {
        // Own properties of GXml-0.14.DomEventInit

        bubbles: boolean;
        cancelable: boolean;

        // Constructors of GXml-0.14.DomEventInit

        static ['new'](): DomEventInit;

        // Owm methods of GXml-0.14.DomEventInit

        get_bubbles(): boolean;
        set_bubbles(value: boolean): void;
        get_cancelable(): boolean;
        set_cancelable(value: boolean): void;
    }

    module DomCustomEventInit {
        // Constructor properties interface
    }

    class DomCustomEventInit extends DomEventInit {
        // Own properties of GXml-0.14.DomCustomEventInit

        detail: GObject.Value;

        // Constructors of GXml-0.14.DomCustomEventInit

        static ['new'](): DomCustomEventInit;

        // Owm methods of GXml-0.14.DomCustomEventInit

        get_detail(): GObject.Value;
        set_detail(value: GObject.Value): void;
    }

    module DomTimeStamp {
        // Constructor properties interface
    }

    class DomTimeStamp extends GObject.Object {
        // Own properties of GXml-0.14.DomTimeStamp

        time: GLib.DateTime;

        // Constructors of GXml-0.14.DomTimeStamp

        static ['new'](): DomTimeStamp;

        // Owm methods of GXml-0.14.DomTimeStamp

        to_string(): string;
        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
    }

    module DomMutationObserverInit {
        // Constructor properties interface
    }

    class DomMutationObserverInit extends GObject.Object {
        // Own properties of GXml-0.14.DomMutationObserverInit

        child_list: boolean;
        childList: boolean;
        attributes: boolean;
        character_data: boolean;
        characterData: boolean;
        subtree: boolean;
        attribute_old_value: boolean;
        attributeOldValue: boolean;
        character_data_old_value: boolean;
        characterDataOldValue: boolean;
        attribute_filter: Gee.List;
        attributeFilter: Gee.List;

        // Constructors of GXml-0.14.DomMutationObserverInit

        static ['new'](): DomMutationObserverInit;

        // Owm methods of GXml-0.14.DomMutationObserverInit

        get_child_list(): boolean;
        set_child_list(value: boolean): void;
        get_attributes(): boolean;
        set_attributes(value: boolean): void;
        get_character_data(): boolean;
        set_character_data(value: boolean): void;
        get_subtree(): boolean;
        set_subtree(value: boolean): void;
        get_attribute_old_value(): boolean;
        set_attribute_old_value(value: boolean): void;
        get_character_data_old_value(): boolean;
        set_character_data_old_value(value: boolean): void;
        get_attribute_filter(): Gee.List;
        set_attribute_filter(value: Gee.List): void;
    }

    module DomErrorName {
        // Constructor properties interface
    }

    class DomErrorName extends GObject.Object {
        // Constructors of GXml-0.14.DomErrorName

        static ['new'](): DomErrorName;

        // Owm methods of GXml-0.14.DomErrorName

        get_name(error_code: number): string;
        get_code(error_name: string): number;
    }

    module GXPathObject {
        // Constructor properties interface
    }

    class GXPathObject extends GObject.Object {
        // Constructors of GXml-0.14.GXPathObject

        static ['new'](document: GDocument, pointer: any): GXPathObject;
    }

    module GomDocument {
        // Constructor properties interface
    }

    class GomDocument extends GomNode {
        // Constructors of GXml-0.14.GomDocument

        static ['new'](): GomDocument;

        static from_path(path: string): GomDocument;

        static from_uri(uri: string): GomDocument;

        static from_file(file: Gio.File): GomDocument;

        static from_stream(stream: Gio.InputStream): GomDocument;

        static from_string(str: string): GomDocument;

        // Owm methods of GXml-0.14.GomDocument

        write_file(file: Gio.File): void;
        write_stream(stream: Gio.OutputStream): void;
        create_stream(): Gio.InputStream;
        write_string(): string;
        read_from_file(file: Gio.File): void;
        read_from_string(str: string): void;
    }

    module GomImplementation {
        // Constructor properties interface
    }

    class GomImplementation extends GObject.Object {
        // Constructors of GXml-0.14.GomImplementation

        static ['new'](): GomImplementation;
    }

    module GomDocumentType {
        // Constructor properties interface
    }

    class GomDocumentType extends GomNode {
        // Constructors of GXml-0.14.GomDocumentType

        static with_name(doc: DomDocument, name: string): GomDocumentType;

        static with_ids(doc: DomDocument, name: string, public_id: string, system_id: string): GomDocumentType;

        static ['new'](): GomDocumentType;
    }

    module GomDocumentFragment {
        // Constructor properties interface
    }

    class GomDocumentFragment extends GomNode {
        // Constructors of GXml-0.14.GomDocumentFragment

        static ['new'](doc: DomDocument): GomDocumentFragment;
    }

    module GomElement {
        // Constructor properties interface
    }

    class GomElement extends GomNode {
        // Own properties of GXml-0.14.GomElement

        parse_children: boolean;
        parseChildren: boolean;
        unparsed: string;

        // Constructors of GXml-0.14.GomElement

        static ['new'](): GomElement;

        // Owm methods of GXml-0.14.GomElement

        read_from_uri(uri: string): void;
        read_from_file(f: Gio.File, cancellable: Gio.Cancellable): void;
        read_from_stream(istream: Gio.InputStream, cancellable: Gio.Cancellable): void;
        read_from_string(str: string): void;
        write_string(): string;
        write_file(f: Gio.File): void;
        write_stream(stream: Gio.OutputStream): void;
        create_stream(): Gio.InputStream;
        lookup_prefix(nspace: string): string;
        lookup_namespace_uri(prefix: string): string;
        initialize(local_name: string): void;
        initialize_document(doc: DomDocument, local_name: string): void;
        initialize_with_namespace(namespace_uri: string, prefix: string, local_name: string): void;
        initialize_document_with_namespace(
            doc: DomDocument,
            namespace_uri: string,
            prefix: string,
            local_name: string,
        ): void;
        read_unparsed(): void;
        get_parse_children(): boolean;
        set_parse_children(value: boolean): void;
        get_unparsed(): string;
        set_unparsed(value: string): void;
    }

    module GomElementAttributes {
        // Constructor properties interface
    }

    class GomElementAttributes extends Gee.HashMap {
        // Constructors of GXml-0.14.GomElementAttributes

        static ['new'](element: GomElement): GomElementAttributes;
    }

    module GomAttr {
        // Constructor properties interface
    }

    class GomAttr extends GomNode {
        // Constructors of GXml-0.14.GomAttr

        static ['new'](element: DomElement, name: string, value: string): GomAttr;

        static namespace(
            element: DomElement,
            namespace_uri: string,
            prefix: string,
            name: string,
            value: string,
        ): GomAttr;
    }

    module GomNode {
        // Constructor properties interface
    }

    class GomNode extends GObject.Object {
        // Constructors of GXml-0.14.GomNode

        static ['new'](): GomNode;
    }

    module GomNodeList {
        // Constructor properties interface
    }

    class GomNodeList extends Gee.ArrayList {
        // Constructors of GXml-0.14.GomNodeList

        static ['new'](): GomNodeList;
    }

    module GomCharacterData {
        // Constructor properties interface
    }

    class GomCharacterData extends GomNode {
        // Constructors of GXml-0.14.GomCharacterData

        static ['new'](): GomCharacterData;
    }

    module GomText {
        // Constructor properties interface
    }

    class GomText extends GomCharacterData {
        // Constructors of GXml-0.14.GomText

        static ['new'](doc: DomDocument, data: string): GomText;
    }

    module GomProcessingInstruction {
        // Constructor properties interface
    }

    class GomProcessingInstruction extends GomCharacterData {
        // Constructors of GXml-0.14.GomProcessingInstruction

        static ['new'](doc: DomDocument, target: string, data: string): GomProcessingInstruction;
    }

    module GomComment {
        // Constructor properties interface
    }

    class GomComment extends GomCharacterData {
        // Constructors of GXml-0.14.GomComment

        static ['new'](doc: DomDocument, data: string): GomComment;
    }

    module BaseCollection {
        // Constructor properties interface
    }

    abstract class BaseCollection extends GObject.Object {
        // Own properties of GXml-0.14.BaseCollection

        readonly items_name: string;
        readonly itemsName: string;
        items_type: GObject.GType;
        itemsType: GObject.GType;
        readonly nodes_index: GLib.Queue;
        readonly nodesIndex: GLib.Queue;
        element: GomElement;

        // Owm methods of GXml-0.14.BaseCollection

        initialize(items_type: GObject.GType): void;
        initialize_element(e: GomElement): void;
        append(node: DomElement): void;
        search(): void;
        validate_append(index: number, element: DomElement): boolean;
        get_items_name(): string;
        get_items_type(): GObject.GType;
        set_items_type(value: GObject.GType): void;
        get_nodes_index(): GLib.Queue;
        get_element(): GomElement;
        set_element(value: GomElement): void;
    }

    module GomArrayList {
        // Constructor properties interface
    }

    class GomArrayList extends BaseCollection {
        // Constructors of GXml-0.14.GomArrayList

        static ['new'](): GomArrayList;
    }

    module GomHashMap {
        // Constructor properties interface
    }

    class GomHashMap extends BaseCollection {
        // Own properties of GXml-0.14.GomHashMap

        attribute_key: string;
        attributeKey: string;

        // Constructors of GXml-0.14.GomHashMap

        static ['new'](): GomHashMap;

        // Owm methods of GXml-0.14.GomHashMap

        initialize_element_with_key(element: GomElement, items_type: GObject.GType, attribute_key: string): void;
        initialize_with_key(items_type: GObject.GType, attribute_key: string): void;
        get(key: string): DomElement;
        has_key(key: string): boolean;
        get_keys(): string[];
        get_attribute_key(): string;
        set_attribute_key(value: string): void;
    }

    module GomHashPairedMap {
        // Constructor properties interface
    }

    class GomHashPairedMap extends BaseCollection {
        // Own properties of GXml-0.14.GomHashPairedMap

        attribute_primary_key: string;
        attributePrimaryKey: string;
        attribute_secondary_key: string;
        attributeSecondaryKey: string;

        // Constructors of GXml-0.14.GomHashPairedMap

        static ['new'](): GomHashPairedMap;

        // Owm methods of GXml-0.14.GomHashPairedMap

        initialize_element_with_keys(
            element: GomElement,
            items_type: GObject.GType,
            attribute_primary_key: string,
            attribute_secondary_key: string,
        ): void;
        initialize_with_keys(
            items_type: GObject.GType,
            attribute_primary_key: string,
            attribute_secondary_key: string,
        ): void;
        get(primary_key: string, secondary_key: string): DomElement;
        has_primary_key(key: string): boolean;
        has_secondary_key(pkey: string, key: string): boolean;
        get_primary_keys(): string[];
        get_secondary_keys(pkey: string): string[];
        get_attribute_primary_key(): string;
        set_attribute_primary_key(value: string): void;
        get_attribute_secondary_key(): string;
        set_attribute_secondary_key(value: string): void;
    }

    module GomHashThreeMap {
        // Constructor properties interface
    }

    class GomHashThreeMap extends BaseCollection {
        // Own properties of GXml-0.14.GomHashThreeMap

        attribute_primary_key: string;
        attributePrimaryKey: string;
        attribute_secondary_key: string;
        attributeSecondaryKey: string;
        attribute_third_key: string;
        attributeThirdKey: string;

        // Constructors of GXml-0.14.GomHashThreeMap

        static ['new'](): GomHashThreeMap;

        // Owm methods of GXml-0.14.GomHashThreeMap

        initialize_element_with_keys(
            element: GomElement,
            items_type: GObject.GType,
            attribute_primary_key: string,
            attribute_secondary_key: string,
            attribute_third_key: string,
        ): void;
        initialize_with_keys(
            items_type: GObject.GType,
            attribute_primary_key: string,
            attribute_secondary_key: string,
            attribute_third_key: string,
        ): void;
        get(primary_key: string, secondary_key: string, third_key: string): DomElement;
        has_primary_key(key: string): boolean;
        has_secondary_key(pkey: string, key: string): boolean;
        has_third_key(pkey: string, skey: string, key: string): boolean;
        get_primary_keys(): string[];
        get_secondary_keys(pkey: string): string[];
        get_third_keys(pkey: string, skey: string): string[];
        get_attribute_primary_key(): string;
        set_attribute_primary_key(value: string): void;
        get_attribute_secondary_key(): string;
        set_attribute_secondary_key(value: string): void;
        get_attribute_third_key(): string;
        set_attribute_third_key(value: string): void;
    }

    module GomBaseProperty {
        // Constructor properties interface
    }

    abstract class GomBaseProperty extends GObject.Object {
        // Own properties of GXml-0.14.GomBaseProperty

        value: string;

        // Owm methods of GXml-0.14.GomBaseProperty

        validate_value(val: string): boolean;
        get_value(): string;
        set_value(value: string): void;
    }

    module GomString {
        // Constructor properties interface
    }

    class GomString extends GomBaseProperty {
        // Constructors of GXml-0.14.GomString

        static ['new'](): GomString;
    }

    module GomArrayString {
        // Constructor properties interface
    }

    class GomArrayString extends GomBaseProperty {
        // Constructors of GXml-0.14.GomArrayString

        static ['new'](): GomArrayString;

        // Owm methods of GXml-0.14.GomArrayString

        get_values(): string[];
        initialize_strings(strs: string[]): void;
        is_valid_value(): boolean;
        select(index: number): void;
        search(str: string): boolean;
    }

    module GomXsdArrayString {
        // Constructor properties interface
    }

    class GomXsdArrayString extends GomArrayString {
        // Own properties of GXml-0.14.GomXsdArrayString

        simple_type: string;
        simpleType: string;
        source: Gio.File;

        // Constructors of GXml-0.14.GomXsdArrayString

        static ['new'](): GomXsdArrayString;

        // Owm methods of GXml-0.14.GomXsdArrayString

        load(): void;
        get_simple_type(): string;
        set_simple_type(value: string): void;
        get_source(): Gio.File;
        set_source(value: Gio.File): void;
    }

    module GomDouble {
        // Constructor properties interface
    }

    class GomDouble extends GomBaseProperty {
        // Own properties of GXml-0.14.GomDouble

        decimals: number;

        // Constructors of GXml-0.14.GomDouble

        static ['new'](): GomDouble;

        // Owm methods of GXml-0.14.GomDouble

        get_double(): number;
        set_double(value: number): void;
        get_decimals(): number;
        set_decimals(value: number): void;
    }

    module GomFloat {
        // Constructor properties interface
    }

    class GomFloat extends GomDouble {
        // Constructors of GXml-0.14.GomFloat

        static ['new'](): GomFloat;

        // Owm methods of GXml-0.14.GomFloat

        get_float(): number;
        set_float(value: number): void;
    }

    module GomInt {
        // Constructor properties interface
    }

    class GomInt extends GomBaseProperty {
        // Constructors of GXml-0.14.GomInt

        static ['new'](): GomInt;

        // Owm methods of GXml-0.14.GomInt

        get_integer(): number;
        set_integer(value: number): void;
    }

    module GomBoolean {
        // Constructor properties interface
    }

    class GomBoolean extends GomBaseProperty {
        // Constructors of GXml-0.14.GomBoolean

        static ['new'](): GomBoolean;

        // Owm methods of GXml-0.14.GomBoolean

        get_boolean(): boolean;
        set_boolean(value: boolean): void;
    }

    module GomEnum {
        // Constructor properties interface
    }

    class GomEnum extends GomBaseProperty {
        // Own properties of GXml-0.14.GomEnum

        enum_type: GObject.GType;
        enumType: GObject.GType;

        // Constructors of GXml-0.14.GomEnum

        static ['new'](): GomEnum;

        // Owm methods of GXml-0.14.GomEnum

        initialize_enum(enum_type: GObject.GType): void;
        get_enum(): number;
        set_enum(value: number): void;
        get_enum_type(): GObject.GType;
        set_enum_type(value: GObject.GType): void;
    }

    module GomDate {
        // Constructor properties interface
    }

    class GomDate extends GomBaseProperty {
        // Constructors of GXml-0.14.GomDate

        static ['new'](): GomDate;

        // Owm methods of GXml-0.14.GomDate

        get_date(): void;
        set_date(date: GLib.Date): void;
    }

    module GomDateTime {
        // Constructor properties interface
    }

    class GomDateTime extends GomBaseProperty {
        // Own properties of GXml-0.14.GomDateTime

        format: string;

        // Constructors of GXml-0.14.GomDateTime

        static ['new'](): GomDateTime;

        // Owm methods of GXml-0.14.GomDateTime

        get_datetime(): GLib.DateTime;
        set_datetime(dt: GLib.DateTime): void;
        get_format(): string;
        set_format(value: string): void;
    }

    module XParser {
        // Constructor properties interface
    }

    class XParser extends GObject.Object {
        // Constructors of GXml-0.14.XParser

        static ['new'](node: DomNode): XParser;

        // Owm methods of GXml-0.14.XParser

        create_stream(cancellable: Gio.Cancellable): Gio.InputStream;
        read_child_nodes_stream(istream: Gio.InputStream, cancellable: Gio.Cancellable): void;
        read_child_nodes_string(str: string, cancellable: Gio.Cancellable): void;
        read_node(node: DomNode): void;
        read_unparsed(): string;
        move_next_node(): boolean;
        current_is_empty_element(): boolean;
        current_is_element(): boolean;
        current_is_document(): boolean;
        current_node_name(): string;
        create_element(parent: DomNode): DomElement;
        read_element(element: DomElement): void;
        read_child_nodes(parent: DomNode): void;
        read_child_node(parent: DomNode): boolean;
        read_child_element(parent: DomNode): boolean;
        read_element_property(parent: DomNode): boolean;
        add_element_collection(parent: DomNode): boolean;
    }

    module GomXsdSchema {
        // Constructor properties interface
    }

    class GomXsdSchema extends GomElement {
        // Own properties of GXml-0.14.GomXsdSchema

        element_definitions: GomXsdListElements;
        elementDefinitions: GomXsdListElements;
        simple_type_definitions: GomXsdListSimpleTypes;
        simpleTypeDefinitions: GomXsdListSimpleTypes;
        complex_type_definitions: GomXsdListComplexTypes;
        complexTypeDefinitions: GomXsdListComplexTypes;

        // Constructors of GXml-0.14.GomXsdSchema

        static ['new'](): GomXsdSchema;

        // Owm methods of GXml-0.14.GomXsdSchema

        get_element_definitions(): GomXsdListElements;
        set_element_definitions(value: GomXsdListElements): void;
        get_simple_type_definitions(): GomXsdListSimpleTypes;
        set_simple_type_definitions(value: GomXsdListSimpleTypes): void;
        get_complex_type_definitions(): GomXsdListComplexTypes;
        set_complex_type_definitions(value: GomXsdListComplexTypes): void;
    }

    module GomXsdSimpleType {
        // Constructor properties interface
    }

    class GomXsdSimpleType extends GomElement {
        // Own properties of GXml-0.14.GomXsdSimpleType

        'final': string;
        name: string;
        annotation: GomXsdAnnotation;
        list: GomXsdTypeList;
        union: GomXsdTypeUnion;
        restriction: GomXsdTypeRestriction;

        // Constructors of GXml-0.14.GomXsdSimpleType

        static ['new'](): GomXsdSimpleType;

        // Owm methods of GXml-0.14.GomXsdSimpleType

        get_final(): string;
        set_final(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_annotation(): GomXsdAnnotation;
        set_annotation(value: GomXsdAnnotation): void;
        get_list(): GomXsdTypeList;
        set_list(value: GomXsdTypeList): void;
        get_union(): GomXsdTypeUnion;
        set_union(value: GomXsdTypeUnion): void;
        get_restriction(): GomXsdTypeRestriction;
        set_restriction(value: GomXsdTypeRestriction): void;
    }

    module GomXsdTypeDefinition {
        // Constructor properties interface
    }

    class GomXsdTypeDefinition extends GomElement {
        // Own properties of GXml-0.14.GomXsdTypeDefinition

        annotation: GomXsdAnnotation;

        // Constructors of GXml-0.14.GomXsdTypeDefinition

        static ['new'](): GomXsdTypeDefinition;

        // Owm methods of GXml-0.14.GomXsdTypeDefinition

        get_annotation(): GomXsdAnnotation;
        set_annotation(value: GomXsdAnnotation): void;
    }

    module GomXsdTypeList {
        // Constructor properties interface
    }

    class GomXsdTypeList extends GomXsdTypeDefinition {
        // Constructors of GXml-0.14.GomXsdTypeList

        static ['new'](): GomXsdTypeList;
    }

    module GomXsdTypeUnion {
        // Constructor properties interface
    }

    class GomXsdTypeUnion extends GomXsdTypeDefinition {
        // Constructors of GXml-0.14.GomXsdTypeUnion

        static ['new'](): GomXsdTypeUnion;
    }

    module GomXsdTypeRestriction {
        // Constructor properties interface
    }

    class GomXsdTypeRestriction extends GomXsdTypeDefinition {
        // Own properties of GXml-0.14.GomXsdTypeRestriction

        base: string;
        simple_type: GomXsdSimpleType;
        simpleType: GomXsdSimpleType;
        enumerations: GomXsdListTypeRestrictionEnumerations;
        white_spaces: GomXsdListTypeRestrictionWhiteSpaces;
        whiteSpaces: GomXsdListTypeRestrictionWhiteSpaces;

        // Constructors of GXml-0.14.GomXsdTypeRestriction

        static ['new'](): GomXsdTypeRestriction;

        // Owm methods of GXml-0.14.GomXsdTypeRestriction

        get_base(): string;
        set_base(value: string): void;
        get_simple_type(): GomXsdSimpleType;
        set_simple_type(value: GomXsdSimpleType): void;
        get_enumerations(): GomXsdListTypeRestrictionEnumerations;
        set_enumerations(value: GomXsdListTypeRestrictionEnumerations): void;
        get_white_spaces(): GomXsdListTypeRestrictionWhiteSpaces;
        set_white_spaces(value: GomXsdListTypeRestrictionWhiteSpaces): void;
    }

    module GomXsdTypeRestrictionDef {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionDef extends GomElement {
        // Own properties of GXml-0.14.GomXsdTypeRestrictionDef

        annotation: GomXsdAnnotation;

        // Constructors of GXml-0.14.GomXsdTypeRestrictionDef

        static ['new'](): GomXsdTypeRestrictionDef;

        // Owm methods of GXml-0.14.GomXsdTypeRestrictionDef

        get_annotation(): GomXsdAnnotation;
        set_annotation(value: GomXsdAnnotation): void;
    }

    module GomXsdTypeRestrictionMinExclusive {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionMinExclusive extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionMinExclusive

        static ['new'](): GomXsdTypeRestrictionMinExclusive;
    }

    module GomXsdTypeRestrictionMinInclusive {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionMinInclusive extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionMinInclusive

        static ['new'](): GomXsdTypeRestrictionMinInclusive;
    }

    module GomXsdTypeRestrictionMaxExclusive {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionMaxExclusive extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionMaxExclusive

        static ['new'](): GomXsdTypeRestrictionMaxExclusive;
    }

    module GomXsdTypeRestrictionMaxInclusive {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionMaxInclusive extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionMaxInclusive

        static ['new'](): GomXsdTypeRestrictionMaxInclusive;
    }

    module GomXsdTypeRestrictionTotalDigits {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionTotalDigits extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionTotalDigits

        static ['new'](): GomXsdTypeRestrictionTotalDigits;
    }

    module GomXsdTypeRestrictionFractionDigits {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionFractionDigits extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionFractionDigits

        static ['new'](): GomXsdTypeRestrictionFractionDigits;
    }

    module GomXsdTypeRestrictionLength {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionLength extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionLength

        static ['new'](): GomXsdTypeRestrictionLength;
    }

    module GomXsdTypeRestrictionMinLength {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionMinLength extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionMinLength

        static ['new'](): GomXsdTypeRestrictionMinLength;
    }

    module GomXsdTypeRestrictionMaxLength {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionMaxLength extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionMaxLength

        static ['new'](): GomXsdTypeRestrictionMaxLength;
    }

    module GomXsdTypeRestrictionEnumeration {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionEnumeration extends GomXsdTypeRestrictionDef {
        // Own properties of GXml-0.14.GomXsdTypeRestrictionEnumeration

        value: string;

        // Constructors of GXml-0.14.GomXsdTypeRestrictionEnumeration

        static ['new'](): GomXsdTypeRestrictionEnumeration;

        // Owm methods of GXml-0.14.GomXsdTypeRestrictionEnumeration

        get_value(): string;
        set_value(value: string): void;
    }

    module GomXsdTypeRestrictionWhiteSpace {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionWhiteSpace extends GomXsdTypeRestrictionDef {
        // Own properties of GXml-0.14.GomXsdTypeRestrictionWhiteSpace

        fixed: GomXsdTypeRestrictionWhiteSpaceFixed;
        value: string;

        // Constructors of GXml-0.14.GomXsdTypeRestrictionWhiteSpace

        static ['new'](): GomXsdTypeRestrictionWhiteSpace;

        // Owm methods of GXml-0.14.GomXsdTypeRestrictionWhiteSpace

        get_fixed(): GomXsdTypeRestrictionWhiteSpaceFixed;
        set_fixed(value: GomXsdTypeRestrictionWhiteSpaceFixed): void;
        get_value(): string;
        set_value(value: string): void;
    }

    module GomXsdTypeRestrictionWhiteSpaceFixed {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionWhiteSpaceFixed extends GomBoolean {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionWhiteSpaceFixed

        static ['new'](): GomXsdTypeRestrictionWhiteSpaceFixed;
    }

    module GomXsdTypeRestrictionPattern {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionPattern extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionPattern

        static ['new'](): GomXsdTypeRestrictionPattern;
    }

    module GomXsdTypeRestrictionAssertion {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionAssertion extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionAssertion

        static ['new'](): GomXsdTypeRestrictionAssertion;
    }

    module GomXsdTypeRestrictionExplicitTimezone {
        // Constructor properties interface
    }

    class GomXsdTypeRestrictionExplicitTimezone extends GomXsdTypeRestrictionDef {
        // Constructors of GXml-0.14.GomXsdTypeRestrictionExplicitTimezone

        static ['new'](): GomXsdTypeRestrictionExplicitTimezone;
    }

    module GomXsdComplexType {
        // Constructor properties interface
    }

    class GomXsdComplexType extends GomXsdBaseType {
        // Own properties of GXml-0.14.GomXsdComplexType

        'abstract': boolean;
        block: string;
        'final': string;
        mixed: boolean;
        name: string;
        default_attributes_apply: boolean;
        defaultAttributesApply: boolean;
        content_type: GomXsdBaseContent;
        contentType: GomXsdBaseContent;
        readonly type_attributes: GomXsdList;
        readonly typeAttributes: GomXsdList;
        readonly group_attributes: GomXsdList;
        readonly groupAttributes: GomXsdList;

        // Constructors of GXml-0.14.GomXsdComplexType

        static ['new'](): GomXsdComplexType;

        // Owm methods of GXml-0.14.GomXsdComplexType

        get_abstract(): boolean;
        set_abstract(value: boolean): void;
        get_block(): string;
        set_block(value: string): void;
        get_final(): string;
        set_final(value: string): void;
        get_mixed(): boolean;
        set_mixed(value: boolean): void;
        get_name(): string;
        set_name(value: string): void;
        get_default_attributes_apply(): boolean;
        set_default_attributes_apply(value: boolean): void;
        get_content_type(): GomXsdBaseContent;
        set_content_type(value: GomXsdBaseContent): void;
        get_type_attributes(): GomXsdList;
        get_group_attributes(): GomXsdList;
    }

    module GomXsdExtension {
        // Constructor properties interface
    }

    class GomXsdExtension extends GomElement {
        // Own properties of GXml-0.14.GomXsdExtension

        base: string;

        // Constructors of GXml-0.14.GomXsdExtension

        static ['new'](): GomXsdExtension;

        // Owm methods of GXml-0.14.GomXsdExtension

        get_base(): string;
        set_base(value: string): void;
    }

    module GomXsdElement {
        // Constructor properties interface
    }

    class GomXsdElement extends GomElement {
        // Own properties of GXml-0.14.GomXsdElement

        'abstract': boolean;
        block: string;
        'default': string;
        'final': string;
        fixed: string;
        form: string;
        max_occurs: string;
        maxOccurs: string;
        min_occurs: string;
        minOccurs: string;
        name: string;
        nillable: boolean;
        ref: string;
        substitution_group: DomTokenList;
        substitutionGroup: DomTokenList;
        target_namespace: string;
        targetNamespace: string;
        object_type: string;
        objectType: string;
        anotation: GomXsdAnnotation;
        simple_type: GomXsdSimpleType;
        simpleType: GomXsdSimpleType;
        complex_type: GomXsdComplexType;
        complexType: GomXsdComplexType;

        // Constructors of GXml-0.14.GomXsdElement

        static ['new'](): GomXsdElement;

        // Owm methods of GXml-0.14.GomXsdElement

        get_abstract(): boolean;
        set_abstract(value: boolean): void;
        get_block(): string;
        set_block(value: string): void;
        get_default(): string;
        set_default(value: string): void;
        get_final(): string;
        set_final(value: string): void;
        get_fixed(): string;
        set_fixed(value: string): void;
        get_form(): string;
        set_form(value: string): void;
        get_max_occurs(): string;
        set_max_occurs(value: string): void;
        get_min_occurs(): string;
        set_min_occurs(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_nillable(): boolean;
        set_nillable(value: boolean): void;
        get_ref(): string;
        set_ref(value: string): void;
        get_substitution_group(): DomTokenList;
        set_substitution_group(value: DomTokenList): void;
        get_target_namespace(): string;
        set_target_namespace(value: string): void;
        get_object_type(): string;
        set_object_type(value: string): void;
        get_anotation(): GomXsdAnnotation;
        set_anotation(value: GomXsdAnnotation): void;
        get_simple_type(): GomXsdSimpleType;
        set_simple_type(value: GomXsdSimpleType): void;
        get_complex_type(): GomXsdComplexType;
        set_complex_type(value: GomXsdComplexType): void;
    }

    module GomXsdAnnotation {
        // Constructor properties interface
    }

    class GomXsdAnnotation extends GomElement {
        // Constructors of GXml-0.14.GomXsdAnnotation

        static ['new'](): GomXsdAnnotation;
    }

    module GomXsdBaseType {
        // Constructor properties interface
    }

    class GomXsdBaseType extends GomElement {
        // Own properties of GXml-0.14.GomXsdBaseType

        anotation: GomXsdAnnotation;

        // Constructors of GXml-0.14.GomXsdBaseType

        static ['new'](): GomXsdBaseType;

        // Owm methods of GXml-0.14.GomXsdBaseType

        get_anotation(): GomXsdAnnotation;
        set_anotation(value: GomXsdAnnotation): void;
    }

    module GomXsdBaseContent {
        // Constructor properties interface
    }

    class GomXsdBaseContent extends GomElement {
        // Own properties of GXml-0.14.GomXsdBaseContent

        anotation: GomXsdAnnotation;

        // Constructors of GXml-0.14.GomXsdBaseContent

        static ['new'](): GomXsdBaseContent;

        // Owm methods of GXml-0.14.GomXsdBaseContent

        get_anotation(): GomXsdAnnotation;
        set_anotation(value: GomXsdAnnotation): void;
    }

    module GomXsdSimpleContent {
        // Constructor properties interface
    }

    class GomXsdSimpleContent extends GomXsdBaseContent {
        // Constructors of GXml-0.14.GomXsdSimpleContent

        static ['new'](): GomXsdSimpleContent;
    }

    module GomXsdComplexContent {
        // Constructor properties interface
    }

    class GomXsdComplexContent extends GomXsdBaseContent {
        // Constructors of GXml-0.14.GomXsdComplexContent

        static ['new'](): GomXsdComplexContent;
    }

    module GomXsdOpenContent {
        // Constructor properties interface
    }

    class GomXsdOpenContent extends GomXsdBaseContent {
        // Constructors of GXml-0.14.GomXsdOpenContent

        static ['new'](): GomXsdOpenContent;
    }

    module GomXsdBaseAttribute {
        // Constructor properties interface
    }

    class GomXsdBaseAttribute extends GomElement {
        // Own properties of GXml-0.14.GomXsdBaseAttribute

        anotation: GomXsdAnnotation;

        // Constructors of GXml-0.14.GomXsdBaseAttribute

        static ['new'](): GomXsdBaseAttribute;

        // Owm methods of GXml-0.14.GomXsdBaseAttribute

        get_anotation(): GomXsdAnnotation;
        set_anotation(value: GomXsdAnnotation): void;
    }

    module GomXsdAttribute {
        // Constructor properties interface
    }

    class GomXsdAttribute extends GomXsdBaseAttribute {
        // Constructors of GXml-0.14.GomXsdAttribute

        static ['new'](): GomXsdAttribute;
    }

    module GomXsdAttributeGroup {
        // Constructor properties interface
    }

    class GomXsdAttributeGroup extends GomXsdBaseAttribute {
        // Constructors of GXml-0.14.GomXsdAttributeGroup

        static ['new'](): GomXsdAttributeGroup;
    }

    module GomXsdList {
        // Constructor properties interface
    }

    class GomXsdList extends GomArrayList {
        // Own properties of GXml-0.14.GomXsdList

        readonly length: number;

        // Constructors of GXml-0.14.GomXsdList

        static ['new'](): GomXsdList;

        // Owm methods of GXml-0.14.GomXsdList

        remove(index: number): void;
        index_of(element: DomElement): number;
        get_length(): number;
    }

    module GomXsdListElements {
        // Constructor properties interface
    }

    class GomXsdListElements extends GomXsdList {
        // Constructors of GXml-0.14.GomXsdListElements

        static ['new'](): GomXsdListElements;
    }

    module GomXsdListSimpleTypes {
        // Constructor properties interface
    }

    class GomXsdListSimpleTypes extends GomXsdList {
        // Constructors of GXml-0.14.GomXsdListSimpleTypes

        static ['new'](): GomXsdListSimpleTypes;
    }

    module GomXsdListComplexTypes {
        // Constructor properties interface
    }

    class GomXsdListComplexTypes extends GomXsdList {
        // Constructors of GXml-0.14.GomXsdListComplexTypes

        static ['new'](): GomXsdListComplexTypes;
    }

    module GomXsdListTypeRestrictionEnumerations {
        // Constructor properties interface
    }

    class GomXsdListTypeRestrictionEnumerations extends GomXsdList {
        // Constructors of GXml-0.14.GomXsdListTypeRestrictionEnumerations

        static ['new'](): GomXsdListTypeRestrictionEnumerations;
    }

    module GomXsdListTypeRestrictionWhiteSpaces {
        // Constructor properties interface
    }

    class GomXsdListTypeRestrictionWhiteSpaces extends GomXsdList {
        // Constructors of GXml-0.14.GomXsdListTypeRestrictionWhiteSpaces

        static ['new'](): GomXsdListTypeRestrictionWhiteSpaces;
    }

    class ElementListClass {}

    class ElementListPrivate {}

    class NodeListClass {}

    class NodeListPrivate {}

    class SerializableBoolClass {}

    class SerializableBoolPrivate {}

    class SerializableDoubleClass {}

    class SerializableDoublePrivate {}

    class SerializableFloatClass {}

    class SerializableFloatPrivate {}

    class SerializableEnumClass {}

    class SerializableEnumPrivate {}

    class SerializableIntClass {}

    class SerializableIntPrivate {}

    class SerializableValueListClass {}

    class SerializableValueListPrivate {}

    class Enumeration {
        // Constructors of GXml-0.14.Enumeration

        constructor(properties?: Partial<{}>);

        static ['new'](): Enumeration;

        // Owm methods of GXml-0.14.Enumeration

        static get_nick(enumeration: GObject.GType, val: number): string;
        static get_nick_camelcase(enumeration: GObject.GType, val: number): string;
        static get_string(enumeration: GObject.GType, val: number, use_nick: boolean, camelcase: boolean): string;
        static parse(enumeration: GObject.GType, val: string): GObject.EnumValue;
        static to_array(enumeration: GObject.GType): GObject.EnumValue[];
        static parse_integer(enumeration: GObject.GType, val: number): GObject.EnumValue;
        static to_string_array(enumeration: GObject.GType): string[];
    }

    class SerializableObjectModelClass {}

    class SerializableObjectModelPrivate {}

    class SerializableTreeMapClass {}

    class SerializableTreeMapPrivate {}

    class SerializableHashMapClass {}

    class SerializableHashMapPrivate {}

    class SerializableDualKeyMapClass {}

    class SerializableDualKeyMapPrivate {}

    class SerializableArrayListClass {}

    class SerializableArrayListPrivate {}

    class SerializableContainerClass {}

    class SerializableContainerPrivate {}

    class TAttributeClass {}

    class TAttributePrivate {}

    class TCommentClass {}

    class TCommentPrivate {}

    class TCDATAClass {}

    class TCDATAPrivate {}

    class TDocumentClass {}

    class TDocumentPrivate {}

    class TElementClass {}

    class TElementPrivate {}

    class TNamespaceClass {}

    class TNamespacePrivate {}

    class TNodeClass {}

    class TNodePrivate {}

    class TNodeTChildrenListClass {}

    class TNodeTChildrenListPrivate {}

    class TProcessingInstructionClass {}

    class TProcessingInstructionPrivate {}

    class TTextClass {}

    class TTextPrivate {}

    class HtmlDocumentClass {}

    class HtmlDocumentPrivate {}

    class GAttributeClass {}

    class GAttributePrivate {}

    class GCommentClass {}

    class GCommentPrivate {}

    class GCharacterDataClass {}

    class GCharacterDataPrivate {}

    class GChildNodeClass {}

    class GChildNodePrivate {}

    class GNonDocumentChildNodeClass {}

    class GNonDocumentChildNodePrivate {}

    class GCDATAClass {}

    class GCDATAPrivate {}

    class GDocumentClass {}

    class GDocumentPrivate {}

    class GImplementationClass {}

    class GImplementationPrivate {}

    class GDocumentTypeClass {}

    class GDocumentTypePrivate {}

    class GDocumentFragmentClass {}

    class GDocumentFragmentPrivate {}

    class GDomNodeIteratorClass {}

    class GDomNodeIteratorPrivate {}

    class GDomTreeWalkerClass {}

    class GDomTreeWalkerPrivate {}

    class GDomTokenListClass {}

    class GDomTokenListPrivate {}

    class GDomSettableTokenListClass {}

    class GDomSettableTokenListPrivate {}

    class GDomHTMLCollectionClass {}

    class GDomHTMLCollectionPrivate {}

    class GDomEventClass {}

    class GDomEventPrivate {}

    class GDomCustomEventClass {}

    class GDomCustomEventPrivate {}

    class GDomRangeClass {}

    class GDomRangePrivate {}

    class GElementClass {}

    class GElementPrivate {}

    class GNamespaceClass {}

    class GNamespacePrivate {}

    class GNodeClass {}

    class GNodePrivate {}

    class GProcessingInstructionClass {}

    class GProcessingInstructionPrivate {}

    class GTextClass {}

    class GTextPrivate {}

    class GHashMapAttrClass {}

    class GHashMapAttrPrivate {}

    class GHashMapAttrEntryClass {}

    class GHashMapAttrEntryPrivate {}

    class GHashMapAttrIteratorClass {}

    class GHashMapAttrIteratorPrivate {}

    class GListChildrenClass {}

    class GListChildrenPrivate {}

    class GListChildrenIteratorClass {}

    class GListChildrenIteratorPrivate {}

    class GListNamespacesClass {}

    class GListNamespacesPrivate {}

    class GListNamespacesIteratorClass {}

    class GListNamespacesIteratorPrivate {}

    class DomNodeFilterClass {}

    class DomNodeFilterPrivate {}

    class DomElementListClass {}

    class DomElementListPrivate {}

    class DomEventInitClass {}

    class DomEventInitPrivate {}

    class DomCustomEventInitClass {}

    class DomCustomEventInitPrivate {}

    class DomTimeStampClass {}

    class DomTimeStampPrivate {}

    class DomMutationObserverInitClass {}

    class DomMutationObserverInitPrivate {}

    class DomErrorNameClass {}

    class DomErrorNamePrivate {}

    class GXPathObjectClass {}

    class GXPathObjectPrivate {}

    class GomDocumentClass {}

    class GomDocumentPrivate {}

    class GomImplementationClass {}

    class GomImplementationPrivate {}

    class GomDocumentTypeClass {}

    class GomDocumentTypePrivate {}

    class GomDocumentFragmentClass {}

    class GomDocumentFragmentPrivate {}

    class GomElementClass {}

    class GomElementPrivate {}

    class GomElementAttributesClass {}

    class GomElementAttributesPrivate {}

    class GomAttrClass {}

    class GomAttrPrivate {}

    class GomNodeClass {}

    class GomNodePrivate {}

    class GomNodeListClass {}

    class GomNodeListPrivate {}

    class GomCharacterDataClass {}

    class GomCharacterDataPrivate {}

    class GomTextClass {}

    class GomTextPrivate {}

    class GomProcessingInstructionClass {}

    class GomProcessingInstructionPrivate {}

    class GomCommentClass {}

    class GomCommentPrivate {}

    class BaseCollectionClass {}

    class BaseCollectionPrivate {}

    class GomArrayListClass {}

    class GomArrayListPrivate {}

    class GomHashMapClass {}

    class GomHashMapPrivate {}

    class GomHashPairedMapClass {}

    class GomHashPairedMapPrivate {}

    class GomHashThreeMapClass {}

    class GomHashThreeMapPrivate {}

    class GomBasePropertyClass {}

    class GomBasePropertyPrivate {}

    class GomStringClass {}

    class GomStringPrivate {}

    class GomArrayStringClass {}

    class GomArrayStringPrivate {}

    class GomXsdArrayStringClass {}

    class GomXsdArrayStringPrivate {}

    class GomDoubleClass {}

    class GomDoublePrivate {}

    class GomFloatClass {}

    class GomFloatPrivate {}

    class GomIntClass {}

    class GomIntPrivate {}

    class GomBooleanClass {}

    class GomBooleanPrivate {}

    class GomEnumClass {}

    class GomEnumPrivate {}

    class GomDateClass {}

    class GomDatePrivate {}

    class GomDateTimeClass {}

    class GomDateTimePrivate {}

    class XParserClass {}

    class XParserPrivate {}

    class GomXsdSchemaClass {}

    class GomXsdSchemaPrivate {}

    class GomXsdSimpleTypeClass {}

    class GomXsdSimpleTypePrivate {}

    class GomXsdTypeDefinitionClass {}

    class GomXsdTypeDefinitionPrivate {}

    class GomXsdTypeListClass {}

    class GomXsdTypeListPrivate {}

    class GomXsdTypeUnionClass {}

    class GomXsdTypeUnionPrivate {}

    class GomXsdTypeRestrictionClass {}

    class GomXsdTypeRestrictionPrivate {}

    class GomXsdTypeRestrictionDefClass {}

    class GomXsdTypeRestrictionDefPrivate {}

    class GomXsdTypeRestrictionMinExclusiveClass {}

    class GomXsdTypeRestrictionMinExclusivePrivate {}

    class GomXsdTypeRestrictionMinInclusiveClass {}

    class GomXsdTypeRestrictionMinInclusivePrivate {}

    class GomXsdTypeRestrictionMaxExclusiveClass {}

    class GomXsdTypeRestrictionMaxExclusivePrivate {}

    class GomXsdTypeRestrictionMaxInclusiveClass {}

    class GomXsdTypeRestrictionMaxInclusivePrivate {}

    class GomXsdTypeRestrictionTotalDigitsClass {}

    class GomXsdTypeRestrictionTotalDigitsPrivate {}

    class GomXsdTypeRestrictionFractionDigitsClass {}

    class GomXsdTypeRestrictionFractionDigitsPrivate {}

    class GomXsdTypeRestrictionLengthClass {}

    class GomXsdTypeRestrictionLengthPrivate {}

    class GomXsdTypeRestrictionMinLengthClass {}

    class GomXsdTypeRestrictionMinLengthPrivate {}

    class GomXsdTypeRestrictionMaxLengthClass {}

    class GomXsdTypeRestrictionMaxLengthPrivate {}

    class GomXsdTypeRestrictionEnumerationClass {}

    class GomXsdTypeRestrictionEnumerationPrivate {}

    class GomXsdTypeRestrictionWhiteSpaceClass {}

    class GomXsdTypeRestrictionWhiteSpacePrivate {}

    class GomXsdTypeRestrictionWhiteSpaceFixedClass {}

    class GomXsdTypeRestrictionWhiteSpaceFixedPrivate {}

    class GomXsdTypeRestrictionPatternClass {}

    class GomXsdTypeRestrictionPatternPrivate {}

    class GomXsdTypeRestrictionAssertionClass {}

    class GomXsdTypeRestrictionAssertionPrivate {}

    class GomXsdTypeRestrictionExplicitTimezoneClass {}

    class GomXsdTypeRestrictionExplicitTimezonePrivate {}

    class GomXsdComplexTypeClass {}

    class GomXsdComplexTypePrivate {}

    class GomXsdExtensionClass {}

    class GomXsdExtensionPrivate {}

    class GomXsdElementClass {}

    class GomXsdElementPrivate {}

    class GomXsdAnnotationClass {}

    class GomXsdAnnotationPrivate {}

    class GomXsdBaseTypeClass {}

    class GomXsdBaseTypePrivate {}

    class GomXsdBaseContentClass {}

    class GomXsdBaseContentPrivate {}

    class GomXsdSimpleContentClass {}

    class GomXsdSimpleContentPrivate {}

    class GomXsdComplexContentClass {}

    class GomXsdComplexContentPrivate {}

    class GomXsdOpenContentClass {}

    class GomXsdOpenContentPrivate {}

    class GomXsdBaseAttributeClass {}

    class GomXsdBaseAttributePrivate {}

    class GomXsdAttributeClass {}

    class GomXsdAttributePrivate {}

    class GomXsdAttributeGroupClass {}

    class GomXsdAttributeGroupPrivate {}

    class GomXsdListClass {}

    class GomXsdListPrivate {}

    class GomXsdListElementsClass {}

    class GomXsdListElementsPrivate {}

    class GomXsdListSimpleTypesClass {}

    class GomXsdListSimpleTypesPrivate {}

    class GomXsdListComplexTypesClass {}

    class GomXsdListComplexTypesPrivate {}

    class GomXsdListTypeRestrictionEnumerationsClass {}

    class GomXsdListTypeRestrictionEnumerationsPrivate {}

    class GomXsdListTypeRestrictionWhiteSpacesClass {}

    class GomXsdListTypeRestrictionWhiteSpacesPrivate {}

    class AttributeIface {}

    class CommentIface {}

    class CDATAIface {}

    class CharacterIface {}

    class DocumentIface {}

    class DocumentTypeIface {}

    class ElementIface {}

    class NamespaceIface {}

    class NodeIface {}

    class NotationIface {}

    class EntityIface {}

    class ProcessingInstructionIface {}

    class TextIface {}

    class SerializableIface {}

    class SerializablePropertyIface {}

    class SerializableMapKeyIface {}

    class SerializableMapDualKeyIface {}

    class SerializableCollectionIface {}

    class DomAttrIface {}

    class DomCharacterDataIface {}

    class DomTextIface {}

    class DomProcessingInstructionIface {}

    class DomCommentIface {}

    class DomNonElementParentNodeIface {}

    class DomParentNodeIface {}

    class DomNonDocumentTypeChildNodeIface {}

    class DomChildNodeIface {}

    class DomNodeListIface {}

    class DomHTMLCollectionIface {}

    class DomNodeIteratorIface {}

    class DomTreeWalkerIface {}

    class DomNamedNodeMapIface {}

    class DomTokenListIface {}

    class DomSettableTokenListIface {}

    class DomDocumentIface {}

    class DomXMLDocumentIface {}

    class DomImplementationIface {}

    class DomDocumentFragmentIface {}

    class DomDocumentTypeIface {}

    class DomElementIface {}

    class DomEventTargetIface {}

    class DomEventListenerIface {}

    class DomEventIface {}

    class DomCustomEventIface {}

    class DomMutationObserverIface {}

    class DomMutationRecordIface {}

    class DomNodeIface {}

    class DomRangeIface {}

    class XPathContextIface {}

    class XPathObjectIface {}

    class GomObjectIface {}

    class GomCollectionIface {}

    class MappeableElementIface {}

    class MappeableElementPairKeyIface {}

    class MappeableElementThreeKeyIface {}

    class GomPropertyIface {}

    class ParserIface {}

    class IXsdSchemaIface {}

    class IXsdBaseTypeIface {}

    class IXsdSimpleTypeIface {}

    class IXsdTypeDefIface {}

    class IXsdTypeRestrictionIface {}

    class IXsdTypeListIface {}

    class IXsdTypeUnionIface {}

    class IXsdTypeRestrictionDefIface {}

    class IXsdTypeRestrictionMinExclusiveIface {}

    class IXsdTypeRestrictionMinInclusiveIface {}

    class IXsdTypeRestrictionMaxExclusiveIface {}

    class IXsdTypeRestrictionMaxInclusiveIface {}

    class IXsdTypeRestrictionTotalDigitsIface {}

    class IXsdTypeRestrictionFractionDigitsIface {}

    class IXsdTypeRestrictionLengthIface {}

    class IXsdTypeRestrictionMinLengthIface {}

    class IXsdTypeRestrictionMaxLengthIface {}

    class IXsdTypeRestrictionEnumerationIface {}

    class IXsdTypeRestrictionWhiteSpaceIface {}

    class IXsdTypeRestrictionPatternIface {}

    class IXsdTypeRestrictionAssertionIface {}

    class IXsdTypeRestrictionExplicitTimezoneIface {}

    class IXsdComplexTypeIface {}

    class IXsdExtensionIface {}

    class IXsdElementIface {}

    class IXsdAnnotationIface {}

    class IXsdBaseContentIface {}

    class IXsdSimpleContentIface {}

    class IXsdComplexContentIface {}

    class IXsdOpenContentIface {}

    class IXsdBaseAttributeIface {}

    class IXsdAttributeIface {}

    class IXsdAttributeGroupIface {}

    class IXsdListIface {}

    class IXsdListElementsIface {}

    class IXsdListSimpleTypesIface {}

    class IXsdListComplexTypesIface {}

    class IXsdListAttributesIface {}

    class IXsdListAttributesGroupIface {}

    class IXsdListTypeRestrictionEnumerationsIface {}

    class IXsdListTypeRestrictionWhiteSpacesIface {}

    interface Attribute {
        // Own properties of GXml-0.14.Attribute

        namespace: Namespace;
        readonly prefix: string;

        // Owm methods of GXml-0.14.Attribute

        get_namespace(): Namespace;
        set_namespace(value: Namespace): void;
        get_prefix(): string;

        // Own virtual methods of GXml-0.14.Attribute

        vfunc_get_namespace(): Namespace;
        vfunc_set_namespace(value: Namespace): void;
        vfunc_get_prefix(): string;
    }

    interface Comment {
        // Own properties of GXml-0.14.Comment

        str: string;

        // Owm methods of GXml-0.14.Comment

        get_str(): string;
        set_str(value: string): void;

        // Own virtual methods of GXml-0.14.Comment

        vfunc_get_str(): string;
        vfunc_set_str(value: string): void;
    }

    interface CDATA {
        // Own properties of GXml-0.14.CDATA

        readonly str: string;

        // Owm methods of GXml-0.14.CDATA

        get_str(): string;

        // Own virtual methods of GXml-0.14.CDATA

        vfunc_get_str(): string;
    }

    interface Character {
        // Own properties of GXml-0.14.Character

        str: string;

        // Owm methods of GXml-0.14.Character

        get_str(): string;
        set_str(value: string): void;

        // Own virtual methods of GXml-0.14.Character

        vfunc_get_str(): string;
        vfunc_set_str(value: string): void;
    }

    interface Document {
        // Own properties of GXml-0.14.Document

        indent: boolean;
        ns_top: boolean;
        nsTop: boolean;
        prefix_default_ns: boolean;
        prefixDefaultNs: boolean;
        backup: boolean;
        readonly root: Node;
        file: Gio.File;

        // Owm methods of GXml-0.14.Document

        create_element(name: string): Node;
        create_text(text: string): Node;
        create_comment(text: string): Node;
        create_cdata(text: string): Node;
        create_pi(target: string, data: string): Node;
        save(cancellable: Gio.Cancellable): boolean;
        save_as(f: Gio.File, cancellable: Gio.Cancellable): boolean;
        get_indent(): boolean;
        set_indent(value: boolean): void;
        get_ns_top(): boolean;
        set_ns_top(value: boolean): void;
        get_prefix_default_ns(): boolean;
        set_prefix_default_ns(value: boolean): void;
        get_backup(): boolean;
        set_backup(value: boolean): void;
        get_root(): Node;
        get_file(): Gio.File;
        set_file(value: Gio.File): void;

        // Own virtual methods of GXml-0.14.Document

        vfunc_create_element(name: string): Node;
        vfunc_create_text(text: string): Node;
        vfunc_create_comment(text: string): Node;
        vfunc_create_cdata(text: string): Node;
        vfunc_create_pi(target: string, data: string): Node;
        vfunc_save(cancellable: Gio.Cancellable): boolean;
        vfunc_save_as(f: Gio.File, cancellable: Gio.Cancellable): boolean;
        vfunc_get_indent(): boolean;
        vfunc_set_indent(value: boolean): void;
        vfunc_get_ns_top(): boolean;
        vfunc_set_ns_top(value: boolean): void;
        vfunc_get_prefix_default_ns(): boolean;
        vfunc_set_prefix_default_ns(value: boolean): void;
        vfunc_get_backup(): boolean;
        vfunc_set_backup(value: boolean): void;
        vfunc_get_root(): Node;
        vfunc_get_file(): Gio.File;
        vfunc_set_file(value: Gio.File): void;
    }

    interface DocumentType {}

    interface Element {
        // Own properties of GXml-0.14.Element

        readonly tag_name: string;
        readonly tagName: string;
        content: string;

        // Owm methods of GXml-0.14.Element

        normalize(): void;
        set_attr(name: string, value: string): void;
        get_attr(name: string): Node;
        remove_attr(name: string): void;
        remove_ns_attr(name: string, uri: string): void;
        set_ns_attr(ns: string, name: string, value: string): void;
        get_ns_attr(name: string, uri: string): Node;
        get_tag_name(): string;
        get_content(): string;
        set_content(value: string): void;

        // Own virtual methods of GXml-0.14.Element

        vfunc_normalize(): void;
        vfunc_set_attr(name: string, value: string): void;
        vfunc_get_attr(name: string): Node;
        vfunc_remove_attr(name: string): void;
        vfunc_remove_ns_attr(name: string, uri: string): void;
        vfunc_set_ns_attr(ns: string, name: string, value: string): void;
        vfunc_get_ns_attr(name: string, uri: string): Node;
        vfunc_get_tag_name(): string;
        vfunc_get_content(): string;
        vfunc_set_content(value: string): void;
    }

    interface Namespace {
        // Own properties of GXml-0.14.Namespace

        readonly uri: string;
        readonly prefix: string;

        // Owm methods of GXml-0.14.Namespace

        get_uri(): string;
        get_prefix(): string;

        // Own virtual methods of GXml-0.14.Namespace

        vfunc_get_uri(): string;
        vfunc_get_prefix(): string;
    }

    interface Node {
        // Own properties of GXml-0.14.Node

        readonly namespaces: Gee.List;
        readonly children_nodes: Gee.BidirList;
        readonly childrenNodes: Gee.BidirList;
        readonly attrs: Gee.Map;
        readonly name: string;
        value: string;
        readonly type_node: NodeType;
        readonly typeNode: NodeType;
        readonly document: Document;
        readonly parent: Node;

        // Owm methods of GXml-0.14.Node

        get(key: string): Node;
        get_elements_by_property_value(property: string, value: string): ElementList;
        get_elements_by_name(name: string): ElementList;
        get_elements_by_name_ns(name: string, ns: string): ElementList;
        to_string(): string;
        set_namespace(uri: string, prefix: string): boolean;
        ns_prefix(): string;
        ns_uri(): string;
        get_namespaces(): Gee.List;
        get_children_nodes(): Gee.BidirList;
        get_attrs(): Gee.Map;
        get_name(): string;
        get_value(): string;
        set_value(value: string): void;
        get_type_node(): NodeType;
        get_document(): Document;
        get_parent(): Node;

        // Own virtual methods of GXml-0.14.Node

        vfunc_get(key: string): Node;
        vfunc_get_elements_by_property_value(property: string, value: string): ElementList;
        vfunc_get_elements_by_name(name: string): ElementList;
        vfunc_get_elements_by_name_ns(name: string, ns: string): ElementList;
        vfunc_to_string(): string;
        vfunc_set_namespace(uri: string, prefix: string): boolean;
        vfunc_ns_prefix(): string;
        vfunc_ns_uri(): string;
        vfunc_get_namespaces(): Gee.List;
        vfunc_get_children_nodes(): Gee.BidirList;
        vfunc_get_attrs(): Gee.Map;
        vfunc_get_name(): string;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
        vfunc_get_type_node(): NodeType;
        vfunc_get_document(): Document;
        vfunc_get_parent(): Node;
    }

    interface Notation {
        // Own properties of GXml-0.14.Notation

        readonly public_id: string;
        readonly publicId: string;
        readonly external_id: string;
        readonly externalId: string;

        // Owm methods of GXml-0.14.Notation

        get_public_id(): string;
        get_external_id(): string;

        // Own virtual methods of GXml-0.14.Notation

        vfunc_get_public_id(): string;
        vfunc_get_external_id(): string;
    }

    interface Entity {}

    interface ProcessingInstruction {
        // Own properties of GXml-0.14.ProcessingInstruction

        readonly target: string;
        data: string;

        // Owm methods of GXml-0.14.ProcessingInstruction

        get_target(): string;
        get_data(): string;
        set_data(value: string): void;

        // Own virtual methods of GXml-0.14.ProcessingInstruction

        vfunc_get_target(): string;
        vfunc_get_data(): string;
        vfunc_set_data(value: string): void;
    }

    interface Text {
        // Own properties of GXml-0.14.Text

        str: string;

        // Owm methods of GXml-0.14.Text

        get_str(): string;
        set_str(value: string): void;

        // Own virtual methods of GXml-0.14.Text

        vfunc_get_str(): string;
        vfunc_set_str(value: string): void;
    }

    interface Serializable {
        // Own properties of GXml-0.14.Serializable

        readonly unknown_serializable_properties: Gee.Map;
        readonly unknownSerializableProperties: Gee.Map;
        readonly unknown_serializable_nodes: Gee.Collection;
        readonly unknownSerializableNodes: Gee.Collection;
        serialized_xml_node_value: string;
        serializedXmlNodeValue: string;

        // Owm methods of GXml-0.14.Serializable

        get_enable_unknown_serializable_property(): boolean;
        set_default_namespace(node: Node): boolean;
        serialize_use_xml_node_value(): boolean;
        node_name(): string;
        property_use_nick(): boolean;
        serialize(node: Node): Node;
        serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        deserialize(node: Node): boolean;
        deserialize_property(property_node: Node): boolean;
        find_property_spec(property_name: string): GObject.ParamSpec;
        default_find_property_spec(property_name: string): GObject.ParamSpec;
        list_serializable_properties(): GObject.ParamSpec[];
        default_list_serializable_properties(): GObject.ParamSpec[];
        get_unknown_serializable_properties(): Gee.Map;
        get_unknown_serializable_nodes(): Gee.Collection;
        get_serialized_xml_node_value(): string;
        set_serialized_xml_node_value(value: string): void;

        // Own virtual methods of GXml-0.14.Serializable

        vfunc_get_enable_unknown_serializable_property(): boolean;
        vfunc_set_default_namespace(node: Node): boolean;
        vfunc_serialize_use_xml_node_value(): boolean;
        vfunc_node_name(): string;
        vfunc_property_use_nick(): boolean;
        vfunc_serialize(node: Node): Node;
        vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node;
        vfunc_deserialize(node: Node): boolean;
        vfunc_deserialize_property(property_node: Node): boolean;
        vfunc_find_property_spec(property_name: string): GObject.ParamSpec;
        vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec;
        vfunc_list_serializable_properties(): GObject.ParamSpec[];
        vfunc_default_list_serializable_properties(): GObject.ParamSpec[];
        vfunc_get_unknown_serializable_properties(): Gee.Map;
        vfunc_get_unknown_serializable_nodes(): Gee.Collection;
        vfunc_get_serialized_xml_node_value(): string;
        vfunc_set_serialized_xml_node_value(value: string): void;
    }

    interface SerializableProperty {
        // Owm methods of GXml-0.14.SerializableProperty

        get_serializable_property_value(): string;
        set_serializable_property_value(val: string): void;
        deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean;
        serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node;
        default_serializable_property_serialize_property(element: Node, prop: GObject.ParamSpec, nick: boolean): Node;
        default_serializable_property_deserialize_property(
            property_node: Node,
            prop: GObject.ParamSpec,
            nick: boolean,
        ): boolean;

        // Own virtual methods of GXml-0.14.SerializableProperty

        vfunc_get_serializable_property_value(): string;
        vfunc_set_serializable_property_value(val: string): void;
        vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean;
        vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node;
    }

    interface SerializableMapKey {
        // Owm methods of GXml-0.14.SerializableMapKey

        get_map_key(): any;

        // Own virtual methods of GXml-0.14.SerializableMapKey

        vfunc_get_map_key(): any;
    }

    interface SerializableMapDualKey {
        // Owm methods of GXml-0.14.SerializableMapDualKey

        get_map_primary_key(): any;
        get_map_secondary_key(): any;

        // Own virtual methods of GXml-0.14.SerializableMapDualKey

        vfunc_get_map_primary_key(): any;
        vfunc_get_map_secondary_key(): any;
    }

    interface SerializableCollection {
        // Owm methods of GXml-0.14.SerializableCollection

        deserialize_proceed(): boolean;
        deserialized(): boolean;
        deserialize_node(node: Node): boolean;
        deserialize_children(): boolean;
        is_collection(): boolean;

        // Own virtual methods of GXml-0.14.SerializableCollection

        vfunc_deserialize_proceed(): boolean;
        vfunc_deserialized(): boolean;
        vfunc_deserialize_node(node: Node): boolean;
        vfunc_deserialize_children(): boolean;
        vfunc_is_collection(): boolean;
    }

    interface DomAttr {
        // Own properties of GXml-0.14.DomAttr

        readonly namespace_uri: string;
        readonly namespaceUri: string;
        readonly prefix: string;
        readonly local_name: string;
        readonly localName: string;
        readonly name: string;
        value: string;
        readonly specified: boolean;

        // Owm methods of GXml-0.14.DomAttr

        get_namespace_uri(): string;
        get_prefix(): string;
        get_local_name(): string;
        get_name(): string;
        get_value(): string;
        set_value(value: string): void;
        get_specified(): boolean;

        // Own virtual methods of GXml-0.14.DomAttr

        vfunc_get_namespace_uri(): string;
        vfunc_get_prefix(): string;
        vfunc_get_local_name(): string;
        vfunc_get_name(): string;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
        vfunc_get_specified(): boolean;
    }

    interface DomCharacterData {
        // Own properties of GXml-0.14.DomCharacterData

        data: string;
        readonly length: number;

        // Owm methods of GXml-0.14.DomCharacterData

        substring_data(offset: number, count: number): string;
        append_data(data: string): void;
        insert_data(offset: number, data: string): void;
        delete_data(offset: number, count: number): void;
        replace_data(offset: number, count: number, data: string): void;
        get_data(): string;
        set_data(value: string): void;
        get_length(): number;

        // Own virtual methods of GXml-0.14.DomCharacterData

        vfunc_substring_data(offset: number, count: number): string;
        vfunc_append_data(data: string): void;
        vfunc_insert_data(offset: number, data: string): void;
        vfunc_delete_data(offset: number, count: number): void;
        vfunc_replace_data(offset: number, count: number, data: string): void;
        vfunc_get_data(): string;
        vfunc_set_data(value: string): void;
        vfunc_get_length(): number;
    }

    interface DomText {
        // Own properties of GXml-0.14.DomText

        readonly whole_text: string;
        readonly wholeText: string;

        // Owm methods of GXml-0.14.DomText

        split_text(offset: number): DomText;
        get_whole_text(): string;

        // Own virtual methods of GXml-0.14.DomText

        vfunc_split_text(offset: number): DomText;
        vfunc_get_whole_text(): string;
    }

    interface DomProcessingInstruction {
        // Own properties of GXml-0.14.DomProcessingInstruction

        readonly target: string;

        // Owm methods of GXml-0.14.DomProcessingInstruction

        get_target(): string;

        // Own virtual methods of GXml-0.14.DomProcessingInstruction

        vfunc_get_target(): string;
    }

    interface DomComment {}

    interface DomNonElementParentNode {
        // Owm methods of GXml-0.14.DomNonElementParentNode

        get_element_by_id(element_id: string): DomElement;

        // Own virtual methods of GXml-0.14.DomNonElementParentNode

        vfunc_get_element_by_id(element_id: string): DomElement;
    }

    interface DomParentNode {
        // Own properties of GXml-0.14.DomParentNode

        readonly children: DomHTMLCollection;
        readonly first_element_child: DomElement;
        readonly firstElementChild: DomElement;
        readonly last_element_child: DomElement;
        readonly lastElementChild: DomElement;
        readonly child_element_count: number;
        readonly childElementCount: number;

        // Owm methods of GXml-0.14.DomParentNode

        query_selector(selectors: string): DomElement;
        query_selector_all(selectors: string): DomNodeList;
        get_elements_by_property_value(property: string, value: string): DomElementList;
        get_children(): DomHTMLCollection;
        get_first_element_child(): DomElement;
        get_last_element_child(): DomElement;
        get_child_element_count(): number;

        // Own virtual methods of GXml-0.14.DomParentNode

        vfunc_query_selector(selectors: string): DomElement;
        vfunc_query_selector_all(selectors: string): DomNodeList;
        vfunc_get_elements_by_property_value(property: string, value: string): DomElementList;
        vfunc_get_children(): DomHTMLCollection;
        vfunc_get_first_element_child(): DomElement;
        vfunc_get_last_element_child(): DomElement;
        vfunc_get_child_element_count(): number;
    }

    interface DomNonDocumentTypeChildNode {
        // Own properties of GXml-0.14.DomNonDocumentTypeChildNode

        readonly previous_element_sibling: DomElement;
        readonly previousElementSibling: DomElement;
        readonly next_element_sibling: DomElement;
        readonly nextElementSibling: DomElement;

        // Owm methods of GXml-0.14.DomNonDocumentTypeChildNode

        get_previous_element_sibling(): DomElement;
        get_next_element_sibling(): DomElement;

        // Own virtual methods of GXml-0.14.DomNonDocumentTypeChildNode

        vfunc_get_previous_element_sibling(): DomElement;
        vfunc_get_next_element_sibling(): DomElement;
    }

    interface DomChildNode {
        // Owm methods of GXml-0.14.DomChildNode

        remove(): void;

        // Own virtual methods of GXml-0.14.DomChildNode

        vfunc_remove(): void;
    }

    interface DomNodeList {
        // Own properties of GXml-0.14.DomNodeList

        readonly length: number;

        // Owm methods of GXml-0.14.DomNodeList

        item(index: number): DomNode;
        get_length(): number;

        // Own virtual methods of GXml-0.14.DomNodeList

        vfunc_item(index: number): DomNode;
        vfunc_get_length(): number;
    }

    interface DomHTMLCollection {
        // Own properties of GXml-0.14.DomHTMLCollection

        readonly length: number;

        // Owm methods of GXml-0.14.DomHTMLCollection

        get_element(index: number): DomElement;
        to_array(): DomElement[];
        item(index: number): DomElement;
        named_item(name: string): DomElement;
        get_length(): number;

        // Own virtual methods of GXml-0.14.DomHTMLCollection

        vfunc_get_element(index: number): DomElement;
        vfunc_to_array(): DomElement[];
        vfunc_item(index: number): DomElement;
        vfunc_named_item(name: string): DomElement;
        vfunc_get_length(): number;
    }

    interface DomNodeIterator {
        // Own properties of GXml-0.14.DomNodeIterator

        readonly root: DomNode;
        readonly reference_node: DomNode;
        readonly referenceNode: DomNode;
        readonly pointer_before_reference_node: boolean;
        readonly pointerBeforeReferenceNode: boolean;
        readonly what_to_show: number;
        readonly whatToShow: number;
        readonly filter: DomNodeFilter;

        // Owm methods of GXml-0.14.DomNodeIterator

        next_node(): DomNode;
        previous_node(): DomNode;
        detach(): void;
        get_root(): DomNode;
        get_reference_node(): DomNode;
        get_pointer_before_reference_node(): boolean;
        get_what_to_show(): number;
        get_filter(): DomNodeFilter;

        // Own virtual methods of GXml-0.14.DomNodeIterator

        vfunc_next_node(): DomNode;
        vfunc_previous_node(): DomNode;
        vfunc_detach(): void;
        vfunc_get_root(): DomNode;
        vfunc_get_reference_node(): DomNode;
        vfunc_get_pointer_before_reference_node(): boolean;
        vfunc_get_what_to_show(): number;
        vfunc_get_filter(): DomNodeFilter;
    }

    interface DomTreeWalker {
        // Own properties of GXml-0.14.DomTreeWalker

        readonly root: DomNode;
        readonly what_to_show: number;
        readonly whatToShow: number;
        readonly filter: DomNodeFilter;
        readonly current_node: DomNode;
        readonly currentNode: DomNode;

        // Owm methods of GXml-0.14.DomTreeWalker

        parentNode(): DomNode;
        firstChild(): DomNode;
        lastChild(): DomNode;
        previousSibling(): DomNode;
        nextSibling(): DomNode;
        previousNode(): DomNode;
        nextNode(): DomNode;
        get_root(): DomNode;
        get_what_to_show(): number;
        get_filter(): DomNodeFilter;
        get_current_node(): DomNode;

        // Own virtual methods of GXml-0.14.DomTreeWalker

        vfunc_parentNode(): DomNode;
        vfunc_firstChild(): DomNode;
        vfunc_lastChild(): DomNode;
        vfunc_previousSibling(): DomNode;
        vfunc_nextSibling(): DomNode;
        vfunc_previousNode(): DomNode;
        vfunc_nextNode(): DomNode;
        vfunc_get_root(): DomNode;
        vfunc_get_what_to_show(): number;
        vfunc_get_filter(): DomNodeFilter;
        vfunc_get_current_node(): DomNode;
    }

    interface DomNamedNodeMap {
        // Own properties of GXml-0.14.DomNamedNodeMap

        readonly length: number;

        // Owm methods of GXml-0.14.DomNamedNodeMap

        item(index: number): DomNode;
        get_named_item(name: string): DomNode;
        set_named_item(node: DomNode): DomNode;
        remove_named_item(name: string): DomNode;
        remove_named_item_ns(namespace_uri: string, localName: string): DomNode;
        get_named_item_ns(namespace_uri: string, local_name: string): DomNode;
        set_named_item_ns(node: DomNode): DomNode;
        get_length(): number;

        // Own virtual methods of GXml-0.14.DomNamedNodeMap

        vfunc_item(index: number): DomNode;
        vfunc_get_named_item(name: string): DomNode;
        vfunc_set_named_item(node: DomNode): DomNode;
        vfunc_remove_named_item(name: string): DomNode;
        vfunc_remove_named_item_ns(namespace_uri: string, localName: string): DomNode;
        vfunc_get_named_item_ns(namespace_uri: string, local_name: string): DomNode;
        vfunc_set_named_item_ns(node: DomNode): DomNode;
        vfunc_get_length(): number;
    }

    interface DomTokenList {
        // Own properties of GXml-0.14.DomTokenList

        readonly length: number;

        // Owm methods of GXml-0.14.DomTokenList

        item(index: number): string;
        contains(token: string): boolean;
        add(tokens: string[]): void;
        remove(tokens: string[]): void;
        toggle(token: string, force: boolean, auto: boolean): boolean;
        to_string(): string;
        get_length(): number;

        // Own virtual methods of GXml-0.14.DomTokenList

        vfunc_item(index: number): string;
        vfunc_contains(token: string): boolean;
        vfunc_add(tokens: string[]): void;
        vfunc_remove(tokens: string[]): void;
        vfunc_toggle(token: string, force: boolean, auto: boolean): boolean;
        vfunc_to_string(): string;
        vfunc_get_length(): number;
    }

    interface DomSettableTokenList {
        // Own properties of GXml-0.14.DomSettableTokenList

        value: string;

        // Owm methods of GXml-0.14.DomSettableTokenList

        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.14.DomSettableTokenList

        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
    }

    interface DomDocument {
        // Own properties of GXml-0.14.DomDocument

        readonly implementation: DomImplementation;
        readonly url: string;
        readonly document_uri: string;
        readonly documentUri: string;
        readonly origin: string;
        readonly compat_mode: string;
        readonly compatMode: string;
        readonly character_set: string;
        readonly characterSet: string;
        readonly content_type: string;
        readonly contentType: string;
        readonly doctype: DomDocumentType;
        readonly document_element: DomElement;
        readonly documentElement: DomElement;

        // Owm methods of GXml-0.14.DomDocument

        get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        get_elements_by_tag_name_ns(namespace: string, local_name: string): DomHTMLCollection;
        get_elements_by_class_name(classNames: string): DomHTMLCollection;
        create_element(local_name: string): DomElement;
        create_element_ns(namespace: string, qualified_name: string): DomElement;
        create_document_fragment(): DomDocumentFragment;
        create_text_node(data: string): DomText;
        create_comment(data: string): DomComment;
        create_processing_instruction(target: string, data: string): DomProcessingInstruction;
        import_node(node: DomNode, deep: boolean): DomNode;
        adopt_node(node: DomNode): DomNode;
        create_event(_interface: string): DomEvent;
        create_range(): DomRange;
        create_node_iterator(root: DomNode, whatToShow: number, filter: DomNodeFilter): DomNodeIterator;
        create_tree_walker(root: DomNode, what_to_show: number, filter: DomNodeFilter): DomTreeWalker;
        get_implementation(): DomImplementation;
        get_url(): string;
        get_document_uri(): string;
        get_origin(): string;
        get_compat_mode(): string;
        get_character_set(): string;
        get_content_type(): string;
        get_doctype(): DomDocumentType;
        get_document_element(): DomElement;

        // Own virtual methods of GXml-0.14.DomDocument

        vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_tag_name_ns(namespace: string, local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_class_name(classNames: string): DomHTMLCollection;
        vfunc_create_element(local_name: string): DomElement;
        vfunc_create_element_ns(namespace: string, qualified_name: string): DomElement;
        vfunc_create_document_fragment(): DomDocumentFragment;
        vfunc_create_text_node(data: string): DomText;
        vfunc_create_comment(data: string): DomComment;
        vfunc_create_processing_instruction(target: string, data: string): DomProcessingInstruction;
        vfunc_import_node(node: DomNode, deep: boolean): DomNode;
        vfunc_adopt_node(node: DomNode): DomNode;
        vfunc_create_event(_interface: string): DomEvent;
        vfunc_create_range(): DomRange;
        vfunc_create_node_iterator(root: DomNode, whatToShow: number, filter: DomNodeFilter): DomNodeIterator;
        vfunc_create_tree_walker(root: DomNode, what_to_show: number, filter: DomNodeFilter): DomTreeWalker;
        vfunc_get_implementation(): DomImplementation;
        vfunc_get_url(): string;
        vfunc_get_document_uri(): string;
        vfunc_get_origin(): string;
        vfunc_get_compat_mode(): string;
        vfunc_get_character_set(): string;
        vfunc_get_content_type(): string;
        vfunc_get_doctype(): DomDocumentType;
        vfunc_get_document_element(): DomElement;
    }

    interface DomXMLDocument {}

    interface DomImplementation {
        // Owm methods of GXml-0.14.DomImplementation

        create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType;
        create_document(nspace: string, qualified_name: string, doctype: DomDocumentType): DomXMLDocument;
        create_html_document(title: string): Document;
        has_feature(): boolean;

        // Own virtual methods of GXml-0.14.DomImplementation

        vfunc_create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType;
        vfunc_create_document(nspace: string, qualified_name: string, doctype: DomDocumentType): DomXMLDocument;
        vfunc_create_html_document(title: string): Document;
        vfunc_has_feature(): boolean;
    }

    interface DomDocumentFragment {}

    interface DomDocumentType {
        // Own properties of GXml-0.14.DomDocumentType

        readonly name: string;
        readonly public_id: string;
        readonly publicId: string;
        readonly system_id: string;
        readonly systemId: string;

        // Owm methods of GXml-0.14.DomDocumentType

        get_name(): string;
        get_public_id(): string;
        get_system_id(): string;

        // Own virtual methods of GXml-0.14.DomDocumentType

        vfunc_get_name(): string;
        vfunc_get_public_id(): string;
        vfunc_get_system_id(): string;
    }

    interface DomElement {
        // Own properties of GXml-0.14.DomElement

        readonly namespace_uri: string;
        readonly namespaceUri: string;
        readonly prefix: string;
        readonly local_name: string;
        readonly localName: string;
        readonly tag_name: string;
        readonly tagName: string;
        id: string;
        class_name: string;
        className: string;
        readonly class_list: DomTokenList;
        readonly classList: DomTokenList;
        readonly attributes: DomNamedNodeMap;

        // Owm methods of GXml-0.14.DomElement

        get_attribute(name: string): string;
        get_attribute_ns(namespace: string, local_name: string): string;
        set_attribute(name: string, value: string): void;
        set_attribute_ns(namespace: string, name: string, value: string): void;
        remove_attribute(name: string): void;
        remove_attribute_ns(namespace: string, local_name: string): void;
        has_attribute(name: string): boolean;
        has_attribute_ns(namespace: string, local_name: string): boolean;
        get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        get_elements_by_tag_name_ns(namespace: string, local_name: string): DomHTMLCollection;
        get_elements_by_class_name(class_names: string): DomHTMLCollection;
        get_namespace_uri(): string;
        get_prefix(): string;
        get_local_name(): string;
        get_tag_name(): string;
        get_id(): string;
        set_id(value: string): void;
        get_class_name(): string;
        set_class_name(value: string): void;
        get_class_list(): DomTokenList;
        get_attributes(): DomNamedNodeMap;

        // Own virtual methods of GXml-0.14.DomElement

        vfunc_get_attribute(name: string): string;
        vfunc_get_attribute_ns(namespace: string, local_name: string): string;
        vfunc_set_attribute(name: string, value: string): void;
        vfunc_set_attribute_ns(namespace: string, name: string, value: string): void;
        vfunc_remove_attribute(name: string): void;
        vfunc_remove_attribute_ns(namespace: string, local_name: string): void;
        vfunc_has_attribute(name: string): boolean;
        vfunc_has_attribute_ns(namespace: string, local_name: string): boolean;
        vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_tag_name_ns(namespace: string, local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_class_name(class_names: string): DomHTMLCollection;
        vfunc_get_namespace_uri(): string;
        vfunc_get_prefix(): string;
        vfunc_get_local_name(): string;
        vfunc_get_tag_name(): string;
        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_class_name(): string;
        vfunc_set_class_name(value: string): void;
        vfunc_get_class_list(): DomTokenList;
        vfunc_get_attributes(): DomNamedNodeMap;
    }

    interface DomEventTarget {
        // Owm methods of GXml-0.14.DomEventTarget

        add_event_listener(type: string, callback: DomEventListener, capture: boolean): void;
        remove_event_listener(type: string, callback: DomEventListener, capture: boolean): void;
        dispatch_event(event: DomEvent): boolean;

        // Own virtual methods of GXml-0.14.DomEventTarget

        vfunc_add_event_listener(type: string, callback: DomEventListener, capture: boolean): void;
        vfunc_remove_event_listener(type: string, callback: DomEventListener, capture: boolean): void;
        vfunc_dispatch_event(event: DomEvent): boolean;
    }

    interface DomEventListener {
        // Owm methods of GXml-0.14.DomEventListener

        handle_event(event: DomEvent): void;

        // Own virtual methods of GXml-0.14.DomEventListener

        vfunc_handle_event(event: DomEvent): void;
    }

    interface DomEvent {
        // Own properties of GXml-0.14.DomEvent

        readonly etype: string;
        readonly event_target: DomEventTarget;
        readonly eventTarget: DomEventTarget;
        readonly current_target: DomEventTarget;
        readonly currentTarget: DomEventTarget;
        readonly bubbles: boolean;
        readonly cancelable: boolean;
        readonly is_trusted: boolean;
        readonly isTrusted: boolean;
        readonly time_stamp: DomTimeStamp;
        readonly timeStamp: DomTimeStamp;
        readonly default_prevented: boolean;
        readonly defaultPrevented: boolean;
        readonly event_phase: DomEventPhase;
        readonly eventPhase: DomEventPhase;

        // Owm methods of GXml-0.14.DomEvent

        stop_propagation(): void;
        stop_immediate_propagation(): void;
        prevent_default(): void;
        init_event(type: string, bubbles: boolean, cancelable: boolean): void;
        get_etype(): string;
        get_event_target(): DomEventTarget;
        get_current_target(): DomEventTarget;
        get_bubbles(): boolean;
        get_cancelable(): boolean;
        get_is_trusted(): boolean;
        get_time_stamp(): DomTimeStamp;
        get_default_prevented(): boolean;
        get_event_phase(): DomEventPhase;

        // Own virtual methods of GXml-0.14.DomEvent

        vfunc_stop_propagation(): void;
        vfunc_stop_immediate_propagation(): void;
        vfunc_prevent_default(): void;
        vfunc_init_event(type: string, bubbles: boolean, cancelable: boolean): void;
        vfunc_get_etype(): string;
        vfunc_get_event_target(): DomEventTarget;
        vfunc_get_current_target(): DomEventTarget;
        vfunc_get_bubbles(): boolean;
        vfunc_get_cancelable(): boolean;
        vfunc_get_is_trusted(): boolean;
        vfunc_get_time_stamp(): DomTimeStamp;
        vfunc_get_default_prevented(): boolean;
        vfunc_get_event_phase(): DomEventPhase;
    }

    interface DomCustomEvent {
        // Own properties of GXml-0.14.DomCustomEvent

        readonly detail: GObject.Value;

        // Owm methods of GXml-0.14.DomCustomEvent

        init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: GObject.Value): void;
        get_detail(): GObject.Value;

        // Own virtual methods of GXml-0.14.DomCustomEvent

        vfunc_init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: GObject.Value): void;
        vfunc_get_detail(): GObject.Value;
    }

    interface DomMutationObserver {
        // Owm methods of GXml-0.14.DomMutationObserver

        observe(target: Node, options: DomMutationObserverInit): void;
        disconnect(): void;
        take_records(): Gee.List;

        // Own virtual methods of GXml-0.14.DomMutationObserver

        vfunc_observe(target: Node, options: DomMutationObserverInit): void;
        vfunc_disconnect(): void;
        vfunc_take_records(): Gee.List;
    }

    interface DomMutationRecord {
        // Own properties of GXml-0.14.DomMutationRecord

        readonly mtype: string;
        readonly target: DomNode;
        added_nodes: DomNodeList;
        addedNodes: DomNodeList;
        removed_nodes: DomNodeList;
        removedNodes: DomNodeList;
        readonly previous_sibling: DomNode;
        readonly previousSibling: DomNode;
        readonly next_sibling: DomNode;
        readonly nextSibling: DomNode;
        readonly attribute_name: string;
        readonly attributeName: string;
        readonly attribute_namespace: string;
        readonly attributeNamespace: string;
        readonly old_value: string;
        readonly oldValue: string;

        // Owm methods of GXml-0.14.DomMutationRecord

        get_mtype(): string;
        get_target(): DomNode;
        get_added_nodes(): DomNodeList;
        set_added_nodes(value: DomNodeList): void;
        get_removed_nodes(): DomNodeList;
        set_removed_nodes(value: DomNodeList): void;
        get_previous_sibling(): DomNode;
        get_next_sibling(): DomNode;
        get_attribute_name(): string;
        get_attribute_namespace(): string;
        get_old_value(): string;

        // Own virtual methods of GXml-0.14.DomMutationRecord

        vfunc_get_mtype(): string;
        vfunc_get_target(): DomNode;
        vfunc_get_added_nodes(): DomNodeList;
        vfunc_set_added_nodes(value: DomNodeList): void;
        vfunc_get_removed_nodes(): DomNodeList;
        vfunc_set_removed_nodes(value: DomNodeList): void;
        vfunc_get_previous_sibling(): DomNode;
        vfunc_get_next_sibling(): DomNode;
        vfunc_get_attribute_name(): string;
        vfunc_get_attribute_namespace(): string;
        vfunc_get_old_value(): string;
    }

    interface DomNode {
        // Own properties of GXml-0.14.DomNode

        readonly node_type: DomNodeNodeType;
        readonly nodeType: DomNodeNodeType;
        readonly node_name: string;
        readonly nodeName: string;
        readonly base_uri: string;
        readonly baseUri: string;
        owner_document: DomDocument;
        ownerDocument: DomDocument;
        readonly parent_node: DomNode;
        readonly parentNode: DomNode;
        readonly parent_element: DomElement;
        readonly parentElement: DomElement;
        readonly child_nodes: DomNodeList;
        readonly childNodes: DomNodeList;
        readonly first_child: DomNode;
        readonly firstChild: DomNode;
        readonly last_child: DomNode;
        readonly lastChild: DomNode;
        readonly previous_sibling: DomNode;
        readonly previousSibling: DomNode;
        readonly next_sibling: DomNode;
        readonly nextSibling: DomNode;
        node_value: string;
        nodeValue: string;
        text_content: string;
        textContent: string;

        // Owm methods of GXml-0.14.DomNode

        has_child_nodes(): boolean;
        normalize(): void;
        is_equal_node(node: DomNode): boolean;
        compare_document_position(other: DomNode): DomNodeDocumentPosition;
        contains(other: DomNode): boolean;
        lookup_prefix(nspace: string): string;
        lookup_namespace_uri(prefix: string): string;
        is_default_namespace(nspace: string): boolean;
        insert_before(node: DomNode, child: DomNode): DomNode;
        append_child(node: DomNode): DomNode;
        replace_child(node: DomNode, child: DomNode): DomNode;
        remove_child(child: DomNode): DomNode;
        clone_node(deep: boolean): DomNode;
        get_node_type(): DomNodeNodeType;
        get_node_name(): string;
        get_base_uri(): string;
        get_owner_document(): DomDocument;
        set_owner_document(value: DomDocument): void;
        get_parent_node(): DomNode;
        get_parent_element(): DomElement;
        get_child_nodes(): DomNodeList;
        get_first_child(): DomNode;
        get_last_child(): DomNode;
        get_previous_sibling(): DomNode;
        get_next_sibling(): DomNode;
        get_node_value(): string;
        set_node_value(value: string): void;
        get_text_content(): string;
        set_text_content(value: string): void;

        // Own virtual methods of GXml-0.14.DomNode

        vfunc_has_child_nodes(): boolean;
        vfunc_normalize(): void;
        vfunc_is_equal_node(node: DomNode): boolean;
        vfunc_compare_document_position(other: DomNode): DomNodeDocumentPosition;
        vfunc_contains(other: DomNode): boolean;
        vfunc_lookup_prefix(nspace: string): string;
        vfunc_lookup_namespace_uri(prefix: string): string;
        vfunc_is_default_namespace(nspace: string): boolean;
        vfunc_insert_before(node: DomNode, child: DomNode): DomNode;
        vfunc_append_child(node: DomNode): DomNode;
        vfunc_replace_child(node: DomNode, child: DomNode): DomNode;
        vfunc_remove_child(child: DomNode): DomNode;
        vfunc_clone_node(deep: boolean): DomNode;
        vfunc_get_node_type(): DomNodeNodeType;
        vfunc_get_node_name(): string;
        vfunc_get_base_uri(): string;
        vfunc_get_owner_document(): DomDocument;
        vfunc_set_owner_document(value: DomDocument): void;
        vfunc_get_parent_node(): DomNode;
        vfunc_get_parent_element(): DomElement;
        vfunc_get_child_nodes(): DomNodeList;
        vfunc_get_first_child(): DomNode;
        vfunc_get_last_child(): DomNode;
        vfunc_get_previous_sibling(): DomNode;
        vfunc_get_next_sibling(): DomNode;
        vfunc_get_node_value(): string;
        vfunc_set_node_value(value: string): void;
        vfunc_get_text_content(): string;
        vfunc_set_text_content(value: string): void;
    }

    interface DomRange {
        // Own properties of GXml-0.14.DomRange

        readonly start_container: DomNode;
        readonly startContainer: DomNode;
        readonly start_offset: number;
        readonly startOffset: number;
        readonly end_container: DomNode;
        readonly endContainer: DomNode;
        readonly end_offset: number;
        readonly endOffset: number;
        readonly collapsed: boolean;
        readonly common_ancestor_container: DomNode;
        readonly commonAncestorContainer: DomNode;

        // Owm methods of GXml-0.14.DomRange

        set_start(node: DomNode, offset: number): void;
        set_end(node: DomNode, offset: number): void;
        set_start_before(node: DomNode): void;
        set_start_after(node: DomNode): void;
        set_end_before(node: DomNode): void;
        set_end_after(node: DomNode): void;
        collapse(to_start: boolean): void;
        select_node(node: DomNode): void;
        select_node_contents(node: DomNode): void;
        compare_boundary_points(how: DomRangeBoundaryPoints, sourceRange: DomRange): number;
        delete_contents(): void;
        extract_contents(): DomDocumentFragment;
        clone_contents(): DomDocumentFragment;
        insert_node(node: DomNode): void;
        surround_contents(newParent: DomNode): void;
        clone_range(): DomRange;
        detach(): void;
        is_point_in_range(node: DomNode, offset: number): boolean;
        compare_point(node: DomNode, offset: number): number;
        intersects_node(node: DomNode): boolean;
        to_string(): string;
        get_start_container(): DomNode;
        get_start_offset(): number;
        get_end_container(): DomNode;
        get_end_offset(): number;
        get_collapsed(): boolean;
        get_common_ancestor_container(): DomNode;

        // Own virtual methods of GXml-0.14.DomRange

        vfunc_set_start(node: DomNode, offset: number): void;
        vfunc_set_end(node: DomNode, offset: number): void;
        vfunc_set_start_before(node: DomNode): void;
        vfunc_set_start_after(node: DomNode): void;
        vfunc_set_end_before(node: DomNode): void;
        vfunc_set_end_after(node: DomNode): void;
        vfunc_collapse(to_start: boolean): void;
        vfunc_select_node(node: DomNode): void;
        vfunc_select_node_contents(node: DomNode): void;
        vfunc_compare_boundary_points(how: DomRangeBoundaryPoints, sourceRange: DomRange): number;
        vfunc_delete_contents(): void;
        vfunc_extract_contents(): DomDocumentFragment;
        vfunc_clone_contents(): DomDocumentFragment;
        vfunc_insert_node(node: DomNode): void;
        vfunc_surround_contents(newParent: DomNode): void;
        vfunc_clone_range(): DomRange;
        vfunc_detach(): void;
        vfunc_is_point_in_range(node: DomNode, offset: number): boolean;
        vfunc_compare_point(node: DomNode, offset: number): number;
        vfunc_intersects_node(node: DomNode): boolean;
        vfunc_to_string(): string;
        vfunc_get_start_container(): DomNode;
        vfunc_get_start_offset(): number;
        vfunc_get_end_container(): DomNode;
        vfunc_get_end_offset(): number;
        vfunc_get_collapsed(): boolean;
        vfunc_get_common_ancestor_container(): DomNode;
    }

    interface XPathContext {
        // Owm methods of GXml-0.14.XPathContext

        evaluate(expression: string, resolver: Gee.List): XPathObject;

        // Own virtual methods of GXml-0.14.XPathContext

        vfunc_evaluate(expression: string, resolver: Gee.List): XPathObject;
    }

    interface XPathObject {
        // Own properties of GXml-0.14.XPathObject

        readonly object_type: XPathObjectType;
        readonly objectType: XPathObjectType;
        readonly boolean_value: boolean;
        readonly booleanValue: boolean;
        readonly string_value: string;
        readonly stringValue: string;
        readonly number_value: number;
        readonly numberValue: number;
        readonly nodeset: DomHTMLCollection;

        // Owm methods of GXml-0.14.XPathObject

        get_object_type(): XPathObjectType;
        get_boolean_value(): boolean;
        get_string_value(): string;
        get_number_value(): number;
        get_nodeset(): DomHTMLCollection;

        // Own virtual methods of GXml-0.14.XPathObject

        vfunc_get_object_type(): XPathObjectType;
        vfunc_get_boolean_value(): boolean;
        vfunc_get_string_value(): string;
        vfunc_get_number_value(): number;
        vfunc_get_nodeset(): DomHTMLCollection;
    }

    interface GomObject {
        // Owm methods of GXml-0.14.GomObject

        get_properties_list(): GObject.ParamSpec[];
        find_property_name(pname: string): GObject.ParamSpec;
        find_object_property_name(pname: string): GObject.ParamSpec;
        get_property_element_list(): GObject.ParamSpec[];
        get_property_string(prop: GObject.ParamSpec): string;
        get_attribute(name: string): string;
        set_attribute(name: string, val: string): boolean;
        get_child(name: string): DomElement;
        find_elements(name: string): DomElementList;
        remove_attribute(name: string): boolean;
        set_instance_property(name: string): boolean;
        clean_property_elements(name: string): void;

        // Own virtual methods of GXml-0.14.GomObject

        vfunc_get_properties_list(): GObject.ParamSpec[];
        vfunc_find_property_name(pname: string): GObject.ParamSpec;
        vfunc_find_object_property_name(pname: string): GObject.ParamSpec;
        vfunc_get_property_element_list(): GObject.ParamSpec[];
        vfunc_get_property_string(prop: GObject.ParamSpec): string;
        vfunc_get_attribute(name: string): string;
        vfunc_set_attribute(name: string, val: string): boolean;
        vfunc_get_child(name: string): DomElement;
        vfunc_find_elements(name: string): DomElementList;
        vfunc_remove_attribute(name: string): boolean;
        vfunc_set_instance_property(name: string): boolean;
        vfunc_clean_property_elements(name: string): void;
    }

    interface GomCollection {
        // Own properties of GXml-0.14.GomCollection

        readonly nodes_index: GLib.Queue;
        readonly nodesIndex: GLib.Queue;
        element: GomElement;
        readonly items_name: string;
        readonly itemsName: string;
        items_type: GObject.GType;
        itemsType: GObject.GType;
        readonly length: number;

        // Owm methods of GXml-0.14.GomCollection

        search(): void;
        get_item(index: number): DomElement;
        append(node: DomElement): void;
        initialize(t: GObject.GType): void;
        create_item(): GomElement;
        validate_append(index: number, element: DomElement): boolean;
        get_nodes_index(): GLib.Queue;
        get_element(): GomElement;
        set_element(value: GomElement): void;
        get_items_name(): string;
        get_items_type(): GObject.GType;
        set_items_type(value: GObject.GType): void;
        get_length(): number;

        // Own virtual methods of GXml-0.14.GomCollection

        vfunc_search(): void;
        vfunc_get_item(index: number): DomElement;
        vfunc_append(node: DomElement): void;
        vfunc_initialize(t: GObject.GType): void;
        vfunc_create_item(): GomElement;
        vfunc_validate_append(index: number, element: DomElement): boolean;
        vfunc_get_nodes_index(): GLib.Queue;
        vfunc_get_element(): GomElement;
        vfunc_set_element(value: GomElement): void;
        vfunc_get_items_name(): string;
        vfunc_get_items_type(): GObject.GType;
        vfunc_set_items_type(value: GObject.GType): void;
        vfunc_get_length(): number;
    }

    interface MappeableElement {
        // Owm methods of GXml-0.14.MappeableElement

        get_map_key(): string;

        // Own virtual methods of GXml-0.14.MappeableElement

        vfunc_get_map_key(): string;
    }

    interface MappeableElementPairKey {
        // Owm methods of GXml-0.14.MappeableElementPairKey

        get_map_primary_key(): string;
        get_map_secondary_key(): string;

        // Own virtual methods of GXml-0.14.MappeableElementPairKey

        vfunc_get_map_primary_key(): string;
        vfunc_get_map_secondary_key(): string;
    }

    interface MappeableElementThreeKey {
        // Owm methods of GXml-0.14.MappeableElementThreeKey

        get_map_pkey(): string;
        get_map_skey(): string;
        get_map_tkey(): string;

        // Own virtual methods of GXml-0.14.MappeableElementThreeKey

        vfunc_get_map_pkey(): string;
        vfunc_get_map_skey(): string;
        vfunc_get_map_tkey(): string;
    }

    interface GomProperty {
        // Own properties of GXml-0.14.GomProperty

        value: string;

        // Owm methods of GXml-0.14.GomProperty

        validate_value(val: string): boolean;
        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.14.GomProperty

        vfunc_validate_value(val: string): boolean;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
    }

    interface Parser {
        // Own properties of GXml-0.14.Parser

        backup: boolean;
        indent: boolean;
        readonly node: DomNode;

        // Owm methods of GXml-0.14.Parser

        write_file(file: Gio.File, cancellable: Gio.Cancellable): void;
        write_string(): string;
        write_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable): void;
        read_file(file: Gio.File, cancellable: Gio.Cancellable): void;
        read_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable): void;
        read_string(str: string, cancellable: Gio.Cancellable): void;
        get_backup(): boolean;
        set_backup(value: boolean): void;
        get_indent(): boolean;
        set_indent(value: boolean): void;
        get_node(): DomNode;

        // Own virtual methods of GXml-0.14.Parser

        vfunc_write_file(file: Gio.File, cancellable: Gio.Cancellable): void;
        vfunc_write_string(): string;
        vfunc_write_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable): void;
        vfunc_read_file(file: Gio.File, cancellable: Gio.Cancellable): void;
        vfunc_read_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable): void;
        vfunc_read_string(str: string, cancellable: Gio.Cancellable): void;
        vfunc_get_backup(): boolean;
        vfunc_set_backup(value: boolean): void;
        vfunc_get_indent(): boolean;
        vfunc_set_indent(value: boolean): void;
        vfunc_get_node(): DomNode;
    }

    interface IXsdSchema {
        // Own properties of GXml-0.14.IXsdSchema

        element_definitions: IXsdListElements;
        elementDefinitions: IXsdListElements;
        simple_type_definitions: IXsdListSimpleTypes;
        simpleTypeDefinitions: IXsdListSimpleTypes;
        complex_type_definitions: IXsdListComplexTypes;
        complexTypeDefinitions: IXsdListComplexTypes;

        // Owm methods of GXml-0.14.IXsdSchema

        get_element_definitions(): IXsdListElements;
        set_element_definitions(value: IXsdListElements): void;
        get_simple_type_definitions(): IXsdListSimpleTypes;
        set_simple_type_definitions(value: IXsdListSimpleTypes): void;
        get_complex_type_definitions(): IXsdListComplexTypes;
        set_complex_type_definitions(value: IXsdListComplexTypes): void;

        // Own virtual methods of GXml-0.14.IXsdSchema

        vfunc_get_element_definitions(): IXsdListElements;
        vfunc_set_element_definitions(value: IXsdListElements): void;
        vfunc_get_simple_type_definitions(): IXsdListSimpleTypes;
        vfunc_set_simple_type_definitions(value: IXsdListSimpleTypes): void;
        vfunc_get_complex_type_definitions(): IXsdListComplexTypes;
        vfunc_set_complex_type_definitions(value: IXsdListComplexTypes): void;
    }

    interface IXsdBaseType {
        // Own properties of GXml-0.14.IXsdBaseType

        anotation: IXsdAnnotation;

        // Owm methods of GXml-0.14.IXsdBaseType

        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.14.IXsdBaseType

        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
    }

    interface IXsdSimpleType {
        // Own properties of GXml-0.14.IXsdSimpleType

        final: string;
        id: string;
        name: string;
        annotation: IXsdAnnotation;
        list: IXsdTypeList;
        union: IXsdTypeUnion;
        restriction: IXsdTypeRestriction;

        // Owm methods of GXml-0.14.IXsdSimpleType

        get_final(): string;
        set_final(value: string): void;
        get_id(): string;
        set_id(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_annotation(): IXsdAnnotation;
        set_annotation(value: IXsdAnnotation): void;
        get_list(): IXsdTypeList;
        set_list(value: IXsdTypeList): void;
        get_union(): IXsdTypeUnion;
        set_union(value: IXsdTypeUnion): void;
        get_restriction(): IXsdTypeRestriction;
        set_restriction(value: IXsdTypeRestriction): void;

        // Own virtual methods of GXml-0.14.IXsdSimpleType

        vfunc_get_final(): string;
        vfunc_set_final(value: string): void;
        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_annotation(): IXsdAnnotation;
        vfunc_set_annotation(value: IXsdAnnotation): void;
        vfunc_get_list(): IXsdTypeList;
        vfunc_set_list(value: IXsdTypeList): void;
        vfunc_get_union(): IXsdTypeUnion;
        vfunc_set_union(value: IXsdTypeUnion): void;
        vfunc_get_restriction(): IXsdTypeRestriction;
        vfunc_set_restriction(value: IXsdTypeRestriction): void;
    }

    interface IXsdTypeDef {}

    interface IXsdTypeRestriction {
        // Own properties of GXml-0.14.IXsdTypeRestriction

        base: string;
        id: string;
        simple_type: IXsdSimpleType;
        simpleType: IXsdSimpleType;
        enumerations: IXsdListTypeRestrictionEnumerations;
        white_spaces: IXsdListTypeRestrictionWhiteSpaces;
        whiteSpaces: IXsdListTypeRestrictionWhiteSpaces;

        // Owm methods of GXml-0.14.IXsdTypeRestriction

        get_base(): string;
        set_base(value: string): void;
        get_id(): string;
        set_id(value: string): void;
        get_simple_type(): IXsdSimpleType;
        set_simple_type(value: IXsdSimpleType): void;
        get_enumerations(): IXsdListTypeRestrictionEnumerations;
        set_enumerations(value: IXsdListTypeRestrictionEnumerations): void;
        get_white_spaces(): IXsdListTypeRestrictionWhiteSpaces;
        set_white_spaces(value: IXsdListTypeRestrictionWhiteSpaces): void;

        // Own virtual methods of GXml-0.14.IXsdTypeRestriction

        vfunc_get_base(): string;
        vfunc_set_base(value: string): void;
        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_simple_type(): IXsdSimpleType;
        vfunc_set_simple_type(value: IXsdSimpleType): void;
        vfunc_get_enumerations(): IXsdListTypeRestrictionEnumerations;
        vfunc_set_enumerations(value: IXsdListTypeRestrictionEnumerations): void;
        vfunc_get_white_spaces(): IXsdListTypeRestrictionWhiteSpaces;
        vfunc_set_white_spaces(value: IXsdListTypeRestrictionWhiteSpaces): void;
    }

    interface IXsdTypeList {}

    interface IXsdTypeUnion {}

    interface IXsdTypeRestrictionDef {
        // Own properties of GXml-0.14.IXsdTypeRestrictionDef

        annotation: IXsdAnnotation;

        // Owm methods of GXml-0.14.IXsdTypeRestrictionDef

        get_annotation(): IXsdAnnotation;
        set_annotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.14.IXsdTypeRestrictionDef

        vfunc_get_annotation(): IXsdAnnotation;
        vfunc_set_annotation(value: IXsdAnnotation): void;
    }

    interface IXsdTypeRestrictionMinExclusive {}

    interface IXsdTypeRestrictionMinInclusive {}

    interface IXsdTypeRestrictionMaxExclusive {}

    interface IXsdTypeRestrictionMaxInclusive {}

    interface IXsdTypeRestrictionTotalDigits {}

    interface IXsdTypeRestrictionFractionDigits {}

    interface IXsdTypeRestrictionLength {}

    interface IXsdTypeRestrictionMinLength {}

    interface IXsdTypeRestrictionMaxLength {}

    interface IXsdTypeRestrictionEnumeration {
        // Own properties of GXml-0.14.IXsdTypeRestrictionEnumeration

        id: string;
        value: string;

        // Owm methods of GXml-0.14.IXsdTypeRestrictionEnumeration

        get_id(): string;
        set_id(value: string): void;
        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.14.IXsdTypeRestrictionEnumeration

        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
    }

    interface IXsdTypeRestrictionWhiteSpace {
        // Own properties of GXml-0.14.IXsdTypeRestrictionWhiteSpace

        fixed: boolean;
        id: string;
        value: string;

        // Owm methods of GXml-0.14.IXsdTypeRestrictionWhiteSpace

        get_fixed(): boolean;
        set_fixed(value: boolean): void;
        get_id(): string;
        set_id(value: string): void;
        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.14.IXsdTypeRestrictionWhiteSpace

        vfunc_get_fixed(): boolean;
        vfunc_set_fixed(value: boolean): void;
        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
    }

    interface IXsdTypeRestrictionPattern {}

    interface IXsdTypeRestrictionAssertion {}

    interface IXsdTypeRestrictionExplicitTimezone {}

    interface IXsdComplexType {
        // Own properties of GXml-0.14.IXsdComplexType

        abstract: boolean;
        block: string;
        final: string;
        mixed: boolean;
        name: string;
        default_attributes_apply: boolean;
        defaultAttributesApply: boolean;
        content_type: IXsdBaseContent;
        contentType: IXsdBaseContent;
        readonly type_attributes: IXsdListAttributes;
        readonly typeAttributes: IXsdListAttributes;
        readonly group_attributes: IXsdListAttributesGroup;
        readonly groupAttributes: IXsdListAttributesGroup;

        // Owm methods of GXml-0.14.IXsdComplexType

        get_abstract(): boolean;
        set_abstract(value: boolean): void;
        get_block(): string;
        set_block(value: string): void;
        get_final(): string;
        set_final(value: string): void;
        get_mixed(): boolean;
        set_mixed(value: boolean): void;
        get_name(): string;
        set_name(value: string): void;
        get_default_attributes_apply(): boolean;
        set_default_attributes_apply(value: boolean): void;
        get_content_type(): IXsdBaseContent;
        set_content_type(value: IXsdBaseContent): void;
        get_type_attributes(): IXsdListAttributes;
        get_group_attributes(): IXsdListAttributesGroup;

        // Own virtual methods of GXml-0.14.IXsdComplexType

        vfunc_get_abstract(): boolean;
        vfunc_set_abstract(value: boolean): void;
        vfunc_get_block(): string;
        vfunc_set_block(value: string): void;
        vfunc_get_final(): string;
        vfunc_set_final(value: string): void;
        vfunc_get_mixed(): boolean;
        vfunc_set_mixed(value: boolean): void;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_default_attributes_apply(): boolean;
        vfunc_set_default_attributes_apply(value: boolean): void;
        vfunc_get_content_type(): IXsdBaseContent;
        vfunc_set_content_type(value: IXsdBaseContent): void;
        vfunc_get_type_attributes(): IXsdListAttributes;
        vfunc_get_group_attributes(): IXsdListAttributesGroup;
    }

    interface IXsdExtension {
        // Own properties of GXml-0.14.IXsdExtension

        base: string;

        // Owm methods of GXml-0.14.IXsdExtension

        get_base(): string;
        set_base(value: string): void;

        // Own virtual methods of GXml-0.14.IXsdExtension

        vfunc_get_base(): string;
        vfunc_set_base(value: string): void;
    }

    interface IXsdElement {
        // Own properties of GXml-0.14.IXsdElement

        abstract: boolean;
        block: string;
        default: string;
        final: string;
        fixed: string;
        form: string;
        id: string;
        maxOccurs: string;
        minOccurs: string;
        name: string;
        nillable: boolean;
        ref: string;
        substitution_group: DomTokenList;
        substitutionGroup: DomTokenList;
        target_namespace: string;
        targetNamespace: string;
        object_type: string;
        objectType: string;
        anotation: IXsdAnnotation;
        simple_type: IXsdSimpleType;
        simpleType: IXsdSimpleType;
        complex_type: IXsdComplexType;
        complexType: IXsdComplexType;

        // Owm methods of GXml-0.14.IXsdElement

        get_abstract(): boolean;
        set_abstract(value: boolean): void;
        get_block(): string;
        set_block(value: string): void;
        get_default(): string;
        set_default(value: string): void;
        get_final(): string;
        set_final(value: string): void;
        get_fixed(): string;
        set_fixed(value: string): void;
        get_form(): string;
        set_form(value: string): void;
        get_id(): string;
        set_id(value: string): void;
        get_maxOccurs(): string;
        set_maxOccurs(value: string): void;
        get_minOccurs(): string;
        set_minOccurs(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_nillable(): boolean;
        set_nillable(value: boolean): void;
        get_ref(): string;
        set_ref(value: string): void;
        get_substitution_group(): DomTokenList;
        set_substitution_group(value: DomTokenList): void;
        get_target_namespace(): string;
        set_target_namespace(value: string): void;
        get_object_type(): string;
        set_object_type(value: string): void;
        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;
        get_simple_type(): IXsdSimpleType;
        set_simple_type(value: IXsdSimpleType): void;
        get_complex_type(): IXsdComplexType;
        set_complex_type(value: IXsdComplexType): void;

        // Own virtual methods of GXml-0.14.IXsdElement

        vfunc_get_abstract(): boolean;
        vfunc_set_abstract(value: boolean): void;
        vfunc_get_block(): string;
        vfunc_set_block(value: string): void;
        vfunc_get_default(): string;
        vfunc_set_default(value: string): void;
        vfunc_get_final(): string;
        vfunc_set_final(value: string): void;
        vfunc_get_fixed(): string;
        vfunc_set_fixed(value: string): void;
        vfunc_get_form(): string;
        vfunc_set_form(value: string): void;
        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_maxOccurs(): string;
        vfunc_set_maxOccurs(value: string): void;
        vfunc_get_minOccurs(): string;
        vfunc_set_minOccurs(value: string): void;
        vfunc_get_name(): string;
        vfunc_set_name(value: string): void;
        vfunc_get_nillable(): boolean;
        vfunc_set_nillable(value: boolean): void;
        vfunc_get_ref(): string;
        vfunc_set_ref(value: string): void;
        vfunc_get_substitution_group(): DomTokenList;
        vfunc_set_substitution_group(value: DomTokenList): void;
        vfunc_get_target_namespace(): string;
        vfunc_set_target_namespace(value: string): void;
        vfunc_get_object_type(): string;
        vfunc_set_object_type(value: string): void;
        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
        vfunc_get_simple_type(): IXsdSimpleType;
        vfunc_set_simple_type(value: IXsdSimpleType): void;
        vfunc_get_complex_type(): IXsdComplexType;
        vfunc_set_complex_type(value: IXsdComplexType): void;
    }

    interface IXsdAnnotation {}

    interface IXsdBaseContent {
        // Own properties of GXml-0.14.IXsdBaseContent

        anotation: IXsdAnnotation;

        // Owm methods of GXml-0.14.IXsdBaseContent

        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.14.IXsdBaseContent

        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
    }

    interface IXsdSimpleContent {}

    interface IXsdComplexContent {}

    interface IXsdOpenContent {}

    interface IXsdBaseAttribute {
        // Own properties of GXml-0.14.IXsdBaseAttribute

        anotation: IXsdAnnotation;

        // Owm methods of GXml-0.14.IXsdBaseAttribute

        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.14.IXsdBaseAttribute

        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
    }

    interface IXsdAttribute {}

    interface IXsdAttributeGroup {}

    interface IXsdList {
        // Own properties of GXml-0.14.IXsdList

        element: DomElement;
        items_type: GObject.GType;
        itemsType: GObject.GType;
        items_name: GObject.GType;
        itemsName: GObject.GType;
        readonly length: number;

        // Owm methods of GXml-0.14.IXsdList

        get_item(index: number): DomElement;
        append(element: DomElement): void;
        remove(index: number): void;
        index_of(element: DomElement): number;
        get_element(): DomElement;
        set_element(value: DomElement): void;
        get_items_type(): GObject.GType;
        set_items_type(value: GObject.GType): void;
        get_items_name(): GObject.GType;
        set_items_name(value: GObject.GType): void;
        get_length(): number;

        // Own virtual methods of GXml-0.14.IXsdList

        vfunc_get_item(index: number): DomElement;
        vfunc_append(element: DomElement): void;
        vfunc_remove(index: number): void;
        vfunc_index_of(element: DomElement): number;
        vfunc_get_element(): DomElement;
        vfunc_set_element(value: DomElement): void;
        vfunc_get_items_type(): GObject.GType;
        vfunc_set_items_type(value: GObject.GType): void;
        vfunc_get_items_name(): GObject.GType;
        vfunc_set_items_name(value: GObject.GType): void;
        vfunc_get_length(): number;
    }

    interface IXsdListElements {}

    interface IXsdListSimpleTypes {}

    interface IXsdListComplexTypes {}

    interface IXsdListAttributes {}

    interface IXsdListAttributesGroup {}

    interface IXsdListTypeRestrictionEnumerations {}

    interface IXsdListTypeRestrictionWhiteSpaces {}

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

export default GXml;
// END
