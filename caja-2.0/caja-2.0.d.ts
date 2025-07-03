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

export namespace Caja {
    /**
     * Caja-2.0
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
    function file_info_lookup(location: Gio.File): FileInfo;
    function file_info_lookup_for_uri(uri: string): FileInfo;
    function info_provider_update_complete_invoke(
        update_complete: GObject.Closure,
        provider: InfoProvider,
        handle: OperationHandle,
        result: OperationResult | null,
    ): void;
    function module_initialize(module: GObject.TypeModule): void;
    function module_list_types(types: GObject.GType, num_types: number): void;
    function module_shutdown(): void;
    interface InfoProviderUpdateComplete {
        (provider: InfoProvider, handle: OperationHandle, result: OperationResult): void;
    }
    namespace Column {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::attribute': (pspec: GObject.ParamSpec) => void;
            'notify::attribute-q': (pspec: GObject.ParamSpec) => void;
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

        /**
         * emits the activate signal.
         */
        vfunc_activate(): void;

        // Methods

        /**
         * emits the activate signal.
         */
        activate(): void;
        /**
         * Attachs a menu to the given #CajaMenuItem.
         * @param menu pointer to a #CajaMenu to attach to the button
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
    abstract class ColumnDetails {
        static $gtype: GObject.GType<ColumnDetails>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ColumnProviderIface = typeof ColumnProvider;
    type ConfigurableIface = typeof Configurable;
    abstract class File {
        static $gtype: GObject.GType<File>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileInfoIface = typeof FileInfo;
    type InfoProviderIface = typeof InfoProvider;
    type LocationWidgetProviderIface = typeof LocationWidgetProvider;
    type MenuClass = typeof Menu;
    type MenuItemClass = typeof MenuItem;
    abstract class MenuItemDetails {
        static $gtype: GObject.GType<MenuItemDetails>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MenuProviderIface = typeof MenuProvider;
    /**
     * Handle for asynchronous interfaces. These are opaque handles that must
     * be unique within an extension object. These are returned by operations
     * that return CAJA_OPERATION_IN_PROGRESS.
     */
    abstract class OperationHandle {
        static $gtype: GObject.GType<OperationHandle>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PropertyPageClass = typeof PropertyPage;
    abstract class PropertyPageDetails {
        static $gtype: GObject.GType<PropertyPageDetails>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PropertyPageProviderIface = typeof PropertyPageProvider;
    type WidgetViewProviderIface = typeof WidgetViewProvider;
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

        get_columns(): Column[];

        // Virtual methods

        /**
         * Returns a #GList of #CajaColumn.
         *   See caja_column_provider_get_columns() for details.
         */
        vfunc_get_columns(): Column[];
    }

    export const ColumnProvider: ColumnProviderNamespace & {
        new (): ColumnProvider; // This allows `obj instanceof ColumnProvider`
    };

    namespace Configurable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConfigurableNamespace {
        $gtype: GObject.GType<Configurable>;
        prototype: Configurable;
    }
    interface Configurable extends GObject.Object {
        // Methods

        run_config(): void;

        // Virtual methods

        vfunc_run_config(): void;
    }

    export const Configurable: ConfigurableNamespace & {
        new (): Configurable; // This allows `obj instanceof Configurable`
    };

    namespace FileInfo {
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
    interface FileInfo extends GObject.Object {
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

        // Virtual methods

