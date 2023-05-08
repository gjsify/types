
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Amtk-4
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

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
 * @param action_map a #GActionMap.
 * @param entries a pointer to           the first item in an array of #GActionEntry structs.
 * @param user_data the user data for signal connections.
 */
export function action_map_add_action_entries_check_dups(action_map: Gio.ActionMap, entries: Gio.ActionEntry[], user_data: any | null): void
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
export function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null
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
 * @param icon_name an icon name.
 */
export function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string | null): void
/**
 * Sets the long description of `menu_item`. A possible use-case is to display it
 * in a #GtkStatusbar, or as a tooltip.
 * @param menu_item a #GtkMenuItem.
 * @param long_description the long description, or %NULL to unset it.
 */
export function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description: string | null): void
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
 * @param g_action_map a #GActionMap.
 * @param detailed_g_action_name_without_prefix a detailed #GAction name without the   #GActionMap prefix; the #GAction must be present in `g_action_map`.
 * @param gtk_action_group a #GtkActionGroup.
 * @param gtk_action_name a #GtkAction name present in `gtk_action_group`.
 */
export function utils_bind_g_action_to_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_without_prefix: string | null, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string | null): void
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
 * @param g_action_map a #GActionMap.
 * @param detailed_g_action_name_with_prefix a detailed #GAction name with the   #GActionMap prefix; the #GAction must be present in `g_action_map`.
 * @param gtk_action_group a #GtkActionGroup.
 * @param gtk_action_name the name of the #GtkAction to create and add to   `gtk_action_group`.
 */
export function utils_create_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_with_prefix: string | null, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string | null): void
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
export function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string | null
export module ActionInfoCentralStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ActionInfoCentralStore {

    // Own fields of Amtk-4.Amtk.ActionInfoCentralStore

    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate

    // Owm methods of Amtk-4.Amtk.ActionInfoCentralStore

    lookup(action_name: string | null): ActionInfo

    // Class property signals of Amtk-4.Amtk.ActionInfoCentralStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ActionInfoCentralStore extends GObject.Object {

    // Own properties of Amtk-4.Amtk.ActionInfoCentralStore

    static name: string
    static $gtype: GObject.GType<ActionInfoCentralStore>

    // Constructors of Amtk-4.Amtk.ActionInfoCentralStore

    constructor(config?: ActionInfoCentralStore.ConstructorProperties) 
    _init(config?: ActionInfoCentralStore.ConstructorProperties): void
    static get_singleton(): ActionInfoCentralStore
}

export module ActionInfoStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ActionInfoStore {

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
     * @param translation_domain a gettext domain, or %NULL.
     */
    add_entries(entries: ActionInfoEntry[], translation_domain: string | null): void
    /**
     * Checks for each #AmtkActionInfo of `store` that it has been used (see
     * amtk_action_info_has_been_used()). If an #AmtkActionInfo has not been used, a
     * warning is printed and might indicate dead code.
     * 
     * You probably want to call this function on the application store after
     * creating the menu and toolbar. But it can also be useful for a store provided
     * by a library, to easily see which actions are not used by the application.
     */
    check_all_used(): void
    lookup(action_name: string | null): ActionInfo

    // Class property signals of Amtk-4.Amtk.ActionInfoStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ActionInfoStore extends GObject.Object {

    // Own properties of Amtk-4.Amtk.ActionInfoStore

