
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-nautilus-3.0-import.d.ts';
    
/**
 * Nautilus-3.0
 */

import type Gtk from '@girs/node-gtk-3.0';
import type xlib from '@girs/node-xlib-2.0';
import type Gdk from '@girs/node-gdk-3.0';
import type cairo from '@girs/node-cairo-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Atk from '@girs/node-atk-1.0';

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
function fileInfoCreate(location: Gio.File): FileInfo
function fileInfoCreateForUri(uri: string): FileInfo
function fileInfoListCopy(files: FileInfo[]): FileInfo[]
function fileInfoListFree(files: FileInfo[]): void
function fileInfoLookup(location: Gio.File): FileInfo | null
function fileInfoLookupForUri(uri: string): FileInfo | null
function infoProviderUpdateCompleteInvoke(updateComplete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
module ColumnProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ColumnProvider {

    // Own properties of Nautilus-3.0.Nautilus.ColumnProvider

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.ColumnProvider

    getColumns(): Column[] | null

    // Class property signals of Nautilus-3.0.Nautilus.ColumnProvider

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ColumnProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.ColumnProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.ColumnProvider

    constructor(config?: ColumnProvider.ConstructorProperties) 
    _init(config?: ColumnProvider.ConstructorProperties): void
}

module FileInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FileInfo {

    // Own properties of Nautilus-3.0.Nautilus.FileInfo

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.FileInfo

    // Has conflict: addEmblem(emblemName: string): void
    // Has conflict: addStringAttribute(attributeName: string, value: string): void
    // Has conflict: canWrite(): boolean
    // Has conflict: getActivationUri(): string | null
    // Has conflict: getFileType(): Gio.FileType
    // Has conflict: getLocation(): Gio.File
    // Has conflict: getMimeType(): string | null
    // Has conflict: getMount(): Gio.Mount | null
    // Has conflict: getName(): string | null
    // Has conflict: getParentInfo(): FileInfo | null
    // Has conflict: getParentLocation(): Gio.File | null
    // Has conflict: getParentUri(): string | null
    // Has conflict: getStringAttribute(attributeName: string): string | null
    // Has conflict: getUri(): string | null
    // Has conflict: getUriScheme(): string | null
    // Has conflict: invalidateExtensionInfo(): void
    // Has conflict: isDirectory(): boolean
    // Has conflict: isGone(): boolean
    // Has conflict: isMimeType(mimeType: string): boolean

    // Own virtual methods of Nautilus-3.0.Nautilus.FileInfo

    addEmblem(emblemName: string): void
    addStringAttribute(attributeName: string, value: string): void
    canWrite(): boolean
    getActivationUri(): string | null
    getFileType(): Gio.FileType
    getLocation(): Gio.File
    getMimeType(): string | null
    getMount(): Gio.Mount | null
    getName(): string | null
    /**
     * It's not safe to call this recursively multiple times, as it works
     * only for files already cached by Nautilus.
     * @virtual 
     * @returns a #NautilusFileInfo for the parent of @file_info,                                      or %NULL if @file_info has no parent.
     */
    getParentInfo(): FileInfo | null
    getParentLocation(): Gio.File | null
    getParentUri(): string | null
    getStringAttribute(attributeName: string): string | null
    getUri(): string | null
    getUriScheme(): string | null
    invalidateExtensionInfo(): void
    isDirectory(): boolean
    isGone(): boolean
    isMimeType(mimeType: string): boolean

    // Class property signals of Nautilus-3.0.Nautilus.FileInfo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileInfo extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.FileInfo

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.FileInfo

    constructor(config?: FileInfo.ConstructorProperties) 
    _init(config?: FileInfo.ConstructorProperties): void
    static create(location: Gio.File): FileInfo
    static createForUri(uri: string): FileInfo
    static listCopy(files: FileInfo[]): FileInfo[]
    static listFree(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo | null
    static lookupForUri(uri: string): FileInfo | null
}

module InfoProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface InfoProvider {

    // Own properties of Nautilus-3.0.Nautilus.InfoProvider

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.InfoProvider

    cancelUpdate(handle: OperationHandle): void
    updateFileInfo(file: FileInfo, updateComplete: GObject.TClosure, handle: OperationHandle): OperationResult

    // Class property signals of Nautilus-3.0.Nautilus.InfoProvider

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfoProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.InfoProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.InfoProvider

    constructor(config?: InfoProvider.ConstructorProperties) 
    _init(config?: InfoProvider.ConstructorProperties): void
    static updateCompleteInvoke(updateComplete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}

module LocationWidgetProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface LocationWidgetProvider {

    // Own properties of Nautilus-3.0.Nautilus.LocationWidgetProvider

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.LocationWidgetProvider

    getWidget(uri: string, window: Gtk.Widget): Gtk.Widget | null

    // Class property signals of Nautilus-3.0.Nautilus.LocationWidgetProvider

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LocationWidgetProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.LocationWidgetProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.LocationWidgetProvider

    constructor(config?: LocationWidgetProvider.ConstructorProperties) 
    _init(config?: LocationWidgetProvider.ConstructorProperties): void
}

module MenuProvider {

    // Signal callback interfaces

    /**
     * Signal callback interface for `items-updated`
     */
    interface ItemsUpdatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MenuProvider {

    // Own properties of Nautilus-3.0.Nautilus.MenuProvider

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.MenuProvider

    /**
     * Emits #NautilusMenuProvider::items-updated.
     */
    emitItemsUpdatedSignal(): void
    getBackgroundItems(window: Gtk.Widget, currentFolder: FileInfo): MenuItem[] | null
    getFileItems(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null

    // Own signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback): number
    on(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-updated", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MenuProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.MenuProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.MenuProvider

    constructor(config?: MenuProvider.ConstructorProperties) 
    _init(config?: MenuProvider.ConstructorProperties): void
}

module PropertyPageProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PropertyPageProvider {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageProvider

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.PropertyPageProvider

    /**
     * This function is called by Nautilus when it wants property page
     * items from the extension.
     * 
     * This function is called in the main thread before a property page
     * is shown, so it should return quickly.
     * @param files a #GList of #NautilusFileInfo
     * @returns A #GList of allocated #NautilusPropertyPage items.
     */
    getPages(files: FileInfo[]): PropertyPage[] | null

    // Class property signals of Nautilus-3.0.Nautilus.PropertyPageProvider

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PropertyPageProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.PropertyPageProvider

    constructor(config?: PropertyPageProvider.ConstructorProperties) 
    _init(config?: PropertyPageProvider.ConstructorProperties): void
}

module Column {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Nautilus-3.0.Nautilus.Column

        attribute?: string | null
        defaultSortOrder?: Gtk.SortType | null
        description?: string | null
        label?: string | null
        name?: string | null
        xalign?: number | null
    }

}

interface Column {

    // Own properties of Nautilus-3.0.Nautilus.Column

    attribute: string | null
    readonly attributeQ: number
    defaultSortOrder: Gtk.SortType
    description: string | null
    label: string | null
    readonly name: string | null
    xalign: number
    __gtype__: number

    // Class property signals of Nautilus-3.0.Nautilus.Column

    connect(sigName: "notify::attribute", callback: (...args: any[]) => void): number
    on(sigName: "notify::attribute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attribute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attribute", ...args: any[]): void
    connect(sigName: "notify::attribute-q", callback: (...args: any[]) => void): number
    on(sigName: "notify::attribute-q", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attribute-q", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attribute-q", ...args: any[]): void
    connect(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-sort-order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-sort-order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-sort-order", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (...args: any[]) => void): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Column extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.Column

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.Column

    constructor(config?: Column.ConstructorProperties) 
    constructor(name: string, attribute: string, label: string, description: string) 
    static new(name: string, attribute: string, label: string, description: string): Column
    _init(config?: Column.ConstructorProperties): void
}

module Menu {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Menu {

    // Own properties of Nautilus-3.0.Nautilus.Menu

    __gtype__: number

    // Owm methods of Nautilus-3.0.Nautilus.Menu

    appendItem(item: MenuItem): void
    getItems(): MenuItem[] | null

    // Class property signals of Nautilus-3.0.Nautilus.Menu

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Menu extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.Menu

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.Menu

    constructor(config?: Menu.ConstructorProperties) 
    constructor() 
    static new(): Menu
    _init(config?: Menu.ConstructorProperties): void
}

module MenuItem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    interface ActivateSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Nautilus-3.0.Nautilus.MenuItem

        icon?: string | null
        label?: string | null
        menu?: Menu | null
        name?: string | null
        priority?: boolean | null
        sensitive?: boolean | null
        tip?: string | null
    }

}

interface MenuItem {

    // Own properties of Nautilus-3.0.Nautilus.MenuItem

    icon: string | null
    label: string | null
    menu: Menu
    readonly name: string | null
    priority: boolean
    sensitive: boolean
    tip: string | null
    __gtype__: number

    // Own fields of Nautilus-3.0.Nautilus.MenuItem

    parentInstance: GObject.Object

    // Owm methods of Nautilus-3.0.Nautilus.MenuItem

    // Has conflict: activate(): void
    /**
     * Attaches a menu to the given #NautilusMenuItem.
     * @param menu pointer to a #NautilusMenu to attach to the button
     */
    setSubmenu(menu: Menu): void

    // Own virtual methods of Nautilus-3.0.Nautilus.MenuItem

    /**
     * Emits #NautilusMenuItem::activate.
     * @virtual 
     */
    activate(): void

    // Own signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "activate", callback: MenuItem.ActivateSignalCallback): number
    on(sigName: "activate", callback: MenuItem.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: MenuItem.ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: MenuItem.ActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::menu", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tip", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MenuItem extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.MenuItem

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.MenuItem

    constructor(config?: MenuItem.ConstructorProperties) 
    /**
     * Creates a new menu item that can be added to the toolbar or to a contextual menu.
     * @constructor 
     * @param name the identifier for the menu item
     * @param label the user-visible label of the menu item
     * @param tip the tooltip of the menu item
     * @param icon the name of the icon to display in the menu item
     * @returns a new #NautilusMenuItem
     */
    constructor(name: string, label: string, tip: string | null, icon: string | null) 
    /**
     * Creates a new menu item that can be added to the toolbar or to a contextual menu.
     * @constructor 
     * @param name the identifier for the menu item
     * @param label the user-visible label of the menu item
     * @param tip the tooltip of the menu item
     * @param icon the name of the icon to display in the menu item
     * @returns a new #NautilusMenuItem
     */
    static new(name: string, label: string, tip: string | null, icon: string | null): MenuItem
    _init(config?: MenuItem.ConstructorProperties): void
    static listFree(itemList: MenuItem[]): void
}

module PropertyPage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Nautilus-3.0.Nautilus.PropertyPage

        label?: Gtk.Widget | null
        name?: string | null
        page?: Gtk.Widget | null
    }

}

interface PropertyPage {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPage

    label: Gtk.Widget
    readonly name: string | null
    page: Gtk.Widget
    __gtype__: number

    // Class property signals of Nautilus-3.0.Nautilus.PropertyPage

    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (...args: any[]) => void): number
    on(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PropertyPage extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPage

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.PropertyPage

    constructor(config?: PropertyPage.ConstructorProperties) 
    constructor(name: string, label: Gtk.Widget, page: Gtk.Widget) 
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    _init(config?: PropertyPage.ConstructorProperties): void
}

interface ColumnClass {

    // Own fields of Nautilus-3.0.Nautilus.ColumnClass

    parentClass: GObject.ObjectClass
}

abstract class ColumnClass {

    // Own properties of Nautilus-3.0.Nautilus.ColumnClass

    static name: string
}

interface ColumnProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.ColumnProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional list view columns.
 * @record 
 */
class ColumnProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.ColumnProviderInterface

    static name: string
}

interface File {
}

class File {

    // Own properties of Nautilus-3.0.Nautilus.File

    static name: string
}

interface FileInfoInterface {

    // Own fields of Nautilus-3.0.Nautilus.FileInfoInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    isGone: (fileInfo: FileInfo) => boolean
    getName: (fileInfo: FileInfo) => string | null
    getUri: (fileInfo: FileInfo) => string | null
    getParentUri: (fileInfo: FileInfo) => string | null
    getUriScheme: (fileInfo: FileInfo) => string | null
    getMimeType: (fileInfo: FileInfo) => string | null
    isMimeType: (fileInfo: FileInfo, mimeType: string) => boolean
    isDirectory: (fileInfo: FileInfo) => boolean
    addEmblem: (fileInfo: FileInfo, emblemName: string) => void
    getStringAttribute: (fileInfo: FileInfo, attributeName: string) => string | null
    addStringAttribute: (fileInfo: FileInfo, attributeName: string, value: string) => void
    invalidateExtensionInfo: (fileInfo: FileInfo) => void
    getActivationUri: (fileInfo: FileInfo) => string | null
    getFileType: (fileInfo: FileInfo) => Gio.FileType
    getLocation: (fileInfo: FileInfo) => Gio.File
    getParentLocation: (fileInfo: FileInfo) => Gio.File | null
    getParentInfo: (fileInfo: FileInfo) => FileInfo | null
    getMount: (fileInfo: FileInfo) => Gio.Mount | null
    canWrite: (fileInfo: FileInfo) => boolean
}

/**
 * Interface for extensions to provide additional menu items.
 * @record 
 */
abstract class FileInfoInterface {

    // Own properties of Nautilus-3.0.Nautilus.FileInfoInterface

    static name: string
}

interface InfoProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.InfoProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    updateFileInfo: (provider: InfoProvider, file: FileInfo, updateComplete: GObject.TClosure, handle: OperationHandle) => OperationResult
    cancelUpdate: (provider: InfoProvider, handle: OperationHandle) => void
}

/**
 * Interface for extensions to provide additional information about files.
 * @record 
 */
class InfoProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.InfoProviderInterface

    static name: string
}

interface LocationWidgetProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.LocationWidgetProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional location widgets.
 * @record 
 */
class LocationWidgetProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.LocationWidgetProviderInterface

    static name: string
}

