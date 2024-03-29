
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-amtk-4-import.d.ts';
    
/**
 * Amtk-4
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

/**
 * #AmtkFactoryFlags permits to control how a factory function creates the
 * object, to ignore some steps.
 * @bitfield 
 */
export enum FactoryFlags {
    /**
     * No flags.
     */
    FLAGS_NONE,
    /**
     * Do not call gtk_actionable_set_action_name().
     */
    IGNORE_GACTION,
    /**
     * Do not set an icon.
     */
    IGNORE_ICON,
    /**
     * Do not set a label/short description.
     */
    IGNORE_LABEL,
    /**
     * Do not set a tooltip/long description.
     */
    IGNORE_TOOLTIP,
    /**
     * Ignore completely the accelerators.
     */
    IGNORE_ACCELS,
    /**
     * Ignore the accelerators for
     *   documentation purposes only. For example do not add/configure a
     *   #GtkAccelLabel.
     */
    IGNORE_ACCELS_FOR_DOC,
    /**
     * Do not call
     *   gtk_application_set_accels_for_action().
     */
    IGNORE_ACCELS_FOR_APP,
}
/**
 * A wrapper function for g_action_map_add_action_entries() that checks
 * duplicates.
 * 
 * This function first checks - for each entry - that the `action_map` doesn't
 * already contain a #GAction with the same name. A warning is printed if an old
 * action will be dropped. In any case, it then calls
 * g_action_map_add_action_entries() with the same arguments as passed to this
 * function.
 * 
 * This function also checks if there are duplicates in the `entries` array
 * itself.
 * @param actionMap a #GActionMap.
 * @param entries a pointer to           the first item in an array of #GActionEntry structs.
 * @param userData the user data for signal connections.
 */
export function actionMapAddActionEntriesCheckDups(actionMap: Gio.ActionMap, entries: Gio.ActionEntry[], userData: any | null): void
/**
 * Free the resources allocated by Amtk. For example it unrefs the singleton
 * objects.
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools. This function is meant to be called at the end of
 * main(). It can be called several times.
 */
export function finalize(): void
/**
 * Initializes the Amtk library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Amtk function call.
 */
export function init(): void
export function menuItemGetLongDescription(menuItem: Gtk.MenuItem): string | null
/**
 * Sets an icon to a #GtkMenuItem.
 * 
 * If the child widget of `item` is already a #GtkBox, all #GtkImage widgets
 * inside that box are first destroyed. A #GtkImage for `icon_name` is then
 * inserted to the box.
 * 
 * If the child widget of `item` is not a #GtkBox (it's usually the
 * #GtkAccelLabel), it is replaced by a new #GtkBox and the initial child widget
 * is inserted to the #GtkBox, alongside the icon.
 * 
 * As a consequence, if you want to call functions on the #GtkAccelLabel, it's
 * easier to do it before calling this function.
 * @param item a #GtkMenuItem.
 * @param iconName an icon name.
 */
export function menuItemSetIconName(item: Gtk.MenuItem, iconName: string): void
/**
 * Sets the long description of `menu_item`. A possible use-case is to display it
 * in a #GtkStatusbar, or as a tooltip.
 * @param menuItem a #GtkMenuItem.
 * @param longDescription the long description, or %NULL to unset it.
 */
