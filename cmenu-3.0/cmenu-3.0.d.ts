/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace CMenu {
    /**
     * CMenu-3.0
     */

    export namespace TreeItemType {
        export const $gtype: GObject.GType<TreeItemType>;
    }

    enum TreeItemType {
        INVALID,
        DIRECTORY,
        ENTRY,
        SEPARATOR,
        HEADER,
        ALIAS,
    }
    const DESKTOPAPPINFO_FLATPAK_SUFFIX: string;

    export namespace TreeFlags {
        export const $gtype: GObject.GType<TreeFlags>;
    }

    enum TreeFlags {
        NONE,
        INCLUDE_EXCLUDED,
        SHOW_EMPTY,
        INCLUDE_NODISPLAY,
        SHOW_ALL_SEPARATORS,
        SORT_DISPLAY_NAME,
        INCLUDE_UNALLOCATED,
    }
    module DesktopAppInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AppInfo.ConstructorProps {}
    }

    class DesktopAppInfo extends GObject.Object implements Gio.AppInfo {
        static $gtype: GObject.GType<DesktopAppInfo>;

        // Constructors

        constructor(properties?: Partial<DesktopAppInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](desktop_id: string): DesktopAppInfo;

        static new_from_filename(filename: string): DesktopAppInfo;

        static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo;

        // Methods

        /**
         * Gets the user-visible display name of the "additional application
         * action" specified by `action_name`.
         *
         * This corresponds to the "Name" key within the keyfile group for the
         * action.
         * @param action_name the name of the action as from   gmenu_desktopappinfo_list_actions()
         * @returns the locale-specific action name
         */
        get_action_name(action_name: string): string;
        /**
         * Looks up a boolean value in the keyfile backing `info`.
         *
         * The `key` is looked up in the "Desktop Entry" group.
         * @param key the key to look up
         * @returns the boolean value, or %FALSE if the key     is not found
         */
        get_boolean(key: string): boolean;
        /**
         * Gets the categories from the desktop file.
         * @returns The unparsed Categories key from the desktop file;     i.e. no attempt is made to split it by ';' or validate it.
         */
        get_categories(): string;
        /**
         * When `info` was created from a known filename, return it.  In some
         * situations such as the #GMenuDesktopAppInfo returned from
         * gmenu_desktopappinfo_new_from_keyfile(), this function will return %NULL.
         * @returns The full path to the file for @info,     or %NULL if not known.
         */
        get_filename(): string;
        /**
         * This function looks up the "X-Flatpak" key of the [Desktop Entry] group,
         * which contains the Flatpak App ID
         * @returns the flatpak app id or %NULL
         */
        get_flatpak_app_id(): string | null;
        /**
         * Gets the generic name from the destkop file.
         * @returns The value of the GenericName key
         */
        get_generic_name(): string;
        get_is_flatpak(): boolean;
        /**
         * A desktop file is hidden if the Hidden key in it is
         * set to True.
         * @returns %TRUE if hidden, %FALSE otherwise.
         */
        get_is_hidden(): boolean;
        /**
         * Gets the keywords from the desktop file.
         * @returns The value of the Keywords key
         */
        get_keywords(): string[];
        /**
         * Looks up a localized string value in the keyfile backing `info`
         * translated to the current locale.
         *
         * The `key` is looked up in the "Desktop Entry" group.
         * @param key the key to look up
         * @returns a newly allocated string, or %NULL if the key     is not found
         */
        get_locale_string(key: string): string | null;
        /**
         * Gets the value of the NoDisplay key, which helps determine if the
         * application info should be shown in menus. See
         * #G_KEY_FILE_DESKTOP_KEY_NO_DISPLAY and g_app_info_should_show().
         * @returns The value of the NoDisplay key
         */
        get_nodisplay(): boolean;
        /**
         * Checks if the application info should be shown in menus that list available
         * applications for a specific name of the desktop, based on the
         * `OnlyShowIn` and `NotShowIn` keys.
         *
         * `desktop_env` should typically be given as %NULL, in which case the
         * `XDG_CURRENT_DESKTOP` environment variable is consulted.  If you want
         * to override the default mechanism then you may specify `desktop_env,`
         * but this is not recommended.
         *
         * Note that g_app_info_should_show() for `info` will include this check (with
         * %NULL for `desktop_env)` as well as additional checks.
         * @param desktop_env a string specifying a desktop name
         * @returns %TRUE if the @info should be shown in @desktop_env according to the `OnlyShowIn` and `NotShowIn` keys, %FALSE otherwise.
         */
        get_show_in(desktop_env?: string | null): boolean;
        /**
         * Retrieves the StartupWMClass field from `info`. This represents the
         * WM_CLASS property of the main window of the application, if launched
         * through `info`.
         *
         * Note: The returned value contain the suffix ":flatpak" if `info` specifies a flatpak app
         * and if the desktop file has a StartupWMClass
         * @returns the startup WM class, or %NULL if none is set in the desktop file.
         */
        get_startup_wm_class(): string;
        /**
         * Looks up a string value in the keyfile backing `info`.
         *
         * The `key` is looked up in the "Desktop Entry" group.
         * @param key the key to look up
         * @returns a newly allocated string, or %NULL if the key     is not found
         */
        get_string(key: string): string;
        /**
         * Returns whether `key` exists in the "Desktop Entry" group
         * of the keyfile backing `info`.
         * @param key the key to look up
         * @returns %TRUE if the @key exists
         */
        has_key(key: string): boolean;
        /**
         * Activates the named application action.
         *
         * You may only call this function on action names that were
         * returned from g_desktop_app_info_list_actions().
         *
         * Note that if the main entry of the desktop file indicates that the
         * application supports startup notification, and `launch_context` is
         * non-%NULL, then startup notification will be used when activating the
         * action (and as such, invocation of the action on the receiving side
         * must signal the end of startup notification when it is completed).
         * This is the expected behaviour of applications declaring additional
         * actions, as per the desktop file specification.
         *
         * As with g_app_info_launch() there is no way to detect failures that
         * occur while using this function.
         * @param action_name the name of the action as from   g_desktop_app_info_list_actions()
         * @param launch_context a #GAppLaunchContext
         */
        launch_action(action_name: string, launch_context?: Gio.AppLaunchContext | null): void;
        /**
         * This function performs the equivalent of g_app_info_launch_uris(),
         * but is intended primarily for operating system components that
         * launch applications.  Ordinary applications should use
         * g_app_info_launch_uris().
         *
         * If the application is launched via GSpawn, then `spawn_flags,` `user_setup`
         * and `user_setup_data` are used for the call to g_spawn_async().
         * Additionally, `pid_callback` (with `pid_callback_data)` will be called to
         * inform about the PID of the created process. See g_spawn_async_with_pipes()
         * for information on certain parameter conditions that can enable an
         * optimized posix_spawn() codepath to be used.
         *
         * If application launching occurs via some other mechanism (eg: D-Bus
         * activation) then `spawn_flags,` `user_setup,` `user_setup_data,`
         * `pid_callback` and `pid_callback_data` are ignored.
         * @param uris List of URIs
         * @param launch_context a #GAppLaunchContext
         * @param spawn_flags #GSpawnFlags, used for each process
         * @returns %TRUE on successful launch, %FALSE otherwise.
         */
        launch_uris_as_manager(
            uris: string[],
            launch_context: Gio.AppLaunchContext | null,
            spawn_flags: GLib.SpawnFlags,
        ): boolean;
        /**
         * Returns the list of "additional application actions" supported on the
         * desktop file, as per the desktop file specification.
         *
         * As per the specification, this is the list of actions that are
         * explicitly listed in the "Actions" key of the [Desktop Entry] group.
         * @returns a list of strings, always non-%NULL
         */
        list_actions(): string[];

        // Inherited methods
        /**
         * Adds a content type to the application information to indicate the
         * application is capable of opening files with the given content type.
         * @param content_type a string.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        add_supports_type(content_type: string): boolean;
        /**
         * Obtains the information whether the [iface`Gio`.AppInfo] can be deleted.
         * See [method`Gio`.AppInfo.delete].
         * @returns `TRUE` if @appinfo can be deleted
         */
        can_delete(): boolean;
        /**
         * Checks if a supported content type can be removed from an application.
         * @returns `TRUE` if it is possible to remove supported content types from a   given @appinfo, `FALSE` if not.
         */
        can_remove_supports_type(): boolean;
        /**
         * Tries to delete a [iface`Gio`.AppInfo].
         *
         * On some platforms, there may be a difference between user-defined
         * [iface`Gio`.AppInfo]s which can be deleted, and system-wide ones which cannot.
         * See [method`Gio`.AppInfo.can_delete].
         * @returns `TRUE` if @appinfo has been deleted
         */
        ['delete'](): boolean;
        /**
         * Creates a duplicate of a [iface`Gio`.AppInfo].
         * @returns a duplicate of @appinfo.
         */
        dup(): Gio.AppInfo;
        /**
         * Checks if two [iface`Gio`.AppInfo]s are equal.
         *
         * Note that the check *may not* compare each individual field, and only does
         * an identity check. In case detecting changes in the contents is needed,
         * program code must additionally compare relevant fields.
         * @param appinfo2 the second [iface@Gio.AppInfo].
         * @returns `TRUE` if @appinfo1 is equal to @appinfo2. `FALSE` otherwise.
         */
        equal(appinfo2: Gio.AppInfo): boolean;
        /**
         * Gets the commandline with which the application will be
         * started.
         * @returns a string containing the @appinfo’s   commandline, or `NULL` if this information is not available
         */
        get_commandline(): string | null;
        /**
         * Gets a human-readable description of an installed application.
         * @returns a string containing a description of the application @appinfo, or `NULL` if none.
         */
        get_description(): string | null;
        /**
         * Gets the display name of the application. The display name is often more
         * descriptive to the user than the name itself.
         * @returns the display name of the application for @appinfo, or the name if no display name is available.
         */
        get_display_name(): string;
        /**
         * Gets the executable’s name for the installed application.
         *
         * This is intended to be used for debugging or labelling what program is going
         * to be run. To launch the executable, use [method`Gio`.AppInfo.launch] and related
         * functions, rather than spawning the return value from this function.
         * @returns a string containing the @appinfo’s application binaries name
         */
        get_executable(): string;
        /**
         * Gets the icon for the application.
         * @returns the default [iface@Gio.Icon] for   @appinfo or `NULL` if there is no default icon.
         */
        get_icon(): Gio.Icon | null;
        /**
         * Gets the ID of an application. An id is a string that identifies the
         * application. The exact format of the id is platform dependent. For instance,
         * on Unix this is the desktop file id from the xdg menu specification.
         *
         * Note that the returned ID may be `NULL`, depending on how the `appinfo` has
         * been constructed.
         * @returns a string containing the application’s ID.
         */
        get_id(): string | null;
        /**
         * Gets the installed name of the application.
         * @returns the name of the application for @appinfo.
         */
        get_name(): string;
        /**
         * Retrieves the list of content types that `app_info` claims to support.
         * If this information is not provided by the environment, this function
         * will return `NULL`.
         *
         * This function does not take in consideration associations added with
         * [method`Gio`.AppInfo.add_supports_type], but only those exported directly by
         * the application.
         * @returns a list of content types.
         */
        get_supported_types(): string[];
        /**
         * Launches the application. Passes `files` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly.
         *
         * To launch the application without arguments pass a `NULL` `files` list.
         *
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         *
         * Some URIs can be changed when passed through a GFile (for instance
         * unsupported URIs with strange formats like mailto:), so if you have
         * a textual URI you want to pass in as argument, consider using
         * [method`Gio`.AppInfo.launch_uris] instead.
         *
         * The launched application inherits the environment of the launching
         * process, but it can be modified with [method`Gio`.AppLaunchContext.setenv]
         * and [method`Gio`.AppLaunchContext.unsetenv].
         *
         * On UNIX, this function sets the `GIO_LAUNCHED_DESKTOP_FILE`
         * environment variable with the path of the launched desktop file and
         * `GIO_LAUNCHED_DESKTOP_FILE_PID` to the process id of the launched
         * process. This can be used to ignore `GIO_LAUNCHED_DESKTOP_FILE`,
         * should it be inherited by further processes. The `DISPLAY`,
         * `XDG_ACTIVATION_TOKEN` and `DESKTOP_STARTUP_ID` environment
         * variables are also set, based on information provided in `context`.
         * @param files a list of [iface@Gio.File] objects
         * @param context the launch context
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean;
        /**
         * Launches the application. This passes the `uris` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly. If the application only supports
         * one URI per invocation as part of their command-line, multiple instances
         * of the application will be spawned.
         *
         * To launch the application without arguments pass a `NULL` `uris` list.
         *
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean;
        /**
         * Async version of [method`Gio`.AppInfo.launch_uris].
         *
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * [func`Gio`.AppInfo.launch_default_for_uri_async].
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a [class@Gio.Cancellable]
         */
        launch_uris_async(
            uris?: string[] | null,
            context?: Gio.AppLaunchContext | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Async version of [method`Gio`.AppInfo.launch_uris].
         *
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * [func`Gio`.AppInfo.launch_default_for_uri_async].
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a [class@Gio.Cancellable]
         * @param callback a [type@Gio.AsyncReadyCallback] to call   when the request is done
         */
        launch_uris_async(
            uris: string[] | null,
            context: Gio.AppLaunchContext | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Async version of [method`Gio`.AppInfo.launch_uris].
         *
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * [func`Gio`.AppInfo.launch_default_for_uri_async].
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a [class@Gio.Cancellable]
         * @param callback a [type@Gio.AsyncReadyCallback] to call   when the request is done
         */
        launch_uris_async(
            uris?: string[] | null,
            context?: Gio.AppLaunchContext | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes a [method`Gio`.AppInfo.launch_uris_async] operation.
         * @param result the async result
         * @returns `TRUE` on successful launch, `FALSE` otherwise.
         */
        launch_uris_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes a supported type from an application, if possible.
         * @param content_type a string.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        remove_supports_type(content_type: string): boolean;
        /**
         * Sets the application as the default handler for the given file extension.
         * @param extension a string containing the file extension (without   the dot).
         * @returns `TRUE` on success, `FALSE` on error.
         */
        set_as_default_for_extension(extension: string): boolean;
        /**
         * Sets the application as the default handler for a given type.
         * @param content_type the content type.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        set_as_default_for_type(content_type: string): boolean;
        /**
         * Sets the application as the last used application for a given type. This
         * will make the application appear as first in the list returned by
         * [func`Gio`.AppInfo.get_recommended_for_type], regardless of the default
         * application for that content type.
         * @param content_type the content type.
         * @returns `TRUE` on success, `FALSE` on error.
         */
        set_as_last_used_for_type(content_type: string): boolean;
        /**
         * Checks if the application info should be shown in menus that
         * list available applications.
         * @returns `TRUE` if the @appinfo should be shown, `FALSE` otherwise.
         */
        should_show(): boolean;
        /**
         * Checks if the application accepts files as arguments.
         * @returns `TRUE` if the @appinfo supports files.
         */
        supports_files(): boolean;
        /**
         * Checks if the application supports reading files and directories from URIs.
         * @returns `TRUE` if the @appinfo supports URIs.
         */
        supports_uris(): boolean;
        /**
         * Adds a content type to the application information to indicate the
         * application is capable of opening files with the given content type.
         * @param content_type a string.
         */
        vfunc_add_supports_type(content_type: string): boolean;
        /**
         * Obtains the information whether the [iface`Gio`.AppInfo] can be deleted.
         * See [method`Gio`.AppInfo.delete].
         */
        vfunc_can_delete(): boolean;
        /**
         * Checks if a supported content type can be removed from an application.
         */
        vfunc_can_remove_supports_type(): boolean;
        /**
         * Tries to delete a [iface`Gio`.AppInfo].
         *
         * On some platforms, there may be a difference between user-defined
         * [iface`Gio`.AppInfo]s which can be deleted, and system-wide ones which cannot.
         * See [method`Gio`.AppInfo.can_delete].
         */
        vfunc_do_delete(): boolean;
        /**
         * Creates a duplicate of a [iface`Gio`.AppInfo].
         */
        vfunc_dup(): Gio.AppInfo;
        /**
         * Checks if two [iface`Gio`.AppInfo]s are equal.
         *
         * Note that the check *may not* compare each individual field, and only does
         * an identity check. In case detecting changes in the contents is needed,
         * program code must additionally compare relevant fields.
         * @param appinfo2 the second [iface@Gio.AppInfo].
         */
        vfunc_equal(appinfo2: Gio.AppInfo): boolean;
        /**
         * Gets the commandline with which the application will be
         * started.
         */
        vfunc_get_commandline(): string | null;
        /**
         * Gets a human-readable description of an installed application.
         */
        vfunc_get_description(): string | null;
        /**
         * Gets the display name of the application. The display name is often more
         * descriptive to the user than the name itself.
         */
        vfunc_get_display_name(): string;
        /**
         * Gets the executable’s name for the installed application.
         *
         * This is intended to be used for debugging or labelling what program is going
         * to be run. To launch the executable, use [method`Gio`.AppInfo.launch] and related
         * functions, rather than spawning the return value from this function.
         */
        vfunc_get_executable(): string;
        /**
         * Gets the icon for the application.
         */
        vfunc_get_icon(): Gio.Icon | null;
        /**
         * Gets the ID of an application. An id is a string that identifies the
         * application. The exact format of the id is platform dependent. For instance,
         * on Unix this is the desktop file id from the xdg menu specification.
         *
         * Note that the returned ID may be `NULL`, depending on how the `appinfo` has
         * been constructed.
         */
        vfunc_get_id(): string | null;
        /**
         * Gets the installed name of the application.
         */
        vfunc_get_name(): string;
        /**
         * Retrieves the list of content types that `app_info` claims to support.
         * If this information is not provided by the environment, this function
         * will return `NULL`.
         *
         * This function does not take in consideration associations added with
         * [method`Gio`.AppInfo.add_supports_type], but only those exported directly by
         * the application.
         */
        vfunc_get_supported_types(): string[];
        /**
         * Launches the application. Passes `files` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly.
         *
         * To launch the application without arguments pass a `NULL` `files` list.
         *
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         *
         * Some URIs can be changed when passed through a GFile (for instance
         * unsupported URIs with strange formats like mailto:), so if you have
         * a textual URI you want to pass in as argument, consider using
         * [method`Gio`.AppInfo.launch_uris] instead.
         *
         * The launched application inherits the environment of the launching
         * process, but it can be modified with [method`Gio`.AppLaunchContext.setenv]
         * and [method`Gio`.AppLaunchContext.unsetenv].
         *
         * On UNIX, this function sets the `GIO_LAUNCHED_DESKTOP_FILE`
         * environment variable with the path of the launched desktop file and
         * `GIO_LAUNCHED_DESKTOP_FILE_PID` to the process id of the launched
         * process. This can be used to ignore `GIO_LAUNCHED_DESKTOP_FILE`,
         * should it be inherited by further processes. The `DISPLAY`,
         * `XDG_ACTIVATION_TOKEN` and `DESKTOP_STARTUP_ID` environment
         * variables are also set, based on information provided in `context`.
         * @param files a list of [iface@Gio.File] objects
         * @param context the launch context
         */
        vfunc_launch(files?: Gio.File[] | null, context?: Gio.AppLaunchContext | null): boolean;
        /**
         * Launches the application. This passes the `uris` to the launched application
         * as arguments, using the optional `context` to get information
         * about the details of the launcher (like what screen it is on).
         * On error, `error` will be set accordingly. If the application only supports
         * one URI per invocation as part of their command-line, multiple instances
         * of the application will be spawned.
         *
         * To launch the application without arguments pass a `NULL` `uris` list.
         *
         * Note that even if the launch is successful the application launched
         * can fail to start if it runs into problems during startup. There is
         * no way to detect this.
         * @param uris a list of URIs to launch.
         * @param context the launch context
         */
        vfunc_launch_uris(uris?: string[] | null, context?: Gio.AppLaunchContext | null): boolean;
        /**
         * Async version of [method`Gio`.AppInfo.launch_uris].
         *
         * The `callback` is invoked immediately after the application launch, but it
         * waits for activation in case of D-Bus–activated applications and also provides
         * extended error information for sandboxed applications, see notes for
         * [func`Gio`.AppInfo.launch_default_for_uri_async].
         * @param uris a list of URIs to launch.
         * @param context the launch context
         * @param cancellable a [class@Gio.Cancellable]
         * @param callback a [type@Gio.AsyncReadyCallback] to call   when the request is done
         */
        vfunc_launch_uris_async(
            uris?: string[] | null,
            context?: Gio.AppLaunchContext | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a [method`Gio`.AppInfo.launch_uris_async] operation.
         * @param result the async result
         */
        vfunc_launch_uris_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes a supported type from an application, if possible.
         * @param content_type a string.
         */
        vfunc_remove_supports_type(content_type: string): boolean;
        /**
         * Sets the application as the default handler for the given file extension.
         * @param extension a string containing the file extension (without   the dot).
         */
        vfunc_set_as_default_for_extension(extension: string): boolean;
        /**
         * Sets the application as the default handler for a given type.
         * @param content_type the content type.
         */
        vfunc_set_as_default_for_type(content_type: string): boolean;
        /**
         * Sets the application as the last used application for a given type. This
         * will make the application appear as first in the list returned by
         * [func`Gio`.AppInfo.get_recommended_for_type], regardless of the default
         * application for that content type.
         * @param content_type the content type.
         */
        vfunc_set_as_last_used_for_type(content_type: string): boolean;
        /**
         * Checks if the application info should be shown in menus that
         * list available applications.
         */
        vfunc_should_show(): boolean;
        /**
         * Checks if the application accepts files as arguments.
         */
        vfunc_supports_files(): boolean;
        /**
         * Checks if the application supports reading files and directories from URIs.
         */
        vfunc_supports_uris(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Tree {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: TreeFlags;
            menu_basename: string;
            menuBasename: string;
            menu_path: string;
            menuPath: string;
        }
    }

    class Tree extends GObject.Object {
        static $gtype: GObject.GType<Tree>;

        // Properties

        /**
         * Flags controlling the content of the menu.
         */
        get flags(): TreeFlags;
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        get menu_basename(): string;
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        get menuBasename(): string;
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         */
        get menu_path(): string;
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         */
        get menuPath(): string;

        // Constructors

        constructor(properties?: Partial<Tree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](menu_basename: string, flags: TreeFlags): Tree;

        static new_for_path(menu_path: string, flags: TreeFlags): Tree;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;

        // Static methods

        static item_ref(item?: any | null): any | null;
        static item_unref(item?: any | null): void;

        // Methods

        /**
         * This function is only available if the tree has been loaded via
         * gmenu_tree_load_sync() or a variant thereof.
         * @returns The absolute and canonicalized path to the loaded menu file
         */
        get_canonical_menu_path(): string;
        get_directory_from_path(path: string): TreeDirectory;
        /**
         * Look up the entry corresponding to the given "desktop file id".
         * @param id a desktop file ID
         * @returns A newly referenced #GMenuTreeEntry, or %NULL if none
         */
        get_entry_by_id(id: string): TreeEntry;
        /**
         * Get the root directory; you must have loaded the tree first (at
         * least once) via gmenu_tree_load_sync() or a variant thereof.
         * @returns Root of the tree
         */
        get_root_directory(): TreeDirectory;
        /**
         * Synchronously load the menu contents.  This function
         * performs a significant amount of blocking I/O if the
         * tree has not been loaded yet.
         * @returns %TRUE on success, %FALSE on error
         */
        load_sync(): boolean;
    }

    type DesktopAppInfoClass = typeof DesktopAppInfo;
    abstract class TreeAlias {
        static $gtype: GObject.GType<TreeAlias>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_aliased_directory(): TreeDirectory;
        get_aliased_entry(): TreeEntry;
        get_aliased_item_type(): TreeItemType;
        get_directory(): TreeDirectory;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #GMenuTreeAlias.
         * @returns The #GMenuTree
         */
        get_tree(): Tree;
    }

    type TreeClass = typeof Tree;
    abstract class TreeDirectory {
        static $gtype: GObject.GType<TreeDirectory>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_comment(): string;
        get_desktop_file_path(): string;
        get_generic_name(): string;
        /**
         * Gets the icon for the directory.
         * @returns The #GIcon for this directory
         */
        get_icon(): Gio.Icon;
        get_is_nodisplay(): boolean;
        get_menu_id(): string;
        get_name(): string;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #GMenuTreeItem.
         * @returns The #GMenuTree
         */
        get_tree(): Tree;
        iter(): TreeIter;
        make_path(entry: TreeEntry): string;
    }

    abstract class TreeEntry {
        static $gtype: GObject.GType<TreeEntry>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_app_info(): DesktopAppInfo;
        get_desktop_file_id(): string;
        get_desktop_file_path(): string;
        get_is_excluded(): boolean;
        get_is_flatpak(): boolean;
        get_is_nodisplay_recurse(): boolean;
        get_is_unallocated(): boolean;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #GMenuTreeEntry.
         * @returns The #GMenuTree
         */
        get_tree(): Tree;
    }

    abstract class TreeHeader {
        static $gtype: GObject.GType<TreeHeader>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_directory(): TreeDirectory;
        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #GMenuTreeHeader.
         * @returns The #GMenuTree
         */
        get_tree(): Tree;
    }

    abstract class TreeIter {
        static $gtype: GObject.GType<TreeIter>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * This method may only be called if gmenu_tree_iter_next()
         * returned GMENU_TREE_ITEM_ALIAS.
         * @returns An alias
         */
        get_alias(): TreeAlias;
        /**
         * This method may only be called if gmenu_tree_iter_next()
         * returned GMENU_TREE_ITEM_DIRECTORY.
         * @returns A directory
         */
        get_directory(): TreeDirectory;
        /**
         * This method may only be called if gmenu_tree_iter_next()
         * returned GMENU_TREE_ITEM_ENTRY.
         * @returns An entry
         */
        get_entry(): TreeEntry;
        /**
         * This method may only be called if gmenu_tree_iter_next()
         * returned GMENU_TREE_ITEM_HEADER.
         * @returns A header
         */
        get_header(): TreeHeader;
        /**
         * This method may only be called if gmenu_tree_iter_next()
         * returned #GMENU_TREE_ITEM_SEPARATOR.
         * @returns A separator
         */
        get_separator(): TreeSeparator;
        /**
         * Change the iterator to the next item, and return its type.  If
         * there are no more items, %GMENU_TREE_ITEM_INVALID is returned.
         * @returns The type of the next item that can be retrived from the iterator
         */
        next(): TreeItemType;
    }

    abstract class TreeSeparator {
        static $gtype: GObject.GType<TreeSeparator>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_parent(): TreeDirectory;
        /**
         * Grab the tree associated with a #GMenuTreeSeparator.
         * @returns The #GMenuTree
         */
        get_tree(): Tree;
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

export default CMenu;

// END
