// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Amtk-5
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

export namespace Amtk {

/**
 * #AmtkFactoryFlags permits to control how a factory function creates the
 * object, to ignore some steps.
 * @bitfield 
 */
enum FactoryFlags {
    /**
     * No flags.
     */
    FLAGS_NONE,
    /**
     * Do not associate the created object with the
     *   #GAction. For example if the object to create is a #GtkActionable, do not
     *   call gtk_actionable_set_detailed_action_name().
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
function action_map_add_action_entries_check_dups(action_map: Gio.ActionMap, entries: Gio.ActionEntry[], user_data: object | null): void
/**
 * Free the resources allocated by Amtk. For example it unrefs the singleton
 * objects.
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools. This function is meant to be called at the end of
 * main(). It can be called several times.
 */
function finalize(): void
/**
 * Like g_menu_append_item() but with (transfer full) for the `item` parameter.
 * @param menu a #GMenu.
 * @param item a #GMenuItem to append.
 */
function gmenu_append_item(menu: Gio.Menu, item: Gio.MenuItem): void
/**
 * Like g_menu_append_section() but with (transfer full) and a different type
 * for the `section` parameter, and calls g_menu_freeze() on `section`.
 * @param menu a #GMenu.
 * @param label the section label, or %NULL.
 * @param section a #GMenu with the items of the section.
 */
function gmenu_append_section(menu: Gio.Menu, label: string | null, section: Gio.Menu): void
/**
 * Initializes the Amtk library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Amtk function call.
 */
function init(): void
function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null
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
function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void
/**
 * Sets the long description of `menu_item`. A possible use-case is to display it
 * in a #GtkStatusbar, or as a tooltip.
 * @param menu_item a #GtkMenuItem.
 * @param long_description the long description, or %NULL to unset it.
 */
function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description: string | null): void
function shortcuts_group_new(title: string): Gtk.Container
function shortcuts_section_new(title: string): Gtk.Container
/**
 * Creates a new #GtkShortcutsWindow. The #GtkWindow:modal property is set to
 * %TRUE.
 * 
 * It is on purpose that the return type is #GtkShortcutsWindow, not #GtkWidget
 * or something else, so in C when you declare the variable as
 * #GtkShortcutsWindow it's easier to find it later (searching "GtkShortcuts"
 * will return something in your codebase).
 * @param parent the #GtkWindow:transient-for.
 */
function shortcuts_window_new(parent: Gtk.Window): Gtk.ShortcutsWindow
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
function utils_bind_g_action_to_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_without_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void
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
function utils_create_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_with_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void
/**
 * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
 * #GtkRecentChooserMenu.
 * 
 * This function has been written because the value returned by
 * gtk_recent_chooser_get_current_uri() is not updated when #GtkMenuItem's of a
 * #GtkRecentChooserMenu are selected/deselected.
 * @param menu a #GtkRecentChooserMenu.
 * @param item a #GtkMenuItem.
 */
function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
/**
 * Removes the mnemonics from `str`. Single underscores are removed, and two
 * consecutive underscores are replaced by one underscore (see the documentation
 * of gtk_label_new_with_mnemonic()).
 * @param str a string.
 */
function utils_remove_mnemonic(str: string): string
interface ActionInfoCentralStore_ConstructProps extends GObject.Object_ConstructProps {
}

interface ActionInfoCentralStore {

    // Own fields of Amtk-5.Amtk.ActionInfoCentralStore

    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate

    // Owm methods of Amtk-5.Amtk.ActionInfoCentralStore

    lookup(action_name: string): ActionInfo

    // Class property signals of Amtk-5.Amtk.ActionInfoCentralStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ActionInfoCentralStore extends GObject.Object {

    // Own properties of Amtk-5.Amtk.ActionInfoCentralStore

    static name: string
    static $gtype: GObject.GType<ActionInfoCentralStore>

    // Constructors of Amtk-5.Amtk.ActionInfoCentralStore

    constructor(config?: ActionInfoCentralStore_ConstructProps) 
    _init(config?: ActionInfoCentralStore_ConstructProps): void
    static get_singleton(): ActionInfoCentralStore
}

interface ActionInfoStore_ConstructProps extends GObject.Object_ConstructProps {
}

interface ActionInfoStore {

