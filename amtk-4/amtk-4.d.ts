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
     * Amtk-4
     */

    /**
     * A wrapper function for `g_action_map_add_action_entries()` that checks
     * duplicates.
     *
     * This function first checks - for each entry - that the `action_map` doesn't
     * already contain a {@link Gio.Action} with the same name. A warning is printed if an old
     * action will be dropped. In any case, it then calls
     * `g_action_map_add_action_entries()` with the same arguments as passed to this
     * function.
     *
     * This function also checks if there are duplicates in the `entries` array
     * itself.
     * @param action_map a {@link Gio.ActionMap}.
     * @param entries a pointer to           the first item in an array of {@link Gio.ActionEntry} structs.
     * @param user_data the user data for signal connections.
     * @since 2.0
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
     * `main()`. It can be called several times.
     * @since 3.0
     */
    function finalize(): void;
    /**
     * Initializes the Amtk library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of `main()`, before any other Amtk function call.
     * @since 3.0
     */
    function init(): void;
    /**
     * @param menu_item a {@link Gtk.MenuItem}.
     * @returns the long description of `menu_item`, previously set with   `amtk_menu_item_set_long_description()`.
     * @since 2.0
     */
    function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null;
    /**
     * Sets an icon to a {@link Gtk.MenuItem}.
     *
     * If the child widget of `item` is already a {@link Gtk.Box}, all {@link Gtk.Image} widgets
     * inside that box are first destroyed. A {@link Gtk.Image} for `icon_name` is then
     * inserted to the box.
     *
     * If the child widget of `item` is not a {@link Gtk.Box} (it's usually the
     * {@link Gtk.AccelLabel}), it is replaced by a new {@link Gtk.Box} and the initial child widget
     * is inserted to the {@link Gtk.Box}, alongside the icon.
     *
     * As a consequence, if you want to call functions on the {@link Gtk.AccelLabel}, it's
     * easier to do it before calling this function.
     * @param item a {@link Gtk.MenuItem}.
     * @param icon_name an icon name.
     * @since 2.0
     */
    function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void;
    /**
     * Sets the long description of `menu_item`. A possible use-case is to display it
     * in a {@link Gtk.Statusbar}, or as a tooltip.
     * @param menu_item a {@link Gtk.MenuItem}.
     * @param long_description the long description, or `null` to unset it.
     * @since 2.0
     */
    function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void;
    /**
     * Utility function to be able to port an application gradually to {@link Gio.Action},
     * when {@link Gtk.UIManager} and {@link Gtk.Action} are still used. Porting to {@link Gio.Action} should
     * be the first step.
     *
     * For `detailed_g_action_name_without_prefix`, see the
     * `g_action_parse_detailed_name()` function.  The `"app."` or `"win."` prefix (or
     * any other {@link Gio.ActionMap} prefix) must not be included in
     * `detailed_g_action_name_without_prefix`. For example a valid
     * `detailed_g_action_name_without_prefix` is `"open"` or
     * `"insert-command::foobar"`.
     *
     * The same {@link Gio.Action} can be bound to several {@link Gtk.Action}'s (with different
     * parameter values for the {@link Gio.Action}), but the reverse is not true, one
     * {@link Gtk.Action} cannot be bound to several {@link Gio.Action}'s.
     *
     * This function:
     * - Calls `g_action_activate()` when the {@link Gtk.Action} {@link Gtk.Action.SignalSignatures.activate | Gtk.Action::activate} signal
     *   is emitted.
     * - Binds the {@link Gio.Action} {@link Gio.Action.enabled} property to the {@link Gtk.Action}
     *   {@link Gtk.Action.sensitive} property. The binding is done with the
     *   {@link GObject.BindingFlags.BIDIRECTIONAL} and {@link GObject.BindingFlags.SYNC_CREATE} flags, the source is
     *   the {@link Gio.Action} and the target is the {@link Gtk.Action}.
     *
     * When using this function, you should set the callback to `null` in the
     * corresponding {@link Gtk.ActionEntry}.
     * @param g_action_map a {@link Gio.ActionMap}.
     * @param detailed_g_action_name_without_prefix a detailed {@link Gio.Action} name without the   {@link Gio.ActionMap} prefix; the {@link Gio.Action} must be present in `g_action_map`.
     * @param gtk_action_group a {@link Gtk.ActionGroup}.
     * @param gtk_action_name a {@link Gtk.Action} name present in `gtk_action_group`.
     * @since 4.0
     */
    function utils_bind_g_action_to_gtk_action(
        g_action_map: Gio.ActionMap,
        detailed_g_action_name_without_prefix: string,
        gtk_action_group: Gtk.ActionGroup,
        gtk_action_name: string,
    ): void;
    /**
     * Utility function to be able to port an application gradually to {@link Gio.Action} and
     * {@link Amtk.ActionInfo}, when {@link Gtk.UIManager} is still used. This function goes one
     * step further compared to `amtk_utils_bind_g_action_to_gtk_action()`. With
     * `amtk_utils_bind_g_action_to_gtk_action()`, only the {@link Gio.Action} must exist. With
     * `amtk_utils_create_gtk_action()`, both the {@link Gio.Action} and {@link Amtk.ActionInfo} must
     * exist (so typically you need to convert the {@link Gtk.ActionEntry}'s into
     * {@link Amtk.ActionInfoEntry}'s).
     *
     * This function creates a {@link Gtk.Action} from a {@link Gio.Action} plus its corresponding
     * {@link Amtk.ActionInfo}.
     *
     * The {@link Gtk.Action} is created with the information provided by the
     * {@link Amtk.ActionInfo} (retrieved with `amtk_action_info_central_store_lookup()` with
     * `detailed_g_action_name_with_prefix` as argument). Only the first accelerator
     * is taken into account.
     *
     * Once the {@link Gtk.Action} is created, it is added to the `gtk_action_group`, and
     * `amtk_utils_bind_g_action_to_gtk_action()` is called.
     * @param g_action_map a {@link Gio.ActionMap}.
     * @param detailed_g_action_name_with_prefix a detailed {@link Gio.Action} name with the   {@link Gio.ActionMap} prefix; the {@link Gio.Action} must be present in `g_action_map`.
     * @param gtk_action_group a {@link Gtk.ActionGroup}.
     * @param gtk_action_name the name of the {@link Gtk.Action} to create and add to   `gtk_action_group`.
     * @since 4.0
     */
    function utils_create_gtk_action(
        g_action_map: Gio.ActionMap,
        detailed_g_action_name_with_prefix: string,
        gtk_action_group: Gtk.ActionGroup,
        gtk_action_name: string,
    ): void;
    /**
     * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
     * {@link Gtk.RecentChooserMenu}.
     *
     * This function has been written because the value returned by
     * `gtk_recent_chooser_get_current_uri()` is not updated when {@link Gtk.MenuItem}'s of a
     * {@link Gtk.RecentChooserMenu} are selected/deselected.
     * @param menu a {@link Gtk.RecentChooserMenu}.
     * @param item a {@link Gtk.MenuItem}.
     * @returns the URI of `item`. Free with `g_free()` when no longer needed.
     * @since 2.0
     */
    function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string;
    /**
     * @gir-type Flags
     */
    export namespace FactoryFlags {
        export const $gtype: GObject.GType<FactoryFlags>;
    }

    /**
     * {@link Amtk.FactoryFlags} permits to control how a factory function creates the
     * object, to ignore some steps.
     * @gir-type Flags
     * @since 3.0
     */
    enum FactoryFlags {
        /**
         * No flags.
         */
        FLAGS_NONE,
        /**
         * Do not call `gtk_actionable_set_action_name()`.
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
         *   {@link Gtk.AccelLabel}.
         */
        IGNORE_ACCELS_FOR_DOC,
        /**
         * Do not call
         *   `gtk_application_set_accels_for_action()`.
         */
        IGNORE_ACCELS_FOR_APP,
    }

    namespace ActionInfoCentralStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ActionInfoCentralStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoCentralStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionInfoCentralStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ActionInfoCentralStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoCentralStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoCentralStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ActionInfoCentralStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ActionInfoCentralStore.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_singleton(): ActionInfoCentralStore;

        // Methods

        /**
         * @param action_name an action name.
         * @returns the found {@link Amtk.ActionInfo}, or `null`.
         */
        lookup(action_name: string): ActionInfo;
    }

    namespace ActionInfoStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ActionInfoStore extends GObject.Object {
        static $gtype: GObject.GType<ActionInfoStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionInfoStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ActionInfoStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ActionInfoStore;

        // Signals

        /** @signal */
        connect<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ActionInfoStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ActionInfoStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ActionInfoStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Inserts `info` into `store` and into the {@link Amtk.ActionInfoCentralStore}. Both the
         * `store` and central store must <emphasis>not</emphasis> already contain an
         * {@link Amtk.ActionInfo} with the same action name. The stores take their own
         * reference on `info`.
         * @param info an {@link Amtk.ActionInfo}.
         */
        add(info: ActionInfo): void;
        /**
         * Calls `amtk_action_info_store_add()` for each entry.
         *
         * If `translation_domain` is not `null`, `g_dgettext()` is used to translate the
         * `label` and `tooltip` of each entry before setting them to the {@link Amtk.ActionInfo}.
         *
         * An API similar to `g_action_map_add_action_entries()`.
         * @param entries a pointer to the first item in an array of {@link Amtk.ActionInfoEntry} structs.
         * @param translation_domain a gettext domain, or `null`.
         */
        add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void;
        /**
         * Checks for each {@link Amtk.ActionInfo} of `store` that it has been used (see
         * `amtk_action_info_has_been_used()`). If an {@link Amtk.ActionInfo} has not been used, a
         * warning is printed and might indicate dead code.
         *
         * You probably want to call this function on the application store after
         * creating the menu and toolbar. But it can also be useful for a store provided
         * by a library, to easily see which actions are not used by the application.
         */
        check_all_used(): void;
        /**
         * @param action_name an action name.
         * @returns the found {@link Amtk.ActionInfo}, or `null`.
         */
        lookup(action_name: string): ActionInfo;
    }

    namespace ApplicationWindow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-window': (pspec: GObject.ParamSpec) => void;
            'notify::statusbar': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            statusbar: Gtk.Statusbar;
        }
    }

    /**
     * @gir-type Class
     */
    class ApplicationWindow extends GObject.Object {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The {@link Gtk.ApplicationWindow}.
         * @since 2.0
         * @construct-only
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The {@link Gtk.ApplicationWindow}.
         * @since 2.0
         * @construct-only
         */
        get applicationWindow(): Gtk.ApplicationWindow;
        /**
         * The {@link Gtk.Statusbar}. `null` by default.
         * @since 2.0
         */
        get statusbar(): Gtk.Statusbar;
        set statusbar(val: Gtk.Statusbar);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Amtk.ApplicationWindow} of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a {@link Gtk.ApplicationWindow}.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;

        // Methods

        /**
         * Connects to the {@link Amtk.MenuShell.SignalSignatures.menu_item_selected | Amtk.MenuShell::menu-item-selected} and
         * {@link Amtk.MenuShell.SignalSignatures.menu_item_deselected | Amtk.MenuShell::menu-item-deselected} signals of `menu_shell` to push/pop the
         * long description of {@link Gtk.MenuItem}'s to the {@link Amtk.ApplicationWindow.statusbar}.
         *
         * The long description is retrieved with `amtk_menu_item_get_long_description()`.
         * So `amtk_menu_item_set_long_description()` must have been called, which is the
         * case if the {@link Gtk.MenuItem} has been created with {@link Amtk.Factory}.
         * @param menu_shell a {@link Gtk.MenuShell}.
         */
        connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void;
        /**
         * An alternative to `gtk_recent_chooser_set_show_tips()`. Shows the full path in
         * the {@link Amtk.ApplicationWindow.statusbar} when a {@link Gtk.MenuItem} of `menu` is
         * selected.
         *
         * The full path is retrieved with
         * `amtk_utils_recent_chooser_menu_get_item_uri()`.
         * @param menu a {@link Gtk.RecentChooserMenu}.
         */
        connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void;
        /**
         * Creates a simple and generic {@link Gtk.RecentChooserMenu}.
         *
         * The {@link Gtk.RecentChooser} is configured to show files only recently used with the
         * current application, as returned by `g_get_application_name()`. If recent files
         * are added to the default {@link Gtk.RecentManager} with
         * `gtk_recent_manager_add_item()`, the files will normally show up in the
         * {@link Gtk.RecentChooserMenu}.
         *
         * The {@link Gtk.RecentChooserMenu} is connected to the statusbar with
         * `amtk_application_window_connect_recent_chooser_menu_to_statusbar()`.
         *
         * When the {@link Gtk.RecentChooser.SignalSignatures.item_activated | Gtk.RecentChooser::item-activated} signal is emitted,
         * `g_application_open()` is called (with an empty hint), so the {@link Gio.Application}
         * must have the {@link Gio.ApplicationFlags.HANDLES_OPEN} flag set.
         * @returns a new {@link Gtk.RecentChooserMenu}.
         */
        create_open_recent_menu(): Gtk.Widget;
        /**
         * Creates a {@link Gtk.MenuItem} with a simple and generic {@link Gtk.RecentChooserMenu} as
         * submenu. The {@link Gtk.RecentChooserMenu} is created with
         * `amtk_application_window_create_open_recent_menu()`.
         * @returns a new {@link Gtk.MenuItem}.
         */
        create_open_recent_menu_item(): Gtk.Widget;
        /**
         * @returns the {@link Gtk.ApplicationWindow} of `amtk_window`.
         */
        get_application_window(): Gtk.ApplicationWindow;
        /**
         * @returns the {@link Amtk.ApplicationWindow.statusbar}.
         */
        get_statusbar(): Gtk.Statusbar | null;
        /**
         * Sets the {@link Amtk.ApplicationWindow.statusbar} property.
         * @param statusbar a {@link Gtk.Statusbar}, or `null`.
         */
        set_statusbar(statusbar?: Gtk.Statusbar | null): void;
    }

    namespace Factory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::default-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
            default_flags: FactoryFlags;
            defaultFlags: FactoryFlags;
        }
    }

    /**
     * @gir-type Class
     */
    class Factory extends GObject.Object {
        static $gtype: GObject.GType<Factory>;

        // Properties

        /**
         * The associated {@link Gtk.Application} (it is optional, it can be `null`).
         * {@link Amtk.Factory} has a weak reference to the {@link Gtk.Application}.
         * @since 3.0
         * @construct-only
         */
        get application(): Gtk.Application;
        /**
         * The default {@link Amtk.FactoryFlags}.
         * @since 3.0
         */
        get default_flags(): FactoryFlags;
        set default_flags(val: FactoryFlags);
        /**
         * The default {@link Amtk.FactoryFlags}.
         * @since 3.0
         */
        get defaultFlags(): FactoryFlags;
        set defaultFlags(val: FactoryFlags);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Factory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](application?: Gtk.Application | null): Factory;

        static new_with_default_application(): Factory;

        // Signals

        /** @signal */
        connect<K extends keyof Factory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Factory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Factory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Factory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new {@link Gtk.CheckMenuItem} for `action_name` with the
         * {@link Amtk.Factory.default_flags}.
         *
         * See the documentation of `amtk_factory_create_check_menu_item_full()` for more
         * information.
         * @param action_name an action name.
         * @returns a new {@link Gtk.CheckMenuItem} for `action_name`.
         */
        create_check_menu_item(action_name: string): Gtk.Widget;
        /**
         * This function ignores the {@link Amtk.Factory.default_flags} property and takes the
         * `flags` argument instead.
         *
         * Note that since it is a {@link Gtk.CheckMenuItem} the icon is not set, even if it
         * would be possible with `amtk_menu_item_set_icon_name()`.
         *
         * If the action controls a boolean property, think about using
         * {@link Gio.PropertyAction}.
         * @param action_name an action name.
         * @param flags {@link Amtk.FactoryFlags}.
         * @returns a new {@link Gtk.CheckMenuItem} for `action_name`.
         */
        create_check_menu_item_full(action_name: string, flags: FactoryFlags | null): Gtk.Widget;
        /**
         * Creates a new {@link Gtk.MenuItem} for `action_name` with the
         * {@link Amtk.Factory.default_flags}.
         * @param action_name an action name.
         * @returns a new {@link Gtk.MenuItem} for `action_name`.
         */
        create_menu_item(action_name: string): Gtk.Widget;
        /**
         * This function ignores the {@link Amtk.Factory.default_flags} property and takes the
         * `flags` argument instead.
         * @param action_name an action name.
         * @param flags {@link Amtk.FactoryFlags}.
         * @returns a new {@link Gtk.MenuItem} for `action_name`.
         */
        create_menu_item_full(action_name: string, flags: FactoryFlags | null): Gtk.Widget;
        /**
         * Creates a new {@link Gtk.MenuToolButton} for `action_name` with the
         * {@link Amtk.Factory.default_flags}.
         *
         * See the documentation of `amtk_factory_create_menu_tool_button_full()` for more
         * information.
         * @param action_name an action name.
         * @returns a new {@link Gtk.MenuToolButton} for `action_name`.
         */
        create_menu_tool_button(action_name: string): Gtk.MenuToolButton;
        /**
         * This function ignores the {@link Amtk.Factory.default_flags} property and takes the
         * `flags` argument instead.
         *
         * After calling this function, you need to use the {@link Gtk.MenuToolButton} API to
         * set the menu and also possibly set a tooltip to the arrow.
         * @param action_name an action name.
         * @param flags {@link Amtk.FactoryFlags}.
         * @returns a new {@link Gtk.MenuToolButton} for `action_name`.
         */
        create_menu_tool_button_full(action_name: string, flags: FactoryFlags | null): Gtk.MenuToolButton;
        /**
         * Creates a new {@link Gtk.ToolButton} for `action_name` with the
         * {@link Amtk.Factory.default_flags}.
         * @param action_name an action name.
         * @returns a new {@link Gtk.ToolButton} for `action_name`.
         */
        create_tool_button(action_name: string): Gtk.ToolItem;
        /**
         * This function ignores the {@link Amtk.Factory.default_flags} property and takes the
         * `flags` argument instead.
         * @param action_name an action name.
         * @param flags {@link Amtk.FactoryFlags}.
         * @returns a new {@link Gtk.ToolButton} for `action_name`.
         */
        create_tool_button_full(action_name: string, flags: FactoryFlags | null): Gtk.ToolItem;
        /**
         * @returns the {@link Amtk.Factory.application}.
         */
        get_application(): Gtk.Application | null;
        /**
         * @returns the {@link Amtk.Factory.default_flags}.
         */
        get_default_flags(): FactoryFlags;
        /**
         * Sets the {@link Amtk.Factory.default_flags} property.
         * @param default_flags the new value.
         */
        set_default_flags(default_flags: FactoryFlags | null): void;
    }

    namespace MenuShell {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::menu-item-deselected signal is emitted when the
             * {@link Gtk.MenuItem.SignalSignatures.deselect | Gtk.MenuItem::deselect} signal is emitted on a {@link Gtk.MenuItem} belonging
             * (directly or indirectly through submenus) to `amtk_menu_shell`.
             * @signal
             * @since 2.0
             * @run-first
             */
            'menu-item-deselected': (arg0: Gtk.MenuItem) => void;
            /**
             * The ::menu-item-selected signal is emitted when the
             * {@link Gtk.MenuItem.SignalSignatures.select | Gtk.MenuItem::select} signal is emitted on a {@link Gtk.MenuItem} belonging
             * (directly or indirectly through submenus) to `amtk_menu_shell`.
             * @signal
             * @since 2.0
             * @run-first
             */
            'menu-item-selected': (arg0: Gtk.MenuItem) => void;
            'notify::menu-shell': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            menu_shell: Gtk.MenuShell;
            menuShell: Gtk.MenuShell;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuShell extends GObject.Object {
        static $gtype: GObject.GType<MenuShell>;

        // Properties

        /**
         * The {@link Gtk.MenuShell}.
         * @since 2.0
         * @construct-only
         */
        get menu_shell(): Gtk.MenuShell;
        /**
         * The {@link Gtk.MenuShell}.
         * @since 2.0
         * @construct-only
         */
        get menuShell(): Gtk.MenuShell;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuShell.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuShell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuShell.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuShell.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuShell.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuShell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the {@link Amtk.MenuShell} of `gtk_menu_shell`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
         * @param gtk_menu_shell a {@link Gtk.MenuShell}.
         */
        static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell;

        // Virtual methods

        /**
         * @param menu_item
         * @virtual
         */
        vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void;
        /**
         * @param menu_item
         * @virtual
         */
        vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void;

        // Methods

        /**
         * @returns the {@link Gtk.MenuShell} of `amtk_menu_shell`.
         */
        get_menu_shell(): Gtk.MenuShell;
    }

    /**
     * @gir-type Struct
     */
    class ActionInfo {
        static $gtype: GObject.GType<ActionInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ActionInfo;

        static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo;

        // Methods

        /**
         * @returns a copy of `info`. The copy will have a reference count of one.
         */
        copy(): ActionInfo;
        /**
         * Returns the accelerators. This function never returns `null`, it always
         * returns a `null`-terminated array, to be suitable for
         * `gtk_application_set_accels_for_action()`.
         * @returns a `null`-terminated array of accelerators in the format understood by `gtk_accelerator_parse()`.
         */
        get_accels(): string[];
        /**
         * @returns the action name, or `null`. Example: `"win.save"`.
         */
        get_action_name(): string | null;
        /**
         * @returns the icon name, or `null`.
         */
        get_icon_name(): string | null;
        /**
         * Gets the label. The label has normally a mnemonic.
         * @returns the label (i.e. a short description), or `null`.
         */
        get_label(): string | null;
        /**
         * @returns the tooltip (i.e. a long description), or `null`.
         */
        get_tooltip(): string | null;
        /**
         * Returns whether `info` has been used (for example by an {@link Amtk.Factory}
         * function). See also `amtk_action_info_store_check_all_used()`.
         * @returns whether `info` has been used.
         */
        has_been_used(): boolean;
        /**
         * Mark `info` as used. An {@link Amtk.Factory} function that uses an {@link Amtk.ActionInfo}
         * should call this function. See `amtk_action_info_store_check_all_used()`.
         */
        mark_as_used(): void;
        /**
         * Increments the reference count of `info` by one.
         * @returns the passed in `info`.
         */
        ref(): ActionInfo;
        /**
         * A function similar to `gtk_application_set_accels_for_action()`.
         *
         * `accels` must not be `null`, it must be a `null`-terminated array, to be
         * consistent with `gtk_application_set_accels_for_action()`.
         * @param accels a `null`-terminated array of accelerators in the format understood by `gtk_accelerator_parse()`.
         */
        set_accels(accels: string[]): void;
        /**
         * Sets the action name, for example `"win.save"`.
         * @param action_name the action name.
         */
        set_action_name(action_name: string): void;
        /**
         * @param icon_name the icon name, or `null`.
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets the label with a mnemonic.
         * @param label the label (i.e. a short description), or `null`.
         */
        set_label(label?: string | null): void;
        /**
         * @param tooltip the tooltip (i.e. a long description), or `null`.
         */
        set_tooltip(tooltip?: string | null): void;
        /**
         * Decrements the reference count of `info` by one. If the reference count drops
         * to 0, `info` is freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type ActionInfoCentralStoreClass = typeof ActionInfoCentralStore;
    /**
     * @gir-type Struct
     */
    abstract class ActionInfoCentralStorePrivate {
        static $gtype: GObject.GType<ActionInfoCentralStorePrivate>;
    }

    /**
     * This struct defines a set of information for a single action. It is for use
     * with `amtk_action_info_store_add_entries()`.
     *
     * Like {@link Gio.ActionEntry}, it is permissible to use an incomplete initialiser in
     * order to leave some of the later values as `null`. Additional optional fields
     * may be added in the future.
     * @gir-type Struct
     * @since 2.0
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
    }

    /**
     * @gir-type Alias
     */
    type ActionInfoStoreClass = typeof ActionInfoStore;
    /**
     * @gir-type Struct
     */
    abstract class ActionInfoStorePrivate {
        static $gtype: GObject.GType<ActionInfoStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationWindowClass = typeof ApplicationWindow;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FactoryClass = typeof Factory;
    /**
     * @gir-type Struct
     */
    abstract class FactoryPrivate {
        static $gtype: GObject.GType<FactoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MenuShellClass = typeof MenuShell;
    /**
     * @gir-type Struct
     */
    abstract class MenuShellPrivate {
        static $gtype: GObject.GType<MenuShellPrivate>;
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
