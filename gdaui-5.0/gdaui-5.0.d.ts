
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
import type Gda from '@girs/gda-5.0';
import type libxml2 from '@girs/libxml2-2.0';

export namespace Gdaui {

    /**
     * Gdaui-5.0
     */


    /**
     * @gir-type Enum
     */
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
        MOVE_FIRST_CHUNCK,
        MOVE_PREV_CHUNCK,
        MOVE_NEXT_CHUNCK,
        MOVE_LAST_CHUNCK,
    }


    /**
     * @gir-type Enum
     */
    enum BasicFormPart {
        LABELS,
        ENTRIES,
    }


    /**
     * @gir-type Struct
     */
    class DataEntryError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static FILE_NOT_FOUND_ERROR: number;

        static INVALID_DATA_ERROR: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * Defines when the data modifications held in the underlying {@link Gda.DataProxy} are written to the
     * data model being proxied (using `gda_data_proxy_apply_row_changes()`).
     * @gir-type Enum
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

    function data_entry_error_quark(): GLib.Quark;

    /**
     * Creates a new {@link Gdaui.DataEntry} widget, taking into account the requested entry name
     * if `plugin_name` is not `null` (if no entry of that name is found, then the default data
     * entry widget will be created).
     * 
     * The `plugin_name` format is interpreted as two parts: &lt;plugin name&gt;:&lt;plugin options&gt;, and
     * if the plugins has no option, then the ":&lt;plugin options&gt;" part may be omitted.
     * @param type a {@link GObject.GType}
     * @param plugin_name the name of an entry plugin, or `null`
     * @returns a new {@link Gdaui.DataEntry} widget, _NEVER_ `null`
     */
    function new_data_entry(type: GObject.GType, plugin_name: (string | null)): DataEntry;

    /**
     * @gir-type Callback
     */
    interface CloudWeightFunc {
        (model: Gda.DataModel, row: number, data: (any | null)): number;
    }

    /**
     * @gir-type Callback
     */
    interface FormattedEntryInsertFunc {
        (entry: FormattedEntry, insert_char: string, virt_pos: number, data: (any | null)): void;
    }

    /**
     * @gir-type Callback
     */
    interface RawGridFormatFunc {
        (cell: Gtk.CellRenderer, column: Gtk.TreeViewColumn, column_pos: number, model: Gda.DataModel, row: number, data: (any | null)): void;
    }

    /**
     * @gir-type Flags
     */
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


    /**
     * @gir-type Flags
     */
    enum DataProxyInfoFlag {
        NONE,
        CURRENT_ROW,
        ROW_MODIFY_BUTTONS,
        ROW_MOVE_BUTTONS,
        CHUNCK_CHANGE_BUTTONS,
        NO_FILTER,
    }


    /**
     * Defines the aspect of the {@link Gdaui.Login} widget
     * @gir-type Flags
     */
    enum LoginMode {
        ENABLE_CONTROL_CENTRE_MODE,
        HIDE_DSN_SELECTION_MODE,
        HIDE_DIRECT_CONNECTION_MODE,
    }


    namespace BasicForm {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * Emitted when the use has activated any of the `GdaDataEntry` widget
             * in `form`.
             * @signal
             * @run-first
             */
            activated: () => void;
            /**
             * Emitted when a GdaHolder changed in `form`
             * @signal
             * @run-first
             */
            "holder-changed": (arg0: Gda.Holder, arg1: boolean) => void;
            /**
             * Emitted when the form's layout changes
             * @signal
             * @run-first
             */
            "layout-changed": () => void;
            /**
             * Connect this signal and modify the popup menu.
             * @signal
             * @since 4.2.4
             * @run-first
             */
            "populate-popup": (arg0: Gtk.Menu) => void;
            "notify::can-expand-v": (pspec: GObject.ParamSpec) => void;
            "notify::entries-auto-default": (pspec: GObject.ParamSpec) => void;
            "notify::headers-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::paramlist": (pspec: GObject.ParamSpec) => void;
            "notify::show-actions": (pspec: GObject.ParamSpec) => void;
            "notify::xml-layout": (pspec: GObject.ParamSpec) => void;
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
            can_expand_v: boolean;
            canExpandV: boolean;
            entries_auto_default: boolean;
            entriesAutoDefault: boolean;
            headers_sensitive: boolean;
            headersSensitive: boolean;
            paramlist: any;
            show_actions: boolean;
            showActions: boolean;
            xml_layout: any;
            xmlLayout: any;
        }
    }

    /**
     * @gir-type Class
     */
    class BasicForm extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<BasicForm>;

        // Properties
        /**
         * @read-only
         */
        get can_expand_v(): boolean;

        /**
         * @read-only
         */
        get canExpandV(): boolean;

        get entries_auto_default(): boolean;
        set entries_auto_default(val: boolean);

        get entriesAutoDefault(): boolean;
        set entriesAutoDefault(val: boolean);

        /**
         * Deprecated
         */
        get headers_sensitive(): boolean;
        set headers_sensitive(val: boolean);

        /**
         * Deprecated
         */
        get headersSensitive(): boolean;
        set headersSensitive(val: boolean);

        get paramlist(): any;
        set paramlist(val: any);

        get show_actions(): boolean;
        set show_actions(val: boolean);

        get showActions(): boolean;
        set showActions(val: boolean);

        /**
         * @write-only
         */
        set xml_layout(val: any);

        /**
         * @write-only
         */
        set xmlLayout(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BasicForm.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<BasicForm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](data_set: Gda.Set): BasicForm;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        static new_in_dialog(data_set: Gda.Set, parent: (Gtk.Window | null), title: (string | null), header: (string | null)): BasicForm;

        // Signals
        /** @signal */
        connect<K extends keyof BasicForm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BasicForm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BasicForm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BasicForm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BasicForm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BasicForm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_activated(): void;

        /**
         * @param holder 
         * @param is_user_action 
         * @virtual
         */
        vfunc_holder_changed(holder: Gda.Holder, is_user_action: boolean): void;

        /**
         * @virtual
         */
        vfunc_layout_changed(): void;

        // Methods
        /**
         * Add `form`'s widgets specified by `part` to `size_group`
         * (the widgets can then be removed using `gdaui_basic_form_remove_from_size_group()`).
         * @param size_group a {@link Gtk.SizeGroup} object
         * @param part specifies which widgets in `form` are concerned
         */
        add_to_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void;

        /**
         * Makes the data entry corresponding to `holder` grab the focus for the window it's in. If `holder` is `null`,
         * then the focus is on the first entry which needs attention.
         * @param holder a {@link Gda.Holder} object, or `null`
         */
        entry_grab_focus(holder: (Gda.Holder | null)): void;

        /**
         * Sets the {@link Gdaui.DataEntry} in `form` which corresponds to the
         * `holder` parameter editable or not. If `holder` is `null`, then all the parameters
         * are concerned.
         * @param holder a {@link Gda.Holder} object; or `null`
         * @param editable `true` if corresponding data entry must be editable
         */
        entry_set_editable(holder: (Gda.Holder | null), editable: boolean): void;

        /**
         * Shows or hides the {@link Gdaui.DataEntry} in `form` which corresponds to the
         * `holder` data holder
         * @param holder a {@link Gda.Holder} object
         * @param show set to `true` to show the data entry, and to `false` to hide it
         */
        entry_set_visible(holder: Gda.Holder, show: boolean): void;

        /**
         * Get a pointer to the {@link Gda.Set} object which
         * is modified by `form`
         * @returns a pointer to the {@link Gda.Set}
         */
        get_data_set(): Gda.Set;

        /**
         * Get the {@link Gdaui.DataEntry} in `form` which corresponds to the `holder` place.
         * @param holder a {@link Gda.Holder} object
         * @returns the requested widget, or `null` if not found
         */
        get_entry_widget(holder: Gda.Holder): Gtk.Widget;

        /**
         * Get the label in `form` which corresponds to the `holder` holder.
         * @param holder a {@link Gda.Holder} object
         * @returns the requested widget, or `null` if not found
         */
        get_label_widget(holder: Gda.Holder): Gtk.Widget;

        /**
         * Retreives a pointer to a place holder widget. This feature is only available if a specific
         * layout has been defined for `form` using `gdaui_basic_form_set_layout_from_file()`.
         * @param placeholder_id the name of the requested place holder
         * @returns a pointer to the requested place holder, or `null` if not found
         */
        get_place_holder(placeholder_id: string): Gtk.Widget;

        /**
         * Tells if the form has had at least on entry changed since `form` was created or
         * `gdaui_basic_form_set_as_reference()` has been called.
         * @returns `true` if one entry has changed at least
         */
        has_changed(): boolean;

        /**
         * Tells if the form can be used as-is (if all the parameters do have some valid values)
         * @returns `true` if the form is valid
         */
        is_valid(): boolean;

        /**
         * Removes `form`'s widgets specified by `part` from `size_group`
         * (the widgets must have been added using `gdaui_basic_form_add_to_size_group()`).
         * @param size_group a {@link Gtk.SizeGroup} object
         * @param part specifies which widgets in `form` are concerned
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
         * consequence is that any sub-sequent call to `gdaui_basic_form_has_changed()`
         * will return `false` (of course until any entry is changed).
         */
        set_as_reference(): void;

        /**
         * For each entry in the form, sets it to a default value if it is possible to do so.
         */
        set_entries_to_default(): void;

        /**
         * Sets a form layout according an XML description contained in `file_name`, for the form identified
         * by the `form_name` name (as an XML layout file can contain the descriptions of several forms and grids).
         * @param file_name XML file name to use
         * @param form_name the name of the form to use, in `file_name`
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


    namespace Cloud {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            activate: (arg0: number) => void;
            "notify::label-column": (pspec: GObject.ParamSpec) => void;
            "notify::max-scale": (pspec: GObject.ParamSpec) => void;
            "notify::min-scale": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::weight-column": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            label_column: number;
            labelColumn: number;
            max_scale: number;
            maxScale: number;
            min_scale: number;
            minScale: number;
            model: Gda.DataModel;
            weight_column: number;
            weightColumn: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Cloud extends Gtk.Box implements Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Cloud>;

        // Properties
        get label_column(): number;
        set label_column(val: number);

        get labelColumn(): number;
        set labelColumn(val: number);

        get max_scale(): number;
        set max_scale(val: number);

        get maxScale(): number;
        set maxScale(val: number);

        get min_scale(): number;
        set min_scale(val: number);

        get minScale(): number;
        set minScale(val: number);

        get model(): Gda.DataModel;
        set model(val: Gda.DataModel);

        get weight_column(): number;
        set weight_column(val: number);

        get weightColumn(): number;
        set weightColumn(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cloud.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<Cloud.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: Gda.DataModel, label_column: number, weight_column: number): Cloud;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Cloud.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cloud.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cloud.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cloud.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cloud.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cloud.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param row 
         * @virtual
         */
        vfunc_activate(row: number): void;

        // Methods
        /**
         * Creates a search widget linked directly to modify `cloud`'s appearance.
         * @returns a new widget
         */
        create_filter_widget(): Gtk.Widget;

        /**
         * Filters the elements displayed in `cloud`, by altering their color.
         * @param filter the filter to use, or `null` to remove any filter
         */
        filter(filter: (string | null)): void;

        /**
         * Sets `cloud`'s selection mode
         * @param mode the desired selection mode
         */
        set_selection_mode(mode: Gtk.SelectionMode): void;

        /**
         * Specifies a function called by `cloud` to compute each row's respective weight.
         * @param func a {@link Gdaui.CloudWeightFunc} function which computes weights, or `null` to unset
         */
        set_weight_func(func: (CloudWeightFunc | null)): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;

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


    namespace Combo {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::as-list": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            as_list: boolean;
            asList: boolean;
            model: (Gda.DataModel | any);
        }
    }

    /**
     * @gir-type Class
     */
    class Combo extends Gtk.ComboBox implements Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<Combo>;

        // Properties
        get as_list(): boolean;
        set as_list(val: boolean);

        get asList(): boolean;
        set asList(val: boolean);

    // This accessor conflicts with another accessor's type in a parent class or interface.
        get model(): (Gda.DataModel | any);
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set model(val: (Gda.DataModel | any));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Combo.SignalSignatures;

        // Fields
        object: Gtk.ComboBox;

        // Constructors
        constructor(properties?: Partial<Combo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Combo;

        static new_with_model(model: Gda.DataModel, n_cols: number, cols_index: number): Combo;

        // Conflicted with Gtk.ComboBox.new_with_model
        static new_with_model(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Combo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Combo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Combo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Combo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Combo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Combo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Tells if `combo` should add a special entry representing an "undefined choice", as a `null` entry. The default is
         * that only the available choices in `combo`'s model are presented.
         * @param add_null set to `true` to add a NULL value to the combo box
         */
        add_null(add_null: boolean): void;

        /**
         * Tell if the currently selected entry represents the "undefined choice" entry.
         * @returns `true` if the `null` value is selected
         */
        is_null_selected(): boolean;

        /**
         * Makes `combo` display data stored in `model` (makes the
         * combo widget refresh its list of values and display the values contained
         * in the model). A NULL `model` will make the combo empty
         * and disassociate the previous model, if any.
         * 
         * if `n_cols` is %0, then all the columns of `model` will be displayed in `combo`.
         * @param model a {@link Gda.DataModel} object to get data from.
         * @param cols_index an array of columns to be shown, its size must be `n_cols`
         */
        set_data(model: Gda.DataModel, cols_index: number[]): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ComboBox.get_model
        get_model(...args: never[]): any;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ComboBox.set_model
        set_model(...args: never[]): any;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

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

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace DataCellRendererBin {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererPixbuf.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: (arg0: string, arg1: unknown) => void;
            "notify::data-handler": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::to-be-deleted": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
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
            data_handler: Gda.DataHandler;
            dataHandler: Gda.DataHandler;
            editable: boolean;
            to_be_deleted: boolean;
            toBeDeleted: boolean;
            type: GObject.GTypeInput;
            value: (GObject.Value | any);
        }
    }

    /**
     * @gir-type Class
     */
    class DataCellRendererBin extends Gtk.CellRendererPixbuf {
        static $gtype: GObject.GType<DataCellRendererBin>;

        // Properties
        /**
         * @construct-only
         */
        set data_handler(val: Gda.DataHandler);

        /**
         * @construct-only
         */
        set dataHandler(val: Gda.DataHandler);

        get editable(): boolean;
        set editable(val: boolean);

        /**
         * @write-only
         */
        set to_be_deleted(val: boolean);

        /**
         * @write-only
         */
        set toBeDeleted(val: boolean);

        /**
         * @construct-only
         */
        set type(val: GObject.GType);

        get value(): unknown;
        set value(val: (GObject.Value | any));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCellRendererBin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DataCellRendererBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBin;

        // Conflicted with Gtk.CellRendererPixbuf.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DataCellRendererBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataCellRendererBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataCellRendererBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataCellRendererBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param path 
         * @param new_value 
         * @virtual
         */
        vfunc_changed(path: string, new_value: unknown): void;
    }


    namespace DataCellRendererBoolean {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererToggle.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: (arg0: string, arg1: unknown) => void;
            "notify::data-handler": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::to-be-deleted": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
            "notify::indicator-size": (pspec: GObject.ParamSpec) => void;
            "notify::radio": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.CellRendererToggle.ConstructorProps {
            data_handler: Gda.DataHandler;
            dataHandler: Gda.DataHandler;
            editable: boolean;
            to_be_deleted: boolean;
            toBeDeleted: boolean;
            type: GObject.GTypeInput;
            value: (GObject.Value | any);
        }
    }

    /**
     * @gir-type Class
     */
    class DataCellRendererBoolean extends Gtk.CellRendererToggle {
        static $gtype: GObject.GType<DataCellRendererBoolean>;

        // Properties
        /**
         * @construct-only
         */
        set data_handler(val: Gda.DataHandler);

        /**
         * @construct-only
         */
        set dataHandler(val: Gda.DataHandler);

        get editable(): boolean;
        set editable(val: boolean);

        /**
         * @write-only
         */
        set to_be_deleted(val: boolean);

        /**
         * @write-only
         */
        set toBeDeleted(val: boolean);

        /**
         * @construct-only
         */
        set type(val: GObject.GType);

        get value(): unknown;
        set value(val: (GObject.Value | any));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCellRendererBoolean.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DataCellRendererBoolean.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBoolean;

        // Conflicted with Gtk.CellRendererToggle.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DataCellRendererBoolean.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererBoolean.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataCellRendererBoolean.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererBoolean.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataCellRendererBoolean.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataCellRendererBoolean.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param path 
         * @param new_value 
         * @virtual
         */
        vfunc_changed(path: string, new_value: unknown): void;
    }


    namespace DataCellRendererCombo {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererText.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: (arg0: string, arg1: (any | null), arg2: (any | null)) => void;
            "notify::data-set": (pspec: GObject.ParamSpec) => void;
            "notify::data-set-source": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::show-expander": (pspec: GObject.ParamSpec) => void;
            "notify::to-be-deleted": (pspec: GObject.ParamSpec) => void;
            "notify::values": (pspec: GObject.ParamSpec) => void;
            "notify::values-display": (pspec: GObject.ParamSpec) => void;
            "notify::align-set": (pspec: GObject.ParamSpec) => void;
            "notify::alignment": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::editable-set": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize-set": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::family-set": (pspec: GObject.ParamSpec) => void;
            "notify::font": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-set": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::rise": (pspec: GObject.ParamSpec) => void;
            "notify::rise-set": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::single-paragraph-mode": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-points": (pspec: GObject.ParamSpec) => void;
            "notify::size-set": (pspec: GObject.ParamSpec) => void;
            "notify::stretch": (pspec: GObject.ParamSpec) => void;
            "notify::stretch-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::style-set": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::variant": (pspec: GObject.ParamSpec) => void;
            "notify::variant-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.CellRendererText.ConstructorProps {
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
        }
    }

    /**
     * @gir-type Class
     */
    class DataCellRendererCombo extends Gtk.CellRendererText {
        static $gtype: GObject.GType<DataCellRendererCombo>;

        // Properties
        /**
         * @construct-only
         */
        set data_set(val: Set);

        /**
         * @construct-only
         */
        set dataSet(val: Set);

        /**
         * @construct-only
         */
        set data_set_source(val: any);

        /**
         * @construct-only
         */
        set dataSetSource(val: any);

        get set_default_if_invalid(): boolean;
        set set_default_if_invalid(val: boolean);

        get setDefaultIfInvalid(): boolean;
        set setDefaultIfInvalid(val: boolean);

        /**
         * @write-only
         */
        set show_expander(val: boolean);

        /**
         * @write-only
         */
        set showExpander(val: boolean);

        /**
         * @write-only
         */
        set to_be_deleted(val: boolean);

        /**
         * @write-only
         */
        set toBeDeleted(val: boolean);

        /**
         * @write-only
         */
        set values(val: any);

        /**
         * @write-only
         */
        set values_display(val: any);

        /**
         * @write-only
         */
        set valuesDisplay(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCellRendererCombo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DataCellRendererCombo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](paramlist: Set, source: SetSource): DataCellRendererCombo;

        // Conflicted with Gtk.CellRendererText.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DataCellRendererCombo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererCombo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataCellRendererCombo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererCombo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataCellRendererCombo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataCellRendererCombo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace DataCellRendererInfo {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRenderer.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "status-changed": (arg0: string, arg1: unknown) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::group": (pspec: GObject.ParamSpec) => void;
            "notify::iter": (pspec: GObject.ParamSpec) => void;
            "notify::store": (pspec: GObject.ParamSpec) => void;
            "notify::to-be-deleted": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
            editable: boolean;
            group: any;
            iter: Gda.DataModelIter;
            store: DataStore;
            to_be_deleted: boolean;
            toBeDeleted: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class DataCellRendererInfo extends Gtk.CellRenderer {
        static $gtype: GObject.GType<DataCellRendererInfo>;

        // Properties
        get editable(): boolean;
        set editable(val: boolean);

        /**
         * @construct-only
         */
        set group(val: any);

        /**
         * @construct-only
         */
        set iter(val: Gda.DataModelIter);

        /**
         * @construct-only
         */
        set store(val: DataStore);

        /**
         * @write-only
         */
        set to_be_deleted(val: boolean);

        /**
         * @write-only
         */
        set toBeDeleted(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCellRendererInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DataCellRendererInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](store: DataStore, iter: Gda.DataModelIter, group: SetGroup): DataCellRendererInfo;

        // Signals
        /** @signal */
        connect<K extends keyof DataCellRendererInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataCellRendererInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataCellRendererInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataCellRendererInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param path 
         * @param requested_action 
         * @virtual
         */
        vfunc_status_changed(path: string, requested_action: Gda.ValueAttribute): void;
    }


    namespace DataCellRendererTextual {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererText.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: (arg0: string, arg1: unknown) => void;
            "notify::data-handler": (pspec: GObject.ParamSpec) => void;
            "notify::options": (pspec: GObject.ParamSpec) => void;
            "notify::to-be-deleted": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::align-set": (pspec: GObject.ParamSpec) => void;
            "notify::alignment": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::background": (pspec: GObject.ParamSpec) => void;
            "notify::background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::editable-set": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize-set": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::family-set": (pspec: GObject.ParamSpec) => void;
            "notify::font": (pspec: GObject.ParamSpec) => void;
            "notify::font-desc": (pspec: GObject.ParamSpec) => void;
            "notify::foreground": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::foreground-set": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::language-set": (pspec: GObject.ParamSpec) => void;
            "notify::markup": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::rise": (pspec: GObject.ParamSpec) => void;
            "notify::rise-set": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-set": (pspec: GObject.ParamSpec) => void;
            "notify::single-paragraph-mode": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::size-points": (pspec: GObject.ParamSpec) => void;
            "notify::size-set": (pspec: GObject.ParamSpec) => void;
            "notify::stretch": (pspec: GObject.ParamSpec) => void;
            "notify::stretch-set": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough": (pspec: GObject.ParamSpec) => void;
            "notify::strikethrough-set": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::style-set": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::underline": (pspec: GObject.ParamSpec) => void;
            "notify::underline-set": (pspec: GObject.ParamSpec) => void;
            "notify::variant": (pspec: GObject.ParamSpec) => void;
            "notify::variant-set": (pspec: GObject.ParamSpec) => void;
            "notify::weight": (pspec: GObject.ParamSpec) => void;
            "notify::weight-set": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.CellRendererText.ConstructorProps {
            data_handler: Gda.DataHandler;
            dataHandler: Gda.DataHandler;
            options: string;
            to_be_deleted: boolean;
            toBeDeleted: boolean;
            type: GObject.GTypeInput;
            value: any;
        }
    }

    /**
     * @gir-type Class
     */
    class DataCellRendererTextual extends Gtk.CellRendererText {
        static $gtype: GObject.GType<DataCellRendererTextual>;

        // Properties
        /**
         * @construct-only
         */
        set data_handler(val: Gda.DataHandler);

        /**
         * @construct-only
         */
        set dataHandler(val: Gda.DataHandler);

        /**
         * @write-only
         */
        set options(val: string);

        /**
         * @write-only
         */
        set to_be_deleted(val: boolean);

        /**
         * @write-only
         */
        set toBeDeleted(val: boolean);

        /**
         * @construct-only
         */
        set type(val: GObject.GType);

        /**
         * @write-only
         */
        set value(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCellRendererTextual.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DataCellRendererTextual.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: (Gda.DataHandler | null), type: GObject.GType, options: string): DataCellRendererTextual;

        // Conflicted with Gtk.CellRendererText.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DataCellRendererTextual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererTextual.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataCellRendererTextual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCellRendererTextual.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataCellRendererTextual.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataCellRendererTextual.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param path 
         * @param new_value 
         * @virtual
         */
        vfunc_changed(path: string, new_value: unknown): void;
    }


    namespace DataFilter {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::data-widget": (pspec: GObject.ParamSpec) => void;
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
            data_widget: DataProxy;
            dataWidget: DataProxy;
        }
    }

    /**
     * @gir-type Class
     */
    class DataFilter extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DataFilter>;

        // Properties
        get data_widget(): DataProxy;
        set data_widget(val: DataProxy);

        get dataWidget(): DataProxy;
        set dataWidget(val: DataProxy);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataFilter.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<DataFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](data_widget: DataProxy): DataFilter;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DataFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

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


    namespace DataProxyInfo {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::data-proxy": (pspec: GObject.ParamSpec) => void;
            "notify::ui-manager": (pspec: GObject.ParamSpec) => void;
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
            data_proxy: DataProxy;
            dataProxy: DataProxy;
            ui_manager: Gtk.UIManager;
            uiManager: Gtk.UIManager;
        }
    }

    /**
     * @gir-type Class
     */
    class DataProxyInfo extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DataProxyInfo>;

        // Properties
        get data_proxy(): DataProxy;
        set data_proxy(val: DataProxy);

        get dataProxy(): DataProxy;
        set dataProxy(val: DataProxy);

        /**
         * Use this property to obtain the {@link Gtk.UIManager} object internally used (to add new actions
         * for example).
         * @since 4.2.9
         * @read-only
         */
        get ui_manager(): Gtk.UIManager;

        /**
         * Use this property to obtain the {@link Gtk.UIManager} object internally used (to add new actions
         * for example).
         * @since 4.2.9
         * @read-only
         */
        get uiManager(): Gtk.UIManager;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataProxyInfo.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<DataProxyInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](data_proxy: DataProxy, flags: DataProxyInfoFlag): DataProxyInfo;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DataProxyInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataProxyInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataProxyInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataProxyInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataProxyInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataProxyInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

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


    namespace DataStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::prepend-null-entry": (pspec: GObject.ParamSpec) => void;
            "notify::proxy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeModel.ConstructorProps {
            model: any;
            prepend_null_entry: boolean;
            prependNullEntry: boolean;
            proxy: any;
        }
    }

    /**
     * @gir-type Class
     */
    class DataStore extends GObject.Object implements Gtk.TreeModel {
        static $gtype: GObject.GType<DataStore>;

        // Properties
        /**
         * @construct-only
         */
        get model(): any;

        get prepend_null_entry(): boolean;
        set prepend_null_entry(val: boolean);

        get prependNullEntry(): boolean;
        set prependNullEntry(val: boolean);

        /**
         * @read-only
         */
        get proxy(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataStore.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<DataStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DataStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a {@link Gtk.TreeModel} interface with a {@link Gda.DataModel}
         * @param model a {@link Gda.DataModel} object
         */
        static ["new"](model: Gda.DataModel): Gtk.TreeModel;

        // Methods
        /**
         * Appends a new row.
         * @param iter an unset {@link Gtk.TreeIter} to set to the appended row
         * @returns `true` if no error occurred
         */
        append(iter: Gtk.TreeIter): boolean;

        /**
         * Marks the row pointed by `iter` to be deleted
         * @param iter the considered row
         */
        ["delete"](iter: Gtk.TreeIter): void;

        /**
         * Sets `iter` to the first row where all the values in `values` at the columns identified at
         * `cols_index` match. If the row can't be identified, then the contents of `iter` is not modified.
         * 
         * NOTE: the `cols_index` array MUST contain a column index for each value in `values`
         * @param values a list of {@link GObject.Value} values
         * @param cols_index an array of `gint` containing the column number to match each value of `values`
         * @returns `true` if the row has been identified `iter` was set
         */
        get_iter_from_values(values: (GObject.Value | any)[], cols_index: number): [boolean, Gtk.TreeIter];

        /**
         * @returns the internal {@link Gda.DataProxy} being used by `store`
         */
        get_proxy(): Gda.DataProxy;

        /**
         * Get the number of the row represented by `iter`
         * @param iter a valid {@link Gtk.TreeIter}
         * @returns the row number, or -1 if an error occurred
         */
        get_row_from_iter(iter: Gtk.TreeIter): number;

        /**
         * Stores a value in the `store` data model.
         * @param iter the considered row
         * @param col the data model column
         * @param value the value to store (gets copied)
         * @returns `true` on success
         */
        set_value(iter: Gtk.TreeIter, col: number, value: (GObject.Value | any)): boolean;

        /**
         * Remove the "to be deleted" mark the row pointed by `iter`, if it existed.
         * @param iter the considered row
         */
        undelete(iter: Gtk.TreeIter): void;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: (Gtk.TreePath | null)): Gtk.TreeModel;

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
        iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

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
        iter_n_children(iter: (Gtk.TreeIter | null)): number;

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
        iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

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
        rows_reordered(path: Gtk.TreePath, iter: (Gtk.TreeIter | null), new_order: number[]): void;

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
        vfunc_iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

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
        vfunc_iter_n_children(iter: (Gtk.TreeIter | null)): number;

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
        vfunc_iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

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


    namespace Entry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::suffix": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
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
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            prefix: string;
            suffix: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Entry extends Gtk.Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<Entry>;

        // Properties
        get prefix(): string;
        set prefix(val: string);

        get suffix(): string;
        set suffix(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Entry.SignalSignatures;

        // Fields
        entry: Gtk.Entry;

        // Constructors
        constructor(properties?: Partial<Entry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](prefix: (string | null), suffix: (string | null)): Entry;

        // Conflicted with Gtk.Entry.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Entry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Entry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Entry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Entry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Entry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * To be defined by children classes to handle delete themselves
         * @param virt_start_pos the starting position.
         * @param virt_end_pos the end position (not included in deletion), always > `start_pos`
         * @param offset an offset to add to positions using `virt_start_pos` or `virt_end_pos` as reference          to call gtk_editable_*()
         * @virtual
         */
        vfunc_assume_delete(virt_start_pos: number, virt_end_pos: number, offset: number): void;

        /**
         * To be defined by children classes to handle insert themselves
         * @param text the text to be inserted
         * @param text_length `text`'s length in bytes (not characters)
         * @param virt_pos the position where `text` is to be inserted
         * @param offset an offset to add to positions using `virt_pos` as reference to call gtk_editable_*()
         * @virtual
         */
        vfunc_assume_insert(text: string, text_length: number, virt_pos: number, offset: number): void;

        /**
         * If defined, sould return a text suitable to display EMPTY value, it will be called when
         * entry was set to NULL and is becomming not NULL
         * @virtual
         */
        vfunc_get_empty_text(): string;

        // Methods
        /**
         * Get a new string containing the contents of the widget as a string without the
         * prefix and/or suffix and/or format if they have been specified. This method differs
         * from calling `gtk_entry_get_text()` since the latest will return the complete text
         * in `entry` including prefix and/or suffix and/or format.
         * 
         * Note: `null` may be returned if this method is called while the widget is working on some
         * internal modifications, or if `gdaui_entry_set_text()` was called with a `null`
         * as its `text` argument.
         * @returns a new string, or `null`
         */
        get_text(): string;

        /**
         * Sets the maximum allowed length of the contents of the widget.
         * If the current contents are longer than the given length, then they will be truncated to fit.
         * 
         * The difference with `gtk_entry_set_max_length()` is that the max length does not take into account
         * the prefix and/or suffix parts which may have been set.
         * @param max the maximum length of the entry, or 0 for no maximum.
         */
        set_max_length(max: number): void;

        /**
         * Sets `prefix` as a prefix string of `entry`: that string will always be displayed in the
         * text entry, will not be modifiable, and won't be part of the returned text
         * @param prefix a prefix string
         */
        set_prefix(prefix: string): void;

        /**
         * Sets `suffix` as a suffix string of `entry`: that string will always be displayed in the
         * text entry, will not be modifiable, and won't be part of the returned text
         * @param suffix a suffix string
         */
        set_suffix(suffix: string): void;

        /**
         * Sets `text` into `entry`.
         * 
         * As a side effect, if `text` is `null`, then the entry will
         * be completely empty, whereas if `text` is the empty string (""), then
         * `entry` will display the prefix and/or suffix and/or format string if they have
         * been set. Except this case, calling this method is similar to calling
         * `gtk_entry_set_text()`
         * @param text the text to set into `entry`, or `null`
         */
        set_text(text: (string | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Entry.set_text
        set_text(...args: never[]): any;

        /**
         * Sets `entry`'s maximum width in characters, without taking into account
         * any prefix or suffix (which will automatically be handled). If you want to take
         * a prefix or suffix into account direclty, then use `gtk_entry_set_width_chars()`
         * @param max_width maximum width, or -1
         */
        set_width_chars(max_width: number): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Copies the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        copy_clipboard(): void;

        /**
         * Removes the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        cut_clipboard(): void;

        /**
         * Deletes the currently selected text of the editable.
         * This call doesn’t do anything if there is no selected text.
         */
        delete_selection(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @returns a pointer to the contents of the widget as a      string. This string is allocated by the {@link Gtk.Editable}      implementation and should be freed by the caller.
         */
        get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves whether `editable` is editable. See
         * `gtk_editable_set_editable()`.
         * @returns `true` if `editable` is editable.
         */
        get_editable(): boolean;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @returns the cursor position
         */
        get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @returns `true` if an area is selected, `false` otherwise
         */
        get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         */
        insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Pastes the content of the clipboard to the current position of the
         * cursor in the editable.
         */
        paste_clipboard(): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         */
        select_region(start_pos: number, end_pos: number): void;

        /**
         * Determines if the user can edit the text in the editable
         * widget or not.
         * @param is_editable `true` if the user is allowed to edit the text   in the widget
         */
        set_editable(is_editable: boolean): void;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         */
        set_position(position: number): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @virtual
         */
        vfunc_get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @virtual
         */
        vfunc_get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @virtual
         */
        vfunc_get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         * @virtual
         */
        vfunc_set_position(position: number): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         * @virtual
         */
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    }


    namespace EntryBin {
        // Signal signatures
        interface SignalSignatures extends EntryWrapper.SignalSignatures {
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryWrapper.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EntryBin extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryBin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryBin.SignalSignatures;

        // Fields
        object: EntryWrapper;

        // Constructors
        constructor(properties?: Partial<EntryBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler, type: GObject.GType): EntryBin;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

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


    namespace EntryBoolean {
        // Signal signatures
        interface SignalSignatures extends EntryWrapper.SignalSignatures {
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryWrapper.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EntryBoolean extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryBoolean>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryBoolean.SignalSignatures;

        // Fields
        object: EntryWrapper;

        // Constructors
        constructor(properties?: Partial<EntryBoolean.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler, type: GObject.GType): EntryBoolean;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryBoolean.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBoolean.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryBoolean.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryBoolean.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryBoolean.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryBoolean.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

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


    namespace EntryCombo {
        // Signal signatures
        interface SignalSignatures extends EntryShell.SignalSignatures {
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryShell.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            set_default_if_invalid: boolean;
            setDefaultIfInvalid: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryCombo extends EntryShell implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryCombo>;

        // Properties
        get set_default_if_invalid(): boolean;
        set set_default_if_invalid(val: boolean);

        get setDefaultIfInvalid(): boolean;
        set setDefaultIfInvalid(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryCombo.SignalSignatures;

        // Fields
        object: EntryShell;

        // Constructors
        constructor(properties?: Partial<EntryCombo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](paramlist: Set, source: SetSource): EntryCombo;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryCombo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryCombo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryCombo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryCombo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryCombo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryCombo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get a list of all the values in `combo`'s data model's selected row. The list
         * must be freed by the caller.
         * @returns a new list of values
         */
        get_all_values(): unknown[];

        /**
         * Get the original values stored within `combo`. The returned values are the ones
         * within `combo`, so they must not be freed afterwards; the list has to be freed afterwards.
         * @returns a new list of values
         */
        get_reference_values(): unknown[];

        /**
         * Get the values stored within `combo`. The returned values are the ones
         * within `combo`, so they must not be freed afterwards, however the returned
         * list has to be freed afterwards.
         * @returns a new list of values
         */
        get_values(): unknown[];

        /**
         * Sets the default values of `combo` to the specified ones. None of the
         * values provided in the list is modified.
         * @param values a list of {@link GObject.Value} values
         */
        set_default_values(values: (GObject.Value | any)[]): void;

        /**
         * Sets the original values of `combo` to the specified ones. None of the
         * values provided in the list is modified.
         * @param values a list of {@link GObject.Value} values
         */
        set_reference_values(values: (GObject.Value | any)[]): void;

        /**
         * Sets the values of `combo` to the specified ones. None of the
         * values provided in the list is modified.
         * 
         * `values` holds a list of {@link GObject.Value} values, one for each parameter that is present in the `node` argument
         * of the `gdaui_entry_combo_new()` function which created `combo`.
         * 
         * An error can occur when there is no corresponding value(s) to be displayed
         * for the provided values.
         * 
         * If `values` is `null`, then the entry itself is set to NULL;
         * @param values a list of {@link GObject.Value} values, or `null`
         * @returns `true` if no error occurred.
         */
        set_values(values: (GObject.Value[] | null)): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

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


    namespace EntryCommonTime {
        // Signal signatures
        interface SignalSignatures extends EntryWrapper.SignalSignatures {
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryWrapper.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            editing_canceled: boolean;
            editingCanceled: boolean;
            type: number;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryCommonTime extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryCommonTime>;

        // Properties
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        get type(): number;
        set type(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryCommonTime.SignalSignatures;

        // Fields
        object: EntryWrapper;

        // Constructors
        constructor(properties?: Partial<EntryCommonTime.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EntryCommonTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryCommonTime.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryCommonTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryCommonTime.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryCommonTime.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryCommonTime.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

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


    namespace EntryDate {
        // Signal signatures
        interface SignalSignatures extends EntryCommonTime.SignalSignatures {
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryCommonTime.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EntryDate extends EntryCommonTime implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryDate>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryDate.SignalSignatures;

        // Fields
        object: EntryCommonTime;

        // Constructors
        constructor(properties?: Partial<EntryDate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler): EntryDate;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryDate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryDate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryDate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryDate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryDate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryDate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

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

        /**
         * Causes `widget` to have the keyboard focus for the {@link Gtk.Window} it's
         * inside. `widget` must be a focusable widget, such as a {@link Gtk.Entry};
         * something like {@link Gtk.Frame} won’t work.
         * 
         * More precisely, it must have the `GTK_CAN_FOCUS` flag set. Use
         * `gtk_widget_set_can_focus()` to modify that flag.
         * 
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         * @virtual
         */
        vfunc_grab_focus(): void;
    }


    namespace EntryNone {
        // Signal signatures
        interface SignalSignatures extends EntryWrapper.SignalSignatures {
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryWrapper.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EntryNone extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryNone>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryNone.SignalSignatures;

        // Fields
        object: EntryWrapper;

        // Constructors
        constructor(properties?: Partial<EntryNone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: GObject.GType): EntryNone;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryNone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryNone.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryNone.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryNone.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryNone.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryNone.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

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


    namespace EntryNumber {
        // Signal signatures
        interface SignalSignatures extends EntryWrapper.SignalSignatures {
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
            "notify::options": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryWrapper.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            editing_canceled: boolean;
            editingCanceled: boolean;
            options: string;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryNumber extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryNumber>;

        // Properties
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * @write-only
         */
        set options(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryNumber.SignalSignatures;

        // Fields
        object: EntryWrapper;

        // Constructors
        constructor(properties?: Partial<EntryNumber.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler, type: GObject.GType, options: string): EntryNumber;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryNumber.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryNumber.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryNumber.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryNumber.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryNumber.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryNumber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param type 
         */
        static is_type_numeric(type: GObject.GType): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

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


    namespace EntryShell {
        // Signal signatures
        interface SignalSignatures extends Gtk.Viewport.SignalSignatures {
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Viewport.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            actions: boolean;
            handler: Gda.DataHandler;
            is_cell_renderer: boolean;
            isCellRenderer: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryShell extends Gtk.Viewport implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryShell>;

        // Properties
        get actions(): boolean;
        set actions(val: boolean);

        get handler(): Gda.DataHandler;
        set handler(val: Gda.DataHandler);

        get is_cell_renderer(): boolean;
        set is_cell_renderer(val: boolean);

        get isCellRenderer(): boolean;
        set isCellRenderer(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryShell.SignalSignatures;

        // Fields
        object: Gtk.Viewport;

        // Constructors
        constructor(properties?: Partial<EntryShell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EntryShell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryShell.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryShell.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryShell.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryShell.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryShell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Packs a `GTkWidget` widget into the GdauiEntryShell.
         * @param main_widget a {@link Gtk.Widget} to pack into `shell`
         */
        pack_entry(main_widget: Gtk.Widget): void;

        /**
         * Forces the shell to refresh its display (mainly the color of the
         * button).
         */
        refresh(): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         */
        set_ucolor(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Defines if `shell`'s contents is in an undefined state (shows or hides `shell`'s contents)
         * @param unknown set to `true` if `shell`'s contents is unavailable and should not be modified
         */
        set_unknown(unknown: boolean): void;

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
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

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
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

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


    namespace EntryString {
        // Signal signatures
        interface SignalSignatures extends EntryWrapper.SignalSignatures {
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
            "notify::multiline": (pspec: GObject.ParamSpec) => void;
            "notify::options": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryWrapper.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            editing_canceled: boolean;
            editingCanceled: boolean;
            multiline: boolean;
            options: string;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryString extends EntryWrapper implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryString>;

        // Properties
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        get multiline(): boolean;
        set multiline(val: boolean);

        /**
         * @write-only
         */
        set options(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryString.SignalSignatures;

        // Fields
        object: EntryWrapper;

        // Constructors
        constructor(properties?: Partial<EntryString.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler, type: GObject.GType, options: string): EntryString;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryString.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryString.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryString.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryString.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryString.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryString.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Makes `de` grab the focus for the window it's in
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

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


    namespace EntryTime {
        // Signal signatures
        interface SignalSignatures extends EntryCommonTime.SignalSignatures {
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryCommonTime.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EntryTime extends EntryCommonTime implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryTime>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryTime.SignalSignatures;

        // Fields
        object: EntryCommonTime;

        // Constructors
        constructor(properties?: Partial<EntryTime.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler): EntryTime;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryTime.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryTime.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryTime.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryTime.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryTime.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

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

        /**
         * Causes `widget` to have the keyboard focus for the {@link Gtk.Window} it's
         * inside. `widget` must be a focusable widget, such as a {@link Gtk.Entry};
         * something like {@link Gtk.Frame} won’t work.
         * 
         * More precisely, it must have the `GTK_CAN_FOCUS` flag set. Use
         * `gtk_widget_set_can_focus()` to modify that flag.
         * 
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         * @virtual
         */
        vfunc_grab_focus(): void;
    }


    namespace EntryTimestamp {
        // Signal signatures
        interface SignalSignatures extends EntryCommonTime.SignalSignatures {
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryCommonTime.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class EntryTimestamp extends EntryCommonTime implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryTimestamp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryTimestamp.SignalSignatures;

        // Fields
        object: EntryCommonTime;

        // Constructors
        constructor(properties?: Partial<EntryTimestamp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dh: Gda.DataHandler): EntryTimestamp;

        // Conflicted with Gtk.Viewport.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EntryTimestamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryTimestamp.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryTimestamp.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryTimestamp.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryTimestamp.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryTimestamp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

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

        /**
         * Causes `widget` to have the keyboard focus for the {@link Gtk.Window} it's
         * inside. `widget` must be a focusable widget, such as a {@link Gtk.Entry};
         * something like {@link Gtk.Frame} won’t work.
         * 
         * More precisely, it must have the `GTK_CAN_FOCUS` flag set. Use
         * `gtk_widget_set_can_focus()` to modify that flag.
         * 
         * The widget also needs to be realized and mapped. This is indicated by the
         * related signals. Grabbing the focus immediately after creating the widget
         * will likely fail and cause critical warnings.
         * @virtual
         */
        vfunc_grab_focus(): void;
    }


    namespace EntryWrapper {
        // Signal signatures
        interface SignalSignatures extends EntryShell.SignalSignatures {
            "notify::set-default-if-invalid": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::handler": (pspec: GObject.ParamSpec) => void;
            "notify::is-cell-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends EntryShell.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataEntry.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            set_default_if_invalid: boolean;
            setDefaultIfInvalid: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class EntryWrapper extends EntryShell implements Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<EntryWrapper>;

        // Properties
        get set_default_if_invalid(): boolean;
        set set_default_if_invalid(val: boolean);

        get setDefaultIfInvalid(): boolean;
        set setDefaultIfInvalid(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EntryWrapper.SignalSignatures;

        // Fields
        object: EntryShell;

        // Constructors
        constructor(properties?: Partial<EntryWrapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EntryWrapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryWrapper.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EntryWrapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EntryWrapper.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EntryWrapper.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EntryWrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param horiz 
         * @virtual
         */
        vfunc_can_expand(horiz: boolean): boolean;

        /**
         * @virtual
         */
        vfunc_grab_focus(): void;

        /**
         * @virtual
         */
        vfunc_is_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_real_get_value(): (GObject.Value | any);

        /**
         * @param value 
         * @virtual
         */
        vfunc_real_set_value(value: unknown): void;

        /**
         * @param editable 
         * @virtual
         */
        vfunc_set_editable(editable: boolean): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_value_is_equal_to(value: unknown): boolean;

        /**
         * @virtual
         */
        vfunc_value_is_null(): boolean;

        // Methods
        /**
         * Signals to `gwrap` that the entry has been activated (that is the user
         * pressed ENTER for example to signify he has finished entering data)
         */
        contents_activated(): void;

        /**
         * Signals to `gwrap` that the entry has changed
         */
        contents_changed(): void;

        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;

        /**
         * @virtual
         */
        vfunc_contents_activated(): void;

        /**
         * @virtual
         */
        vfunc_contents_modified(): void;

        /**
         * @virtual
         */
        vfunc_contents_valid(): boolean;

        /**
         * @virtual
         */
        vfunc_expand_changed(): void;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @virtual
         */
        vfunc_get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @virtual
         */
        vfunc_get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @virtual
         */
        vfunc_get_handler(): Gda.DataHandler;

        /**
         * @virtual
         */
        vfunc_get_ref_value(): (GObject.Value | any);

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @virtual
         */
        vfunc_get_value(): (GObject.Value | any);

        /**
         * Fetch the type of data the GdauiDataEntry handles
         * @virtual
         */
        vfunc_get_value_type(): GObject.GType;

        /**
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
         * mask are set, the other ones are ignored.
         * @param attrs the attributes to set (OR'ed between them)
         * @param mask the mask corresponding to the considered attributes
         * @virtual
         */
        vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_ref_value(value: unknown): void;

        /**
         * Defines the color to be used when `de` displays an invalid value. Any value not
         * between 0. and 1. will result in the default hard coded values to be used (grayish).
         * @param red the red component of a color
         * @param green the green component of a color
         * @param blue the blue component of a color
         * @param alpha the alpha component of a color
         * @virtual
         */
        vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         * @virtual
         */
        vfunc_set_value(value: (GObject.Value | null)): void;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_value_default(value: unknown): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         * @virtual
         */
        vfunc_set_value_type(type: GObject.GType): void;

        /**
         * @virtual
         */
        vfunc_status_changed(): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @virtual
         */
        vfunc_validate(): boolean;

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


    namespace Form {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::info": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::raw-form": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataProxy.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            info: DataProxyInfo;
            model: Gda.DataModel;
            raw_form: RawForm;
            rawForm: RawForm;
        }
    }

    /**
     * @gir-type Class
     */
    class Form extends Gtk.Box implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Form>;

        // Properties
        /**
         * @read-only
         */
        get info(): DataProxyInfo;

        /**
         * @construct-only
         */
        get model(): Gda.DataModel;

        /**
         * @read-only
         */
        get raw_form(): RawForm;

        /**
         * @read-only
         */
        get rawForm(): RawForm;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Form.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<Form.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: Gda.DataModel): Form;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Form.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Form.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Form.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Form.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Form.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Form.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
         * can be edited or not.
         * @param column column number of the data
         * @param editable set to `true` to make the column editable
         */
        column_set_editable(column: number, editable: boolean): void;

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on) must show its
         * actions menu or not.
         * @param column column number of the data, or -1 to apply the setting to all the columns
         * @param show_actions set to `true` if the actions menu must be shown
         */
        column_show_actions(column: number, show_actions: boolean): void;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @returns the {@link Gtk.ActionGroup} with all the possible actions on the widget.
         */
        get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @returns a {@link Gda.DataProxy} pointer
         */
        get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @returns the write mode used by `iface`
         */
        get_write_mode(): DataProxyWriteMode;

        /**
         * Forces the widget to perform the selected `action`, as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a {@link Gdaui.Action} action
         */
        perform_action(action: Action): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @returns TRUE if the proposed mode has been taken into account
         */
        set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @virtual
         */
        vfunc_get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @virtual
         */
        vfunc_get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @virtual
         */
        vfunc_get_write_mode(): DataProxyWriteMode;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_proxy_changed(proxy: Gda.DataProxy): void;

        /**
         * @param column 
         * @param editable 
         * @virtual
         */
        vfunc_set_column_editable(column: number, editable: boolean): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @virtual
         */
        vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * @param column 
         * @param show_actions 
         * @virtual
         */
        vfunc_show_column_actions(column: number, show_actions: boolean): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;

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


    namespace FormattedEntry {
        // Signal signatures
        interface SignalSignatures extends Entry.SignalSignatures {
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::mask": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::suffix": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            format: string;
            mask: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FormattedEntry extends Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<FormattedEntry>;

        // Properties
        get format(): string;
        set format(val: string);

        get mask(): string;
        set mask(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormattedEntry.SignalSignatures;

        // Fields
        entry: Entry;

        // Constructors
        constructor(properties?: Partial<FormattedEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](format: string, mask: (string | null)): FormattedEntry;

        // Conflicted with Gdaui.Entry.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FormattedEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormattedEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FormattedEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FormattedEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FormattedEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FormattedEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get `entry`'s contents. This function is similar to `gdaui_get_text()` except
         * that it optionnally uses the information contained in `mask` when `gdaui_formatted_entry_new()`
         * was called to format the output differently.
         * @returns a new string, or `null`
         */
        get_text(): string;

        /**
         * Specifies that `entry` should call `insert_func` when the user wants to insert a char
         * which is anot allowed, to perform other actions
         * @param insert_func a {@link Gdaui.FormattedEntryInsertFunc}, or `null`
         */
        set_insert_func(insert_func: (FormattedEntryInsertFunc | null)): void;
    }


    namespace Grid {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::info": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::raw-grid": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataProxy.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            info: DataProxyInfo;
            model: Gda.DataModel;
            raw_grid: RawGrid;
            rawGrid: RawGrid;
        }
    }

    /**
     * @gir-type Class
     */
    class Grid extends Gtk.Box implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Grid>;

        // Properties
        /**
         * @read-only
         */
        get info(): DataProxyInfo;

        get model(): Gda.DataModel;
        set model(val: Gda.DataModel);

        /**
         * @read-only
         */
        get raw_grid(): RawGrid;

        /**
         * @read-only
         */
        get rawGrid(): RawGrid;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Grid.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<Grid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: (Gda.DataModel | null)): Grid;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Grid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Grid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Grid.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Grid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the size of each chunk of data to display: the maximum number of rows which
         * can be displayed at a time. See `gdaui_raw_grid_set_sample_size()` and `gda_data_proxy_set_sample_size()`
         * @param sample_size the size of the sample displayed in `grid`
         */
        set_sample_size(sample_size: number): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
         * can be edited or not.
         * @param column column number of the data
         * @param editable set to `true` to make the column editable
         */
        column_set_editable(column: number, editable: boolean): void;

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on) must show its
         * actions menu or not.
         * @param column column number of the data, or -1 to apply the setting to all the columns
         * @param show_actions set to `true` if the actions menu must be shown
         */
        column_show_actions(column: number, show_actions: boolean): void;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @returns the {@link Gtk.ActionGroup} with all the possible actions on the widget.
         */
        get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @returns a {@link Gda.DataProxy} pointer
         */
        get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @returns the write mode used by `iface`
         */
        get_write_mode(): DataProxyWriteMode;

        /**
         * Forces the widget to perform the selected `action`, as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a {@link Gdaui.Action} action
         */
        perform_action(action: Action): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @returns TRUE if the proposed mode has been taken into account
         */
        set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @virtual
         */
        vfunc_get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @virtual
         */
        vfunc_get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @virtual
         */
        vfunc_get_write_mode(): DataProxyWriteMode;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_proxy_changed(proxy: Gda.DataProxy): void;

        /**
         * @param column 
         * @param editable 
         * @virtual
         */
        vfunc_set_column_editable(column: number, editable: boolean): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @virtual
         */
        vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * @param column 
         * @param show_actions 
         * @virtual
         */
        vfunc_show_column_actions(column: number, show_actions: boolean): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;

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


    namespace Login {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            changed: (arg0: boolean) => void;
            "notify::dsn": (pspec: GObject.ParamSpec) => void;
            "notify::valid": (pspec: GObject.ParamSpec) => void;
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
            dsn: string;
            valid: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Login extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Login>;

        // Properties
        get dsn(): string;
        set dsn(val: string);

        /**
         * @read-only
         */
        get valid(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Login.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Login.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dsn: (string | null)): Login;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Login.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Login.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Login.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Login.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Login.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Login.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param is_valid 
         * @virtual
         */
        vfunc_changed(is_valid: boolean): void;

        // Methods
        /**
         * Get the information specified in `login` as a pointer to a (read-only) {@link Gda.DsnInfo}.
         * If the connection is not specified by a DSN, then the 'name' attribute of the returned
         * {@link Gda.DsnInfo} will be `null`, and otherwise it will contain the name of the selected DSN.
         * @returns a pointer to a (read-only) {@link Gda.DsnInfo}.
         */
        get_connection_information(): Gda.DsnInfo;

        /**
         * Changes the information displayed in `login`, to represent `cinfo`.
         * If `login`'s mode has {@link Gdaui.LoginMode.HIDE_DIRECT_CONNECTION_MODE}, then
         * if `cinfo`->name is not `null` it is displayed in the DSN selector, otherwise
         * a warning is shown and the result
         * is the same as having passed `null` for the `cinfo` argument.
         * 
         * In any case `login`'s mode (set by `gdaui_login_set_mode()`) is not changed.
         * @param cinfo a pointer to a structure representing the information to display.
         */
        set_connection_information(cinfo: Gda.DsnInfo): void;

        /**
         * Changes the information displayed in `login`, to represent `dsn`.
         * If `login`'s mode has {@link Gdaui.LoginMode.HIDE_DSN_SELECTION_MODE}, then
         * the DSN information is extracted and displayed in the direct login area.
         * 
         * If `dsn` is not a declared data source name, then a warning is shown and the result
         * is the same as having passed `null` for the `dsn` argument.
         * 
         * In any case `login`'s mode (set by `gdaui_login_set_mode()`) is not changed.
         * @param dsn a data source name, or `null`
         */
        set_dsn(dsn: (string | null)): void;

        /**
         * Set how `login` operates
         * @param mode a flag
         */
        set_mode(mode: LoginMode): void;

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


    namespace NumericEntry {
        // Signal signatures
        interface SignalSignatures extends Entry.SignalSignatures {
            "notify::decimal-sep": (pspec: GObject.ParamSpec) => void;
            "notify::n-decimals": (pspec: GObject.ParamSpec) => void;
            "notify::thousands-sep": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::prefix": (pspec: GObject.ParamSpec) => void;
            "notify::suffix": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            decimal_sep: number;
            decimalSep: number;
            n_decimals: number;
            nDecimals: number;
            thousands_sep: number;
            thousandsSep: number;
            type: GObject.GTypeInput;
        }
    }

    /**
     * @gir-type Class
     */
    class NumericEntry extends Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<NumericEntry>;

        // Properties
        get decimal_sep(): number;
        set decimal_sep(val: number);

        get decimalSep(): number;
        set decimalSep(val: number);

        get n_decimals(): number;
        set n_decimals(val: number);

        get nDecimals(): number;
        set nDecimals(val: number);

        get thousands_sep(): number;
        set thousands_sep(val: number);

        get thousandsSep(): number;
        set thousandsSep(val: number);

        get type(): GObject.GType;
        set type(val: GObject.GType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NumericEntry.SignalSignatures;

        // Fields
        entry: Entry;

        // Constructors
        constructor(properties?: Partial<NumericEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: GObject.GType): NumericEntry;

        // Conflicted with Gdaui.Entry.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof NumericEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NumericEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NumericEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NumericEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NumericEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NumericEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_value(): unknown;
    }


    namespace ProviderSelector {
        // Signal signatures
        interface SignalSignatures extends Combo.SignalSignatures {
            "notify::as-list": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends Combo.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ProviderSelector extends Combo implements Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<ProviderSelector>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProviderSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProviderSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ProviderSelector;

        // Signals
        /** @signal */
        connect<K extends keyof ProviderSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProviderSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProviderSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProviderSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the selected provider.
         * @returns the selected provider, or `null` if no provider is selected
         */
        get_provider(): string;

        /**
         * Get the selected provider as a {@link Gda.ServerProvider} object
         * @returns a {@link Gda.ServerProvider} or `null` if an error occurred
         */
        get_provider_obj(): Gda.ServerProvider;

        /**
         * Forces `selector` to be set on `provider`
         * @param provider the provider to be selected, or `null` for the default (SQLite)
         * @returns `true` if `provider` has been selected
         */
        set_provider(provider: (string | null)): boolean;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ComboBox.get_model
        get_model(...args: never[]): any;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ComboBox.set_model
        set_model(...args: never[]): any;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;

        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         * 
         * If the object already had an association with that name,
         * the old association will be destroyed.
         * 
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data: (any | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gdaui.Combo.set_data
        set_data(...args: never[]): any;

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

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace RawForm {
        // Signal signatures
        interface SignalSignatures extends BasicForm.SignalSignatures {
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::can-expand-v": (pspec: GObject.ParamSpec) => void;
            "notify::entries-auto-default": (pspec: GObject.ParamSpec) => void;
            "notify::headers-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::paramlist": (pspec: GObject.ParamSpec) => void;
            "notify::show-actions": (pspec: GObject.ParamSpec) => void;
            "notify::xml-layout": (pspec: GObject.ParamSpec) => void;
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
        interface ConstructorProps extends BasicForm.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataProxy.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            model: Gda.DataModel;
        }
    }

    /**
     * @gir-type Class
     */
    class RawForm extends BasicForm implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<RawForm>;

        // Properties
        get model(): Gda.DataModel;
        set model(val: Gda.DataModel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RawForm.SignalSignatures;

        // Fields
        object: BasicForm;

        // Constructors
        constructor(properties?: Partial<RawForm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: (Gda.DataModel | null)): RawForm;

        // Conflicted with Gdaui.BasicForm.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof RawForm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RawForm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RawForm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RawForm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RawForm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RawForm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
         * can be edited or not.
         * @param column column number of the data
         * @param editable set to `true` to make the column editable
         */
        column_set_editable(column: number, editable: boolean): void;

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on) must show its
         * actions menu or not.
         * @param column column number of the data, or -1 to apply the setting to all the columns
         * @param show_actions set to `true` if the actions menu must be shown
         */
        column_show_actions(column: number, show_actions: boolean): void;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @returns the {@link Gtk.ActionGroup} with all the possible actions on the widget.
         */
        get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @returns a {@link Gda.DataProxy} pointer
         */
        get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @returns the write mode used by `iface`
         */
        get_write_mode(): DataProxyWriteMode;

        /**
         * Forces the widget to perform the selected `action`, as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a {@link Gdaui.Action} action
         */
        perform_action(action: Action): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @returns TRUE if the proposed mode has been taken into account
         */
        set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @virtual
         */
        vfunc_get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @virtual
         */
        vfunc_get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @virtual
         */
        vfunc_get_write_mode(): DataProxyWriteMode;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_proxy_changed(proxy: Gda.DataProxy): void;

        /**
         * @param column 
         * @param editable 
         * @virtual
         */
        vfunc_set_column_editable(column: number, editable: boolean): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @virtual
         */
        vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * @param column 
         * @param show_actions 
         * @virtual
         */
        vfunc_show_column_actions(column: number, show_actions: boolean): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;
    }


    namespace RawGrid {
        // Signal signatures
        interface SignalSignatures extends Gtk.TreeView.SignalSignatures {
            /**
             * Emitted when the user double clicks on a row
             * @signal
             * @run-first
             */
            "double-clicked": (arg0: number) => void;
            /**
             * Connect this signal and modify the popup menu.
             * @signal
             * @run-first
             */
            "populate-popup": (arg0: Gtk.Menu) => void;
            "notify::global-actions-visible": (pspec: GObject.ParamSpec) => void;
            "notify::info-cell-visible": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::xml-layout": (pspec: GObject.ParamSpec) => void;
            "notify::activate-on-single-click": (pspec: GObject.ParamSpec) => void;
            "notify::enable-grid-lines": (pspec: GObject.ParamSpec) => void;
            "notify::enable-search": (pspec: GObject.ParamSpec) => void;
            "notify::enable-tree-lines": (pspec: GObject.ParamSpec) => void;
            "notify::expander-column": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-height-mode": (pspec: GObject.ParamSpec) => void;
            "notify::headers-clickable": (pspec: GObject.ParamSpec) => void;
            "notify::headers-visible": (pspec: GObject.ParamSpec) => void;
            "notify::hover-expand": (pspec: GObject.ParamSpec) => void;
            "notify::hover-selection": (pspec: GObject.ParamSpec) => void;
            "notify::level-indentation": (pspec: GObject.ParamSpec) => void;
            "notify::reorderable": (pspec: GObject.ParamSpec) => void;
            "notify::rubber-banding": (pspec: GObject.ParamSpec) => void;
            "notify::rules-hint": (pspec: GObject.ParamSpec) => void;
            "notify::search-column": (pspec: GObject.ParamSpec) => void;
            "notify::show-expanders": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-column": (pspec: GObject.ParamSpec) => void;
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
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TreeView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, DataProxy.ConstructorProps, DataSelector.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {
            global_actions_visible: boolean;
            globalActionsVisible: boolean;
            info_cell_visible: boolean;
            infoCellVisible: boolean;
            model: (Gda.DataModel | any);
            xml_layout: any;
            xmlLayout: any;
        }
    }

    /**
     * @gir-type Class
     */
    class RawGrid extends Gtk.TreeView implements Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<RawGrid>;

        // Properties
        get global_actions_visible(): boolean;
        set global_actions_visible(val: boolean);

        get globalActionsVisible(): boolean;
        set globalActionsVisible(val: boolean);

        get info_cell_visible(): boolean;
        set info_cell_visible(val: boolean);

        get infoCellVisible(): boolean;
        set infoCellVisible(val: boolean);

    // This accessor conflicts with another accessor's type in a parent class or interface.
        get model(): (Gda.DataModel | any);
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set model(val: (Gda.DataModel | any));

        /**
         * @write-only
         */
        set xml_layout(val: any);

        /**
         * @write-only
         */
        set xmlLayout(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RawGrid.SignalSignatures;

        // Fields
        object: Gtk.TreeView;

        // Constructors
        constructor(properties?: Partial<RawGrid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: Gda.DataModel): RawGrid;

        // Conflicted with Gtk.TreeView.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof RawGrid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RawGrid.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RawGrid.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RawGrid.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RawGrid.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RawGrid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param row 
         * @virtual
         */
        vfunc_double_clicked(row: number): void;

        /**
         * @param menu 
         * @virtual
         */
        vfunc_populate_popup(menu: Gtk.Menu): void;

        // Methods
        /**
         * This function allows you to specify that the `func` function needs to be called
         * whenever the rendering of a cell in `grid` needs to be done. It is similar in purpose
         * to the `gtk_tree_view_column_set_cell_data_func()` function.
         * @param func a {@link Gdaui.RawGridFormatFunc} function pointer
         * @param dnotify destroy notifier for `data`
         */
        add_formatting_function(func: RawGridFormatFunc, dnotify: (GLib.DestroyNotify | null)): void;

        /**
         * This function undoes what has been specified before by `gdaui_raw_grid_add_formatting_function()`
         * @param func a {@link Gdaui.RawGridFormatFunc} function pointer
         */
        remove_formatting_function(func: RawGridFormatFunc): void;

        /**
         * Sets a grid's columns layout according an XML description contained in `file_name`, for the grid identified
         * by the `grid_name` name (as an XML layout file can contain the descriptions of several forms and grids).
         * @param file_name XML file name to use
         * @param grid_name the name of the grid to use, in `file_name`
         */
        set_layout_from_file(file_name: string, grid_name: string): void;

        /**
         * Sets the size of each chunk of data to display: the maximum number of rows which
         * can be displayed at a time. See `gdaui_grid_set_sample_size()` and `gda_data_proxy_set_sample_size()`
         * @param sample_size the size of the sample displayed in `grid`
         */
        set_sample_size(sample_size: number): void;

        /**
         * @param sample_start 
         */
        set_sample_start(sample_start: number): void;

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
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
         * can be edited or not.
         * @param column column number of the data
         * @param editable set to `true` to make the column editable
         */
        column_set_editable(column: number, editable: boolean): void;

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on) must show its
         * actions menu or not.
         * @param column column number of the data, or -1 to apply the setting to all the columns
         * @param show_actions set to `true` if the actions menu must be shown
         */
        column_show_actions(column: number, show_actions: boolean): void;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @returns the {@link Gtk.ActionGroup} with all the possible actions on the widget.
         */
        get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @returns a {@link Gda.DataProxy} pointer
         */
        get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @returns the write mode used by `iface`
         */
        get_write_mode(): DataProxyWriteMode;

        /**
         * Forces the widget to perform the selected `action`, as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a {@link Gdaui.Action} action
         */
        perform_action(action: Action): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @returns TRUE if the proposed mode has been taken into account
         */
        set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @virtual
         */
        vfunc_get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @virtual
         */
        vfunc_get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @virtual
         */
        vfunc_get_write_mode(): DataProxyWriteMode;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_proxy_changed(proxy: Gda.DataProxy): void;

        /**
         * @param column 
         * @param editable 
         * @virtual
         */
        vfunc_set_column_editable(column: number, editable: boolean): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @virtual
         */
        vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

        /**
         * @param column 
         * @param show_actions 
         * @virtual
         */
        vfunc_show_column_actions(column: number, show_actions: boolean): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * @param args 
         */
        // Conflicted with Gtk.TreeView.get_model
        get_model(...args: never[]): any;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.TreeView.set_model
        set_model(...args: never[]): any;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;

        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @virtual
         */
        vfunc_get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @virtual
         */
        vfunc_get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @virtual
         */
        vfunc_get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @virtual
         */
        vfunc_select_row(row: number): boolean;

        /**
         * @virtual
         */
        vfunc_selection_changed(): void;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         * @virtual
         */
        vfunc_set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         * @virtual
         */
        vfunc_set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         * @virtual
         */
        vfunc_unselect_row(row: number): void;

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
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

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
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

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


    namespace RtEditor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::in-scrolled-window": (pspec: GObject.ParamSpec) => void;
            "notify::no-background": (pspec: GObject.ParamSpec) => void;
            "notify::show-markup": (pspec: GObject.ParamSpec) => void;
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
            buffer: Gtk.TextBuffer;
            in_scrolled_window: boolean;
            inScrolledWindow: boolean;
            no_background: boolean;
            noBackground: boolean;
            show_markup: boolean;
            showMarkup: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class RtEditor extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<RtEditor>;

        // Properties
        /**
         * Get access to the actual {@link Gtk.TextBuffer} used. Do not modify it!
         * @read-only
         */
        get buffer(): Gtk.TextBuffer;

        /**
         * Determines if the contents of the widget appears in a scrolled window or not.
         */
        get in_scrolled_window(): boolean;
        set in_scrolled_window(val: boolean);

        /**
         * Determines if the contents of the widget appears in a scrolled window or not.
         */
        get inScrolledWindow(): boolean;
        set inScrolledWindow(val: boolean);

        /**
         * If set to `true`, then the default text background is removed
         * and thus the textbackground is the default widget's background.
         * 
         * This property has to be set before the widget is realized, and is taken into account only
         * if the widget is not editable (when it's realized).
         */
        get no_background(): boolean;
        set no_background(val: boolean);

        /**
         * If set to `true`, then the default text background is removed
         * and thus the textbackground is the default widget's background.
         * 
         * This property has to be set before the widget is realized, and is taken into account only
         * if the widget is not editable (when it's realized).
         */
        get noBackground(): boolean;
        set noBackground(val: boolean);

        /**
         * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
         */
        get show_markup(): boolean;
        set show_markup(val: boolean);

        /**
         * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
         */
        get showMarkup(): boolean;
        set showMarkup(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RtEditor.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<RtEditor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): RtEditor;

        // Signals
        /** @signal */
        connect<K extends keyof RtEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RtEditor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RtEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RtEditor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RtEditor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RtEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        /**
         * Get the contents of `editor`, using the markup syntax
         * @returns a new string, or `null` if there was an error
         */
        get_contents(): string;

        /**
         * Set `editor`'s contents. If `length` is -1, `markup` must be nul-terminated
         * @param markup the text to set in `editor`, using the markup syntax (must be valid UTF-8)
         * @param length length of text in bytes.
         */
        set_contents(markup: string, length: number): void;

        /**
         * Set `editor`'s editability
         * @param editable whether it's editable
         */
        set_editable(editable: boolean): void;

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


    namespace ServerOperation {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::hide-single-header": (pspec: GObject.ParamSpec) => void;
            "notify::server-operation": (pspec: GObject.ParamSpec) => void;
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
            hide_single_header: boolean;
            hideSingleHeader: boolean;
            server_operation: Gda.ServerOperation;
            serverOperation: Gda.ServerOperation;
        }
    }

    /**
     * @gir-type Class
     */
    class ServerOperation extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ServerOperation>;

        // Properties
        get hide_single_header(): boolean;
        set hide_single_header(val: boolean);

        get hideSingleHeader(): boolean;
        set hideSingleHeader(val: boolean);

        /**
         * @construct-only
         */
        get server_operation(): Gda.ServerOperation;

        /**
         * @construct-only
         */
        get serverOperation(): Gda.ServerOperation;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerOperation.SignalSignatures;

        // Fields
        object: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<ServerOperation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](op: Gda.ServerOperation): ServerOperation;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        static new_in_dialog(op: Gda.ServerOperation, parent: (Gtk.Window | null), title: (string | null), header: (string | null)): ServerOperation;

        // Signals
        /** @signal */
        connect<K extends keyof ServerOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServerOperation.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ServerOperation.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServerOperation.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ServerOperation.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServerOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

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


    namespace Set {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Gets emitted when `set`'s public data ({@link Gdaui.SetGroup} or {@link Gdaui.SetSource} values) have changed
             * @signal
             * @since 4.2
             * @run-first
             */
            "public-data-changed": () => void;
            /**
             * Gets emitted when the data model used in `set`'s {@link Gdaui.SetSource} has changed
             * @signal
             * @since 4.2
             * @run-first
             */
            "source-model-changed": (arg0: (any | null)) => void;
            "notify::set": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            set: (Gda.Set | any);
        }
    }

    /**
     * @gir-type Class
     */
    class Set extends GObject.Object {
        static $gtype: GObject.GType<Set>;

        // Properties
        /**
         * @construct-only
         */
    // This accessor conflicts with a field or function name in a parent class or interface.
         set: Gda.Set | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Set.SignalSignatures;

        // Fields
        object: GObject.Object;

        sources_list: SetSource[];

        groups_list: SetGroup[];

        // Constructors
        constructor(properties?: Partial<Set.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](set: Gda.Set): Set;

        // Signals
        /** @signal */
        connect<K extends keyof Set.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Set.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Set.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Set.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Set.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Set.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_public_data_changed(): void;

        /**
         * @param source 
         * @virtual
         */
        vfunc_source_model_changed(source: SetSource): void;

        // Methods
        /**
         * @param holder 
         * @returns A new {@link Gdaui.SetGroup} struct
         */
        get_group(holder: Gda.Holder): SetGroup;
    }


    namespace TreeStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "drag-can-drag": (arg0: string) => (boolean | void);
            /**
             * @signal
             * @run-last
             */
            "drag-can-drop": (arg0: string, arg1: (any | null)) => (boolean | void);
            /**
             * @signal
             * @run-last
             */
            "drag-delete": (arg0: string) => (boolean | void);
            /**
             * @signal
             * @run-last
             */
            "drag-drop": (arg0: string, arg1: (any | null)) => (boolean | void);
            /**
             * @signal
             * @run-last
             */
            "drag-get": (arg0: string, arg1: (any | null)) => (boolean | void);
            "notify::tree": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeDragDest.ConstructorProps, Gtk.TreeDragSource.ConstructorProps, Gtk.TreeModel.ConstructorProps {
            tree: Gda.Tree;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeStore extends GObject.Object implements Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel {
        static $gtype: GObject.GType<TreeStore>;

        // Properties
        /**
         * @construct-only
         */
        get tree(): Gda.Tree;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeStore.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<TreeStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TreeStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TreeStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TreeStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TreeStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TreeStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a {@link Gtk.TreeModel} interface with a {@link Gda.Tree}, mapping columns to attributes' values.
         * For more information and limitations, see `gdaui_tree_store_new()`.
         * @param tree a {@link Gda.Tree} object
         * @param n_columns number of columns in the tree store
         * @param types an array of `n_columns` GType to specify the type of each column
         * @param attribute_names an array of `n_columns` strings to specify the attribute name                   to map each column on
         */
        static newv(tree: Gda.Tree, n_columns: number, types: GObject.GType, attribute_names: string): Gtk.TreeModel;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.newv
        static newv(...args: never[]): any;

        // Virtual methods
        /**
         * @param path 
         * @virtual
         */
        vfunc_drag_can_drag(path: string): boolean;

        /**
         * @param path 
         * @param selection_data 
         * @virtual
         */
        vfunc_drag_can_drop(path: string, selection_data: Gtk.SelectionData): boolean;

        /**
         * @param path 
         * @virtual
         */
        vfunc_drag_delete(path: string): boolean;

        /**
         * @param path 
         * @param selection_data 
         * @virtual
         */
        vfunc_drag_drop(path: string, selection_data: Gtk.SelectionData): boolean;

        /**
         * @param path 
         * @param selection_data 
         * @virtual
         */
        vfunc_drag_get(path: string, selection_data: Gtk.SelectionData): boolean;

        // Methods
        /**
         * Sets `iter` to represent `node` in the tree.
         * @param iter a {@link Gtk.TreeIter}
         * @param node a {@link Gda.TreeNode} in `store`
         * @returns `true` if no error occurred and `iter` is valid
         */
        get_iter_from_node(iter: Gtk.TreeIter, node: Gda.TreeNode): boolean;

        /**
         * Get the  {@link Gda.TreeNode} represented by `iter`.
         * @param iter a valid {@link Gtk.TreeIter}
         * @returns the {@link Gda.TreeNode} represented by `iter`, or `null` if an error occurred
         */
        get_node(iter: Gtk.TreeIter): Gda.TreeNode;

        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @returns whether a new row was created before position `dest`
         */
        drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @returns `true` if a drop is possible before `dest_path`
         */
        row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @virtual
         */
        vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @virtual
         */
        vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

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
        filter_new(root: (Gtk.TreePath | null)): Gtk.TreeModel;

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
        iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

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
        iter_n_children(iter: (Gtk.TreeIter | null)): number;

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
        iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

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
        rows_reordered(path: Gtk.TreePath, iter: (Gtk.TreeIter | null), new_order: number[]): void;

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
        vfunc_iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

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
        vfunc_iter_n_children(iter: (Gtk.TreeIter | null)): number;

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
        vfunc_iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

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


    /**
     * @gir-type Alias
     */
    type BasicFormClass = typeof BasicForm;

    /**
     * @gir-type Struct
     */
    abstract class BasicFormPriv {
        static $gtype: GObject.GType<BasicFormPriv>;
    }


    /**
     * @gir-type Alias
     */
    type CloudClass = typeof Cloud;

    /**
     * @gir-type Struct
     */
    abstract class CloudPriv {
        static $gtype: GObject.GType<CloudPriv>;
    }


    /**
     * @gir-type Alias
     */
    type ComboClass = typeof Combo;

    /**
     * @gir-type Struct
     */
    abstract class ComboPrivate {
        static $gtype: GObject.GType<ComboPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataCellRendererBinClass = typeof DataCellRendererBin;

    /**
     * @gir-type Struct
     */
    abstract class DataCellRendererBinPrivate {
        static $gtype: GObject.GType<DataCellRendererBinPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataCellRendererBooleanClass = typeof DataCellRendererBoolean;

    /**
     * @gir-type Struct
     */
    abstract class DataCellRendererBooleanPrivate {
        static $gtype: GObject.GType<DataCellRendererBooleanPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataCellRendererComboClass = typeof DataCellRendererCombo;

    /**
     * @gir-type Struct
     */
    abstract class DataCellRendererComboPrivate {
        static $gtype: GObject.GType<DataCellRendererComboPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataCellRendererInfoClass = typeof DataCellRendererInfo;

    /**
     * @gir-type Struct
     */
    abstract class DataCellRendererInfoPriv {
        static $gtype: GObject.GType<DataCellRendererInfoPriv>;
    }


    /**
     * @gir-type Alias
     */
    type DataCellRendererTextualClass = typeof DataCellRendererTextual;

    /**
     * @gir-type Struct
     */
    abstract class DataCellRendererTextualPrivate {
        static $gtype: GObject.GType<DataCellRendererTextualPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataEntryIface = typeof DataEntry;

    /**
     * @gir-type Alias
     */
    type DataFilterClass = typeof DataFilter;

    /**
     * @gir-type Struct
     */
    abstract class DataFilterPriv {
        static $gtype: GObject.GType<DataFilterPriv>;
    }


    /**
     * @gir-type Alias
     */
    type DataProxyIface = typeof DataProxy;

    /**
     * @gir-type Alias
     */
    type DataProxyInfoClass = typeof DataProxyInfo;

    /**
     * @gir-type Struct
     */
    abstract class DataProxyInfoPriv {
        static $gtype: GObject.GType<DataProxyInfoPriv>;
    }


    /**
     * @gir-type Alias
     */
    type DataSelectorIface = typeof DataSelector;

    /**
     * @gir-type Alias
     */
    type DataStoreClass = typeof DataStore;

    /**
     * @gir-type Struct
     */
    abstract class DataStorePriv {
        static $gtype: GObject.GType<DataStorePriv>;
    }


    /**
     * @gir-type Alias
     */
    type EntryBinClass = typeof EntryBin;

    /**
     * @gir-type Struct
     */
    abstract class EntryBinPrivate {
        static $gtype: GObject.GType<EntryBinPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryBooleanClass = typeof EntryBoolean;

    /**
     * @gir-type Struct
     */
    abstract class EntryBooleanPrivate {
        static $gtype: GObject.GType<EntryBooleanPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryClass = typeof Entry;

    /**
     * @gir-type Alias
     */
    type EntryComboClass = typeof EntryCombo;

    /**
     * @gir-type Struct
     */
    abstract class EntryComboPriv {
        static $gtype: GObject.GType<EntryComboPriv>;
    }


    /**
     * @gir-type Alias
     */
    type EntryCommonTimeClass = typeof EntryCommonTime;

    /**
     * @gir-type Struct
     */
    abstract class EntryCommonTimePrivate {
        static $gtype: GObject.GType<EntryCommonTimePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryDateClass = typeof EntryDate;

    /**
     * @gir-type Struct
     */
    abstract class EntryDatePrivate {
        static $gtype: GObject.GType<EntryDatePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryNoneClass = typeof EntryNone;

    /**
     * @gir-type Struct
     */
    abstract class EntryNonePrivate {
        static $gtype: GObject.GType<EntryNonePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryNumberClass = typeof EntryNumber;

    /**
     * @gir-type Struct
     */
    abstract class EntryNumberPrivate {
        static $gtype: GObject.GType<EntryNumberPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class EntryPrivate {
        static $gtype: GObject.GType<EntryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryShellClass = typeof EntryShell;

    /**
     * @gir-type Struct
     */
    abstract class EntryShellPriv {
        static $gtype: GObject.GType<EntryShellPriv>;
    }


    /**
     * @gir-type Alias
     */
    type EntryStringClass = typeof EntryString;

    /**
     * @gir-type Struct
     */
    abstract class EntryStringPrivate {
        static $gtype: GObject.GType<EntryStringPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryTimeClass = typeof EntryTime;

    /**
     * @gir-type Struct
     */
    abstract class EntryTimePrivate {
        static $gtype: GObject.GType<EntryTimePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryTimestampClass = typeof EntryTimestamp;

    /**
     * @gir-type Struct
     */
    abstract class EntryTimestampPrivate {
        static $gtype: GObject.GType<EntryTimestampPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EntryWrapperClass = typeof EntryWrapper;

    /**
     * @gir-type Struct
     */
    abstract class EntryWrapperPriv {
        static $gtype: GObject.GType<EntryWrapperPriv>;
    }


    /**
     * @gir-type Alias
     */
    type FormClass = typeof Form;

    /**
     * @gir-type Struct
     */
    abstract class FormPriv {
        static $gtype: GObject.GType<FormPriv>;
    }


    /**
     * @gir-type Alias
     */
    type FormattedEntryClass = typeof FormattedEntry;

    /**
     * @gir-type Struct
     */
    abstract class FormattedEntryPrivate {
        static $gtype: GObject.GType<FormattedEntryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GridClass = typeof Grid;

    /**
     * @gir-type Struct
     */
    abstract class GridPriv {
        static $gtype: GObject.GType<GridPriv>;
    }


    /**
     * @gir-type Alias
     */
    type LoginClass = typeof Login;

    /**
     * @gir-type Struct
     */
    abstract class LoginPrivate {
        static $gtype: GObject.GType<LoginPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NumericEntryClass = typeof NumericEntry;

    /**
     * @gir-type Struct
     */
    abstract class NumericEntryPrivate {
        static $gtype: GObject.GType<NumericEntryPrivate>;
    }


    /**
     * Structure representing a plugin.
     * 
     * Note: `entry_create_func` and `cell_create_func` can't be `null` at the same time
     * @gir-type Struct
     */
    class Plugin {
        static $gtype: GObject.GType<Plugin>;

        // Fields
        plugin_name: string;

        plugin_descr: string;

        plugin_file: string;

        nb_g_types: number;

        valid_g_types: GObject.GType;

        options_xml_spec: string;

        // Methods
        /**
         * Adds a new plugin which will be used by the forms and grids. The new plugin, as
         * described by `plugin` can declare a custom widget to be used for forms, grids, or both.
         * 
         * If a plugin is already declared with the same name as the requested name, then
         * a warning is issued and the operation fails.
         */
        declare(): void;
    }


    /**
     * @gir-type Alias
     */
    type ProviderSelectorClass = typeof ProviderSelector;

    /**
     * @gir-type Struct
     */
    abstract class ProviderSelectorPrivate {
        static $gtype: GObject.GType<ProviderSelectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RawFormClass = typeof RawForm;

    /**
     * @gir-type Struct
     */
    abstract class RawFormPriv {
        static $gtype: GObject.GType<RawFormPriv>;
    }


    /**
     * @gir-type Alias
     */
    type RawGridClass = typeof RawGrid;

    /**
     * @gir-type Struct
     */
    abstract class RawGridPriv {
        static $gtype: GObject.GType<RawGridPriv>;
    }


    /**
     * @gir-type Alias
     */
    type RtEditorClass = typeof RtEditor;

    /**
     * @gir-type Struct
     */
    abstract class RtEditorPriv {
        static $gtype: GObject.GType<RtEditorPriv>;
    }


    /**
     * @gir-type Alias
     */
    type ServerOperationClass = typeof ServerOperation;

    /**
     * @gir-type Struct
     */
    abstract class ServerOperationPriv {
        static $gtype: GObject.GType<ServerOperationPriv>;
    }


    /**
     * @gir-type Alias
     */
    type SetClass = typeof Set;

    /**
     * The <structname>GdauiSetGroup</structname>.
     * 
     * To create a new {@link Gdaui.SetGroup} use `gdaiu_set_group_new`.
     * 
     * To free a {@link Gdaui.SetGroup}, created by `gdaui_set_group_new`, use `gda_set_group_free`.
     * 
     * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
     * Don't try to use `gdaui_set_group_free` on a struct that was created manually.
     * @gir-type Struct
     */
    class SetGroup {
        static $gtype: GObject.GType<SetGroup>;

        // Constructors
        constructor(group: Gda.SetGroup);

        static ["new"](group: Gda.SetGroup): SetGroup;

        // Methods
        /**
         * Copy constructor.
         * @returns a new {@link Gdaui.SetGroup}
         */
        copy(): SetGroup;

        /**
         * Frees any resources taken by `sg` struct. If `sg` is `null`, then nothing happens.
         */
        free(): void;

        /**
         * Get group used by `sg`.
         * @returns used {@link Gda.SetGroup}
         */
        get_group(): Gda.SetGroup;

        /**
         * Get source used by `sg`.
         * @returns used {@link Gda.SetGroup}
         */
        get_source(): SetSource;

        /**
         * Set source to `source`.
         * @param group a {@link Gda.SetGroup} struct
         */
        set_group(group: Gda.SetGroup): void;

        /**
         * Set source to `source`. if `source` is `NULL`, then `group` nodes contains exactly one entry.
         * @param source 
         */
        set_source(source: SetSource): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class SetPriv {
        static $gtype: GObject.GType<SetPriv>;
    }


    /**
     * The <structname>GdauiSetSource</structname> is a ...
     * 
     * To create a new {@link Gdaui.SetSource} use `gdaui_set_source_new`.
     * 
     * To free a {@link Gdaui.SetSource}, created by `gdaui_set_source_new`, use `gdaui_set_source_free`.
     * 
     * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
     * Don't try to use `gdaui_set_source_free` on a struct that was created manually.
     * @gir-type Struct
     */
    class SetSource {
        static $gtype: GObject.GType<SetSource>;

        // Fields
        shown_n_cols: number;

        shown_cols_index: number[];

        ref_n_cols: number;

        ref_cols_index: number[];

        // Constructors
        constructor(source: Gda.SetSource);

        static ["new"](source: Gda.SetSource): SetSource;

        // Methods
        /**
         * Copy constructor.
         * @returns a new {@link Gdaui.SetSource}
         */
        copy(): SetSource;

        /**
         * Frees any resources taken by `s` struct. If `s` is `null`, then nothing happens.
         */
        free(): void;

        /**
         * @returns array of of columns to be shown.
         */
        get_ref_columns(): number[];

        /**
         * @returns number of columns to referenced.
         */
        get_ref_n_cols(): number;

        /**
         * @returns array of of columns to be shown.
         */
        get_shown_columns(): number[];

        /**
         * @returns number of columns to be shown.
         */
        get_shown_n_cols(): number;

        /**
         * Get source used by `sg`.
         * @returns used {@link Gda.SetSource}
         */
        get_source(): Gda.SetSource;

        /**
         * Set the columns to be shown.
         * @param columns an array of with columns numbers of referen (Primary Key) at {@link Gda.SetSource}
         */
        set_ref_columns(columns: number[]): void;

        /**
         * Set the columns to be shown.
         * @param columns an array of with columns numbers to be shown from a {@link Gda.SetSource}
         */
        set_shown_columns(columns: number[]): void;

        /**
         * Set source to `source`.
         * @param source a {@link Gda.SetSource} struct
         */
        set_source(source: Gda.SetSource): void;
    }


    /**
     * @gir-type Alias
     */
    type TreeStoreClass = typeof TreeStore;

    /**
     * @gir-type Struct
     */
    abstract class TreeStorePriv {
        static $gtype: GObject.GType<TreeStorePriv>;
    }


    namespace DataEntry {
        /**
         * Interface for implementing DataEntry.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
             * horizontal or vertical expansion, depending on `horiz`
             * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
             * @virtual
             */
            vfunc_can_expand(horiz: boolean): boolean;

            /**
             * @virtual
             */
            vfunc_contents_activated(): void;

            /**
             * @virtual
             */
            vfunc_contents_modified(): void;

            /**
             * @virtual
             */
            vfunc_contents_valid(): boolean;

            /**
             * @virtual
             */
            vfunc_expand_changed(): void;

            /**
             * Retrieves the parameters of the GdauiDataEntry widget.
             * @virtual
             */
            vfunc_get_attributes(): Gda.ValueAttribute;

            /**
             * Tells if `de` can be edited by the user
             * @virtual
             */
            vfunc_get_editable(): boolean;

            /**
             * Fetch the GdaDataHandler the GdauiDataEntry is using
             * @virtual
             */
            vfunc_get_handler(): Gda.DataHandler;

            /**
             * @virtual
             */
            vfunc_get_ref_value(): (GObject.Value | any);

            /**
             * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
             * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
             * then the returned value is of type GDA_TYPE_NULL or is the default value if it
             * has been provided to the widget (and is of the same type as the one provided by `de`).
             * @virtual
             */
            vfunc_get_value(): (GObject.Value | any);

            /**
             * Fetch the type of data the GdauiDataEntry handles
             * @virtual
             */
            vfunc_get_value_type(): GObject.GType;

            /**
             * Makes `de` grab the focus for the window it's in
             * @virtual
             */
            vfunc_grab_focus(): void;

            /**
             * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
             * mask are set, the other ones are ignored.
             * @param attrs the attributes to set (OR'ed between them)
             * @param mask the mask corresponding to the considered attributes
             * @virtual
             */
            vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void;

            /**
             * Set if `de` can be modified or not by the user
             * @param editable set to `true` to have an editable data entry
             * @virtual
             */
            vfunc_set_editable(editable: boolean): void;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_ref_value(value: unknown): void;

            /**
             * Defines the color to be used when `de` displays an invalid value. Any value not
             * between 0. and 1. will result in the default hard coded values to be used (grayish).
             * @param red the red component of a color
             * @param green the green component of a color
             * @param blue the blue component of a color
             * @param alpha the alpha component of a color
             * @virtual
             */
            vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void;

            /**
             * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
             * <itemizedlist>
             *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
             *      represent a NULL value (SQL NULL), or</para></listitem>
             *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
             *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
             * </itemizedlist>
             * @param value a {@link GObject.Value}, or `null`
             * @virtual
             */
            vfunc_set_value(value: (GObject.Value | null)): void;

            /**
             * @param value 
             * @virtual
             */
            vfunc_set_value_default(value: unknown): void;

            /**
             * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
             * the widget can handle.
             * @param type the {@link GObject.GType} of the data to be displayed
             * @virtual
             */
            vfunc_set_value_type(type: GObject.GType): void;

            /**
             * @virtual
             */
            vfunc_status_changed(): void;

            /**
             * Tests the validity of `de`'s contents. This function must be overrided by implementators.
             * 
             * Default implementation returns TRUE.
             * @virtual
             */
            vfunc_validate(): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps {

        }
    }

    export interface DataEntryNamespace {
        $gtype: GObject.GType<DataEntry>;
        prototype: DataEntry;
        error_quark(): GLib.Quark;
    }
    /**
     * @gir-type Interface
     */
    interface DataEntry extends Gtk.Widget, DataEntry.Interface {

        // Methods
        /**
         * Used for the layout of `GdaDataEntry` widgets in containers: queries if `de` requires
         * horizontal or vertical expansion, depending on `horiz`
         * @param horiz `true` to query horizontal expansion requirements, or `false` for vertical
         * @returns `true` if the widget requires expansion
         */
        can_expand(horiz: boolean): boolean;

        /**
         * Retrieves the parameters of the GdauiDataEntry widget.
         * @returns the OR'ed bits corresponding to the attributes.
         */
        get_attributes(): Gda.ValueAttribute;

        /**
         * Tells if `de` can be edited by the user
         * @returns `true` if `de` is editable
         */
        get_editable(): boolean;

        /**
         * Fetch the GdaDataHandler the GdauiDataEntry is using
         * @returns the GdaDataHandler object
         */
        get_handler(): Gda.DataHandler;

        /**
         * Fetch the reference value held in the {@link Gdaui.DataEntry} widget
         * @returns the {@link GObject.Value} (not modifiable)
         */
        get_reference_value(): unknown;

        /**
         * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
         * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
         * then the returned value is of type GDA_TYPE_NULL or is the default value if it
         * has been provided to the widget (and is of the same type as the one provided by `de`).
         * @returns a new {@link GObject.Value}
         */
        get_value(): unknown;

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
         * Sets the parameters of the {@link Gdaui.DataEntry}. Only the attributes corresponding to the
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
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`.</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_default_value(value: (GObject.Value | null)): void;

        /**
         * Set if `de` can be modified or not by the user
         * @param editable set to `true` to have an editable data entry
         */
        set_editable(editable: boolean): void;

        /**
         * Tells that the current value in `de` is to be considered as the reference value
         */
        set_reference_current(): void;

        /**
         * Push a value into the GdauiDataEntry in the same way as `gdaui_data_entry_set_value()` but
         * also sets this value as the reference value.
         * @param value a {@link GObject.Value}, or `null`
         */
        set_reference_value(value: (GObject.Value | null)): void;

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
         * Push a value into the {@link Gdaui.DataEntry}. The value parameter must either be:
         * <itemizedlist>
         *   <listitem><para>of type GDA_TYPE_NULL (may be created using `gda_value_new_null()`) to
         *      represent a NULL value (SQL NULL), or</para></listitem>
         *   <listitem><para>of type specified using `gdaui_data_entry_set_value_type()`, or</para></listitem>
         *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
         * </itemizedlist>
         * @param value a {@link GObject.Value}, or `null`
         */
        set_value(value: (GObject.Value | null)): void;

        /**
         * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
         * the widget can handle.
         * @param type the {@link GObject.GType} of the data to be displayed
         */
        set_value_type(type: GObject.GType): void;

        /**
         * Tests the validity of `de`'s contents. This function must be overrided by implementators.
         * 
         * Default implementation returns TRUE.
         * @returns TRUE if `de`'s contents is valid
         */
        validate(): boolean;
    }


    export const DataEntry: DataEntryNamespace & {
        new (): DataEntry; // This allows `obj instanceof DataEntry`
    };

    namespace DataProxy {
        /**
         * Interface for implementing DataProxy.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
             * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
             * toolbars, menus, etc calling these actions.
             * 
             * The actions are among:
             * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
             *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
             *    action which can be used to delete a row or undelete it.</para></listitem>
             * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
             *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
             * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
             *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
             * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
             * @virtual
             */
            vfunc_get_actions_group(): Gtk.ActionGroup;

            /**
             * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
             * @virtual
             */
            vfunc_get_proxy(): Gda.DataProxy;

            /**
             * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
             * the {@link Gda.DataModel} which holds the data displayed in `iface`.
             * @virtual
             */
            vfunc_get_write_mode(): DataProxyWriteMode;

            /**
             * @param proxy 
             * @virtual
             */
            vfunc_proxy_changed(proxy: Gda.DataProxy): void;

            /**
             * @param column 
             * @param editable 
             * @virtual
             */
            vfunc_set_column_editable(column: number, editable: boolean): void;

            /**
             * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
             * the {@link Gda.DataModel} which holds the data displayed in `iface`.
             * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
             * @virtual
             */
            vfunc_set_write_mode(mode: DataProxyWriteMode): boolean;

            /**
             * @param column 
             * @param show_actions 
             * @virtual
             */
            vfunc_show_column_actions(column: number, show_actions: boolean): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface DataProxyNamespace {
        $gtype: GObject.GType<DataProxy>;
        prototype: DataProxy;
    }
    /**
     * @gir-type Interface
     */
    interface DataProxy extends GObject.Object, DataProxy.Interface {

        // Methods
        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
         * can be edited or not.
         * @param column column number of the data
         * @param editable set to `true` to make the column editable
         */
        column_set_editable(column: number, editable: boolean): void;

        /**
         * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on) must show its
         * actions menu or not.
         * @param column column number of the data, or -1 to apply the setting to all the columns
         * @param show_actions set to `true` if the actions menu must be shown
         */
        column_show_actions(column: number, show_actions: boolean): void;

        /**
         * Each widget imlplementing the {@link Gdaui.DataProxy} interface provides actions. Actions can be triggered
         * using the `gdaui_data_proxy_perform_action()` method, but using this method allows for the creation of
         * toolbars, menus, etc calling these actions.
         * 
         * The actions are among:
         * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
         *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a {@link Gtk.ToggleAction}
         *    action which can be used to delete a row or undelete it.</para></listitem>
         * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
         *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
         * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
         *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
         * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
         * @returns the {@link Gtk.ActionGroup} with all the possible actions on the widget.
         */
        get_actions_group(): Gtk.ActionGroup;

        /**
         * Get a pointer to the {@link Gda.DataProxy} being used by `iface`
         * @returns a {@link Gda.DataProxy} pointer
         */
        get_proxy(): Gda.DataProxy;

        /**
         * Get the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @returns the write mode used by `iface`
         */
        get_write_mode(): DataProxyWriteMode;

        /**
         * Forces the widget to perform the selected `action`, as if the user
         * had pressed on the corresponding action button in the `iface` widget,
         * if the corresponding action is possible and if the `iface` widget
         * supports the action.
         * @param action a {@link Gdaui.Action} action
         */
        perform_action(action: Action): void;

        /**
         * Specifies the way the modifications stored in the {@link Gda.DataProxy} used internally by `iface` are written back to
         * the {@link Gda.DataModel} which holds the data displayed in `iface`.
         * @param mode the requested {@link Gdaui.DataProxyWriteMode} mode
         * @returns TRUE if the proposed mode has been taken into account
         */
        set_write_mode(mode: DataProxyWriteMode): boolean;
    }


    export const DataProxy: DataProxyNamespace & {
        new (): DataProxy; // This allows `obj instanceof DataProxy`
    };

    namespace DataSelector {
        /**
         * Interface for implementing DataSelector.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
             * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
             * the selection cannot be represented by a single selected row.
             * 
             * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
             * returned by the `gdaui_data_selector_get_model()` method.
             * @virtual
             */
            vfunc_get_data_set(): Gda.DataModelIter;

            /**
             * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
             * are. Beware that the returned data model may be different than the one used when the
             * widget was created in case it internally uses a {@link Gda.DataProxy}.
             * @virtual
             */
            vfunc_get_model(): Gda.DataModel;

            /**
             * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
             * 
             * Please note that rows refers to the "visible" rows
             * at the time it's being called, which may change if the widget implementing this interface
             * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
             * and {@link Gdaui.Grid}).
             * @virtual
             */
            vfunc_get_selected_rows(): number[];

            /**
             * Force the selection of a specific row.
             * 
             * Please note that `row` refers to the "visible" row
             * at the time it's being called, which may change if the widget implementing this interface
             * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
             * and {@link Gdaui.Grid}).
             * @param row the row to select
             * @virtual
             */
            vfunc_select_row(row: number): boolean;

            /**
             * @virtual
             */
            vfunc_selection_changed(): void;

            /**
             * Shows or hides the data at column `column`
             * @param column a column number, starting at %0, or -1 tp apply to all the columns
             * @param visible required visibility of the data in the `column` column
             * @virtual
             */
            vfunc_set_column_visible(column: number, visible: boolean): void;

            /**
             * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
             * @param model a {@link Gda.DataModel} to use
             * @virtual
             */
            vfunc_set_model(model: Gda.DataModel): void;

            /**
             * Please note that `row` refers to the "visible" row
             * at the time it's being called, which may change if the widget implementing this interface
             * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
             * and {@link Gdaui.Grid}).
             * @param row the row to unselect
             * @virtual
             */
            vfunc_unselect_row(row: number): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface DataSelectorNamespace {
        $gtype: GObject.GType<DataSelector>;
        prototype: DataSelector;
    }
    /**
     * @gir-type Interface
     */
    interface DataSelector extends GObject.Object, DataSelector.Interface {

        // Methods
        /**
         * Get the {@link Gda.DataModelIter} object represented the current selected row in `iface`. This
         * function may return either `null` or an invalid iterator (see `gda_data_model_iter_is_valid()`) if
         * the selection cannot be represented by a single selected row.
         * 
         * Note that the returned {@link Gda.DataModelIter} is actually an iterator iterating on the {@link Gda.DataModel}
         * returned by the `gdaui_data_selector_get_model()` method.
         * @returns a pointer to a {@link Gda.DataModelIter} object, or `null`
         */
        get_data_set(): Gda.DataModelIter;

        /**
         * Queries the {@link Gda.DataModel} from which the data displayed by the widget implementing `iface`
         * are. Beware that the returned data model may be different than the one used when the
         * widget was created in case it internally uses a {@link Gda.DataProxy}.
         * @returns the {@link Gda.DataModel}
         */
        get_model(): Gda.DataModel;

        /**
         * Gat an array of selected rows. If no row is selected, the the returned value is `null`.
         * 
         * Please note that rows refers to the "visible" rows
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @returns an array of `gint` values, one for each selected row. Use `g_array_free()` when finished (passing `true` as the last argument)
         */
        get_selected_rows(): number[];

        /**
         * Force the selection of a specific row.
         * 
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to select
         * @returns `true` if the row has been selected
         */
        select_row(row: number): boolean;

        /**
         * Shows or hides the data at column `column`
         * @param column a column number, starting at %0, or -1 tp apply to all the columns
         * @param visible required visibility of the data in the `column` column
         */
        set_column_visible(column: number, visible: boolean): void;

        /**
         * Sets the data model from which the data being displayed are. Also see `gdaui_data_selector_get_model()`
         * @param model a {@link Gda.DataModel} to use
         */
        set_model(model: Gda.DataModel): void;

        /**
         * Please note that `row` refers to the "visible" row
         * at the time it's being called, which may change if the widget implementing this interface
         * uses a {@link Gda.DataProxy} (as is the case for example for the {@link Gdaui.RawForm}, {@link Gdaui.Form}, {@link Gdaui.RawGrid}
         * and {@link Gdaui.Grid}).
         * @param row the row to unselect
         */
        unselect_row(row: number): void;
    }


    export const DataSelector: DataSelectorNamespace & {
        new (): DataSelector; // This allows `obj instanceof DataSelector`
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

export default Gdaui;

// END
