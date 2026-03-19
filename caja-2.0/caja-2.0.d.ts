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

    /**
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
     * @returns a {@link Caja.FileInfo}
     */
    function file_info_create(location: Gio.File): FileInfo;
    /**
     * @param uri the URI to lookup the file info for
     * @returns a {@link Caja.FileInfo}
     */
    function file_info_create_for_uri(uri: string): FileInfo;
    /**
     * @param files the files to copy
     * @returns a copy of `files`.  Use `caja_file_info_list_free` to free the list and unref its contents.
     */
    function file_info_list_copy(files: FileInfo[]): FileInfo[];
    /**
     * @param files a list created with   `caja_file_info_list_copy`
     */
    function file_info_list_free(files: FileInfo[]): void;
    /**
     * @param location the location to lookup the file info for
     * @returns a {@link Caja.FileInfo}
     */
    function file_info_lookup(location: Gio.File): FileInfo;
    /**
     * @param uri the URI to lookup the file info for
     * @returns a {@link Caja.FileInfo}
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
    /**
     * @param module
     */
    function module_initialize(module: GObject.TypeModule): void;
    /**
     * @param types
     * @param num_types
     */
    function module_list_types(types: GObject.GType, num_types: number): void;
    function module_shutdown(): void;
    /**
     * @gir-type Callback
     */
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

    /**
     * @gir-type Class
     */
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
        /**
         * @returns the provided {@link Caja.MenuItem} list
         */
        get_items(): MenuItem[];
    }

    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
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
         * @param item_list a list of {@link Caja.MenuItem}
         */
        static list_free(item_list: MenuItem[]): void;

        // Virtual methods

        /**
         * emits the activate signal.
         * @virtual
         */
        vfunc_activate(): void;

        // Methods

        /**
         * emits the activate signal.
         */
        activate(): void;
        /**
         * Attachs a menu to the given {@link Caja.MenuItem}.
         * @param menu pointer to a {@link Caja.Menu} to attach to the button
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
     * @gir-type Struct
     */
    abstract class ColumnDetails {
        static $gtype: GObject.GType<ColumnDetails>;
    }

    /**
     * @gir-type Alias
     */
    type ColumnProviderIface = typeof ColumnProvider;
    /**
     * @gir-type Alias
     */
    type ConfigurableIface = typeof Configurable;
    /**
     * @gir-type Struct
     */
    abstract class File {
        static $gtype: GObject.GType<File>;
    }

    /**
     * @gir-type Alias
     */
    type FileInfoIface = typeof FileInfo;
    /**
     * @gir-type Alias
     */
    type InfoProviderIface = typeof InfoProvider;
    /**
     * @gir-type Alias
     */
    type LocationWidgetProviderIface = typeof LocationWidgetProvider;
    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;
    /**
     * @gir-type Alias
     */
    type MenuItemClass = typeof MenuItem;
    /**
     * @gir-type Struct
     */
    abstract class MenuItemDetails {
        static $gtype: GObject.GType<MenuItemDetails>;
    }

    /**
     * @gir-type Struct
     */
    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MenuProviderIface = typeof MenuProvider;
    /**
     * Handle for asynchronous interfaces. These are opaque handles that must
     * be unique within an extension object. These are returned by operations
     * that return CAJA_OPERATION_IN_PROGRESS.
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
     * @gir-type Struct
     */
    abstract class PropertyPageDetails {
        static $gtype: GObject.GType<PropertyPageDetails>;
    }

    /**
     * @gir-type Alias
     */
    type PropertyPageProviderIface = typeof PropertyPageProvider;
    /**
     * @gir-type Alias
     */
    type WidgetViewProviderIface = typeof WidgetViewProvider;
    namespace ColumnProvider {
        /**
         * Interface for implementing ColumnProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns a {@link GLib.List} of {@link Caja.Column}.
             *   See `caja_column_provider_get_columns()` for details.
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

        /**
         * @returns the provided {@link Caja.Column} objects
         */
        get_columns(): Column[];
    }

    export const ColumnProvider: ColumnProviderNamespace & {
        new (): ColumnProvider; // This allows `obj instanceof ColumnProvider`
    };

    namespace Configurable {
        /**
         * Interface for implementing Configurable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_run_config(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConfigurableNamespace {
        $gtype: GObject.GType<Configurable>;
        prototype: Configurable;
    }
    /**
     * @gir-type Interface
     */
    interface Configurable extends GObject.Object, Configurable.Interface {
        // Methods

        run_config(): void;
    }

    export const Configurable: ConfigurableNamespace & {
        new (): Configurable; // This allows `obj instanceof Configurable`
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
             *   See `caja_file_info_add_emblem()` for details.
             * @param emblem_name
             * @virtual
             */
            vfunc_add_emblem(emblem_name: string): void;
            /**
             * Sets the specified string file attribute value.
             *   See `caja_file_info_add_string_attribute()` for details.
             * @param attribute_name
             * @param value
             * @virtual
             */
            vfunc_add_string_attribute(attribute_name: string, value: string): void;
            /**
             * Returns whether the file is writable.
             *   See `caja_file_info_can_write()` for details.
             * @virtual
             */
            vfunc_can_write(): boolean;
            /**
             * Returns the file activation URI as a string.
             *   See `caja_file_info_get_activation_uri()` for details.
             * @virtual
             */
            vfunc_get_activation_uri(): string;
            /**
             * Returns the file type.
             *   See `caja_file_info_get_file_type()` for details.
             * @virtual
             */
            vfunc_get_file_type(): Gio.FileType;
            /**
             * Returns the file location as a {@link Gio.File}.
             *   See `caja_file_info_get_location()` for details.
             * @virtual
             */
            vfunc_get_location(): Gio.File;
            /**
             * Returns the file mime type as a string.
             *   See `caja_file_info_get_mime_type()` for details.
             * @virtual
             */
            vfunc_get_mime_type(): string;
            /**
             * Returns the file mount as a {@link Gio.Mount}.
             *   See `caja_file_info_get_mount()` for details.
             * @virtual
             */
            vfunc_get_mount(): Gio.Mount | null;
            /**
             * Returns the file name as a string.
             *   See `caja_file_info_get_name()` for details.
             * @virtual
             */
            vfunc_get_name(): string;
            /**
             * Returns the file parent {@link Caja.FileInfo}.
             *   See `caja_file_info_get_parent_info()` for details.
             * @virtual
             */
            vfunc_get_parent_info(): FileInfo | null;
            /**
             * Returns the file parent location as a {@link Gio.File}.
             *   See `caja_file_info_get_parent_location()` for details.
             * @virtual
             */
            vfunc_get_parent_location(): Gio.File | null;
            /**
             * Returns the file parent URI as a string.
             *   See `caja_file_info_get_parent_uri()` for details.
             * @virtual
             */
            vfunc_get_parent_uri(): string;
            /**
             * Returns the specified file attribute as a string.
             *   See `caja_file_info_get_string_attribute()` for details.
             * @param attribute_name
             * @virtual
             */
            vfunc_get_string_attribute(attribute_name: string): string;
            /**
             * Returns the file URI as a string.
             *   See `caja_file_info_get_uri()` for details.
             * @virtual
             */
            vfunc_get_uri(): string;
            /**
             * Returns the file URI scheme as a string.
             *   See `caja_file_info_get_uri_scheme()` for details.
             * @virtual
             */
            vfunc_get_uri_scheme(): string;
            /**
             * Invalidates information of the file provided by extensions.
             *   See `caja_file_info_invalidate_extension_info()` for details.
             * @virtual
             */
            vfunc_invalidate_extension_info(): void;
            /**
             * Returns whether the file is a directory.
             *   See `caja_file_info_is_directory()` for details.
             * @virtual
             */
            vfunc_is_directory(): boolean;
            /**
             * Returns whether the file info is gone.
             *   See `caja_file_info_is_gone()` for details.
             * @virtual
             */
            vfunc_is_gone(): boolean;
            /**
             * Returns whether the file is the given mime type.
             *   See `caja_file_info_is_mime_type()` for details.
             * @param mime_Type
             * @virtual
             */
            vfunc_is_mime_type(mime_Type: string): boolean;
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
         * @param files a list created with   `caja_file_info_list_copy`
         */
        list_free(files: FileInfo[]): void;
        /**
         * @param location the location to lookup the file info for
         */
        lookup(location: Gio.File): FileInfo;
        /**
         * @param uri the URI to lookup the file info for
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
        /**
         * @returns a {@link Gio.File} for the location of `file`
         */
        get_location(): Gio.File;
        get_mime_type(): string;
        /**
         * @returns a {@link Gio.Mount} for the mount of `file`,   or `null` if `file` has no mount
         */
        get_mount(): Gio.Mount | null;
        get_name(): string;
        /**
         * @returns a {@link Caja.FileInfo} for the parent of `file`,   or `null` if `file` has no parent
         */
        get_parent_info(): FileInfo | null;
        /**
         * @returns a {@link Gio.File} for the parent location of `file`,   or `null` if `file` has no parent
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
             * Cancels a previous call to `caja_info_provider_update_file_info()`.
             *   See `caja_info_provider_cancel_update()` for details.
             * @param handle
             * @virtual
             */
            vfunc_cancel_update(handle: OperationHandle): void;
            /**
             * Returns a {@link Caja.OperationResult}.
             *   See `caja_info_provider_update_file_info()` for details.
             * @param file
             * @param update_complete
             * @param handle
             * @virtual
             */
            vfunc_update_file_info(
                file: FileInfo,
                update_complete: GObject.Closure,
                handle: OperationHandle,
            ): OperationResult;
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
         * @param handle
         */
        update_file_info(file: FileInfo, update_complete: GObject.Closure, handle: OperationHandle): OperationResult;
    }

    export const InfoProvider: InfoProviderNamespace & {
        new (): InfoProvider; // This allows `obj instanceof InfoProvider`
    };

    namespace LocationWidgetProvider {
        /**
         * Interface for implementing LocationWidgetProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns a {@link Gtk.Widget}.
             *   See `caja_location_widget_provider_get_widget()` for details.
             * @param uri the URI of the location
             * @param window parent {@link Gtk.Window}
             * @virtual
             */
            vfunc_get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;
        }

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
    interface LocationWidgetProvider extends GObject.Object, LocationWidgetProvider.Interface {
        // Methods

        /**
         * @param uri the URI of the location
         * @param window parent {@link Gtk.Window}
         * @returns the location widget for `provider` at `uri`
         */
        get_widget(uri: string, window: Gtk.Widget): Gtk.Widget;
    }

    export const LocationWidgetProvider: LocationWidgetProviderNamespace & {
        new (): LocationWidgetProvider; // This allows `obj instanceof LocationWidgetProvider`
    };

    namespace MenuProvider {
        /**
         * Interface for implementing MenuProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Returns a {@link GLib.List} of {@link Caja.MenuItem}.
             *   See `caja_menu_provider_get_background_items()` for details.
             * @param window the parent {@link Gtk.Widget} window
             * @param current_folder the folder for which background items are requested
             * @virtual
             */
            vfunc_get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
            /**
             * Returns a {@link GLib.List} of {@link Caja.MenuItem}.
             *   See `caja_menu_provider_get_file_items()` for details.
             * @param window the parent {@link Gtk.Widget} window
             * @param files a list of {@link Caja.FileInfo}
             * @virtual
             */
            vfunc_get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[];
            /**
             * Returns a {@link GLib.List} of {@link Caja.MenuItem}.
             *   See `caja_menu_provider_get_toolbar_items()` for details.
             * @param window the parent {@link Gtk.Widget} window
             * @param current_folder the folder for which toolbar items are requested
             * @virtual
             */
            vfunc_get_toolbar_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
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
         * @param window the parent {@link Gtk.Widget} window
         * @param current_folder the folder for which background items are requested
         * @returns the provided list of {@link Caja.MenuItem}
         */
        get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
        /**
         * @param window the parent {@link Gtk.Widget} window
         * @param files a list of {@link Caja.FileInfo}
         * @returns the provided list of {@link Caja.MenuItem}
         */
        get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[];
        /**
         * @param window the parent {@link Gtk.Widget} window
         * @param current_folder the folder for which toolbar items are requested
         * @returns the provided list of {@link Caja.MenuItem}
         */
        get_toolbar_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[];
    }

    export const MenuProvider: MenuProviderNamespace & {
        new (): MenuProvider; // This allows `obj instanceof MenuProvider`
    };

    namespace PropertyPageProvider {
        /**
         * Interface for implementing PropertyPageProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * This function is called by Caja when it wants property page
             * items from the extension.
             *
             * This function is called in the main thread before a property page
             * is shown, so it should return quickly.
             * @param files a {@link GLib.List} of {@link Caja.FileInfo}
             * @virtual
             */
            vfunc_get_pages(files: FileInfo[]): PropertyPage[];
        }

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
    interface PropertyPageProvider extends GObject.Object, PropertyPageProvider.Interface {
        // Methods

        /**
         * This function is called by Caja when it wants property page
         * items from the extension.
         *
         * This function is called in the main thread before a property page
         * is shown, so it should return quickly.
         * @param files a {@link GLib.List} of {@link Caja.FileInfo}
         * @returns A {@link GLib.List} of allocated {@link Caja.PropertyPage} items.
         */
        get_pages(files: FileInfo[]): PropertyPage[];
    }

    export const PropertyPageProvider: PropertyPageProviderNamespace & {
        new (): PropertyPageProvider; // This allows `obj instanceof PropertyPageProvider`
    };

    namespace WidgetViewProvider {
        /**
         * Interface for implementing WidgetViewProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Add a file of this location into the widget view.
             * @param file add a {@link Caja.File} into the widget view.
             * @param directory the directory of the file.
             * @virtual
             */
            vfunc_add_file(file: File, directory: File): void;
            /**
             * Clear the content of this widget view.
             * @virtual
             */
            vfunc_clear(): void;
            /**
             * Return the first visible file. When use start visit the location, the caja's status is waiting, until
             * get the first visible file.
             * @virtual
             */
            vfunc_get_first_visible_file(): string;
            /**
             * Return the item count of this widget view.
             * @virtual
             */
            vfunc_get_item_count(): number;
            /**
             * Set the location of this {@link Caja.WidgetViewProvider}.
             * @param location
             * @virtual
             */
            vfunc_set_location(location: string): void;
            /**
             * Set parent {@link Gtk.Window} of this {@link Caja.WidgetViewProvider}.
             * @param window parent {@link Gtk.Window}
             * @virtual
             */
            vfunc_set_window(window: Gtk.Window): void;
            /**
             * Whether this widget view works for the uri.
             * @param uri the location to visit.
             * @param file_type The {@link Gio.FileType} for the uri
             * @param mime_type The mimetype for the uri
             * @virtual
             */
            vfunc_supports_uri(uri: string, file_type: Gio.FileType, mime_type: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WidgetViewProviderNamespace {
        $gtype: GObject.GType<WidgetViewProvider>;
        prototype: WidgetViewProvider;
    }
    /**
     * @gir-type Interface
     */
    interface WidgetViewProvider extends GObject.Object, WidgetViewProvider.Interface {
        // Methods

        /**
         * Add a file of this location into the widget view.
         * @param file add a {@link Caja.File} into the widget view.
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
        /**
         * @returns The item count of this {@link Caja.WidgetViewProvider}
         */
        get_item_count(): number;
        /**
         * Set the location of this {@link Caja.WidgetViewProvider}.
         * @param location
         */
        set_location(location: string): void;
        /**
         * Set parent {@link Gtk.Window} of this {@link Caja.WidgetViewProvider}.
         * @param window parent {@link Gtk.Window}
         */
        set_window(window: Gtk.Window): void;
        /**
         * Whether this widget view works for the uri.
         * @param uri the location to visit.
         * @param file_type The {@link Gio.FileType} for the uri
         * @param mime_type The mimetype for the uri
         * @returns True to use custom widget view, False to ignore, and caja use normal view.
         */
        supports_uri(uri: string, file_type: Gio.FileType | null, mime_type: string): boolean;
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
