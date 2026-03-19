/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Lasem {
    /**
     * Lasem-0.4
     */

    export namespace DebugLevel {
        export const $gtype: GObject.GType<DebugLevel>;
    }

    /**
     * @gir-type Enum
     */
    enum DebugLevel {
        NONE,
        WARNING,
        DEBUG,
        LOG,
        COUNT,
    }

    export namespace DomNodeType {
        export const $gtype: GObject.GType<DomNodeType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomNodeType {
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

    const DOM_VIEW_DEFAULT_RESOLUTION: number;
    const DOM_VIEW_DEFAULT_VIEWBOX_HEIGHT: number;
    const DOM_VIEW_DEFAULT_VIEWBOX_WIDTH: number;
    /**
     * @param cairo
     * @param to
     * @param from
     */
    function cairo_box_device_to_user(cairo: cairo.Context, to: Box, from: Box): void;
    /**
     * @param cairo
     * @param to
     * @param from
     */
    function cairo_box_user_to_device(cairo: cairo.Context, to: Box, from: Box): void;
    /**
     * @param cairo
     * @param rx
     * @param ry
     * @param x_axis_rotation
     * @param large_arc_flag
     * @param sweep_flag
     * @param x
     * @param y
     */
    function cairo_elliptical_arc(
        cairo: cairo.Context,
        rx: number,
        ry: number,
        x_axis_rotation: number,
        large_arc_flag: boolean,
        sweep_flag: boolean,
        x: number,
        y: number,
    ): void;
    /**
     * @param cr
     * @param path
     */
    function cairo_emit_svg_path(cr: cairo.Context, path: string): void;
    /**
     * @param cairo
     * @param x
     */
    function cairo_horizontal(cairo: cairo.Context, x: number): void;
    /**
     * @param cr
     * @param x1
     * @param y1
     * @param x
     * @param y
     */
    function cairo_quadratic_curve_to(cr: cairo.Context, x1: number, y1: number, x: number, y: number): void;
    /**
     * @param cairo
     * @param rx
     * @param ry
     * @param x_axis_rotation
     * @param large_arc_flag
     * @param sweep_flag
     * @param dx
     * @param dy
     */
    function cairo_rel_elliptical_arc(
        cairo: cairo.Context,
        rx: number,
        ry: number,
        x_axis_rotation: number,
        large_arc_flag: boolean,
        sweep_flag: boolean,
        dx: number,
        dy: number,
    ): void;
    /**
     * @param cairo
     * @param dx
     */
    function cairo_rel_horizontal(cairo: cairo.Context, dx: number): void;
    /**
     * @param cr
     * @param dx1
     * @param dy1
     * @param dx
     * @param dy
     */
    function cairo_rel_quadratic_curve_to(cr: cairo.Context, dx1: number, dy1: number, dx: number, dy: number): void;
    /**
     * @param cairo
     * @param dy
     */
    function cairo_rel_vertical(cairo: cairo.Context, dy: number): void;
    /**
     * Sets the given pixbuf as the source pattern for `cairo`.
     *
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `pixbuf` is `pixbuf_x`, `pixbuf_y`.
     * @param cairo a cairo context
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param pixbuf_x X coordinate of location to place upper left corner of `pixbuf`
     * @param pixbuf_y Y coordinate of location to place upper left corner of `pixbuf`
     * @since 0.4
     */
    function cairo_set_source_pixbuf(
        cairo: cairo.Context,
        pixbuf: GdkPixbuf.Pixbuf,
        pixbuf_x: number,
        pixbuf_y: number,
    ): void;
    /**
     * @param cairo
     * @param y
     */
    function cairo_vertical(cairo: cairo.Context, y: number): void;
    /**
     * @param category
     * @param level
     */
    function debug_check(category: DebugCategory, level: DebugLevel | null): boolean;
    /**
     * @param category_selection
     */
    function debug_enable(category_selection: string): void;
    /**
     * @param name
     */
    function dom_get_entity(name: string): string;
    function dom_implementation_cleanup(): void;
    /**
     * @param namespace_uri namespace uri
     * @param qualified_name qualified name
     * @returns a new {@link Lasem.DomDocument}
     */
    function dom_implementation_create_document(namespace_uri: string, qualified_name: string): DomDocument;
    /**
     * @param string
     * @param strings
     * @param n_strings
     */
    function enum_value_from_string(string: string, strings: string, n_strings: number): number;
    function shutdown(): void;
    /**
     * @param str
     */
    function str_is_uri(str: string): boolean;
    /**
     * @param str
     * @param x
     */
    function str_parse_double(str: string, x: number): boolean;
    /**
     * @param str
     * @param n_values
     * @param values
     */
    function str_parse_double_list(str: string, n_values: number, values: number): number;
    /**
     * @param point_list
     * @param extents
     */
    function str_point_list_exents(point_list: string, extents: Extents): void;
    /**
     * @param str
     */
    function str_to_uri(str: string): string;
    namespace DomCharacterData {
        // Signal signatures
        interface SignalSignatures extends DomNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomCharacterData extends DomNode {
        static $gtype: GObject.GType<DomCharacterData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomCharacterData.SignalSignatures;

        // Fields

        node: DomNode;
        data: string;

        // Constructors

        constructor(properties?: Partial<DomCharacterData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomCharacterData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomCharacterData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomCharacterData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomCharacterData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomCharacterData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomCharacterData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_data(): string;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * @param value
         */
        set_data(value: string): void;
    }

    namespace DomDocument {
        // Signal signatures
        interface SignalSignatures extends DomNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomDocument extends DomNode {
        static $gtype: GObject.GType<DomDocument>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomDocument.SignalSignatures;

        // Fields

        node: DomNode;
        url: string;

        // Constructors

        constructor(properties?: Partial<DomDocument.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_memory(buffer: any | null, size: number): DomDocument;

        static new_from_path(path: string): DomDocument;

        static new_from_url(url: string): DomDocument;

        // Signals

        /** @signal */
        connect<K extends keyof DomDocument.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomDocument.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomDocument.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomDocument.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomDocument.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomDocument.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param tag_name name of the element to create
         * @virtual
         */
        vfunc_create_element(tag_name: string): DomElement;
        /**
         * @param data content of the text node
         * @virtual
         */
        vfunc_create_text_node(data: string): DomText;
        /**
         * @virtual
         */
        vfunc_create_view(): DomView;
        /**
         * @virtual
         */
        vfunc_get_document_element(): DomElement;

        // Methods

        /**
         * Append a chunk of xml tree to an existing document. The resulting nodes will be appended to
         * `node`, or to `document` if `node` == NULL.
         *
         * Size set to a negative value indicated an unknow xml data size.
         * @param node a {@link Lasem.DomNode}
         * @param buffer a memory buffer holding xml data
         * @param size size of the xml data, in bytes
         */
        append_from_memory(node: DomNode, buffer: any | null, size: number): void;
        /**
         * @param tag_name name of the element to create
         * @returns a newly created {@link Lasem.DomElement}
         */
        create_element(tag_name: string): DomElement;
        /**
         * @param data content of the text node
         * @returns a newly created {@link Lasem.DomText}
         */
        create_text_node(data: string): DomText;
        /**
         * @returns a new {@link Lasem.DomView}
         */
        create_view(): DomView;
        /**
         * @returns document element
         */
        get_document_element(): DomElement;
        /**
         * @param id id of the element to find
         * @returns the requested element, NULL if not found.
         */
        get_element_by_id(id: string): DomElement;
        /**
         * @param href href
         * @param size placeholder for the size of the returned data
         * @returns a newly allocated buffer containing the requested data.
         */
        get_href_data(href: string, size: number): any | null;
        get_url(): string;
        /**
         * @param element
         * @param id
         */
        register_element(element: DomElement, id: string): void;
        /**
         * @param buffer
         * @param size
         */
        save_to_memory(buffer: any | null, size: number): void;
        /**
         * @param path
         */
        save_to_path(path: string): void;
        /**
         * @param stream stream to save to
         */
        save_to_stream(stream: Gio.OutputStream): void;
        /**
         * @param path
         */
        save_to_url(path: string): void;
        /**
         * @param path
         */
        set_path(path: string): void;
        /**
         * @param url
         */
        set_url(url: string): void;
    }

    namespace DomDocumentFragment {
        // Signal signatures
        interface SignalSignatures extends DomNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomDocumentFragment extends DomNode {
        static $gtype: GObject.GType<DomDocumentFragment>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomDocumentFragment.SignalSignatures;

        // Fields

        node: DomNode;

        // Constructors

        constructor(properties?: Partial<DomDocumentFragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomDocumentFragment;

        // Signals

        /** @signal */
        connect<K extends keyof DomDocumentFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomDocumentFragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomDocumentFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomDocumentFragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomDocumentFragment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomDocumentFragment.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomElement {
        // Signal signatures
        interface SignalSignatures extends DomNode.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomElement extends DomNode {
        static $gtype: GObject.GType<DomElement>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomElement.SignalSignatures;

        // Fields

        node: DomNode;

        // Constructors

        constructor(properties?: Partial<DomElement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomElement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomElement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomElement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomElement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomElement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomElement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param name attribute name
         * @virtual
         */
        vfunc_get_attribute(name: string): string;
        /**
         * @virtual
         */
        vfunc_get_serialized_attributes(): string;
        /**
         * Set the atribute value.
         * @param name attribute name
         * @param attribute_value attribute value as string
         * @virtual
         */
        vfunc_set_attribute(name: string, attribute_value: string): void;

        // Methods

        /**
         * @param name attribute name
         * @returns attribute value, as string.
         */
        get_attribute(name: string): string;
        /**
         * @returns element tag name.
         */
        get_tag_name(): string;
        /**
         * Set the atribute value.
         * @param name attribute name
         * @param attribute_value attribute value as string
         */
        set_attribute(name: string, attribute_value: string): void;
    }

    namespace DomNamedNodeMap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomNamedNodeMap extends GObject.Object {
        static $gtype: GObject.GType<DomNamedNodeMap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomNamedNodeMap.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DomNamedNodeMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomNamedNodeMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomNamedNodeMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomNamedNodeMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomNamedNodeMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomNamedNodeMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomNamedNodeMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param index item index
         * @virtual
         */
        vfunc_get_item(index: number): DomNode;
        /**
         * @virtual
         */
        vfunc_get_length(): number;

        // Methods

        /**
         * @param index item index
         * @returns The node corresponding to `index`, NULL on error.
         */
        get_item(index: number): DomNode;
        get_length(): number;
        /**
         * @param name name of the requested item
         * @returns The corresponding node, NULL if not found.
         */
        get_named_item(name: string): DomNode;
        /**
         * @param name name of the item to remove
         * @returns removed node, NULL on error.
         */
        remove_named_item(name: string): DomNode;
        /**
         * @param node a {@link Lasem.DomNode}
         * @returns same as `node`, NULL on error.
         */
        set_named_item(node: DomNode): DomNode;
    }

    namespace DomNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomNode extends GObject.Object {
        static $gtype: GObject.GType<DomNode>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomNode.SignalSignatures;

        // Fields

        object: GObject.Object;
        next_sibling: DomNode;
        previous_sibling: DomNode;
        parent_node: DomNode;
        first_child: DomNode;
        last_child: DomNode;

        // Constructors

        constructor(properties?: Partial<DomNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param new_child
         * @virtual
         */
        vfunc_can_append_child(new_child: DomNode): boolean;
        /**
         * @virtual
         */
        vfunc_changed(): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_child_changed(child: DomNode): boolean;
        /**
         * Gets the node name.
         * @virtual
         */
        vfunc_get_node_name(): string;
        /**
         * @virtual
         */
        vfunc_get_node_type(): DomNodeType;
        /**
         * Gets the node value.
         * @virtual
         */
        vfunc_get_node_value(): string;
        /**
         * @param child
         * @virtual
         */
        vfunc_post_new_child(child: DomNode): void;
        /**
         * @param child
         * @virtual
         */
        vfunc_pre_remove_child(child: DomNode): void;
        /**
         * @param new_value
         * @virtual
         */
        vfunc_set_node_value(new_value: string): void;
        /**
         * @param stream
         * @virtual
         */
        vfunc_write_to_stream(stream: Gio.OutputStream): void;

        // Methods

        /**
         * Adds the node `new_child` to the end of the list of children of this node.
         * If the `new_child` is already in the tree, it is first removed.
         * @param new_child node to append
         * @returns the added node.
         */
        append_child(new_child: DomNode): DomNode;
        changed(): void;
        /**
         * @returns node child list
         */
        get_child_nodes(): DomNodeList;
        /**
         * @returns node first child
         */
        get_first_child(): DomNode;
        /**
         * @returns node last child
         */
        get_last_child(): DomNode;
        /**
         * @returns node next sibling
         */
        get_next_sibling(): DomNode;
        /**
         * Gets the node name.
         * @returns the node name.
         */
        get_node_name(): string;
        get_node_type(): DomNodeType;
        /**
         * Gets the node value.
         * @returns the node value.
         */
        get_node_value(): string;
        /**
         * @returns node owner document
         */
        get_owner_document(): DomDocument;
        /**
         * @returns node parent
         */
        get_parent_node(): DomNode;
        /**
         * @returns node previous sibling
         */
        get_previous_sibling(): DomNode;
        has_child_nodes(): boolean;
        /**
         * Inserts the node `new_child` before the existing child node `ref_child`. If
         * `ref_child` is null, insert `new_child` at the end of the list of children.
         * If the `new_child` is already in the tree, it is first removed.
         * @param new_child node to insert
         * @param ref_child reference node, i.e., the node before which the new node must be inserted.
         * @returns the inserted node.
         */
        insert_before(new_child: DomNode, ref_child: DomNode): DomNode;
        /**
         * Removes the child node indicated by `old_child` from the list of children, and returns it.
         * @param old_child node to remove.
         * @returns the removed node.
         */
        remove_child(old_child: DomNode): DomNode;
        /**
         * Replaces the child node `old_child` with `new_child` in the list of children,
         * and returns the `old_child` node.
         * If the `new_child` is already in the tree, it is first removed.
         * @param new_child a replacement node
         * @param old_child node to replace
         * @returns the replaced node.
         */
        replace_child(new_child: DomNode, old_child: DomNode): DomNode;
        /**
         * @param new_value
         */
        set_node_value(new_value: string): void;
        /**
         * @param stream
         */
        write_to_stream(stream: Gio.OutputStream): void;
    }

    namespace DomNodeList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomNodeList extends GObject.Object {
        static $gtype: GObject.GType<DomNodeList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomNodeList.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DomNodeList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomNodeList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomNodeList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomNodeList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomNodeList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomNodeList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomNodeList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param index id of the item to retrieve
         * @virtual
         */
        vfunc_get_item(index: number): DomNode;
        /**
         * @virtual
         */
        vfunc_get_length(): number;

        // Methods

        /**
         * @param index id of the item to retrieve
         * @returns the node corresponding to index, NULL on error.
         */
        get_item(index: number): DomNode;
        get_length(): number;
    }

    namespace DomText {
        // Signal signatures
        interface SignalSignatures extends DomCharacterData.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DomCharacterData.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomText extends DomCharacterData {
        static $gtype: GObject.GType<DomText>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomText.SignalSignatures;

        // Fields

        character_data: DomCharacterData;

        // Constructors

        constructor(properties?: Partial<DomText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: string): DomText;

        // Signals

        /** @signal */
        connect<K extends keyof DomText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomText.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomText.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomText.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomText.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomView extends GObject.Object {
        static $gtype: GObject.GType<DomView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomView.SignalSignatures;

        // Fields

        object: GObject.Object;
        document: DomDocument;
        pango_layout: Pango.Layout;
        measure_pango_layout: Pango.Layout;
        is_vector: boolean;
        resolution_ppi: number;
        viewport_pt: Box;

        // Constructors

        constructor(properties?: Partial<DomView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param width
         * @param height
         * @param baseline
         * @virtual
         */
        vfunc_measure(width: number, height: number, baseline: number): void;
        /**
         * @virtual
         */
        vfunc_render(): void;
        /**
         * Configure feature debug.
         * @param feature name of the feature to debug
         * @param enable wether to enable debugging
         * @virtual
         */
        vfunc_set_debug(feature: string, enable: boolean): void;

        // Methods

        /**
         * @returns view resolution, in pixel per inch.
         */
        get_resolution(): number;
        /**
         * Get the view size and baseline. Baseline is for use of view inside bloc of text.
         * @param width view width placeholder, in points
         * @param height view height placeholder, in points
         * @param baseline view baseline, in points
         */
        get_size(width: number, height: number, baseline: number): void;
        /**
         * Get the view size and baseline. Baseline is for use of view inside bloc of text.
         * @param width view width placeholder, in pixels
         * @param height view height placeholder, in pixels
         * @param baseline view baseline, in pixels
         */
        get_size_pixels(width: number, height: number, baseline: number): void;
        /**
         * @returns viewport size, in points.
         */
        get_viewport(): Box;
        /**
         * @returns viewport size, in pixels.
         */
        get_viewport_pixels(): Box;
        /**
         * Render `view` in the `cairo` context.
         * @param cairo cairo context
         * @param x x posiiton for rendering
         * @param y y position for rendering
         */
        render(cairo: cairo.Context, x: number, y: number): void;
        /**
         * Configure feature debug.
         * @param feature name of the feature to debug
         * @param enable wether to enable debugging
         */
        set_debug(feature: string, enable: boolean): void;
        /**
         * Change the document attached to `view`. The previously attached document is unreferenced.
         * @param document a {@link Lasem.DomDocument}
         */
        set_document(document: DomDocument): void;
        /**
         * Set the view resolution, in pixel per inch.
         * @param ppi resolution, in pixel per inch.
         */
        set_resolution(ppi: number): void;
        /**
         * Set the viewport size.
         * @param viewport_pt viewport size, in points
         */
        set_viewport(viewport_pt: Box): void;
        /**
         * Set the viewport size.
         * @param viewport viewport size, in pixels
         */
        set_viewport_pixels(viewport: Box): void;
    }

    /**
     * @gir-type Struct
     */
    class Attribute {
        static $gtype: GObject.GType<Attribute>;

        // Fields

        value: string;

        // Constructors

        constructor(
            properties?: Partial<{
                value: string;
            }>,
        );

        // Methods

        is_defined(): boolean;
    }

    /**
     * @gir-type Struct
     */
    class AttributeInfos {
        static $gtype: GObject.GType<AttributeInfos>;

        // Fields

        name: string;
        attribute_offset: number;
        trait_class: TraitClass;
        trait_default: any;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                attribute_offset: number;
                trait_default: any;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AttributeManager {
        static $gtype: GObject.GType<AttributeManager>;

        // Constructors

        constructor(n_attributes: number, attribute_infos: AttributeInfos);

        static ['new'](n_attributes: number, attribute_infos: AttributeInfos): AttributeManager;

        // Methods

        /**
         * @param n_attributes
         * @param attribute_infos
         */
        add_attributes(n_attributes: number, attribute_infos: AttributeInfos): void;
        /**
         * @param instance
         */
        clean_attributes(instance?: any | null): void;
        duplicate(): AttributeManager;
        /**
         * @param instance
         * @param name
         */
        get_attribute(instance: any | null, name: string): string;
        ref(): AttributeManager;
        /**
         * @param instance
         */
        serialize(instance?: any | null): string;
        /**
         * @param instance
         * @param name
         * @param value
         */
        set_attribute(instance: any | null, name: string, value: string): boolean;
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    class Box {
        static $gtype: GObject.GType<Box>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class DebugCategory {
        static $gtype: GObject.GType<DebugCategory>;
    }

    /**
     * @gir-type Alias
     */
    type DomCharacterDataClass = typeof DomCharacterData;
    /**
     * @gir-type Alias
     */
    type DomDocumentClass = typeof DomDocument;
    /**
     * @gir-type Alias
     */
    type DomDocumentFragmentClass = typeof DomDocumentFragment;
    /**
     * @gir-type Alias
     */
    type DomElementClass = typeof DomElement;
    /**
     * @gir-type Alias
     */
    type DomNamedNodeMapClass = typeof DomNamedNodeMap;
    /**
     * @gir-type Alias
     */
    type DomNodeClass = typeof DomNode;
    /**
     * @gir-type Alias
     */
    type DomNodeListClass = typeof DomNodeList;
    /**
     * @gir-type Alias
     */
    type DomTextClass = typeof DomText;
    /**
     * @gir-type Alias
     */
    type DomViewClass = typeof DomView;
    /**
     * @gir-type Struct
     */
    class Extents {
        static $gtype: GObject.GType<Extents>;

        // Fields

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class Property {
        static $gtype: GObject.GType<Property>;

        // Fields

        id: number;
        flags: number;
        value: string;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                flags: number;
                value: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class PropertyBag {
        static $gtype: GObject.GType<PropertyBag>;

        // Fields

        properties: any[];

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        init(): void;
    }

    /**
     * @gir-type Struct
     */
    class PropertyInfos {
        static $gtype: GObject.GType<PropertyInfos>;

        // Fields

        name: string;
        id: number;
        trait_class: TraitClass;
        trait_default: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                id: number;
                trait_default: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class PropertyManager {
        static $gtype: GObject.GType<PropertyManager>;

        // Constructors

        constructor(n_properties: number, property_infos: PropertyInfos);

        static ['new'](n_properties: number, property_infos: PropertyInfos): PropertyManager;

        // Methods

        /**
         * @param property_bag
         * @param style
         * @param parent_style
         */
        apply_property_bag(property_bag: PropertyBag, style?: any | null, parent_style?: any | null): void;
        /**
         * @param property_bag
         */
        clean_properties(property_bag: PropertyBag): void;
        /**
         * @param property_bag
         * @param name
         */
        get_property(property_bag: PropertyBag, name: string): string;
        /**
         * @param style
         */
        init_default_style(style?: any | null): void;
        ref(): PropertyManager;
        /**
         * @param property_bag
         */
        serialize(property_bag: PropertyBag): string;
        /**
         * @param property_bag
         * @param name
         * @param value
         */
        set_property(property_bag: PropertyBag, name: string, value: string): boolean;
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    class TraitClass {
        static $gtype: GObject.GType<TraitClass>;

        // Fields

        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                size: number;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type Trait = void;
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

export default Lasem;

// END
