// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Peas-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GIRepository from './GIRepository-2.0';

export namespace Peas {

/**
 * These identify the various errors that can occur while
 * loading a plugin.
 */
enum PluginInfoError {
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
function pluginInfoErrorQuark(): GLib.Quark
/**
 * This function is passed to [method`ExtensionSet`.foreach] and
 * will be called for each extension in `set`.
 * @callback 
 * @param set A #PeasExtensionSet.
 * @param info A #PeasPluginInfo.
 * @param exten A #PeasExtension.
 * @param data Optional data passed to the function.
 */
interface ExtensionSetForeachFunc {
    (set: ExtensionSet, info: PluginInfo, exten: Extension, data: object | null): void
}
/**
 * A #PeasFactoryFunc is a factory function which will instanciate a new
 * extension of a given type. [ctor`GObject`.Object.newv] is such a function.
 * 
 * It is used with [method`ObjectModule`.register_extension_factory].
 * @callback 
 * @param parameters The parameters.
 */
interface FactoryFunc {
    (parameters: GObject.Parameter[]): GObject.Object
}
interface Activatable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Peas-1.0.Peas.Activatable

    /**
     * The object property contains the targetted object for this #PeasActivatable
     * instance.
     * 
     * For example a toplevel window in a typical windowed application. It is set
     * at construction time and won't change.
     */
    object?: GObject.Object | null
}

interface Activatable {

    // Own properties of Peas-1.0.Peas.Activatable

    /**
     * The object property contains the targetted object for this #PeasActivatable
     * instance.
     * 
     * For example a toplevel window in a typical windowed application. It is set
     * at construction time and won't change.
     */
    readonly object: GObject.Object

    // Owm methods of Peas-1.0.Peas.Activatable

    /**
     * Activates the extension on the targetted object.
     * 
     * On activation, the extension should hook itself to the object
     * where it makes sense.
     */
    activate(): void
    /**
     * Deactivates the extension on the targetted object.
     * 
     * On deactivation, an extension should remove itself from all the hooks it
     * used and should perform any cleanup required, so it can be unreffed safely
     * and without any more effect on the host application.
     */
    deactivate(): void
    /**
     * Triggers an update of the extension internal state to take into account
     * state changes in the targetted object, due to some event or user action.
     */
    updateState(): void

    // Class property signals of Peas-1.0.Peas.Activatable

