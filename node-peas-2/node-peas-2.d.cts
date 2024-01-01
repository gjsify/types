
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-peas-2-import.d.ts';
    
/**
 * Peas-2
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * These identify the various errors that can occur while
 * loading a plugin.
 */
export enum PluginInfoError {
    /**
     * The plugin failed to load.
     */
    LOADING_FAILED,
    /**
     * The plugin's loader was not found.
     */
    LOADER_NOT_FOUND,
    /**
     * A dependency of the plugin was not found.
     */
    DEP_NOT_FOUND,
    /**
     * A dependency of the plugin failed to load.
     */
    DEP_LOADING_FAILED,
}
/**
 * This function is passed to [method`ExtensionSet`.foreach] and
 * will be called for each extension in `set`.
 * @callback 
 * @param set A #PeasExtensionSet.
 * @param info A #PeasPluginInfo.
 * @param extension The extension instance.
 * @param data Optional data passed to the function.
 */
export interface ExtensionSetForeachFunc {
    (set: ExtensionSet, info: PluginInfo, extension: GObject.Object, data: any | null): void
}
/**
 * A #PeasFactoryFunc is a factory function which will instanciate a new
 * extension of a given type. [ctor`GObject`.Object.newv] is such a function.
 * 
 * It is used with [method`ObjectModule`.register_extension_factory].
 * @callback 
 * @param parameters The parameters.
 * @returns The created object.
 */
export interface FactoryFunc {
    (parameters: GObject.Parameter[]): GObject.Object
}
export module Engine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `load-plugin`
     */
    export interface LoadPluginSignalCallback {
        (info: PluginInfo): void
    }

    /**
     * Signal callback interface for `unload-plugin`
     */
    export interface UnloadPluginSignalCallback {
        (info: PluginInfo): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Peas-2.Peas.Engine

        /**
         * The list of loaded plugins.
         * 
         * This will be modified when [method`Engine`.load_plugin] or
         * [method`Engine`.unload_plugin] is called.
         * 
         * This can be used with [class`Gio`.Settings] to save the loaded plugins by
         * binding to this property after instantiating the engine by doing:
         * 
         * ```c
         *   g_settings_bind (gsettings_object,
         *                    LOADED_PLUGINS_KEY,
         *                    engine,
         *                    "loaded-plugins",
         *                    G_SETTINGS_BIND_DEFAULT);
         * ```
         * 
         * Note: notify will not be called when the engine is being destroyed.
         */
        loadedPlugins?: string[] | null
        /**
         * If non-global plugin loaders should be used.
         * 
         * See [ctor`Engine`.new_with_nonglobal_loaders] for more information.
         */
        nonglobalLoaders?: boolean | null
    }

}

export interface Engine extends Gio.ListModel {

    // Own properties of Peas-2.Peas.Engine

    /**
     * The list of loaded plugins.
     * 
     * This will be modified when [method`Engine`.load_plugin] or
     * [method`Engine`.unload_plugin] is called.
     * 
     * This can be used with [class`Gio`.Settings] to save the loaded plugins by
     * binding to this property after instantiating the engine by doing:
     * 
     * ```c
     *   g_settings_bind (gsettings_object,
     *                    LOADED_PLUGINS_KEY,
     *                    engine,
     *                    "loaded-plugins",
     *                    G_SETTINGS_BIND_DEFAULT);
     * ```
     * 
     * Note: notify will not be called when the engine is being destroyed.
     */
    loadedPlugins: string[]
    /**
     * If non-global plugin loaders should be used.
     * 
     * See [ctor`Engine`.new_with_nonglobal_loaders] for more information.
     */
    readonly nonglobalLoaders: boolean
    __gtype__: number

    // Owm methods of Peas-2.Peas.Engine