export function menuItemSetLongDescription(menuItem: Gtk.MenuItem, longDescription: string | null): void
/**
 * Utility function to be able to port an application gradually to #GAction,
 * when #GtkUIManager and #GtkAction are still used. Porting to #GAction should
 * be the first step.
 * 
 * For `detailed_g_action_name_without_prefix,` see the
 * g_action_parse_detailed_name() function.  The `"app."` or `"win."` prefix (or
 * any other #GActionMap prefix) must not be included in
 * `detailed_g_action_name_without_prefix`. For example a valid
 * `detailed_g_action_name_without_prefix` is `"open"` or
 * `"insert-command::foobar"`.
 * 
 * The same #GAction can be bound to several #GtkAction's (with different
 * parameter values for the #GAction), but the reverse is not true, one
 * #GtkAction cannot be bound to several #GAction's.
 * 
 * This function:
 * - Calls g_action_activate() when the #GtkAction #GtkAction::activate signal
 *   is emitted.
 * - Binds the #GAction #GAction:enabled property to the #GtkAction
 *   #GtkAction:sensitive property. The binding is done with the
 *   %G_BINDING_BIDIRECTIONAL and %G_BINDING_SYNC_CREATE flags, the source is
 *   the #GAction and the target is the #GtkAction.
 * 
 * When using this function, you should set the callback to %NULL in the
 * corresponding #GtkActionEntry.
 * @param gActionMap a #GActionMap.
 * @param detailedGActionNameWithoutPrefix a detailed #GAction name without the   #GActionMap prefix; the #GAction must be present in `g_action_map`.
 * @param gtkActionGroup a #GtkActionGroup.
 * @param gtkActionName a #GtkAction name present in `gtk_action_group`.
 */
export function utilsBindGActionToGtkAction(gActionMap: Gio.ActionMap, detailedGActionNameWithoutPrefix: string, gtkActionGroup: Gtk.ActionGroup, gtkActionName: string): void
/**
 * Utility function to be able to port an application gradually to #GAction and
 * #AmtkActionInfo, when #GtkUIManager is still used. This function goes one
 * step further compared to amtk_utils_bind_g_action_to_gtk_action(). With
 * amtk_utils_bind_g_action_to_gtk_action(), only the #GAction must exist. With
 * amtk_utils_create_gtk_action(), both the #GAction and #AmtkActionInfo must
 * exist (so typically you need to convert the #GtkActionEntry's into
 * #AmtkActionInfoEntry's).
 * 
 * This function creates a #GtkAction from a #GAction plus its corresponding
 * #AmtkActionInfo.
 * 
 * The #GtkAction is created with the information provided by the
 * #AmtkActionInfo (retrieved with amtk_action_info_central_store_lookup() with
 * `detailed_g_action_name_with_prefix` as argument). Only the first accelerator
 * is taken into account.
 * 
 * Once the #GtkAction is created, it is added to the `gtk_action_group,` and
 * amtk_utils_bind_g_action_to_gtk_action() is called.
 * @param gActionMap a #GActionMap.
 * @param detailedGActionNameWithPrefix a detailed #GAction name with the   #GActionMap prefix; the #GAction must be present in `g_action_map`.
 * @param gtkActionGroup a #GtkActionGroup.
 * @param gtkActionName the name of the #GtkAction to create and add to   `gtk_action_group`.
 */
export function utilsCreateGtkAction(gActionMap: Gio.ActionMap, detailedGActionNameWithPrefix: string, gtkActionGroup: Gtk.ActionGroup, gtkActionName: string): void
/**
 * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
 * #GtkRecentChooserMenu.
 * 
 * This function has been written because the value returned by
 * gtk_recent_chooser_get_current_uri() is not updated when #GtkMenuItem's of a
 * #GtkRecentChooserMenu are selected/deselected.
 * @param menu a #GtkRecentChooserMenu.
 * @param item a #GtkMenuItem.
 * @returns the URI of @item. Free with g_free() when no longer needed.
 */
export function utilsRecentChooserMenuGetItemUri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string | null
export module ActionInfoCentralStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ActionInfoCentralStore {

    // Own properties of Amtk-4.Amtk.ActionInfoCentralStore

    __gtype__: number

    // Own fields of Amtk-4.Amtk.ActionInfoCentralStore

    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate

    // Owm methods of Amtk-4.Amtk.ActionInfoCentralStore

    lookup(actionName: string): ActionInfo

