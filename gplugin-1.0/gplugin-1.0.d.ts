/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gplugin-1.0-ambient.d.ts';

/**
 * GPlugin-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GPlugin {
    /**
     * The known states of a plugin.
     */
    enum PluginState {
        /**
         * The state of the plugin is unknown.
         */
        UNKNOWN,
        /**
         * There was an error loading or unloading the
         *  plugin.
         */
        ERROR,
        /**
         * The plugin has been queried but not loaded.
         */
        QUERIED,
        /**
         * The plugin should be re-queried.
         */
        REQUERY,
        /**
         * The plugin is loaded.
         */
        LOADED,
        /**
         * The plugin failed to load.
         */
        LOAD_FAILED,
        /**
         * The plugin failed to unload.
         */
        UNLOAD_FAILED,
    }
    /**
     * This is the extra version string of GPlugin that was compiled against.
     */
    const EXTRA_VERSION: string;
    /**
     * This is the major version number of GPlugin that was compiled against.
     */
    const MAJOR_VERSION: number;
    /**
     * This is the micro version number of GPlugin that was compiled against.
     */
    const MICRO_VERSION: number;
    /**
     * This is the minor version number of GPlugin that was compiled against.
     */
    const MINOR_VERSION: number;
    /**
     * This is the string version number of GPlugin that was compiled against.
     */
    const VERSION: string;
    const VERSION_MIN_REQUIRED: number;
    /**
     * Gets the core flags that were passed to [func`GPlugin`.init].
     * @returns The core flags that GPlugin was initialized with.
     */
    function get_flags(): CoreFlags;
    /**
     * Returns an option group for the commandline arguments recognized by GPlugin.
     *
     * You should add this option group to your [struct`GLib`.OptionContext] with
     * [method`GLib`.OptionContext.add_group], if you are using
     * [method`GLib`.OptionContext.parse] to parse your commandline arguments.
     *
     * If [func`GPlugin`.init] has yet to be called before
     * [method`GLib`.OptionContext.parse] is called, [func`GPlugin`.init] will be
     * called automatically.
     * @returns An option group for the commandline arguments          recognized by GPlugin.
     */
    function get_option_group(): GLib.OptionGroup;
    /**
     * Initializes the GPlugin library.
     *
     * This function *MUST* be called before interacting with any other GPlugin
     * API. The one exception is [func`GPlugin`.get_option_group]. Parsing options
     * with the [struct`GLib`.OptionGroup] from [func`GPlugin`.get_option_group]
     * internally calls [func`GPlugin`.init].
     * @param flags The core flags to set.
     */
    function init(flags: CoreFlags): void;
    /**
     * Gets a string representation of `state`.
     * @param state The #GPluginPluginState.
     * @returns The string representation of @state.
     */
    function plugin_state_to_string(state: PluginState): string;
    /**
     * Uninitializes the GPlugin library
     */
    function uninit(): void;
    /**
     * Checks that the GPlugin library in use is compatible with the given version.
     *
     * Generally you would pass in the constants [const`GPlugin`.MAJOR_VERSION],
     * [const`GPlugin`.MINOR_VERSION], [const`GPlugin`.MICRO_VERSION] as the three
     * arguments to this function; that produces a check that the library in use is
     * compatible with the version of GPlugin the application or module was
     * compiled against.
     *
     * Compatibility is defined by two things: first the version of the running
     * library is newer than the version `major`.`minor`.`micro`. Second the running
     * library must be binary compatible with the version `major`.`minor`.`micro`
     * (same major version).
     * @param major The required major version.
     * @param minor The required minor version.
     * @param micro The required micro version.
     * @returns %NULL if the GPlugin library is compatible with the given version,          or a string describing the version mismatch. The returned string          is owned by GPlugin and must not be modified or freed.
     */
    function version_check(major: number, minor: number, micro: number): string;
    /**
     * A semantic version checker which ignores any characters after the micro
     * version.
     * @param v1 The first version to compare.
     * @param v2 The second version to compare.
     * @returns less than 0 if @v1 is less than @v2, 0 if @v1 is equal to @v1, and          greater than 0 if @v1 is greater than @v2.
     */
    function version_compare(v1: string, v2: string): number;
    interface ManagerForeachFunc {
        (id: string, plugins: Plugin[], data?: any | null): void;
    }
    /**
     * Flags to configure behaviors in GPlugin.
     */
    enum CoreFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Disable the native plugin loader.
         */
        DISABLE_NATIVE_LOADER,
        /**
         * Log plugin state changes with
         *                                               g_message. Since: 0.34.0
         */
        LOG_PLUGIN_STATE_CHANGES,
    }
    module Loader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
        }
    }

    /**
     * An abstract class that should not be accessed directly.
     */
    abstract class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;

        // Own properties of GPlugin.Loader

        get id(): string;

        // Constructors of GPlugin.Loader

        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of GPlugin.Loader

        vfunc_load(plugin: Plugin): boolean;
        vfunc_unload(plugin: Plugin, shutdown: boolean): boolean;

        // Own methods of GPlugin.Loader

        /**
         * Gets the identifier of `loader`.
         * @returns The ID of @loader.
         */
        get_id(): string;
        /**
         * Returns a [struct`GLib`.SList] of strings containing the extensions that the
         * loader supports.  Each extension should not include the dot.  For example:
         * so, dll, py, etc.
         * @returns A [struct@GLib.SList] of          extensions that the loader supports.
         */
        get_supported_extensions(): string[];
        /**
         * This function is called by the plugin manager to ask `loader` to load
         * `plugin`.
         * @param plugin The plugin instance to load.
         * @returns %TRUE if @plugin was loaded successfully, %FALSE otherwise.
         */
        load_plugin(plugin: Plugin): boolean;
        /**
         * This function is called by the plugin manager to ask `loader` to query
         * `filename` and determine if it's a usable plugin.
         * @param filename The filename to query.
         * @returns A plugin instance or %NULL on failure.
         */
        query_plugin(filename: string): Plugin;
        /**
         * This function is called by the plugin manager to ask `loader` to unload
         * `plugin`.
         * @param plugin The plugin instance to unload.
         * @param shutdown Whether or not GPlugin is shutting down.
         * @returns %TRUE if @plugin was unloaded successfully, %FALSE otherwise.
         */
        unload_plugin(plugin: Plugin, shutdown: boolean): boolean;
    }

    module Manager {
        // Signal callback interfaces

        interface LoadPluginFailed {
            (plugin: GObject.Object, error: GLib.Error): void;
        }

        interface LoadedPlugin {
            (plugin: GObject.Object): void;
        }

        interface LoaderRegistered {
            (loader: Loader): void;
        }

        interface LoaderUnregistered {
            (loader: Loader): void;
        }

        interface LoadingPlugin {
            (plugin: GObject.Object, error?: any | null): boolean;
        }

        interface UnloadPluginFailed {
            (plugin: GObject.Object, error: GLib.Error): void;
        }

        interface UnloadedPlugin {
            (plugin: GObject.Object): void;
        }

        interface UnloadingPlugin {
            (plugin: GObject.Object, error?: any | null): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The manager is responsible for querying plugins as well as telling loaders
     * when to load and unload plugins. It also keeps track of paths that should be
     * searched for plugins.
     */
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;

        // Constructors of GPlugin.Manager

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of GPlugin.Manager

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'load-plugin-failed',
            callback: (_source: this, plugin: GObject.Object, error: GLib.Error) => void,
        ): number;
        connect_after(
            signal: 'load-plugin-failed',
            callback: (_source: this, plugin: GObject.Object, error: GLib.Error) => void,
        ): number;
        emit(signal: 'load-plugin-failed', plugin: GObject.Object, error: GLib.Error): void;
        connect(signal: 'loaded-plugin', callback: (_source: this, plugin: GObject.Object) => void): number;
        connect_after(signal: 'loaded-plugin', callback: (_source: this, plugin: GObject.Object) => void): number;
        emit(signal: 'loaded-plugin', plugin: GObject.Object): void;
        connect(signal: 'loader-registered', callback: (_source: this, loader: Loader) => void): number;
        connect_after(signal: 'loader-registered', callback: (_source: this, loader: Loader) => void): number;
        emit(signal: 'loader-registered', loader: Loader): void;
        connect(signal: 'loader-unregistered', callback: (_source: this, loader: Loader) => void): number;
        connect_after(signal: 'loader-unregistered', callback: (_source: this, loader: Loader) => void): number;
        emit(signal: 'loader-unregistered', loader: Loader): void;
        connect(
            signal: 'loading-plugin',
            callback: (_source: this, plugin: GObject.Object, error: any | null) => boolean,
        ): number;
        connect_after(
            signal: 'loading-plugin',
            callback: (_source: this, plugin: GObject.Object, error: any | null) => boolean,
        ): number;
        emit(signal: 'loading-plugin', plugin: GObject.Object, error?: any | null): void;
        connect(
            signal: 'unload-plugin-failed',
            callback: (_source: this, plugin: GObject.Object, error: GLib.Error) => void,
        ): number;
        connect_after(
            signal: 'unload-plugin-failed',
            callback: (_source: this, plugin: GObject.Object, error: GLib.Error) => void,
        ): number;
        emit(signal: 'unload-plugin-failed', plugin: GObject.Object, error: GLib.Error): void;
        connect(signal: 'unloaded-plugin', callback: (_source: this, plugin: GObject.Object) => void): number;
        connect_after(signal: 'unloaded-plugin', callback: (_source: this, plugin: GObject.Object) => void): number;
        emit(signal: 'unloaded-plugin', plugin: GObject.Object): void;
        connect(
            signal: 'unloading-plugin',
            callback: (_source: this, plugin: GObject.Object, error: any | null) => boolean,
        ): number;
        connect_after(
            signal: 'unloading-plugin',
            callback: (_source: this, plugin: GObject.Object, error: any | null) => boolean,
        ): number;
        emit(signal: 'unloading-plugin', plugin: GObject.Object, error?: any | null): void;

        // Own static methods of GPlugin.Manager

        /**
         * Gets the default plugin manager in GPlugin.
         */
        static get_default(): Manager;

        // Own methods of GPlugin.Manager

        /**
         * Adds the application installation path for `appname`.
         *
         * This will add `{prefix}/{appname}/plugins` to the list as well as
         * `${XDG_CONFIG_HOME}/{appname}/plugins`.
         * @param prefix The installation prefix for the application.
         * @param appname The name of the application whose paths to add.
         */
        add_app_paths(prefix: string, appname: string): void;
        /**
         * Adds the path that GPlugin was installed to to the plugin search path, as
         * well as `${XDG_CONFIG_HOME}/gplugin` so users can install additional loaders
         * themselves.
         */
        add_default_paths(): void;
        /**
         * Adds `path` to the end of the list of paths to search for plugins.
         * @param path A path to add to the end of the plugin search paths.
         */
        append_path(path: string): void;
        /**
         * Append the paths held in the environment variable `name` to the list.
         * @param name The name of the environment variable containing the paths to add.
         */
        append_paths_from_environment(name: string): void;
        /**
         * Finds the first plugin matching `id`.
         *
         * This function uses [method`GPlugin`.Manager.find_plugins] and returns the
         * first plugin in the list.
         * @param id The ID of the plugin to find.
         * @returns A plugin instance or %NULL if no plugin          matching @id was found.
         */
        find_plugin(id: string): Plugin;
        /**
         * Calls [method`GPlugin`.Manager.find_plugins] with `id,` and then returns the
         * plugins with the highest version number or %NULL if no plugins with `id` are
         * found.
         * @param id The ID of the plugin to find.
         * @returns The plugin with an ID of @id that has the highest          version number, or %NULL if no plugins were found with @id.
         */
        find_plugin_with_newest_version(id: string): Plugin;
        /**
         * Finds all plugins matching `id`.
         * @param id The ID of the plugin to find.
         * @returns A [struct@GLib.SList]          of plugins matching @id.
         */
        find_plugins(id: string): Plugin[];
        /**
         * Finds all plugins that currently have a state of `state`.
         * @param state The state to look for.
         * @returns A [struct@GLib.SList]          of plugins whose state is @state.
         */
        find_plugins_with_state(state: PluginState): Plugin[];
        /**
         * Similar to [method`GPlugin`.Manager.find_plugins] but only returns plugins
         * whose versions match `op` and `version`.
         *
         * This is primarily used for dependency loading where a plugin may depend on a
         * specific range of versions of another plugin.
         * @param id The ID of the plugin to find.
         * @param op one of <, <=, =, ==, >=, >.
         * @param version The version to compare against.
         * @returns A [struct@GLib.SList]          of plugins matching @id and the version constraint.
         */
        find_plugins_with_version(id: string, op: string, version: string): Plugin[];
        /**
         * Calls `func` for each plugin that is known.
         * @param func The function to call with each plugin.
         */
        foreach(func: ManagerForeachFunc): void;
        /**
         * Returns a list of all registered loaders.
         * @returns Returns a list          of all registered loaders.
         */
        get_loaders(): Loader[];
        /**
         * Gets the list of paths which will be searched for plugins.
         * @returns The [type@GLib.List] of paths          which will be searched for plugins.
         */
        get_paths(): string[];
        /**
         * Returns a list of all the plugins that `plugin` depends on.
         * @param plugin The plugin whose dependencies to get.
         * @returns A [struct@GLib.SList]          of plugins that @plugin depends on, or %NULL on error with @error          set.
         */
        get_plugin_dependencies(plugin: Plugin): Plugin[];
        /**
         * Returns a list of all plugin IDs.
         *
         * Each id should be queried directly for more information.
         * @returns A [struct@GLib.List] of          each unique plugin ID.
         */
        list_plugins(): string[];
        /**
         * Loads `plugin` and all of its dependencies.
         *
         * If a dependency can not be loaded, `plugin` will not be loaded either.
         * However, any other plugins that `plugin` depends on that were loaded from
         * this call, will not be unloaded.
         * @param plugin The plugin instance.
         * @returns %TRUE if @plugin was loaded successfully or already loaded, %FALSE          otherwise.
         */
        load_plugin(plugin: Plugin): boolean;
        /**
         * Adds `path` to the beginning of the list of paths to search for plugins.
         * @param path A path to add to the beginning of the plugin search paths.
         */
        prepend_path(path: string): void;
        /**
         * Prepends the paths held in the environment variable `name` to the list.
         * @param name The name of the environment variable containing the paths to add.
         */
        prepend_paths_from_environment(name: string): void;
        /**
         * Forces a refresh of all plugins found in the search paths.
         */
        refresh(): void;
        /**
         * Registers `loader` as an available loader.
         * @param loader The loader instance to register.
         * @returns %TRUE if the loader was successfully register, %FALSE otherwise          with @error set.
         */
        register_loader(loader: Loader): boolean;
        /**
         * Removes `path` from the list of paths to search for plugins.
         * @param path A path to remove from the plugin search paths.
         */
        remove_path(path: string): void;
        /**
         * Clears all paths that are set to search for plugins.
         */
        remove_paths(): void;
        /**
         * Unloads `plugin`.
         *
         * If `plugin` has dependencies, they are not unloaded.
         * @param plugin The plugin instance.
         * @returns %TRUE if @plugin was unloaded successfully or not loaded, %FALSE          otherwise.
         */
        unload_plugin(plugin: Plugin): boolean;
        /**
         * Unregisters `loader` as an available loader.
         * @param loader The loader instance to unregister.
         * @returns %TRUE if the loader was successfully unregistered, %FALSE          otherwise with @error set.
         */
        unregister_loader(loader: Loader): boolean;
    }

    module PluginInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            abi_version: number;
            abiVersion: number;
            authors: string[];
            auto_load: boolean;
            autoLoad: boolean;
            bind_global: boolean;
            bindGlobal: boolean;
            category: string;
            dependencies: string[];
            description: string;
            icon_name: string;
            iconName: string;
            id: string;
            internal: boolean;
            license_id: string;
            licenseId: string;
            license_text: string;
            licenseText: string;
            license_url: string;
            licenseUrl: string;
            load_on_query: boolean;
            loadOnQuery: boolean;
            name: string;
            priority: number;
            provides: string[];
            settings_schema: string;
            settingsSchema: string;
            summary: string;
            unloadable: boolean;
            version: string;
            website: string;
        }
    }

    /**
     * #GPluginPluginInfo holds all of the data about a plugin.  It is created when
     * a plugin is queried.
     */
    class PluginInfo extends GObject.Object {
        static $gtype: GObject.GType<PluginInfo>;

        // Own properties of GPlugin.PluginInfo

        /**
         * The GPlugin ABI version that the plugin was compiled against.
         *
         * GPlugin only uses the first byte (`0xff000000`) of this value.  The
         * remaining 3 bytes are available for the application to use.
         *
         * Take the following example from an application:
         *
         *
         * ```c
         *  #define ABI_VERSION (GPLUGIN_NATIVE_ABI_VERSION |
         *                       (APPLICATION_MAJOR_VERSION << 8) |
         *                       (APPLICATION_MINOR_VERSION))
         * ```
         *
         *
         * The application here uses the third and fourth bytes, but could use
         * the second as well.
         */
        get abi_version(): number;
        /**
         * The GPlugin ABI version that the plugin was compiled against.
         *
         * GPlugin only uses the first byte (`0xff000000`) of this value.  The
         * remaining 3 bytes are available for the application to use.
         *
         * Take the following example from an application:
         *
         *
         * ```c
         *  #define ABI_VERSION (GPLUGIN_NATIVE_ABI_VERSION |
         *                       (APPLICATION_MAJOR_VERSION << 8) |
         *                       (APPLICATION_MINOR_VERSION))
         * ```
         *
         *
         * The application here uses the third and fourth bytes, but could use
         * the second as well.
         */
        get abiVersion(): number;
        /**
         * A list of the names and email addresses of the authors.
         *
         * It is recommended to use the RFC 822, 2822 format of:
         * `"First Last <user`domain`.com>"`.
         */
        get authors(): string[];
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to %FALSE.
         */
        get auto_load(): boolean;
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to %FALSE.
         */
        get autoLoad(): boolean;
        /**
         * Determines whether the plugin should be have its symbols bound globally.
         *
         * Note: This should only be used by the native plugin loader.
         */
        get bind_global(): boolean;
        /**
         * Determines whether the plugin should be have its symbols bound globally.
         *
         * Note: This should only be used by the native plugin loader.
         */
        get bindGlobal(): boolean;
        /**
         * The category of this plugin.
         *
         * This property is used to organize plugins into categories in a user
         * interface.  It is recommended that an application has a well defined
         * set of categories that plugin authors should use, and put all plugins
         * that don't match this category into an "Other" category.
         */
        get category(): string;
        /**
         * A comma separated list of plugin id's that this plugin depends on.
         */
        get dependencies(): string[];
        /**
         * The full description of the plugin that will be used in a "more
         * information" section in a user interface.
         */
        get description(): string;
        /**
         * A XDG icon name for the plugin.  The actual use of this is determined by
         * the application/library using GPlugin.
         */
        get icon_name(): string;
        /**
         * A XDG icon name for the plugin.  The actual use of this is determined by
         * the application/library using GPlugin.
         */
        get iconName(): string;
        /**
         * The id of the plugin.
         *
         * While not required, the recommended convention is to use the following
         * format: &lt;application or library&gt;/&lt;name of the plugin&gt;.
         *
         * For example, the Python3 loader in GPlugin has an id of
         * "gplugin/python3-loader".
         */
        get id(): string;
        /**
         * Whether or not the plugin is considered an "internal" plugin.
         *
         * Defaults to %FALSE.
         */
        get internal(): boolean;
        /**
         * The short name of the license.
         *
         * It is recommended to use the identifier of the license from
         * https://spdx.org/licenses/ and should be "Other" for licenses that are
         * not listed.
         *
         * If a plugin has multiple license, they should be separated by a pipe
         * (|). In the odd case that you have multiple licenses that are used at
         * the same time, they should be separated by an ampersand (&).
         */
        get license_id(): string;
        /**
         * The short name of the license.
         *
         * It is recommended to use the identifier of the license from
         * https://spdx.org/licenses/ and should be "Other" for licenses that are
         * not listed.
         *
         * If a plugin has multiple license, they should be separated by a pipe
         * (|). In the odd case that you have multiple licenses that are used at
         * the same time, they should be separated by an ampersand (&).
         */
        get licenseId(): string;
        /**
         * The text of the license for this plugin.  This should only be used when
         * the plugin is licensed under a license that is not listed at spdx.org.
         */
        get license_text(): string;
        /**
         * The text of the license for this plugin.  This should only be used when
         * the plugin is licensed under a license that is not listed at spdx.org.
         */
        get licenseText(): string;
        /**
         * The url to the text of the license.  This should primarily only be used
         * for licenses not listed at spdx.org.
         */
        get license_url(): string;
        /**
         * The url to the text of the license.  This should primarily only be used
         * for licenses not listed at spdx.org.
         */
        get licenseUrl(): string;
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to %FALSE.
         */
        get load_on_query(): boolean;
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to %FALSE.
         */
        get loadOnQuery(): boolean;
        /**
         * The display name of the plugin.  This should be a translated string.
         */
        get name(): string;
        /**
         * The priority that this plugin should have when determining which plugin
         * to use when multiple plugins have the same id or provides. Higher values
         * take precedence over lower values.  If two plugins have the same id and
         * priority, the first one found will be used.
         */
        get priority(): number;
        /**
         * A list of additional plugin ids and versions that this plugin can
         * provide.  This mechanism is used so that plugins can replace and extend
         * the behavior of other plugins.
         *
         * The format fields should either be <literal>&lt;plugin-id&gt;</literal>
         * or <literal>&lt;plugin-id&gt;=&lt;plugin-version&gt;</literal>.  The
         * optional version is used to help resolve dependencies that are based
         * on a specific version.
         */
        get provides(): string[];
        /**
         * The ID of the [class`Gio`.Settings] schema for the plugin.
         */
        get settings_schema(): string;
        /**
         * The ID of the [class`Gio`.Settings] schema for the plugin.
         */
        get settingsSchema(): string;
        /**
         * A short description of the plugin that can be listed with the name in a
         * user interface.
         */
        get summary(): string;
        /**
         * Sets whether or not a plugin is unloadable. See
         * [method`GPlugin`.PluginInfo.get_unloadable] for more information.
         */
        get unloadable(): boolean;
        /**
         * The version of the plugin.  Preferably a semantic version.
         */
        get version(): string;
        /**
         * The url of the plugin that can be represented in a user interface.
         */
        get website(): string;

        // Constructors of GPlugin.PluginInfo

        constructor(properties?: Partial<PluginInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GPlugin.PluginInfo

        /**
         * Returns the ABI or Application Binary Interface version that the plugin
         * is supposed to work against.
         * @returns The abi_version from @info.
         */
        get_abi_version(): number;
        /**
         * Returns the authors of the plugin as specified in `info`.
         * @returns The authors from @info.
         */
        get_authors(): string[];
        /**
         * Returns whether or not this plugin should be loaded when queried.  This is
         * useful for internal plugins that are adding functionality and should always
         * be turned on. The plugin loaders use this to make sure all plugins can
         * always be loaded.
         * @returns %TRUE if the plugin should be loaded when queried, %FALSE          otherwise.
         */
        get_auto_load(): boolean;
        /**
         * This property and therefore function is only used by the native plugin
         * loader.
         * @returns %TRUE if the plugin has requested to be loaded with its symbols          bound global, %FALSE if they should be bound locally.
         */
        get_bind_global(): boolean;
        /**
         * Returns the category of the plugin as specified in `info`.
         * @returns The category from @info.
         */
        get_category(): string;
        /**
         * Returns the dependencies of the plugins as specified in `info`.
         * @returns The list of          dependencies from @info.
         */
        get_dependencies(): string[];
        /**
         * Returns the description for the plugin as specified in `info`.
         * @returns The description from @info.
         */
        get_description(): string;
        /**
         * Returns the name of the icon for the plugin as specified in `info`.
         * @returns The icon name from @info.
         */
        get_icon_name(): string;
        /**
         * Returns the id that the plugin identifies itself as.
         * @returns The id from @info.
         */
        get_id(): string;
        /**
         * Gets the normalized version of the id from `info`.  That is, a version where
         * only alphanumeric and -'s are in the id.
         * @returns The normalized id of @info.
         */
        get_id_normalized(): string;
        /**
         * Returns where or not this plugin is is considered an internal plugin.  An
         * internal plugin would be something like a plugin loader or another plugin
         * that should not be shown to users.
         * @returns %TRUE if the plugin is internal, %FALSE otherwise.
         */
        get_internal(): boolean;
        /**
         * Returns the liences id for the plugin as specified in `info`.
         * @returns The license-id from @info.
         */
        get_license_id(): string;
        /**
         * Returns the license text for the plugin as specified in `info`.
         * @returns The text of the license from @info.
         */
        get_license_text(): string;
        /**
         * Returns the url of the license for the plugin as specified in `info`
         * @returns The url of the license from @info.
         */
        get_license_url(): string;
        /**
         * Returns whether or not this plugin should be loaded when queried.  This is
         * useful for internal plugins that are adding functionality and should always
         * be turned on. The plugin loaders use this to make sure all plugins can
         * always be loaded.
         * @returns %TRUE if the plugin should be loaded when queried, %FALSE          otherwise.
         */
        get_load_on_query(): boolean;
        /**
         * Returns the name of the plugin as specified in `info`.
         * @returns The name from @info.
         */
        get_name(): string;
        /**
         * Gets the priority of the plugin as specified in `info`.
         * @returns The priority from @info.
         */
        get_priority(): number;
        /**
         * Gets the provides of the plugin as specified in `info`.
         * @returns The list of          dependencies from @info.
         */
        get_provides(): string[];
        /**
         * Returns the ID of the [class`Gio`.Settings] schema as specified in `info`.
         * @returns The schema ID from @info.
         */
        get_settings_schema(): string;
        /**
         * Returns the summery for the plugin as specified in `info`.
         * @returns The summary from @info.
         */
        get_summary(): string;
        /**
         * Gets whether or not the plugin is unloadable. Certain libraries can not be
         * shutdown cleanly and then re-enabled during the life time of a program. A
         * plugin using one of these libraries should set the
         * [property`GPlugin`.PluginInfo:unloadable] property to %FALSE to tell
         * [class`GPlugin`.Manager] to not even attempt to unload it.
         * @returns %TRUE if the plugin is unloadable, otherwise %FALSE.
         */
        get_unloadable(): boolean;
        /**
         * Returns the version of the plugin as specified in `info`.
         * @returns The version from @info.
         */
        get_version(): string;
        /**
         * Returns the website for the plugin as specified in `info`.
         * @returns The website from @info.
         */
        get_website(): string;
    }

    type LoaderClass = typeof Loader;
    type ManagerClass = typeof Manager;
    type PluginInfoClass = typeof PluginInfo;
    type PluginInterface = typeof Plugin;
    type SourceInterface = typeof Source;
    module Plugin {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            desired_state: PluginState;
            desiredState: PluginState;
            error: GLib.Error;
            filename: string;
            info: PluginInfo;
            loader: Loader;
            state: PluginState;
        }
    }

    export interface PluginNamespace {
        $gtype: GObject.GType<Plugin>;
        prototype: Plugin;
    }
    interface Plugin extends GObject.Object {
        // Own properties of GPlugin.Plugin

        /**
         * The desired state of the plugin. Typically this just mirrors the state
         * property, but if a state change failed this will remain set to the state
         * that was attempted.
         *
         * See [method`GPlugin`.Plugin.get_desired_state] for more information.
         */
        get desired_state(): PluginState;
        set desired_state(val: PluginState);
        /**
         * The desired state of the plugin. Typically this just mirrors the state
         * property, but if a state change failed this will remain set to the state
         * that was attempted.
         *
         * See [method`GPlugin`.Plugin.get_desired_state] for more information.
         */
        get desiredState(): PluginState;
        set desiredState(val: PluginState);
        /**
         * An error that was returned if the plugin failed to load or unload.
         */
        get error(): GLib.Error;
        set error(val: GLib.Error);
        /**
         * The absolute path to the plugin on disk.
         */
        get filename(): string;
        /**
         * The plugin info from this plugin.
         */
        get info(): PluginInfo;
        /**
         * The loader that loaded this plugin.
         */
        get loader(): Loader;
        /**
         * The plugin state that this plugin is in.
         */
        get state(): PluginState;
        set state(val: PluginState);

        // Own methods of GPlugin.Plugin

        /**
         * Gets the desired state of the plugin. Typically this will hold the same
         * value of [property`GPlugin`.Plugin:state], but if a state change failed this
         * will remain set to the state that was attempted.
         *
         * For example, say a user wants to unload a plugin but the plugin can't be
         * unloaded for some reason. The state will be set to loaded, but the
         * desired state will be set to unloaded.
         *
         * This behavior can be used to give the user the ability to disable a
         * plugin that normally isn't unloadabled from being loaded during the next
         * run of program.
         * @returns The desired state that the user has requested the plugin to be in.
         */
        get_desired_state(): PluginState;
        /**
         * Gets the [struct`GLib`.Error], if any, that the plugin returned during load or
         * unload.
         * @returns The error the plugin returned during load or          unload, or %NULL if no error occurred.
         */
        get_error(): GLib.Error;
        /**
         * Returns the filename that `plugin` was loaded from.
         * @returns The filename of @plugin.
         */
        get_filename(): string;
        /**
         * Returns the plugin info for `plugin`.
         * @returns The plugin info instance for @plugin.
         */
        get_info(): PluginInfo;
        /**
         * Returns the loader that loaded `plugin`.
         * @returns The #GPluginLoader that loaded @plugin.
         */
        get_loader(): Loader;
        /**
         * Gets the current state of `plugin`.
         * @returns The current state of @plugin.
         */
        get_state(): PluginState;
        /**
         * Sets the desired state of the plugin. This shouldn't need to be called by
         * anyone except [class`GPlugin`.Loader] which manages the state of plugins.
         * @param state The desired state.
         */
        set_desired_state(state: PluginState): void;
        /**
         * Changes the state of `plugin` to `state`.  This function should only be called
         * by loaders.
         * @param state The new state for @plugin.
         */
        set_state(state: PluginState): void;

        // Own virtual methods of GPlugin.Plugin

        vfunc_state_changed(oldstate: PluginState, newstate: PluginState): void;
    }

    export const Plugin: PluginNamespace;

    module Source {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SourceNamespace {
        $gtype: GObject.GType<Source>;
        prototype: Source;
    }
    interface Source extends GObject.Object {
        // Own methods of GPlugin.Source

        /**
         * This method is called when [method`GPlugin`.Manager.refresh] is running. The
         * source should scan its available sources for plugins. For the filesystem
         * source, this is paths that have been registered with the manager.
         *
         * The implementation should return TRUE if it found a new unqueried plugin,
         * which will tell the manager to continue scanning.
         * @returns %TRUE if an unqueried plugin was found, %FALSE otherwise.
         */
        scan(): boolean;

        // Own virtual methods of GPlugin.Source

        /**
         * This method is called when [method`GPlugin`.Manager.refresh] is running. The
         * source should scan its available sources for plugins. For the filesystem
         * source, this is paths that have been registered with the manager.
         *
         * The implementation should return TRUE if it found a new unqueried plugin,
         * which will tell the manager to continue scanning.
         */
        vfunc_scan(): boolean;
    }

    export const Source: SourceNamespace;

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

export default GPlugin;
// END