    /**
     * Appends a search path to the list of paths where to look for plugins.
     * 
     * A so-called "search path" actually consists of both a
     * module directory (where the shared libraries or language modules
     * lie) and a data directory (where the plugin data is).
     * 
     * The plugin will be able to use a correct data dir depending on
     * where it is installed, hence allowing to keep the plugin agnostic
     * when it comes to installation location: the same plugin can be
     * installed either in the system path or in the user's home directory,
     * without taking other special care than using
     * [method`PluginInfo`.get_data_dir] when looking for its data files.
     * 
     * If `data_dir` is %NULL, then it is set to the same value as
     * `module_dir`.
     * @param moduleDir the plugin module directory.
     * @param dataDir the plugin data directory.
     */
    addSearchPath(moduleDir: string, dataDir: string | null): void
    /**
     * If the plugin identified by `info` implements the `extension_type,`
     * then this function will return a new instance of this implementation.
     * 
     * See [method`Engine`.create_extension] for more information.
     * @param info A loaded #PeasPluginInfo.
     * @param extensionType The implemented extension #GType.
     * @param propNames an array of property names.
     * @param propValues an array of property values.
     * @returns a new instance of #GObject which meets the   prerequisites of @extension_type, or %NULL.
     */
    createExtension(info: PluginInfo, extensionType: GObject.GType, propNames: string[], propValues: any[]): GObject.Object
    /**
     * Returns the list of the names of all the loaded plugins.
     * 
     * If there is no plugin currently loaded, it will return an array containing a
     * single %NULL element.
     * 
     * Please note that the returned array is a newly allocated one: you will need
     * to free it using [func`GLib`.strfreev].
     * @returns A newly-allocated   %NULL-terminated array of strings.
     */
    dupLoadedPlugins(): string[]
    /**
     * Enable a loader, enables a loader for plugins.
     * 
     * The C plugin loader is always enabled. The other plugin
     * loaders are: gjs, lua5.1, python and python3.
     * 
     * For instance, the following code will enable Python 2 plugins
     * to be loaded:
     * 
     * ```c
     * peas_engine_enable_loader (engine, "python");
     * ```
     * 
     * Note: plugin loaders used to be shared across `PeasEngine`s so enabling
     *   a loader on one #PeasEngine would enable it on all #PeasEngines.
     *   This behavior has been kept to avoid breaking applications,
     *   however a warning has been added to help applications transition.
     * @param loaderName The name of the loader to enable.
     */
    enableLoader(loaderName: string): void
    /**
     * Triggers garbage collection on all the loaders currently owned by the
     * #PeasEngine.
     * 
     * This can be used to force the loaders to destroy
     * managed objects that still hold references to objects that are about to
     * disappear.
     */
    garbageCollect(): void
    /**
     * Gets the [class`PluginInfo]` corresponding with `plugin_name,`
     * or %NULL if `plugin_name` was not found.
     * @param pluginName A plugin name.
     * @returns the #PeasPluginInfo corresponding with   a given plugin module name.
     */
    getPluginInfo(pluginName: string): PluginInfo
    /**
     * Loads the plugin corresponding to `info` if it's not currently loaded.
     * 
     * Emits the [signal`Engine:`:load-plugin] signal; loading the plugin
     * actually occurs in the default signal handler.
     * @param info A #PeasPluginInfo.
     * @returns whether the plugin has been successfully loaded.
     */
    loadPlugin(info: PluginInfo): boolean
    /**
     * Returns if `info` provides an extension for `extension_type`.
     * 
     * If the `info` is not loaded than %FALSE will always be returned.
     * @param info A #PeasPluginInfo.
     * @param extensionType The extension #GType.
     * @returns if @info provides an extension for @extension_type.
     */
    providesExtension(info: PluginInfo, extensionType: GObject.GType): boolean
    /**
     * Rescan all the registered directories to find new or updated plugins.
     * 
     * Calling this function will make the newly installed plugin infos
     * be loaded by the engine, so the new plugins can be used without
     * restarting the application.
     */
    rescanPlugins(): void
    /**
     * Sets the list of loaded plugins for `engine`.
     * 
     * When this function is called, the #PeasEngine will load all the plugins whose
     * names are in `plugin_names,` and ensures all other active plugins are
     * unloaded.
     * 
     * If `plugin_names` is %NULL, all plugins will be unloaded.
     * @param pluginNames A %NULL-terminated  array of plugin names, or %NULL.
     */
    setLoadedPlugins(pluginNames: string[] | null): void
    /**
     * Unloads the plugin corresponding to `info`.
     * 
     * Emits the [signal`Engine:`:unload-plugin] signal; unloading the plugin
     * actually occurs in the default signal handler.
     * @param info A #PeasPluginInfo.
     * @returns whether the plugin has been successfully unloaded.
     */
    unloadPlugin(info: PluginInfo): boolean

