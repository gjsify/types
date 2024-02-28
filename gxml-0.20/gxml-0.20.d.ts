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

export namespace GXml {
    enum CssCombiner {
        NULL,
        NONE,
        INSIDE,
        AND,
        PARENT,
        AFTER,
        PRECEDED,
    }
    enum CssSelectorType {
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
    class CssSelectorError extends GLib.Error {
        // Own fields of GXml-0.20.CssSelectorError

        NULL: number;
        EOF: number;
        NOT: number;
        PSEUDO: number;
        ATTRIBUTE: number;
        IDENTIFIER: number;
        COMBINER: number;

        // Constructors of GXml-0.20.CssSelectorError

        constructor(options: { message: string; code: number });
    }

    class DomDocumentError extends GLib.Error {
        // Own fields of GXml-0.20.DomDocumentError

        FILE_NOT_FOUND_ERROR: number;
        INVALID_DOCUMENT_ERROR: number;

        // Constructors of GXml-0.20.DomDocumentError

        constructor(options: { message: string; code: number });
    }

    class DomError extends GLib.Error {
        // Own fields of GXml-0.20.DomError

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

        // Constructors of GXml-0.20.DomError

        constructor(options: { message: string; code: number });
    }

    class EnumerationError extends GLib.Error {
        // Own fields of GXml-0.20.EnumerationError

        INVALID_VALUE: number;
        INVALID_TEXT: number;

        // Constructors of GXml-0.20.EnumerationError

        constructor(options: { message: string; code: number });
    }

    class IXsdSchemaError extends GLib.Error {
        // Own fields of GXml-0.20.IXsdSchemaError

        INVALIDATION_ERROR: number;

        // Constructors of GXml-0.20.IXsdSchemaError

        constructor(options: { message: string; code: number });
    }

    class ParserError extends GLib.Error {
        // Own fields of GXml-0.20.ParserError

        INVALID_DATA_ERROR: number;
        INVALID_FILE_ERROR: number;
        INVALID_STREAM_ERROR: number;

        // Constructors of GXml-0.20.ParserError

        constructor(options: { message: string; code: number });
    }

    class Error extends GLib.Error {
        // Own fields of GXml-0.20.Error

        NOT_SUPPORTED: number;
        PARSER: number;
        WRITER: number;

        // Constructors of GXml-0.20.Error

        constructor(options: { message: string; code: number });
    }

    class XPathError extends GLib.Error {
        // Own fields of GXml-0.20.XPathError

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

        // Constructors of GXml-0.20.XPathError

        constructor(options: { message: string; code: number });
    }

    class XPathObjectError extends GLib.Error {
        // Own fields of GXml-0.20.XPathObjectError

        INVALID_NAMESPACE_ERROR: number;

        // Constructors of GXml-0.20.XPathObjectError

        constructor(options: { message: string; code: number });
    }

    enum DomNodeFilterFilter {
        ACCEPT,
        REJECT,
        SKIP,
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
    module ArrayList {
        // Constructor properties interface
    }

    class ArrayList extends BaseCollection {
        // Constructors of GXml-0.20.ArrayList

        static ['new'](): ArrayList;
    }

    module Attr {
        // Constructor properties interface
    }

    class Attr extends Node {
        // Own properties of GXml-0.20.Attr

        readonly is_referenced: boolean;
        readonly isReferenced: boolean;

        // Own fields of GXml-0.20.Attr

        prop: Property;

        // Constructors of GXml-0.20.Attr

        static ['new'](element: DomElement, name: string, val: string): Attr;

        static namespace(
            element: DomElement,
            namespace_uri: string,
            prefix: string | null,
            name: string,
            val: string,
        ): Attr;

        static reference(element: DomElement, name: string): Attr;

        // Owm methods of GXml-0.20.Attr

        get_is_referenced(): boolean;
    }

    module BaseCollection {
        // Constructor properties interface
    }

    abstract class BaseCollection extends GObject.Object {
        // Owm methods of GXml-0.20.BaseCollection

        initialize_element(e: Element): void;
        validate_append(index: number, element: DomElement): boolean;
        clear(): void;
    }

    module CssSelector {
        // Constructor properties interface
    }

    class CssSelector extends GObject.Object {
        // Own properties of GXml-0.20.CssSelector

        selector_type: CssSelectorType;
        selectorType: CssSelectorType;
        name: string;
        value: string;
        combiner: CssCombiner;

        // Constructors of GXml-0.20.CssSelector

        static ['new'](t: CssSelectorType, name: string): CssSelector;

        static with_value(t: CssSelectorType, name: string, value: string): CssSelector;

        // Owm methods of GXml-0.20.CssSelector

        get_selector_type(): CssSelectorType;
        set_selector_type(value: CssSelectorType): void;
        get_name(): string;
        set_name(value: string): void;
        get_value(): string;
        set_value(value: string): void;
        get_combiner(): CssCombiner;
        set_combiner(value: CssCombiner): void;
    }

    module CssElementSelector {
        // Constructor properties interface
    }

    class CssElementSelector extends CssSelector {
        // Own properties of GXml-0.20.CssElementSelector

        readonly prefixed: boolean;
        prefix: string;
        local_name: string;
        localName: string;

        // Constructors of GXml-0.20.CssElementSelector

        static ['new'](prefix: string | null, local_name: string): CssElementSelector;

        // Owm methods of GXml-0.20.CssElementSelector

        get_prefixed(): boolean;
        get_prefix(): string | null;
        set_prefix(value?: string | null): void;
        get_local_name(): string;
        set_local_name(value: string): void;
    }

    module CssAttributeSelector {
        // Constructor properties interface
    }

    class CssAttributeSelector extends CssSelector {
        // Own properties of GXml-0.20.CssAttributeSelector

        prefix: string;
        local_name: string;
        localName: string;

        // Constructors of GXml-0.20.CssAttributeSelector

        static ['new'](prefix: string | null, local_name: string): CssAttributeSelector;

        // Owm methods of GXml-0.20.CssAttributeSelector

        get_prefix(): string | null;
        set_prefix(value?: string | null): void;
        get_local_name(): string;
        set_local_name(value: string): void;
    }

    module CssNotSelector {
        // Constructor properties interface
    }

    class CssNotSelector extends CssSelector {
        // Own properties of GXml-0.20.CssNotSelector

        readonly selectors: Gee.List;

        // Constructors of GXml-0.20.CssNotSelector

        static ['new'](): CssNotSelector;

        // Owm methods of GXml-0.20.CssNotSelector

        get_selectors(): Gee.List;
    }

    module CssSelectorParser {
        // Constructor properties interface
    }

    class CssSelectorParser extends GObject.Object {
        // Own properties of GXml-0.20.CssSelectorParser

        readonly selectors: Gee.List;

        // Constructors of GXml-0.20.CssSelectorParser

        static ['new'](): CssSelectorParser;

        // Owm methods of GXml-0.20.CssSelectorParser

        parse(selectors: string): void;
        get_selectors(): Gee.List;
        match(element: DomElement): boolean;
        query_selector_all(element: DomElement): DomNodeList;
    }

    module Document {
        // Constructor properties interface
    }

    class Document extends Node {
        // Constructors of GXml-0.20.Document

        static ['new'](): Document;

        static from_path(path: string): Document;

        static from_uri(uri: string): Document;

        static from_file(file: Gio.File): Document;

        static from_stream(stream: Gio.InputStream): Document;

        static from_string(str: string): Document;

        // Owm methods of GXml-0.20.Document

        search_root_element_property(): Element;
    }

    module Implementation {
        // Constructor properties interface
    }

    class Implementation extends GObject.Object {
        // Constructors of GXml-0.20.Implementation

        static ['new'](): Implementation;
    }

    module DocumentType {
        // Constructor properties interface
    }

    class DocumentType extends Node {
        // Constructors of GXml-0.20.DocumentType

        static ['new'](
            doc: DomDocument,
            name: string,
            public_id?: string | null,
            system_id?: string | null,
        ): DocumentType;

        static with_name(doc: DomDocument, name: string): DocumentType;

        static with_ids(doc: DomDocument, name: string, public_id: string, system_id: string): DocumentType;
    }

    module DocumentFragment {
        // Constructor properties interface
    }

    class DocumentFragment extends Node {
        // Constructors of GXml-0.20.DocumentFragment

        static ['new'](doc: DomDocument): DocumentFragment;
    }

    module DomNodeFilter {
        // Constructor properties interface
    }

    class DomNodeFilter extends GObject.Object {
        // Constructors of GXml-0.20.DomNodeFilter

        static ['new'](): DomNodeFilter;
    }

    module DomElementList {
        // Constructor properties interface
    }

    class DomElementList extends Gee.ArrayList {
        // Constructors of GXml-0.20.DomElementList

        static ['new'](): DomElementList;
    }

    module DomEventInit {
        // Constructor properties interface
    }

    class DomEventInit extends GObject.Object {
        // Own properties of GXml-0.20.DomEventInit

        bubbles: boolean;
        cancelable: boolean;

        // Constructors of GXml-0.20.DomEventInit

        static ['new'](): DomEventInit;

        // Owm methods of GXml-0.20.DomEventInit

        get_bubbles(): boolean;
        set_bubbles(value: boolean): void;
        get_cancelable(): boolean;
        set_cancelable(value: boolean): void;
    }

    module DomCustomEventInit {
        // Constructor properties interface
    }

    class DomCustomEventInit extends DomEventInit {
        // Own properties of GXml-0.20.DomCustomEventInit

        detail: GObject.Value;

        // Constructors of GXml-0.20.DomCustomEventInit

        static ['new'](): DomCustomEventInit;

        // Owm methods of GXml-0.20.DomCustomEventInit

        get_detail(): void;
        set_detail(value: GObject.Value): void;
    }

    module DomTimeStamp {
        // Constructor properties interface
    }

    class DomTimeStamp extends GObject.Object {
        // Own properties of GXml-0.20.DomTimeStamp

        time: GLib.DateTime;

        // Constructors of GXml-0.20.DomTimeStamp

        static ['new'](): DomTimeStamp;

        // Owm methods of GXml-0.20.DomTimeStamp

        get_time(): GLib.DateTime;
        set_time(value: GLib.DateTime): void;
        to_string(): string;
    }

    module DomMutationObserverInit {
        // Constructor properties interface
    }

    class DomMutationObserverInit extends GObject.Object {
        // Own properties of GXml-0.20.DomMutationObserverInit

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

        // Constructors of GXml-0.20.DomMutationObserverInit

        static ['new'](): DomMutationObserverInit;

        // Owm methods of GXml-0.20.DomMutationObserverInit

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
        // Constructors of GXml-0.20.DomErrorName

        static ['new'](): DomErrorName;

        // Owm methods of GXml-0.20.DomErrorName

        get_name(error_code: number): string;
        get_code(error_name: string): number;
    }

    module Element {
        // Constructor properties interface
    }

    class Element extends Node {
        // Own properties of GXml-0.20.Element

        parse_children: boolean;
        parseChildren: boolean;
        unparsed: string;
        read_buffer: Gio.MemoryOutputStream;
        readBuffer: Gio.MemoryOutputStream;

        // Constructors of GXml-0.20.Element

        static ['new'](): Element;

        // Owm methods of GXml-0.20.Element

        lookup_prefix(nspace?: string | null): string | null;
        lookup_namespace_uri(prefix?: string | null): string | null;
        initialize(local_name: string): void;
        initialize_document(doc: DomDocument, local_name: string): void;
        initialize_with_namespace(namespace_uri: string | null, prefix: string | null, local_name: string): void;
        initialize_document_with_namespace(
            doc: DomDocument,
            namespace_uri: string | null,
            prefix: string | null,
            local_name: string,
        ): void;
        get_parse_children(): boolean;
        set_parse_children(value: boolean): void;
        get_unparsed(): string;
        set_unparsed(value: string): void;
        read_unparsed(): void;
        get_read_buffer(): Gio.MemoryOutputStream;
        set_read_buffer(value: Gio.MemoryOutputStream): void;
        parse_buffer(): void;
        parse_pending(): number;
        parse_buffer_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        parse_buffer_finish(_res_: Gio.AsyncResult): void;
    }

    module ElementAttributes {
        // Constructor properties interface
    }

    class ElementAttributes extends Gee.HashMap {
        // Constructors of GXml-0.20.ElementAttributes

        static ['new'](element: Element): ElementAttributes;

        // Owm methods of GXml-0.20.ElementAttributes

        add_reference(name: string): void;
    }

    class Enumeration {
        // Own fields of GXml-0.20.Enumeration

        ref_count: number;

        // Constructors of GXml-0.20.Enumeration

        static ['new'](): Enumeration;

        // Owm methods of GXml-0.20.Enumeration

        static get_nick(enumeration: GObject.GType, val: number): string;
        static get_nick_camelcase(enumeration: GObject.GType, val: number): string;
        static get_string(enumeration: GObject.GType, val: number, use_nick: boolean, camelcase: boolean): string;
        static parse(enumeration: GObject.GType, val: string): GObject.EnumValue | null;
        static to_array(enumeration: GObject.GType): GObject.EnumValue[];
        static parse_integer(enumeration: GObject.GType, val: number): GObject.EnumValue | null;
        static to_string_array(enumeration: GObject.GType): string[];
    }

    module Event {
        // Constructor properties interface
    }

    class Event extends GObject.Object {
        // Constructors of GXml-0.20.Event

        static ['new'](): Event;
    }

    module CustomEvent {
        // Constructor properties interface
    }

    class CustomEvent extends Event {
        // Own properties of GXml-0.20.CustomEvent

        readonly detail: GObject.Value;

