/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gcrui-3-ambient.d.ts';
import './gcrui-3-import.d.ts';
/**
 * GcrUi-3
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
import type Gcr from '@girs/gcr-3';
import type Gck from '@girs/gck-1';

export namespace GcrUi {
    /**
     * If a [class`CollectionModel]` is created with a mode of
     * %GCR_COLLECTION_MODEL_TREE, then any included objects that are themselves a
     * [iface`Gcr`.Collection], will have all child
     * objects include as child rows in a tree form.
     */
    enum CollectionModelMode {
        /**
         * only objects in the top collection, no child objects
         */
        LIST,
        /**
         * show objects in the collection, and child objects in a tree form
         */
        TREE,
    }
    /**
     * Create and initialize a renderer for the given attributes and label. These
     * renderers should have been preregistered via gcr_renderer_register().
     * @param label The label for the renderer
     * @param attrs The attributes to render
     * @returns a new renderer, or %NULL if no renderer          matched the attributes; the render should be released with g_object_unref()
     */
    function renderer_create(label: string | null, attrs: Gck.Attributes): Renderer | null;
    /**
     * Register a renderer to be created when matching attributes are passed to
     * gcr_renderer_create().
     * @param renderer_type The renderer class type
     * @param attrs The attributes to match
     */
    function renderer_register(renderer_type: GObject.GType, attrs: Gck.Attributes): void;
    /**
     * Register all the well known renderers for certificates and keys known to the
     * Gcr library.
     */
    function renderer_register_well_known(): void;
    /**
     * Get an implementation of #GcrViewer that supports a view
     * of multiple renderers.
     * @returns a newly allocated #GcrViewer, which should be          released with g_object_unref()
     */
    function viewer_new(): Viewer;
    /**
     * Get an implementation of #GcrViewer that supports a scrolled view
     * of multiple renderers.
     * @returns a #GcrViewer which is also a #GtkWidget
     */
    function viewer_new_scrolled(): Viewer;
    module CertificateRenderer {
        // Constructor properties interface
    }

    /**
     * An implementation of #GcrRenderer which renders certificates.
     */
    class CertificateRenderer extends GObject.Object {
        // Own properties of GcrUi-3.CertificateRenderer

        /**
         * The certificate attributes to display. One of the attributes must be
         * a CKA_VALUE type attribute which contains a DER encoded certificate.
         */
        attributes: Gck.Attributes;
        /**
         * The certificate to display. May be %NULL.
         */
        certificate: Gcr.Certificate;
        /**
         * The label to display.
         */
        label: string;

        // Constructors of GcrUi-3.CertificateRenderer

        static ['new'](certificate: Gcr.Certificate): CertificateRenderer;

        static new_for_attributes(label?: string | null, attrs?: any | null): CertificateRenderer;

        // Owm methods of GcrUi-3.CertificateRenderer

        /**
         * Get the certificate displayed in the renderer. If no certificate was
         * explicitly set, then the renderer will return itself since it acts as
         * a valid certificate.
         * @returns The certificate, owned by the renderer.
         */
        get_certificate(): Gcr.Certificate;
        /**
         * Set a certificate to display in the renderer.
         * @param certificate the certificate to display
         */
        set_certificate(certificate?: Gcr.Certificate | null): void;
    }

    module CertificateWidget {
        // Constructor properties interface
    }

    /**
     * A widget that can be used to display a certificate.
     *
     * A certificate widget is normally in a collapsed state showing only
     * details, but can be expanded by the user.
     *
     * Use [ctor`CertificateWidget`.new] to create a new certificate widget. Only
     * one certificate can be displayed. It contains a [iface`Viewer]` internally
     * and [class`CertificateRenderer]` is used to render the certificate to the
     * viewer.
     *
     * To show more than one certificate in a view, create the viewer and
     * add renderers to it.
     */
    class CertificateWidget extends Gtk.Bin {
        // Own properties of GcrUi-3.CertificateWidget

        attributes: Gck.Attributes;
        certificate: Gcr.Certificate;

        // Constructors of GcrUi-3.CertificateWidget

        static ['new'](certificate?: Gcr.Certificate | null): CertificateWidget;

        // Owm methods of GcrUi-3.CertificateWidget

        /**
         * Get the attributes displayed in the widget. The attributes should contain
         * a certificate.
         * @returns the attributes, owned by the widget
         */
        get_attributes(): Gck.Attributes | null;
        /**
         * Get the certificate displayed in the widget.
         * @returns the certificate
         */
        get_certificate(): Gcr.Certificate | null;
        /**
         * Set the attributes displayed in the widget. The attributes should contain
         * a certificate.
         * @param attrs the attributes to display
         */
        set_attributes(attrs?: Gck.Attributes | null): void;
        /**
         * Set the certificate displayed in the widget
         * @param certificate the certificate to display
         */
        set_certificate(certificate?: Gcr.Certificate | null): void;
    }

    module CollectionModel {
        // Constructor properties interface
    }

    /**
     * Ain implementation of a [iface`Gtk`.TreeModel] which contains a row for each
     * object in a [iface`Gcr`.Collection].
     *
     * As objects are added or removed from the collection, rows are added and
     * removed from this model.
     *
     * The row values come from the properties of the objects in the collection. Use
     * [ctor`CollectionModel`.new] to create a new collection model. To have more
     * control over the values use a set of [struct`Gcr`.Column] structures to
     * define the columns. This can be done with [ctor`CollectionModel`.new_full] or
     * [method`CollectionModel`.set_columns].
     *
     * Each row can have a selected state, which is represented by a boolean column.
     * The selected state can be toggled with gcr_collection_model_toggle_selected()
     * or set with gcr_collection_model_set_selected_objects() and retrieved with
     * [method`CollectionModel`.get_selected_objects].
     *
     * To determine which object a row represents and vice versa, use the
     * [method`CollectionModel`.iter_for_object] or
     * [method`CollectionModel`.object_for_iter] functions.
     */
    class CollectionModel extends GObject.Object {
        // Own properties of GcrUi-3.CollectionModel

        collection: Gcr.Collection;
        columns: any;

        // Owm methods of GcrUi-3.CollectionModel

        /**
         * Set whether a given row is toggled selected or not.
         * @param iter The row
         * @param selected Whether the row should be selected or not.
         */
        change_selected(iter: Gtk.TreeIter, selected: boolean): void;
        /**
         * Get the column identifier for the column that contains the values
         * of the selected state.
         * @returns The column identifier.
         */
        column_for_selected(): number;
        /**
         * Get the collection which this model represents
         * @returns the collection, owned by the model
         */
        get_collection(): Gcr.Collection;
        /**
         * Get a list of checked/selected objects.
         * @returns a list of selected          objects, which should be freed with g_list_free()
         */
        get_selected_objects(): GObject.Object[];
        /**
         * Check whether a given row has been toggled as selected.
         * @param iter The row
         * @returns Whether the row has been selected.
         */
        is_selected(iter: Gtk.TreeIter): boolean;
        /**
         * Set `iter` to the row for the given object. If the object is not in this
         * model, then %FALSE will be returned.
         * @param object The object
         * @param iter The row for the object
         * @returns %TRUE if the object was present.
         */
        iter_for_object(object: GObject.Object, iter: Gtk.TreeIter): boolean;
        /**
         * Get the object that is represented by the given row in the model.
         * @param iter The row
         * @returns The object, owned by the model.
         */
        object_for_iter<T = GObject.Object>(iter: Gtk.TreeIter): T;
        /**
         * Set the collection which this model represents
         * @param collection the collection or %NULL
         */
        set_collection(collection?: Gcr.Collection | null): void;
        /**
         * Set the checked/selected objects.
         * @param selected a list of objects to select
         */
        set_selected_objects(selected: GObject.Object[]): void;
        /**
         * Toggle the selected state of a given row.
         * @param iter The row
         */
        toggle_selected(iter: Gtk.TreeIter): void;
    }

    module ComboSelector {
        // Constructor properties interface
    }

    /**
     * A widget that can be used to select a certificate or key. It allows
     * the user to select one object from the selector at a time.
     */
    class ComboSelector extends Gtk.ComboBox {
        // Own properties of GcrUi-3.ComboSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection: Gcr.Collection;

        // Constructors of GcrUi-3.ComboSelector

        static ['new'](collection: Gcr.Collection): ComboSelector;

        // Owm methods of GcrUi-3.ComboSelector

        /**
         * Get the collection that this selector is displaying objects from.
         * @returns The collection, owned by the selector.
         */
        get_collection(): Gcr.Collection;
        /**
         * Get the selected object in the selector, or %NULL if nothing selected.
         * @returns the selected object, owned by the selector, or %NULL
         */
        get_selected<T = GObject.Object>(): T;
        /**
         * Set the currently selected object in the selector, or clear the selection
         * if selected is set to %NULL.
         * @param selected the object to select or %NULL
         */
        set_selected(selected?: GObject.Object | null): void;
    }

    module FailureRenderer {
        // Constructor properties interface
    }

    /**
     * A renderer that can be used for unsupported data.
     */
    class FailureRenderer extends GObject.Object {
        // Own properties of GcrUi-3.FailureRenderer

        attributes: Gck.Attributes;
        label: string;

        // Constructors of GcrUi-3.FailureRenderer

        static ['new'](label: string | null, error: GLib.Error): FailureRenderer;

        // Owm methods of GcrUi-3.FailureRenderer

        /**
         * Create a new renderer for unsupported data.
         * @param label the label for the failure
         */
        static new_unsupported(label: string): Renderer;
    }

    module ImportButton {
        // Signal callback interfaces

        interface Imported {
            (importer: GObject.Object, error: GLib.Error): void;
        }

        interface Importing {
            (importer: GObject.Object): void;
        }

        // Constructor properties interface
    }

    /**
     * A button which imports keys and certificates.
     *
     * The import button shows a spinner when the button is activated. When more
     * than one importer is available, it shows a drop down to select which to
     * import to.
     */
    class ImportButton extends Gtk.Button {
        // Constructors of GcrUi-3.ImportButton

        static ['new'](label?: string | null): ImportButton;

        // Owm methods of GcrUi-3.ImportButton

        /**
         * Queue an item to import via the button
         * @param parsed a parsed item
         */
        add_parsed(parsed: Gcr.Parsed): void;
    }

    module KeyRenderer {
        // Constructor properties interface
    }

    /**
     * An implementation of #GcrRenderer which renders keys.
     */
    class KeyRenderer extends GObject.Object {
        // Own properties of GcrUi-3.KeyRenderer

        object: Gck.Object;

        // Constructors of GcrUi-3.KeyRenderer

        static ['new'](label?: string | null, attrs?: Gck.Attributes | null): KeyRenderer;

        // Owm methods of GcrUi-3.KeyRenderer

        /**
         * Get the attributes displayed in the renderer.
         * @returns the attributes, owned by the renderer
         */
        get_attributes(): Gck.Attributes | null;
        /**
         * Get the attributes displayed in the renderer. The attributes should represent
         * either an RSA, DSA, or EC key in PKCS#11 style.
         * @param attrs the attributes to display
         */
        set_attributes(attrs?: Gck.Attributes | null): void;
    }

    module KeyWidget {
        // Constructor properties interface
    }

    /**
     * A key widget and renderer
     *
     * A key widget can be used to display a RSA, DSA or EC key. The widget is
     * normally in a collapsed state showing only details, but can be expanded by
     * the user.
     *
     * Use [ctor`KeyWidget`.new] to create a new key widget. Only one key can be
     * displayed. A key widget contains a [iface`Viewer]` internally and
     * [class`KeyRenderer]` is used to render the key to the viewer. To show more
     * than one key in a view, create the viewer and add renderers to it.
     */
    class KeyWidget extends Gtk.Bin {
        // Own properties of GcrUi-3.KeyWidget

        attributes: Gck.Attributes;

        // Constructors of GcrUi-3.KeyWidget

        static ['new'](attrs?: Gck.Attributes | null): KeyWidget;

        // Owm methods of GcrUi-3.KeyWidget

        /**
         * Get the attributes displayed in the widget.
         * @returns The attributes, owned by the widget.
         */
        get_attributes(): Gck.Attributes | null;
        /**
         * Get the attributes displayed in the widget. The attributes should represent
         * either an RSA, DSA or EC key in PKCS#11 style.
         * @param attrs the attributes to display
         */
        set_attributes(attrs?: Gck.Attributes | null): void;
    }

    module ListSelector {
        // Constructor properties interface
    }

    /**
     * A selector widget to select 1 or more certificates or keys from a list.
     *
     * Live search is available for quick filtering.
     */
    class ListSelector extends Gtk.TreeView {
        // Own properties of GcrUi-3.ListSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection: Gcr.Collection;

        // Constructors of GcrUi-3.ListSelector

        static ['new'](collection: Gcr.Collection): ListSelector;

        // Owm methods of GcrUi-3.ListSelector

        /**
         * Get the collection that this selector is displaying objects from.
         * @returns The collection, owned by the selector.
         */
        get_collection(): Gcr.Collection;
        /**
         * Get a list of selected objects.
         * @returns the list of          selected objects, to be released with g_list_free()
         */
        get_selected(): GObject.Object[];
        /**
         * Select certain objects in the selector.
         * @param selected the list of objects to select
         */
        set_selected(selected: GObject.Object[]): void;
    }

    module PromptDialog {
        // Constructor properties interface
    }

    /**
     * A [iface`Gcr`.Prompt] implementation which shows a GTK dialog. The dialog
     * will remain visible (but insensitive) between prompts. If the user cancels
     * the dialog between prompts, then the dialog will be hidden.
     */
    class PromptDialog extends Gtk.Dialog {
        // Own properties of GcrUi-3.PromptDialog

        /**
         * Whether the choice check box is visible or not.
         */
        readonly choice_visible: boolean;
        /**
         * Whether the choice check box is visible or not.
         */
        readonly choiceVisible: boolean;
        /**
         * Whether the password confirm entry is visible or not.
         */
        readonly confirm_visible: boolean;
        /**
         * Whether the password confirm entry is visible or not.
         */
        readonly confirmVisible: boolean;
        /**
         * Whether the password entry is visible or not.
         */
        readonly password_visible: boolean;
        /**
         * Whether the password entry is visible or not.
         */
        readonly passwordVisible: boolean;
        /**
         * Whether the warning label is visible or not.
         */
        readonly warning_visible: boolean;
        /**
         * Whether the warning label is visible or not.
         */
        readonly warningVisible: boolean;
    }

    module SecureEntryBuffer {
        // Constructor properties interface
    }

    /**
     * A [class`Gtk`.EntryBuffer] that uses non-pageable memory.
     *
     * It's good practice to try to keep passwords or sensitive secrets out of
     * pageable memory whenever possible, so that they don't get written to disk.
     *
     * A [class`SecureEntryBuffer]` is a [class`Gtk`.EntryBuffer] to be used with
     * [class`Gtk`.Entry] which uses non-pageable memory to store a password placed
     * in the entry. In order to make any sense at all, the entry must have it's
     * visibility turned off, and just be displaying place holder characters for
     * the text. That is, a password style entry.
     *
     * Use [ctor`Gtk`.Entry.new_with_buffer] or [method`Gtk`.Entry.set_buffer] to set this buffer
     * on an entry.
     */
    class SecureEntryBuffer extends Gtk.EntryBuffer {
        // Constructors of GcrUi-3.SecureEntryBuffer

        static ['new'](): SecureEntryBuffer;
    }

    module TreeSelector {
        // Constructor properties interface
    }

    /**
     * A tree selector can be used to select certificates or keys. It allows
     * the user to select multiple objects from a tree.
     */
    class TreeSelector extends Gtk.TreeView {
        // Own properties of GcrUi-3.TreeSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection: Gcr.Collection;
        /**
         * The columns to use to display the objects.
         */
        columns: any;

        // Owm methods of GcrUi-3.TreeSelector

        /**
         * Get the collection that this selector is displaying objects from.
         * @returns the collection, owned by the selector
         */
        get_collection(): Gcr.Collection;
        /**
         * Get a list of selected objects.
         * @returns the list of selected          objects, to be released with g_list_free()
         */
        get_selected(): GObject.Object[];
        /**
         * Select certain objects in the selector.
         * @param selected the list of objects to select
         */
        set_selected(selected: GObject.Object[]): void;
    }

    module UnlockOptionsWidget {
        // Constructor properties interface
    }

    /**
     * This widget displays a set of unlock options for the user to select.
     *
     * The user can choose between keeping caching the unlock indefinitely, or for
     * a given amount of time.
     *
     * Each option has a different name, for example #GCR_UNLOCK_OPTION_ALWAYS. These
     * names are used together with the various functions like
     * [method`UnlockOptionsWidget`.get_choice].
     */
    class UnlockOptionsWidget extends Gtk.Bin {
        // Own properties of GcrUi-3.UnlockOptionsWidget

        choice: string;
        ttl: number;

        // Constructors of GcrUi-3.UnlockOptionsWidget

        static ['new'](): UnlockOptionsWidget;

        // Owm methods of GcrUi-3.UnlockOptionsWidget

        /**
         * Get the currently selected option, like %GCR_UNLOCK_OPTION_ALWAYS.
         * @returns The currently selected option name.
         */
        get_choice(): string;
        /**
         * Get the label for one of the options. Use an option name like
         * %GCR_UNLOCK_OPTION_ALWAYS.
         * @param option The option name
         * @returns The current label for the option.
         */
        get_label(option: string): string;
        /**
         * Get the sensitivity state for one of the options. Use an option name like
         * %GCR_UNLOCK_OPTION_ALWAYS.
         * @param option The option name
         * @returns Whether the option is sensitive or not.
         */
        get_sensitive(option: string): boolean;
        /**
         * Get the timeout setting set for unlock options that have a timeout.
         * This will also return a valid value if the currently selected option
         * does not have a timeout.
         * @returns The unlock timeout in seconds.
         */
        get_ttl(): number;
        /**
         * Set the currently selected option. Use an option name like
         * %GCR_UNLOCK_OPTION_ALWAYS.
         * @param option The option name
         */
        set_choice(option: string): void;
        /**
         * Set the label for one of the options. Use an option name like
         * %GCR_UNLOCK_OPTION_ALWAYS.
         * @param option The option name
         * @param text The new label
         */
        set_label(option: string, text: string): void;
        /**
         * Set the sensitivity state for one of the options. Use an option name like
         * %GCR_UNLOCK_OPTION_ALWAYS. The reason will be displayed as a tooltip.
         * @param option The option name
         * @param sensitive The sensitivity state.
         * @param reason A user displayable string which contains the reason for the sensitivity.
         */
        set_sensitive(option: string, sensitive: boolean, reason: string): void;
        /**
         * Set the current setting for the timeout. This can be set even when the
         * currently selected option does not have a timeout.
         * @param ttl The timeout to set, in seconds
         */
        set_ttl(ttl: number): void;
    }

    module ViewerWidget {
        // Signal callback interfaces

        interface Added {
            (renderer: Renderer, parsed: Gcr.Parsed): void;
        }

        // Constructor properties interface
    }

    /**
     * A viewer widget which can display certificates and keys that are
     * located in files.
     */
    class ViewerWidget extends Gtk.Box {
        // Own properties of GcrUi-3.ViewerWidget

        /**
         * Display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         *
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         */
        display_name: string;
        /**
         * Display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         *
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         */
        displayName: string;
        /**
         * The parser used to parse loaded data into viewable items.
         */
        readonly parser: Gcr.Parser;

        // Constructors of GcrUi-3.ViewerWidget

        static ['new'](): ViewerWidget;

        // Owm methods of GcrUi-3.ViewerWidget

        /**
         * Clear the error displayed on the viewer widget.
         */
        clear_error(): void;
        /**
         * Get the display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         *
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         * @returns the display name
         */
        get_display_name(): string;
        /**
         * Get the parser used to parse loaded data into viewable items.
         * @returns the parser
         */
        get_parser(): Gcr.Parser;
        /**
         * Get the viewer used to display the viewable items.
         * @returns the viewer
         */
        get_viewer(): Viewer;
        /**
         * Parse and load some data to be displayed into the viewer widgets. The data
         * may contain multiple parseable items if the format can contain multiple
         * items.
         * @param display_name label for the loaded data
         * @param data data to load
         */
        load_bytes(display_name: string | null, data: GLib.Bytes): void;
        /**
         * Parse and load some data to be displayed into the viewer widgets. The data
         * may contain multiple parseable items if the format can contain multiple
         * items.
         *
         * This function will copy the data. Use [method`ViewerWidget`.load_bytes] to avoid
         * copying the data.
         * @param display_name label for the loaded data
         * @param data data to load
         */
        load_data(display_name: string | null, data: Uint8Array): void;
        /**
         * Display contents of a file in the viewer widget. Multiple files can
         * be loaded.
         * @param file a file to load
         */
        load_file(file: Gio.File): void;
        /**
         * Set the display name for data being displayed. Once explicitly
         * set it will no longer be calculated automatically by loading data.
         *
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         * @param display_name the display name
         */
        set_display_name(display_name: string): void;
        /**
         * Show an error on the viewer widget. This is displayed on a info bar near
         * the edge of the widget.
         * @param message descriptive error message
         * @param error detailed error
         */
        show_error(message: string, error?: GLib.Error | null): void;
    }

    /**
     * The class for #GcrCertificateRenderer.
     */
    class CertificateRendererClass {}

    class CertificateRendererPrivate {}

    class CertificateWidgetClass {}

    class CertificateWidgetPrivate {}

    /**
     * The class for #GcrCollectionModel.
     */
    class CollectionModelClass {}

    class CollectionModelPrivate {}

    class ComboSelectorClass {}

    class ComboSelectorPrivate {}

    class FailureRendererClass {}

    class FailureRendererPrivate {}

    /**
     * Class struct for [class`ImportButton]`.
     */
    class ImportButtonClass {}

    class ImportButtonPrivate {}

    /**
     * The class for #GcrKeyRenderer.
     */
    class KeyRendererClass {}

    class KeyRendererPrivate {}

    class KeyWidgetClass {}

    class KeyWidgetPrivate {}

    class ListSelectorClass {}

    class ListSelectorPrivate {}

    class PromptDialogClass {}

    class PromptDialogPrivate {}

    /**
     * The interface for #GcrRenderer
     */
    class RendererIface {}

    class SecureEntryBufferClass {}

    class SecureEntryBufferPrivate {}

    class TreeSelectorClass {}

    class TreeSelectorPrivate {}

    class UnlockOptionsWidgetClass {}

    class UnlockOptionsWidgetPrivate {}

    /**
     * The interface for #GcrViewer
     */
    class ViewerIface {}

    class ViewerWidgetClass {}

    interface Renderer {
        // Own properties of GcrUi-3.Renderer

        /**
         * The attributes to display.
         */
        attributes: Gck.Attributes;
        /**
         * The label to display.
         */
        label: string;

        // Owm methods of GcrUi-3.Renderer

        /**
         * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
         * renderer implementations.
         */
        emit_data_changed(): void;
        /**
         * Get the PKCS#11 attributes, if any, set for this renderer to display.
         * @returns the attributes, owned by the renderer
         */
        get_attributes(): Gck.Attributes | null;
        /**
         * Called by #GcrViewer when about to display a popup menu for the content
         * displayed by the renderer. The renderer can add a menu item if desired.
         * @param viewer The viewer that is displaying a popup
         * @param menu The popup menu being displayed
         */
        popuplate_popup(viewer: Viewer, menu: Gtk.Menu): void;
        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         */
        render_view(viewer: Viewer): void;
        /**
         * Set the PKCS#11 attributes for this renderer to display.
         * @param attrs attributes to set
         */
        set_attributes(attrs?: Gck.Attributes | null): void;

        // Own virtual methods of GcrUi-3.Renderer

        vfunc_data_changed(): void;
        vfunc_populate_popup(viewer: Viewer, menu: Gtk.Menu): void;
        /**
         * Render the contents of the renderer to the given viewer.
         * @param viewer The viewer to render to.
         */
        vfunc_render_view(viewer: Viewer): void;
    }

    interface Viewer {
        // Owm methods of GcrUi-3.Viewer

        /**
         * Add a renderer to this viewer.
         * @param renderer The renderer to add
         */
        add_renderer(renderer: Renderer): void;
        /**
         * Get the number of renderers present in the viewer.
         * @returns The number of renderers.
         */
        count_renderers(): number;
        /**
         * Get a pointer to the renderer at the given index. It is an error to request
         * an index that is out of bounds.
         * @param index_ The index of the renderer to get
         * @returns the render, owned by the viewer
         */
        get_renderer(index_: number): Renderer;
        /**
         * Insert a renderer at a specific point in the viewer
         * @param renderer the renderer to insert
         * @param before the renderer to insert before
         */
        insert_renderer(renderer: Renderer, before?: Renderer | null): void;
        /**
         * Remove a renderer from this viewer.
         * @param renderer The renderer to remove
         */
        remove_renderer(renderer: Renderer): void;

        // Own virtual methods of GcrUi-3.Viewer

        /**
         * Add a renderer to this viewer.
         * @param renderer The renderer to add
         */
        vfunc_add_renderer(renderer: Renderer): void;
        /**
         * Get the number of renderers present in the viewer.
         */
        vfunc_count_renderers(): number;
        /**
         * Get a pointer to the renderer at the given index. It is an error to request
         * an index that is out of bounds.
         * @param index_ The index of the renderer to get
         */
        vfunc_get_renderer(index_: number): Renderer;
        /**
         * Insert a renderer at a specific point in the viewer
         * @param renderer the renderer to insert
         * @param before the renderer to insert before
         */
        vfunc_insert_renderer(renderer: Renderer, before?: Renderer | null): void;
        /**
         * Remove a renderer from this viewer.
         * @param renderer The renderer to remove
         */
        vfunc_remove_renderer(renderer: Renderer): void;
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

export default GcrUi;
// END
