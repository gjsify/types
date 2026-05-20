
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Gladeui {

    /**
     * Gladeui-2.0
     */


    /**
     * @gir-type Enum
     */
    export namespace CreateReason {
        export const $gtype: GObject.GType<CreateReason>;
    }

    /**
     * These are the reasons your {@link Gladeui.PostCreateFunc} can be called.
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    export namespace CursorType {
        export const $gtype: GObject.GType<CursorType>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace EditorPageType {
        export const $gtype: GObject.GType<EditorPageType>;
    }

    /**
     * @gir-type Enum
     */
    enum EditorPageType {
        GENERAL,
        COMMON,
        PACKING,
        ATK,
        QUERY,
        SIGNAL,
    }


    /**
     * @gir-type Enum
     */
    export namespace ItemAppearance {
        export const $gtype: GObject.GType<ItemAppearance>;
    }

    /**
     * @gir-type Enum
     */
    enum ItemAppearance {
        ICON_AND_LABEL,
        ICON_ONLY,
        LABEL_ONLY,
    }


    /**
     * @gir-type Enum
     */
    export namespace PointerMode {
        export const $gtype: GObject.GType<PointerMode>;
    }

    /**
     * Indicates what the pointer is used for in the workspace.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ProjectModelColumns {
        export const $gtype: GObject.GType<ProjectModelColumns>;
    }

    /**
     * The tree view columns provided by the GtkTreeModel implemented
     * by GladeProject
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    export namespace SignalModelColumns {
        export const $gtype: GObject.GType<SignalModelColumns>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace Stock {
        export const $gtype: GObject.GType<Stock>;
    }

    /**
     * @gir-type Enum
     */
    enum Stock {
        DUMMY,
    }


    /**
     * @gir-type Enum
     */
    export namespace StockImage {
        export const $gtype: GObject.GType<StockImage>;
    }

    /**
     * @gir-type Enum
     */
    enum StockImage {
        DUMMY,
    }


    /**
     * @gir-type Enum
     */
    export namespace UIMessageType {
        export const $gtype: GObject.GType<UIMessageType>;
    }

    /**
     * @gir-type Enum
     */
    enum UIMessageType {
        INFO,
        WARN,
        ERROR,
        ARE_YOU_SURE,
        YES_OR_NO,
    }


    /**
     * @gir-type Enum
     */
    export namespace UtilFileDialogType {
        export const $gtype: GObject.GType<UtilFileDialogType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @returns a list paths added by `glade_catalog_add_path()`
     */
    function catalog_get_extra_paths(): string[];

    /**
     * @param name a catalog object
     * @returns Whether `name` is loaded or not
     */
    function catalog_is_loaded(name: string): boolean;

    /**
     * Loads all available catalogs in the system.
     * First loads catalogs from GLADE_ENV_CATALOG_PATH,
     * then from `glade_app_get_catalogs_dir()` and finally from paths specified with
     * `glade_catalog_add_path()`
     * @returns the list of loaded GladeCatalog *
     */
    function catalog_load_all(): Catalog[];

    /**
     * Remove path from the list of path to look catalogs for.
     * `null` to remove all paths.
     * @param path the new path containing catalogs or `null` to remove all of them
     */
    function catalog_remove_path(path: string | null): void;

    function cursor_get_add_widget_pixbuf(): GdkPixbuf.Pixbuf;

    /**
     * Initializes cursors for use with `glade_cursor_set()`.
     */
    function cursor_init(): void;

    /**
     * Sets the cursor for `window` to something appropriate based on `type`.
     * (also sets the cursor on all visible project widgets)
     * @param project 
     * @param window a {@link Gdk.Window}
     * @param type a {@link Gladeui.CursorType}
     */
    function cursor_set(project: Project, window: Gdk.Window, type: CursorType): void;

    /**
     * @param type 
     * @param value 
     */
    function displayable_value_is_disabled(type: GObject.GType, value: string): boolean;

    /**
     * @param type 
     * @param value 
     * @param disabled 
     */
    function displayable_value_set_disabled(type: GObject.GType, value: string, disabled: boolean): void;

    function get_debug_flags(): number;

    /**
     * @param type 
     * @param value 
     */
    function get_displayable_value(type: GObject.GType, value: string): string;

    /**
     * @param type 
     * @param displayabe 
     */
    function get_value_from_displayable(type: GObject.GType, displayabe: string): string;

    /**
     * Initialization function for libgladeui (not {@link Gladeui.App})
     * It builds paths, bind text domain, and register icons
     */
    function init(): void;

    function init_debug_flags(): void;

    /**
     * @param name 
     * @param nick 
     * @param blurb 
     * @param accepted_type 
     * @param flags 
     * @returns a {@link GObject.ParamSpec} describing a list of {@link GObject.Object}
     */
    function param_spec_objects(name: string, nick: string, blurb: string, accepted_type: GObject.GType, flags: GObject.ParamFlags): GObject.ParamSpec;

    /**
     * @param property 
     */
    function propert_get_insensitive_tooltip(property: Property): string;

    /**
     * @param spec 
     */
    function property_def_get_default_from_spec(spec: GObject.ParamSpec): unknown;

    /**
     * @param type 
     * @param string 
     */
    function property_def_make_flags_from_string(type: GObject.GType, string: string): number;

    /**
     * This function assigns "weight" to each property in its natural order staring from 1.
     * If parent is 0 weight will be set for every {@link Gladeui.PropertyDef} in the list.
     * This function will not override weight if it is already set (weight >= 0.0)
     * @param properties a list of {@link Gladeui.PropertyDef}
     * @param parent the {@link GObject.GType} of the parent
     */
    function property_def_set_weights(properties: PropertyDef[], parent: GObject.GType): void;

    /**
     * Updates the `property_def_ref` with the contents of the node in the xml
     * file. Only the values found in the xml file are overridden.
     * @param node the property node
     * @param object_type the {@link GObject.GType} of the owning object
     * @param property_def_ref a pointer to the property class
     * @param domain the domain to translate catalog strings from
     * @returns `true` on success. `property_def_ref` is set to NULL if the property          has Disabled="TRUE".
     */
    function property_def_update_from_node(node: XmlNode, object_type: GObject.GType, property_def_ref: PropertyDef | null, domain: string): [boolean, PropertyDef | null];

    /**
     * @param type 
     * @param value 
     * @param domain 
     * @param string 
     */
    function register_displayable_value(type: GObject.GType, value: string, domain: string, string: string): void;

    /**
     * @param type 
     * @param value 
     * @param string 
     */
    function register_translated_value(type: GObject.GType, value: string, string: string): void;

    /**
     * Sets up a log handler to manage all {@link GLib.LogLevelFlags.LEVEL_MASK} errors of domain:
     * GLib, GLib-GObject, Gtk, Gdk, and domainless.
     */
    function setup_log_handlers(): void;

    /**
     * @returns a {@link GObject.ParamSpec} describing a boolean
     */
    function standard_boolean_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing a float
     */
    function standard_float_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing a {@link Gdk.Color}
     */
    function standard_gdkcolor_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing an int
     */
    function standard_int_spec(): GObject.ParamSpec;

    /**
     * This was developed for the purpose of holding a list
     * of 'targets' in an AtkRelation (we are setting it up
     * as a property)
     * @returns a {@link GObject.ParamSpec} describing a list of {@link GObject.Object}
     */
    function standard_objects_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing a {@link GdkPixbuf.Pixbuf}
     */
    function standard_pixbuf_spec(): GObject.ParamSpec;

    /**
     * @param prefix 
     */
    function standard_stock_append_prefix(prefix: string): void;

    /**
     * @returns a {@link GObject.ParamSpec} describing a list of builtin stock image
     */
    function standard_stock_image_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing a list of builtin stock item
     */
    function standard_stock_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing a string
     */
    function standard_string_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing an array of strings
     */
    function standard_strv_spec(): GObject.ParamSpec;

    /**
     * @returns a {@link GObject.ParamSpec} describing an uint
     */
    function standard_uint_spec(): GObject.ParamSpec;

    /**
     * @param type 
     */
    function type_has_displayable_values(type: GObject.GType): boolean;

    /**
     * @param path any path that may contain ".." or "." components
     * @returns an absolute path to the specified file or directory          that contains no ".." or "." components (this does          not call readlink like `realpath()` does).
     */
    function util_canonical_path(path: string): string;

    /**
     * @param parent 
     * @param child_adaptor 
     * @param parent_widget 
     */
    function util_check_and_warn_scrollable(parent: Widget, child_adaptor: WidgetAdaptor, parent_widget: Gtk.Widget): boolean;

    /**
     * This is a {@link GLib.CompareFunc} that compares the labels of two stock items,
     * ignoring any '_' characters. It isn't particularly efficient.
     * @param a a `gconstpointer` to a {@link Gtk.StockItem}
     * @param b a `gconstpointer` to a {@link Gtk.StockItem}
     * @returns negative value if `a` < `b`; zero if `a` = `b`;          positive value if `a` > `b`
     */
    function util_compare_stock_labels(a: null, b: null): number;

    /**
     * Use this to itterate over all children in a GtkContainer,
     * as it used _forall() instead of _foreach() (and the GTK+ version
     * of this function is simply not exposed).
     * @param container a {@link Gtk.Container}
     * @returns a {@link Gladeui.GList} giving the contents of `container`
     */
    function util_container_get_all_children(container: Gtk.Container): Gtk.Widget[];

    /**
     * @param parent a {@link Gladeui.Widget}
     * @returns the amount of `GladePlaceholders` parented by `parent`
     */
    function util_count_placeholders(parent: Widget): number;

    /**
     * Duplicates `name`, but the copy has two underscores in place of any single
     * underscore in the original.
     * @param name a string
     * @returns a newly allocated string
     */
    function util_duplicate_underscores(name: string): string;

    /**
     * @param title dialog title
     * @param project a {@link Gladeui.Project} used when saving
     * @param parent a parent {@link Gtk.Window} for the dialog
     * @param action a {@link Gladeui.UtilFileDialogType} to say if the dialog will open or save
     * @returns a "glade file" file chooser dialog. The caller is          responsible for showing the dialog
     */
    function util_file_dialog_new(title: string, project: Project, parent: Gtk.Window, action: UtilFileDialogType): Gtk.Widget;

    /**
     * Checks whether the file at `path` is writeable
     * @param path the path to the file
     * @returns TRUE if file is writeable
     */
    function util_file_is_writeable(path: string): boolean;

    /**
     * @param value 
     */
    function util_filename_to_icon_name(value: string): string;

    /**
     * Looks through `model` for the {@link Gtk.TreeIter} corresponding to
     * `findme` under `column`.
     * @param model a {@link Gtk.TreeModel}
     * @param findme a {@link Gladeui.Widget}
     * @param column a `gint`
     * @returns a newly allocated {@link Gtk.TreeIter} from `model` corresponding to `findme` which should be freed with `gtk_tree_iter_free()`
     */
    function util_find_iter_by_widget(model: Gtk.TreeModel, findme: Widget, column: number): Gtk.TreeIter;

    /**
     * Creates an image displaying the devhelp icon.
     * @param size the preferred icon size
     * @returns a {@link Gtk.Image}
     */
    function util_get_devhelp_icon(size: Gtk.IconSize): Gtk.Widget;

    /**
     * Gets the UTC modification time of file `filename`.
     * @param filename A filename
     * @returns The mtime of the file, or %0 if the file attributes          could not be read.
     */
    function util_get_file_mtime(filename: string): number;

    /**
     * @param container a {@link Gtk.Container}
     * @returns a {@link Gtk.Widget}
     */
    function util_get_placeholder_from_pointer(container: Gtk.Container): Gtk.Widget;

    /**
     * Returns the type using the "get type" function name based on `name`.
     * If the `have_func` flag is true,`name` is used directly, otherwise the get-type
     * function is contrived from `name` then used.
     * @param name the name of the {@link GObject.GType} - like 'GtkWidget' or a "get-type" function.
     * @param have_func function-name flag -- true if the name is a "get-type" function.
     * @returns the new {@link GObject.GType}
     */
    function util_get_type_from_name(name: string, have_func: boolean): GObject.GType;

    /**
     * @returns whether the devhelp module is loaded
     */
    function util_have_devhelp(): boolean;

    /**
     * @param value 
     */
    function util_icon_name_to_filename(value: string): string;

    /**
     * @param object A {@link GObject.Object}
     * @returns Whether the object's project is being loaded or not.
     */
    function util_object_is_loading(object: GObject.Object): boolean;

    /**
     * Return a usable version of a property identifier as found
     * in a freshly parserd `GladeInterface`
     * @param str a string
     */
    function util_read_prop_name(str: string): string;

    /**
     * @param widget 
     */
    function util_remove_scroll_events(widget: Gtk.Widget): void;

    /**
     * Replaces each occurrence of the character `a` in `str` to `b`.
     * @param str a string
     * @param a a `gchar`
     * @param b a `gchar`
     */
    function util_replace(str: string, a: number, b: number): void;

    /**
     * @param book 
     * @param page 
     * @param search 
     */
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
     * @returns `true` if there was an error on the conversion, `false` otherwise.
     */
    function utils_boolean_from_string(string: string): [boolean, boolean];

    /**
     * @param cr 
     * @param color 
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     */
    function utils_cairo_draw_line(cr: cairo.Context, color: Gdk.Color, x1: number, y1: number, x2: number, y2: number): void;

    /**
     * @param cr 
     * @param color 
     * @param filled 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    function utils_cairo_draw_rectangle(cr: cairo.Context, color: Gdk.Color, filled: boolean, x: number, y: number, width: number, height: number): void;

    /**
     * @param enum_type 
     * @param value 
     */
    function utils_enum_string_from_value(enum_type: GObject.GType, value: number): string;

    /**
     * @param flags_type 
     * @param value 
     */
    function utils_enum_string_from_value_displayable(flags_type: GObject.GType, value: number): string;

    /**
     * @param enum_type 
     * @param strval 
     */
    function utils_enum_value_from_string(enum_type: GObject.GType, strval: string): number;

    /**
     * @param enum_type 
     * @param value 
     */
    function utils_flags_string_from_value(enum_type: GObject.GType, value: number): string;

    /**
     * @param flags_type 
     * @param value 
     */
    function utils_flags_string_from_value_displayable(flags_type: GObject.GType, value: number): string;

    /**
     * @param enum_type 
     * @param strval 
     */
    function utils_flags_value_from_string(enum_type: GObject.GType, strval: string): number;

    /**
     * Get's the pointer position relative to `widget`, while `window` and `device`
     * are not absolutely needed, they should be passed wherever possible.
     * @param widget The widget to get the mouse position relative for
     * @param window The window of the current event, or `null`
     * @param device The device, if not specified, the current event will be expected to have a `device`.
     * @param x The location to store the mouse pointer X position
     * @param y The location to store the mouse pointer Y position
     */
    function utils_get_pointer(widget: Gtk.Widget, window: Gdk.Window, device: Gdk.Device, x: number, y: number): void;

    /**
     * @param funcname the symbol name of a function to generate a {@link GObject.ParamSpec}
     * @returns A {@link GObject.ParamSpec} created by the delegate function          specified by `funcname`
     */
    function utils_get_pspec_from_funcname(funcname: string): GObject.ParamSpec | null;

    /**
     * This function is meant to be attached to key-press-event of a toplevel,
     * it simply allows the window contents to treat key events /before/
     * accelerator keys come into play (this way widgets dont get deleted
     * when cutting text in an entry etc.).
     * Creates a liststore suitable for comboboxes and such to
     * chose from a variety of types.
     * @param win a {@link Gtk.Window}
     * @param event the {@link Gdk.EventKey}
     * @param user_data unused
     * @returns whether the event was handled
     */
    function utils_hijack_key_press(win: Gtk.Window, event: Gdk.EventKey, user_data: null): number;

    /**
     * Creates a liststore suitable for comboboxes and such to
     * chose from a variety of types.
     * @param enum_type A {@link GObject.GType}
     * @param include_empty whether to prepend an "Unset" slot
     * @returns A new {@link Gtk.ListStore}
     */
    function utils_liststore_from_enum_type(enum_type: GObject.GType, include_empty: boolean): Gtk.ListStore;

    /**
     * Render an icon representing the pointer mode.
     * Best view with sizes bigger than GTK_ICON_SIZE_LARGE_TOOLBAR.
     * @param mode the {@link Gladeui.PointerMode} to render as icon
     * @param size icon size
     * @returns the rendered {@link GdkPixbuf.Pixbuf}
     */
    function utils_pointer_mode_render_icon(mode: PointerMode, size: Gtk.IconSize): GdkPixbuf.Pixbuf;

    /**
     * @param path 
     */
    function utils_replace_home_dir_with_tilde(path: string): string;

    /**
     * Serializes {@link GObject.Value} into a string
     * (using glade conversion routines)
     * @param value a {@link GObject.Value} to convert
     * @returns A newly allocated string
     */
    function utils_string_from_value(value: GObject.Value | any): string;

    /**
     * Allocates and sets a {@link GObject.Value} of type `type`
     * set to `string` (using glade conversion routines)
     * @param type a {@link GObject.GType} to convert with
     * @param string the string to convert
     * @param project the {@link Gladeui.Project} to look for formats of object names when needed
     * @returns A newly allocated and set {@link GObject.Value}
     */
    function utils_value_from_string(type: GObject.GType, string: string, project: Project): unknown;

    /**
     * Dump the XML string from the context.
     * @param context a {@link Gladeui.XmlContext}
     * @returns the XML string, free the allocated memory with `g_free()` after use
     */
    function xml_dump_from_context(context: XmlContext): string;

    /**
     * @param node 
     * @param name 
     * @param _default 
     */
    function xml_get_boolean(node: XmlNode, name: string, _default: boolean): boolean;

    /**
     * Gets a string containing the content of `node_in`.
     * @param node_in a {@link Gladeui.XmlNode}
     * @returns A newly allocated string
     */
    function xml_get_content(node_in: XmlNode): string;

    /**
     * @param node_in 
     * @param name 
     * @param _default 
     */
    function xml_get_property_boolean(node_in: XmlNode, name: string, _default: boolean): boolean;

    /**
     * @param node_in 
     * @param name 
     * @param _default 
     */
    function xml_get_property_double(node_in: XmlNode, name: string, _default: number): number;

    /**
     * @param node_in 
     * @param name 
     * @param _default 
     */
    function xml_get_property_int(node_in: XmlNode, name: string, _default: number): number;

    /**
     * @param node_in 
     * @param name 
     */
    function xml_get_property_string(node_in: XmlNode, name: string): string;

    /**
     * @param node_in 
     * @param name 
     * @param xtra 
     */
    function xml_get_property_string_required(node_in: XmlNode, name: string, xtra: string): string;

    /**
     * Get the list of targetable versions for a property
     * @param node_in a {@link Gladeui.XmlNode}
     * @param name a property name
     * @returns a list of {@link Gladeui.TargetableVersion}
     */
    function xml_get_property_targetable_versions(node_in: XmlNode, name: string): TargetableVersion[];

    /**
     * @param node_in 
     * @param name 
     * @param major 
     * @param minor 
     */
    function xml_get_property_version(node_in: XmlNode, name: string, major: number, minor: number): boolean;

    /**
     * Gets an integer value for a node either carried as an attribute or as
     * the content of a child.
     * @param node_in a {@link Gladeui.XmlNode}
     * @param name a string
     * @param val a pointer to an #int
     * @returns `true` if the node is found, `false` otherwise
     */
    function xml_get_value_int(node_in: XmlNode, name: string, val: number): boolean;

    /**
     * This is a wrapper around `glade_xml_get_value_int()`, only it emits
     * a `g_warning()` if `node` did not contain the requested tag
     * @param node a {@link Gladeui.XmlNode}
     * @param name a string
     * @param val a pointer to an #int
     * @returns `false` if `name` is not in `node`
     */
    function xml_get_value_int_required(node: XmlNode, name: string, val: number): boolean;

    /**
     * @param node 
     * @param name 
     */
    function xml_get_value_string(node: XmlNode, name: string): string;

    /**
     * @param node 
     * @param name 
     * @param xtra_info 
     */
    function xml_get_value_string_required(node: XmlNode, name: string, xtra_info: string): string;

    /**
     * @param node_in 
     * @param module 
     * @param tagname 
     * @param sym_location 
     */
    function xml_load_sym_from_node(node_in: XmlNode, module: GModule.Module, tagname: string, sym_location: null): boolean;

    /**
     * @param node 
     * @param name 
     */
    function xml_search_child(node: XmlNode, name: string): XmlNode;

    /**
     * just a small wrapper around glade_xml_search_child that displays
     * an error if the child was not found
     * @param tree A {@link Gladeui.XmlNode}
     * @param name the name of the child
     * @returns the requested {@link Gladeui.XmlNode}
     */
    function xml_search_child_required(tree: XmlNode, name: string): XmlNode | null;

    /**
     * Sets the content of `node` to `content`.
     * @param node_in a {@link Gladeui.XmlNode}
     * @param content a string
     */
    function xml_set_content(node_in: XmlNode, content: string): void;

    /**
     * Sets the property `name` in `node_in` to `val`
     * @param node_in a {@link Gladeui.XmlNode}
     * @param name a string
     * @param val a string
     */
    function xml_set_value(node_in: XmlNode, name: string, val: string): void;

    /**
     * @gir-type Callback
     */
    interface ActionActivateFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, action_path: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface ActionSubmenuFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, action_path: string): Gtk.Widget | null;
    }

    /**
     * @gir-type Callback
     */
    interface AddChildFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B): void;
    }

    /**
     * @gir-type Callback
     */
    interface AddChildVerifyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, user_feedback: boolean): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface CatalogInitFunc {
        (name: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface ChildActionActivateFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, object: B, action_path: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface ChildGetPropertyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, property_name: string, value: unknown): void;
    }

    /**
     * @gir-type Callback
     */
    interface ChildSetPropertyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, property_name: string, value: unknown): void;
    }

    /**
     * @gir-type Callback
     */
    interface ChildVerifyPropertyFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B, property_name: string, value: unknown): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface ConstructObjectFunc {
        (adaptor: WidgetAdaptor, n_parameters: number, parameters: GObject.Parameter): GObject.Object;
    }

    /**
     * @gir-type Callback
     */
    interface CreateEPropFunc {
        (adaptor: WidgetAdaptor, def: PropertyDef, use_command: boolean): EditorProperty;
    }

    /**
     * @gir-type Callback
     */
    interface CreateEditableFunc {
        (adaptor: WidgetAdaptor, type: EditorPageType): Editable;
    }

    /**
     * @gir-type Callback
     */
    interface DependsFunc {
        (adaptor: WidgetAdaptor, widget: Widget, another: Widget): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface DestroyObjectFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A): void;
    }

    /**
     * @gir-type Callback
     */
    interface GetChildrenFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A): GObject.Object[];
    }

    /**
     * @gir-type Callback
     */
    interface GetInternalFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, internal_name: string): GObject.Object | null;
    }

    /**
     * @gir-type Callback
     */
    interface GetPropertyFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, property_name: string, value: unknown): void;
    }

    /**
     * @gir-type Callback
     */
    interface PostCreateFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, reason: CreateReason): void;
    }

    /**
     * @gir-type Callback
     */
    interface ReadWidgetFunc {
        (adaptor: WidgetAdaptor, widget: Widget, node: XmlNode): void;
    }

    /**
     * @gir-type Callback
     */
    interface RemoveChildFunc<A = GObject.Object, B = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, child: B): void;
    }

    /**
     * @gir-type Callback
     */
    interface ReplaceChildFunc<A = GObject.Object, B = GObject.Object, C = GObject.Object> {
        (adaptor: WidgetAdaptor, container: A, old_obj: B, new_obj: C): void;
    }

    /**
     * @gir-type Callback
     */
    interface SetPropertyFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, property_name: string, value: unknown): void;
    }

    /**
     * @gir-type Callback
     */
    interface StringFromValueFunc {
        (adaptor: WidgetAdaptor, def: PropertyDef, value: unknown): string;
    }

    /**
     * @gir-type Callback
     */
    interface VerifyPropertyFunc<A = GObject.Object> {
        (adaptor: WidgetAdaptor, object: A, property_name: string, value: unknown): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface WriteWidgetFunc {
        (adaptor: WidgetAdaptor, widget: Widget, context: XmlContext, node: XmlNode): void;
    }

    /**
     * @gir-type Alias
     */
    type GList = object | null;

    /**
     * @gir-type Flags
     */
    export namespace DebugFlag {
        export const $gtype: GObject.GType<DebugFlag>;
    }

    /**
     * @gir-type Flags
     */
    enum DebugFlag {
        REF_COUNTS,
        WIDGET_EVENTS,
        COMMANDS,
        PROPERTIES,
        VERIFY,
    }


    /**
     * @gir-type Flags
     */
    export namespace PropertyState {
        export const $gtype: GObject.GType<PropertyState>;
    }

    /**
     * @gir-type Flags
     */
    enum PropertyState {
        NORMAL,
        CHANGED,
        UNSUPPORTED,
        SUPPORT_DISABLED,
    }


    /**
     * @gir-type Flags
     */
    export namespace SupportMask {
        export const $gtype: GObject.GType<SupportMask>;
    }

    /**
     * @gir-type Flags
     */
    enum SupportMask {
        OK,
        DEPRECATED,
        MISMATCH,
    }


    /**
     * @gir-type Flags
     */
    export namespace VerifyFlags {
        export const $gtype: GObject.GType<VerifyFlags>;
    }

    /**
     * @gir-type Flags
     */
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


    namespace AdaptorChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::project": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            project: Project;
        }
    }

    /**
     * @gir-type Class
     */
    class AdaptorChooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<AdaptorChooser>;

        // Properties
        get project(): Project;
        set project(val: Project);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AdaptorChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AdaptorChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AdaptorChooser;

        // Signals
        /** @signal */
        connect<K extends keyof AdaptorChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AdaptorChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AdaptorChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AdaptorChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AdaptorChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AdaptorChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link Gladeui.Project}
         */
        get_project(): Project;

        /**
         * @param project 
         */
        set_project(project: Project): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace App {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the glade core requests that a doc-search be performed.
             * @signal
             * @run-last
             */
            "doc-search": (arg0: string, arg1: string, arg2: string) => void;
            /**
             * Emitted when a new signal editor created.
             * A tree view is created in the default handler.
             * Connect your handler before the default handler for setting a custom column or renderer
             * and after it for connecting to the tree view signals
             * @signal
             * @run-last
             */
            "signal-editor-created": (arg0: GObject.Object) => void;
            /**
             * Emitted when a new widget adaptor is registered.
             * @signal
             * @run-last
             */
            "widget-adaptor-registered": (arg0: GObject.Object) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): App;

        // Signals
        /** @signal */
        connect<K extends keyof App.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, App.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof App.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, App.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof App.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param project the project to add to the {@link Gladeui.App}
         */
        static add_project(project: Project): void;

        /**
         * Saves the {@link GLib.KeyFile} to "g_get_user_config_dir()/GLADE_CONFIG_FILENAME"
         */
        static config_save(): number;

        /**
         * This function has to be called in an event handler for widget selection to work.
         * See `gdk_event_handler_set()`
         * @param event the event to process.
         */
        static do_event(event: Gdk.Event): boolean;

        static get(): App;

        static get_accel_group(): Gtk.AccelGroup;

        static get_bin_dir(): string;

        /**
         * @param name the name of the catalog
         */
        static get_catalog(name: string): Catalog | null;

        /**
         * @param name the name of the {@link Gladeui.Catalog}
         */
        static get_catalog_version(name: string): [boolean, number, number];

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

        /**
         * @param project_path 
         */
        static is_project_loaded(project_path: string): boolean;

        /**
         * @param project the project to remove from the {@link Gladeui.App}
         */
        static remove_project(project: Project): void;

        /**
         * Searches for `book`, `page` and `search` in the documentation.
         * @param book the name of a book
         * @param page the name of a page
         * @param search the search query
         */
        static search_docs(book: string, page: string, search: string): void;

        /**
         * Sets `accel_group` to app.
         * The acceleration group will made available for editor dialog windows
         * from the plugin backend.
         * @param accel_group a {@link Gtk.AccelGroup} to set
         */
        static set_accel_group(accel_group: Gtk.AccelGroup): void;

        /**
         * Set the window of the application
         * @param window a {@link Gtk.Widget}
         */
        static set_window(window: Gtk.Widget): void;
    }


    namespace BaseEditor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Create a child widget here if something else must be done other than
             * calling `glade_command_create()` such as creating an intermediate parent.
             * @signal
             * @run-last
             */
            "build-child": (arg0: GObject.Object, arg1: GObject.GType) => GObject.Object | null;
            /**
             * @signal
             * @run-last
             */
            "change-type": (arg0: GObject.Object, arg1: GObject.GType) => boolean | void;
            /**
             * Emitted when the user selects a child in the editor's treeview.
             * You can add the relevant child properties here using
             * `glade_base_editor_add_default_properties()` and `glade_base_editor_add_properties()`
             * You can also add labels with glade_base_editor_add_label to make the
             * editor look pretty.
             * @signal
             * @run-last
             */
            "child-selected": (arg0: GObject.Object) => void;
            /**
             * @signal
             * @run-last
             */
            "delete-child": (arg0: GObject.Object, arg1: GObject.Object) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            "get-display-name": (arg0: GObject.Object) => string;
            /**
             * Move child here if something else must be done other than cut & paste.
             * @signal
             * @run-last
             */
            "move-child": (arg0: GObject.Object, arg1: GObject.Object) => boolean | void;
            "notify::container": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            container: GObject.Object | any;
        }
    }

    /**
     * @gir-type Class
     */
    class BaseEditor extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<BaseEditor>;

        // Properties
    // This accessor conflicts with a property or field in a parent class or interface.
         container: GObject.Object | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseEditor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BaseEditor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof BaseEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseEditor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BaseEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BaseEditor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BaseEditor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BaseEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param gchild 
         * @param type 
         * @virtual
         */
        vfunc_change_type(gchild: Widget, type: GObject.GType): boolean;

        /**
         * @param gchild 
         * @virtual
         */
        vfunc_child_selected(gchild: Widget): void;

        /**
         * @param parent 
         * @param gchild 
         * @virtual
         */
        vfunc_delete_child(parent: Widget, gchild: Widget): boolean;

        /**
         * @param gchild 
         * @virtual
         */
        vfunc_get_display_name(gchild: Widget): string;

        /**
         * @param gparent 
         * @param gchild 
         * @virtual
         */
        vfunc_move_child(gparent: Widget, gchild: Widget): boolean;

        // Methods
        /**
         * Add `gchild` name and type property to `editor`
         * 
         * NOTE: This function is intended to be used in "child-selected" callbacks
         * @param gchild a {@link Gladeui.Widget}
         */
        add_default_properties(gchild: Widget): void;

        /**
         * Add `gchild` editor of type `page` to the base editor
         * 
         * NOTE: This function is intended to be used in "child-selected" callbacks
         * @param gchild the {@link Gladeui.Widget}
         * @param page the {@link Gladeui.EditorPageType} of the desired page for `gchild`
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

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace CellRendererIcon {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererPixbuf.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            activate: (arg0: string) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::follow-state": (pspec: GObject.ParamSpec) => void;
            "notify::gicon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-expander-closed": (pspec: GObject.ParamSpec) => void;
            "notify::pixbuf-expander-open": (pspec: GObject.ParamSpec) => void;
            "notify::stock-detail": (pspec: GObject.ParamSpec) => void;
            "notify::stock-id": (pspec: GObject.ParamSpec) => void;
            "notify::stock-size": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRendererPixbuf.ConstructorProps {
            activatable: boolean;
            active: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class CellRendererIcon extends Gtk.CellRendererPixbuf {
        static $gtype: GObject.GType<CellRendererIcon>;

        // Properties
        /**
         * @default true
         */
        get activatable(): boolean;
        set activatable(val: boolean);

        /**
         * @default false
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CellRendererIcon.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CellRendererIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CellRendererIcon;

        // Signals
        /** @signal */
        connect<K extends keyof CellRendererIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererIcon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CellRendererIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererIcon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CellRendererIcon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellRendererIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param path 
         * @virtual
         */
        vfunc_activate(path: string): void;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with Gtk.CellRenderer.vfunc_activate
        vfunc_activate(...args: never[]): any;

        // Methods
        get_activatable(): boolean;

        get_active(): boolean;

        /**
         * @param setting 
         */
        set_activatable(setting: boolean): void;

        /**
         * @param setting 
         */
        set_active(setting: boolean): void;
    }


    namespace Clipboard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::has-selection": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            has_selection: boolean;
            hasSelection: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Clipboard extends GObject.Object {
        static $gtype: GObject.GType<Clipboard>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get has_selection(): boolean;

        /**
         * @read-only
         * @default false
         */
        get hasSelection(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clipboard.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Clipboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Clipboard;

        // Signals
        /** @signal */
        connect<K extends keyof Clipboard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clipboard.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Clipboard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clipboard.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Clipboard.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clipboard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds `widgets` to `clipboard`.
         * This increases the reference count of each {@link Gladeui.Widget} in `widgets`.
         * @param widgets a {@link Gladeui.GList} of `GladeWidgets`
         */
        add(widgets: Widget[]): void;

        /**
         * Removes all widgets from the `clipboard`.
         */
        clear(): void;

        /**
         * @returns TRUE if this clipboard has selected items to paste.
         */
        get_has_selection(): boolean;

        /**
         * @returns a {@link Gladeui.GList} of `GladeWidgets`
         */
        widgets(): Widget[];
    }


    namespace Command {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Command extends GObject.Object {
        static $gtype: GObject.GType<Command>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Command.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Command.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Command.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Command.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Command.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Command.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Performs an add command on all widgets in `widgets` to `parent`, possibly
         * replacing `placeholder` (note toplevels don't need a parent; the active project
         * will be used when pasting toplevel objects).
         * Pasted widgets will persist packing properties from their cut/copy source
         * while newly added widgets will prefer packing defaults.
         * @param widgets a {@link Gladeui.GList}
         * @param parent a {@link Gladeui.Widget}
         * @param placeholder a {@link Gladeui.Placeholder}
         * @param project a {@link Gladeui.Project}
         * @param pasting whether we are pasting an existing widget or creating a new one.
         */
        static add(widgets: Widget[], parent: Widget, placeholder: Placeholder, project: Project, pasting: boolean): void;

        /**
         * TODO: write me
         * @param glade_widget a {@link Gladeui.Widget}
         * @param signal a {@link Gladeui.Signal}
         */
        static add_signal(glade_widget: Widget, signal: Signal): void;

        /**
         * TODO: write me
         * @param glade_widget a {@link Gladeui.Widget}
         * @param old_signal a {@link Gladeui.Signal}
         * @param new_signal a {@link Gladeui.Signal}
         */
        static change_signal(glade_widget: Widget, old_signal: Signal, new_signal: Signal): void;

        /**
         * Creates a new widget using `adaptor` and put in place of the `placeholder`
         * in the `project`
         * @param adaptor A {@link Gladeui.WidgetAdaptor}
         * @param parent the parent {@link Gladeui.Widget} to add the new widget to.
         * @param placeholder the placeholder which will be substituted by the widget
         * @param project the project his widget belongs to.
         */
        static create(adaptor: WidgetAdaptor, parent: Widget | null, placeholder: Placeholder | null, project: Project): Widget;

        /**
         * Removes the list of widgets and adds them to the clipboard.
         * @param widgets a {@link Gladeui.GList} of `GladeWidgets`
         */
        static cut(widgets: Widget[]): void;

        /**
         * Performs a delete command on the list of widgets.
         * @param widgets a {@link Gladeui.GList} of `GladeWidgets`
         */
        static ["delete"](widgets: Widget[]): void;

        /**
         * Performs a drag-n-drop command, i.e. removes the list of widgets and adds them
         * to the new parent, possibly replacing `placeholder` (note toplevels dont need a
         * parent; the active project will be used when pasting toplevel objects).
         * @param widgets a {@link Gladeui.GList} of {@link Gladeui.Widget}
         * @param parent a {@link Gladeui.Widget}
         * @param placeholder a {@link Gladeui.Placeholder}
         */
        static dnd(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null): void;

        static get_group_depth(): number;

        /**
         * Sets `locked` to be in a locked up state
         * spoken for by `widget`, locked widgets cannot
         * be removed from the project until unlocked.
         * @param widget A {@link Gladeui.Widget}
         * @param locked The {@link Gladeui.Widget} to lock
         */
        static lock_widget(widget: Widget, locked: Widget): void;

        /**
         * Performs a paste command on all widgets in `widgets` to `parent`, possibly
         * replacing `placeholder` (note toplevels dont need a parent; the active project
         * will be used when pasting toplevel objects).
         * @param widgets a {@link Gladeui.GList} of {@link Gladeui.Widget}
         * @param parent a {@link Gladeui.Widget}
         * @param placeholder a {@link Gladeui.Placeholder}
         * @param project a {@link Gladeui.Project}
         */
        static paste(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null, project: Project): void;

        /**
         * Mark the end of a command group.
         */
        static pop_group(): void;

        /**
         * TODO: write me
         * @param glade_widget a {@link Gladeui.Widget}
         * @param signal a {@link Gladeui.Signal}
         */
        static remove_signal(glade_widget: Widget, signal: Signal): void;

        /**
         * Sets the i18n data on the property.
         * @param property a {@link Gladeui.Property}
         * @param translatable a `gboolean`
         * @param context a #const gchar *
         * @param comment a #const gchar *
         */
        static set_i18n(property: Property, translatable: boolean, context: string, comment: string): void;

        /**
         * @param glade_widget 
         * @param name 
         */
        static set_name(glade_widget: Widget, name: string): void;

        /**
         * Sets `domain` as the translation domain for `project`.
         * @param project A {@link Gladeui.Project}
         * @param domain The translation domain for `project`
         */
        static set_project_domain(project: Project, domain: string): void;

        /**
         * Sets the license agreement for `project`. It will be saved in the xml as comment.
         * @param project A {@link Gladeui.Project}
         * @param license License of `project`
         */
        static set_project_license(project: Project, license: string): void;

        /**
         * Sets a resource path `project`.
         * @param project A {@link Gladeui.Project}
         * @param path path to load resources from.
         */
        static set_project_resource_path(project: Project, path: string): void;

        /**
         * Sets the target of `catalog` to `major`.`minor` in `project`.
         * @param project A {@link Gladeui.Project}
         * @param catalog The name of the catalog to set the project's target for
         * @param major The new major version of `catalog` to target
         * @param minor The new minor version of `catalog` to target
         */
        static set_project_target(project: Project, catalog: string, major: number, minor: number): void;

        /**
         * Sets `widget` to be the template widget in `project`.
         * @param project A {@link Gladeui.Project}
         * @param widget The {@link Gladeui.Widget} to make template
         */
        static set_project_template(project: Project, widget: Widget): void;

        /**
         * @param project a {@link Gladeui.Project}
         * @param props List of {@link Gladeui.Property}
         */
        static set_properties_list(project: Project, props: Property[]): void;

        /**
         * Enables or disables `property`.
         * 
         * `property` must be an optional property.
         * @param property An optional {@link Gladeui.Property}
         * @param enabled Whether the property should be enabled
         */
        static set_property_enabled(property: Property, enabled: boolean): void;

        /**
         * @param property 
         * @param value 
         */
        static set_property_value(property: Property, value: GObject.Value | any): void;

        /**
         * Unlocks `widget` so that it can be removed
         * from the project again
         * @param widget A {@link Gladeui.Widget}
         */
        static unlock_widget(widget: Widget): void;

        // Virtual methods
        /**
         * Merges `other` into `command`, so that `command` now
         * covers both commands and `other` can be dispensed with.
         * @param other another {@link Gladeui.Command}
         * @virtual
         */
        vfunc_collapse(other: Command): void;

        /**
         * Executes `command`
         * @virtual
         */
        vfunc_execute(): boolean;

        /**
         * Undo the effects of `command`
         * @virtual
         */
        vfunc_undo(): boolean;

        /**
         * Checks whether `command` and `other` can be unified
         * to make one single command.
         * @param other another {@link Gladeui.Command}
         * @virtual
         */
        vfunc_unifies(other: Command): boolean;

        // Methods
        /**
         * Merges `other` into `command`, so that `command` now
         * covers both commands and `other` can be dispensed with.
         * @param other another {@link Gladeui.Command}
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
         * @param other another {@link Gladeui.Command}
         * @returns whether they can be unified.
         */
        unifies(other: Command): boolean;
    }


    namespace DesignView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::project": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            project: Project;
        }
    }

    /**
     * @gir-type Class
     */
    class DesignView extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DesignView>;

        // Properties
        /**
         * @construct-only
         */
        get project(): Project;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DesignView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DesignView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](project: Project): DesignView;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DesignView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesignView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DesignView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DesignView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DesignView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DesignView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param project A {@link Gladeui.Project}
         */
        static get_from_project(project: Project): DesignView | null;

        // Methods
        /**
         * @returns a {@link Gladeui.Project}
         */
        get_project(): Project;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace EPropBool {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropBool extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropBool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropBool.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropBool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropBool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropBool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropBool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropBool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropBool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropBool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropCheck {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropCheck extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropCheck>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropCheck.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropCheck.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropCheck.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropCheck.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropCheck.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropCheck.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropCheck.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropCheck.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropColor {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropColor extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropColor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropColor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropColor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropColor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropColor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropColor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropColor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropColor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropColor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropEnum {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropEnum extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropEnum>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropEnum.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropEnum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropEnum.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropEnum.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropEnum.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropEnum.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropEnum.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropEnum.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropFlags {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropFlags extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropFlags>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropFlags.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropFlags.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropFlags.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropFlags.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropFlags.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropFlags.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropFlags.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropFlags.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropNamedIcon {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropNamedIcon extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropNamedIcon>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropNamedIcon.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropNamedIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropNamedIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropNamedIcon.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropNamedIcon.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropNamedIcon.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropNamedIcon.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropNamedIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropNumeric {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropNumeric extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropNumeric>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropNumeric.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropNumeric.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropNumeric.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropNumeric.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropNumeric.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropNumeric.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropNumeric.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropNumeric.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropObject {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropObject extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropObject.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropObject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropObject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropObject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropObject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropObjects {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropObjects extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropObjects>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropObjects.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropObjects.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropObjects.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropObjects.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropObjects.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropObjects.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropObjects.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropObjects.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropText {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropText extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropText>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropText.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropText.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropText.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropText.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropText.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropText.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropText.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EPropUnichar {
        // Signal signatures
        interface SignalSignatures extends EditorProperty.SignalSignatures {
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends EditorProperty.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EPropUnichar extends EditorProperty implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EPropUnichar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EPropUnichar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EPropUnichar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EPropUnichar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropUnichar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EPropUnichar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EPropUnichar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EPropUnichar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EPropUnichar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.load
        load(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * @param args 
         * @virtual
         */
        // Conflicted with Gladeui.EditorProperty.vfunc_load
        vfunc_load(...args: never[]): any;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Gets a property of an object.
         * 
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property  
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         * 
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         * 
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;

        /**
         * @param args 
         */
        // Conflicted with Gladeui.EditorProperty.get_property
        get_property(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace Editor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::class-field": (pspec: GObject.ParamSpec) => void;
            "notify::show-boder": (pspec: GObject.ParamSpec) => void;
            "notify::show-class-field": (pspec: GObject.ParamSpec) => void;
            "notify::show-info": (pspec: GObject.ParamSpec) => void;
            "notify::signal-editor": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            class_field: string;
            classField: string;
            show_boder: boolean;
            showBoder: boolean;
            show_class_field: boolean;
            showClassField: boolean;
            show_info: boolean;
            showInfo: boolean;
            signal_editor: SignalEditor;
            signalEditor: SignalEditor;
            widget: Widget | any;
        }
    }

    /**
     * @gir-type Class
     */
    class Editor extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Editor>;

        // Properties
        /**
         * @read-only
         * @default null
         */
        get class_field(): string;

        /**
         * @read-only
         * @default null
         */
        get classField(): string;

        /**
         * @default true
         */
        get show_boder(): boolean;
        set show_boder(val: boolean);

        /**
         * @default true
         */
        get showBoder(): boolean;
        set showBoder(val: boolean);

        /**
         * @default true
         */
        get show_class_field(): boolean;
        set show_class_field(val: boolean);

        /**
         * @default true
         */
        get showClassField(): boolean;
        set showClassField(val: boolean);

        /**
         * @read-only
         * @default false
         */
        get show_info(): boolean;

        /**
         * @read-only
         * @default false
         */
        get showInfo(): boolean;

        /**
         * @read-only
         */
        get signal_editor(): SignalEditor;

        /**
         * @read-only
         */
        get signalEditor(): SignalEditor;

    // This accessor conflicts with a property or field in a parent class or interface.
         widget: Widget | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Editor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Editor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Editor;

        // Signals
        /** @signal */
        connect<K extends keyof Editor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Editor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Editor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Editor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Editor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Editor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * This convenience function creates a new dialog window to edit `widget`
         * specifically.
         * @param widget a {@link Gladeui.Widget}
         */
        static dialog_for_widget(widget: Widget): Gtk.Widget;

        /**
         * @param widget 
         */
        static query_dialog(widget: Widget): boolean;

        /**
         * @param parent 
         * @param gwidget 
         */
        static reset_dialog_run(parent: Gtk.Widget, gwidget: Widget): void;

        // Methods
        hide_class_field(): void;

        hide_info(): void;

        /**
         * Load `widget` into `editor`. If `widget` is `null`, clear the editor.
         * @param widget a {@link Gladeui.Widget}
         */
        load_widget(widget: Widget): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace EditorProperty {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted when a property's value is committed, can be useful to serialize
             * commands before and after the property's commit command from custom editors.
             * @signal
             * @run-last
             */
            commit: (arg0: null) => void;
            /**
             * Emitted when a contained property changes value
             * @signal
             * @run-last
             */
            "value-changed": (arg0: Property) => void;
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::property-def": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            custom_text: string;
            customText: string;
            disable_check: boolean;
            disableCheck: boolean;
            property_def: never;
            propertyDef: never;
            use_command: boolean;
            useCommand: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class EditorProperty extends Gtk.Box implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EditorProperty>;

        // Properties
        /**
         * @default null
         */
        get custom_text(): string;
        set custom_text(val: string);

        /**
         * @default null
         */
        get customText(): string;
        set customText(val: string);

        /**
         * @default false
         */
        get disable_check(): boolean;
        set disable_check(val: boolean);

        /**
         * @default false
         */
        get disableCheck(): boolean;
        set disableCheck(val: boolean);

        /**
         * @construct-only
         */
        get property_def(): null;

        /**
         * @construct-only
         */
        get propertyDef(): null;

        /**
         * @default false
         */
        get use_command(): boolean;
        set use_command(val: boolean);

        /**
         * @default false
         */
        get useCommand(): boolean;
        set useCommand(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EditorProperty.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EditorProperty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EditorProperty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorProperty.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EditorProperty.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorProperty.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EditorProperty.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EditorProperty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Runs a dialog and updates the provided values.
         * @param parent The parent widget for the dialog.
         * @param text A read/write pointer to the text property
         * @param context A read/write pointer to the translation context
         * @param comment A read/write pointer to the translator comment
         * @param translatable A read/write pointer to the translatable setting]
         */
        static show_i18n_dialog(parent: Gtk.Widget, text: string, context: string, comment: string, translatable: boolean): boolean;

        /**
         * @param project 
         * @param title 
         * @param parent 
         * @param object_type 
         * @param exception 
         * @param object 
         */
        static show_object_dialog(project: Project, title: string, parent: Gtk.Widget, object_type: GObject.GType, exception: Widget, object: Widget): boolean;

        /**
         * @param project 
         * @param parent 
         * @param filename 
         */
        static show_resource_dialog(project: Project, parent: Gtk.Widget, filename: string): boolean;

        // Virtual methods
        /**
         * @param property 
         * @virtual
         */
        vfunc_changed(property: Property): null;

        /**
         * Commits `value` to the property currently being edited by `eprop`.
         * @param value The {@link GObject.Value} to commit
         * @virtual
         */
        vfunc_commit(value: unknown): void;

        /**
         * Loads `property` values into `eprop` and connects.
         * (the editor property will watch the property's value
         * until its loaded with another property or `null`)
         * @param property A {@link Gladeui.Property}
         * @virtual
         */
        vfunc_load(property: Property): void;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with Gladeui.Editable.vfunc_load
        vfunc_load(...args: never[]): any;

        // Methods
        /**
         * Commits `value` to the property currently being edited by `eprop`.
         * @param value The {@link GObject.Value} to commit
         */
        commit(value: GObject.Value | any): void;

        /**
         * @param value 
         */
        commit_no_callback(value: GObject.Value | any): void;

        get_custom_text(): string;

        get_disable_check(): boolean;

        /**
         * @returns the {@link Gladeui.PropertyLabel}
         */
        get_item_label(): Gtk.Widget;

        /**
         * @returns the {@link Gladeui.Property}
         */
        get_property(): Property;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;

        /**
         * @returns the {@link Gladeui.PropertyDef}
         */
        get_property_def(): PropertyDef;

        /**
         * Loads `property` values into `eprop` and connects.
         * (the editor property will watch the property's value
         * until its loaded with another property or `null`)
         * @param property A {@link Gladeui.Property}
         */
        load(property: Property): void;

        /**
         * @param args 
         */
    // Conflicted with Gladeui.Editable.load
        load(...args: never[]): any;

        /**
         * Convenience function to load the appropriate {@link Gladeui.Property} into
         * `eprop` from `widget`
         * @param widget A {@link Gladeui.Widget}
         */
        load_by_widget(widget: Widget): void;

        loading(): boolean;

        /**
         * @param custom_text 
         */
        set_custom_text(custom_text: string): void;

        /**
         * @param disable_check 
         */
        set_disable_check(disable_check: boolean): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        block(): void;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EditorSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EditorSkeleton extends Gtk.Box implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EditorSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EditorSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EditorSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): EditorSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof EditorSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EditorSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EditorSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EditorSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param editor 
         */
        add_editor(editor: Editable): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace EditorTable {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "notify::page-type": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            page_type: EditorPageType;
            pageType: EditorPageType;
        }
    }

    /**
     * @gir-type Class
     */
    class EditorTable extends Gtk.Grid implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<EditorTable>;

        // Properties
        /**
         * @construct-only
         * @default Gladeui.EditorPageType.GENERAL
         */
        set page_type(val: EditorPageType);

        /**
         * @construct-only
         * @default Gladeui.EditorPageType.GENERAL
         */
        set pageType(val: EditorPageType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EditorTable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EditorTable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](adaptor: WidgetAdaptor, type: EditorPageType): EditorTable;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EditorTable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorTable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EditorTable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EditorTable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EditorTable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EditorTable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace Inspector {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted when a item is activated in the GladeInspector.
             * @signal
             * @run-last
             */
            "item-activated": () => void;
            /**
             * Emitted when the selection changes in the GladeInspector.
             * @signal
             * @run-last
             */
            "selection-changed": () => void;
            "notify::project": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            project: Project;
        }
    }

    /**
     * The {@link Gladeui.Inspector} struct contains private data only, and should be manipulated using the functions below.
     * @gir-type Class
     */
    class Inspector extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Inspector>;

        // Properties
        get project(): Project;
        set project(val: Project);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Inspector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Inspector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Inspector;

        static new_with_project(project: Project): Inspector;

        // Signals
        /** @signal */
        connect<K extends keyof Inspector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Inspector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Inspector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Inspector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Inspector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Inspector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_item_activated(): void;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        // Methods
        /**
         * Note that the method does not ref the returned {@link Gladeui.Project}.
         * @returns A {@link Gladeui.Project}
         */
        get_project(): Project;

        /**
         * Returns the selected items in the inspector.
         * @returns A {@link Gladeui.GList} of {@link Gladeui.Widget}
         */
        get_selected_items(): Widget[];

        /**
         * Sets the current project of `inspector` to `project`. To unset the current
         * project, pass `null` for `project`.
         * @param project a {@link Gladeui.Project}
         */
        set_project(project: Project): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace NamedIconChooserDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            /**
             * This signal is emitted when the user "activates" an icon
             * in the named icon chooser.  This can happen by double-clicking on an item
             * in the recently used resources list, or by pressing
             * <keycap>Enter</keycap>.
             * @signal
             * @run-last
             */
            "icon-activated": () => void;
            /**
             * This signal is emitted when there is a change in the set of
             * selected icon names.  This can happen when a user
             * modifies the selection with the mouse or the keyboard, or when
             * explicitly calling functions to change the selection.
             * @signal
             * @run-last
             */
            "selection-changed": () => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class NamedIconChooserDialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<NamedIconChooserDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NamedIconChooserDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<NamedIconChooserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof NamedIconChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NamedIconChooserDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NamedIconChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NamedIconChooserDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NamedIconChooserDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NamedIconChooserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_icon_activated(): void;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        // Methods
        get_context(): string;

        get_icon_name(): string;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Window.get_icon_name
        get_icon_name(...args: never[]): any;

        /**
         * @param context 
         */
        set_context(context: string): boolean;

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Window.set_icon_name
        set_icon_name(...args: never[]): any;
    }


    namespace Palette {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            refresh: () => void;
            "notify::item-appearance": (pspec: GObject.ParamSpec) => void;
            "notify::project": (pspec: GObject.ParamSpec) => void;
            "notify::show-selector-button": (pspec: GObject.ParamSpec) => void;
            "notify::use-small-item-icons": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            item_appearance: ItemAppearance;
            itemAppearance: ItemAppearance;
            project: Project;
            show_selector_button: boolean;
            showSelectorButton: boolean;
            use_small_item_icons: boolean;
            useSmallItemIcons: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Palette extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Palette>;

        // Properties
        /**
         * @default Gladeui.ItemAppearance.ICON_ONLY
         */
        get item_appearance(): ItemAppearance;
        set item_appearance(val: ItemAppearance);

        /**
         * @default Gladeui.ItemAppearance.ICON_ONLY
         */
        get itemAppearance(): ItemAppearance;
        set itemAppearance(val: ItemAppearance);

        get project(): Project;
        set project(val: Project);

        /**
         * @default true
         */
        get show_selector_button(): boolean;
        set show_selector_button(val: boolean);

        /**
         * @default true
         */
        get showSelectorButton(): boolean;
        set showSelectorButton(val: boolean);

        /**
         * @default false
         */
        get use_small_item_icons(): boolean;
        set use_small_item_icons(val: boolean);

        /**
         * @default false
         */
        get useSmallItemIcons(): boolean;
        set useSmallItemIcons(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Palette.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Palette.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Palette;

        // Signals
        /** @signal */
        connect<K extends keyof Palette.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Palette.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Palette.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Palette.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Palette.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Palette.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_refresh(): void;

        // Methods
        /**
         * @returns The appearance of the palette items
         */
        get_item_appearance(): ItemAppearance;

        /**
         * @returns a {@link Gladeui.Project}
         */
        get_project(): Project;

        /**
         * @returns Whether the selector button is visible
         */
        get_show_selector_button(): boolean;

        /**
         * @returns the GtkToolPalette associated to this palette.
         */
        get_tool_palette(): Gtk.ToolPalette;

        /**
         * @returns Whether small item icons are used
         */
        get_use_small_item_icons(): boolean;

        /**
         * Sets the appearance of the palette items.
         * @param item_appearance the item appearance
         */
        set_item_appearance(item_appearance: ItemAppearance): void;

        /**
         * @param project 
         */
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

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Placeholder {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Placeholder extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<Placeholder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Placeholder.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        // Constructors
        constructor(properties?: Partial<Placeholder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Placeholder;

        // Signals
        /** @signal */
        connect<K extends keyof Placeholder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Placeholder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Placeholder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Placeholder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Placeholder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Placeholder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns a {@link Gladeui.Project}
         */
        get_parent(): Widget | null;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_parent
        get_parent(...args: never[]): any;

        /**
         * @returns a {@link Gladeui.Project}
         */
        get_project(): Project | null;

        /**
         * @returns a list of {@link Gladeui.WidgetAction}
         */
        packing_actions(): WidgetAction[];

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: Gtk.Adjustment | null): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    namespace Project {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "activate-signal-handler": (arg0: Widget, arg1: Signal) => void;
            /**
             * @signal
             * @run-last
             */
            "add-signal-handler": (arg0: Widget, arg1: Signal) => void;
            /**
             * Emitted when a widget is added to a project.
             * @signal
             * @run-last
             */
            "add-widget": (arg0: Widget) => void;
            /**
             * @signal
             * @run-last
             */
            "change-signal-handler": (arg0: Widget, arg1: Signal, arg2: Signal) => void;
            /**
             * Emitted when a `gladeproject`'s state changes via a {@link Gladeui.Command}.
             * @signal
             * @run-first
             */
            changed: (arg0: Command, arg1: boolean) => void;
            /**
             * Emitted when a project is closing (a good time to clean up
             * any associated resources).
             * @signal
             * @run-last
             */
            close: () => void;
            /**
             * Emitted while `project` is loading.
             * @signal
             * @run-first
             */
            "load-progress": (arg0: number, arg1: number) => void;
            /**
             * Emitted when `gladeproject` parsing starts.
             * @signal
             * @run-first
             */
            "parse-began": () => void;
            /**
             * Emitted when `gladeproject` parsing has finished.
             * @signal
             * @run-first
             */
            "parse-finished": () => void;
            /**
             * @signal
             * @run-last
             */
            "remove-signal-handler": (arg0: Widget, arg1: Signal) => void;
            /**
             * Emitted when a widget is removed from a project.
             * @signal
             * @run-last
             */
            "remove-widget": (arg0: Widget) => void;
            /**
             * Emitted when `gladeproject` selection list changes.
             * @signal
             * @run-last
             */
            "selection-changed": () => void;
            /**
             * Emitted when `gladeproject` target versions change.
             * @signal
             * @run-first
             */
            "targets-changed": () => void;
            /**
             * Emitted when `gwidget`'s name changes.
             * @signal
             * @run-last
             */
            "widget-name-changed": (arg0: Widget) => void;
            /**
             * Emitted when the visibility of a widget changed
             * @signal
             * @run-first
             */
            "widget-visibility-changed": (arg0: Widget, arg1: boolean) => void;
            "notify::add-item": (pspec: GObject.ParamSpec) => void;
            "notify::css-provider-path": (pspec: GObject.ParamSpec) => void;
            "notify::has-selection": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::modified": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::pointer-mode": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::resource-path": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::translation-domain": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeDragSource.ConstructorProps, Gtk.TreeModel.ConstructorProps {
            add_item: WidgetAdaptor;
            addItem: WidgetAdaptor;
            css_provider_path: string;
            cssProviderPath: string;
            has_selection: boolean;
            hasSelection: boolean;
            license: string;
            modified: boolean;
            path: string;
            pointer_mode: PointerMode;
            pointerMode: PointerMode;
            read_only: boolean;
            readOnly: boolean;
            resource_path: string;
            resourcePath: string;
            template: Widget;
            translation_domain: string;
            translationDomain: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Project extends GObject.Object implements Gtk.TreeDragSource, Gtk.TreeModel {
        static $gtype: GObject.GType<Project>;

        // Properties
        /**
         * @read-only
         */
        get add_item(): WidgetAdaptor;

        /**
         * @read-only
         */
        get addItem(): WidgetAdaptor;

        /**
         * @default null
         */
        get css_provider_path(): string;
        set css_provider_path(val: string);

        /**
         * @default null
         */
        get cssProviderPath(): string;
        set cssProviderPath(val: string);

        /**
         * @read-only
         * @default false
         */
        get has_selection(): boolean;

        /**
         * @read-only
         * @default false
         */
        get hasSelection(): boolean;

        /**
         * @default null
         */
        get license(): string;
        set license(val: string);

        /**
         * @read-only
         * @default false
         */
        get modified(): boolean;

        /**
         * @read-only
         * @default null
         */
        get path(): string;

        /**
         * @read-only
         * @default Gladeui.PointerMode.SELECT
         */
        get pointer_mode(): PointerMode;

        /**
         * @read-only
         * @default Gladeui.PointerMode.SELECT
         */
        get pointerMode(): PointerMode;

        /**
         * @read-only
         * @default false
         */
        get read_only(): boolean;

        /**
         * @read-only
         * @default false
         */
        get readOnly(): boolean;

        /**
         * @default null
         */
        get resource_path(): string;
        set resource_path(val: string);

        /**
         * @default null
         */
        get resourcePath(): string;
        set resourcePath(val: string);

        get template(): Widget;
        set template(val: Widget);

        /**
         * @default null
         */
        get translation_domain(): string;
        set translation_domain(val: string);

        /**
         * @default null
         */
        get translationDomain(): string;
        set translationDomain(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Project.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Project.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Project;

        // Signals
        /** @signal */
        connect<K extends keyof Project.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Project.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Project.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Project.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Project.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Project.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Opens a project at the given path.
         * @param path the path of the project to load
         */
        static load(path: string): Project | null;

        /**
         * @param property 
         */
        static verify_property(property: Property): void;

        /**
         * @param widget 
         * @param signal 
         */
        static verify_signal(widget: Widget, signal: Signal): void;

        // Virtual methods
        /**
         * Adds an object to the project.
         * @param object the {@link GObject.Object} to add
         * @virtual
         */
        vfunc_add_object(object: Widget): void;

        /**
         * @param command 
         * @param forward 
         * @virtual
         */
        vfunc_changed(command: Command, forward: boolean): void;

        /**
         * @virtual
         */
        vfunc_close(): void;

        /**
         * Gets the next redo item on `project`'s command stack.
         * @virtual
         */
        vfunc_next_redo_item(): Command;

        /**
         * Gets the next undo item on `project`'s command stack.
         * @virtual
         */
        vfunc_next_undo_item(): Command;

        /**
         * @virtual
         */
        vfunc_parse_finished(): void;

        /**
         * Pushes a newly created {@link Gladeui.Command} onto `projects` stack.
         * @param cmd the {@link Gladeui.Command}
         * @virtual
         */
        vfunc_push_undo(cmd: Command): void;

        /**
         * Redoes a {@link Gladeui.Command} in this project.
         * @virtual
         */
        vfunc_redo(): void;

        /**
         * Removes `object` from `project`.
         * 
         * Note that when removing the {@link GObject.Object} from the project we
         * don't change ->project in the associated {@link Gladeui.Widget}; this
         * way UNDO can work.
         * @param object the {@link GObject.Object} to remove
         * @virtual
         */
        vfunc_remove_object(object: Widget): void;

        /**
         * Causes `project` to emit a "selection_changed" signal.
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Undoes a {@link Gladeui.Command} in this project.
         * @virtual
         */
        vfunc_undo(): void;

        /**
         * @param widget 
         * @virtual
         */
        vfunc_widget_name_changed(widget: Widget): void;

        // Methods
        /**
         * Adds an object to the project.
         * @param object the {@link GObject.Object} to add
         */
        add_object(object: GObject.Object): void;

        /**
         * Saves an autosave snapshot of `project` to it's currently set path
         * 
         * If the project was never saved, nothing is done and `true` is returned.
         * @returns `true` on success, `false` on failure
         */
        autosave(): boolean;

        /**
         * Checks whether `name` is an appropriate name for `widget`.
         * @param widget the {@link Gladeui.Widget} intended to receive a new name
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
         * exists, then `true` is returned and no backup is made.
         * @param path location to save glade file
         * @returns `true` on success, `false` on failure
         */
        backup(path: string): boolean;

        cancel_load(): void;

        /**
         * @param parent the parent {@link Gladeui.Widget}
         * @param old_order the old order to compare with
         */
        check_reordered(parent: Widget, old_order: GObject.Object[]): void;

        command_cut(): void;

        command_delete(): void;

        /**
         * @param placeholder 
         */
        command_paste(placeholder: Placeholder): void;

        copy_selection(): void;

        display_dependencies(): string;

        /**
         * @returns a {@link Gladeui.WidgetAdaptor}
         */
        get_add_item(): WidgetAdaptor;

        /**
         * @returns the CSS path of the custom provider used for `project`
         */
        get_css_provider_path(): string;

        get_file_mtime(): number;

        /**
         * @returns whether `project` currently has a selection
         */
        get_has_selection(): boolean;

        get_license(): string;

        /**
         * Get's whether the project has been modified since it was last saved.
         * @returns `true` if the project has been modified since it was last saved
         */
        get_modified(): boolean;

        get_name(): string;

        /**
         * @returns List of all objects in this project
         */
        get_objects(): GObject.Object[];

        get_path(): string;

        /**
         * @param args 
         */
    // Conflicted with Gtk.TreeModel.get_path
        get_path(...args: never[]): any;

        get_pointer_mode(): PointerMode;

        /**
         * Gets whether the project is read only or not
         * @returns TRUE if project is read only
         */
        get_readonly(): boolean;

        get_resource_path(): string;

        /**
         * Fetches the target version of the `project` for `catalog`.
         * @param catalog the name of the catalog `project` includes
         * @param major the return location for the target major version
         * @param minor the return location for the target minor version
         */
        get_target_version(catalog: string, major: number, minor: number): void;

        /**
         * @returns a {@link Gladeui.Widget}
         */
        get_template(): Widget;

        /**
         * @returns the translation domain
         */
        get_translation_domain(): string;

        /**
         * Searches under `ancestor` in `project` looking for a {@link Gladeui.Widget} named `name`.
         * @param name The user visible name of the widget we are looking for
         * @returns a pointer to the widget, `null` if the widget does not exist
         */
        get_widget_by_name(name: string): Widget | null;

        /**
         * @param object the {@link GObject.Object} to search
         * @returns whether this object is in this project.
         */
        has_object(object: GObject.Object): boolean;

        /**
         * @returns Whether the project is being loaded or not
         */
        is_loading(): boolean;

        /**
         * @param object a {@link GObject.Object}
         * @returns whether `object` is in `project` selection
         */
        is_selected(object: GObject.Object): boolean;

        load_cancelled(): boolean;

        /**
         * @param path 
         */
        load_from_file(path: string): boolean;

        /**
         * Creates a new name for a widget that doesn't collide with any of the names
         * already in `project`. This name will start with `base_name`.
         * 
         * Note the `widget` parameter is ignored and preserved only for historical reasons.
         * @param widget the {@link Gladeui.Widget} intended to receive a new name, or `null`
         * @param base_name base name of the widget to create
         * @returns a string containing the new name, `null` if there is not enough          memory for this string
         */
        new_widget_name(widget: Widget, base_name: string): string;

        /**
         * Gets the next redo item on `project`'s command stack.
         * @returns the {@link Gladeui.Command}
         */
        next_redo_item(): Command;

        /**
         * Gets the next undo item on `project`'s command stack.
         * @returns the {@link Gladeui.Command}
         */
        next_undo_item(): Command;

        /**
         * Creates and displays a preview window holding a snapshot of `gwidget`'s
         * toplevel window in `project`. Note that the preview window is only a snapshot
         * of the current state of the project, there is no limit on how many preview
         * snapshots can be taken.
         * @param gwidget a {@link Gladeui.Widget}
         */
        preview(gwidget: Widget): void;

        /**
         * Runs a document properties dialog for `project`.
         */
        properties(): void;

        push_progress(): void;

        /**
         * Pushes a newly created {@link Gladeui.Command} onto `projects` stack.
         * @param cmd the {@link Gladeui.Command}
         */
        push_undo(cmd: Command): void;

        queue_selection_changed(): void;

        /**
         * Redoes a {@link Gladeui.Command} in this project.
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
         * Note that when removing the {@link GObject.Object} from the project we
         * don't change ->project in the associated {@link Gladeui.Widget}; this
         * way UNDO can work.
         * @param object the {@link GObject.Object} to remove
         */
        remove_object(object: GObject.Object): void;

        /**
         * @returns a {@link Gladeui.GList} of allocated strings which are the names of the required catalogs for this project
         */
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
         * @returns `true` on success, `false` on failure
         */
        save(path: string): boolean;

        /**
         * Saves `project` to the given path.
         * @param path location to save glade file
         * @param flags the {@link Gladeui.VerifyFlags} to warn about
         * @returns `true` on success, `false` on failure
         */
        save_verify(path: string, flags: VerifyFlags): boolean;

        /**
         * Adds `object` to the selection chain of `project`
         * 
         * If `emit_signal` is `true`, calls `glade_project_selection_changed()`.
         * @param object a {@link GObject.Object} in `project`
         * @param emit_signal whether or not to emit a signal indicating               a selection change
         */
        selection_add(object: GObject.Object, emit_signal: boolean): void;

        /**
         * Causes `project` to emit a "selection_changed" signal.
         */
        selection_changed(): void;

        /**
         * Clears `project`'s selection chain
         * 
         * If `emit_signal` is `true`, calls `glade_project_selection_changed()`.
         * @param emit_signal whether or not to emit a signal indication a selection change
         */
        selection_clear(emit_signal: boolean): void;

        /**
         * @returns a {@link Gladeui.GList} containing the {@link Gtk.Widget} items currently selected in `project`
         */
        selection_get(): Gtk.Widget[];

        /**
         * Removes `object` from the selection chain of `project`
         * 
         * If `emit_signal` is `true`, calls `glade_project_selection_changed()`.
         * @param object a {@link GObject.Object} in `project`
         * @param emit_signal whether or not to emit a signal               indicating a selection change
         */
        selection_remove(object: GObject.Object, emit_signal: boolean): void;

        /**
         * Set the selection in `project` to `object`
         * 
         * If `emit_signal` is `true`, calls `glade_project_selection_changed()`.
         * @param object a {@link GObject.Object} in `project`
         * @param emit_signal whether or not to emit a signal               indicating a selection change
         */
        selection_set(object: GObject.Object, emit_signal: boolean): void;

        /**
         * @param adaptor a {@link Gladeui.WidgetAdaptor}
         */
        set_add_item(adaptor: WidgetAdaptor): void;

        /**
         * Set the custom CSS provider path to use in `project`
         * @param path a CSS file path
         */
        set_css_provider_path(path: string): void;

        /**
         * @param license 
         */
        set_license(license: string): void;

        /**
         * @param mode 
         */
        set_pointer_mode(mode: PointerMode): void;

        /**
         * @param path 
         */
        set_resource_path(path: string): void;

        /**
         * @param catalog 
         * @param major 
         * @param minor 
         */
        set_target_version(catalog: string, major: number, minor: number): void;

        /**
         * @param widget 
         */
        set_template(widget: Widget): void;

        /**
         * Set the project translation domain.
         * @param domain the translation domain
         */
        set_translation_domain(domain: string): void;

        /**
         * Sets `name` on `widget` in `project`, if `name` is not
         * available then a new name will be used.
         * @param widget the {@link Gladeui.Widget} to set a name on
         * @param name the name to set.
         */
        set_widget_name(widget: Widget, name: string): void;

        /**
         * @returns a {@link Gladeui.GList} containing the {@link Gtk.Widget} toplevel items in `project`
         */
        toplevels(): Gtk.Widget[];

        /**
         * Undoes a {@link Gladeui.Command} in this project.
         */
        undo(): void;

        /**
         * Creates a menu of the undo items in the project stack
         * @returns A newly created menu
         */
        undo_items(): Gtk.Widget;

        /**
         * @param saving 
         * @param flags 
         */
        verify(saving: boolean, flags: VerifyFlags): boolean;

        /**
         * Checks the supported state of this widget adaptor
         * and generates a string to show in the UI describing why.
         * @param adaptor the {@link Gladeui.WidgetAdaptor} to verify
         * @param mask a return location for a {@link Gladeui.SupportMask}
         * @returns A newly allocated string
         */
        verify_widget_adaptor(adaptor: WidgetAdaptor, mask: SupportMask): string;

        /**
         * @param gwidget 
         */
        widget_changed(gwidget: Widget): void;

        /**
         * Emits  GladeProject::widget-visibility-changed signal
         * @param widget The widget which visibility changed
         * @param visible widget visibility value
         */
        widget_visibility_changed(widget: Widget, visible: boolean): void;

        writing_preview(): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @returns `true` if the row was successfully deleted
         */
        drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @returns `true` if data of the required type was provided
         */
        drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @returns `true` if the row can be dragged
         */
        row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @virtual
         */
        vfunc_drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @virtual
         */
        vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @virtual
         */
        vfunc_row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: Gtk.TreePath | null): Gtk.TreeModel;

        /**
         * Calls func on each node in model in a depth-first fashion.
         * 
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;

        /**
         * Generates a string representation of the iter.
         * 
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter: Gtk.TreeIter | null): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         * 
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): GObject.Value | any;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter: Gtk.TreeIter | null): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;
    }


    namespace Property {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "tooltip-changed": (arg0: string, arg1: string, arg2: string) => void;
            /**
             * @signal
             * @run-last
             */
            "value-changed": (arg0: null, arg1: null) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::i18n-comment": (pspec: GObject.ParamSpec) => void;
            "notify::i18n-context": (pspec: GObject.ParamSpec) => void;
            "notify::i18n-translatable": (pspec: GObject.ParamSpec) => void;
            "notify::precision": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            "class": never;
            enabled: boolean;
            i18n_comment: string;
            i18nComment: string;
            i18n_context: string;
            i18nContext: string;
            i18n_translatable: boolean;
            i18nTranslatable: boolean;
            precision: number;
            sensitive: boolean;
            state: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Property extends GObject.Object {
        static $gtype: GObject.GType<Property>;

        // Properties
        /**
         * @construct-only
         */
        get "class"(): null;

        /**
         * @default true
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * @default null
         */
        get i18n_comment(): string;
        set i18n_comment(val: string);

        /**
         * @default null
         */
        get i18nComment(): string;
        set i18nComment(val: string);

        /**
         * @default null
         */
        get i18n_context(): string;
        set i18n_context(val: string);

        /**
         * @default null
         */
        get i18nContext(): string;
        set i18nContext(val: string);

        /**
         * @default false
         */
        get i18n_translatable(): boolean;
        set i18n_translatable(val: boolean);

        /**
         * @default false
         */
        get i18nTranslatable(): boolean;
        set i18nTranslatable(val: boolean);

        /**
         * @default 2
         */
        get precision(): number;
        set precision(val: number);

        /**
         * @default true
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);

        /**
         * @read-only
         * @default 0
         */
        get state(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Property.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Property.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](def: PropertyDef, widget: Widget, value: GObject.Value | any): Property;

        // Signals
        /** @signal */
        connect<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Property.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Property.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static pop_superuser(): void;

        static push_superuser(): void;

        static superuser(): boolean;

        // Virtual methods
        /**
         * @param widget A {@link Gladeui.Widget}
         * @virtual
         */
        vfunc_dup(widget: Widget): Property;

        /**
         * @param value a {@link GObject.Value}
         * @virtual
         */
        vfunc_equals_value(value: unknown): boolean;

        /**
         * Retrieve the property value
         * @param value a {@link GObject.Value}
         * @virtual
         */
        vfunc_get_value(value: unknown): void;

        /**
         * Loads the value of `property` from the corresponding object instance
         * @virtual
         */
        vfunc_load(): void;

        /**
         * Sets the property's value
         * @param value a {@link GObject.Value}
         * @virtual
         */
        vfunc_set_value(value: unknown): boolean;

        /**
         * Synchronize the object with this property
         * @virtual
         */
        vfunc_sync(): void;

        /**
         * @param tooltip 
         * @param insensitive_tooltip 
         * @param support_warning 
         * @virtual
         */
        vfunc_tooltip_changed(tooltip: string, insensitive_tooltip: string, support_warning: string): void;

        /**
         * @param old_value 
         * @param new_value 
         * @virtual
         */
        vfunc_value_changed(old_value: unknown, new_value: unknown): void;

        // Methods
        /**
         * Adds `object` to the object list in `property`.
         * 
         * Note: This function expects `property` to be a {@link Gladeui.ParamSpecObjects}
         * or {@link GObject.ParamSpecObject} type property.
         * @param object The {@link GObject.Object} to add
         */
        add_object(object: GObject.Object): void;

        /**
         * @returns Whether this property is at its default value
         */
        ["default"](): boolean;

        /**
         * @param widget A {@link Gladeui.Widget}
         * @returns A newly duplicated property based on the new widget
         */
        dup(widget: Widget): Property;

        /**
         * @param value a {@link GObject.Value}
         * @returns Whether this property is equal to the value provided
         */
        equals_value(value: GObject.Value | any): boolean;

        /**
         * Get the {@link Gladeui.PropertyDef} this property was created for.
         * @returns a {@link Gladeui.PropertyDef}
         */
        get_def(): PropertyDef;

        /**
         * Retrieve the default property value
         * @param value a {@link GObject.Value}
         */
        get_default(value: GObject.Value | any): void;

        get_enabled(): boolean;

        /**
         * @returns whether this property is special cased to always be saved regardless of its default value.
         */
        get_save_always(): boolean;

        get_sensitive(): boolean;

        get_state(): PropertyState;

        get_support_warning(): string;

        /**
         * Retrieve the property value
         * @param value a {@link GObject.Value}
         */
        get_value(value: GObject.Value | any): void;

        /**
         * @returns a {@link Gladeui.Widget}
         */
        get_widget(): Widget;

        i18n_get_comment(): string;

        i18n_get_context(): string;

        i18n_get_translatable(): boolean;

        /**
         * @param str 
         */
        i18n_set_comment(str: string): void;

        /**
         * @param str 
         */
        i18n_set_context(str: string): void;

        /**
         * @param translatable 
         */
        i18n_set_translatable(translatable: boolean): void;

        inline_value(): unknown;

        /**
         * Loads the value of `property` from the corresponding object instance
         */
        load(): void;

        make_string(): string;

        /**
         * @returns Whether this property is at its original default value
         */
        original_default(): boolean;

        /**
         * Resets this property to its original default value
         */
        original_reset(): void;

        /**
         * Read the value and any attributes for `property` from `node`, assumes
         * `property` is being loaded for `project`
         * 
         * Note that object values will only be resolved after the project is
         * completely loaded
         * @param project the {@link Gladeui.Project}
         * @param node the {@link Gladeui.XmlNode} to read, will either be a 'widget'        node or a 'child' node for packing properties.
         */
        read(project: Project, node: XmlNode): void;

        /**
         * Removes `object` from the object list in `property`.
         * 
         * Note: This function expects `property` to be a {@link Gladeui.ParamSpecObjects}
         * or {@link GObject.ParamSpecObject} type property.
         * @param object The {@link GObject.Object} to add
         */
        remove_object(object: GObject.Object): void;

        /**
         * Resets this property to its default value
         */
        reset(): void;

        /**
         * @param enabled 
         */
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

        /**
         * @param sensitive 
         * @param reason 
         */
        set_sensitive(sensitive: boolean, reason: string): void;

        /**
         * @param disable 
         * @param reason 
         */
        set_support_warning(disable: boolean, reason: string): void;

        /**
         * Sets the property's value
         * @param value a {@link GObject.Value}
         * @returns Whether the property was successfully set.
         */
        set_value(value: GObject.Value | any): boolean;

        /**
         * @param widget a {@link Gladeui.Widget}
         */
        set_widget(widget: Widget): void;

        /**
         * Synchronize the object with this property
         */
        sync(): void;

        warn_usage(): boolean;

        /**
         * Write `property` to `node`
         * @param context A {@link Gladeui.XmlContext}
         * @param node A {@link Gladeui.XmlNode}
         */
        write(context: XmlContext, node: XmlNode): void;
    }


    namespace PropertyLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            "notify::append-colon": (pspec: GObject.ParamSpec) => void;
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::custom-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::packing": (pspec: GObject.ParamSpec) => void;
            "notify::property": (pspec: GObject.ParamSpec) => void;
            "notify::property-name": (pspec: GObject.ParamSpec) => void;
            "notify::above-child": (pspec: GObject.ParamSpec) => void;
            "notify::visible-window": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.EventBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps {
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
        }
    }

    /**
     * @gir-type Class
     */
    class PropertyLabel extends Gtk.EventBox implements Atk.ImplementorIface, Editable, Gtk.Buildable {
        static $gtype: GObject.GType<PropertyLabel>;

        // Properties
        /**
         * @default true
         */
        get append_colon(): boolean;
        set append_colon(val: boolean);

        /**
         * @default true
         */
        get appendColon(): boolean;
        set appendColon(val: boolean);

        /**
         * @default null
         */
        get custom_text(): string;
        set custom_text(val: string);

        /**
         * @default null
         */
        get customText(): string;
        set customText(val: string);

        /**
         * @default null
         */
        get custom_tooltip(): string;
        set custom_tooltip(val: string);

        /**
         * @default null
         */
        get customTooltip(): string;
        set customTooltip(val: string);

        /**
         * @default false
         */
        get packing(): boolean;
        set packing(val: boolean);

        get property(): Property;
        set property(val: Property);

        /**
         * @default null
         */
        get property_name(): string;
        set property_name(val: string);

        /**
         * @default null
         */
        get propertyName(): string;
        set propertyName(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertyLabel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PropertyLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PropertyLabel;

        // Signals
        /** @signal */
        connect<K extends keyof PropertyLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyLabel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PropertyLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyLabel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PropertyLabel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropertyLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_append_colon(): boolean;

        get_custom_text(): string;

        get_custom_tooltip(): string;

        get_packing(): boolean;

        /**
         * @returns A {@link Gladeui.Property}
         */
        get_property(): Property;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;

        get_property_name(): string;

        /**
         * @param append_colon 
         */
        set_append_colon(append_colon: boolean): void;

        /**
         * @param custom_text 
         */
        set_custom_text(custom_text: string): void;

        /**
         * @param custom_tooltip 
         */
        set_custom_tooltip(custom_tooltip: string): void;

        /**
         * @param packing 
         */
        set_packing(packing: boolean): void;

        /**
         * @param property 
         */
        set_property(property: Property): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;

        /**
         * @param property_name 
         */
        set_property_name(property_name: string): void;

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace PropertyShell {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted after a property's value is committed, can be useful to serialize
             * commands after a property's commit command from custom editors.
             * @signal
             * @run-last
             */
            "post-commit": (arg0: null) => void;
            /**
             * Emitted before a property's value is committed, can be useful to serialize
             * commands before a property's commit command from custom editors.
             * @signal
             * @run-last
             */
            "pre-commit": (arg0: null) => void;
            "notify::custom-text": (pspec: GObject.ParamSpec) => void;
            "notify::disable-check": (pspec: GObject.ParamSpec) => void;
            "notify::editor-type": (pspec: GObject.ParamSpec) => void;
            "notify::packing": (pspec: GObject.ParamSpec) => void;
            "notify::property-name": (pspec: GObject.ParamSpec) => void;
            "notify::use-command": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Editable.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
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
        }
    }

    /**
     * @gir-type Class
     */
    class PropertyShell extends Gtk.Box implements Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PropertyShell>;

        // Properties
        /**
         * @default null
         */
        get custom_text(): string;
        set custom_text(val: string);

        /**
         * @default null
         */
        get customText(): string;
        set customText(val: string);

        /**
         * @default false
         */
        get disable_check(): boolean;
        set disable_check(val: boolean);

        /**
         * @default false
         */
        get disableCheck(): boolean;
        set disableCheck(val: boolean);

        /**
         * @construct-only
         * @default null
         */
        set editor_type(val: string);

        /**
         * @construct-only
         * @default null
         */
        set editorType(val: string);

        /**
         * @default false
         */
        get packing(): boolean;
        set packing(val: boolean);

        /**
         * @default null
         */
        get property_name(): string;
        set property_name(val: string);

        /**
         * @default null
         */
        get propertyName(): string;
        set propertyName(val: string);

        /**
         * @default true
         */
        get use_command(): boolean;
        set use_command(val: boolean);

        /**
         * @default true
         */
        get useCommand(): boolean;
        set useCommand(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertyShell.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PropertyShell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PropertyShell;

        // Signals
        /** @signal */
        connect<K extends keyof PropertyShell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyShell.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PropertyShell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropertyShell.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PropertyShell.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropertyShell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_custom_text(): string;

        get_disable_check(): boolean;

        get_packing(): boolean;

        get_property_name(): string;

        get_use_command(): boolean;

        /**
         * @param custom_text 
         */
        set_custom_text(custom_text: string): void;

        /**
         * @param disable_check 
         */
        set_disable_check(disable_check: boolean): void;

        /**
         * @param packing 
         */
        set_packing(packing: boolean): void;

        /**
         * @param property_name 
         */
        set_property_name(property_name: string): void;

        /**
         * @param use_command 
         */
        set_use_command(use_command: boolean): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         * @virtual
         */
        vfunc_load(widget: Widget): void;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         * @virtual
         */
        vfunc_set_show_name(show_name: boolean): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
    }


    namespace Signal {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::after": (pspec: GObject.ParamSpec) => void;
            "notify::class": (pspec: GObject.ParamSpec) => void;
            "notify::detail": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::support-warning": (pspec: GObject.ParamSpec) => void;
            "notify::swapped": (pspec: GObject.ParamSpec) => void;
            "notify::userdata": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            after: boolean;
            "class": never;
            detail: string;
            handler: string;
            support_warning: string;
            supportWarning: string;
            swapped: boolean;
            userdata: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Signal extends GObject.Object {
        static $gtype: GObject.GType<Signal>;

        // Properties
        /**
         * @default false
         */
        get after(): boolean;
        set after(val: boolean);

        /**
         * @construct-only
         */
        get "class"(): null;

        /**
         * @default null
         */
        get detail(): string;
        set detail(val: string);

        /**
         * @default null
         */
        get handler(): string;
        set handler(val: string);

        /**
         * @default null
         */
        get support_warning(): string;
        set support_warning(val: string);

        /**
         * @default null
         */
        get supportWarning(): string;
        set supportWarning(val: string);

        /**
         * @default false
         */
        get swapped(): boolean;
        set swapped(val: boolean);

        /**
         * @default null
         */
        get userdata(): string;
        set userdata(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Signal.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<Signal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](sig_def: SignalDef, handler: string, userdata: string, after: boolean, swapped: boolean): Signal;

        // Signals
        /** @signal */
        connect<K extends keyof Signal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Signal.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Signal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Signal.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Signal.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Signal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Reads and creates a ner {@link Gladeui.Signal} based on `node`
         * @param node The {@link Gladeui.XmlNode} to read
         * @param adaptor The {@link Gladeui.WidgetAdaptor} for the widget
         */
        static read(node: XmlNode, adaptor: WidgetAdaptor): Signal;

        // Methods
        /**
         * @returns a new {@link Gladeui.Signal} with the same attributes as `signal`
         */
        clone(): Signal;

        /**
         * @param sig2 a {@link Gladeui.Signal}
         * @returns `true` if `sig1` and `sig2` have identical attributes, `false` otherwise
         */
        equal(sig2: Signal): boolean;

        /**
         * Get whether the handler should be called before or after the default handler
         * of the signal.
         * @returns Whether the signal handler should be called after the default handler
         */
        get_after(): boolean;

        /**
         * Get the signal definition.
         * @returns the {@link Gladeui.SignalDef}
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

        /**
         * @param support_warning 
         */
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
         * @param context A {@link Gladeui.XmlContext}
         * @param node A {@link Gladeui.XmlNode}
         */
        write(context: XmlContext, node: XmlNode): void;
    }


    namespace SignalEditor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted when the editor needs to show a list of callbacks suggestions to the user.
             * @signal
             * @run-last
             */
            "callback-suggestions": (arg0: Signal) => string[];
            /**
             * Emitted when the editor needs to show a list of detail suggestions to the user.
             * @signal
             * @run-last
             */
            "detail-suggestions": (arg0: Signal) => string[];
            /**
             * Emitted when a item is activated in the GladeInspector.
             * @signal
             * @run-last
             */
            "signal-activated": (arg0: Signal) => void;
            "notify::glade-widget": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            glade_widget: Gtk.TreeModel;
            gladeWidget: Gtk.TreeModel;
        }
    }

    /**
     * @gir-type Class
     */
    class SignalEditor extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SignalEditor>;

        // Properties
        get glade_widget(): Gtk.TreeModel;
        set glade_widget(val: Gtk.TreeModel);

        get gladeWidget(): Gtk.TreeModel;
        set gladeWidget(val: Gtk.TreeModel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SignalEditor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SignalEditor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): SignalEditor;

        // Signals
        /** @signal */
        connect<K extends keyof SignalEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalEditor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SignalEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalEditor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SignalEditor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SignalEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * If drag and drop support is enabled, the user will be able to drag signal handler
         * from the tree to some editor. The type of the dnd data will be "application/x-glade-signal"
         * and it will be in the form of "widget:signal:handler" so for example
         * "GtkToggleButton:toggled:on_toggle_button_toggled".
         * @param enabled whether the drag and drop support should be enabled
         */
        enable_dnd(enabled: boolean): void;

        /**
         * @returns a {@link Gladeui.Widget}
         */
        get_widget(): Widget;

        /**
         * Load a widget in the signal editor. This will show all signals of the widget
         * an it's accessors in the signal editor where the user can edit them.
         * @param widget a {@link Gladeui.Widget} or NULL
         */
        load_widget(widget: Widget): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace SignalModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::signals": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeDragSource.ConstructorProps, Gtk.TreeModel.ConstructorProps {
            signals: never;
            widget: Widget;
        }
    }

    /**
     * @gir-type Class
     */
    class SignalModel extends GObject.Object implements Gtk.TreeDragSource, Gtk.TreeModel {
        static $gtype: GObject.GType<SignalModel>;

        // Properties
        /**
         * @construct-only
         */
        set signals(val: never);

        /**
         * @construct-only
         */
        set widget(val: Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SignalModel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SignalModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SignalModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SignalModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SignalModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SignalModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SignalModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new {@link Gladeui.SignalModel} object to show and edit the
         * signals of a widgets in a GtkTreeView
         * @param widget The {@link Gladeui.Widget} the signals belong to
         * @param signals The signals of the {@link Gladeui.Widget}
         */
        static ["new"](widget: Widget, signals: { [key: string]: any } | GLib.HashTable<never, never>): Gtk.TreeModel;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @returns `true` if the row was successfully deleted
         */
        drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @returns `true` if data of the required type was provided
         */
        drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @returns `true` if the row can be dragged
         */
        row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @virtual
         */
        vfunc_drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @virtual
         */
        vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @virtual
         */
        vfunc_row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: Gtk.TreePath | null): Gtk.TreeModel;

        /**
         * Calls func on each node in model in a depth-first fashion.
         * 
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns a newly-created {@link Gtk.TreePath}-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Generates a string representation of the iter.
         * 
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter: Gtk.TreeIter | null): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         * 
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): GObject.Value | any;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter: Gtk.TreeIter | null): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;
    }


    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "add-signal-handler": (arg0: Signal) => void;
            /**
             * @signal
             * @run-last
             */
            "button-press-event": (arg0: Gdk.Event) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            "button-release-event": (arg0: Gdk.Event) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            "change-signal-handler": (arg0: Signal) => void;
            /**
             * @signal
             * @run-last
             */
            "motion-notify-event": (arg0: Gdk.Event) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            "remove-signal-handler": (arg0: Signal) => void;
            /**
             * Emitted when property and signal support metadatas and messages
             * have been updated.
             * @signal
             * @run-last
             */
            "support-changed": () => void;
            "notify::adaptor": (pspec: GObject.ParamSpec) => void;
            "notify::anarchist": (pspec: GObject.ParamSpec) => void;
            "notify::composite": (pspec: GObject.ParamSpec) => void;
            "notify::internal": (pspec: GObject.ParamSpec) => void;
            "notify::internal-name": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::object": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::project": (pspec: GObject.ParamSpec) => void;
            "notify::properties": (pspec: GObject.ParamSpec) => void;
            "notify::reason": (pspec: GObject.ParamSpec) => void;
            "notify::support-warning": (pspec: GObject.ParamSpec) => void;
            "notify::template": (pspec: GObject.ParamSpec) => void;
            "notify::template-exact": (pspec: GObject.ParamSpec) => void;
            "notify::toplevel-height": (pspec: GObject.ParamSpec) => void;
            "notify::toplevel-width": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
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
            properties: never;
            reason: number;
            support_warning: string;
            supportWarning: string;
            template: Widget;
            template_exact: boolean;
            templateExact: boolean;
            toplevel_height: number;
            toplevelHeight: number;
            toplevel_width: number;
            toplevelWidth: number;
            visible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Widget extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Widget>;

        // Properties
        /**
         * @construct-only
         */
        get adaptor(): WidgetAdaptor;

        /**
         * @construct-only
         * @default false
         */
        get anarchist(): boolean;

        /**
         * @default false
         */
        get composite(): boolean;
        set composite(val: boolean);

        /**
         * @default null
         */
        get internal(): string;
        set internal(val: string);

        /**
         * @construct-only
         * @default null
         */
        set internal_name(val: string);

        /**
         * @construct-only
         * @default null
         */
        set internalName(val: string);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        get object(): GObject.Object;
        set object(val: GObject.Object);

        get parent(): Widget;
        set parent(val: Widget);

        get project(): Project;
        set project(val: Project);

        /**
         * @construct-only
         */
        get properties(): null;

        /**
         * @construct-only
         * @default 0
         */
        get reason(): number;

        /**
         * @read-only
         * @default null
         */
        get support_warning(): string;

        /**
         * @read-only
         * @default null
         */
        get supportWarning(): string;

        /**
         * @construct-only
         */
        set template(val: Widget);

        /**
         * @construct-only
         * @default false
         */
        set template_exact(val: boolean);

        /**
         * @construct-only
         * @default false
         */
        set templateExact(val: boolean);

        /**
         * @default -1
         */
        get toplevel_height(): number;
        set toplevel_height(val: number);

        /**
         * @default -1
         */
        get toplevelHeight(): number;
        set toplevelHeight(val: number);

        /**
         * @default -1
         */
        get toplevel_width(): number;
        set toplevel_width(val: number);

        /**
         * @default -1
         */
        get toplevelWidth(): number;
        set toplevelWidth(val: number);

        /**
         * @read-only
         * @default false
         */
        get visible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Currently only motion and button events are handled (see GLADE_WIDGET_IS_EVENT)
         * @param event a GdkEvent
         */
        static get_device_from_event(event: Gdk.Event): Gdk.Device;

        /**
         * @param object A {@link GObject.Object} containing the widget
         */
        static get_from_gobject(object: null): Widget;

        /**
         * Unsets superuser mode
         */
        static pop_superuser(): void;

        /**
         * Sets superuser mode
         */
        static push_superuser(): void;

        /**
         * Creates a new {@link Gladeui.Widget} from a XML node.
         * 
         * If node is a template and its parent class is abstract/non instantiatable,
         * Glade will use a class with the GladeInstantiable prefix instead.
         * 
         * For example, with a GtkBin template Glade will GladeInstantiableGtkBin class
         * @param project a {@link Gladeui.Project}
         * @param parent The parent {@link Gladeui.Widget} or `null`
         * @param node a {@link Gladeui.XmlNode}
         * @param internal the name of an internal child name
         */
        static read(project: Project, parent: Widget | null, node: XmlNode, internal: string | null): Widget;

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

        // Virtual methods
        /**
         * Adds `child` to `parent` in a generic way for this {@link Gladeui.Widget} parent.
         * @param child the {@link Gladeui.Widget} to add
         * @param at_mouse whether the added widget should be added            at the current mouse position
         * @virtual
         */
        vfunc_add_child(child: Widget, at_mouse: boolean): void;

        /**
         * Adds a signal handler for `widget`
         * @param signal_handler The {@link Gladeui.Signal}
         * @virtual
         */
        vfunc_add_signal_handler(signal_handler: Signal): void;

        /**
         * @param event 
         * @virtual
         */
        vfunc_button_press_event(event: Gdk.Event): number;

        /**
         * @param event 
         * @virtual
         */
        vfunc_button_release_event(event: Gdk.Event): number;

        /**
         * @param new_signal_handler 
         * @virtual
         */
        vfunc_change_signal_handler(new_signal_handler: Signal): void;

        /**
         * Feed an event to be handled on the project GladeWidget
         * hierarchy.
         * @param event A {@link Gdk.Event}
         * @virtual
         */
        vfunc_event(event: Gdk.Event): boolean;

        /**
         * @param event 
         * @virtual
         */
        vfunc_motion_notify_event(event: Gdk.Event): number;

        /**
         * Removes `child` from `parent` in a generic way for this {@link Gladeui.Widget} parent.
         * @param child the {@link Gladeui.Widget} to add
         * @virtual
         */
        vfunc_remove_child(child: Widget): void;

        /**
         * Removes a signal handler from `widget`
         * @param signal_handler The {@link Gladeui.Signal}
         * @virtual
         */
        vfunc_remove_signal_handler(signal_handler: Signal): void;

        /**
         * @param old_object 
         * @param new_object 
         * @virtual
         */
        vfunc_replace_child(old_object: GObject.Object, new_object: GObject.Object): void;

        // Methods
        /**
         * A convenience function to create a {@link Gladeui.Widget} of the prescribed type
         * for internal widgets.
         * @param internal_object the {@link GObject.Object}
         * @param internal_name a string identifier for this internal widget.
         * @param parent_name the generic name of the parent used for fancy child names.
         * @param anarchist Whether or not this widget is a widget outside                     of the parent's hierarchy (like a popup window)
         * @param reason The {@link Gladeui.CreateReason} for which this internal widget                     was created (usually just pass the reason from the post_create                     function; note also this is used only by the plugin code so                     pass something useful here).
         * @returns a freshly created {@link Gladeui.Widget} wrapper object for the          `internal_object` of name `internal_name`
         */
        adaptor_create_internal(internal_object: GObject.Object, internal_name: string, parent_name: string, anarchist: boolean, reason: CreateReason): Widget;

        /**
         * Adds `child` to `parent` in a generic way for this {@link Gladeui.Widget} parent.
         * @param child the {@link Gladeui.Widget} to add
         * @param at_mouse whether the added widget should be added            at the current mouse position
         */
        add_child(child: Widget, at_mouse: boolean): void;

        /**
         * Adds `property` to `widget` 's list of referenced properties.
         * 
         * Note: this is used to track properties on other objects that
         *       refer to this object.
         * @param property the {@link Gladeui.Property}
         */
        add_prop_ref(property: Property): void;

        /**
         * Adds a signal handler for `widget`
         * @param signal_handler The {@link Gladeui.Signal}
         */
        add_signal_handler(signal_handler: Signal): void;

        /**
         * Checks whether `child` can be added to `parent`.
         * 
         * If `user_feedback` is `true` and `child` cannot be
         * added then this shows a notification dialog to the user
         * explaining why.
         * @param child The child {@link Gladeui.Widget} to add
         * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
         * @returns whether `child` can be added to `widget`.
         */
        add_verify(child: Widget, user_feedback: boolean): boolean;

        /**
         * Changes a {@link Gladeui.Signal} on `widget`
         * @param old_signal_handler the old {@link Gladeui.Signal}
         * @param new_signal_handler the new {@link Gladeui.Signal}
         */
        change_signal_handler(old_signal_handler: Signal, new_signal_handler: Signal): void;

        /**
         * Gets `child`'s packing property identified by `property_name`.
         * @param child The {@link Gladeui.Widget} child
         * @param property_name The id of the property
         * @param value The `GValue`
         */
        child_get_property(child: Widget, property_name: string, value: GObject.Value | any): void;

        /**
         * Sets `child`'s packing property identified by `property_name` to `value`.
         * @param child The {@link Gladeui.Widget} child
         * @param property_name The id of the property
         * @param value The `GValue`
         */
        child_set_property(child: Widget, property_name: string, value: GObject.Value | any): void;

        /**
         * Sets properties in `widget` based on the values of
         * matching properties in `template_widget`
         * @param template_widget a 'src' {@link Gladeui.Widget}
         * @param copy_parentless whether to copy reffed widgets at all
         * @param exact whether to copy reffed widgets exactly
         */
        copy_properties(template_widget: Widget, copy_parentless: boolean, exact: boolean): void;

        /**
         * Sets signals in `widget` based on the values of
         * matching signals in `template_widget`
         * @param template_widget a 'src' {@link Gladeui.Widget}
         */
        copy_signals(template_widget: Widget): void;

        /**
         * This is a convenience function to create a GladeEditorProperty corresponding
         * to `property`
         * @param property The widget's property
         * @param packing whether `property` indicates a packing property or not.
         * @param use_command Whether the undo/redo stack applies here.
         * @returns A newly created and connected GladeEditorProperty
         */
        create_editor_property(property: string, packing: boolean, use_command: boolean): EditorProperty;

        /**
         * Determines whether `widget` is somehow dependent on `other`, in
         * which case it should be serialized after `other`.
         * 
         * A widget is dependent on another widget.
         * It does not take into account for children dependencies.
         * @param other another {@link Gladeui.Widget}
         * @returns `true` if `widget` depends on `other`.
         */
        depends(other: Widget): boolean;

        /**
         * Creates a deep copy of {@link Gladeui.Widget}. if `exact` is specified,
         * the widget name is preserved and signals are carried over
         * (this is used to maintain names & signals in Cut/Paste context
         * as opposed to Copy/Paste contexts).
         * @param exact whether or not to creat an exact duplicate
         * @returns The newly created {@link Gladeui.Widget}
         */
        dup(exact: boolean): Widget;

        /**
         * Copies a list of properties, if `as_load` is specified, then
         * properties that are not saved to the glade file are ignored.
         * @param template_props the {@link Gladeui.Property} list to copy
         * @param as_load whether to behave as if loading the project
         * @param copy_parentless whether to copy reffed widgets at all
         * @param exact whether to copy reffed widgets exactly
         * @returns A newly allocated {@link Gladeui.GList} of new {@link Gladeui.Property} objects.
         */
        dup_properties(template_props: Property[], as_load: boolean, copy_parentless: boolean, exact: boolean): Property[];

        /**
         * @param project 
         * @param use_command 
         */
        ensure_name(project: Project, use_command: boolean): void;

        /**
         * Feed an event to be handled on the project GladeWidget
         * hierarchy.
         * @param event A {@link Gdk.Event}
         * @returns whether the event was handled or not.
         */
        event(event: Gdk.Event): boolean;

        /**
         * Finds a child widget named `name`.
         * @param name child name
         * @returns The child of widget or `null` if it was not found.
         */
        find_child(name: string): Widget | null;

        /**
         * Creates a user friendly name to describe project widgets
         * @returns A newly allocated string
         */
        generate_path_name(): string;

        /**
         * Returns a {@link Gladeui.WidgetAction} object indentified by `action_path`.
         * @param action_path a full action path including groups
         * @returns the action or `null` if not found.
         */
        get_action(action_path: string): WidgetAction | null;

        /**
         * @returns the list of {@link Gladeui.WidgetAction}
         */
        get_actions(): WidgetAction[];

        /**
         * @returns the {@link Gladeui.WidgetAdaptor} of `widget`
         */
        get_adaptor(): WidgetAdaptor;

        /**
         * Fetches any wrapped children of `widget`.
         * @returns The children of widget <note><para>This differs from a direct call to `glade_widget_adaptor_get_children()` as it only returns children which have an associated GladeWidget. This function will not return any placeholders or internal composite children that have not been exposed for Glade configuration</para></note>
         */
        get_children(): GObject.Object[];

        /**
         * @returns a pointer to `widget`'s displayable name This should be used to display the widget's ID in the UI, it will automatically return the class name if the widget has no name.
         */
        get_display_name(): string;

        /**
         * @returns the internal name of `widget`
         */
        get_internal(): string;

        /**
         * Checks if `widget` is a composite template to be used
         * with `gtk_widget_class_set_template()`.
         * @returns whether `widget` is composite.
         */
        get_is_composite(): boolean;

        /**
         * Get the current locked widget, locked widgets cannot
         * be removed from the project until unlocked
         * @returns a {@link Gladeui.Widget} or `null` if none is locked
         */
        get_locker(): Widget | null;

        /**
         * @returns a pointer to `widget`'s name This is what will be serialized as the widget's ID, unless the name currently carries the `GLADE_UNNAMED_PREFIX`.
         */
        get_name(): string;

        /**
         * @returns the {@link GObject.Object} associated with `widget`
         */
        get_object<T = GObject.Object>(): T;

        /**
         * Returns a {@link Gladeui.WidgetAction} object indentified by `action_path`.
         * @param action_path a full action path including groups
         * @returns the action or `null` if not found.
         */
        get_pack_action(action_path: string): WidgetAction | null;

        /**
         * @returns the list of {@link Gladeui.WidgetAction}
         */
        get_pack_actions(): WidgetAction[];

        /**
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns the {@link Gladeui.Property} in `widget` named `id_property`
         */
        get_pack_property(id_property: string): Property | null;

        /**
         * @returns the list of {@link Gladeui.Property}
         */
        get_packing_properties(): Property[];

        /**
         * @returns The parenting {@link Gladeui.Widget}
         */
        get_parent(): Widget;

        /**
         * @returns a list of {@link Gladeui.Property}
         */
        get_parentless_reffed_widgets(): Property[];

        /**
         * @returns a {@link Gladeui.Property}
         */
        get_parentless_widget_ref(): Property;

        /**
         * @returns the {@link Gladeui.Project} that `widget` belongs to
         */
        get_project(): Project;

        /**
         * @returns the list of {@link Gladeui.Property}
         */
        get_properties(): Property[];

        /**
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns the {@link Gladeui.Property} in `widget` named `id_property`
         */
        get_property(id_property: string): Property | null;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;

        /**
         * Compiles a list of {@link Gladeui.Signal} elements
         * @returns a newly allocated {@link Gladeui.GList} of {@link Gladeui.Signal}, the caller must call `g_list_free()` to free the list.
         */
        get_signal_list(): Signal[];

        /**
         * @returns a GtkTreeModel that can be used to view the widget's signals.          The signal model is owned by the {@link Gladeui.Widget}.
         */
        get_signal_model(): Gtk.TreeModel;

        /**
         * @returns The toplevel {@link Gladeui.Widget} in the hierarchy (or `widget`)
         */
        get_toplevel(): Widget;

        /**
         * @param type a  {@link GObject.GType}
         * @returns whether this GladeWidget has any descendants of type `type`          or any descendants that implement the `type` interface
         */
        has_decendant(type: GObject.GType): boolean;

        /**
         * @returns whether the user has named this widget with an ID
         */
        has_name(): boolean;

        has_prop_refs(): boolean;

        /**
         * Hide `widget`
         */
        hide(): void;

        in_project(): boolean;

        /**
         * Determines whether `widget` is somewhere inside `ancestor`, possibly with
         * intermediate containers.
         * @param ancestor another {@link Gladeui.Widget}
         * @returns `true` if `ancestor` contains `widget` as a child, grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Widget): boolean;

        /**
         * @returns the list of {@link Gladeui.Widget}
         */
        list_locked_widgets(): Widget[];

        /**
         * @returns a list of {@link Gladeui.Property}
         */
        list_prop_refs(): Property[];

        /**
         * @param signal_name the name of the signal
         * @returns A {@link GLib.PtrArray} of {@link Gladeui.Signal} for `signal_name`
         */
        list_signal_handlers(signal_name: string): Signal[];

        /**
         * Sets `locked` to be in a locked up state
         * spoken for by `widget`, locked widgets cannot
         * be removed from the project until unlocked.
         * @param locked The {@link Gladeui.Widget} to lock
         */
        lock(locked: Widget): void;

        /**
         * This function retrieves the value of the property `property_name` on
         * the runtime object of `widget` and sets it in `value`.
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         */
        object_get_property(property_name: string, value: GObject.Value | any): void;

        /**
         * This function applies `value` to the property `property_name` on
         * the runtime object of `widget`.
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         */
        object_set_property(property_name: string, value: GObject.Value | any): void;

        /**
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns whether whether `id_property` was found and is currently set to it's default value.
         */
        pack_property_default(id_property: string): boolean;

        /**
         * Resets `id_property` in `widget`'s packing properties to it's default value
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns whether `id_property` was found or not.
         */
        pack_property_reset(id_property: string): boolean;

        /**
         * Sets the enabled state of `id_property` in `widget`'s packing
         * properties; this is used for optional properties.
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param enabled setting enabled or disabled
         * @returns whether `id_property` was found or not.
         */
        pack_property_set_enabled(id_property: string, enabled: boolean): boolean;

        /**
         * Sets whether `id_property` in `widget` should be special cased
         * to always be saved regardless of its default value.
         * (used for some special cases like properties
         * that are assigned initial values in composite widgets
         * or derived widget code).
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param setting the setting
         * @returns whether `id_property` was found or not.
         */
        pack_property_set_save_always(id_property: string, setting: boolean): boolean;

        /**
         * Sets the sensitivity of `id_property` in `widget`'s packing properties.
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param sensitive setting sensitive or insensitive
         * @param reason a description of why the user cant edit this property          which will be used as a tooltip
         * @returns whether `id_property` was found or not.
         */
        pack_property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;

        /**
         * Same as `glade_widget_property_string()` but for packing
         * properties.
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param value the {@link GObject.Value} to print or `null`
         * @returns A newly allocated string representing `id_property`
         */
        pack_property_string(id_property: string, value: GObject.Value | any): string;

        /**
         * Returns whether placeholders should be used
         * in operations concerning this parent & child.
         * 
         * Currently that criteria is whether `parent` is a
         * GtkContainer, `widget` is a GtkWidget and the parent
         * adaptor has been marked to use placeholders.
         * @param widget The child {@link Gladeui.Widget}
         * @returns whether to use placeholders for this relationship.
         */
        placeholder_relation(widget: Widget): boolean;

        /**
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns whether whether `id_property` was found and is currently set to it's default value.
         */
        property_default(id_property: string): boolean;

        /**
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns whether whether `id_property` was found and is currently set to it's original default value.
         */
        property_original_default(id_property: string): boolean;

        /**
         * Resets `id_property` in `widget` to it's default value
         * @param id_property a string naming a {@link Gladeui.Property}
         * @returns whether `id_property` was found or not.
         */
        property_reset(id_property: string): boolean;

        /**
         * Sets the enabled state of `id_property` in `widget`; this is
         * used for optional properties.
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param enabled setting enabled or disabled
         * @returns whether `id_property` was found or not.
         */
        property_set_enabled(id_property: string, enabled: boolean): boolean;

        /**
         * Sets whether `id_property` in `widget` should be special cased
         * to always be saved regardless of its default value.
         * (used for some special cases like properties
         * that are assigned initial values in composite widgets
         * or derived widget code).
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param setting the setting
         * @returns whether `id_property` was found or not.
         */
        property_set_save_always(id_property: string, setting: boolean): boolean;

        /**
         * Sets the sensitivity of `id_property` in `widget`
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param sensitive setting sensitive or insensitive
         * @param reason a description of why the user cant edit this property          which will be used as a tooltip
         * @returns whether `id_property` was found or not.
         */
        property_set_sensitive(id_property: string, sensitive: boolean, reason: string): boolean;

        /**
         * Creates a printable string representing `id_property` in
         * `widget`, if `value` is specified it will be used in place
         * of `id_property`'s real value (this is a convenience
         * function to print/debug properties usually from plugin
         * backends).
         * @param id_property a string naming a {@link Gladeui.Property}
         * @param value the {@link GObject.Value} to print or `null`
         * @returns A newly allocated string representing `id_property`
         */
        property_string(id_property: string, value: GObject.Value | any): string;

        /**
         * Reads in a child widget from the xml (handles 'child' tag)
         * @param node a {@link Gladeui.XmlNode}
         */
        read_child(node: XmlNode): void;

        /**
         * Replaces the current widget instance with
         * a new one while preserving all properties children and
         * takes care of reparenting.
         */
        rebuild(): void;

        /**
         * Removes `child` from `parent` in a generic way for this {@link Gladeui.Widget} parent.
         * @param child the {@link Gladeui.Widget} to add
         */
        remove_child(child: Widget): void;

        /**
         * Removes `property` from `widget` 's list of referenced properties.
         * 
         * Note: this is used to track properties on other objects that
         *       refer to this object.
         * @param property the {@link Gladeui.Property}
         */
        remove_prop_ref(property: Property): void;

        /**
         * Removes the {@link Gladeui.Property} indicated by `id_property`
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
         * @param signal_handler The {@link Gladeui.Signal}
         */
        remove_signal_handler(signal_handler: Signal): void;

        /**
         * Replaces a GObject with another GObject inside a {@link Gladeui.Widget} which
         * behaves as a container.
         * 
         * Note that both GObjects must be owned by a GladeWidget.
         * @param old_object a {@link GObject.Object}
         * @param new_object a {@link GObject.Object}
         */
        replace(old_object: GObject.Object, new_object: GObject.Object): void;

        /**
         * Sets the sensitivity of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param sensitive setting sensitive or insensitive
         * @returns whether `action_path` was found or not.
         */
        set_action_sensitive(action_path: string, sensitive: boolean): boolean;

        /**
         * Sets the visibility of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param visible setting visible or invisible
         * @returns whether `action_path` was found or not.
         */
        set_action_visible(action_path: string, visible: boolean): boolean;

        /**
         * @param child 
         * @param node 
         */
        set_child_type_from_node(child: GObject.Object, node: XmlNode): void;

        /**
         * @param in_project 
         */
        set_in_project(in_project: boolean): void;

        /**
         * Sets the internal name of `widget` to `internal`
         * @param internal The internal name
         */
        set_internal(internal: string): void;

        /**
         * Set's this widget to be toplevel composite object to be
         * eventually used with `gtk_widget_class_set_template()`
         * 
         * Only one widget in a project should be composite.
         * @param composite whether `widget` should be a composite template
         */
        set_is_composite(composite: boolean): void;

        /**
         * Sets `widget`'s name to `name`.
         * @param name a string
         */
        set_name(name: string): void;

        /**
         * Sets the sensitivity of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param sensitive setting sensitive or insensitive
         * @returns whether `action_path` was found or not.
         */
        set_pack_action_sensitive(action_path: string, sensitive: boolean): boolean;

        /**
         * Sets the visibility of `action_path` in `widget`
         * @param action_path a full action path including groups
         * @param visible setting visible or invisible
         * @returns whether `action_path` was found or not.
         */
        set_pack_action_visible(action_path: string, visible: boolean): boolean;

        /**
         * Generates the packing_properties list of the widget, given
         * the class of the container we are adding the widget to.
         * If the widget already has packing_properties, but the container
         * has changed, the current list is freed and replaced.
         * @param container The parent {@link Gladeui.Widget}
         */
        set_packing_properties(container: Widget): void;

        /**
         * sets the parenting {@link Gladeui.Widget}
         * @param parent the parenting {@link Gladeui.Widget} (or `null`)
         */
        set_parent(parent: Widget | null): void;

        /**
         * Makes `widget` belong to `project`.
         * @param project a {@link Gladeui.Project}
         */
        set_project(project: Project): void;

        /**
         * @param warning 
         */
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
         * and appends the created {@link Gladeui.XmlNode} to `node`.
         * @param context A {@link Gladeui.XmlContext}
         * @param node A {@link Gladeui.XmlNode}
         */
        write(context: XmlContext, node: XmlNode): void;

        /**
         * Writes out a widget to the xml, takes care
         * of packing properties and special child types.
         * @param child The child {@link Gladeui.Widget} to write
         * @param context A {@link Gladeui.XmlContext}
         * @param node A {@link Gladeui.XmlNode}
         */
        write_child(child: Widget, context: XmlContext, node: XmlNode): void;

        /**
         * Writes out a placeholder to the xml
         * @param object A {@link Gladeui.Placeholder}
         * @param context A {@link Gladeui.XmlContext}
         * @param node A {@link Gladeui.XmlNode}
         */
        write_placeholder(object: GObject.Object, context: XmlContext, node: XmlNode): void;

        /**
         * @param context 
         * @param node 
         */
        write_signals(context: XmlContext, node: XmlNode): void;

        /**
         * @param object 
         * @param context 
         * @param node 
         */
        write_special_child_prop(object: GObject.Object, context: XmlContext, node: XmlNode): void;
    }


    namespace WidgetAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::definition": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            definition: never;
            sensitive: boolean;
            visible: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class WidgetAction extends GObject.Object {
        static $gtype: GObject.GType<WidgetAction>;

        // Properties
        /**
         * @construct-only
         */
        set definition(val: never);

        /**
         * @default true
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);

        /**
         * @default true
         */
        get visible(): boolean;
        set visible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetAction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WidgetAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WidgetAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WidgetAction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WidgetAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WidgetAction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WidgetAction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WidgetAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns a list of {@link Gladeui.WidgetActionDef}
         */
        get_children(): WidgetActionDef[];

        get_def(): WidgetActionDef;

        get_sensitive(): boolean;

        get_visible(): boolean;

        /**
         * Set whether or not this action is sensitive.
         * @param sensitive the sensitivity to set
         */
        set_sensitive(sensitive: boolean): void;

        /**
         * @param visible 
         */
        set_visible(visible: boolean): void;
    }


    namespace WidgetAdaptor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::book": (pspec: GObject.ParamSpec) => void;
            "notify::catalog": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::generic-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::query": (pspec: GObject.ParamSpec) => void;
            "notify::special-child-type": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            book: string;
            catalog: string;
            cursor: never;
            generic_name: string;
            genericName: string;
            icon_name: string;
            iconName: string;
            name: string;
            query: boolean;
            special_child_type: string;
            specialChildType: string;
            title: string;
            type: GObject.GTypeInput;
        }
    }

    /**
     * @gir-type Class
     */
    class WidgetAdaptor extends GObject.Object {
        static $gtype: GObject.GType<WidgetAdaptor>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get book(): string;

        /**
         * @construct-only
         * @default null
         */
        get catalog(): string;

        /**
         * @read-only
         */
        get cursor(): null;

        /**
         * @construct-only
         * @default null
         */
        get generic_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get genericName(): string;

        /**
         * @construct-only
         * @default widget-gtk-frame
         */
        get icon_name(): string;

        /**
         * @construct-only
         * @default widget-gtk-frame
         */
        get iconName(): string;

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * @default false
         */
        get query(): boolean;
        set query(val: boolean);

        /**
         * @construct-only
         * @default null
         */
        get special_child_type(): string;

        /**
         * @construct-only
         * @default null
         */
        get specialChildType(): string;

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * @construct-only
         */
        get type(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WidgetAdaptor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WidgetAdaptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WidgetAdaptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WidgetAdaptor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WidgetAdaptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WidgetAdaptor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WidgetAdaptor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WidgetAdaptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Dynamically creates a subclass of {@link Gladeui.WidgetAdaptor} and subclasses
         * the closest parent adaptor (parent class adapters must be created/registered
         * prior to child classes, otherwise inheritance wont work) and parses in
         * the relevant catalog info.
         * @param catalog A {@link Gladeui.Catalog}
         * @param class_node the {@link Gladeui.XmlNode} to load
         * @param module the plugin GModule.
         */
        static from_catalog(catalog: Catalog, class_node: XmlNode, module: GModule.Module): WidgetAdaptor;

        /**
         * @param name name of the widget class (for instance: GtkButton)
         */
        static get_by_name(name: string): WidgetAdaptor | null;

        /**
         * @param type the {@link GObject.GType} of an object class
         */
        static get_by_type(type: GObject.GType): WidgetAdaptor | null;

        /**
         * Compiles a list of all registered adaptors.
         */
        static list_adaptors(): WidgetAdaptor[];

        // Virtual methods
        /**
         * An adaptor function to be called on widget actions.
         * @param object The {@link GObject.Object}
         * @param action_path The action identifier in the action tree
         * @virtual
         */
        vfunc_action_activate(object: GObject.Object, action_path: string): void;

        /**
         * This delegate function is used to create dynamically customized
         * submenus. Called only for actions that don't have children.
         * @param object The {@link GObject.Object}
         * @param action_path The action identifier in the action tree
         * @virtual
         */
        vfunc_action_submenu(object: GObject.Object, action_path: string): Gtk.Widget | null;

        /**
         * Adds `child` to `container`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @virtual
         */
        vfunc_add(container: GObject.Object, child: GObject.Object): void;

        /**
         * Checks whether `child` can be added to `parent`.
         * 
         * If `user_feedback` is `true` and `child` cannot be
         * added then this shows a notification dialog to the user
         * explaining why.
         * @param container A {@link GObject.Object} container
         * @param child A {@link GObject.Object} child
         * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
         * @virtual
         */
        vfunc_add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean;

        /**
         * An adaptor function to be called on widget actions.
         * @param container The {@link GObject.Object} container
         * @param object The {@link GObject.Object}
         * @param action_path The action identifier in the action tree
         * @virtual
         */
        vfunc_child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void;

        /**
         * Gets `child`'s packing property identified by `property_name`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @param property_name The id of the property
         * @param value The `GValue`
         * @virtual
         */
        vfunc_child_get_property(container: GObject.Object, child: GObject.Object, property_name: string, value: unknown): void;

        /**
         * Sets `child`'s packing property identified by `property_name` to `value`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @param property_name The id of the property
         * @param value The `GValue`
         * @virtual
         */
        vfunc_child_set_property(container: GObject.Object, child: GObject.Object, property_name: string, value: unknown): void;

        /**
         * This delegate function is always called whenever setting any
         * properties with the exception of load time, and copy/paste time
         * (basically the two places where we recreate a hierarchy that we
         * already know "works") its basically an optional backend provided
         * boundary checker for properties.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @param property_name The id of the property
         * @param value The `GValue`
         * @virtual
         */
        vfunc_child_verify_property(container: GObject.Object, child: GObject.Object, property_name: string, value: unknown): boolean;

        /**
         * This function is called to construct a GObject instance for
         * a {@link Gladeui.Widget} of the said `adaptor`. (provided for language
         * bindings that may need to construct a wrapper object).
         * @param n_parameters amount of construct parameters
         * @param parameters array of construct {@link GObject.Parameter} args to create              the new object with.
         * @virtual
         */
        vfunc_construct_object<T = GObject.Object>(n_parameters: number, parameters: GObject.Parameter): T;

        /**
         * This is used to allow the backend to override the way an
         * editor page is layed out (note that editor widgets are created
         * on demand and not at startup).
         * @param type The {@link Gladeui.EditorPageType}
         * @virtual
         */
        vfunc_create_editable(type: EditorPageType): Editable;

        /**
         * Creates a GladeEditorProperty to edit `def`
         * @param def The {@link Gladeui.PropertyDef} to be edited
         * @param use_command whether to use the GladeCommand interface to commit property changes
         * @virtual
         */
        vfunc_create_eprop(def: PropertyDef, use_command: boolean): EditorProperty;

        /**
         * @param object The {@link GObject.Object}
         * @param reason The {@link Gladeui.CreateReason} that `object` was created for
         * @virtual
         */
        vfunc_deep_post_create(object: GObject.Object, reason: CreateReason): void;

        /**
         * Checks whether `widget` depends on `another` to be placed earlier in
         * the glade file.
         * @param widget A {@link Gladeui.Widget} of the adaptor
         * @param another another {@link Gladeui.Widget}
         * @virtual
         */
        vfunc_depends(widget: Widget, another: Widget): boolean;

        /**
         * This function is called to destroy a GObject instance.
         * @param object The object to destroy
         * @virtual
         */
        vfunc_destroy_object(object: GObject.Object): void;

        /**
         * Lists the children of `container`.
         * @param container The {@link GObject.Object} container
         * @virtual
         */
        vfunc_get_children(container: GObject.Object): GObject.Object[];

        /**
         * Retrieves the internal object `internal_name` from `object`
         * @param object The {@link GObject.Object}
         * @param internal_name The string identifier of the internal object
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(object: GObject.Object, internal_name: string): T;

        /**
         * Gets `value` of `property_name` on `object`.
         * @param object The {@link GObject.Object}
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         * @virtual
         */
        vfunc_get_property(object: GObject.Object, property_name: string, value: unknown): void;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with GObject.Object.vfunc_get_property
        vfunc_get_property(...args: never[]): any;

        /**
         * An adaptor function to be called after the object is created
         * @param object The {@link GObject.Object}
         * @param reason The {@link Gladeui.CreateReason} that `object` was created for
         * @virtual
         */
        vfunc_post_create(object: GObject.Object, reason: CreateReason): void;

        /**
         * This function is called to update load a child `widget`
         * from `node` when loading xml files (will recurse into
         * `glade_widget_read()`)
         * @param widget The {@link Gladeui.Widget}
         * @param node The {@link Gladeui.XmlNode}
         * @virtual
         */
        vfunc_read_child(widget: Widget, node: XmlNode): void;

        /**
         * This function is called to update `widget` from `node`
         * when loading xml files.
         * @param widget The {@link Gladeui.Widget}
         * @param node The {@link Gladeui.XmlNode}
         * @virtual
         */
        vfunc_read_widget(widget: Widget, node: XmlNode): void;

        /**
         * Removes `child` from `container`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @virtual
         */
        vfunc_remove(container: GObject.Object, child: GObject.Object): void;

        /**
         * Replaces `old_obj` with `new_obj` in `container` while positioning
         * `new_obj` where `old_obj` was and assigning it appropriate packing
         * property values.
         * @param container The {@link GObject.Object} container
         * @param old_obj The old {@link GObject.Object} child
         * @param new_obj The new {@link GObject.Object} child
         * @virtual
         */
        vfunc_replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void;

        /**
         * This delegate function is used to apply the property value on
         * the runtime object.
         * @param object The {@link GObject.Object}
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         * @virtual
         */
        vfunc_set_property(object: GObject.Object, property_name: string, value: unknown): void;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with GObject.Object.vfunc_set_property
        vfunc_set_property(...args: never[]): any;

        /**
         * For normal properties this is used to serialize
         * property values, for custom properties its still
         * needed to update the UI for undo/redo items etc.
         * @param def The {@link Gladeui.PropertyDef}
         * @param value The {@link GObject.Value} to convert to a string
         * @virtual
         */
        vfunc_string_from_value(def: PropertyDef, value: unknown): string;

        /**
         * This delegate function is always called whenever setting any
         * properties with the exception of load time, and copy/paste time
         * (basically the two places where we recreate a hierarchy that we
         * already know "works") its basically an optional backend provided
         * boundary checker for properties.
         * @param object The {@link GObject.Object}
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         * @virtual
         */
        vfunc_verify_property(object: GObject.Object, property_name: string, value: unknown): boolean;

        /**
         * This function is called to write the child `widget` to `node`
         * when writing xml files (takes care of packing and recurses
         * into `glade_widget_write()`)
         * @param widget The {@link Gladeui.Widget}
         * @param context The {@link Gladeui.XmlContext}
         * @param node The {@link Gladeui.XmlNode}
         * @virtual
         */
        vfunc_write_child(widget: Widget, context: XmlContext, node: XmlNode): void;

        /**
         * This function is called to write `widget` to `node`
         * when writing xml files.
         * @param widget The {@link Gladeui.Widget}
         * @param context The {@link Gladeui.XmlContext}
         * @param node The {@link Gladeui.XmlNode}
         * @virtual
         */
        vfunc_write_widget(widget: Widget, context: XmlContext, node: XmlNode): void;

        /**
         * This function is called to write `widget` to `node`
         * when writing xml files (after writing children)
         * @param widget The {@link Gladeui.Widget}
         * @param context The {@link Gladeui.XmlContext}
         * @param node The {@link Gladeui.XmlNode}
         * @virtual
         */
        vfunc_write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void;

        // Methods
        /**
         * An adaptor function to be called on widget actions.
         * @param object The {@link GObject.Object}
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
         * Remove an `adaptor`'s action.
         * @param action_path The identifier of this action in the action tree
         * @returns whether or not the action was removed.
         */
        action_remove(action_path: string): boolean;

        /**
         * This delegate function is used to create dynamically customized
         * submenus. Called only for actions that don't have children.
         * @param object The {@link GObject.Object}
         * @param action_path The action identifier in the action tree
         * @returns A newly created {@link Gtk.Menu} or `null`
         */
        action_submenu(object: GObject.Object, action_path: string): Gtk.Widget | null;

        /**
         * Create a list of actions.
         * @returns a new list of GladeWidgetAction.
         */
        actions_new(): WidgetAction[];

        /**
         * Adds `child` to `container`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         */
        add(container: GObject.Object, child: GObject.Object): void;

        /**
         * Checks whether `child` can be added to `parent`.
         * 
         * If `user_feedback` is `true` and `child` cannot be
         * added then this shows a notification dialog to the user
         * explaining why.
         * @param container A {@link GObject.Object} container
         * @param child A {@link GObject.Object} child
         * @param user_feedback whether a notification dialog should be presented in the case that the child cannot not be added.
         * @returns whether `child` can be added to `parent`.
         */
        add_verify(container: GObject.Object, child: GObject.Object, user_feedback: boolean): boolean;

        /**
         * An adaptor function to be called on widget actions.
         * @param container The {@link GObject.Object} container
         * @param object The {@link GObject.Object}
         * @param action_path The action identifier in the action tree
         */
        child_action_activate(container: GObject.Object, object: GObject.Object, action_path: string): void;

        /**
         * Gets `child`'s packing property identified by `property_name`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @param property_name The id of the property
         * @param value The `GValue`
         */
        child_get_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value | any): void;

        /**
         * Sets `child`'s packing property identified by `property_name` to `value`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @param property_name The id of the property
         * @param value The `GValue`
         */
        child_set_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value | any): void;

        /**
         * This delegate function is always called whenever setting any
         * properties with the exception of load time, and copy/paste time
         * (basically the two places where we recreate a hierarchy that we
         * already know "works") its basically an optional backend provided
         * boundary checker for properties.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @param property_name The id of the property
         * @param value The `GValue`
         * @returns whether or not its OK to set `value` on `object`, this function will silently return TRUE if the class did not provide a verify function.
         */
        child_verify_property(container: GObject.Object, child: GObject.Object, property_name: string, value: GObject.Value | any): boolean;

        /**
         * This function is called to construct a GObject instance for
         * a {@link Gladeui.Widget} of the said `adaptor`. (provided for language
         * bindings that may need to construct a wrapper object).
         * @param n_parameters amount of construct parameters
         * @param parameters array of construct {@link GObject.Parameter} args to create              the new object with.
         * @returns A newly created {@link GObject.Object}
         */
        construct_object<T = GObject.Object>(n_parameters: number, parameters: GObject.Parameter): T;

        /**
         * This is used to allow the backend to override the way an
         * editor page is layed out (note that editor widgets are created
         * on demand and not at startup).
         * @param type The {@link Gladeui.EditorPageType}
         * @returns A new {@link Gladeui.Editable} widget
         */
        create_editable(type: EditorPageType): Editable;

        /**
         * Creates a GladeEditorProperty to edit `def`
         * @param def The {@link Gladeui.PropertyDef} to be edited
         * @param use_command whether to use the GladeCommand interface to commit property changes
         * @returns A newly created {@link Gladeui.EditorProperty}
         */
        create_eprop(def: PropertyDef, use_command: boolean): EditorProperty;

        /**
         * Creates a {@link Gladeui.EditorProperty} to edit {@link Gladeui.PropertyDef} `name` in `adaptor`
         * @param property_id the string if of the corresponding {@link Gladeui.PropertyDef} to be edited
         * @param packing whether this refers to a packing property
         * @param use_command whether to use the GladeCommand interface to commit property changes
         * @returns A newly created {@link Gladeui.EditorProperty}
         */
        create_eprop_by_name(property_id: string, packing: boolean, use_command: boolean): EditorProperty;

        /**
         * @param construct whether to return construct params or not construct params
         * @returns A list of params for use in g_object_newv ()
         */
        default_params(construct: boolean): GObject.Parameter[];

        /**
         * Checks whether `widget` depends on `another` to be placed earlier in
         * the glade file.
         * @param widget A {@link Gladeui.Widget} of the adaptor
         * @param another another {@link Gladeui.Widget}
         * @returns whether `widget` depends on `another` being parsed first in the resulting glade file.
         */
        depends(widget: Widget, another: Widget): boolean;

        /**
         * This function is called to destroy a GObject instance.
         * @param object The object to destroy
         */
        destroy_object(object: GObject.Object): void;

        /**
         * Assumes `pspec` is a property in an object class wrapped by `adaptor`,
         * this function will search for the specific parent adaptor class which
         * originally introduced `pspec`.
         * @param pspec a {@link GObject.ParamSpec}
         * @returns the closest {@link Gladeui.WidgetAdaptor} in the ancestry to `adaptor`          which is responsable for introducing `pspec`.
         */
        from_pspec(pspec: GObject.ParamSpec): WidgetAdaptor;

        get_book(): string;

        get_catalog(): string;

        /**
         * Lists the children of `container`.
         * @param container The {@link GObject.Object} container
         * @returns A {@link Gladeui.GList} of children
         */
        get_children(container: GObject.Object): GObject.Object[];

        /**
         * @returns the name of the adaptor without `GLADE_WIDGET_ADAPTOR_INSTANTIABLE_PREFIX`
         */
        get_display_name(): string;

        get_generic_name(): string;

        get_icon_name(): string;

        /**
         * Retrieves the internal object `internal_name` from `object`
         * @param object The {@link GObject.Object}
         * @param internal_name The string identifier of the internal object
         * @returns The internal {@link GObject.Object}
         */
        get_internal_child<T = GObject.Object>(object: GObject.Object, internal_name: string): T;

        get_missing_icon(): string;

        get_name(): string;

        get_object_type(): GObject.GType;

        /**
         * Retrieves the {@link Gladeui.PropertyDef} for `name` in  `adaptor`'s child properties
         * @param name a string
         * @returns A {@link Gladeui.PropertyDef} object
         */
        get_pack_property_def(name: string): PropertyDef | null;

        /**
         * Gets the default value for `property_id` on a widget governed by
         * `child_adaptor` when parented in a widget governed by `parent_adaptor`
         * @param container_adaptor The {@link Gladeui.WidgetAdaptor} for the parent object
         * @param id The string property identifier
         * @returns a string representing the default value for `property_id`
         */
        get_packing_default(container_adaptor: WidgetAdaptor, id: string): string;

        /**
         * @returns a list of {@link Gladeui.PropertyDef}
         */
        get_packing_props(): PropertyDef[];

        /**
         * @returns the parent {@link Gladeui.WidgetAdaptor} according to `adaptor` type
         */
        get_parent_adaptor(): WidgetAdaptor;

        /**
         * @returns a list of {@link Gladeui.PropertyDef}
         */
        get_properties(): PropertyDef[];

        /**
         * Gets `value` of `property_name` on `object`.
         * @param object The {@link GObject.Object}
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         */
        get_property(object: GObject.Object, property_name: string, value: GObject.Value | any): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;

        /**
         * Retrieves the {@link Gladeui.PropertyDef} for `name` in `adaptor`
         * @param name a string
         * @returns A {@link Gladeui.PropertyDef} object
         */
        get_property_def(name: string): PropertyDef | null;

        /**
         * Looks up signal class `name` on `adaptor`.
         * @param name the name of the signal class.
         * @returns a {@link Gladeui.SignalDef} or `null`
         */
        get_signal_def(name: string): SignalDef | null;

        /**
         * @returns a list of {@link Gladeui.SignalDef}
         */
        get_signals(): SignalDef[];

        get_title(): string;

        /**
         * Get the _get_type () function name if it is set, a `null` value means that the
         * default heuristic for getting the GType is enough for both Glade and GtkBuilder.
         * @returns The _get_type () function name or `null` if none is set
         */
        get_type_func(): string | null;

        /**
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         * @returns whether `child` is infact inside `container`.
         */
        has_child(container: GObject.Object, child: GObject.Object): boolean;

        has_internal_children(): boolean;

        /**
         * Checks whether or not this adaptor has support
         * to interface with child objects.
         * @returns whether or not `adaptor` is a container
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
         * Remove an `adaptor`'s packing action.
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
         * @param object The {@link GObject.Object}
         * @param reason The {@link Gladeui.CreateReason} that `object` was created for
         */
        post_create(object: GObject.Object, reason: CreateReason): void;

        /**
         * This function is called to update load a child `widget`
         * from `node` when loading xml files (will recurse into
         * `glade_widget_read()`)
         * @param widget The {@link Gladeui.Widget}
         * @param node The {@link Gladeui.XmlNode}
         */
        read_child(widget: Widget, node: XmlNode): void;

        /**
         * This function is called to update `widget` from `node`
         * when loading xml files.
         * @param widget The {@link Gladeui.Widget}
         * @param node The {@link Gladeui.XmlNode}
         */
        read_widget(widget: Widget, node: XmlNode): void;

        /**
         * Registers `adaptor` into the Glade core (every supported
         * object type must have a registered adaptor).
         */
        register(): void;

        /**
         * Removes `child` from `container`.
         * @param container The {@link GObject.Object} container
         * @param child The {@link GObject.Object} child
         */
        remove(container: GObject.Object, child: GObject.Object): void;

        /**
         * Replaces `old_obj` with `new_obj` in `container` while positioning
         * `new_obj` where `old_obj` was and assigning it appropriate packing
         * property values.
         * @param container The {@link GObject.Object} container
         * @param old_obj The old {@link GObject.Object} child
         * @param new_obj The new {@link GObject.Object} child
         */
        replace_child(container: GObject.Object, old_obj: GObject.Object, new_obj: GObject.Object): void;

        /**
         * This delegate function is used to apply the property value on
         * the runtime object.
         * @param object The {@link GObject.Object}
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         */
        set_property(object: GObject.Object, property_name: string, value: GObject.Value | any): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;

        /**
         * For normal properties this is used to serialize
         * property values, for custom properties its still
         * needed to update the UI for undo/redo items etc.
         * @param def The {@link Gladeui.PropertyDef}
         * @param value The {@link GObject.Value} to convert to a string
         * @returns A newly allocated string representation of `value`
         */
        string_from_value(def: PropertyDef, value: GObject.Value | any): string;

        /**
         * This delegate function is always called whenever setting any
         * properties with the exception of load time, and copy/paste time
         * (basically the two places where we recreate a hierarchy that we
         * already know "works") its basically an optional backend provided
         * boundary checker for properties.
         * @param object The {@link GObject.Object}
         * @param property_name The property identifier
         * @param value The {@link GObject.Value}
         * @returns whether or not its OK to set `value` on `object`, this function will silently return TRUE if the class did not provide a verify function.
         */
        verify_property(object: GObject.Object, property_name: string, value: GObject.Value | any): boolean;

        /**
         * This function is called to write the child `widget` to `node`
         * when writing xml files (takes care of packing and recurses
         * into `glade_widget_write()`)
         * @param widget The {@link Gladeui.Widget}
         * @param context The {@link Gladeui.XmlContext}
         * @param node The {@link Gladeui.XmlNode}
         */
        write_child(widget: Widget, context: XmlContext, node: XmlNode): void;

        /**
         * This function is called to write `widget` to `node`
         * when writing xml files.
         * @param widget The {@link Gladeui.Widget}
         * @param context The {@link Gladeui.XmlContext}
         * @param node The {@link Gladeui.XmlNode}
         */
        write_widget(widget: Widget, context: XmlContext, node: XmlNode): void;

        /**
         * This function is called to write `widget` to `node`
         * when writing xml files (after writing children)
         * @param widget The {@link Gladeui.Widget}
         * @param context The {@link Gladeui.XmlContext}
         * @param node The {@link Gladeui.XmlNode}
         */
        write_widget_after(widget: Widget, context: XmlContext, node: XmlNode): void;
    }


    /**
     * @gir-type Alias
     */
    type AdaptorChooserClass = typeof AdaptorChooser;

    /**
     * @gir-type Alias
     */
    type AppClass = typeof App;

    /**
     * @gir-type Alias
     */
    type BaseEditorClass = typeof BaseEditor;

    /**
     * @gir-type Struct
     */
    abstract class Catalog {
        static $gtype: GObject.GType<Catalog>;

        // Static methods
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

        /**
         * @param name a catalog object
         */
        static is_loaded(name: string): boolean;

        /**
         * Loads all available catalogs in the system.
         * First loads catalogs from GLADE_ENV_CATALOG_PATH,
         * then from `glade_app_get_catalogs_dir()` and finally from paths specified with
         * `glade_catalog_add_path()`
         */
        static load_all(): Catalog[];

        /**
         * Remove path from the list of path to look catalogs for.
         * `null` to remove all paths.
         * @param path the new path containing catalogs or `null` to remove all of them
         */
        static remove_path(path: string | null): void;

        // Methods
        /**
         * @returns the list of widget class adaptors
         */
        get_adaptors(): WidgetAdaptor[];

        /**
         * @returns The Devhelp search domain.
         */
        get_book(): string;

        /**
         * @returns The domain to be used to translate strings from this catalog
         */
        get_domain(): string;

        /**
         * @returns The prefix for icons.
         */
        get_icon_prefix(): string;

        /**
         * @returns The catalog version
         */
        get_major_version(): number;

        /**
         * @returns The catalog minor version
         */
        get_minor_version(): number;

        /**
         * @returns The symbolic catalog name.
         */
        get_name(): string;

        /**
         * @returns The catalog path prefix.
         */
        get_prefix(): string;

        /**
         * @returns the list of suitable version targets.
         */
        get_targets(): TargetableVersion[];

        /**
         * @returns the list of widget groups (palette)
         */
        get_widget_groups(): WidgetGroup[];
    }


    /**
     * @gir-type Alias
     */
    type CellRendererIconClass = typeof CellRendererIcon;

    /**
     * @gir-type Alias
     */
    type ClipboardClass = typeof Clipboard;

    /**
     * @gir-type Alias
     */
    type CommandClass = typeof Command;

    /**
     * {@link Gladeui.Property} can be set in a list as one command,
     * for Undo purposes; we store the list of {@link Gladeui.CommandSetPropData} with
     * their old and new {@link GObject.Value}.
     * @gir-type Struct
     */
    class CommandSetPropData {
        static $gtype: GObject.GType<CommandSetPropData>;

        // Fields
        property: Property;
    }


    /**
     * @gir-type Struct
     */
    class Cursor {
        static $gtype: GObject.GType<Cursor>;

        // Fields
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

        // Static methods
        static get_add_widget_pixbuf(): GdkPixbuf.Pixbuf;

        /**
         * Initializes cursors for use with `glade_cursor_set()`.
         */
        static init(): void;

        /**
         * Sets the cursor for `window` to something appropriate based on `type`.
         * (also sets the cursor on all visible project widgets)
         * @param project 
         * @param window a {@link Gdk.Window}
         * @param type a {@link Gladeui.CursorType}
         */
        static set(project: Project, window: Gdk.Window, type: CursorType): void;
    }


    /**
     * @gir-type Alias
     */
    type DesignViewClass = typeof DesignView;

    /**
     * @gir-type Alias
     */
    type EditableInterface = typeof Editable;

    /**
     * @gir-type Alias
     */
    type EditorClass = typeof Editor;

    /**
     * @gir-type Alias
     */
    type EditorPropertyClass = typeof EditorProperty;

    /**
     * @gir-type Alias
     */
    type EditorSkeletonClass = typeof EditorSkeleton;

    /**
     * @gir-type Alias
     */
    type EditorTableClass = typeof EditorTable;

    /**
     * @gir-type Struct
     */
    abstract class IDAllocator {
        static $gtype: GObject.GType<IDAllocator>;

        // Methods
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
         * @param id the id given by `glade_id_allocator_allocate()`
         */
        release(id: number): void;
    }


    /**
     * @gir-type Alias
     */
    type InspectorClass = typeof Inspector;

    /**
     * @gir-type Struct
     */
    abstract class NameContext {
        static $gtype: GObject.GType<NameContext>;

        // Methods
        /**
         * @param name 
         */
        add_name(name: string): boolean;

        destroy(): void;

        /**
         * @param name 
         */
        has_name(name: string): boolean;

        n_names(): number;

        /**
         * @param base_name 
         */
        new_name(base_name: string): string;

        /**
         * @param name 
         */
        release_name(name: string): void;
    }


    /**
     * @gir-type Alias
     */
    type NamedIconChooserDialogClass = typeof NamedIconChooserDialog;

    /**
     * @gir-type Alias
     */
    type PaletteClass = typeof Palette;

    /**
     * @gir-type Struct
     */
    abstract class PalettePrivate {
        static $gtype: GObject.GType<PalettePrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class ParamSpecObjects {
        static $gtype: GObject.GType<ParamSpecObjects>;

        // Methods
        get_type(): GObject.GType;

        /**
         * @param type 
         */
        set_type(type: GObject.GType): void;
    }


    /**
     * @gir-type Alias
     */
    type PlaceholderClass = typeof Placeholder;

    /**
     * @gir-type Struct
     */
    abstract class PlaceholderPrivate {
        static $gtype: GObject.GType<PlaceholderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ProjectClass = typeof Project;

    /**
     * @gir-type Struct
     */
    abstract class ProjectPrivate {
        static $gtype: GObject.GType<ProjectPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PropertyClass = typeof Property;

    /**
     * @gir-type Struct
     */
    class PropertyDef {
        static $gtype: GObject.GType<PropertyDef>;

        // Constructors
        constructor(adaptor: WidgetAdaptor, id: string);

        static ["new"](adaptor: WidgetAdaptor, id: string): PropertyDef;

        static new_from_spec(adaptor: WidgetAdaptor, spec: GObject.ParamSpec): PropertyDef;

        static new_from_spec_full(adaptor: WidgetAdaptor, spec: GObject.ParamSpec, need_handle: boolean): PropertyDef;

        // Static methods
        /**
         * @param spec 
         */
        static get_default_from_spec(spec: GObject.ParamSpec): unknown;

        /**
         * @param type 
         * @param string 
         */
        static make_flags_from_string(type: GObject.GType, string: string): number;

        /**
         * This function assigns "weight" to each property in its natural order staring from 1.
         * If parent is 0 weight will be set for every {@link Gladeui.PropertyDef} in the list.
         * This function will not override weight if it is already set (weight >= 0.0)
         * @param properties a list of {@link Gladeui.PropertyDef}
         * @param parent the {@link GObject.GType} of the parent
         */
        static set_weights(properties: PropertyDef[], parent: GObject.GType): void;

        /**
         * Updates the `property_def_ref` with the contents of the node in the xml
         * file. Only the values found in the xml file are overridden.
         * @param node the property node
         * @param object_type the {@link GObject.GType} of the owning object
         * @param property_def_ref a pointer to the property class
         * @param domain the domain to translate catalog strings from
         */
        static update_from_node(node: XmlNode, object_type: GObject.GType, property_def_ref: PropertyDef | null, domain: string): [boolean, PropertyDef | null];

        // Methods
        atk(): boolean;

        /**
         * @returns a new {@link Gladeui.PropertyDef} cloned from `property_def`
         */
        clone(): PropertyDef;

        common(): boolean;

        /**
         * Compares value1 with value2 according to `property_def`.
         * @param value1 a GValue of correct type for `property_def`
         * @param value2 a GValue of correct type for `property_def`
         * @returns -1, 0 or +1, if value1 is found to be less than, equal to or greater than value2, respectively.
         */
        compare(value1: GObject.Value | any, value2: GObject.Value | any): number;

        create_type(): string;

        custom_layout(): boolean;

        deprecated(): boolean;

        deprecated_since_major(): number;

        deprecated_since_minor(): number;

        /**
         * Frees `property_def` and its associated memory.
         */
        free(): void;

        /**
         * @returns The {@link Gladeui.WidgetAdaptor} associated with the `property_def`
         */
        get_adaptor(): WidgetAdaptor;

        get_construct_only(): boolean;

        get_default(): unknown;

        get_ignore(): boolean;

        get_is_packing(): boolean;

        get_name(): string;

        get_original_default(): unknown;

        /**
         * @returns The {@link GObject.ParamSpec} associated with the `property_def`
         */
        get_pspec(): GObject.ParamSpec;

        get_tooltip(): string;

        get_virtual(): boolean;

        id(): string;

        /**
         * @returns whether or not this is an object property that refers to another object in this project.
         */
        is_object(): boolean;

        /**
         * @returns whether or not to show this property in the editor
         */
        is_visible(): boolean;

        load_defaults_from_spec(): void;

        /**
         * Creates and appropriate GtkAdjustment for use in the editor
         * @returns An appropriate {@link Gtk.Adjustment} for use in the Property editor
         */
        make_adjustment(): Gtk.Adjustment;

        /**
         * @param string a string representation of this property
         * @param project the {@link Gladeui.Project} that the property should be resolved for
         * @returns A {@link GObject.Value} created based on the `property_def`          and `string` criteria.
         */
        make_gvalue_from_string(string: string, project: Project): unknown;

        /**
         * @param value A {@link GObject.Value}
         * @returns A newly allocated string representation of `value`
         */
        make_string_from_gvalue(value: GObject.Value | any): string;

        /**
         * @param comp a {@link Gladeui.PropertyDef}
         * @returns whether `property_def` and `comp` are a match or not          (properties in separate descendant hierarchies that           have the same name are not matches).
         */
        match(comp: PropertyDef): boolean;

        multiline(): boolean;

        needs_sync(): boolean;

        optional(): boolean;

        optional_default(): boolean;

        parentless_widget(): boolean;

        query(): boolean;

        save(): boolean;

        save_always(): boolean;

        /**
         * @param adaptor A {@link Gladeui.WidgetAdaptor}
         */
        set_adaptor(adaptor: WidgetAdaptor): void;

        /**
         * @param construct_only 
         */
        set_construct_only(construct_only: boolean): void;

        /**
         * @param ignore 
         */
        set_ignore(ignore: boolean): void;

        /**
         * @param is_packing 
         */
        set_is_packing(is_packing: boolean): void;

        /**
         * @param name 
         */
        set_name(name: string): void;

        /**
         * @param pspec A {@link GObject.ParamSpec}
         */
        set_pspec(pspec: GObject.ParamSpec): void;

        /**
         * @param tooltip 
         */
        set_tooltip(tooltip: string): void;

        /**
         * @param value 
         */
        set_virtual(value: boolean): void;

        since_major(): number;

        since_minor(): number;

        stock(): boolean;

        stock_icon(): boolean;

        themed_icon(): boolean;

        transfer_on_paste(): boolean;

        translatable(): boolean;

        /**
         * @param value a GValue of correct type for `property_def`
         * @returns Whether `value` for this `property_def` is voided; a voided value          can be a `null` value for boxed or object type param specs.
         */
        void_value(value: GObject.Value | any): boolean;

        weight(): number;
    }


    /**
     * @gir-type Alias
     */
    type PropertyLabelClass = typeof PropertyLabel;

    /**
     * @gir-type Struct
     */
    abstract class PropertyLabelPrivate {
        static $gtype: GObject.GType<PropertyLabelPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class PropertyPrivate {
        static $gtype: GObject.GType<PropertyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PropertyShellClass = typeof PropertyShell;

    /**
     * @gir-type Struct
     */
    abstract class PropertyShellPrivate {
        static $gtype: GObject.GType<PropertyShellPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SignalClass = typeof Signal;

    /**
     * @gir-type Struct
     */
    class SignalDef {
        static $gtype: GObject.GType<SignalDef>;

        // Constructors
        constructor(adaptor: WidgetAdaptor, for_type: GObject.GType, signal_id: number);

        static ["new"](adaptor: WidgetAdaptor, for_type: GObject.GType, signal_id: number): SignalDef;

        // Methods
        /**
         * Clones a {@link Gladeui.SignalDef}
         * @returns a new copy of `signal_def`
         */
        clone(): SignalDef;

        /**
         * Get if the signal is flagged as deprecated.
         * @returns `true` if the signal is deprecated
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
         * Frees a {@link Gladeui.SignalDef}
         */
        free(): void;

        /**
         * Get {@link Gladeui.WidgetAdaptor} associated with the signal.
         * @returns a {@link Gladeui.WidgetAdaptor}
         */
        get_adaptor(): WidgetAdaptor;

        /**
         * Get the combination of GSignalFlags specifying detail of when the default
         * handler is to be invoked.
         * @returns the {@link GObject.SignalFlags}
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
         * @param deprecated `true` if the signal is deprecated
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

        /**
         * @param node 
         * @param domain 
         */
        update_from_node(node: XmlNode, domain: string): void;
    }


    /**
     * @gir-type Alias
     */
    type SignalEditorClass = typeof SignalEditor;

    /**
     * @gir-type Alias
     */
    type SignalModelClass = typeof SignalModel;

    /**
     * @gir-type Struct
     */
    abstract class SignalModelPrivate {
        static $gtype: GObject.GType<SignalModelPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class SignalPrivate {
        static $gtype: GObject.GType<SignalPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class TargetableVersion {
        static $gtype: GObject.GType<TargetableVersion>;

        // Fields
        major: number;

        minor: number;

        // Constructors

        constructor(properties?: Partial<{
            major: number;
            minor: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type WidgetActionClass = typeof WidgetAction;

    /**
     * @gir-type Struct
     */
    class WidgetActionDef {
        static $gtype: GObject.GType<WidgetActionDef>;

        // Fields
        id: string;

        path: string;

        label: string;

        stock: string;

        important: boolean;

        actions: null[];

        // Constructors

        constructor(properties?: Partial<{
            id: string;
            path: string;
            label: string;
            stock: string;
            important: boolean;
        }>);

        static ["new"](path: string): WidgetActionDef;

        // Methods
        /**
         * @returns a newly allocated copy of `action`.
         */
        clone(): WidgetActionDef;

        /**
         * Frees a GladeWidgetActionDef.
         */
        free(): void;

        /**
         * @param important 
         */
        set_important(important: boolean): void;

        /**
         * @param label 
         */
        set_label(label: string): void;

        /**
         * @param stock 
         */
        set_stock(stock: string): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class WidgetActionPrivate {
        static $gtype: GObject.GType<WidgetActionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WidgetAdaptorClass = typeof WidgetAdaptor;

    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;

    /**
     * @gir-type Struct
     */
    abstract class WidgetGroup {
        static $gtype: GObject.GType<WidgetGroup>;

        // Methods
        /**
         * @returns a list of class adaptors in the palette
         */
        get_adaptors(): WidgetAdaptor[];

        /**
         * @returns Whether group is expanded in the palette
         */
        get_expanded(): boolean;

        /**
         * @returns the widget group name
         */
        get_name(): string;

        /**
         * @returns the widget group name used in the palette
         */
        get_title(): string;
    }


    /**
     * @gir-type Struct
     */
    abstract class WidgetPrivate {
        static $gtype: GObject.GType<WidgetPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class XmlContext {
        static $gtype: GObject.GType<XmlContext>;

        // Constructors
        constructor(doc: XmlDoc, name_space: string | null);

        static ["new"](doc: XmlDoc, name_space: string | null): XmlContext;

        static new_from_path(full_path: string, nspace: string | null, root_name: string | null): XmlContext;

        // Methods
        /**
         * @returns a copy of the given {@link Gladeui.XmlContext}
         */
        copy(): XmlContext;

        /**
         * Frees the memory allocated by {@link Gladeui.XmlContext}.
         */
        free(): void;

        /**
         * Get the {@link Gladeui.XmlDoc} this `context` refers to.
         * @returns the {@link Gladeui.XmlDoc} that the `context` refers to
         */
        get_doc(): XmlDoc;
    }


    /**
     * @gir-type Struct
     */
    class XmlDoc {
        static $gtype: GObject.GType<XmlDoc>;

        // Constructors
        constructor(properties?: Partial<{}>);

        static ["new"](): XmlDoc;

        // Methods
        /**
         * @returns the {@link Gladeui.XmlNode} that is the document root of `doc`
         */
        get_root(): XmlNode;

        /**
         * @param comment 
         */
        new_comment(comment: string): XmlNode;

        /**
         * Increases the reference of the {@link Gladeui.XmlDoc}.
         * @returns the given {@link Gladeui.XmlDoc}
         */
        ref(): XmlDoc;

        /**
         * @param full_path 
         */
        save(full_path: string): number;

        /**
         * @param node 
         */
        set_root(node: XmlNode): void;

        /**
         * Decreases the reference of the {@link Gladeui.XmlDoc}.
         */
        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    class XmlNode {
        static $gtype: GObject.GType<XmlNode>;

        // Constructors
        constructor(context: XmlContext, name: string);

        static ["new"](context: XmlContext, name: string): XmlNode;

        static new_comment(context: XmlContext, comment: string): XmlNode;

        // Methods
        /**
         * @param new_node 
         */
        add_next_sibling(new_node: XmlNode): XmlNode;

        /**
         * @param new_node 
         */
        add_prev_sibling(new_node: XmlNode): XmlNode;

        /**
         * @param child 
         */
        append_child(child: XmlNode): void;

        copy(): XmlNode;

        ["delete"](): void;

        get_children(): XmlNode;

        get_children_with_comments(): XmlNode;

        get_name(): string;

        get_parent(): XmlNode;

        is_comment(): boolean;

        next(): XmlNode;

        next_with_comments(): XmlNode;

        prev_with_comments(): XmlNode;

        remove(): void;

        /**
         * @param name 
         * @param value 
         */
        set_property_boolean(name: string, value: boolean): void;

        /**
         * Set a property as a string in the `node_in`. Note that `null` `string` value
         * Are simply ignored and not written in the XML.
         * @param name the name of the property to set
         * @param string the string value of the property to set
         */
        set_property_string(name: string, string: string | null): void;

        /**
         * This is a wrapper around `glade_xml_node_verify_silent()`, only it emits
         * a `g_warning()` if `node_in` has a name different than `name`.
         * @param name a string
         * @returns `true` if `node_in`'s name is equal to `name`, `false` otherwise
         */
        verify(name: string): boolean;

        /**
         * @param name a string
         * @returns `true` if `node_in`'s name is equal to `name`, `false` otherwise
         */
        verify_silent(name: string): boolean;
    }


    namespace Editable {
        /**
         * Interface for implementing Editable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Loads `widget` property values into `editable`
             * (the editable will watch the widgets properties
             * until its loaded with another widget or `null`)
             * @param widget the {@link Gladeui.Widget} to load
             * @virtual
             */
            vfunc_load(widget: Widget): void;

            /**
             * This only applies for the general page in the property
             * editor, editables that embed the {@link Gladeui.EditorTable} implementation
             * for the general page should use this to forward the message
             * to its embedded editable.
             * @param show_name Whether or not to show the name entry
             * @virtual
             */
            vfunc_set_show_name(show_name: boolean): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {}
    }

    export interface EditableNamespace {
        $gtype: GObject.GType<Editable>;
        prototype: Editable;
    }
    /**
     * @gir-type Interface
     */
    interface Editable extends Gtk.Widget, Editable.Interface {

        // Methods
        block(): void;

        /**
         * Loads `widget` property values into `editable`
         * (the editable will watch the widgets properties
         * until its loaded with another widget or `null`)
         * @param widget the {@link Gladeui.Widget} to load
         */
        load(widget: Widget): void;

        /**
         * @returns a {@link Gladeui.Widget} or `null` if the editable hasn't been loaded
         */
        loaded_widget(): Widget | null;

        loading(): boolean;

        /**
         * This only applies for the general page in the property
         * editor, editables that embed the {@link Gladeui.EditorTable} implementation
         * for the general page should use this to forward the message
         * to its embedded editable.
         * @param show_name Whether or not to show the name entry
         */
        set_show_name(show_name: boolean): void;

        unblock(): void;
    }


    export const Editable: EditableNamespace & {
        new (): Editable; // This allows `obj instanceof Editable`
    };

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
