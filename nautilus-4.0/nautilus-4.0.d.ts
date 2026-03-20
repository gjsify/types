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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Nautilus {
    /**
     * Nautilus-4.0
     */

    /**
     * @gir-type Enum
     */
    export namespace OperationResult {
        export const $gtype: GObject.GType<OperationResult>;
    }

    /**
     * Return values for asynchronous operations performed by the extension.
     * See `nautilus_info_provider_update_file_info()`.
     * @gir-type Enum
     */
    enum OperationResult {
        /**
         * the operation succeeded, and the extension
         *  is done with the request.
         */
        COMPLETE,
        /**
         * the operation failed.
         */
        FAILED,
        /**
         * the extension has begin an async operation.
         *  When this value is returned, the extension must set the handle parameter
         *  and call the callback closure when the operation is complete.
         */
        IN_PROGRESS,
    }

    /**
     * @param location the location to create the file info for
     * @returns a {@link Nautilus.FileInfo}
     */
    function file_info_create(location: Gio.File): FileInfo;
    /**
     * @param uri the URI to lookup the file info for
     * @returns a {@link Nautilus.FileInfo}
     */
    function file_info_create_for_uri(uri: string): FileInfo;
    /**
     * @param files the files to copy
     * @returns a copy of `files`.  Use `nautilus_file_info_list_free` to free the list and unref its contents.
     */
    function file_info_list_copy(files: FileInfo[]): FileInfo[];
    /**
     * @param files a list created with `nautilus_file_info_list_copy`
     */
    function file_info_list_free(files: FileInfo[]): void;
    /**
     * @param location the location for which to look up a corresponding {@link Nautilus.FileInfo} object
     * @returns a {@link Nautilus.FileInfo}
     */
    function file_info_lookup(location: Gio.File): FileInfo | null;
    /**
     * @param uri the URI to lookup the file info for
     * @returns a {@link Nautilus.FileInfo}
     */
    function file_info_lookup_for_uri(uri: string): FileInfo | null;
    /**
     * @param update_complete a {@link GObject.Closure}
     * @param provider a {@link Nautilus.InfoProvider}
     * @param handle an opaque {@link Nautilus.OperationHandle}
     * @param result a {@link Nautilus.OperationResult}
     */
    function info_provider_update_complete_invoke(
        update_complete: GObject.Closure,
        provider: InfoProvider,
        handle: OperationHandle,
        result: OperationResult | null,
    ): void;
    namespace Column {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::attribute': (pspec: GObject.ParamSpec) => void;
            'notify::attribute-q': (pspec: GObject.ParamSpec) => void;
            'notify::default-sort-order': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attribute: string;
            attribute_q: number;
            attributeQ: number;
            default_sort_order: boolean;
            defaultSortOrder: boolean;
            description: string;
            label: string;
            name: string;
            visible: boolean;
            xalign: number;
        }
    }

    /**
     * List view column descriptor object.
     *
     * {@link Nautilus.Column} is an object that describes a column in the file manager
     * list view. Extensions can provide {@link Nautilus.Column} by registering a
     * {@link ColumnProvider} and returning them from
     * {@link ColumnProvider.get_columns}, which will be called by the main
     * application when creating a view.
     * @gir-type Class
     */
    class Column extends GObject.Object {
        static $gtype: GObject.GType<Column>;

        // Properties

        /**
         * The file attribute to be displayed in the column.
         */
        get attribute(): string;
        set attribute(val: string);
        /**
         * @read-only
         */
        get attribute_q(): number;
        /**
         * @read-only
         */
        get attributeQ(): number;
        /**
         * Actually meant to store the enum values of GtkSortType, but we don't want
         * extensions to depend on GTK. Also, this is for internal consumption only.
         */
        get default_sort_order(): boolean;
        set default_sort_order(val: boolean);
        /**
         * Actually meant to store the enum values of GtkSortType, but we don't want
         * extensions to depend on GTK. Also, this is for internal consumption only.
         */
        get defaultSortOrder(): boolean;
        set defaultSortOrder(val: boolean);
        /**
         * The user-visible description of the column.
         */
        get description(): string;
        set description(val: string);
        /**
         * The label to display in the column.
         */
        get label(): string;
        set label(val: string);
        /**
         * The identifier for the column.
         * @construct-only
         */
        get name(): string;
        /**
         * Whether to show the NautilusColumn in a ColumnChooser.
         * This is not meant to be used by extensions. The value may be changed
         * over the life of the NautilusColumn.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * The x-alignment of the column.
         */
        get xalign(): number;
        set xalign(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Column.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Column.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, attribute: string, label: string, description: string): Column;

        // Signals

        /** @signal */
        connect<K extends keyof Column.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Column.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Column.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Column.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Menu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Menu extends GObject.Object {
        static $gtype: GObject.GType<Menu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Menu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Menu;

        // Signals

        /** @signal */
        connect<K extends keyof Menu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Menu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Menu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param item a {@link Nautilus.MenuItem} to append
         */
        append_item(item: MenuItem): void;
        /**
         * @returns the provided {@link Nautilus.MenuItem} list
         */
        get_items(): MenuItem[] | null;
    }

    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Signals that the user has activated this menu item.
             * @signal
             * @run-last
             */
            activate: () => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::menu': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tip': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: string;
            label: string;
            menu: Menu;
            name: string;
            priority: boolean;
            sensitive: boolean;
            tip: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuItem extends GObject.Object {
        static $gtype: GObject.GType<MenuItem>;

        // Properties

        get icon(): string;
        set icon(val: string);
        get label(): string;
        set label(val: string);
        get menu(): Menu;
        set menu(val: Menu);
        /**
         * @construct-only
         */
        get name(): string;
        get priority(): boolean;
        set priority(val: boolean);
        get sensitive(): boolean;
        set sensitive(val: boolean);
        get tip(): string;
        set tip(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, label: string, tip?: string | null, icon?: string | null): MenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param item_list a list of {@link Nautilus.MenuItem}
         */
        static list_free(item_list: MenuItem[]): void;

        // Virtual methods

        /**
         * Emits {@link Nautilus.MenuItem.SignalSignatures.activate | Nautilus.MenuItem::activate}.
         * @virtual
         */
        vfunc_activate(): void;

        // Methods

        /**
         * Emits {@link Nautilus.MenuItem.SignalSignatures.activate | Nautilus.MenuItem::activate}.
         */
        activate(): void;
        /**
         * Attaches a menu to the given {@link Nautilus.MenuItem}.
         * @param menu pointer to a {@link Nautilus.Menu} to attach to the button
         */
        set_submenu(menu: Menu): void;
    }

    namespace PropertiesItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            value: string;
        }
    }

    /**
     * @gir-type Class
     */
    class PropertiesItem extends GObject.Object {
        static $gtype: GObject.GType<PropertiesItem>;

        // Properties

        /**
         * @construct-only
         */
        get name(): string;
        /**
         * @construct-only
         */
        get value(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertiesItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PropertiesItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, value: string): PropertiesItem;

        // Signals

        /** @signal */
        connect<K extends keyof PropertiesItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PropertiesItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PropertiesItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PropertiesItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the name of this {@link Nautilus.PropertiesItem}
         */
        get_name(): string;
        /**
         * @returns the value of this {@link Nautilus.PropertiesItem}
         */
        get_value(): string;
    }

    namespace PropertiesModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            model: Gio.ListModel;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class PropertiesModel extends GObject.Object {
        static $gtype: GObject.GType<PropertiesModel>;

        // Properties

        /**
         * @construct-only
         */
        get model(): Gio.ListModel;
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertiesModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PropertiesModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, model: Gio.ListModel): PropertiesModel;

        // Signals

        /** @signal */
        connect<K extends keyof PropertiesModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PropertiesModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PropertiesModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PropertiesModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns a {@link Gio.ListModel} containing {@link Nautilus.PropertiesItem}.
         */
        get_model(): Gio.ListModel;
        /**
         * @returns the title of this {@link Nautilus.PropertiesModel}
         */
        get_title(): string;
        /**
         * @param title the new title of this {@link Nautilus.PropertiesModel}
         */
        set_title(title: string): void;
    }

    /**
     * @gir-type Alias
     */
    type ColumnClass = typeof Column;
    /**
     * @gir-type Alias
     */
    type ColumnProviderInterface = typeof ColumnProvider;
    /**
     * @gir-type Alias
     */
    type FileInfoInterface = typeof FileInfo;
    /**
     * @gir-type Alias
     */
    type InfoProviderInterface = typeof InfoProvider;
    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;
    /**
     * @gir-type Alias
     */
    type MenuItemClass = typeof MenuItem;
    /**
     * @gir-type Alias
     */
    type MenuProviderInterface = typeof MenuProvider;
    /**
     * Handle for asynchronous interfaces. These are opaque handles that must
     * be unique within an extension object. These are returned by operations
     * that return #NAUTILUS_OPERATION_IN_PROGRESS.
     * @gir-type Struct
     */
    abstract class OperationHandle {
        static $gtype: GObject.GType<OperationHandle>;
    }

    /**
     * @gir-type Alias
     */
    type PropertiesItemClass = typeof PropertiesItem;
    /**
     * @gir-type Alias
     */
    type PropertiesModelClass = typeof PropertiesModel;
    /**
     * @gir-type Alias
     */
    type PropertiesModelProviderInterface = typeof PropertiesModelProvider;
    namespace ColumnProvider {
        /**
         * Interface for implementing ColumnProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns a {@link GLib.List} of {@link Nautilus.Column}.
             *               See `nautilus_column_provider_get_columns()` for details.
             * @virtual
             */
            vfunc_get_columns(): Column[] | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ColumnProviderNamespace {
        $gtype: GObject.GType<ColumnProvider>;
        prototype: ColumnProvider;
    }
    /**
     * @gir-type Interface
     */
    interface ColumnProvider extends GObject.Object, ColumnProvider.Interface {
        // Methods

        /**
         * @returns the provided {@link Nautilus.Column} objects
         */
        get_columns(): Column[] | null;
    }

    export const ColumnProvider: ColumnProviderNamespace & {
        new (): ColumnProvider; // This allows `obj instanceof ColumnProvider`
    };

    namespace FileInfo {
        /**
         * Interface for implementing FileInfo.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds an emblem to this file.
             *              See `nautilus_file_info_add_emblem()` for details.
             * @param emblem_name the name of an emblem
             * @virtual
             */
            vfunc_add_emblem(emblem_name: string): void;
            /**
             * Sets the specified string file attribute value.
             *                        See `nautilus_file_info_add_string_attribute()` for details.
             * @param attribute_name the name of an attribute
             * @param value the name of an attribute
             * @virtual
             */
            vfunc_add_string_attribute(attribute_name: string, value: string): void;
            /**
             * Returns whether the file is writable.
             *             See `nautilus_file_info_can_write()` for details.
             * @virtual
             */
            vfunc_can_write(): boolean;
            /**
             * Returns the file activation URI as a string.
             *                      See `nautilus_file_info_get_activation_uri()` for details.
             * @virtual
             */
            vfunc_get_activation_uri(): string;
            /**
             * Returns the file type.
             *                 See `nautilus_file_info_get_file_type()` for details.
             * @virtual
             */
            vfunc_get_file_type(): Gio.FileType;
            /**
             * Returns the file location as a {@link Gio.File}.
             *                See `nautilus_file_info_get_location()` for details.
             * @virtual
             */
            vfunc_get_location(): Gio.File;
            /**
             * Returns the file mime type as a string.
             *                 See `nautilus_file_info_get_mime_type()` for details.
             * @virtual
             */
            vfunc_get_mime_type(): string;
            /**
             * Returns the file mount as a {@link Gio.Mount}.
             *             See `nautilus_file_info_get_mount()` for details.
             * @virtual
             */
            vfunc_get_mount(): Gio.Mount | null;
            /**
             * Returns the file name as a string.
             *            See `nautilus_file_info_get_name()` for details.
             * @virtual
             */
            vfunc_get_name(): string;
            /**
             * It's not safe to call this recursively multiple times, as it works
             * only for files already cached by Nautilus.
             * @virtual
             */
            vfunc_get_parent_info(): FileInfo | null;
            /**
             * Returns the file parent location as a {@link Gio.File}.
             *                       See `nautilus_file_info_get_parent_location()` for details.
             * @virtual
             */
            vfunc_get_parent_location(): Gio.File | null;
            /**
             * Returns the file parent URI as a string.
             *                  See `nautilus_file_info_get_parent_uri()` for details.
             * @virtual
             */
            vfunc_get_parent_uri(): string;
            /**
             * Returns the specified file attribute as a string.
             *                        See `nautilus_file_info_get_string_attribute()` for details.
             * @param attribute_name the name of an attribute
             * @virtual
             */
            vfunc_get_string_attribute(attribute_name: string): string | null;
            /**
             * Returns the file URI as a string.
             *           See `nautilus_file_info_get_uri()` for details.
             * @virtual
             */
            vfunc_get_uri(): string;
            /**
             * Returns the file URI scheme as a string.
             *                  See `nautilus_file_info_get_uri_scheme()` for details.
             * @virtual
             */
            vfunc_get_uri_scheme(): string;
            /**
             * Invalidates information of the file provided by extensions.
             *                             See `nautilus_file_info_invalidate_extension_info()` for details.
             * @virtual
             */
            vfunc_invalidate_extension_info(): void;
            /**
             * Returns whether the file is a directory.
             *                See `nautilus_file_info_is_directory()` for details.
             * @virtual
             */
            vfunc_is_directory(): boolean;
            /**
             * Returns whether the file info is gone.
             *           See `nautilus_file_info_is_gone()` for details.
             * @virtual
             */
            vfunc_is_gone(): boolean;
            /**
             * Returns whether the file is the given mime type.
             *                See `nautilus_file_info_is_mime_type()` for details.
             * @param mime_type a MIME type
             * @virtual
             */
            vfunc_is_mime_type(mime_type: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileInfoNamespace {
        $gtype: GObject.GType<FileInfo>;
        prototype: FileInfo;

        /**
         * @param location the location to create the file info for
         */
        create(location: Gio.File): FileInfo;
        /**
         * @param uri the URI to lookup the file info for
         */
        create_for_uri(uri: string): FileInfo;
        /**
         * @param files the files to copy
         */
        list_copy(files: FileInfo[]): FileInfo[];
        /**
         * @param files a list created with `nautilus_file_info_list_copy`
         */
        list_free(files: FileInfo[]): void;
        /**
         * @param location the location for which to look up a corresponding {@link Nautilus.FileInfo} object
         */
        lookup(location: Gio.File): FileInfo | null;
        /**
         * @param uri the URI to lookup the file info for
         */
        lookup_for_uri(uri: string): FileInfo | null;
    }
    /**
     * @gir-type Interface
     */
    interface FileInfo extends GObject.Object, FileInfo.Interface {
        // Methods

        /**
         * @param emblem_name the name of an emblem
         */
        add_emblem(emblem_name: string): void;
        /**
         * @param attribute_name the name of an attribute
         * @param value the name of an attribute
         */
        add_string_attribute(attribute_name: string, value: string): void;
        /**
         * @returns `true` when `file_info` is writeable, and `false` otherwise
         */
        can_write(): boolean;
        /**
         * @returns the activation URI of `file_info`, which may differ from the actual   URI if e.g. the file is a .desktop file or a Nautilus XML link file
         */
        get_activation_uri(): string;
        /**
         * @returns a {@link Gio.FileType} for the location of `file_info`
         */
        get_file_type(): Gio.FileType;
        /**
         * @returns a {@link Gio.File} for the location of `file_info`
         */
        get_location(): Gio.File;
        /**
         * @returns the MIME type of `file_info`
         */
        get_mime_type(): string;
        /**
         * @returns a {@link Gio.Mount} for the mount of `file_info`,                                      or `null` if `file_info` has no mount
         */
        get_mount(): Gio.Mount | null;
        /**
         * @returns the file name of `file_info`
         */
        get_name(): string;
        /**
         * It's not safe to call this recursively multiple times, as it works
         * only for files already cached by Nautilus.
         * @returns a {@link Nautilus.FileInfo} for the parent of `file_info`,                                      or `null` if `file_info` has no parent.
         */
        get_parent_info(): FileInfo | null;
        /**
         * @returns a {@link Gio.File} for the parent location of `file_info`,   or `null` if `file_info` has no parent
         */
        get_parent_location(): Gio.File | null;
        /**
         * @returns the URI for the parent location of `file_info`, or the empty string   if it has none
         */
        get_parent_uri(): string;
        /**
         * @param attribute_name the name of an attribute
         * @returns the value for the given `attribute_name`, or `null` if   there is none
         */
        get_string_attribute(attribute_name: string): string | null;
        /**
         * @returns the file URI of `file_info`
         */
        get_uri(): string;
        /**
         * @returns the URI scheme of `file_info`
         */
        get_uri_scheme(): string;
        invalidate_extension_info(): void;
        /**
         * @returns `true` when `file_info` is a directory, and `false` otherwise
         */
        is_directory(): boolean;
        /**
         * @returns whether the file has been deleted
         */
        is_gone(): boolean;
        /**
         * @param mime_type a MIME type
         * @returns `true` when the MIME type of `file_info` matches `mime_type`, and   `false` otherwise
         */
        is_mime_type(mime_type: string): boolean;
    }

    export const FileInfo: FileInfoNamespace & {
        new (): FileInfo; // This allows `obj instanceof FileInfo`
    };

    namespace InfoProvider {
        /**
         * Interface for implementing InfoProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Cancels a previous call to `nautilus_info_provider_update_file_info()`.
             *                 See `nautilus_info_provider_cancel_update()` for details.
             * @param handle the opaque {@link Nautilus.OperationHandle} returned from a previous call to          `nautilus_info_provider_update_file_info()`.
             * @virtual
             */
            vfunc_cancel_update(handle: OperationHandle): void;
            /**
             * Returns a {@link Nautilus.OperationResult}.
             *                    See `nautilus_info_provider_update_file_info()` for details.
             * @param file a {@link Nautilus.FileInfo}
             * @param update_complete the closure to invoke at some later time when returning                   `NAUTILUS_OPERATION_IN_PROGRESS`.
             * @virtual
             */
            vfunc_update_file_info(
                file: FileInfo,
                update_complete: GObject.Closure,
            ): [OperationResult, OperationHandle | null];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface InfoProviderNamespace {
        $gtype: GObject.GType<InfoProvider>;
        prototype: InfoProvider;

        /**
         * @param update_complete a {@link GObject.Closure}
         * @param provider a {@link Nautilus.InfoProvider}
         * @param handle an opaque {@link Nautilus.OperationHandle}
         * @param result a {@link Nautilus.OperationResult}
         */
        update_complete_invoke(
            update_complete: GObject.Closure,
            provider: InfoProvider,
            handle: OperationHandle,
            result: OperationResult,
        ): void;
    }
    /**
     * @gir-type Interface
     */
    interface InfoProvider extends GObject.Object, InfoProvider.Interface {
        // Methods

        /**
         * @param handle the opaque {@link Nautilus.OperationHandle} returned from a previous call to          `nautilus_info_provider_update_file_info()`.
         */
        cancel_update(handle: OperationHandle): void;
        /**
         * @param file a {@link Nautilus.FileInfo}
         * @param update_complete the closure to invoke at some later time when returning                   `NAUTILUS_OPERATION_IN_PROGRESS`.
         * @returns A {@link Nautilus.OperationResult}.
         */
        update_file_info(file: FileInfo, update_complete: GObject.Closure): [OperationResult, OperationHandle | null];
    }

    export const InfoProvider: InfoProviderNamespace & {
        new (): InfoProvider; // This allows `obj instanceof InfoProvider`
    };

    namespace MenuProvider {
        /**
         * Interface for implementing MenuProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns a {@link GLib.List} of {@link Nautilus.MenuItem}.
             *                        See `nautilus_menu_provider_get_background_items()` for details.
             * @param current_folder the folder for which background items are requested
             * @virtual
             */
            vfunc_get_background_items(current_folder: FileInfo): MenuItem[] | null;
            /**
             * Returns a {@link GLib.List} of {@link Nautilus.MenuItem}.
             *                  See `nautilus_menu_provider_get_file_items()` for details.
             * @param files a list of {@link Nautilus.FileInfo}
             * @virtual
             */
            vfunc_get_file_items(files: FileInfo[]): MenuItem[] | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MenuProviderNamespace {
        $gtype: GObject.GType<MenuProvider>;
        prototype: MenuProvider;
    }
    /**
     * @gir-type Interface
     */
    interface MenuProvider extends GObject.Object, MenuProvider.Interface {
        // Methods

        /**
         * Emits {@link Nautilus.MenuProvider.SignalSignatures.items_updated | Nautilus.MenuProvider::items-updated}.
         */
        emit_items_updated_signal(): void;
        /**
         * @param current_folder the folder for which background items are requested
         * @returns the provided list of {@link Nautilus.MenuItem}.
         */
        get_background_items(current_folder: FileInfo): MenuItem[] | null;
        /**
         * @param files a list of {@link Nautilus.FileInfo}
         * @returns the provided list of {@link Nautilus.MenuItem}.
         */
        get_file_items(files: FileInfo[]): MenuItem[] | null;
    }

    export const MenuProvider: MenuProviderNamespace & {
        new (): MenuProvider; // This allows `obj instanceof MenuProvider`
    };

    namespace PropertiesModelProvider {
        /**
         * Interface for implementing PropertiesModelProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * This function is called by the application when it wants properties models
             * from the extension.
             *
             * This function is called in the main thread before the Properties are shown,
             * so it should return quickly. The models can be populated and updated
             * asynchronously.
             * @param files a {@link GLib.List} of {@link Nautilus.FileInfo}
             * @virtual
             */
            vfunc_get_models(files: FileInfo[]): PropertiesModel[] | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PropertiesModelProviderNamespace {
        $gtype: GObject.GType<PropertiesModelProvider>;
        prototype: PropertiesModelProvider;
    }
    /**
     * @gir-type Interface
     */
    interface PropertiesModelProvider extends GObject.Object, PropertiesModelProvider.Interface {
        // Methods

        /**
         * This function is called by the application when it wants properties models
         * from the extension.
         *
         * This function is called in the main thread before the Properties are shown,
         * so it should return quickly. The models can be populated and updated
         * asynchronously.
         * @param files a {@link GLib.List} of {@link Nautilus.FileInfo}
         * @returns A {@link GLib.List} of allocated {@link Nautilus.PropertiesModel} models.
         */
        get_models(files: FileInfo[]): PropertiesModel[] | null;
    }

    export const PropertiesModelProvider: PropertiesModelProviderNamespace & {
        new (): PropertiesModelProvider; // This allows `obj instanceof PropertiesModelProvider`
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

export default Nautilus;

// END