    // Own fields of Amtk-5.Amtk.ActionInfoStore

    parent: GObject.Object
    priv: ActionInfoStorePrivate

    // Owm methods of Amtk-5.Amtk.ActionInfoStore

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
    lookup(action_name: string): ActionInfo
    /**
     * Calls gtk_application_set_accels_for_action() for all #AmtkActionInfo's part
     * of `store` with the accelerators returned by amtk_action_info_get_accels().
     * This function does *not* call amtk_action_info_mark_as_used(), because if it
     * did it would not be possible to detect dead code in `store` with
     * amtk_action_info_store_check_all_used().
     * 
     * This function is not recommended if `store` is provided by a library, because
     * a future version of the library may add accelerators that are not wanted in
     * the application. So for a library store, you should let #AmtkFactory call
     * gtk_application_set_accels_for_action().
     * 
     * This function can be convenient for an application store, in combination with
     * %AMTK_FACTORY_IGNORE_ACCELS_FOR_APP (and/or having a %NULL #GtkApplication in
     * #AmtkFactory). It has the advantage that
     * gtk_application_set_accels_for_action() is called only once per action, not
     * each time that a #GtkApplicationWindow is created.
     * 
     * This function can also be useful if – for some actions – the objects are not
     * created directly with #AmtkFactory on application startup, but are created
     * later, on demand. For example to create a #GtkShortcutsWindow with
     * #AmtkFactory, containing information about actions that are not added to any
     * menu or toolbar.
     * @param application a #GtkApplication.
     */
    set_all_accels_to_app(application: Gtk.Application): void

    // Class property signals of Amtk-5.Amtk.ActionInfoStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ActionInfoStore extends GObject.Object {

    // Own properties of Amtk-5.Amtk.ActionInfoStore

    static name: string
    static $gtype: GObject.GType<ActionInfoStore>

    // Constructors of Amtk-5.Amtk.ActionInfoStore

    constructor(config?: ActionInfoStore_ConstructProps) 
    constructor() 
    static new(): ActionInfoStore
    _init(config?: ActionInfoStore_ConstructProps): void
}

interface ApplicationWindow_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Amtk-5.Amtk.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    application_window?: Gtk.ApplicationWindow | null
    /**
     * The #GtkStatusbar. %NULL by default.
     */
    statusbar?: Gtk.Statusbar | null
}

interface ApplicationWindow {

    // Own properties of Amtk-5.Amtk.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly application_window: Gtk.ApplicationWindow
    /**
     * The #GtkStatusbar. %NULL by default.
     */
    statusbar: Gtk.Statusbar

    // Own fields of Amtk-5.Amtk.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Amtk-5.Amtk.ApplicationWindow

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
     */
    create_open_recent_menu(): Gtk.Widget
    /**
     * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
     * submenu. The #GtkRecentChooserMenu is created with
     * amtk_application_window_create_open_recent_menu().
     */
    create_open_recent_menu_item(): Gtk.Widget
    get_application_window(): Gtk.ApplicationWindow
    get_statusbar(): Gtk.Statusbar | null
    /**
     * Sets the #AmtkApplicationWindow:statusbar property.
     * @param statusbar a #GtkStatusbar, or %NULL.
     */
    set_statusbar(statusbar: Gtk.Statusbar | null): void

    // Class property signals of Amtk-5.Amtk.ApplicationWindow

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

class ApplicationWindow extends GObject.Object {

    // Own properties of Amtk-5.Amtk.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Amtk-5.Amtk.ApplicationWindow

    constructor(config?: ApplicationWindow_ConstructProps) 
    _init(config?: ApplicationWindow_ConstructProps): void
    /**
     * Returns the #AmtkApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtk_window a #GtkApplicationWindow.
     */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
}

interface Factory_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Amtk-5.Amtk.Factory

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

interface Factory {

    // Own properties of Amtk-5.Amtk.Factory

    /**
     * The associated #GtkApplication (it is optional, it can be %NULL).
     * #AmtkFactory has a weak reference to the #GtkApplication.
     */
    readonly application: Gtk.Application
    /**
     * The default #AmtkFactoryFlags.
     */
    default_flags: FactoryFlags

    // Own fields of Amtk-5.Amtk.Factory

    parent: GObject.Object
    priv: FactoryPrivate