    // Class property signals of Amtk-4.Amtk.ActionInfoCentralStore

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

export class ActionInfoCentralStore extends GObject.Object {

    // Own properties of Amtk-4.Amtk.ActionInfoCentralStore

    static name: string

    // Constructors of Amtk-4.Amtk.ActionInfoCentralStore

    constructor(config?: ActionInfoCentralStore.ConstructorProperties) 
    _init(config?: ActionInfoCentralStore.ConstructorProperties): void
    static getSingleton(): ActionInfoCentralStore
}

export module ActionInfoStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ActionInfoStore {

    // Own properties of Amtk-4.Amtk.ActionInfoStore

    __gtype__: number

    // Own fields of Amtk-4.Amtk.ActionInfoStore

    parent: GObject.Object
    priv: ActionInfoStorePrivate

    // Owm methods of Amtk-4.Amtk.ActionInfoStore

    /**
     * Inserts `info` into `store` and into the #AmtkActionInfoCentralStore. Both the
     * `store` and central store must <emphasis>not</emphasis> already contain an
     * #AmtkActionInfo with the same action name. The stores take their own
     * reference on `info`.
     * @param info an #AmtkActionInfo.
     */
    add(info: ActionInfo): void
    /**
     * Calls amtk_action_info_store_add() for each entry.
     * 
     * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
     * `label` and `tooltip` of each entry before setting them to the #AmtkActionInfo.
     * 
     * An API similar to g_action_map_add_action_entries().
     * @param entries a pointer to the first item in an array of #AmtkActionInfoEntry structs.
     * @param translationDomain a gettext domain, or %NULL.
     */
    addEntries(entries: ActionInfoEntry[], translationDomain: string | null): void
    /**
     * Checks for each #AmtkActionInfo of `store` that it has been used (see
     * amtk_action_info_has_been_used()). If an #AmtkActionInfo has not been used, a
     * warning is printed and might indicate dead code.
     * 
     * You probably want to call this function on the application store after
     * creating the menu and toolbar. But it can also be useful for a store provided
     * by a library, to easily see which actions are not used by the application.
     */
    checkAllUsed(): void
    lookup(actionName: string): ActionInfo

    // Class property signals of Amtk-4.Amtk.ActionInfoStore

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

export class ActionInfoStore extends GObject.Object {

    // Own properties of Amtk-4.Amtk.ActionInfoStore

    static name: string

    // Constructors of Amtk-4.Amtk.ActionInfoStore

    constructor(config?: ActionInfoStore.ConstructorProperties) 
    constructor() 
    static new(): ActionInfoStore
    _init(config?: ActionInfoStore.ConstructorProperties): void
}

export module ApplicationWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Amtk-4.Amtk.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        application_window?: Gtk.ApplicationWindow | null
        /**
         * The #GtkStatusbar. %NULL by default.
         */
        statusbar?: Gtk.Statusbar | null
    }

}

export interface ApplicationWindow {

    // Own properties of Amtk-4.Amtk.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly applicationWindow: Gtk.ApplicationWindow
    /**
     * The #GtkStatusbar. %NULL by default.
     */
    statusbar: Gtk.Statusbar
    __gtype__: number

    // Own fields of Amtk-4.Amtk.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Amtk-4.Amtk.ApplicationWindow

