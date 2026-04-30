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

export namespace Peas {
    /**
     * Peas-2
     */

    /**
     * These identify the various errors that can occur while
     * loading a plugin.
     * @gir-type Enum
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

    /**
     * @gir-type Callback
     */
    interface ExtensionSetForeachFunc<A = GObject.Object> {
        (set: ExtensionSet, info: PluginInfo, extension: A, data: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface FactoryFunc {
        (parameters: GObject.Parameter[]): GObject.Object;
    }
    namespace Engine {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The load-plugin signal is emitted when a plugin is being loaded.
             *
             * The plugin is being loaded in the default handler. Hence, if you want to
             * perform some action before the plugin is loaded, you should use
             * {@link GObject.signal_connect}, but if you want to perform some action *after* the
             * plugin is loaded (the most common case), you should use
             * {@link GObject.signal_connect_after}.
             * @signal
             * @run-last
             */
            'load-plugin': (arg0: PluginInfo) => void;
            /**
             * The unload-plugin signal is emitted when a plugin is being unloaded.
             *
             * The plugin is being unloaded in the default handler. Hence, if you want to
             * perform some action before the plugin is unloaded (the most common case),
             * you should use {@link GObject.signal_connect}, but if you want to perform
             * some action after the plugin is unloaded (the most common case), you should
             * use {@link GObject.signal_connect_after}.
             * @signal
             * @run-last
             */
            'unload-plugin': (arg0: PluginInfo) => void;
            'notify::loaded-plugins': (pspec: GObject.ParamSpec) => void;
            'notify::nonglobal-loaders': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            loaded_plugins: string[];
            loadedPlugins: string[];
            nonglobal_loaders: boolean;
            nonglobalLoaders: boolean;
        }
    }

    /**
     * The {@link Peas.Engine} is the object which manages the plugins.
     *
     * Its role is twofold:
     *
     * - it will fetch all the information about the available plugins
     *   from all the registered plugin directories;
     * - it will provide you an API to load, control and unload your
     *   plugins and their extensions from within your application.
     * @gir-type Class
     */
    class Engine<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<Engine>;

        // Properties