        /**
         * Adds an emblem to this file.
         *   See caja_file_info_add_emblem() for details.
         * @param emblem_name
         */
        vfunc_add_emblem(emblem_name: string): void;
        /**
         * Sets the specified string file attribute value.
         *   See caja_file_info_add_string_attribute() for details.
         * @param attribute_name
         * @param value
         */
        vfunc_add_string_attribute(attribute_name: string, value: string): void;
        /**
         * Returns whether the file is writable.
         *   See caja_file_info_can_write() for details.
         */
        vfunc_can_write(): boolean;
        /**
         * Returns the file activation URI as a string.
         *   See caja_file_info_get_activation_uri() for details.
         */
        vfunc_get_activation_uri(): string;
        /**
         * Returns the file type.
         *   See caja_file_info_get_file_type() for details.
         */
        vfunc_get_file_type(): Gio.FileType;
        /**
         * Returns the file location as a #GFile.
         *   See caja_file_info_get_location() for details.
         */
        vfunc_get_location(): Gio.File;
        /**
         * Returns the file mime type as a string.
         *   See caja_file_info_get_mime_type() for details.
         */
        vfunc_get_mime_type(): string;
        /**
         * Returns the file mount as a #GMount.
         *   See caja_file_info_get_mount() for details.
         */
        vfunc_get_mount(): Gio.Mount | null;
        /**
         * Returns the file name as a string.
         *   See caja_file_info_get_name() for details.
         */
        vfunc_get_name(): string;
        /**
         * Returns the file parent #CajaFileInfo.
         *   See caja_file_info_get_parent_info() for details.
         */
        vfunc_get_parent_info(): FileInfo | null;
        /**
         * Returns the file parent location as a #GFile.
         *   See caja_file_info_get_parent_location() for details.
         */
        vfunc_get_parent_location(): Gio.File | null;
        /**
         * Returns the file parent URI as a string.
         *   See caja_file_info_get_parent_uri() for details.
         */
        vfunc_get_parent_uri(): string;
        /**
         * Returns the specified file attribute as a string.
         *   See caja_file_info_get_string_attribute() for details.
         * @param attribute_name
         */
        vfunc_get_string_attribute(attribute_name: string): string;
        /**
         * Returns the file URI as a string.
         *   See caja_file_info_get_uri() for details.
         */
        vfunc_get_uri(): string;
        /**
         * Returns the file URI scheme as a string.
         *   See caja_file_info_get_uri_scheme() for details.
         */
        vfunc_get_uri_scheme(): string;
        /**
         * Invalidates information of the file provided by extensions.
         *   See caja_file_info_invalidate_extension_info() for details.
         */
        vfunc_invalidate_extension_info(): void;
        /**
         * Returns whether the file is a directory.
         *   See caja_file_info_is_directory() for details.
         */
        vfunc_is_directory(): boolean;
        /**
         * Returns whether the file info is gone.
         *   See caja_file_info_is_gone() for details.
         */
        vfunc_is_gone(): boolean;
        /**
         * Returns whether the file is the given mime type.
         *   See caja_file_info_is_mime_type() for details.
         * @param mime_Type
         */
        vfunc_is_mime_type(mime_Type: string): boolean;
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

        // Virtual methods

        /**
         * Cancels a previous call to caja_info_provider_update_file_info().
         *   See caja_info_provider_cancel_update() for details.
         * @param handle
         */
        vfunc_cancel_update(handle: OperationHandle): void;
        /**
         * Returns a #CajaOperationResult.
         *   See caja_info_provider_update_file_info() for details.
         * @param file
         * @param update_complete
         * @param handle
         */
        vfunc_update_file_info(
            file: FileInfo,
            update_complete: GObject.Closure,
            handle: OperationHandle,
        ): OperationResult;
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

        get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;

        // Virtual methods

        /**
         * Returns a #GtkWidget.
         *   See caja_location_widget_provider_get_widget() for details.
         * @param uri the URI of the location
         * @param window parent #GtkWindow
         */
        vfunc_get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;
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

        emit_items_updated_signal(): void;
        get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
        get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[];
        get_toolbar_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];

        // Virtual methods

