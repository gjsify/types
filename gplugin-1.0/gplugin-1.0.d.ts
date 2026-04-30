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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GPlugin {
    /**
     * GPlugin-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace PluginState {
        export const $gtype: GObject.GType<PluginState>;
    }

    /**
     * The known states of a plugin.
     * @gir-type Enum
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
    /**
     * A macro that should be defined by the user prior to including the
     * `gplugin.h` header.
     *
     * The definition should be one of the predefined GPlugin version macros:
     * `GPLUGIN_VERSION_0_42`, `GPLUGIN_VERSION_0_43`, ...
     *
     * This macro defines the earliest version of GPlugin that the package is
     * required to be able to compile against.
     *
     * If the compiler is configured to warn about the use of deprecated functions,
     * then using functions that were deprecated in version
     * `GPLUGIN_VERSION_MIN_REQUIRED` or earlier will cause warnings (but using
     * functions deprecated in later releases will not).
     * @since 0.42
     */
    const VERSION_MIN_REQUIRED: number;
    /**
     * Gets the core flags that were passed to {@link GPlugin.init}.
     * @returns The core flags that GPlugin was initialized with.
     * @since 0.34
     */
    function get_flags(): CoreFlags;
    /**
     * Returns an option group for the commandline arguments recognized by GPlugin.
     *
     * You should add this option group to your {@link GLib.OptionContext} with
     * {@link GLib.OptionContext.add_group}, if you are using
     * {@link GLib.OptionContext.parse} to parse your commandline arguments.
     *
     * If {@link GPlugin.init} has yet to be called before
     * {@link GLib.OptionContext.parse} is called, {@link GPlugin.init} will be
     * called automatically.
     * @returns An option group for the commandline arguments          recognized by GPlugin.
     */
    function get_option_group(): GLib.OptionGroup;
    /**
     * Initializes the GPlugin library.
     *
     * This function *MUST* be called before interacting with any other GPlugin
     * API. The one exception is {@link GPlugin.get_option_group}. Parsing options
     * with the {@link GLib.OptionGroup} from {@link GPlugin.get_option_group}
     * internally calls {@link GPlugin.init}.
     * @param flags The core flags to set.
     */
    function init(flags: CoreFlags): void;
    /**
     * Gets a string representation of `state`.
     * @param state The {@link GPlugin.PluginState}.
     * @returns The string representation of `state`.
     * @since 0.32
     */
    function plugin_state_to_string(state: PluginState): string;
    /**
     * Uninitializes the GPlugin library
     */
    function uninit(): void;
    /**
     * Checks that the GPlugin library in use is compatible with the given version.
     *
     * Generally you would pass in the constants {@link GPlugin.MAJOR_VERSION},
     * {@link GPlugin.MINOR_VERSION}, {@link GPlugin.MICRO_VERSION} as the three
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
     * @returns `null` if the GPlugin library is compatible with the given version,          or a string describing the version mismatch. The returned string          is owned by GPlugin and must not be modified or freed.
     */
    function version_check(major: number, minor: number, micro: number): string;
    /**
     * A semantic version checker which ignores any characters after the micro
     * version.
     * @param v1 The first version to compare.
     * @param v2 The second version to compare.
     * @returns less than 0 if `v1` is less than `v2`, 0 if `v1` is equal to `v1`, and          greater than 0 if `v1` is greater than `v2`.
     */
    function version_compare(v1: string, v2: string): number;
    /**
     * @gir-type Callback
     */
    interface ManagerForeachFunc {
        (id: string, plugins: Plugin[], data: any | null): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace CoreFlags {
        export const $gtype: GObject.GType<CoreFlags>;
    }

    /**
     * Flags to configure behaviors in GPlugin.
     * @gir-type Flags
     * @since 0.31
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
         *                                               g_message. Since: 0.34.
         */
        LOG_PLUGIN_STATE_CHANGES,
    }

    namespace FileSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Source.ConstructorProps {
            manager: Manager;
        }
    }

    /**
     * A {@link GPlugin.Source} that will query plugins on disk.
     * @gir-type Class
     * @since 0.43
     */
    class FileSource extends GObject.Object implements Source {
        static $gtype: GObject.GType<FileSource>;

        // Properties

        /**
         * The {@link GPlugin.Manager} that this source is working for.
         * @since 0.39
         * @construct-only
         */
        get manager(): Manager;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a {@link GPlugin.Source} that will query plugins on disk using the
         * paths from `manager`.
         * @param manager The {@link GPlugin.Manager} instance.
         */
        static ['new'](manager: Manager): Source;
        /**
         * This method is called when {@link GPlugin.Manager.refresh} is running. The
         * source should scan its available sources for plugins. For the filesystem
         * source, this is paths that have been registered with the manager.
         *
         * The implementation should return TRUE if it found a new unqueried plugin,
         * which will tell the manager to continue scanning.
         * @returns `true` if an unqueried plugin was found, `false` otherwise.
         */
        scan(): boolean;
        /**
         * This method is called when {@link GPlugin.Manager.refresh} is running. The
         * source should scan its available sources for plugins. For the filesystem
         * source, this is paths that have been registered with the manager.
         *
         * The implementation should return TRUE if it found a new unqueried plugin,
         * which will tell the manager to continue scanning.
         * @virtual
         */
        vfunc_scan(): boolean;
    }

    namespace Loader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
        }
    }

    /**
     * An abstract class that should not be accessed directly.
     * @gir-type Class
     */
    abstract class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;

        // Properties

        /**
         * The identifier of the loader.
         * @since 0.34
         * @construct-only
         * @default null
         */
        get id(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Loader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Loader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Loader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * The load vfunc is called when the plugin manager wants to load a
         *        plugin that was previously queried by this loader.
         * @param plugin
         * @virtual
         */
        vfunc_load(plugin: Plugin): boolean;
        /**
         * The unload vfunc is called when the plugin manager wants to unload
         *          a previously loaded plugin from this loader.
         * @param plugin
         * @param shutdown
         * @virtual
         */
        vfunc_unload(plugin: Plugin, shutdown: boolean): boolean;

        // Methods

        /**
         * Gets the identifier of `loader`.
         * @returns The ID of `loader`.
         */
        get_id(): string;
        /**
         * Returns a {@link GLib.SList} of strings containing the extensions that the
         * loader supports.  Each extension should not include the dot.  For example:
         * so, dll, py, etc.
         * @returns A {@link GLib.SList} of          extensions that the loader supports.
         */
        get_supported_extensions(): string[];
        /**
         * This function is called by the plugin manager to ask `loader` to load
         * `plugin`.
         * @param plugin The plugin instance to load.
         * @returns `true` if `plugin` was loaded successfully, `false` otherwise.
         */
        load_plugin(plugin: Plugin): boolean;
        /**
         * This function is called by the plugin manager to ask `loader` to query
         * `filename` and determine if it's a usable plugin.
         * @param filename The filename to query.
         * @returns A plugin instance or `null` on failure.
         */
        query_plugin(filename: string): Plugin;
        /**
         * This function is called by the plugin manager to ask `loader` to unload
         * `plugin`.
         * @param plugin The plugin instance to unload.
         * @param shutdown Whether or not GPlugin is shutting down.
         * @returns `true` if `plugin` was unloaded successfully, `false` otherwise.
         */
        unload_plugin(plugin: Plugin, shutdown: boolean): boolean;
    }

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted after a plugin fails to load.
             * @signal
             * @since 0.33
             * @run-last
             */
            'load-plugin-failed': (arg0: GObject.Object, arg1: GLib.Error) => void;
            /**
             * Emitted after a plugin is loaded.
             * @signal
             * @since 0.33
             * @run-last
             */
            'loaded-plugin': (arg0: GObject.Object) => void;
            /**
             * Emitted when `loader` has been registered with `manager` via
             * {@link GPlugin.Manager.register_loader}.
             * @signal
             * @since 0.39
             * @run-last
             */
            'loader-registered': (arg0: Loader) => void;
            /**
             * Emitted when `loader` has been unregistered from `manager` via
             * {@link GPlugin.Manager.unregister_loader}.
             * @signal
             * @since 0.39
             * @run-last
             */
            'loader-unregistered': (arg0: Loader) => void;
            /**
             * Emitted before `plugin` is loaded.
             * @signal
             * @since 0.33
             * @run-last
             */
            'loading-plugin': (arg0: GObject.Object, arg1: any | null) => boolean | void;
            /**
             * Emitted when `manager` was asked to unload `plugin`, but `plugin` returned
             * `false` when its unload function was called.
             * @signal
             * @since 0.33
             * @run-last
             */
            'unload-plugin-failed': (arg0: GObject.Object, arg1: GLib.Error) => void;
            /**
             * emitted after a plugin is successfully unloaded.
             * @signal
             * @since 0.33
             * @run-last
             */
            'unloaded-plugin': (arg0: GObject.Object) => void;
            /**
             * Emitted before a plugin is unloaded.
             * @signal
             * @since 0.33
             * @run-last
             */
            'unloading-plugin': (arg0: GObject.Object, arg1: any | null) => boolean | void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The manager is responsible for querying plugins as well as telling loaders
     * when to load and unload plugins. It also keeps track of paths that should be
     * searched for plugins.
     * @gir-type Class
     * @since 0.32
     */
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Manager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Manager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default plugin manager in GPlugin.
         */
        static get_default(): Manager;

        // Methods

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
         * This function uses {@link GPlugin.Manager.find_plugins} and returns the
         * first plugin in the list.
         * @param id The ID of the plugin to find.
         * @returns A plugin instance or `null` if no plugin          matching `id` was found.
         */
        find_plugin(id: string): Plugin;
        /**
         * Finds a plugin with the given filename.
         *
         * This method should be used sparingly as you should typically be using plugin
         * id's to identify them, however, sometimes it's necessary to find them by
         * filename.
         * @param filename The filename of the plugin.
         * @returns The plugin if found, otherwise `null`.
         */
        find_plugin_with_filename(filename: string): Plugin | null;
        /**
         * Calls {@link GPlugin.Manager.find_plugins} with `id`, and then returns the
         * plugins with the highest version number or `null` if no plugins with `id` are
         * found.
         * @param id The ID of the plugin to find.
         * @returns The plugin with an ID of `id` that has the highest          version number, or `null` if no plugins were found with `id`.
         */
        find_plugin_with_newest_version(id: string): Plugin;
        /**
         * Finds all plugins matching `id`.
         * @param id The ID of the plugin to find.
         * @returns A {@link GLib.SList}          of plugins matching `id`.
         */
        find_plugins(id: string): Plugin[];
        /**
         * Finds all plugins that currently have a state of `state`.
         * @param state The state to look for.
         * @returns A {@link GLib.SList}          of plugins whose state is `state`.
         */
        find_plugins_with_state(state: PluginState): Plugin[];
        /**
         * Similar to {@link GPlugin.Manager.find_plugins} but only returns plugins
         * whose versions match `op` and `version`.
         *
         * This is primarily used for dependency loading where a plugin may depend on a
         * specific range of versions of another plugin.
         * @param id The ID of the plugin to find.
         * @param op one of <, <=, =, ==, >=, >.
         * @param version The version to compare against.
         * @returns A {@link GLib.SList}          of plugins matching `id` and the version constraint.
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
         * @returns The {@link GLib.List} of paths          which will be searched for plugins.
         */
        get_paths(): string[];
        /**
         * Returns a list of all the plugins that `plugin` depends on.
         * @param plugin The plugin whose dependencies to get.
         * @returns A {@link GLib.SList}          of plugins that `plugin` depends on, or `null` on error with `error`          set.
         */
        get_plugin_dependencies(plugin: Plugin): Plugin[];
        /**
         * Returns a list of all plugin IDs.
         *
         * Each id should be queried directly for more information.
         * @returns A {@link GLib.List} of          each unique plugin ID.
         */
        list_plugins(): string[];
        /**
         * Loads `plugin` and all of its dependencies.
         *
         * If a dependency can not be loaded, `plugin` will not be loaded either.
         * However, any other plugins that `plugin` depends on that were loaded from
         * this call, will not be unloaded.
         * @param plugin The plugin instance.
         * @returns `true` if `plugin` was loaded successfully or already loaded, `false`          otherwise.
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
         * @returns `true` if the loader was successfully register, `false` otherwise          with `error` set.
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
         * @returns `true` if `plugin` was unloaded successfully or not loaded, `false`          otherwise.
         */
        unload_plugin(plugin: Plugin): boolean;
        /**
         * Unregisters `loader` as an available loader.
         * @param loader The loader instance to unregister.
         * @returns `true` if the loader was successfully unregistered, `false`          otherwise with `error` set.
         */
        unregister_loader(loader: Loader): boolean;
    }

    namespace PluginInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::abi-version': (pspec: GObject.ParamSpec) => void;
            'notify::authors': (pspec: GObject.ParamSpec) => void;
            'notify::auto-load': (pspec: GObject.ParamSpec) => void;
            'notify::bind-global': (pspec: GObject.ParamSpec) => void;
            'notify::category': (pspec: GObject.ParamSpec) => void;
            'notify::dependencies': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::discriminator': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::internal': (pspec: GObject.ParamSpec) => void;
            'notify::license-id': (pspec: GObject.ParamSpec) => void;
            'notify::license-text': (pspec: GObject.ParamSpec) => void;
            'notify::license-url': (pspec: GObject.ParamSpec) => void;
            'notify::load-on-query': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::provides': (pspec: GObject.ParamSpec) => void;
            'notify::settings-schema': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::unloadable': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
            'notify::website': (pspec: GObject.ParamSpec) => void;
        }

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
            discriminator: string;
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
     * {@link GPlugin.PluginInfo} holds all of the data about a plugin.  It is created when
     * a plugin is queried.
     * @gir-type Class
     */
    class PluginInfo extends GObject.Object {
        static $gtype: GObject.GType<PluginInfo>;

        // Properties

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
         * @construct-only
         * @default 0
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
         * @construct-only
         * @default 0
         */
        get abiVersion(): number;
        /**
         * A list of the names and email addresses of the authors.
         *
         * It is recommended to use the RFC 822, 2822 format of:
         * `"First Last <user@domain.com>"`.
         * @construct-only
         */
        get authors(): string[];
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to `false`.
         * @since 0.39
         * @construct-only
         * @default false
         */
        get auto_load(): boolean;
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to `false`.
         * @since 0.39
         * @construct-only
         * @default false
         */
        get autoLoad(): boolean;
        /**
         * Determines whether the plugin should be have its symbols bound globally.
         *
         * Note: This should only be used by the native plugin loader.
         * @construct-only
         * @default false
         */
        get bind_global(): boolean;
        /**
         * Determines whether the plugin should be have its symbols bound globally.
         *
         * Note: This should only be used by the native plugin loader.
         * @construct-only
         * @default false
         */
        get bindGlobal(): boolean;
        /**
         * The category of this plugin.
         *
         * This property is used to organize plugins into categories in a user
         * interface.  It is recommended that an application has a well defined
         * set of categories that plugin authors should use, and put all plugins
         * that don't match this category into an "Other" category.
         * @construct-only
         * @default null
         */
        get category(): string;
        /**
         * A comma separated list of plugin id's that this plugin depends on.
         * @construct-only
         */
        get dependencies(): string[];
        /**
         * The full description of the plugin that will be used in a "more
         * information" section in a user interface.
         * @construct-only
         * @default null
         */
        get description(): string;
        /**
         * A unique value that can be used to identify plugins with the same id.
         *
         * This is an opaque token and may change in the future.
         * @since 0.44
         * @read-only
         * @default null
         */
        get discriminator(): string;
        /**
         * A XDG icon name for the plugin.  The actual use of this is determined by
         * the application/library using GPlugin.
         * @construct-only
         * @default null
         */
        get icon_name(): string;
        /**
         * A XDG icon name for the plugin.  The actual use of this is determined by
         * the application/library using GPlugin.
         * @construct-only
         * @default null
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
         * @construct-only
         * @default null
         */
        get id(): string;
        /**
         * Whether or not the plugin is considered an "internal" plugin.
         *
         * Defaults to `false`.
         * @construct-only
         * @default false
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
         * @construct-only
         * @default null
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
         * @construct-only
         * @default null
         */
        get licenseId(): string;
        /**
         * The text of the license for this plugin.  This should only be used when
         * the plugin is licensed under a license that is not listed at spdx.org.
         * @construct-only
         * @default null
         */
        get license_text(): string;
        /**
         * The text of the license for this plugin.  This should only be used when
         * the plugin is licensed under a license that is not listed at spdx.org.
         * @construct-only
         * @default null
         */
        get licenseText(): string;
        /**
         * The url to the text of the license.  This should primarily only be used
         * for licenses not listed at spdx.org.
         * @construct-only
         * @default null
         */
        get license_url(): string;
        /**
         * The url to the text of the license.  This should primarily only be used
         * for licenses not listed at spdx.org.
         * @construct-only
         * @default null
         */
        get licenseUrl(): string;
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to `false`.
         * @deprecated since 0.39.0: Use {@link GPlugin.PluginInfo.auto_load} instead.
         * @construct-only
         * @default false
         */
        get load_on_query(): boolean;
        /**
         * Whether or not the plugin should be loaded when it's queried.
         *
         * This is used by the loaders and may be useful to your application as
         * well.
         *
         * Defaults to `false`.
         * @deprecated since 0.39.0: Use {@link GPlugin.PluginInfo.auto_load} instead.
         * @construct-only
         * @default false
         */
        get loadOnQuery(): boolean;
        /**
         * The display name of the plugin.  This should be a translated string.
         * @construct-only
         * @default null
         */
        get name(): string;
        /**
         * The priority that this plugin should have when determining which plugin
         * to use when multiple plugins have the same id or provides. Higher values
         * take precedence over lower values.  If two plugins have the same id and
         * priority, the first one found will be used.
         * @since 0.32
         * @construct-only
         * @default 0
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
         * @since 0.32
         * @construct-only
         */
        get provides(): string[];
        /**
         * The ID of the {@link Gio.Settings} schema for the plugin.
         * @since 0.39
         * @construct-only
         * @default null
         */
        get settings_schema(): string;
        /**
         * The ID of the {@link Gio.Settings} schema for the plugin.
         * @since 0.39
         * @construct-only
         * @default null
         */
        get settingsSchema(): string;
        /**
         * A short description of the plugin that can be listed with the name in a
         * user interface.
         * @construct-only
         * @default null
         */
        get summary(): string;
        /**
         * Sets whether or not a plugin is unloadable. See
         * {@link GPlugin.PluginInfo.get_unloadable} for more information.
         * @since 0.35
         * @construct-only
         * @default true
         */
        get unloadable(): boolean;
        /**
         * The version of the plugin.  Preferably a semantic version.
         * @construct-only
         * @default null
         */
        get version(): string;
        /**
         * The url of the plugin that can be represented in a user interface.
         * @construct-only
         * @default null
         */
        get website(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PluginInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PluginInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the ABI or Application Binary Interface version that the plugin
         * is supposed to work against.
         * @returns The abi_version from `info`.
         */
        get_abi_version(): number;
        /**
         * Returns the authors of the plugin as specified in `info`.
         * @returns The authors from `info`.
         */
        get_authors(): string[];
        /**
         * Returns whether or not this plugin should be loaded when queried.  This is
         * useful for internal plugins that are adding functionality and should always
         * be turned on. The plugin loaders use this to make sure all plugins can
         * always be loaded.
         * @returns `true` if the plugin should be loaded when queried, `false`          otherwise.
         */
        get_auto_load(): boolean;
        /**
         * This property and therefore function is only used by the native plugin
         * loader.
         * @returns `true` if the plugin has requested to be loaded with its symbols          bound global, `false` if they should be bound locally.
         */
        get_bind_global(): boolean;
        /**
         * Returns the category of the plugin as specified in `info`.
         * @returns The category from `info`.
         */
        get_category(): string;
        /**
         * Returns the dependencies of the plugins as specified in `info`.
         * @returns The list of          dependencies from `info`.
         */
        get_dependencies(): string[];
        /**
         * Returns the description for the plugin as specified in `info`.
         * @returns The description from `info`.
         */
        get_description(): string;
        /**
         * Gets the discriminator from `info`.
         * @returns The discriminator.
         */
        get_discriminator(): string;
        /**
         * Returns the name of the icon for the plugin as specified in `info`.
         * @returns The icon name from `info`.
         */
        get_icon_name(): string;
        /**
         * Returns the id that the plugin identifies itself as.
         * @returns The id from `info`.
         */
        get_id(): string;
        /**
         * Gets the normalized version of the id from `info`.  That is, a version where
         * only alphanumeric and -'s are in the id.
         * @returns The normalized id of `info`.
         */
        get_id_normalized(): string;
        /**
         * Returns where or not this plugin is is considered an internal plugin.  An
         * internal plugin would be something like a plugin loader or another plugin
         * that should not be shown to users.
         * @returns `true` if the plugin is internal, `false` otherwise.
         */
        get_internal(): boolean;
        /**
         * Returns the liences id for the plugin as specified in `info`.
         * @returns The license-id from `info`.
         */
        get_license_id(): string;
        /**
         * Returns the license text for the plugin as specified in `info`.
         * @returns The text of the license from `info`.
         */
        get_license_text(): string;
        /**
         * Returns the url of the license for the plugin as specified in `info`
         * @returns The url of the license from `info`.
         */
        get_license_url(): string;
        /**
         * Returns whether or not this plugin should be loaded when queried.  This is
         * useful for internal plugins that are adding functionality and should always
         * be turned on. The plugin loaders use this to make sure all plugins can
         * always be loaded.
         * @returns `true` if the plugin should be loaded when queried, `false`          otherwise.
         */
        get_load_on_query(): boolean;
        /**
         * Returns the name of the plugin as specified in `info`.
         * @returns The name from `info`.
         */
        get_name(): string;
        /**
         * Gets the priority of the plugin as specified in `info`.
         * @returns The priority from `info`.
         */
        get_priority(): number;
        /**
         * Gets the provides of the plugin as specified in `info`.
         * @returns The list of          dependencies from `info`.
         */
        get_provides(): string[];
        /**
         * Returns the ID of the {@link Gio.Settings} schema as specified in `info`.
         * @returns The schema ID from `info`.
         */
        get_settings_schema(): string;
        /**
         * Returns the summery for the plugin as specified in `info`.
         * @returns The summary from `info`.
         */
        get_summary(): string;
        /**
         * Gets whether or not the plugin is unloadable. Certain libraries can not be
         * shutdown cleanly and then re-enabled during the life time of a program. A
         * plugin using one of these libraries should set the
         * {@link GPlugin.PluginInfo.unloadable} property to `false` to tell
         * {@link GPlugin.Manager} to not even attempt to unload it.
         * @returns `true` if the plugin is unloadable, otherwise `false`.
         */
        get_unloadable(): boolean;
        /**
         * Returns the version of the plugin as specified in `info`.
         * @returns The version from `info`.
         */
        get_version(): string;
        /**
         * Returns the website for the plugin as specified in `info`.
         * @returns The website from `info`.
         */
        get_website(): string;
    }

    /**
     * @gir-type Alias
     */
    type FileSourceClass = typeof FileSource;
    /**
     * @gir-type Alias
     */
    type LoaderClass = typeof Loader;
    /**
     * @gir-type Alias
     */
    type ManagerClass = typeof Manager;
    /**
     * @gir-type Alias
     */
    type PluginInfoClass = typeof PluginInfo;
    /**
     * @gir-type Alias
     */
    type PluginInterface = typeof Plugin;
    /**
     * @gir-type Alias
     */
    type SourceInterface = typeof Source;
    namespace Plugin {
        /**
         * Interface for implementing Plugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * The class closure for the {@link GPlugin.Plugin.SignalSignatures.state_changed | GPlugin.Plugin::state-changed}
             *                 signal.
             * @param oldstate
             * @param newstate
             * @virtual
             */
            vfunc_state_changed(oldstate: PluginState, newstate: PluginState): void;
        }

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
    /**
     * {@link GPlugin.Plugin} is an interface that represents what GPlugin expects for a
     * plugin.
     * @gir-type Interface
     */
    interface Plugin extends GObject.Object, Plugin.Interface {
        // Properties

        /**
         * The desired state of the plugin. Typically this just mirrors the state
         * property, but if a state change failed this will remain set to the state
         * that was attempted.
         *
         * See {@link GPlugin.Plugin.get_desired_state} for more information.
         * @since 0.38
         * @default GPlugin.PluginState.UNKNOWN
         */
        get desired_state(): PluginState;
        set desired_state(val: PluginState);
        /**
         * The desired state of the plugin. Typically this just mirrors the state
         * property, but if a state change failed this will remain set to the state
         * that was attempted.
         *
         * See {@link GPlugin.Plugin.get_desired_state} for more information.
         * @since 0.38
         * @default GPlugin.PluginState.UNKNOWN
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
         * @construct-only
         * @default null
         */
        get filename(): string;
        /**
         * The plugin info from this plugin.
         * @construct-only
         */
        get info(): PluginInfo;
        /**
         * The loader that loaded this plugin.
         * @construct-only
         */
        get loader(): Loader;
        /**
         * The plugin state that this plugin is in.
         * @default GPlugin.PluginState.UNKNOWN
         */
        get state(): PluginState;
        set state(val: PluginState);

        // Methods

        /**
         * Gets the desired state of the plugin. Typically this will hold the same
         * value of {@link GPlugin.Plugin.state}, but if a state change failed this
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
         * Gets the {@link GLib.Error}, if any, that the plugin returned during load or
         * unload.
         * @returns The error the plugin returned during load or          unload, or `null` if no error occurred.
         */
        get_error(): GLib.Error;
        /**
         * Returns the filename that `plugin` was loaded from.
         * @returns The filename of `plugin`.
         */
        get_filename(): string;
        /**
         * Returns the plugin info for `plugin`.
         * @returns The plugin info instance for `plugin`.
         */
        get_info(): PluginInfo;
        /**
         * Returns the loader that loaded `plugin`.
         * @returns The {@link GPlugin.Loader} that loaded `plugin`.
         */
        get_loader(): Loader;
        /**
         * Gets the current state of `plugin`.
         * @returns The current state of `plugin`.
         */
        get_state(): PluginState;
        /**
         * Sets the desired state of the plugin. This shouldn't need to be called by
         * anyone except {@link GPlugin.Loader} which manages the state of plugins.
         * @param state The desired state.
         */
        set_desired_state(state: PluginState): void;
        /**
         * Changes the state of `plugin` to `state`.  This function should only be called
         * by loaders.
         * @param state The new state for `plugin`.
         */
        set_state(state: PluginState): void;
    }

    export const Plugin: PluginNamespace & {
        new (): Plugin; // This allows `obj instanceof Plugin`
    };

    namespace Source {
        /**
         * Interface for implementing Source.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * This method is called when {@link GPlugin.Manager.refresh} is running. The
             * source should scan its available sources for plugins. For the filesystem
             * source, this is paths that have been registered with the manager.
             *
             * The implementation should return TRUE if it found a new unqueried plugin,
             * which will tell the manager to continue scanning.
             * @virtual
             */
            vfunc_scan(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SourceNamespace {
        $gtype: GObject.GType<Source>;
        prototype: Source;
    }
    /**
     * An interface that the manager will call during refresh to query plugins.
     * @gir-type Interface
     * @since 0.39
     */
    interface Source extends GObject.Object, Source.Interface {
        // Methods

        /**
         * This method is called when {@link GPlugin.Manager.refresh} is running. The
         * source should scan its available sources for plugins. For the filesystem
         * source, this is paths that have been registered with the manager.
         *
         * The implementation should return TRUE if it found a new unqueried plugin,
         * which will tell the manager to continue scanning.
         * @returns `true` if an unqueried plugin was found, `false` otherwise.
         */
        scan(): boolean;
    }

    export const Source: SourceNamespace & {
        new (): Source; // This allows `obj instanceof Source`
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

export default GPlugin;

// END
