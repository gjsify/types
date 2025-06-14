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

export namespace Amtk {
    /**
     * Amtk-5
     */

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
    function action_map_add_action_entries_check_dups(
        action_map: Gio.ActionMap,
        entries: Gio.ActionEntry[],
        user_data?: any | null,
    ): void;
    /**
     * Free the resources allocated by Amtk. For example it unrefs the singleton
     * objects.
     *
     * It is not mandatory to call this function, it's just to be friendlier to
     * memory debugging tools. This function is meant to be called at the end of
     * main(). It can be called several times.
     */
    function finalize(): void;
    /**
     * Like g_menu_append_item() but with (transfer full) for the `item` parameter.
     * @param menu a #GMenu.
     * @param item a #GMenuItem to append.
     */
    function gmenu_append_item(menu: Gio.Menu, item: Gio.MenuItem): void;
    /**
     * Like g_menu_append_section() but with (transfer full) and a different type
     * for the `section` parameter, and calls g_menu_freeze() on `section`.
     * @param menu a #GMenu.
     * @param label the section label, or %NULL.
     * @param section a #GMenu with the items of the section.
     */
    function gmenu_append_section(menu: Gio.Menu, label: string | null, section: Gio.Menu): void;
    /**
     * Initializes the Amtk library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of main(), before any other Amtk function call.
     */
    function init(): void;
    function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null;
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
    function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void;
    /**
     * Sets the long description of `menu_item`. A possible use-case is to display it
     * in a #GtkStatusbar, or as a tooltip.
     * @param menu_item a #GtkMenuItem.
     * @param long_description the long description, or %NULL to unset it.
     */
    function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void;
    function shortcuts_group_new(title: string): Gtk.Container;
    function shortcuts_section_new(title: string): Gtk.Container;
    /**
     * Creates a new #GtkShortcutsWindow. The #GtkWindow:modal property is set to
     * %TRUE.
     *
     * It is on purpose that the return type is #GtkShortcutsWindow, not #GtkWidget
     * or something else, so in C when you declare the variable as
     * #GtkShortcutsWindow it's easier to find it later (searching "GtkShortcuts"
     * will return something in your codebase).
     * @param parent the #GtkWindow:transient-for.
     * @returns a new #GtkShortcutsWindow.
     */
    function shortcuts_window_new(parent: Gtk.Window): Gtk.ShortcutsWindow;
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
     * @param detailed_g_action_name_without_prefix a detailed #GAction name without the   #GActionMap prefix; the #GAction must be present in @g_action_map.
     * @param gtk_action_group a #GtkActionGroup.
     * @param gtk_action_name a #GtkAction name present in @gtk_action_group.
     */
    function utils_bind_g_action_to_gtk_action(
        g_action_map: Gio.ActionMap,
        detailed_g_action_name_without_prefix: string,
        gtk_action_group: Gtk.ActionGroup,
        gtk_action_name: string,
    ): void;
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
     * @param detailed_g_action_name_with_prefix a detailed #GAction name with the   #GActionMap prefix; the #GAction must be present in @g_action_map.
     * @param gtk_action_group a #GtkActionGroup.
     * @param gtk_action_name the name of the #GtkAction to create and add to   @gtk_action_group.
     */
    function utils_create_gtk_action(
        g_action_map: Gio.ActionMap,
        detailed_g_action_name_with_prefix: string,
        gtk_action_group: Gtk.ActionGroup,
        gtk_action_name: string,
    ): void;
    /**
     * This function wraps `menubar` into a container, to allow the menubar to shrink
     * below its minimum width.
     *
     * A possible use-case: have two applications side-by-side on a single screen.
     * @param menubar a #GtkMenuBar.
     * @returns a new widget that contains @menubar.
     */
    function utils_get_shrinkable_menubar(menubar: Gtk.MenuBar): Gtk.Widget;
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
    function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string;
    /**
     * Removes the mnemonics from `str`. Single underscores are removed, and two
     * consecutive underscores are replaced by one underscore (see the documentation
     * of gtk_label_new_with_mnemonic()).
     * @param str a string.
     * @returns the new string with the mnemonics removed. Free with g_free() when no longer needed.
     */
    function utils_remove_mnemonic(str: string): string;
    /**
     * #AmtkFactoryFlags permits to control how a factory function creates the
     * object, to ignore some steps.
     */