    // Owm methods of Amtk-5.Amtk.Factory

    /**
     * Creates a new #GtkCheckMenuItem for `action_name` with the
     * #AmtkFactory:default-flags.
     * 
     * See the documentation of amtk_factory_create_check_menu_item_full() for more
     * information.
     * @param action_name an action name.
     */
    create_check_menu_item(action_name: string): Gtk.Widget
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
     */
    create_check_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    /**
     * Calls amtk_factory_create_gmenu_item_full() with the
     * #AmtkFactory:default-flags.
     * @param action_name an action name.
     */
    create_gmenu_item(action_name: string): Gio.MenuItem
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * Creates a new #GMenuItem for `action_name`. It ignores the tooltip, i.e. the
     * return value of amtk_action_info_get_tooltip().
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     */
    create_gmenu_item_full(action_name: string, flags: FactoryFlags): Gio.MenuItem
    /**
     * Creates a new #GtkMenuItem for `action_name` with the
     * #AmtkFactory:default-flags.
     * @param action_name an action name.
     */
    create_menu_item(action_name: string): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     */
    create_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    /**
     * Creates a new #GtkMenuToolButton for `action_name` with the
     * #AmtkFactory:default-flags.
     * 
     * See the documentation of amtk_factory_create_menu_tool_button_full() for more
     * information.
     * @param action_name an action name.
     */
    create_menu_tool_button(action_name: string): Gtk.MenuToolButton
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * After calling this function, you need to use the #GtkMenuToolButton API to
     * set the menu and also possibly set a tooltip to the arrow.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     */
    create_menu_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.MenuToolButton
    /**
     * Calls amtk_factory_create_shortcut_full() with the
     * #AmtkFactory:default-flags.
     * @param action_name an action name.
     */
    create_shortcut(action_name: string): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * This function creates a new #GtkShortcutsShortcut for `action_name`.
     * 
     * For the #GtkShortcutsShortcut:title, the tooltip has the priorioty, with the
     * label as fallback if the tooltip is %NULL (the mnemonic is removed from the
     * label with amtk_utils_remove_mnemonic()). This can be controlled with the
     * %AMTK_FACTORY_IGNORE_TOOLTIP and %AMTK_FACTORY_IGNORE_LABEL flags.
     * 
     * The #GtkShortcutsShortcut:accelerator property is set with only the *first*
     * accel returned by amtk_action_info_get_accels(). This step can be ignored
     * with %AMTK_FACTORY_IGNORE_ACCELS or %AMTK_FACTORY_IGNORE_ACCELS_FOR_DOC.
     * 
     * The #GtkShortcutsShortcut:action-name property is set to `action_name` if the
     * %AMTK_FACTORY_IGNORE_GACTION flag isn't set. Note that with
     * #GtkShortcutsShortcut:action-name all accelerators are displayed (if set to
     * the #GtkApplication).
     * 
     * So depending on whether you want to show only the first accelerator or all
     * accelerators, you need to set `flags` appropriately.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     */
    create_shortcut_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    /**
     * Calls amtk_factory_create_simple_menu_full() with the
     * #AmtkFactory:default-flags.
     * @param entries a   pointer to the first item in an array of #AmtkActionInfoEntry structs.
     */
    create_simple_menu(entries: ActionInfoEntry[]): Gtk.Widget
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * 
     * This function:
     * - Creates a #GtkMenu;
     * - For each #AmtkActionInfoEntry action name from `entries,` creates a
     *   #GtkMenuItem with amtk_factory_create_menu_item_full() with the same `flags`
     *   as passed in to this function, and appends it to the #GtkMenu, in the same
     *   order as provided by the `entries` array.
     * 
     * So this function is useful only if the #GtkMenu contains only simple
     * #GtkMenuItem's, not #GtkCheckMenuItem's nor #GtkRadioMenuItem's.
     * @param entries a   pointer to the first item in an array of #AmtkActionInfoEntry structs.
     * @param flags #AmtkFactoryFlags.
     */
    create_simple_menu_full(entries: ActionInfoEntry[], flags: FactoryFlags): Gtk.Widget
    /**
     * Creates a new #GtkToolButton for `action_name` with the
     * #AmtkFactory:default-flags.
     * @param action_name an action name.
     */
    create_tool_button(action_name: string): Gtk.ToolItem
    /**
     * This function ignores the #AmtkFactory:default-flags property and takes the
     * `flags` argument instead.
     * @param action_name an action name.
     * @param flags #AmtkFactoryFlags.
     */
    create_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.ToolItem
    get_application(): Gtk.Application | null
    get_default_flags(): FactoryFlags
    /**
     * Sets the #AmtkFactory:default-flags property.
     * @param default_flags the new value.
     */
    set_default_flags(default_flags: FactoryFlags): void

