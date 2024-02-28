/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './peas-1.0-ambient.d.ts';
import './peas-1.0-import.d.ts';
/**
 * Peas-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';

export namespace Peas {
    /**
     * These identify the various errors that can occur while
     * loading a plugin.
     */
    class PluginInfoError extends GLib.Error {
        // Own fields of Peas-1.0.PluginInfoError

        /**
         * The plugin failed to load.
         */
        LOADING_FAILED: number;
        /**
         * The plugin's loader was not found.
         */
        LOADER_NOT_FOUND: number;
        /**
         * A dependency of the plugin was not found.
         */
        DEP_NOT_FOUND: number;
        /**
         * A dependency of the plugin failed to load.
         */
        DEP_LOADING_FAILED: number;

        // Constructors of Peas-1.0.PluginInfoError

        constructor(options: { message: string; code: number });
    }

    function plugin_info_error_quark(): GLib.Quark;
    interface ExtensionSetForeachFunc {
        (set: ExtensionSet, info: PluginInfo, exten: Extension, data?: any | null): void;
    }
    interface FactoryFunc {
        (parameters: GObject.Parameter[]): GObject.Object;
    }
    module Engine {
        // Signal callback interfaces

        interface LoadPlugin {
            (info: PluginInfo): void;
        }

        interface UnloadPlugin {
            (info: PluginInfo): void;
        }

        // Constructor properties interface
    }

    /**
     * The #PeasEngine structure contains only private data and should only be
     * accessed using the provided API.
     */
    class Engine extends GObject.Object {
        // Own properties of Peas-1.0.Engine

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
        loaded_plugins: string[];
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
        loadedPlugins: string[];
        /**
         * If non-global plugin loaders should be used.
         *
         * See [ctor`Engine`.new_with_nonglobal_loaders] for more information.
         */
        nonglobal_loaders: boolean;
        /**
         * If non-global plugin loaders should be used.
         *
         * See [ctor`Engine`.new_with_nonglobal_loaders] for more information.
         */
        nonglobalLoaders: boolean;
        /**
         * The list of found plugins.
         *
         * This will be modified when [method`Engine`.rescan_plugins] is called.
         *
         * Note: the list belongs to the engine and should not be modified or freed.
         */
        readonly plugin_list: any;
        /**
         * The list of found plugins.
         *
         * This will be modified when [method`Engine`.rescan_plugins] is called.
         *
         * Note: the list belongs to the engine and should not be modified or freed.
         */
        readonly pluginList: any;

        // Constructors of Peas-1.0.Engine

        static ['new'](): Engine;

        static new_with_nonglobal_loaders(): Engine;

        // Owm methods of Peas-1.0.Engine

        /**
         * Return the existing instance of #PeasEngine or a subclass of it.
         *
         * If no #PeasEngine subclass has been instantiated yet, the first call
         * of this function will return a new instance of #PeasEngine.
         *
         * Note: this function should never be used when multiple threads are
         *   using libpeas API as it is not thread-safe.
         */
        static get_default(): Engine;

        // Owm methods of Peas-1.0.Engine

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
         * @param module_dir the plugin module directory.
         * @param data_dir the plugin data directory.
         */
        add_search_path(module_dir: string, data_dir?: string | null): void;
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
         * @param extension_type The implemented extension #GType.
         * @param prop_names an array of property names.
         * @param prop_values an array of property values.
         * @returns a new instance of #PeasExtension wrapping   the @extension_type instance, or %NULL.
         */
        create_extension(
            info: PluginInfo,
            extension_type: GObject.GType,
            prop_names: string[],
            prop_values: GObject.Value[],
        ): Extension;
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
         * @param loader_name The name of the loader to enable.
         */
        enable_loader(loader_name: string): void;
        /**
         * Triggers garbage collection on all the loaders currently owned by the
         * #PeasEngine.
         *
         * This can be used to force the loaders to destroy
         * managed objects that still hold references to objects that are about to
         * disappear.
         */
        garbage_collect(): void;
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
        get_loaded_plugins(): string[];
        /**
         * Gets the [struct`PluginInfo]` corresponding with `plugin_name,`
         * or %NULL if `plugin_name` was not found.
         * @param plugin_name A plugin name.
         * @returns the #PeasPluginInfo corresponding with   a given plugin module name.
         */
        get_plugin_info(plugin_name: string): PluginInfo;
        /**
         * Returns the list of [struct`PluginInfo]` known to the engine.
         * @returns a #GList of   #PeasPluginInfo. Note that the list belongs to the engine and should   not be freed.
         */
        get_plugin_list(): PluginInfo[];
        /**
         * Loads the plugin corresponding to `info` if it's not currently loaded.
         *
         * Emits the [signal`Engine:`:load-plugin] signal; loading the plugin
         * actually occurs in the default signal handler.
         * @param info A #PeasPluginInfo.
         * @returns whether the plugin has been successfully loaded.
         */
        load_plugin(info: PluginInfo): boolean;
        /**
         * Prepends a search path to the list of paths where to look for plugins.
         *
         * See Also: [method`Engine`.add_search_path]
         * @param module_dir the plugin module directory.
         * @param data_dir the plugin data directory.
         */
        prepend_search_path(module_dir: string, data_dir?: string | null): void;
        /**
         * Returns if `info` provides an extension for `extension_type`.
         *
         * If the `info` is not loaded than %FALSE will always be returned.
         *
         * Since libpeas 1.22, `extension_type` can be an Abstract [alias`GObject`.Type]
         * and not just an Interface [alias`GObject`.Type].
         * @param info A #PeasPluginInfo.
         * @param extension_type The extension #GType.
         * @returns if @info provides an extension for @extension_type.
         */
        provides_extension(info: PluginInfo, extension_type: GObject.GType): boolean;
        /**
         * Rescan all the registered directories to find new or updated plugins.
         *
         * Calling this function will make the newly installed plugin infos
         * be loaded by the engine, so the new plugins can be used without
         * restarting the application.
         */
        rescan_plugins(): void;
        /**
         * Sets the list of loaded plugins for `engine`.
         *
         * When this function is called, the #PeasEngine will load all the plugins whose
         * names are in `plugin_names,` and ensures all other active plugins are
         * unloaded.
         *
         * If `plugin_names` is %NULL, all plugins will be unloaded.
         * @param plugin_names A %NULL-terminated  array of plugin names, or %NULL.
         */
        set_loaded_plugins(plugin_names?: string[] | null): void;
        /**
         * Unloads the plugin corresponding to `info`.
         *
         * Emits the [signal`Engine:`:unload-plugin] signal; unloading the plugin
         * actually occurs in the default signal handler.
         * @param info A #PeasPluginInfo.
         * @returns whether the plugin has been successfully unloaded.
         */
        unload_plugin(info: PluginInfo): boolean;
    }

    module ExtensionBase {
        // Constructor properties interface
    }

    /**
     * Base class for C extensions.
     */
    abstract class ExtensionBase extends GObject.Object {
        // Own properties of Peas-1.0.ExtensionBase

        /**
         * The The full path of the directory where the plugin
         * should look for its data files.
         *
         * Note: This is the same path as that returned by
         * [method`PluginInfo`.get_data_dir].
         */
        readonly data_dir: string;
        /**
         * The The full path of the directory where the plugin
         * should look for its data files.
         *
         * Note: This is the same path as that returned by
         * [method`PluginInfo`.get_data_dir].
         */
        readonly dataDir: string;
        /**
         * The [struct`PluginInfo]` related to the current plugin.
         */
        plugin_info: PluginInfo;
        /**
         * The [struct`PluginInfo]` related to the current plugin.
         */
        pluginInfo: PluginInfo;

        // Owm methods of Peas-1.0.ExtensionBase

        /**
         * Get the path of the directory where the plugin should look for
         * its data files.
         * @returns A newly allocated string with the path of the   directory where the plugin should look for its data files
         */
        get_data_dir(): string;
        /**
         * Get information relative to `extbase`.
         * @returns the [struct@PluginInfo] relative   to the #PeasExtensionBase.
         */
        get_plugin_info(): PluginInfo;
    }

    module ExtensionSet {
        // Signal callback interfaces

        interface ExtensionAdded {
            (info: PluginInfo, exten: GObject.Object): void;
        }

        interface ExtensionRemoved {
            (info: PluginInfo, exten: GObject.Object): void;
        }

        // Constructor properties interface
    }

    /**
     * The #PeasExtensionSet structure contains only private data and should only
     * be accessed using the provided API.
     */
    class ExtensionSet<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Peas-1.0.ExtensionSet

        construct_properties: any;
        constructProperties: any;
        engine: Engine;
        extension_type: GObject.GType;
        extensionType: GObject.GType;

        // Constructors of Peas-1.0.ExtensionSet

        static ['new'](
            engine: Engine | null,
            exten_type: GObject.GType,
            prop_names: string[],
            prop_values: GObject.Value[],
        ): ExtensionSet;

        // Owm methods of Peas-1.0.ExtensionSet

        /**
         * Calls `func` for each [alias`Extension]`.
         * @param func A function call for each extension.
         */
        foreach(func: ExtensionSetForeachFunc): void;
        /**
         * Returns the [alias`Extension]` object corresponding to `info`.
         *
         * If the plugin doesn't provide such an extension, it returns %NULL.
         * @param info a #PeasPluginInfo
         * @returns a reference to a #PeasExtension
         */
        get_extension(info: PluginInfo): Extension | null;
    }

    module ObjectModule {
        // Constructor properties interface
    }

    /**
     * The #PeasObjectModule structure contains only private data and should only
     * be accessed using the provided API.
     */
    class ObjectModule extends GObject.TypeModule {
        // Own properties of Peas-1.0.ObjectModule

        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         *
         * Since 1.14
         */
        local_linkage: boolean;
        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         *
         * Since 1.14
         */
        localLinkage: boolean;
        module_name: string;
        moduleName: string;
        path: string;
        resident: boolean;
        symbol: string;

        // Owm methods of Peas-1.0.ObjectModule

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
         * @param exten_type The #GType of the extension you implement.
         * @param factory_func The #PeasFactoryFunc that will create the @exten_type   instance when requested.
         */
        register_extension_factory(exten_type: GObject.GType, factory_func: FactoryFunc): void;
        /**
         * Register `impl_type` as an extension which implements `extension_type`.
         *
         * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
         * and not just an Interface [alias`GObject`.Type].
         * @param exten_type The #GType of the extension you implement.
         * @param impl_type The #GType of your implementation of @exten_type.
         */
        register_extension_type(exten_type: GObject.GType, impl_type: GObject.GType): void;
    }

    /**
     * Provides an interface for activatable plugins.
     */
    class ActivatableInterface {}

    /**
     * Class structure for #PeasEngine.
     */
    class EngineClass {}

    class EnginePrivate {}

    /**
     * The class structure of #PeasExtensionBase.
     */
    class ExtensionBaseClass {}

    class ExtensionBasePrivate {}

    /**
     * The class structure for #PeasExtensionSet.
     */
    class ExtensionSetClass {}

    class ExtensionSetPrivate {}

    /**
     * The class structure for #PeasObjectModule.
     */
    class ObjectModuleClass {}

    class ObjectModulePrivate {}

    /**
     * The #PeasPluginInfo structure contains only private data and should only
     * be accessed using the provided API.
     */
    class PluginInfo {
        // Owm methods of Peas-1.0.PluginInfo

        static error_quark(): GLib.Quark;

        // Owm methods of Peas-1.0.PluginInfo

        /**
         * Gets a %NULL-terminated array of strings with the authors of the plugin.
         *
         * The relevant key in the plugin info file is "Authors".
         * @returns the plugin's author list.
         */
        get_authors(): string[];
        /**
         * Gets the copyright of the plugin.
         *
         * The relevant key in the plugin info file is "Copyright".
         * @returns the plugin's copyright information.
         */
        get_copyright(): string;
        /**
         * Gets the data dir of the plugin.
         *
         * The module data directory is the directory where a plugin should find its
         * runtime data. This is not a value read from the [struct`GLib`.KeyFile], but
         * rather a value provided by the [class`Engine]`, depending on where the plugin
         * file was found.
         * @returns the plugin's data dir.
         */
        get_data_dir(): string;
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
        get_dependencies(): string[];
        /**
         * Gets the description of the plugin.
         *
         * The description of the plugin should be a string presenting the purpose of
         * the plugin. It will typically be presented in a plugin's about box.
         *
         * The relevant key in the plugin info file is "Description".
         * @returns the plugin's description.
         */
        get_description(): string;
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
        get_external_data(key: string): string | null;
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
        get_help_uri(): string;
        /**
         * Gets the icon name of the plugin.
         *
         * The icon of the plugin will be presented in the plugin manager UI. If no
         * icon is specified, the default green puzzle icon will be used.
         *
         * The relevant key in the plugin info file is "Icon".
         * @returns the plugin's icon name.
         */
        get_icon_name(): string;
        /**
         * Gets the module directory.
         *
         * The module directory is the directory where the plugin file was found. This
         * is not a value from the [struct`GLib`.KeyFile], but rather a value provided by the
         * [class`Engine]`.
         * @returns the module directory.
         */
        get_module_dir(): string;
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
        get_module_name(): string;
        /**
         * Gets the name of the plugin.
         *
         * The name of a plugin should be a nice short string to be presented in UIs.
         *
         * The relevant key in the plugin info file is "Name".
         * @returns the plugin's name.
         */
        get_name(): string;
        /**
         * Creates a new [class`Gio`.Settings] for the given `schema_id` and if
         * gschemas.compiled is not in the module directory an attempt
         * will be made to create it.
         * @param schema_id The schema id.
         * @returns a new #GSettings.
         */
        get_settings(schema_id?: string | null): Gio.Settings | null;
        /**
         * Gets the version of the plugin.
         *
         * The relevant key in the plugin info file is "Version".
         * @returns the plugin's version.
         */
        get_version(): string;
        /**
         * Gets the website of the plugin.
         *
         * The relevant key in the plugin info file is "Website".
         * @returns the plugin's associated website.
         */
        get_website(): string;
        /**
         * Check if the plugin depends on another plugin.
         * @param module_name The name of the plugin to check.
         * @returns whether the plugin depends on the plugin @module_name.
         */
        has_dependency(module_name: string): boolean;
        /**
         * Check if the plugin is available.
         *
         * A plugin is marked as not available when there is no loader available to
         * load it, or when there has been an error when trying to load it previously.
         * If not available then `error` will be set.
         * @returns %TRUE if the plugin is available.
         */
        is_available(): boolean;
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
        is_builtin(): boolean;
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
        is_hidden(): boolean;
        /**
         * Check if the plugin is loaded.
         * @returns %TRUE if the plugin is loaded.
         */
        is_loaded(): boolean;
    }

    interface Activatable {
        // Own properties of Peas-1.0.Activatable

        /**
         * The object property contains the targetted object for this #PeasActivatable
         * instance.
         *
         * For example a toplevel window in a typical windowed application. It is set
         * at construction time and won't change.
         */
        object: GObject.Object;

        // Owm methods of Peas-1.0.Activatable

        /**
         * Activates the extension on the targetted object.
         *
         * On activation, the extension should hook itself to the object
         * where it makes sense.
         */
        activate(): void;
        /**
         * Deactivates the extension on the targetted object.
         *
         * On deactivation, an extension should remove itself from all the hooks it
         * used and should perform any cleanup required, so it can be unreffed safely
         * and without any more effect on the host application.
         */
        deactivate(): void;
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the targetted object, due to some event or user action.
         */
        update_state(): void;

        // Own virtual methods of Peas-1.0.Activatable

        /**
         * Activates the extension on the targetted object.
         *
         * On activation, the extension should hook itself to the object
         * where it makes sense.
         */
        vfunc_activate(): void;
        /**
         * Deactivates the extension on the targetted object.
         *
         * On deactivation, an extension should remove itself from all the hooks it
         * used and should perform any cleanup required, so it can be unreffed safely
         * and without any more effect on the host application.
         */
        vfunc_deactivate(): void;
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the targetted object, due to some event or user action.
         */
        vfunc_update_state(): void;
    }

    type Extension = GObject.Object;
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

export default Peas;
// END