        // Constructors of GXml-0.20.CustomEvent

        static ['new'](): CustomEvent;

        // Owm methods of GXml-0.20.CustomEvent

        get_detail(): void;
        init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail?: GObject.Value | null): void;
    }

    module HashMap {
        // Constructor properties interface
    }

    class HashMap extends BaseCollection {
        // Constructors of GXml-0.20.HashMap

        static ['new'](): HashMap;

        // Owm methods of GXml-0.20.HashMap

        initialize_element_with_key(element: Element, items_type: GObject.GType, attribute_key: string): void;
        initialize_with_key(items_type: GObject.GType, attribute_key: string): void;
        get(key: string): DomElement | null;
        get_keys(): string[];
    }

    module HashPairedMap {
        // Constructor properties interface
    }

    class HashPairedMap extends BaseCollection {
        // Constructors of GXml-0.20.HashPairedMap

        static ['new'](): HashPairedMap;

        // Owm methods of GXml-0.20.HashPairedMap

        initialize_element_with_keys(
            element: Element,
            items_type: GObject.GType,
            attribute_primary_key: string,
            attribute_secondary_key: string,
        ): void;
        initialize_with_keys(
            items_type: GObject.GType,
            attribute_primary_key: string,
            attribute_secondary_key: string,
        ): void;
        get(primary_key: string, secondary_key: string): DomElement | null;
        get_primary_keys(): string[];
        get_secondary_keys(pkey: string): string[];
    }

    module HashThreeMap {
        // Constructor properties interface
    }

    class HashThreeMap extends BaseCollection {
        // Constructors of GXml-0.20.HashThreeMap

        static ['new'](): HashThreeMap;

        // Owm methods of GXml-0.20.HashThreeMap

        initialize_element_with_keys(
            element: Element,
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
        get(primary_key: string, secondary_key: string, third_key: string): DomElement | null;
        get_primary_keys(): string[];
        get_secondary_keys(pkey: string): string[];
        get_third_keys(pkey: string, skey: string): string[];
    }

    module HTMLCollection {
        // Constructor properties interface
    }

    class HTMLCollection extends Gee.ArrayList {
        // Constructors of GXml-0.20.HTMLCollection

        static ['new'](): HTMLCollection;
    }

    module HtmlDocument {
        // Constructor properties interface
    }

    class HtmlDocument extends Document {
        // Own properties of GXml-0.20.HtmlDocument

        html: DomElement;

        // Constructors of GXml-0.20.HtmlDocument

        static ['new'](): HtmlDocument;

        // Owm methods of GXml-0.20.HtmlDocument

        get_html(): DomElement;
        set_html(value: DomElement): void;
    }

    module HtmlElement {
        // Constructor properties interface
    }

    class HtmlElement extends Element {
        // Constructors of GXml-0.20.HtmlElement

        static ['new'](): HtmlElement;
    }

    module LXPathObject {
        // Constructor properties interface
    }

    class LXPathObject extends GObject.Object {
        // Constructors of GXml-0.20.LXPathObject

        static ['new'](document: XDocument, pointer?: any | null): LXPathObject;
    }

    module Node {
        // Constructor properties interface
    }

    class Node extends GObject.Object {
        // Constructors of GXml-0.20.Node

        static ['new'](): Node;
    }

    module NodeList {
        // Constructor properties interface
    }

    class NodeList extends Gee.ArrayList {
        // Constructors of GXml-0.20.NodeList

        static ['new'](): NodeList;
    }

    module NodeIterator {
        // Constructor properties interface
    }

    class NodeIterator extends GObject.Object {
        // Constructors of GXml-0.20.NodeIterator

        static ['new'](n: DomNode, what_to_show: number): NodeIterator;
    }

    module BaseProperty {
        // Constructor properties interface
    }

    abstract class BaseProperty extends GObject.Object {
        // Own properties of GXml-0.20.BaseProperty

        value: string;

        // Owm methods of GXml-0.20.BaseProperty

        get_value(): string | null;
        set_value(value?: string | null): void;
        validate_value(val?: string | null): boolean;
    }

    module String {
        // Constructor properties interface
    }

    class String extends BaseProperty {
        // Constructors of GXml-0.20.String

        static with_string(str: string): String;

        static ['new'](): String;
    }

    module ArrayString {
        // Constructor properties interface
    }

    class ArrayString extends BaseProperty {
        // Constructors of GXml-0.20.ArrayString

        static ['new'](): ArrayString;

        // Owm methods of GXml-0.20.ArrayString

        get_values(): string[];
        initialize_strings(strs: string[]): void;
        is_valid_value(): boolean;
        select(index: number): void;
        search(str: string): boolean;
    }

    module XsdArrayString {
        // Constructor properties interface
    }

    class XsdArrayString extends ArrayString {
        // Own properties of GXml-0.20.XsdArrayString

        simple_type: string;
        simpleType: string;
        source: Gio.File;

        // Constructors of GXml-0.20.XsdArrayString

        static ['new'](): XsdArrayString;

        // Owm methods of GXml-0.20.XsdArrayString

        get_simple_type(): string;
        set_simple_type(value: string): void;
        get_source(): Gio.File;
        set_source(value: Gio.File): void;
        load(): void;
    }

    module Double {
        // Constructor properties interface
    }

    class Double extends BaseProperty {
        // Own properties of GXml-0.20.Double

        decimals: number;

        // Constructors of GXml-0.20.Double

        static ['new'](): Double;

        // Owm methods of GXml-0.20.Double

        get_decimals(): number;
        set_decimals(value: number): void;
        get_double(): number;
        set_double(value: number): void;
    }

    module Float {
        // Constructor properties interface
    }

    class Float extends Double {
        // Constructors of GXml-0.20.Float

        static ['new'](): Float;

        // Owm methods of GXml-0.20.Float

        get_float(): number;
        set_float(value: number): void;
    }

    module Int {
        // Constructor properties interface
    }

    class Int extends BaseProperty {
        // Constructors of GXml-0.20.Int

        static ['new'](): Int;

        // Owm methods of GXml-0.20.Int

        get_integer(): number;
        set_integer(value: number): void;
    }

    module Boolean {
        // Constructor properties interface
    }

    class Boolean extends BaseProperty {
        // Constructors of GXml-0.20.Boolean

        static ['new'](): Boolean;

        // Owm methods of GXml-0.20.Boolean

        get_boolean(): boolean;
        set_boolean(value: boolean): void;
    }

    module Enum {
        // Constructor properties interface
    }

    class Enum extends BaseProperty {
        // Own properties of GXml-0.20.Enum

        use_nick: boolean;
        useNick: boolean;
        camel_case: boolean;
        camelCase: boolean;
        upper_case: boolean;
        upperCase: boolean;
        enum_type: GObject.GType;
        enumType: GObject.GType;

        // Constructors of GXml-0.20.Enum

        static ['new'](): Enum;

        // Owm methods of GXml-0.20.Enum

        get_use_nick(): boolean;
        set_use_nick(value: boolean): void;
        get_camel_case(): boolean;
        set_camel_case(value: boolean): void;
        get_upper_case(): boolean;
        set_upper_case(value: boolean): void;
        get_enum_type(): GObject.GType;
        set_enum_type(value: GObject.GType): void;
        initialize_enum(enum_type: GObject.GType): void;
        get_enum(): number;
        set_enum(value: number): void;
        is_valid(): boolean;
    }

    module Date {
        // Constructor properties interface
    }

    class Date extends BaseProperty {
        // Constructors of GXml-0.20.Date

        static ['new'](): Date;

        // Owm methods of GXml-0.20.Date

        get_date(): void;
        set_date(date: GLib.Date): void;
    }

    module DateTime {
        // Constructor properties interface
    }

    class DateTime extends BaseProperty {
        // Own properties of GXml-0.20.DateTime

        format: string;

        // Constructors of GXml-0.20.DateTime

        static ['new'](): DateTime;

        // Owm methods of GXml-0.20.DateTime

        get_format(): string;
        set_format(value: string): void;
        get_datetime(): GLib.DateTime;
        set_datetime(dt: GLib.DateTime): void;
    }

    module Range {
        // Constructor properties interface
    }

    class Range extends GObject.Object {
        // Constructors of GXml-0.20.Range

        static ['new'](doc: DomDocument): Range;
    }

    module SettableTokenList {
        // Constructor properties interface
    }

    class SettableTokenList extends TokenList {
        // Constructors of GXml-0.20.SettableTokenList

        static ['new'](e: DomElement, attr?: string | null): SettableTokenList;
    }

    module StringRef {
        // Constructor properties interface
    }

    class StringRef extends GObject.Object {
        // Constructors of GXml-0.20.StringRef

        static ['new'](obj: Object, name: string): StringRef;
    }

    module CharacterData {
        // Constructor properties interface
    }

    class CharacterData extends Node {
        // Constructors of GXml-0.20.CharacterData

        static ['new'](): CharacterData;
    }

    module Text {
        // Constructor properties interface
    }

    class Text extends CharacterData {
        // Constructors of GXml-0.20.Text

        static ['new'](doc: DomDocument, data: string): Text;
    }

    module ProcessingInstruction {
        // Constructor properties interface
    }

    class ProcessingInstruction extends CharacterData {
        // Constructors of GXml-0.20.ProcessingInstruction

        static ['new'](doc: DomDocument, target: string, data: string): ProcessingInstruction;
    }

    module Comment {
        // Constructor properties interface
    }

    class Comment extends CharacterData {
        // Constructors of GXml-0.20.Comment

        static ['new'](doc: DomDocument, data: string): Comment;
    }

    module TokenList {
        // Constructor properties interface
    }

    class TokenList extends Gee.ArrayList {
        // Constructors of GXml-0.20.TokenList

        static ['new'](e: DomElement, attr?: string | null): TokenList;

        // Owm methods of GXml-0.20.TokenList

        update(): void;
    }

    module TreeWalker {
        // Constructor properties interface
    }

    class TreeWalker extends GObject.Object {
        // Constructors of GXml-0.20.TreeWalker

        static ['new'](root: DomNode, w: number): TreeWalker;
    }

    module XAttribute {
        // Constructor properties interface
    }

    class XAttribute extends XNode {
        // Constructors of GXml-0.20.XAttribute

        static ['new'](doc: XDocument, node?: any | null): XAttribute;
    }

    module XCharacterData {
        // Constructor properties interface
    }

    class XCharacterData extends XNonDocumentChildNode {
        // Own properties of GXml-0.20.XCharacterData

        str: string;

        // Constructors of GXml-0.20.XCharacterData

        static ['new'](): XCharacterData;

        // Owm methods of GXml-0.20.XCharacterData

        get_str(): string;
        set_str(value: string): void;
    }

    module XChildNode {
        // Constructor properties interface
    }

    class XChildNode extends XNode {
        // Constructors of GXml-0.20.XChildNode

        static ['new'](): XChildNode;
    }

    module XNonDocumentChildNode {
        // Constructor properties interface
    }

    class XNonDocumentChildNode extends XChildNode {
        // Constructors of GXml-0.20.XNonDocumentChildNode

        static ['new'](): XNonDocumentChildNode;
    }

    module XComment {
        // Constructor properties interface
    }

    class XComment extends XCharacterData {
        // Constructors of GXml-0.20.XComment

        static ['new'](doc: XDocument, node?: any | null): XComment;
    }

    module XDocument {
        // Constructor properties interface
    }

    class XDocument extends XNode {
        // Own properties of GXml-0.20.XDocument

        indent: boolean;
        ns_top: boolean;
        nsTop: boolean;
        prefix_default_ns: boolean;
        prefixDefaultNs: boolean;
        backup: boolean;
        file: Gio.File;
        readonly root: DomNode;

        // Own fields of GXml-0.20.XDocument

        doc: any | null;

        // Constructors of GXml-0.20.XDocument

        static ['new'](): XDocument;

        static from_path(path: string, options: number): XDocument;

        static from_uri(uri: string, options: number): XDocument;

        static from_file(file: Gio.File, options: number, cancel?: Gio.Cancellable | null): XDocument;

        static from_string(str: string, options: number): XDocument;

        static from_stream(istream: Gio.InputStream): XDocument;

        static from_doc(doc: libxml2.Doc): XDocument;

        // Owm methods of GXml-0.20.XDocument

        get_indent(): boolean;
        set_indent(value: boolean): void;
        get_ns_top(): boolean;
        set_ns_top(value: boolean): void;
        get_prefix_default_ns(): boolean;
        set_prefix_default_ns(value: boolean): void;
        get_backup(): boolean;
        set_backup(value: boolean): void;
        get_file(): Gio.File;
        set_file(value: Gio.File): void;
        get_root(): DomNode;
        create_pi(target: string, data: string): DomNode;
        create_text(text: string): DomNode;
        libxml_to_string(): string;
        save(cancellable?: Gio.Cancellable | null): boolean;
        save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    }

    module XElement {
        // Constructor properties interface
    }

    class XElement extends XNonDocumentChildNode {
        // Own properties of GXml-0.20.XElement

        content: string;

        // Constructors of GXml-0.20.XElement

        static ['new'](doc: XDocument, node?: any | null): XElement;

        // Owm methods of GXml-0.20.XElement

        set_attr(aname: string, avalue: string): void;
        get_attr(name: string): DomNode | null;
        set_ns_attr(ns: string, aname: string, value: string): void;
        get_ns_attr(name: string, uri: string): DomNode | null;
        normalize(): void;
        get_content(): string;
        set_content(value: string): void;
        remove_attr(name: string): void;
        remove_ns_attr(name: string, uri: string): void;
    }

    module XHashMapAttr {
        // Constructor properties interface
    }