    /**
     * Connects to the #AmtkMenuShell::menu-item-selected and
     * #AmtkMenuShell::menu-item-deselected signals of `menu_shell` to push/pop the
     * long description of #GtkMenuItem's to the #AmtkApplicationWindow:statusbar.
     * 
     * The long description is retrieved with amtk_menu_item_get_long_description().
     * So amtk_menu_item_set_long_description() must have been called, which is the
     * case if the #GtkMenuItem has been created with #AmtkFactory.
     * @param menuShell a #GtkMenuShell.
     */
    connectMenuToStatusbar(menuShell: Gtk.MenuShell): void
    /**
     * An alternative to gtk_recent_chooser_set_show_tips(). Shows the full path in
     * the #AmtkApplicationWindow:statusbar when a #GtkMenuItem of `menu` is
     * selected.
     * 
     * The full path is retrieved with
     * amtk_utils_recent_chooser_menu_get_item_uri().
     * @param menu a #GtkRecentChooserMenu.
     */
    connectRecentChooserMenuToStatusbar(menu: Gtk.RecentChooserMenu): void
    /**
     * Creates a simple and generic #GtkRecentChooserMenu.
     * 
     * The #GtkRecentChooser is configured to show files only recently used with the
     * current application, as returned by g_get_application_name(). If recent files
     * are added to the default #GtkRecentManager with
     * gtk_recent_manager_add_item(), the files will normally show up in the
     * #GtkRecentChooserMenu.
     * 
     * The #GtkRecentChooserMenu is connected to the statusbar with
     * amtk_application_window_connect_recent_chooser_menu_to_statusbar().
     * 
     * When the #GtkRecentChooser::item-activated signal is emitted,
     * g_application_open() is called (with an empty hint), so the #GApplication
     * must have the %G_APPLICATION_HANDLES_OPEN flag set.
     * @returns a new #GtkRecentChooserMenu.
     */
    createOpenRecentMenu(): Gtk.Widget
    /**
     * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
     * submenu. The #GtkRecentChooserMenu is created with
     * amtk_application_window_create_open_recent_menu().
     * @returns a new #GtkMenuItem.
     */
    createOpenRecentMenuItem(): Gtk.Widget
    getApplicationWindow(): Gtk.ApplicationWindow
    getStatusbar(): Gtk.Statusbar | null
    /**
     * Sets the #AmtkApplicationWindow:statusbar property.
     * @param statusbar a #GtkStatusbar, or %NULL.
     */
    setStatusbar(statusbar: Gtk.Statusbar | null): void

    // Class property signals of Amtk-4.Amtk.ApplicationWindow

    connect(sigName: "notify::application-window", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::statusbar", callback: (...args: any[]) => void): number
    on(sigName: "notify::statusbar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::statusbar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::statusbar", ...args: any[]): void
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

export class ApplicationWindow extends GObject.Object {

    // Own properties of Amtk-4.Amtk.ApplicationWindow

    static name: string

    // Constructors of Amtk-4.Amtk.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    _init(config?: ApplicationWindow.ConstructorProperties): void
    /**
     * Returns the #AmtkApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtkWindow a #GtkApplicationWindow.
     * @returns the #AmtkApplicationWindow of @gtk_window.
     */
    static getFromGtkApplicationWindow(gtkWindow: Gtk.ApplicationWindow): ApplicationWindow
}

export module Factory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Amtk-4.Amtk.Factory

        /**
         * The associated #GtkApplication (it is optional, it can be %NULL).
         * #AmtkFactory has a weak reference to the #GtkApplication.
         */
        application?: Gtk.Application | null
        /**
         * The default #AmtkFactoryFlags.
         */
        default_flags?: FactoryFlags | null
    }

}

export interface Factory {

    // Own properties of Amtk-4.Amtk.Factory

    /**
     * The associated #GtkApplication (it is optional, it can be %NULL).
     * #AmtkFactory has a weak reference to the #GtkApplication.
     */
    readonly application: Gtk.Application
    /**
     * The default #AmtkFactoryFlags.
     */
    defaultFlags: FactoryFlags
    __gtype__: number

    // Own fields of Amtk-4.Amtk.Factory

    parent: GObject.Object
    priv: FactoryPrivate

    // Owm methods of Amtk-4.Amtk.Factory