    // Class property signals of Amtk-5.Amtk.Factory

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

class Factory extends GObject.Object {

    // Own properties of Amtk-5.Amtk.Factory

    static name: string
    static $gtype: GObject.GType<Factory>

    // Constructors of Amtk-5.Amtk.Factory

    constructor(config?: Factory_ConstructProps) 
    /**
     * Creates a new #AmtkFactory object. Associating a #GtkApplication is optional,
     * if it is %NULL gtk_application_set_accels_for_action() won't be called.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     */
    constructor(application: Gtk.Application | null) 
    /**
     * Creates a new #AmtkFactory object. Associating a #GtkApplication is optional,
     * if it is %NULL gtk_application_set_accels_for_action() won't be called.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     */
    static new(application: Gtk.Application | null): Factory
    /**
     * Calls amtk_factory_new() with g_application_get_default() (it must be a
     * #GtkApplication).
     * @constructor 
     */
    static new_with_default_application(): Factory
    _init(config?: Factory_ConstructProps): void
}

interface MenuShell_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Amtk-5.Amtk.MenuShell

    /**
     * The #GtkMenuShell.
     */
    menu_shell?: Gtk.MenuShell | null
}

/**
 * Signal callback interface for `menu-item-deselected`
 */
interface MenuShell_MenuItemDeselectedSignalCallback {
    ($obj: MenuShell, menu_item: Gtk.MenuItem): void
}

/**
 * Signal callback interface for `menu-item-selected`
 */
interface MenuShell_MenuItemSelectedSignalCallback {
    ($obj: MenuShell, menu_item: Gtk.MenuItem): void
}

interface MenuShell {

    // Own properties of Amtk-5.Amtk.MenuShell

    /**
     * The #GtkMenuShell.
     */
    readonly menu_shell: Gtk.MenuShell

    // Own fields of Amtk-5.Amtk.MenuShell

    parent: GObject.Object
    priv: MenuShellPrivate

    // Owm methods of Amtk-5.Amtk.MenuShell

    get_menu_shell(): Gtk.MenuShell

    // Own virtual methods of Amtk-5.Amtk.MenuShell

    vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void
    vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void

    // Own signals of Amtk-5.Amtk.MenuShell

    connect(sigName: "menu-item-deselected", callback: MenuShell_MenuItemDeselectedSignalCallback): number
    connect_after(sigName: "menu-item-deselected", callback: MenuShell_MenuItemDeselectedSignalCallback): number
    emit(sigName: "menu-item-deselected", menu_item: Gtk.MenuItem, ...args: any[]): void
    connect(sigName: "menu-item-selected", callback: MenuShell_MenuItemSelectedSignalCallback): number
    connect_after(sigName: "menu-item-selected", callback: MenuShell_MenuItemSelectedSignalCallback): number
    emit(sigName: "menu-item-selected", menu_item: Gtk.MenuItem, ...args: any[]): void

    // Class property signals of Amtk-5.Amtk.MenuShell

