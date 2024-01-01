
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gladeui-2.0-ambient.d.ts';
import './gladeui-2.0-import.d.ts';
/**
 * Gladeui-2.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

/**
 * These are the reasons your #GladePostCreateFunc can be called.
 */
export enum CreateReason {
    /**
     * Was created at the user's request
     *                     (this is a good time to set any properties
     *                     or add children to the project; like GtkFrame's
     *                     label for example).
     */
    USER,
    /**
     * Was created as a result of the copy/paste
     *                     mechanism, at this point you can count on glade
     *                     to follow up with properties and children on
     *                     its own.
     */
    COPY,
    /**
     * Was created during the load process.
     */
    LOAD,
    /**
     * Was created as a replacement for another project
     *                        object; this only happens when the user is
     *                        changing a property that is marked by the type
     *                        system as G_PARAM_SPEC_CONSTRUCT_ONLY.
     */
    REBUILD,
    /**
     * Never used.
     */
    REASONS,
}
export enum CursorType {
    SELECTOR,
    ADD_WIDGET,
    RESIZE_TOP_LEFT,
    RESIZE_TOP_RIGHT,
    RESIZE_BOTTOM_LEFT,
    RESIZE_BOTTOM_RIGHT,
    RESIZE_LEFT,
    RESIZE_RIGHT,
    RESIZE_TOP,
    RESIZE_BOTTOM,
    DRAG,
}
export enum EditorPageType {
    GENERAL,
    COMMON,
    PACKING,
    ATK,
    QUERY,
    SIGNAL,
}
export enum ItemAppearance {
    ICON_AND_LABEL,
    ICON_ONLY,
    LABEL_ONLY,
}
/**
 * Indicates what the pointer is used for in the workspace.
 */
export enum PointerMode {
    /**
     * Mouse pointer used for selecting widgets
     */
    SELECT,
    /**
     * Mouse pointer used for adding widgets
     */
    ADD_WIDGET,
    /**
     * Mouse pointer used for dragging and
     *                             resizing widgets in containers
     */
    DRAG_RESIZE,
    /**
     * Mouse pointer used to edit widget margins
     */
    MARGIN_EDIT,
    /**
     * Mouse pointer used to edit widget alignment
     */
    ALIGN_EDIT,
}
/**
 * The tree view columns provided by the GtkTreeModel implemented
 * by GladeProject
 */
export enum ProjectModelColumns {
    /**
     * name of the icon for the widget
     */
    COLUMN_ICON_NAME,
    /**
     * Name of the widget
     */
    COLUMN_NAME,
    /**
     * The type name of the widget
     */
    COLUMN_TYPE_NAME,
    /**
     * the GObject of the widget
     */
    COLUMN_OBJECT,
    /**
     * the auxilary text describing a widget's role
     */
    COLUMN_MISC,
    /**
     * the support warning text for this widget
     */
    COLUMN_WARNING,
    /**
     * Number of columns
     */
    N_COLUMNS,
}
export enum SignalModelColumns {
    COLUMN_NAME,
    COLUMN_SHOW_NAME,
    COLUMN_HANDLER,
    COLUMN_OBJECT,
    COLUMN_SWAP,
    COLUMN_AFTER,
    COLUMN_TOOLTIP,
    COLUMN_SIGNAL,
    COLUMN_DETAIL,
    N_COLUMNS,
}
export enum Stock {
    DUMMY,
}
export enum StockImage {
    DUMMY,
}
export enum UIMessageType {
    INFO,
    WARN,
    ERROR,
    ARE_YOU_SURE,
    YES_OR_NO,
}
export enum UtilFileDialogType {
    OPEN,
    SAVE,
}
export enum DebugFlag {
    REF_COUNTS,
    WIDGET_EVENTS,
    COMMANDS,
    PROPERTIES,
    VERIFY,
}
export enum PropertyState {
    NORMAL,
    CHANGED,
    UNSUPPORTED,
    SUPPORT_DISABLED,
}
export enum SupportMask {
    OK,
    DEPRECATED,
    MISMATCH,
}
export enum VerifyFlags {
    /**
     * No verification
     */
    NONE,
    /**
     * Verify version mismatches
     */
    VERSIONS,
    /**
     * Verify deprecations
     */
    DEPRECATIONS,
    /**
     * Verify unrecognized types
     */
    UNRECOGNIZED,
}
export const DEVHELP_FALLBACK_ICON_FILE: string
export const DEVHELP_ICON_NAME: string
export const ENV_BUNDLED: string
export const ENV_CATALOG_PATH: string
export const ENV_ICON_THEME_PATH: string
export const ENV_MODULE_PATH: string
export const ENV_PIXMAP_DIR: string
export const ENV_TESTING: string
export const GTKBUILDER_VERSIONING_BASE_MAJOR: number
export const GTKBUILDER_VERSIONING_BASE_MINOR: number
export const PROPERTY_DEF_OBJECT_DELIMITER: string
export const TAG_ACTION: string
export const TAG_ACTIONS: string
export const TAG_ACTION_ACTIVATE_FUNCTION: string
export const TAG_ACTION_SUBMENU_FUNCTION: string
export const TAG_ADAPTOR: string
export const TAG_ADD_CHILD_FUNCTION: string
export const TAG_ADD_CHILD_VERIFY_FUNCTION: string
export const TAG_ANARCHIST: string
export const TAG_ATK_PROPERTY: string
export const TAG_BIND_FLAGS: string
export const TAG_BIND_PROPERTY: string
export const TAG_BIND_SOURCE: string
export const TAG_BOOK: string
export const TAG_BUILDER_SINCE: string
export const TAG_CHILD_ACTION_ACTIVATE_FUNCTION: string
export const TAG_CHILD_GET_PROP_FUNCTION: string
export const TAG_CHILD_PROPERTY: string
export const TAG_CHILD_SET_PROP_FUNCTION: string
export const TAG_CHILD_VERIFY_FUNCTION: string
export const TAG_COMMENT: string
export const TAG_COMMON: string
export const TAG_CONSTRUCTOR_FUNCTION: string
export const TAG_CONSTRUCT_OBJECT_FUNCTION: string
export const TAG_CONSTRUCT_ONLY: string
export const TAG_CONTEXT: string
export const TAG_CREATE_EDITABLE_FUNCTION: string
export const TAG_CREATE_EPROP_FUNCTION: string
export const TAG_CREATE_TYPE: string
export const TAG_CREATE_WIDGET_FUNCTION: string
export const TAG_CUSTOM_LAYOUT: string
export const TAG_DEEP_POST_CREATE_FUNCTION: string
export const TAG_DEFAULT: string
export const TAG_DEFAULT_HEIGHT: string
export const TAG_DEFAULT_PALETTE_STATE: string
export const TAG_DEFAULT_WIDTH: string
export const TAG_DEPENDS: string
export const TAG_DEPENDS_FUNCTION: string
export const TAG_DEPRECATED: string
export const TAG_DEPRECATED_SINCE: string
export const TAG_DESTROY_OBJECT_FUNCTION: string
export const TAG_DISABLED: string
export const TAG_DISPLAYABLE_VALUES: string
export const TAG_DOMAIN: string
export const TAG_EDITABLE: string
export const TAG_EVENT_HANDLER_CONNECTED: string
export const TAG_EXPANDED: string
export const TAG_FALSE: string
export const TAG_GENERIC_NAME: string
export const TAG_GET_CHILDREN_FUNCTION: string
export const TAG_GET_FUNCTION: string
export const TAG_GET_INTERNAL_CHILD_FUNCTION: string
export const TAG_GET_TYPE_FUNCTION: string
export const TAG_GLADE_CATALOG: string
export const TAG_GLADE_WIDGET_CLASS: string
export const TAG_GLADE_WIDGET_CLASSES: string
export const TAG_GLADE_WIDGET_CLASS_REF: string
export const TAG_GLADE_WIDGET_GROUP: string
export const TAG_HAS_CONTEXT: string
export const TAG_ICON_NAME: string
export const TAG_ICON_PREFIX: string
export const TAG_ID: string
export const TAG_IGNORE: string
export const TAG_IMPORTANT: string
export const TAG_INIT_FUNCTION: string
export const TAG_INTERNAL_CHILDREN: string
export const TAG_KEY: string
export const TAG_LIBRARY: string
export const TAG_MAX_VALUE: string
export const TAG_MIN_VALUE: string
export const TAG_MULTILINE: string
export const TAG_NAME: string
export const TAG_NEEDS_SYNC: string
export const TAG_NICK: string
export const TAG_NO: string
export const TAG_OPTIONAL: string
export const TAG_OPTIONAL_DEFAULT: string
export const TAG_PACKING_ACTIONS: string
export const TAG_PACKING_DEFAULTS: string
export const TAG_PACKING_PROPERTIES: string
export const TAG_PARENT: string
export const TAG_PARENTLESS_WIDGET: string
export const TAG_PARENT_CLASS: string
export const TAG_POST_CREATE_FUNCTION: string
export const TAG_PROPERTIES: string
export const TAG_PROPERTY: string
export const TAG_QUERY: string
export const TAG_READ_CHILD_FUNCTION: string
export const TAG_READ_WIDGET_FUNCTION: string
export const TAG_REMOVE_CHILD_FUNCTION: string
export const TAG_REPLACE_CHILD_FUNCTION: string
export const TAG_RESOURCE: string
export const TAG_SAVE: string
export const TAG_SAVE_ALWAYS: string
export const TAG_SET_FUNCTION: string
export const TAG_SIGNAL: string
export const TAG_SIGNALS: string
export const TAG_SPEC: string
export const TAG_SPECIAL_CHILD_TYPE: string
export const TAG_SPECIFICATIONS: string
export const TAG_STOCK: string
export const TAG_STOCK_ICON: string
export const TAG_STRING_FROM_VALUE_FUNCTION: string
export const TAG_TARGETABLE: string
export const TAG_TEMPLATE_PREFIX: string
export const TAG_THEMED_ICON: string
export const TAG_TITLE: string
export const TAG_TOOLTIP: string
export const TAG_TOPLEVEL: string
export const TAG_TRANSFER_ON_PASTE: string
export const TAG_TRANSLATABLE: string
export const TAG_TRUE: string
export const TAG_TYPE: string
export const TAG_USE_PLACEHOLDERS: string
export const TAG_VALUE: string
export const TAG_VALUE_TYPE: string
export const TAG_VERIFY_FUNCTION: string
export const TAG_VERSION: string
export const TAG_VERSION_SINCE: string
export const TAG_VISIBLE: string
export const TAG_WEIGHT: string
export const TAG_WRITE_CHILD_FUNCTION: string
export const TAG_WRITE_WIDGET_AFTER_FUNCTION: string
export const TAG_WRITE_WIDGET_FUNCTION: string
export const TAG_YES: string
export const UNNAMED_PREFIX: string
/**
 * Class prefix used for abstract classes (ie GtkBin -> GladeInstantiableGtkBin)
 */
export const WIDGET_ADAPTOR_INSTANTIABLE_PREFIX: string
export const XML_TAG_AFTER: string
export const XML_TAG_CHILD: string
export const XML_TAG_CLASS: string
export const XML_TAG_FILENAME: string
export const XML_TAG_HANDLER: string
export const XML_TAG_I18N_TRUE: string
export const XML_TAG_ID: string
export const XML_TAG_INTERNAL_CHILD: string
export const XML_TAG_LIB: string
export const XML_TAG_NAME: string
export const XML_TAG_OBJECT: string
export const XML_TAG_PACKING: string
export const XML_TAG_PLACEHOLDER: string
export const XML_TAG_PROJECT: string
export const XML_TAG_PROPERTY: string
export const XML_TAG_REQUIRES: string
export const XML_TAG_SIGNAL: string
export const XML_TAG_SIGNAL_FALSE: string
export const XML_TAG_SIGNAL_TRUE: string
export const XML_TAG_SOURCE: string
export const XML_TAG_SOURCES: string
export const XML_TAG_STOCK_ID: string
export const XML_TAG_SWAPPED: string
export const XML_TAG_TEMPLATE: string
export const XML_TAG_TYPE: string
export const XML_TAG_TYPE_FUNC: string
export const XML_TAG_VERSION: string
export const XML_TAG_WIDGET: string
/**
 * Adds a new path to the list of path to look catalogs for.
 * @param path the new path containing catalogs
 */
export function catalog_add_path(path: string): void
/**
 * Destroy and free all resources related with every loaded catalog.
 */
export function catalog_destroy_all(): void
export function catalog_get_extra_paths(): string[]
export function catalog_is_loaded(name: string): boolean
/**
 * Loads all available catalogs in the system.
 * First loads catalogs from GLADE_ENV_CATALOG_PATH,
 * then from glade_app_get_catalogs_dir() and finally from paths specified with
 * glade_catalog_add_path()
 * @returns the list of loaded GladeCatalog *
 */
export function catalog_load_all(): Catalog[]
/**
 * Remove path from the list of path to look catalogs for.
 * %NULL to remove all paths.
 * @param path the new path containing catalogs or %NULL to remove all of them
 */
export function catalog_remove_path(path: string | null): void
export function cursor_get_add_widget_pixbuf(): GdkPixbuf.Pixbuf
/**
 * Initializes cursors for use with glade_cursor_set().
 */
export function cursor_init(): void
/**
 * Sets the cursor for `window` to something appropriate based on `type`.
 * (also sets the cursor on all visible project widgets)
 * @param project 
 * @param window a #GdkWindow
 * @param type a #GladeCursorType
 */
export function cursor_set(project: Project, window: Gdk.Window, type: CursorType): void
export function displayable_value_is_disabled(type: GObject.GType, value: string): boolean
export function displayable_value_set_disabled(type: GObject.GType, value: string, disabled: boolean): void
export function get_debug_flags(): number
export function get_displayable_value(type: GObject.GType, value: string): string
export function get_value_from_displayable(type: GObject.GType, displayabe: string): string
/**
 * Initialization function for libgladeui (not #GladeApp)
 * It builds paths, bind text domain, and register icons
 */
export function init(): void
export function init_debug_flags(): void
export function param_spec_objects(name: string, nick: string, blurb: string, accepted_type: GObject.GType, flags: GObject.ParamFlags): GObject.ParamSpec
export function propert_get_insensitive_tooltip(property: Property): string
export function property_def_get_default_from_spec(spec: GObject.ParamSpec): any
export function property_def_make_flags_from_string(type: GObject.GType, string: string): number
/**
 * This function assigns "weight" to each property in its natural order staring from 1.
 * If parent is 0 weight will be set for every #GladePropertyDef in the list.
 * This function will not override weight if it is already set (weight >= 0.0)
 * @param properties a list of #GladePropertyDef
 * @param parent the #GType of the parent
 */
export function property_def_set_weights(properties: PropertyDef[], parent: GObject.GType): void
/**
 * Updates the `property_def_ref` with the contents of the node in the xml
 * file. Only the values found in the xml file are overridden.
 * @param node the property node
 * @param object_type the #GType of the owning object
 * @param property_def_ref a pointer to the property class
 * @param domain the domain to translate catalog strings from
 * @returns %TRUE on success. @property_def_ref is set to NULL if the property          has Disabled="TRUE".
 */
export function property_def_update_from_node(node: XmlNode, object_type: GObject.GType, property_def_ref: PropertyDef | null, domain: string): [ /* returnType */ boolean, /* property_def_ref */ PropertyDef | null ]
export function register_displayable_value(type: GObject.GType, value: string, domain: string, string: string): void
export function register_translated_value(type: GObject.GType, value: string, string: string): void
/**
 * Sets up a log handler to manage all %G_LOG_LEVEL_MASK errors of domain:
 * GLib, GLib-GObject, Gtk, Gdk, and domainless.
 */
export function setup_log_handlers(): void
export function standard_boolean_spec(): GObject.ParamSpec
export function standard_float_spec(): GObject.ParamSpec
export function standard_gdkcolor_spec(): GObject.ParamSpec
export function standard_int_spec(): GObject.ParamSpec
/**
 * This was developed for the purpose of holding a list
 * of 'targets' in an AtkRelation (we are setting it up
 * as a property)
 * @returns a #GParamSpec describing a list of #GObject
 */
export function standard_objects_spec(): GObject.ParamSpec
export function standard_pixbuf_spec(): GObject.ParamSpec
export function standard_stock_append_prefix(prefix: string): void
export function standard_stock_image_spec(): GObject.ParamSpec
export function standard_stock_spec(): GObject.ParamSpec
export function standard_string_spec(): GObject.ParamSpec
export function standard_strv_spec(): GObject.ParamSpec
export function standard_uint_spec(): GObject.ParamSpec
export function type_has_displayable_values(type: GObject.GType): boolean
export function util_canonical_path(path: string): string | null
export function util_check_and_warn_scrollable(parent: Widget, child_adaptor: WidgetAdaptor, parent_widget: Gtk.Widget): boolean
/**
 * This is a #GCompareFunc that compares the labels of two stock items,
 * ignoring any '_' characters. It isn't particularly efficient.
 * @param a a #gconstpointer to a #GtkStockItem
 * @param b a #gconstpointer to a #GtkStockItem
 * @returns negative value if @a < @b; zero if @a = @b;          positive value if @a > @b
 */
export function util_compare_stock_labels(a: any | null, b: any | null): number
/**
 * Use this to itterate over all children in a GtkContainer,
 * as it used _forall() instead of _foreach() (and the GTK+ version
 * of this function is simply not exposed).
 * @param container a #GtkContainer
 * @returns a #GList giving the contents of @container
 */
export function util_container_get_all_children(container: Gtk.Container): Gtk.Widget[]
export function util_count_placeholders(parent: Widget): number
/**
 * Duplicates `name,` but the copy has two underscores in place of any single
 * underscore in the original.
 * @param name a string
 * @returns a newly allocated string
 */
export function util_duplicate_underscores(name: string): string | null
export function util_file_dialog_new(title: string, project: Project, parent: Gtk.Window, action: UtilFileDialogType): Gtk.Widget
/**
 * Checks whether the file at `path` is writeable
 * @param path the path to the file
 * @returns TRUE if file is writeable
 */
export function util_file_is_writeable(path: string): boolean
export function util_filename_to_icon_name(value: string): string | null
/**
 * Looks through `model` for the #GtkTreeIter corresponding to
 * `findme` under `column`.
 * @param model a #GtkTreeModel
 * @param findme a #GladeWidget
 * @param column a #gint
 * @returns a newly allocated #GtkTreeIter from @model corresponding to @findme which should be freed with gtk_tree_iter_free()
 */
export function util_find_iter_by_widget(model: Gtk.TreeModel, findme: Widget, column: number): Gtk.TreeIter
/**
 * Creates an image displaying the devhelp icon.
 * @param size the preferred icon size
 * @returns a #GtkImage
 */
export function util_get_devhelp_icon(size: Gtk.IconSize): Gtk.Widget
/**
 * Gets the UTC modification time of file `filename`.
 * @param filename A filename
 * @returns The mtime of the file, or %0 if the file attributes          could not be read.
 */
export function util_get_file_mtime(filename: string): number
export function util_get_placeholder_from_pointer(container: Gtk.Container): Gtk.Widget
/**
 * Returns the type using the "get type" function name based on `name`.
 * If the `have_func` flag is true,`name` is used directly, otherwise the get-type
 * function is contrived from `name` then used.
 * @param name the name of the #GType - like 'GtkWidget' or a "get-type" function.
 * @param have_func function-name flag -- true if the name is a "get-type" function.
 * @returns the new #GType
 */
export function util_get_type_from_name(name: string, have_func: boolean): GObject.GType
export function util_have_devhelp(): boolean
export function util_icon_name_to_filename(value: string): string | null
export function util_object_is_loading(object: GObject.Object): boolean
/**
 * Return a usable version of a property identifier as found
 * in a freshly parserd #GladeInterface
 * @param str a string
 */
export function util_read_prop_name(str: string): string | null
export function util_remove_scroll_events(widget: Gtk.Widget): void
/**
 * Replaces each occurrence of the character `a` in `str` to `b`.
 * @param str a string
 * @param a a #gchar
 * @param b a #gchar
 */
export function util_replace(str: string | null, a: number, b: number): void
export function util_search_devhelp(book: string, page: string, search: string): void
/**
 * Portable function for showing an URL `url` in a web browser.
 * @param url An URL to display
 * @returns TRUE if a web browser was successfully launched, or FALSE
 */
export function util_url_show(url: string): boolean
/**
 * Parse a boolean value
 * @param string the string to convert
 * @returns %TRUE if there was an error on the conversion, %FALSE otherwise.
 */
export function utils_boolean_from_string(string: string): [ /* returnType */ boolean, /* value */ boolean ]
export function utils_cairo_draw_line(cr: cairo.Context, color: Gdk.Color, x1: number, y1: number, x2: number, y2: number): void
export function utils_cairo_draw_rectangle(cr: cairo.Context, color: Gdk.Color, filled: boolean, x: number, y: number, width: number, height: number): void
export function utils_enum_string_from_value(enum_type: GObject.GType, value: number): string | null
export function utils_enum_string_from_value_displayable(flags_type: GObject.GType, value: number): string | null
export function utils_enum_value_from_string(enum_type: GObject.GType, strval: string): number
export function utils_flags_string_from_value(enum_type: GObject.GType, value: number): string | null
export function utils_flags_string_from_value_displayable(flags_type: GObject.GType, value: number): string | null
export function utils_flags_value_from_string(enum_type: GObject.GType, strval: string): number
/**
 * Get's the pointer position relative to `widget,` while `window` and `device`
 * are not absolutely needed, they should be passed wherever possible.
 * @param widget The widget to get the mouse position relative for
 * @param window The window of the current event, or %NULL
 * @param device The device, if not specified, the current event will be expected to have a `device`.
 * @param x The location to store the mouse pointer X position
 * @param y The location to store the mouse pointer Y position
 */
export function utils_get_pointer(widget: Gtk.Widget, window: Gdk.Window, device: Gdk.Device, x: number, y: number): void
export function utils_get_pspec_from_funcname(funcname: string): GObject.ParamSpec | null
/**
 * This function is meant to be attached to key-press-event of a toplevel,
 * it simply allows the window contents to treat key events /before/
 * accelerator keys come into play (this way widgets dont get deleted
 * when cutting text in an entry etc.).
 * Creates a liststore suitable for comboboxes and such to
 * chose from a variety of types.
 * @param win a #GtkWindow
 * @param event the #GdkEventKey
 * @param user_data unused
 * @returns whether the event was handled
 */
export function utils_hijack_key_press(win: Gtk.Window, event: Gdk.EventKey, user_data: any | null): number
/**
 * Creates a liststore suitable for comboboxes and such to
 * chose from a variety of types.
 * @param enum_type A #GType
 * @param include_empty whether to prepend an "Unset" slot
 * @returns A new #GtkListStore
 */
export function utils_liststore_from_enum_type(enum_type: GObject.GType, include_empty: boolean): Gtk.ListStore
/**
 * Render an icon representing the pointer mode.
 * Best view with sizes bigger than GTK_ICON_SIZE_LARGE_TOOLBAR.
 * @param mode the #GladePointerMode to render as icon
 * @param size icon size
 * @returns the rendered #GdkPixbuf
 */
export function utils_pointer_mode_render_icon(mode: PointerMode, size: Gtk.IconSize): GdkPixbuf.Pixbuf
export function utils_replace_home_dir_with_tilde(path: string): string | null
/**
 * Serializes #GValue into a string
 * (using glade conversion routines)
 * @param value a #GValue to convert
 * @returns A newly allocated string
 */
export function utils_string_from_value(value: any): string | null
/**
 * Allocates and sets a #GValue of type `type`
 * set to `string` (using glade conversion routines)
 * @param type a #GType to convert with
 * @param string the string to convert
 * @param project the #GladeProject to look for formats of object names when needed
 * @returns A newly allocated and set #GValue
 */
