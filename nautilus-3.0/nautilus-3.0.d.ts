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

export namespace Nautilus {
    /**
     * Nautilus-3.0
     */

    /**
     * Return values for asynchronous operations performed by the extension.
     * See nautilus_info_provider_update_file_info().
     */

    /**
     * Return values for asynchronous operations performed by the extension.
     * See nautilus_info_provider_update_file_info().
     */
    export namespace OperationResult {
        export const $gtype: GObject.GType<OperationResult>;
    }

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
    function file_info_create(location: Gio.File): FileInfo;
    function file_info_create_for_uri(uri: string): FileInfo;
    function file_info_list_copy(files: FileInfo[]): FileInfo[];
    function file_info_list_free(files: FileInfo[]): void;
    function file_info_lookup(location: Gio.File): FileInfo | null;
    function file_info_lookup_for_uri(uri: string): FileInfo | null;
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
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attribute: string;
            attribute_q: number;
            attributeQ: number;
            default_sort_order: Gtk.SortType;
            defaultSortOrder: Gtk.SortType;
            description: string;
            label: string;
            name: string;
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
        get default_sort_order(): Gtk.SortType;
        set default_sort_order(val: Gtk.SortType);
        get defaultSortOrder(): Gtk.SortType;
        set defaultSortOrder(val: Gtk.SortType);
        get description(): string;
        set description(val: string);
        get label(): string;
        set label(val: string);
        get name(): string;
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
        get_items(): MenuItem[] | null;
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

        static ['new'](name: string, label: string, tip?: string | null, icon?: string | null): MenuItem;

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

        /**
         * Emits #NautilusMenuItem::activate.
         */
        vfunc_activate(): void;

        // Methods

        /**
         * Emits #NautilusMenuItem::activate.
         */
        activate(): void;
        /**
         * Attaches a menu to the given #NautilusMenuItem.
         * @param menu pointer to a #NautilusMenu to attach to the button
         */
        set_submenu(menu: Menu): void;
    }

    namespace PropertyPage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: Gtk.Widget;
            name: string;
            page: Gtk.Widget;
        }
    }

    class PropertyPage extends GObject.Object {
        static $gtype: GObject.GType<PropertyPage>;

        // Properties

        get label(): Gtk.Widget;
        set label(val: Gtk.Widget);
        get name(): string;
        get page(): Gtk.Widget;
        set page(val: Gtk.Widget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropertyPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PropertyPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage;

        // Signals

        connect<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PropertyPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type ColumnClass = typeof Column;
    /**
     * Interface for extensions to provide additional list view columns.
     */
    class ColumnProviderInterface {
        static $gtype: GObject.GType<ColumnProviderInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileInfoInterface = typeof FileInfo;
    /**
     * Interface for extensions to provide additional information about files.
     */
    class InfoProviderInterface {
        static $gtype: GObject.GType<InfoProviderInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Interface for extensions to provide additional location widgets.
     */
    class LocationWidgetProviderInterface {
        static $gtype: GObject.GType<LocationWidgetProviderInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MenuClass = typeof Menu;
    type MenuItemClass = typeof MenuItem;
    /**
     * Interface for extensions to provide additional menu items.
     */
    class MenuProviderInterface {
        static $gtype: GObject.GType<MenuProviderInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Handle for asynchronous interfaces. These are opaque handles that must
     * be unique within an extension object. These are returned by operations
     * that return #NAUTILUS_OPERATION_IN_PROGRESS.
     */
    abstract class OperationHandle {
        static $gtype: GObject.GType<OperationHandle>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PropertyPageClass = typeof PropertyPage;
    /**
     * Interface for extensions to provide additional property pages.
     */
    class PropertyPageProviderInterface {
        static $gtype: GObject.GType<PropertyPageProviderInterface>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace ColumnProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ColumnProviderNamespace {
        $gtype: GObject.GType<ColumnProvider>;
        prototype: ColumnProvider;
    }
    interface ColumnProvider extends GObject.Object {
        // Methods

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

            vfunc_add_emblem(emblem_name: string): void;
            vfunc_add_string_attribute(attribute_name: string, value: string): void;
            vfunc_can_write(): boolean;
            vfunc_get_activation_uri(): string;
            vfunc_get_file_type(): Gio.FileType;
            vfunc_get_location(): Gio.File;
            vfunc_get_mime_type(): string;
            vfunc_get_mount(): Gio.Mount | null;
            vfunc_get_name(): string;
            /**
             * It's not safe to call this recursively multiple times, as it works
             * only for files already cached by Nautilus.
             */
            vfunc_get_parent_info(): FileInfo | null;
            vfunc_get_parent_location(): Gio.File | null;
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
        lookup(location: Gio.File): FileInfo | null;
        lookup_for_uri(uri: string): FileInfo | null;
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
        get_mount(): Gio.Mount | null;
        get_name(): string;
        /**
         * It's not safe to call this recursively multiple times, as it works
         * only for files already cached by Nautilus.
         * @returns a #NautilusFileInfo for the parent of @file_info,                                      or %NULL if @file_info has no parent.
         */
        get_parent_info(): FileInfo | null;
        get_parent_location(): Gio.File | null;
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
    interface InfoProvider extends GObject.Object {
        // Methods

        cancel_update(handle: OperationHandle): void;
        update_file_info(file: FileInfo, update_complete: GObject.Closure, handle: OperationHandle): OperationResult;
    }

    export const InfoProvider: InfoProviderNamespace & {
        new (): InfoProvider; // This allows `obj instanceof InfoProvider`
    };

    namespace LocationWidgetProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LocationWidgetProviderNamespace {
        $gtype: GObject.GType<LocationWidgetProvider>;
        prototype: LocationWidgetProvider;
    }
    interface LocationWidgetProvider extends GObject.Object {
        // Methods

        get_widget(uri: string, window: Gtk.Widget): Gtk.Widget | null;
    }

    export const LocationWidgetProvider: LocationWidgetProviderNamespace & {
        new (): LocationWidgetProvider; // This allows `obj instanceof LocationWidgetProvider`
    };

    namespace MenuProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MenuProviderNamespace {
        $gtype: GObject.GType<MenuProvider>;
        prototype: MenuProvider;
    }
    interface MenuProvider extends GObject.Object {
        // Methods

        /**
         * Emits #NautilusMenuProvider::items-updated.
         */
        emit_items_updated_signal(): void;
        get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null;
        get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null;
    }

    export const MenuProvider: MenuProviderNamespace & {
        new (): MenuProvider; // This allows `obj instanceof MenuProvider`
    };

    namespace PropertyPageProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PropertyPageProviderNamespace {
        $gtype: GObject.GType<PropertyPageProvider>;
        prototype: PropertyPageProvider;
    }
    interface PropertyPageProvider extends GObject.Object {
        // Methods

        /**
         * This function is called by Nautilus when it wants property page
         * items from the extension.
         *
         * This function is called in the main thread before a property page
         * is shown, so it should return quickly.
         * @param files a #GList of #NautilusFileInfo
         * @returns A #GList of allocated #NautilusPropertyPage items.
         */
        get_pages(files: FileInfo[]): PropertyPage[] | null;
    }

    export const PropertyPageProvider: PropertyPageProviderNamespace & {
        new (): PropertyPageProvider; // This allows `obj instanceof PropertyPageProvider`
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