        /**
         * The list of loaded plugins.
         *
         * This will be modified when {@link Engine.load_plugin} or
         * {@link Engine.unload_plugin} is called.
         *
         * This can be used with {@link Gio.Settings} to save the loaded plugins by
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
        get loaded_plugins(): string[];
        set loaded_plugins(val: string[]);
        /**
         * The list of loaded plugins.
         *
         * This will be modified when {@link Engine.load_plugin} or
         * {@link Engine.unload_plugin} is called.
         *
         * This can be used with {@link Gio.Settings} to save the loaded plugins by
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
        get loadedPlugins(): string[];
        set loadedPlugins(val: string[]);
        /**
         * If non-global plugin loaders should be used.
         *
         * See {@link Engine.new_with_nonglobal_loaders} for more information.
         * @construct-only
         * @default false
         */
        get nonglobal_loaders(): boolean;
        /**
         * If non-global plugin loaders should be used.
         *
         * See {@link Engine.new_with_nonglobal_loaders} for more information.
         * @construct-only
         * @default false
         */
        get nonglobalLoaders(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Engine.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Engine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Engine;

        static new_with_nonglobal_loaders(): Engine;

        // Signals

        /** @signal */
        connect<K extends keyof Engine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Engine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Engine.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Engine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Return the existing instance of {@link Peas.Engine} or a subclass of it.
         *
         * If no {@link Peas.Engine} subclass has been instantiated yet, the first call
         * of this function will return a new instance of {@link Peas.Engine}.
         *
         * Note: this function should never be used when multiple threads are
         *   using libpeas API as it is not thread-safe.
         */
        static get_default(): Engine;

        // Methods

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
         * {@link PluginInfo.get_data_dir} when looking for its data files.
         *
         * If `data_dir` is `null`, then it is set to the same value as
         * `module_dir`.
         * @param module_dir the plugin module directory.
         * @param data_dir the plugin data directory.
         */
        add_search_path(module_dir: string, data_dir: string | null): void;
        /**
         * If the plugin identified by `info` implements the `extension_type`,
         * then this function will return a new instance of this implementation.
         *
         * See {@link Engine.create_extension} for more information.
         * @param info A loaded {@link Peas.PluginInfo}.
         * @param extension_type The implemented extension {@link GObject.GType}.
         * @param prop_names an array of property names.
         * @param prop_values an array of property values.
         * @returns a new instance of {@link GObject.Object} which meets the   prerequisites of `extension_type`, or `null`.
         */
        create_extension<T = GObject.Object>(
            info: PluginInfo,
            extension_type: GObject.GType,
            prop_names: string[],
            prop_values: (GObject.Value | any)[],
        ): T;
        /**
         * Returns the list of the names of all the loaded plugins.
         *
         * If there is no plugin currently loaded, it will return an array containing a
         * single `null` element.
         *
         * Please note that the returned array is a newly allocated one: you will need
         * to free it using {@link GLib.strfreev}.
         * @returns A newly-allocated   `null`-terminated array of strings.
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
         * Note: plugin loaders used to be shared across {@link Peas.Engine}s so enabling
         *   a loader on one {@link Peas.Engine} would enable it on all `PeasEngines`.
         *   This behavior has been kept to avoid breaking applications,
         *   however a warning has been added to help applications transition.
         * @param loader_name The name of the loader to enable.
         */
        enable_loader(loader_name: string): void;
        /**
         * Triggers garbage collection on all the loaders currently owned by the
         * {@link Peas.Engine}.
         *
         * This can be used to force the loaders to destroy
         * managed objects that still hold references to objects that are about to
         * disappear.
         */
        garbage_collect(): void;
        /**
         * Gets the {@link PluginInfo} corresponding with `plugin_name`,
         * or `null` if `plugin_name` was not found.
         * @param plugin_name A plugin name.
         * @returns the {@link Peas.PluginInfo} corresponding with   a given plugin module name.
         */
        get_plugin_info(plugin_name: string): PluginInfo;
        /**
         * Loads the plugin corresponding to `info` if it's not currently loaded.
         *
         * Emits the `Peas.Engine::load-plugin` signal; loading the plugin
         * actually occurs in the default signal handler.
         * @param info A {@link Peas.PluginInfo}.
         * @returns whether the plugin has been successfully loaded.
         */
        load_plugin(info: PluginInfo): boolean;
        /**
         * Returns if `info` provides an extension for `extension_type`.
         *
         * If the `info` is not loaded than `false` will always be returned.
         * @param info A {@link Peas.PluginInfo}.
         * @param extension_type The extension {@link GObject.GType}.
         * @returns if `info` provides an extension for `extension_type`.
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
         * When this function is called, the {@link Peas.Engine} will load all the plugins whose
         * names are in `plugin_names`, and ensures all other active plugins are
         * unloaded.
         *
         * If `plugin_names` is `null`, all plugins will be unloaded.
         * @param plugin_names A `null`-terminated  array of plugin names, or `null`.
         */
        set_loaded_plugins(plugin_names: string[] | null): void;
        /**
         * Unloads the plugin corresponding to `info`.
         *
         * Emits the `Peas.Engine::unload-plugin` signal; unloading the plugin
         * actually occurs in the default signal handler.
         * @param info A {@link Peas.PluginInfo}.
         * @returns whether the plugin has been successfully unloaded.
         */
        unload_plugin(info: PluginInfo): boolean;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }

