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
        get default_sort_order(): Gtk.SortType;
        set default_sort_order(val: Gtk.SortType);
        get defaultSortOrder(): Gtk.SortType;
        set defaultSortOrder(val: Gtk.SortType);
        get description(): string;
        set description(val: string);
        get label(): string;
        set label(val: string);
        /**
         * @construct-only
         */
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

    /**
     * @gir-type Class
     */
    class PropertyPage extends GObject.Object {
        static $gtype: GObject.GType<PropertyPage>;

        // Properties

        get label(): Gtk.Widget;
        set label(val: Gtk.Widget);
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PropertyPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PropertyPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PropertyPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type ColumnClass = typeof Column;
    /**
     * Interface for extensions to provide additional list view columns.
     * @gir-type Struct
     */
    class ColumnProviderInterface {
        static $gtype: GObject.GType<ColumnProviderInterface>;
    }

    /**
     * @gir-type Alias
     */
    type FileInfoInterface = typeof FileInfo;
    /**
     * Interface for extensions to provide additional information about files.
     * @gir-type Struct
     */
    class InfoProviderInterface {
        static $gtype: GObject.GType<InfoProviderInterface>;
    }

    /**
     * Interface for extensions to provide additional location widgets.
     * @gir-type Struct
     */
    class LocationWidgetProviderInterface {
        static $gtype: GObject.GType<LocationWidgetProviderInterface>;
    }

    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;
    /**
     * @gir-type Alias
     */
    type MenuItemClass = typeof MenuItem;
    /**
     * Interface for extensions to provide additional menu items.
     * @gir-type Struct
     */
    class MenuProviderInterface {
        static $gtype: GObject.GType<MenuProviderInterface>;
    }

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
    type PropertyPageClass = typeof PropertyPage;
    /**
     * Interface for extensions to provide additional property pages.
     * @gir-type Struct
     */
    class PropertyPageProviderInterface {
        static $gtype: GObject.GType<PropertyPageProviderInterface>;
    }

    namespace ColumnProvider {
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
    interface ColumnProvider extends GObject.Object {
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
            vfunc_get_mount(): Gio.Mount | null;
            /**
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
             * @virtual
             */
            vfunc_get_parent_location(): Gio.File | null;
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
        get_parent_uri(): string;
        /**
         * @param attribute_name
         */
        get_string_attribute(attribute_name: string): string;
        get_uri(): string;
        get_uri_scheme(): string;
        invalidate_extension_info(): void;
        is_directory(): boolean;
        /**
         * @returns whether the file has been deleted
         */
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
    interface InfoProvider extends GObject.Object {
        // Methods

        /**
         * @param handle
         */
        cancel_update(handle: OperationHandle): void;
        /**
         * @param file
         * @param update_complete
         * @param handle
         */
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
    /**
     * @gir-type Interface
     */
    interface LocationWidgetProvider extends GObject.Object {
        // Methods

        /**
         * @param uri the URI of the location
         * @param window parent {@link Gtk.Window}
         * @returns the location widget for `provider` at `uri`
         */
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
    /**
     * @gir-type Interface
     */
    interface MenuProvider extends GObject.Object {
        // Methods

        /**
         * Emits {@link Nautilus.MenuProvider.SignalSignatures.items_updated | Nautilus.MenuProvider::items-updated}.
         */
        emit_items_updated_signal(): void;
        /**
         * @param window the parent {@link Gtk.Widget} window
         * @param current_folder the folder for which background items are requested
         * @returns the provided list of {@link Nautilus.MenuItem}.
         */
        get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null;
        /**
         * @param window the parent {@link Gtk.Widget} window
         * @param files a list of {@link Nautilus.FileInfo}
         * @returns the provided list of {@link Nautilus.MenuItem}.
         */
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
    /**
     * @gir-type Interface
     */
    interface PropertyPageProvider extends GObject.Object {
        // Methods

        /**
         * This function is called by Nautilus when it wants property page
         * items from the extension.
         *
         * This function is called in the main thread before a property page
         * is shown, so it should return quickly.
         * @param files a {@link GLib.List} of {@link Nautilus.FileInfo}
         * @returns A {@link GLib.List} of allocated {@link Nautilus.PropertyPage} items.
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