    connect(sigName: "notify::menu-shell", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-shell", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-shell", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MenuShell extends GObject.Object {

    // Own properties of Amtk-5.Amtk.MenuShell

    static name: string
    static $gtype: GObject.GType<MenuShell>

    // Constructors of Amtk-5.Amtk.MenuShell

    constructor(config?: MenuShell_ConstructProps) 
    _init(config?: MenuShell_ConstructProps): void
    /**
     * Returns the #AmtkMenuShell of `gtk_menu_shell`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
     * @param gtk_menu_shell a #GtkMenuShell.
     */
    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell
}

interface ActionInfo {

    // Owm methods of Amtk-5.Amtk.ActionInfo

    copy(): ActionInfo
    /**
     * Returns the accelerators. This function never returns %NULL, it always
     * returns a %NULL-terminated array, to be suitable for
     * gtk_application_set_accels_for_action().
     */
    get_accels(): string[]
    get_action_name(): string | null
    get_icon_name(): string | null
    /**
     * Gets the label. The label has normally a mnemonic. To remove the mnemonic,
     * there is the amtk_utils_remove_mnemonic() function.
     */
    get_label(): string | null
    get_tooltip(): string | null
    /**
     * Returns whether `info` has been used (for example by an #AmtkFactory
     * function). See also amtk_action_info_store_check_all_used().
     */
    has_been_used(): boolean
    /**
     * Mark `info` as used. An #AmtkFactory function that uses an #AmtkActionInfo
     * should call this function. See amtk_action_info_store_check_all_used().
     */
    mark_as_used(): void
    /**
     * Increments the reference count of `info` by one.
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
     * Sets the action name, for example `"win.save"`. Can be a detailed action
     * name, see g_action_parse_detailed_name().
     * @param action_name the action name.
     */
    set_action_name(action_name: string): void
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the label with a mnemonic. To know how to encode the mnemonic, see the
     * documentation of gtk_label_new_with_mnemonic().
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

class ActionInfo {

    // Own properties of Amtk-5.Amtk.ActionInfo

    static name: string

    // Constructors of Amtk-5.Amtk.ActionInfo

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
     */
    static new_from_entry(info_entry: ActionInfoEntry, translation_domain: string | null): ActionInfo
}

interface ActionInfoCentralStoreClass {

    // Own fields of Amtk-5.Amtk.ActionInfoCentralStoreClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class ActionInfoCentralStoreClass {

    // Own properties of Amtk-5.Amtk.ActionInfoCentralStoreClass

    static name: string
}

interface ActionInfoCentralStorePrivate {
}

class ActionInfoCentralStorePrivate {

    // Own properties of Amtk-5.Amtk.ActionInfoCentralStorePrivate

    static name: string
}

interface ActionInfoEntry {

    // Own fields of Amtk-5.Amtk.ActionInfoEntry

    /**
     * the action name. Can be a detailed action name, see
     *   g_action_parse_detailed_name().
     * @field 
     */
    action_name: string
    /**
     * the icon name, or %NULL.
     * @field 
     */
    icon_name: string
    /**
     * the label (i.e. a short description) with a mnemonic, or %NULL.
     * @field 
     */
    label: string
    /**
     * the accelerator, in the format understood by gtk_accelerator_parse().
     *   Or %NULL.
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
class ActionInfoEntry {

    // Own properties of Amtk-5.Amtk.ActionInfoEntry

    static name: string
}

interface ActionInfoStoreClass {

    // Own fields of Amtk-5.Amtk.ActionInfoStoreClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class ActionInfoStoreClass {

    // Own properties of Amtk-5.Amtk.ActionInfoStoreClass

    static name: string
}

interface ActionInfoStorePrivate {
}

class ActionInfoStorePrivate {

    // Own properties of Amtk-5.Amtk.ActionInfoStorePrivate

    static name: string
}

interface ApplicationWindowClass {

    // Own fields of Amtk-5.Amtk.ApplicationWindowClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class ApplicationWindowClass {

    // Own properties of Amtk-5.Amtk.ApplicationWindowClass

    static name: string
}

interface ApplicationWindowPrivate {
}

class ApplicationWindowPrivate {

    // Own properties of Amtk-5.Amtk.ApplicationWindowPrivate

    static name: string
}

interface FactoryClass {

    // Own fields of Amtk-5.Amtk.FactoryClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class FactoryClass {

    // Own properties of Amtk-5.Amtk.FactoryClass

    static name: string
}

interface FactoryPrivate {
}

class FactoryPrivate {

    // Own properties of Amtk-5.Amtk.FactoryPrivate

    static name: string
}

interface MenuShellClass {

    // Own fields of Amtk-5.Amtk.MenuShellClass

    parent_class: GObject.ObjectClass
    menu_item_selected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    menu_item_deselected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    padding: object[]
}

abstract class MenuShellClass {

    // Own properties of Amtk-5.Amtk.MenuShellClass

    static name: string
}

interface MenuShellPrivate {
}

class MenuShellPrivate {

    // Own properties of Amtk-5.Amtk.MenuShellPrivate

    static name: string
}

}
export default Amtk;