    static name: string
    static $gtype: GObject.GType<ActionInfoStore>

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
    readonly application_window: Gtk.ApplicationWindow
    /**
     * The #GtkStatusbar. %NULL by default.
     */
    statusbar: Gtk.Statusbar

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
     * @param menu_shell a #GtkMenuShell.
     */
    connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void
    /**
     * An alternative to gtk_recent_chooser_set_show_tips(). Shows the full path in
     * the #AmtkApplicationWindow:statusbar when a #GtkMenuItem of `menu` is
     * selected.
     * 
     * The full path is retrieved with
     * amtk_utils_recent_chooser_menu_get_item_uri().
     * @param menu a #GtkRecentChooserMenu.
     */
    connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void
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
    create_open_recent_menu(): Gtk.Widget
    /**
     * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
     * submenu. The #GtkRecentChooserMenu is created with
     * amtk_application_window_create_open_recent_menu().
     * @returns a new #GtkMenuItem.
     */
    create_open_recent_menu_item(): Gtk.Widget
    get_application_window(): Gtk.ApplicationWindow
    get_statusbar(): Gtk.Statusbar | null
    /**
     * Sets the #AmtkApplicationWindow:statusbar property.
     * @param statusbar a #GtkStatusbar, or %NULL.
     */
    set_statusbar(statusbar: Gtk.Statusbar | null): void

    // Class property signals of Amtk-4.Amtk.ApplicationWindow