    /**
     * #AmtkFactoryFlags permits to control how a factory function creates the
     * object, to ignore some steps.
     */
    export namespace FactoryFlags {
        export const $gtype: GObject.GType<FactoryFlags>;
    }

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
    namespace ActionInfoCentralStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ActionInfoCentralStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoCentralStore>;

        // Constructors

        constructor(properties?: Partial<ActionInfoCentralStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            callback: ActionInfoCentralStore.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            callback: ActionInfoCentralStore.SignalSignatures[K],
        ): number;
        emit<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            ...args: ActionInfoCentralStore.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        static get_singleton(): ActionInfoCentralStore;

        // Methods

        lookup(action_name: string): ActionInfo;
    }

    namespace ActionInfoStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ActionInfoStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoStore>;

        // Constructors

        constructor(properties?: Partial<ActionInfoStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ActionInfoStore;

        // Signals

        connect<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            callback: ActionInfoStore.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            callback: ActionInfoStore.SignalSignatures[K],
        ): number;
        emit<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            ...args: ActionInfoStore.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Inserts `info` into `store` and into the #AmtkActionInfoCentralStore. Both the
         * `store` and central store must <emphasis>not</emphasis> already contain an
         * #AmtkActionInfo with the same action name. The stores take their own
         * reference on `info`.
         * @param info an #AmtkActionInfo.
         */
        add(info: ActionInfo): void;
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
        add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void;
        /**
         * Checks for each #AmtkActionInfo of `store` that it has been used (see
         * amtk_action_info_has_been_used()). If an #AmtkActionInfo has not been used, a
         * warning is printed and might indicate dead code.
         *
         * You probably want to call this function on the application store after
         * creating the menu and toolbar. But it can also be useful for a store provided
         * by a library, to easily see which actions are not used by the application.
         */
        check_all_used(): void;
        lookup(action_name: string): ActionInfo;
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
        set_all_accels_to_app(application: Gtk.Application): void;
    }

    namespace ApplicationWindow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            statusbar: Gtk.Statusbar;
        }
    }

    class ApplicationWindow extends GObject.Object {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The #GtkApplicationWindow.
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        get applicationWindow(): Gtk.ApplicationWindow;
        /**
         * The #GtkStatusbar. %NULL by default.
         */
        get statusbar(): Gtk.Statusbar;
        set statusbar(val: Gtk.Statusbar);

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: ApplicationWindow.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: ApplicationWindow.SignalSignatures[K],
        ): number;
        emit<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            ...args: ApplicationWindow.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Creates the base of a simple and generic #GtkRecentChooserMenu.
         *
         * The #GtkRecentChooser is configured to show files only recently used with the
         * current application, as returned by g_get_application_name(). If recent files
         * are added to the default #GtkRecentManager with
         * gtk_recent_manager_add_item(), the files will normally show up in the
         * #GtkRecentChooserMenu.
         */
        static create_open_recent_menu_base(): Gtk.RecentChooserMenu;
        /**
         * Returns the #AmtkApplicationWindow of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;

        // Methods

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
        connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void;
        /**
         * An alternative to gtk_recent_chooser_set_show_tips(). Shows the full path in
         * the #AmtkApplicationWindow:statusbar when a #GtkMenuItem of `menu` is
         * selected.
         *
         * The full path is retrieved with
         * amtk_utils_recent_chooser_menu_get_item_uri().
         * @param menu a #GtkRecentChooserMenu.
         */
        connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void;
        /**
         * This function creates a #GtkRecentChooserMenu with
         * amtk_application_window_create_open_recent_menu_base(), and setup these
         * additional things:
         *
         * - The #GtkRecentChooserMenu is connected to the statusbar with
         *   amtk_application_window_connect_recent_chooser_menu_to_statusbar().
         *
         * - When the #GtkRecentChooser::item-activated signal is emitted,
         *   g_application_open() is called (with an empty hint), so the #GApplication
         *   must have the %G_APPLICATION_HANDLES_OPEN flag set.
         * @returns a new #GtkRecentChooserMenu.
         */
        create_open_recent_menu(): Gtk.Widget;
        /**
         * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
         * submenu. The #GtkRecentChooserMenu is created with
         * amtk_application_window_create_open_recent_menu().
         * @returns a new #GtkMenuItem.
         */
        create_open_recent_menu_item(): Gtk.Widget;
        get_application_window(): Gtk.ApplicationWindow;
        get_statusbar(): Gtk.Statusbar | null;
        /**
         * Sets the #AmtkApplicationWindow:statusbar property.
         * @param statusbar a #GtkStatusbar, or %NULL.
         */
        set_statusbar(statusbar?: Gtk.Statusbar | null): void;
    }

    namespace Factory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
            default_flags: FactoryFlags;
            defaultFlags: FactoryFlags;
        }
    }

    class Factory extends GObject.Object {
        static $gtype: GObject.GType<Factory>;

        // Properties

        /**
         * The associated #GtkApplication (it is optional, it can be %NULL).
         * #AmtkFactory has a weak reference to the #GtkApplication.
         */
        get application(): Gtk.Application;
        /**
         * The default #AmtkFactoryFlags.
         */
        get default_flags(): FactoryFlags;
        set default_flags(val: FactoryFlags);
        /**
         * The default #AmtkFactoryFlags.
         */
        get defaultFlags(): FactoryFlags;
        set defaultFlags(val: FactoryFlags);

        // Constructors

        constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](application?: Gtk.Application | null): Factory;

        static new_with_default_application(): Factory;

        // Signals

        connect<K extends keyof Factory.SignalSignatures>(signal: K, callback: Factory.SignalSignatures[K]): number;
        connect_after<K extends keyof Factory.SignalSignatures>(
            signal: K,
            callback: Factory.SignalSignatures[K],
        ): number;
        emit<K extends keyof Factory.SignalSignatures>(
            signal: K,
            ...args: Factory.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Creates a new #GtkCheckMenuItem for `action_name` with the
         * #AmtkFactory:default-flags.
         *
         * See the documentation of amtk_factory_create_check_menu_item_full() for more
         * information.
         * @param action_name an action name.
         * @returns a new #GtkCheckMenuItem for @action_name.
         */
        create_check_menu_item(action_name: string): Gtk.Widget;
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
        create_check_menu_item_full(action_name: string, flags: FactoryFlags | null): Gtk.Widget;
        /**
         * Calls amtk_factory_create_gmenu_item_full() with the
         * #AmtkFactory:default-flags.
         * @param action_name an action name.
         * @returns a new #GMenuItem for @action_name.
         */
        create_gmenu_item(action_name: string): Gio.MenuItem;
        /**
         * This function ignores the #AmtkFactory:default-flags property and takes the
         * `flags` argument instead.
         *
         * Creates a new #GMenuItem for `action_name`. It ignores the tooltip, i.e. the
         * return value of amtk_action_info_get_tooltip().
         * @param action_name an action name.
         * @param flags #AmtkFactoryFlags.
         * @returns a new #GMenuItem for @action_name.
         */
        create_gmenu_item_full(action_name: string, flags: FactoryFlags | null): Gio.MenuItem;
        /**
         * Creates a new #GtkMenuItem for `action_name` with the
         * #AmtkFactory:default-flags.
         * @param action_name an action name.
         * @returns a new #GtkMenuItem for @action_name.
         */
        create_menu_item(action_name: string): Gtk.Widget;
        /**
         * This function ignores the #AmtkFactory:default-flags property and takes the
         * `flags` argument instead.
         * @param action_name an action name.
         * @param flags #AmtkFactoryFlags.
         * @returns a new #GtkMenuItem for @action_name.
         */
        create_menu_item_full(action_name: string, flags: FactoryFlags | null): Gtk.Widget;
        /**
         * Creates a new #GtkMenuToolButton for `action_name` with the
         * #AmtkFactory:default-flags.
         *
         * See the documentation of amtk_factory_create_menu_tool_button_full() for more
         * information.
         * @param action_name an action name.
         * @returns a new #GtkMenuToolButton for @action_name.
         */
        create_menu_tool_button(action_name: string): Gtk.MenuToolButton;
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
        create_menu_tool_button_full(action_name: string, flags: FactoryFlags | null): Gtk.MenuToolButton;
        /**
         * Calls amtk_factory_create_shortcut_full() with the
         * #AmtkFactory:default-flags.
         * @param action_name an action name.
         * @returns a new #GtkShortcutsShortcut for @action_name.
         */
        create_shortcut(action_name: string): Gtk.Widget;
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
         * @returns a new #GtkShortcutsShortcut for @action_name.
         */
        create_shortcut_full(action_name: string, flags: FactoryFlags | null): Gtk.Widget;
        /**
         * Calls amtk_factory_create_simple_menu_full() with the
         * #AmtkFactory:default-flags.
         * @param entries a   pointer to the first item in an array of #AmtkActionInfoEntry structs.
         * @returns a new simple #GtkMenu for @entries.
         */
        create_simple_menu(entries: ActionInfoEntry[]): Gtk.Widget;
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
         * @returns a new simple #GtkMenu for @entries.
         */
        create_simple_menu_full(entries: ActionInfoEntry[], flags: FactoryFlags | null): Gtk.Widget;
        /**
         * Creates a new #GtkToolButton for `action_name` with the
         * #AmtkFactory:default-flags.
         * @param action_name an action name.
         * @returns a new #GtkToolButton for @action_name.
         */
        create_tool_button(action_name: string): Gtk.ToolItem;
        /**
         * This function ignores the #AmtkFactory:default-flags property and takes the
         * `flags` argument instead.
         * @param action_name an action name.
         * @param flags #AmtkFactoryFlags.
         * @returns a new #GtkToolButton for @action_name.
         */
        create_tool_button_full(action_name: string, flags: FactoryFlags | null): Gtk.ToolItem;
        get_application(): Gtk.Application | null;
        get_default_flags(): FactoryFlags;
        /**
         * Sets the #AmtkFactory:default-flags property.
         * @param default_flags the new value.
         */
        set_default_flags(default_flags: FactoryFlags | null): void;
    }

    namespace MenuShell {
        // Signal callback interfaces

        interface MenuItemDeselected {
            (_source: MenuShell, menu_item: Gtk.MenuItem): void;
        }

        interface MenuItemSelected {
            (_source: MenuShell, menu_item: Gtk.MenuItem): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'menu-item-deselected': MenuItemDeselected;
            'menu-item-selected': MenuItemSelected;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            menu_shell: Gtk.MenuShell;
            menuShell: Gtk.MenuShell;
        }
    }

    class MenuShell extends GObject.Object {
        static $gtype: GObject.GType<MenuShell>;

        // Properties

        /**
         * The #GtkMenuShell.
         */
        get menu_shell(): Gtk.MenuShell;
        /**
         * The #GtkMenuShell.
         */
        get menuShell(): Gtk.MenuShell;

        // Constructors

        constructor(properties?: Partial<MenuShell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MenuShell.SignalSignatures>(signal: K, callback: MenuShell.SignalSignatures[K]): number;
        connect_after<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            callback: MenuShell.SignalSignatures[K],
        ): number;
        emit<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            ...args: MenuShell.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Returns the #AmtkMenuShell of `gtk_menu_shell`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
         * @param gtk_menu_shell a #GtkMenuShell.
         */
        static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;

        // Virtual methods

        vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void;
        vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void;

        // Methods

        get_menu_shell(): Gtk.MenuShell;
    }

    class ActionInfo {
        static $gtype: GObject.GType<ActionInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ActionInfo;

        static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo;

        // Methods

        copy(): ActionInfo;
        /**
         * Returns the accelerators. This function never returns %NULL, it always
         * returns a %NULL-terminated array, to be suitable for
         * gtk_application_set_accels_for_action().
         * @returns a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
         */
        get_accels(): string[];
        get_action_name(): string | null;
        get_icon_name(): string | null;
        /**
         * Gets the label. The label has normally a mnemonic. To remove the mnemonic,
         * there is the amtk_utils_remove_mnemonic() function.
         * @returns the label (i.e. a short description), or %NULL.
         */
        get_label(): string | null;
        get_tooltip(): string | null;
        /**
         * Returns whether `info` has been used (for example by an #AmtkFactory
         * function). See also amtk_action_info_store_check_all_used().
         * @returns whether @info has been used.
         */
        has_been_used(): boolean;
        /**
         * Mark `info` as used. An #AmtkFactory function that uses an #AmtkActionInfo
         * should call this function. See amtk_action_info_store_check_all_used().
         */
        mark_as_used(): void;
        /**
         * Increments the reference count of `info` by one.
         * @returns the passed in @info.
         */
        ref(): ActionInfo;
        /**
         * A function similar to gtk_application_set_accels_for_action().
         *
         * `accels` must not be %NULL, it must be a %NULL-terminated array, to be
         * consistent with gtk_application_set_accels_for_action().
         * @param accels a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
         */
        set_accels(accels: string[]): void;
        /**
         * Sets the action name, for example `"win.save"`. Can be a detailed action
         * name, see g_action_parse_detailed_name().
         * @param action_name the action name.
         */
        set_action_name(action_name: string): void;
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets the label with a mnemonic. To know how to encode the mnemonic, see the
         * documentation of gtk_label_new_with_mnemonic().
         * @param label the label (i.e. a short description), or %NULL.
         */
        set_label(label?: string | null): void;
        set_tooltip(tooltip?: string | null): void;
        /**
         * Decrements the reference count of `info` by one. If the reference count drops
         * to 0, `info` is freed.
         */
        unref(): void;
    }

    type ActionInfoCentralStoreClass = typeof ActionInfoCentralStore;
    abstract class ActionInfoCentralStorePrivate {
        static $gtype: GObject.GType<ActionInfoCentralStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * This struct defines a set of information for a single action. It is for use
     * with amtk_action_info_store_add_entries().
     *
     * Like #GActionEntry, it is permissible to use an incomplete initialiser in
     * order to leave some of the later values as %NULL. Additional optional fields
     * may be added in the future.
     */
    class ActionInfoEntry {
        static $gtype: GObject.GType<ActionInfoEntry>;

        // Fields

        action_name: string;
        icon_name: string;
        label: string;
        accel: string;
        tooltip: string;

        // Constructors

        constructor(
            properties?: Partial<{
                action_name: string;
                icon_name: string;
                label: string;
                accel: string;
                tooltip: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ActionInfoStoreClass = typeof ActionInfoStore;
    abstract class ActionInfoStorePrivate {
        static $gtype: GObject.GType<ActionInfoStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationWindowClass = typeof ApplicationWindow;
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FactoryClass = typeof Factory;
    abstract class FactoryPrivate {
        static $gtype: GObject.GType<FactoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MenuShellClass = typeof MenuShell;
    abstract class MenuShellPrivate {
        static $gtype: GObject.GType<MenuShellPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default Amtk;

// END