export function utils_value_from_string(type: GObject.GType, string: string, project: Project): any
/**
 * Dump the XML string from the context.
 * @param context a #GladeXmlContext
 * @returns the XML string, free the allocated memory with g_free() after use
 */
export function xml_dump_from_context(context: XmlContext): string | null
export function xml_get_boolean(node: XmlNode, name: string, _default: boolean): boolean
/**
 * Gets a string containing the content of `node_in`.
 * @param node_in a #GladeXmlNode
 * @returns A newly allocated string
 */
export function xml_get_content(node_in: XmlNode): string | null
export function xml_get_property_boolean(node_in: XmlNode, name: string, _default: boolean): boolean
export function xml_get_property_double(node_in: XmlNode, name: string, _default: number): number
export function xml_get_property_int(node_in: XmlNode, name: string, _default: number): number
export function xml_get_property_string(node_in: XmlNode, name: string): string | null
export function xml_get_property_string_required(node_in: XmlNode, name: string, xtra: string): string | null
/**
 * Get the list of targetable versions for a property
 * @param node_in a #GladeXmlNode
 * @param name a property name
 * @returns a list of #GladeTargetableVersion
 */
export function xml_get_property_targetable_versions(node_in: XmlNode, name: string): TargetableVersion[]
export function xml_get_property_version(node_in: XmlNode, name: string, major: number, minor: number): boolean
/**
 * Gets an integer value for a node either carried as an attribute or as
 * the content of a child.
 * @param node_in a #GladeXmlNode
 * @param name a string
 * @param val a pointer to an #int
 * @returns %TRUE if the node is found, %FALSE otherwise
 */
export function xml_get_value_int(node_in: XmlNode, name: string, val: number): boolean
/**
 * This is a wrapper around glade_xml_get_value_int(), only it emits
 * a g_warning() if `node` did not contain the requested tag
 * @param node a #GladeXmlNode
 * @param name a string
 * @param val a pointer to an #int
 * @returns %FALSE if @name is not in @node
 */
export function xml_get_value_int_required(node: XmlNode, name: string, val: number): boolean
export function xml_get_value_string(node: XmlNode, name: string): string | null
export function xml_get_value_string_required(node: XmlNode, name: string, xtra_info: string): string | null
export function xml_load_sym_from_node(node_in: XmlNode, module: GModule.Module, tagname: string | null, sym_location: any | null): boolean
export function xml_search_child(node: XmlNode, name: string): XmlNode
/**
 * just a small wrapper around glade_xml_search_child that displays
 * an error if the child was not found
 * @param tree A #GladeXmlNode
 * @param name the name of the child
 * @returns the requested #GladeXmlNode
 */
export function xml_search_child_required(tree: XmlNode, name: string): XmlNode | null
/**
 * Sets the content of `node` to `content`.
 * @param node_in a #GladeXmlNode
 * @param content a string
 */
export function xml_set_content(node_in: XmlNode, content: string): void
/**
 * Sets the property `name` in `node_in` to `val`
 * @param node_in a #GladeXmlNode
 * @param name a string
 * @param val a string
 */
export function xml_set_value(node_in: XmlNode, name: string, val: string): void
/**
 * This delegate function is used to catch actions from the core.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param action_path The action identifier in the action tree
 */
export interface ActionActivateFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, action_path: string): void
}
/**
 * This delegate function is used to create dynamically customized
 * submenus. Called only for actions that don't have children.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param action_path The action identifier in the action tree
 * @returns A newly created #GtkMenu or %NULL
 */
export interface ActionSubmenuFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, action_path: string): Gtk.Widget | null
}
/**
 * Called to add `child` to `container`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 */
export interface AddChildFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object): void
}
/**
 * Checks whether `child` can be added to `container`.
 * 
 * If `user_feedback` is %TRUE and `child` cannot be
 * added then this shows a notification dialog to the user
 * explaining why.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container A #GObject container
 * @param child A #GObject child
 * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
 * @returns whether @child can be added to @parent.
 */
export interface AddChildVerifyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean
}
/**
 * Called once at glade startup time for every catalog, catalogs
 * are initialized in order of dependencies.
 * @callback 
 * @param name The name of the catalog
 */
export interface CatalogInitFunc {
    (name: string): void
}
/**
 * This delegate function is used to catch packing actions from the core.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param object The #GObject
 * @param action_path The action identifier in the action tree
 */
export interface ChildActionActivateFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, object: GObject.Object, action_path: string): void
}
/**
 * Called to get the packing property `property_name`
 * on the `child` object of `container` into `value`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 * @param property_name The id of the property
 * @param value The `GValue`
 */
export interface ChildGetPropertyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: any): void
}
/**
 * Called to set the packing property `property_name` to `value`
 * on the `child` object of `container`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 * @param property_name The id of the property
 * @param value The `GValue`
 */
export interface ChildSetPropertyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: any): void
}
/**
 * This delegate function is always called whenever setting any
 * properties with the exception of load time, and copy/paste time
 * (basically the two places where we recreate a hierarchy that we
 * already know "works") its basically an optional backend provided
 * boundary checker for properties.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 * @param property_name The id of the property
 * @param value The `GValue`
 * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
 */
export interface ChildVerifyPropertyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, property_name: string, value: any): boolean
}
/**
 * This function is called to construct a GObject instance.
 * (for language bindings that may need to construct a wrapper
 * object).
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param n_parameters amount of construct parameters
 * @param parameters array of construct #GParameter args to create              the new object with.
 * @returns A newly created #GObject
 */
export interface ConstructObjectFunc {
    (adaptor: WidgetAdaptor, n_parameters: number, parameters: GObject.Parameter): GObject.Object
}
/**
 * Creates a GladeEditorProperty to edit `klass`
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param def The #GladePropertyDef to be edited
 * @param use_command whether to use the GladeCommand interface to commit property changes
 * @returns A newly created #GladeEditorProperty
 */
export interface CreateEPropFunc {
    (adaptor: WidgetAdaptor, def: PropertyDef, use_command: boolean): EditorProperty
}
/**
 * This is used to allow the backend to override the way an
 * editor page is layed out (note that editor widgets are created
 * on demand and not at startup).
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param type The #GladeEditorPageType
 * @returns A new #GladeEditable widget
 */
export interface CreateEditableFunc {
    (adaptor: WidgetAdaptor, type: EditorPageType): Editable
}
/**
 * Checks whether `widget` depends on `another` to be placed earlier in
 * the glade file.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param widget A #GladeWidget of the adaptor
 * @param another another #GladeWidget
 * @returns whether @widget depends on @another being parsed first in the resulting glade file.
 */
export interface DependsFunc {
    (adaptor: WidgetAdaptor, widget: Widget, another: Widget): boolean
}
/**
 * This function is called to break any additional references to
 * a GObject instance. Note that this function is not responsible
 * for calling g_object_unref() on `object,` the reference count
 * of `object` belongs to it's #GladeWidget wrapper.
 * 
 * The #GtkWidget adaptor will call gtk_widget_destroy() before
 * chaining up in this function.
 * 
 * If your adaptor adds any references in any way at
 * #GladePostCreateFunc time or #GladeConstructObjectFunc
 * time, then this function must be implemented to also
 * remove that reference.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The object to destroy
 */
export interface DestroyObjectFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object): void
}
/**
 * A function called to get `containers` children.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @returns A #GList of children
 */
export interface GetChildrenFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object): GObject.Object[]
}
/**
 * Called to lookup child in composite `object` parent by `internal_name`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param internal_name The string identifier of the internal object
 * @returns The internal #GObject
 */
export interface GetInternalFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, internal_name: string): GObject.Object | null
}
/**
 * Gets `value` on `object` for a given #GladePropertyDef
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param property_name The property identifier
 * @param value The #GValue
 */
export interface GetPropertyFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: any): void
}
/**
 * This function is called exactly once for any project object
 * instance and can be for any #GladeCreateReason.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param reason The #GladeCreateReason that `object` was created for
 */
export interface PostCreateFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, reason: CreateReason): void
}
/**
 * This function is called to update `widget` from `node`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param widget The #GladeWidget
 * @param node The #GladeXmlNode
 */
export interface ReadWidgetFunc {
    (adaptor: WidgetAdaptor, widget: Widget, node: XmlNode): void
}
/**
 * Called to remove `child` from `container`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 */
export interface RemoveChildFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object): void
}
/**
 * Called to swap placeholders with project objects
 * in containers.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param old_obj The old #GObject child
 * @param new_obj The new #GObject child
 */
export interface ReplaceChildFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void
}
/**
 * This delegate function is used to apply the property value on
 * the runtime object.
 * 
 * Sets `value` on `object` for a given #GladePropertyDef
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param property_name The property identifier
 * @param value The #GValue
 */
export interface SetPropertyFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: any): void
}
/**
 * For normal properties this is used to serialize
 * property values, for custom properties (only when new pspecs are
 * introduced) its needed for value comparisons in boxed pspecs
 * and also to update the UI for undo/redo items etc.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param def The #GladePropertyDef
 * @param value The #GValue to convert to a string
 * @returns A newly allocated string representation of @value
 */
export interface StringFromValueFunc {
    (adaptor: WidgetAdaptor, def: PropertyDef, value: any): string | null
}
/**
 * This delegate function is always called whenever setting any
 * properties with the exception of load time, and copy/paste time
 * (basically the two places where we recreate a hierarchy that we
 * already know "works") its basically an optional backend provided
 * boundary checker for properties.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param property_name The property identifier
 * @param value The #GValue
 * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
 */
export interface VerifyPropertyFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, property_name: string, value: any): boolean
}
/**
 * This function is called to fill in `node` from `widget`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param widget The #GladeWidget
 * @param context The #GladeXmlContext
 * @param node The #GladeXmlNode
 */
export interface WriteWidgetFunc {
    (adaptor: WidgetAdaptor, widget: Widget, context: XmlContext, node: XmlNode): void
}
export module Editable {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Editable extends Gtk.Widget {

    // Owm methods of Gladeui-2.0.Gladeui.Editable

    block(): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    loaded_widget(): Widget | null
    loading(): boolean
    /**
     * This only applies for the general page in the property
     * editor, editables that embed the #GladeEditorTable implementation
     * for the general page should use this to forward the message
     * to its embedded editable.
     * @param show_name Whether or not to show the name entry
     */
    set_show_name(show_name: boolean): void
    unblock(): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Editable

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * This only applies for the general page in the property
     * editor, editables that embed the #GladeEditorTable implementation
     * for the general page should use this to forward the message
     * to its embedded editable.
     * @virtual 
     * @param show_name Whether or not to show the name entry
     */
    vfunc_set_show_name(show_name: boolean): void

    // Class property signals of Gladeui-2.0.Gladeui.Editable

    connect(sigName: "notify::app-paintable", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Editable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Editable extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Editable

    static name: string
    static $gtype: GObject.GType<Editable>

    // Constructors of Gladeui-2.0.Gladeui.Editable

    constructor(config?: Editable.ConstructorProperties) 
    _init(config?: Editable.ConstructorProperties): void
}

export module AdaptorChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.AdaptorChooser

        project?: Project | null
    }

}

export interface AdaptorChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.AdaptorChooser

    project: Project

    // Owm methods of Gladeui-2.0.Gladeui.AdaptorChooser

    get_project(): Project
    set_project(project: Project): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of Gladeui-2.0.Gladeui.AdaptorChooser

    connect(sigName: "notify::project", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: AdaptorChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AdaptorChooser extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.AdaptorChooser

    static name: string
    static $gtype: GObject.GType<AdaptorChooser>

    // Constructors of Gladeui-2.0.Gladeui.AdaptorChooser

    constructor(config?: AdaptorChooser.ConstructorProperties) 
    constructor() 
    static new(): AdaptorChooser

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: AdaptorChooser.ConstructorProperties): void
}

export module App {

    // Signal callback interfaces

    /**
     * Signal callback interface for `doc-search`
     */
    export interface DocSearchSignalCallback {
        ($obj: App, arg1: string | null, arg2: string | null, arg3: string | null): void
    }

    /**
     * Signal callback interface for `signal-editor-created`
     */
    export interface SignalEditorCreatedSignalCallback {
        ($obj: App, signal_editor: GObject.Object): void
    }

