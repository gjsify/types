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

    export namespace OperationResult {
        export const $gtype: GObject.GType<OperationResult>;
    }

    enum OperationResult {
        COMPLETE,
        FAILED,
        IN_PROGRESS,
    }

    function file_info_create(location: Gio.File): FileInfo;
    function file_info_create_for_uri(uri: string): FileInfo;
    function file_info_list_copy(files: FileInfo[]): FileInfo[];
    function file_info_list_free(files: FileInfo[]): void;
    function file_info_lookup(location: Gio.File): FileInfo;
    function file_info_lookup_for_uri(uri: string): FileInfo;
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

    class Column extends GObject.Object {
        static $gtype: GObject.GType<Column>;

        // Properties

        get attribute(): string;
        set attribute(val: string);
        get attribute_q(): number;
        get attributeQ(): number;
        get default_sort_order(): boolean;
        set default_sort_order(val: boolean);
        get defaultSortOrder(): boolean;
        set defaultSortOrder(val: boolean);
        get description(): string;
        set description(val: string);
        get label(): string;
        set label(val: string);
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

        connect<K extends keyof Column.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Column.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Column.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

        connect<K extends keyof Menu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Menu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Menu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        append_item(item: MenuItem): void;
        get_items(): MenuItem[];
    }

    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
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

    class MenuItem extends GObject.Object {
        static $gtype: GObject.GType<MenuItem>;

        // Properties

        get icon(): string;
        set icon(val: string);
        get label(): string;
        set label(val: string);
        get menu(): Menu;
        set menu(val: Menu);
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

        connect<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static list_free(item_list: MenuItem[]): void;

        // Virtual methods

        vfunc_activate(): void;

        // Methods

        activate(): void;
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

    class PropertiesItem extends GObject.Object {
        static $gtype: GObject.GType<PropertiesItem>;

        // Properties

        get name(): string;
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

        connect<K extends keyof PropertiesItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropertiesItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

    class PropertiesModel extends GObject.Object {
        static $gtype: GObject.GType<PropertiesModel>;

        // Properties

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

        connect<K extends keyof PropertiesModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropertiesModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertiesModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PropertiesModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PropertiesModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_model(): Gio.ListModel;
        get_title(): string;
        set_title(title: string): void;
    }

    class ColumnClass {
        static $gtype: GObject.GType<ColumnClass>;
    }

    class ColumnProviderInterface {
        static $gtype: GObject.GType<ColumnProviderInterface>;
    }

    class FileInfoInterface {
        static $gtype: GObject.GType<FileInfoInterface>;
    }

    class InfoProviderInterface {
        static $gtype: GObject.GType<InfoProviderInterface>;
    }

    class MenuClass {
        static $gtype: GObject.GType<MenuClass>;
    }

    class MenuItemClass {
        static $gtype: GObject.GType<MenuItemClass>;
    }

    class MenuProviderInterface {
        static $gtype: GObject.GType<MenuProviderInterface>;
    }

    class OperationHandle {
        static $gtype: GObject.GType<OperationHandle>;
    }

    class PropertiesItemClass {
        static $gtype: GObject.GType<PropertiesItemClass>;
    }

    class PropertiesModelClass {
        static $gtype: GObject.GType<PropertiesModelClass>;
    }

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

            vfunc_get_columns(): Column[];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ColumnProviderNamespace {
        $gtype: GObject.GType<ColumnProvider>;
        prototype: ColumnProvider;
    }
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

            vfunc_add_emblem(emblem_name: string): void;
            vfunc_add_string_attribute(attribute_name: string, value: string): void;
            vfunc_can_write(): boolean;
            vfunc_get_activation_uri(): string;
            vfunc_get_file_type(): Gio.FileType;
            vfunc_get_location(): Gio.File;
            vfunc_get_mime_type(): string;
            vfunc_get_mount(): Gio.Mount;
            vfunc_get_name(): string;
            vfunc_get_parent_info(): FileInfo;
            vfunc_get_parent_location(): Gio.File;
            vfunc_get_parent_uri(): string;
            vfunc_get_string_attribute(attribute_name: string): string;
            vfunc_get_uri(): string;
            vfunc_get_uri_scheme(): string;
            vfunc_invalidate_extension_info(): void;
            vfunc_is_directory(): boolean;
            vfunc_is_gone(): boolean;
            vfunc_is_mime_type(mime_type: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileInfoNamespace {
        $gtype: GObject.GType<FileInfo>;
        prototype: FileInfo;

        create(location: Gio.File): FileInfo;
        create_for_uri(uri: string): FileInfo;
        list_copy(files: FileInfo[]): FileInfo[];
        list_free(files: FileInfo[]): void;
        lookup(location: Gio.File): FileInfo;
        lookup_for_uri(uri: string): FileInfo;
    }
    interface FileInfo extends GObject.Object, FileInfo.Interface {
        // Methods

        add_emblem(emblem_name: string): void;
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
        get_string_attribute(attribute_name: string): string;
        get_uri(): string;
        get_uri_scheme(): string;
        invalidate_extension_info(): void;
        is_directory(): boolean;
        is_gone(): boolean;
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

            vfunc_cancel_update(handle: OperationHandle): void;
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

        update_complete_invoke(
            update_complete: GObject.Closure,
            provider: InfoProvider,
            handle: OperationHandle,
            result: OperationResult,
        ): void;
    }
    interface InfoProvider extends GObject.Object, InfoProvider.Interface {
        // Methods

        cancel_update(handle: OperationHandle): void;
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

            vfunc_get_background_items(current_folder: FileInfo): MenuItem[];
            vfunc_get_file_items(files: FileInfo[]): MenuItem[];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MenuProviderNamespace {
        $gtype: GObject.GType<MenuProvider>;
        prototype: MenuProvider;
    }
    interface MenuProvider extends GObject.Object, MenuProvider.Interface {
        // Methods

        emit_items_updated_signal(): void;
        get_background_items(current_folder: FileInfo): MenuItem[];
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

            vfunc_get_models(files: FileInfo[]): PropertiesModel[];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PropertiesModelProviderNamespace {
        $gtype: GObject.GType<PropertiesModelProvider>;
        prototype: PropertiesModelProvider;
    }
    interface PropertiesModelProvider extends GObject.Object, PropertiesModelProvider.Interface {
        // Methods

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
