// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Nautilus-3.0
 */

import type * as Gjs from './Gjs';
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
function file_info_create(location: Gio.File): FileInfo
function file_info_create_for_uri(uri: string): FileInfo
function file_info_list_copy(files: FileInfo[]): FileInfo[]
function file_info_list_free(files: FileInfo[]): void
function file_info_lookup(location: Gio.File): FileInfo | null
function file_info_lookup_for_uri(uri: string): FileInfo | null
function info_provider_update_complete_invoke(update_complete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
interface ColumnProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface ColumnProvider {

    // Owm methods of Nautilus-3.0.Nautilus.ColumnProvider

    get_columns(): Column[] | null

    // Class property signals of Nautilus-3.0.Nautilus.ColumnProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    add_emblem(emblem_name: string): void
    add_string_attribute(attribute_name: string, value: string): void
    can_write(): boolean
    get_activation_uri(): string
    get_file_type(): Gio.FileType
    get_location(): Gio.File
    get_mime_type(): string
    get_mount(): Gio.Mount | null
    get_name(): string
    /**
     * It's not safe to call this recursively multiple times, as it works
     * only for files already cached by Nautilus.
     */
    get_parent_info(): FileInfo | null
    get_parent_location(): Gio.File | null
    get_parent_uri(): string
    get_string_attribute(attribute_name: string): string
    get_uri(): string
    get_uri_scheme(): string
    invalidate_extension_info(): void
    is_directory(): boolean
    is_gone(): boolean
    is_mime_type(mime_type: string): boolean

    // Own virtual methods of Nautilus-3.0.Nautilus.FileInfo

    vfunc_add_emblem(emblem_name: string): void
    vfunc_add_string_attribute(attribute_name: string, value: string): void
    vfunc_can_write(): boolean
    vfunc_get_activation_uri(): string
    vfunc_get_file_type(): Gio.FileType
    vfunc_get_location(): Gio.File
    vfunc_get_mime_type(): string
    vfunc_get_mount(): Gio.Mount | null
    vfunc_get_name(): string
    /**
     * It's not safe to call this recursively multiple times, as it works
     * only for files already cached by Nautilus.
     * @virtual 
     */
    vfunc_get_parent_info(): FileInfo | null
    vfunc_get_parent_location(): Gio.File | null
    vfunc_get_parent_uri(): string
    vfunc_get_string_attribute(attribute_name: string): string
    vfunc_get_uri(): string
    vfunc_get_uri_scheme(): string
    vfunc_invalidate_extension_info(): void
    vfunc_is_directory(): boolean
    vfunc_is_gone(): boolean
    vfunc_is_mime_type(mime_type: string): boolean

    // Class property signals of Nautilus-3.0.Nautilus.FileInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileInfo extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.FileInfo

    static name: string
    static $gtype: GObject.GType<FileInfo>

    // Constructors of Nautilus-3.0.Nautilus.FileInfo

    constructor(config?: FileInfo_ConstructProps) 
    _init(config?: FileInfo_ConstructProps): void
    static create(location: Gio.File): FileInfo
    static create_for_uri(uri: string): FileInfo
    static list_copy(files: FileInfo[]): FileInfo[]
    static list_free(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo | null
    static lookup_for_uri(uri: string): FileInfo | null
}

interface InfoProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface InfoProvider {

    // Owm methods of Nautilus-3.0.Nautilus.InfoProvider

    cancel_update(handle: OperationHandle): void
    update_file_info(file: FileInfo, update_complete: GObject.TClosure, handle: OperationHandle): OperationResult

    // Class property signals of Nautilus-3.0.Nautilus.InfoProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InfoProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.InfoProvider

    static name: string
    static $gtype: GObject.GType<InfoProvider>

    // Constructors of Nautilus-3.0.Nautilus.InfoProvider

    constructor(config?: InfoProvider_ConstructProps) 
    _init(config?: InfoProvider_ConstructProps): void
    static update_complete_invoke(update_complete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}

interface LocationWidgetProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface LocationWidgetProvider {

    // Owm methods of Nautilus-3.0.Nautilus.LocationWidgetProvider

    get_widget(uri: string, window: Gtk.Widget): Gtk.Widget | null

    // Class property signals of Nautilus-3.0.Nautilus.LocationWidgetProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: MenuProvider): void
}

interface MenuProvider {

    // Owm methods of Nautilus-3.0.Nautilus.MenuProvider

    /**
     * Emits #NautilusMenuProvider::items-updated.
     */
    emit_items_updated_signal(): void
    get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null
    get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null

    // Own signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: "items-updated", callback: MenuProvider_ItemsUpdatedSignalCallback): number
    connect_after(sigName: "items-updated", callback: MenuProvider_ItemsUpdatedSignalCallback): number
    emit(sigName: "items-updated", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_pages(files: FileInfo[]): PropertyPage[] | null

    // Class property signals of Nautilus-3.0.Nautilus.PropertyPageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    default_sort_order?: Gtk.SortType | null
    description?: string | null
    label?: string | null
    name?: string | null
    xalign?: number | null
}

interface Column {

    // Own properties of Nautilus-3.0.Nautilus.Column

    attribute: string
    readonly attribute_q: number
    default_sort_order: Gtk.SortType
    description: string
    label: string
    readonly name: string
    xalign: number

    // Class property signals of Nautilus-3.0.Nautilus.Column

    connect(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute", ...args: any[]): void
    connect(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attribute-q", ...args: any[]): void
    connect(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-sort-order", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    append_item(item: MenuItem): void
    get_items(): MenuItem[] | null

    // Class property signals of Nautilus-3.0.Nautilus.Menu

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: MenuItem): void
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

    parent_instance: GObject.Object

    // Owm methods of Nautilus-3.0.Nautilus.MenuItem

    /**
     * Emits #NautilusMenuItem::activate.
     */
    activate(): void
    /**
     * Attaches a menu to the given #NautilusMenuItem.
     * @param menu pointer to a #NautilusMenu to attach to the button
     */
    set_submenu(menu: Menu): void

    // Own virtual methods of Nautilus-3.0.Nautilus.MenuItem

    /**
     * Emits #NautilusMenuItem::activate.
     * @virtual 
     */
    vfunc_activate(): void

    // Own signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "activate", callback: MenuItem_ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: MenuItem_ActivateSignalCallback): number
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static list_free(item_list: MenuItem[]): void
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

    connect(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_class: GObject.ObjectClass
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
    g_iface: GObject.TypeInterface
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
    g_iface: GObject.TypeInterface
    is_gone: (file_info: FileInfo) => boolean
    get_name: (file_info: FileInfo) => string
    get_uri: (file_info: FileInfo) => string
    get_parent_uri: (file_info: FileInfo) => string
    get_uri_scheme: (file_info: FileInfo) => string
    get_mime_type: (file_info: FileInfo) => string
    is_mime_type: (file_info: FileInfo, mime_type: string) => boolean
    is_directory: (file_info: FileInfo) => boolean
    add_emblem: (file_info: FileInfo, emblem_name: string) => void
    get_string_attribute: (file_info: FileInfo, attribute_name: string) => string
    add_string_attribute: (file_info: FileInfo, attribute_name: string, value: string) => void
    invalidate_extension_info: (file_info: FileInfo) => void
    get_activation_uri: (file_info: FileInfo) => string
    get_file_type: (file_info: FileInfo) => Gio.FileType
    get_location: (file_info: FileInfo) => Gio.File
    get_parent_location: (file_info: FileInfo) => Gio.File | null
    get_parent_info: (file_info: FileInfo) => FileInfo | null
    get_mount: (file_info: FileInfo) => Gio.Mount | null
    can_write: (file_info: FileInfo) => boolean
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
    g_iface: GObject.TypeInterface
    update_file_info: (provider: InfoProvider, file: FileInfo, update_complete: GObject.TClosure, handle: OperationHandle) => OperationResult
    cancel_update: (provider: InfoProvider, handle: OperationHandle) => void
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
    g_iface: GObject.TypeInterface
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

    parent_class: GObject.ObjectClass
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
    g_iface: GObject.TypeInterface
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

    parent_class: GObject.ObjectClass
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
    g_iface: GObject.TypeInterface
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