    /**
     * Signal callback interface for `widget-adaptor-registered`
     */
    export interface WidgetAdaptorRegisteredSignalCallback {
        ($obj: App, adaptor: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface App {

    // Own fields of Gladeui-2.0.Gladeui.App

    parent_instance: GObject.Object

    // Own signals of Gladeui-2.0.Gladeui.App

    connect(sigName: "doc-search", callback: App.DocSearchSignalCallback): number
    connect_after(sigName: "doc-search", callback: App.DocSearchSignalCallback): number
    emit(sigName: "doc-search", arg1: string | null, arg2: string | null, arg3: string | null, ...args: any[]): void
    connect(sigName: "signal-editor-created", callback: App.SignalEditorCreatedSignalCallback): number
    connect_after(sigName: "signal-editor-created", callback: App.SignalEditorCreatedSignalCallback): number
    emit(sigName: "signal-editor-created", signal_editor: GObject.Object, ...args: any[]): void
    connect(sigName: "widget-adaptor-registered", callback: App.WidgetAdaptorRegisteredSignalCallback): number
    connect_after(sigName: "widget-adaptor-registered", callback: App.WidgetAdaptorRegisteredSignalCallback): number
    emit(sigName: "widget-adaptor-registered", adaptor: GObject.Object, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.App

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class App extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of Gladeui-2.0.Gladeui.App

    constructor(config?: App.ConstructorProperties) 
    constructor() 
    static new(): App
    _init(config?: App.ConstructorProperties): void
    static add_project(project: Project): void
    /**
     * Saves the #GKeyFile to "g_get_user_config_dir()/GLADE_CONFIG_FILENAME"
     * @returns 0 on success.
     */
    static config_save(): number
    /**
     * This function has to be called in an event handler for widget selection to work.
     * See gdk_event_handler_set()
     * @param event the event to process.
     * @returns true if the event was handled.
     */
    static do_event(event: Gdk.Event): boolean
    static get(): App
    static get_accel_group(): Gtk.AccelGroup
    static get_bin_dir(): string
    static get_catalog(name: string): Catalog | null
    static get_catalog_version(name: string): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    static get_catalogs(): Catalog[]
    static get_catalogs_dir(): string
    static get_clipboard(): Clipboard
    static get_config(): GLib.KeyFile
    static get_lib_dir(): string
    static get_locale_dir(): string
    static get_modules_dir(): string
    static get_pixmaps_dir(): string
    /**
     * Finds an open project with `path`
     * @param project_path The path of an open project
     * @returns A #GladeProject, or NULL if no such open project was found
     */
    static get_project_by_path(project_path: string): Project | null
    static get_projects(): Catalog[]
    static get_window(): Gtk.Widget
    static is_project_loaded(project_path: string): boolean
    static remove_project(project: Project): void
    /**
     * Searches for `book,` `page` and `search` in the documentation.
     * @param book the name of a book
     * @param page the name of a page
     * @param search the search query
     */
    static search_docs(book: string, page: string, search: string): void
    /**
     * Sets `accel_group` to app.
     * The acceleration group will made available for editor dialog windows
     * from the plugin backend.
     * @param accel_group a #GtkAccelGroup to set
     */
    static set_accel_group(accel_group: Gtk.AccelGroup): void
    /**
     * Set the window of the application
     * @param window a #GtkWidget
     */
    static set_window(window: Gtk.Widget): void
}

export module BaseEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `build-child`
     */
    export interface BuildChildSignalCallback {
        ($obj: BaseEditor, gparent: GObject.Object, type: GObject.GType): GObject.Object | null
    }

    /**
     * Signal callback interface for `change-type`
     */
    export interface ChangeTypeSignalCallback {
        ($obj: BaseEditor, object: GObject.Object, p0: GObject.GType): boolean
    }

    /**
     * Signal callback interface for `child-selected`
     */
    export interface ChildSelectedSignalCallback {
        ($obj: BaseEditor, gchild: GObject.Object): void
    }

    /**
     * Signal callback interface for `delete-child`
     */
    export interface DeleteChildSignalCallback {
        ($obj: BaseEditor, gparent: GObject.Object, gchild: GObject.Object): boolean
    }

    /**
     * Signal callback interface for `get-display-name`
     */
    export interface GetDisplayNameSignalCallback {
        ($obj: BaseEditor, gchild: GObject.Object): string | null
    }

    /**
     * Signal callback interface for `move-child`
     */
    export interface MoveChildSignalCallback {
        ($obj: BaseEditor, gparent: GObject.Object, gchild: GObject.Object): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.BaseEditor

        container?: GObject.Object | null
    }

}

export interface BaseEditor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.BaseEditor

    container: any

    // Own fields of Gladeui-2.0.Gladeui.BaseEditor

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.BaseEditor

    /**
     * Add `gchild` name and type property to `editor`
     * 
     * NOTE: This function is intended to be used in "child-selected" callbacks
     * @param gchild a #GladeWidget
     */
    add_default_properties(gchild: Widget): void
    /**
     * Add `gchild` editor of type `page` to the base editor
     * 
     * NOTE: This function is intended to be used in "child-selected" callbacks
     * @param gchild the #GladeWidget
     * @param page the #GladeEditorPageType of the desired page for `gchild`
     */
    add_editable(gchild: Widget, page: EditorPageType): void
    /**
     * Adds a new label to `editor`
     * 
     * NOTE: This function is intended to be used in "child-selected" callbacks
     * @param str the label string
     */
    add_label(str: string | null): void
    /**
     * This convenience function create a new dialog window and packs `editor` in it.
     * @param title the window title
     * @param help_markup the help text
     * @returns the newly created window
     */
    pack_new_window(title: string | null, help_markup: string | null): Gtk.Widget
    /**
     * Shows/hide `editor` 's signal editor
     * @param val whether to show the signal editor
     */
    set_show_signal_editor(val: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of Gladeui-2.0.Gladeui.BaseEditor

    vfunc_change_type(gchild: Widget, type: GObject.GType): boolean
    vfunc_child_selected(gchild: Widget): void
    vfunc_delete_child(parent: Widget, gchild: Widget): boolean
    vfunc_get_display_name(gchild: Widget): string | null
    vfunc_move_child(gparent: Widget, gchild: Widget): boolean

    // Own signals of Gladeui-2.0.Gladeui.BaseEditor

    connect(sigName: "build-child", callback: BaseEditor.BuildChildSignalCallback): number
    connect_after(sigName: "build-child", callback: BaseEditor.BuildChildSignalCallback): number
    emit(sigName: "build-child", gparent: GObject.Object, type: GObject.GType, ...args: any[]): void
    connect(sigName: "change-type", callback: BaseEditor.ChangeTypeSignalCallback): number
    connect_after(sigName: "change-type", callback: BaseEditor.ChangeTypeSignalCallback): number
    emit(sigName: "change-type", object: GObject.Object, p0: GObject.GType, ...args: any[]): void
    connect(sigName: "child-selected", callback: BaseEditor.ChildSelectedSignalCallback): number
    connect_after(sigName: "child-selected", callback: BaseEditor.ChildSelectedSignalCallback): number
    emit(sigName: "child-selected", gchild: GObject.Object, ...args: any[]): void
    connect(sigName: "delete-child", callback: BaseEditor.DeleteChildSignalCallback): number
    connect_after(sigName: "delete-child", callback: BaseEditor.DeleteChildSignalCallback): number
    emit(sigName: "delete-child", gparent: GObject.Object, gchild: GObject.Object, ...args: any[]): void
    connect(sigName: "get-display-name", callback: BaseEditor.GetDisplayNameSignalCallback): number
    connect_after(sigName: "get-display-name", callback: BaseEditor.GetDisplayNameSignalCallback): number
    emit(sigName: "get-display-name", gchild: GObject.Object, ...args: any[]): void
    connect(sigName: "move-child", callback: BaseEditor.MoveChildSignalCallback): number
    connect_after(sigName: "move-child", callback: BaseEditor.MoveChildSignalCallback): number
    emit(sigName: "move-child", gparent: GObject.Object, gchild: GObject.Object, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.BaseEditor

    connect(sigName: "notify::container", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::container", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: BaseEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BaseEditor extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.BaseEditor

    static name: string
    static $gtype: GObject.GType<BaseEditor>

    // Constructors of Gladeui-2.0.Gladeui.BaseEditor

    constructor(config?: BaseEditor.ConstructorProperties) 
    _init(config?: BaseEditor.ConstructorProperties): void
}

export module CellRendererIcon {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        ($obj: CellRendererIcon, object: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRendererPixbuf.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.CellRendererIcon

        activatable?: boolean | null
        active?: boolean | null
    }

}

export interface CellRendererIcon {

    // Own properties of Gladeui-2.0.Gladeui.CellRendererIcon

    activatable: boolean
    active: boolean

    // Own fields of Gladeui-2.0.Gladeui.CellRendererIcon

    parent_instance: Gtk.CellRendererPixbuf & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.CellRendererIcon

    get_activatable(): boolean
    get_active(): boolean
    set_activatable(setting: boolean): void
    set_active(setting: boolean): void

    // Own virtual methods of Gladeui-2.0.Gladeui.CellRendererIcon

    vfunc_activate(path: string): void

    // Overloads of vfunc_activate

    /**
     * Passes an activate event to the cell renderer for possible processing.
     * Some cell renderers may use events; for example, #GtkCellRendererToggle
     * toggles when it gets a mouse click.
     * @virtual 
     * @param event a #GdkEvent
     * @param widget widget that received the event
     * @param path widget-dependent string representation of the event location;    e.g. for #GtkTreeView, a string representation of #GtkTreePath
     * @param background_area background area as passed to gtk_cell_renderer_render()
     * @param cell_area cell area as passed to gtk_cell_renderer_render()
     * @param flags render flags
     * @returns %TRUE if the event was consumed/handled
     */
    vfunc_activate(event: Gdk.Event, widget: Gtk.Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean

    // Own signals of Gladeui-2.0.Gladeui.CellRendererIcon

    connect(sigName: "activate", callback: CellRendererIcon.ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: CellRendererIcon.ActivateSignalCallback): number
    emit(sigName: "activate", object: string | null, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.CellRendererIcon

    connect(sigName: "notify::activatable", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::follow-state", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::follow-state", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::follow-state", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-closed", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-expander-closed", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-expander-closed", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-open", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-expander-open", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-expander-open", ...args: any[]): void
    connect(sigName: "notify::stock-detail", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-detail", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-detail", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::stock-size", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-size", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-size", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: CellRendererIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CellRendererIcon extends Gtk.CellRendererPixbuf {

    // Own properties of Gladeui-2.0.Gladeui.CellRendererIcon

    static name: string
    static $gtype: GObject.GType<CellRendererIcon>

    // Constructors of Gladeui-2.0.Gladeui.CellRendererIcon

    constructor(config?: CellRendererIcon.ConstructorProperties) 
    constructor() 
    static new(): CellRendererIcon
    _init(config?: CellRendererIcon.ConstructorProperties): void
}

export module Clipboard {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Clipboard {

    // Own properties of Gladeui-2.0.Gladeui.Clipboard

    readonly has_selection: boolean
    readonly hasSelection: boolean

    // Own fields of Gladeui-2.0.Gladeui.Clipboard

    parent_instance: GObject.Object

    // Owm methods of Gladeui-2.0.Gladeui.Clipboard

    /**
     * Adds `widgets` to `clipboard`.
     * This increases the reference count of each #GladeWidget in `widgets`.
     * @param widgets a #GList of #GladeWidgets
     */
    add(widgets: Widget[]): void
    /**
     * Removes all widgets from the `clipboard`.
     */
    clear(): void
    get_has_selection(): boolean
    widgets(): Widget[]

    // Class property signals of Gladeui-2.0.Gladeui.Clipboard

    connect(sigName: "notify::has-selection", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Clipboard extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Clipboard

    static name: string
    static $gtype: GObject.GType<Clipboard>

    // Constructors of Gladeui-2.0.Gladeui.Clipboard

    constructor(config?: Clipboard.ConstructorProperties) 
    constructor() 
    static new(): Clipboard
    _init(config?: Clipboard.ConstructorProperties): void
}

export module Command {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Command {

    // Own fields of Gladeui-2.0.Gladeui.Command

    parent_instance: GObject.Object

    // Owm methods of Gladeui-2.0.Gladeui.Command

    /**
     * Merges `other` into `command,` so that `command` now
     * covers both commands and `other` can be dispensed with.
     * @param other another #GladeCommand
     */
    collapse(other: Command): void
    description(): string
    /**
     * Executes `command`
     * @returns whether the command was successfully executed
     */
    execute(): boolean
    group_id(): number
    /**
     * Undo the effects of `command`
     * @returns whether the command was successfully reversed
     */
    undo(): boolean
    /**
     * Checks whether `command` and `other` can be unified
     * to make one single command.
     * @param other another #GladeCommand
     * @returns whether they can be unified.
     */
    unifies(other: Command): boolean

    // Own virtual methods of Gladeui-2.0.Gladeui.Command

    /**
     * Merges `other` into `command,` so that `command` now
     * covers both commands and `other` can be dispensed with.
     * @virtual 
     * @param other another #GladeCommand
     */
    vfunc_collapse(other: Command): void
    /**
     * Executes `command`
     * @virtual 
     * @returns whether the command was successfully executed
     */
    vfunc_execute(): boolean
    /**
     * Undo the effects of `command`
     * @virtual 
     * @returns whether the command was successfully reversed
     */
    vfunc_undo(): boolean
    /**
     * Checks whether `command` and `other` can be unified
     * to make one single command.
     * @virtual 
     * @param other another #GladeCommand
     * @returns whether they can be unified.
     */
    vfunc_unifies(other: Command): boolean

    // Class property signals of Gladeui-2.0.Gladeui.Command

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Command extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Command

    static name: string
    static $gtype: GObject.GType<Command>

    // Constructors of Gladeui-2.0.Gladeui.Command

    constructor(config?: Command.ConstructorProperties) 
    _init(config?: Command.ConstructorProperties): void
    /**
     * Performs an add command on all widgets in `widgets` to `parent,` possibly
     * replacing `placeholder` (note toplevels don't need a parent; the active project
     * will be used when pasting toplevel objects).
     * Pasted widgets will persist packing properties from their cut/copy source
     * while newly added widgets will prefer packing defaults.
     * @param widgets a #GList
     * @param parent a #GladeWidget
     * @param placeholder a #GladePlaceholder
     * @param project a #GladeProject
     * @param pasting whether we are pasting an existing widget or creating a new one.
     */
    static add(widgets: Widget[], parent: Widget, placeholder: Placeholder, project: Project, pasting: boolean): void
    /**
     * TODO: write me
     * @param glade_widget a #GladeWidget
     * @param signal a #GladeSignal
     */
    static add_signal(glade_widget: Widget, signal: Signal): void
    /**
     * TODO: write me
     * @param glade_widget a #GladeWidget
     * @param old_signal a #GladeSignal
     * @param new_signal a #GladeSignal
     */
    static change_signal(glade_widget: Widget, old_signal: Signal, new_signal: Signal): void
    /**
     * Creates a new widget using `adaptor` and put in place of the `placeholder`
     * in the `project`
     * @param adaptor A #GladeWidgetAdaptor
     * @param parent the parent #GladeWidget to add the new widget to.
     * @param placeholder the placeholder which will be substituted by the widget
     * @param project the project his widget belongs to.
     * @returns the newly created widget.
     */
    static create(adaptor: WidgetAdaptor, parent: Widget | null, placeholder: Placeholder | null, project: Project): Widget
    /**
     * Removes the list of widgets and adds them to the clipboard.
     * @param widgets a #GList of #GladeWidgets
     */
    static cut(widgets: Widget[]): void
    /**
     * Performs a delete command on the list of widgets.
     * @param widgets a #GList of #GladeWidgets
     */
    static delete(widgets: Widget[]): void
    /**
     * Performs a drag-n-drop command, i.e. removes the list of widgets and adds them
     * to the new parent, possibly replacing `placeholder` (note toplevels dont need a
     * parent; the active project will be used when pasting toplevel objects).
     * @param widgets a #GList of #GladeWidget
     * @param parent a #GladeWidget
     * @param placeholder a #GladePlaceholder
     */
    static dnd(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null): void
    static get_group_depth(): number
    /**
     * Sets `locked` to be in a locked up state
     * spoken for by `widget,` locked widgets cannot
     * be removed from the project until unlocked.
     * @param widget A #GladeWidget
     * @param locked The #GladeWidget to lock
     */
    static lock_widget(widget: Widget, locked: Widget): void
    /**
     * Performs a paste command on all widgets in `widgets` to `parent,` possibly
     * replacing `placeholder` (note toplevels dont need a parent; the active project
     * will be used when pasting toplevel objects).
     * @param widgets a #GList of #GladeWidget
     * @param parent a #GladeWidget
     * @param placeholder a #GladePlaceholder
     * @param project a #GladeProject
     */
    static paste(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null, project: Project): void
    /**
     * Mark the end of a command group.
     */
    static pop_group(): void
    /**
     * TODO: write me
     * @param glade_widget a #GladeWidget
     * @param signal a #GladeSignal
     */
    static remove_signal(glade_widget: Widget, signal: Signal): void
    /**
     * Sets the i18n data on the property.
     * @param property a #GladeProperty
     * @param translatable a #gboolean
     * @param context a #const gchar *
     * @param comment a #const gchar *
     */
    static set_i18n(property: Property, translatable: boolean, context: string, comment: string): void
    static set_name(glade_widget: Widget, name: string): void
    /**
     * Sets `domain` as the translation domain for `project`.
     * @param project A #GladeProject
     * @param domain The translation domain for `project`
     */
    static set_project_domain(project: Project, domain: string): void
    /**
     * Sets the license agreement for `project`. It will be saved in the xml as comment.
     * @param project A #GladeProject
     * @param license License of `project`
     */
    static set_project_license(project: Project, license: string): void
    /**
     * Sets a resource path `project`.
     * @param project A #GladeProject
     * @param path path to load resources from.
     */
    static set_project_resource_path(project: Project, path: string): void
    /**
     * Sets the target of `catalog` to `major`.`minor` in `project`.
     * @param project A #GladeProject
     * @param catalog The name of the catalog to set the project's target for
     * @param major The new major version of `catalog` to target
     * @param minor The new minor version of `catalog` to target
     */
    static set_project_target(project: Project, catalog: string, major: number, minor: number): void
    /**
     * Sets `widget` to be the template widget in `project`.
     * @param project A #GladeProject
     * @param widget The #GladeWidget to make template
     */
    static set_project_template(project: Project, widget: Widget): void
    static set_properties_list(project: Project, props: Property[]): void
    /**
     * Enables or disables `property`.
     * 
     * `property` must be an optional property.
     * @param property An optional #GladeProperty
     * @param enabled Whether the property should be enabled
     */
    static set_property_enabled(property: Property, enabled: boolean): void
    static set_property_value(property: Property, value: any): void
    /**
     * Unlocks `widget` so that it can be removed
     * from the project again
     * @param widget A #GladeWidget
     */
    static unlock_widget(widget: Widget): void
}

export module DesignView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.DesignView

        project?: Project | null
    }

}

export interface DesignView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.DesignView

    readonly project: Project

    // Own fields of Gladeui-2.0.Gladeui.DesignView

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.DesignView

    get_project(): Project

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of Gladeui-2.0.Gladeui.DesignView

    connect(sigName: "notify::project", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DesignView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DesignView extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.DesignView

    static name: string
    static $gtype: GObject.GType<DesignView>

    // Constructors of Gladeui-2.0.Gladeui.DesignView

    constructor(config?: DesignView.ConstructorProperties) 
    constructor(project: Project) 
    static new(project: Project): DesignView

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: DesignView.ConstructorProperties): void
    static get_from_project(project: Project): DesignView | null
}

export module EPropBool {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropBool extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropBool

    connect(sigName: "notify::custom-text", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropBool extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropBool

    static name: string
    static $gtype: GObject.GType<EPropBool>

    // Constructors of Gladeui-2.0.Gladeui.EPropBool

    constructor(config?: EPropBool.ConstructorProperties) 
    _init(config?: EPropBool.ConstructorProperties): void
}

export module EPropCheck {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropCheck extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropCheck

    connect(sigName: "notify::custom-text", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropCheck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropCheck extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropCheck

    static name: string
    static $gtype: GObject.GType<EPropCheck>

    // Constructors of Gladeui-2.0.Gladeui.EPropCheck

    constructor(config?: EPropCheck.ConstructorProperties) 
    _init(config?: EPropCheck.ConstructorProperties): void
}

export module EPropColor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropColor extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropColor

    connect(sigName: "notify::custom-text", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropColor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropColor extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropColor

    static name: string
    static $gtype: GObject.GType<EPropColor>

    // Constructors of Gladeui-2.0.Gladeui.EPropColor

    constructor(config?: EPropColor.ConstructorProperties) 
    _init(config?: EPropColor.ConstructorProperties): void
}

export module EPropEnum {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropEnum extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropEnum

    connect(sigName: "notify::custom-text", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropEnum extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropEnum

    static name: string
    static $gtype: GObject.GType<EPropEnum>

    // Constructors of Gladeui-2.0.Gladeui.EPropEnum

    constructor(config?: EPropEnum.ConstructorProperties) 
    _init(config?: EPropEnum.ConstructorProperties): void
}

export module EPropFlags {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropFlags extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropFlags

    connect(sigName: "notify::custom-text", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropFlags, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropFlags extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropFlags

    static name: string
    static $gtype: GObject.GType<EPropFlags>

    // Constructors of Gladeui-2.0.Gladeui.EPropFlags

    constructor(config?: EPropFlags.ConstructorProperties) 
    _init(config?: EPropFlags.ConstructorProperties): void
}

export module EPropNamedIcon {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropNamedIcon extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropNamedIcon

    connect(sigName: "notify::custom-text", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropNamedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropNamedIcon extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropNamedIcon

    static name: string
    static $gtype: GObject.GType<EPropNamedIcon>

    // Constructors of Gladeui-2.0.Gladeui.EPropNamedIcon

    constructor(config?: EPropNamedIcon.ConstructorProperties) 
    _init(config?: EPropNamedIcon.ConstructorProperties): void
}

export module EPropNumeric {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropNumeric extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropNumeric

    connect(sigName: "notify::custom-text", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropNumeric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropNumeric extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropNumeric

    static name: string
    static $gtype: GObject.GType<EPropNumeric>

    // Constructors of Gladeui-2.0.Gladeui.EPropNumeric

    constructor(config?: EPropNumeric.ConstructorProperties) 
    _init(config?: EPropNumeric.ConstructorProperties): void
}

export module EPropObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropObject extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropObject

    connect(sigName: "notify::custom-text", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropObject extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropObject

    static name: string
    static $gtype: GObject.GType<EPropObject>

    // Constructors of Gladeui-2.0.Gladeui.EPropObject

    constructor(config?: EPropObject.ConstructorProperties) 
    _init(config?: EPropObject.ConstructorProperties): void
}

export module EPropObjects {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropObjects extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropObjects

    connect(sigName: "notify::custom-text", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropObjects, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropObjects extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropObjects

    static name: string
    static $gtype: GObject.GType<EPropObjects>

    // Constructors of Gladeui-2.0.Gladeui.EPropObjects

    constructor(config?: EPropObjects.ConstructorProperties) 
    _init(config?: EPropObjects.ConstructorProperties): void
}

export module EPropText {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropText extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropText

    connect(sigName: "notify::custom-text", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropText extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropText

    static name: string
    static $gtype: GObject.GType<EPropText>

    // Constructors of Gladeui-2.0.Gladeui.EPropText

    constructor(config?: EPropText.ConstructorProperties) 
    _init(config?: EPropText.ConstructorProperties): void
}

export module EPropUnichar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropUnichar extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent_instance: Gtk.Box & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Conflicting methods

    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Class property signals of Gladeui-2.0.Gladeui.EPropUnichar

    connect(sigName: "notify::custom-text", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EPropUnichar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EPropUnichar extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropUnichar

    static name: string
    static $gtype: GObject.GType<EPropUnichar>

    // Constructors of Gladeui-2.0.Gladeui.EPropUnichar

    constructor(config?: EPropUnichar.ConstructorProperties) 
    _init(config?: EPropUnichar.ConstructorProperties): void
}

export module Editor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Editor

        show_boder?: boolean | null
        show_class_field?: boolean | null
        widget?: Widget | null
        showBoder?: boolean | null
        showClassField?: boolean | null
    }

}

export interface Editor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.Editor

    readonly class_field: string | null
    readonly classField: string | null
    show_boder: boolean
    showBoder: boolean
    show_class_field: boolean
    showClassField: boolean
    readonly show_info: boolean
    readonly showInfo: boolean
    readonly signal_editor: SignalEditor
    readonly signalEditor: SignalEditor
    widget: any

    // Own fields of Gladeui-2.0.Gladeui.Editor

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.Editor

    hide_class_field(): void
    hide_info(): void
    /**
     * Load `widget` into `editor`. If `widget` is %NULL, clear the editor.
     * @param widget a #GladeWidget
     */
    load_widget(widget: Widget): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of Gladeui-2.0.Gladeui.Editor

    connect(sigName: "notify::class-field", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-field", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-field", ...args: any[]): void
    connect(sigName: "notify::show-boder", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-boder", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-boder", ...args: any[]): void
    connect(sigName: "notify::show-class-field", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-class-field", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-class-field", ...args: any[]): void
    connect(sigName: "notify::show-info", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-info", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-info", ...args: any[]): void
    connect(sigName: "notify::signal-editor", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-editor", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::signal-editor", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Editor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Editor extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.Editor

    static name: string
    static $gtype: GObject.GType<Editor>

    // Constructors of Gladeui-2.0.Gladeui.Editor

    constructor(config?: Editor.ConstructorProperties) 
    constructor() 
    static new(): Editor

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Editor.ConstructorProperties): void
    /**
     * This convenience function creates a new dialog window to edit `widget`
     * specifically.
     * @param widget a #GladeWidget
     * @returns the newly created dialog window
     */
    static dialog_for_widget(widget: Widget): Gtk.Widget
    static query_dialog(widget: Widget): boolean
    static reset_dialog_run(parent: Gtk.Widget, gwidget: Widget): void
}

export module EditorProperty {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commit`
     */
    export interface CommitSignalCallback {
        ($obj: EditorProperty, arg1: any | null): void
    }

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        ($obj: EditorProperty, arg1: Property): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.EditorProperty

        custom_text?: string | null
        disable_check?: boolean | null
        property_def?: any | null
        use_command?: boolean | null
        customText?: string | null
        disableCheck?: boolean | null
        propertyDef?: any | null
        useCommand?: boolean | null
    }

}

export interface EditorProperty extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.EditorProperty

    custom_text: string | null
    customText: string | null
    disable_check: boolean
    disableCheck: boolean
    readonly property_def: any
    readonly propertyDef: any
    use_command: boolean
    useCommand: boolean

    // Own fields of Gladeui-2.0.Gladeui.EditorProperty

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.EditorProperty

    /**
     * Commits `value` to the property currently being edited by `eprop`.
     * @param value The #GValue to commit
     */
    commit(value: any): void
    commit_no_callback(value: any): void
    get_custom_text(): string
    get_disable_check(): boolean
    get_item_label(): Gtk.Widget
    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    get_property_def(): PropertyDef
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Convenience function to load the appropriate #GladeProperty into
     * `eprop` from `widget`
     * @param widget A #GladeWidget
     */
    load_by_widget(widget: Widget): void
    loading(): boolean
    set_custom_text(custom_text: string): void
    set_disable_check(disable_check: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of Gladeui-2.0.Gladeui.EditorProperty

    vfunc_changed(property: Property): any | null
    /**
     * Commits `value` to the property currently being edited by `eprop`.
     * @virtual 
     * @param value The #GValue to commit
     */
    vfunc_commit(value: any): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    vfunc_load(property: Property): void

    // Overloads of vfunc_load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    vfunc_load(widget: Widget): void

    // Own signals of Gladeui-2.0.Gladeui.EditorProperty

    connect(sigName: "commit", callback: EditorProperty.CommitSignalCallback): number
    connect_after(sigName: "commit", callback: EditorProperty.CommitSignalCallback): number
    emit(sigName: "commit", arg1: any | null, ...args: any[]): void
    connect(sigName: "value-changed", callback: EditorProperty.ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: EditorProperty.ValueChangedSignalCallback): number
    emit(sigName: "value-changed", arg1: Property, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.EditorProperty

    connect(sigName: "notify::custom-text", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-def", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EditorProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EditorProperty extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.EditorProperty

    static name: string
    static $gtype: GObject.GType<EditorProperty>

    // Constructors of Gladeui-2.0.Gladeui.EditorProperty

    constructor(config?: EditorProperty.ConstructorProperties) 
    _init(config?: EditorProperty.ConstructorProperties): void
    /**
     * Runs a dialog and updates the provided values.
     * @param parent The parent widget for the dialog.
     * @param text A read/write pointer to the text property
     * @param context A read/write pointer to the translation context
     * @param comment A read/write pointer to the translator comment
     * @param translatable A read/write pointer to the translatable setting]
     * @returns %TRUE if OK was selected.
     */
    static show_i18n_dialog(parent: Gtk.Widget, text: string | null, context: string | null, comment: string | null, translatable: boolean): boolean
    static show_object_dialog(project: Project, title: string, parent: Gtk.Widget, object_type: GObject.GType, exception: Widget, object: Widget): boolean
    static show_resource_dialog(project: Project, parent: Gtk.Widget, filename: string | null): boolean
}

export module EditorSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

export interface EditorSkeleton extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Gladeui-2.0.Gladeui.EditorSkeleton

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.EditorSkeleton

    add_editor(editor: Editable): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of Gladeui-2.0.Gladeui.EditorSkeleton

    connect(sigName: "notify::baseline-position", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EditorSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EditorSkeleton extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.EditorSkeleton

    static name: string
    static $gtype: GObject.GType<EditorSkeleton>

    // Constructors of Gladeui-2.0.Gladeui.EditorSkeleton

    constructor(config?: EditorSkeleton.ConstructorProperties) 
    constructor() 
    static new(): EditorSkeleton

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: EditorSkeleton.ConstructorProperties): void
}

export module EditorTable {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.EditorTable

        page_type?: EditorPageType | null
        pageType?: EditorPageType | null
    }

}

export interface EditorTable extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.EditorTable

    readonly page_type: EditorPageType
    readonly pageType: EditorPageType

    // Own fields of Gladeui-2.0.Gladeui.EditorTable

    parent_instance: Gtk.Grid & GObject.InitiallyUnowned

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of Gladeui-2.0.Gladeui.EditorTable

    connect(sigName: "notify::page-type", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-type", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-type", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: EditorTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EditorTable extends Gtk.Grid {

    // Own properties of Gladeui-2.0.Gladeui.EditorTable

    static name: string
    static $gtype: GObject.GType<EditorTable>

    // Constructors of Gladeui-2.0.Gladeui.EditorTable

    constructor(config?: EditorTable.ConstructorProperties) 
    /**
     * Creates a new #GladeEditorTable.
     * @constructor 
     * @param adaptor A #GladeWidgetAdaptor
     * @param type The #GladeEditorPageType
     * @returns a new #GladeEditorTable
     */
    constructor(adaptor: WidgetAdaptor, type: EditorPageType) 
    /**
     * Creates a new #GladeEditorTable.
     * @constructor 
     * @param adaptor A #GladeWidgetAdaptor
     * @param type The #GladeEditorPageType
     * @returns a new #GladeEditorTable
     */
    static new(adaptor: WidgetAdaptor, type: EditorPageType): EditorTable

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: EditorTable.ConstructorProperties): void
}

export module Inspector {

    // Signal callback interfaces

    /**
     * Signal callback interface for `item-activated`
     */
    export interface ItemActivatedSignalCallback {
        ($obj: Inspector): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        ($obj: Inspector): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Inspector

        project?: Project | null
    }

}

export interface Inspector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.Inspector

    project: Project

    // Own fields of Gladeui-2.0.Gladeui.Inspector

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.Inspector

    /**
     * Note that the method does not ref the returned #GladeProject.
     * @returns A #GladeProject
     */
    get_project(): Project
    /**
     * Returns the selected items in the inspector.
     * @returns A #GList of #GladeWidget
     */
    get_selected_items(): Widget[]
    /**
     * Sets the current project of `inspector` to `project`. To unset the current
     * project, pass %NULL for `project`.
     * @param project a #GladeProject
     */
    set_project(project: Project): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Inspector

    vfunc_item_activated(): void
    vfunc_selection_changed(): void

    // Own signals of Gladeui-2.0.Gladeui.Inspector

    connect(sigName: "item-activated", callback: Inspector.ItemActivatedSignalCallback): number
    connect_after(sigName: "item-activated", callback: Inspector.ItemActivatedSignalCallback): number
    emit(sigName: "item-activated", ...args: any[]): void
    connect(sigName: "selection-changed", callback: Inspector.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: Inspector.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Inspector

    connect(sigName: "notify::project", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GladeInspector struct contains private data only, and should be manipulated using the functions below.
 * @class 
 */
export class Inspector extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.Inspector

    static name: string
    static $gtype: GObject.GType<Inspector>

    // Constructors of Gladeui-2.0.Gladeui.Inspector

    constructor(config?: Inspector.ConstructorProperties) 
    /**
     * Creates a new #GladeInspector
     * @constructor 
     * @returns a new #GladeInspector
     */
    constructor() 
    /**
     * Creates a new #GladeInspector
     * @constructor 
     * @returns a new #GladeInspector
     */
    static new(): Inspector

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #GladeInspector with `project`
     * @constructor 
     * @param project a #GladeProject
     * @returns a new #GladeInspector
     */
    static new_with_project(project: Project): Inspector
    _init(config?: Inspector.ConstructorProperties): void
}

export module NamedIconChooserDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `icon-activated`
     */
    export interface IconActivatedSignalCallback {
        ($obj: NamedIconChooserDialog): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        ($obj: NamedIconChooserDialog): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface NamedIconChooserDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    parent_instance: Gtk.Dialog & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    get_context(): string | null
    get_icon_name(): string | null
    set_context(context: string): boolean
    set_icon_name(icon_name: string): void

    // Overloads of set_icon_name

    /**
     * Sets the icon for the window from a named themed icon.
     * See the docs for #GtkIconTheme for more details.
     * On some platforms, the window icon is not used at all.
     * 
     * Note that this has nothing to do with the WM_ICON_NAME
     * property which is mentioned in the ICCCM.
     * @param name the name of the themed icon
     */
    set_icon_name(name: string | null): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    vfunc_icon_activated(): void
    vfunc_selection_changed(): void

    // Own signals of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    connect(sigName: "icon-activated", callback: NamedIconChooserDialog.IconActivatedSignalCallback): number
    connect_after(sigName: "icon-activated", callback: NamedIconChooserDialog.IconActivatedSignalCallback): number
    emit(sigName: "icon-activated", ...args: any[]): void
    connect(sigName: "selection-changed", callback: NamedIconChooserDialog.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: NamedIconChooserDialog.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: NamedIconChooserDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class NamedIconChooserDialog extends Gtk.Dialog {

    // Own properties of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    static name: string
    static $gtype: GObject.GType<NamedIconChooserDialog>

    // Constructors of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    constructor(config?: NamedIconChooserDialog.ConstructorProperties) 
    _init(config?: NamedIconChooserDialog.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module Palette {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh`
     */
    export interface RefreshSignalCallback {
        ($obj: Palette): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Palette

        item_appearance?: ItemAppearance | null
        project?: Project | null
        show_selector_button?: boolean | null
        use_small_item_icons?: boolean | null
        itemAppearance?: ItemAppearance | null
        showSelectorButton?: boolean | null
        useSmallItemIcons?: boolean | null
    }

}

export interface Palette extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.Palette

    item_appearance: ItemAppearance
    itemAppearance: ItemAppearance
    project: Project
    show_selector_button: boolean
    showSelectorButton: boolean
    use_small_item_icons: boolean
    useSmallItemIcons: boolean

    // Own fields of Gladeui-2.0.Gladeui.Palette

    parent_instance: Gtk.Box & GObject.InitiallyUnowned
    priv: PalettePrivate

    // Owm methods of Gladeui-2.0.Gladeui.Palette

    get_item_appearance(): ItemAppearance
    get_project(): Project
    get_show_selector_button(): boolean
    get_tool_palette(): Gtk.ToolPalette
    get_use_small_item_icons(): boolean
    /**
     * Sets the appearance of the palette items.
     * @param item_appearance the item appearance
     */
    set_item_appearance(item_appearance: ItemAppearance): void
    set_project(project: Project): void
    /**
     * Sets whether to show the internal widget selector button
     * @param show_selector_button whether to show selector button
     */
    set_show_selector_button(show_selector_button: boolean): void
    /**
     * Sets whether to use small item icons.
     * @param use_small_item_icons Whether to use small item icons
     */
    set_use_small_item_icons(use_small_item_icons: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Palette

    vfunc_refresh(): void

    // Own signals of Gladeui-2.0.Gladeui.Palette

    connect(sigName: "refresh", callback: Palette.RefreshSignalCallback): number
    connect_after(sigName: "refresh", callback: Palette.RefreshSignalCallback): number
    emit(sigName: "refresh", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Palette

    connect(sigName: "notify::item-appearance", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-appearance", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-appearance", ...args: any[]): void
    connect(sigName: "notify::project", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::show-selector-button", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-selector-button", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-selector-button", ...args: any[]): void
    connect(sigName: "notify::use-small-item-icons", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-small-item-icons", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-small-item-icons", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Palette, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Palette extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.Palette

    static name: string
    static $gtype: GObject.GType<Palette>

    // Constructors of Gladeui-2.0.Gladeui.Palette

    constructor(config?: Palette.ConstructorProperties) 
    /**
     * Creates a new #GladePalette widget
     * @constructor 
     * @returns a new #GladePalette
     */
    constructor() 
    /**
     * Creates a new #GladePalette widget
     * @constructor 
     * @returns a new #GladePalette
     */
    static new(): Palette

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Palette.ConstructorProperties): void
}

export interface ParamObjects {
}

export class ParamObjects extends GObject.ParamSpec {

    // Own properties of Gladeui-2.0.Gladeui.ParamObjects

    static name: string
}

export module Placeholder {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface Placeholder extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gladeui-2.0.Gladeui.Placeholder

    widget: Gtk.Widget
    priv: PlaceholderPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Placeholder

    get_parent(): Widget | null

    // Overloads of get_parent

    /**
     * Returns the parent container of `widget`.
     * @returns the parent container of @widget, or %NULL
     */
    get_parent(): Gtk.Widget | null
    get_project(): Project | null
    packing_actions(): WidgetAction[]

    // Class property signals of Gladeui-2.0.Gladeui.Placeholder

    connect(sigName: "notify::app-paintable", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Placeholder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Placeholder extends Gtk.Widget {

    // Own properties of Gladeui-2.0.Gladeui.Placeholder

    static name: string
    static $gtype: GObject.GType<Placeholder>

    // Constructors of Gladeui-2.0.Gladeui.Placeholder

    constructor(config?: Placeholder.ConstructorProperties) 
    constructor() 
    static new(): Placeholder
    _init(config?: Placeholder.ConstructorProperties): void
}

export module Project {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate-signal-handler`
     */
    export interface ActivateSignalHandlerSignalCallback {
        ($obj: Project, gladewidget: Widget, signal: Signal): void
    }

    /**
     * Signal callback interface for `add-signal-handler`
     */
    export interface AddSignalHandlerSignalCallback {
        ($obj: Project, gladewidget: Widget, signal: Signal): void
    }

    /**
     * Signal callback interface for `add-widget`
     */
    export interface AddWidgetSignalCallback {
        ($obj: Project, arg1: Widget): void
    }

    /**
     * Signal callback interface for `change-signal-handler`
     */
    export interface ChangeSignalHandlerSignalCallback {
        ($obj: Project, gladewidget: Widget, old_signal: Signal, new_signal: Signal): void
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Project, arg1: Command, arg2: boolean): void
    }

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        ($obj: Project): void
    }

    /**
     * Signal callback interface for `load-progress`
     */
    export interface LoadProgressSignalCallback {
        ($obj: Project, objects_total: number, objects_loaded: number): void
    }

    /**
     * Signal callback interface for `parse-began`
     */
    export interface ParseBeganSignalCallback {
        ($obj: Project): void
    }

    /**
     * Signal callback interface for `parse-finished`
     */
    export interface ParseFinishedSignalCallback {
        ($obj: Project): void
    }

    /**
     * Signal callback interface for `remove-signal-handler`
     */
    export interface RemoveSignalHandlerSignalCallback {
        ($obj: Project, gladewidget: Widget, signal: Signal): void
    }

    /**
     * Signal callback interface for `remove-widget`
     */
    export interface RemoveWidgetSignalCallback {
        ($obj: Project, arg1: Widget): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        ($obj: Project): void
    }

    /**
     * Signal callback interface for `targets-changed`
     */
    export interface TargetsChangedSignalCallback {
        ($obj: Project): void
    }

    /**
     * Signal callback interface for `widget-name-changed`
     */
    export interface WidgetNameChangedSignalCallback {
        ($obj: Project, arg1: Widget): void
    }

    /**
     * Signal callback interface for `widget-visibility-changed`
     */
    export interface WidgetVisibilityChangedSignalCallback {
        ($obj: Project, widget: Widget, visible: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Project

        css_provider_path?: string | null
        license?: string | null
        resource_path?: string | null
        template?: Widget | null
        translation_domain?: string | null
        cssProviderPath?: string | null
        resourcePath?: string | null
        translationDomain?: string | null
    }

}

export interface Project extends Gtk.TreeDragSource, Gtk.TreeModel {

    // Own properties of Gladeui-2.0.Gladeui.Project

    readonly add_item: WidgetAdaptor
    readonly addItem: WidgetAdaptor
    css_provider_path: string | null
    cssProviderPath: string | null
    readonly has_selection: boolean
    readonly hasSelection: boolean
    license: string | null
    readonly modified: boolean
    readonly path: string | null
    readonly pointer_mode: PointerMode
    readonly pointerMode: PointerMode
    readonly read_only: boolean
    readonly readOnly: boolean
    resource_path: string | null
    resourcePath: string | null
    template: Widget
    translation_domain: string | null
    translationDomain: string | null

    // Own fields of Gladeui-2.0.Gladeui.Project

    parent_instance: GObject.Object
    priv: ProjectPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Project

    /**
     * Adds an object to the project.
     * @param object the #GObject to add
     */
    add_object(object: GObject.Object): void
    /**
     * Saves an autosave snapshot of `project` to it's currently set path
     * 
     * If the project was never saved, nothing is done and %TRUE is returned.
     * @returns %TRUE on success, %FALSE on failure
     */
    autosave(): boolean
    /**
     * Checks whether `name` is an appropriate name for `widget`.
     * @param widget the #GladeWidget intended to receive a new name
     * @param name base name of the widget to create
     * @returns whether the name is available or not.
     */
    available_widget_name(widget: Widget, name: string): boolean
    /**
     * Backup the last file which `project` has saved to
     * or was loaded from.
     * 
     * If `path` is not the same as the current project
     * path, then the current project path will be
     * backed up under the new location.
     * 
     * If this the first save, and no persisted file
     * exists, then %TRUE is returned and no backup is made.
     * @param path location to save glade file
     * @returns %TRUE on success, %FALSE on failure
     */
    backup(path: string): boolean
    cancel_load(): void
    check_reordered(parent: Widget, old_order: GObject.Object[]): void
    command_cut(): void
    command_delete(): void
    command_paste(placeholder: Placeholder): void
    copy_selection(): void
    display_dependencies(): string | null
    get_add_item(): WidgetAdaptor
    get_css_provider_path(): string
    get_file_mtime(): number
    get_has_selection(): boolean
    get_license(): string
    /**
     * Get's whether the project has been modified since it was last saved.
     * @returns %TRUE if the project has been modified since it was last saved
     */
    get_modified(): boolean
    get_name(): string | null
    get_objects(): GObject.Object[]
    get_path(): string

    // Overloads of get_path

    /**
     * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
     * 
     * This path should be freed with gtk_tree_path_free().
     * @param iter the #GtkTreeIter-struct
     * @returns a newly-created #GtkTreePath-struct
     */
    get_path(iter: Gtk.TreeIter): Gtk.TreePath
    get_pointer_mode(): PointerMode
    /**
     * Gets whether the project is read only or not
     * @returns TRUE if project is read only
     */
    get_readonly(): boolean
    get_resource_path(): string
    /**
     * Fetches the target version of the `project` for `catalog`.
     * @param catalog the name of the catalog `project` includes
     * @param major the return location for the target major version
     * @param minor the return location for the target minor version
     */
    get_target_version(catalog: string, major: number, minor: number): void
    get_template(): Widget
    get_translation_domain(): string
    /**
     * Searches under `ancestor` in `project` looking for a #GladeWidget named `name`.
     * @param name The user visible name of the widget we are looking for
     * @returns a pointer to the widget, %NULL if the widget does not exist
     */
    get_widget_by_name(name: string): Widget | null
    has_object(object: GObject.Object): boolean
    is_loading(): boolean
    is_selected(object: GObject.Object): boolean
    load_cancelled(): boolean
    load_from_file(path: string): boolean
    /**
     * Creates a new name for a widget that doesn't collide with any of the names
     * already in `project`. This name will start with `base_name`.
     * 
     * Note the `widget` parameter is ignored and preserved only for historical reasons.
     * @param widget the #GladeWidget intended to receive a new name, or %NULL
     * @param base_name base name of the widget to create
     * @returns a string containing the new name, %NULL if there is not enough          memory for this string
     */
    new_widget_name(widget: Widget, base_name: string): string | null
    /**
     * Gets the next redo item on `project'`s command stack.
     * @returns the #GladeCommand
     */
    next_redo_item(): Command
    /**
     * Gets the next undo item on `project'`s command stack.
     * @returns the #GladeCommand
     */
    next_undo_item(): Command
    /**
     * Creates and displays a preview window holding a snapshot of `gwidget'`s
     * toplevel window in `project`. Note that the preview window is only a snapshot
     * of the current state of the project, there is no limit on how many preview
     * snapshots can be taken.
     * @param gwidget a #GladeWidget
     */
    preview(gwidget: Widget): void
    /**
     * Runs a document properties dialog for `project`.
     */
    properties(): void
    push_progress(): void
    /**
     * Pushes a newly created #GladeCommand onto `projects` stack.
     * @param cmd the #GladeCommand
     */
    push_undo(cmd: Command): void
    queue_selection_changed(): void
    /**
     * Redoes a #GladeCommand in this project.
     */
    redo(): void
    /**
     * Creates a menu of the undo items in the project stack
     * @returns A newly created menu
     */
    redo_items(): Gtk.Widget
    /**
     * Removes `object` from `project`.
     * 
     * Note that when removing the #GObject from the project we
     * don't change ->project in the associated #GladeWidget; this
     * way UNDO can work.
     * @param object the #GObject to remove
     */
    remove_object(object: GObject.Object): void
    required_libs(): string[]
    reset_path(): void
    /**
     * Project resource strings are always relative, this function transforms a
     * path relative to project to a full path.
     * @param resource The resource basename
     * @returns A newly allocated string holding the          full path to the resource.
     */
    resource_fullpath(resource: string): string | null
    /**
     * Saves `project` to the given path.
     * @param path location to save glade file
     * @returns %TRUE on success, %FALSE on failure
     */
    save(path: string): boolean
    /**
     * Saves `project` to the given path.
     * @param path location to save glade file
     * @param flags the #GladeVerifyFlags to warn about
     * @returns %TRUE on success, %FALSE on failure
     */
    save_verify(path: string, flags: VerifyFlags): boolean
    /**
     * Adds `object` to the selection chain of `project`
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param object a #GObject in `project`
     * @param emit_signal whether or not to emit a signal indicating               a selection change
     */
    selection_add(object: GObject.Object, emit_signal: boolean): void
    /**
     * Causes `project` to emit a "selection_changed" signal.
     */
    selection_changed(): void
    /**
     * Clears `project'`s selection chain
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param emit_signal whether or not to emit a signal indication a selection change
     */
    selection_clear(emit_signal: boolean): void
    selection_get(): Gtk.Widget[]
    /**
     * Removes `object` from the selection chain of `project`
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param object a #GObject in `project`
     * @param emit_signal whether or not to emit a signal               indicating a selection change
     */
    selection_remove(object: GObject.Object, emit_signal: boolean): void
    /**
     * Set the selection in `project` to `object`
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param object a #GObject in `project`
     * @param emit_signal whether or not to emit a signal               indicating a selection change
     */
    selection_set(object: GObject.Object, emit_signal: boolean): void
    set_add_item(adaptor: WidgetAdaptor): void
    /**
     * Set the custom CSS provider path to use in `project`
     * @param path a CSS file path
     */
    set_css_provider_path(path: string): void
    set_license(license: string): void
    set_pointer_mode(mode: PointerMode): void
    set_resource_path(path: string): void
    set_target_version(catalog: string, major: number, minor: number): void
    set_template(widget: Widget): void
    /**
     * Set the project translation domain.
     * @param domain the translation domain
     */
    set_translation_domain(domain: string): void
    /**
     * Sets `name` on `widget` in `project,` if `name` is not
     * available then a new name will be used.
     * @param widget the #GladeWidget to set a name on
     * @param name the name to set.
     */
    set_widget_name(widget: Widget, name: string): void
    toplevels(): Gtk.Widget[]
    /**
     * Undoes a #GladeCommand in this project.
     */
    undo(): void
    /**
     * Creates a menu of the undo items in the project stack
     * @returns A newly created menu
     */
    undo_items(): Gtk.Widget
    verify(saving: boolean, flags: VerifyFlags): boolean
    /**
     * Checks the supported state of this widget adaptor
     * and generates a string to show in the UI describing why.
     * @param adaptor the #GladeWidgetAdaptor to verify
     * @param mask a return location for a #GladeSupportMask
     * @returns A newly allocated string
     */
    verify_widget_adaptor(adaptor: WidgetAdaptor, mask: SupportMask): string | null
    widget_changed(gwidget: Widget): void
    /**
     * Emits  GladeProject::widget-visibility-changed signal
     * @param widget The widget which visibility changed
     * @param visible widget visibility value
     */
    widget_visibility_changed(widget: Widget, visible: boolean): void
    writing_preview(): boolean

    // Own virtual methods of Gladeui-2.0.Gladeui.Project

    /**
     * Adds an object to the project.
     * @virtual 
     * @param object the #GObject to add
     */
    vfunc_add_object(object: Widget): void
    vfunc_changed(command: Command, forward: boolean): void
    vfunc_close(): void
    /**
     * Gets the next redo item on `project'`s command stack.
     * @virtual 
     * @returns the #GladeCommand
     */
    vfunc_next_redo_item(): Command
    /**
     * Gets the next undo item on `project'`s command stack.
     * @virtual 
     * @returns the #GladeCommand
     */
    vfunc_next_undo_item(): Command
    vfunc_parse_finished(): void
    /**
     * Pushes a newly created #GladeCommand onto `projects` stack.
     * @virtual 
     * @param cmd the #GladeCommand
     */
    vfunc_push_undo(cmd: Command): void
    /**
     * Redoes a #GladeCommand in this project.
     * @virtual 
     */
    vfunc_redo(): void
    /**
     * Removes `object` from `project`.
     * 
     * Note that when removing the #GObject from the project we
     * don't change ->project in the associated #GladeWidget; this
     * way UNDO can work.
     * @virtual 
     * @param object the #GObject to remove
     */
    vfunc_remove_object(object: Widget): void
    /**
     * Causes `project` to emit a "selection_changed" signal.
     * @virtual 
     */
    vfunc_selection_changed(): void
    /**
     * Undoes a #GladeCommand in this project.
     * @virtual 
     */
    vfunc_undo(): void
    vfunc_widget_name_changed(widget: Widget): void

    // Own signals of Gladeui-2.0.Gladeui.Project

    connect(sigName: "activate-signal-handler", callback: Project.ActivateSignalHandlerSignalCallback): number
    connect_after(sigName: "activate-signal-handler", callback: Project.ActivateSignalHandlerSignalCallback): number
    emit(sigName: "activate-signal-handler", gladewidget: Widget, signal: Signal, ...args: any[]): void
    connect(sigName: "add-signal-handler", callback: Project.AddSignalHandlerSignalCallback): number
    connect_after(sigName: "add-signal-handler", callback: Project.AddSignalHandlerSignalCallback): number
    emit(sigName: "add-signal-handler", gladewidget: Widget, signal: Signal, ...args: any[]): void
    connect(sigName: "add-widget", callback: Project.AddWidgetSignalCallback): number
    connect_after(sigName: "add-widget", callback: Project.AddWidgetSignalCallback): number
    emit(sigName: "add-widget", arg1: Widget, ...args: any[]): void
    connect(sigName: "change-signal-handler", callback: Project.ChangeSignalHandlerSignalCallback): number
    connect_after(sigName: "change-signal-handler", callback: Project.ChangeSignalHandlerSignalCallback): number
    emit(sigName: "change-signal-handler", gladewidget: Widget, old_signal: Signal, new_signal: Signal, ...args: any[]): void
    connect(sigName: "changed", callback: Project.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Project.ChangedSignalCallback): number
    emit(sigName: "changed", arg1: Command, arg2: boolean, ...args: any[]): void
    connect(sigName: "close", callback: Project.CloseSignalCallback): number
    connect_after(sigName: "close", callback: Project.CloseSignalCallback): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "load-progress", callback: Project.LoadProgressSignalCallback): number
    connect_after(sigName: "load-progress", callback: Project.LoadProgressSignalCallback): number
    emit(sigName: "load-progress", objects_total: number, objects_loaded: number, ...args: any[]): void
    connect(sigName: "parse-began", callback: Project.ParseBeganSignalCallback): number
    connect_after(sigName: "parse-began", callback: Project.ParseBeganSignalCallback): number
    emit(sigName: "parse-began", ...args: any[]): void
    connect(sigName: "parse-finished", callback: Project.ParseFinishedSignalCallback): number
    connect_after(sigName: "parse-finished", callback: Project.ParseFinishedSignalCallback): number
    emit(sigName: "parse-finished", ...args: any[]): void
    connect(sigName: "remove-signal-handler", callback: Project.RemoveSignalHandlerSignalCallback): number
    connect_after(sigName: "remove-signal-handler", callback: Project.RemoveSignalHandlerSignalCallback): number
    emit(sigName: "remove-signal-handler", gladewidget: Widget, signal: Signal, ...args: any[]): void
    connect(sigName: "remove-widget", callback: Project.RemoveWidgetSignalCallback): number
    connect_after(sigName: "remove-widget", callback: Project.RemoveWidgetSignalCallback): number
    emit(sigName: "remove-widget", arg1: Widget, ...args: any[]): void
    connect(sigName: "selection-changed", callback: Project.SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: Project.SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "targets-changed", callback: Project.TargetsChangedSignalCallback): number
    connect_after(sigName: "targets-changed", callback: Project.TargetsChangedSignalCallback): number
    emit(sigName: "targets-changed", ...args: any[]): void
    connect(sigName: "widget-name-changed", callback: Project.WidgetNameChangedSignalCallback): number
    connect_after(sigName: "widget-name-changed", callback: Project.WidgetNameChangedSignalCallback): number
    emit(sigName: "widget-name-changed", arg1: Widget, ...args: any[]): void
    connect(sigName: "widget-visibility-changed", callback: Project.WidgetVisibilityChangedSignalCallback): number
    connect_after(sigName: "widget-visibility-changed", callback: Project.WidgetVisibilityChangedSignalCallback): number
    emit(sigName: "widget-visibility-changed", widget: Widget, visible: boolean, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Project

    connect(sigName: "notify::add-item", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-item", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-item", ...args: any[]): void
    connect(sigName: "notify::css-provider-path", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-provider-path", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-provider-path", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::pointer-mode", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-mode", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-mode", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::resource-path", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-path", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-path", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: "notify::translation-domain", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-domain", callback: (($obj: Project, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Project extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Project

    static name: string
    static $gtype: GObject.GType<Project>

    // Constructors of Gladeui-2.0.Gladeui.Project

    constructor(config?: Project.ConstructorProperties) 
    /**
     * Creates a new #GladeProject.
     * @constructor 
     * @returns a new #GladeProject
     */
    constructor() 
    /**
     * Creates a new #GladeProject.
     * @constructor 
     * @returns a new #GladeProject
     */
    static new(): Project
    _init(config?: Project.ConstructorProperties): void
    /**
     * Opens a project at the given path.
     * @param path the path of the project to load
     * @returns a new #GladeProject for the opened project on success,          %NULL on failure
     */
    static load(path: string): Project | null
    static verify_property(property: Property): void
    static verify_signal(widget: Widget, signal: Signal): void
}

export module Property {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tooltip-changed`
     */
    export interface TooltipChangedSignalCallback {
        ($obj: Property, object: string | null, p0: string | null, p1: string | null): void
    }

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        ($obj: Property, object: any | null, p0: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Property

        "class"?: any | null
        enabled?: boolean | null
        i18n_comment?: string | null
        i18n_context?: string | null
        i18n_translatable?: boolean | null
        precision?: number | null
        sensitive?: boolean | null
        i18nComment?: string | null
        i18nContext?: string | null
        i18nTranslatable?: boolean | null
    }

}

export interface Property {

    // Own properties of Gladeui-2.0.Gladeui.Property

    readonly "class": any
    enabled: boolean
    i18n_comment: string | null
    i18nComment: string | null
    i18n_context: string | null
    i18nContext: string | null
    i18n_translatable: boolean
    i18nTranslatable: boolean
    precision: number
    sensitive: boolean
    readonly state: number

    // Own fields of Gladeui-2.0.Gladeui.Property

    parent_instance: GObject.Object
    priv: PropertyPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Property

    /**
     * Adds `object` to the object list in `property`.
     * 
     * Note: This function expects `property` to be a #GladeParamSpecObjects
     * or #GParamSpecObject type property.
     * @param object The #GObject to add
     */
    add_object(object: GObject.Object): void
    default(): boolean
    dup(widget: Widget): Property
    equals_value(value: any): boolean
    /**
     * Get the #GladePropertyDef this property was created for.
     * @returns a #GladePropertyDef
     */
    get_def(): PropertyDef
    /**
     * Retrieve the default property value
     * @param value a #GValue
     */
    get_default(value: any): void
    get_enabled(): boolean
    get_save_always(): boolean
    get_sensitive(): boolean
    get_state(): PropertyState
    get_support_warning(): string
    /**
     * Retrieve the property value
     * @param value a #GValue
     */
    get_value(value: any): void
    get_widget(): Widget
    i18n_get_comment(): string
    i18n_get_context(): string
    i18n_get_translatable(): boolean
    i18n_set_comment(str: string): void
    i18n_set_context(str: string): void
    i18n_set_translatable(translatable: boolean): void
    inline_value(): any
    /**
     * Loads the value of `property` from the corresponding object instance
     */
    load(): void
    make_string(): string | null
    original_default(): boolean
    /**
     * Resets this property to its original default value
     */
    original_reset(): void
    /**
     * Read the value and any attributes for `property` from `node,` assumes
     * `property` is being loaded for `project`
     * 
     * Note that object values will only be resolved after the project is
     * completely loaded
     * @param project the #GladeProject
     * @param node the #GladeXmlNode to read, will either be a 'widget'        node or a 'child' node for packing properties.
     */
    read(project: Project, node: XmlNode): void
    /**
     * Removes `object` from the object list in `property`.
     * 
     * Note: This function expects `property` to be a #GladeParamSpecObjects
     * or #GParamSpecObject type property.
     * @param object The #GObject to add
     */
    remove_object(object: GObject.Object): void
    /**
     * Resets this property to its default value
     */
    reset(): void
    set_enabled(enabled: boolean): void
    /**
     * Sets whether this property should be special cased
     * to always be saved regardless of its default value.
     * (used for some special cases like properties
     * that are assigned initial values in composite widgets
     * or derived widget code).
     * @param setting the value to set
     */
    set_save_always(setting: boolean): void
    set_sensitive(sensitive: boolean, reason: string): void
    set_support_warning(disable: boolean, reason: string): void
    /**
     * Sets the property's value
     * @param value a #GValue
     * @returns Whether the property was successfully set.
     */
    set_value(value: any): boolean
    set_widget(widget: Widget): void
    /**
     * Synchronize the object with this property
     */
    sync(): void
    warn_usage(): boolean
    /**
     * Write `property` to `node`
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write(context: XmlContext, node: XmlNode): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Property

    vfunc_dup(widget: Widget): Property
    vfunc_equals_value(value: any): boolean
    /**
     * Retrieve the property value
     * @virtual 
     * @param value a #GValue
     */
    vfunc_get_value(value: any): void
    /**
     * Loads the value of `property` from the corresponding object instance
     * @virtual 
     */
    vfunc_load(): void
    /**
     * Sets the property's value
     * @virtual 
     * @param value a #GValue
     * @returns Whether the property was successfully set.
     */
    vfunc_set_value(value: any): boolean
    /**
     * Synchronize the object with this property
     * @virtual 
     */
    vfunc_sync(): void
    vfunc_tooltip_changed(tooltip: string, insensitive_tooltip: string, support_warning: string): void
    vfunc_value_changed(old_value: any, new_value: any): void

    // Own signals of Gladeui-2.0.Gladeui.Property

    connect(sigName: "tooltip-changed", callback: Property.TooltipChangedSignalCallback): number
    connect_after(sigName: "tooltip-changed", callback: Property.TooltipChangedSignalCallback): number
    emit(sigName: "tooltip-changed", object: string | null, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "value-changed", callback: Property.ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: Property.ValueChangedSignalCallback): number
    emit(sigName: "value-changed", object: any | null, p0: any | null, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Property

    connect(sigName: "notify::class", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::i18n-comment", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::i18n-comment", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::i18n-comment", ...args: any[]): void
    connect(sigName: "notify::i18n-context", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::i18n-context", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::i18n-context", ...args: any[]): void
    connect(sigName: "notify::i18n-translatable", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::i18n-translatable", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::i18n-translatable", ...args: any[]): void
    connect(sigName: "notify::precision", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::precision", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::precision", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Property extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Property

    static name: string
    static $gtype: GObject.GType<Property>

    // Constructors of Gladeui-2.0.Gladeui.Property

    constructor(config?: Property.ConstructorProperties) 
    /**
     * Creates a #GladeProperty of type `klass` for `widget` with `value;` if
     * `value` is %NULL, then the introspected default value for that property
     * will be used.
     * @constructor 
     * @param def A #GladePropertyDef defining this property
     * @param widget The #GladeWidget this property is created for
     * @param value The initial #GValue of the property or %NULL         (the #GladeProperty will assume ownership of `value)`
     * @returns The newly created #GladeProperty
     */
    constructor(def: PropertyDef, widget: Widget, value: any) 
    /**
     * Creates a #GladeProperty of type `klass` for `widget` with `value;` if
     * `value` is %NULL, then the introspected default value for that property
     * will be used.
     * @constructor 
     * @param def A #GladePropertyDef defining this property
     * @param widget The #GladeWidget this property is created for
     * @param value The initial #GValue of the property or %NULL         (the #GladeProperty will assume ownership of `value)`
     * @returns The newly created #GladeProperty
     */
    static new(def: PropertyDef, widget: Widget, value: any): Property
    _init(config?: Property.ConstructorProperties): void
    static pop_superuser(): void
    static push_superuser(): void
    static superuser(): boolean
}

export module PropertyLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.PropertyLabel

        append_colon?: boolean | null
        custom_text?: string | null
        custom_tooltip?: string | null
        packing?: boolean | null
        property?: Property | null
        property_name?: string | null
        appendColon?: boolean | null
        customText?: string | null
        customTooltip?: string | null
        propertyName?: string | null
    }

}

export interface PropertyLabel extends Atk.ImplementorIface, Editable, Gtk.Buildable {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabel

    append_colon: boolean
    appendColon: boolean
    custom_text: string | null
    customText: string | null
    custom_tooltip: string | null
    customTooltip: string | null
    packing: boolean
    property: Property
    property_name: string | null
    propertyName: string | null

    // Owm methods of Gladeui-2.0.Gladeui.PropertyLabel

    get_append_colon(): boolean
    get_custom_text(): string
    get_custom_tooltip(): string
    get_packing(): boolean
    get_property(): Property

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    get_property_name(): string
    set_append_colon(append_colon: boolean): void
    set_custom_text(custom_text: string): void
    set_custom_tooltip(custom_tooltip: string): void
    set_packing(packing: boolean): void
    set_property(property: Property): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    set_property_name(property_name: string): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of Gladeui-2.0.Gladeui.PropertyLabel

    connect(sigName: "notify::append-colon", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append-colon", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::append-colon", ...args: any[]): void
    connect(sigName: "notify::custom-text", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::custom-tooltip", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-tooltip", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-tooltip", ...args: any[]): void
    connect(sigName: "notify::packing", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::packing", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::packing", ...args: any[]): void
    connect(sigName: "notify::property", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property", ...args: any[]): void
    connect(sigName: "notify::property-name", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-name", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-name", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PropertyLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PropertyLabel extends Gtk.EventBox {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabel

    static name: string
    static $gtype: GObject.GType<PropertyLabel>

    // Constructors of Gladeui-2.0.Gladeui.PropertyLabel

    constructor(config?: PropertyLabel.ConstructorProperties) 
    constructor() 
    static new(): PropertyLabel
    _init(config?: PropertyLabel.ConstructorProperties): void
}

export module PropertyShell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `post-commit`
     */
    export interface PostCommitSignalCallback {
        ($obj: PropertyShell, arg1: any | null): void
    }

    /**
     * Signal callback interface for `pre-commit`
     */
    export interface PreCommitSignalCallback {
        ($obj: PropertyShell, arg1: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.PropertyShell

        custom_text?: string | null
        disable_check?: boolean | null
        editor_type?: string | null
        packing?: boolean | null
        property_name?: string | null
        use_command?: boolean | null
        customText?: string | null
        disableCheck?: boolean | null
        editorType?: string | null
        propertyName?: string | null
        useCommand?: boolean | null
    }

}

export interface PropertyShell extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShell

    custom_text: string | null
    customText: string | null
    disable_check: boolean
    disableCheck: boolean
    readonly editor_type: string | null
    readonly editorType: string | null
    packing: boolean
    property_name: string | null
    propertyName: string | null
    use_command: boolean
    useCommand: boolean

    // Owm methods of Gladeui-2.0.Gladeui.PropertyShell

    get_custom_text(): string
    get_disable_check(): boolean
    get_packing(): boolean
    get_property_name(): string
    get_use_command(): boolean
    set_custom_text(custom_text: string): void
    set_disable_check(disable_check: boolean): void
    set_packing(packing: boolean): void
    set_property_name(property_name: string): void
    set_use_command(use_command: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own signals of Gladeui-2.0.Gladeui.PropertyShell

    connect(sigName: "post-commit", callback: PropertyShell.PostCommitSignalCallback): number
    connect_after(sigName: "post-commit", callback: PropertyShell.PostCommitSignalCallback): number
    emit(sigName: "post-commit", arg1: any | null, ...args: any[]): void
    connect(sigName: "pre-commit", callback: PropertyShell.PreCommitSignalCallback): number
    connect_after(sigName: "pre-commit", callback: PropertyShell.PreCommitSignalCallback): number
    emit(sigName: "pre-commit", arg1: any | null, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.PropertyShell

    connect(sigName: "notify::custom-text", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-text", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-check", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::editor-type", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editor-type", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editor-type", ...args: any[]): void
    connect(sigName: "notify::packing", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::packing", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::packing", ...args: any[]): void
    connect(sigName: "notify::property-name", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::property-name", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::property-name", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-command", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: PropertyShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PropertyShell extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShell

    static name: string
    static $gtype: GObject.GType<PropertyShell>

    // Constructors of Gladeui-2.0.Gladeui.PropertyShell

    constructor(config?: PropertyShell.ConstructorProperties) 
    constructor() 
    static new(): PropertyShell

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: PropertyShell.ConstructorProperties): void
}

export module Signal {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Signal

        after?: boolean | null
        "class"?: any | null
        detail?: string | null
        handler?: string | null
        support_warning?: string | null
        swapped?: boolean | null
        userdata?: string | null
        supportWarning?: string | null
    }

}

export interface Signal {

    // Own properties of Gladeui-2.0.Gladeui.Signal

    after: boolean
    readonly "class": any
    detail: string | null
    handler: string | null
    support_warning: string | null
    supportWarning: string | null
    swapped: boolean
    userdata: string | null

    // Own fields of Gladeui-2.0.Gladeui.Signal

    object: GObject.Object
    priv: SignalPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Signal

    clone(): Signal
    equal(sig2: Signal): boolean
    /**
     * Get whether the handler should be called before or after the default handler
     * of the signal.
     * @returns Whether the signal handler should be called after the default handler
     */
    get_after(): boolean
    /**
     * Get the signal definition.
     * @returns the #GladeSignalDef
     */
    get_def(): SignalDef
    /**
     * Get the signal detail.
     * @returns the detail of the signal
     */
    get_detail(): string
    /**
     * Get the signal handler.
     * @returns the handler of the signal
     */
    get_handler(): string
    /**
     * Get the name of the signal from the signal definition.
     * @returns The name of the signal
     */
    get_name(): string
    get_support_warning(): string
    /**
     * Get whether the instance and userdata arguments should be swapped.
     * @returns whether the instance and userdata arguments should be swapped
     */
    get_swapped(): boolean
    /**
     * Get the userdata handler.
     * @returns the userdata of the signal
     */
    get_userdata(): string
    /**
     * Set whether the handler should be called before or after the default handler
     * of the signal.
     * @param after if the signal handler should be called after the default handler
     */
    set_after(after: boolean): void
    /**
     * Set the detail of the signal.
     * @param detail the detail of the signal
     */
    set_detail(detail: string): void
    /**
     * Set the handler of the signal.
     * @param handler the handler of the signal
     */
    set_handler(handler: string): void
    set_support_warning(support_warning: string): void
    /**
     * Set whether the instance and userdata arguments should be swapped.
     * @param swapped if the instance and userdata arguments should be swapped
     */
    set_swapped(swapped: boolean): void
    /**
     * Set the userdata of the signal.
     * @param userdata the userdata of the signal
     */
    set_userdata(userdata: string): void
    /**
     * Writes `signal` to `node`
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write(context: XmlContext, node: XmlNode): void

    // Class property signals of Gladeui-2.0.Gladeui.Signal

    connect(sigName: "notify::after", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::after", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::after", ...args: any[]): void
    connect(sigName: "notify::class", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class", ...args: any[]): void
    connect(sigName: "notify::detail", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::detail", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::support-warning", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-warning", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::support-warning", ...args: any[]): void
    connect(sigName: "notify::swapped", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapped", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swapped", ...args: any[]): void
    connect(sigName: "notify::userdata", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::userdata", callback: (($obj: Signal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::userdata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Signal extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Signal

    static name: string
    static $gtype: GObject.GType<Signal>

    // Constructors of Gladeui-2.0.Gladeui.Signal

    constructor(config?: Signal.ConstructorProperties) 
    /**
     * Creates a new #GladeSignal with the given parameters.
     * @constructor 
     * @param sig_def a #GladeSignalDef
     * @param handler a handler function for the signal
     * @param userdata the userdata for this signal
     * @param after whether this handler should be called after the default emission phase
     * @param swapped whether the handler's user data should be swapped with the emitter instance.
     * @returns the new #GladeSignal
     */
    constructor(sig_def: SignalDef, handler: string, userdata: string, after: boolean, swapped: boolean) 
    /**
     * Creates a new #GladeSignal with the given parameters.
     * @constructor 
     * @param sig_def a #GladeSignalDef
     * @param handler a handler function for the signal
     * @param userdata the userdata for this signal
     * @param after whether this handler should be called after the default emission phase
     * @param swapped whether the handler's user data should be swapped with the emitter instance.
     * @returns the new #GladeSignal
     */
    static new(sig_def: SignalDef, handler: string, userdata: string, after: boolean, swapped: boolean): Signal
    _init(config?: Signal.ConstructorProperties): void
    /**
     * Reads and creates a ner #GladeSignal based on `node`
     * @param node The #GladeXmlNode to read
     * @param adaptor The #GladeWidgetAdaptor for the widget
     * @returns A newly created #GladeSignal
     */
    static read(node: XmlNode, adaptor: WidgetAdaptor): Signal
}

export module SignalEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `callback-suggestions`
     */
    export interface CallbackSuggestionsSignalCallback {
        ($obj: SignalEditor, signal: Signal): string[]
    }

    /**
     * Signal callback interface for `detail-suggestions`
     */
    export interface DetailSuggestionsSignalCallback {
        ($obj: SignalEditor, signal: Signal): string[]
    }

    /**
     * Signal callback interface for `signal-activated`
     */
    export interface SignalActivatedSignalCallback {
        ($obj: SignalEditor, signal: Signal): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.SignalEditor

        glade_widget?: Gtk.TreeModel | null
        gladeWidget?: Gtk.TreeModel | null
    }

}

export interface SignalEditor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.SignalEditor

    glade_widget: Gtk.TreeModel
    gladeWidget: Gtk.TreeModel

    // Own fields of Gladeui-2.0.Gladeui.SignalEditor

    parent_instance: Gtk.Box & GObject.InitiallyUnowned

    // Owm methods of Gladeui-2.0.Gladeui.SignalEditor

    /**
     * If drag and drop support is enabled, the user will be able to drag signal handler
     * from the tree to some editor. The type of the dnd data will be "application/x-glade-signal"
     * and it will be in the form of "widget:signal:handler" so for example
     * "GtkToggleButton:toggled:on_toggle_button_toggled".
     * @param enabled whether the drag and drop support should be enabled
     */
    enable_dnd(enabled: boolean): void
    get_widget(): Widget
    /**
     * Load a widget in the signal editor. This will show all signals of the widget
     * an it's accessors in the signal editor where the user can edit them.
     * @param widget a #GladeWidget or NULL
     */
    load_widget(widget: Widget): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Own signals of Gladeui-2.0.Gladeui.SignalEditor

    connect(sigName: "callback-suggestions", callback: SignalEditor.CallbackSuggestionsSignalCallback): number
    connect_after(sigName: "callback-suggestions", callback: SignalEditor.CallbackSuggestionsSignalCallback): number
    emit(sigName: "callback-suggestions", signal: Signal, ...args: any[]): void
    connect(sigName: "detail-suggestions", callback: SignalEditor.DetailSuggestionsSignalCallback): number
    connect_after(sigName: "detail-suggestions", callback: SignalEditor.DetailSuggestionsSignalCallback): number
    emit(sigName: "detail-suggestions", signal: Signal, ...args: any[]): void
    connect(sigName: "signal-activated", callback: SignalEditor.SignalActivatedSignalCallback): number
    connect_after(sigName: "signal-activated", callback: SignalEditor.SignalActivatedSignalCallback): number
    emit(sigName: "signal-activated", signal: Signal, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.SignalEditor

    connect(sigName: "notify::glade-widget", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::glade-widget", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::glade-widget", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: SignalEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SignalEditor extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.SignalEditor

    static name: string
    static $gtype: GObject.GType<SignalEditor>

    // Constructors of Gladeui-2.0.Gladeui.SignalEditor

    constructor(config?: SignalEditor.ConstructorProperties) 
    constructor() 
    static new(): SignalEditor

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: SignalEditor.ConstructorProperties): void
}

export module SignalModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.SignalModel

        signals?: any | null
        widget?: Widget | null
    }

}

export interface SignalModel extends Gtk.TreeDragSource, Gtk.TreeModel {

    // Own properties of Gladeui-2.0.Gladeui.SignalModel

    readonly signals: any
    readonly widget: Widget

    // Own fields of Gladeui-2.0.Gladeui.SignalModel

    parent_instance: GObject.Object
    priv: SignalModelPrivate

    // Class property signals of Gladeui-2.0.Gladeui.SignalModel

    connect(sigName: "notify::signals", callback: (($obj: SignalModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signals", callback: (($obj: SignalModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::signals", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (($obj: SignalModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: (($obj: SignalModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SignalModel extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.SignalModel

    static name: string
    static $gtype: GObject.GType<SignalModel>

    // Constructors of Gladeui-2.0.Gladeui.SignalModel

    constructor(config?: SignalModel.ConstructorProperties) 
    _init(config?: SignalModel.ConstructorProperties): void
    /**
     * Creates a new #GladeSignalModel object to show and edit the
     * signals of a widgets in a GtkTreeView
     * @param widget The #GladeWidget the signals belong to
     * @param signals The signals of the #GladeWidget
     * @returns a new #GladeSignalModel
     */
    static new(widget: Widget, signals: GLib.HashTable): Gtk.TreeModel
}

export module Widget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-signal-handler`
     */
    export interface AddSignalHandlerSignalCallback {
        ($obj: Widget, arg1: Signal): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    export interface ButtonPressEventSignalCallback {
        ($obj: Widget, arg1: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    export interface ButtonReleaseEventSignalCallback {
        ($obj: Widget, arg1: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `change-signal-handler`
     */
    export interface ChangeSignalHandlerSignalCallback {
        ($obj: Widget, arg1: Signal): void
    }

    /**
     * Signal callback interface for `motion-notify-event`
     */
    export interface MotionNotifyEventSignalCallback {
        ($obj: Widget, arg1: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `remove-signal-handler`
     */
    export interface RemoveSignalHandlerSignalCallback {
        ($obj: Widget, arg1: Signal): void
    }

    /**
     * Signal callback interface for `support-changed`
     */
    export interface SupportChangedSignalCallback {
        ($obj: Widget): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Widget

        adaptor?: WidgetAdaptor | null
        anarchist?: boolean | null
        composite?: boolean | null
        internal?: string | null
        internal_name?: string | null
        name?: string | null
        object?: GObject.Object | null
        parent?: Widget | null
        project?: Project | null
        properties?: any | null
        reason?: number | null
        template?: Widget | null
        template_exact?: boolean | null
        toplevel_height?: number | null
        toplevel_width?: number | null
        internalName?: string | null
        templateExact?: boolean | null
        toplevelHeight?: number | null
        toplevelWidth?: number | null
    }

}

export interface Widget {

    // Own properties of Gladeui-2.0.Gladeui.Widget

    readonly adaptor: WidgetAdaptor
    readonly anarchist: boolean
    composite: boolean
    internal: string | null
    readonly internal_name: string | null
    readonly internalName: string | null
    name: string | null
    object: GObject.Object
    parent: Widget
    project: Project
    readonly properties: any
    readonly reason: number
    readonly support_warning: string | null
    readonly supportWarning: string | null
    readonly template: Widget
    readonly template_exact: boolean
    readonly templateExact: boolean
    toplevel_height: number
    toplevelHeight: number
    toplevel_width: number
    toplevelWidth: number
    readonly visible: boolean

    // Own fields of Gladeui-2.0.Gladeui.Widget

    parent_instance: GObject.InitiallyUnowned
    priv: WidgetPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Widget

    /**
     * A convenience function to create a #GladeWidget of the prescribed type
     * for internal widgets.
     * @param internal_object the #GObject
     * @param internal_name a string identifier for this internal widget.
     * @param parent_name the generic name of the parent used for fancy child names.
     * @param anarchist Whether or not this widget is a widget outside                     of the parent's hierarchy (like a popup window)
     * @param reason The #GladeCreateReason for which this internal widget                     was created (usually just pass the reason from the post_create                     function; note also this is used only by the plugin code so                     pass something useful here).
     * @returns a freshly created #GladeWidget wrapper object for the          @internal_object of name @internal_name
     */
    adaptor_create_internal(internal_object: GObject.Object, internal_name: string, parent_name: string, anarchist: boolean, reason: CreateReason): Widget
    /**
     * Adds `child` to `parent` in a generic way for this #GladeWidget parent.
     * @param child the #GladeWidget to add
     * @param at_mouse whether the added widget should be added            at the current mouse position
     */
    add_child(child: Widget, at_mouse: boolean): void
    /**
     * Adds `property` to `widget` 's list of referenced properties.
     * 
     * Note: this is used to track properties on other objects that
     *       refer to this object.
     * @param property the #GladeProperty
     */
    add_prop_ref(property: Property): void
    /**
     * Adds a signal handler for `widget`
     * @param signal_handler The #GladeSignal
     */
    add_signal_handler(signal_handler: Signal): void
    /**
     * Checks whether `child` can be added to `parent`.
     * 
     * If `user_feedback` is %TRUE and `child` cannot be
     * added then this shows a notification dialog to the user
     * explaining why.
     * @param child The child #GladeWidget to add
     * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
     * @returns whether @child can be added to @widget.
     */
    add_verify(child: Widget, user_feedback: boolean): boolean
    /**
     * Changes a #GladeSignal on `widget`
     * @param old_signal_handler the old #GladeSignal
     * @param new_signal_handler the new #GladeSignal
     */
    change_signal_handler(old_signal_handler: Signal, new_signal_handler: Signal): void
    /**
     * Gets `child'`s packing property identified by `property_name`.
     * @param child The #GladeWidget child
     * @param property_name The id of the property
     * @param value The `GValue`
     */
    child_get_property(child: Widget, property_name: string, value: any): void
    /**
     * Sets `child'`s packing property identified by `property_name` to `value`.
     * @param child The #GladeWidget child
     * @param property_name The id of the property
     * @param value The `GValue`
     */
    child_set_property(child: Widget, property_name: string, value: any): void
    /**
     * Sets properties in `widget` based on the values of
     * matching properties in `template_widget`
     * @param template_widget a 'src' #GladeWidget
     * @param copy_parentless whether to copy reffed widgets at all
     * @param exact whether to copy reffed widgets exactly
     */
    copy_properties(template_widget: Widget, copy_parentless: boolean, exact: boolean): void
    /**
     * Sets signals in `widget` based on the values of
     * matching signals in `template_widget`
     * @param template_widget a 'src' #GladeWidget
     */
    copy_signals(template_widget: Widget): void
    /**
     * This is a convenience function to create a GladeEditorProperty corresponding
     * to `property`
     * @param property The widget's property
     * @param packing whether `property` indicates a packing property or not.
     * @param use_command Whether the undo/redo stack applies here.
     * @returns A newly created and connected GladeEditorProperty
     */
    create_editor_property(property: string, packing: boolean, use_command: boolean): EditorProperty
    /**
     * Determines whether `widget` is somehow dependent on `other,` in
     * which case it should be serialized after `other`.
     * 
     * A widget is dependent on another widget.
     * It does not take into account for children dependencies.
     * @param other another #GladeWidget
     * @returns %TRUE if @widget depends on @other.
     */
    depends(other: Widget): boolean
    /**
     * Creates a deep copy of #GladeWidget. if `exact` is specified,
     * the widget name is preserved and signals are carried over
     * (this is used to maintain names & signals in Cut/Paste context
     * as opposed to Copy/Paste contexts).
     * @param exact whether or not to creat an exact duplicate
     * @returns The newly created #GladeWidget
     */
    dup(exact: boolean): Widget
    /**
     * Copies a list of properties, if `as_load` is specified, then
     * properties that are not saved to the glade file are ignored.
     * @param template_props the #GladeProperty list to copy
     * @param as_load whether to behave as if loading the project
     * @param copy_parentless whether to copy reffed widgets at all
     * @param exact whether to copy reffed widgets exactly
     * @returns A newly allocated #GList of new #GladeProperty objects.
     */
    dup_properties(template_props: Property[], as_load: boolean, copy_parentless: boolean, exact: boolean): Property[]
    ensure_name(project: Project, use_command: boolean): void
    /**
     * Feed an event to be handled on the project GladeWidget
     * hierarchy.
     * @param event A #GdkEvent
     * @returns whether the event was handled or not.
     */
    event(event: Gdk.Event): boolean
    /**
     * Finds a child widget named `name`.
     * @param name child name
     * @returns The child of widget or %NULL if it was not found.
     */
    find_child(name: string): Widget | null
    /**
     * Creates a user friendly name to describe project widgets
     * @returns A newly allocated string
     */
    generate_path_name(): string | null
    /**
     * Returns a #GladeWidgetAction object indentified by `action_path`.
     * @param action_path a full action path including groups
     * @returns the action or %NULL if not found.
     */
    get_action(action_path: string): WidgetAction | null
    get_actions(): WidgetAction[]
    get_adaptor(): WidgetAdaptor
    /**
     * Fetches any wrapped children of `widget`.
     * @returns The children of widget <note><para>This differs from a direct call to glade_widget_adaptor_get_children() as it only returns children which have an associated GladeWidget. This function will not return any placeholders or internal composite children that have not been exposed for Glade configuration</para></note>
     */
    get_children(): GObject.Object[]
    get_display_name(): string
    get_internal(): string
    /**
     * Checks if `widget` is a composite template to be used
     * with gtk_widget_class_set_template().
     * @returns whether @widget is composite.
     */
    get_is_composite(): boolean
    /**
     * Get the current locked widget, locked widgets cannot
     * be removed from the project until unlocked
     * @returns a #GladeWidget or %NULL if none is locked
     */
    get_locker(): Widget | null
    get_name(): string
    get_object(): GObject.Object
    /**
     * Returns a #GladeWidgetAction object indentified by `action_path`.
     * @param action_path a full action path including groups
     * @returns the action or %NULL if not found.
     */
    get_pack_action(action_path: string): WidgetAction | null
    get_pack_actions(): WidgetAction[]
    get_pack_property(id_property: string): Property | null
    get_packing_properties(): Property[]
    get_parent(): Widget
    get_parentless_reffed_widgets(): Property[]
    get_parentless_widget_ref(): Property
    get_project(): Project
    get_properties(): Property[]
    get_property(id_property: string): Property | null

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Compiles a list of #GladeSignal elements
     * @returns a newly allocated #GList of #GladeSignal, the caller must call g_list_free() to free the list.
     */
    get_signal_list(): Signal[]
    get_signal_model(): Gtk.TreeModel
    get_toplevel(): Widget
    has_decendant(type: GObject.GType): boolean
    has_name(): boolean
    has_prop_refs(): boolean
    /**
     * Hide `widget`
     */
    hide(): void
    in_project(): boolean
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GladeWidget
     * @returns %TRUE if @ancestor contains @widget as a child, grandchild, great grandchild, etc.
     */
    is_ancestor(ancestor: Widget): boolean
    list_locked_widgets(): Widget[]
    list_prop_refs(): Property[]
    list_signal_handlers(signal_name: string): Signal[]
    /**
     * Sets `locked` to be in a locked up state
     * spoken for by `widget,` locked widgets cannot
     * be removed from the project until unlocked.
     * @param locked The #GladeWidget to lock
     */
    lock(locked: Widget): void
    /**
     * This function retrieves the value of the property `property_name` on
     * the runtime object of `widget` and sets it in `value`.
     * @param property_name The property identifier
     * @param value The #GValue
     */
    object_get_property(property_name: string, value: any): void
    /**
     * This function applies `value` to the property `property_name` on
     * the runtime object of `widget`.
     * @param property_name The property identifier
     * @param value The #GValue
     */
    object_set_property(property_name: string, value: any): void
    pack_property_default(id_property: string): boolean
    /**
     * Resets `id_property` in `widget'`s packing properties to it's default value
     * @param id_property a string naming a #GladeProperty
     * @returns whether @id_property was found or not.
     */
    pack_property_reset(id_property: string): boolean
    /**
     * Sets the enabled state of `id_property` in `widget'`s packing
     * properties; this is used for optional properties.
     * @param id_property a string naming a #GladeProperty
     * @param enabled setting enabled or disabled
     * @returns whether @id_property was found or not.
     */
    pack_property_set_enabled(id_property: string, enabled: boolean): boolean
    /**
     * Sets whether `id_property` in `widget` should be special cased
     * to always be saved regardless of its default value.
     * (used for some special cases like properties
     * that are assigned initial values in composite widgets
     * or derived widget code).
     * @param id_property a string naming a #GladeProperty
     * @param setting the setting
     * @returns whether @id_property was found or not.
     */
    pack_property_set_save_always(id_property: string, setting: boolean): boolean
    /**
     * Sets the sensitivity of `id_property` in `widget'`s packing properties.
     * @param id_property a string naming a #GladeProperty
     * @param sensitive setting sensitive or insensitive
     * @param reason a description of why the user cant edit this property          which will be used as a tooltip
     * @returns whether @id_property was found or not.
     */
    pack_property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean
    /**
     * Same as glade_widget_property_string() but for packing
     * properties.
     * @param id_property a string naming a #GladeProperty
     * @param value the #GValue to print or %NULL
     * @returns A newly allocated string representing @id_property
     */
    pack_property_string(id_property: string, value: any): string | null
    /**
     * Returns whether placeholders should be used
     * in operations concerning this parent & child.
     * 
     * Currently that criteria is whether `parent` is a
     * GtkContainer, `widget` is a GtkWidget and the parent
     * adaptor has been marked to use placeholders.
     * @param widget The child #GladeWidget
     * @returns whether to use placeholders for this relationship.
     */
    placeholder_relation(widget: Widget): boolean
    property_default(id_property: string): boolean
    property_original_default(id_property: string): boolean
    /**
     * Resets `id_property` in `widget` to it's default value
     * @param id_property a string naming a #GladeProperty
     * @returns whether @id_property was found or not.
     */
    property_reset(id_property: string): boolean
    /**
     * Sets the enabled state of `id_property` in `widget;` this is
     * used for optional properties.
     * @param id_property a string naming a #GladeProperty
     * @param enabled setting enabled or disabled
     * @returns whether @id_property was found or not.
     */
    property_set_enabled(id_property: string, enabled: boolean): boolean
    /**
     * Sets whether `id_property` in `widget` should be special cased
     * to always be saved regardless of its default value.
     * (used for some special cases like properties
     * that are assigned initial values in composite widgets
     * or derived widget code).
     * @param id_property a string naming a #GladeProperty
     * @param setting the setting
     * @returns whether @id_property was found or not.
     */
    property_set_save_always(id_property: string, setting: boolean): boolean
    /**
     * Sets the sensitivity of `id_property` in `widget`
     * @param id_property a string naming a #GladeProperty
     * @param sensitive setting sensitive or insensitive
     * @param reason a description of why the user cant edit this property          which will be used as a tooltip
     * @returns whether @id_property was found or not.
     */
    property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean
    /**
     * Creates a printable string representing `id_property` in
     * `widget,` if `value` is specified it will be used in place
     * of `id_property'`s real value (this is a convenience
     * function to print/debug properties usually from plugin
     * backends).
     * @param id_property a string naming a #GladeProperty
     * @param value the #GValue to print or %NULL
     * @returns A newly allocated string representing @id_property
     */
    property_string(id_property: string, value: any): string | null
    /**
     * Reads in a child widget from the xml (handles 'child' tag)
     * @param node a #GladeXmlNode
     */
    read_child(node: XmlNode): void
    /**
     * Replaces the current widget instance with
     * a new one while preserving all properties children and
     * takes care of reparenting.
     */
    rebuild(): void
    /**
     * Removes `child` from `parent` in a generic way for this #GladeWidget parent.
     * @param child the #GladeWidget to add
     */
    remove_child(child: Widget): void
    /**
     * Removes `property` from `widget` 's list of referenced properties.
     * 
     * Note: this is used to track properties on other objects that
     *       refer to this object.
     * @param property the #GladeProperty
     */
    remove_prop_ref(property: Property): void
    /**
     * Removes the #GladeProperty indicated by `id_property`
     * from `widget` (this is intended for use in the plugin, to
     * remove properties from composite children that don't make
     * sense to allow the user to specify, notably - properties
     * that are proxied through the composite widget's properties or
     * style properties).
     * @param id_property the name of the property
     */
    remove_property(id_property: string): void
    /**
     * Removes a signal handler from `widget`
     * @param signal_handler The #GladeSignal
     */
    remove_signal_handler(signal_handler: Signal): void
    /**
     * Replaces a GObject with another GObject inside a #GladeWidget which
     * behaves as a container.
     * 
     * Note that both GObjects must be owned by a GladeWidget.
     * @param old_object a #GObject
     * @param new_object a #GObject
     */
    replace(old_object: GObject.Object, new_object: GObject.Object): void
    /**
     * Sets the sensitivity of `action_path` in `widget`
     * @param action_path a full action path including groups
     * @param sensitive setting sensitive or insensitive
     * @returns whether @action_path was found or not.
     */
    set_action_sensitive(action_path: string, sensitive: boolean): boolean
    /**
     * Sets the visibility of `action_path` in `widget`
     * @param action_path a full action path including groups
     * @param visible setting visible or invisible
     * @returns whether @action_path was found or not.
     */
    set_action_visible(action_path: string, visible: boolean): boolean
    set_child_type_from_node(child: GObject.Object, node: XmlNode): void
    set_in_project(in_project: boolean): void
    /**
     * Sets the internal name of `widget` to `internal`
     * @param internal The internal name
     */
    set_internal(internal: string): void
    /**
     * Set's this widget to be toplevel composite object to be
     * eventually used with gtk_widget_class_set_template()
     * 
     * Only one widget in a project should be composite.
     * @param composite whether `widget` should be a composite template
     */
    set_is_composite(composite: boolean): void
    /**
     * Sets `widget'`s name to `name`.
     * @param name a string
     */
    set_name(name: string): void
    /**
     * Sets the sensitivity of `action_path` in `widget`
     * @param action_path a full action path including groups
     * @param sensitive setting sensitive or insensitive
     * @returns whether @action_path was found or not.
     */
    set_pack_action_sensitive(action_path: string, sensitive: boolean): boolean
    /**
     * Sets the visibility of `action_path` in `widget`
     * @param action_path a full action path including groups
     * @param visible setting visible or invisible
     * @returns whether @action_path was found or not.
     */
    set_pack_action_visible(action_path: string, visible: boolean): boolean
    /**
     * Generates the packing_properties list of the widget, given
     * the class of the container we are adding the widget to.
     * If the widget already has packing_properties, but the container
     * has changed, the current list is freed and replaced.
     * @param container The parent #GladeWidget
     */
    set_packing_properties(container: Widget): void
    /**
     * sets the parenting #GladeWidget
     * @param parent the parenting #GladeWidget (or %NULL)
     */
    set_parent(parent: Widget | null): void
    /**
     * Makes `widget` belong to `project`.
     * @param project a #GladeProject
     */
    set_project(project: Project): void
    set_support_warning(warning: string): void
    /**
     * Display `widget` in it's project's GladeDesignView
     */
    show(): void
    /**
     * Notifies that support metadata has changed on the widget.
     */
    support_changed(): void
    /**
     * Unlocks `widget` so that it can be removed
     * from the project again
     */
    unlock(): void
    /**
     * Verify this widget for deprecation and versioning warnings.
     * 
     * This function will update the widget's support warning.
     */
    verify(): void
    /**
     * Recursively writes out `widget` and its children
     * and appends the created #GladeXmlNode to `node`.
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write(context: XmlContext, node: XmlNode): void
    /**
     * Writes out a widget to the xml, takes care
     * of packing properties and special child types.
     * @param child The child #GladeWidget to write
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write_child(child: Widget, context: XmlContext, node: XmlNode): void
    /**
     * Writes out a placeholder to the xml
     * @param object A #GladePlaceholder
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write_placeholder(object: GObject.Object, context: XmlContext, node: XmlNode): void
    write_signals(context: XmlContext, node: XmlNode): void
    write_special_child_prop(object: GObject.Object, context: XmlContext, node: XmlNode): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Widget

    /**
     * Adds `child` to `parent` in a generic way for this #GladeWidget parent.
     * @virtual 
     * @param child the #GladeWidget to add
     * @param at_mouse whether the added widget should be added            at the current mouse position
     */
    vfunc_add_child(child: Widget, at_mouse: boolean): void
    /**
     * Adds a signal handler for `widget`
     * @virtual 
     * @param signal_handler The #GladeSignal
     */
    vfunc_add_signal_handler(signal_handler: Signal): void
    vfunc_button_press_event(event: Gdk.Event): number
    vfunc_button_release_event(event: Gdk.Event): number
    vfunc_change_signal_handler(new_signal_handler: Signal): void
    /**
     * Feed an event to be handled on the project GladeWidget
     * hierarchy.
     * @virtual 
     * @param event A #GdkEvent
     * @returns whether the event was handled or not.
     */
    vfunc_event(event: Gdk.Event): boolean
    vfunc_motion_notify_event(event: Gdk.Event): number
    /**
     * Removes `child` from `parent` in a generic way for this #GladeWidget parent.
     * @virtual 
     * @param child the #GladeWidget to add
     */
    vfunc_remove_child(child: Widget): void
    /**
     * Removes a signal handler from `widget`
     * @virtual 
     * @param signal_handler The #GladeSignal
     */
    vfunc_remove_signal_handler(signal_handler: Signal): void
    vfunc_replace_child(old_object: GObject.Object, new_object: GObject.Object): void

    // Own signals of Gladeui-2.0.Gladeui.Widget

    connect(sigName: "add-signal-handler", callback: Widget.AddSignalHandlerSignalCallback): number
    connect_after(sigName: "add-signal-handler", callback: Widget.AddSignalHandlerSignalCallback): number
    emit(sigName: "add-signal-handler", arg1: Signal, ...args: any[]): void
    connect(sigName: "button-press-event", callback: Widget.ButtonPressEventSignalCallback): number
    connect_after(sigName: "button-press-event", callback: Widget.ButtonPressEventSignalCallback): number
    emit(sigName: "button-press-event", arg1: Gdk.Event, ...args: any[]): void
    connect(sigName: "button-release-event", callback: Widget.ButtonReleaseEventSignalCallback): number
    connect_after(sigName: "button-release-event", callback: Widget.ButtonReleaseEventSignalCallback): number
    emit(sigName: "button-release-event", arg1: Gdk.Event, ...args: any[]): void
    connect(sigName: "change-signal-handler", callback: Widget.ChangeSignalHandlerSignalCallback): number
    connect_after(sigName: "change-signal-handler", callback: Widget.ChangeSignalHandlerSignalCallback): number
    emit(sigName: "change-signal-handler", arg1: Signal, ...args: any[]): void
    connect(sigName: "motion-notify-event", callback: Widget.MotionNotifyEventSignalCallback): number
    connect_after(sigName: "motion-notify-event", callback: Widget.MotionNotifyEventSignalCallback): number
    emit(sigName: "motion-notify-event", arg1: Gdk.Event, ...args: any[]): void
    connect(sigName: "remove-signal-handler", callback: Widget.RemoveSignalHandlerSignalCallback): number
    connect_after(sigName: "remove-signal-handler", callback: Widget.RemoveSignalHandlerSignalCallback): number
    emit(sigName: "remove-signal-handler", arg1: Signal, ...args: any[]): void
    connect(sigName: "support-changed", callback: Widget.SupportChangedSignalCallback): number
    connect_after(sigName: "support-changed", callback: Widget.SupportChangedSignalCallback): number
    emit(sigName: "support-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Widget

    connect(sigName: "notify::adaptor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::adaptor", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::adaptor", ...args: any[]): void
    connect(sigName: "notify::anarchist", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anarchist", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anarchist", ...args: any[]): void
    connect(sigName: "notify::composite", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite", ...args: any[]): void
    connect(sigName: "notify::internal", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::internal", ...args: any[]): void
    connect(sigName: "notify::internal-name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::internal-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::object", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::project", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::project", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::properties", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::properties", ...args: any[]): void
    connect(sigName: "notify::reason", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reason", ...args: any[]): void
    connect(sigName: "notify::support-warning", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-warning", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::support-warning", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: "notify::template-exact", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template-exact", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template-exact", ...args: any[]): void
    connect(sigName: "notify::toplevel-height", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toplevel-height", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toplevel-height", ...args: any[]): void
    connect(sigName: "notify::toplevel-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toplevel-width", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toplevel-width", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Widget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Widget extends GObject.InitiallyUnowned {

    // Own properties of Gladeui-2.0.Gladeui.Widget

    static name: string
    static $gtype: GObject.GType<Widget>

    // Constructors of Gladeui-2.0.Gladeui.Widget

    constructor(config?: Widget.ConstructorProperties) 
    _init(config?: Widget.ConstructorProperties): void
    /**
     * Currently only motion and button events are handled (see GLADE_WIDGET_IS_EVENT)
     * @param event a GdkEvent
     * @returns the associated #GdkDevice for this glade widget event.
     */
    static get_device_from_event(event: Gdk.Event): Gdk.Device
    static get_from_gobject(object: any | null): Widget
    /**
     * Unsets superuser mode
     */
    static pop_superuser(): void
    /**
     * Sets superuser mode
     */
    static push_superuser(): void
    /**
     * Creates a new #GladeWidget from a XML node.
     * 
     * If node is a template and its parent class is abstract/non instantiatable,
     * Glade will use a class with the GladeInstantiable prefix instead.
     * 
     * For example, with a GtkBin template Glade will GladeInstantiableGtkBin class
     * @param project a #GladeProject
     * @param parent The parent #GladeWidget or %NULL
     * @param node a #GladeXmlNode
     * @param internal the name of an internal child name
     * @returns a new #GladeWidget for @project, based on @node
     */
    static read(project: Project, parent: Widget | null, node: XmlNode, internal: string | null): Widget
    /**
     * Checks if we are in superuser mode.
     * 
     * Superuser mode is when we are
     *   - Loading a project
     *   - Dupping a widget recursively
     *   - Rebuilding an instance for a construct-only property
     * 
     * In these cases, we must act like a load, this should be checked
     * from the plugin when implementing containers, when undo/redo comes
     * around, the plugin is responsable for maintaining the same container
     * size when widgets are added/removed.
     */
    static superuser(): boolean
}

export module WidgetAction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.WidgetAction

        definition?: any | null
        sensitive?: boolean | null
        visible?: boolean | null
    }

}

export interface WidgetAction {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAction

    readonly definition: any
    sensitive: boolean
    visible: boolean

    // Own fields of Gladeui-2.0.Gladeui.WidgetAction

    parent_instance: GObject.Object
    priv: WidgetActionPrivate

    // Owm methods of Gladeui-2.0.Gladeui.WidgetAction

    get_children(): WidgetActionDef[]
    get_def(): WidgetActionDef
    get_sensitive(): boolean
    get_visible(): boolean
    /**
     * Set whether or not this action is sensitive.
     * @param sensitive the sensitivity to set
     */
    set_sensitive(sensitive: boolean): void
    set_visible(visible: boolean): void

    // Class property signals of Gladeui-2.0.Gladeui.WidgetAction

    connect(sigName: "notify::definition", callback: (($obj: WidgetAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::definition", callback: (($obj: WidgetAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::definition", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WidgetAction extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAction

    static name: string
    static $gtype: GObject.GType<WidgetAction>

    // Constructors of Gladeui-2.0.Gladeui.WidgetAction

    constructor(config?: WidgetAction.ConstructorProperties) 
    _init(config?: WidgetAction.ConstructorProperties): void
}

export module WidgetAdaptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.WidgetAdaptor

        book?: string | null
        catalog?: string | null
        generic_name?: string | null
        icon_name?: string | null
        name?: string | null
        query?: boolean | null
        special_child_type?: string | null
        title?: string | null
        type?: GObject.GType | null
        genericName?: string | null
        iconName?: string | null
        specialChildType?: string | null
    }

}

export interface WidgetAdaptor {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAdaptor

    readonly book: string | null
    readonly catalog: string | null
    readonly cursor: any
    readonly generic_name: string | null
    readonly genericName: string | null
    readonly icon_name: string | null
    readonly iconName: string | null
    readonly name: string | null
    query: boolean
    readonly special_child_type: string | null
    readonly specialChildType: string | null
    title: string | null
    readonly type: GObject.GType

    // Own fields of Gladeui-2.0.Gladeui.WidgetAdaptor

    parent_instance: GObject.Object

    // Owm methods of Gladeui-2.0.Gladeui.WidgetAdaptor

    /**
     * An adaptor function to be called on widget actions.
     * @param object The #GObject
     * @param action_path The action identifier in the action tree
     */
    action_activate(object: GObject.Object, action_path: string): void
    /**
     * Add an action to `adaptor`.
     * If the action is present then it overrides label and stock
     * @param action_path The identifier of this action in the action tree
     * @param label A translated label to show in the UI for this action
     * @param stock If set, this stock item will be shown in the UI along side the label.
     * @param important if this action is important.
     * @returns whether or not the action was added/updated.
     */
    action_add(action_path: string, label: string, stock: string, important: boolean): boolean
    /**
     * Remove an `adaptor'`s action.
     * @param action_path The identifier of this action in the action tree
     * @returns whether or not the action was removed.
     */
    action_remove(action_path: string): boolean
    /**
     * This delegate function is used to create dynamically customized
     * submenus. Called only for actions that don't have children.
     * @param object The #GObject
     * @param action_path The action identifier in the action tree
     * @returns A newly created #GtkMenu or %NULL
     */
    action_submenu(object: GObject.Object, action_path: string): Gtk.Widget | null
    /**
     * Create a list of actions.
     * @returns a new list of GladeWidgetAction.
     */
    actions_new(): WidgetAction[]
    /**
     * Adds `child` to `container`.
     * @param container The #GObject container
     * @param child The #GObject child
     */
    add(container: GObject.Object, child: GObject.Object): void
    /**
     * Checks whether `child` can be added to `parent`.
     * 
     * If `user_feedback` is %TRUE and `child` cannot be
     * added then this shows a notification dialog to the user
     * explaining why.
     * @param container A #GObject container
     * @param child A #GObject child
     * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
     * @returns whether @child can be added to @parent.
     */
    add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean
    /**
     * An adaptor function to be called on widget actions.
     * @param container The #GObject container
     * @param object The #GObject
     * @param action_path The action identifier in the action tree
     */
    child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void
    /**
     * Gets `child'`s packing property identified by `property_name`.
     * @param container The #GObject container
     * @param child The #GObject child
     * @param property_name The id of the property
     * @param value The `GValue`
     */
    child_get_property(container: GObject.Object, child: GObject.Object, property_name: string, value: any): void
    /**
     * Sets `child'`s packing property identified by `property_name` to `value`.
     * @param container The #GObject container
     * @param child The #GObject child
     * @param property_name The id of the property
     * @param value The `GValue`
     */
    child_set_property(container: GObject.Object, child: GObject.Object, property_name: string, value: any): void
    /**
     * This delegate function is always called whenever setting any
     * properties with the exception of load time, and copy/paste time
     * (basically the two places where we recreate a hierarchy that we
     * already know "works") its basically an optional backend provided
     * boundary checker for properties.
     * @param container The #GObject container
     * @param child The #GObject child
     * @param property_name The id of the property
     * @param value The `GValue`
     * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
     */
    child_verify_property(container: GObject.Object, child: GObject.Object, property_name: string, value: any): boolean
    /**
     * This function is called to construct a GObject instance for
     * a #GladeWidget of the said `adaptor`. (provided for language
     * bindings that may need to construct a wrapper object).
     * @param n_parameters amount of construct parameters
     * @param parameters array of construct #GParameter args to create              the new object with.
     * @returns A newly created #GObject
     */
    construct_object(n_parameters: number, parameters: GObject.Parameter): GObject.Object
    /**
     * This is used to allow the backend to override the way an
     * editor page is layed out (note that editor widgets are created
     * on demand and not at startup).
     * @param type The #GladeEditorPageType
     * @returns A new #GladeEditable widget
     */
    create_editable(type: EditorPageType): Editable
    /**
     * Creates a GladeEditorProperty to edit `def`
     * @param def The #GladePropertyDef to be edited
     * @param use_command whether to use the GladeCommand interface to commit property changes
     * @returns A newly created #GladeEditorProperty
     */
    create_eprop(def: PropertyDef, use_command: boolean): EditorProperty
    /**
     * Creates a #GladeEditorProperty to edit #GladePropertyDef `name` in `adaptor`
     * @param property_id the string if of the corresponding #GladePropertyDef to be edited
     * @param packing whether this refers to a packing property
     * @param use_command whether to use the GladeCommand interface to commit property changes
     * @returns A newly created #GladeEditorProperty
     */
    create_eprop_by_name(property_id: string, packing: boolean, use_command: boolean): EditorProperty
    default_params(construct: boolean): GObject.Parameter[]
    /**
     * Checks whether `widget` depends on `another` to be placed earlier in
     * the glade file.
     * @param widget A #GladeWidget of the adaptor
     * @param another another #GladeWidget
     * @returns whether @widget depends on @another being parsed first in the resulting glade file.
     */
    depends(widget: Widget, another: Widget): boolean
    /**
     * This function is called to destroy a GObject instance.
     * @param object The object to destroy
     */
    destroy_object(object: GObject.Object): void
    /**
     * Assumes `pspec` is a property in an object class wrapped by `adaptor,`
     * this function will search for the specific parent adaptor class which
     * originally introduced `pspec`.
     * @param pspec a #GParamSpec
     * @returns the closest #GladeWidgetAdaptor in the ancestry to @adaptor          which is responsable for introducing @pspec.
     */
    from_pspec(pspec: GObject.ParamSpec): WidgetAdaptor
    get_book(): string
    get_catalog(): string
    /**
     * Lists the children of `container`.
     * @param container The #GObject container
     * @returns A #GList of children
     */
    get_children(container: GObject.Object): GObject.Object[]
    get_display_name(): string
    get_generic_name(): string
    get_icon_name(): string
    /**
     * Retrieves the internal object `internal_name` from `object`
     * @param object The #GObject
     * @param internal_name The string identifier of the internal object
     * @returns The internal #GObject
     */
    get_internal_child(object: GObject.Object, internal_name: string): GObject.Object | null
    get_missing_icon(): string
    get_name(): string
    get_object_type(): GObject.GType
    /**
     * Retrieves the #GladePropertyDef for `name` in  `adaptor'`s child properties
     * @param name a string
     * @returns A #GladePropertyDef object
     */
    get_pack_property_def(name: string): PropertyDef | null
    /**
     * Gets the default value for `property_id` on a widget governed by
     * `child_adaptor` when parented in a widget governed by `parent_adaptor`
     * @param container_adaptor The #GladeWidgetAdaptor for the parent object
     * @param id The string property identifier
     * @returns a string representing the default value for @property_id
     */
    get_packing_default(container_adaptor: WidgetAdaptor, id: string): string
    get_packing_props(): PropertyDef[]
    get_parent_adaptor(): WidgetAdaptor
    get_properties(): PropertyDef[]
    /**
     * Gets `value` of `property_name` on `object`.
     * @param object The #GObject
     * @param property_name The property identifier
     * @param value The #GValue
     */
    get_property(object: GObject.Object, property_name: string, value: any): void

    // Overloads of get_property

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * Retrieves the #GladePropertyDef for `name` in `adaptor`
     * @param name a string
     * @returns A #GladePropertyDef object
     */
    get_property_def(name: string): PropertyDef | null
    /**
     * Looks up signal class `name` on `adaptor`.
     * @param name the name of the signal class.
     * @returns a #GladeSignalDef or %NULL
     */
    get_signal_def(name: string): SignalDef | null
    get_signals(): SignalDef[]
    get_title(): string
    /**
     * Get the _get_type () function name if it is set, a %NULL value means that the
     * default heuristic for getting the GType is enough for both Glade and GtkBuilder.
     * @returns The _get_type () function name or %NULL if none is set
     */
    get_type_func(): string | null
    has_child(container: GObject.Object, child: GObject.Object): boolean
    has_internal_children(): boolean
    /**
     * Checks whether or not this adaptor has support
     * to interface with child objects.
     * @returns whether or not @adaptor is a container
     */
    is_container(): boolean
    /**
     * Add a packing action to `adaptor`.
     * If the action is present then it overrides label and stock
     * @param action_path The identifier of this action in the action tree
     * @param label A translated label to show in the UI for this action
     * @param stock If set, this stock item will be shown in the UI along side the label.
     * @param important if this action is important.
     * @returns whether or not the action was added/updated.
     */
    pack_action_add(action_path: string, label: string, stock: string, important: boolean): boolean
    /**
     * Remove an `adaptor'`s packing action.
     * @param action_path The identifier of this action in the action tree
     * @returns whether or not the action was removed.
     */
    pack_action_remove(action_path: string): boolean
    /**
     * Create a list of packing actions.
     * @returns a new list of GladeWidgetAction.
     */
    pack_actions_new(): WidgetAction[]
    /**
     * An adaptor function to be called after the object is created
     * @param object The #GObject
     * @param reason The #GladeCreateReason that `object` was created for
     */
    post_create(object: GObject.Object, reason: CreateReason): void
    /**
     * This function is called to update load a child `widget`
     * from `node` when loading xml files (will recurse into
     * glade_widget_read())
     * @param widget The #GladeWidget
     * @param node The #GladeXmlNode
     */
    read_child(widget: Widget, node: XmlNode): void
    /**
     * This function is called to update `widget` from `node`
     * when loading xml files.
     * @param widget The #GladeWidget
     * @param node The #GladeXmlNode
     */
    read_widget(widget: Widget, node: XmlNode): void
    /**
     * Registers `adaptor` into the Glade core (every supported
     * object type must have a registered adaptor).
     */
    register(): void
    /**
     * Removes `child` from `container`.
     * @param container The #GObject container
     * @param child The #GObject child
     */
    remove(container: GObject.Object, child: GObject.Object): void
    /**
     * Replaces `old_obj` with `new_obj` in `container` while positioning
     * `new_obj` where `old_obj` was and assigning it appropriate packing
     * property values.
     * @param container The #GObject container
     * @param old_obj The old #GObject child
     * @param new_obj The new #GObject child
     */
    replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void
    /**
     * This delegate function is used to apply the property value on
     * the runtime object.
     * @param object The #GObject
     * @param property_name The property identifier
     * @param value The #GValue
     */
    set_property(object: GObject.Object, property_name: string, value: any): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * For normal properties this is used to serialize
     * property values, for custom properties its still
     * needed to update the UI for undo/redo items etc.
     * @param def The #GladePropertyDef
     * @param value The #GValue to convert to a string
     * @returns A newly allocated string representation of @value
     */
    string_from_value(def: PropertyDef, value: any): string | null
    /**
     * This delegate function is always called whenever setting any
     * properties with the exception of load time, and copy/paste time
     * (basically the two places where we recreate a hierarchy that we
     * already know "works") its basically an optional backend provided
     * boundary checker for properties.
     * @param object The #GObject
     * @param property_name The property identifier
     * @param value The #GValue
     * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
     */
    verify_property(object: GObject.Object, property_name: string, value: any): boolean
    /**
     * This function is called to write the child `widget` to `node`
     * when writing xml files (takes care of packing and recurses
     * into glade_widget_write())
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    write_child(widget: Widget, context: XmlContext, node: XmlNode): void
    /**
     * This function is called to write `widget` to `node`
     * when writing xml files.
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    write_widget(widget: Widget, context: XmlContext, node: XmlNode): void
    /**
     * This function is called to write `widget` to `node`
     * when writing xml files (after writing children)
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void

    // Own virtual methods of Gladeui-2.0.Gladeui.WidgetAdaptor

    /**
     * An adaptor function to be called on widget actions.
     * @virtual 
     * @param object The #GObject
     * @param action_path The action identifier in the action tree
     */
    vfunc_action_activate(object: GObject.Object, action_path: string): void
    /**
     * This delegate function is used to create dynamically customized
     * submenus. Called only for actions that don't have children.
     * @virtual 
     * @param object The #GObject
     * @param action_path The action identifier in the action tree
     * @returns A newly created #GtkMenu or %NULL
     */
    vfunc_action_submenu(object: GObject.Object, action_path: string): Gtk.Widget | null
    /**
     * Adds `child` to `container`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     */
    vfunc_add(container: GObject.Object, child: GObject.Object): void
    /**
     * Checks whether `child` can be added to `parent`.
     * 
     * If `user_feedback` is %TRUE and `child` cannot be
     * added then this shows a notification dialog to the user
     * explaining why.
     * @virtual 
     * @param container A #GObject container
     * @param child A #GObject child
     * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
     * @returns whether @child can be added to @parent.
     */
    vfunc_add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean
    /**
     * An adaptor function to be called on widget actions.
     * @virtual 
     * @param container The #GObject container
     * @param object The #GObject
     * @param action_path The action identifier in the action tree
     */
    vfunc_child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void
    /**
     * Gets `child'`s packing property identified by `property_name`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     * @param property_name The id of the property
     * @param value The `GValue`
     */
    vfunc_child_get_property(container: GObject.Object, child: GObject.Object, property_name: string, value: any): void
    /**
     * Sets `child'`s packing property identified by `property_name` to `value`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     * @param property_name The id of the property
     * @param value The `GValue`
     */
    vfunc_child_set_property(container: GObject.Object, child: GObject.Object, property_name: string, value: any): void
    /**
     * This delegate function is always called whenever setting any
     * properties with the exception of load time, and copy/paste time
     * (basically the two places where we recreate a hierarchy that we
     * already know "works") its basically an optional backend provided
     * boundary checker for properties.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     * @param property_name The id of the property
     * @param value The `GValue`
     * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
     */
    vfunc_child_verify_property(container: GObject.Object, child: GObject.Object, property_name: string, value: any): boolean
    /**
     * This function is called to construct a GObject instance for
     * a #GladeWidget of the said `adaptor`. (provided for language
     * bindings that may need to construct a wrapper object).
     * @virtual 
     * @param n_parameters amount of construct parameters
     * @param parameters array of construct #GParameter args to create              the new object with.
     * @returns A newly created #GObject
     */
    vfunc_construct_object(n_parameters: number, parameters: GObject.Parameter): GObject.Object
    /**
     * This is used to allow the backend to override the way an
     * editor page is layed out (note that editor widgets are created
     * on demand and not at startup).
     * @virtual 
     * @param type The #GladeEditorPageType
     * @returns A new #GladeEditable widget
     */
    vfunc_create_editable(type: EditorPageType): Editable
    /**
     * Creates a GladeEditorProperty to edit `def`
     * @virtual 
     * @param def The #GladePropertyDef to be edited
     * @param use_command whether to use the GladeCommand interface to commit property changes
     * @returns A newly created #GladeEditorProperty
     */
    vfunc_create_eprop(def: PropertyDef, use_command: boolean): EditorProperty
    vfunc_deep_post_create(object: GObject.Object, reason: CreateReason): void
    /**
     * Checks whether `widget` depends on `another` to be placed earlier in
     * the glade file.
     * @virtual 
     * @param widget A #GladeWidget of the adaptor
     * @param another another #GladeWidget
     * @returns whether @widget depends on @another being parsed first in the resulting glade file.
     */
    vfunc_depends(widget: Widget, another: Widget): boolean
    /**
     * This function is called to destroy a GObject instance.
     * @virtual 
     * @param object The object to destroy
     */
    vfunc_destroy_object(object: GObject.Object): void
    /**
     * Lists the children of `container`.
     * @virtual 
     * @param container The #GObject container
     * @returns A #GList of children
     */
    vfunc_get_children(container: GObject.Object): GObject.Object[]
    /**
     * Retrieves the internal object `internal_name` from `object`
     * @virtual 
     * @param object The #GObject
     * @param internal_name The string identifier of the internal object
     * @returns The internal #GObject
     */
    vfunc_get_internal_child(object: GObject.Object, internal_name: string): GObject.Object | null
    /**
     * Gets `value` of `property_name` on `object`.
     * @virtual 
     * @param object The #GObject
     * @param property_name The property identifier
     * @param value The #GValue
     */
    vfunc_get_property(object: GObject.Object, property_name: string, value: any): void

    // Overloads of vfunc_get_property

    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * An adaptor function to be called after the object is created
     * @virtual 
     * @param object The #GObject
     * @param reason The #GladeCreateReason that `object` was created for
     */
    vfunc_post_create(object: GObject.Object, reason: CreateReason): void
    /**
     * This function is called to update load a child `widget`
     * from `node` when loading xml files (will recurse into
     * glade_widget_read())
     * @virtual 
     * @param widget The #GladeWidget
     * @param node The #GladeXmlNode
     */
    vfunc_read_child(widget: Widget, node: XmlNode): void
    /**
     * This function is called to update `widget` from `node`
     * when loading xml files.
     * @virtual 
     * @param widget The #GladeWidget
     * @param node The #GladeXmlNode
     */
    vfunc_read_widget(widget: Widget, node: XmlNode): void
    /**
     * Removes `child` from `container`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     */
    vfunc_remove(container: GObject.Object, child: GObject.Object): void
    /**
     * Replaces `old_obj` with `new_obj` in `container` while positioning
     * `new_obj` where `old_obj` was and assigning it appropriate packing
     * property values.
     * @virtual 
     * @param container The #GObject container
     * @param old_obj The old #GObject child
     * @param new_obj The new #GObject child
     */
    vfunc_replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void
    /**
     * This delegate function is used to apply the property value on
     * the runtime object.
     * @virtual 
     * @param object The #GObject
     * @param property_name The property identifier
     * @param value The #GValue
     */
    vfunc_set_property(object: GObject.Object, property_name: string, value: any): void

    // Overloads of vfunc_set_property

    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * For normal properties this is used to serialize
     * property values, for custom properties its still
     * needed to update the UI for undo/redo items etc.
     * @virtual 
     * @param def The #GladePropertyDef
     * @param value The #GValue to convert to a string
     * @returns A newly allocated string representation of @value
     */
    vfunc_string_from_value(def: PropertyDef, value: any): string | null
    /**
     * This delegate function is always called whenever setting any
     * properties with the exception of load time, and copy/paste time
     * (basically the two places where we recreate a hierarchy that we
     * already know "works") its basically an optional backend provided
     * boundary checker for properties.
     * @virtual 
     * @param object The #GObject
     * @param property_name The property identifier
     * @param value The #GValue
     * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
     */
    vfunc_verify_property(object: GObject.Object, property_name: string, value: any): boolean
    /**
     * This function is called to write the child `widget` to `node`
     * when writing xml files (takes care of packing and recurses
     * into glade_widget_write())
     * @virtual 
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    vfunc_write_child(widget: Widget, context: XmlContext, node: XmlNode): void
    /**
     * This function is called to write `widget` to `node`
     * when writing xml files.
     * @virtual 
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    vfunc_write_widget(widget: Widget, context: XmlContext, node: XmlNode): void
    /**
     * This function is called to write `widget` to `node`
     * when writing xml files (after writing children)
     * @virtual 
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    vfunc_write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void

    // Class property signals of Gladeui-2.0.Gladeui.WidgetAdaptor

    connect(sigName: "notify::book", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::book", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::book", ...args: any[]): void
    connect(sigName: "notify::catalog", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::catalog", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::catalog", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::generic-name", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-name", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generic-name", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::query", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::query", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: "notify::special-child-type", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::special-child-type", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::special-child-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: WidgetAdaptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WidgetAdaptor extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAdaptor

    static name: string
    static $gtype: GObject.GType<WidgetAdaptor>

    // Constructors of Gladeui-2.0.Gladeui.WidgetAdaptor

    constructor(config?: WidgetAdaptor.ConstructorProperties) 
    _init(config?: WidgetAdaptor.ConstructorProperties): void
    /**
     * Dynamically creates a subclass of #GladeWidgetAdaptor and subclasses
     * the closest parent adaptor (parent class adapters must be created/registered
     * prior to child classes, otherwise inheritance wont work) and parses in
     * the relevant catalog info.
     * @param catalog A #GladeCatalog
     * @param class_node the #GladeXmlNode to load
     * @param module the plugin GModule.
     * @returns a newly allocated #GladeWidgetAdaptor
     */
    static from_catalog(catalog: Catalog, class_node: XmlNode, module: GModule.Module): WidgetAdaptor
    static get_by_name(name: string): WidgetAdaptor | null
    static get_by_type(type: GObject.GType): WidgetAdaptor | null
    /**
     * Compiles a list of all registered adaptors.
     * @returns A newly allocated #GList which must be freed with g_list_free()
     */
    static list_adaptors(): WidgetAdaptor[]
}

export interface AdaptorChooserClass {

    // Own fields of Gladeui-2.0.Gladeui.AdaptorChooserClass

    parent_class: Gtk.BoxClass
}

export abstract class AdaptorChooserClass {

    // Own properties of Gladeui-2.0.Gladeui.AdaptorChooserClass

    static name: string
}

export interface AppClass {

    // Own fields of Gladeui-2.0.Gladeui.AppClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class AppClass {

    // Own properties of Gladeui-2.0.Gladeui.AppClass

    static name: string
}

export interface BaseEditorClass {

    // Own fields of Gladeui-2.0.Gladeui.BaseEditorClass

    parent_class: Gtk.BoxClass
    child_selected: (editor: BaseEditor, gchild: Widget) => void
    change_type: (editor: BaseEditor, gchild: Widget, type: GObject.GType) => boolean
    get_display_name: (editor: BaseEditor, gchild: Widget) => string | null
    delete_child: (editor: BaseEditor, parent: Widget, gchild: Widget) => boolean
    move_child: (editor: BaseEditor, gparent: Widget, gchild: Widget) => boolean
    padding: any[]
}

export abstract class BaseEditorClass {

    // Own properties of Gladeui-2.0.Gladeui.BaseEditorClass

    static name: string
}

export interface Catalog {

    // Owm methods of Gladeui-2.0.Gladeui.Catalog

    get_adaptors(): WidgetAdaptor[]
    get_book(): string
    get_domain(): string
    get_icon_prefix(): string
    get_major_version(): number
    get_minor_version(): number
    get_name(): string
    get_prefix(): string
    get_targets(): TargetableVersion[]
    get_widget_groups(): WidgetGroup[]
}

export class Catalog {

    // Own properties of Gladeui-2.0.Gladeui.Catalog

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Catalog

    /**
     * Adds a new path to the list of path to look catalogs for.
     * @param path the new path containing catalogs
     */
    static add_path(path: string): void
    /**
     * Destroy and free all resources related with every loaded catalog.
     */
    static destroy_all(): void
    static get_extra_paths(): string[]
    static is_loaded(name: string): boolean
    /**
     * Loads all available catalogs in the system.
     * First loads catalogs from GLADE_ENV_CATALOG_PATH,
     * then from glade_app_get_catalogs_dir() and finally from paths specified with
     * glade_catalog_add_path()
     * @returns the list of loaded GladeCatalog *
     */
    static load_all(): Catalog[]
    /**
     * Remove path from the list of path to look catalogs for.
     * %NULL to remove all paths.
     * @param path the new path containing catalogs or %NULL to remove all of them
     */
    static remove_path(path: string | null): void
}

export interface CellRendererIconClass {

    // Own fields of Gladeui-2.0.Gladeui.CellRendererIconClass

    parent_class: Gtk.CellRendererPixbufClass
    activate: (cell_renderer_icon: CellRendererIcon, path: string) => void
}

export abstract class CellRendererIconClass {

    // Own properties of Gladeui-2.0.Gladeui.CellRendererIconClass

    static name: string
}

export interface ClipboardClass {

    // Own fields of Gladeui-2.0.Gladeui.ClipboardClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class ClipboardClass {

    // Own properties of Gladeui-2.0.Gladeui.ClipboardClass

    static name: string
}

export interface CommandClass {

    // Own fields of Gladeui-2.0.Gladeui.CommandClass

    parent_class: GObject.ObjectClass
    execute: (command: Command) => boolean
    undo: (command: Command) => boolean
    unifies: (command: Command, other: Command) => boolean
    collapse: (command: Command, other: Command) => void
    padding: any[]
}

export abstract class CommandClass {

    // Own properties of Gladeui-2.0.Gladeui.CommandClass

    static name: string
}

export interface CommandSetPropData {

    // Own fields of Gladeui-2.0.Gladeui.CommandSetPropData

    /**
     * A #GladeProperty to set
     * @field 
     */
    property: Property
    /**
     * The new #GValue to assign to `property`
     * @field 
     */
    new_value: any
    /**
     * The old #GValue of `property`
     * @field 
     */
    old_value: any
}

/**
 * #GladeProperty can be set in a list as one command,
 * for Undo purposes; we store the list of #GladeCommandSetPropData with
 * their old and new #GValue.
 * @record 
 */
export class CommandSetPropData {

    // Own properties of Gladeui-2.0.Gladeui.CommandSetPropData

    static name: string
}

export interface Cursor {

    // Own fields of Gladeui-2.0.Gladeui.Cursor

    selector: Gdk.Cursor
    add_widget: Gdk.Cursor
    resize_top_left: Gdk.Cursor
    resize_top_right: Gdk.Cursor
    resize_bottom_left: Gdk.Cursor
    resize_bottom_right: Gdk.Cursor
    resize_left: Gdk.Cursor
    resize_right: Gdk.Cursor
    resize_top: Gdk.Cursor
    resize_bottom: Gdk.Cursor
    drag: Gdk.Cursor
    add_widget_pixbuf: GdkPixbuf.Pixbuf
}

export class Cursor {

    // Own properties of Gladeui-2.0.Gladeui.Cursor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Cursor

    static get_add_widget_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Initializes cursors for use with glade_cursor_set().
     */
    static init(): void
    /**
     * Sets the cursor for `window` to something appropriate based on `type`.
     * (also sets the cursor on all visible project widgets)
     * @param project 
     * @param window a #GdkWindow
     * @param type a #GladeCursorType
     */
    static set(project: Project, window: Gdk.Window, type: CursorType): void
}

export interface DesignViewClass {

    // Own fields of Gladeui-2.0.Gladeui.DesignViewClass

    parent_class: Gtk.BoxClass
    padding: any[]
}

export abstract class DesignViewClass {

    // Own properties of Gladeui-2.0.Gladeui.DesignViewClass

    static name: string
}

export interface EditableInterface {

    // Own fields of Gladeui-2.0.Gladeui.EditableInterface

    g_iface: GObject.TypeInterface
    load: (editable: Editable, widget: Widget) => void
    set_show_name: (editable: Editable, show_name: boolean) => void
}

export abstract class EditableInterface {

    // Own properties of Gladeui-2.0.Gladeui.EditableInterface

    static name: string
}

export interface EditorClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorClass

    parent_class: Gtk.BoxClass
    padding: any[]
}

export abstract class EditorClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorClass

    static name: string
}

export interface EditorPropertyClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorPropertyClass

    parent_class: Gtk.BoxClass
    load: (eprop: EditorProperty, property: Property) => void
    commit: (eprop: EditorProperty, value: any) => void
    changed: (eprop: EditorProperty, property: Property) => any | null
    padding: any[]
}

export abstract class EditorPropertyClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorPropertyClass

    static name: string
}

export interface EditorSkeletonClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorSkeletonClass

    parent_class: Gtk.BoxClass
}

export abstract class EditorSkeletonClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorSkeletonClass

    static name: string
}

export interface EditorTableClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorTableClass

    parent: Gtk.GridClass
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
}

export abstract class EditorTableClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorTableClass

    static name: string
}

export interface IDAllocator {

    // Owm methods of Gladeui-2.0.Gladeui.IDAllocator

    /**
     * TODO: write me
     * @returns the id
     */
    allocate(): number
    /**
     * Frees `allocator` and its associated memory
     */
    destroy(): void
    /**
     * TODO: write me
     * @param id the id given by glade_id_allocator_allocate()
     */
    release(id: number): void
}

export class IDAllocator {

    // Own properties of Gladeui-2.0.Gladeui.IDAllocator

    static name: string
}

export interface InspectorClass {

    // Own fields of Gladeui-2.0.Gladeui.InspectorClass

    parent_class: Gtk.BoxClass
    selection_changed: (inspector: Inspector) => void
    item_activated: (inspector: Inspector) => void
    padding: any[]
}

export abstract class InspectorClass {

    // Own properties of Gladeui-2.0.Gladeui.InspectorClass

    static name: string
}

export interface NameContext {

    // Owm methods of Gladeui-2.0.Gladeui.NameContext

    add_name(name: string): boolean
    destroy(): void
    has_name(name: string): boolean
    n_names(): number
    new_name(base_name: string): string | null
    release_name(name: string): void
}

export class NameContext {

    // Own properties of Gladeui-2.0.Gladeui.NameContext

    static name: string
}

export interface NamedIconChooserDialogClass {

    // Own fields of Gladeui-2.0.Gladeui.NamedIconChooserDialogClass

    parent_class: Gtk.DialogClass
    icon_activated: (dialog: NamedIconChooserDialog) => void
    selection_changed: (dialog: NamedIconChooserDialog) => void
    padding: any[]
}

export abstract class NamedIconChooserDialogClass {

    // Own properties of Gladeui-2.0.Gladeui.NamedIconChooserDialogClass

    static name: string
}

export interface PaletteClass {

    // Own fields of Gladeui-2.0.Gladeui.PaletteClass

    parent_class: Gtk.BoxClass
    refresh: (palette: Palette) => void
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
}

export abstract class PaletteClass {

    // Own properties of Gladeui-2.0.Gladeui.PaletteClass

    static name: string
}

export interface PalettePrivate {
}

export class PalettePrivate {

    // Own properties of Gladeui-2.0.Gladeui.PalettePrivate

    static name: string
}

export interface ParamSpecObjects {

    // Owm methods of Gladeui-2.0.Gladeui.ParamSpecObjects

    get_type(): GObject.GType
    set_type(type: GObject.GType): void
}

export class ParamSpecObjects {

    // Own properties of Gladeui-2.0.Gladeui.ParamSpecObjects

    static name: string
}

export interface PlaceholderClass {

    // Own fields of Gladeui-2.0.Gladeui.PlaceholderClass

    parent_class: Gtk.WidgetClass
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
}

export abstract class PlaceholderClass {

    // Own properties of Gladeui-2.0.Gladeui.PlaceholderClass

    static name: string
}

export interface PlaceholderPrivate {
}

export class PlaceholderPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PlaceholderPrivate

    static name: string
}

export interface ProjectClass {

    // Own fields of Gladeui-2.0.Gladeui.ProjectClass

    parent_class: GObject.ObjectClass
    add_object: (project: Project, object: Widget) => void
    remove_object: (project: Project, object: Widget) => void
    undo: (project: Project) => void
    redo: (project: Project) => void
    next_undo_item: (project: Project) => Command
    next_redo_item: (project: Project) => Command
    push_undo: (project: Project, cmd: Command) => void
    changed: (project: Project, command: Command, forward: boolean) => void
    widget_name_changed: (project: Project, widget: Widget) => void
    selection_changed: (project: Project) => void
    close: (project: Project) => void
    parse_finished: (project: Project) => void
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
    glade_reserved5: () => void
    glade_reserved6: () => void
    glade_reserved7: () => void
    glade_reserved8: () => void
}

export abstract class ProjectClass {

    // Own properties of Gladeui-2.0.Gladeui.ProjectClass

    static name: string
}

export interface ProjectPrivate {
}

export class ProjectPrivate {

    // Own properties of Gladeui-2.0.Gladeui.ProjectPrivate

    static name: string
}

export interface PropertyClass {

    // Own fields of Gladeui-2.0.Gladeui.PropertyClass

    parent_class: GObject.ObjectClass
    dup: (template_prop: Property, widget: Widget) => Property
    equals_value: (property: Property, value: any) => boolean
    set_value: (property: Property, value: any) => boolean
    get_value: (property: Property, value: any) => void
    sync: (property: Property) => void
    load: (property: Property) => void
    value_changed: (property: Property, old_value: any, new_value: any) => void
    tooltip_changed: (property: Property, tooltip: string, insensitive_tooltip: string, support_warning: string) => void
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
    glade_reserved5: () => void
    glade_reserved6: () => void
}

export abstract class PropertyClass {

    // Own properties of Gladeui-2.0.Gladeui.PropertyClass

    static name: string
}

export interface PropertyDef {

    // Owm methods of Gladeui-2.0.Gladeui.PropertyDef

    atk(): boolean
    clone(): PropertyDef
    common(): boolean
    /**
     * Compares value1 with value2 according to `property_def`.
     * @param value1 a GValue of correct type for `property_def`
     * @param value2 a GValue of correct type for `property_def`
     * @returns -1, 0 or +1, if value1 is found to be less than, equal to or greater than value2, respectively.
     */
    compare(value1: any, value2: any): number
    create_type(): string
    custom_layout(): boolean
    deprecated(): boolean
    deprecated_since_major(): number
    deprecated_since_minor(): number
    /**
     * Frees `property_def` and its associated memory.
     */
    free(): void
    get_adaptor(): WidgetAdaptor
    get_construct_only(): boolean
    get_default(): any
    get_ignore(): boolean
    get_is_packing(): boolean
    get_name(): string
    get_original_default(): any
    get_pspec(): GObject.ParamSpec
    get_tooltip(): string
    get_virtual(): boolean
    id(): string
    is_object(): boolean
    is_visible(): boolean
    load_defaults_from_spec(): void
    /**
     * Creates and appropriate GtkAdjustment for use in the editor
     * @returns An appropriate #GtkAdjustment for use in the Property editor
     */
    make_adjustment(): Gtk.Adjustment
    make_gvalue_from_string(string: string, project: Project): any
    make_string_from_gvalue(value: any): string | null
    match(comp: PropertyDef): boolean
    multiline(): boolean
    needs_sync(): boolean
    optional(): boolean
    optional_default(): boolean
    parentless_widget(): boolean
    query(): boolean
    save(): boolean
    save_always(): boolean
    set_adaptor(adaptor: WidgetAdaptor): void
    set_construct_only(construct_only: boolean): void
    set_ignore(ignore: boolean): void
    set_is_packing(is_packing: boolean): void
    set_name(name: string): void
    set_pspec(pspec: GObject.ParamSpec): void
    set_tooltip(tooltip: string): void
    set_virtual(value: boolean): void
    since_major(): number
    since_minor(): number
    stock(): boolean
    stock_icon(): boolean
    themed_icon(): boolean
    transfer_on_paste(): boolean
    translatable(): boolean
    void_value(value: any): boolean
    weight(): number
}

export class PropertyDef {

    // Own properties of Gladeui-2.0.Gladeui.PropertyDef

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.PropertyDef

    constructor(adaptor: WidgetAdaptor, id: string) 
    static new(adaptor: WidgetAdaptor, id: string): PropertyDef
    static new_from_spec(adaptor: WidgetAdaptor, spec: GObject.ParamSpec): PropertyDef
    static new_from_spec_full(adaptor: WidgetAdaptor, spec: GObject.ParamSpec, need_handle: boolean): PropertyDef
    static get_default_from_spec(spec: GObject.ParamSpec): any
    static make_flags_from_string(type: GObject.GType, string: string): number
    /**
     * This function assigns "weight" to each property in its natural order staring from 1.
     * If parent is 0 weight will be set for every #GladePropertyDef in the list.
     * This function will not override weight if it is already set (weight >= 0.0)
     * @param properties a list of #GladePropertyDef
     * @param parent the #GType of the parent
     */
    static set_weights(properties: PropertyDef[], parent: GObject.GType): void
    /**
     * Updates the `property_def_ref` with the contents of the node in the xml
     * file. Only the values found in the xml file are overridden.
     * @param node the property node
     * @param object_type the #GType of the owning object
     * @param property_def_ref a pointer to the property class
     * @param domain the domain to translate catalog strings from
     * @returns %TRUE on success. @property_def_ref is set to NULL if the property          has Disabled="TRUE".
     */
    static update_from_node(node: XmlNode, object_type: GObject.GType, property_def_ref: PropertyDef | null, domain: string): [ /* returnType */ boolean, /* property_def_ref */ PropertyDef | null ]
}

export interface PropertyLabelClass {

    // Own fields of Gladeui-2.0.Gladeui.PropertyLabelClass

    parent_class: Gtk.EventBoxClass
}

export abstract class PropertyLabelClass {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabelClass

    static name: string
}

export interface PropertyLabelPrivate {
}

export class PropertyLabelPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabelPrivate

    static name: string
}

export interface PropertyPrivate {
}

export class PropertyPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PropertyPrivate

    static name: string
}

export interface PropertyShellClass {

    // Own fields of Gladeui-2.0.Gladeui.PropertyShellClass

    parent_class: Gtk.BoxClass
}

export abstract class PropertyShellClass {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShellClass

    static name: string
}

export interface PropertyShellPrivate {
}

export class PropertyShellPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShellPrivate

    static name: string
}

export interface SignalClass {

    // Own fields of Gladeui-2.0.Gladeui.SignalClass

    object_class: GObject.ObjectClass
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
}

export abstract class SignalClass {

    // Own properties of Gladeui-2.0.Gladeui.SignalClass

    static name: string
}

export interface SignalDef {

    // Owm methods of Gladeui-2.0.Gladeui.SignalDef

    /**
     * Clones a #GladeSignalDef
     * @returns a new copy of @signal_def
     */
    clone(): SignalDef
    /**
     * Get if the signal is flagged as deprecated.
     * @returns %TRUE if the signal is deprecated
     */
    deprecated(): boolean
    /**
     * Get the major version that deprecated this signal.
     * @returns the major version
     */
    deprecated_since_major(): number
    /**
     * Get the minor version that deprecated this signal.
     * @returns the minor version
     */
    deprecated_since_minor(): number
    /**
     * Frees a #GladeSignalDef
     */
    free(): void
    /**
     * Get #GladeWidgetAdaptor associated with the signal.
     * @returns a #GladeWidgetAdaptor
     */
    get_adaptor(): WidgetAdaptor
    /**
     * Get the combination of GSignalFlags specifying detail of when the default
     * handler is to be invoked.
     * @returns the #GSignalFlags
     */
    get_flags(): GObject.SignalFlags
    /**
     * Get the name of the signal.
     * @returns the name of the signal
     */
    get_name(): string
    /**
     * Get the name of the object class that this signal belongs to.
     * @returns the type name of the signal
     */
    get_object_type_name(): string
    /**
     * Set if the signal is deprecated.
     * @param deprecated %TRUE if the signal is deprecated
     */
    set_deprecated(deprecated: boolean): void
    /**
     * Set the major and minor version that introduced this signal.
     * @param since_major the major version.
     * @param since_minor the minor version.
     */
    set_since(since_major: number, since_minor: number): void
    /**
     * Get the major version that introduced this signal.
     * @returns the major version
     */
    since_major(): number
    /**
     * Get the minor version that introduced this signal.
     * @returns the minor version
     */
    since_minor(): number
    update_from_node(node: XmlNode, domain: string): void
}

export class SignalDef {

    // Own properties of Gladeui-2.0.Gladeui.SignalDef

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.SignalDef

    /**
     * Creates a new #GladeSignalDef
     * @constructor 
     * @param adaptor a #GladeWidgetAdaptor
     * @param for_type a #GType
     * @param signal_id the signal id
     * @returns a new #GladeSignalDef
     */
    constructor(adaptor: WidgetAdaptor, for_type: GObject.GType, signal_id: number) 
    /**
     * Creates a new #GladeSignalDef
     * @constructor 
     * @param adaptor a #GladeWidgetAdaptor
     * @param for_type a #GType
     * @param signal_id the signal id
     * @returns a new #GladeSignalDef
     */
    static new(adaptor: WidgetAdaptor, for_type: GObject.GType, signal_id: number): SignalDef
}

export interface SignalEditorClass {

    // Own fields of Gladeui-2.0.Gladeui.SignalEditorClass

    parent_class: Gtk.BoxClass
    padding: any[]
}

export abstract class SignalEditorClass {

    // Own properties of Gladeui-2.0.Gladeui.SignalEditorClass

    static name: string
}

export interface SignalModelClass {

    // Own fields of Gladeui-2.0.Gladeui.SignalModelClass

    parent_class: GObject.ObjectClass
}

export abstract class SignalModelClass {

    // Own properties of Gladeui-2.0.Gladeui.SignalModelClass

    static name: string
}

export interface SignalModelPrivate {
}

export class SignalModelPrivate {

    // Own properties of Gladeui-2.0.Gladeui.SignalModelPrivate

    static name: string
}

export interface SignalPrivate {
}

export class SignalPrivate {

    // Own properties of Gladeui-2.0.Gladeui.SignalPrivate

    static name: string
}

export interface TargetableVersion {

    // Own fields of Gladeui-2.0.Gladeui.TargetableVersion

    major: number
    minor: number
}

export class TargetableVersion {

    // Own properties of Gladeui-2.0.Gladeui.TargetableVersion

    static name: string
}

export interface WidgetActionClass {

    // Own fields of Gladeui-2.0.Gladeui.WidgetActionClass

    parent_class: GObject.ObjectClass
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
}

export abstract class WidgetActionClass {

    // Own properties of Gladeui-2.0.Gladeui.WidgetActionClass

    static name: string
}

export interface WidgetActionDef {

    // Own fields of Gladeui-2.0.Gladeui.WidgetActionDef

    id: string
    path: string | null
    label: string | null
    stock: string | null
    important: boolean
    actions: any[]

    // Owm methods of Gladeui-2.0.Gladeui.WidgetActionDef

    clone(): WidgetActionDef
    /**
     * Frees a GladeWidgetActionDef.
     */
    free(): void
    set_important(important: boolean): void
    set_label(label: string): void
    set_stock(stock: string): void
}

export class WidgetActionDef {

    // Own properties of Gladeui-2.0.Gladeui.WidgetActionDef

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.WidgetActionDef

    constructor(path: string) 
    static new(path: string): WidgetActionDef
}

export interface WidgetActionPrivate {
}

export class WidgetActionPrivate {

    // Own properties of Gladeui-2.0.Gladeui.WidgetActionPrivate

    static name: string
}

export interface WidgetAdaptorClass {

    // Own fields of Gladeui-2.0.Gladeui.WidgetAdaptorClass

    parent_class: GObject.ObjectClass
    version_since_major: number
    version_since_minor: number
    default_width: number
    default_height: number
    deprecated: number
    toplevel: number
    use_placeholders: number
    construct_object: ConstructObjectFunc
    deep_post_create: PostCreateFunc
    post_create: PostCreateFunc
    get_internal_child: GetInternalFunc
    verify_property: VerifyPropertyFunc
    set_property: SetPropertyFunc
    get_property: GetPropertyFunc
    add_verify: AddChildVerifyFunc
    add: AddChildFunc
    remove: RemoveChildFunc
    get_children: GetChildrenFunc
    child_verify_property: ChildVerifyPropertyFunc
    child_set_property: ChildSetPropertyFunc
    child_get_property: ChildGetPropertyFunc
    replace_child: ReplaceChildFunc
    action_activate: ActionActivateFunc
    child_action_activate: ChildActionActivateFunc
    action_submenu: ActionSubmenuFunc
    depends: DependsFunc
    read_widget: ReadWidgetFunc
    write_widget: WriteWidgetFunc
    read_child: ReadWidgetFunc
    write_child: WriteWidgetFunc
    create_eprop: CreateEPropFunc
    string_from_value: StringFromValueFunc
    create_editable: CreateEditableFunc
    destroy_object: DestroyObjectFunc
    write_widget_after: WriteWidgetFunc
    deprecated_since_major: number
    deprecated_since_minor: number
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
    glade_reserved5: () => void
}

export abstract class WidgetAdaptorClass {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAdaptorClass

    static name: string
}

export interface WidgetClass {

    // Own fields of Gladeui-2.0.Gladeui.WidgetClass

    parent_class: GObject.InitiallyUnownedClass
    add_child: (parent: Widget, child: Widget, at_mouse: boolean) => void
    remove_child: (parent: Widget, child: Widget) => void
    replace_child: (parent: Widget, old_object: GObject.Object, new_object: GObject.Object) => void
    add_signal_handler: (widget: Widget, signal_handler: Signal) => void
    remove_signal_handler: (widget: Widget, signal_handler: Signal) => void
    change_signal_handler: (widget: Widget, new_signal_handler: Signal) => void
    button_press_event: (widget: Widget, event: Gdk.Event) => number
    button_release_event: (widget: Widget, event: Gdk.Event) => number
    motion_notify_event: (widget: Widget, event: Gdk.Event) => number
    event: (gwidget: Widget, event: Gdk.Event) => boolean
    glade_reserved1: () => void
    glade_reserved2: () => void
    glade_reserved3: () => void
    glade_reserved4: () => void
    glade_reserved5: () => void
    glade_reserved6: () => void
    glade_reserved7: () => void
    glade_reserved8: () => void
}

export abstract class WidgetClass {

    // Own properties of Gladeui-2.0.Gladeui.WidgetClass

    static name: string
}

export interface WidgetGroup {

    // Owm methods of Gladeui-2.0.Gladeui.WidgetGroup

    get_adaptors(): WidgetAdaptor[]
    get_expanded(): boolean
    get_name(): string
    get_title(): string
}

export class WidgetGroup {

    // Own properties of Gladeui-2.0.Gladeui.WidgetGroup

    static name: string
}

export interface WidgetPrivate {
}

export class WidgetPrivate {

    // Own properties of Gladeui-2.0.Gladeui.WidgetPrivate

    static name: string
}

export interface XmlContext {

    // Owm methods of Gladeui-2.0.Gladeui.XmlContext

    copy(): XmlContext
    /**
     * Frees the memory allocated by #GladeXmlContext.
     */
    free(): void
    /**
     * Get the #GladeXmlDoc this `context` refers to.
     * @returns the #GladeXmlDoc that the @context refers to
     */
    get_doc(): XmlDoc
}

export class XmlContext {

    // Own properties of Gladeui-2.0.Gladeui.XmlContext

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.XmlContext

    constructor(doc: XmlDoc, name_space: string | null) 
    static new(doc: XmlDoc, name_space: string | null): XmlContext
    /**
     * Creates a new #GladeXmlContext from the given path.
     * @constructor 
     * @param full_path the path to the XML file
     * @param nspace the expected namespace
     * @param root_name the expected root name
     * @returns a new #GladeXmlContext or %NULL on failure
     */
    static new_from_path(full_path: string, nspace: string | null, root_name: string | null): XmlContext
}

export interface XmlDoc {

    // Owm methods of Gladeui-2.0.Gladeui.XmlDoc

    get_root(): XmlNode
    new_comment(comment: string): XmlNode
    /**
     * Increases the reference of the #GladeXmlDoc.
     * @returns the given #GladeXmlDoc
     */
    ref(): XmlDoc
    save(full_path: string): number
    set_root(node: XmlNode): void
    /**
     * Decreases the reference of the #GladeXmlDoc.
     */
    unref(): void
}

export class XmlDoc {

    // Own properties of Gladeui-2.0.Gladeui.XmlDoc

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.XmlDoc

    /**
     * Creates a new #GladeXmlDoc.
     * @constructor 
     * @returns a new #GladeXmlDoc
     */
    constructor() 
    /**
     * Creates a new #GladeXmlDoc.
     * @constructor 
     * @returns a new #GladeXmlDoc
     */
    static new(): XmlDoc
}

export interface XmlNode {

    // Owm methods of Gladeui-2.0.Gladeui.XmlNode

    add_next_sibling(new_node: XmlNode): XmlNode
    add_prev_sibling(new_node: XmlNode): XmlNode
    append_child(child: XmlNode): void
    copy(): XmlNode
    delete(): void
    get_children(): XmlNode
    get_children_with_comments(): XmlNode
    get_name(): string
    get_parent(): XmlNode
    is_comment(): boolean
    next(): XmlNode
    next_with_comments(): XmlNode
    prev_with_comments(): XmlNode
    remove(): void
    set_property_boolean(name: string, value: boolean): void
    /**
     * Set a property as a string in the `node_in`. Note that %NULL `string` value
     * Are simply ignored and not written in the XML.
     * @param name the name of the property to set
     * @param string the string value of the property to set
     */
    set_property_string(name: string, string: string | null): void
    /**
     * This is a wrapper around glade_xml_node_verify_silent(), only it emits
     * a g_warning() if `node_in` has a name different than `name`.
     * @param name a string
     * @returns %TRUE if @node_in's name is equal to @name, %FALSE otherwise
     */
    verify(name: string): boolean
    verify_silent(name: string): boolean
}

export class XmlNode {

    // Own properties of Gladeui-2.0.Gladeui.XmlNode

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.XmlNode

    constructor(context: XmlContext, name: string) 
    static new(context: XmlContext, name: string): XmlNode
    static new_comment(context: XmlContext, comment: string): XmlNode
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