    /**
     * Creates a new #GtkCheckMenuItem for `action_name` with the
     * #AmtkFactory:default-flags.
     * 
     * See the documentation of amtk_factory_create_check_menu_item_full() for more
     * information.
     * @param actionName an action name.
     * @returns a new #GtkCheckMenuItem for @action_name.
     */
    createCheckMenuItem(actionName: string): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * Note that since it is a #GtkCheckMenuItem the icon is not set, even if it
     * would be possible with amtk_menu_item_set_icon_name().
     * 
     * If the action controls a boolean property, think about using
     * #GPropertyAction.
     * @param actionName an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkCheckMenuItem for @action_name.
     */
    createCheckMenuItemFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    /**
     * Creates a new #GtkMenuItem for `action_name` with the
     * #AmtkFactory:default-flags.
     * @param actionName an action name.
     * @returns a new #GtkMenuItem for @action_name.
     */
    createMenuItem(actionName: string): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * @param actionName an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkMenuItem for @action_name.
     */
    createMenuItemFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    /**
     * Creates a new #GtkMenuToolButton for `action_name` with the
     * #AmtkFactory:default-flags.
     * 
     * See the documentation of amtk_factory_create_menu_tool_button_full() for more
     * information.
     * @param actionName an action name.
     * @returns a new #GtkMenuToolButton for @action_name.
     */
    createMenuToolButton(actionName: string): Gtk.MenuToolButton
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * After calling this function, you need to use the #GtkMenuToolButton API to
     * set the menu and also possibly set a tooltip to the arrow.
     * @param actionName an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkMenuToolButton for @action_name.
     */
    createMenuToolButtonFull(actionName: string, flags: FactoryFlags): Gtk.MenuToolButton
    /**
     * Creates a new #GtkToolButton for `action_name` with the
     * #AmtkFactory:default-flags.
     * @param actionName an action name.
     * @returns a new #GtkToolButton for @action_name.
     */
    createToolButton(actionName: string): Gtk.ToolItem
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * @param actionName an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkToolButton for @action_name.
     */
    createToolButtonFull(actionName: string, flags: FactoryFlags): Gtk.ToolItem
    getApplication(): Gtk.Application | null
    getDefaultFlags(): FactoryFlags
    /**
     * Sets the #AmtkFactory:default-flags property.
     * @param defaultFlags the new value.
     */
    setDefaultFlags(defaultFlags: FactoryFlags): void

    // Class property signals of Amtk-4.Amtk.Factory

    connect(sigName: "notify::application", callback: (...args: any[]) => void): number
    on(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::default-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-flags", ...args: any[]): void
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

export class Factory extends GObject.Object {

    // Own properties of Amtk-4.Amtk.Factory

    static name: string

    // Constructors of Amtk-4.Amtk.Factory

    constructor(config?: Factory.ConstructorProperties) 
    /**
     * Creates a new #AmtkFactory object. Associating a #GtkApplication is optional,
     * if it is %NULL gtk_application_set_accels_for_action() won't be called.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     * @returns a new #AmtkFactory.
     */
    constructor(application: Gtk.Application | null) 
    /**
     * Creates a new #AmtkFactory object. Associating a #GtkApplication is optional,
     * if it is %NULL gtk_application_set_accels_for_action() won't be called.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     * @returns a new #AmtkFactory.
     */
    static new(application: Gtk.Application | null): Factory
    /**
     * Calls amtk_factory_new() with g_application_get_default() (it must be a
     * #GtkApplication).
     * @constructor 
     * @returns a new #AmtkFactory with the default #GtkApplication.
     */
    static newWithDefaultApplication(): Factory
    _init(config?: Factory.ConstructorProperties): void
}

export module MenuShell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `menu-item-deselected`
     */
    export interface MenuItemDeselectedSignalCallback {
        (menuItem: Gtk.MenuItem): void
    }

    /**
     * Signal callback interface for `menu-item-selected`
     */
    export interface MenuItemSelectedSignalCallback {
        (menuItem: Gtk.MenuItem): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Amtk-4.Amtk.MenuShell

        /**
         * The #GtkMenuShell.
         */
        menu_shell?: Gtk.MenuShell | null
    }

}

export interface MenuShell {

