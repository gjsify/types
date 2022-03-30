/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkX11-4.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace GdkX11 {

enum X11DeviceType {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
function x11_device_get_id(device: X11DeviceXI2): number
function x11_device_manager_lookup(device_manager: X11DeviceManagerXI2, device_id: number): X11DeviceXI2 | null
function x11_free_compound_text(ctext: number): void
function x11_free_text_list(list: string): void
function x11_get_server_time(surface: X11Surface): number
function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom
function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string
function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display
function x11_set_sm_client_id(sm_client_id?: string | null): void
interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
class X11AppLaunchContext {
    /* Properties of Gdk-4.0.Gdk.AppLaunchContext */
    /**
     * The display that the `GdkAppLaunchContext` is on.
     */
    readonly display: Gdk.Display
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.AppLaunchContext */
    /**
     * Gets the `GdkDisplay` that `context` is for.
     */
    get_display(): Gdk.Display
    /**
     * Sets the workspace on which applications will be launched.
     * 
     * This only works when running under a window manager that
     * supports multiple workspaces, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * Specifically this sets the `_NET_WM_DESKTOP` property described
     * in that spec.
     * 
     * This only works when using the X11 backend.
     * 
     * When the workspace is not specified or `desktop` is set to -1,
     * it is up to the window manager to pick one, typically it will
     * be the current workspace.
     * @param desktop the number of a workspace, or -1
     */
    set_desktop(desktop: number): void
    /**
     * Sets the icon for applications that are launched with this
     * context.
     * 
     * Window Managers can use this information when displaying startup
     * notification.
     * 
     * See also [method`Gdk`.AppLaunchContext.set_icon_name].
     * @param icon a `GIcon`
     */
    set_icon(icon?: Gio.Icon | null): void
    /**
     * Sets the icon for applications that are launched with this context.
     * 
     * The `icon_name` will be interpreted in the same way as the Icon field
     * in desktop files. See also [method`Gdk`.AppLaunchContext.set_icon].
     * 
     * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
     * If neither `icon` or `icon_name` is set, the icon is taken from either
     * the file that is passed to launched application or from the `GAppInfo`
     * for the launched application itself.
     * @param icon_name an icon name
     */
    set_icon_name(icon_name?: string | null): void
    /**
     * Sets the timestamp of `context`.
     * 
     * The timestamp should ideally be taken from the event that
     * triggered the launch.
     * 
     * Window managers can use this information to avoid moving the
     * focus to the newly launched application when the user is busy
     * typing in another window. This is also known as 'focus stealing
     * prevention'.
     * @param timestamp a timestamp
     */
    set_timestamp(timestamp: number): void
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     * @param info a #GAppInfo
     * @param files a #GList of #GFile objects
     */
    get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Gets the complete environment variable list to be passed to
     * the child process when `context` is used to launch an application.
     * This is a %NULL-terminated array of strings, where each string has
     * the form `KEY=VALUE`.
     */
    get_environment(): string[]
    /**
     * Initiates startup notification for the application and returns the
     * `DESKTOP_STARTUP_ID` for the launched operation, if supported.
     * 
     * Startup notification IDs are defined in the
     * [FreeDesktop.Org Startup Notifications standard](http://standards.freedesktop.org/startup-notification-spec/startup-notification-latest.txt).
     * @param info a #GAppInfo
     * @param files a #GList of of #GFile objects
     */
    get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Called when an application has failed to launch, so that it can cancel
     * the application startup notification started in g_app_launch_context_get_startup_notify_id().
     * @param startup_notify_id the startup notification id that was returned by g_app_launch_context_get_startup_notify_id().
     */
    launch_failed(startup_notify_id: string): void
    /**
     * Arranges for `variable` to be set to `value` in the child's
     * environment when `context` is used to launch an application.
     * @param variable the environment variable to set
     * @param value the value for to set the variable to.
     */
    setenv(variable: string, value: string): void
    /**
     * Arranges for `variable` to be unset in the child's environment
     * when `context` is used to launch an application.
     * @param variable the environment variable to remove
     */
    unsetenv(variable: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gio-2.0.Gio.AppLaunchContext */
    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     * @param info a #GAppInfo
     * @param files a #GList of #GFile objects
     */
    vfunc_get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Initiates startup notification for the application and returns the
     * `DESKTOP_STARTUP_ID` for the launched operation, if supported.
     * 
     * Startup notification IDs are defined in the
     * [FreeDesktop.Org Startup Notifications standard](http://standards.freedesktop.org/startup-notification-spec/startup-notification-latest.txt).
     * @param info a #GAppInfo
     * @param files a #GList of of #GFile objects
     */
    vfunc_get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Called when an application has failed to launch, so that it can cancel
     * the application startup notification started in g_app_launch_context_get_startup_notify_id().
     * @param startup_notify_id the startup notification id that was returned by g_app_launch_context_get_startup_notify_id().
     */
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launch_started(info: Gio.AppInfo, platform_data: GLib.Variant): void
    vfunc_launched(info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    /**
     * The #GAppLaunchContext::launch-failed signal is emitted when a #GAppInfo launch
     * fails. The startup notification id is provided, so that the launcher
     * can cancel the startup notification.
     * @param startup_notify_id the startup notification id for the failed launch
     */
    connect(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: X11AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    /**
     * The #GAppLaunchContext::launch-started signal is emitted when a #GAppInfo is
     * about to be launched. If non-null the `platform_data` is an
     * GVariant dictionary mapping strings to variants (ie `a{sv}`), which
     * contains additional, platform-specific data about this launch. On
     * UNIX, at least the `startup-notification-id` keys will be
     * present.
     * 
     * The value of the `startup-notification-id` key (type `s`) is a startup
     * notification ID corresponding to the format from the [startup-notification
     * specification](https://specifications.freedesktop.org/startup-notification-spec/startup-notification-0.1.txt).
     * It allows tracking the progress of the launchee through startup.
     * 
     * It is guaranteed that this signal is followed by either a #GAppLaunchContext::launched or
     * #GAppLaunchContext::launch-failed signal.
     * @param info the #GAppInfo that is about to be launched
     * @param platform_data additional platform-specific data for this launch
     */
    connect(sigName: "launch-started", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platform_data?: GLib.Variant | null) => void)): number
    connect_after(sigName: "launch-started", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platform_data?: GLib.Variant | null) => void)): number
    emit(sigName: "launch-started", info: Gio.AppInfo, platform_data?: GLib.Variant | null): void
    /**
     * The #GAppLaunchContext::launched signal is emitted when a #GAppInfo is successfully
     * launched. The `platform_data` is an GVariant dictionary mapping
     * strings to variants (ie `a{sv}`), which contains additional,
     * platform-specific data about this launch. On UNIX, at least the
     * `pid` and `startup-notification-id` keys will be present.
     * 
     * Since 2.72 the `pid` may be 0 if the process id wasn't known (for
     * example if the process was launched via D-Bus). The `pid` may not be
     * set at all in subsequent releases.
     * @param info the #GAppInfo that was just launched
     * @param platform_data additional platform-specific data for this launch
     */
    connect(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: X11AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11AppLaunchContext_ConstructProps)
    _init (config?: X11AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceManagerXI2_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2 */
    display?: Gdk.Display
    major?: number
    minor?: number
    opcode?: number
}
class X11DeviceManagerXI2 {
    /* Properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2 */
    readonly display: Gdk.Display
    readonly major: number
    readonly minor: number
    readonly opcode: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::major", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::major", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minor", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minor", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opcode", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opcode", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceManagerXI2_ConstructProps)
    _init (config?: X11DeviceManagerXI2_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {
    /* Constructor properties of GdkX11-4.0.GdkX11.X11DeviceXI2 */
    device_id?: number
}
class X11DeviceXI2 {
    /* Properties of GdkX11-4.0.GdkX11.X11DeviceXI2 */
    readonly device_id: number
    /* Properties of Gdk-4.0.Gdk.Device */
    /**
     * Whether Caps Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly caps_lock_state: boolean
    /**
     * The direction of the current layout.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly direction: Pango.Direction
    /**
     * The `GdkDisplay` the `GdkDevice` pertains to.
     */
    readonly display: Gdk.Display
    /**
     * Whether the device has both right-to-left and left-to-right layouts.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly has_bidi_layouts: boolean
    /**
     * Whether the device is represented by a cursor on the screen.
     */
    readonly has_cursor: boolean
    /**
     * The current modifier state of the device.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly modifier_state: Gdk.ModifierType
    /**
     * Number of axes in the device.
     */
    readonly n_axes: number
    /**
     * The device name.
     */
    readonly name: string
    /**
     * Whether Num Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly num_lock_state: boolean
    /**
     * The maximal number of concurrent touches on a touch device.
     * 
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    readonly num_touches: number
    /**
     * Product ID of this device.
     * 
     * See [method`Gdk`.Device.get_product_id].
     */
    readonly product_id: string
    /**
     * Whether Scroll Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly scroll_lock_state: boolean
    /**
     * `GdkSeat` of this device.
     */
    seat: Gdk.Seat
    /**
     * Source type for the device.
     */
    readonly source: Gdk.InputSource
    /**
     * The `GdkDeviceTool` that is currently used with this device.
     */
    readonly tool: Gdk.DeviceTool
    /**
     * Vendor ID of this device.
     * 
     * See [method`Gdk`.Device.get_vendor_id].
     */
    readonly vendor_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Device */
    /**
     * Retrieves whether the Caps Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    get_caps_lock_state(): boolean
    /**
     * Retrieves the current tool for `device`.
     */
    get_device_tool(): Gdk.DeviceTool | null
    /**
     * Returns the direction of effective layout of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     * 
     * The direction of a layout is the direction of the majority
     * of its symbols. See [func`Pango`.unichar_direction].
     */
    get_direction(): Pango.Direction
    /**
     * Returns the `GdkDisplay` to which `device` pertains.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the pointer follows device motion.
     * 
     * This is not meaningful for keyboard devices, which
     * don't have a pointer.
     */
    get_has_cursor(): boolean
    /**
     * Retrieves the current modifier state of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     */
    get_modifier_state(): Gdk.ModifierType
    /**
     * The name of the device, suitable for showing in a user interface.
     */
    get_name(): string
    /**
     * Retrieves whether the Num Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    get_num_lock_state(): boolean
    /**
     * Retrieves the number of touch points associated to `device`.
     */
    get_num_touches(): number
    /**
     * Returns the product ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * See [method`Gdk`.Device.get_vendor_id] for more information.
     */
    get_product_id(): string | null
    /**
     * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    get_scroll_lock_state(): boolean
    /**
     * Returns the `GdkSeat` the device belongs to.
     */
    get_seat(): Gdk.Seat
    /**
     * Determines the type of the device.
     */
    get_source(): Gdk.InputSource
    /**
     * Obtains the surface underneath `device,` returning the location of the
     * device in `win_x` and `win_y`.
     * 
     * Returns %NULL if the surface tree under `device` is not known to GDK
     * (for example, belongs to another application).
     */
    get_surface_at_position(): [ /* returnType */ Gdk.Surface | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Returns the timestamp of the last activity for this device.
     * 
     * In practice, this means the timestamp of the last event that was
     * received from the OS for this device. (GTK may occasionally produce
     * events for a device that are not received from the OS, and will not
     * update the timestamp).
     */
    get_timestamp(): number
    /**
     * Returns the vendor ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * 
     * This function, together with [method`Gdk`.Device.get_product_id],
     * can be used to eg. compose `GSettings` paths to store settings
     * for this device.
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const char *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    char *path;
     * 
     *    vendor = gdk_device_get_vendor_id (device);
     *    product = gdk_device_get_product_id (device);
     * 
     *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
     *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
     *    g_free (path);
     * 
     *    return settings;
     *  }
     * ```
     */
    get_vendor_id(): string | null
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Device */
    /**
     * Emitted either when the number of either axes or keys changes.
     * 
     * On X11 this will normally happen when the physical device
     * routing events through the logical device changes (for
     * example, user switches from the USB mouse to a tablet); in
     * that case the logical device will change to reflect the axes
     * and keys on the new physical device.
     */
    connect(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    emit(sigName: "changed"): void
    /**
     * Emitted on pen/eraser devices whenever tools enter or leave proximity.
     * @param tool The new current tool
     */
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceXI2, tool: Gdk.DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-cursor", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-touches", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceXI2_ConstructProps)
    _init (config?: X11DeviceXI2_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}
class X11Display {
    /* Properties of Gdk-4.0.Gdk.Display */
    /**
     * %TRUE if the display properly composites the alpha channel.
     */
    readonly composited: boolean
    /**
     * %TRUE if the display supports input shapes.
     */
    readonly input_shapes: boolean
    /**
     * %TRUE if the display supports an alpha channel.
     */
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Display */
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Will XSync() if necessary and will always block until
     * the error is known to have occurred or not occurred,
     * so the error code can be returned.
     * 
     * If you don’t need to use the return value,
     * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
     */
    error_trap_pop(): number
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Does not block to see if an error occurred; merely records the
     * range of requests to ignore errors for, and ignores those errors
     * if they arrive asynchronously.
     */
    error_trap_pop_ignored(): void
    /**
     * Begins a range of X requests on `display` for which X error events
     * will be ignored. Unignored errors (when no trap is pushed) will abort
     * the application. Use gdk_x11_display_error_trap_pop() or
     * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
     * with this function.
     */
    error_trap_push(): void
    /**
     * Returns the default group leader surface for all toplevel surfaces
     * on `display`. This surface is implicitly created by GDK.
     * See gdk_x11_surface_set_group().
     */
    get_default_group(): Gdk.Surface
    /**
     * Retrieves the EGL display connection object for the given GDK display.
     * 
     * This function returns `NULL` if GDK is using GLX.
     */
    get_egl_display(): object | null
    /**
     * Retrieves the version of the EGL implementation.
     */
    get_egl_version(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    /**
     * Retrieves the version of the GLX implementation.
     */
    get_glx_version(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    /**
     * Gets the primary monitor for the display.
     * 
     * The primary monitor is considered the monitor where the “main desktop”
     * lives. While normal application surfaces typically allow the window
     * manager to place the surfaces, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     * 
     * If no monitor is the designated primary monitor, any monitor
     * (usually the first) may be returned.
     */
    get_primary_monitor(): Gdk.Monitor
    /**
     * Retrieves the `GdkX11Screen` of the `display`.
     */
    get_screen(): X11Screen
    /**
     * Gets the startup notification ID for a display.
     */
    get_startup_notification_id(): string
    /**
     * Returns the timestamp of the last user interaction on
     * `display`. The timestamp is taken from events caused
     * by user interaction such as key presses or pointer
     * movements. See gdk_x11_surface_set_user_time().
     */
    get_user_time(): number
    /**
     * Returns the X cursor belonging to a `GdkCursor`, potentially
     * creating the cursor.
     * 
     * Be aware that the returned cursor may not be unique to `cursor`.
     * It may for example be shared with its fallback cursor. On old
     * X servers that don't support the XCursor extension, all cursors
     * may even fall back to a few default cursors.
     * @param cursor a `GdkCursor`
     */
    get_xcursor(cursor: Gdk.Cursor): xlib.Cursor
    /**
     * Returns the X display of a `GdkDisplay`.
     */
    get_xdisplay(): xlib.Display
    /**
     * Returns the root X window used by `GdkDisplay`.
     */
    get_xrootwindow(): xlib.Window
    /**
     * Returns the X Screen used by `GdkDisplay`.
     */
    get_xscreen(): xlib.Screen
    /**
     * Call XGrabServer() on `display`.
     * To ungrab the display again, use gdk_x11_display_ungrab().
     * 
     * gdk_x11_display_grab()/gdk_x11_display_ungrab() calls can be nested.
     */
    grab(): void
    /**
     * Sets the cursor theme from which the images for cursor
     * should be taken.
     * 
     * If the windowing system supports it, existing cursors created
     * with [ctor`Gdk`.Cursor.new_from_name] are updated to reflect the theme
     * change. Custom cursors constructed with [ctor`Gdk`.Cursor.new_from_texture]
     * will have to be handled by the application (GTK applications can learn
     * about cursor theme changes by listening for change notification
     * for the corresponding `GtkSetting`).
     * @param theme the name of the cursor theme to use, or %NULL   to unset a previously set value
     * @param size the cursor size to use, or 0 to keep the previous size
     */
    set_cursor_theme(theme: string | null, size: number): void
    /**
     * Sets the startup notification ID for a display.
     * 
     * This is usually taken from the value of the DESKTOP_STARTUP_ID
     * environment variable, but in some cases (such as the application not
     * being launched using exec()) it can come from other sources.
     * 
     * If the ID contains the string "_TIME" then the portion following that
     * string is taken to be the X11 timestamp of the event that triggered
     * the application to be launched and the GDK current event time is set
     * accordingly.
     * 
     * The startup ID is also what is used to signal that the startup is
     * complete (for example, when opening a window or when calling
     * gdk_display_notify_startup_complete()).
     * @param startup_id the startup notification ID (must be valid utf8)
     */
    set_startup_notification_id(startup_id: string): void
    /**
     * Forces a specific window scale for all windows on this display,
     * instead of using the default or user configured scale. This
     * is can be used to disable scaling support by setting `scale` to
     * 1, or to programmatically set the window scale.
     * 
     * Once the scale is set by this call it will not change in response
     * to later user configuration changes.
     * @param scale The new scale value
     */
    set_surface_scale(scale: number): void
    /**
     * Convert a string from the encoding of the current
     * locale into a form suitable for storing in a window property.
     * @param str a nul-terminated string
     */
    string_to_compound_text(str: string): [ /* returnType */ number, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
    /**
     * Convert a text string from the encoding as it is stored
     * in a property into an array of strings in the encoding of
     * the current locale. (The elements of the array represent the
     * nul-separated elements of the original text string.)
     * @param encoding a string representing the encoding. The most   common values for this are "STRING", or "COMPOUND_TEXT".   This is value used as the type for the property
     * @param format the format of the property
     * @param text The text data
     * @param length The number of items to transform
     * @param list location to store an  array of strings in   the encoding of the current locale. This array should be   freed using gdk_x11_free_text_list().
     */
    text_property_to_text_list(encoding: string, format: number, text: number, length: number, list: string): number
    /**
     * Ungrab `display` after it has been grabbed with
     * gdk_x11_display_grab().
     */
    ungrab(): void
    /**
     * Converts from UTF-8 to compound text.
     * @param str a UTF-8 string
     */
    utf8_to_compound_text(str: string): [ /* returnType */ boolean, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
    /* Methods of Gdk-4.0.Gdk.Display */
    /**
     * Emits a short beep on `display`
     */
    beep(): void
    /**
     * Closes the connection to the windowing system for the given display.
     * 
     * This cleans up associated resources.
     */
    close(): void
    /**
     * Creates a new `GdkGLContext` for the `GdkDisplay`.
     * 
     * The context is disconnected from any particular surface or surface
     * and cannot be used to draw to any surface. It can only be used to
     * draw to non-surface framebuffers like textures.
     * 
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    create_gl_context(): Gdk.GLContext
    /**
     * Returns %TRUE if there is an ongoing grab on `device` for `display`.
     * @param device a `GdkDevice`
     */
    device_is_grabbed(device: Gdk.Device): boolean
    /**
     * Flushes any requests queued for the windowing system.
     * 
     * This happens automatically when the main loop blocks waiting for new events,
     * but if your application is drawing without returning control to the main loop,
     * you may need to call this function explicitly. A common case where this function
     * needs to be called is when an application is executing drawing commands
     * from a thread other than the thread where the main loop is running.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    flush(): void
    /**
     * Returns a `GdkAppLaunchContext` suitable for launching
     * applications on the given display.
     */
    get_app_launch_context(): Gdk.AppLaunchContext
    /**
     * Gets the clipboard used for copy/paste operations.
     */
    get_clipboard(): Gdk.Clipboard
    /**
     * Returns the default `GdkSeat` for this display.
     * 
     * Note that a display may not have a seat. In this case,
     * this function will return %NULL.
     */
    get_default_seat(): Gdk.Seat | null
    /**
     * Gets the monitor in which the largest area of `surface`
     * resides.
     * 
     * Returns a monitor close to `surface` if it is outside
     * of all monitors.
     * @param surface a `GdkSurface`
     */
    get_monitor_at_surface(surface: Gdk.Surface): Gdk.Monitor
    /**
     * Gets the list of monitors associated with this display.
     * 
     * Subsequent calls to this function will always return the
     * same list for the same display.
     * 
     * You can listen to the GListModel::items-changed signal on
     * this list to monitor changes to the monitor of this display.
     */
    get_monitors(): Gio.ListModel
    /**
     * Gets the name of the display.
     */
    get_name(): string
    /**
     * Gets the clipboard used for the primary selection.
     * 
     * On backends where the primary clipboard is not supported natively,
     * GDK emulates this clipboard locally.
     */
    get_primary_clipboard(): Gdk.Clipboard
    /**
     * Retrieves a desktop-wide setting such as double-click time
     * for the `display`.
     * @param name the name of the setting
     * @param value location to store the value of the setting
     */
    get_setting(name: string, value: any): boolean
    /**
     * Gets the startup notification ID for a Wayland display, or %NULL
     * if no ID has been defined.
     */
    get_startup_notification_id(): string | null
    /**
     * Finds out if the display has been closed.
     */
    is_closed(): boolean
    /**
     * Returns whether surfaces can reasonably be expected to have
     * their alpha channel drawn correctly on the screen.
     * 
     * Check [method`Gdk`.Display.is_rgba] for whether the display
     * supports an alpha channel.
     * 
     * On X11 this function returns whether a compositing manager is
     * compositing on `display`.
     * 
     * On modern displays, this value is always %TRUE.
     */
    is_composited(): boolean
    /**
     * Returns whether surfaces on this `display` are created with an
     * alpha channel.
     * 
     * Even if a %TRUE is returned, it is possible that the
     * surface’s alpha channel won’t be honored when displaying the
     * surface on the screen: in particular, for X an appropriate
     * windowing manager and compositing manager must be running to
     * provide appropriate display. Use [method`Gdk`.Display.is_composited]
     * to check if that is the case.
     * 
     * On modern displays, this value is always %TRUE.
     */
    is_rgba(): boolean
    /**
     * Returns the list of seats known to `display`.
     */
    list_seats(): Gdk.Seat[]
    /**
     * Returns the keyvals bound to `keycode`.
     * 
     * The Nth `GdkKeymapKey` in `keys` is bound to the Nth keyval in `keyvals`.
     * 
     * When a keycode is pressed by the user, the keyval from
     * this list of entries is selected by considering the effective
     * keyboard group and level.
     * 
     * Free the returned arrays with g_free().
     * @param keycode a keycode
     */
    map_keycode(keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    /**
     * Obtains a list of keycode/group/level combinations that will
     * generate `keyval`.
     * 
     * Groups and levels are two kinds of keyboard mode; in general, the level
     * determines whether the top or bottom symbol on a key is used, and the
     * group determines whether the left or right symbol is used.
     * 
     * On US keyboards, the shift key changes the keyboard level, and there
     * are no groups. A group switch key might convert a keyboard between
     * Hebrew to English modes, for example.
     * 
     * `GdkEventKey` contains a %group field that indicates the active
     * keyboard group. The level is computed from the modifier mask.
     * 
     * The returned array should be freed with g_free().
     * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
     */
    map_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK will call this function automatically for [class`Gtk`.Window]
     * with custom startup-notification identifier unless
     * [method`Gtk`.Window.set_auto_startup_notification]
     * is called to disable that feature.
     * @param startup_id a startup-notification identifier, for which   notification process should be completed
     */
    notify_startup_complete(startup_id: string): void
    /**
     * Checks that OpenGL is available for `self` and ensures that it is
     * properly initialized.
     * When this fails, an `error` will be set describing the error and this
     * function returns %FALSE.
     * 
     * Note that even if this function succeeds, creating a `GdkGLContext`
     * may still fail.
     * 
     * This function is idempotent. Calling it multiple times will just
     * return the same value or error.
     * 
     * You never need to call this function, GDK will call it automatically
     * as needed. But you can use it as a check when setting up code that
     * might make use of OpenGL.
     */
    prepare_gl(): boolean
    /**
     * Appends the given event onto the front of the event
     * queue for `display`.
     * 
     * This function is only useful in very special situations
     * and should not be used by applications.
     * @param event a `GdkEvent`
     */
    put_event(event: Gdk.Event): void
    /**
     * Returns %TRUE if the display supports input shapes.
     * 
     * This means that [method`Gdk`.Surface.set_input_region] can
     * be used to modify the input shape of surfaces on `display`.
     * 
     * On modern displays, this value is always %TRUE.
     */
    supports_input_shapes(): boolean
    /**
     * Flushes any requests queued for the windowing system and waits until all
     * requests have been handled.
     * 
     * This is often used for making sure that the display is synchronized
     * with the current state of the program. Calling [method`Gdk`.Display.sync]
     * before [method`GdkX1`1.Display.error_trap_pop] makes sure that any errors
     * generated from earlier requests are handled before the error trap is removed.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    sync(): void
    /**
     * Translates the contents of a `GdkEventKey` into a keyval, effective group,
     * and level.
     * 
     * Modifiers that affected the translation and are thus unavailable for
     * application use are returned in `consumed_modifiers`.
     * 
     * The `effective_group` is the group that was actually used for the
     * translation; some keys such as Enter are not affected by the active
     * keyboard group. The `level` is derived from `state`.
     * 
     * `consumed_modifiers` gives modifiers that should be masked out
     * from `state` when comparing this key press to a keyboard shortcut.
     * For instance, on a US keyboard, the `plus` symbol is shifted, so
     * when comparing a key press to a `<Control>plus` accelerator `<Shift>`
     * should be masked out.
     * 
     * This function should rarely be needed, since `GdkEventKey` already
     * contains the translated keyval. It is exported for the benefit of
     * virtualized test environments.
     * @param keycode a keycode
     * @param state a modifier state
     * @param group active keyboard group
     */
    translate_key(keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed */ Gdk.ModifierType | null ]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GdkX11-4.0.GdkX11.X11Display */
    /**
     * The ::xevent signal is a low level signal that is emitted
     * whenever an XEvent has been received.
     * 
     * When handlers to this signal return %TRUE, no other handlers will be
     * invoked. In particular, the default handler for this function is
     * GDK's own event handling mechanism, so by returning %TRUE for an event
     * that GDK expects to translate, you may break GDK and/or GTK+ in
     * interesting ways. You have been warned.
     * 
     * If you want this signal handler to queue a `GdkEvent`, you can use
     * gdk_display_put_event().
     * 
     * If you are interested in X GenericEvents, bear in mind that
     * XGetEventData() has been already called on the event, and
     * XFreeEventData() will be called afterwards.
     * @param xevent a pointer to the XEvent to process
     */
    connect(sigName: "xevent", callback: (($obj: X11Display, xevent?: object | null) => boolean)): number
    connect_after(sigName: "xevent", callback: (($obj: X11Display, xevent?: object | null) => boolean)): number
    emit(sigName: "xevent", xevent?: object | null): void
    /* Signals of Gdk-4.0.Gdk.Display */
    /**
     * Emitted when the connection to the windowing system for `display` is closed.
     * @param is_error %TRUE if the display was closed due to an error
     */
    connect(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    /**
     * Emitted when the connection to the windowing system for `display` is opened.
     */
    connect(sigName: "opened", callback: (($obj: X11Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: X11Display) => void)): number
    emit(sigName: "opened"): void
    /**
     * Emitted whenever a new seat is made known to the windowing system.
     * @param seat the seat that was just added
     */
    connect(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    /**
     * Emitted whenever a seat is removed by the windowing system.
     * @param seat the seat that was just removed
     */
    connect(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    /**
     * Emitted whenever a setting changes its value.
     * @param setting the name of the setting that changed
     */
    connect(sigName: "setting-changed", callback: (($obj: X11Display, setting: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: X11Display, setting: string) => void)): number
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Tries to open a new display to the X server given by
     * `display_name`. If opening the display fails, %NULL is
     * returned.
     * @param display_name name of the X display.   See the XOpenDisplay() for details.
     */
    static open(display_name?: string | null): Gdk.Display | null
    /* Function overloads */
    /**
     * Opens a display.
     * 
     * If opening the display fails, `NULL` is returned.
     * @param display_name the name of the display to open
     */
    static open(display_name: string): Gdk.Display | null
    /**
     * Sets the program class.
     * 
     * The X11 backend uses the program class to set the class name part
     * of the `WM_CLASS` property on toplevel windows; see the ICCCM.
     * @param display a `GdkDisplay`
     * @param program_class a string
     */
    static set_program_class(display: Gdk.Display, program_class: string): void
    static $gtype: GObject.Type
}
interface X11Drag_ConstructProps extends Gdk.Drag_ConstructProps {
}
class X11Drag {
    /* Properties of Gdk-4.0.Gdk.Drag */
    /**
     * The possible actions of this drag.
     */
    actions: Gdk.DragAction
    /**
     * The `GdkContentProvider`.
     */
    readonly content: Gdk.ContentProvider
    /**
     * The `GdkDevice` that is performing the drag.
     */
    readonly device: Gdk.Device
    /**
     * The `GdkDisplay` that the drag belongs to.
     */
    readonly display: Gdk.Display
    /**
     * The possible formats that the drag can provide its data in.
     */
    readonly formats: Gdk.ContentFormats
    /**
     * The currently selected action of the drag.
     */
    selected_action: Gdk.DragAction
    /**
     * The surface where the drag originates.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Drag */
    /**
     * Informs GDK that the drop ended.
     * 
     * Passing %FALSE for `success` may trigger a drag cancellation
     * animation.
     * 
     * This function is called by the drag source, and should be the
     * last call before dropping the reference to the `drag`.
     * 
     * The `GdkDrag` will only take the first [method`Gdk`.Drag.drop_done]
     * call as effective, if this function is called multiple times,
     * all subsequent calls will be ignored.
     * @param success whether the drag was ultimatively successful
     */
    drop_done(success: boolean): void
    /**
     * Determines the bitmask of possible actions proposed by the source.
     */
    get_actions(): Gdk.DragAction
    /**
     * Returns the `GdkContentProvider` associated to the `GdkDrag` object.
     */
    get_content(): Gdk.ContentProvider
    /**
     * Returns the `GdkDevice` associated to the `GdkDrag` object.
     */
    get_device(): Gdk.Device
    /**
     * Gets the `GdkDisplay` that the drag object was created for.
     */
    get_display(): Gdk.Display
    /**
     * Returns the surface on which the drag icon should be rendered
     * during the drag operation.
     * 
     * Note that the surface may not be available until the drag operation
     * has begun. GDK will move the surface in accordance with the ongoing
     * drag operation. The surface is owned by `drag` and will be destroyed
     * when the drag operation is over.
     */
    get_drag_surface(): Gdk.Surface | null
    /**
     * Retrieves the formats supported by this `GdkDrag` object.
     */
    get_formats(): Gdk.ContentFormats
    /**
     * Determines the action chosen by the drag destination.
     */
    get_selected_action(): Gdk.DragAction
    /**
     * Returns the `GdkSurface` where the drag originates.
     */
    get_surface(): Gdk.Surface
    /**
     * Sets the position of the drag surface that will be kept
     * under the cursor hotspot.
     * 
     * Initially, the hotspot is at the top left corner of the drag surface.
     * @param hot_x x coordinate of the drag surface hotspot
     * @param hot_y y coordinate of the drag surface hotspot
     */
    set_hotspot(hot_x: number, hot_y: number): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Drag */
    /**
     * Emitted when the drag operation is cancelled.
     * @param reason The reason the drag was cancelled
     */
    connect(sigName: "cancel", callback: (($obj: X11Drag, reason: Gdk.DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: X11Drag, reason: Gdk.DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    /**
     * Emitted when the destination side has finished reading all data.
     * 
     * The drag object can now free all miscellaneous data.
     */
    connect(sigName: "dnd-finished", callback: (($obj: X11Drag) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: X11Drag) => void)): number
    emit(sigName: "dnd-finished"): void
    /**
     * Emitted when the drop operation is performed on an accepting client.
     */
    connect(sigName: "drop-performed", callback: (($obj: X11Drag) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: X11Drag) => void)): number
    emit(sigName: "drop-performed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::formats", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::formats", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Drag_ConstructProps)
    _init (config?: X11Drag_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
class X11GLContext {
    /* Properties of Gdk-4.0.Gdk.GLContext */
    /**
     * The allowed APIs.
     */
    allowed_apis: Gdk.GLAPI
    /**
     * The API currently in use.
     */
    readonly api: Gdk.GLAPI
    /**
     * Always %NULL
     * 
     * As many contexts can share data now and no single shared context exists
     * anymore, this function has been deprecated and now always returns %NULL.
     */
    readonly shared_context: Gdk.GLContext
    /* Properties of Gdk-4.0.Gdk.DrawContext */
    /**
     * The `GdkDisplay` used to create the `GdkDrawContext`.
     */
    readonly display: Gdk.Display
    /**
     * The `GdkSurface` the context is bound to.
     */
    readonly surface: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    /**
     * Gets the allowed APIs set via gdk_gl_context_set_allowed_apis().
     */
    get_allowed_apis(): Gdk.GLAPI
    /**
     * Gets the API currently in use.
     * 
     * If the renderer has not been realized yet, 0 is returned.
     */
    get_api(): Gdk.GLAPI
    /**
     * Retrieves whether the context is doing extra validations and runtime checking.
     * 
     * See [method`Gdk`.GLContext.set_debug_enabled].
     */
    get_debug_enabled(): boolean
    /**
     * Retrieves the display the `context` is created for
     */
    get_display(): Gdk.Display | null
    /**
     * Retrieves whether the context is forward-compatible.
     * 
     * See [method`Gdk`.GLContext.set_forward_compatible].
     */
    get_forward_compatible(): boolean
    /**
     * Retrieves required OpenGL version.
     * 
     * See [method`Gdk`.GLContext.set_required_version].
     */
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    /**
     * Used to retrieves the `GdkGLContext` that this `context` share data with.
     * 
     * As many contexts can share data now and no single shared context exists
     * anymore, this function has been deprecated and now always returns %NULL.
     */
    get_shared_context(): Gdk.GLContext | null
    /**
     * Retrieves the surface used by the `context`.
     */
    get_surface(): Gdk.Surface | null
    /**
     * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
     */
    get_use_es(): boolean
    /**
     * Retrieves the OpenGL version of the `context`.
     * 
     * The `context` must be realized prior to calling this function.
     */
    get_version(): [ /* major */ number, /* minor */ number ]
    /**
     * Whether the `GdkGLContext` is in legacy mode or not.
     * 
     * The `GdkGLContext` must be realized before calling this function.
     * 
     * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
     * profile; this profile removes all the OpenGL API that was deprecated
     * prior to the 3.2 version of the specification. If the realization is
     * successful, this function will return %FALSE.
     * 
     * If the underlying OpenGL implementation does not support core profiles,
     * GDK will fall back to a pre-3.2 compatibility profile, and this function
     * will return %TRUE.
     * 
     * You can use the value returned by this function to decide which kind
     * of OpenGL API to use, or whether to do extension discovery, or what
     * kind of shader programs to load.
     */
    is_legacy(): boolean
    /**
     * Checks if the two GL contexts can share resources.
     * 
     * When they can, the texture IDs from `other` can be used in `self`. This
     * is particularly useful when passing `GdkGLTexture` objects between
     * different contexts.
     * 
     * Contexts created for the same display with the same properties will
     * always be compatible, even if they are created for different surfaces.
     * For other contexts it depends on the GL backend.
     * 
     * Both contexts must be realized for this check to succeed. If either one
     * is not, this function will return %FALSE.
     * @param other the `GdkGLContext` that should be compatible with `self`
     */
    is_shared(other: Gdk.GLContext): boolean
    /**
     * Makes the `context` the current one.
     */
    make_current(): void
    /**
     * Realizes the given `GdkGLContext`.
     * 
     * It is safe to call this function on a realized `GdkGLContext`.
     */
    realize(): boolean
    /**
     * Sets the allowed APIs. When gdk_gl_context_realize() is called, only the
     * allowed APIs will be tried. If you set this to 0, realizing will always fail.
     * 
     * If you set it on a realized context, the property will not have any effect.
     * It is only relevant during gdk_gl_context_realize().
     * 
     * By default, all APIs are allowed.
     * @param apis the allowed APIs
     */
    set_allowed_apis(apis: Gdk.GLAPI): void
    /**
     * Sets whether the `GdkGLContext` should perform extra validations and
     * runtime checking.
     * 
     * This is useful during development, but has additional overhead.
     * 
     * The `GdkGLContext` must not be realized or made current prior to
     * calling this function.
     * @param enabled whether to enable debugging in the context
     */
    set_debug_enabled(enabled: boolean): void
    /**
     * Sets whether the `GdkGLContext` should be forward-compatible.
     * 
     * Forward-compatible contexts must not support OpenGL functionality that
     * has been marked as deprecated in the requested version; non-forward
     * compatible contexts, on the other hand, must support both deprecated and
     * non deprecated functionality.
     * 
     * The `GdkGLContext` must not be realized or made current prior to calling
     * this function.
     * @param compatible whether the context should be forward-compatible
     */
    set_forward_compatible(compatible: boolean): void
    /**
     * Sets the major and minor version of OpenGL to request.
     * 
     * Setting `major` and `minor` to zero will use the default values.
     * 
     * The `GdkGLContext` must not be realized or made current prior to calling
     * this function.
     * @param major the major version to request
     * @param minor the minor version to request
     */
    set_required_version(major: number, minor: number): void
    /**
     * Requests that GDK create an OpenGL ES context instead of an OpenGL one.
     * 
     * Not all platforms support OpenGL ES.
     * 
     * The `context` must not have been realized.
     * 
     * By default, GDK will attempt to automatically detect whether the
     * underlying GL implementation is OpenGL or OpenGL ES once the `context`
     * is realized.
     * 
     * You should check the return value of [method`Gdk`.GLContext.get_use_es]
     * after calling [method`Gdk`.GLContext.realize] to decide whether to use
     * the OpenGL or OpenGL ES API, extensions, or shaders.
     * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
     */
    set_use_es(use_es: number): void
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on the `context'`s surface.
     * 
     * Calling this function begins a drawing operation using `context` on the
     * surface that `context` was created from. The actual requirements and
     * guarantees for the drawing operation vary for different implementations
     * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
     * need to be treated differently.
     * 
     * A call to this function is a requirement for drawing and must be
     * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
     * complete the drawing operation and ensure the contents become visible
     * on screen.
     * 
     * Note that the `region` passed to this function is the minimum region that
     * needs to be drawn and depending on implementation, windowing system and
     * hardware in use, it might be necessary to draw a larger region. Drawing
     * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
     * query the region that must be drawn.
     * 
     * When using GTK, the widget system automatically places calls to
     * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
     * use of [class`Gsk`.Renderer]s, so application code does not need to call
     * these functions explicitly.
     * @param region minimum region that should be drawn
     */
    begin_frame(region: cairo.Region): void
    /**
     * Ends a drawing operation started with gdk_draw_context_begin_frame().
     * 
     * This makes the drawing available on screen.
     * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
     * 
     * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
     * implicitly before returning; it is not recommended to call `glFlush()`
     * explicitly before calling this function.
     */
    end_frame(): void
    /**
     * Retrieves the region that is currently being repainted.
     * 
     * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
     * return a union of the region passed to that function and the area of the
     * surface that the `context` determined needs to be repainted.
     * 
     * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
     */
    get_frame_region(): cairo.Region | null
    /**
     * Returns %TRUE if `context` is in the process of drawing to its surface.
     * 
     * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
     * may be effecting the contents of the `context'`s surface.
     */
    is_in_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-apis", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::api", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-context", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-context", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::surface", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
class X11Monitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
    /**
     * The connector name.
     */
    readonly connector: string
    /**
     * The `GdkDisplay` of the monitor.
     */
    readonly display: Gdk.Display
    /**
     * The geometry of the monitor.
     */
    readonly geometry: Gdk.Rectangle
    /**
     * The height of the monitor, in millimeters.
     */
    readonly height_mm: number
    /**
     * The manufacturer name.
     */
    readonly manufacturer: string
    /**
     * The model name.
     */
    readonly model: string
    /**
     * The refresh rate, in milli-Hertz.
     */
    readonly refresh_rate: number
    /**
     * The scale factor.
     */
    readonly scale_factor: number
    /**
     * The subpixel layout.
     */
    readonly subpixel_layout: Gdk.SubpixelLayout
    /**
     * Whether the object is still valid.
     */
    readonly valid: boolean
    /**
     * The width of the monitor, in millimeters.
     */
    readonly width_mm: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Monitor */
    /**
     * Returns the XID of the Output corresponding to `monitor`.
     */
    get_output(): xlib.XID
    /**
     * Retrieves the size and position of the “work area” on a monitor
     * within the display coordinate space.
     * 
     * The returned geometry is in ”application pixels”, not in ”device pixels”
     * (see [method`Gdk`.Monitor.get_scale_factor]).
     */
    get_workarea(): /* workarea */ Gdk.Rectangle
    /* Methods of Gdk-4.0.Gdk.Monitor */
    /**
     * Gets the name of the monitor's connector, if available.
     */
    get_connector(): string | null
    /**
     * Gets the display that this monitor belongs to.
     */
    get_display(): Gdk.Display
    /**
     * Retrieves the size and position of the monitor within the
     * display coordinate space.
     * 
     * The returned geometry is in  ”application pixels”, not in
     * ”device pixels” (see [method`Gdk`.Monitor.get_scale_factor]).
     */
    get_geometry(): /* geometry */ Gdk.Rectangle
    /**
     * Gets the height in millimeters of the monitor.
     */
    get_height_mm(): number
    /**
     * Gets the name or PNP ID of the monitor's manufacturer.
     * 
     * Note that this value might also vary depending on actual
     * display backend.
     * 
     * The PNP ID registry is located at
     * [https://uefi.org/pnp_id_list](https://uefi.org/pnp_id_list).
     */
    get_manufacturer(): string | null
    /**
     * Gets the string identifying the monitor model, if available.
     */
    get_model(): string | null
    /**
     * Gets the refresh rate of the monitor, if available.
     * 
     * The value is in milli-Hertz, so a refresh rate of 60Hz
     * is returned as 60000.
     */
    get_refresh_rate(): number
    /**
     * Gets the internal scale factor that maps from monitor coordinates
     * to device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * it can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a surface
     * where it is better to use [method`Gdk`.Surface.get_scale_factor] instead.
     */
    get_scale_factor(): number
    /**
     * Gets information about the layout of red, green and blue
     * primaries for pixels.
     */
    get_subpixel_layout(): Gdk.SubpixelLayout
    /**
     * Gets the width in millimeters of the monitor.
     */
    get_width_mm(): number
    /**
     * Returns %TRUE if the `monitor` object corresponds to a
     * physical monitor.
     * 
     * The `monitor` becomes invalid when the physical monitor
     * is unplugged or removed.
     */
    is_valid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Monitor */
    /**
     * Emitted when the output represented by `monitor` gets disconnected.
     */
    connect(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: X11Monitor) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Screen_ConstructProps extends GObject.Object_ConstructProps {
}
class X11Screen {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Screen */
    /**
     * Returns the current workspace for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     */
    get_current_desktop(): number
    /**
     * Gets the XID of the specified output/monitor.
     * If the X server does not support version 1.2 of the RANDR
     * extension, 0 is returned.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_output(monitor_num: number): xlib.XID
    /**
     * Returns the number of workspaces for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     */
    get_number_of_desktops(): number
    /**
     * Returns the index of a `GdkX11Screen`.
     */
    get_screen_number(): number
    /**
     * Returns the name of the window manager for `screen`.
     */
    get_window_manager_name(): string
    /**
     * Returns the screen of a `GdkX11Screen`.
     */
    get_xscreen(): xlib.Screen
    /**
     * This function is specific to the X11 backend of GDK, and indicates
     * whether the window manager supports a certain hint from the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * 
     * When using this function, keep in mind that the window manager
     * can change over time; so you shouldn’t use this function in
     * a way that impacts persistent application state. A common bug
     * is that your application can start up before the window manager
     * does when the user logs in, and before the window manager starts
     * gdk_x11_screen_supports_net_wm_hint() will return %FALSE for every property.
     * You can monitor the window_manager_changed signal on `GdkX11Screen` to detect
     * a window manager change.
     * @param property_name name of the WM property
     */
    supports_net_wm_hint(property_name: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GdkX11-4.0.GdkX11.X11Screen */
    connect(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Surface_ConstructProps extends Gdk.Surface_ConstructProps {
}
class X11Surface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Gdk.Cursor
    /**
     * The `GdkDisplay` connection of the surface.
     */
    readonly display: Gdk.Display
    /**
     * The `GdkFrameClock` of the surface.
     */
    readonly frame_clock: Gdk.FrameClock
    /**
     * The height of the surface, in pixels.
     */
    readonly height: number
    /**
     * Whether the surface is mapped.
     */
    readonly mapped: boolean
    /**
     * The scale factor of the surface.
     */
    readonly scale_factor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Surface */
    /**
     * Gets the number of the workspace `surface` is on.
     */
    get_desktop(): number
    /**
     * Returns the group this surface belongs to.
     */
    get_group(): Gdk.Surface | null
    /**
     * Returns the X resource (surface) belonging to a `GdkSurface`.
     */
    get_xid(): xlib.Window
    /**
     * Moves the surface to the correct workspace when running under a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * Will not do anything if the surface is already on all workspaces.
     */
    move_to_current_desktop(): void
    /**
     * Moves the surface to the given workspace when running unde a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @param desktop the number of the workspace to move the surface to
     */
    move_to_desktop(desktop: number): void
    /**
     * This function can be used to disable frame synchronization for a surface.
     * Normally frame synchronziation will be enabled or disabled based on whether
     * the system has a compositor that supports frame synchronization, but if
     * the surface is not directly managed by the window manager, then frame
     * synchronziation may need to be disabled. This is the case for a surface
     * embedded via the XEMBED protocol.
     * @param frame_sync_enabled whether frame-synchronization should be enabled
     */
    set_frame_sync_enabled(frame_sync_enabled: boolean): void
    /**
     * Sets the group leader of `surface` to be `leader`.
     * See the ICCCM for details.
     * @param leader a `GdkSurface`
     */
    set_group(leader: Gdk.Surface): void
    /**
     * Sets a hint on `surface` that pagers should not
     * display it. See the EWMH for details.
     * @param skips_pager %TRUE to skip pagers
     */
    set_skip_pager_hint(skips_pager: boolean): void
    /**
     * Sets a hint on `surface` that taskbars should not
     * display it. See the EWMH for details.
     * @param skips_taskbar %TRUE to skip taskbars
     */
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    /**
     * GTK applications can request a dark theme variant. In order to
     * make other applications - namely window managers using GTK for
     * themeing - aware of this choice, GTK uses this function to
     * export the requested theme variant as _GTK_THEME_VARIANT property
     * on toplevel surfaces.
     * 
     * Note that this property is automatically updated by GTK, so this
     * function should only be used by applications which do not use GTK
     * to create toplevel surfaces.
     * @param variant the theme variant to export
     */
    set_theme_variant(variant: string): void
    /**
     * Sets a hint on `surface` that it needs user attention.
     * See the ICCCM for details.
     * @param urgent %TRUE to indicate urgenct attention needed
     */
    set_urgency_hint(urgent: boolean): void
    /**
     * The application can use this call to update the _NET_WM_USER_TIME
     * property on a toplevel surface.  This property stores an Xserver
     * time which represents the time of the last user input event
     * received for this surface.  This property may be used by the window
     * manager to alter the focus, stacking, and/or placement behavior of
     * surfaces when they are mapped depending on whether the new surface
     * was created by a user action or is a "pop-up" surface activated by a
     * timer or some other event.
     * 
     * Note that this property is automatically updated by GDK, so this
     * function should only be used by applications which handle input
     * events bypassing GDK.
     * @param timestamp An XServer timestamp to which the property should be set
     */
    set_user_time(timestamp: number): void
    /**
     * This function modifies or removes an arbitrary X11 window
     * property of type UTF8_STRING.  If the given `surface` is
     * not a toplevel surface, it is ignored.
     * @param name Property name, will be interned as an X atom
     * @param value Property value, or %NULL to delete
     */
    set_utf8_property(name: string, value?: string | null): void
    /* Methods of Gdk-4.0.Gdk.Surface */
    /**
     * Emits a short beep associated to `surface`.
     * 
     * If the display of `surface` does not support per-surface beeps,
     * emits a short beep on the display just as [method`Gdk`.Display.beep].
     */
    beep(): void
    /**
     * Creates a new `GdkCairoContext` for rendering on `surface`.
     */
    create_cairo_context(): Gdk.CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    create_gl_context(): Gdk.GLContext
    /**
     * Create a new Cairo surface that is as compatible as possible with the
     * given `surface`.
     * 
     * For example the new surface will have the same fallback resolution
     * and font options as `surface`. Generally, the new surface will also
     * use the same backend as `surface,` unless that is not possible for
     * some reason. The type of the returned surface may be examined with
     * cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * This function always returns a valid pointer, but it will return a
     * pointer to a “nil” surface if `other` is already in an error state
     * or any other error occurs.
     * @param content the content for the new surface
     * @param width width of the new surface
     * @param height height of the new surface
     */
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    create_vulkan_context(): Gdk.VulkanContext
    /**
     * Destroys the window system resources associated with `surface` and
     * decrements `surface'`s reference count.
     * 
     * The window system resources for all children of `surface` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a surface will not be destroyed automatically when its
     * reference count reaches zero. You must call this function yourself
     * before that happens.
     */
    destroy(): void
    /**
     * Retrieves a `GdkCursor` pointer for the cursor currently set on the
     * `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on
     * the surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    get_cursor(): Gdk.Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     * @param device a pointer `GdkDevice`
     */
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     * @param device pointer `GdkDevice` to query to
     */
    get_device_position(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    get_display(): Gdk.Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    get_frame_clock(): Gdk.FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    get_height(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    get_mapped(): boolean
    /**
     * Returns the internal scale factor that maps from surface coordinates
     * to the actual device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * this can be a higher value (often 2). A higher value means that drawing
     * is automatically scaled up to a higher resolution, so any code doing
     * drawing will automatically look nicer. However, if you are supplying
     * pixel-based data the scale value can be used to determine whether to
     * use a pixel resource with higher resolution data.
     * 
     * The scale of a surface may change during runtime.
     */
    get_scale_factor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    get_width(): number
    /**
     * Hide the surface.
     * 
     * For toplevel surfaces, withdraws them, so they will no longer be
     * known to the window manager; for all surfaces, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of [method`Gtk`.Widget.hide].
     */
    hide(): void
    /**
     * Check to see if a surface is destroyed.
     */
    is_destroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queue_render(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    request_layout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * @param cursor a `GdkCursor`
     */
    set_cursor(cursor?: Gdk.Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * @param device a pointer `GdkDevice`
     * @param cursor a `GdkCursor`
     */
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    /**
     * Apply the region to the surface for the purpose of event
     * handling.
     * 
     * Mouse events which happen while the pointer position corresponds
     * to an unset bit in the mask will be passed on the surface below
     * `surface`.
     * 
     * An input region is typically used with RGBA surfaces. The alpha
     * channel of the surface defines which pixels are invisible and
     * allows for nicely antialiased borders, and the input region
     * controls where the surface is “clickable”.
     * 
     * Use [method`Gdk`.Display.supports_input_shapes] to find out if
     * a particular backend supports input regions.
     * @param region region of surface to be reactive
     */
    set_input_region(region: cairo.Region): void
    /**
     * Marks a region of the `GdkSurface` as opaque.
     * 
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of surfaces, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel surfaces.
     * 
     * GTK will update this property automatically if the `surface` background
     * is opaque, as we know where the opaque regions are. If your surface
     * background is not opaque, please update this property in your
     * [vfunc`Gtk`.Widget.css_changed] handler.
     * @param region a region, or %NULL to make the entire   surface opaque
     */
    set_opaque_region(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     * @param to the target surface
     * @param x coordinates to translate
     * @param y coordinates to translate
     */
    translate_coordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     * @param monitor the monitor
     */
    connect(sigName: "enter-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "enter-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     * @param event an input event
     */
    connect(sigName: "event", callback: (($obj: X11Surface, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: X11Surface, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     * @param width the current width
     * @param height the current height
     */
    connect(sigName: "layout", callback: (($obj: X11Surface, width: number, height: number) => void)): number
    connect_after(sigName: "layout", callback: (($obj: X11Surface, width: number, height: number) => void)): number
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     * @param monitor the monitor
     */
    connect(sigName: "leave-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "leave-monitor", callback: (($obj: X11Surface, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     * @param region the region that needs to be redrawn
     */
    connect(sigName: "render", callback: (($obj: X11Surface, region: cairo.Region) => boolean)): number
    connect_after(sigName: "render", callback: (($obj: X11Surface, region: cairo.Region) => boolean)): number
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-clock", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Surface_ConstructProps)
    _init (config?: X11Surface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Looks up the `GdkSurface` that wraps the given native window handle.
     * @param display the `GdkDisplay` corresponding to the   window handle
     * @param window an Xlib Window
     */
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Surface
    static $gtype: GObject.Type
}
abstract class X11AppLaunchContextClass {
    static name: string
}
abstract class X11DeviceManagerXI2Class {
    static name: string
}
abstract class X11DeviceXI2Class {
    static name: string
}
abstract class X11DisplayClass {
    static name: string
}
abstract class X11DragClass {
    static name: string
}
abstract class X11GLContextClass {
    static name: string
}
abstract class X11MonitorClass {
    static name: string
}
abstract class X11ScreenClass {
    static name: string
}
abstract class X11SurfaceClass {
    static name: string
}
}
export default GdkX11;