    connect(sigName: "notify::object", callback: (...args: any[]) => void): number
    on(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Interface for activatable plugins.
 * @interface 
 */
class Activatable extends GObject.Object {

    // Own properties of Peas-1.0.Peas.Activatable

    static name: string
    static $gtype: GObject.GType<Activatable>

    // Constructors of Peas-1.0.Peas.Activatable

    constructor(config?: Activatable_ConstructProps) 
    _init(config?: Activatable_ConstructProps): void
}

interface Engine_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Peas-1.0.Peas.Engine

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

/**
 * Signal callback interface for `load-plugin`
 */
interface Engine_LoadPluginSignalCallback {
    (info: PluginInfo): void
}

/**
 * Signal callback interface for `unload-plugin`
 */
interface Engine_UnloadPluginSignalCallback {
    (info: PluginInfo): void
}

interface Engine {

    // Own properties of Peas-1.0.Peas.Engine

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
    /**
     * The list of found plugins.
     * 
     * This will be modified when [method`Engine`.rescan_plugins] is called.
     * 
     * Note: the list belongs to the engine and should not be modified or freed.
     */
    readonly pluginList: object

    // Own fields of Peas-1.0.Peas.Engine

    parent: GObject.Object

    // Owm methods of Peas-1.0.Peas.Engine

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
     * then this function will return a new instance of this implementation,
     * wrapped in a new [alias`Extension]` instance. Otherwise, it will return %NULL.
     * 
     * Since libpeas 1.22, `extension_type` can be an Abstract [alias`GObject`.Type]
     * and not just an Interface [alias`GObject`.Type].
     * 
     * See [method`Engine`.create_extension] for more information.
     * @param info A loaded #PeasPluginInfo.
     * @param extensionType The implemented extension #GType.
     * @param propNames an array of property names.
     * @param propValues an array of property values.
     */
    createExtension(info: PluginInfo, extensionType: GObject.GType, propNames: string[], propValues: any[]): Extension
    /**
     * Enable a loader, enables a loader for plugins.
     * 
     * The C plugin loader is always enabled. The other plugin
     * loaders are: lua5.1, python and python3.
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
     * Returns the list of the names of all the loaded plugins.
     * 
     * If there is no plugin currently loaded, it will return an array containing a
     * single %NULL element.
     * 
     * Please note that the returned array is a newly allocated one: you will need
     * to free it using [func`GLib`.strfreev].
     */
    getLoadedPlugins(): string[]
    /**
     * Gets the [struct`PluginInfo]` corresponding with `plugin_name,`
     * or %NULL if `plugin_name` was not found.
     * @param pluginName A plugin name.
     */
    getPluginInfo(pluginName: string): PluginInfo
    /**
     * Returns the list of [struct`PluginInfo]` known to the engine.
     */
    getPluginList(): PluginInfo[]
    /**
     * Loads the plugin corresponding to `info` if it's not currently loaded.
     * 
     * Emits the [signal`Engine:`:load-plugin] signal; loading the plugin
     * actually occurs in the default signal handler.
     * @param info A #PeasPluginInfo.
     */
    loadPlugin(info: PluginInfo): boolean
    /**
     * Prepends a search path to the list of paths where to look for plugins.
     * 
     * See Also: [method`Engine`.add_search_path]
     * @param moduleDir the plugin module directory.
     * @param dataDir the plugin data directory.
     */
    prependSearchPath(moduleDir: string, dataDir: string | null): void
    /**
     * Returns if `info` provides an extension for `extension_type`.
     * 
     * If the `info` is not loaded than %FALSE will always be returned.
     * 
     * Since libpeas 1.22, `extension_type` can be an Abstract [alias`GObject`.Type]
     * and not just an Interface [alias`GObject`.Type].
     * @param info A #PeasPluginInfo.
     * @param extensionType The extension #GType.
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
     */
    unloadPlugin(info: PluginInfo): boolean

    // Own signals of Peas-1.0.Peas.Engine

    connect(sigName: "load-plugin", callback: Engine_LoadPluginSignalCallback): number
    on(sigName: "load-plugin", callback: Engine_LoadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-plugin", callback: Engine_LoadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-plugin", callback: Engine_LoadPluginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-plugin", ...args: any[]): void
    connect(sigName: "unload-plugin", callback: Engine_UnloadPluginSignalCallback): number
    on(sigName: "unload-plugin", callback: Engine_UnloadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unload-plugin", callback: Engine_UnloadPluginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unload-plugin", callback: Engine_UnloadPluginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unload-plugin", ...args: any[]): void

    // Class property signals of Peas-1.0.Peas.Engine

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
    connect(sigName: "notify::plugin-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin-list", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #PeasEngine structure contains only private data and should only be
 * accessed using the provided API.
 * @class 
 */
class Engine extends GObject.Object {

    // Own properties of Peas-1.0.Peas.Engine

    static name: string
    static $gtype: GObject.GType<Engine>

    // Constructors of Peas-1.0.Peas.Engine

    constructor(config?: Engine_ConstructProps) 
    /**
     * Return a new instance of #PeasEngine.
     * 
     * If no default #PeasEngine has been instantiated yet,
     * the first call of this function will set the default
     * engine as the new instance of #PeasEngine.
     * @constructor 
     */
    constructor() 
    /**
     * Return a new instance of #PeasEngine.
     * 
     * If no default #PeasEngine has been instantiated yet,
     * the first call of this function will set the default
     * engine as the new instance of #PeasEngine.
     * @constructor 
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
     */
    static newWithNonglobalLoaders(): Engine
    _init(config?: Engine_ConstructProps): void
    /**
     * Return the existing instance of #PeasEngine or a subclass of it.
     * 
     * If no #PeasEngine subclass has been instantiated yet, the first call
     * of this function will return a new instance of #PeasEngine.
     * 
     * Note: this function should never be used when multiple threads are
     *   using libpeas API as it is not thread-safe.
     */
    static getDefault(): Engine
}

interface ExtensionBase_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Peas-1.0.Peas.ExtensionBase

    /**
     * The [struct`PluginInfo]` related to the current plugin.
     */
    pluginInfo?: PluginInfo | null
}

interface ExtensionBase {

    // Own properties of Peas-1.0.Peas.ExtensionBase

    /**
     * The The full path of the directory where the plugin
     * should look for its data files.
     * 
     * Note: This is the same path as that returned by
     * [method`PluginInfo`.get_data_dir].
     */
    readonly dataDir: string
    /**
     * The [struct`PluginInfo]` related to the current plugin.
     */
    readonly pluginInfo: PluginInfo

    // Own fields of Peas-1.0.Peas.ExtensionBase

    parent: GObject.Object
    priv: ExtensionBasePrivate

    // Owm methods of Peas-1.0.Peas.ExtensionBase

    /**
     * Get the path of the directory where the plugin should look for
     * its data files.
     */
    getDataDir(): string
    /**
     * Get information relative to `extbase`.
     */
    getPluginInfo(): PluginInfo

    // Class property signals of Peas-1.0.Peas.ExtensionBase

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Base class for C extensions.
 * @class 
 */
class ExtensionBase extends GObject.Object {

    // Own properties of Peas-1.0.Peas.ExtensionBase

    static name: string
    static $gtype: GObject.GType<ExtensionBase>

    // Constructors of Peas-1.0.Peas.ExtensionBase

    constructor(config?: ExtensionBase_ConstructProps) 
    _init(config?: ExtensionBase_ConstructProps): void
}

interface ExtensionSet_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Peas-1.0.Peas.ExtensionSet

    constructProperties?: object | null
    engine?: Engine | null
    extensionType?: GObject.GType | null
}

/**
 * Signal callback interface for `extension-added`
 */
interface ExtensionSet_ExtensionAddedSignalCallback {
    (info: PluginInfo, exten: GObject.Object): void
}

/**
 * Signal callback interface for `extension-removed`
 */
interface ExtensionSet_ExtensionRemovedSignalCallback {
    (info: PluginInfo, exten: GObject.Object): void
}

interface ExtensionSet {

    // Own properties of Peas-1.0.Peas.ExtensionSet

    readonly constructProperties: object
    readonly engine: Engine
    readonly extensionType: GObject.GType

    // Own fields of Peas-1.0.Peas.ExtensionSet

    parent: GObject.Object
    priv: ExtensionSetPrivate

    // Owm methods of Peas-1.0.Peas.ExtensionSet

    /**
     * Calls `func` for each [alias`Extension]`.
     * @param func A function call for each extension.
     */
    foreach(func: ExtensionSetForeachFunc): void
    /**
     * Returns the [alias`Extension]` object corresponding to `info`.
     * 
     * If the plugin doesn't provide such an extension, it returns %NULL.
     * @param info a #PeasPluginInfo
     */
    getExtension(info: PluginInfo): Extension | null

    // Own signals of Peas-1.0.Peas.ExtensionSet

    connect(sigName: "extension-added", callback: ExtensionSet_ExtensionAddedSignalCallback): number
    on(sigName: "extension-added", callback: ExtensionSet_ExtensionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extension-added", callback: ExtensionSet_ExtensionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extension-added", callback: ExtensionSet_ExtensionAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "extension-added", exten: GObject.Object, ...args: any[]): void
    connect(sigName: "extension-removed", callback: ExtensionSet_ExtensionRemovedSignalCallback): number
    on(sigName: "extension-removed", callback: ExtensionSet_ExtensionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extension-removed", callback: ExtensionSet_ExtensionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extension-removed", callback: ExtensionSet_ExtensionRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "extension-removed", exten: GObject.Object, ...args: any[]): void

    // Class property signals of Peas-1.0.Peas.ExtensionSet

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #PeasExtensionSet structure contains only private data and should only
 * be accessed using the provided API.
 * @class 
 */
class ExtensionSet extends GObject.Object {

    // Own properties of Peas-1.0.Peas.ExtensionSet

    static name: string
    static $gtype: GObject.GType<ExtensionSet>

    // Constructors of Peas-1.0.Peas.ExtensionSet

    constructor(config?: ExtensionSet_ConstructProps) 
    /**
     * Create a new #PeasExtensionSet for the `exten_type` extension type.
     * 
     * If `engine` is %NULL, then the default engine will be used.
     * 
     * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
     * and not just an Interface [alias`GObject`.Type].
     * 
     * See [ctor`ExtensionSet`.new] for more information.
     * @constructor 
     * @param engine A #PeasEngine, or %NULL.
     * @param extenType the extension #GType.
     * @param propNames an array of property names.
     * @param propValues an array of property values.
     */
    constructor(engine: Engine | null, extenType: GObject.GType, propNames: string[], propValues: any[]) 
    /**
     * Create a new #PeasExtensionSet for the `exten_type` extension type.
     * 
     * If `engine` is %NULL, then the default engine will be used.
     * 
     * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
     * and not just an Interface [alias`GObject`.Type].
     * 
     * See [ctor`ExtensionSet`.new] for more information.
     * @constructor 
     * @param engine A #PeasEngine, or %NULL.
     * @param extenType the extension #GType.
     * @param propNames an array of property names.
     * @param propValues an array of property values.
     */
    static new(engine: Engine | null, extenType: GObject.GType, propNames: string[], propValues: any[]): ExtensionSet
    _init(config?: ExtensionSet_ConstructProps): void
}

interface ObjectModule_ConstructProps extends GObject.TypePlugin_ConstructProps, GObject.TypeModule_ConstructProps {

    // Own constructor properties of Peas-1.0.Peas.ObjectModule

    /**
     * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
     * 
     * Since 1.14
     */
    localLinkage?: boolean | null
    moduleName?: string | null
    path?: string | null
    resident?: boolean | null
    symbol?: string | null
}

interface ObjectModule extends GObject.TypePlugin {

    // Own properties of Peas-1.0.Peas.ObjectModule

    /**
     * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
     * 
     * Since 1.14
     */
    readonly localLinkage: boolean
    readonly moduleName: string
    readonly path: string
    readonly resident: boolean
    readonly symbol: string

    // Own fields of Peas-1.0.Peas.ObjectModule

    parent: GObject.TypeModule
    priv: ObjectModulePrivate

    // Owm methods of Peas-1.0.Peas.ObjectModule

    /**
     * Register an implementation for an extension type through a factory
     * function `factory_func` which will instantiate the extension when
     * requested.
     * 
     * This method is primarily meant to be used by native bindings (like gtkmm),
     * creating native types which cannot be instantiated correctly using
     * [ctor`GObject`.Object.new].  For other uses, you will usually prefer relying on
     * peas_object_module_register_extension_type().
     * 
     * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
     * and not just an Interface [alias`GObject`.Type].
     * @param extenType The #GType of the extension you implement.
     * @param factoryFunc The #PeasFactoryFunc that will create the `exten_type`   instance when requested.
     */
    registerExtensionFactory(extenType: GObject.GType, factoryFunc: FactoryFunc): void
    /**
     * Register `impl_type` as an extension which implements `extension_type`.
     * 
     * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
     * and not just an Interface [alias`GObject`.Type].
     * @param extenType The #GType of the extension you implement.
     * @param implType The #GType of your implementation of `exten_type`.
     */
    registerExtensionType(extenType: GObject.GType, implType: GObject.GType): void

    // Conflicting methods

    use(...args: any[]): any

    // Class property signals of Peas-1.0.Peas.ObjectModule

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #PeasObjectModule structure contains only private data and should only
 * be accessed using the provided API.
 * @class 
 */
class ObjectModule extends GObject.TypeModule {

    // Own properties of Peas-1.0.Peas.ObjectModule

    static name: string
    static $gtype: GObject.GType<ObjectModule>

    // Constructors of Peas-1.0.Peas.ObjectModule

    constructor(config?: ObjectModule_ConstructProps) 
    _init(config?: ObjectModule_ConstructProps): void
}

interface ActivatableInterface {

    // Own fields of Peas-1.0.Peas.ActivatableInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    activate: (activatable: Activatable) => void
    deactivate: (activatable: Activatable) => void
    updateState: (activatable: Activatable) => void
}

/**
 * Provides an interface for activatable plugins.
 * @record 
 */
abstract class ActivatableInterface {

    // Own properties of Peas-1.0.Peas.ActivatableInterface

    static name: string
}

interface EngineClass {

    // Own fields of Peas-1.0.Peas.EngineClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    loadPlugin: (engine: Engine, info: PluginInfo) => void
    unloadPlugin: (engine: Engine, info: PluginInfo) => void
}

/**
 * Class structure for #PeasEngine.
 * @record 
 */
abstract class EngineClass {

    // Own properties of Peas-1.0.Peas.EngineClass

    static name: string
}

interface EnginePrivate {
}

class EnginePrivate {

    // Own properties of Peas-1.0.Peas.EnginePrivate

    static name: string
}

interface ExtensionBaseClass {

    // Own fields of Peas-1.0.Peas.ExtensionBaseClass

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
abstract class ExtensionBaseClass {

    // Own properties of Peas-1.0.Peas.ExtensionBaseClass

    static name: string
}

interface ExtensionBasePrivate {
}

class ExtensionBasePrivate {

    // Own properties of Peas-1.0.Peas.ExtensionBasePrivate

    static name: string
}

interface ExtensionSetClass {

    // Own fields of Peas-1.0.Peas.ExtensionSetClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    call: (set: ExtensionSet, methodName: string, args: GIRepository.Argument) => boolean
    extensionAdded: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    extensionRemoved: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
}

/**
 * The class structure for #PeasExtensionSet.
 * @record 
 */
abstract class ExtensionSetClass {

    // Own properties of Peas-1.0.Peas.ExtensionSetClass

    static name: string
}

interface ExtensionSetPrivate {
}

class ExtensionSetPrivate {

    // Own properties of Peas-1.0.Peas.ExtensionSetPrivate

    static name: string
}

interface ObjectModuleClass {

    // Own fields of Peas-1.0.Peas.ObjectModuleClass

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
abstract class ObjectModuleClass {

    // Own properties of Peas-1.0.Peas.ObjectModuleClass

    static name: string
}

interface ObjectModulePrivate {
}

class ObjectModulePrivate {

    // Own properties of Peas-1.0.Peas.ObjectModulePrivate

    static name: string
}

interface PluginInfo {

    // Owm methods of Peas-1.0.Peas.PluginInfo

    /**
     * Gets a %NULL-terminated array of strings with the authors of the plugin.
     * 
     * The relevant key in the plugin info file is "Authors".
     */
    getAuthors(): string[]
    /**
     * Gets the copyright of the plugin.
     * 
     * The relevant key in the plugin info file is "Copyright".
     */
    getCopyright(): string
    /**
     * Gets the data dir of the plugin.
     * 
     * The module data directory is the directory where a plugin should find its
     * runtime data. This is not a value read from the [struct`GLib`.KeyFile], but
     * rather a value provided by the [class`Engine]`, depending on where the plugin
     * file was found.
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
     */
    getDependencies(): string[]
    /**
     * Gets the description of the plugin.
     * 
     * The description of the plugin should be a string presenting the purpose of
     * the plugin. It will typically be presented in a plugin's about box.
     * 
     * The relevant key in the plugin info file is "Description".
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
     */
    getHelpUri(): string
    /**
     * Gets the icon name of the plugin.
     * 
     * The icon of the plugin will be presented in the plugin manager UI. If no
     * icon is specified, the default green puzzle icon will be used.
     * 
     * The relevant key in the plugin info file is "Icon".
     */
    getIconName(): string
    /**
     * Gets the module directory.
     * 
     * The module directory is the directory where the plugin file was found. This
     * is not a value from the [struct`GLib`.KeyFile], but rather a value provided by the
     * [class`Engine]`.
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
     */
    getModuleName(): string
    /**
     * Gets the name of the plugin.
     * 
     * The name of a plugin should be a nice short string to be presented in UIs.
     * 
     * The relevant key in the plugin info file is "Name".
     */
    getName(): string
    /**
     * Creates a new [class`Gio`.Settings] for the given `schema_id` and if
     * gschemas.compiled is not in the module directory an attempt
     * will be made to create it.
     * @param schemaId The schema id.
     */
    getSettings(schemaId: string | null): Gio.Settings | null
    /**
     * Gets the version of the plugin.
     * 
     * The relevant key in the plugin info file is "Version".
     */
    getVersion(): string
    /**
     * Gets the website of the plugin.
     * 
     * The relevant key in the plugin info file is "Website".
     */
    getWebsite(): string
    /**
     * Check if the plugin depends on another plugin.
     * @param moduleName The name of the plugin to check.
     */
    hasDependency(moduleName: string): boolean
    /**
     * Check if the plugin is available.
     * 
     * A plugin is marked as not available when there is no loader available to
     * load it, or when there has been an error when trying to load it previously.
     * If not available then `error` will be set.
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
     */
    isHidden(): boolean
    /**
     * Check if the plugin is loaded.
     */
    isLoaded(): boolean
}

/**
 * The #PeasPluginInfo structure contains only private data and should only
 * be accessed using the provided API.
 * @record 
 */
class PluginInfo {

    // Own properties of Peas-1.0.Peas.PluginInfo

    static name: string

    // Constructors of Peas-1.0.Peas.PluginInfo

    static errorQuark(): GLib.Quark
}

    type Extension = GObject.Object
}
export default Peas;