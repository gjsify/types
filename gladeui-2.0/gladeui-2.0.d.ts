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

export namespace Gladeui {
    /**
     * These are the reasons your #GladePostCreateFunc can be called.
     */
    enum CreateReason {
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
    enum CursorType {
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
    enum EditorPageType {
        GENERAL,
        COMMON,
        PACKING,
        ATK,
        QUERY,
        SIGNAL,
    }
    enum ItemAppearance {
        ICON_AND_LABEL,
        ICON_ONLY,
        LABEL_ONLY,
    }
    /**
     * Indicates what the pointer is used for in the workspace.
     */
    enum PointerMode {
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
    enum ProjectModelColumns {
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
    enum SignalModelColumns {
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
    enum Stock {
        DUMMY,
    }
    enum StockImage {
        DUMMY,
    }
    enum UIMessageType {
        INFO,
        WARN,
        ERROR,
        ARE_YOU_SURE,
        YES_OR_NO,
    }
    enum UtilFileDialogType {
        OPEN,
        SAVE,
    }
    const DEVHELP_FALLBACK_ICON_FILE: string;
    const DEVHELP_ICON_NAME: string;
    const ENV_BUNDLED: string;
    const ENV_CATALOG_PATH: string;
    const ENV_ICON_THEME_PATH: string;
    const ENV_MODULE_PATH: string;
    const ENV_PIXMAP_DIR: string;
    const ENV_TESTING: string;
    const GTKBUILDER_VERSIONING_BASE_MAJOR: number;
    const GTKBUILDER_VERSIONING_BASE_MINOR: number;
    const PROPERTY_DEF_OBJECT_DELIMITER: string;
    const TAG_ACTION: string;
    const TAG_ACTIONS: string;
    const TAG_ACTION_ACTIVATE_FUNCTION: string;
    const TAG_ACTION_SUBMENU_FUNCTION: string;
    const TAG_ADAPTOR: string;
    const TAG_ADD_CHILD_FUNCTION: string;
    const TAG_ADD_CHILD_VERIFY_FUNCTION: string;
    const TAG_ANARCHIST: string;
    const TAG_ATK_PROPERTY: string;
    const TAG_BIND_FLAGS: string;
    const TAG_BIND_PROPERTY: string;
    const TAG_BIND_SOURCE: string;
    const TAG_BOOK: string;
    const TAG_BUILDER_SINCE: string;
    const TAG_CHILD_ACTION_ACTIVATE_FUNCTION: string;
    const TAG_CHILD_GET_PROP_FUNCTION: string;
    const TAG_CHILD_PROPERTY: string;
    const TAG_CHILD_SET_PROP_FUNCTION: string;
    const TAG_CHILD_VERIFY_FUNCTION: string;
    const TAG_COMMENT: string;
    const TAG_COMMON: string;
    const TAG_CONSTRUCTOR_FUNCTION: string;
    const TAG_CONSTRUCT_OBJECT_FUNCTION: string;
    const TAG_CONSTRUCT_ONLY: string;
    const TAG_CONTEXT: string;
    const TAG_CREATE_EDITABLE_FUNCTION: string;
    const TAG_CREATE_EPROP_FUNCTION: string;
    const TAG_CREATE_TYPE: string;
    const TAG_CREATE_WIDGET_FUNCTION: string;
    const TAG_CUSTOM_LAYOUT: string;
    const TAG_DEEP_POST_CREATE_FUNCTION: string;
    const TAG_DEFAULT: string;
    const TAG_DEFAULT_HEIGHT: string;
    const TAG_DEFAULT_PALETTE_STATE: string;
    const TAG_DEFAULT_WIDTH: string;
    const TAG_DEPENDS: string;
    const TAG_DEPENDS_FUNCTION: string;
    const TAG_DEPRECATED: string;
    const TAG_DEPRECATED_SINCE: string;
    const TAG_DESTROY_OBJECT_FUNCTION: string;
    const TAG_DISABLED: string;
    const TAG_DISPLAYABLE_VALUES: string;
    const TAG_DOMAIN: string;
    const TAG_EDITABLE: string;
    const TAG_EVENT_HANDLER_CONNECTED: string;
    const TAG_EXPANDED: string;
    const TAG_FALSE: string;
    const TAG_GENERIC_NAME: string;
    const TAG_GET_CHILDREN_FUNCTION: string;
    const TAG_GET_FUNCTION: string;
    const TAG_GET_INTERNAL_CHILD_FUNCTION: string;
    const TAG_GET_TYPE_FUNCTION: string;
    const TAG_GLADE_CATALOG: string;
    const TAG_GLADE_WIDGET_CLASS: string;
    const TAG_GLADE_WIDGET_CLASSES: string;
    const TAG_GLADE_WIDGET_CLASS_REF: string;
    const TAG_GLADE_WIDGET_GROUP: string;
    const TAG_HAS_CONTEXT: string;
    const TAG_ICON_NAME: string;
    const TAG_ICON_PREFIX: string;
    const TAG_ID: string;
    const TAG_IGNORE: string;
    const TAG_IMPORTANT: string;
    const TAG_INIT_FUNCTION: string;
    const TAG_INTERNAL_CHILDREN: string;
    const TAG_KEY: string;
    const TAG_LIBRARY: string;
    const TAG_MAX_VALUE: string;
    const TAG_MIN_VALUE: string;
    const TAG_MULTILINE: string;
    const TAG_NAME: string;
    const TAG_NEEDS_SYNC: string;
    const TAG_NICK: string;
    const TAG_NO: string;
    const TAG_OPTIONAL: string;
    const TAG_OPTIONAL_DEFAULT: string;
    const TAG_PACKING_ACTIONS: string;
    const TAG_PACKING_DEFAULTS: string;
    const TAG_PACKING_PROPERTIES: string;
    const TAG_PARENT: string;
    const TAG_PARENTLESS_WIDGET: string;
    const TAG_PARENT_CLASS: string;
    const TAG_POST_CREATE_FUNCTION: string;
    const TAG_PROPERTIES: string;
    const TAG_PROPERTY: string;
    const TAG_QUERY: string;
    const TAG_READ_CHILD_FUNCTION: string;
    const TAG_READ_WIDGET_FUNCTION: string;
    const TAG_REMOVE_CHILD_FUNCTION: string;
    const TAG_REPLACE_CHILD_FUNCTION: string;
    const TAG_RESOURCE: string;
    const TAG_SAVE: string;
    const TAG_SAVE_ALWAYS: string;
    const TAG_SET_FUNCTION: string;
    const TAG_SIGNAL: string;
    const TAG_SIGNALS: string;
    const TAG_SPEC: string;
    const TAG_SPECIAL_CHILD_TYPE: string;
    const TAG_SPECIFICATIONS: string;
    const TAG_STOCK: string;
    const TAG_STOCK_ICON: string;
    const TAG_STRING_FROM_VALUE_FUNCTION: string;
    const TAG_TARGETABLE: string;
    const TAG_TEMPLATE_PREFIX: string;
    const TAG_THEMED_ICON: string;
    const TAG_TITLE: string;
    const TAG_TOOLTIP: string;
    const TAG_TOPLEVEL: string;
    const TAG_TRANSFER_ON_PASTE: string;
    const TAG_TRANSLATABLE: string;
    const TAG_TRUE: string;
    const TAG_TYPE: string;
    const TAG_USE_PLACEHOLDERS: string;
    const TAG_VALUE: string;
    const TAG_VALUE_TYPE: string;
    const TAG_VERIFY_FUNCTION: string;
    const TAG_VERSION: string;
    const TAG_VERSION_SINCE: string;
    const TAG_VISIBLE: string;
    const TAG_WEIGHT: string;
    const TAG_WRITE_CHILD_FUNCTION: string;
    const TAG_WRITE_WIDGET_AFTER_FUNCTION: string;
    const TAG_WRITE_WIDGET_FUNCTION: string;
    const TAG_YES: string;
    const UNNAMED_PREFIX: string;
    /**
     * Class prefix used for abstract classes (ie GtkBin -> GladeInstantiableGtkBin)
     */
    const WIDGET_ADAPTOR_INSTANTIABLE_PREFIX: string;
    const XML_TAG_AFTER: string;
    const XML_TAG_CHILD: string;
    const XML_TAG_CLASS: string;
    const XML_TAG_FILENAME: string;
    const XML_TAG_HANDLER: string;
    const XML_TAG_I18N_TRUE: string;
    const XML_TAG_ID: string;
    const XML_TAG_INTERNAL_CHILD: string;
    const XML_TAG_LIB: string;
    const XML_TAG_NAME: string;
    const XML_TAG_OBJECT: string;
    const XML_TAG_PACKING: string;
    const XML_TAG_PLACEHOLDER: string;
    const XML_TAG_PROJECT: string;
    const XML_TAG_PROPERTY: string;
    const XML_TAG_REQUIRES: string;
    const XML_TAG_SIGNAL: string;
    const XML_TAG_SIGNAL_FALSE: string;
    const XML_TAG_SIGNAL_TRUE: string;
    const XML_TAG_SOURCE: string;
    const XML_TAG_SOURCES: string;
    const XML_TAG_STOCK_ID: string;
    const XML_TAG_SWAPPED: string;
    const XML_TAG_TEMPLATE: string;
    const XML_TAG_TYPE: string;
    const XML_TAG_TYPE_FUNC: string;
    const XML_TAG_VERSION: string;
    const XML_TAG_WIDGET: string;
    /**
     * Adds a new path to the list of path to look catalogs for.
     * @param path the new path containing catalogs
     */
    function catalog_add_path(path: string): void;
    /**
     * Destroy and free all resources related with every loaded catalog.
     */
    function catalog_destroy_all(): void;
    function catalog_get_extra_paths(): string[];
    function catalog_is_loaded(name: string): boolean;
    /**
     * Loads all available catalogs in the system.
     * First loads catalogs from GLADE_ENV_CATALOG_PATH,
     * then from glade_app_get_catalogs_dir() and finally from paths specified with
     * glade_catalog_add_path()
     * @returns the list of loaded GladeCatalog *
     */
    function catalog_load_all(): Catalog[];
    /**
     * Remove path from the list of path to look catalogs for.
     * %NULL to remove all paths.
     * @param path the new path containing catalogs or %NULL to remove all of them
     */
    function catalog_remove_path(path?: string | null): void;
    function cursor_get_add_widget_pixbuf(): GdkPixbuf.Pixbuf;
    /**
     * Initializes cursors for use with glade_cursor_set().
     */
    function cursor_init(): void;
    /**
     * Sets the cursor for `window` to something appropriate based on `type`.
     * (also sets the cursor on all visible project widgets)
     * @param project
     * @param window a #GdkWindow
     * @param type a #GladeCursorType
     */
    function cursor_set(project: Project, window: Gdk.Window, type: CursorType): void;
    function displayable_value_is_disabled(type: GObject.GType, value: string): boolean;
    function displayable_value_set_disabled(type: GObject.GType, value: string, disabled: boolean): void;
    function get_debug_flags(): number;
    function get_displayable_value(type: GObject.GType, value: string): string;
    function get_value_from_displayable(type: GObject.GType, displayabe: string): string;
    /**
     * Initialization function for libgladeui (not #GladeApp)
     * It builds paths, bind text domain, and register icons
     */
    function init(): void;
    function init_debug_flags(): void;
    function param_spec_objects(
        name: string,
        nick: string,
        blurb: string,
        accepted_type: GObject.GType,
        flags: GObject.ParamFlags,
    ): GObject.ParamSpec;
    function propert_get_insensitive_tooltip(property: Property): string;
    function property_def_get_default_from_spec(spec: GObject.ParamSpec): GObject.Value;
    function property_def_make_flags_from_string(type: GObject.GType, string: string): number;
    /**
     * This function assigns "weight" to each property in its natural order staring from 1.
     * If parent is 0 weight will be set for every #GladePropertyDef in the list.
     * This function will not override weight if it is already set (weight >= 0.0)
     * @param properties a list of #GladePropertyDef
     * @param parent the #GType of the parent
     */
    function property_def_set_weights(properties: PropertyDef[], parent: GObject.GType): void;
    /**
     * Updates the `property_def_ref` with the contents of the node in the xml
     * file. Only the values found in the xml file are overridden.
     * @param node the property node
     * @param object_type the #GType of the owning object
     * @param property_def_ref a pointer to the property class
     * @param domain the domain to translate catalog strings from
     * @returns %TRUE on success. @property_def_ref is set to NULL if the property          has Disabled="TRUE".
     */
    function property_def_update_from_node(
        node: XmlNode,
        object_type: GObject.GType,
        property_def_ref: PropertyDef | null,
        domain: string,
    ): boolean;
    function register_displayable_value(type: GObject.GType, value: string, domain: string, string: string): void;
    function register_translated_value(type: GObject.GType, value: string, string: string): void;
    /**
     * Sets up a log handler to manage all %G_LOG_LEVEL_MASK errors of domain:
     * GLib, GLib-GObject, Gtk, Gdk, and domainless.
     */
    function setup_log_handlers(): void;
    function standard_boolean_spec(): GObject.ParamSpec;
    function standard_float_spec(): GObject.ParamSpec;
    function standard_gdkcolor_spec(): GObject.ParamSpec;
    function standard_int_spec(): GObject.ParamSpec;
    /**
     * This was developed for the purpose of holding a list
     * of 'targets' in an AtkRelation (we are setting it up
     * as a property)
     * @returns a #GParamSpec describing a list of #GObject
     */
    function standard_objects_spec(): GObject.ParamSpec;
    function standard_pixbuf_spec(): GObject.ParamSpec;
    function standard_stock_append_prefix(prefix: string): void;
    function standard_stock_image_spec(): GObject.ParamSpec;
    function standard_stock_spec(): GObject.ParamSpec;
    function standard_string_spec(): GObject.ParamSpec;
    function standard_strv_spec(): GObject.ParamSpec;
    function standard_uint_spec(): GObject.ParamSpec;
    function type_has_displayable_values(type: GObject.GType): boolean;
    function util_canonical_path(path: string): string;
    function util_check_and_warn_scrollable(
        parent: Widget,
        child_adaptor: WidgetAdaptor,
        parent_widget: Gtk.Widget,
    ): boolean;
    /**
     * This is a #GCompareFunc that compares the labels of two stock items,
     * ignoring any '_' characters. It isn't particularly efficient.
     * @param a a #gconstpointer to a #GtkStockItem
     * @param b a #gconstpointer to a #GtkStockItem
     * @returns negative value if @a < @b; zero if @a = @b;          positive value if @a > @b
     */
    function util_compare_stock_labels(a?: any | null, b?: any | null): number;
    /**
     * Use this to itterate over all children in a GtkContainer,
     * as it used _forall() instead of _foreach() (and the GTK+ version
     * of this function is simply not exposed).
     * @param container a #GtkContainer
     * @returns a #GList giving the contents of @container
     */
    function util_container_get_all_children(container: Gtk.Container): Gtk.Widget[];
    function util_count_placeholders(parent: Widget): number;
    /**
     * Duplicates `name,` but the copy has two underscores in place of any single
     * underscore in the original.
     * @param name a string
     * @returns a newly allocated string
     */
    function util_duplicate_underscores(name: string): string;
    function util_file_dialog_new(
        title: string,
        project: Project,
        parent: Gtk.Window,
        action: UtilFileDialogType,
    ): Gtk.Widget;
    /**
     * Checks whether the file at `path` is writeable
     * @param path the path to the file
     * @returns TRUE if file is writeable
     */
    function util_file_is_writeable(path: string): boolean;
    function util_filename_to_icon_name(value: string): string;
    /**
     * Looks through `model` for the #GtkTreeIter corresponding to
     * `findme` under `column`.
     * @param model a #GtkTreeModel
     * @param findme a #GladeWidget
     * @param column a #gint
     * @returns a newly allocated #GtkTreeIter from @model corresponding to @findme which should be freed with gtk_tree_iter_free()
     */
    function util_find_iter_by_widget(model: Gtk.TreeModel, findme: Widget, column: number): Gtk.TreeIter;
    /**
     * Creates an image displaying the devhelp icon.
     * @param size the preferred icon size
     * @returns a #GtkImage
     */
    function util_get_devhelp_icon(size: Gtk.IconSize): Gtk.Widget;
    /**
     * Gets the UTC modification time of file `filename`.
     * @param filename A filename
     * @returns The mtime of the file, or %0 if the file attributes          could not be read.
     */
    function util_get_file_mtime(filename: string): number;
    function util_get_placeholder_from_pointer(container: Gtk.Container): Gtk.Widget;
    /**
     * Returns the type using the "get type" function name based on `name`.
     * If the `have_func` flag is true,`name` is used directly, otherwise the get-type
     * function is contrived from `name` then used.
     * @param name the name of the #GType - like 'GtkWidget' or a "get-type" function.
     * @param have_func function-name flag -- true if the name is a "get-type" function.
     * @returns the new #GType
     */
    function util_get_type_from_name(name: string, have_func: boolean): GObject.GType;
    function util_have_devhelp(): boolean;
    function util_icon_name_to_filename(value: string): string;
    function util_object_is_loading(object: GObject.Object): boolean;
    /**
     * Return a usable version of a property identifier as found
     * in a freshly parserd #GladeInterface
     * @param str a string
     */
    function util_read_prop_name(str: string): string;
    function util_remove_scroll_events(widget: Gtk.Widget): void;
    /**
     * Replaces each occurrence of the character `a` in `str` to `b`.
     * @param str a string
     * @param a a #gchar
     * @param b a #gchar
     */
    function util_replace(str: string, a: number, b: number): void;
    function util_search_devhelp(book: string, page: string, search: string): void;
    /**
     * Portable function for showing an URL `url` in a web browser.
     * @param url An URL to display
     * @returns TRUE if a web browser was successfully launched, or FALSE
     */
    function util_url_show(url: string): boolean;
    /**
     * Parse a boolean value
     * @param string the string to convert
     * @returns %TRUE if there was an error on the conversion, %FALSE otherwise.
     */
    function utils_boolean_from_string(string: string): boolean;
    function utils_cairo_draw_line(
        cr: cairo.Context,
        color: Gdk.Color,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
    ): void;
    function utils_cairo_draw_rectangle(
        cr: cairo.Context,
        color: Gdk.Color,
        filled: boolean,
        x: number,
        y: number,
        width: number,
        height: number,
    ): void;
    function utils_enum_string_from_value(enum_type: GObject.GType, value: number): string;
    function utils_enum_string_from_value_displayable(flags_type: GObject.GType, value: number): string;
    function utils_enum_value_from_string(enum_type: GObject.GType, strval: string): number;
    function utils_flags_string_from_value(enum_type: GObject.GType, value: number): string;
    function utils_flags_string_from_value_displayable(flags_type: GObject.GType, value: number): string;
    function utils_flags_value_from_string(enum_type: GObject.GType, strval: string): number;
    /**
     * Get's the pointer position relative to `widget,` while `window` and `device`
     * are not absolutely needed, they should be passed wherever possible.
     * @param widget The widget to get the mouse position relative for
     * @param window The window of the current event, or %NULL
     * @param device The device, if not specified, the current event will be expected to have a @device.
     * @param x The location to store the mouse pointer X position
     * @param y The location to store the mouse pointer Y position
     */
    function utils_get_pointer(widget: Gtk.Widget, window: Gdk.Window, device: Gdk.Device, x: number, y: number): void;
    function utils_get_pspec_from_funcname(funcname: string): GObject.ParamSpec | null;
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
    function utils_hijack_key_press(win: Gtk.Window, event: Gdk.EventKey, user_data?: any | null): number;
    /**
     * Creates a liststore suitable for comboboxes and such to
     * chose from a variety of types.
     * @param enum_type A #GType
     * @param include_empty whether to prepend an "Unset" slot
     * @returns A new #GtkListStore
     */
    function utils_liststore_from_enum_type(enum_type: GObject.GType, include_empty: boolean): Gtk.ListStore;
    /**
     * Render an icon representing the pointer mode.
     * Best view with sizes bigger than GTK_ICON_SIZE_LARGE_TOOLBAR.
     * @param mode the #GladePointerMode to render as icon
     * @param size icon size
     * @returns the rendered #GdkPixbuf
     */
    function utils_pointer_mode_render_icon(mode: PointerMode, size: Gtk.IconSize): GdkPixbuf.Pixbuf;
    function utils_replace_home_dir_with_tilde(path: string): string;
    /**
     * Serializes #GValue into a string
     * (using glade conversion routines)
     * @param value a #GValue to convert
     * @returns A newly allocated string
     */
    function utils_string_from_value(value: GObject.Value): string;
    /**
     * Allocates and sets a #GValue of type `type`
     * set to `string` (using glade conversion routines)
     * @param type a #GType to convert with
     * @param string the string to convert
     * @param project the #GladeProject to look for formats of object names when needed
     * @returns A newly allocated and set #GValue
     */
    function utils_value_from_string(type: GObject.GType, string: string, project: Project): GObject.Value;
    /**
     * Dump the XML string from the context.
     * @param context a #GladeXmlContext
     * @returns the XML string, free the allocated memory with g_free() after use
     */
    function xml_dump_from_context(context: XmlContext): string;
    function xml_get_boolean(node: XmlNode, name: string, _default: boolean): boolean;
    /**
     * Gets a string containing the content of `node_in`.
     * @param node_in a #GladeXmlNode
     * @returns A newly allocated string
     */
    function xml_get_content(node_in: XmlNode): string;
    function xml_get_property_boolean(node_in: XmlNode, name: string, _default: boolean): boolean;
    function xml_get_property_double(node_in: XmlNode, name: string, _default: number): number;
    function xml_get_property_int(node_in: XmlNode, name: string, _default: number): number;
    function xml_get_property_string(node_in: XmlNode, name: string): string;
    function xml_get_property_string_required(node_in: XmlNode, name: string, xtra: string): string;
    /**
     * Get the list of targetable versions for a property
     * @param node_in a #GladeXmlNode
     * @param name a property name
     * @returns a list of #GladeTargetableVersion
     */
    function xml_get_property_targetable_versions(node_in: XmlNode, name: string): TargetableVersion[];
    function xml_get_property_version(node_in: XmlNode, name: string, major: number, minor: number): boolean;
    /**
     * Gets an integer value for a node either carried as an attribute or as
     * the content of a child.
     * @param node_in a #GladeXmlNode
     * @param name a string
     * @param val a pointer to an #int
     * @returns %TRUE if the node is found, %FALSE otherwise
     */
    function xml_get_value_int(node_in: XmlNode, name: string, val: number): boolean;
    /**
     * This is a wrapper around glade_xml_get_value_int(), only it emits
     * a g_warning() if `node` did not contain the requested tag
     * @param node a #GladeXmlNode
     * @param name a string
     * @param val a pointer to an #int
     * @returns %FALSE if @name is not in @node
     */
    function xml_get_value_int_required(node: XmlNode, name: string, val: number): boolean;
    function xml_get_value_string(node: XmlNode, name: string): string;
    function xml_get_value_string_required(node: XmlNode, name: string, xtra_info: string): string;
    function xml_load_sym_from_node(
        node_in: XmlNode,
        module: GModule.Module,
        tagname: string,
        sym_location?: any | null,
    ): boolean;
    function xml_search_child(node: XmlNode, name: string): XmlNode;
    /**
     * just a small wrapper around glade_xml_search_child that displays
     * an error if the child was not found
     * @param tree A #GladeXmlNode
     * @param name the name of the child
     * @returns the requested #GladeXmlNode
     */
    function xml_search_child_required(tree: XmlNode, name: string): XmlNode | null;
    /**
     * Sets the content of `node` to `content`.
     * @param node_in a #GladeXmlNode
     * @param content a string
     */
    function xml_set_content(node_in: XmlNode, content: string): void;
    /**
     * Sets the property `name` in `node_in` to `val`
     * @param node_in a #GladeXmlNode
     * @param name a string
     * @param val a string
     */
    function xml_set_value(node_in: XmlNode, name: string, val: string): void;
    interface ActionActivateFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, action_path: string): void;
    }
    interface ActionSubmenuFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, action_path: string): Gtk.Widget | null;
    }
    interface AddChildFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B): void;
    }
    interface AddChildVerifyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, user_feedback: boolean): boolean;
    }
    interface CatalogInitFunc {
        (name: string): void;
    }
    interface ChildActionActivateFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, object: B, action_path: string): void;
    }
    interface ChildGetPropertyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, property_name: string, value: GObject.Value): void;
    }
    interface ChildSetPropertyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, property_name: string, value: GObject.Value): void;
    }
    interface ChildVerifyPropertyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, property_name: string, value: GObject.Value): boolean;
    }
    interface ConstructObjectFunc {
        (adaptor: WidgetAdaptor, n_parameters: number, parameters: GObject.Parameter): GObject.Object;
    }
    interface CreateEPropFunc {
        (adaptor: WidgetAdaptor, def: PropertyDef, use_command: boolean): EditorProperty;
    }
    interface CreateEditableFunc {
        (adaptor: WidgetAdaptor, type: EditorPageType): Editable;
    }
    interface DependsFunc {
        (adaptor: WidgetAdaptor, widget: Widget, another: Widget): boolean;
    }
    interface DestroyObjectFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A): void;
    }
    interface GetChildrenFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A): GObject.Object[];
    }
    interface GetInternalFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, internal_name: string): GObject.Object | null;
    }
    interface GetPropertyFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, property_name: string, value: GObject.Value): void;
    }
    interface PostCreateFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, reason: CreateReason): void;
    }
    interface ReadWidgetFunc {
        (adaptor: WidgetAdaptor, widget: Widget, node: XmlNode): void;
    }
    interface RemoveChildFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B): void;
    }
    interface ReplaceChildFunc<A = GObject.Object, B = GObject.Object, C = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, old_obj: B, new_obj: C): void;
    }
    interface SetPropertyFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, property_name: string, value: GObject.Value): void;
    }
    interface StringFromValueFunc {
        (adaptor: WidgetAdaptor, def: PropertyDef, value: GObject.Value): string;
    }
    interface VerifyPropertyFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, property_name: string, value: GObject.Value): boolean;
    }
    interface WriteWidgetFunc {
        (adaptor: WidgetAdaptor, widget: Widget, context: XmlContext, node: XmlNode): void;
    }
    type GList = object | null;
    enum DebugFlag {
        REF_COUNTS,
        WIDGET_EVENTS,
        COMMANDS,
        PROPERTIES,
        VERIFY,
    }
    enum PropertyState {
        NORMAL,
        CHANGED,
        UNSUPPORTED,
        SUPPORT_DISABLED,
    }
    enum SupportMask {
        OK,
        DEPRECATED,
        MISMATCH,
    }
    enum VerifyFlags {
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
    module AdaptorChooser {
        // Constructor properties interface
    }

    class AdaptorChooser extends Gtk.Box {
        // Own properties of Gladeui-2.0.AdaptorChooser

        project: Project;

        // Constructors of Gladeui-2.0.AdaptorChooser

        static ['new'](): AdaptorChooser;

        // Owm methods of Gladeui-2.0.AdaptorChooser

        get_project(): Project;
        set_project(project: Project): void;
    }

    module App {
        // Signal callback interfaces

        interface DocSearch {
            (arg1: string, arg2: string, arg3: string): void;
        }

        interface SignalEditorCreated {
            (signal_editor: GObject.Object): void;
        }

        interface WidgetAdaptorRegistered {
            (adaptor: GObject.Object): void;
        }

        // Constructor properties interface
    }

    class App extends GObject.Object {
        // Constructors of Gladeui-2.0.App

        static ['new'](): App;

        // Owm methods of Gladeui-2.0.App

        static add_project(project: Project): void;
        /**
         * Saves the #GKeyFile to "g_get_user_config_dir()/GLADE_CONFIG_FILENAME"
         */
        static config_save(): number;
        /**
         * This function has to be called in an event handler for widget selection to work.
         * See gdk_event_handler_set()
         * @param event the event to process.
         */
        static do_event(event: Gdk.Event): boolean;
        static get(): App;
        static get_accel_group(): Gtk.AccelGroup;
        static get_bin_dir(): string;
        static get_catalog(name: string): Catalog | null;
        static get_catalog_version(name: string): boolean;
        static get_catalogs(): Catalog[];
        static get_catalogs_dir(): string;
        static get_clipboard(): Clipboard;
        static get_config(): GLib.KeyFile;
        static get_lib_dir(): string;
        static get_locale_dir(): string;
        static get_modules_dir(): string;
        static get_pixmaps_dir(): string;
        /**
         * Finds an open project with `path`
         * @param project_path The path of an open project
         */
        static get_project_by_path(project_path: string): Project | null;
        static get_projects(): Catalog[];
        static get_window(): Gtk.Widget;
        static is_project_loaded(project_path: string): boolean;
        static remove_project(project: Project): void;
        /**
         * Searches for `book,` `page` and `search` in the documentation.
         * @param book the name of a book
         * @param page the name of a page
         * @param search the search query
         */
        static search_docs(book: string, page: string, search: string): void;
        /**
         * Sets `accel_group` to app.
         * The acceleration group will made available for editor dialog windows
         * from the plugin backend.
         * @param accel_group a #GtkAccelGroup to set
         */
        static set_accel_group(accel_group: Gtk.AccelGroup): void;
        /**
         * Set the window of the application
         * @param window a #GtkWidget
         */
        static set_window(window: Gtk.Widget): void;
    }

    module BaseEditor {
        // Signal callback interfaces

        interface BuildChild {
            (gparent: GObject.Object, type: GObject.GType): GObject.Object | null;
        }

        interface ChangeType {
            (object: GObject.Object, p0: GObject.GType): boolean;
        }

        interface ChildSelected {
            (gchild: GObject.Object): void;
        }

        interface DeleteChild {
            (gparent: GObject.Object, gchild: GObject.Object): boolean;
        }

        interface GetDisplayName {
            (gchild: GObject.Object): string;
        }

        interface MoveChild {
            (gparent: GObject.Object, gchild: GObject.Object): boolean;
        }

        // Constructor properties interface
    }

    class BaseEditor extends Gtk.Box {
        // Own properties of Gladeui-2.0.BaseEditor

        container: GObject.Object;

        // Owm methods of Gladeui-2.0.BaseEditor

        /**
         * Add `gchild` name and type property to `editor`
         *
         * NOTE: This function is intended to be used in "child-selected" callbacks
         * @param gchild a #GladeWidget
         */
        add_default_properties(gchild: Widget): void;
        /**
         * Add `gchild` editor of type `page` to the base editor
         *
         * NOTE: This function is intended to be used in "child-selected" callbacks
         * @param gchild the #GladeWidget
         * @param page the #GladeEditorPageType of the desired page for @gchild
         */
        add_editable(gchild: Widget, page: EditorPageType): void;
        /**
         * Adds a new label to `editor`
         *
         * NOTE: This function is intended to be used in "child-selected" callbacks
         * @param str the label string
         */
        add_label(str: string): void;
        /**
         * This convenience function create a new dialog window and packs `editor` in it.
         * @param title the window title
         * @param help_markup the help text
         * @returns the newly created window
         */
        pack_new_window(title: string, help_markup: string): Gtk.Widget;
        /**
         * Shows/hide `editor` 's signal editor
         * @param val whether to show the signal editor
         */
        set_show_signal_editor(val: boolean): void;
    }

    module CellRendererIcon {
        // Signal callback interfaces

        interface Activate {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class CellRendererIcon extends Gtk.CellRendererPixbuf {
        // Own properties of Gladeui-2.0.CellRendererIcon

        activatable: boolean;
        active: boolean;

        // Constructors of Gladeui-2.0.CellRendererIcon

        static ['new'](): CellRendererIcon;

        // Owm methods of Gladeui-2.0.CellRendererIcon

        get_activatable(): boolean;
        get_active(): boolean;
        set_activatable(setting: boolean): void;
        set_active(setting: boolean): void;
    }

    module Clipboard {
        // Constructor properties interface
    }

    class Clipboard extends GObject.Object {
        // Own properties of Gladeui-2.0.Clipboard

        readonly has_selection: boolean;
        readonly hasSelection: boolean;

        // Constructors of Gladeui-2.0.Clipboard

        static ['new'](): Clipboard;

        // Owm methods of Gladeui-2.0.Clipboard

        /**
         * Adds `widgets` to `clipboard`.
         * This increases the reference count of each #GladeWidget in `widgets`.
         * @param widgets a #GList of #GladeWidgets
         */
        add(widgets: Widget[]): void;
        /**
         * Removes all widgets from the `clipboard`.
         */
        clear(): void;
        get_has_selection(): boolean;
        widgets(): Widget[];
    }

    module Command {
        // Constructor properties interface
    }

    class Command extends GObject.Object {
        // Owm methods of Gladeui-2.0.Command

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
        static add(
            widgets: Widget[],
            parent: Widget,
            placeholder: Placeholder,
            project: Project,
            pasting: boolean,
        ): void;
        /**
         * TODO: write me
         * @param glade_widget a #GladeWidget
         * @param signal a #GladeSignal
         */
        static add_signal(glade_widget: Widget, signal: Signal): void;
        /**
         * TODO: write me
         * @param glade_widget a #GladeWidget
         * @param old_signal a #GladeSignal
         * @param new_signal a #GladeSignal
         */
        static change_signal(glade_widget: Widget, old_signal: Signal, new_signal: Signal): void;
        /**
         * Creates a new widget using `adaptor` and put in place of the `placeholder`
         * in the `project`
         * @param adaptor A #GladeWidgetAdaptor
         * @param parent the parent #GladeWidget to add the new widget to.
         * @param placeholder the placeholder which will be substituted by the widget
         * @param project the project his widget belongs to.
         */
        static create(
            adaptor: WidgetAdaptor,
            parent: Widget | null,
            placeholder: Placeholder | null,
            project: Project,
        ): Widget;
        /**
         * Removes the list of widgets and adds them to the clipboard.
         * @param widgets a #GList of #GladeWidgets
         */
        static cut(widgets: Widget[]): void;
        /**
         * Performs a delete command on the list of widgets.
         * @param widgets a #GList of #GladeWidgets
         */
        static ['delete'](widgets: Widget[]): void;
        /**
         * Performs a drag-n-drop command, i.e. removes the list of widgets and adds them
         * to the new parent, possibly replacing `placeholder` (note toplevels dont need a
         * parent; the active project will be used when pasting toplevel objects).
         * @param widgets a #GList of #GladeWidget
         * @param parent a #GladeWidget
         * @param placeholder a #GladePlaceholder
         */
        static dnd(widgets: Widget[], parent?: Widget | null, placeholder?: Placeholder | null): void;
        static get_group_depth(): number;
        /**
         * Sets `locked` to be in a locked up state
         * spoken for by `widget,` locked widgets cannot
         * be removed from the project until unlocked.
         * @param widget A #GladeWidget
         * @param locked The #GladeWidget to lock
         */
        static lock_widget(widget: Widget, locked: Widget): void;
        /**
         * Performs a paste command on all widgets in `widgets` to `parent,` possibly
         * replacing `placeholder` (note toplevels dont need a parent; the active project
         * will be used when pasting toplevel objects).
         * @param widgets a #GList of #GladeWidget
         * @param parent a #GladeWidget
         * @param placeholder a #GladePlaceholder
         * @param project a #GladeProject
         */
        static paste(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null, project: Project): void;
        /**
         * Mark the end of a command group.
         */
        static pop_group(): void;
        /**
         * TODO: write me
         * @param glade_widget a #GladeWidget
         * @param signal a #GladeSignal
         */
        static remove_signal(glade_widget: Widget, signal: Signal): void;
        /**
         * Sets the i18n data on the property.
         * @param property a #GladeProperty
         * @param translatable a #gboolean
         * @param context a #const gchar *
         * @param comment a #const gchar *
         */
        static set_i18n(property: Property, translatable: boolean, context: string, comment: string): void;
        static set_name(glade_widget: Widget, name: string): void;
        /**
         * Sets `domain` as the translation domain for `project`.
         * @param project A #GladeProject
         * @param domain The translation domain for @project
         */
        static set_project_domain(project: Project, domain: string): void;
        /**
         * Sets the license agreement for `project`. It will be saved in the xml as comment.
         * @param project A #GladeProject
         * @param license License of @project
         */
        static set_project_license(project: Project, license: string): void;
        /**
         * Sets a resource path `project`.
         * @param project A #GladeProject
         * @param path path to load resources from.
         */
        static set_project_resource_path(project: Project, path: string): void;
        /**
         * Sets the target of `catalog` to `major`.`minor` in `project`.
         * @param project A #GladeProject
         * @param catalog The name of the catalog to set the project's target for
         * @param major The new major version of @catalog to target
         * @param minor The new minor version of @catalog to target
         */
        static set_project_target(project: Project, catalog: string, major: number, minor: number): void;
        /**
         * Sets `widget` to be the template widget in `project`.
         * @param project A #GladeProject
         * @param widget The #GladeWidget to make template
         */
        static set_project_template(project: Project, widget: Widget): void;
        static set_properties_list(project: Project, props: Property[]): void;
        /**
         * Enables or disables `property`.
         *
         * `property` must be an optional property.
         * @param property An optional #GladeProperty
         * @param enabled Whether the property should be enabled
         */
        static set_property_enabled(property: Property, enabled: boolean): void;
        static set_property_value(property: Property, value: GObject.Value): void;
        /**
         * Unlocks `widget` so that it can be removed
         * from the project again
         * @param widget A #GladeWidget
         */
        static unlock_widget(widget: Widget): void;

        // Owm methods of Gladeui-2.0.Command

        /**
         * Merges `other` into `command,` so that `command` now
         * covers both commands and `other` can be dispensed with.
         * @param other another #GladeCommand
         */
        collapse(other: Command): void;
        description(): string;
        /**
         * Executes `command`
         * @returns whether the command was successfully executed
         */
        execute(): boolean;
        group_id(): number;
        /**
         * Undo the effects of `command`
         * @returns whether the command was successfully reversed
         */
        undo(): boolean;
        /**
         * Checks whether `command` and `other` can be unified
         * to make one single command.
         * @param other another #GladeCommand
         * @returns whether they can be unified.
         */
        unifies(other: Command): boolean;
    }

    module DesignView {
        // Constructor properties interface
    }

    class DesignView extends Gtk.Box {
        // Own properties of Gladeui-2.0.DesignView

        project: Project;

        // Constructors of Gladeui-2.0.DesignView

        static ['new'](project: Project): DesignView;

        // Owm methods of Gladeui-2.0.DesignView

        static get_from_project(project: Project): DesignView | null;

        // Owm methods of Gladeui-2.0.DesignView

        get_project(): Project;
    }

    module EPropBool {
        // Constructor properties interface
    }

    class EPropBool extends EditorProperty {}

    module EPropCheck {
        // Constructor properties interface
    }

    class EPropCheck extends EditorProperty {}

    module EPropColor {
        // Constructor properties interface
    }

    class EPropColor extends EditorProperty {}

    module EPropEnum {
        // Constructor properties interface
    }

    class EPropEnum extends EditorProperty {}

    module EPropFlags {
        // Constructor properties interface
    }

    class EPropFlags extends EditorProperty {}

    module EPropNamedIcon {
        // Constructor properties interface
    }

    class EPropNamedIcon extends EditorProperty {}

    module EPropNumeric {
        // Constructor properties interface
    }

    class EPropNumeric extends EditorProperty {}

    module EPropObject {
        // Constructor properties interface
    }

    class EPropObject extends EditorProperty {}

    module EPropObjects {
        // Constructor properties interface
    }

    class EPropObjects extends EditorProperty {}

    module EPropText {
        // Constructor properties interface
    }

    class EPropText extends EditorProperty {}

    module EPropUnichar {
        // Constructor properties interface
    }

    class EPropUnichar extends EditorProperty {}

    module Editor {
        // Constructor properties interface
    }

    class Editor extends Gtk.Box {
        // Own properties of Gladeui-2.0.Editor

        readonly class_field: string;
        readonly classField: string;
        show_boder: boolean;
        showBoder: boolean;
        show_class_field: boolean;
        showClassField: boolean;
        readonly show_info: boolean;
        readonly showInfo: boolean;
        readonly signal_editor: SignalEditor;
        readonly signalEditor: SignalEditor;
        widget: Widget;

        // Constructors of Gladeui-2.0.Editor

        static ['new'](): Editor;

        // Owm methods of Gladeui-2.0.Editor

        /**
         * This convenience function creates a new dialog window to edit `widget`
         * specifically.
         * @param widget a #GladeWidget
         */
        static dialog_for_widget(widget: Widget): Gtk.Widget;
        static query_dialog(widget: Widget): boolean;
        static reset_dialog_run(parent: Gtk.Widget, gwidget: Widget): void;

        // Owm methods of Gladeui-2.0.Editor

        hide_class_field(): void;
        hide_info(): void;
        /**
         * Load `widget` into `editor`. If `widget` is %NULL, clear the editor.
         * @param widget a #GladeWidget
         */
        load_widget(widget: Widget): void;
    }

    module EditorProperty {
        // Signal callback interfaces

        interface Commit {
            (arg1?: any | null): void;
        }

        interface ValueChanged {
            (arg1: Property): void;
        }

        // Constructor properties interface
    }

    class EditorProperty extends Gtk.Box {
        // Own properties of Gladeui-2.0.EditorProperty

        custom_text: string;
        customText: string;
        disable_check: boolean;
        disableCheck: boolean;
        property_def: any;
        propertyDef: any;
        use_command: boolean;
        useCommand: boolean;

        // Owm methods of Gladeui-2.0.EditorProperty

        /**
         * Runs a dialog and updates the provided values.
         * @param parent The parent widget for the dialog.
         * @param text A read/write pointer to the text property
         * @param context A read/write pointer to the translation context
         * @param comment A read/write pointer to the translator comment
         * @param translatable A read/write pointer to the translatable setting]
         */
        static show_i18n_dialog(
            parent: Gtk.Widget,
            text: string,
            context: string,
            comment: string,
            translatable: boolean,
        ): boolean;
        static show_object_dialog(
            project: Project,
            title: string,
            parent: Gtk.Widget,
            object_type: GObject.GType,
            exception: Widget,
            object: Widget,
        ): boolean;
        static show_resource_dialog(project: Project, parent: Gtk.Widget, filename: string): boolean;

        // Owm methods of Gladeui-2.0.EditorProperty

        /**
         * Commits `value` to the property currently being edited by `eprop`.
         * @param value The #GValue to commit
         */
        commit(value: GObject.Value): void;
        commit_no_callback(value: GObject.Value): void;
        get_custom_text(): string;
        get_disable_check(): boolean;
        get_item_label(): Gtk.Widget;
        get_property(): Property;
        get_property_def(): PropertyDef;
        /**
         * Loads `property` values into `eprop` and connects.
         * (the editor property will watch the property's value
         * until its loaded with another property or %NULL)
         * @param property A #GladeProperty
         */
        load(property: Property): void;
        /**
         * Convenience function to load the appropriate #GladeProperty into
         * `eprop` from `widget`
         * @param widget A #GladeWidget
         */
        load_by_widget(widget: Widget): void;
        loading(): boolean;
        set_custom_text(custom_text: string): void;
        set_disable_check(disable_check: boolean): void;
    }

    module EditorSkeleton {
        // Constructor properties interface
    }

    class EditorSkeleton extends Gtk.Box {
        // Constructors of Gladeui-2.0.EditorSkeleton

        static ['new'](): EditorSkeleton;

        // Owm methods of Gladeui-2.0.EditorSkeleton

        add_editor(editor: Editable): void;
    }

    module EditorTable {
        // Constructor properties interface
    }

    class EditorTable extends Gtk.Grid {
        // Own properties of Gladeui-2.0.EditorTable

        page_type: EditorPageType;
        pageType: EditorPageType;

        // Constructors of Gladeui-2.0.EditorTable

        static ['new'](adaptor: WidgetAdaptor, type: EditorPageType): EditorTable;
    }

    module Inspector {
        // Signal callback interfaces

        interface ItemActivated {
            (): void;
        }

        interface SelectionChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #GladeInspector struct contains private data only, and should be manipulated using the functions below.
     */
    class Inspector extends Gtk.Box {
        // Own properties of Gladeui-2.0.Inspector

        project: Project;

        // Constructors of Gladeui-2.0.Inspector

        static ['new'](): Inspector;

        static new_with_project(project: Project): Inspector;

        // Owm methods of Gladeui-2.0.Inspector

        /**
         * Note that the method does not ref the returned #GladeProject.
         * @returns A #GladeProject
         */
        get_project(): Project;
        /**
         * Returns the selected items in the inspector.
         * @returns A #GList of #GladeWidget
         */
        get_selected_items(): Widget[];
        /**
         * Sets the current project of `inspector` to `project`. To unset the current
         * project, pass %NULL for `project`.
         * @param project a #GladeProject
         */
        set_project(project: Project): void;
    }

    module NamedIconChooserDialog {
        // Signal callback interfaces

        interface IconActivated {
            (): void;
        }

        interface SelectionChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class NamedIconChooserDialog extends Gtk.Dialog {
        // Owm methods of Gladeui-2.0.NamedIconChooserDialog

        get_context(): string;
        get_icon_name(): string;
        set_context(context: string): boolean;
        set_icon_name(icon_name: string): void;
    }

    module Palette {
        // Signal callback interfaces

        interface Refresh {
            (): void;
        }

        // Constructor properties interface
    }

    class Palette extends Gtk.Box {
        // Own properties of Gladeui-2.0.Palette

        item_appearance: ItemAppearance;
        itemAppearance: ItemAppearance;
        project: Project;
        show_selector_button: boolean;
        showSelectorButton: boolean;
        use_small_item_icons: boolean;
        useSmallItemIcons: boolean;

        // Constructors of Gladeui-2.0.Palette

        static ['new'](): Palette;

        // Owm methods of Gladeui-2.0.Palette

        get_item_appearance(): ItemAppearance;
        get_project(): Project;
        get_show_selector_button(): boolean;
        get_tool_palette(): Gtk.ToolPalette;
        get_use_small_item_icons(): boolean;
        /**
         * Sets the appearance of the palette items.
         * @param item_appearance the item appearance
         */
        set_item_appearance(item_appearance: ItemAppearance): void;
        set_project(project: Project): void;
        /**
         * Sets whether to show the internal widget selector button
         * @param show_selector_button whether to show selector button
         */
        set_show_selector_button(show_selector_button: boolean): void;
        /**
         * Sets whether to use small item icons.
         * @param use_small_item_icons Whether to use small item icons
         */
        set_use_small_item_icons(use_small_item_icons: boolean): void;
    }

    class ParamObjects extends GObject.ParamSpec {}

    module Placeholder {
        // Constructor properties interface
    }

    class Placeholder extends Gtk.Widget {
        // Own fields of Gladeui-2.0.Placeholder

        widget: Gtk.Widget;

        // Constructors of Gladeui-2.0.Placeholder

        static ['new'](): Placeholder;

        // Owm methods of Gladeui-2.0.Placeholder

        get_parent(): Widget | null;
        get_project(): Project | null;
        packing_actions(): WidgetAction[];
    }

    module Project {
        // Signal callback interfaces

        interface ActivateSignalHandler {
            (gladewidget: Widget, signal: Signal): void;
        }

        interface AddSignalHandler {
            (gladewidget: Widget, signal: Signal): void;
        }

        interface AddWidget {
            (arg1: Widget): void;
        }

        interface ChangeSignalHandler {
            (gladewidget: Widget, old_signal: Signal, new_signal: Signal): void;
        }

        interface Changed {
            (arg1: Command, arg2: boolean): void;
        }

        interface Close {
            (): void;
        }

        interface LoadProgress {
            (objects_total: number, objects_loaded: number): void;
        }

        interface ParseBegan {
            (): void;
        }

        interface ParseFinished {
            (): void;
        }

        interface RemoveSignalHandler {
            (gladewidget: Widget, signal: Signal): void;
        }

        interface RemoveWidget {
            (arg1: Widget): void;
        }

        interface SelectionChanged {
            (): void;
        }

        interface TargetsChanged {
            (): void;
        }

        interface WidgetNameChanged {
            (arg1: Widget): void;
        }

        interface WidgetVisibilityChanged {
            (widget: Widget, visible: boolean): void;
        }

        // Constructor properties interface
    }

    class Project extends GObject.Object {
        // Own properties of Gladeui-2.0.Project

        readonly add_item: WidgetAdaptor;
        readonly addItem: WidgetAdaptor;
        css_provider_path: string;
        cssProviderPath: string;
        readonly has_selection: boolean;
        readonly hasSelection: boolean;
        license: string;
        readonly modified: boolean;
        readonly path: string;
        readonly pointer_mode: PointerMode;
        readonly pointerMode: PointerMode;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        resource_path: string;
        resourcePath: string;
        template: Widget;
        translation_domain: string;
        translationDomain: string;

        // Constructors of Gladeui-2.0.Project

        static ['new'](): Project;

        // Owm methods of Gladeui-2.0.Project

        /**
         * Opens a project at the given path.
         * @param path the path of the project to load
         */
        static load(path: string): Project | null;
        static verify_property(property: Property): void;
        static verify_signal(widget: Widget, signal: Signal): void;

        // Owm methods of Gladeui-2.0.Project

        /**
         * Adds an object to the project.
         * @param object the #GObject to add
         */
        add_object(object: GObject.Object): void;
        /**
         * Saves an autosave snapshot of `project` to it's currently set path
         *
         * If the project was never saved, nothing is done and %TRUE is returned.
         * @returns %TRUE on success, %FALSE on failure
         */
        autosave(): boolean;
        /**
         * Checks whether `name` is an appropriate name for `widget`.
         * @param widget the #GladeWidget intended to receive a new name
         * @param name base name of the widget to create
         * @returns whether the name is available or not.
         */
        available_widget_name(widget: Widget, name: string): boolean;
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
        backup(path: string): boolean;
        cancel_load(): void;
        check_reordered(parent: Widget, old_order: GObject.Object[]): void;
        command_cut(): void;
        command_delete(): void;
        command_paste(placeholder: Placeholder): void;
        copy_selection(): void;
        display_dependencies(): string;
        get_add_item(): WidgetAdaptor;
        get_css_provider_path(): string;
        get_file_mtime(): number;
        get_has_selection(): boolean;
        get_license(): string;
        /**
         * Get's whether the project has been modified since it was last saved.
         * @returns %TRUE if the project has been modified since it was last saved
         */
        get_modified(): boolean;
        get_name(): string;
        get_objects(): GObject.Object[];
        get_path(): string;
        get_pointer_mode(): PointerMode;
        /**
         * Gets whether the project is read only or not
         * @returns TRUE if project is read only
         */
        get_readonly(): boolean;
        get_resource_path(): string;
        /**
         * Fetches the target version of the `project` for `catalog`.
         * @param catalog the name of the catalog @project includes
         * @param major the return location for the target major version
         * @param minor the return location for the target minor version
         */
        get_target_version(catalog: string, major: number, minor: number): void;
        get_template(): Widget;
        get_translation_domain(): string;
        /**
         * Searches under `ancestor` in `project` looking for a #GladeWidget named `name`.
         * @param name The user visible name of the widget we are looking for
         * @returns a pointer to the widget, %NULL if the widget does not exist
         */
        get_widget_by_name(name: string): Widget | null;
        has_object(object: GObject.Object): boolean;
        is_loading(): boolean;
        is_selected(object: GObject.Object): boolean;
        load_cancelled(): boolean;
        load_from_file(path: string): boolean;
        /**
         * Creates a new name for a widget that doesn't collide with any of the names
         * already in `project`. This name will start with `base_name`.
         *
         * Note the `widget` parameter is ignored and preserved only for historical reasons.
         * @param widget the #GladeWidget intended to receive a new name, or %NULL
         * @param base_name base name of the widget to create
         * @returns a string containing the new name, %NULL if there is not enough          memory for this string
         */
        new_widget_name(widget: Widget, base_name: string): string;
        /**
         * Gets the next redo item on `project'`s command stack.
         * @returns the #GladeCommand
         */
        next_redo_item(): Command;
        /**
         * Gets the next undo item on `project'`s command stack.
         * @returns the #GladeCommand
         */
        next_undo_item(): Command;
        /**
         * Creates and displays a preview window holding a snapshot of `gwidget'`s
         * toplevel window in `project`. Note that the preview window is only a snapshot
         * of the current state of the project, there is no limit on how many preview
         * snapshots can be taken.
         * @param gwidget a #GladeWidget
         */
        preview(gwidget: Widget): void;
        /**
         * Runs a document properties dialog for `project`.
         */
        properties(): void;
        push_progress(): void;
        /**
         * Pushes a newly created #GladeCommand onto `projects` stack.
         * @param cmd the #GladeCommand
         */
        push_undo(cmd: Command): void;
        queue_selection_changed(): void;
        /**
         * Redoes a #GladeCommand in this project.
         */
        redo(): void;
        /**
         * Creates a menu of the undo items in the project stack
         * @returns A newly created menu
         */
        redo_items(): Gtk.Widget;
        /**
         * Removes `object` from `project`.
         *
         * Note that when removing the #GObject from the project we
         * don't change ->project in the associated #GladeWidget; this
         * way UNDO can work.
         * @param object the #GObject to remove
         */
        remove_object(object: GObject.Object): void;
        required_libs(): string[];
        reset_path(): void;
        /**
         * Project resource strings are always relative, this function transforms a
         * path relative to project to a full path.
         * @param resource The resource basename
         * @returns A newly allocated string holding the          full path to the resource.
         */
        resource_fullpath(resource: string): string;
        /**
         * Saves `project` to the given path.
         * @param path location to save glade file
         * @returns %TRUE on success, %FALSE on failure
         */
        save(path: string): boolean;
        /**
         * Saves `project` to the given path.
         * @param path location to save glade file
         * @param flags the #GladeVerifyFlags to warn about
         * @returns %TRUE on success, %FALSE on failure
         */
        save_verify(path: string, flags: VerifyFlags): boolean;
        /**
         * Adds `object` to the selection chain of `project`
         *
         * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
         * @param object a #GObject in @project
         * @param emit_signal whether or not to emit a signal indicating               a selection change
         */
        selection_add(object: GObject.Object, emit_signal: boolean): void;
        /**
         * Causes `project` to emit a "selection_changed" signal.
         */
        selection_changed(): void;
        /**
         * Clears `project'`s selection chain
         *
         * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
         * @param emit_signal whether or not to emit a signal indication a selection change
         */
        selection_clear(emit_signal: boolean): void;
        selection_get(): Gtk.Widget[];
        /**
         * Removes `object` from the selection chain of `project`
         *
         * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
         * @param object a #GObject in @project
         * @param emit_signal whether or not to emit a signal               indicating a selection change
         */
        selection_remove(object: GObject.Object, emit_signal: boolean): void;
        /**
         * Set the selection in `project` to `object`
         *
         * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
         * @param object a #GObject in @project
         * @param emit_signal whether or not to emit a signal               indicating a selection change
         */
        selection_set(object: GObject.Object, emit_signal: boolean): void;
        set_add_item(adaptor: WidgetAdaptor): void;
        /**
         * Set the custom CSS provider path to use in `project`
         * @param path a CSS file path
         */
        set_css_provider_path(path: string): void;
        set_license(license: string): void;
        set_pointer_mode(mode: PointerMode): void;
        set_resource_path(path: string): void;
        set_target_version(catalog: string, major: number, minor: number): void;
        set_template(widget: Widget): void;
        /**
         * Set the project translation domain.
         * @param domain the translation domain
         */
        set_translation_domain(domain: string): void;
        /**
         * Sets `name` on `widget` in `project,` if `name` is not
         * available then a new name will be used.
         * @param widget the #GladeWidget to set a name on
         * @param name the name to set.
         */
        set_widget_name(widget: Widget, name: string): void;
        toplevels(): Gtk.Widget[];
        /**
         * Undoes a #GladeCommand in this project.
         */
        undo(): void;
        /**
         * Creates a menu of the undo items in the project stack
         * @returns A newly created menu
         */
        undo_items(): Gtk.Widget;
        verify(saving: boolean, flags: VerifyFlags): boolean;
        /**
         * Checks the supported state of this widget adaptor
         * and generates a string to show in the UI describing why.
         * @param adaptor the #GladeWidgetAdaptor to verify
         * @param mask a return location for a #GladeSupportMask
         * @returns A newly allocated string
         */
        verify_widget_adaptor(adaptor: WidgetAdaptor, mask: SupportMask): string;
        widget_changed(gwidget: Widget): void;
        /**
         * Emits  GladeProject::widget-visibility-changed signal
         * @param widget The widget which visibility changed
         * @param visible widget visibility value
         */
        widget_visibility_changed(widget: Widget, visible: boolean): void;
        writing_preview(): boolean;
    }

    module Property {
        // Signal callback interfaces

        interface TooltipChanged {
            (object: string, p0: string, p1: string): void;
        }

        interface ValueChanged {
            (object?: any | null, p0?: any | null): void;
        }

        // Constructor properties interface
    }

    class Property extends GObject.Object {
        // Own properties of Gladeui-2.0.Property

        'class': any;
        enabled: boolean;
        i18n_comment: string;
        i18nComment: string;
        i18n_context: string;
        i18nContext: string;
        i18n_translatable: boolean;
        i18nTranslatable: boolean;
        precision: number;
        sensitive: boolean;
        readonly state: number;

        // Constructors of Gladeui-2.0.Property

        static ['new'](def: PropertyDef, widget: Widget, value: GObject.Value): Property;

        // Owm methods of Gladeui-2.0.Property

        static pop_superuser(): void;
        static push_superuser(): void;
        static superuser(): boolean;

        // Owm methods of Gladeui-2.0.Property

        /**
         * Adds `object` to the object list in `property`.
         *
         * Note: This function expects `property` to be a #GladeParamSpecObjects
         * or #GParamSpecObject type property.
         * @param object The #GObject to add
         */
        add_object(object: GObject.Object): void;
        ['default'](): boolean;
        dup(widget: Widget): Property;
        equals_value(value: GObject.Value): boolean;
        /**
         * Get the #GladePropertyDef this property was created for.
         * @returns a #GladePropertyDef
         */
        get_def(): PropertyDef;
        /**
         * Retrieve the default property value
         * @param value a #GValue
         */
        get_default(value: GObject.Value): void;
        get_enabled(): boolean;
        get_save_always(): boolean;
        get_sensitive(): boolean;
        get_state(): PropertyState;
        get_support_warning(): string;
        /**
         * Retrieve the property value
         * @param value a #GValue
         */
        get_value(value: GObject.Value): void;
        get_widget(): Widget;
        i18n_get_comment(): string;
        i18n_get_context(): string;
        i18n_get_translatable(): boolean;
        i18n_set_comment(str: string): void;
        i18n_set_context(str: string): void;
        i18n_set_translatable(translatable: boolean): void;
        inline_value(): GObject.Value;
        /**
         * Loads the value of `property` from the corresponding object instance
         */
        load(): void;
        make_string(): string;
        original_default(): boolean;
        /**
         * Resets this property to its original default value
         */
        original_reset(): void;
        /**
         * Read the value and any attributes for `property` from `node,` assumes
         * `property` is being loaded for `project`
         *
         * Note that object values will only be resolved after the project is
         * completely loaded
         * @param project the #GladeProject
         * @param node the #GladeXmlNode to read, will either be a 'widget'        node or a 'child' node for packing properties.
         */
        read(project: Project, node: XmlNode): void;
        /**
         * Removes `object` from the object list in `property`.
         *
         * Note: This function expects `property` to be a #GladeParamSpecObjects
         * or #GParamSpecObject type property.
         * @param object The #GObject to add
         */
        remove_object(object: GObject.Object): void;
        /**
         * Resets this property to its default value
         */
        reset(): void;
        set_enabled(enabled: boolean): void;
        /**
         * Sets whether this property should be special cased
         * to always be saved regardless of its default value.
         * (used for some special cases like properties
         * that are assigned initial values in composite widgets
         * or derived widget code).
         * @param setting the value to set
         */
        set_save_always(setting: boolean): void;
        set_sensitive(sensitive: boolean, reason: string): void;
        set_support_warning(disable: boolean, reason: string): void;
        /**
         * Sets the property's value
         * @param value a #GValue
         * @returns Whether the property was successfully set.
         */
        set_value(value: GObject.Value): boolean;
        set_widget(widget: Widget): void;
        /**
         * Synchronize the object with this property
         */
        sync(): void;
        warn_usage(): boolean;
        /**
         * Write `property` to `node`
         * @param context A #GladeXmlContext
         * @param node A #GladeXmlNode
         */
        write(context: XmlContext, node: XmlNode): void;
    }

    module PropertyLabel {
        // Constructor properties interface
    }

    class PropertyLabel extends Gtk.EventBox {
        // Own properties of Gladeui-2.0.PropertyLabel

        append_colon: boolean;
        appendColon: boolean;
        custom_text: string;
        customText: string;
        custom_tooltip: string;
        customTooltip: string;
        packing: boolean;
        property: Property;
        property_name: string;
        propertyName: string;

        // Constructors of Gladeui-2.0.PropertyLabel

        static ['new'](): PropertyLabel;

        // Owm methods of Gladeui-2.0.PropertyLabel

        get_append_colon(): boolean;
        get_custom_text(): string;
        get_custom_tooltip(): string;
        get_packing(): boolean;
        get_property(): Property;
        get_property_name(): string;
        set_append_colon(append_colon: boolean): void;
        set_custom_text(custom_text: string): void;
        set_custom_tooltip(custom_tooltip: string): void;
        set_packing(packing: boolean): void;
        set_property(property: Property): void;
        set_property_name(property_name: string): void;
    }

    module PropertyShell {
        // Signal callback interfaces

        interface PostCommit {
            (arg1?: any | null): void;
        }

        interface PreCommit {
            (arg1?: any | null): void;
        }

        // Constructor properties interface
    }

    class PropertyShell extends Gtk.Box {
        // Own properties of Gladeui-2.0.PropertyShell

        custom_text: string;
        customText: string;
        disable_check: boolean;
        disableCheck: boolean;
        editor_type: string;
        editorType: string;
        packing: boolean;
        property_name: string;
        propertyName: string;
        use_command: boolean;
        useCommand: boolean;

        // Constructors of Gladeui-2.0.PropertyShell

        static ['new'](): PropertyShell;

        // Owm methods of Gladeui-2.0.PropertyShell

        get_custom_text(): string;
        get_disable_check(): boolean;
        get_packing(): boolean;
        get_property_name(): string;
        get_use_command(): boolean;
        set_custom_text(custom_text: string): void;
        set_disable_check(disable_check: boolean): void;
        set_packing(packing: boolean): void;
        set_property_name(property_name: string): void;
        set_use_command(use_command: boolean): void;
    }

    module Signal {
        // Constructor properties interface
    }

    class Signal extends GObject.Object {
        // Own properties of Gladeui-2.0.Signal

        after: boolean;
        'class': any;
        detail: string;
        handler: string;
        support_warning: string;
        supportWarning: string;
        swapped: boolean;
        userdata: string;

        // Own fields of Gladeui-2.0.Signal

        object: GObject.Object;

        // Constructors of Gladeui-2.0.Signal

        static ['new'](sig_def: SignalDef, handler: string, userdata: string, after: boolean, swapped: boolean): Signal;

        // Owm methods of Gladeui-2.0.Signal

        /**
         * Reads and creates a ner #GladeSignal based on `node`
         * @param node The #GladeXmlNode to read
         * @param adaptor The #GladeWidgetAdaptor for the widget
         */
        static read(node: XmlNode, adaptor: WidgetAdaptor): Signal;

        // Owm methods of Gladeui-2.0.Signal

        clone(): Signal;
        equal(sig2: Signal): boolean;
        /**
         * Get whether the handler should be called before or after the default handler
         * of the signal.
         * @returns Whether the signal handler should be called after the default handler
         */
        get_after(): boolean;
        /**
         * Get the signal definition.
         * @returns the #GladeSignalDef
         */
        get_def(): SignalDef;
        /**
         * Get the signal detail.
         * @returns the detail of the signal
         */
        get_detail(): string;
        /**
         * Get the signal handler.
         * @returns the handler of the signal
         */
        get_handler(): string;
        /**
         * Get the name of the signal from the signal definition.
         * @returns The name of the signal
         */
        get_name(): string;
        get_support_warning(): string;
        /**
         * Get whether the instance and userdata arguments should be swapped.
         * @returns whether the instance and userdata arguments should be swapped
         */
        get_swapped(): boolean;
        /**
         * Get the userdata handler.
         * @returns the userdata of the signal
         */
        get_userdata(): string;
        /**
         * Set whether the handler should be called before or after the default handler
         * of the signal.
         * @param after if the signal handler should be called after the default handler
         */
        set_after(after: boolean): void;
        /**
         * Set the detail of the signal.
         * @param detail the detail of the signal
         */
        set_detail(detail: string): void;
        /**
         * Set the handler of the signal.
         * @param handler the handler of the signal
         */
        set_handler(handler: string): void;
        set_support_warning(support_warning: string): void;
        /**
         * Set whether the instance and userdata arguments should be swapped.
         * @param swapped if the instance and userdata arguments should be swapped
         */
        set_swapped(swapped: boolean): void;
        /**
         * Set the userdata of the signal.
         * @param userdata the userdata of the signal
         */
        set_userdata(userdata: string): void;
        /**
         * Writes `signal` to `node`
         * @param context A #GladeXmlContext
         * @param node A #GladeXmlNode
         */
        write(context: XmlContext, node: XmlNode): void;
    }

    module SignalEditor {
        // Signal callback interfaces

        interface CallbackSuggestions {
            (signal: Signal): string[];
        }

        interface DetailSuggestions {
            (signal: Signal): string[];
        }

        interface SignalActivated {
            (signal: Signal): void;
        }

        // Constructor properties interface
    }

    class SignalEditor extends Gtk.Box {
        // Own properties of Gladeui-2.0.SignalEditor

        glade_widget: Gtk.TreeModel;
        gladeWidget: Gtk.TreeModel;

        // Constructors of Gladeui-2.0.SignalEditor

        static ['new'](): SignalEditor;

        // Owm methods of Gladeui-2.0.SignalEditor

        /**
         * If drag and drop support is enabled, the user will be able to drag signal handler
         * from the tree to some editor. The type of the dnd data will be "application/x-glade-signal"
         * and it will be in the form of "widget:signal:handler" so for example
         * "GtkToggleButton:toggled:on_toggle_button_toggled".
         * @param enabled whether the drag and drop support should be enabled
         */
        enable_dnd(enabled: boolean): void;
        get_widget(): Widget;
        /**
         * Load a widget in the signal editor. This will show all signals of the widget
         * an it's accessors in the signal editor where the user can edit them.
         * @param widget a #GladeWidget or NULL
         */
        load_widget(widget: Widget): void;
    }

    module SignalModel {
        // Constructor properties interface
    }

    class SignalModel extends GObject.Object {
        // Own properties of Gladeui-2.0.SignalModel

        signals: any;
        widget: Widget;

        // Owm methods of Gladeui-2.0.SignalModel

        /**
         * Creates a new #GladeSignalModel object to show and edit the
         * signals of a widgets in a GtkTreeView
         * @param widget The #GladeWidget the signals belong to
         * @param signals The signals of the #GladeWidget
         */
        static ['new'](widget: Widget, signals: GLib.HashTable<any, any>): Gtk.TreeModel;
    }

    module Widget {
        // Signal callback interfaces

        interface AddSignalHandler {
            (arg1: Signal): void;
        }

        interface ButtonPressEvent {
            (arg1: Gdk.Event): boolean;
        }

        interface ButtonReleaseEvent {
            (arg1: Gdk.Event): boolean;
        }

        interface ChangeSignalHandler {
            (arg1: Signal): void;
        }

        interface MotionNotifyEvent {
            (arg1: Gdk.Event): boolean;
        }

        interface RemoveSignalHandler {
            (arg1: Signal): void;
        }

        interface SupportChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Widget extends GObject.InitiallyUnowned {
        // Own properties of Gladeui-2.0.Widget

        adaptor: WidgetAdaptor;
        anarchist: boolean;
        composite: boolean;
        internal: string;
        internal_name: string;
        internalName: string;
        name: string;
        object: GObject.Object;
        parent: Widget;
        project: Project;
        properties: any;
        reason: number;
        readonly support_warning: string;
        readonly supportWarning: string;
        template: Widget;
        template_exact: boolean;
        templateExact: boolean;
        toplevel_height: number;
        toplevelHeight: number;
        toplevel_width: number;
        toplevelWidth: number;
        readonly visible: boolean;

        // Owm methods of Gladeui-2.0.Widget

        /**
         * Currently only motion and button events are handled (see GLADE_WIDGET_IS_EVENT)
         * @param event a GdkEvent
         */
        static get_device_from_event(event: Gdk.Event): Gdk.Device;
        static get_from_gobject(object?: any | null): Widget;
        /**
         * Unsets superuser mode
         */
        static pop_superuser(): void;
        /**
         * Sets superuser mode
         */
        static push_superuser(): void;
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
         */
        static read(project: Project, parent: Widget | null, node: XmlNode, internal?: string | null): Widget;
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
        static superuser(): boolean;

        // Owm methods of Gladeui-2.0.Widget

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
        adaptor_create_internal(
            internal_object: GObject.Object,
            internal_name: string,
            parent_name: string,
            anarchist: boolean,
            reason: CreateReason,
        ): Widget;
        /**
         * Adds `child` to `parent` in a generic way for this #GladeWidget parent.
         * @param child the #GladeWidget to add
         * @param at_mouse whether the added widget should be added            at the current mouse position
         */
        add_child(child: Widget, at_mouse: boolean): void;
        /**
         * Adds `property` to `widget` 's list of referenced properties.
         *
         * Note: this is used to track properties on other objects that
         *       refer to this object.
         * @param property the #GladeProperty
         */
        add_prop_ref(property: Property): void;
        /**
         * Adds a signal handler for `widget`
         * @param signal_handler The #GladeSignal
         */
        add_signal_handler(signal_handler: Signal): void;
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
        add_verify(child: Widget, user_feedback: boolean): boolean;
        /**
         * Changes a #GladeSignal on `widget`
         * @param old_signal_handler the old #GladeSignal
         * @param new_signal_handler the new #GladeSignal
         */
        change_signal_handler(old_signal_handler: Signal, new_signal_handler: Signal): void;
        /**
         * Gets `child'`s packing property identified by `property_name`.
         * @param child The #GladeWidget child
         * @param property_name The id of the property
         * @param value The @GValue
         */
        child_get_property(child: Widget, property_name: string, value: GObject.Value): void;
        /**
         * Sets `child'`s packing property identified by `property_name` to `value`.
         * @param child The #GladeWidget child
         * @param property_name The id of the property
         * @param value The @GValue
         */
        child_set_property(child: Widget, property_name: string, value: GObject.Value): void;
        /**
         * Sets properties in `widget` based on the values of
         * matching properties in `template_widget`
         * @param template_widget a 'src' #GladeWidget
         * @param copy_parentless whether to copy reffed widgets at all
         * @param exact whether to copy reffed widgets exactly
         */
        copy_properties(template_widget: Widget, copy_parentless: boolean, exact: boolean): void;
        /**
         * Sets signals in `widget` based on the values of
         * matching signals in `template_widget`
         * @param template_widget a 'src' #GladeWidget
         */
        copy_signals(template_widget: Widget): void;
        /**
         * This is a convenience function to create a GladeEditorProperty corresponding
         * to `property`
         * @param property The widget's property
         * @param packing whether @property indicates a packing property or not.
         * @param use_command Whether the undo/redo stack applies here.
         * @returns A newly created and connected GladeEditorProperty
         */
        create_editor_property(property: string, packing: boolean, use_command: boolean): EditorProperty;
        /**
         * Determines whether `widget` is somehow dependent on `other,` in
         * which case it should be serialized after `other`.
         *
         * A widget is dependent on another widget.
         * It does not take into account for children dependencies.
         * @param other another #GladeWidget
         * @returns %TRUE if @widget depends on @other.
         */
        depends(other: Widget): boolean;
        /**
         * Creates a deep copy of #GladeWidget. if `exact` is specified,
         * the widget name is preserved and signals are carried over
         * (this is used to maintain names & signals in Cut/Paste context
         * as opposed to Copy/Paste contexts).
         * @param exact whether or not to creat an exact duplicate
         * @returns The newly created #GladeWidget
         */
        dup(exact: boolean): Widget;
        /**
         * Copies a list of properties, if `as_load` is specified, then
         * properties that are not saved to the glade file are ignored.
         * @param template_props the #GladeProperty list to copy
         * @param as_load whether to behave as if loading the project
         * @param copy_parentless whether to copy reffed widgets at all
         * @param exact whether to copy reffed widgets exactly
         * @returns A newly allocated #GList of new #GladeProperty objects.
         */
        dup_properties(
            template_props: Property[],
            as_load: boolean,
            copy_parentless: boolean,
            exact: boolean,
        ): Property[];
        ensure_name(project: Project, use_command: boolean): void;
        /**
         * Feed an event to be handled on the project GladeWidget
         * hierarchy.
         * @param event A #GdkEvent
         * @returns whether the event was handled or not.
         */
        event(event: Gdk.Event): boolean;
        /**
         * Finds a child widget named `name`.
         * @param name child name
         * @returns The child of widget or %NULL if it was not found.
         */
        find_child(name: string): Widget | null;
        /**
         * Creates a user friendly name to describe project widgets
         * @returns A newly allocated string
         */
        generate_path_name(): string;
        /**
         * Returns a #GladeWidgetAction object indentified by `action_path`.
         * @param action_path a full action path including groups
         * @returns the action or %NULL if not found.
         */
        get_action(action_path: string): WidgetAction | null;
        get_actions(): WidgetAction[];
        get_adaptor(): WidgetAdaptor;
        /**
         * Fetches any wrapped children of `widget`.
         * @returns The children of widget <note><para>This differs from a direct call to glade_widget_adaptor_get_children() as it only returns children which have an associated GladeWidget. This function will not return any placeholders or internal composite children that have not been exposed for Glade configuration</para></note>
         */
        get_children(): GObject.Object[];
        get_display_name(): string;
        get_internal(): string;
        /**
         * Checks if `widget` is a composite template to be used
         * with gtk_widget_class_set_template().
         * @returns whether @widget is composite.
         */
        get_is_composite(): boolean;
        /**
         * Get the current locked widget, locked widgets cannot
         * be removed from the project until unlocked
         * @returns a #GladeWidget or %NULL if none is locked
         */
        get_locker(): Widget | null;
        get_name(): string;
        get_object<T = GObject.Object>(): T;
        /**
         * Returns a #GladeWidgetAction object indentified by `action_path`.
         * @param action_path a full action path including groups
         * @returns the action or %NULL if not found.
         */
        get_pack_action(action_path: string): WidgetAction | null;
        get_pack_actions(): WidgetAction[];
        get_pack_property(id_property: string): Property | null;
        get_packing_properties(): Property[];
        get_parent(): Widget;
        get_parentless_reffed_widgets(): Property[];
        get_parentless_widget_ref(): Property;
        get_project(): Project;
        get_properties(): Property[];
        get_property(id_property: string): Property | null;
        /**
         * Compiles a list of #GladeSignal elements
         * @returns a newly allocated #GList of #GladeSignal, the caller must call g_list_free() to free the list.
         */
        get_signal_list(): Signal[];
        get_signal_model(): Gtk.TreeModel;
        get_toplevel(): Widget;
        has_decendant(type: GObject.GType): boolean;
        has_name(): boolean;
        has_prop_refs(): boolean;
        /**
         * Hide `widget`
         */
        hide(): void;
        in_project(): boolean;
        /**
         * Determines whether `widget` is somewhere inside `ancestor,` possibly with
         * intermediate containers.
         * @param ancestor another #GladeWidget
         * @returns %TRUE if @ancestor contains @widget as a child, grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Widget): boolean;
        list_locked_widgets(): Widget[];
        list_prop_refs(): Property[];
        list_signal_handlers(signal_name: string): Signal[];
        /**
         * Sets `locked` to be in a locked up state
         * spoken for by `widget,` locked widgets cannot
         * be removed from the project until unlocked.
         * @param locked The #GladeWidget to lock
         */
        lock(locked: Widget): void;
        /**
         * This function retrieves the value of the property `property_name` on
         * the runtime object of `widget` and sets it in `value`.
         * @param property_name The property identifier
         * @param value The #GValue
         */
        object_get_property(property_name: string, value: GObject.Value): void;
        /**
         * This function applies `value` to the property `property_name` on
         * the runtime object of `widget`.
         * @param property_name The property identifier
         * @param value The #GValue
         */
        object_set_property(property_name: string, value: GObject.Value): void;
        pack_property_default(id_property: string): boolean;
        /**
         * Resets `id_property` in `widget'`s packing properties to it's default value
         * @param id_property a string naming a #GladeProperty
         * @returns whether @id_property was found or not.
         */
        pack_property_reset(id_property: string): boolean;
        /**
         * Sets the enabled state of `id_property` in `widget'`s packing
         * properties; this is used for optional properties.
         * @param id_property a string naming a #GladeProperty
         * @param enabled setting enabled or disabled
         * @returns whether @id_property was found or not.
         */
        pack_property_set_enabled(id_property: string, enabled: boolean): boolean;
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
        pack_property_set_save_always(id_property: string, setting: boolean): boolean;
        /**
         * Sets the sensitivity of `id_property` in `widget'`s packing properties.
         * @param id_property a string naming a #GladeProperty
         * @param sensitive setting sensitive or insensitive
         * @param reason a description of why the user cant edit this property          which will be used as a tooltip
         * @returns whether @id_property was found or not.
         */
        pack_property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;
        /**
         * Same as glade_widget_property_string() but for packing
         * properties.
         * @param id_property a string naming a #GladeProperty
         * @param value the #GValue to print or %NULL
         * @returns A newly allocated string representing @id_property
         */
        pack_property_string(id_property: string, value: GObject.Value): string;
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
        placeholder_relation(widget: Widget): boolean;
        property_default(id_property: string): boolean;
        property_original_default(id_property: string): boolean;
        /**
         * Resets `id_property` in `widget` to it's default value
         * @param id_property a string naming a #GladeProperty
         * @returns whether @id_property was found or not.
         */
        property_reset(id_property: string): boolean;
        /**
         * Sets the enabled state of `id_property` in `widget;` this is
         * used for optional properties.
         * @param id_property a string naming a #GladeProperty
         * @param enabled setting enabled or disabled
         * @returns whether @id_property was found or not.
         */
        property_set_enabled(id_property: string, enabled: boolean): boolean;
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
        property_set_save_always(id_property: string, setting: boolean): boolean;
        /**
         * Sets the sensitivity of `id_property` in `widget`
         * @param id_property a string naming a #GladeProperty
         * @param sensitive setting sensitive or insensitive
         * @param reason a description of why the user cant edit this property          which will be used as a tooltip
         * @returns whether @id_property was found or not.
         */
        property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;
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
        property_string(id_property: string, value: GObject.Value): string;
        /**
         * Reads in a child widget from the xml (handles 'child' tag)
         * @param node a #GladeXmlNode
         */
        read_child(node: XmlNode): void;
        /**
         * Replaces the current widget instance with
         * a new one while preserving all properties children and
         * takes care of reparenting.
         */
        rebuild(): void;
        /**
         * Removes `child` from `parent` in a generic way for this #GladeWidget parent.
         * @param child the #GladeWidget to add
         */
        remove_child(child: Widget): void;
        /**
         * Removes `property` from `widget` 's list of referenced properties.
         *
         * Note: this is used to track properties on other objects that
         *       refer to this object.
         * @param property the #GladeProperty
         */
        remove_prop_ref(property: Property): void;
        /**
         * Removes the #GladeProperty indicated by `id_property`
         * from `widget` (this is intended for use in the plugin, to
         * remove properties from composite children that don't make
         * sense to allow the user to specify, notably - properties
         * that are proxied through the composite widget's properties or
         * style properties).
         * @param id_property the name of the property
         */
        remove_property(id_property: string): void;
        /**
         * Removes a signal handler from `widget`
         * @param signal_handler The #GladeSignal
         */
        remove_signal_handler(signal_handler: Signal): void;
        /**
         * Replaces a GObject with another GObject inside a #GladeWidget which
         * behaves as a container.
         *
         * Note that both GObjects must be owned by a GladeWidget.
         * @param old_object a #GObject
         * @param new_object a #GObject
         */
        replace(old_object: GObject.Object, new_object: GObject.Object): void;
        /**
         * Sets the sensitivity of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param sensitive setting sensitive or insensitive
         * @returns whether @action_path was found or not.
         */
        set_action_sensitive(action_path: string, sensitive: boolean): boolean;
        /**
         * Sets the visibility of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param visible setting visible or invisible
         * @returns whether @action_path was found or not.
         */
        set_action_visible(action_path: string, visible: boolean): boolean;
        set_child_type_from_node(child: GObject.Object, node: XmlNode): void;
        set_in_project(in_project: boolean): void;
        /**
         * Sets the internal name of `widget` to `internal`
         * @param internal The internal name
         */
        set_internal(internal: string): void;
        /**
         * Set's this widget to be toplevel composite object to be
         * eventually used with gtk_widget_class_set_template()
         *
         * Only one widget in a project should be composite.
         * @param composite whether @widget should be a composite template
         */
        set_is_composite(composite: boolean): void;
        /**
         * Sets `widget'`s name to `name`.
         * @param name a string
         */
        set_name(name: string): void;
        /**
         * Sets the sensitivity of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param sensitive setting sensitive or insensitive
         * @returns whether @action_path was found or not.
         */
        set_pack_action_sensitive(action_path: string, sensitive: boolean): boolean;
        /**
         * Sets the visibility of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param visible setting visible or invisible
         * @returns whether @action_path was found or not.
         */
        set_pack_action_visible(action_path: string, visible: boolean): boolean;
        /**
         * Generates the packing_properties list of the widget, given
         * the class of the container we are adding the widget to.
         * If the widget already has packing_properties, but the container
         * has changed, the current list is freed and replaced.
         * @param container The parent #GladeWidget
         */
        set_packing_properties(container: Widget): void;
        /**
         * sets the parenting #GladeWidget
         * @param parent the parenting #GladeWidget (or %NULL)
         */
        set_parent(parent?: Widget | null): void;
        /**
         * Makes `widget` belong to `project`.
         * @param project a #GladeProject
         */
        set_project(project: Project): void;
        set_support_warning(warning: string): void;
        /**
         * Display `widget` in it's project's GladeDesignView
         */
        show(): void;
        /**
         * Notifies that support metadata has changed on the widget.
         */
        support_changed(): void;
        /**
         * Unlocks `widget` so that it can be removed
         * from the project again
         */
        unlock(): void;
        /**
         * Verify this widget for deprecation and versioning warnings.
         *
         * This function will update the widget's support warning.
         */
        verify(): void;
        /**
         * Recursively writes out `widget` and its children
         * and appends the created #GladeXmlNode to `node`.
         * @param context A #GladeXmlContext
         * @param node A #GladeXmlNode
         */
        write(context: XmlContext, node: XmlNode): void;
        /**
         * Writes out a widget to the xml, takes care
         * of packing properties and special child types.
         * @param child The child #GladeWidget to write
         * @param context A #GladeXmlContext
         * @param node A #GladeXmlNode
         */
        write_child(child: Widget, context: XmlContext, node: XmlNode): void;
        /**
         * Writes out a placeholder to the xml
         * @param object A #GladePlaceholder
         * @param context A #GladeXmlContext
         * @param node A #GladeXmlNode
         */
        write_placeholder(object: GObject.Object, context: XmlContext, node: XmlNode): void;
        write_signals(context: XmlContext, node: XmlNode): void;
        write_special_child_prop(object: GObject.Object, context: XmlContext, node: XmlNode): void;
    }

    module WidgetAction {
        // Constructor properties interface
    }

    class WidgetAction extends GObject.Object {
        // Own properties of Gladeui-2.0.WidgetAction

        definition: any;
        sensitive: boolean;
        visible: boolean;

        // Owm methods of Gladeui-2.0.WidgetAction

        get_children(): WidgetActionDef[];
        get_def(): WidgetActionDef;
        get_sensitive(): boolean;
        get_visible(): boolean;
        /**
         * Set whether or not this action is sensitive.
         * @param sensitive the sensitivity to set
         */
        set_sensitive(sensitive: boolean): void;
        set_visible(visible: boolean): void;
    }

    module WidgetAdaptor {
        // Constructor properties interface
    }

    class WidgetAdaptor extends GObject.Object {
        // Own properties of Gladeui-2.0.WidgetAdaptor

        book: string;
        catalog: string;
        readonly cursor: any;
        generic_name: string;
        genericName: string;
        icon_name: string;
        iconName: string;
        name: string;
        query: boolean;
        special_child_type: string;
        specialChildType: string;
        title: string;
        type: GObject.GType;

        // Owm methods of Gladeui-2.0.WidgetAdaptor

        /**
         * Dynamically creates a subclass of #GladeWidgetAdaptor and subclasses
         * the closest parent adaptor (parent class adapters must be created/registered
         * prior to child classes, otherwise inheritance wont work) and parses in
         * the relevant catalog info.
         * @param catalog A #GladeCatalog
         * @param class_node the #GladeXmlNode to load
         * @param module the plugin GModule.
         */
        static from_catalog(catalog: Catalog, class_node: XmlNode, module: GModule.Module): WidgetAdaptor;
        static get_by_name(name: string): WidgetAdaptor | null;
        static get_by_type(type: GObject.GType): WidgetAdaptor | null;
        /**
         * Compiles a list of all registered adaptors.
         */
        static list_adaptors(): WidgetAdaptor[];

        // Owm methods of Gladeui-2.0.WidgetAdaptor

        /**
         * An adaptor function to be called on widget actions.
         * @param object The #GObject
         * @param action_path The action identifier in the action tree
         */
        action_activate(object: GObject.Object, action_path: string): void;
        /**
         * Add an action to `adaptor`.
         * If the action is present then it overrides label and stock
         * @param action_path The identifier of this action in the action tree
         * @param label A translated label to show in the UI for this action
         * @param stock If set, this stock item will be shown in the UI along side the label.
         * @param important if this action is important.
         * @returns whether or not the action was added/updated.
         */
        action_add(action_path: string, label: string, stock: string, important: boolean): boolean;
        /**
         * Remove an `adaptor'`s action.
         * @param action_path The identifier of this action in the action tree
         * @returns whether or not the action was removed.
         */
        action_remove(action_path: string): boolean;
        /**
         * This delegate function is used to create dynamically customized
         * submenus. Called only for actions that don't have children.
         * @param object The #GObject
         * @param action_path The action identifier in the action tree
         * @returns A newly created #GtkMenu or %NULL
         */
        action_submenu(object: GObject.Object, action_path: string): Gtk.Widget | null;
        /**
         * Create a list of actions.
         * @returns a new list of GladeWidgetAction.
         */
        actions_new(): WidgetAction[];
        /**
         * Adds `child` to `container`.
         * @param container The #GObject container
         * @param child The #GObject child
         */
        add(container: GObject.Object, child: GObject.Object): void;
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
        add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean;
        /**
         * An adaptor function to be called on widget actions.
         * @param container The #GObject container
         * @param object The #GObject
         * @param action_path The action identifier in the action tree
         */
        child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void;
        /**
         * Gets `child'`s packing property identified by `property_name`.
         * @param container The #GObject container
         * @param child The #GObject child
         * @param property_name The id of the property
         * @param value The @GValue
         */
        child_get_property(
            container: GObject.Object,
            child: GObject.Object,
            property_name: string,
            value: GObject.Value,
        ): void;
        /**
         * Sets `child'`s packing property identified by `property_name` to `value`.
         * @param container The #GObject container
         * @param child The #GObject child
         * @param property_name The id of the property
         * @param value The @GValue
         */
        child_set_property(
            container: GObject.Object,
            child: GObject.Object,
            property_name: string,
            value: GObject.Value,
        ): void;
        /**
         * This delegate function is always called whenever setting any
         * properties with the exception of load time, and copy/paste time
         * (basically the two places where we recreate a hierarchy that we
         * already know "works") its basically an optional backend provided
         * boundary checker for properties.
         * @param container The #GObject container
         * @param child The #GObject child
         * @param property_name The id of the property
         * @param value The @GValue
         * @returns whether or not its OK to set @value on @object, this function will silently return TRUE if the class did not provide a verify function.
         */
        child_verify_property(
            container: GObject.Object,
            child: GObject.Object,
            property_name: string,
            value: GObject.Value,
        ): boolean;
        /**
         * This function is called to construct a GObject instance for
         * a #GladeWidget of the said `adaptor`. (provided for language
         * bindings that may need to construct a wrapper object).
         * @param n_parameters amount of construct parameters
         * @param parameters array of construct #GParameter args to create              the new object with.
         * @returns A newly created #GObject
         */
        construct_object<T = GObject.Object>(n_parameters: number, parameters: GObject.Parameter): T;
        /**
         * This is used to allow the backend to override the way an
         * editor page is layed out (note that editor widgets are created
         * on demand and not at startup).
         * @param type The #GladeEditorPageType
         * @returns A new #GladeEditable widget
         */
        create_editable(type: EditorPageType): Editable;
        /**
         * Creates a GladeEditorProperty to edit `def`
         * @param def The #GladePropertyDef to be edited
         * @param use_command whether to use the GladeCommand interface to commit property changes
         * @returns A newly created #GladeEditorProperty
         */
        create_eprop(def: PropertyDef, use_command: boolean): EditorProperty;
        /**
         * Creates a #GladeEditorProperty to edit #GladePropertyDef `name` in `adaptor`
         * @param property_id the string if of the corresponding #GladePropertyDef to be edited
         * @param packing whether this refers to a packing property
         * @param use_command whether to use the GladeCommand interface to commit property changes
         * @returns A newly created #GladeEditorProperty
         */
        create_eprop_by_name(property_id: string, packing: boolean, use_command: boolean): EditorProperty;
        default_params(construct: boolean): GObject.Parameter[];
        /**
         * Checks whether `widget` depends on `another` to be placed earlier in
         * the glade file.
         * @param widget A #GladeWidget of the adaptor
         * @param another another #GladeWidget
         * @returns whether @widget depends on @another being parsed first in the resulting glade file.
         */
        depends(widget: Widget, another: Widget): boolean;
        /**
         * This function is called to destroy a GObject instance.
         * @param object The object to destroy
         */
        destroy_object(object: GObject.Object): void;
        /**
         * Assumes `pspec` is a property in an object class wrapped by `adaptor,`
         * this function will search for the specific parent adaptor class which
         * originally introduced `pspec`.
         * @param pspec a #GParamSpec
         * @returns the closest #GladeWidgetAdaptor in the ancestry to @adaptor          which is responsable for introducing @pspec.
         */
        from_pspec(pspec: GObject.ParamSpec): WidgetAdaptor;
        get_book(): string;
        get_catalog(): string;
        /**
         * Lists the children of `container`.
         * @param container The #GObject container
         * @returns A #GList of children
         */
        get_children(container: GObject.Object): GObject.Object[];
        get_display_name(): string;
        get_generic_name(): string;
        get_icon_name(): string;
        /**
         * Retrieves the internal object `internal_name` from `object`
         * @param object The #GObject
         * @param internal_name The string identifier of the internal object
         * @returns The internal #GObject
         */
        get_internal_child<T = GObject.Object>(object: GObject.Object, internal_name: string): T;
        get_missing_icon(): string;
        get_name(): string;
        get_object_type(): GObject.GType;
        /**
         * Retrieves the #GladePropertyDef for `name` in  `adaptor'`s child properties
         * @param name a string
         * @returns A #GladePropertyDef object
         */
        get_pack_property_def(name: string): PropertyDef | null;
        /**
         * Gets the default value for `property_id` on a widget governed by
         * `child_adaptor` when parented in a widget governed by `parent_adaptor`
         * @param container_adaptor The #GladeWidgetAdaptor for the parent object
         * @param id The string property identifier
         * @returns a string representing the default value for @property_id
         */
        get_packing_default(container_adaptor: WidgetAdaptor, id: string): string;
        get_packing_props(): PropertyDef[];
        get_parent_adaptor(): WidgetAdaptor;
        get_properties(): PropertyDef[];
        /**
         * Gets `value` of `property_name` on `object`.
         * @param object The #GObject
         * @param property_name The property identifier
         * @param value The #GValue
         */
        get_property(object: GObject.Object, property_name: string, value: GObject.Value): void;
        /**
         * Retrieves the #GladePropertyDef for `name` in `adaptor`
         * @param name a string
         * @returns A #GladePropertyDef object
         */
        get_property_def(name: string): PropertyDef | null;
        /**
         * Looks up signal class `name` on `adaptor`.
         * @param name the name of the signal class.
         * @returns a #GladeSignalDef or %NULL
         */
        get_signal_def(name: string): SignalDef | null;
        get_signals(): SignalDef[];
        get_title(): string;
        /**
         * Get the _get_type () function name if it is set, a %NULL value means that the
         * default heuristic for getting the GType is enough for both Glade and GtkBuilder.
         * @returns The _get_type () function name or %NULL if none is set
         */
        get_type_func(): string | null;
        has_child(container: GObject.Object, child: GObject.Object): boolean;
        has_internal_children(): boolean;
        /**
         * Checks whether or not this adaptor has support
         * to interface with child objects.
         * @returns whether or not @adaptor is a container
         */
        is_container(): boolean;
        /**
         * Add a packing action to `adaptor`.
         * If the action is present then it overrides label and stock
         * @param action_path The identifier of this action in the action tree
         * @param label A translated label to show in the UI for this action
         * @param stock If set, this stock item will be shown in the UI along side the label.
         * @param important if this action is important.
         * @returns whether or not the action was added/updated.
         */
        pack_action_add(action_path: string, label: string, stock: string, important: boolean): boolean;
        /**
         * Remove an `adaptor'`s packing action.
         * @param action_path The identifier of this action in the action tree
         * @returns whether or not the action was removed.
         */
        pack_action_remove(action_path: string): boolean;
        /**
         * Create a list of packing actions.
         * @returns a new list of GladeWidgetAction.
         */
        pack_actions_new(): WidgetAction[];
        /**
         * An adaptor function to be called after the object is created
         * @param object The #GObject
         * @param reason The #GladeCreateReason that @object was created for
         */
        post_create(object: GObject.Object, reason: CreateReason): void;
        /**
         * This function is called to update load a child `widget`
         * from `node` when loading xml files (will recurse into
         * glade_widget_read())
         * @param widget The #GladeWidget
         * @param node The #GladeXmlNode
         */
        read_child(widget: Widget, node: XmlNode): void;
        /**
         * This function is called to update `widget` from `node`
         * when loading xml files.
         * @param widget The #GladeWidget
         * @param node The #GladeXmlNode
         */
        read_widget(widget: Widget, node: XmlNode): void;
        /**
         * Registers `adaptor` into the Glade core (every supported
         * object type must have a registered adaptor).
         */
        register(): void;
        /**
         * Removes `child` from `container`.
         * @param container The #GObject container
         * @param child The #GObject child
         */
        remove(container: GObject.Object, child: GObject.Object): void;
        /**
         * Replaces `old_obj` with `new_obj` in `container` while positioning
         * `new_obj` where `old_obj` was and assigning it appropriate packing
         * property values.
         * @param container The #GObject container
         * @param old_obj The old #GObject child
         * @param new_obj The new #GObject child
         */
        replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void;
        /**
         * This delegate function is used to apply the property value on
         * the runtime object.
         * @param object The #GObject
         * @param property_name The property identifier
         * @param value The #GValue
         */
        set_property(object: GObject.Object, property_name: string, value: GObject.Value): void;
        /**
         * For normal properties this is used to serialize
         * property values, for custom properties its still
         * needed to update the UI for undo/redo items etc.
         * @param def The #GladePropertyDef
         * @param value The #GValue to convert to a string
         * @returns A newly allocated string representation of @value
         */
        string_from_value(def: PropertyDef, value: GObject.Value): string;
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
        verify_property(object: GObject.Object, property_name: string, value: GObject.Value): boolean;
        /**
         * This function is called to write the child `widget` to `node`
         * when writing xml files (takes care of packing and recurses
         * into glade_widget_write())
         * @param widget The #GladeWidget
         * @param context The #GladeXmlContext
         * @param node The #GladeXmlNode
         */
        write_child(widget: Widget, context: XmlContext, node: XmlNode): void;
        /**
         * This function is called to write `widget` to `node`
         * when writing xml files.
         * @param widget The #GladeWidget
         * @param context The #GladeXmlContext
         * @param node The #GladeXmlNode
         */
        write_widget(widget: Widget, context: XmlContext, node: XmlNode): void;
        /**
         * This function is called to write `widget` to `node`
         * when writing xml files (after writing children)
         * @param widget The #GladeWidget
         * @param context The #GladeXmlContext
         * @param node The #GladeXmlNode
         */
        write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void;
    }

    class AdaptorChooserClass {}

    class AppClass {
        // Own fields of Gladeui-2.0.AppClass

        padding: any[];
    }

    class BaseEditorClass {
        // Own fields of Gladeui-2.0.BaseEditorClass

        padding: any[];
    }

    class Catalog {
        // Owm methods of Gladeui-2.0.Catalog

        /**
         * Adds a new path to the list of path to look catalogs for.
         * @param path the new path containing catalogs
         */
        static add_path(path: string): void;
        /**
         * Destroy and free all resources related with every loaded catalog.
         */
        static destroy_all(): void;
        static get_extra_paths(): string[];
        static is_loaded(name: string): boolean;
        /**
         * Loads all available catalogs in the system.
         * First loads catalogs from GLADE_ENV_CATALOG_PATH,
         * then from glade_app_get_catalogs_dir() and finally from paths specified with
         * glade_catalog_add_path()
         */
        static load_all(): Catalog[];
        /**
         * Remove path from the list of path to look catalogs for.
         * %NULL to remove all paths.
         * @param path the new path containing catalogs or %NULL to remove all of them
         */
        static remove_path(path?: string | null): void;

        // Owm methods of Gladeui-2.0.Catalog

        get_adaptors(): WidgetAdaptor[];
        get_book(): string;
        get_domain(): string;
        get_icon_prefix(): string;
        get_major_version(): number;
        get_minor_version(): number;
        get_name(): string;
        get_prefix(): string;
        get_targets(): TargetableVersion[];
        get_widget_groups(): WidgetGroup[];
    }

    class CellRendererIconClass {}

    class ClipboardClass {
        // Own fields of Gladeui-2.0.ClipboardClass

        padding: any[];
    }

    class CommandClass {
        // Own fields of Gladeui-2.0.CommandClass

        padding: any[];
    }

    /**
     * #GladeProperty can be set in a list as one command,
     * for Undo purposes; we store the list of #GladeCommandSetPropData with
     * their old and new #GValue.
     */
    class CommandSetPropData {
        // Own fields of Gladeui-2.0.CommandSetPropData

        property: Property;
    }

    class Cursor {
        // Own fields of Gladeui-2.0.Cursor

        selector: Gdk.Cursor;
        add_widget: Gdk.Cursor;
        resize_top_left: Gdk.Cursor;
        resize_top_right: Gdk.Cursor;
        resize_bottom_left: Gdk.Cursor;
        resize_bottom_right: Gdk.Cursor;
        resize_left: Gdk.Cursor;
        resize_right: Gdk.Cursor;
        resize_top: Gdk.Cursor;
        resize_bottom: Gdk.Cursor;
        drag: Gdk.Cursor;
        add_widget_pixbuf: GdkPixbuf.Pixbuf;

        // Owm methods of Gladeui-2.0.Cursor

        static get_add_widget_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Initializes cursors for use with glade_cursor_set().
         */
        static init(): void;
        /**
         * Sets the cursor for `window` to something appropriate based on `type`.
         * (also sets the cursor on all visible project widgets)
         * @param project
         * @param window a #GdkWindow
         * @param type a #GladeCursorType
         */
        static set(project: Project, window: Gdk.Window, type: CursorType): void;
    }

    class DesignViewClass {
        // Own fields of Gladeui-2.0.DesignViewClass

        padding: any[];
    }

    class EditableInterface {}

    class EditorClass {
        // Own fields of Gladeui-2.0.EditorClass

        padding: any[];
    }

    class EditorPropertyClass {
        // Own fields of Gladeui-2.0.EditorPropertyClass

        padding: any[];
    }

    class EditorSkeletonClass {}

    class EditorTableClass {}

    class IDAllocator {
        // Owm methods of Gladeui-2.0.IDAllocator

        /**
         * TODO: write me
         * @returns the id
         */
        allocate(): number;
        /**
         * Frees `allocator` and its associated memory
         */
        destroy(): void;
        /**
         * TODO: write me
         * @param id the id given by glade_id_allocator_allocate()
         */
        release(id: number): void;
    }

    class InspectorClass {
        // Own fields of Gladeui-2.0.InspectorClass

        padding: any[];
    }

    class NameContext {
        // Owm methods of Gladeui-2.0.NameContext

        add_name(name: string): boolean;
        destroy(): void;
        has_name(name: string): boolean;
        n_names(): number;
        new_name(base_name: string): string;
        release_name(name: string): void;
    }

    class NamedIconChooserDialogClass {
        // Own fields of Gladeui-2.0.NamedIconChooserDialogClass

        padding: any[];
    }

    class PaletteClass {}

    class PalettePrivate {}

    class ParamSpecObjects {
        // Owm methods of Gladeui-2.0.ParamSpecObjects

        get_type(): GObject.GType;
        set_type(type: GObject.GType): void;
    }

    class PlaceholderClass {}

    class PlaceholderPrivate {}

    class ProjectClass {}

    class ProjectPrivate {}

    class PropertyClass {}

    class PropertyDef {
        // Constructors of Gladeui-2.0.PropertyDef

        constructor(adaptor: WidgetAdaptor, id: string);

        static ['new'](adaptor: WidgetAdaptor, id: string): PropertyDef;

        static new_from_spec(adaptor: WidgetAdaptor, spec: GObject.ParamSpec): PropertyDef;

        static new_from_spec_full(adaptor: WidgetAdaptor, spec: GObject.ParamSpec, need_handle: boolean): PropertyDef;

        // Owm methods of Gladeui-2.0.PropertyDef

        static get_default_from_spec(spec: GObject.ParamSpec): GObject.Value;
        static make_flags_from_string(type: GObject.GType, string: string): number;
        /**
         * This function assigns "weight" to each property in its natural order staring from 1.
         * If parent is 0 weight will be set for every #GladePropertyDef in the list.
         * This function will not override weight if it is already set (weight >= 0.0)
         * @param properties a list of #GladePropertyDef
         * @param parent the #GType of the parent
         */
        static set_weights(properties: PropertyDef[], parent: GObject.GType): void;
        /**
         * Updates the `property_def_ref` with the contents of the node in the xml
         * file. Only the values found in the xml file are overridden.
         * @param node the property node
         * @param object_type the #GType of the owning object
         * @param property_def_ref a pointer to the property class
         * @param domain the domain to translate catalog strings from
         */
        static update_from_node(
            node: XmlNode,
            object_type: GObject.GType,
            property_def_ref: PropertyDef | null,
            domain: string,
        ): boolean;

        // Owm methods of Gladeui-2.0.PropertyDef

        atk(): boolean;
        clone(): PropertyDef;
        common(): boolean;
        /**
         * Compares value1 with value2 according to `property_def`.
         * @param value1 a GValue of correct type for @property_def
         * @param value2 a GValue of correct type for @property_def
         * @returns -1, 0 or +1, if value1 is found to be less than, equal to or greater than value2, respectively.
         */
        compare(value1: GObject.Value, value2: GObject.Value): number;
        create_type(): string;
        custom_layout(): boolean;
        deprecated(): boolean;
        deprecated_since_major(): number;
        deprecated_since_minor(): number;
        /**
         * Frees `property_def` and its associated memory.
         */
        free(): void;
        get_adaptor(): WidgetAdaptor;
        get_construct_only(): boolean;
        get_default(): GObject.Value;
        get_ignore(): boolean;
        get_is_packing(): boolean;
        get_name(): string;
        get_original_default(): GObject.Value;
        get_pspec(): GObject.ParamSpec;
        get_tooltip(): string;
        get_virtual(): boolean;
        id(): string;
        is_object(): boolean;
        is_visible(): boolean;
        load_defaults_from_spec(): void;
        /**
         * Creates and appropriate GtkAdjustment for use in the editor
         * @returns An appropriate #GtkAdjustment for use in the Property editor
         */
        make_adjustment(): Gtk.Adjustment;
        make_gvalue_from_string(string: string, project: Project): GObject.Value;
        make_string_from_gvalue(value: GObject.Value): string;
        match(comp: PropertyDef): boolean;
        multiline(): boolean;
        needs_sync(): boolean;
        optional(): boolean;
        optional_default(): boolean;
        parentless_widget(): boolean;
        query(): boolean;
        save(): boolean;
        save_always(): boolean;
        set_adaptor(adaptor: WidgetAdaptor): void;
        set_construct_only(construct_only: boolean): void;
        set_ignore(ignore: boolean): void;
        set_is_packing(is_packing: boolean): void;
        set_name(name: string): void;
        set_pspec(pspec: GObject.ParamSpec): void;
        set_tooltip(tooltip: string): void;
        set_virtual(value: boolean): void;
        since_major(): number;
        since_minor(): number;
        stock(): boolean;
        stock_icon(): boolean;
        themed_icon(): boolean;
        transfer_on_paste(): boolean;
        translatable(): boolean;
        void_value(value: GObject.Value): boolean;
        weight(): number;
    }

    class PropertyLabelClass {}

    class PropertyLabelPrivate {}

    class PropertyPrivate {}

    class PropertyShellClass {}

    class PropertyShellPrivate {}

    class SignalClass {}

    class SignalDef {
        // Constructors of Gladeui-2.0.SignalDef

        constructor(adaptor: WidgetAdaptor, for_type: GObject.GType, signal_id: number);

        static ['new'](adaptor: WidgetAdaptor, for_type: GObject.GType, signal_id: number): SignalDef;

        // Owm methods of Gladeui-2.0.SignalDef

        /**
         * Clones a #GladeSignalDef
         * @returns a new copy of @signal_def
         */
        clone(): SignalDef;
        /**
         * Get if the signal is flagged as deprecated.
         * @returns %TRUE if the signal is deprecated
         */
        deprecated(): boolean;
        /**
         * Get the major version that deprecated this signal.
         * @returns the major version
         */
        deprecated_since_major(): number;
        /**
         * Get the minor version that deprecated this signal.
         * @returns the minor version
         */
        deprecated_since_minor(): number;
        /**
         * Frees a #GladeSignalDef
         */
        free(): void;
        /**
         * Get #GladeWidgetAdaptor associated with the signal.
         * @returns a #GladeWidgetAdaptor
         */
        get_adaptor(): WidgetAdaptor;
        /**
         * Get the combination of GSignalFlags specifying detail of when the default
         * handler is to be invoked.
         * @returns the #GSignalFlags
         */
        get_flags(): GObject.SignalFlags;
        /**
         * Get the name of the signal.
         * @returns the name of the signal
         */
        get_name(): string;
        /**
         * Get the name of the object class that this signal belongs to.
         * @returns the type name of the signal
         */
        get_object_type_name(): string;
        /**
         * Set if the signal is deprecated.
         * @param deprecated %TRUE if the signal is deprecated
         */
        set_deprecated(deprecated: boolean): void;
        /**
         * Set the major and minor version that introduced this signal.
         * @param since_major the major version.
         * @param since_minor the minor version.
         */
        set_since(since_major: number, since_minor: number): void;
        /**
         * Get the major version that introduced this signal.
         * @returns the major version
         */
        since_major(): number;
        /**
         * Get the minor version that introduced this signal.
         * @returns the minor version
         */
        since_minor(): number;
        update_from_node(node: XmlNode, domain: string): void;
    }

    class SignalEditorClass {
        // Own fields of Gladeui-2.0.SignalEditorClass

        padding: any[];
    }

    class SignalModelClass {}

    class SignalModelPrivate {}

    class SignalPrivate {}

    class TargetableVersion {
        // Own fields of Gladeui-2.0.TargetableVersion

        major: number;
        minor: number;

        // Constructors of Gladeui-2.0.TargetableVersion

        constructor(
            properties?: Partial<{
                major: number;
                minor: number;
            }>,
        );
    }

    class WidgetActionClass {}

    class WidgetActionDef {
        // Own fields of Gladeui-2.0.WidgetActionDef

        id: string;
        path: string;
        label: string;
        stock: string;
        important: boolean;
        actions: any[];

        // Constructors of Gladeui-2.0.WidgetActionDef

        constructor(
            properties?: Partial<{
                id: string;
                path: string;
                label: string;
                stock: string;
                important: boolean;
            }>,
        );

        static ['new'](path: string): WidgetActionDef;

        // Owm methods of Gladeui-2.0.WidgetActionDef

        clone(): WidgetActionDef;
        /**
         * Frees a GladeWidgetActionDef.
         */
        free(): void;
        set_important(important: boolean): void;
        set_label(label: string): void;
        set_stock(stock: string): void;
    }

    class WidgetActionPrivate {}

    class WidgetAdaptorClass {
        // Own fields of Gladeui-2.0.WidgetAdaptorClass

        version_since_major: number;
        version_since_minor: number;
        default_width: number;
        default_height: number;
        deprecated: number;
        toplevel: number;
        use_placeholders: number;
        construct_object: ConstructObjectFunc;
        deep_post_create: PostCreateFunc;
        post_create: PostCreateFunc;
        get_internal_child: GetInternalFunc;
        verify_property: VerifyPropertyFunc;
        set_property: SetPropertyFunc;
        get_property: GetPropertyFunc;
        add_verify: AddChildVerifyFunc;
        add: AddChildFunc;
        remove: RemoveChildFunc;
        get_children: GetChildrenFunc;
        child_verify_property: ChildVerifyPropertyFunc;
        child_set_property: ChildSetPropertyFunc;
        child_get_property: ChildGetPropertyFunc;
        replace_child: ReplaceChildFunc;
        action_activate: ActionActivateFunc;
        child_action_activate: ChildActionActivateFunc;
        action_submenu: ActionSubmenuFunc;
        depends: DependsFunc;
        read_widget: ReadWidgetFunc;
        write_widget: WriteWidgetFunc;
        read_child: ReadWidgetFunc;
        write_child: WriteWidgetFunc;
        create_eprop: CreateEPropFunc;
        string_from_value: StringFromValueFunc;
        create_editable: CreateEditableFunc;
        destroy_object: DestroyObjectFunc;
        write_widget_after: WriteWidgetFunc;
        deprecated_since_major: number;
        deprecated_since_minor: number;
    }

    class WidgetClass {}

    class WidgetGroup {
        // Owm methods of Gladeui-2.0.WidgetGroup

        get_adaptors(): WidgetAdaptor[];
        get_expanded(): boolean;
        get_name(): string;
        get_title(): string;
    }

    class WidgetPrivate {}

    class XmlContext {
        // Constructors of Gladeui-2.0.XmlContext

        constructor(doc: XmlDoc, name_space?: string | null);

        static ['new'](doc: XmlDoc, name_space?: string | null): XmlContext;

        static new_from_path(full_path: string, nspace?: string | null, root_name?: string | null): XmlContext;

        // Owm methods of Gladeui-2.0.XmlContext

        copy(): XmlContext;
        /**
         * Frees the memory allocated by #GladeXmlContext.
         */
        free(): void;
        /**
         * Get the #GladeXmlDoc this `context` refers to.
         * @returns the #GladeXmlDoc that the @context refers to
         */
        get_doc(): XmlDoc;
    }

    class XmlDoc {
        // Constructors of Gladeui-2.0.XmlDoc

        constructor(properties?: Partial<{}>);

        static ['new'](): XmlDoc;

        // Owm methods of Gladeui-2.0.XmlDoc

        get_root(): XmlNode;
        new_comment(comment: string): XmlNode;
        /**
         * Increases the reference of the #GladeXmlDoc.
         * @returns the given #GladeXmlDoc
         */
        ref(): XmlDoc;
        save(full_path: string): number;
        set_root(node: XmlNode): void;
        /**
         * Decreases the reference of the #GladeXmlDoc.
         */
        unref(): void;
    }

    class XmlNode {
        // Constructors of Gladeui-2.0.XmlNode

        constructor(context: XmlContext, name: string);

        static ['new'](context: XmlContext, name: string): XmlNode;

        static new_comment(context: XmlContext, comment: string): XmlNode;

        // Owm methods of Gladeui-2.0.XmlNode

        add_next_sibling(new_node: XmlNode): XmlNode;
        add_prev_sibling(new_node: XmlNode): XmlNode;
        append_child(child: XmlNode): void;
        copy(): XmlNode;
        ['delete'](): void;
        get_children(): XmlNode;
        get_children_with_comments(): XmlNode;
        get_name(): string;
        get_parent(): XmlNode;
        is_comment(): boolean;
        next(): XmlNode;
        next_with_comments(): XmlNode;
        prev_with_comments(): XmlNode;
        remove(): void;
        set_property_boolean(name: string, value: boolean): void;
        /**
         * Set a property as a string in the `node_in`. Note that %NULL `string` value
         * Are simply ignored and not written in the XML.
         * @param name the name of the property to set
         * @param string the string value of the property to set
         */
        set_property_string(name: string, string?: string | null): void;
        /**
         * This is a wrapper around glade_xml_node_verify_silent(), only it emits
         * a g_warning() if `node_in` has a name different than `name`.
         * @param name a string
         * @returns %TRUE if @node_in's name is equal to @name, %FALSE otherwise
         */
        verify(name: string): boolean;
        verify_silent(name: string): boolean;
    }

    interface Editable {
        // Owm methods of Gladeui-2.0.Editable

        block(): void;
        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or %NULL)
         * @param widget the #GladeWidget to load
         */
        load(widget: Widget): void;
        loaded_widget(): Widget | null;
        loading(): boolean;
        /**
         * This only applies for the general page in the property
         * editor, editables that embed the #GladeEditorTable implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;
        unblock(): void;

        // Own virtual methods of Gladeui-2.0.Editable

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or %NULL)
         * @param widget the #GladeWidget to load
         */
        vfunc_load(widget: Widget): void;
        /**
         * This only applies for the general page in the property
         * editor, editables that embed the #GladeEditorTable implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        vfunc_set_show_name(show_name: boolean): void;
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

export default Gladeui;
// END
