/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './peas-2-ambient.d.ts';
import './peas-2-import.d.ts';
/**
 * Peas-2
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
    interface ExtensionSetForeachFunc<A = GObject.Object> {
        (set: ExtensionSet, info: PluginInfo, extension: A, data?: any | null): void;
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
     * The #PeasEngine is the object which manages the plugins.
     *
     * Its role is twofold:
     *
     * - it will fetch all the information about the available plugins
     *   from all the registered plugin directories;
     * - it will provide you an API to load, control and unload your
     *   plugins and their extensions from within your application.
     */
    class Engine<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Peas-2.Engine

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

        // Constructors of Peas-2.Engine

        static ['new'](): Engine;

        static new_with_nonglobal_loaders(): Engine;

        // Owm methods of Peas-2.Engine

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

        // Owm methods of Peas-2.Engine

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
         * then this function will return a new instance of this implementation.
         *
         * See [method`Engine`.create_extension] for more information.
         * @param info A loaded #PeasPluginInfo.
         * @param extension_type The implemented extension #GType.
         * @param prop_names an array of property names.
         * @param prop_values an array of property values.
         * @returns a new instance of #GObject which meets the   prerequisites of @extension_type, or %NULL.
         */
        create_extension<T = GObject.Object>(
            info: PluginInfo,
            extension_type: GObject.GType,
            prop_names: string[],
            prop_values: GObject.Value[],
        ): T;
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
        dup_loaded_plugins(): string[];
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
         * Gets the [class`PluginInfo]` corresponding with `plugin_name,`
         * or %NULL if `plugin_name` was not found.
         * @param plugin_name A plugin name.
         * @returns the #PeasPluginInfo corresponding with   a given plugin module name.
         */
        get_plugin_info(plugin_name: string): PluginInfo;
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
         * Returns if `info` provides an extension for `extension_type`.
         *
         * If the `info` is not loaded than %FALSE will always be returned.
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
     *
     * #PeasExtensionBase can optionally be used as a base class for the extensions
     * of your plugin. By inheriting from it, you will make your extension able to
     * access the related [class`PluginInfo]`, and especially the location where all
     * the data of your plugin lives.
     *
     * Non-C extensions will usually not inherit from this class: Python
     * plugins automatically get a "plugin_info" attribute that serves
     * the same purpose.
     */
    abstract class ExtensionBase extends GObject.Object {
        // Own properties of Peas-2.ExtensionBase

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
         * The [class`PluginInfo]` related to the current plugin.
         */
        plugin_info: PluginInfo;
        /**
         * The [class`PluginInfo]` related to the current plugin.
         */
        pluginInfo: PluginInfo;

        // Owm methods of Peas-2.ExtensionBase

        /**
         * Get the path of the directory where the plugin should look for
         * its data files.
         * @returns A newly allocated string with the path of the   directory where the plugin should look for its data files
         */
        get_data_dir(): string;
        /**
         * Get information relative to `extbase`.
         * @returns the [class@PluginInfo] relative   to the #PeasExtensionBase.
         */
        get_plugin_info(): PluginInfo;
    }

    module ExtensionSet {
        // Signal callback interfaces

        interface ExtensionAdded {
            (info: PluginInfo, extension: GObject.Object): void;
        }

        interface ExtensionRemoved {
            (info: PluginInfo, extension: GObject.Object): void;
        }

        // Constructor properties interface
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
     */
    class ExtensionSet<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Own properties of Peas-2.ExtensionSet

        construct_properties: any;
        constructProperties: any;
        engine: Engine;
        extension_type: GObject.GType;
        extensionType: GObject.GType;

        // Constructors of Peas-2.ExtensionSet

        static ['new'](
            engine: Engine | null,
            exten_type: GObject.GType,
            prop_names: string[],
            prop_values: GObject.Value[],
        ): ExtensionSet;

        // Owm methods of Peas-2.ExtensionSet

        /**
         * Calls `func` for each [class`GObject`.Object].
         * @param func A function call for each extension.
         */
        foreach(func: ExtensionSetForeachFunc): void;
        /**
         * Returns the [class`GObject`.Object] object corresponding to `info`.
         *
         * If the plugin doesn't provide such an extension, it returns %NULL.
         * @param info a #PeasPluginInfo
         * @returns a reference to a #GObject
         */
        get_extension<T = GObject.Object>(info: PluginInfo): T;
    }

    module ObjectModule {
        // Constructor properties interface
    }

    /**
     * Type module which allows extension registration.
     *
     * #PeasObjectModule is a subclass of [class`GObject`.TypeModule] which allows
     * registration of extensions. It will be used by C extensions implementors to
     * register extension implementations from within the peas_register_types module
     * function.
     */
    class ObjectModule extends GObject.TypeModule {
        // Own properties of Peas-2.ObjectModule

        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         */
        local_linkage: boolean;
        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         */
        localLinkage: boolean;
        module_name: string;
        moduleName: string;
        path: string;
        resident: boolean;
        symbol: string;

        // Owm methods of Peas-2.ObjectModule

        /**
         * Register an implementation for an extension type through a factory
         * function `factory_func` which will instantiate the extension when
         * requested.
         *
         * This method is primarily meant to be used by native bindings (like gtkmm),
         * creating native types which cannot be instantiated correctly using
         * [ctor`GObject`.Object.new].  For other uses, you will usually prefer relying on
         * peas_object_module_register_extension_type().
         * @param exten_type The #GType of the extension you implement.
         * @param factory_func The #PeasFactoryFunc that will create the @exten_type   instance when requested.
         */
        register_extension_factory(exten_type: GObject.GType, factory_func: FactoryFunc): void;
        /**
         * Register `impl_type` as an extension which implements `extension_type`.
         * @param exten_type The #GType of the extension you implement.
         * @param impl_type The #GType of your implementation of @exten_type.
         */
        register_extension_type(exten_type: GObject.GType, impl_type: GObject.GType): void;
    }

    module PluginInfo {
        // Constructor properties interface
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
     * Authors=Steve Frécinaux &amp;lt;code`istique`.net&amp;gt;
     * Copyright=Copyright © 2009-10 Steve Frécinaux
     * Website=https://wiki.gnome.org/Projects/Libpeas
     * Help=http://library.gnome.org/devel/libpeas/stable/
     * Hidden=false
     * ```
     */
    class PluginInfo extends GObject.Object {
        // Own properties of Peas-2.PluginInfo

        readonly authors: string[];
        readonly builtin: boolean;
        readonly copyright: string;
        readonly dependencies: string[];
        readonly description: string;
        readonly help_uri: string;
        readonly helpUri: string;
        readonly hidden: boolean;
        readonly icon_name: string;
        readonly iconName: string;
        readonly loaded: boolean;
        readonly module_dir: string;
        readonly moduleDir: string;
        readonly module_name: string;
        readonly moduleName: string;
        readonly name: string;
        readonly version: string;
        readonly website: string;

        // Owm methods of Peas-2.PluginInfo

        static error_quark(): GLib.Quark;

        // Owm methods of Peas-2.PluginInfo

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
         * Creates a new #GResource for the given `filename`
         * located in the module directory. If `filename` is %NULL
         * then "${module_name}.gresource" will be loaded.
         * @param filename The filename of the resource, or %NULL.
         * @returns a new #GResource, or %NULL.
         */
        get_resource(filename?: string | null): Gio.Resource;
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
        /**
         * Loads the resource using peas_plugin_info_get_resource() and
         * registers it. The resource's lifetime will be automatically
         * handled by `info`.
         *
         * See peas_plugin_info_get_resource() for more information.
         * @param filename The filename of the resource, or %NULL.
         */
        load_resource(filename?: string | null): void;
    }

    class EngineClass {}

    /**
     * The class structure of #PeasExtensionBase.
     */
    class ExtensionBaseClass {}

    class ExtensionSetClass {}

    /**
     * The class structure for #PeasObjectModule.
     */
    class ObjectModuleClass {}

    class PluginInfoClass {}

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