    namespace ExtensionBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data-dir': (pspec: GObject.ParamSpec) => void;
            'notify::plugin-info': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_dir: string;
            dataDir: string;
            plugin_info: PluginInfo;
            pluginInfo: PluginInfo;
        }
    }

    /**
     * Base class for C extensions.
     *
     * {@link Peas.ExtensionBase} can optionally be used as a base class for the extensions
     * of your plugin. By inheriting from it, you will make your extension able to
     * access the related {@link PluginInfo}, and especially the location where all
     * the data of your plugin lives.
     *
     * Non-C extensions will usually not inherit from this class: Python
     * plugins automatically get a "plugin_info" attribute that serves
     * the same purpose.
     * @gir-type Class
     */
    abstract class ExtensionBase extends GObject.Object {
        static $gtype: GObject.GType<ExtensionBase>;

        // Properties

        /**
         * The The full path of the directory where the plugin
         * should look for its data files.
         *
         * Note: This is the same path as that returned by
         * {@link PluginInfo.get_data_dir}.
         * @read-only
         * @default null
         */
        get data_dir(): string;
        /**
         * The The full path of the directory where the plugin
         * should look for its data files.
         *
         * Note: This is the same path as that returned by
         * {@link PluginInfo.get_data_dir}.
         * @read-only
         * @default null
         */
        get dataDir(): string;
        /**
         * The {@link PluginInfo} related to the current plugin.
         * @construct-only
         */
        get plugin_info(): PluginInfo;
        /**
         * The {@link PluginInfo} related to the current plugin.
         * @construct-only
         */
        get pluginInfo(): PluginInfo;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExtensionBase.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ExtensionBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ExtensionBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtensionBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ExtensionBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtensionBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ExtensionBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ExtensionBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the path of the directory where the plugin should look for
         * its data files.
         * @returns A newly allocated string with the path of the   directory where the plugin should look for its data files
         */
        get_data_dir(): string;
        /**
         * Get information relative to `extbase`.
         * @returns the {@link PluginInfo} relative   to the {@link Peas.ExtensionBase}.
         */
        get_plugin_info(): PluginInfo;
    }

    namespace ExtensionSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new extension has been added to the {@link Peas.ExtensionSet}.
             *
             * It happens when a new plugin implementing the extension set's extension
             * type is loaded.
             *
             * You should connect to this signal in order to set up the extensions when
             * they are loaded. Note that this signal is not fired for extensions coming
             * from plugins that were already loaded when the {@link Peas.ExtensionSet} instance
             * was created. You should set those up by yourself.
             * @signal
             * @run-last
             */
            'extension-added': (arg0: PluginInfo, arg1: GObject.Object) => void;
            /**
             * Emitted when a new extension is about to be removed from the
             * {@link Peas.ExtensionSet}.
             *
             * It happens when a plugin implementing the extension set's extension type is
             * unloaded, or when the {@link Peas.ExtensionSet} itself is destroyed.
             *
             * You should connect to this signal in order to clean up the extensions
             * when their plugin is unload. Note that this signal is not fired for the
             * {@link GObject.Object} instances still available when the {@link Peas.ExtensionSet}
             * instance is destroyed. You should clean those up by yourself.
             * @signal
             * @run-last
             */
            'extension-removed': (arg0: PluginInfo, arg1: GObject.Object) => void;
            'notify::construct-properties': (pspec: GObject.ParamSpec) => void;
            'notify::engine': (pspec: GObject.ParamSpec) => void;
            'notify::extension-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            construct_properties: any;
            constructProperties: any;
            engine: Engine;
            extension_type: GObject.GTypeInput;
            extensionType: GObject.GTypeInput;
        }
    }

    /**
     * Proxy for a set of extensions of the same type.
     *
     * A {@link Peas.ExtensionSet} is an object which proxies method calls to a set
     * of actual extensions.  The application writer will use these objects
     * in order to call methods on several instances of an actual extension
     * exported by all the currently loaded plugins.
     *
     * {@link Peas.ExtensionSet} will automatically track loading and unloading of
     * the plugins, and signal appearance and disappearance of new
     * extension instances.  You should connect to those signals if you
     * wish to call specific methods on loading or unloading time.
     *
     * Here is the code for a typical setup of {@link Peas.ExtensionSet} with
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
     * @gir-type Class
     */
    class ExtensionSet<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<ExtensionSet>;

        // Properties

        /**
         * @construct-only
         */
        set construct_properties(val: any);
        /**
         * @construct-only
         */
        set constructProperties(val: any);
        /**
         * @construct-only
         */
        get engine(): Engine;
        /**
         * @construct-only
         */
        get extension_type(): GObject.GType;
        /**
         * @construct-only
         */
        get extensionType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExtensionSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ExtensionSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            engine: Engine | null,
            exten_type: GObject.GType,
            prop_names: string[],
            prop_values: (GObject.Value | any)[],
        ): ExtensionSet;

        // Signals

        /** @signal */
        connect<K extends keyof ExtensionSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtensionSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ExtensionSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExtensionSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ExtensionSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ExtensionSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calls `func` for each {@link GObject.Object}.
         * @param func A function call for each extension.
         */
        foreach(func: ExtensionSetForeachFunc): void;
        /**
         * Returns the {@link GObject.Object} object corresponding to `info`.
         *
         * If the plugin doesn't provide such an extension, it returns `null`.
         * @param info a {@link Peas.PluginInfo}
         * @returns a reference to a {@link GObject.Object}
         */
        get_extension<T = GObject.Object>(info: PluginInfo): T;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }

    namespace ObjectModule {
        // Signal signatures
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {
            'notify::local-linkage': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::resident': (pspec: GObject.ParamSpec) => void;
            'notify::symbol': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.TypeModule.ConstructorProps, GObject.TypePlugin.ConstructorProps {
            local_linkage: boolean;
            localLinkage: boolean;
            module_name: string;
            moduleName: string;
            path: string;
            resident: boolean;
            symbol: string;
        }
    }

    /**
     * Type module which allows extension registration.
     *
     * {@link Peas.ObjectModule} is a subclass of {@link GObject.TypeModule} which allows
     * registration of extensions. It will be used by C extensions implementors to
     * register extension implementations from within the peas_register_types module
     * function.
     * @gir-type Class
     */
    class ObjectModule extends GObject.TypeModule implements GObject.TypePlugin {
        static $gtype: GObject.GType<ObjectModule>;

        // Properties

        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         * @construct-only
         * @default false
         */
        get local_linkage(): boolean;
        /**
         * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
         * @construct-only
         * @default false
         */
        get localLinkage(): boolean;
        /**
         * @construct-only
         * @default null
         */
        get module_name(): string;
        /**
         * @construct-only
         * @default null
         */
        get moduleName(): string;
        /**
         * @construct-only
         * @default null
         */
        get path(): string;
        /**
         * @construct-only
         * @default false
         */
        get resident(): boolean;
        /**
         * @construct-only
         * @default peas_register_types
         */
        get symbol(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObjectModule.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ObjectModule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ObjectModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectModule.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ObjectModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ObjectModule.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ObjectModule.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ObjectModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Register an implementation for an extension type through a factory
         * function `factory_func` which will instantiate the extension when
         * requested.
         *
         * This method is primarily meant to be used by native bindings (like gtkmm),
         * creating native types which cannot be instantiated correctly using
         * {@link GObject.Object.new}.  For other uses, you will usually prefer relying on
         * `peas_object_module_register_extension_type()`.
         * @param exten_type The {@link GObject.GType} of the extension you implement.
         * @param factory_func The {@link Peas.FactoryFunc} that will create the `exten_type`   instance when requested.
         */
        register_extension_factory(exten_type: GObject.GType, factory_func: FactoryFunc): void;
        /**
         * Register `impl_type` as an extension which implements `extension_type`.
         * @param exten_type The {@link GObject.GType} of the extension you implement.
         * @param impl_type The {@link GObject.GType} of your implementation of `exten_type`.
         */
        register_extension_type(exten_type: GObject.GType, impl_type: GObject.GType): void;
        /**
         * Calls the `complete_interface_info` function from the
         * {@link GObject.TypePluginClass} of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the {@link GObject.GType} of an instantiatable type to which the interface  is added
         * @param interface_type the {@link GObject.GType} of the interface whose info is completed
         * @param info the {@link GObject.InterfaceInfo} to fill in
         */
        complete_interface_info(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            info: GObject.InterfaceInfo,
        ): void;
        /**
         * Calls the `complete_type_info` function from the {@link GObject.TypePluginClass} of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the {@link GObject.GType} whose info is completed
         * @param info the {@link GObject.TypeInfo} struct to fill in
         * @param value_table the {@link GObject.TypeValueTable} to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
        /**
         * Calls the `unuse_plugin` function from the {@link GObject.TypePluginClass} of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the {@link GObject.TypePluginClass} of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;
        /**
         * @param args
         */
        // Conflicted with GObject.TypeModule.use
        use(...args: never[]): any;
    }

    namespace PluginInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::authors': (pspec: GObject.ParamSpec) => void;
            'notify::builtin': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::dependencies': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::help-uri': (pspec: GObject.ParamSpec) => void;
            'notify::hidden': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::loaded': (pspec: GObject.ParamSpec) => void;
            'notify::module-dir': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
            'notify::website': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authors: string[];
            builtin: boolean;
            copyright: string;
            dependencies: string[];
            description: string;
            help_uri: string;
            helpUri: string;
            hidden: boolean;
            icon_name: string;
            iconName: string;
            loaded: boolean;
            module_dir: string;
            moduleDir: string;
            module_name: string;
            moduleName: string;
            name: string;
            version: string;
            website: string;
        }
    }

    /**
     * A {@link Peas.PluginInfo} contains all the information available about a plugin.
     *
     * All this information comes from the related plugin info file, whose file
     * extension is ".plugin". Here is an example of such a plugin file, in the
     * {@link GLib.KeyFile} format:
     *
     * ```toml
     * [Plugin]
     * Module=helloworld
     * Depends=foo;bar;baz
     * Loader=python
     * Name=Hello World
     * Description=Displays "Hello World"
     * Authors=Steve Frécinaux &lt;code@istique.net&gt;
     * Copyright=Copyright © 2009-10 Steve Frécinaux
     * Website=https://wiki.gnome.org/Projects/Libpeas
     * Help=http://library.gnome.org/devel/libpeas/stable/
     * Hidden=false
     * ```
     * @gir-type Class
     */
    class PluginInfo extends GObject.Object {
        static $gtype: GObject.GType<PluginInfo>;

        // Properties

        /**
         * @read-only
         */
        get authors(): string[];
        /**
         * @read-only
         * @default false
         */
        get builtin(): boolean;
        /**
         * @read-only
         * @default null
         */
        get copyright(): string;
        /**
         * @read-only
         */
        get dependencies(): string[];
        /**
         * @read-only
         * @default null
         */
        get description(): string;
        /**
         * @read-only
         * @default null
         */
        get help_uri(): string;
        /**
         * @read-only
         * @default null
         */
        get helpUri(): string;
        /**
         * @read-only
         * @default false
         */
        get hidden(): boolean;
        /**
         * @read-only
         * @default null
         */
        get icon_name(): string;
        /**
         * @read-only
         * @default null
         */
        get iconName(): string;
        /**
         * @read-only
         * @default false
         */
        get loaded(): boolean;
        /**
         * @read-only
         * @default null
         */
        get module_dir(): string;
        /**
         * @read-only
         * @default null
         */
        get moduleDir(): string;
        /**
         * @read-only
         * @default null
         */
        get module_name(): string;
        /**
         * @read-only
         * @default null
         */
        get moduleName(): string;
        /**
         * @read-only
         * @default null
         */
        get name(): string;
        /**
         * @read-only
         * @default null
         */
        get version(): string;
        /**
         * @read-only
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

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Gets a `null`-terminated array of strings with the authors of the plugin.
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
         * runtime data. This is not a value read from the {@link GLib.KeyFile}, but
         * rather a value provided by the {@link Engine}, depending on where the plugin
         * file was found.
         * @returns the plugin's data dir.
         */
        get_data_dir(): string;
        /**
         * Gets the dependencies of the plugin.
         *
         * The {@link Engine} will always ensure that the dependencies of a plugin are
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
         * @returns the external data, or `null` if the external data could not be found.
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
         * is not a value from the {@link GLib.KeyFile}, but rather a value provided by the
         * {@link Engine}.
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
         * Creates a new {@link Gio.Resource} for the given `filename`
         * located in the module directory. If `filename` is `null`
         * then "${module_name}.gresource" will be loaded.
         * @param filename The filename of the resource, or `null`.
         * @returns a new {@link Gio.Resource}, or `null`.
         */
        get_resource(filename: string | null): Gio.Resource;
        /**
         * Creates a new {@link Gio.Settings} for the given `schema_id` and if
         * gschemas.compiled is not in the module directory an attempt
         * will be made to create it.
         * @param schema_id The schema id.
         * @returns a new {@link Gio.Settings}.
         */
        get_settings(schema_id: string | null): Gio.Settings | null;
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
         * @returns whether the plugin depends on the plugin `module_name`.
         */
        has_dependency(module_name: string): boolean;
        /**
         * Check if the plugin is available.
         *
         * A plugin is marked as not available when there is no loader available to
         * load it, or when there has been an error when trying to load it previously.
         * If not available then `error` will be set.
         * @returns `true` if the plugin is available.
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
         * the initialization of the {@link Peas.Engine}.
         *
         * The relevant key in the plugin info file is "Builtin".
         * @returns `true` if the plugin is a builtin plugin, `false`   if not.
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
         * @returns `true` if the plugin is a hidden plugin, `false`   if not.
         */
        is_hidden(): boolean;
        /**
         * Check if the plugin is loaded.
         * @returns `true` if the plugin is loaded.
         */
        is_loaded(): boolean;
        /**
         * Loads the resource using `peas_plugin_info_get_resource()` and
         * registers it. The resource's lifetime will be automatically
         * handled by `info`.
         *
         * See `peas_plugin_info_get_resource()` for more information.
         * @param filename The filename of the resource, or `null`.
         */
        load_resource(filename: string | null): void;
    }

    /**
     * @gir-type Alias
     */
    type EngineClass = typeof Engine;
    /**
     * @gir-type Alias
     */
    type ExtensionBaseClass = typeof ExtensionBase;
    /**
     * @gir-type Alias
     */
    type ExtensionSetClass = typeof ExtensionSet;
    /**
     * @gir-type Alias
     */
    type ObjectModuleClass = typeof ObjectModule;
    /**
     * @gir-type Alias
     */
    type PluginInfoClass = typeof PluginInfo;
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