    class XHashMapAttr extends Gee.AbstractMap {
        // Constructors of GXml-0.20.XHashMapAttr

        static ['new'](doc: XDocument, node?: any | null): XHashMapAttr;
    }

    module XHashMapAttrEntry {
        // Constructor properties interface
    }

    class XHashMapAttrEntry extends Gee.MapEntry {
        // Constructors of GXml-0.20.XHashMapAttrEntry

        static ['new'](doc: XDocument, attr?: any | null): XHashMapAttrEntry;
    }

    module XHashMapAttrIterator {
        // Constructor properties interface
    }

    class XHashMapAttrIterator extends GObject.Object {
        // Constructors of GXml-0.20.XHashMapAttrIterator

        static ['new'](doc: XDocument, node?: any | null): XHashMapAttrIterator;
    }

    module XHtmlDocument {
        // Constructor properties interface
    }

    class XHtmlDocument extends XDocument {
        // Constructors of GXml-0.20.XHtmlDocument

        static from_path(path: string, options: number): XHtmlDocument;

        static from_uri(uri: string, options: number): XHtmlDocument;

        static from_file(file: Gio.File, options: number, cancel?: Gio.Cancellable | null): XHtmlDocument;

        static from_string(html: string, options: number): XHtmlDocument;

        static from_string_context(html: string, options: number): XHtmlDocument;

        static from_string_doc(html: string, options: number): XHtmlDocument;

        static ['new'](): XHtmlDocument;

        // Owm methods of GXml-0.20.XHtmlDocument

        static get_default_options(): number;
    }

    module XListChildren {
        // Constructor properties interface
    }

    class XListChildren extends Gee.AbstractBidirList {
        // Constructors of GXml-0.20.XListChildren

        static ['new'](doc: XDocument, node?: any | null): XListChildren;
    }

    module XListChildrenIterator {
        // Constructor properties interface
    }

    class XListChildrenIterator extends GObject.Object {
        // Constructors of GXml-0.20.XListChildrenIterator

        static ['new'](doc: XDocument, node?: any | null): XListChildrenIterator;
    }

    module XNode {
        // Constructor properties interface
    }

    abstract class XNode extends GObject.Object {
        // Own properties of GXml-0.20.XNode

        readonly attrs: Gee.Map;
        readonly children_nodes: Gee.BidirList;
        readonly childrenNodes: Gee.BidirList;
        readonly document: DomDocument;
        readonly parent: DomNode;
        readonly type_node: NodeType;
        readonly typeNode: NodeType;
        readonly name: string;
        value: string;

        // Own fields of GXml-0.20.XNode

        owned_node: boolean;

        // Owm methods of GXml-0.20.XNode

        static to_gnode(doc: XDocument, node: any | null, take_node: boolean): DomNode;

        // Owm methods of GXml-0.20.XNode

        set_namespace(uri: string, prefix?: string | null): boolean;
        get_attrs(): Gee.Map;
        get_children_nodes(): Gee.BidirList;
        get_document(): DomDocument;
        get_parent(): DomNode;
        get_type_node(): NodeType;
        get_name(): string;
        get_value(): string;
        set_value(value: string): void;
        to_string(): string;
        get_internal_node(): any | null;
        clone_node(deep: boolean): DomNode;
    }

    module XParser {
        // Constructor properties interface
    }

    class XParser extends GObject.Object {
        // Constructors of GXml-0.20.XParser

        static ['new'](node: DomNode): XParser;

        // Owm methods of GXml-0.20.XParser

        read_node(node: DomNode): void;
        read_child_nodes_stream_async(istream: Gio.InputStream, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        read_child_nodes_stream_finish(_res_: Gio.AsyncResult): void;
    }

    module XProcessingInstruction {
        // Constructor properties interface
    }

    class XProcessingInstruction extends XCharacterData {
        // Own properties of GXml-0.20.XProcessingInstruction

        data: string;

        // Constructors of GXml-0.20.XProcessingInstruction

        static ['new'](doc: XDocument, node?: any | null): XProcessingInstruction;

        // Owm methods of GXml-0.20.XProcessingInstruction

        get_data(): string;
        set_data(value: string): void;
    }

    module XsdSchema {
        // Constructor properties interface
    }

    class XsdSchema extends Element {
        // Own properties of GXml-0.20.XsdSchema

        element_definitions: XsdListElements;
        elementDefinitions: XsdListElements;
        simple_type_definitions: XsdListSimpleTypes;
        simpleTypeDefinitions: XsdListSimpleTypes;
        complex_type_definitions: XsdListComplexTypes;
        complexTypeDefinitions: XsdListComplexTypes;

        // Constructors of GXml-0.20.XsdSchema

        static ['new'](): XsdSchema;

        // Owm methods of GXml-0.20.XsdSchema

        get_element_definitions(): XsdListElements;
        set_element_definitions(value: XsdListElements): void;
        get_simple_type_definitions(): XsdListSimpleTypes;
        set_simple_type_definitions(value: XsdListSimpleTypes): void;
        get_complex_type_definitions(): XsdListComplexTypes;
        set_complex_type_definitions(value: XsdListComplexTypes): void;
    }

    module XsdSimpleType {
        // Constructor properties interface
    }

    class XsdSimpleType extends Element {
        // Own properties of GXml-0.20.XsdSimpleType

        'final': string;
        name: string;
        annotation: XsdAnnotation;
        list: XsdTypeList;
        union: XsdTypeUnion;
        restriction: XsdTypeRestriction;

        // Constructors of GXml-0.20.XsdSimpleType

        static ['new'](): XsdSimpleType;

        // Owm methods of GXml-0.20.XsdSimpleType

        get_final(): string;
        set_final(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_annotation(): XsdAnnotation;
        set_annotation(value: XsdAnnotation): void;
        get_list(): XsdTypeList;
        set_list(value: XsdTypeList): void;
        get_union(): XsdTypeUnion;
        set_union(value: XsdTypeUnion): void;
        get_restriction(): XsdTypeRestriction;
        set_restriction(value: XsdTypeRestriction): void;
    }

    module XsdTypeDefinition {
        // Constructor properties interface
    }

    class XsdTypeDefinition extends Element {
        // Own properties of GXml-0.20.XsdTypeDefinition

        annotation: XsdAnnotation;

        // Constructors of GXml-0.20.XsdTypeDefinition

        static ['new'](): XsdTypeDefinition;

        // Owm methods of GXml-0.20.XsdTypeDefinition

        get_annotation(): XsdAnnotation;
        set_annotation(value: XsdAnnotation): void;
    }

    module XsdTypeList {
        // Constructor properties interface
    }

    class XsdTypeList extends XsdTypeDefinition {
        // Constructors of GXml-0.20.XsdTypeList

        static ['new'](): XsdTypeList;
    }

    module XsdTypeUnion {
        // Constructor properties interface
    }

    class XsdTypeUnion extends XsdTypeDefinition {
        // Constructors of GXml-0.20.XsdTypeUnion

        static ['new'](): XsdTypeUnion;
    }

    module XsdTypeRestriction {
        // Constructor properties interface
    }

    class XsdTypeRestriction extends XsdTypeDefinition {
        // Own properties of GXml-0.20.XsdTypeRestriction

        base: string;
        simple_type: XsdSimpleType;
        simpleType: XsdSimpleType;
        enumerations: XsdListTypeRestrictionEnumerations;
        white_spaces: XsdListTypeRestrictionWhiteSpaces;
        whiteSpaces: XsdListTypeRestrictionWhiteSpaces;

        // Constructors of GXml-0.20.XsdTypeRestriction

        static ['new'](): XsdTypeRestriction;

        // Owm methods of GXml-0.20.XsdTypeRestriction

        get_base(): string;
        set_base(value: string): void;
        get_simple_type(): XsdSimpleType;
        set_simple_type(value: XsdSimpleType): void;
        get_enumerations(): XsdListTypeRestrictionEnumerations;
        set_enumerations(value: XsdListTypeRestrictionEnumerations): void;
        get_white_spaces(): XsdListTypeRestrictionWhiteSpaces;
        set_white_spaces(value: XsdListTypeRestrictionWhiteSpaces): void;
    }

    module XsdTypeRestrictionDef {
        // Constructor properties interface
    }

    class XsdTypeRestrictionDef extends Element {
        // Own properties of GXml-0.20.XsdTypeRestrictionDef

        annotation: XsdAnnotation;

        // Constructors of GXml-0.20.XsdTypeRestrictionDef

        static ['new'](): XsdTypeRestrictionDef;

        // Owm methods of GXml-0.20.XsdTypeRestrictionDef

        get_annotation(): XsdAnnotation;
        set_annotation(value: XsdAnnotation): void;
    }

    module XsdTypeRestrictionMinExclusive {
        // Constructor properties interface
    }

    class XsdTypeRestrictionMinExclusive extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionMinExclusive

        static ['new'](): XsdTypeRestrictionMinExclusive;
    }

    module XsdTypeRestrictionMinInclusive {
        // Constructor properties interface
    }

    class XsdTypeRestrictionMinInclusive extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionMinInclusive

        static ['new'](): XsdTypeRestrictionMinInclusive;
    }

    module XsdTypeRestrictionMaxExclusive {
        // Constructor properties interface
    }

    class XsdTypeRestrictionMaxExclusive extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionMaxExclusive

        static ['new'](): XsdTypeRestrictionMaxExclusive;
    }

    module XsdTypeRestrictionMaxInclusive {
        // Constructor properties interface
    }

    class XsdTypeRestrictionMaxInclusive extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionMaxInclusive

        static ['new'](): XsdTypeRestrictionMaxInclusive;
    }

    module XsdTypeRestrictionTotalDigits {
        // Constructor properties interface
    }

    class XsdTypeRestrictionTotalDigits extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionTotalDigits

        static ['new'](): XsdTypeRestrictionTotalDigits;
    }

    module XsdTypeRestrictionFractionDigits {
        // Constructor properties interface
    }

    class XsdTypeRestrictionFractionDigits extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionFractionDigits

        static ['new'](): XsdTypeRestrictionFractionDigits;
    }

    module XsdTypeRestrictionLength {
        // Constructor properties interface
    }

    class XsdTypeRestrictionLength extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionLength

        static ['new'](): XsdTypeRestrictionLength;
    }

    module XsdTypeRestrictionMinLength {
        // Constructor properties interface
    }

    class XsdTypeRestrictionMinLength extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionMinLength

        static ['new'](): XsdTypeRestrictionMinLength;
    }

    module XsdTypeRestrictionMaxLength {
        // Constructor properties interface
    }

    class XsdTypeRestrictionMaxLength extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionMaxLength

        static ['new'](): XsdTypeRestrictionMaxLength;
    }

    module XsdTypeRestrictionEnumeration {
        // Constructor properties interface
    }

    class XsdTypeRestrictionEnumeration extends XsdTypeRestrictionDef {
        // Own properties of GXml-0.20.XsdTypeRestrictionEnumeration

        value: string;

        // Constructors of GXml-0.20.XsdTypeRestrictionEnumeration

        static ['new'](): XsdTypeRestrictionEnumeration;

        // Owm methods of GXml-0.20.XsdTypeRestrictionEnumeration

        get_value(): string;
        set_value(value: string): void;
    }

    module XsdTypeRestrictionWhiteSpace {
        // Constructor properties interface
    }

    class XsdTypeRestrictionWhiteSpace extends XsdTypeRestrictionDef {
        // Own properties of GXml-0.20.XsdTypeRestrictionWhiteSpace

        fixed: XsdTypeRestrictionWhiteSpaceFixed;
        value: string;

        // Constructors of GXml-0.20.XsdTypeRestrictionWhiteSpace

        static ['new'](): XsdTypeRestrictionWhiteSpace;

        // Owm methods of GXml-0.20.XsdTypeRestrictionWhiteSpace

        get_fixed(): XsdTypeRestrictionWhiteSpaceFixed;
        set_fixed(value: XsdTypeRestrictionWhiteSpaceFixed): void;
        get_value(): string;
        set_value(value: string): void;
    }

    module XsdTypeRestrictionWhiteSpaceFixed {
        // Constructor properties interface
    }

    class XsdTypeRestrictionWhiteSpaceFixed extends Boolean {
        // Constructors of GXml-0.20.XsdTypeRestrictionWhiteSpaceFixed

        static ['new'](): XsdTypeRestrictionWhiteSpaceFixed;
    }

    module XsdTypeRestrictionPattern {
        // Constructor properties interface
    }

    class XsdTypeRestrictionPattern extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionPattern

        static ['new'](): XsdTypeRestrictionPattern;
    }

    module XsdTypeRestrictionAssertion {
        // Constructor properties interface
    }

    class XsdTypeRestrictionAssertion extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionAssertion

        static ['new'](): XsdTypeRestrictionAssertion;
    }

    module XsdTypeRestrictionExplicitTimezone {
        // Constructor properties interface
    }

    class XsdTypeRestrictionExplicitTimezone extends XsdTypeRestrictionDef {
        // Constructors of GXml-0.20.XsdTypeRestrictionExplicitTimezone

        static ['new'](): XsdTypeRestrictionExplicitTimezone;
    }

    module XsdComplexType {
        // Constructor properties interface
    }

    class XsdComplexType extends XsdBaseType {
        // Own properties of GXml-0.20.XsdComplexType

        'abstract': boolean;
        block: string;
        'final': string;
        mixed: boolean;
        name: string;
        default_attributes_apply: boolean;
        defaultAttributesApply: boolean;
        content_type: XsdBaseContent;
        contentType: XsdBaseContent;
        readonly type_attributes: XsdList;
        readonly typeAttributes: XsdList;
        readonly group_attributes: XsdList;
        readonly groupAttributes: XsdList;

        // Constructors of GXml-0.20.XsdComplexType

        static ['new'](): XsdComplexType;

        // Owm methods of GXml-0.20.XsdComplexType

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
        get_content_type(): XsdBaseContent;
        set_content_type(value: XsdBaseContent): void;
        get_type_attributes(): XsdList;
        get_group_attributes(): XsdList;
    }

    module XsdExtension {
        // Constructor properties interface
    }

    class XsdExtension extends Element {
        // Own properties of GXml-0.20.XsdExtension

        base: string;

        // Constructors of GXml-0.20.XsdExtension

        static ['new'](): XsdExtension;

        // Owm methods of GXml-0.20.XsdExtension

        get_base(): string;
        set_base(value: string): void;
    }

    module XsdElement {
        // Constructor properties interface
    }

    class XsdElement extends Element {
        // Own properties of GXml-0.20.XsdElement

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
        anotation: XsdAnnotation;
        simple_type: XsdSimpleType;
        simpleType: XsdSimpleType;
        complex_type: XsdComplexType;
        complexType: XsdComplexType;

        // Constructors of GXml-0.20.XsdElement

        static ['new'](): XsdElement;

        // Owm methods of GXml-0.20.XsdElement

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
        get_anotation(): XsdAnnotation;
        set_anotation(value: XsdAnnotation): void;
        get_simple_type(): XsdSimpleType;
        set_simple_type(value: XsdSimpleType): void;
        get_complex_type(): XsdComplexType;
        set_complex_type(value: XsdComplexType): void;
    }

    module XsdAnnotation {
        // Constructor properties interface
    }

    class XsdAnnotation extends Element {
        // Constructors of GXml-0.20.XsdAnnotation

        static ['new'](): XsdAnnotation;
    }

    module XsdBaseType {
        // Constructor properties interface
    }

    class XsdBaseType extends Element {
        // Own properties of GXml-0.20.XsdBaseType

        anotation: XsdAnnotation;

        // Constructors of GXml-0.20.XsdBaseType

        static ['new'](): XsdBaseType;

        // Owm methods of GXml-0.20.XsdBaseType

        get_anotation(): XsdAnnotation;
        set_anotation(value: XsdAnnotation): void;
    }

    module XsdBaseContent {
        // Constructor properties interface
    }

    class XsdBaseContent extends Element {
        // Own properties of GXml-0.20.XsdBaseContent

        anotation: XsdAnnotation;

        // Constructors of GXml-0.20.XsdBaseContent

        static ['new'](): XsdBaseContent;

        // Owm methods of GXml-0.20.XsdBaseContent

        get_anotation(): XsdAnnotation;
        set_anotation(value: XsdAnnotation): void;
    }

    module XsdSimpleContent {
        // Constructor properties interface
    }

    class XsdSimpleContent extends XsdBaseContent {
        // Constructors of GXml-0.20.XsdSimpleContent

        static ['new'](): XsdSimpleContent;
    }

    module XsdComplexContent {
        // Constructor properties interface
    }

    class XsdComplexContent extends XsdBaseContent {
        // Constructors of GXml-0.20.XsdComplexContent

        static ['new'](): XsdComplexContent;
    }

    module XsdOpenContent {
        // Constructor properties interface
    }

    class XsdOpenContent extends XsdBaseContent {
        // Constructors of GXml-0.20.XsdOpenContent

        static ['new'](): XsdOpenContent;
    }

    module XsdBaseAttribute {
        // Constructor properties interface
    }

    class XsdBaseAttribute extends Element {
        // Own properties of GXml-0.20.XsdBaseAttribute

        anotation: XsdAnnotation;

        // Constructors of GXml-0.20.XsdBaseAttribute

        static ['new'](): XsdBaseAttribute;

        // Owm methods of GXml-0.20.XsdBaseAttribute

        get_anotation(): XsdAnnotation;
        set_anotation(value: XsdAnnotation): void;
    }

    module XsdAttribute {
        // Constructor properties interface
    }

    class XsdAttribute extends XsdBaseAttribute {
        // Constructors of GXml-0.20.XsdAttribute

        static ['new'](): XsdAttribute;
    }

    module XsdAttributeGroup {
        // Constructor properties interface
    }

    class XsdAttributeGroup extends XsdBaseAttribute {
        // Constructors of GXml-0.20.XsdAttributeGroup

        static ['new'](): XsdAttributeGroup;
    }

    module XsdList {
        // Constructor properties interface
    }

    class XsdList extends ArrayList {
        // Own properties of GXml-0.20.XsdList

        readonly length: number;

        // Constructors of GXml-0.20.XsdList

        static ['new'](): XsdList;

        // Owm methods of GXml-0.20.XsdList

        get_length(): number;
        remove(index: number): void;
        index_of(element: DomElement): number;
    }

    module XsdListElements {
        // Constructor properties interface
    }

    class XsdListElements extends XsdList {
        // Constructors of GXml-0.20.XsdListElements

        static ['new'](): XsdListElements;
    }

    module XsdListSimpleTypes {
        // Constructor properties interface
    }

    class XsdListSimpleTypes extends XsdList {
        // Constructors of GXml-0.20.XsdListSimpleTypes

        static ['new'](): XsdListSimpleTypes;
    }

    module XsdListComplexTypes {
        // Constructor properties interface
    }

    class XsdListComplexTypes extends XsdList {
        // Constructors of GXml-0.20.XsdListComplexTypes

        static ['new'](): XsdListComplexTypes;
    }

    module XsdListTypeRestrictionEnumerations {
        // Constructor properties interface
    }

    class XsdListTypeRestrictionEnumerations extends XsdList {
        // Constructors of GXml-0.20.XsdListTypeRestrictionEnumerations

        static ['new'](): XsdListTypeRestrictionEnumerations;
    }

    module XsdListTypeRestrictionWhiteSpaces {
        // Constructor properties interface
    }

    class XsdListTypeRestrictionWhiteSpaces extends XsdList {
        // Constructors of GXml-0.20.XsdListTypeRestrictionWhiteSpaces

        static ['new'](): XsdListTypeRestrictionWhiteSpaces;
    }

    module XText {
        // Constructor properties interface
    }

    class XText extends XCharacterData {
        // Constructors of GXml-0.20.XText

        static ['new'](doc: XDocument, node?: any | null): XText;
    }

    class ArrayListClass {}

    class ArrayListPrivate {}

    class AttrClass {}

    class AttrPrivate {}

    class BaseCollectionClass {}

    class BaseCollectionPrivate {}

    class CssSelectorClass {}

    class CssSelectorPrivate {}

    class CssElementSelectorClass {}

    class CssElementSelectorPrivate {}

    class CssAttributeSelectorClass {}

    class CssAttributeSelectorPrivate {}

    class CssNotSelectorClass {}

    class CssNotSelectorPrivate {}

    class CssSelectorParserClass {}

    class CssSelectorParserPrivate {}

    class DocumentClass {}

    class DocumentPrivate {}

    class ImplementationClass {}

    class ImplementationPrivate {}

    class DocumentTypeClass {}

    class DocumentTypePrivate {}

    class DocumentFragmentClass {}

    class DocumentFragmentPrivate {}

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

    class ElementClass {}

    class ElementPrivate {}

    class ElementAttributesClass {}

    class ElementAttributesPrivate {}

    class EnumerationClass {}

    class EnumerationPrivate {}

    class EventClass {}

    class EventPrivate {}

    class CustomEventClass {}

    class CustomEventPrivate {}

    class HashMapClass {}

    class HashMapPrivate {}

    class HashPairedMapClass {}

    class HashPairedMapPrivate {}

    class HashThreeMapClass {}

    class HashThreeMapPrivate {}

    class HTMLCollectionClass {}

    class HTMLCollectionPrivate {}

    class HtmlDocumentClass {}

    class HtmlDocumentPrivate {}

    class HtmlElementClass {}

    class HtmlElementPrivate {}

    class LXPathObjectClass {}

    class LXPathObjectPrivate {}

    class NodeClass {}

    class NodePrivate {}

    class NodeListClass {}

    class NodeListPrivate {}

    class NodeIteratorClass {}

    class NodeIteratorPrivate {}

    class BasePropertyClass {}

    class BasePropertyPrivate {}

    class StringClass {}

    class StringPrivate {}

    class ArrayStringClass {}

    class ArrayStringPrivate {}

    class XsdArrayStringClass {}

    class XsdArrayStringPrivate {}

    class DoubleClass {}

    class DoublePrivate {}

    class FloatClass {}

    class FloatPrivate {}

    class IntClass {}

    class IntPrivate {}

    class BooleanClass {}

    class BooleanPrivate {}

    class EnumClass {}

    class EnumPrivate {}

    class DateClass {}

    class DatePrivate {}

    class DateTimeClass {}

    class DateTimePrivate {}

    class RangeClass {}

    class RangePrivate {}

    class SettableTokenListClass {}

    class SettableTokenListPrivate {}

    class StringRefClass {}

    class StringRefPrivate {}

    class CharacterDataClass {}

    class CharacterDataPrivate {}

    class TextClass {}

    class TextPrivate {}

    class ProcessingInstructionClass {}

    class ProcessingInstructionPrivate {}

    class CommentClass {}

    class CommentPrivate {}

    class TokenListClass {}

    class TokenListPrivate {}

    class TreeWalkerClass {}

    class TreeWalkerPrivate {}

    class XAttributeClass {}

    class XAttributePrivate {}

    class XCharacterDataClass {}

    class XCharacterDataPrivate {}

    class XChildNodeClass {}

    class XChildNodePrivate {}

    class XNonDocumentChildNodeClass {}

    class XNonDocumentChildNodePrivate {}

    class XCommentClass {}

    class XCommentPrivate {}

    class XDocumentClass {}

    class XDocumentPrivate {}

    class XElementClass {}

    class XElementPrivate {}

    class XHashMapAttrClass {}

    class XHashMapAttrPrivate {}

    class XHashMapAttrEntryClass {}

    class XHashMapAttrEntryPrivate {}

    class XHashMapAttrIteratorClass {}

    class XHashMapAttrIteratorPrivate {}

    class XHtmlDocumentClass {}

    class XHtmlDocumentPrivate {}

    class XListChildrenClass {}

    class XListChildrenPrivate {}

    class XListChildrenIteratorClass {}

    class XListChildrenIteratorPrivate {}

    class XNodeClass {}

    class XNodePrivate {}

    class XParserClass {}

    class XParserPrivate {}

    class XProcessingInstructionClass {}

    class XProcessingInstructionPrivate {}

    class XsdSchemaClass {}

    class XsdSchemaPrivate {}

    class XsdSimpleTypeClass {}

    class XsdSimpleTypePrivate {}

    class XsdTypeDefinitionClass {}

    class XsdTypeDefinitionPrivate {}

    class XsdTypeListClass {}

    class XsdTypeListPrivate {}

    class XsdTypeUnionClass {}

    class XsdTypeUnionPrivate {}

    class XsdTypeRestrictionClass {}

    class XsdTypeRestrictionPrivate {}

    class XsdTypeRestrictionDefClass {}

    class XsdTypeRestrictionDefPrivate {}

    class XsdTypeRestrictionMinExclusiveClass {}

    class XsdTypeRestrictionMinExclusivePrivate {}

    class XsdTypeRestrictionMinInclusiveClass {}

    class XsdTypeRestrictionMinInclusivePrivate {}

    class XsdTypeRestrictionMaxExclusiveClass {}

    class XsdTypeRestrictionMaxExclusivePrivate {}

    class XsdTypeRestrictionMaxInclusiveClass {}

    class XsdTypeRestrictionMaxInclusivePrivate {}

    class XsdTypeRestrictionTotalDigitsClass {}

    class XsdTypeRestrictionTotalDigitsPrivate {}

    class XsdTypeRestrictionFractionDigitsClass {}

    class XsdTypeRestrictionFractionDigitsPrivate {}

    class XsdTypeRestrictionLengthClass {}

    class XsdTypeRestrictionLengthPrivate {}

    class XsdTypeRestrictionMinLengthClass {}

    class XsdTypeRestrictionMinLengthPrivate {}

    class XsdTypeRestrictionMaxLengthClass {}

    class XsdTypeRestrictionMaxLengthPrivate {}

    class XsdTypeRestrictionEnumerationClass {}

    class XsdTypeRestrictionEnumerationPrivate {}

    class XsdTypeRestrictionWhiteSpaceClass {}

    class XsdTypeRestrictionWhiteSpacePrivate {}

    class XsdTypeRestrictionWhiteSpaceFixedClass {}

    class XsdTypeRestrictionWhiteSpaceFixedPrivate {}

    class XsdTypeRestrictionPatternClass {}

    class XsdTypeRestrictionPatternPrivate {}

    class XsdTypeRestrictionAssertionClass {}

    class XsdTypeRestrictionAssertionPrivate {}

    class XsdTypeRestrictionExplicitTimezoneClass {}

    class XsdTypeRestrictionExplicitTimezonePrivate {}

    class XsdComplexTypeClass {}

    class XsdComplexTypePrivate {}

    class XsdExtensionClass {}

    class XsdExtensionPrivate {}

    class XsdElementClass {}

    class XsdElementPrivate {}

    class XsdAnnotationClass {}

    class XsdAnnotationPrivate {}

    class XsdBaseTypeClass {}

    class XsdBaseTypePrivate {}

    class XsdBaseContentClass {}

    class XsdBaseContentPrivate {}

    class XsdSimpleContentClass {}

    class XsdSimpleContentPrivate {}

    class XsdComplexContentClass {}

    class XsdComplexContentPrivate {}

    class XsdOpenContentClass {}

    class XsdOpenContentPrivate {}

    class XsdBaseAttributeClass {}

    class XsdBaseAttributePrivate {}

    class XsdAttributeClass {}

    class XsdAttributePrivate {}

    class XsdAttributeGroupClass {}

    class XsdAttributeGroupPrivate {}

    class XsdListClass {}

    class XsdListPrivate {}

    class XsdListElementsClass {}

    class XsdListElementsPrivate {}

    class XsdListSimpleTypesClass {}

    class XsdListSimpleTypesPrivate {}

    class XsdListComplexTypesClass {}

    class XsdListComplexTypesPrivate {}

    class XsdListTypeRestrictionEnumerationsClass {}

    class XsdListTypeRestrictionEnumerationsPrivate {}

    class XsdListTypeRestrictionWhiteSpacesClass {}

    class XsdListTypeRestrictionWhiteSpacesPrivate {}

    class XTextClass {}

    class XTextPrivate {}

    class CollectionIface {}

    class ListIface {}

    class MappeableElementIface {}

    class MapIface {}

    class MappeableElementPairKeyIface {}

    class PairedMapIface {}

    class MappeableElementThreeKeyIface {}

    class ThreeMapIface {}

    class CollectionParentIface {}

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

    class DomHtmlDocumentIface {}

    class DomElementIface {}

    class DomEventTargetIface {}

    class DomEventListenerIface {}

    class DomEventIface {}

    class DomCustomEventIface {}

    class DomMutationObserverIface {}

    class DomMutationRecordIface {}

    class DomNodeIface {}

    class DomRangeIface {}

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

    class ObjectIface {}

    class ParserIface {}

    class PropertyIface {}

    class XPathContextIface {}

    class XPathObjectIface {}

    interface Collection {
        // Own properties of GXml-0.20.Collection

        readonly nodes_index: GLib.Queue;
        readonly nodesIndex: GLib.Queue;
        element: DomElement;
        readonly items_name: string;
        readonly itemsName: string;
        items_type: GObject.GType;
        itemsType: GObject.GType;

        // Owm methods of GXml-0.20.Collection

        get_nodes_index(): GLib.Queue;
        get_element(): DomElement;
        set_element(value: DomElement): void;
        get_items_name(): string;
        get_items_type(): GObject.GType;
        set_items_type(value: GObject.GType): void;
        search(): void;
        get_item(index: number): DomElement | null;
        append(node: DomElement): void;
        get_length(): number;
        initialize(t: GObject.GType): void;
        create_item(): DomElement | null;
        validate_append(index: number, element: DomElement): boolean;
        clear(): void;

        // Own virtual methods of GXml-0.20.Collection

        vfunc_get_nodes_index(): GLib.Queue;
        vfunc_get_element(): DomElement;
        vfunc_set_element(value: DomElement): void;
        vfunc_get_items_name(): string;
        vfunc_get_items_type(): GObject.GType;
        vfunc_set_items_type(value: GObject.GType): void;
        vfunc_search(): void;
        vfunc_get_item(index: number): DomElement | null;
        vfunc_append(node: DomElement): void;
        vfunc_get_length(): number;
        vfunc_initialize(t: GObject.GType): void;
        vfunc_create_item(): DomElement | null;
        vfunc_validate_append(index: number, element: DomElement): boolean;
        vfunc_clear(): void;
    }

    interface List {}

    interface MappeableElement {
        // Owm methods of GXml-0.20.MappeableElement

        get_map_key(): string;

        // Own virtual methods of GXml-0.20.MappeableElement

        vfunc_get_map_key(): string;
    }

    interface Map {
        // Own properties of GXml-0.20.Map

        attribute_key: string;
        attributeKey: string;
        readonly keys_set: Gee.Set;
        readonly keysSet: Gee.Set;

        // Owm methods of GXml-0.20.Map

        get_attribute_key(): string;
        set_attribute_key(value: string): void;
        item(key: string): DomElement | null;
        has_key(key: string): boolean;
        get_keys_set(): Gee.Set;

        // Own virtual methods of GXml-0.20.Map

        vfunc_get_attribute_key(): string;
        vfunc_set_attribute_key(value: string): void;
        vfunc_item(key: string): DomElement | null;
        vfunc_has_key(key: string): boolean;
        vfunc_get_keys_set(): Gee.Set;
    }

    interface MappeableElementPairKey {
        // Owm methods of GXml-0.20.MappeableElementPairKey

        get_map_primary_key(): string;
        get_map_secondary_key(): string;

        // Own virtual methods of GXml-0.20.MappeableElementPairKey

        vfunc_get_map_primary_key(): string;
        vfunc_get_map_secondary_key(): string;
    }

    interface PairedMap {
        // Own properties of GXml-0.20.PairedMap

        attribute_primary_key: string;
        attributePrimaryKey: string;
        attribute_secondary_key: string;
        attributeSecondaryKey: string;
        readonly primary_keys_set: Gee.Set;
        readonly primaryKeysSet: Gee.Set;

        // Owm methods of GXml-0.20.PairedMap

        get_attribute_primary_key(): string;
        set_attribute_primary_key(value: string): void;
        get_attribute_secondary_key(): string;
        set_attribute_secondary_key(value: string): void;
        get_primary_keys_set(): Gee.Set;
        item(primary_key: string, secondary_key: string): DomElement | null;
        has_primary_key(key: string): boolean;
        has_secondary_key(pkey: string, key: string): boolean;
        secondary_keys_set(pkey: string): Gee.Set;

        // Own virtual methods of GXml-0.20.PairedMap

        vfunc_get_attribute_primary_key(): string;
        vfunc_set_attribute_primary_key(value: string): void;
        vfunc_get_attribute_secondary_key(): string;
        vfunc_set_attribute_secondary_key(value: string): void;
        vfunc_get_primary_keys_set(): Gee.Set;
        vfunc_item(primary_key: string, secondary_key: string): DomElement | null;
        vfunc_has_primary_key(key: string): boolean;
        vfunc_has_secondary_key(pkey: string, key: string): boolean;
        vfunc_secondary_keys_set(pkey: string): Gee.Set;
    }

    interface MappeableElementThreeKey {
        // Owm methods of GXml-0.20.MappeableElementThreeKey

        get_map_pkey(): string;
        get_map_skey(): string;
        get_map_tkey(): string;

        // Own virtual methods of GXml-0.20.MappeableElementThreeKey

        vfunc_get_map_pkey(): string;
        vfunc_get_map_skey(): string;
        vfunc_get_map_tkey(): string;
    }

    interface ThreeMap {
        // Own properties of GXml-0.20.ThreeMap

        attribute_primary_key: string;
        attributePrimaryKey: string;
        attribute_secondary_key: string;
        attributeSecondaryKey: string;
        attribute_third_key: string;
        attributeThirdKey: string;
        readonly primary_keys_set: Gee.Set;
        readonly primaryKeysSet: Gee.Set;

        // Owm methods of GXml-0.20.ThreeMap

        get_attribute_primary_key(): string;
        set_attribute_primary_key(value: string): void;
        get_attribute_secondary_key(): string;
        set_attribute_secondary_key(value: string): void;
        get_attribute_third_key(): string;
        set_attribute_third_key(value: string): void;
        get_primary_keys_set(): Gee.Set;
        item(primary_key: string, secondary_key: string, third_key: string): DomElement | null;
        has_primary_key(key: string): boolean;
        has_secondary_key(pkey: string, key: string): boolean;
        has_third_key(pkey: string, skey: string, key: string): boolean;
        secondary_keys_set(pkey: string): Gee.Set;
        third_keys_set(pkey: string, skey: string): Gee.Set;

        // Own virtual methods of GXml-0.20.ThreeMap

        vfunc_get_attribute_primary_key(): string;
        vfunc_set_attribute_primary_key(value: string): void;
        vfunc_get_attribute_secondary_key(): string;
        vfunc_set_attribute_secondary_key(value: string): void;
        vfunc_get_attribute_third_key(): string;
        vfunc_set_attribute_third_key(value: string): void;
        vfunc_get_primary_keys_set(): Gee.Set;
        vfunc_item(primary_key: string, secondary_key: string, third_key: string): DomElement | null;
        vfunc_has_primary_key(key: string): boolean;
        vfunc_has_secondary_key(pkey: string, key: string): boolean;
        vfunc_has_third_key(pkey: string, skey: string, key: string): boolean;
        vfunc_secondary_keys_set(pkey: string): Gee.Set;
        vfunc_third_keys_set(pkey: string, skey: string): Gee.Set;
    }

    interface CollectionParent {
        // Owm methods of GXml-0.20.CollectionParent

        get_types(): GLib.HashTable<string, GObject.GType>;

        // Own virtual methods of GXml-0.20.CollectionParent

        vfunc_get_types(): GLib.HashTable<string, GObject.GType>;
    }

    interface DomAttr {
        // Own properties of GXml-0.20.DomAttr

        readonly namespace_uri: string;
        readonly namespaceUri: string;
        readonly prefix: string;
        readonly local_name: string;
        readonly localName: string;
        readonly name: string;
        value: string;

        // Owm methods of GXml-0.20.DomAttr

        get_namespace_uri(): string | null;
        get_prefix(): string | null;
        get_local_name(): string;
        get_name(): string;
        get_value(): string;
        set_value(value: string): void;
        get_specified(): boolean;

        // Own virtual methods of GXml-0.20.DomAttr

        vfunc_get_namespace_uri(): string | null;
        vfunc_get_prefix(): string | null;
        vfunc_get_local_name(): string;
        vfunc_get_name(): string;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
        vfunc_get_specified(): boolean;
    }

    interface DomCharacterData {
        // Own properties of GXml-0.20.DomCharacterData

        data: string;

        // Owm methods of GXml-0.20.DomCharacterData

        get_data(): string;
        set_data(value: string): void;
        get_length(): number;
        substring_data(offset: number, count: number): string;
        append_data(data: string): void;
        insert_data(offset: number, data: string): void;
        delete_data(offset: number, count: number): void;
        replace_data(offset: number, count: number, data: string): void;

        // Own virtual methods of GXml-0.20.DomCharacterData

        vfunc_get_data(): string;
        vfunc_set_data(value: string): void;
        vfunc_get_length(): number;
        vfunc_substring_data(offset: number, count: number): string;
        vfunc_append_data(data: string): void;
        vfunc_insert_data(offset: number, data: string): void;
        vfunc_delete_data(offset: number, count: number): void;
        vfunc_replace_data(offset: number, count: number, data: string): void;
    }

    interface DomText {
        // Owm methods of GXml-0.20.DomText

        split_text(offset: number): DomText;
        get_whole_text(): string;

        // Own virtual methods of GXml-0.20.DomText

        vfunc_split_text(offset: number): DomText;
        vfunc_get_whole_text(): string;
    }

    interface DomProcessingInstruction {
        // Own properties of GXml-0.20.DomProcessingInstruction

        readonly target: string;

        // Owm methods of GXml-0.20.DomProcessingInstruction

        get_target(): string;

        // Own virtual methods of GXml-0.20.DomProcessingInstruction

        vfunc_get_target(): string;
    }

    interface DomComment {}

    interface DomNonElementParentNode {
        // Owm methods of GXml-0.20.DomNonElementParentNode

        get_element_by_id(element_id: string): DomElement | null;

        // Own virtual methods of GXml-0.20.DomNonElementParentNode

        vfunc_get_element_by_id(element_id: string): DomElement | null;
    }

    interface DomParentNode {
        // Own properties of GXml-0.20.DomParentNode

        readonly children: DomHTMLCollection;
        readonly first_element_child: DomElement;
        readonly firstElementChild: DomElement;
        readonly last_element_child: DomElement;
        readonly lastElementChild: DomElement;
        readonly child_element_count: number;
        readonly childElementCount: number;

        // Owm methods of GXml-0.20.DomParentNode

        get_children(): DomHTMLCollection;
        get_first_element_child(): DomElement | null;
        get_last_element_child(): DomElement | null;
        get_child_element_count(): number;
        query_selector(selectors: string): DomElement | null;
        query_selector_all(selectors: string): DomNodeList;
        get_elements_by_property_value(property: string, value: string): DomElementList;

        // Own virtual methods of GXml-0.20.DomParentNode

        vfunc_get_children(): DomHTMLCollection;
        vfunc_get_first_element_child(): DomElement | null;
        vfunc_get_last_element_child(): DomElement | null;
        vfunc_get_child_element_count(): number;
        vfunc_query_selector(selectors: string): DomElement | null;
        vfunc_query_selector_all(selectors: string): DomNodeList;
        vfunc_get_elements_by_property_value(property: string, value: string): DomElementList;
    }

    interface DomNonDocumentTypeChildNode {
        // Own properties of GXml-0.20.DomNonDocumentTypeChildNode

        readonly previous_element_sibling: DomElement;
        readonly previousElementSibling: DomElement;
        readonly next_element_sibling: DomElement;
        readonly nextElementSibling: DomElement;

        // Owm methods of GXml-0.20.DomNonDocumentTypeChildNode

        get_previous_element_sibling(): DomElement | null;
        get_next_element_sibling(): DomElement | null;

        // Own virtual methods of GXml-0.20.DomNonDocumentTypeChildNode

        vfunc_get_previous_element_sibling(): DomElement | null;
        vfunc_get_next_element_sibling(): DomElement | null;
    }

    interface DomChildNode {
        // Owm methods of GXml-0.20.DomChildNode

        remove(): void;

        // Own virtual methods of GXml-0.20.DomChildNode

        vfunc_remove(): void;
    }

    interface DomNodeList {
        // Own properties of GXml-0.20.DomNodeList

        readonly length: number;

        // Owm methods of GXml-0.20.DomNodeList

        item(index: number): DomNode | null;
        get_length(): number;

        // Own virtual methods of GXml-0.20.DomNodeList

        vfunc_item(index: number): DomNode | null;
        vfunc_get_length(): number;
    }

    interface DomHTMLCollection {
        // Owm methods of GXml-0.20.DomHTMLCollection

        get_element(index: number): DomElement | null;
        to_array(): DomElement[];
        get_length(): number;
        item(index: number): DomElement | null;
        named_item(name: string): DomElement | null;

        // Own virtual methods of GXml-0.20.DomHTMLCollection

        vfunc_get_element(index: number): DomElement | null;
        vfunc_to_array(): DomElement[];
        vfunc_get_length(): number;
        vfunc_item(index: number): DomElement | null;
        vfunc_named_item(name: string): DomElement | null;
    }

    interface DomNodeIterator {
        // Own properties of GXml-0.20.DomNodeIterator

        readonly root: DomNode;
        readonly reference_node: DomNode;
        readonly referenceNode: DomNode;
        readonly pointer_before_reference_node: boolean;
        readonly pointerBeforeReferenceNode: boolean;
        readonly what_to_show: number;
        readonly whatToShow: number;

        // Owm methods of GXml-0.20.DomNodeIterator

        get_root(): DomNode;
        get_reference_node(): DomNode;
        get_pointer_before_reference_node(): boolean;
        get_what_to_show(): number;
        next_node(): DomNode | null;
        previous_node(): DomNode | null;
        detach(): void;

        // Own virtual methods of GXml-0.20.DomNodeIterator

        vfunc_get_root(): DomNode;
        vfunc_get_reference_node(): DomNode;
        vfunc_get_pointer_before_reference_node(): boolean;
        vfunc_get_what_to_show(): number;
        vfunc_next_node(): DomNode | null;
        vfunc_previous_node(): DomNode | null;
        vfunc_detach(): void;
    }

    interface DomTreeWalker {
        // Own properties of GXml-0.20.DomTreeWalker

        readonly root: DomNode;
        readonly what_to_show: number;
        readonly whatToShow: number;
        readonly current_node: DomNode;
        readonly currentNode: DomNode;

        // Owm methods of GXml-0.20.DomTreeWalker

        get_root(): DomNode;
        get_what_to_show(): number;
        get_current_node(): DomNode;
        parent_node(): DomNode | null;
        first_child(): DomNode | null;
        last_child(): DomNode | null;
        previous_sibling(): DomNode | null;
        next_sibling(): DomNode | null;
        previous_node(): DomNode | null;
        next_node(): DomNode | null;

        // Own virtual methods of GXml-0.20.DomTreeWalker

        vfunc_get_root(): DomNode;
        vfunc_get_what_to_show(): number;
        vfunc_get_current_node(): DomNode;
        vfunc_parent_node(): DomNode | null;
        vfunc_first_child(): DomNode | null;
        vfunc_last_child(): DomNode | null;
        vfunc_previous_sibling(): DomNode | null;
        vfunc_next_sibling(): DomNode | null;
        vfunc_previous_node(): DomNode | null;
        vfunc_next_node(): DomNode | null;
    }

    interface DomNamedNodeMap {
        // Own properties of GXml-0.20.DomNamedNodeMap

        readonly length: number;

        // Owm methods of GXml-0.20.DomNamedNodeMap

        get_length(): number;
        item(index: number): DomNode | null;
        get_named_item(name: string): DomNode | null;
        set_named_item(node: DomNode): DomNode | null;
        remove_named_item(name: string): DomNode | null;
        remove_named_item_ns(namespace_uri: string, localName: string): DomNode | null;
        get_named_item_ns(namespace_uri: string, local_name: string): DomNode | null;
        set_named_item_ns(node: DomNode): DomNode | null;

        // Own virtual methods of GXml-0.20.DomNamedNodeMap

        vfunc_get_length(): number;
        vfunc_item(index: number): DomNode | null;
        vfunc_get_named_item(name: string): DomNode | null;
        vfunc_set_named_item(node: DomNode): DomNode | null;
        vfunc_remove_named_item(name: string): DomNode | null;
        vfunc_remove_named_item_ns(namespace_uri: string, localName: string): DomNode | null;
        vfunc_get_named_item_ns(namespace_uri: string, local_name: string): DomNode | null;
        vfunc_set_named_item_ns(node: DomNode): DomNode | null;
    }

    interface DomTokenList {
        // Own properties of GXml-0.20.DomTokenList

        readonly length: number;

        // Owm methods of GXml-0.20.DomTokenList

        get_length(): number;
        item(index: number): string | null;
        contains(token: string): boolean;
        add(tokens: string[]): void;
        remove(tokens: string[]): void;
        toggle(token: string, force: boolean, _auto_: boolean): boolean;
        to_string(): string;

        // Own virtual methods of GXml-0.20.DomTokenList

        vfunc_get_length(): number;
        vfunc_item(index: number): string | null;
        vfunc_contains(token: string): boolean;
        vfunc_add(tokens: string[]): void;
        vfunc_remove(tokens: string[]): void;
        vfunc_toggle(token: string, force: boolean, _auto_: boolean): boolean;
        vfunc_to_string(): string;
    }

    interface DomSettableTokenList {
        // Own properties of GXml-0.20.DomSettableTokenList

        value: string;

        // Owm methods of GXml-0.20.DomSettableTokenList

        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.20.DomSettableTokenList

        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
    }

    interface DomDocument {
        // Own properties of GXml-0.20.DomDocument

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

        // Owm methods of GXml-0.20.DomDocument

        get_implementation(): DomImplementation;
        get_url(): string;
        get_document_uri(): string;
        get_origin(): string;
        get_compat_mode(): string;
        get_character_set(): string;
        get_content_type(): string;
        get_doctype(): DomDocumentType | null;
        get_document_element(): DomElement | null;
        get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection;
        get_elements_by_class_name(classNames: string): DomHTMLCollection;
        create_element(local_name: string): DomElement;
        create_element_ns(namespace: string | null, qualified_name: string): DomElement;
        create_document_fragment(): DomDocumentFragment;
        create_text_node(data: string): DomText;
        create_comment(data: string): DomComment;
        create_processing_instruction(target: string, data: string): DomProcessingInstruction;
        import_node(node: DomNode, deep: boolean): DomNode;
        adopt_node(node: DomNode): DomNode;
        create_event(_interface: string): DomEvent;
        create_range(): DomRange;
        create_node_iterator(root: DomNode, whatToShow: number): DomNodeIterator;
        create_tree_walker(root: DomNode, what_to_show: number): DomTreeWalker;
        write_file(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        write_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_file_finish(_res_: Gio.AsyncResult): void;
        write_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): void;
        write_stream_async(
            stream: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_stream_finish(_res_: Gio.AsyncResult): void;
        create_stream(): Gio.InputStream;
        create_stream_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;
        write_string(cancellable?: Gio.Cancellable | null): string;
        write_string_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_string_finish(_res_: Gio.AsyncResult): string;
        read_from_file(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        read_from_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_file_finish(_res_: Gio.AsyncResult): void;
        read_from_string(str: string, cancellable?: Gio.Cancellable | null): void;
        read_from_string_async(
            str: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_string_finish(_res_: Gio.AsyncResult): void;
        read_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): void;
        read_from_stream_async(
            stream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_stream_finish(_res_: Gio.AsyncResult): void;
        get_xml_parser(): Parser;
        set_xml_parser(parser: Parser): void;

        // Own virtual methods of GXml-0.20.DomDocument

        vfunc_get_implementation(): DomImplementation;
        vfunc_get_url(): string;
        vfunc_get_document_uri(): string;
        vfunc_get_origin(): string;
        vfunc_get_compat_mode(): string;
        vfunc_get_character_set(): string;
        vfunc_get_content_type(): string;
        vfunc_get_doctype(): DomDocumentType | null;
        vfunc_get_document_element(): DomElement | null;
        vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_class_name(classNames: string): DomHTMLCollection;
        vfunc_create_element(local_name: string): DomElement;
        vfunc_create_element_ns(namespace: string | null, qualified_name: string): DomElement;
        vfunc_create_document_fragment(): DomDocumentFragment;
        vfunc_create_text_node(data: string): DomText;
        vfunc_create_comment(data: string): DomComment;
        vfunc_create_processing_instruction(target: string, data: string): DomProcessingInstruction;
        vfunc_import_node(node: DomNode, deep: boolean): DomNode;
        vfunc_adopt_node(node: DomNode): DomNode;
        vfunc_create_event(_interface: string): DomEvent;
        vfunc_create_range(): DomRange;
        vfunc_create_node_iterator(root: DomNode, whatToShow: number): DomNodeIterator;
        vfunc_create_tree_walker(root: DomNode, what_to_show: number): DomTreeWalker;
        vfunc_write_file(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        vfunc_write_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_write_file_finish(_res_: Gio.AsyncResult): void;
        vfunc_write_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): void;
        vfunc_write_stream_async(
            stream: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_write_stream_finish(_res_: Gio.AsyncResult): void;
        vfunc_create_stream(): Gio.InputStream;
        vfunc_create_stream_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;
        vfunc_write_string(cancellable?: Gio.Cancellable | null): string;
        vfunc_write_string_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_write_string_finish(_res_: Gio.AsyncResult): string;
        vfunc_read_from_file(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        vfunc_read_from_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_file_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_from_string(str: string, cancellable?: Gio.Cancellable | null): void;
        vfunc_read_from_string_async(
            str: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_string_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): void;
        vfunc_read_from_stream_async(
            stream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_stream_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_xml_parser(): Parser;
        vfunc_set_xml_parser(parser: Parser): void;
    }

    interface DomXMLDocument {}

    interface DomImplementation {
        // Owm methods of GXml-0.20.DomImplementation

        create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType;
        create_document(
            nspace?: string | null,
            qualified_name?: string | null,
            doctype?: DomDocumentType | null,
        ): DomXMLDocument;
        create_html_document(title: string): DomDocument;
        has_feature(): boolean;

        // Own virtual methods of GXml-0.20.DomImplementation

        vfunc_create_document_type(qualified_name: string, public_id: string, system_id: string): DomDocumentType;
        vfunc_create_document(
            nspace?: string | null,
            qualified_name?: string | null,
            doctype?: DomDocumentType | null,
        ): DomXMLDocument;
        vfunc_create_html_document(title: string): DomDocument;
        vfunc_has_feature(): boolean;
    }

    interface DomDocumentFragment {}

    interface DomDocumentType {
        // Own properties of GXml-0.20.DomDocumentType

        readonly name: string;
        readonly public_id: string;
        readonly publicId: string;
        readonly system_id: string;
        readonly systemId: string;

        // Owm methods of GXml-0.20.DomDocumentType

        get_name(): string;
        get_public_id(): string;
        get_system_id(): string;

        // Own virtual methods of GXml-0.20.DomDocumentType

        vfunc_get_name(): string;
        vfunc_get_public_id(): string;
        vfunc_get_system_id(): string;
    }

    interface DomHtmlDocument {
        // Owm methods of GXml-0.20.DomHtmlDocument

        read_from_string(str: string): void;
        read_from_string_tolerant(str: string): void;
        to_html(): string;

        // Own virtual methods of GXml-0.20.DomHtmlDocument

        vfunc_read_from_string(str: string): void;
        vfunc_read_from_string_tolerant(str: string): void;
        vfunc_to_html(): string;
    }

    interface DomElement {
        // Own properties of GXml-0.20.DomElement

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

        // Owm methods of GXml-0.20.DomElement

        get_namespace_uri(): string | null;
        get_prefix(): string | null;
        get_local_name(): string;
        get_tag_name(): string;
        get_id(): string | null;
        set_id(value?: string | null): void;
        get_class_name(): string | null;
        set_class_name(value?: string | null): void;
        get_class_list(): DomTokenList;
        get_attributes(): DomNamedNodeMap;
        get_attribute(name: string): string | null;
        get_attribute_ns(namespace: string | null, local_name: string): string | null;
        set_attribute(name: string, value: string): void;
        set_attribute_ns(namespace: string | null, name: string, value: string): void;
        remove_attribute(name: string): void;
        remove_attribute_ns(namespace: string | null, local_name: string): void;
        has_attribute(name: string): boolean;
        has_attribute_ns(namespace: string | null, local_name: string): boolean;
        get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection;
        get_elements_by_class_name(class_names: string): DomHTMLCollection;
        matches(selectors: string): boolean;
        read_from_uri(uri: string): void;
        read_from_uri_async(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_uri_finish(_res_: Gio.AsyncResult): void;
        read_from_file(f: Gio.File, cancellable?: Gio.Cancellable | null): void;
        read_from_file_async(
            f: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_file_finish(_res_: Gio.AsyncResult): void;
        read_from_stream(istream: Gio.InputStream, cancellable?: Gio.Cancellable | null): void;
        read_from_stream_async(
            istream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_stream_finish(_res_: Gio.AsyncResult): void;
        read_from_string(str: string, cancellable?: Gio.Cancellable | null): void;
        read_from_string_async(
            str: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_from_string_finish(_res_: Gio.AsyncResult): void;
        write_string(cancellable?: Gio.Cancellable | null): string;
        write_string_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_string_finish(_res_: Gio.AsyncResult): string;
        write_file(f: Gio.File, cancellable?: Gio.Cancellable | null): void;
        write_file_async(
            f: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_file_finish(_res_: Gio.AsyncResult): void;
        write_stream(stream: Gio.OutputStream): void;
        write_stream_async(
            stream: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        write_stream_finish(_res_: Gio.AsyncResult): void;
        create_stream(): Gio.InputStream;
        create_stream_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;

        // Own virtual methods of GXml-0.20.DomElement

        vfunc_get_namespace_uri(): string | null;
        vfunc_get_prefix(): string | null;
        vfunc_get_local_name(): string;
        vfunc_get_tag_name(): string;
        vfunc_get_id(): string | null;
        vfunc_set_id(value?: string | null): void;
        vfunc_get_class_name(): string | null;
        vfunc_set_class_name(value?: string | null): void;
        vfunc_get_class_list(): DomTokenList;
        vfunc_get_attributes(): DomNamedNodeMap;
        vfunc_get_attribute(name: string): string | null;
        vfunc_get_attribute_ns(namespace: string | null, local_name: string): string | null;
        vfunc_set_attribute(name: string, value: string): void;
        vfunc_set_attribute_ns(namespace: string | null, name: string, value: string): void;
        vfunc_remove_attribute(name: string): void;
        vfunc_remove_attribute_ns(namespace: string | null, local_name: string): void;
        vfunc_has_attribute(name: string): boolean;
        vfunc_has_attribute_ns(namespace: string | null, local_name: string): boolean;
        vfunc_get_elements_by_tag_name(local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_tag_name_ns(namespace: string | null, local_name: string): DomHTMLCollection;
        vfunc_get_elements_by_class_name(class_names: string): DomHTMLCollection;
        vfunc_matches(selectors: string): boolean;
        vfunc_read_from_uri(uri: string): void;
        vfunc_read_from_uri_async(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_uri_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_from_file(f: Gio.File, cancellable?: Gio.Cancellable | null): void;
        vfunc_read_from_file_async(
            f: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_file_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_from_stream(istream: Gio.InputStream, cancellable?: Gio.Cancellable | null): void;
        vfunc_read_from_stream_async(
            istream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_stream_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_from_string(str: string, cancellable?: Gio.Cancellable | null): void;
        vfunc_read_from_string_async(
            str: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_read_from_string_finish(_res_: Gio.AsyncResult): void;
        vfunc_write_string(cancellable?: Gio.Cancellable | null): string;
        vfunc_write_string_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_write_string_finish(_res_: Gio.AsyncResult): string;
        vfunc_write_file(f: Gio.File, cancellable?: Gio.Cancellable | null): void;
        vfunc_write_file_async(
            f: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_write_file_finish(_res_: Gio.AsyncResult): void;
        vfunc_write_stream(stream: Gio.OutputStream): void;
        vfunc_write_stream_async(
            stream: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_write_stream_finish(_res_: Gio.AsyncResult): void;
        vfunc_create_stream(): Gio.InputStream;
        vfunc_create_stream_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;
    }

    interface DomEventTarget {
        // Owm methods of GXml-0.20.DomEventTarget

        add_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void;
        remove_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void;
        dispatch_event(event: DomEvent): boolean;

        // Own virtual methods of GXml-0.20.DomEventTarget

        vfunc_add_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void;
        vfunc_remove_event_listener(type: string, callback: DomEventListener | null, capture: boolean): void;
        vfunc_dispatch_event(event: DomEvent): boolean;
    }

    interface DomEventListener {
        // Owm methods of GXml-0.20.DomEventListener

        handle_event(event: DomEvent): void;

        // Own virtual methods of GXml-0.20.DomEventListener

        vfunc_handle_event(event: DomEvent): void;
    }

    interface DomEvent {
        // Own properties of GXml-0.20.DomEvent

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

        // Owm methods of GXml-0.20.DomEvent

        get_etype(): string;
        get_event_target(): DomEventTarget | null;
        get_current_target(): DomEventTarget | null;
        get_bubbles(): boolean;
        get_cancelable(): boolean;
        get_is_trusted(): boolean;
        get_time_stamp(): DomTimeStamp;
        get_default_prevented(): boolean;
        get_event_phase(): DomEventPhase;
        stop_propagation(): void;
        stop_immediate_propagation(): void;
        prevent_default(): void;
        init_event(type: string, bubbles: boolean, cancelable: boolean): void;

        // Own virtual methods of GXml-0.20.DomEvent

        vfunc_get_etype(): string;
        vfunc_get_event_target(): DomEventTarget | null;
        vfunc_get_current_target(): DomEventTarget | null;
        vfunc_get_bubbles(): boolean;
        vfunc_get_cancelable(): boolean;
        vfunc_get_is_trusted(): boolean;
        vfunc_get_time_stamp(): DomTimeStamp;
        vfunc_get_default_prevented(): boolean;
        vfunc_get_event_phase(): DomEventPhase;
        vfunc_stop_propagation(): void;
        vfunc_stop_immediate_propagation(): void;
        vfunc_prevent_default(): void;
        vfunc_init_event(type: string, bubbles: boolean, cancelable: boolean): void;
    }

    interface DomCustomEvent {
        // Own properties of GXml-0.20.DomCustomEvent

        readonly detail: GObject.Value;

        // Owm methods of GXml-0.20.DomCustomEvent

        get_detail(): void;
        init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: GObject.Value): void;

        // Own virtual methods of GXml-0.20.DomCustomEvent

        vfunc_get_detail(): void;
        vfunc_init_custom_event(type: string, bubbles: boolean, cancelable: boolean, detail: GObject.Value): void;
    }

    interface DomMutationObserver {
        // Owm methods of GXml-0.20.DomMutationObserver

        observe(target: Node, options: DomMutationObserverInit): void;
        disconnect(): void;
        take_records(): Gee.List;

        // Own virtual methods of GXml-0.20.DomMutationObserver

        vfunc_observe(target: Node, options: DomMutationObserverInit): void;
        vfunc_disconnect(): void;
        vfunc_take_records(): Gee.List;
    }

    interface DomMutationRecord {
        // Own properties of GXml-0.20.DomMutationRecord

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

        // Owm methods of GXml-0.20.DomMutationRecord

        get_mtype(): string;
        get_target(): DomNode;
        get_added_nodes(): DomNodeList;
        set_added_nodes(value: DomNodeList): void;
        get_removed_nodes(): DomNodeList;
        set_removed_nodes(value: DomNodeList): void;
        get_previous_sibling(): DomNode | null;
        get_next_sibling(): DomNode | null;
        get_attribute_name(): string | null;
        get_attribute_namespace(): string | null;
        get_old_value(): string | null;

        // Own virtual methods of GXml-0.20.DomMutationRecord

        vfunc_get_mtype(): string;
        vfunc_get_target(): DomNode;
        vfunc_get_added_nodes(): DomNodeList;
        vfunc_set_added_nodes(value: DomNodeList): void;
        vfunc_get_removed_nodes(): DomNodeList;
        vfunc_set_removed_nodes(value: DomNodeList): void;
        vfunc_get_previous_sibling(): DomNode | null;
        vfunc_get_next_sibling(): DomNode | null;
        vfunc_get_attribute_name(): string | null;
        vfunc_get_attribute_namespace(): string | null;
        vfunc_get_old_value(): string | null;
    }

    interface DomNode {
        // Own properties of GXml-0.20.DomNode

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

        // Owm methods of GXml-0.20.DomNode

        get_node_type(): DomNodeNodeType;
        get_node_name(): string;
        get_base_uri(): string | null;
        get_owner_document(): DomDocument | null;
        set_owner_document(value?: DomDocument | null): void;
        get_parent_node(): DomNode | null;
        get_parent_element(): DomElement | null;
        get_child_nodes(): DomNodeList;
        get_first_child(): DomNode | null;
        get_last_child(): DomNode | null;
        get_previous_sibling(): DomNode | null;
        get_next_sibling(): DomNode | null;
        get_node_value(): string | null;
        set_node_value(value?: string | null): void;
        get_text_content(): string | null;
        set_text_content(value?: string | null): void;
        has_child_nodes(): boolean;
        normalize(): void;
        is_equal_node(node?: DomNode | null): boolean;
        compare_document_position(other: DomNode): DomNodeDocumentPosition;
        contains(other?: DomNode | null): boolean;
        lookup_prefix(nspace?: string | null): string | null;
        lookup_namespace_uri(prefix?: string | null): string | null;
        is_default_namespace(nspace?: string | null): boolean;
        insert_before(node: DomNode, child?: DomNode | null): DomNode;
        append_child(node: DomNode): DomNode;
        replace_child(node: DomNode, child: DomNode): DomNode;
        remove_child(child: DomNode): DomNode;

        // Own virtual methods of GXml-0.20.DomNode

        vfunc_get_node_type(): DomNodeNodeType;
        vfunc_get_node_name(): string;
        vfunc_get_base_uri(): string | null;
        vfunc_get_owner_document(): DomDocument | null;
        vfunc_set_owner_document(value?: DomDocument | null): void;
        vfunc_get_parent_node(): DomNode | null;
        vfunc_get_parent_element(): DomElement | null;
        vfunc_get_child_nodes(): DomNodeList;
        vfunc_get_first_child(): DomNode | null;
        vfunc_get_last_child(): DomNode | null;
        vfunc_get_previous_sibling(): DomNode | null;
        vfunc_get_next_sibling(): DomNode | null;
        vfunc_get_node_value(): string | null;
        vfunc_set_node_value(value?: string | null): void;
        vfunc_get_text_content(): string | null;
        vfunc_set_text_content(value?: string | null): void;
        vfunc_has_child_nodes(): boolean;
        vfunc_normalize(): void;
        vfunc_is_equal_node(node?: DomNode | null): boolean;
        vfunc_compare_document_position(other: DomNode): DomNodeDocumentPosition;
        vfunc_contains(other?: DomNode | null): boolean;
        vfunc_lookup_prefix(nspace?: string | null): string | null;
        vfunc_lookup_namespace_uri(prefix?: string | null): string | null;
        vfunc_is_default_namespace(nspace?: string | null): boolean;
        vfunc_insert_before(node: DomNode, child?: DomNode | null): DomNode;
        vfunc_append_child(node: DomNode): DomNode;
        vfunc_replace_child(node: DomNode, child: DomNode): DomNode;
        vfunc_remove_child(child: DomNode): DomNode;
    }

    interface DomRange {
        // Own properties of GXml-0.20.DomRange

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

        // Owm methods of GXml-0.20.DomRange

        get_start_container(): DomNode;
        get_start_offset(): number;
        get_end_container(): DomNode;
        get_end_offset(): number;
        get_collapsed(): boolean;
        get_common_ancestor_container(): DomNode;
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
        extract_contents(): DomDocumentFragment | null;
        clone_contents(): DomDocumentFragment | null;
        insert_node(node: DomNode): void;
        surround_contents(newParent: DomNode): void;
        clone_range(): DomRange;
        detach(): void;
        is_point_in_range(node: DomNode, offset: number): boolean;
        compare_point(node: DomNode, offset: number): number;
        intersects_node(node: DomNode): boolean;
        to_string(): string;

        // Own virtual methods of GXml-0.20.DomRange

        vfunc_get_start_container(): DomNode;
        vfunc_get_start_offset(): number;
        vfunc_get_end_container(): DomNode;
        vfunc_get_end_offset(): number;
        vfunc_get_collapsed(): boolean;
        vfunc_get_common_ancestor_container(): DomNode;
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
        vfunc_extract_contents(): DomDocumentFragment | null;
        vfunc_clone_contents(): DomDocumentFragment | null;
        vfunc_insert_node(node: DomNode): void;
        vfunc_surround_contents(newParent: DomNode): void;
        vfunc_clone_range(): DomRange;
        vfunc_detach(): void;
        vfunc_is_point_in_range(node: DomNode, offset: number): boolean;
        vfunc_compare_point(node: DomNode, offset: number): number;
        vfunc_intersects_node(node: DomNode): boolean;
        vfunc_to_string(): string;
    }

    interface IXsdSchema {
        // Own properties of GXml-0.20.IXsdSchema

        element_definitions: IXsdListElements;
        elementDefinitions: IXsdListElements;
        simple_type_definitions: IXsdListSimpleTypes;
        simpleTypeDefinitions: IXsdListSimpleTypes;
        complex_type_definitions: IXsdListComplexTypes;
        complexTypeDefinitions: IXsdListComplexTypes;

        // Owm methods of GXml-0.20.IXsdSchema

        get_element_definitions(): IXsdListElements;
        set_element_definitions(value: IXsdListElements): void;
        get_simple_type_definitions(): IXsdListSimpleTypes;
        set_simple_type_definitions(value: IXsdListSimpleTypes): void;
        get_complex_type_definitions(): IXsdListComplexTypes;
        set_complex_type_definitions(value: IXsdListComplexTypes): void;

        // Own virtual methods of GXml-0.20.IXsdSchema

        vfunc_get_element_definitions(): IXsdListElements;
        vfunc_set_element_definitions(value: IXsdListElements): void;
        vfunc_get_simple_type_definitions(): IXsdListSimpleTypes;
        vfunc_set_simple_type_definitions(value: IXsdListSimpleTypes): void;
        vfunc_get_complex_type_definitions(): IXsdListComplexTypes;
        vfunc_set_complex_type_definitions(value: IXsdListComplexTypes): void;
    }

    interface IXsdBaseType {
        // Own properties of GXml-0.20.IXsdBaseType

        anotation: IXsdAnnotation;

        // Owm methods of GXml-0.20.IXsdBaseType

        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.20.IXsdBaseType

        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
    }

    interface IXsdSimpleType {
        // Own properties of GXml-0.20.IXsdSimpleType

        final: string;
        id: string;
        name: string;
        annotation: IXsdAnnotation;
        list: IXsdTypeList;
        union: IXsdTypeUnion;
        restriction: IXsdTypeRestriction;

        // Owm methods of GXml-0.20.IXsdSimpleType

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

        // Own virtual methods of GXml-0.20.IXsdSimpleType

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
        // Own properties of GXml-0.20.IXsdTypeRestriction

        base: string;
        id: string;
        simple_type: IXsdSimpleType;
        simpleType: IXsdSimpleType;
        enumerations: IXsdListTypeRestrictionEnumerations;
        white_spaces: IXsdListTypeRestrictionWhiteSpaces;
        whiteSpaces: IXsdListTypeRestrictionWhiteSpaces;

        // Owm methods of GXml-0.20.IXsdTypeRestriction

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

        // Own virtual methods of GXml-0.20.IXsdTypeRestriction

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
        // Own properties of GXml-0.20.IXsdTypeRestrictionDef

        annotation: IXsdAnnotation;

        // Owm methods of GXml-0.20.IXsdTypeRestrictionDef

        get_annotation(): IXsdAnnotation;
        set_annotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.20.IXsdTypeRestrictionDef

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
        // Own properties of GXml-0.20.IXsdTypeRestrictionEnumeration

        id: string;
        value: string;

        // Owm methods of GXml-0.20.IXsdTypeRestrictionEnumeration

        get_id(): string;
        set_id(value: string): void;
        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.20.IXsdTypeRestrictionEnumeration

        vfunc_get_id(): string;
        vfunc_set_id(value: string): void;
        vfunc_get_value(): string;
        vfunc_set_value(value: string): void;
    }

    interface IXsdTypeRestrictionWhiteSpace {
        // Own properties of GXml-0.20.IXsdTypeRestrictionWhiteSpace

        fixed: boolean;
        id: string;
        value: string;

        // Owm methods of GXml-0.20.IXsdTypeRestrictionWhiteSpace

        get_fixed(): boolean;
        set_fixed(value: boolean): void;
        get_id(): string;
        set_id(value: string): void;
        get_value(): string;
        set_value(value: string): void;

        // Own virtual methods of GXml-0.20.IXsdTypeRestrictionWhiteSpace

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
        // Own properties of GXml-0.20.IXsdComplexType

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

        // Owm methods of GXml-0.20.IXsdComplexType

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

        // Own virtual methods of GXml-0.20.IXsdComplexType

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
        // Own properties of GXml-0.20.IXsdExtension

        base: string;

        // Owm methods of GXml-0.20.IXsdExtension

        get_base(): string;
        set_base(value: string): void;

        // Own virtual methods of GXml-0.20.IXsdExtension

        vfunc_get_base(): string;
        vfunc_set_base(value: string): void;
    }

    interface IXsdElement {
        // Own properties of GXml-0.20.IXsdElement

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

        // Owm methods of GXml-0.20.IXsdElement

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
        get_id(): string | null;
        set_id(value?: string | null): void;
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

        // Own virtual methods of GXml-0.20.IXsdElement

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
        vfunc_get_id(): string | null;
        vfunc_set_id(value?: string | null): void;
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
        // Own properties of GXml-0.20.IXsdBaseContent

        anotation: IXsdAnnotation;

        // Owm methods of GXml-0.20.IXsdBaseContent

        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.20.IXsdBaseContent

        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
    }

    interface IXsdSimpleContent {}

    interface IXsdComplexContent {}

    interface IXsdOpenContent {}

    interface IXsdBaseAttribute {
        // Own properties of GXml-0.20.IXsdBaseAttribute

        anotation: IXsdAnnotation;

        // Owm methods of GXml-0.20.IXsdBaseAttribute

        get_anotation(): IXsdAnnotation;
        set_anotation(value: IXsdAnnotation): void;

        // Own virtual methods of GXml-0.20.IXsdBaseAttribute

        vfunc_get_anotation(): IXsdAnnotation;
        vfunc_set_anotation(value: IXsdAnnotation): void;
    }

    interface IXsdAttribute {}

    interface IXsdAttributeGroup {}

    interface IXsdList {
        // Own properties of GXml-0.20.IXsdList

        element: DomElement;
        items_type: GObject.GType;
        itemsType: GObject.GType;
        items_name: GObject.GType;
        itemsName: GObject.GType;
        readonly length: number;

        // Owm methods of GXml-0.20.IXsdList

        get_element(): DomElement;
        set_element(value: DomElement): void;
        get_items_type(): GObject.GType;
        set_items_type(value: GObject.GType): void;
        get_items_name(): GObject.GType;
        set_items_name(value: GObject.GType): void;
        get_length(): number;
        get_item(index: number): DomElement | null;
        append(element: DomElement): void;
        remove(index: number): void;
        index_of(element: DomElement): number;

        // Own virtual methods of GXml-0.20.IXsdList

        vfunc_get_element(): DomElement;
        vfunc_set_element(value: DomElement): void;
        vfunc_get_items_type(): GObject.GType;
        vfunc_set_items_type(value: GObject.GType): void;
        vfunc_get_items_name(): GObject.GType;
        vfunc_set_items_name(value: GObject.GType): void;
        vfunc_get_length(): number;
        vfunc_get_item(index: number): DomElement | null;
        vfunc_append(element: DomElement): void;
        vfunc_remove(index: number): void;
        vfunc_index_of(element: DomElement): number;
    }

    interface IXsdListElements {}

    interface IXsdListSimpleTypes {}

    interface IXsdListComplexTypes {}

    interface IXsdListAttributes {}

    interface IXsdListAttributesGroup {}

    interface IXsdListTypeRestrictionEnumerations {}

    interface IXsdListTypeRestrictionWhiteSpaces {}

    interface Object {
        // Owm methods of GXml-0.20.Object

        get_properties_list(): GObject.ParamSpec[];
        find_property_name(nick: string): GObject.ParamSpec | null;
        find_object_property_name(pname: string): GObject.ParamSpec | null;
        get_property_element_list(): GObject.ParamSpec[];
        get_property_string(prop: GObject.ParamSpec): string | null;
        get_attribute(name: string): string | null;
        find_property(name: string): Property | null;
        set_attribute(name: string, val: string): boolean;
        get_child(name: string): DomElement | null;
        find_elements(name: string): DomElementList;
        remove_attribute(name: string): boolean;
        set_instance_property(name: string): boolean;
        clean_property_elements(name: string): void;

        // Own virtual methods of GXml-0.20.Object

        vfunc_get_properties_list(): GObject.ParamSpec[];
        vfunc_find_property_name(nick: string): GObject.ParamSpec | null;
        vfunc_find_object_property_name(pname: string): GObject.ParamSpec | null;
        vfunc_get_property_element_list(): GObject.ParamSpec[];
        vfunc_get_property_string(prop: GObject.ParamSpec): string | null;
        vfunc_get_attribute(name: string): string | null;
        vfunc_find_property(name: string): Property | null;
        vfunc_set_attribute(name: string, val: string): boolean;
        vfunc_get_child(name: string): DomElement | null;
        vfunc_find_elements(name: string): DomElementList;
        vfunc_remove_attribute(name: string): boolean;
        vfunc_set_instance_property(name: string): boolean;
        vfunc_clean_property_elements(name: string): void;
    }

    interface Parser {
        // Own properties of GXml-0.20.Parser

        backup: boolean;
        indent: boolean;
        cancellable: Gio.Cancellable;
        readonly node: DomNode;
        readonly types: GLib.HashTable<GObject.GType, GLib.HashTable>;

        // Owm methods of GXml-0.20.Parser

        get_backup(): boolean;
        set_backup(value: boolean): void;
        get_indent(): boolean;
        set_indent(value: boolean): void;
        get_cancellable(): Gio.Cancellable | null;
        set_cancellable(value?: Gio.Cancellable | null): void;
        get_node(): DomNode;
        get_types(): GLib.HashTable<GObject.GType, GLib.HashTable>;
        write_file(file: Gio.File): void;
        write_file_async(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        write_file_finish(_res_: Gio.AsyncResult): void;
        write_string(): string;
        write_string_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        write_string_finish(_res_: Gio.AsyncResult): string;
        write_stream(stream: Gio.OutputStream): void;
        write_stream_async(stream: Gio.OutputStream, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        write_stream_finish(_res_: Gio.AsyncResult): void;
        read_file(file: Gio.File): void;
        read_file_async(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        read_file_finish(_res_: Gio.AsyncResult): void;
        read_stream(stream: Gio.InputStream): void;
        read_stream_async(stream: Gio.InputStream, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        read_stream_finish(_res_: Gio.AsyncResult): void;
        read_string(str: string): void;
        read_string_async(str: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        read_string_finish(_res_: Gio.AsyncResult): void;
        create_stream(): Gio.InputStream;
        create_stream_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;
        read_child_nodes(parent: DomNode): void;
        read_child_nodes_async(parent: DomNode, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        read_child_nodes_finish(_res_: Gio.AsyncResult): void;
        read_child_node(parent: DomNode): boolean;
        read_child_element(parent: DomNode): boolean;
        read_element_property(parent: DomNode): boolean;
        add_element_collection(parent: DomNode): boolean;
        read_child_nodes_stream(istream: Gio.InputStream): void;
        read_child_nodes_string(str: string): void;
        read_unparsed(): string;
        move_next_node(): boolean;
        current_is_empty_element(): boolean;
        current_is_element(): boolean;
        current_is_document(): boolean;
        current_node_name(): string;
        create_element(parent: DomNode): DomElement | null;
        read_element(element: DomElement): void;

        // Own virtual methods of GXml-0.20.Parser

        vfunc_get_backup(): boolean;
        vfunc_set_backup(value: boolean): void;
        vfunc_get_indent(): boolean;
        vfunc_set_indent(value: boolean): void;
        vfunc_get_cancellable(): Gio.Cancellable | null;
        vfunc_set_cancellable(value?: Gio.Cancellable | null): void;
        vfunc_get_node(): DomNode;
        vfunc_get_types(): GLib.HashTable<GObject.GType, GLib.HashTable>;
        vfunc_write_file(file: Gio.File): void;
        vfunc_write_file_async(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_write_file_finish(_res_: Gio.AsyncResult): void;
        vfunc_write_string(): string;
        vfunc_write_string_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_write_string_finish(_res_: Gio.AsyncResult): string;
        vfunc_write_stream(stream: Gio.OutputStream): void;
        vfunc_write_stream_async(stream: Gio.OutputStream, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_write_stream_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_file(file: Gio.File): void;
        vfunc_read_file_async(file: Gio.File, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_read_file_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_stream(stream: Gio.InputStream): void;
        vfunc_read_stream_async(stream: Gio.InputStream, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_read_stream_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_string(str: string): void;
        vfunc_read_string_async(str: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_read_string_finish(_res_: Gio.AsyncResult): void;
        vfunc_create_stream(): Gio.InputStream;
        vfunc_create_stream_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_create_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;
        vfunc_read_child_nodes(parent: DomNode): void;
        vfunc_read_child_nodes_async(parent: DomNode, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_read_child_nodes_finish(_res_: Gio.AsyncResult): void;
        vfunc_read_child_node(parent: DomNode): boolean;
        vfunc_read_child_element(parent: DomNode): boolean;
        vfunc_read_element_property(parent: DomNode): boolean;
        vfunc_add_element_collection(parent: DomNode): boolean;
        vfunc_read_child_nodes_stream(istream: Gio.InputStream): void;
        vfunc_read_child_nodes_string(str: string): void;
        vfunc_read_unparsed(): string;
        vfunc_move_next_node(): boolean;
        vfunc_current_is_empty_element(): boolean;
        vfunc_current_is_element(): boolean;
        vfunc_current_is_document(): boolean;
        vfunc_current_node_name(): string;
        vfunc_create_element(parent: DomNode): DomElement | null;
        vfunc_read_element(element: DomElement): void;
    }

    interface Property {
        // Own properties of GXml-0.20.Property

        value: string;

        // Owm methods of GXml-0.20.Property

        get_value(): string | null;
        set_value(value?: string | null): void;
        validate_value(val?: string | null): boolean;

        // Own virtual methods of GXml-0.20.Property

        vfunc_get_value(): string | null;
        vfunc_set_value(value?: string | null): void;
        vfunc_validate_value(val?: string | null): boolean;
    }

    interface XPathContext {
        // Owm methods of GXml-0.20.XPathContext

        evaluate(expression: string, resolver?: Gee.Map | null): XPathObject;

        // Own virtual methods of GXml-0.20.XPathContext

        vfunc_evaluate(expression: string, resolver?: Gee.Map | null): XPathObject;
    }

    interface XPathObject {
        // Own properties of GXml-0.20.XPathObject

        readonly object_type: XPathObjectType;
        readonly objectType: XPathObjectType;
        readonly boolean_value: boolean;
        readonly booleanValue: boolean;
        readonly string_value: string;
        readonly stringValue: string;
        readonly number_value: number;
        readonly numberValue: number;
        readonly nodeset: DomHTMLCollection;

        // Owm methods of GXml-0.20.XPathObject

        get_object_type(): XPathObjectType;
        get_boolean_value(): boolean;
        get_string_value(): string;
        get_number_value(): number;
        get_nodeset(): DomHTMLCollection;

        // Own virtual methods of GXml-0.20.XPathObject

        vfunc_get_object_type(): XPathObjectType;
        vfunc_get_boolean_value(): boolean;
        vfunc_get_string_value(): string;
        vfunc_get_number_value(): number;
        vfunc_get_nodeset(): DomHTMLCollection;
    }

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
