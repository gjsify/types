/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Lasem {
    /**
     * Lasem-0.4
     */

    export namespace DebugLevel {
        export const $gtype: GObject.GType<DebugLevel>;
    }

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
    function cairo_box_device_to_user(cairo: cairo.Context, to: Box, from: Box): void;
    function cairo_box_user_to_device(cairo: cairo.Context, to: Box, from: Box): void;
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
    function cairo_emit_svg_path(cr: cairo.Context, path: string): void;
    function cairo_horizontal(cairo: cairo.Context, x: number): void;
    function cairo_quadratic_curve_to(cr: cairo.Context, x1: number, y1: number, x: number, y: number): void;
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
    function cairo_rel_horizontal(cairo: cairo.Context, dx: number): void;
    function cairo_rel_quadratic_curve_to(cr: cairo.Context, dx1: number, dy1: number, dx: number, dy: number): void;
    function cairo_rel_vertical(cairo: cairo.Context, dy: number): void;
    /**
     * Sets the given pixbuf as the source pattern for `cairo`.
     *
     * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
     * so that the origin of `pixbuf` is `pixbuf_x,` `pixbuf_y`.
     * @param cairo a cairo context
     * @param pixbuf a #GdkPixbuf
     * @param pixbuf_x X coordinate of location to place upper left corner of @pixbuf
     * @param pixbuf_y Y coordinate of location to place upper left corner of @pixbuf
     */
    function cairo_set_source_pixbuf(
        cairo: cairo.Context,
        pixbuf: GdkPixbuf.Pixbuf,
        pixbuf_x: number,
        pixbuf_y: number,
    ): void;
    function cairo_vertical(cairo: cairo.Context, y: number): void;
    function debug_check(category: DebugCategory, level: DebugLevel | null): boolean;
    function debug_enable(category_selection: string): void;
    function dom_get_entity(name: string): string;
    function dom_implementation_cleanup(): void;
    function dom_implementation_create_document(namespace_uri: string, qualified_name: string): DomDocument;
    function enum_value_from_string(string: string, strings: string, n_strings: number): number;
    function shutdown(): void;
    function str_is_uri(str: string): boolean;
    function str_parse_double(str: string, x: number): boolean;
    function str_parse_double_list(str: string, n_values: number, values: number): number;
    function str_point_list_exents(point_list: string, extents: Extents): void;
    function str_to_uri(str: string): string;
    module DomCharacterData {
        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    abstract class DomCharacterData extends DomNode {
        static $gtype: GObject.GType<DomCharacterData>;

        // Fields

        node: DomNode;
        data: string;

        // Constructors

        constructor(properties?: Partial<DomCharacterData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_data(): string;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        set_data(value: string): void;
    }

    module DomDocument {
        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    abstract class DomDocument extends DomNode {
        static $gtype: GObject.GType<DomDocument>;

        // Fields

        node: DomNode;
        url: string;

        // Constructors

        constructor(properties?: Partial<DomDocument.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_memory(buffer: any | null, size: number): DomDocument;

        static new_from_path(path: string): DomDocument;

        static new_from_url(url: string): DomDocument;

        // Virtual methods

        vfunc_create_element(tag_name: string): DomElement;
        vfunc_create_text_node(data: string): DomText;
        vfunc_create_view(): DomView;
        vfunc_get_document_element(): DomElement;

        // Methods

        /**
         * Append a chunk of xml tree to an existing document. The resulting nodes will be appended to
         * `node,` or to `document` if `node` == NULL.
         *
         * Size set to a negative value indicated an unknow xml data size.
         * @param node a #LsmDomNode
         * @param buffer a memory buffer holding xml data
         * @param size size of the xml data, in bytes
         */
        append_from_memory(node: DomNode, buffer: any | null, size: number): void;
        create_element(tag_name: string): DomElement;
        create_text_node(data: string): DomText;
        create_view(): DomView;
        get_document_element(): DomElement;
        get_element_by_id(id: string): DomElement;
        get_href_data(href: string, size: number): any | null;
        get_url(): string;
        register_element(element: DomElement, id: string): void;
        save_to_memory(buffer: any | null, size: number): void;
        save_to_path(path: string): void;
        save_to_stream(stream: Gio.OutputStream): void;
        save_to_url(path: string): void;
        set_path(path: string): void;
        set_url(url: string): void;
    }

    module DomDocumentFragment {
        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    abstract class DomDocumentFragment extends DomNode {
        static $gtype: GObject.GType<DomDocumentFragment>;

        // Fields

        node: DomNode;

        // Constructors

        constructor(properties?: Partial<DomDocumentFragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomDocumentFragment;
    }

    module DomElement {
        // Constructor properties interface

        interface ConstructorProps extends DomNode.ConstructorProps {}
    }

    abstract class DomElement extends DomNode {
        static $gtype: GObject.GType<DomElement>;

        // Fields

        node: DomNode;

        // Constructors

        constructor(properties?: Partial<DomElement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_get_attribute(name: string): string;
        vfunc_get_serialized_attributes(): string;
        /**
         * Set the atribute value.
         * @param name attribute name
         * @param attribute_value attribute value as string
         */
        vfunc_set_attribute(name: string, attribute_value: string): void;

        // Methods

        get_attribute(name: string): string;
        get_tag_name(): string;
        /**
         * Set the atribute value.
         * @param name attribute name
         * @param attribute_value attribute value as string
         */
        set_attribute(name: string, attribute_value: string): void;
    }

    module DomNamedNodeMap {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class DomNamedNodeMap extends GObject.Object {
        static $gtype: GObject.GType<DomNamedNodeMap>;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DomNamedNodeMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_get_item(index: number): DomNode;
        vfunc_get_length(): number;

        // Methods

        get_item(index: number): DomNode;
        get_length(): number;
        get_named_item(name: string): DomNode;
        remove_named_item(name: string): DomNode;
        set_named_item(node: DomNode): DomNode;
    }

    module DomNode {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class DomNode extends GObject.Object {
        static $gtype: GObject.GType<DomNode>;

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

        // Virtual methods

        vfunc_can_append_child(new_child: DomNode): boolean;
        vfunc_changed(): void;
        vfunc_child_changed(child: DomNode): boolean;
        /**
         * Gets the node name.
         */
        vfunc_get_node_name(): string;
        vfunc_get_node_type(): DomNodeType;
        /**
         * Gets the node value.
         */
        vfunc_get_node_value(): string;
        vfunc_post_new_child(child: DomNode): void;
        vfunc_pre_remove_child(child: DomNode): void;
        vfunc_set_node_value(new_value: string): void;
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
        get_child_nodes(): DomNodeList;
        get_first_child(): DomNode;
        get_last_child(): DomNode;
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
        get_owner_document(): DomDocument;
        get_parent_node(): DomNode;
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
        set_node_value(new_value: string): void;
        write_to_stream(stream: Gio.OutputStream): void;
    }

    module DomNodeList {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class DomNodeList extends GObject.Object {
        static $gtype: GObject.GType<DomNodeList>;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DomNodeList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_get_item(index: number): DomNode;
        vfunc_get_length(): number;

        // Methods

        get_item(index: number): DomNode;
        get_length(): number;
    }

    module DomText {
        // Constructor properties interface

        interface ConstructorProps extends DomCharacterData.ConstructorProps {}
    }

    class DomText extends DomCharacterData {
        static $gtype: GObject.GType<DomText>;

        // Fields

        character_data: DomCharacterData;

        // Constructors

        constructor(properties?: Partial<DomText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: string): DomText;
    }

    module DomView {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class DomView extends GObject.Object {
        static $gtype: GObject.GType<DomView>;

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

        // Virtual methods

        vfunc_measure(width: number, height: number, baseline: number): void;
        vfunc_render(): void;
        /**
         * Configure feature debug.
         * @param feature name of the feature to debug
         * @param enable wether to enable debugging
         */
        vfunc_set_debug(feature: string, enable: boolean): void;

        // Methods

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
        get_viewport(): Box;
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
         * @param document a #LsmDomDocument
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
        _init(...args: any[]): void;

        // Methods

        is_defined(): boolean;
    }

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
        _init(...args: any[]): void;
    }

    class AttributeManager {
        static $gtype: GObject.GType<AttributeManager>;

        // Constructors

        constructor(n_attributes: number, attribute_infos: AttributeInfos);
        _init(...args: any[]): void;

        static ['new'](n_attributes: number, attribute_infos: AttributeInfos): AttributeManager;

        // Methods

        add_attributes(n_attributes: number, attribute_infos: AttributeInfos): void;
        clean_attributes(instance?: any | null): void;
        duplicate(): AttributeManager;
        get_attribute(instance: any | null, name: string): string;
        ref(): AttributeManager;
        serialize(instance?: any | null): string;
        set_attribute(instance: any | null, name: string, value: string): boolean;
        unref(): void;
    }

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
        _init(...args: any[]): void;
    }

    abstract class DebugCategory {
        static $gtype: GObject.GType<DebugCategory>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomCharacterDataClass = typeof DomCharacterData;
    type DomDocumentClass = typeof DomDocument;
    type DomDocumentFragmentClass = typeof DomDocumentFragment;
    type DomElementClass = typeof DomElement;
    type DomNamedNodeMapClass = typeof DomNamedNodeMap;
    type DomNodeClass = typeof DomNode;
    type DomNodeListClass = typeof DomNodeList;
    type DomTextClass = typeof DomText;
    type DomViewClass = typeof DomView;
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
        _init(...args: any[]): void;
    }

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
        _init(...args: any[]): void;
    }

    class PropertyBag {
        static $gtype: GObject.GType<PropertyBag>;

        // Fields

        properties: any[];

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        // Methods

        init(): void;
    }

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
        _init(...args: any[]): void;
    }

    class PropertyManager {
        static $gtype: GObject.GType<PropertyManager>;

        // Constructors

        constructor(n_properties: number, property_infos: PropertyInfos);
        _init(...args: any[]): void;

        static ['new'](n_properties: number, property_infos: PropertyInfos): PropertyManager;

        // Methods

        apply_property_bag(property_bag: PropertyBag, style?: any | null, parent_style?: any | null): void;
        clean_properties(property_bag: PropertyBag): void;
        get_property(property_bag: PropertyBag, name: string): string;
        init_default_style(style?: any | null): void;
        ref(): PropertyManager;
        serialize(property_bag: PropertyBag): string;
        set_property(property_bag: PropertyBag, name: string, value: string): boolean;
        unref(): void;
    }

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
        _init(...args: any[]): void;
    }

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
