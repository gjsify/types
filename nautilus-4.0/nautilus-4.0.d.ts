/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './nautilus-4.0-ambient.d.ts';
import './nautilus-4.0-import.d.ts';
/**
 * Nautilus-4.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Nautilus {
    /**
     * Return values for asynchronous operations performed by the extension.
     * See nautilus_info_provider_update_file_info().
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
        result: OperationResult,
    ): void;
    module Column {
        // Constructor properties interface
    }

    /**
     * List view column descriptor object.
     *
     * `NautilusColumn` is an object that describes a column in the file manager
     * list view. Extensions can provide `NautilusColumn` by registering a
     * [iface`ColumnProvider]` and returning them from
     * [method`ColumnProvider`.get_columns], which will be called by the main
     * application when creating a view.
     */
    class Column extends GObject.Object {
        // Own properties of Nautilus-4.0.Column

        /**
         * The file attribute to be displayed in the column.
         */
        attribute: string;
        readonly attribute_q: number;
        readonly attributeQ: number;
        /**
         * Actually meant to store the enum values of GtkSortType, but we don't want
         * extensions to depend on GTK. Also, this is for internal consumption only.
         */
        default_sort_order: boolean;
        /**
         * Actually meant to store the enum values of GtkSortType, but we don't want
         * extensions to depend on GTK. Also, this is for internal consumption only.
         */
        defaultSortOrder: boolean;
        /**
         * The user-visible description of the column.
         */
        description: string;
        /**
         * The label to display in the column.
         */
        label: string;
        /**
         * The identifier for the column.
         */
        name: string;
        /**
         * Whether to show the NautilusColumn in a ColumnChooser.
         * This is not meant to be used by extensions. The value may be changed
         * over the life of the NautilusColumn.
         */
        visible: boolean;
        /**
         * The x-alignment of the column.
         */
        xalign: number;

        // Constructors of Nautilus-4.0.Column

        static ['new'](name: string, attribute: string, label: string, description: string): Column;
    }

    module Menu {
        // Constructor properties interface
    }

    class Menu extends GObject.Object {
        // Constructors of Nautilus-4.0.Menu

        static ['new'](): Menu;

        // Owm methods of Nautilus-4.0.Menu

        append_item(item: MenuItem): void;
        get_items(): MenuItem[] | null;
    }

    module MenuItem {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        // Constructor properties interface
    }

    class MenuItem extends GObject.Object {
        // Own properties of Nautilus-4.0.MenuItem

        icon: string;
        label: string;
        menu: Menu;
        name: string;
        priority: boolean;
        sensitive: boolean;
        tip: string;

        // Constructors of Nautilus-4.0.MenuItem

        static ['new'](name: string, label: string, tip?: string | null, icon?: string | null): MenuItem;

        // Owm methods of Nautilus-4.0.MenuItem

        static list_free(item_list: MenuItem[]): void;

        // Owm methods of Nautilus-4.0.MenuItem

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

    module PropertiesItem {
        // Constructor properties interface
    }

    class PropertiesItem extends GObject.Object {
        // Own properties of Nautilus-4.0.PropertiesItem

        name: string;
        value: string;

        // Constructors of Nautilus-4.0.PropertiesItem

        static ['new'](name: string, value: string): PropertiesItem;

        // Owm methods of Nautilus-4.0.PropertiesItem

        get_name(): string;
        get_value(): string;
    }

    module PropertiesModel {
        // Constructor properties interface
    }

    class PropertiesModel extends GObject.Object {
        // Own properties of Nautilus-4.0.PropertiesModel

        model: Gio.ListModel;
        title: string;

        // Constructors of Nautilus-4.0.PropertiesModel

        static ['new'](title: string, model: Gio.ListModel): PropertiesModel;

        // Owm methods of Nautilus-4.0.PropertiesModel

        get_model(): Gio.ListModel;
        get_title(): string;
        set_title(title: string): void;
    }

    class ColumnClass {}

    /**
     * Interface for extensions to provide additional list view columns.
     */
    class ColumnProviderInterface {}

    /**
     * Interface for extensions to provide additional menu items.
     */
    class FileInfoInterface {}

    /**
     * Interface for extensions to provide additional information about files.
     */
    class InfoProviderInterface {}

    class MenuClass {}

    class MenuItemClass {}

    /**
     * Interface for extensions to provide additional menu items.
     */
    class MenuProviderInterface {}

    /**
     * Handle for asynchronous interfaces. These are opaque handles that must
     * be unique within an extension object. These are returned by operations
     * that return #NAUTILUS_OPERATION_IN_PROGRESS.
     */
    class OperationHandle {}

    class PropertiesItemClass {}

    class PropertiesModelClass {}

    /**
     * Interface for extensions to provide additional properties.
     */
    class PropertiesModelProviderInterface {}

    interface ColumnProvider {
        // Owm methods of Nautilus-4.0.ColumnProvider

        get_columns(): Column[] | null;

        // Own virtual methods of Nautilus-4.0.ColumnProvider

        vfunc_get_columns(): Column[] | null;
    }

    interface FileInfo {
        // Owm methods of Nautilus-4.0.FileInfo

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
        get_string_attribute(attribute_name: string): string | null;
        get_uri(): string;
        get_uri_scheme(): string;
        invalidate_extension_info(): void;
        is_directory(): boolean;
        is_gone(): boolean;
        is_mime_type(mime_type: string): boolean;

        // Own virtual methods of Nautilus-4.0.FileInfo

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
        vfunc_get_string_attribute(attribute_name: string): string | null;
        vfunc_get_uri(): string;
        vfunc_get_uri_scheme(): string;
        vfunc_invalidate_extension_info(): void;
        vfunc_is_directory(): boolean;
        vfunc_is_gone(): boolean;
        vfunc_is_mime_type(mime_type: string): boolean;
    }

    interface InfoProvider {
        // Owm methods of Nautilus-4.0.InfoProvider

        cancel_update(handle: OperationHandle): void;
        update_file_info(file: FileInfo, update_complete: GObject.Closure): OperationResult;

        // Own virtual methods of Nautilus-4.0.InfoProvider

        vfunc_cancel_update(handle: OperationHandle): void;
        vfunc_update_file_info(file: FileInfo, update_complete: GObject.Closure): OperationResult;
    }

    interface MenuProvider {
        // Owm methods of Nautilus-4.0.MenuProvider

        /**
         * Emits #NautilusMenuProvider::items-updated.
         */
        emit_items_updated_signal(): void;
        get_background_items(current_folder: FileInfo): MenuItem[] | null;
        get_file_items(files: FileInfo[]): MenuItem[] | null;

        // Own virtual methods of Nautilus-4.0.MenuProvider

        vfunc_get_background_items(current_folder: FileInfo): MenuItem[] | null;
        vfunc_get_file_items(files: FileInfo[]): MenuItem[] | null;
    }

    interface PropertiesModelProvider {
        // Owm methods of Nautilus-4.0.PropertiesModelProvider

        /**
         * This function is called by the application when it wants properties models
         * from the extension.
         *
         * This function is called in the main thread before the Properties are shown,
         * so it should return quickly. The models can be populated and updated
         * asynchronously.
         * @param files a #GList of #NautilusFileInfo
         * @returns A #GList of allocated #NautilusPropertiesModel models.
         */
        get_models(files: FileInfo[]): PropertiesModel[] | null;

        // Own virtual methods of Nautilus-4.0.PropertiesModelProvider

        /**
         * This function is called by the application when it wants properties models
         * from the extension.
         *
         * This function is called in the main thread before the Properties are shown,
         * so it should return quickly. The models can be populated and updated
         * asynchronously.
         * @param files a #GList of #NautilusFileInfo
         */
        vfunc_get_models(files: FileInfo[]): PropertiesModel[] | null;
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

export default Nautilus;
// END