interface MenuClass {

    // Own fields of Nautilus-3.0.Nautilus.MenuClass

    parentClass: GObject.ObjectClass
}

abstract class MenuClass {

    // Own properties of Nautilus-3.0.Nautilus.MenuClass

    static name: string
}

interface MenuItemClass {

    // Own fields of Nautilus-3.0.Nautilus.MenuItemClass

    parent: GObject.ObjectClass
    activate: (item: MenuItem) => void
}

abstract class MenuItemClass {

    // Own properties of Nautilus-3.0.Nautilus.MenuItemClass

    static name: string
}

interface MenuProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.MenuProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional menu items.
 * @record 
 */
class MenuProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.MenuProviderInterface

    static name: string
}

interface OperationHandle {
}

/**
 * Handle for asynchronous interfaces. These are opaque handles that must
 * be unique within an extension object. These are returned by operations
 * that return #NAUTILUS_OPERATION_IN_PROGRESS.
 * @record 
 */
class OperationHandle {

    // Own properties of Nautilus-3.0.Nautilus.OperationHandle

    static name: string
}

interface PropertyPageClass {

    // Own fields of Nautilus-3.0.Nautilus.PropertyPageClass

    parentClass: GObject.ObjectClass
}

abstract class PropertyPageClass {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageClass

    static name: string
}

interface PropertyPageProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.PropertyPageProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional property pages.
 * @record 
 */
class PropertyPageProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageProviderInterface

    static name: string
}

}

export default Nautilus;
// END