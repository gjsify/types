/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './nautilus-3.0-ambient.d.ts';
import './nautilus-3.0-import.d.ts';
/**
 * Nautilus-3.0
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

    class Column extends GObject.Object {
        // Own properties of Nautilus-3.0.Column

        attribute: string;
        readonly attribute_q: number;
        readonly attributeQ: number;
        default_sort_order: Gtk.SortType;
        defaultSortOrder: Gtk.SortType;
        description: string;
        label: string;
        name: string;
        xalign: number;

        // Constructors of Nautilus-3.0.Column

        static ['new'](name: string, attribute: string, label: string, description: string): Column;
    }

    module Menu {
        // Constructor properties interface
    }

    class Menu extends GObject.Object {
        // Constructors of Nautilus-3.0.Menu

        static ['new'](): Menu;

        // Owm methods of Nautilus-3.0.Menu

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
        // Own properties of Nautilus-3.0.MenuItem

        icon: string;
        label: string;
        menu: Menu;
        name: string;
        priority: boolean;
        sensitive: boolean;
        tip: string;

        // Constructors of Nautilus-3.0.MenuItem

        static ['new'](name: string, label: string, tip?: string | null, icon?: string | null): MenuItem;

        // Owm methods of Nautilus-3.0.MenuItem

        static list_free(item_list: MenuItem[]): void;

        // Owm methods of Nautilus-3.0.MenuItem

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

    module PropertyPage {
        // Constructor properties interface
    }

    class PropertyPage extends GObject.Object {
        // Own properties of Nautilus-3.0.PropertyPage

        label: Gtk.Widget;
        name: string;
        page: Gtk.Widget;

        // Constructors of Nautilus-3.0.PropertyPage

        static ['new'](name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage;
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

    /**
     * Interface for extensions to provide additional location widgets.
     */
    class LocationWidgetProviderInterface {}

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

    class PropertyPageClass {}

    /**
     * Interface for extensions to provide additional property pages.
     */
    class PropertyPageProviderInterface {}

    interface ColumnProvider {
        // Owm methods of Nautilus-3.0.ColumnProvider

        get_columns(): Column[] | null;
    }

    interface FileInfo {
        // Owm methods of Nautilus-3.0.FileInfo

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

        // Own virtual methods of Nautilus-3.0.FileInfo

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

    interface InfoProvider {
        // Owm methods of Nautilus-3.0.InfoProvider

        cancel_update(handle: OperationHandle): void;
        update_file_info(file: FileInfo, update_complete: GObject.Closure, handle: OperationHandle): OperationResult;
    }

    interface LocationWidgetProvider {
        // Owm methods of Nautilus-3.0.LocationWidgetProvider

        get_widget(uri: string, window: Gtk.Widget): Gtk.Widget | null;
    }

    interface MenuProvider {
        // Owm methods of Nautilus-3.0.MenuProvider

        /**
         * Emits #NautilusMenuProvider::items-updated.
         */
        emit_items_updated_signal(): void;
        get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null;
        get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null;
    }

    interface PropertyPageProvider {
        // Owm methods of Nautilus-3.0.PropertyPageProvider

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
