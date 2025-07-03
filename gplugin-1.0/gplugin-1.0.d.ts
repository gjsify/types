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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GPlugin {
    /**
     * GPlugin-1.0
     */

    /**
     * The known states of a plugin.
     */

    /**
     * The known states of a plugin.
     */
    export namespace PluginState {
        export const $gtype: GObject.GType<PluginState>;
    }

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
     * %GPLUGIN_VERSION_0_42, %GPLUGIN_VERSION_0_43, ...
     *
     * This macro defines the earliest version of GPlugin that the package is
     * required to be able to compile against.
     *
     * If the compiler is configured to warn about the use of deprecated functions,
     * then using functions that were deprecated in version
     * %GPLUGIN_VERSION_MIN_REQUIRED or earlier will cause warnings (but using
     * functions deprecated in later releases will not).
     */
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
    function init(flags: CoreFlags | null): void;
    /**
     * Gets a string representation of `state`.
     * @param state The #GPluginPluginState.
     * @returns The string representation of @state.
     */
    function plugin_state_to_string(state: PluginState | null): string;
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

    /**
     * Flags to configure behaviors in GPlugin.
     */
    export namespace CoreFlags {
        export const $gtype: GObject.GType<CoreFlags>;
    }

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
     * A [iface`GPlugin`.Source] that will query plugins on disk.
     */
    class FileSource extends GObject.Object implements Source {
        static $gtype: GObject.GType<FileSource>;

        // Properties

        /**
         * The [class`GPlugin`.Manager] that this source is working for.
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

        connect<K extends keyof FileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a [iface`GPlugin`.Source] that will query plugins on disk using the
         * paths from `manager`.
         * @param manager The [class@GPlugin.Manager] instance.
         */
        static ['new'](manager: Manager): Source;

        // Inherited methods
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
        /**
         * This method is called when [method`GPlugin`.Manager.refresh] is running. The
         * source should scan its available sources for plugins. For the filesystem
         * source, this is paths that have been registered with the manager.
         *
         * The implementation should return TRUE if it found a new unqueried plugin,
         * which will tell the manager to continue scanning.
         */
        vfunc_scan(): boolean;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
     */
    abstract class Loader extends GObject.Object {
        static $gtype: GObject.GType<Loader>;

        // Properties

        /**
         * The identifier of the loader.
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

        connect<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Loader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Loader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         */
        vfunc_load(plugin: Plugin): boolean;
        /**
         * The unload vfunc is called when the plugin manager wants to unload
         *          a previously loaded plugin from this loader.
         * @param plugin
         * @param shutdown
         */
        vfunc_unload(plugin: Plugin, shutdown: boolean): boolean;

        // Methods

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

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'load-plugin-failed': (arg0: GObject.Object, arg1: GLib.Error) => void;
            'loaded-plugin': (arg0: GObject.Object) => void;
            'loader-registered': (arg0: Loader) => void;
            'loader-unregistered': (arg0: Loader) => void;
            'loading-plugin': (arg0: GObject.Object, arg1: any | null) => boolean | void;
            'unload-plugin-failed': (arg0: GObject.Object, arg1: GLib.Error) => void;
            'unloaded-plugin': (arg0: GObject.Object) => void;
            'unloading-plugin': (arg0: GObject.Object, arg1: any | null) => boolean | void;
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

        connect<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * This function uses [method`GPlugin`.Manager.find_plugins] and returns the
         * first plugin in the list.
         * @param id The ID of the plugin to find.
         * @returns A plugin instance or %NULL if no plugin          matching @id was found.
         */
        find_plugin(id: string): Plugin;
        /**
         * Finds a plugin with the given filename.
         *
         * This method should be used sparingly as you should typically be using plugin
         * id's to identify them, however, sometimes it's necessary to find them by
         * filename.
         * @param filename The filename of the plugin.
         * @returns The plugin if found, otherwise %NULL.
         */
        find_plugin_with_filename(filename: string): Plugin | null;
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
        find_plugins_with_state(state: PluginState | null): Plugin[];
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
     * #GPluginPluginInfo holds all of the data about a plugin.  It is created when
     * a plugin is queried.
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
         * A unique value that can be used to identify plugins with the same id.
         *
         * This is an opaque token and may change in the future.
         */
        get discriminator(): string;
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

        connect<K extends keyof PluginInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PluginInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PluginInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         * Gets the discriminator from `info`.
         * @returns The discriminator.
         */
        get_discriminator(): string;
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

    type FileSourceClass = typeof FileSource;
    type LoaderClass = typeof Loader;
    type ManagerClass = typeof Manager;
    type PluginInfoClass = typeof PluginInfo;
    type PluginInterface = typeof Plugin;
    type SourceInterface = typeof Source;
    namespace Plugin {
        /**
         * Interface for implementing Plugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * The class closure for the #GPluginPlugin::state-changed
             *                 signal.
             * @param oldstate
             * @param newstate
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
    interface Plugin extends GObject.Object, Plugin.Interface {
        // Properties

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

        // Methods

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
        set_desired_state(state: PluginState | null): void;
        /**
         * Changes the state of `plugin` to `state`.  This function should only be called
         * by loaders.
         * @param state The new state for @plugin.
         */
        set_state(state: PluginState | null): void;
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
             * This method is called when [method`GPlugin`.Manager.refresh] is running. The
             * source should scan its available sources for plugins. For the filesystem
             * source, this is paths that have been registered with the manager.
             *
             * The implementation should return TRUE if it found a new unqueried plugin,
             * which will tell the manager to continue scanning.
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
    interface Source extends GObject.Object, Source.Interface {
        // Methods

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
