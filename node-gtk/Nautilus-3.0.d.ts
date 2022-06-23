// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Nautilus-3.0
 */

import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
interface ColumnProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface ColumnProvider {

    // Owm methods of Nautilus-3.0.Nautilus.ColumnProvider

    getColumns(): Column[] | null

    // Class property signals of Nautilus-3.0.Nautilus.ColumnProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ColumnProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.ColumnProvider

    static name: string
    static $gtype: GObject.GType<ColumnProvider>

    // Constructors of Nautilus-3.0.Nautilus.ColumnProvider

    constructor(config?: ColumnProvider_ConstructProps) 
    _init(config?: ColumnProvider_ConstructProps): void
}

interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface FileInfo {

    // Owm methods of Nautilus-3.0.Nautilus.FileInfo

    addEmblem(emblemName: string): void
    addStringAttribute(attributeName: string, value: string): void
    canWrite(): boolean
    getActivationUri(): string
    getFileType(): Gio.FileType
    getLocation(): Gio.File
    getMimeType(): string
    getMount(): Gio.Mount | null
    getName(): string
    /**
     * It's not safe to call this recursively multiple times, as it works
     * only for files already cached by Nautilus.
     */
    getParentInfo(): FileInfo | null
    getParentLocation(): Gio.File | null
    getParentUri(): string
    getStringAttribute(attributeName: string): string
    getUri(): string
    getUriScheme(): string
    invalidateExtensionInfo(): void
    isDirectory(): boolean
    isGone(): boolean
    isMimeType(mimeType: string): boolean

    // Class property signals of Nautilus-3.0.Nautilus.FileInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileInfo extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.FileInfo

    static name: string
    static $gtype: GObject.GType<FileInfo>

    // Constructors of Nautilus-3.0.Nautilus.FileInfo

    constructor(config?: FileInfo_ConstructProps) 
    _init(config?: FileInfo_ConstructProps): void
    static create(location: Gio.File): FileInfo
    static createForUri(uri: string): FileInfo
    static listCopy(files: FileInfo[]): FileInfo[]
    static listFree(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo | null
    static lookupForUri(uri: string): FileInfo | null
}

interface InfoProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface InfoProvider {

    // Owm methods of Nautilus-3.0.Nautilus.InfoProvider

    cancelUpdate(handle: OperationHandle): void
    updateFileInfo(file: FileInfo, updateComplete: GObject.TClosure, handle: OperationHandle): OperationResult

    // Class property signals of Nautilus-3.0.Nautilus.InfoProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class InfoProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.InfoProvider

    static name: string
    static $gtype: GObject.GType<InfoProvider>

    // Constructors of Nautilus-3.0.Nautilus.InfoProvider

    constructor(config?: InfoProvider_ConstructProps) 
    _init(config?: InfoProvider_ConstructProps): void
    static updateCompleteInvoke(updateComplete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}

interface LocationWidgetProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface LocationWidgetProvider {

    // Owm methods of Nautilus-3.0.Nautilus.LocationWidgetProvider

    getWidget(uri: string, window: Gtk.Widget): Gtk.Widget | null

    // Class property signals of Nautilus-3.0.Nautilus.LocationWidgetProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LocationWidgetProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.LocationWidgetProvider

    static name: string
    static $gtype: GObject.GType<LocationWidgetProvider>

    // Constructors of Nautilus-3.0.Nautilus.LocationWidgetProvider

    constructor(config?: LocationWidgetProvider_ConstructProps) 
    _init(config?: LocationWidgetProvider_ConstructProps): void
}

interface MenuProvider_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `items-updated`
 */
interface MenuProvider_ItemsUpdatedSignalCallback {
    (): void
}

interface MenuProvider {

    // Owm methods of Nautilus-3.0.Nautilus.MenuProvider

    /**
     * Emits #NautilusMenuProvider::items-updated.
     */
    emitItemsUpdatedSignal(): void
    getBackgroundItems(window: Gtk.Widget, currentFolder: FileInfo): MenuItem[] | null
    getFileItems(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null

    // Own signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: "items-updated", callback: MenuProvider_ItemsUpdatedSignalCallback): number
    on(sigName: "items-updated", callback: MenuProvider_ItemsUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-updated", callback: MenuProvider_ItemsUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-updated", callback: MenuProvider_ItemsUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-updated", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MenuProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.MenuProvider

    static name: string
    static $gtype: GObject.GType<MenuProvider>

    // Constructors of Nautilus-3.0.Nautilus.MenuProvider

    constructor(config?: MenuProvider_ConstructProps) 
    _init(config?: MenuProvider_ConstructProps): void
}

interface PropertyPageProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface PropertyPageProvider {

    // Owm methods of Nautilus-3.0.Nautilus.PropertyPageProvider

    /**
     * This function is called by Nautilus when it wants property page
     * items from the extension.
     * 
     * This function is called in the main thread before a property page
     * is shown, so it should return quickly.
     * @param files a #GList of #NautilusFileInfo
     */
    getPages(files: FileInfo[]): PropertyPage[] | null

    // Class property signals of Nautilus-3.0.Nautilus.PropertyPageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PropertyPageProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageProvider

    static name: string
    static $gtype: GObject.GType<PropertyPageProvider>

    // Constructors of Nautilus-3.0.Nautilus.PropertyPageProvider

    constructor(config?: PropertyPageProvider_ConstructProps) 
    _init(config?: PropertyPageProvider_ConstructProps): void
}

interface Column_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Nautilus-3.0.Nautilus.Column

    attribute?: string | null
    defaultSortOrder?: Gtk.SortType | null
    description?: string | null
    label?: string | null
    name?: string | null
    xalign?: number | null
}

interface Column {

    // Own properties of Nautilus-3.0.Nautilus.Column

    attribute: string
    readonly attributeQ: number
    defaultSortOrder: Gtk.SortType
    description: string
    label: string
    readonly name: string
    xalign: number

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Column extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.Column

    static name: string
    static $gtype: GObject.GType<Column>

    // Constructors of Nautilus-3.0.Nautilus.Column

    constructor(config?: Column_ConstructProps) 
    constructor(name: string, attribute: string, label: string, description: string) 
    static new(name: string, attribute: string, label: string, description: string): Column
    _init(config?: Column_ConstructProps): void
}

interface Menu_ConstructProps extends GObject.Object_ConstructProps {
}

interface Menu {

    // Owm methods of Nautilus-3.0.Nautilus.Menu

    appendItem(item: MenuItem): void
    getItems(): MenuItem[] | null

    // Class property signals of Nautilus-3.0.Nautilus.Menu

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Menu extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.Menu

    static name: string
    static $gtype: GObject.GType<Menu>

    // Constructors of Nautilus-3.0.Nautilus.Menu

    constructor(config?: Menu_ConstructProps) 
    constructor() 
    static new(): Menu
    _init(config?: Menu_ConstructProps): void
}

interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Nautilus-3.0.Nautilus.MenuItem

    icon?: string | null
    label?: string | null
    menu?: Menu | null
    name?: string | null
    priority?: boolean | null
    sensitive?: boolean | null
    tip?: string | null
}

/**
 * Signal callback interface for `activate`
 */
interface MenuItem_ActivateSignalCallback {
    (): void
}

interface MenuItem {

    // Own properties of Nautilus-3.0.Nautilus.MenuItem

    icon: string
    label: string
    menu: Menu
    readonly name: string
    priority: boolean
    sensitive: boolean
    tip: string

    // Own fields of Nautilus-3.0.Nautilus.MenuItem

    parentInstance: GObject.Object

    // Owm methods of Nautilus-3.0.Nautilus.MenuItem

    /**
     * Emits #NautilusMenuItem::activate.
     */
    activate(): void
    /**
     * Attaches a menu to the given #NautilusMenuItem.
     * @param menu pointer to a #NautilusMenu to attach to the button
     */
    setSubmenu(menu: Menu): void

    // Own signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "activate", callback: MenuItem_ActivateSignalCallback): number
    on(sigName: "activate", callback: MenuItem_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: MenuItem_ActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: MenuItem_ActivateSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MenuItem extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.MenuItem

    static name: string
    static $gtype: GObject.GType<MenuItem>

    // Constructors of Nautilus-3.0.Nautilus.MenuItem

    constructor(config?: MenuItem_ConstructProps) 
    /**
     * Creates a new menu item that can be added to the toolbar or to a contextual menu.
     * @constructor 
     * @param name the identifier for the menu item
     * @param label the user-visible label of the menu item
     * @param tip the tooltip of the menu item
     * @param icon the name of the icon to display in the menu item
     */
    constructor(name: string, label: string, tip: string | null, icon: string | null) 
    /**
     * Creates a new menu item that can be added to the toolbar or to a contextual menu.
     * @constructor 
     * @param name the identifier for the menu item
     * @param label the user-visible label of the menu item
     * @param tip the tooltip of the menu item
     * @param icon the name of the icon to display in the menu item
     */
    static new(name: string, label: string, tip: string | null, icon: string | null): MenuItem
    _init(config?: MenuItem_ConstructProps): void
    static listFree(itemList: MenuItem[]): void
}

interface PropertyPage_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Nautilus-3.0.Nautilus.PropertyPage

    label?: Gtk.Widget | null
    name?: string | null
    page?: Gtk.Widget | null
}

interface PropertyPage {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPage

    label: Gtk.Widget
    readonly name: string
    page: Gtk.Widget

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PropertyPage extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPage

    static name: string
    static $gtype: GObject.GType<PropertyPage>

    // Constructors of Nautilus-3.0.Nautilus.PropertyPage

    constructor(config?: PropertyPage_ConstructProps) 
    constructor(name: string, label: Gtk.Widget, page: Gtk.Widget) 
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    _init(config?: PropertyPage_ConstructProps): void
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
    getName: (fileInfo: FileInfo) => string
    getUri: (fileInfo: FileInfo) => string
    getParentUri: (fileInfo: FileInfo) => string
    getUriScheme: (fileInfo: FileInfo) => string
    getMimeType: (fileInfo: FileInfo) => string
    isMimeType: (fileInfo: FileInfo, mimeType: string) => boolean
    isDirectory: (fileInfo: FileInfo) => boolean
    addEmblem: (fileInfo: FileInfo, emblemName: string) => void
    getStringAttribute: (fileInfo: FileInfo, attributeName: string) => string
    addStringAttribute: (fileInfo: FileInfo, attributeName: string, value: string) => void
    invalidateExtensionInfo: (fileInfo: FileInfo) => void
    getActivationUri: (fileInfo: FileInfo) => string
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