    connect(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::statusbar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ApplicationWindow extends GObject.Object {

    // Own properties of Amtk-4.Amtk.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Amtk-4.Amtk.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    _init(config?: ApplicationWindow.ConstructorProperties): void
    /**
     * Returns the #AmtkApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtk_window a #GtkApplicationWindow.
     * @returns the #AmtkApplicationWindow of @gtk_window.
     */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
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
    default_flags: FactoryFlags

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
     * @param action_name an action name.
     * @returns a new #GtkCheckMenuItem for @action_name.
     */
    create_check_menu_item(action_name: string | null): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * Note that since it is a #GtkCheckMenuItem the icon is not set, even if it
     * would be possible with amtk_menu_item_set_icon_name().
     * 
     * If the action controls a boolean property, think about using
     * #GPropertyAction.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkCheckMenuItem for @action_name.
     */
    create_check_menu_item_full(action_name: string | null, flags: FactoryFlags): Gtk.Widget
    /**
     * Creates a new #GtkMenuItem for `action_name` with the
     * #AmtkFactory:default-flags.
     * @param action_name an action name.
     * @returns a new #GtkMenuItem for @action_name.
     */
    create_menu_item(action_name: string | null): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkMenuItem for @action_name.
     */
    create_menu_item_full(action_name: string | null, flags: FactoryFlags): Gtk.Widget
    /**
     * Creates a new #GtkMenuToolButton for `action_name` with the
     * #AmtkFactory:default-flags.
     * 
     * See the documentation of amtk_factory_create_menu_tool_button_full() for more
     * information.
     * @param action_name an action name.
     * @returns a new #GtkMenuToolButton for @action_name.
     */
    create_menu_tool_button(action_name: string | null): Gtk.MenuToolButton
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * After calling this function, you need to use the #GtkMenuToolButton API to
     * set the menu and also possibly set a tooltip to the arrow.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkMenuToolButton for @action_name.
     */
    create_menu_tool_button_full(action_name: string | null, flags: FactoryFlags): Gtk.MenuToolButton
    /**
     * Creates a new #GtkToolButton for `action_name` with the
     * #AmtkFactory:default-flags.
     * @param action_name an action name.
     * @returns a new #GtkToolButton for @action_name.
     */
    create_tool_button(action_name: string | null): Gtk.ToolItem
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     * @returns a new #GtkToolButton for @action_name.
     */
    create_tool_button_full(action_name: string | null, flags: FactoryFlags): Gtk.ToolItem
    get_application(): Gtk.Application | null
    get_default_flags(): FactoryFlags
    /**
     * Sets the #AmtkFactory:default-flags property.
     * @param default_flags the new value.
     */
    set_default_flags(default_flags: FactoryFlags): void

    // Class property signals of Amtk-4.Amtk.Factory

    connect(sigName: "notify::application", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Factory extends GObject.Object {

    // Own properties of Amtk-4.Amtk.Factory

    static name: string
    static $gtype: GObject.GType<Factory>

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
    static new_with_default_application(): Factory
    _init(config?: Factory.ConstructorProperties): void
}

export module MenuShell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `menu-item-deselected`
     */
    export interface MenuItemDeselectedSignalCallback {
        ($obj: MenuShell, menu_item: Gtk.MenuItem): void
    }

    /**
     * Signal callback interface for `menu-item-selected`
     */
    export interface MenuItemSelectedSignalCallback {
        ($obj: MenuShell, menu_item: Gtk.MenuItem): void
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
    readonly menu_shell: Gtk.MenuShell

    // Own fields of Amtk-4.Amtk.MenuShell

    parent: GObject.Object
    priv: MenuShellPrivate

    // Owm methods of Amtk-4.Amtk.MenuShell

    get_menu_shell(): Gtk.MenuShell

    // Own virtual methods of Amtk-4.Amtk.MenuShell

    vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void
    vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void

    // Own signals of Amtk-4.Amtk.MenuShell

    connect(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    connect_after(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    emit(sigName: "menu-item-deselected", menu_item: Gtk.MenuItem, ...args: any[]): void
    connect(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    connect_after(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    emit(sigName: "menu-item-selected", menu_item: Gtk.MenuItem, ...args: any[]): void

    // Class property signals of Amtk-4.Amtk.MenuShell

    connect(sigName: "notify::menu-shell", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-shell", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-shell", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MenuShell extends GObject.Object {

    // Own properties of Amtk-4.Amtk.MenuShell

    static name: string
    static $gtype: GObject.GType<MenuShell>

    // Constructors of Amtk-4.Amtk.MenuShell

    constructor(config?: MenuShell.ConstructorProperties) 
    _init(config?: MenuShell.ConstructorProperties): void
    /**
     * Returns the #AmtkMenuShell of `gtk_menu_shell`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
     * @param gtk_menu_shell a #GtkMenuShell.
     * @returns the #AmtkMenuShell of @gtk_menu_shell.
     */
    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell
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
    get_accels(): string[]
    get_action_name(): string | null
    get_icon_name(): string | null
    /**
     * Gets the label. The label has normally a mnemonic.
     * @returns the label (i.e. a short description), or %NULL.
     */
    get_label(): string | null
    get_tooltip(): string | null
    /**
     * Returns whether `info` has been used (for example by an #AmtkFactory
     * function). See also amtk_action_info_store_check_all_used().
     * @returns whether @info has been used.
     */
    has_been_used(): boolean
    /**
     * Mark `info` as used. An #AmtkFactory function that uses an #AmtkActionInfo
     * should call this function. See amtk_action_info_store_check_all_used().
     */
    mark_as_used(): void
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
    set_accels(accels: string[]): void
    /**
     * Sets the action name, for example `"win.save"`.
     * @param action_name the action name.
     */
    set_action_name(action_name: string | null): void
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the label with a mnemonic.
     * @param label the label (i.e. a short description), or %NULL.
     */
    set_label(label: string | null): void
    set_tooltip(tooltip: string | null): void
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
     * @param info_entry an #AmtkActionInfoEntry.
     * @param translation_domain a gettext domain, or %NULL.
     * @returns a new #AmtkActionInfo.
     */
    static new_from_entry(info_entry: ActionInfoEntry, translation_domain: string | null): ActionInfo
}

export interface ActionInfoCentralStoreClass {

    // Own fields of Amtk-4.Amtk.ActionInfoCentralStoreClass

    parent_class: GObject.ObjectClass
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
    action_name: string | null
    /**
     * the icon name, or %NULL.
     * @field 
     */
    icon_name: string | null
    /**
     * the label (i.e. a short description) with a mnemonic, or %NULL.
     * @field 
     */
    label: string | null
    /**
     * the accelerator, in the format understood by gtk_accelerator_parse().
     * Or %NULL.
     * @field 
     */
    accel: string | null
    /**
     * the tooltip (i.e. a long description), or %NULL.
     * @field 
     */
    tooltip: string | null
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
    menu_item_selected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    menu_item_deselected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END