
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
import type Libxfce4util from '@girs/libxfce4util-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Garcon {

    /**
     * Garcon-1.0
     */


    /**
     * @gir-type Enum
     */
    enum MenuLayoutMergeType {
        MENUS,
        FILES,
        ALL,
    }


    /**
     * @gir-type Enum
     */
    enum MenuMergeFileType {
        PATH,
        PARENT,
    }


    /**
     * @gir-type Enum
     */
    export namespace MenuNodeType {
        export const $gtype: GObject.GType<MenuNodeType>;
    }

    /**
     * @gir-type Enum
     */
    enum MenuNodeType {
        INVALID,
        MENU,
        NAME,
        DIRECTORY,
        DIRECTORYDIR,
        DEFAULTDIRECTORYDIRS,
        APPDIR,
        DEFAULTAPPDIRS,
        ONLYUNALLOCATED,
        NOTONLYUNALLOCATED,
        DELETED,
        NOTDELETED,
        INCLUDE,
        EXCLUDE,
        ALL,
        FILENAME,
        CATEGORY,
        OR,
        AND,
        NOT,
        MOVE,
        OLD,
        NEW,
        DEFAULTLAYOUT,
        LAYOUT,
        MENUNAME,
        SEPARATOR,
        MERGE,
        MERGEFILE,
        MERGEDIR,
        MERGEDIRS,
    }


    /**
     * Macro for garcon_set_environment or garcon_set_environment_xdg
     * to set the Xfce Desktop Environment.
     * @since 0.3.0
     */
    const ENVIRONMENT_XFCE: string;

    /**
     * The major version number of the garcon library.
     * Like garcon_major_version, but from the headers used at
     * application compile time, rather than from the library
     * linked against at application run time.
     */
    const MAJOR_VERSION: number;

    /**
     * The micro version number of the garcon library.
     * Like garcon_micro_version, but from the headers used at
     * application compile time, rather than from the library
     * linked against at application run time.
     */
    const MICRO_VERSION: number;

    /**
     * The minor version number of the garcon library.
     * Like garcon_minor_version, but from the headers used at
     * application compile time, rather than from the library
     * linked against at application run time.
     */
    const MINOR_VERSION: number;

    /**
     * Checks that the <systemitem class="library">garcon</systemitem>
     * library in use is compatible with the given version. Generally you
     * would pass in the constants #GARCON_MAJOR_VERSION,
     * #GARCON_MINOR_VERSION and #GARCON_MICRO_VERSION as the three
     * arguments to this function; that produces a check that the library
     * in use is compatible with the version of
     * <systemitem class="library">garcon</systemitem> the application was
     * compiled against.
     * 
     * <example>
     * <title>Checking the runtime version of the garcon library</title>
     * <programlisting>
     * const gchar *mismatch;
     * mismatch = garcon_check_version (GARCON_VERSION_MAJOR,
     *                                  GARCON_VERSION_MINOR,
     *                                  GARCON_VERSION_MICRO);
     * if (G_UNLIKELY (mismatch != NULL))
     *   g_error ("Version mismatch: %<!---->s", mismatch);
     * </programlisting>
     * </example>
     * @param required_major the required major version.
     * @param required_minor the required minor version.
     * @param required_micro the required micro version.
     * @returns `null` if the library is compatible with the given version,          or a string describing the version mismatch. The returned          string is owned by the library and must not be freed or          modified by the caller.
     */
    function check_version(required_major: number, required_minor: number, required_micro: number): string;

    /**
     * @param filename name of .desktop file
     */
    function config_build_paths(filename: string): string[];

    /**
     * Looks for the filename in the users' config directory and then
     * the system config directories.
     * @param filename relative filename of the config resource.
     * @returns the absolute path to the first file in the search path,          that matches `filename` or `null` if no such          file or directory could be found.
     */
    function config_lookup(filename: string): string;

    /**
     * Get the environment set with `garcon_set_environment()`.
     * @returns Name of the desktop environment (e.g. XFCE, KDE, GNOME)          which is used or `null`.
     */
    function get_environment(): string;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__OBJECT_OBJECT(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * Sets (or unsets) the desktop environment for which menus will generated.
     * Menus and menu items belonging to other desktop environments will be
     * ignored. If set to `null`, all menu items are used.
     * @param env Name of the desktop environment for which menus will        be generated (e.g. XFCE, KDE, GNOME or `null`).
     */
    function set_environment(env: string): void;

    /**
     * Set the desktop environment to the envvar XDG_CURRENT_DESKTOP.
     * If this variables is not set, it falls back to `default_env`.
     * 
     * For `fallback_env` you can use for example #GARCON_ENVIRONMENT_XFCE.
     * @param fallback_env fallback value
     * @since 0.3.0
     */
    function set_environment_xdg(fallback_env: string): void;

    namespace Menu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "directory-changed": (arg0: MenuDirectory, arg1: MenuDirectory) => void;
            /**
             * @signal
             * @run-last
             */
            "reload-required": () => void;
            "notify::directory": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MenuElement.ConstructorProps {
            directory: MenuDirectory | null;
            file: Gio.File;
        }
    }

    /**
     * @gir-type Class
     */
    class Menu extends GObject.Object implements MenuElement {
        static $gtype: GObject.GType<Menu>;

        // Properties
        /**
         * The directory entry associated with this menu.
         */
        get directory(): MenuDirectory | null;
        set directory(val: MenuDirectory | null);

        /**
         * The {@link Gio.File} from which the %GarconMenu was loaded.
         * @construct-only
         */
        get file(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Menu.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Menu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](file: Gio.File): Menu;

        static new_applications(): Menu;

        static new_for_path(filename: string): Menu;

        // Signals
        /** @signal */
        connect<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Menu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Menu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Menu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Menu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds `submenu` as a sub menu to `menu`.
         * @param submenu a {@link Garcon.Menu}
         */
        add_menu(submenu: Menu): void;

        /**
         * Returns the {@link Garcon.MenuDirectory} of `menu` or `null` if `menu` has
         * no valid directory element.
         * 
         * The menu directory may contain a lot of useful information about
         * the menu like the display and icon name, desktop environments it
         * should show up in etc.
         * @returns a {@link Garcon.MenuDirectory}
         */
        get_directory(): MenuDirectory | null;

        /**
         * Get all the menu element in `menu`. This contains sub menus, menu items
         * and separators.
         * 
         * Returns a list of {@link Garcon.MenuItem} or `null`. Free the list with
         * `g_list_free()`.
         */
        get_elements(): MenuItem[] | null;

        /**
         * Get the file for `menu`. It refers to the .menu file from which
         * `menu` was or will be loaded.
         * 
         * The returned object should be unreffed with `g_object_unref()`
         * when no longer needed.
         * @returns a {@link Gio.File}.
         */
        get_file(): Gio.File;

        /**
         * Get the item pool of the menu. This pool contains all items in this
         * menu (for that of its submenus).
         * @returns a {@link Garcon.MenuItemPool}.
         */
        get_item_pool(): MenuItemPool;

        /**
         * Returns all {@link Garcon.MenuItem} included in `menu`. The items are
         * sorted by their display names in ascending order.
         * 
         * The caller is responsible to free the returned list using
         * `g_list_free()` when no longer needed.
         * @returns list of {@link Garcon.MenuItem} included in `menu`.
         */
        get_items(): MenuItem[];

        /**
         * Looks in `menu` for a submenu with `name` as name.
         * @param name a sub menu name
         * @returns a {@link Garcon.Menu} or `null`.
         */
        get_menu_with_name(name: string): Menu | null;

        /**
         * Returns a sorted list of {@link Garcon.Menu} submenus of `menu`. The list
         * should be freed with `g_list_free()`.
         * @returns a sorted list of {@link Garcon.Menu}.
         */
        get_menus(): Menu[];

        /**
         * Returns the parent {@link Garcon.Menu} or `menu`.
         * @returns a {@link Garcon.Menu} or `null` if `menu` is the root menu.
         */
        get_parent(): Menu | null;

        /**
         * This function loads the entire menu tree from the file referred to
         * by `menu`. It resolves merges, moves and everything else defined
         * in the menu specification. The resulting tree information is
         * stored within `menu` and can be accessed using the public {@link Garcon.Menu}
         * API afterwards.
         * 
         * `cancellable` can be used to handle blocking I/O when reading data
         * from files during the loading process.
         * 
         * `error` should either be NULL or point to a {@link GLib.Error} return location
         * where errors should be stored in.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if the menu was loaded successfully or          `false` if there was an error or the process was          cancelled.
         */
        load(cancellable: Gio.Cancellable | null): boolean;

        /**
         * @param b 
         */
        equal(b: MenuElement): boolean;

        get_comment(): string;

        get_icon_name(): string;

        get_name(): string;

        get_no_display(): boolean;

        get_show_in_environment(): boolean;

        get_visible(): boolean;

        /**
         * @param other 
         * @virtual
         */
        vfunc_equal(other: MenuElement): boolean;

        /**
         * @virtual
         */
        vfunc_get_comment(): string;

        /**
         * @virtual
         */
        vfunc_get_icon_name(): string;

        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @virtual
         */
        vfunc_get_no_display(): boolean;

        /**
         * @virtual
         */
        vfunc_get_show_in_environment(): boolean;

        /**
         * @virtual
         */
        vfunc_get_visible(): boolean;
    }


    namespace MenuDirectory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::comment": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            comment: string;
            file: Gio.File;
            icon_name: string;
            iconName: string;
            name: string;
            no_display: boolean;
            noDisplay: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuDirectory extends GObject.Object {
        static $gtype: GObject.GType<MenuDirectory>;

        // Properties
        /**
         * Directory description (comment).
         * @default null
         */
        get comment(): string;
        set comment(val: string);

        /**
         * @construct-only
         */
        get file(): Gio.File;

        /**
         * Icon associated with this directory.
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * Icon associated with this directory.
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * Name of the directory.
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * Whether this menu item is hidden in menus.
         * @default false
         */
        get no_display(): boolean;
        set no_display(val: boolean);

        /**
         * Whether this menu item is hidden in menus.
         * @default false
         */
        get noDisplay(): boolean;
        set noDisplay(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuDirectory.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuDirectory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](file: Gio.File): MenuDirectory;

        // Signals
        /** @signal */
        connect<K extends keyof MenuDirectory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuDirectory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuDirectory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuDirectory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuDirectory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuDirectory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks if both directories point to the same file.
         * @param other a {@link Garcon.MenuDirectory}
         * @returns if files are equal `true`, else `false`.
         */
        equal(other: MenuDirectory): boolean;

        /**
         * Get the comment of `directory`.
         * @returns a the description for `directory`.
         */
        get_comment(): string;

        /**
         * Get the {@link Gio.File} for `directory`. The returned object should be
         * unreffed with `g_object_unref()` when no longer needed.
         * @returns a {@link Gio.File}
         */
        get_file(): Gio.File;

        /**
         * Whether `directory` should be hidden.
         * For applications you want to call `garcon_menu_directory_get_visible()`.
         * @returns a the hidden key for `directory`.
         */
        get_hidden(): boolean;

        /**
         * Get the icon name of `directory`.
         * @returns a the icon-name key for `directory`.
         */
        get_icon_name(): string;

        /**
         * Get the name of `directory`.
         * @returns a the name for `directory`.
         */
        get_name(): string;

        /**
         * Whether `directory` should be displayed.
         * For applications you want to call `garcon_menu_directory_get_visible()`.
         * @returns a the no-display key for `directory`.
         */
        get_no_display(): boolean;

        /**
         * Whether `directory` is visible in the current environment
         * which has been set by `garcon_set_environment()`.
         * For applications you want to call `garcon_menu_directory_get_visible()`.
         * @returns `true` is visible in environment, else `false`.
         */
        get_show_in_environment(): boolean;

        /**
         * Check which runs the following checks:
         * `garcon_menu_directory_get_show_in_environment()`,
         * `garcon_menu_directory_get_hidden()` and
         * `garcon_menu_directory_get_no_display()`.
         * @returns if visible `true`, else `false`.
         */
        get_visible(): boolean;

        /**
         * Set the comment of `directory`.
         * @param comment the new description for `directory`.
         */
        set_comment(comment: string): void;

        /**
         * Set the icon name of `directory`.
         * @param icon_name the new icon name for `directory`.
         */
        set_icon_name(icon_name: string): void;

        /**
         * Set the name of `directory`.
         * @param name the new name for `directory`.
         */
        set_name(name: string): void;

        /**
         * Set the NoDisplay key of `directory`.
         * @param no_display whether `directory` should be displayed.
         */
        set_no_display(no_display: boolean): void;
    }


    namespace MenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when {@link Garcon.MenuItem} has been reloaded.
             * @signal
             * @run-first
             */
            changed: () => void;
            "notify::command": (pspec: GObject.ParamSpec) => void;
            "notify::comment": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-id": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::generic-name": (pspec: GObject.ParamSpec) => void;
            "notify::hidden": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-display": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::prefers-non-default-gpu": (pspec: GObject.ParamSpec) => void;
            "notify::requires-terminal": (pspec: GObject.ParamSpec) => void;
            "notify::supports-startup-notification": (pspec: GObject.ParamSpec) => void;
            "notify::try-exec": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MenuElement.ConstructorProps {
            command: string;
            comment: string;
            desktop_id: string;
            desktopId: string;
            file: Gio.File;
            generic_name: string;
            genericName: string;
            hidden: boolean;
            icon_name: string;
            iconName: string;
            name: string;
            no_display: boolean;
            noDisplay: boolean;
            path: string;
            prefers_non_default_gpu: boolean;
            prefersNonDefaultGpu: boolean;
            requires_terminal: boolean;
            requiresTerminal: boolean;
            supports_startup_notification: boolean;
            supportsStartupNotification: boolean;
            try_exec: string;
            tryExec: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuItem extends GObject.Object implements MenuElement {
        static $gtype: GObject.GType<MenuItem>;

        // Properties
        /**
         * Command to be executed when the menu item is clicked.
         * @default null
         */
        get command(): string;
        set command(val: string);

        /**
         * Comment/description for the application. To be displayed e.g. in tooltips of
         * GtkMenuItems.
         * @default null
         */
        get comment(): string;
        set comment(val: string);

        /**
         * The desktop-file id of this application.
         * @default null
         */
        get desktop_id(): string;
        set desktop_id(val: string);

        /**
         * The desktop-file id of this application.
         * @default null
         */
        get desktopId(): string;
        set desktopId(val: string);

        /**
         * The {@link Gio.File} from which the %GarconMenuItem was loaded.
         * @construct-only
         */
        get file(): Gio.File;

        /**
         * GenericName of the application (will be displayed in menus etc.).
         * @default null
         */
        get generic_name(): string;
        set generic_name(val: string);

        /**
         * GenericName of the application (will be displayed in menus etc.).
         * @default null
         */
        get genericName(): string;
        set genericName(val: string);

        /**
         * It means the user deleted (at his level) something that was present
         * (at an upper level, e.g. in the system dirs). It's strictly equivalent
         * to the .desktop file not existing at all, as far as that user is concerned.
         * @default false
         */
        get hidden(): boolean;
        set hidden(val: boolean);

        /**
         * Name of the icon to be displayed for this menu item.
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * Name of the icon to be displayed for this menu item.
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * Name of the application (will be displayed in menus etc.).
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * Whether this menu item is hidden in menus.
         * @default false
         */
        get no_display(): boolean;
        set no_display(val: boolean);

        /**
         * Whether this menu item is hidden in menus.
         * @default false
         */
        get noDisplay(): boolean;
        set noDisplay(val: boolean);

        /**
         * Working directory the application should be started in.
         * @default null
         */
        get path(): string;
        set path(val: string);

        /**
         * If true, the application prefers to be run on a more powerful discrete GPU
         * if available.
         * @default false
         */
        get prefers_non_default_gpu(): boolean;
        set prefers_non_default_gpu(val: boolean);

        /**
         * If true, the application prefers to be run on a more powerful discrete GPU
         * if available.
         * @default false
         */
        get prefersNonDefaultGpu(): boolean;
        set prefersNonDefaultGpu(val: boolean);

        /**
         * Whether this application requires a terinal to be started in.
         * @default false
         */
        get requires_terminal(): boolean;
        set requires_terminal(val: boolean);

        /**
         * Whether this application requires a terinal to be started in.
         * @default false
         */
        get requiresTerminal(): boolean;
        set requiresTerminal(val: boolean);

        /**
         * @default false
         */
        get supports_startup_notification(): boolean;
        set supports_startup_notification(val: boolean);

        /**
         * @default false
         */
        get supportsStartupNotification(): boolean;
        set supportsStartupNotification(val: boolean);

        /**
         * Path to an executable file on disk used to determine if the program
         * is actually installed. If the path is not an absolute path, the file
         * is looked up in the $PATH environment variable. If the file is not
         * present or if it is not executable, the entry may be ignored (not be
         * used in menus, for example).
         * @default null
         */
        get try_exec(): string;
        set try_exec(val: string);

        /**
         * Path to an executable file on disk used to determine if the program
         * is actually installed. If the path is not an absolute path, the file
         * is looked up in the $PATH environment variable. If the file is not
         * present or if it is not executable, the entry may be ignored (not be
         * used in menus, for example).
         * @default null
         */
        get tryExec(): string;
        set tryExec(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](file: Gio.File): MenuItem;

        static new_for_path(filename: string): MenuItem;

        static new_for_uri(uri: string): MenuItem;

        // Signals
        /** @signal */
        connect<K extends keyof MenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        decrement_allocated(): void;

        /**
         * @param action_name 
         * @returns a {@link Garcon.MenuItemAction}
         */
        get_action(action_name: string): MenuItemAction | null;

        /**
         * @returns list of action name
         */
        get_actions(): string[];

        get_allocated(): number;

        /**
         * Returns list of categories
         */
        get_categories(): string[];

        get_command(): string;

        get_comment(): string;

        get_desktop_id(): string;

        /**
         * Get the {@link Gio.File} for `item`. The returned object should be
         * unreffed with `g_object_unref()` when no longer needed.
         * @returns a {@link Gio.File}.
         */
        get_file(): Gio.File;

        get_generic_name(): string;

        get_hidden(): boolean;

        get_icon_name(): string;

        get_keywords(): string[];

        get_name(): string;

        get_no_display(): boolean;

        get_path(): string;

        get_prefers_non_default_gpu(): boolean;

        get_show_in_environment(): boolean;

        get_try_exec(): string;

        get_uri(): string;

        /**
         * @param action_name 
         */
        has_action(action_name: string): boolean;

        /**
         * @param category 
         */
        has_category(category: string): boolean;

        /**
         * @param keyword 
         */
        has_keyword(keyword: string): boolean;

        increment_allocated(): void;

        only_show_in_environment(): boolean;

        ref(): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.ref
        ref(...args: never[]): any;

        /**
         * @param affects_the_outside 
         */
        reload(affects_the_outside: boolean): boolean;

        /**
         * @param file 
         * @param affects_the_outside 
         */
        reload_from_file(file: Gio.File, affects_the_outside: boolean): boolean;

        /**
         * @param action_name 
         * @param action 
         */
        set_action(action_name: string, action: MenuItemAction): void;

        /**
         * @param categories list of categories
         */
        set_categories(categories: string[]): void;

        /**
         * @param command 
         */
        set_command(command: string): void;

        /**
         * @param comment 
         */
        set_comment(comment: string): void;

        /**
         * @param desktop_id 
         */
        set_desktop_id(desktop_id: string): void;

        /**
         * @param generic_name 
         */
        set_generic_name(generic_name: string): void;

        /**
         * @param hidden 
         */
        set_hidden(hidden: boolean): void;

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param keywords list of keywords
         */
        set_keywords(keywords: string[]): void;

        /**
         * @param name 
         */
        set_name(name: string): void;

        /**
         * @param no_display 
         */
        set_no_display(no_display: boolean): void;

        /**
         * @param path 
         */
        set_path(path: string): void;

        /**
         * @param prefers_non_default_gpu 
         */
        set_prefers_non_default_gpu(prefers_non_default_gpu: boolean): void;

        /**
         * @param requires_terminal 
         */
        set_requires_terminal(requires_terminal: boolean): void;

        /**
         * @param supports_startup_notification 
         */
        set_supports_startup_notification(supports_startup_notification: boolean): void;

        /**
         * @param try_exec 
         */
        set_try_exec(try_exec: string): void;

        unref(): void;

        /**
         * @param b 
         */
        equal(b: MenuElement): boolean;

        get_visible(): boolean;

        /**
         * @param other 
         * @virtual
         */
        vfunc_equal(other: MenuElement): boolean;

        /**
         * @virtual
         */
        vfunc_get_comment(): string;

        /**
         * @virtual
         */
        vfunc_get_icon_name(): string;

        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @virtual
         */
        vfunc_get_no_display(): boolean;

        /**
         * @virtual
         */
        vfunc_get_show_in_environment(): boolean;

        /**
         * @virtual
         */
        vfunc_get_visible(): boolean;
    }


    namespace MenuItemAction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::command": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            command: string;
            icon_name: string;
            iconName: string;
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuItemAction extends GObject.Object {
        static $gtype: GObject.GType<MenuItemAction>;

        // Properties
        /**
         * Command to be executed when the application action is clicked.
         * @default null
         */
        get command(): string;
        set command(val: string);

        /**
         * Name of the custom icon associated with this action.
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * Name of the custom icon associated with this action.
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * Name of the application action (will be displayed in menus etc.).
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItemAction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuItemAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MenuItemAction;

        // Signals
        /** @signal */
        connect<K extends keyof MenuItemAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItemAction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuItemAction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItemAction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuItemAction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuItemAction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods
        get_command(): string;

        get_icon_name(): string;

        get_name(): string;

        ref(): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.ref
        ref(...args: never[]): any;

        /**
         * @param command 
         */
        set_command(command: string): void;

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param name 
         */
        set_name(name: string): void;

        unref(): void;
    }


    namespace MenuItemCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MenuItemCache extends GObject.Object {
        static $gtype: GObject.GType<MenuItemCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItemCache.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuItemCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static get_default(): MenuItemCache;

        // Signals
        /** @signal */
        connect<K extends keyof MenuItemCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItemCache.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuItemCache.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItemCache.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuItemCache.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuItemCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param func 
         */
        foreach(func: GLib.HFunc): void;

        invalidate(): void;

        /**
         * @param file 
         */
        invalidate_file(file: Gio.File): void;

        /**
         * @param uri URI to look for
         * @param desktop_id desktop id to update
         * @returns a {@link Garcon.MenuItem}
         */
        lookup(uri: string, desktop_id: string): MenuItem | null;
    }


    namespace MenuItemPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MenuItemPool extends GObject.Object {
        static $gtype: GObject.GType<MenuItemPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuItemPool.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuItemPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MenuItemPool;

        // Signals
        /** @signal */
        connect<K extends keyof MenuItemPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItemPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuItemPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuItemPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuItemPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuItemPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param node 
         */
        apply_exclude_rule(node: GLib.Node): void;

        clear(): void;

        /**
         * @param func 
         */
        foreach(func: GLib.HFunc): void;

        get_empty(): boolean;

        /**
         * @param item a {@link Garcon.MenuItem}
         */
        insert(item: MenuItem): void;

        /**
         * @param desktop_id .desktop file
         * @returns a {@link Garcon.MenuItem} object
         */
        lookup(desktop_id: string): MenuItem;

        /**
         * @param file a GFile instance
         * @returns a {@link Garcon.MenuItem} object
         */
        lookup_file(file: Gio.File): MenuItem;
    }


    namespace MenuMerger {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::tree-provider": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MenuTreeProvider.ConstructorProps {
            tree_provider: MenuTreeProvider;
            treeProvider: MenuTreeProvider;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuMerger extends GObject.Object implements MenuTreeProvider {
        static $gtype: GObject.GType<MenuMerger>;

        // Properties
        /**
         * @construct-only
         */
        get tree_provider(): MenuTreeProvider;

        /**
         * @construct-only
         */
        get treeProvider(): MenuTreeProvider;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuMerger.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuMerger.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](provider: MenuTreeProvider): MenuMerger;

        // Signals
        /** @signal */
        connect<K extends keyof MenuMerger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuMerger.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuMerger.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuMerger.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuMerger.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuMerger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param merge_files list of files to merge
         * @param merge_dirs list of menu directories to merge
         * @param cancellable 
         */
        run(merge_files: string[], merge_dirs: string[], cancellable: Gio.Cancellable | null): boolean;

        get_file(): Gio.File;

        /**
         * @virtual
         */
        vfunc_get_file(): Gio.File;
    }


    namespace MenuNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::node-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node_type: MenuNodeType;
            nodeType: MenuNodeType;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuNode extends GObject.Object {
        static $gtype: GObject.GType<MenuNode>;

        // Properties
        /**
         * @default Garcon.MenuNodeType.MENU
         */
        get node_type(): MenuNodeType;
        set node_type(val: MenuNodeType);

        /**
         * @default Garcon.MenuNodeType.MENU
         */
        get nodeType(): MenuNodeType;
        set nodeType(val: MenuNodeType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuNode.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](node_type: MenuNodeType): MenuNode;

        // Signals
        /** @signal */
        connect<K extends keyof MenuNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuNode.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuNode.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuNode.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuNode.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param tree 
         * @param other_tree 
         */
        static tree_compare(tree: GLib.Node, other_tree: GLib.Node): number;

        /**
         * @param tree 
         */
        static tree_free(tree: GLib.Node): void;

        /**
         * @param tree 
         */
        static tree_free_data(tree: GLib.Node): void;

        /**
         * @param tree 
         * @param type 
         */
        static tree_get_boolean_child(tree: GLib.Node, type: MenuNodeType): boolean;

        /**
         * @param tree a GNode
         * @param type type for the menu nodes
         * @param reverse 
         */
        static tree_get_child_nodes(tree: GLib.Node, type: MenuNodeType, reverse: boolean): GLib.Node[];

        /**
         * @param tree 
         */
        static tree_get_layout_merge_type(tree: GLib.Node): MenuLayoutMergeType;

        /**
         * @param tree 
         */
        static tree_get_merge_file_filename(tree: GLib.Node): string;

        /**
         * @param tree 
         */
        static tree_get_merge_file_type(tree: GLib.Node): MenuMergeFileType;

        /**
         * @param tree 
         */
        static tree_get_node_type(tree: GLib.Node): MenuNodeType;

        /**
         * @param tree 
         */
        static tree_get_string(tree: GLib.Node): string;

        /**
         * @param tree 
         * @param type 
         */
        static tree_get_string_child(tree: GLib.Node, type: MenuNodeType): string;

        /**
         * @param tree a {@link GLib.Node} instance
         * @param type type for the menu nodes
         * @param reverse 
         */
        static tree_get_string_children(tree: GLib.Node, type: MenuNodeType, reverse: boolean): GLib.Node[];

        /**
         * @param tree 
         * @param item 
         */
        static tree_rule_matches(tree: GLib.Node, item: MenuItem): boolean;

        /**
         * @param tree 
         * @param filename 
         */
        static tree_set_merge_file_filename(tree: GLib.Node, filename: string): void;

        /**
         * @param tree 
         * @param value 
         */
        static tree_set_string(tree: GLib.Node, value: string): void;

        // Methods
        /**
         * @param data 
         * @returns a {@link Garcon.MenuNode}
         */
        copy(data: null): MenuNode;

        get_merge_file_filename(): string;

        get_merge_file_type(): MenuMergeFileType;

        get_node_type(): MenuNodeType;

        get_string(): string;

        /**
         * @param filename 
         */
        set_merge_file_filename(filename: string): void;

        /**
         * @param type 
         */
        set_merge_file_type(type: MenuMergeFileType): void;

        /**
         * @param value 
         */
        set_string(value: string): void;
    }


    namespace MenuParser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::file": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MenuTreeProvider.ConstructorProps {
            file: Gio.File;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuParser extends GObject.Object implements MenuTreeProvider {
        static $gtype: GObject.GType<MenuParser>;

        // Properties
        /**
         * @construct-only
         */
        get file(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuParser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](file: Gio.File): MenuParser;

        // Signals
        /** @signal */
        connect<K extends keyof MenuParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuParser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuParser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuParser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param cancellable 
         */
        run(cancellable: Gio.Cancellable | null): boolean;

        get_file(): Gio.File;

        /**
         * @virtual
         */
        vfunc_get_file(): Gio.File;
    }


    namespace MenuSeparator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, MenuElement.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MenuSeparator extends GObject.Object implements MenuElement {
        static $gtype: GObject.GType<MenuSeparator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuSeparator.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MenuSeparator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static get_default(): MenuSeparator;

        // Signals
        /** @signal */
        connect<K extends keyof MenuSeparator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuSeparator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MenuSeparator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MenuSeparator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MenuSeparator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MenuSeparator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param b 
         */
        equal(b: MenuElement): boolean;

        get_comment(): string;

        get_icon_name(): string;

        get_name(): string;

        get_no_display(): boolean;

        get_show_in_environment(): boolean;

        get_visible(): boolean;

        /**
         * @param other 
         * @virtual
         */
        vfunc_equal(other: MenuElement): boolean;

        /**
         * @virtual
         */
        vfunc_get_comment(): string;

        /**
         * @virtual
         */
        vfunc_get_icon_name(): string;

        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @virtual
         */
        vfunc_get_no_display(): boolean;

        /**
         * @virtual
         */
        vfunc_get_show_in_environment(): boolean;

        /**
         * @virtual
         */
        vfunc_get_visible(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type MenuClass = typeof Menu;

    /**
     * @gir-type Alias
     */
    type MenuDirectoryClass = typeof MenuDirectory;

    /**
     * @gir-type Struct
     */
    abstract class MenuDirectoryPrivate {
        static $gtype: GObject.GType<MenuDirectoryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuElementIface = typeof MenuElement;

    /**
     * @gir-type Alias
     */
    type MenuItemActionClass = typeof MenuItemAction;

    /**
     * @gir-type Struct
     */
    abstract class MenuItemActionPrivate {
        static $gtype: GObject.GType<MenuItemActionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuItemCacheClass = typeof MenuItemCache;

    /**
     * @gir-type Struct
     */
    abstract class MenuItemCachePrivate {
        static $gtype: GObject.GType<MenuItemCachePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuItemClass = typeof MenuItem;

    /**
     * @gir-type Alias
     */
    type MenuItemPoolClass = typeof MenuItemPool;

    /**
     * @gir-type Struct
     */
    abstract class MenuItemPoolPrivate {
        static $gtype: GObject.GType<MenuItemPoolPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class MenuItemPrivate {
        static $gtype: GObject.GType<MenuItemPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuMergerClass = typeof MenuMerger;

    /**
     * @gir-type Struct
     */
    abstract class MenuMergerPrivate {
        static $gtype: GObject.GType<MenuMergerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuNodeClass = typeof MenuNode;

    /**
     * @gir-type Alias
     */
    type MenuParserClass = typeof MenuParser;

    /**
     * @gir-type Struct
     */
    abstract class MenuParserPrivate {
        static $gtype: GObject.GType<MenuParserPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class MenuPrivate {
        static $gtype: GObject.GType<MenuPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MenuSeparatorClass = typeof MenuSeparator;

    /**
     * @gir-type Alias
     */
    type MenuTreeProviderIface = typeof MenuTreeProvider;

    /**
     * @gir-type Struct
     */
    class MenuNodeData {
        static $gtype: GObject.GType<MenuNodeData>;
    }


    namespace MenuElement {
        /**
         * Interface for implementing MenuElement.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param other 
             * @virtual
             */
            vfunc_equal(other: MenuElement): boolean;

            /**
             * @virtual
             */
            vfunc_get_comment(): string;

            /**
             * @virtual
             */
            vfunc_get_icon_name(): string;

            /**
             * @virtual
             */
            vfunc_get_name(): string;

            /**
             * @virtual
             */
            vfunc_get_no_display(): boolean;

            /**
             * @virtual
             */
            vfunc_get_show_in_environment(): boolean;

            /**
             * @virtual
             */
            vfunc_get_visible(): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MenuElementNamespace {
        $gtype: GObject.GType<MenuElement>;
        prototype: MenuElement;
    }
    /**
     * @gir-type Interface
     */
    interface MenuElement extends GObject.Object, MenuElement.Interface {

        // Methods
        /**
         * @param b 
         */
        equal(b: MenuElement): boolean;

        get_comment(): string;

        get_icon_name(): string;

        get_name(): string;

        get_no_display(): boolean;

        get_show_in_environment(): boolean;

        get_visible(): boolean;
    }


    export const MenuElement: MenuElementNamespace & {
        new (): MenuElement; // This allows `obj instanceof MenuElement`
    };

    namespace MenuTreeProvider {
        /**
         * Interface for implementing MenuTreeProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_file(): Gio.File;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MenuTreeProviderNamespace {
        $gtype: GObject.GType<MenuTreeProvider>;
        prototype: MenuTreeProvider;
    }
    /**
     * @gir-type Interface
     */
    interface MenuTreeProvider extends GObject.Object, MenuTreeProvider.Interface {

        // Methods
        get_file(): Gio.File;
    }


    export const MenuTreeProvider: MenuTreeProviderNamespace & {
        new (): MenuTreeProvider; // This allows `obj instanceof MenuTreeProvider`
    };

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

export default Garcon;

// END