        /**
         * Returns a #GList of #CajaMenuItem.
         *   See caja_menu_provider_get_background_items() for details.
         * @param window the parent #GtkWidget window
         * @param current_folder the folder for which background items are requested
         */
        vfunc_get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
        /**
         * Returns a #GList of #CajaMenuItem.
         *   See caja_menu_provider_get_file_items() for details.
         * @param window the parent #GtkWidget window
         * @param files a list of #CajaFileInfo
         */
        vfunc_get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[];
        /**
         * Returns a #GList of #CajaMenuItem.
         *   See caja_menu_provider_get_toolbar_items() for details.
         * @param window the parent #GtkWidget window
         * @param current_folder the folder for which toolbar items are requested
         */
        vfunc_get_toolbar_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
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
         * This function is called by Caja when it wants property page
         * items from the extension.
         *
         * This function is called in the main thread before a property page
         * is shown, so it should return quickly.
         * @param files a #GList of #CajaFileInfo
         * @returns A #GList of allocated #CajaPropertyPage items.
         */
        get_pages(files: FileInfo[]): PropertyPage[];

        // Virtual methods

        /**
         * This function is called by Caja when it wants property page
         * items from the extension.
         *
         * This function is called in the main thread before a property page
         * is shown, so it should return quickly.
         * @param files a #GList of #CajaFileInfo
         */
        vfunc_get_pages(files: FileInfo[]): PropertyPage[];
    }

    export const PropertyPageProvider: PropertyPageProviderNamespace & {
        new (): PropertyPageProvider; // This allows `obj instanceof PropertyPageProvider`
    };

    namespace WidgetViewProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WidgetViewProviderNamespace {
        $gtype: GObject.GType<WidgetViewProvider>;
        prototype: WidgetViewProvider;
    }
    interface WidgetViewProvider extends GObject.Object {
        // Methods

        /**
         * Add a file of this location into the widget view.
         * @param file add a #CajaFile into the widget view.
         * @param directory the directory of the file.
         */
        add_file(file: File, directory: File): void;
        /**
         * Clear the content of this widget view.
         */
        clear(): void;
        /**
         * Return the first visible file. When use start visit the location, the caja's status is waiting, until
         * get the first visible file.
         * @returns the first visible file.
         */
        get_first_visible_file(): string;
        get_item_count(): number;
        /**
         * Set the location of this #CajaWidgetViewProvider.
         * @param location
         */
        set_location(location: string): void;
        /**
         * Set parent #GtkWindow of this #CajaWidgetViewProvider.
         * @param window parent #GtkWindow
         */
        set_window(window: Gtk.Window): void;
        /**
         * Whether this widget view works for the uri.
         * @param uri the location to visit.
         * @param file_type The #GFileType for the uri
         * @param mime_type The mimetype for the uri
         * @returns True to use custom widget view, False to ignore, and caja use normal view.
         */
        supports_uri(uri: string, file_type: Gio.FileType | null, mime_type: string): boolean;

        // Virtual methods

        /**
         * Add a file of this location into the widget view.
         * @param file add a #CajaFile into the widget view.
         * @param directory the directory of the file.
         */
        vfunc_add_file(file: File, directory: File): void;
        /**
         * Clear the content of this widget view.
         */
        vfunc_clear(): void;
        /**
         * Return the first visible file. When use start visit the location, the caja's status is waiting, until
         * get the first visible file.
         */
        vfunc_get_first_visible_file(): string;
        /**
         * Return the item count of this widget view.
         */
        vfunc_get_item_count(): number;
        /**
         * Set the location of this #CajaWidgetViewProvider.
         * @param location
         */
        vfunc_set_location(location: string): void;
        /**
         * Set parent #GtkWindow of this #CajaWidgetViewProvider.
         * @param window parent #GtkWindow
         */
        vfunc_set_window(window: Gtk.Window): void;
        /**
         * Whether this widget view works for the uri.
         * @param uri the location to visit.
         * @param file_type The #GFileType for the uri
         * @param mime_type The mimetype for the uri
         */
        vfunc_supports_uri(uri: string, file_type: Gio.FileType, mime_type: string): boolean;
    }

    export const WidgetViewProvider: WidgetViewProviderNamespace & {
        new (): WidgetViewProvider; // This allows `obj instanceof WidgetViewProvider`
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

export default Caja;

// END