    // Own properties of Amtk-4.Amtk.MenuShell

    /**
     * The #GtkMenuShell.
     */
    readonly menuShell: Gtk.MenuShell
    __gtype__: number

    // Own fields of Amtk-4.Amtk.MenuShell

    parent: GObject.Object
    priv: MenuShellPrivate

    // Owm methods of Amtk-4.Amtk.MenuShell

    getMenuShell(): Gtk.MenuShell

    // Own virtual methods of Amtk-4.Amtk.MenuShell

    menuItemDeselected(menuItem: Gtk.MenuItem): void
    menuItemSelected(menuItem: Gtk.MenuItem): void

    // Own signals of Amtk-4.Amtk.MenuShell

    connect(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    on(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "menu-item-deselected", ...args: any[]): void
    connect(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    on(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "menu-item-selected", ...args: any[]): void

    // Class property signals of Amtk-4.Amtk.MenuShell

    connect(sigName: "notify::menu-shell", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-shell", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-shell", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-shell", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-shell", ...args: any[]): void
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

export class MenuShell extends GObject.Object {

    // Own properties of Amtk-4.Amtk.MenuShell

    static name: string

    // Constructors of Amtk-4.Amtk.MenuShell

    constructor(config?: MenuShell.ConstructorProperties) 
    _init(config?: MenuShell.ConstructorProperties): void
    /**
     * Returns the #AmtkMenuShell of `gtk_menu_shell`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
     * @param gtkMenuShell a #GtkMenuShell.
     * @returns the #AmtkMenuShell of @gtk_menu_shell.
     */
    static getFromGtkMenuShell(gtkMenuShell: Gtk.MenuShell): MenuShell
}

export interface ActionInfo {

    // Owm methods of Amtk-4.Amtk.ActionInfo

    copy(): ActionInfo
    /**
     * Returns the accelerators. This function never returns %NULL, it always
     * returns a %NULL-terminated array, to be suitable for
     * gtk_application_set_accels_for_action().
     * @returns a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
     */
    getAccels(): string[]
    getActionName(): string | null
    getIconName(): string | null
    /**
     * Gets the label. The label has normally a mnemonic.
     * @returns the label (i.e. a short description), or %NULL.
     */
    getLabel(): string | null
    getTooltip(): string | null
    /**
     * Returns whether `info` has been used (for example by an #AmtkFactory
     * function). See also amtk_action_info_store_check_all_used().
     * @returns whether @info has been used.
     */
    hasBeenUsed(): boolean
    /**
     * Mark `info` as used. An #AmtkFactory function that uses an #AmtkActionInfo
     * should call this function. See amtk_action_info_store_check_all_used().
     */
    markAsUsed(): void
    /**
     * Increments the reference count of `info` by one.
     * @returns the passed in @info.
     */
    ref(): ActionInfo
    /**
     * A function similar to gtk_application_set_accels_for_action().
     * 
     * `accels` must not be %NULL, it must be a %NULL-terminated array, to be
     * consistent with gtk_application_set_accels_for_action().
     * @param accels a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
     */
    setAccels(accels: string[]): void
    /**
     * Sets the action name, for example `"win.save"`.
     * @param actionName the action name.
     */
    setActionName(actionName: string): void
    setIconName(iconName: string | null): void
    /**
     * Sets the label with a mnemonic.
     * @param label the label (i.e. a short description), or %NULL.
     */
    setLabel(label: string | null): void
    setTooltip(tooltip: string | null): void
    /**
     * Decrements the reference count of `info` by one. If the reference count drops
     * to 0, `info` is freed.
     */
    unref(): void
}

export class ActionInfo {

    // Own properties of Amtk-4.Amtk.ActionInfo

    static name: string

    // Constructors of Amtk-4.Amtk.ActionInfo

    constructor() 
    static new(): ActionInfo
    /**
     * Creates a new #AmtkActionInfo from an #AmtkActionInfoEntry.
     * 
     * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
     * `label` and `tooltip` before setting them to the #AmtkActionInfo.
     * @constructor 
     * @param infoEntry an #AmtkActionInfoEntry.
     * @param translationDomain a gettext domain, or %NULL.
     * @returns a new #AmtkActionInfo.
     */
    static newFromEntry(infoEntry: ActionInfoEntry, translationDomain: string | null): ActionInfo
}

export interface ActionInfoCentralStoreClass {

    // Own fields of Amtk-4.Amtk.ActionInfoCentralStoreClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class ActionInfoCentralStoreClass {

    // Own properties of Amtk-4.Amtk.ActionInfoCentralStoreClass

    static name: string
}

export interface ActionInfoCentralStorePrivate {
}

export class ActionInfoCentralStorePrivate {

    // Own properties of Amtk-4.Amtk.ActionInfoCentralStorePrivate

    static name: string
}

export interface ActionInfoEntry {

    // Own fields of Amtk-4.Amtk.ActionInfoEntry

    /**
     * the action name.
     * @field 
     */
    actionName: string
    /**
     * the icon name, or %NULL.
     * @field 
     */
    iconName: string
    /**
     * the label (i.e. a short description) with a mnemonic, or %NULL.
     * @field 
     */
    label: string
    /**
     * the accelerator, in the format understood by gtk_accelerator_parse().
     * Or %NULL.
     * @field 
     */
    accel: string
    /**
     * the tooltip (i.e. a long description), or %NULL.
     * @field 
     */
    tooltip: string
}

/**
 * This struct defines a set of information for a single action. It is for use
 * with amtk_action_info_store_add_entries().
 * 
 * Like #GActionEntry, it is permissible to use an incomplete initialiser in
 * order to leave some of the later values as %NULL. Additional optional fields
 * may be added in the future.
 * @record 
 */
export class ActionInfoEntry {

    // Own properties of Amtk-4.Amtk.ActionInfoEntry

    static name: string
}

export interface ActionInfoStoreClass {

    // Own fields of Amtk-4.Amtk.ActionInfoStoreClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class ActionInfoStoreClass {

    // Own properties of Amtk-4.Amtk.ActionInfoStoreClass

    static name: string
}

export interface ActionInfoStorePrivate {
}

export class ActionInfoStorePrivate {

    // Own properties of Amtk-4.Amtk.ActionInfoStorePrivate

    static name: string
}

export interface ApplicationWindowClass {

    // Own fields of Amtk-4.Amtk.ApplicationWindowClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class ApplicationWindowClass {

    // Own properties of Amtk-4.Amtk.ApplicationWindowClass

    static name: string
}

export interface ApplicationWindowPrivate {
}

export class ApplicationWindowPrivate {

    // Own properties of Amtk-4.Amtk.ApplicationWindowPrivate

    static name: string
}

export interface FactoryClass {

    // Own fields of Amtk-4.Amtk.FactoryClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class FactoryClass {

    // Own properties of Amtk-4.Amtk.FactoryClass

    static name: string
}

export interface FactoryPrivate {
}

export class FactoryPrivate {

    // Own properties of Amtk-4.Amtk.FactoryPrivate

    static name: string
}

export interface MenuShellClass {

    // Own fields of Amtk-4.Amtk.MenuShellClass

    parentClass: GObject.ObjectClass
    menuItemSelected: (amtkMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    menuItemDeselected: (amtkMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    padding: any[]
}

export abstract class MenuShellClass {

    // Own properties of Amtk-4.Amtk.MenuShellClass

    static name: string
}

export interface MenuShellPrivate {
}

export class MenuShellPrivate {

    // Own properties of Amtk-4.Amtk.MenuShellPrivate

    static name: string
}

// END