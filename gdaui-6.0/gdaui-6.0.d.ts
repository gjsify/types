/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdaui-6.0-ambient.d.ts';
import './gdaui-6.0-import.d.ts';
/**
 * Gdaui-6.0
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
import type Gda from '@girs/gda-6.0';
import type libxml2 from '@girs/libxml2-2.0';

export namespace Gdaui {
    enum Action {
        NEW_DATA,
        WRITE_MODIFIED_DATA,
        DELETE_SELECTED_DATA,
        UNDELETE_SELECTED_DATA,
        RESET_DATA,
        MOVE_FIRST_RECORD,
        MOVE_PREV_RECORD,
        MOVE_NEXT_RECORD,
        MOVE_LAST_RECORD,
        MOVE_FIRST_CHUNK,
        MOVE_PREV_CHUNK,
        MOVE_NEXT_CHUNK,
        MOVE_LAST_CHUNK,
    }
    enum BasicFormPart {
        LABELS,
        ENTRIES,
    }
    class DataEntryError extends GLib.Error {
        // Own fields of Gdaui-6.0.DataEntryError

        FILE_NOT_FOUND_ERROR: number;
        INVALID_DATA_ERROR: number;

        // Constructors of Gdaui-6.0.DataEntryError

        constructor(options: { message: string; code: number });
    }

    /**
     * Defines when the data modifications held in the underlying #GdaDataProxy are written to the
     * data model being proxied (using gda_data_proxy_apply_row_changes()).
     */
    enum DataProxyWriteMode {
        /**
         * write only when explicitly requested
         */
        DEMAND,
        /**
         * write when the current selected row changes
         */
        ROW_CHANGE,
        /**
         * write when user activates a value change
         */
        VALUE_ACTIVATED,
        /**
         * write when a parameters's value changes
         */
        VALUE_CHANGE,
    }
    class PluginError extends GLib.Error {
        // Own fields of Gdaui-6.0.PluginError

        PLUGIN_GENERAL_ERROR: number;

        // Constructors of Gdaui-6.0.PluginError

        constructor(options: { message: string; code: number });
    }

    enum RtEditorError {
        RT_EDITOR_GENERAL_ERROR,
    }
    const ATTRIBUTE_PLUGIN: string;
    const COLOR_NORMAL_DEFAULT: string;
    const COLOR_NORMAL_INVALID: string;
    const COLOR_NORMAL_MODIF: string;
    const COLOR_NORMAL_NULL: string;
    const COLOR_PRELIGHT_DEFAULT: string;
    const COLOR_PRELIGHT_INVALID: string;
    const COLOR_PRELIGHT_MODIF: string;
    const COLOR_PRELIGHT_NULL: string;
    const COLOR_UNKNOWN_MASK: number;
    const HIG_FORM_HBORDER: number;
    const HIG_FORM_HSPACE: number;
    const HIG_FORM_VBORDER: number;
    const HIG_FORM_VSEP: number;
    const HIG_FORM_VSPACE: number;
    function data_entry_error_quark(): GLib.Quark;
    /**
     * Creates a new #GdauiDataEntry widget, taking into account the requested entry name
     * if `plugin_name` is not %NULL (if no entry of that name is found, then the default data
     * entry widget will be created).
     *
     * The `plugin_name` format is interpreted as two parts: &lt;plugin name&gt;:&lt;plugin options&gt;, and
     * if the plugins has no option, then the ":&lt;plugin options&gt;" part may be omitted.
     * @param type a #GType
     * @param plugin_name the name of an entry plugin, or %NULL
     * @returns a new #GdauiDataEntry widget, _NEVER_ %NULL
     */
    function new_data_entry(type: GObject.GType, plugin_name?: string | null): DataEntry;
    function plugin_error_quark(): GLib.Quark;
    interface CloudWeightFunc {
        (model: Gda.DataModel, row: number, data?: any | null): number;
    }
    interface FormattedEntryInsertFunc {
        (entry: FormattedEntry, insert_char: number, virt_pos: number, data?: any | null): void;
    }
    interface RawGridFormatFunc {
        (
            cell: Gtk.CellRenderer,
            column: Gtk.TreeViewColumn,
            column_pos: number,
            model: Gda.DataModel,
            row: number,
            data?: any | null,
        ): void;
    }
    enum ActionMode {
        NAVIGATION_ARROWS,
        NAVIGATION_SCROLL,
        MODIF_AUTO_COMMIT,
        MODIF_COMMIT_IMMEDIATE,
        ASK_CONFIRM_UPDATE,
        ASK_CONFIRM_DELETE,
        ASK_CONFIRM_INSERT,
        REPORT_ERROR,
    }
    enum DataProxyInfoFlag {
        NONE,
        CURRENT_ROW,
        ROW_MODIFY_BUTTONS,
        ROW_MOVE_BUTTONS,
        CHUNK_CHANGE_BUTTONS,
        NO_FILTER,
    }
    /**
     * Defines the aspect of the #GdauiLogin widget
     */
    enum LoginMode {
        ENABLE_CONTROL_CENTRE_MODE,
        HIDE_DSN_SELECTION_MODE,
        HIDE_DIRECT_CONNECTION_MODE,
    }
    module BasicForm {
        // Signal callback interfaces

        interface Activated {
            (): void;
        }

        interface HolderChanged {
            (param: Gda.Holder, is_user_modif: boolean): void;
        }

        interface LayoutChanged {
            (): void;
        }

        interface PopulatePopup {
            (menu: Gtk.Menu): void;
        }

        // Constructor properties interface
    }

    class BasicForm extends Gtk.Box {
        // Own properties of Gdaui-6.0.BasicForm

        readonly can_expand_v: boolean;
        readonly canExpandV: boolean;
        entries_auto_default: boolean;
        entriesAutoDefault: boolean;
        paramlist: any;
        xml_layout: any;
        xmlLayout: any;

        // Constructors of Gdaui-6.0.BasicForm

        static ['new'](data_set: Gda.Set): BasicForm;

        static new_in_dialog(
            data_set: Gda.Set,
            parent?: Gtk.Window | null,
            title?: string | null,
            header?: string | null,
        ): BasicForm;

        // Owm methods of Gdaui-6.0.BasicForm

        /**
         * Add `form'`s widgets specified by `part` to `size_group`
         * (the widgets can then be removed using gdaui_basic_form_remove_from_size_group()).
         * @param size_group a #GtkSizeGroup object
         * @param part specifies which widgets in @form are concerned
         */
        add_to_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void;
        /**
         * Makes the data entry corresponding to `holder` grab the focus for the window it's in. If `holder` is %NULL,
         * then the focus is on the first entry which needs attention.
         * @param holder a #GdaHolder object, or %NULL
         */
        entry_grab_focus(holder?: Gda.Holder | null): void;
        /**
         * Sets the #GdauiDataEntry in `form` which corresponds to the
         * `holder` parameter editable or not. If `holder` is %NULL, then all the parameters
         * are concerned.
         * @param holder a #GdaHolder object; or %NULL
         * @param editable %TRUE if corresponding data entry must be editable
         */
        entry_set_editable(holder: Gda.Holder | null, editable: boolean): void;
        /**
         * Shows or hides the #GdauiDataEntry in `form` which corresponds to the
         * `holder` data holder
         * @param holder a #GdaHolder object
         * @param show set to %TRUE to show the data entry, and to %FALSE to hide it
         */
        entry_set_visible(holder: Gda.Holder, show: boolean): void;
        /**
         * Get a pointer to the #GdaSet object which
         * is modified by `form`
         * @returns a pointer to the #GdaSet
         */
        get_data_set(): Gda.Set;
        /**
         * Get the #GdauiDataEntry in `form` which corresponds to the `holder` place.
         * @param holder a #GdaHolder object
         * @returns the requested widget, or %NULL if not found
         */
        get_entry_widget(holder: Gda.Holder): Gtk.Widget;
        /**
         * Get the label in `form` which corresponds to the `holder` holder.
         * @param holder a #GdaHolder object
         * @returns the requested widget, or %NULL if not found
         */
        get_label_widget(holder: Gda.Holder): Gtk.Widget;
        /**
         * Retreives a pointer to a place holder widget. This feature is only available if a specific
         * layout has been defined for `form` using gdaui_basic_form_set_layout_from_file().
         * @param placeholder_id the name of the requested place holder
         * @returns a pointer to the requested place holder, or %NULL if not found
         */
        get_place_holder(placeholder_id: string): Gtk.Widget;
        /**
         * Tells if the form has had at least on entry changed since `form` was created or
         * gdaui_basic_form_set_as_reference() has been called.
         * @returns %TRUE if one entry has changed at least
         */
        has_changed(): boolean;
        /**
         * Tells if the form can be used as-is (if all the parameters do have some valid values)
         * @returns %TRUE if the form is valid
         */
        is_valid(): boolean;
        /**
         * Removes `form'`s widgets specified by `part` from `size_group`
         * (the widgets must have been added using gdaui_basic_form_add_to_size_group()).
         * @param size_group a #GtkSizeGroup object
         * @param part specifies which widgets in @form are concerned
         */
        remove_from_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void;
        /**
         * Resets all the entries in the form to their
         * original values
         */
        reset(): void;
        /**
         * Tells `form` that the current values in the different entries are
         * to be considered as the original values for all the entries; the immediate
         * consequence is that any sub-sequent call to gdaui_basic_form_has_changed()
         * will return %FALSE (of course until any entry is changed).
         */
        set_as_reference(): void;
        /**
         * For each entry in the form, sets it to a default value if it is possible to do so.
         */
        set_entries_to_default(): void;
        /**
         * Sets a form layout according an XML description contained in `file_name,` for the form identified
         * by the `form_name` name (as an XML layout file can contain the descriptions of several forms and grids).
         * @param file_name XML file name to use
         * @param form_name the name of the form to use, in @file_name
         */
        set_layout_from_file(file_name: string, form_name: string): void;
        /**
         * Defines the color to be used when `form` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         */
        set_unknown_color(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Updates values in all #GdaHolder in current #GdaSet
         */
        update_data_set(): void;
    }

    module Cloud {
        // Signal callback interfaces

        interface Activate {
            (object: number): void;
        }

        // Constructor properties interface
    }

    class Cloud extends Gtk.Box {
        // Own properties of Gdaui-6.0.Cloud

        label_column: number;
        labelColumn: number;
        max_scale: number;
        maxScale: number;
        min_scale: number;
        minScale: number;
        model: Gda.DataModel;
        weight_column: number;
        weightColumn: number;

        // Constructors of Gdaui-6.0.Cloud

        static ['new'](model: Gda.DataModel, label_column: number, weight_column: number): Cloud;

        // Owm methods of Gdaui-6.0.Cloud

        /**
         * Creates a search widget linked directly to modify `cloud'`s appearance.
         * @returns a new widget
         */
        create_filter_widget(): Gtk.Widget;
        /**
         * Filters the elements displayed in `cloud,` by altering their color.
         * @param filter the filter to use, or %NULL to remove any filter
         */
        filter(filter?: string | null): void;
        /**
         * Sets `cloud'`s selection mode
         * @param mode the desired selection mode
         */
        set_selection_mode(mode: Gtk.SelectionMode): void;
        /**
         * Specifies a function called by `cloud` to compute each row's respective weight.
         * @param func a #GdauiCloudWeightFunc function which computes weights, or %NULL to unset
         */
        set_weight_func(func?: CloudWeightFunc | null): void;
    }

    module Combo {
        // Constructor properties interface
    }

    class Combo extends Gtk.ComboBox {
        // Own properties of Gdaui-6.0.Combo

        as_list: boolean;
        asList: boolean;
        model: Gda.DataModel;

        // Constructors of Gdaui-6.0.Combo

        static ['new'](): Combo;

        static new_with_model(model: Gda.DataModel, n_cols: number, cols_index: number): Combo;

        // Owm methods of Gdaui-6.0.Combo

        /**
         * Tells if `combo` should add a special entry representing an "undefined choice", as a %NULL entry. The default is
         * that only the available choices in `combo'`s model are presented.
         * @param add_null set to %TRUE to add a NULL value to the combo box
         */
        add_null(add_null: boolean): void;
        /**
         * Tell if the currently selected entry represents the "undefined choice" entry.
         * @returns %TRUE if the %NULL value is selected
         */
        is_null_selected(): boolean;
        /**
         * Makes `combo` display data stored in `model` (makes the
         * combo widget refresh its list of values and display the values contained
         * in the model). A NULL `model` will make the combo empty
         * and disassociate the previous model, if any.
         *
         * if `n_cols` is %0, then all the columns of `model` will be displayed in `combo`.
         * @param model a #GdaDataModel object to get data from.
         * @param cols_index an array of columns to be shown, its size must be @n_cols
         */
        set_data(model: Gda.DataModel, cols_index: number[]): void;
    }

    module DataCellRendererBin {
        // Signal callback interfaces

        interface Changed {
            (object: string, p0: GObject.Value): void;
        }

        // Constructor properties interface
    }

    class DataCellRendererBin extends Gtk.CellRendererPixbuf {
        // Own properties of Gdaui-6.0.DataCellRendererBin

        data_handler: Gda.DataHandler;
        dataHandler: Gda.DataHandler;
        editable: boolean;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        type: GObject.GType;
        value: GObject.Value;

        // Constructors of Gdaui-6.0.DataCellRendererBin

        static ['new'](dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBin;
    }

    module DataCellRendererBoolean {
        // Signal callback interfaces

        interface Changed {
            (object: string, p0: GObject.Value): void;
        }

        // Constructor properties interface
    }

    class DataCellRendererBoolean extends Gtk.CellRendererToggle {
        // Own properties of Gdaui-6.0.DataCellRendererBoolean

        data_handler: Gda.DataHandler;
        dataHandler: Gda.DataHandler;
        editable: boolean;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        type: GObject.GType;
        value: GObject.Value;

        // Constructors of Gdaui-6.0.DataCellRendererBoolean

        static ['new'](dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBoolean;
    }

    module DataCellRendererCombo {
        // Signal callback interfaces

        interface Changed {
            (object: string, p0?: any | null, p1?: any | null): void;
        }

        // Constructor properties interface
    }

    class DataCellRendererCombo extends Gtk.CellRendererText {
        // Own properties of Gdaui-6.0.DataCellRendererCombo

        data_set: Set;
        dataSet: Set;
        data_set_source: any;
        dataSetSource: any;
        set_default_if_invalid: boolean;
        setDefaultIfInvalid: boolean;
        show_expander: boolean;
        showExpander: boolean;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        values: any;
        values_display: any;
        valuesDisplay: any;

        // Constructors of Gdaui-6.0.DataCellRendererCombo

        static ['new'](paramlist: Set, source: SetSource): DataCellRendererCombo;
    }

    module DataCellRendererInfo {
        // Signal callback interfaces

        interface StatusChanged {
            (path: string, requested_action: Gda.ValueAttribute): void;
        }

        // Constructor properties interface
    }

    class DataCellRendererInfo extends Gtk.CellRenderer {
        // Own properties of Gdaui-6.0.DataCellRendererInfo

        editable: boolean;
        group: any;
        iter: Gda.DataModelIter;
        store: DataStore;
        to_be_deleted: boolean;
        toBeDeleted: boolean;

        // Constructors of Gdaui-6.0.DataCellRendererInfo

        static ['new'](store: DataStore, iter: Gda.DataModelIter, group: SetGroup): DataCellRendererInfo;
    }

    module DataCellRendererTextual {
        // Signal callback interfaces

        interface Changed {
            (object: string, p0: GObject.Value): void;
        }

        // Constructor properties interface
    }

    class DataCellRendererTextual extends Gtk.CellRendererText {
        // Own properties of Gdaui-6.0.DataCellRendererTextual

        data_handler: Gda.DataHandler;
        dataHandler: Gda.DataHandler;
        options: string;
        to_be_deleted: boolean;
        toBeDeleted: boolean;
        type: GObject.GType;
        value: any;

        // Constructors of Gdaui-6.0.DataCellRendererTextual

        static ['new'](dh: Gda.DataHandler | null, type: GObject.GType, options: string): DataCellRendererTextual;
    }

    module DataFilter {
        // Constructor properties interface
    }

    class DataFilter extends Gtk.Box {
        // Own properties of Gdaui-6.0.DataFilter

        data_widget: DataProxy;
        dataWidget: DataProxy;

        // Constructors of Gdaui-6.0.DataFilter

        static ['new'](data_widget: DataProxy): DataFilter;
    }

    module DataProxyInfo {
        // Constructor properties interface
    }

    class DataProxyInfo extends Gtk.Toolbar {
        // Own properties of Gdaui-6.0.DataProxyInfo

        data_proxy: DataProxy;
        dataProxy: DataProxy;

        // Constructors of Gdaui-6.0.DataProxyInfo

        static ['new'](data_proxy: DataProxy, flags: DataProxyInfoFlag): DataProxyInfo;

        // Owm methods of Gdaui-6.0.DataProxyInfo

        /**
         * Get the #GtkToolItem corresponding to the `action` action
         * @param action a #GdauiAction action
         * @returns the #GtkToolItem, or %NULL on error
         */
        get_item(action: Action): Gtk.ToolItem;
    }

    module DataStore {
        // Constructor properties interface
    }

    class DataStore extends GObject.Object {
        // Own properties of Gdaui-6.0.DataStore

        model: any;
        prepend_null_entry: boolean;
        prependNullEntry: boolean;
        readonly proxy: any;

        // Owm methods of Gdaui-6.0.DataStore

        /**
         * Creates a #GtkTreeModel interface with a #GdaDataModel
         * @param model a #GdaDataModel object
         */
        static ['new'](model: Gda.DataModel): Gtk.TreeModel;

        // Owm methods of Gdaui-6.0.DataStore

        /**
         * Appends a new row.
         * @param iter an unset #GtkTreeIter to set to the appended row
         * @returns %TRUE if no error occurred
         */
        append(iter: Gtk.TreeIter): boolean;
        /**
         * Marks the row pointed by `iter` to be deleted
         * @param iter the considered row
         */
        ['delete'](iter: Gtk.TreeIter): void;
        /**
         * Sets `iter` to the first row where all the values in `values` at the columns identified at
         * `cols_index` match. If the row can't be identified, then the contents of `iter` is not modified.
         *
         * NOTE: the `cols_index` array MUST contain a column index for each value in `values`
         * @param values a list of #GValue values
         * @param cols_index an array of #gint containing the column number to match each value of @values
         * @returns %TRUE if the row has been identified @iter was set
         */
        get_iter_from_values(values: GObject.Value[], cols_index: number): boolean;
        get_proxy(): Gda.DataProxy;
        /**
         * Get the number of the row represented by `iter`
         * @param iter a valid #GtkTreeIter
         * @returns the row number, or -1 if an error occurred
         */
        get_row_from_iter(iter: Gtk.TreeIter): number;
        /**
         * Stores a value in the `store` data model.
         * @param iter the considered row
         * @param col the data model column
         * @param value the value to store (gets copied)
         * @returns %TRUE on success
         */
        set_value(iter: Gtk.TreeIter, col: number, value: GObject.Value): boolean;
        /**
         * Remove the "to be deleted" mark the row pointed by `iter,` if it existed.
         * @param iter the considered row
         */
        undelete(iter: Gtk.TreeIter): void;
    }

    module Entry {
        // Constructor properties interface
    }

    class Entry extends Gtk.Entry {
        // Own properties of Gdaui-6.0.Entry

        prefix: string;
        suffix: string;

        // Constructors of Gdaui-6.0.Entry

        static ['new'](prefix?: string | null, suffix?: string | null): Entry;

        // Owm methods of Gdaui-6.0.Entry

        /**
         * Get a new string containing the contents of the widget as a string without the
         * prefix and/or suffix and/or format if they have been specified. This method differs
         * from calling gtk_entry_get_text() since the latest will return the complete text
         * in `entry` including prefix and/or suffix and/or format.
         *
         * Note: %NULL may be returned if this method is called while the widget is working on some
         * internal modifications, or if gdaui_entry_set_text() was called with a %NULL
         * as its `text` argument.
         * @returns a new string, or %NULL
         */
        get_text(): string;
        /**
         * Sets the maximum allowed length of the contents of the widget.
         * If the current contents are longer than the given length, then they will be truncated to fit.
         *
         * The difference with gtk_entry_set_max_length() is that the max length does not take into account
         * the prefix and/or suffix parts which may have been set.
         * @param max the maximum length of the entry, or 0 for no maximum.
         */
        set_max_length(max: number): void;
        /**
         * Sets `prefix` as a prefix string of `entry:` that string will always be displayed in the
         * text entry, will not be modifiable, and won't be part of the returned text
         * @param prefix a prefix string
         */
        set_prefix(prefix: string): void;
        /**
         * Sets `suffix` as a suffix string of `entry:` that string will always be displayed in the
         * text entry, will not be modifiable, and won't be part of the returned text
         * @param suffix a suffix string
         */
        set_suffix(suffix: string): void;
        /**
         * Sets `text` into `entry`.
         *
         * As a side effect, if `text` is %NULL, then the entry will
         * be completely empty, whereas if `text` is the empty string (""), then
         * `entry` will display the prefix and/or suffix and/or format string if they have
         * been set. Except this case, calling this method is similar to calling
         * gtk_entry_set_text()
         * @param text the text to set into @entry, or %NULL
         */
        set_text(text?: string | null): void;
        /**
         * Sets `entry'`s width in characters, without taking into account
         * any prefix or suffix (which will automatically be handled). If you want to take
         * a prefix or suffix into account direclty, then use gtk_entry_set_width_chars()
         * @param max_width maximum width, or -1
         */
        set_width_chars(max_width: number): void;
    }

    module EntryBin {
        // Constructor properties interface
    }

    class EntryBin extends EntryWrapper {
        // Constructors of Gdaui-6.0.EntryBin

        static ['new'](dh: Gda.DataHandler, type: GObject.GType): EntryBin;
    }

    module EntryBoolean {
        // Constructor properties interface
    }

    class EntryBoolean extends EntryWrapper {
        // Constructors of Gdaui-6.0.EntryBoolean

        static ['new'](dh: Gda.DataHandler, type: GObject.GType): EntryBoolean;
    }

    module EntryCombo {
        // Constructor properties interface
    }

    class EntryCombo extends EntryShell {
        // Own properties of Gdaui-6.0.EntryCombo

        set_default_if_invalid: boolean;
        setDefaultIfInvalid: boolean;

        // Constructors of Gdaui-6.0.EntryCombo

        static ['new'](paramlist: Set, source: SetSource): EntryCombo;

        // Owm methods of Gdaui-6.0.EntryCombo

        /**
         * Get a list of all the values in `combo'`s data model's selected row. The list
         * must be freed by the caller.
         * @returns a new list of values
         */
        get_all_values(): GObject.Value[];
        /**
         * Get the original values stored within `combo`. The returned values are the ones
         * within `combo,` so they must not be freed afterwards; the list has to be freed afterwards.
         * @returns a new list of values
         */
        get_reference_values(): GObject.Value[];
        /**
         * Get the values stored within `combo`. The returned values are the ones
         * within `combo,` so they must not be freed afterwards, however the returned
         * list has to be freed afterwards.
         * @returns a new list of values
         */
        get_values(): GObject.Value[];
        /**
         * Sets the default values of `combo` to the specified ones. None of the
         * values provided in the list is modified.
         * @param values a list of #GValue values
         */
        set_default_values(values: GObject.Value[]): void;
        /**
         * Sets the original values of `combo` to the specified ones. None of the
         * values provided in the list is modified.
         * @param values a list of #GValue values
         */
        set_reference_values(values: GObject.Value[]): void;
        /**
         * Sets the values of `combo` to the specified ones. None of the
         * values provided in the list is modified.
         *
         * `values` holds a list of #GValue values, one for each parameter that is present in the `node` argument
         * of the gdaui_entry_combo_new() function which created `combo`.
         *
         * An error can occur when there is no corresponding value(s) to be displayed
         * for the provided values.
         *
         * If `values` is %NULL, then the entry itself is set to NULL;
         * @param values a list of #GValue values, or %NULL
         * @returns %TRUE if no error occurred.
         */
        set_values(values?: GObject.Value[] | null): boolean;
    }

    module EntryCommonTime {
        // Constructor properties interface
    }

    class EntryCommonTime extends EntryWrapper {
        // Own properties of Gdaui-6.0.EntryCommonTime

        editing_canceled: boolean;
        editingCanceled: boolean;
        type: GObject.GType;
    }

    module EntryDate {
        // Constructor properties interface
    }

    class EntryDate extends EntryCommonTime {
        // Constructors of Gdaui-6.0.EntryDate

        static ['new'](dh: Gda.DataHandler): EntryDate;
    }

    module EntryNone {
        // Constructor properties interface
    }

    class EntryNone extends EntryWrapper {
        // Constructors of Gdaui-6.0.EntryNone

        static ['new'](type: GObject.GType): EntryNone;
    }

    module EntryNumber {
        // Constructor properties interface
    }

    class EntryNumber extends EntryWrapper {
        // Own properties of Gdaui-6.0.EntryNumber

        editing_canceled: boolean;
        editingCanceled: boolean;
        options: string;

        // Constructors of Gdaui-6.0.EntryNumber

        static ['new'](dh: Gda.DataHandler, type: GObject.GType, options?: string | null): EntryNumber;

        // Owm methods of Gdaui-6.0.EntryNumber

        static is_type_numeric(type: GObject.GType): boolean;
    }

    module EntryShell {
        // Constructor properties interface
    }

    class EntryShell extends Gtk.Box {
        // Own properties of Gdaui-6.0.EntryShell

        handler: Gda.DataHandler;
        is_cell_renderer: boolean;
        isCellRenderer: boolean;

        // Owm methods of Gdaui-6.0.EntryShell

        /**
         * Packs a #GtkWidget widget into the `shell`.
         * @param entry a #GtkWidget to pack into @shell
         */
        pack_entry(entry: Gtk.Widget): void;
        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         */
        set_invalid_color(red: number, green: number, blue: number, alpha: number): void;
    }

    module EntryString {
        // Constructor properties interface
    }

    class EntryString extends EntryWrapper {
        // Own properties of Gdaui-6.0.EntryString

        editing_canceled: boolean;
        editingCanceled: boolean;
        multiline: boolean;
        options: string;

        // Constructors of Gdaui-6.0.EntryString

        static ['new'](dh: Gda.DataHandler, type: GObject.GType, options?: string | null): EntryString;
    }

    module EntryTime {
        // Constructor properties interface
    }

    class EntryTime extends EntryCommonTime {
        // Constructors of Gdaui-6.0.EntryTime

        static ['new'](dh: Gda.DataHandler): EntryTime;
    }

    module EntryTimestamp {
        // Constructor properties interface
    }

    class EntryTimestamp extends EntryCommonTime {
        // Constructors of Gdaui-6.0.EntryTimestamp

        static ['new'](dh: Gda.DataHandler): EntryTimestamp;
    }

    module EntryWrapper {
        // Constructor properties interface
    }

    class EntryWrapper extends EntryShell {
        // Own properties of Gdaui-6.0.EntryWrapper

        set_default_if_invalid: boolean;
        setDefaultIfInvalid: boolean;

        // Owm methods of Gdaui-6.0.EntryWrapper

        /**
         * Signals to `gwrap` that the entry has been activated (that is the user
         * pressed ENTER for example to signify he has finished entering data)
         */
        contents_activated(): void;
        /**
         * Signals to `gwrap` that the entry has changed
         */
        contents_changed(): void;
    }

    module Form {
        // Constructor properties interface
    }

    class Form extends Gtk.Box {
        // Own properties of Gdaui-6.0.Form

        readonly info: DataProxyInfo;
        model: Gda.DataModel;
        readonly raw_form: RawForm;
        readonly rawForm: RawForm;

        // Constructors of Gdaui-6.0.Form

        static ['new'](model: Gda.DataModel): Form;
    }

    module FormattedEntry {
        // Constructor properties interface
    }

    class FormattedEntry extends Entry {
        // Own properties of Gdaui-6.0.FormattedEntry

        format: string;
        mask: string;

        // Constructors of Gdaui-6.0.FormattedEntry

        static ['new'](format: string, mask?: string | null): FormattedEntry;

        // Owm methods of Gdaui-6.0.FormattedEntry

        /**
         * Get `entry'`s contents. This function is similar to gdaui_get_text() except
         * that it optionnally uses the information contained in `mask` when gdaui_formatted_entry_new()
         * was called to format the output differently.
         * @returns a new string, or %NULL
         */
        get_text(): string;
        /**
         * Specifies that `entry` should call `insert_func` when the user wants to insert a char
         * which is anot allowed, to perform other actions
         * @param insert_func a #GdauiFormattedEntryInsertFunc, or %NULL
         */
        set_insert_func(insert_func?: FormattedEntryInsertFunc | null): void;
    }

    module Grid {
        // Constructor properties interface
    }

    class Grid extends Gtk.Box {
        // Own properties of Gdaui-6.0.Grid

        readonly info: DataProxyInfo;
        model: Gda.DataModel;
        readonly raw_grid: RawGrid;
        readonly rawGrid: RawGrid;

        // Constructors of Gdaui-6.0.Grid

        static ['new'](model?: Gda.DataModel | null): Grid;

        // Owm methods of Gdaui-6.0.Grid

        /**
         * Sets the size of each chunk of data to display: the maximum number of rows which
         * can be displayed at a time. See gdaui_raw_grid_set_sample_size() and gda_data_proxy_set_sample_size()
         * @param sample_size the size of the sample displayed in @grid
         */
        set_sample_size(sample_size: number): void;
    }

    module Login {
        // Signal callback interfaces

        interface Changed {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    class Login extends Gtk.Box {
        // Own properties of Gdaui-6.0.Login

        dsn: string;
        readonly valid: boolean;

        // Constructors of Gdaui-6.0.Login

        static ['new'](dsn?: string | null): Login;

        // Owm methods of Gdaui-6.0.Login

        /**
         * Get the information specified in `login` as a pointer to a (read-only) #GdaDsnInfo.
         * If the connection is not specified by a DSN, then the 'name' attribute of the returned
         * #GdaDsnInfo will be %NULL, and otherwise it will contain the name of the selected DSN.
         * @returns a pointer to a (read-only) #GdaDsnInfo.
         */
        get_connection_information(): Gda.DsnInfo;
        /**
         * Changes the information displayed in `login,` to represent `cinfo`.
         * If `login'`s mode has %GDA_UI_LOGIN_HIDE_DIRECT_CONNECTION_MODE, then
         * if `cinfo->`name is not %NULL it is displayed in the DSN selector, otherwise
         * a warning is shown and the result
         * is the same as having passed %NULL for the `cinfo` argument.
         *
         * In any case `login'`s mode (set by gdaui_login_set_mode()) is not changed.
         * @param cinfo a pointer to a structure representing the information to display.
         */
        set_connection_information(cinfo: Gda.DsnInfo): void;
        /**
         * Changes the information displayed in `login,` to represent `dsn`.
         * If `login'`s mode has %GDA_UI_LOGIN_HIDE_DSN_SELECTION_MODE, then
         * the DSN information is extracted and displayed in the direct login area.
         *
         * If `dsn` is not a declared data source name, then a warning is shown and the result
         * is the same as having passed %NULL for the `dsn` argument.
         *
         * In any case `login'`s mode (set by gdaui_login_set_mode()) is not changed.
         * @param dsn a data source name, or %NULL
         */
        set_dsn(dsn?: string | null): void;
        /**
         * Set how `login` operates
         * @param mode a flag
         */
        set_mode(mode: LoginMode): void;
    }

    module NumericEntry {
        // Constructor properties interface
    }

    class NumericEntry extends Entry {
        // Own properties of Gdaui-6.0.NumericEntry

        decimal_sep: number;
        decimalSep: number;
        n_decimals: number;
        nDecimals: number;
        thousands_sep: number;
        thousandsSep: number;
        type: GObject.GType;

        // Constructors of Gdaui-6.0.NumericEntry

        static ['new'](type: GObject.GType): NumericEntry;

        // Owm methods of Gdaui-6.0.NumericEntry

        get_value(): GObject.Value;
    }

    module ProviderSelector {
        // Constructor properties interface
    }

    class ProviderSelector extends Combo {
        // Constructors of Gdaui-6.0.ProviderSelector

        static ['new'](): ProviderSelector;

        // Owm methods of Gdaui-6.0.ProviderSelector

        /**
         * Get the selected provider.
         * @returns the selected provider, or %NULL if no provider is selected
         */
        get_provider(): string;
        /**
         * Get the selected provider as a #GdaServerProvider object
         * @returns a #GdaServerProvider or %NULL if an error occurred
         */
        get_provider_obj(): Gda.ServerProvider;
        /**
         * Forces `selector` to be set on `provider`
         * @param provider the provider to be selected, or %NULL for the default (SQLite)
         * @returns %TRUE if @provider has been selected
         */
        set_provider(provider?: string | null): boolean;
    }

    module RawForm {
        // Constructor properties interface
    }

    class RawForm extends BasicForm {
        // Own properties of Gdaui-6.0.RawForm

        model: Gda.DataModel;

        // Constructors of Gdaui-6.0.RawForm

        static ['new'](model?: Gda.DataModel | null): RawForm;
    }

    module RawGrid {
        // Signal callback interfaces

        interface DoubleClicked {
            (row: number): void;
        }

        interface PopulatePopup {
            (menu: Gtk.Menu): void;
        }

        // Constructor properties interface
    }

    class RawGrid extends Gtk.TreeView {
        // Own properties of Gdaui-6.0.RawGrid

        info_cell_visible: boolean;
        infoCellVisible: boolean;
        model: Gda.DataModel;
        xml_layout: any;
        xmlLayout: any;

        // Constructors of Gdaui-6.0.RawGrid

        static ['new'](model: Gda.DataModel): RawGrid;

        // Owm methods of Gdaui-6.0.RawGrid

        /**
         * This function allows you to specify that the `func` function needs to be called
         * whenever the rendering of a cell in `grid` needs to be done. It is similar in purpose
         * to the gtk_tree_view_column_set_cell_data_func() function.
         * @param func a #GdauiRawGridFormatFunc function pointer
         * @param dnotify destroy notifier for @data
         */
        add_formatting_function(func: RawGridFormatFunc, dnotify?: GLib.DestroyNotify | null): void;
        /**
         * This function undoes what has been specified before by gdaui_raw_grid_add_formatting_function()
         * @param func a #GdauiRawGridFormatFunc function pointer
         */
        remove_formatting_function(func: RawGridFormatFunc): void;
        /**
         * Sets a grid's columns layout according an XML description contained in `file_name,` for the grid identified
         * by the `grid_name` name (as an XML layout file can contain the descriptions of several forms and grids).
         * @param file_name XML file name to use
         * @param grid_name the name of the grid to use, in @file_name
         */
        set_layout_from_file(file_name: string, grid_name: string): void;
        /**
         * Sets the size of each chunk of data to display: the maximum number of rows which
         * can be displayed at a time. See gdaui_grid_set_sample_size() and gda_data_proxy_set_sample_size()
         * @param sample_size the size of the sample displayed in @grid
         */
        set_sample_size(sample_size: number): void;
        set_sample_start(sample_start: number): void;
    }

    module RtEditor {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class RtEditor extends Gtk.Box {
        // Own properties of Gdaui-6.0.RtEditor

        /**
         * Get access to the actual #GtkTextBuffer used. Do not modify it!
         */
        readonly buffer: Gtk.TextBuffer;
        /**
         * Determines if the contents of the widget appears in a scrolled window or not.
         */
        in_scrolled_window: boolean;
        /**
         * Determines if the contents of the widget appears in a scrolled window or not.
         */
        inScrolledWindow: boolean;
        /**
         * If set to %TRUE, then the default text background is removed
         * and thus the textbackground is the default widget's background.
         *
         * This property has to be set before the widget is realized, and is taken into account only
         * if the widget is not editable (when it's realized).
         */
        no_background: boolean;
        /**
         * If set to %TRUE, then the default text background is removed
         * and thus the textbackground is the default widget's background.
         *
         * This property has to be set before the widget is realized, and is taken into account only
         * if the widget is not editable (when it's realized).
         */
        noBackground: boolean;
        /**
         * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
         */
        show_markup: boolean;
        /**
         * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
         */
        showMarkup: boolean;

        // Constructors of Gdaui-6.0.RtEditor

        static ['new'](): RtEditor;

        // Owm methods of Gdaui-6.0.RtEditor

        static error_quark(): GLib.Quark;

        // Owm methods of Gdaui-6.0.RtEditor

        /**
         * Get the contents of `editor,` using the markup syntax
         * @returns a new string, or %NULL if there was an error
         */
        get_contents(): string;
        /**
         * Set `editor'`s contents. If `length` is -1, `markup` must be nul-terminated
         * @param markup the text to set in @editor, using the markup syntax (must be valid UTF-8)
         * @param length length of text in bytes.
         */
        set_contents(markup: string, length: number): void;
        /**
         * Set `editor'`s editability
         * @param editable whether it's editable
         */
        set_editable(editable: boolean): void;
    }

    module ServerOperation {
        // Constructor properties interface
    }

    class ServerOperation extends Gtk.Box {
        // Own properties of Gdaui-6.0.ServerOperation

        hide_single_header: boolean;
        hideSingleHeader: boolean;
        server_operation: Gda.ServerOperation;
        serverOperation: Gda.ServerOperation;

        // Constructors of Gdaui-6.0.ServerOperation

        static ['new'](op: Gda.ServerOperation): ServerOperation;

        static new_in_dialog(
            op: Gda.ServerOperation,
            parent?: Gtk.Window | null,
            title?: string | null,
            header?: string | null,
        ): ServerOperation;

        // Owm methods of Gdaui-6.0.ServerOperation

        update_parameters(): void;
    }

    module Set {
        // Signal callback interfaces

        interface PublicDataChanged {
            (): void;
        }

        interface SourceModelChanged {
            (source: SetSource): void;
        }

        // Constructor properties interface
    }

    class Set extends GObject.Object {
        // Own properties of Gdaui-6.0.Set

        set: Gda.Set;

        // Constructors of Gdaui-6.0.Set

        static ['new'](set: Gda.Set): Set;

        // Owm methods of Gdaui-6.0.Set

        get_group(holder: Gda.Holder): SetGroup;
        get_groups(): SetGroup[];
        get_sources(): SetSource[];
    }

    module TreeStore {
        // Signal callback interfaces

        interface DragCanDrag {
            (object: string): boolean;
        }

        interface DragCanDrop {
            (object: string, p0?: any | null): boolean;
        }

        interface DragDelete {
            (object: string): boolean;
        }

        interface DragDrop {
            (object: string, p0?: any | null): boolean;
        }

        interface DragGet {
            (object: string, p0?: any | null): boolean;
        }

        // Constructor properties interface
    }

    class TreeStore extends GObject.Object {
        // Own properties of Gdaui-6.0.TreeStore

        tree: Gda.Tree;

        // Owm methods of Gdaui-6.0.TreeStore

        /**
         * Creates a #GtkTreeModel interface with a #GdaTree, mapping columns to attributes' values.
         * For more information and limitations, see gdaui_tree_store_new().
         * @param tree a #GdaTree object
         * @param n_columns number of columns in the tree store
         * @param types an array of @n_columns GType to specify the type of each column
         * @param attribute_names an array of @n_columns strings to specify the attribute name                   to map each column on
         */
        static newv(tree: Gda.Tree, n_columns: number, types: GObject.GType, attribute_names: string): Gtk.TreeModel;

        // Owm methods of Gdaui-6.0.TreeStore

        /**
         * Sets `iter` to represent `node` in the tree.
         * @param iter a #GtkTreeIter
         * @param node a #GdaTreeNode in @store
         * @returns %TRUE if no error occurred and @iter is valid
         */
        get_iter_from_node(iter: Gtk.TreeIter, node: Gda.TreeNode): boolean;
        /**
         * Get the  #GdaTreeNode represented by `iter`.
         * @param iter a valid #GtkTreeIter
         * @returns the #GdaTreeNode represented by @iter, or %NULL if an error occurred
         */
        get_node(iter: Gtk.TreeIter): Gda.TreeNode;
    }

    class BasicFormClass {}

    class CloudClass {
        // Own fields of Gdaui-6.0.CloudClass

        padding: any[];
    }

    class ComboClass {
        // Own fields of Gdaui-6.0.ComboClass

        padding: any[];
    }

    class DataCellRendererBinClass {}

    class DataCellRendererBooleanClass {}

    class DataCellRendererComboClass {}

    class DataCellRendererInfoClass {}

    class DataCellRendererTextualClass {}

    class DataEntryInterface {}

    class DataFilterClass {
        // Own fields of Gdaui-6.0.DataFilterClass

        padding: any[];
    }

    class DataProxyInfoClass {
        // Own fields of Gdaui-6.0.DataProxyInfoClass

        padding: any[];
    }

    class DataProxyInterface {}

    class DataSelectorInterface {
        // Own fields of Gdaui-6.0.DataSelectorInterface

        padding: any[];
    }

    class DataStoreClass {
        // Own fields of Gdaui-6.0.DataStoreClass

        padding: any[];
    }

    class EntryBinClass {}

    class EntryBooleanClass {}

    class EntryClass {}

    class EntryComboClass {}

    class EntryCommonTimeClass {}

    class EntryDateClass {}

    class EntryNoneClass {}

    class EntryNumberClass {}

    class EntryShellClass {}

    class EntryStringClass {}

    class EntryTimeClass {}

    class EntryTimestampClass {}

    class EntryWrapperClass {}

    class FormClass {}

    class FormattedEntryClass {}

    class GridClass {
        // Own fields of Gdaui-6.0.GridClass

        padding: any[];
    }

    class LoginClass {
        // Own fields of Gdaui-6.0.LoginClass

        padding: any[];
    }

    class NumericEntryClass {}

    /**
     * Structure representing a plugin.
     *
     * Note: `entry_create_func` and `cell_create_func` can't be %NULL at the same time
     */
    class Plugin {
        // Own fields of Gdaui-6.0.Plugin

        plugin_name: string;
        plugin_descr: string;
        plugin_file: string;
        nb_g_types: number;
        valid_g_types: GObject.GType;
        options_xml_spec: string;

        // Owm methods of Gdaui-6.0.Plugin

        static error_quark(): GLib.Quark;

        // Owm methods of Gdaui-6.0.Plugin

        /**
         * Adds a new plugin which will be used by the forms and grids. The new plugin, as
         * described by `plugin` can declare a custom widget to be used for forms, grids, or both.
         *
         * If a plugin is already declared with the same name as the requested name, then
         * a warning is issued and the operation fails.
         */
        declare(): void;
    }

    class ProviderSelectorClass {
        // Own fields of Gdaui-6.0.ProviderSelectorClass

        padding: any[];
    }

    class RawFormClass {
        // Own fields of Gdaui-6.0.RawFormClass

        padding: any[];
    }

    class RawGridClass {}

    class RtEditorClass {
        // Own fields of Gdaui-6.0.RtEditorClass

        padding: any[];
    }

    class ServerOperationClass {
        // Own fields of Gdaui-6.0.ServerOperationClass

        padding: any[];
    }

    class SetClass {}

    /**
     * The <structname>GdauiSetGroup</structname>.
     *
     * To create a new #GdauiSetGroup use #gdaiu_set_group_new.
     *
     * To free a #GdauiSetGroup, created by #gdaui_set_group_new, use #gda_set_group_free.
     *
     * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
     * Don't try to use #gdaui_set_group_free on a struct that was created manually.
     */
    class SetGroup {
        // Constructors of Gdaui-6.0.SetGroup

        constructor(group: Gda.SetGroup);

        static ['new'](group: Gda.SetGroup): SetGroup;

        // Owm methods of Gdaui-6.0.SetGroup

        /**
         * Copy constructor.
         * @returns a new #GdauiSetGroup
         */
        copy(): SetGroup;
        /**
         * Frees any resources taken by `sg` struct. If `sg` is %NULL, then nothing happens.
         */
        free(): void;
        /**
         * Get group used by `sg`.
         * @returns used #GdaSetGroup
         */
        get_group(): Gda.SetGroup;
        /**
         * Get source used by `sg`.
         * @returns used #GdaSetGroup
         */
        get_source(): SetSource;
        /**
         * Set source to `source`.
         * @param group a #GdaSetGroup struct
         */
        set_group(group: Gda.SetGroup): void;
        /**
         * Set source to `source`. if `source` is #NULL, then `group` nodes contains exactly one entry.
         * @param source
         */
        set_source(source: SetSource): void;
    }

    /**
     * The <structname>GdauiSetSource</structname> is a ...
     *
     * To create a new #GdauiSetSource use #gdaui_set_source_new.
     *
     * To free a #GdauiSetSource, created by #gdaui_set_source_new, use #gdaui_set_source_free.
     *
     * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
     * Don't try to use #gdaui_set_source_free on a struct that was created manually.
     */
    class SetSource {
        // Constructors of Gdaui-6.0.SetSource

        constructor(source: Gda.SetSource);

        static ['new'](source: Gda.SetSource): SetSource;

        // Owm methods of Gdaui-6.0.SetSource

        /**
         * Copy constructor.
         * @returns a new #GdauiSetSource
         */
        copy(): SetSource;
        /**
         * Frees any resources taken by `s` struct. If `s` is %NULL, then nothing happens.
         */
        free(): void;
        get_ref_columns(): number[];
        get_ref_n_cols(): number;
        get_shown_columns(): number[];
        get_shown_n_cols(): number;
        /**
         * Get source used by `sg`.
         * @returns used #GdaSetSource
         */
        get_source(): Gda.SetSource;
        /**
         * Set the columns to be shown.
         * @param columns an array of with columns numbers of referen (Primary Key) at #GdaSetSource
         */
        set_ref_columns(columns: number[]): void;
        /**
         * Set the columns to be shown.
         * @param columns an array of with columns numbers to be shown from a #GdaSetSource
         */
        set_shown_columns(columns: number[]): void;
        /**
         * Set source to `source`.
         * @param source a #GdaSetSource struct
         */
        set_source(source: Gda.SetSource): void;
    }

    class TreeStoreClass {
        // Own fields of Gdaui-6.0.TreeStoreClass

        padding: any[];
    }

    interface DataEntry {
        // Owm methods of Gdaui-6.0.DataEntry

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;
        /**
         * Tells if `de` can be edited by the user
         * @returns %TRUE if @de is editable
         */
        get_editable(): boolean;
        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;
        /**
         * Fetch the reference value held in the #GdauiDataEntry widget
         * @returns the #GValue (not modifiable)
         */
        get_reference_value(): GObject.Value;
        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de)`.
         * @returns a new #GValue
         */
        get_value(): GObject.Value;
        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @returns the GType type
         */
        get_value_type(): GObject.GType;
        /**
         * Makes `de` grab the focus for the window it's in
         */
        grab_focus(): void;
        /**
         * Sets the parameters of the #GdauiDataEntry. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         */
        set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;
        /**
         * Sets the default value for the GdauiDataEntry which gets displayed when the
         * user forces the default value. If it is not set then it is set to type GDA_TYPE_NULL.
         * The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>NULL or of type GDA_TYPE_NULL, or</para></listitem>
         *   <listitem><para>of type specified using gdaui_data_entry_set_value_type().</para></listitem>
         * </itemizedlist>
         * @param value a #GValue, or %NULL
         */
        set_default_value(value?: GObject.Value | null): void;
        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to %TRUE to have an editable data entry
         */
        set_editable(editable: boolean): void;
        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;
        /**
         * Push a value into the GdauiDataEntry in the same way as gdaui_data_entry_set_value() but
         * also sets this value as the reference value.
         * @param value a #GValue, or %NULL
         */
        set_reference_value(value?: GObject.Value | null): void;
        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         */
        set_unknown_color(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Push a value into the #GdauiDataEntry. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using gda_value_new_null()) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using gdaui_data_entry_set_value_type(), or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a #GValue, or %NULL
         */
        set_value(value?: GObject.Value | null): void;
        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the #GType of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;
        /**
         * Tests the validity of `de'`s contents. This function must be overrided by implementators.
         *
         * Default implementation returns TRUE.
         * @returns TRUE if @de's contents is valid
         */
        validate(): boolean;

        // Own virtual methods of Gdaui-6.0.DataEntry

        vfunc_can_expand(horiz: boolean): boolean;
        vfunc_contents_activated(): void;
        vfunc_contents_modified(): void;
        vfunc_expand_changed(): void;
        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         */
        vfunc_get_attributes(): Gda.ValueAttribute;
        /**
         * Tells if `de` can be edited by the user
         */
        vfunc_get_editable(): boolean;
        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         */
        vfunc_get_handler(): Gda.DataHandler;
        vfunc_get_ref_value(): GObject.Value;
        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de)`.
         */
        vfunc_get_value(): GObject.Value;
        /**
         * Fetch the type of data the GdauiDataEntry handles
         */
        vfunc_get_value_type(): GObject.GType;
        /**
         * Makes `de` grab the focus for the window it's in
         */
        vfunc_grab_focus(): void;
        /**
         * Sets the parameters of the #GdauiDataEntry. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;
        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to %TRUE to have an editable data entry
         */
        vfunc_set_editable(editable: boolean): void;
        vfunc_set_ref_value(value: GObject.Value): void;
        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Push a value into the #GdauiDataEntry. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using gda_value_new_null()) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using gdaui_data_entry_set_value_type(), or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a #GValue, or %NULL
         */
        vfunc_set_value(value?: GObject.Value | null): void;
        vfunc_set_value_default(value: GObject.Value): void;
        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the #GType of the data to be displayed
         */
        vfunc_set_value_type(type: GObject.GType): void;
        vfunc_status_changed(): void;
        /**
         * Tests the validity of `de'`s contents. This function must be overrided by implementators.
         *
         * Default implementation returns TRUE.
         */
        vfunc_validate(): boolean;
    }

    interface DataProxy {
        // Owm methods of Gdaui-6.0.DataProxy

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
         * can be edited or not.
         * @param column column number of the data
         * @param editable set to %TRUE to make the column editable
         */
        column_set_editable(column: number, editable: boolean): void;
        /**
         * Get a pointer to the #GdaDataProxy being used by `iface`
         * @returns a #GdaDataProxy pointer
         */
        get_proxy(): Gda.DataProxy;
        /**
         * Get the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
         * the #GdaDataModel which holds the data displayed in `iface`.
         * @returns the write mode used by @iface
         */
        get_write_mode(): DataProxyWriteMode;
        /**
         * Forces the widget to perform the selected `action,` as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a #GdauiAction action
         */
        perform_action(action: Action): void;
        /**
         * Specifies the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
         * the #GdaDataModel which holds the data displayed in `iface`.
         * @param mode the requested #GdauiDataProxyWriteMode mode
         * @returns TRUE if the proposed mode has been taken into account
         */
        set_write_mode(mode: DataProxyWriteMode): boolean;
        /**
         * Determines if `action` can be used on `iface` (using gdaui_data_proxy_perform_action()).
         * @param action a #GdauiAction action
         * @returns %TRUE if the requested action is supported, %FALSE otherwise
         */
        supports_action(action: Action): boolean;

        // Own virtual methods of Gdaui-6.0.DataProxy

        /**
         * Get a pointer to the #GdaDataProxy being used by `iface`
         */
        vfunc_get_proxy(): Gda.DataProxy;
        /**
         * Get the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
         * the #GdaDataModel which holds the data displayed in `iface`.
         */
        vfunc_get_write_mode(): DataProxyWriteMode;
        /**
         * Forces the widget to perform the selected `action,` as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a #GdauiAction action
         */
        vfunc_perform_action(action: Action): void;
        vfunc_proxy_changed(proxy: Gda.DataProxy): void;
        vfunc_set_column_editable(column: number, editable: boolean): void;
        /**
         * Specifies the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
         * the #GdaDataModel which holds the data displayed in `iface`.
         * @param mode the requested #GdauiDataProxyWriteMode mode
         */
        vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;
        /**
         * Determines if `action` can be used on `iface` (using gdaui_data_proxy_perform_action()).
         * @param action a #GdauiAction action
         */
        vfunc_supports_action(action: Action): boolean;
    }

    interface DataSelector {
        // Owm methods of Gdaui-6.0.DataSelector

        /**
         * Get the #GdaDataModelIter object represented the current selected row in `iface`. This
         * function may return either %NULL or an invalid iterator (see gda_data_model_iter_is_valid()) if
         * the selection cannot be represented by a single selected row.
         *
         * Note that the returned #GdaDataModelIter is actually an iterator iterating on the #GdaDataModel
         * returned by the gdaui_data_selector_get_model() method.
         * @returns a pointer to a #GdaDataModelIter object, or %NULL
         */
        get_data_set(): Gda.DataModelIter;
        /**
         * Queries the #GdaDataModel from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a #GdaDataProxy.
         * @returns the #GdaDataModel
         */
        get_model(): Gda.DataModel;
        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is %NULL.
         *
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
         * and #GdauiGrid).
         * @returns an array of #gint values, one for each selected row. Use g_array_free() when finished (passing %TRUE as the last argument)
         */
        get_selected_rows(): number[];
        /**
         * Force the selection of a specific row.
         *
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
         * and #GdauiGrid).
         * @param row the row to select
         * @returns %TRUE if the row has been selected
         */
        select_row(row: number): boolean;
        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 to apply to all the columns
         * @param visible required visibility of the data in the @column column
         */
        set_column_visible(column: number, visible: boolean): void;
        /**
         * Sets the data model from which the data being displayed are. Also see gdaui_data_selector_get_model()
         * @param model a #GdaDataModel to use
         */
        set_model(model: Gda.DataModel): void;
        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
         * and #GdauiGrid).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        // Own virtual methods of Gdaui-6.0.DataSelector

        /**
         * Get the #GdaDataModelIter object represented the current selected row in `iface`. This
         * function may return either %NULL or an invalid iterator (see gda_data_model_iter_is_valid()) if
         * the selection cannot be represented by a single selected row.
         *
         * Note that the returned #GdaDataModelIter is actually an iterator iterating on the #GdaDataModel
         * returned by the gdaui_data_selector_get_model() method.
         */
        vfunc_get_data_set(): Gda.DataModelIter;
        /**
         * Queries the #GdaDataModel from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a #GdaDataProxy.
         */
        vfunc_get_model(): Gda.DataModel;
        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is %NULL.
         *
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
         * and #GdauiGrid).
         */
        vfunc_get_selected_rows(): number[];
        /**
         * Force the selection of a specific row.
         *
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
         * and #GdauiGrid).
         * @param row the row to select
         */
        vfunc_select_row(row: number): boolean;
        vfunc_selection_changed(): void;
        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 to apply to all the columns
         * @param visible required visibility of the data in the @column column
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;
        /**
         * Sets the data model from which the data being displayed are. Also see gdaui_data_selector_get_model()
         * @param model a #GdaDataModel to use
         */
        vfunc_set_model(model: Gda.DataModel): void;
        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
         * and #GdauiGrid).
         * @param row the row to unselect
         */
        vfunc_unselect_row(row: number): void;
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

export default Gdaui;
// END