    // Own signals of Peas-2.Peas.Engine

    connect(sigName: "load-plugin", callback: Engine.LoadPluginSignalCallback): number
    on(sigName: "load-plugin", callback: Engine.LoadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-plugin", callback: Engine.LoadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-plugin", callback: Engine.LoadPluginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-plugin", ...args: any[]): void
    connect(sigName: "unload-plugin", callback: Engine.UnloadPluginSignalCallback): number
    on(sigName: "unload-plugin", callback: Engine.UnloadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unload-plugin", callback: Engine.UnloadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unload-plugin", callback: Engine.UnloadPluginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unload-plugin", ...args: any[]): void

    // Class property signals of Peas-2.Peas.Engine

    connect(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): number
    on(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loaded-plugins", ...args: any[]): void
    connect(sigName: "notify::nonglobal-loaders", callback: (...args: any[]) => void): number
    on(sigName: "notify::nonglobal-loaders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nonglobal-loaders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nonglobal-loaders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nonglobal-loaders", ...args: any[]): void
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

/**
 * The #PeasEngine is the object which manages the plugins.
 * 
 * Its role is twofold:
 * 
 * - it will fetch all the information about the available plugins
 *   from all the registered plugin directories;
 * - it will provide you an API to load, control and unload your
 *   plugins and their extensions from within your application.
 * @class 
 */
export class Engine extends GObject.Object {

    // Own properties of Peas-2.Peas.Engine

    static name: string

    // Constructors of Peas-2.Peas.Engine

    constructor(config?: Engine.ConstructorProperties) 
    /**
     * Return a new instance of #PeasEngine.
     * 
     * If no default #PeasEngine has been instantiated yet,
     * the first call of this function will set the default
     * engine as the new instance of #PeasEngine.
     * @constructor 
     * @returns a new instance of #PeasEngine.
     */
    constructor() 
    /**
     * Return a new instance of #PeasEngine.
     * 
     * If no default #PeasEngine has been instantiated yet,
     * the first call of this function will set the default
     * engine as the new instance of #PeasEngine.
     * @constructor 
     * @returns a new instance of #PeasEngine.
     */
    static new(): Engine
    /**
     * Return a new instance of #PeasEngine which will use non-global
     * plugin loaders instead of the default global ones.
     * 
     * This allows multiple threads to each have a #PeasEngine and be used without
     * internal locking.
     * 
     * Note: due to CPython's GIL the python and python3
     *   plugin loaders are always global.
     * @constructor 
     * @returns a new instance of #PeasEngine that uses non-global loaders.
     */
    static newWithNonglobalLoaders(): Engine
    _init(config?: Engine.ConstructorProperties): void
    /**
     * Return the existing instance of #PeasEngine or a subclass of it.
     * 
     * If no #PeasEngine subclass has been instantiated yet, the first call
     * of this function will return a new instance of #PeasEngine.
     * 
     * Note: this function should never be used when multiple threads are
     *   using libpeas API as it is not thread-safe.
     * @returns the existing instance of #PeasEngine.
     */
    static getDefault(): Engine
}

export module ExtensionBase {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Peas-2.Peas.ExtensionBase

        /**
         * The [class`PluginInfo]` related to the current plugin.
         */
        pluginInfo?: PluginInfo | null
    }

}

export interface ExtensionBase {

    // Own properties of Peas-2.Peas.ExtensionBase

    /**
     * The The full path of the directory where the plugin
     * should look for its data files.
     * 
     * Note: This is the same path as that returned by
     * [method`PluginInfo`.get_data_dir].
     */
    readonly dataDir: string | null
    /**
     * The [class`PluginInfo]` related to the current plugin.
     */
    readonly pluginInfo: PluginInfo
    __gtype__: number

    // Own fields of Peas-2.Peas.ExtensionBase

    parentInstance: GObject.Object

    // Owm methods of Peas-2.Peas.ExtensionBase

    /**
     * Get the path of the directory where the plugin should look for
     * its data files.
     * @returns A newly allocated string with the path of the   directory where the plugin should look for its data files
     */
    getDataDir(): string | null
    /**
     * Get information relative to `extbase`.
     * @returns the [class@PluginInfo] relative   to the #PeasExtensionBase.
     */
    getPluginInfo(): PluginInfo

    // Class property signals of Peas-2.Peas.ExtensionBase

    connect(sigName: "notify::data-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-dir", ...args: any[]): void
    connect(sigName: "notify::plugin-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin-info", ...args: any[]): void
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

/**
 * Base class for C extensions.
 * 
 * #PeasExtensionBase can optionally be used as a base class for the extensions
 * of your plugin. By inheriting from it, you will make your extension able to
 * access the related [class`PluginInfo]`, and especially the location where all
 * the data of your plugin lives.
 * 
 * Non-C extensions will usually not inherit from this class: Python
 * plugins automatically get a "plugin_info" attribute that serves
 * the same purpose.
 * @class 
 */
export class ExtensionBase extends GObject.Object {

    // Own properties of Peas-2.Peas.ExtensionBase

    static name: string

    // Constructors of Peas-2.Peas.ExtensionBase

    constructor(config?: ExtensionBase.ConstructorProperties) 
    _init(config?: ExtensionBase.ConstructorProperties): void
}

export module ExtensionSet {

    // Signal callback interfaces

    /**
     * Signal callback interface for `extension-added`
     */
    export interface ExtensionAddedSignalCallback {
        (info: PluginInfo, extension: GObject.Object): void
    }

    /**
     * Signal callback interface for `extension-removed`
     */
    export interface ExtensionRemovedSignalCallback {
        (info: PluginInfo, extension: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Peas-2.Peas.ExtensionSet

        constructProperties?: any | null
        engine?: Engine | null
        extensionType?: GObject.GType | null
    }

}

export interface ExtensionSet extends Gio.ListModel {

    // Own properties of Peas-2.Peas.ExtensionSet

    readonly constructProperties: any
    readonly engine: Engine
    readonly extensionType: GObject.GType
    __gtype__: number

    // Owm methods of Peas-2.Peas.ExtensionSet

    /**
     * Calls `func` for each [class`GObject`.Object].
     * @param func A function call for each extension.
     */
    foreach(func: ExtensionSetForeachFunc): void
    /**
     * Returns the [class`GObject`.Object] object corresponding to `info`.
     * 
     * If the plugin doesn't provide such an extension, it returns %NULL.
     * @param info a #PeasPluginInfo
     * @returns a reference to a #GObject
     */
    getExtension(info: PluginInfo): GObject.Object | null

    // Own signals of Peas-2.Peas.ExtensionSet

    connect(sigName: "extension-added", callback: ExtensionSet.ExtensionAddedSignalCallback): number
    on(sigName: "extension-added", callback: ExtensionSet.ExtensionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extension-added", callback: ExtensionSet.ExtensionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extension-added", callback: ExtensionSet.ExtensionAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "extension-added", extension: GObject.Object, ...args: any[]): void
    connect(sigName: "extension-removed", callback: ExtensionSet.ExtensionRemovedSignalCallback): number
    on(sigName: "extension-removed", callback: ExtensionSet.ExtensionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extension-removed", callback: ExtensionSet.ExtensionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extension-removed", callback: ExtensionSet.ExtensionRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "extension-removed", extension: GObject.Object, ...args: any[]): void

    // Class property signals of Peas-2.Peas.ExtensionSet

    connect(sigName: "notify::construct-properties", callback: (...args: any[]) => void): number
    on(sigName: "notify::construct-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::construct-properties", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::construct-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::construct-properties", ...args: any[]): void
    connect(sigName: "notify::engine", callback: (...args: any[]) => void): number
    on(sigName: "notify::engine", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::engine", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::engine", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::engine", ...args: any[]): void
    connect(sigName: "notify::extension-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extension-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extension-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extension-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extension-type", ...args: any[]): void
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

/**
 * Proxy for a set of extensions of the same type.
 * 
 * A #PeasExtensionSet is an object which proxies method calls to a set
 * of actual extensions.  The application writer will use these objects
 * in order to call methods on several instances of an actual extension
 * exported by all the currently loaded plugins.
 * 
 * #PeasExtensionSet will automatically track loading and unloading of
 * the plugins, and signal appearance and disappearance of new
 * extension instances.  You should connect to those signals if you
 * wish to call specific methods on loading or unloading time.
 * 
 * Here is the code for a typical setup of #PeasExtensionSet with
 * ExampleActivatable as the watched extension point, and GtkWindow
 * instances as the target objects:
 * 
 * ```c
 * static void
 * on_extension_added (PeasExtensionSet   *set,
 *                     PeasPluginInfo     *info,
 *                     ExampleActivatable *activatable)
 * {
 *   example_activatable_activate (activatable);
 * }
 * 
 * static void
 * on_extension_removed (PeasExtensionSet   *set,
 *                       PeasPluginInfo     *info,
 *                       ExampleActivatable *activatable)
 * {
 *   example_activatable_deactivate (activatable);
 * }
 * 
 * PeasExtensionSet *
 * setup_extension_set (PeasEngine *engine,
 *                      GtkWindow  *window)
 * {
 *   PeasExtensionSet *set;
 * 
 *   set = peas_extension_set_new (engine, EXAMPLE_TYPE_ACTIVATABLE,
 *                                 "object", window, NULL);
 *   peas_extension_set_foreach (set,
 *                               (PeasExtensionSetForeachFunc) on_extension_added,
 *                               NULL);
 *   g_signal_connect (set, "extension-added",
 *                     G_CALLBACK (on_extension_added), NULL);
 *   g_signal_connect (set, "extension-removed",
 *                     G_CALLBACK (on_extension_removed), NULL);
 *   return set;
 * }
 * ```
 * @class 
 */
export class ExtensionSet extends GObject.Object {

    // Own properties of Peas-2.Peas.ExtensionSet

    static name: string

    // Constructors of Peas-2.Peas.ExtensionSet

    constructor(config?: ExtensionSet.ConstructorProperties) 
    /**
     * Create a new #PeasExtensionSet for the `exten_type` extension type.
     * 
     * If `engine` is %NULL, then the default engine will be used.
     * 
     * See [ctor`ExtensionSet`.new] for more information.
     * @constructor 
     * @param engine A #PeasEngine, or %NULL.
     * @param extenType the extension #GType.
     * @param propNames an array of property names.
     * @param propValues an array of property values.
     * @returns a new instance of #PeasExtensionSet.
     */
    constructor(engine: Engine | null, extenType: GObject.GType, propNames: string[], propValues: any[]) 
    /**
     * Create a new #PeasExtensionSet for the `exten_type` extension type.
     * 
     * If `engine` is %NULL, then the default engine will be used.
     * 
     * See [ctor`ExtensionSet`.new] for more information.
     * @constructor 
     * @param engine A #PeasEngine, or %NULL.
     * @param extenType the extension #GType.
     * @param propNames an array of property names.
     * @param propValues an array of property values.
     * @returns a new instance of #PeasExtensionSet.
     */
    static new(engine: Engine | null, extenType: GObject.GType, propNames: string[], propValues: any[]): ExtensionSet
    _init(config?: ExtensionSet.ConstructorProperties): void
}

export module ObjectModule {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.TypePlugin.ConstructorProperties, GObject.TypeModule.ConstructorProperties {

        // Own constructor properties of Peas-2.Peas.ObjectModule

        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         */
        localLinkage?: boolean | null
        moduleName?: string | null
        path?: string | null
        resident?: boolean | null
        symbol?: string | null
    }

}

export interface ObjectModule extends GObject.TypePlugin {

    // Own properties of Peas-2.Peas.ObjectModule

    /**
     * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
     */
    readonly localLinkage: boolean
    readonly moduleName: string | null
    readonly path: string | null
    readonly resident: boolean
    readonly symbol: string | null
    __gtype__: number

    // Own fields of Peas-2.Peas.ObjectModule

    parentInstance: any

    // Owm methods of Peas-2.Peas.ObjectModule

    /**
     * Register an implementation for an extension type through a factory
     * function `factory_func` which will instantiate the extension when
     * requested.
     * 
     * This method is primarily meant to be used by native bindings (like gtkmm),
     * creating native types which cannot be instantiated correctly using
     * [ctor`GObject`.Object.new].  For other uses, you will usually prefer relying on
     * peas_object_module_register_extension_type().
     * @param extenType The #GType of the extension you implement.
     * @param factoryFunc The #PeasFactoryFunc that will create the `exten_type`   instance when requested.
     */
    registerExtensionFactory(extenType: GObject.GType, factoryFunc: FactoryFunc): void
    /**
     * Register `impl_type` as an extension which implements `extension_type`.
     * @param extenType The #GType of the extension you implement.
     * @param implType The #GType of your implementation of `exten_type`.
     */
    registerExtensionType(extenType: GObject.GType, implType: GObject.GType): void

    // Conflicting methods

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     * @returns %FALSE if the plugin needed to be loaded and  loading the plugin failed.
     */
    use(): boolean

    // Overloads of use

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void

    // Class property signals of Peas-2.Peas.ObjectModule

    connect(sigName: "notify::local-linkage", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-linkage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-linkage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-linkage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-linkage", ...args: any[]): void
    connect(sigName: "notify::module-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::module-name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::resident", callback: (...args: any[]) => void): number
    on(sigName: "notify::resident", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resident", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resident", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resident", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: (...args: any[]) => void): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::symbol", ...args: any[]): void
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

/**
 * Type module which allows extension registration.
 * 
 * #PeasObjectModule is a subclass of [class`GObject`.TypeModule] which allows
 * registration of extensions. It will be used by C extensions implementors to
 * register extension implementations from within the peas_register_types module
 * function.
 * @class 
 */
export class ObjectModule extends GObject.TypeModule {

    // Own properties of Peas-2.Peas.ObjectModule

    static name: string

    // Constructors of Peas-2.Peas.ObjectModule

    constructor(config?: ObjectModule.ConstructorProperties) 
    _init(config?: ObjectModule.ConstructorProperties): void
}

export module PluginInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PluginInfo {

    // Own properties of Peas-2.Peas.PluginInfo

    readonly authors: string[]
    readonly builtin: boolean
    readonly copyright: string | null
    readonly dependencies: string[]
    readonly description: string | null
    readonly helpUri: string | null
    readonly hidden: boolean
    readonly iconName: string | null
    readonly loaded: boolean
    readonly moduleDir: string | null
    readonly moduleName: string | null
    readonly name: string | null
    readonly version: string | null
    readonly website: string | null
    __gtype__: number

    // Owm methods of Peas-2.Peas.PluginInfo

    /**
     * Gets a %NULL-terminated array of strings with the authors of the plugin.
     * 
     * The relevant key in the plugin info file is "Authors".
     * @returns the plugin's author list.
     */
    getAuthors(): string[]
    /**
     * Gets the copyright of the plugin.
     * 
     * The relevant key in the plugin info file is "Copyright".
     * @returns the plugin's copyright information.
     */
    getCopyright(): string
    /**
     * Gets the data dir of the plugin.
     * 
     * The module data directory is the directory where a plugin should find its
     * runtime data. This is not a value read from the [struct`GLib`.KeyFile], but
     * rather a value provided by the [class`Engine]`, depending on where the plugin
     * file was found.
     * @returns the plugin's data dir.
     */
    getDataDir(): string
    /**
     * Gets the dependencies of the plugin.
     * 
     * The [class`Engine]` will always ensure that the dependencies of a plugin are
     * loaded when the said plugin is loaded. It means that dependencies are
     * loaded before the plugin, and unloaded after it. Circular dependencies of
     * plugins lead to undefined loading order.
     * 
     * The relevant key in the plugin info file is "Depends".
     * @returns the plugin's dependencies.
     */
    getDependencies(): string[]
    /**
     * Gets the description of the plugin.
     * 
     * The description of the plugin should be a string presenting the purpose of
     * the plugin. It will typically be presented in a plugin's about box.
     * 
     * The relevant key in the plugin info file is "Description".
     * @returns the plugin's description.
     */
    getDescription(): string
    /**
     * Gets external data specified for the plugin.
     * 
     * External data is specified in the plugin info file prefixed with X-. For
     * example, if a key/value pair `X-Peas=1` is specified in the key file, you
     * can use "Peas" for `key` to retrieve the value "1".
     * 
     * Note: that you can omit the X- prefix when retrieving the value,
     * but not when specifying the value in the file.
     * @param key The key to lookup.
     * @returns the external data, or %NULL if the external data could not be found.
     */
    getExternalData(key: string): string | null
    /**
     * Gets the help URI of the plugin.
     * 
     * The Help URI of a plugin will typically be presented by the plugin manager
     * as a "Help" button linking to the URI. It can either be a HTTP URL on some
     * website or a ghelp: URI if a Gnome help page is available for the plugin.
     * 
     * The relevant key in the plugin info file is "Help". Other platform-specific
     * keys exist for platform-specific help files. Those are "Help-GNOME",
     * "Help-Windows" and "Help-MacOS-X".
     * @returns the plugin's help URI.
     */
    getHelpUri(): string
    /**
     * Gets the icon name of the plugin.
     * 
     * The icon of the plugin will be presented in the plugin manager UI. If no
     * icon is specified, the default green puzzle icon will be used.
     * 
     * The relevant key in the plugin info file is "Icon".
     * @returns the plugin's icon name.
     */
    getIconName(): string
    /**
     * Gets the module directory.
     * 
     * The module directory is the directory where the plugin file was found. This
     * is not a value from the [struct`GLib`.KeyFile], but rather a value provided by the
     * [class`Engine]`.
     * @returns the module directory.
     */
    getModuleDir(): string
    /**
     * Gets the module name.
     * 
     * The module name will be used to find the actual plugin. The way this value
     * will be used depends on the loader (i.e. on the language) of the plugin.
     * This value is also used to uniquely identify a particular plugin.
     * 
     * The relevant key in the plugin info file is "Module".
     * @returns the module name.
     */
    getModuleName(): string
    /**
     * Gets the name of the plugin.
     * 
     * The name of a plugin should be a nice short string to be presented in UIs.
     * 
     * The relevant key in the plugin info file is "Name".
     * @returns the plugin's name.
     */
    getName(): string
    /**
     * Creates a new #GResource for the given `filename`
     * located in the module directory. If `filename` is %NULL
     * then "${module_name}.gresource" will be loaded.
     * @param filename The filename of the resource, or %NULL.
     * @returns a new #GResource, or %NULL.
     */
    getResource(filename: string | null): Gio.Resource
    /**
     * Creates a new [class`Gio`.Settings] for the given `schema_id` and if
     * gschemas.compiled is not in the module directory an attempt
     * will be made to create it.
     * @param schemaId The schema id.
     * @returns a new #GSettings.
     */
    getSettings(schemaId: string | null): Gio.Settings | null
    /**
     * Gets the version of the plugin.
     * 
     * The relevant key in the plugin info file is "Version".
     * @returns the plugin's version.
     */
    getVersion(): string
    /**
     * Gets the website of the plugin.
     * 
     * The relevant key in the plugin info file is "Website".
     * @returns the plugin's associated website.
     */
    getWebsite(): string
    /**
     * Check if the plugin depends on another plugin.
     * @param moduleName The name of the plugin to check.
     * @returns whether the plugin depends on the plugin @module_name.
     */
    hasDependency(moduleName: string): boolean
    /**
     * Check if the plugin is available.
     * 
     * A plugin is marked as not available when there is no loader available to
     * load it, or when there has been an error when trying to load it previously.
     * If not available then `error` will be set.
     * @returns %TRUE if the plugin is available.
     */
    isAvailable(): boolean
    /**
     * Check if the plugin is a builtin plugin.
     * 
     * A builtin plugin is a plugin which cannot be enabled or disabled by the user
     * through a plugin manager (like
     * [PeasGtkPluginManager](https://gnome.pages.gitlab.gnome.org/libpeas/libpeas-gtk-1.0/class.PluginManager.html)).
     * Loading or unloading such plugins is the responsibility of the application
     * alone. Most applications will usually load those plugins immediately after
     * the initialization of the #PeasEngine.
     * 
     * The relevant key in the plugin info file is "Builtin".
     * @returns %TRUE if the plugin is a builtin plugin, %FALSE   if not.
     */
    isBuiltin(): boolean
    /**
     * Check if the plugin is a hidden plugin.
     * 
     * A hidden plugin is a plugin which cannot be seen by a
     * user through a plugin manager (like
     * [PeasGtkPluginManager](https://gnome.pages.gitlab.gnome.org/libpeas/libpeas-gtk-1.0/class.PluginManager.html)).
     * Loading and
     * unloading such plugins is the responsibility of the application alone or
     * through plugins that depend on them.
     * 
     * The relevant key in the plugin info file is "Hidden".
     * @returns %TRUE if the plugin is a hidden plugin, %FALSE   if not.
     */
    isHidden(): boolean
    /**
     * Check if the plugin is loaded.
     * @returns %TRUE if the plugin is loaded.
     */
    isLoaded(): boolean
    /**
     * Loads the resource using peas_plugin_info_get_resource() and
     * registers it. The resource's lifetime will be automatically
     * handled by `info`.
     * 
     * See peas_plugin_info_get_resource() for more information.
     * @param filename The filename of the resource, or %NULL.
     */
    loadResource(filename: string | null): void

    // Class property signals of Peas-2.Peas.PluginInfo

    connect(sigName: "notify::authors", callback: (...args: any[]) => void): number
    on(sigName: "notify::authors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::authors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::authors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::authors", ...args: any[]): void
    connect(sigName: "notify::builtin", callback: (...args: any[]) => void): number
    on(sigName: "notify::builtin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::builtin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::builtin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::builtin", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (...args: any[]) => void): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::dependencies", callback: (...args: any[]) => void): number
    on(sigName: "notify::dependencies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dependencies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dependencies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dependencies", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::help-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::help-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::help-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::help-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::help-uri", ...args: any[]): void
    connect(sigName: "notify::hidden", callback: (...args: any[]) => void): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hidden", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::loaded", callback: (...args: any[]) => void): number
    on(sigName: "notify::loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loaded", ...args: any[]): void
    connect(sigName: "notify::module-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::module-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::module-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::module-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::module-dir", ...args: any[]): void
    connect(sigName: "notify::module-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::module-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::website", callback: (...args: any[]) => void): number
    on(sigName: "notify::website", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::website", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::website", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::website", ...args: any[]): void
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

/**
 * A #PeasPluginInfo contains all the information available about a plugin.
 * 
 * All this information comes from the related plugin info file, whose file
 * extension is ".plugin". Here is an example of such a plugin file, in the
 * [struct`GLib`.KeyFile] format:
 * 
 * ```toml
 * [Plugin]
 * Module=helloworld
 * Depends=foo;bar;baz
 * Loader=python
 * Name=Hello World
 * Description=Displays "Hello World"
 * Authors=Steve Frécinaux &lt;code`istique`.net&gt;
 * Copyright=Copyright © 2009-10 Steve Frécinaux
 * Website=https://wiki.gnome.org/Projects/Libpeas
 * Help=http://library.gnome.org/devel/libpeas/stable/
 * Hidden=false
 * ```
 * @class 
 */
export class PluginInfo extends GObject.Object {

    // Own properties of Peas-2.Peas.PluginInfo

    static name: string

    // Constructors of Peas-2.Peas.PluginInfo

    constructor(config?: PluginInfo.ConstructorProperties) 
    _init(config?: PluginInfo.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export interface EngineClass {

    // Own fields of Peas-2.Peas.EngineClass

    parentClass: GObject.ObjectClass
}

export abstract class EngineClass {

    // Own properties of Peas-2.Peas.EngineClass

    static name: string
}

export interface ExtensionBaseClass {

    // Own fields of Peas-2.Peas.ExtensionBaseClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The class structure of #PeasExtensionBase.
 * @record 
 */
export abstract class ExtensionBaseClass {

    // Own properties of Peas-2.Peas.ExtensionBaseClass

    static name: string
}

export interface ExtensionSetClass {

    // Own fields of Peas-2.Peas.ExtensionSetClass

    parentClass: GObject.ObjectClass
}

export abstract class ExtensionSetClass {

    // Own properties of Peas-2.Peas.ExtensionSetClass

    static name: string
}

export interface ObjectModuleClass {

    // Own fields of Peas-2.Peas.ObjectModuleClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.TypeModuleClass
}

/**
 * The class structure for #PeasObjectModule.
 * @record 
 */
export abstract class ObjectModuleClass {

    // Own properties of Peas-2.Peas.ObjectModuleClass

    static name: string
}

export interface PluginInfoClass {

    // Own fields of Peas-2.Peas.PluginInfoClass

    parentClass: GObject.ObjectClass
}

export abstract class PluginInfoClass {

    // Own properties of Peas-2.Peas.PluginInfoClass

    static name: string
}

// END