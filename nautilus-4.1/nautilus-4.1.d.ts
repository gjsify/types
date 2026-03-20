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
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Nautilus {
    /**
     * Nautilus-4.1
     */

    /**
     * @gir-type Enum
     */
    export namespace OperationResult {
        export const $gtype: GObject.GType<OperationResult>;
    }

    /**
     * @gir-type Enum
     */
    enum OperationResult {
        COMPLETE,
        FAILED,
        IN_PROGRESS,
    }

    /**
     * @param location
     */
    function file_info_create(location: Gio.File): FileInfo;
    /**
     * @param uri
     */
    function file_info_create_for_uri(uri: string): FileInfo;
    /**
     * @param files
     */
    function file_info_list_copy(files: FileInfo[]): FileInfo[];
    /**
     * @param files
     */
    function file_info_list_free(files: FileInfo[]): void;
    /**
     * @param location
     */
    function file_info_lookup(location: Gio.File): FileInfo;
    /**
     * @param uri
     */
    function file_info_lookup_for_uri(uri: string): FileInfo;
    /**
     * @param update_complete
     * @param provider
     * @param handle
     * @param result
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
     * @gir-type Class
     */
    class Column extends GObject.Object {
        static $gtype: GObject.GType<Column>;

        // Properties

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
        get default_sort_order(): boolean;
        set default_sort_order(val: boolean);
        get defaultSortOrder(): boolean;
        set defaultSortOrder(val: boolean);
        get description(): string;
        set description(val: string);
        get label(): string;
        set label(val: string);
        /**
         * @construct-only
         */
        get name(): string;
        get visible(): boolean;
        set visible(val: boolean);
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
         * @param item
         */
        append_item(item: MenuItem): void;
        get_items(): MenuItem[];
    }

    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-LAST
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

        static ['new'](name: string, label: string, tip: string, icon: string): MenuItem;

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
         * @param item_list
         */
        static list_free(item_list: MenuItem[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_activate(): void;

        // Methods

        activate(): void;
        /**
         * @param menu
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

        get_name(): string;
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

        get_model(): Gio.ListModel;
        get_title(): string;
        /**
         * @param title
         */
        set_title(title: string): void;
    }

    /**
     * @gir-type Struct
     */
    class ColumnClass {
        static $gtype: GObject.GType<ColumnClass>;
    }

    /**
     * @gir-type Struct
     */
    class ColumnProviderInterface {
        static $gtype: GObject.GType<ColumnProviderInterface>;
    }

    /**
     * @gir-type Struct
     */
    class FileInfoInterface {
        static $gtype: GObject.GType<FileInfoInterface>;
    }

    /**
     * @gir-type Struct
     */
    class InfoProviderInterface {
        static $gtype: GObject.GType<InfoProviderInterface>;
    }

    /**
     * @gir-type Struct
     */
    class MenuClass {
        static $gtype: GObject.GType<MenuClass>;
    }

    /**
     * @gir-type Struct
     */
    class MenuItemClass {
        static $gtype: GObject.GType<MenuItemClass>;
    }

    /**
     * @gir-type Struct
     */
    class MenuProviderInterface {
        static $gtype: GObject.GType<MenuProviderInterface>;
    }

    /**
     * @gir-type Struct
     */
    class OperationHandle {
        static $gtype: GObject.GType<OperationHandle>;
    }

    /**
     * @gir-type Struct
     */
    class PropertiesItemClass {
        static $gtype: GObject.GType<PropertiesItemClass>;
    }

    /**
     * @gir-type Struct
     */
    class PropertiesModelClass {
        static $gtype: GObject.GType<PropertiesModelClass>;
    }

    /**
     * @gir-type Struct
     */
    class PropertiesModelProviderInterface {
        static $gtype: GObject.GType<PropertiesModelProviderInterface>;
    }

    namespace ColumnProvider {
        /**
         * Interface for implementing ColumnProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_columns(): Column[];
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

        get_columns(): Column[];
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
             * @param emblem_name
             * @virtual
             */
            vfunc_add_emblem(emblem_name: string): void;
            /**
             * @param attribute_name
             * @param value
             * @virtual
             */
            vfunc_add_string_attribute(attribute_name: string, value: string): void;
            /**
             * @virtual
             */
            vfunc_can_write(): boolean;
            /**
             * @virtual
             */
            vfunc_get_activation_uri(): string;
            /**
             * @virtual
             */
            vfunc_get_file_type(): Gio.FileType;
            /**
             * @virtual
             */
            vfunc_get_location(): Gio.File;
            /**
             * @virtual
             */
            vfunc_get_mime_type(): string;
            /**
             * @virtual
             */
            vfunc_get_mount(): Gio.Mount;
            /**
             * @virtual
             */
            vfunc_get_name(): string;
            /**
             * @virtual
             */
            vfunc_get_parent_info(): FileInfo;
            /**
             * @virtual
             */
            vfunc_get_parent_location(): Gio.File;
            /**
             * @virtual
             */
            vfunc_get_parent_uri(): string;
            /**
             * @param attribute_name
             * @virtual
             */
            vfunc_get_string_attribute(attribute_name: string): string;
            /**
             * @virtual
             */
            vfunc_get_uri(): string;
            /**
             * @virtual
             */
            vfunc_get_uri_scheme(): string;
            /**
             * @virtual
             */
            vfunc_invalidate_extension_info(): void;
            /**
             * @virtual
             */
            vfunc_is_directory(): boolean;
            /**
             * @virtual
             */
            vfunc_is_gone(): boolean;
            /**
             * @param mime_type
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
         * @param location
         */
        create(location: Gio.File): FileInfo;
        /**
         * @param uri
         */
        create_for_uri(uri: string): FileInfo;
        /**
         * @param files
         */
        list_copy(files: FileInfo[]): FileInfo[];
        /**
         * @param files
         */
        list_free(files: FileInfo[]): void;
        /**
         * @param location
         */
        lookup(location: Gio.File): FileInfo;
        /**
         * @param uri
         */
        lookup_for_uri(uri: string): FileInfo;
    }
    /**
     * @gir-type Interface
     */
    interface FileInfo extends GObject.Object, FileInfo.Interface {
        // Methods

        /**
         * @param emblem_name
         */
        add_emblem(emblem_name: string): void;
        /**
         * @param attribute_name
         * @param value
         */
        add_string_attribute(attribute_name: string, value: string): void;
        can_write(): boolean;
        get_activation_uri(): string;
        get_file_type(): Gio.FileType;
        get_location(): Gio.File;
        get_mime_type(): string;
        get_mount(): Gio.Mount;
        get_name(): string;
        get_parent_info(): FileInfo;
        get_parent_location(): Gio.File;
        get_parent_uri(): string;
        /**
         * @param attribute_name
         */
        get_string_attribute(attribute_name: string): string;
        get_uri(): string;
        get_uri_scheme(): string;
        invalidate_extension_info(): void;
        is_directory(): boolean;
        is_gone(): boolean;
        /**
         * @param mime_type
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
             * @param handle
             * @virtual
             */
            vfunc_cancel_update(handle: OperationHandle): void;
            /**
             * @param file
             * @param update_complete
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
         * @param update_complete
         * @param provider
         * @param handle
         * @param result
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
         * @param handle
         */
        cancel_update(handle: OperationHandle): void;
        /**
         * @param file
         * @param update_complete
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
             * @param current_folder
             * @virtual
             */
            vfunc_get_background_items(current_folder: FileInfo): MenuItem[];
            /**
             * @param files
             * @virtual
             */
            vfunc_get_file_items(files: FileInfo[]): MenuItem[];
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

        emit_items_updated_signal(): void;
        /**
         * @param current_folder
         */
        get_background_items(current_folder: FileInfo): MenuItem[];
        /**
         * @param files
         */
        get_file_items(files: FileInfo[]): MenuItem[];
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
             * @param files
             * @virtual
             */
            vfunc_get_models(files: FileInfo[]): PropertiesModel[];
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
         * @param files
         */
        get_models(files: FileInfo[]): PropertiesModel[];
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
