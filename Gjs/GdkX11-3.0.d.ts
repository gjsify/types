/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkX11-3.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Gdk from './Gdk-3.0';

export namespace GdkX11 {

function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom
function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom
function x11_device_get_id(device: X11DeviceCore): number
function x11_device_manager_lookup(device_manager: X11DeviceManagerCore, device_id: number): X11DeviceCore | null
function x11_free_compound_text(ctext: number): void
function x11_free_text_list(list: string): void
function x11_get_default_root_xwindow(): xlib.Window
function x11_get_default_screen(): number
function x11_get_default_xdisplay(): xlib.Display
function x11_get_parent_relative_pattern(): cairo.Pattern
function x11_get_server_time(window: X11Window): number
function x11_get_xatom_by_name(atom_name: string): xlib.Atom
function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom
function x11_get_xatom_name(xatom: xlib.Atom): string
function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string
function x11_grab_server(): void
function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display
function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void
function x11_set_sm_client_id(sm_client_id?: string | null): void
function x11_ungrab_server(): void
function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom
function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom
interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
class X11AppLaunchContext {
    /* Properties of Gdk-3.0.Gdk.AppLaunchContext */
    readonly display: Gdk.Display
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.AppLaunchContext */
    /**
     * Sets the workspace on which applications will be launched when
     * using this context when running under a window manager that
     * supports multiple workspaces, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * 
     * When the workspace is not specified or `desktop` is set to -1,
     * it is up to the window manager to pick one, typically it will
     * be the current workspace.
     * @param desktop the number of a workspace, or -1
     */
    set_desktop(desktop: number): void
    /**
     * Sets the display on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_screen().
     * @param display a #GdkDisplay
     */
    set_display(display: Gdk.Display): void
    /**
     * Sets the icon for applications that are launched with this
     * context.
     * 
     * Window Managers can use this information when displaying startup
     * notification.
     * 
     * See also gdk_app_launch_context_set_icon_name().
     * @param icon a #GIcon, or %NULL
     */
    set_icon(icon?: Gio.Icon | null): void
    /**
     * Sets the icon for applications that are launched with this context.
     * The `icon_name` will be interpreted in the same way as the Icon field
     * in desktop files. See also gdk_app_launch_context_set_icon().
     * 
     * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
     * If neither `icon` or `icon_name` is set, the icon is taken from either
     * the file that is passed to launched application or from the #GAppInfo
     * for the launched application itself.
     * @param icon_name an icon name, or %NULL
     */
    set_icon_name(icon_name?: string | null): void
    /**
     * Sets the screen on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_display().
     * 
     * Note that, typically, a #GdkScreen represents a logical screen,
     * not a physical monitor.
     * 
     * If both `screen` and `display` are set, the `screen` takes priority.
     * If neither `screen` or `display` are set, the default screen and
     * display are used.
     * @param screen a #GdkScreen
     */
    set_screen(screen: Gdk.Screen): void
    /**
     * Sets the timestamp of `context`. The timestamp should ideally
     * be taken from the event that triggered the launch.
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
    /* Static methods and pseudo-constructors */
    static new(): X11AppLaunchContext
    /* Function overloads */
    static new(): X11AppLaunchContext
    static $gtype: GObject.Type
}
interface X11Cursor_ConstructProps extends Gdk.Cursor_ConstructProps {
}
class X11Cursor {
    /* Properties of Gdk-3.0.Gdk.Cursor */
    readonly cursor_type: Gdk.CursorType
    readonly display: Gdk.Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-3.0.GdkX11.X11Cursor */
    /**
     * Returns the X cursor belonging to a #GdkCursor.
     */
    get_xcursor(): xlib.Cursor
    /**
     * Returns the display of a #GdkCursor.
     */
    get_xdisplay(): xlib.Display
    /* Methods of Gdk-3.0.Gdk.Cursor */
    /**
     * Returns the cursor type for this cursor.
     */
    get_cursor_type(): Gdk.CursorType
    /**
     * Returns the display on which the #GdkCursor is defined.
     */
    get_display(): Gdk.Display
    /**
     * Returns a #GdkPixbuf with the image used to display the cursor.
     * 
     * Note that depending on the capabilities of the windowing system and
     * on the cursor, GDK may not be able to obtain the image data. In this
     * case, %NULL is returned.
     */
    get_image(): GdkPixbuf.Pixbuf | null
    /**
     * Returns a cairo image surface with the image used to display the cursor.
     * 
     * Note that depending on the capabilities of the windowing system and
     * on the cursor, GDK may not be able to obtain the image data. In this
     * case, %NULL is returned.
     */
    get_surface(): [ /* returnType */ cairo.Surface | null, /* x_hot */ number | null, /* y_hot */ number | null ]
    /**
     * Adds a reference to `cursor`.
     */
    ref(): Gdk.Cursor
    /**
     * Removes a reference from `cursor,` deallocating the cursor
     * if no references remain.
     */
    unref(): void
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
    connect(sigName: "notify", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor-type", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-type", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Cursor_ConstructProps)
    _init (config?: X11Cursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceCore_ConstructProps extends Gdk.Device_ConstructProps {
}
class X11DeviceCore {
    /* Properties of Gdk-3.0.Gdk.Device */
    /**
     * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
     * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
     */
    readonly associated_device: Gdk.Device
    /**
     * The axes currently available for this device.
     */
    readonly axes: Gdk.AxisFlags
    /**
     * The #GdkDeviceManager the #GdkDevice pertains to.
     */
    readonly device_manager: Gdk.DeviceManager
    /**
     * The #GdkDisplay the #GdkDevice pertains to.
     */
    readonly display: Gdk.Display
    /**
     * Whether the device is represented by a cursor on the screen. Devices of type
     * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
     */
    readonly has_cursor: boolean
    input_mode: Gdk.InputMode
    /**
     * Source type for the device.
     */
    readonly input_source: Gdk.InputSource
    /**
     * Number of axes in the device.
     */
    readonly n_axes: number
    /**
     * The device name.
     */
    readonly name: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    readonly num_touches: number
    /**
     * Product ID of this device, see gdk_device_get_product_id().
     */
    readonly product_id: string
    /**
     * #GdkSeat of this device.
     */
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /**
     * Device role in the device manager.
     */
    readonly type: Gdk.DeviceType
    /**
     * Vendor ID of this device, see gdk_device_get_vendor_id().
     */
    readonly vendor_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Device */
    /**
     * Returns the associated device to `device,` if `device` is of type
     * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
     * keyboard.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
     * the master device to which `device` is attached to.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
     * returned, as there is no associated device.
     */
    get_associated_device(): Gdk.Device | null
    /**
     * Returns the axes currently available on the device.
     */
    get_axes(): Gdk.AxisFlags
    /**
     * Returns the axis use for `index_`.
     * @param index_ the index of the axis.
     */
    get_axis_use(index_: number): Gdk.AxisUse
    /**
     * Returns the device type for `device`.
     */
    get_device_type(): Gdk.DeviceType
    /**
     * Returns the #GdkDisplay to which `device` pertains.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the pointer follows device motion.
     * This is not meaningful for keyboard devices, which don't have a pointer.
     */
    get_has_cursor(): boolean
    /**
     * If `index_` has a valid keyval, this function will return %TRUE
     * and fill in `keyval` and `modifiers` with the keyval settings.
     * @param index_ the index of the macro button to get.
     */
    get_key(index_: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ Gdk.ModifierType ]
    /**
     * Gets information about which window the given pointer device is in, based on events
     * that have been received so far from the display server. If another application
     * has a pointer grab, or this application has a grab with owner_events = %FALSE,
     * %NULL may be returned even if the pointer is physically over one of this
     * application's windows.
     */
    get_last_event_window(): Gdk.Window | null
    /**
     * Determines the mode of the device.
     */
    get_mode(): Gdk.InputMode
    /**
     * Returns the number of axes the device currently has.
     */
    get_n_axes(): number
    /**
     * Returns the number of keys the device currently has.
     */
    get_n_keys(): number
    /**
     * Determines the name of the device.
     */
    get_name(): string
    /**
     * Gets the current location of `device`. As a slave device
     * coordinates are those of its master pointer, This function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_position(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the current location of `device` in double precision. As a slave device's
     * coordinates are those of its master pointer, this function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them. See gdk_device_grab().
     */
    get_position_double(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Returns the product ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it. See gdk_device_get_vendor_id() for more information.
     */
    get_product_id(): string | null
    /**
     * Returns the #GdkSeat the device belongs to.
     */
    get_seat(): Gdk.Seat
    /**
     * Determines the type of the device.
     */
    get_source(): Gdk.InputSource
    /**
     * Returns the vendor ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it.
     * 
     * This function, together with gdk_device_get_product_id(), can be used to eg.
     * compose #GSettings paths to store settings for this device.
     * 
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const gchar *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    gchar *path;
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
     * 
     */
    get_vendor_id(): string | null
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
     * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
     * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
     * belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position_double(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Grabs the device so that all events coming from this device are passed to
     * this application until the device is ungrabbed with gdk_device_ungrab(),
     * or the window becomes unviewable. This overrides any previous grab on the device
     * by this client.
     * 
     * Note that `device` and `window` need to be on the same display.
     * 
     * Device grabs are used for operations which need complete control over the
     * given device events (either pointer or keyboard). For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of an X window has selected both button press
     * and button release events, then a button press event will cause an automatic
     * pointer grab until the button is released. X does this automatically since
     * most applications expect to receive button press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * %TRUE.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     * @param window the #GdkWindow which will own the grab (the grab window)
     * @param grab_ownership specifies the grab ownership.
     * @param owner_events if %FALSE then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
     * @param event_mask specifies the event mask, which is used in accordance with              `owner_events`.
     * @param cursor the cursor to display while the grab is active if the device is          a pointer. If this is %NULL then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
     * @param time_ the timestamp of the event which led to this pointer grab. This         usually comes from the #GdkEvent struct, though %GDK_CURRENT_TIME         can be used if the time isn’t known.
     */
    grab(window: Gdk.Window, grab_ownership: Gdk.GrabOwnership, owner_events: boolean, event_mask: Gdk.EventMask, cursor: Gdk.Cursor | null, time_: number): Gdk.GrabStatus
    /**
     * Returns a #GList of #GdkAtoms, containing the labels for
     * the axes that `device` currently has.
     */
    list_axes(): Gdk.Atom[]
    /**
     * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
     * the list of slave devices attached to it, otherwise it will return
     * %NULL
     */
    list_slave_devices(): Gdk.Device[] | null
    /**
     * Specifies how an axis of a device is used.
     * @param index_ the index of the axis
     * @param use specifies how the axis is used
     */
    set_axis_use(index_: number, use: Gdk.AxisUse): void
    /**
     * Specifies the X key event to generate when a macro button of a device
     * is pressed.
     * @param index_ the index of the macro button to set
     * @param keyval the keyval to generate
     * @param modifiers the modifiers to set
     */
    set_key(index_: number, keyval: number, modifiers: Gdk.ModifierType): void
    /**
     * Sets a the mode of an input device. The mode controls if the
     * device is active and whether the device’s range is mapped to the
     * entire screen or to a single window.
     * 
     * Note: This is only meaningful for floating devices, master devices (and
     * slaves connected to these) drive the pointer cursor, which is not limited
     * by the input mode.
     * @param mode the input mode.
     */
    set_mode(mode: Gdk.InputMode): boolean
    /**
     * Release any grab on `device`.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    ungrab(time_: number): void
    /**
     * Warps `device` in `display` to the point `x,``y` on
     * the screen `screen,` unless the device is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen to warp `device` to.
     * @param x the X coordinate of the destination.
     * @param y the Y coordinate of the destination.
     */
    warp(screen: Gdk.Screen, x: number, y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Device */
    /**
     * The ::changed signal is emitted either when the #GdkDevice
     * has changed the number of either axes or keys. For example
     * In X this will normally happen when the slave device routing
     * events through the master device changes (for example, user
     * switches from the USB mouse to a tablet), in that case the
     * master device will change to reflect the new slave device
     * axes and keys.
     */
    connect(sigName: "changed", callback: (($obj: X11DeviceCore) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceCore) => void)): number
    emit(sigName: "changed"): void
    /**
     * The ::tool-changed signal is emitted on pen/eraser
     * #GdkDevices whenever tools enter or leave proximity.
     * @param tool The new current tool
     */
    connect(sigName: "tool-changed", callback: (($obj: X11DeviceCore, tool: Gdk.DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: X11DeviceCore, tool: Gdk.DeviceTool) => void)): number
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
    connect(sigName: "notify", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated-device", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-manager", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-manager", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-cursor", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-source", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-source", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-touches", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product-id", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor-id", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-id", callback: (($obj: X11DeviceCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceCore_ConstructProps)
    _init (config?: X11DeviceCore_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceManagerCore_ConstructProps extends Gdk.DeviceManager_ConstructProps {
}
class X11DeviceManagerCore {
    /* Properties of Gdk-3.0.Gdk.DeviceManager */
    readonly display: Gdk.Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceManager */
    /**
     * Returns the client pointer, that is, the master pointer that acts as the core pointer
     * for this application. In X11, window managers may change this depending on the interaction
     * pattern under the presence of several pointers.
     * 
     * You should use this function seldomly, only in code that isn’t triggered by a #GdkEvent
     * and there aren’t other means to get a meaningful #GdkDevice to operate on.
     */
    get_client_pointer(): Gdk.Device
    /**
     * Gets the #GdkDisplay associated to `device_manager`.
     */
    get_display(): Gdk.Display | null
    /**
     * Returns the list of devices of type `type` currently attached to
     * `device_manager`.
     * @param type device type to get.
     */
    list_devices(type: Gdk.DeviceType): Gdk.Device[]
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
    /* Signals of Gdk-3.0.Gdk.DeviceManager */
    /**
     * The ::device-added signal is emitted either when a new master
     * pointer is created, or when a slave (Hardware) input device
     * is plugged in.
     * @param device the newly added #GdkDevice.
     */
    connect(sigName: "device-added", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    /**
     * The ::device-changed signal is emitted whenever a device
     * has changed in the hierarchy, either slave devices being
     * disconnected from their master device or connected to
     * another one, or master devices being added or removed
     * a slave device.
     * 
     * If a slave device is detached from all master devices
     * (gdk_device_get_associated_device() returns %NULL), its
     * #GdkDeviceType will change to %GDK_DEVICE_TYPE_FLOATING,
     * if it's attached, it will change to %GDK_DEVICE_TYPE_SLAVE.
     * @param device the #GdkDevice that changed.
     */
    connect(sigName: "device-changed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-changed", device: Gdk.Device): void
    /**
     * The ::device-removed signal is emitted either when a master
     * pointer is removed, or when a slave (Hardware) input device
     * is unplugged.
     * @param device the just removed #GdkDevice.
     */
    connect(sigName: "device-removed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: X11DeviceManagerCore, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
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
    connect(sigName: "notify", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceManagerCore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DeviceManagerCore_ConstructProps)
    _init (config?: X11DeviceManagerCore_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceManagerXI2_ConstructProps extends X11DeviceManagerCore_ConstructProps {
    /* Constructor properties of GdkX11-3.0.GdkX11.X11DeviceManagerXI2 */
    major?: number
    minor?: number
    opcode?: number
}
class X11DeviceManagerXI2 {
    /* Properties of GdkX11-3.0.GdkX11.X11DeviceManagerXI2 */
    readonly major: number
    readonly minor: number
    readonly opcode: number
    /* Properties of Gdk-3.0.Gdk.DeviceManager */
    readonly display: Gdk.Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceManager */
    /**
     * Returns the client pointer, that is, the master pointer that acts as the core pointer
     * for this application. In X11, window managers may change this depending on the interaction
     * pattern under the presence of several pointers.
     * 
     * You should use this function seldomly, only in code that isn’t triggered by a #GdkEvent
     * and there aren’t other means to get a meaningful #GdkDevice to operate on.
     */
    get_client_pointer(): Gdk.Device
    /**
     * Gets the #GdkDisplay associated to `device_manager`.
     */
    get_display(): Gdk.Display | null
    /**
     * Returns the list of devices of type `type` currently attached to
     * `device_manager`.
     * @param type device type to get.
     */
    list_devices(type: Gdk.DeviceType): Gdk.Device[]
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
    /* Signals of Gdk-3.0.Gdk.DeviceManager */
    /**
     * The ::device-added signal is emitted either when a new master
     * pointer is created, or when a slave (Hardware) input device
     * is plugged in.
     * @param device the newly added #GdkDevice.
     */
    connect(sigName: "device-added", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-added", device: Gdk.Device): void
    /**
     * The ::device-changed signal is emitted whenever a device
     * has changed in the hierarchy, either slave devices being
     * disconnected from their master device or connected to
     * another one, or master devices being added or removed
     * a slave device.
     * 
     * If a slave device is detached from all master devices
     * (gdk_device_get_associated_device() returns %NULL), its
     * #GdkDeviceType will change to %GDK_DEVICE_TYPE_FLOATING,
     * if it's attached, it will change to %GDK_DEVICE_TYPE_SLAVE.
     * @param device the #GdkDevice that changed.
     */
    connect(sigName: "device-changed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-changed", device: Gdk.Device): void
    /**
     * The ::device-removed signal is emitted either when a master
     * pointer is removed, or when a slave (Hardware) input device
     * is unplugged.
     * @param device the just removed #GdkDevice.
     */
    connect(sigName: "device-removed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: X11DeviceManagerXI2, device: Gdk.Device) => void)): number
    emit(sigName: "device-removed", device: Gdk.Device): void
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
    connect(sigName: "notify::major", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::major", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minor", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minor", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opcode", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opcode", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
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
    /* Constructor properties of GdkX11-3.0.GdkX11.X11DeviceXI2 */
    device_id?: number
}
class X11DeviceXI2 {
    /* Properties of GdkX11-3.0.GdkX11.X11DeviceXI2 */
    readonly device_id: number
    /* Properties of Gdk-3.0.Gdk.Device */
    /**
     * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
     * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
     */
    readonly associated_device: Gdk.Device
    /**
     * The axes currently available for this device.
     */
    readonly axes: Gdk.AxisFlags
    /**
     * The #GdkDeviceManager the #GdkDevice pertains to.
     */
    readonly device_manager: Gdk.DeviceManager
    /**
     * The #GdkDisplay the #GdkDevice pertains to.
     */
    readonly display: Gdk.Display
    /**
     * Whether the device is represented by a cursor on the screen. Devices of type
     * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
     */
    readonly has_cursor: boolean
    input_mode: Gdk.InputMode
    /**
     * Source type for the device.
     */
    readonly input_source: Gdk.InputSource
    /**
     * Number of axes in the device.
     */
    readonly n_axes: number
    /**
     * The device name.
     */
    readonly name: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    readonly num_touches: number
    /**
     * Product ID of this device, see gdk_device_get_product_id().
     */
    readonly product_id: string
    /**
     * #GdkSeat of this device.
     */
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /**
     * Device role in the device manager.
     */
    readonly type: Gdk.DeviceType
    /**
     * Vendor ID of this device, see gdk_device_get_vendor_id().
     */
    readonly vendor_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Device */
    /**
     * Returns the associated device to `device,` if `device` is of type
     * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
     * keyboard.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
     * the master device to which `device` is attached to.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
     * returned, as there is no associated device.
     */
    get_associated_device(): Gdk.Device | null
    /**
     * Returns the axes currently available on the device.
     */
    get_axes(): Gdk.AxisFlags
    /**
     * Returns the axis use for `index_`.
     * @param index_ the index of the axis.
     */
    get_axis_use(index_: number): Gdk.AxisUse
    /**
     * Returns the device type for `device`.
     */
    get_device_type(): Gdk.DeviceType
    /**
     * Returns the #GdkDisplay to which `device` pertains.
     */
    get_display(): Gdk.Display
    /**
     * Determines whether the pointer follows device motion.
     * This is not meaningful for keyboard devices, which don't have a pointer.
     */
    get_has_cursor(): boolean
    /**
     * If `index_` has a valid keyval, this function will return %TRUE
     * and fill in `keyval` and `modifiers` with the keyval settings.
     * @param index_ the index of the macro button to get.
     */
    get_key(index_: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ Gdk.ModifierType ]
    /**
     * Gets information about which window the given pointer device is in, based on events
     * that have been received so far from the display server. If another application
     * has a pointer grab, or this application has a grab with owner_events = %FALSE,
     * %NULL may be returned even if the pointer is physically over one of this
     * application's windows.
     */
    get_last_event_window(): Gdk.Window | null
    /**
     * Determines the mode of the device.
     */
    get_mode(): Gdk.InputMode
    /**
     * Returns the number of axes the device currently has.
     */
    get_n_axes(): number
    /**
     * Returns the number of keys the device currently has.
     */
    get_n_keys(): number
    /**
     * Determines the name of the device.
     */
    get_name(): string
    /**
     * Gets the current location of `device`. As a slave device
     * coordinates are those of its master pointer, This function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_position(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the current location of `device` in double precision. As a slave device's
     * coordinates are those of its master pointer, this function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them. See gdk_device_grab().
     */
    get_position_double(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Returns the product ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it. See gdk_device_get_vendor_id() for more information.
     */
    get_product_id(): string | null
    /**
     * Returns the #GdkSeat the device belongs to.
     */
    get_seat(): Gdk.Seat
    /**
     * Determines the type of the device.
     */
    get_source(): Gdk.InputSource
    /**
     * Returns the vendor ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it.
     * 
     * This function, together with gdk_device_get_product_id(), can be used to eg.
     * compose #GSettings paths to store settings for this device.
     * 
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const gchar *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    gchar *path;
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
     * 
     */
    get_vendor_id(): string | null
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
     * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
     * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
     * belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position_double(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Grabs the device so that all events coming from this device are passed to
     * this application until the device is ungrabbed with gdk_device_ungrab(),
     * or the window becomes unviewable. This overrides any previous grab on the device
     * by this client.
     * 
     * Note that `device` and `window` need to be on the same display.
     * 
     * Device grabs are used for operations which need complete control over the
     * given device events (either pointer or keyboard). For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of an X window has selected both button press
     * and button release events, then a button press event will cause an automatic
     * pointer grab until the button is released. X does this automatically since
     * most applications expect to receive button press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * %TRUE.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     * @param window the #GdkWindow which will own the grab (the grab window)
     * @param grab_ownership specifies the grab ownership.
     * @param owner_events if %FALSE then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
     * @param event_mask specifies the event mask, which is used in accordance with              `owner_events`.
     * @param cursor the cursor to display while the grab is active if the device is          a pointer. If this is %NULL then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
     * @param time_ the timestamp of the event which led to this pointer grab. This         usually comes from the #GdkEvent struct, though %GDK_CURRENT_TIME         can be used if the time isn’t known.
     */
    grab(window: Gdk.Window, grab_ownership: Gdk.GrabOwnership, owner_events: boolean, event_mask: Gdk.EventMask, cursor: Gdk.Cursor | null, time_: number): Gdk.GrabStatus
    /**
     * Returns a #GList of #GdkAtoms, containing the labels for
     * the axes that `device` currently has.
     */
    list_axes(): Gdk.Atom[]
    /**
     * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
     * the list of slave devices attached to it, otherwise it will return
     * %NULL
     */
    list_slave_devices(): Gdk.Device[] | null
    /**
     * Specifies how an axis of a device is used.
     * @param index_ the index of the axis
     * @param use specifies how the axis is used
     */
    set_axis_use(index_: number, use: Gdk.AxisUse): void
    /**
     * Specifies the X key event to generate when a macro button of a device
     * is pressed.
     * @param index_ the index of the macro button to set
     * @param keyval the keyval to generate
     * @param modifiers the modifiers to set
     */
    set_key(index_: number, keyval: number, modifiers: Gdk.ModifierType): void
    /**
     * Sets a the mode of an input device. The mode controls if the
     * device is active and whether the device’s range is mapped to the
     * entire screen or to a single window.
     * 
     * Note: This is only meaningful for floating devices, master devices (and
     * slaves connected to these) drive the pointer cursor, which is not limited
     * by the input mode.
     * @param mode the input mode.
     */
    set_mode(mode: Gdk.InputMode): boolean
    /**
     * Release any grab on `device`.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    ungrab(time_: number): void
    /**
     * Warps `device` in `display` to the point `x,``y` on
     * the screen `screen,` unless the device is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen to warp `device` to.
     * @param x the X coordinate of the destination.
     * @param y the Y coordinate of the destination.
     */
    warp(screen: Gdk.Screen, x: number, y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Device */
    /**
     * The ::changed signal is emitted either when the #GdkDevice
     * has changed the number of either axes or keys. For example
     * In X this will normally happen when the slave device routing
     * events through the master device changes (for example, user
     * switches from the USB mouse to a tablet), in that case the
     * master device will change to reflect the new slave device
     * axes and keys.
     */
    connect(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    connect_after(sigName: "changed", callback: (($obj: X11DeviceXI2) => void)): number
    emit(sigName: "changed"): void
    /**
     * The ::tool-changed signal is emitted on pen/eraser
     * #GdkDevices whenever tools enter or leave proximity.
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
    connect(sigName: "notify::associated-device", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-manager", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-manager", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-cursor", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-source", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-source", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-touches", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-3.0.GdkX11.X11Display */
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Will XSync() if necessary and will always block until
     * the error is known to have occurred or not occurred,
     * so the error code can be returned.
     * 
     * If you don’t need to use the return value,
     * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
     * 
     * See gdk_error_trap_pop() for the all-displays-at-once
     * equivalent.
     */
    error_trap_pop(): number
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Does not block to see if an error occurred; merely records the
     * range of requests to ignore errors for, and ignores those errors
     * if they arrive asynchronously.
     * 
     * See gdk_error_trap_pop_ignored() for the all-displays-at-once
     * equivalent.
     */
    error_trap_pop_ignored(): void
    /**
     * Begins a range of X requests on `display` for which X error events
     * will be ignored. Unignored errors (when no trap is pushed) will abort
     * the application. Use gdk_x11_display_error_trap_pop() or
     * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
     * with this function.
     * 
     * See also gdk_error_trap_push() to push a trap on all displays.
     */
    error_trap_push(): void
    /**
     * Gets the startup notification ID for a display.
     */
    get_startup_notification_id(): string
    /**
     * Returns the timestamp of the last user interaction on
     * `display`. The timestamp is taken from events caused
     * by user interaction such as key presses or pointer
     * movements. See gdk_x11_window_set_user_time().
     */
    get_user_time(): number
    /**
     * Returns the X display of a #GdkDisplay.
     */
    get_xdisplay(): xlib.Display
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
     * with gdk_cursor_new(), gdk_cursor_new_for_display() and
     * gdk_cursor_new_from_name() are updated to reflect the theme
     * change. Custom cursors constructed with
     * gdk_cursor_new_from_pixbuf() will have to be handled
     * by the application (GTK+ applications can learn about
     * cursor theme changes by listening for change notification
     * for the corresponding #GtkSetting).
     * @param theme the name of the cursor theme to use, or %NULL to unset         a previously set value
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
     * gdk_notify_startup_complete()).
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
    set_window_scale(scale: number): void
    /**
     * Convert a string from the encoding of the current
     * locale into a form suitable for storing in a window property.
     * @param str a nul-terminated string
     */
    string_to_compound_text(str: string): [ /* returnType */ number, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ Uint8Array ]
    /**
     * Convert a text string from the encoding as it is stored
     * in a property into an array of strings in the encoding of
     * the current locale. (The elements of the array represent the
     * nul-separated elements of the original text string.)
     * @param encoding an atom representing the encoding. The most    common values for this are STRING, or COMPOUND_TEXT.    This is value used as the type for the property
     * @param format the format of the property
     * @param text The text data
     * @param length The number of items to transform
     * @param list location to store an  array of strings in    the encoding of the current locale. This array should be    freed using gdk_free_text_list().
     */
    text_property_to_text_list(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
    /**
     * Ungrab `display` after it has been grabbed with
     * gdk_x11_display_grab().
     */
    ungrab(): void
    /**
     * Converts from UTF-8 to compound text.
     * @param str a UTF-8 string
     */
    utf8_to_compound_text(str: string): [ /* returnType */ boolean, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ Uint8Array ]
    /* Methods of Gdk-3.0.Gdk.Display */
    /**
     * Emits a short beep on `display`
     */
    beep(): void
    /**
     * Closes the connection to the windowing system for the given display,
     * and cleans up associated resources.
     */
    close(): void
    /**
     * Returns %TRUE if there is an ongoing grab on `device` for `display`.
     * @param device a #GdkDevice
     */
    device_is_grabbed(device: Gdk.Device): boolean
    /**
     * Flushes any requests queued for the windowing system; this happens automatically
     * when the main loop blocks waiting for new events, but if your application
     * is drawing without returning control to the main loop, you may need
     * to call this function explicitly. A common case where this function
     * needs to be called is when an application is executing drawing commands
     * from a thread other than the thread where the main loop is running.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    flush(): void
    /**
     * Returns a #GdkAppLaunchContext suitable for launching
     * applications on the given display.
     */
    get_app_launch_context(): Gdk.AppLaunchContext
    /**
     * Returns the default size to use for cursors on `display`.
     */
    get_default_cursor_size(): number
    /**
     * Returns the default group leader window for all toplevel windows
     * on `display`. This window is implicitly created by GDK.
     * See gdk_window_set_group().
     */
    get_default_group(): Gdk.Window
    /**
     * Get the default #GdkScreen for `display`.
     */
    get_default_screen(): Gdk.Screen
    /**
     * Returns the default #GdkSeat for this display.
     */
    get_default_seat(): Gdk.Seat
    /**
     * Returns the #GdkDeviceManager associated to `display`.
     */
    get_device_manager(): Gdk.DeviceManager | null
    /**
     * Gets the next #GdkEvent to be processed for `display,` fetching events from the
     * windowing system if necessary.
     */
    get_event(): Gdk.Event | null
    /**
     * Gets the maximal size to use for cursors on `display`.
     */
    get_maximal_cursor_size(): [ /* width */ number, /* height */ number ]
    /**
     * Gets a monitor associated with this display.
     * @param monitor_num number of the monitor
     */
    get_monitor(monitor_num: number): Gdk.Monitor | null
    /**
     * Gets the monitor in which the point (`x,` `y)` is located,
     * or a nearby monitor if the point is not in any monitor.
     * @param x the x coordinate of the point
     * @param y the y coordinate of the point
     */
    get_monitor_at_point(x: number, y: number): Gdk.Monitor
    /**
     * Gets the monitor in which the largest area of `window`
     * resides, or a monitor close to `window` if it is outside
     * of all monitors.
     * @param window a #GdkWindow
     */
    get_monitor_at_window(window: Gdk.Window): Gdk.Monitor
    /**
     * Gets the number of monitors that belong to `display`.
     * 
     * The returned number is valid until the next emission of the
     * #GdkDisplay::monitor-added or #GdkDisplay::monitor-removed signal.
     */
    get_n_monitors(): number
    /**
     * Gets the number of screen managed by the `display`.
     */
    get_n_screens(): number
    /**
     * Gets the name of the display.
     */
    get_name(): string
    /**
     * Gets the current location of the pointer and the current modifier
     * mask for a given display.
     */
    get_pointer(): [ /* screen */ Gdk.Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Gets the primary monitor for the display.
     * 
     * The primary monitor is considered the monitor where the “main desktop”
     * lives. While normal application windows typically allow the window
     * manager to place the windows, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     */
    get_primary_monitor(): Gdk.Monitor | null
    /**
     * Returns a screen object for one of the screens of the display.
     * @param screen_num the screen number
     */
    get_screen(screen_num: number): Gdk.Screen
    /**
     * Obtains the window underneath the mouse pointer, returning the location
     * of the pointer in that window in `win_x,` `win_y` for `screen`. Returns %NULL
     * if the window under the mouse pointer is not known to GDK (for example,
     * belongs to another application).
     */
    get_window_at_pointer(): [ /* returnType */ Gdk.Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Returns whether the display has events that are waiting
     * to be processed.
     */
    has_pending(): boolean
    /**
     * Finds out if the display has been closed.
     */
    is_closed(): boolean
    /**
     * Release any keyboard grab
     * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
     */
    keyboard_ungrab(time_: number): void
    /**
     * Returns the list of available input devices attached to `display`.
     * The list is statically allocated and should not be freed.
     */
    list_devices(): Gdk.Device[]
    /**
     * Returns the list of seats known to `display`.
     */
    list_seats(): Gdk.Seat[]
    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK+ will call this function automatically for #GtkWindow
     * with custom startup-notification identifier unless
     * gtk_window_set_auto_startup_notification() is called to
     * disable that feature.
     * @param startup_id a startup-notification identifier, for which     notification process should be completed
     */
    notify_startup_complete(startup_id: string): void
    /**
     * Gets a copy of the first #GdkEvent in the `display’`s event queue, without
     * removing the event from the queue.  (Note that this function will
     * not get more events from the windowing system.  It only checks the events
     * that have already been moved to the GDK event queue.)
     */
    peek_event(): Gdk.Event | null
    /**
     * Test if the pointer is grabbed.
     */
    pointer_is_grabbed(): boolean
    /**
     * Release any pointer grab.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    pointer_ungrab(time_: number): void
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for `display`.
     * @param event a #GdkEvent.
     */
    put_event(event: Gdk.Event): void
    /**
     * Request #GdkEventOwnerChange events for ownership changes
     * of the selection named by the given atom.
     * @param selection the #GdkAtom naming the selection for which             ownership change notification is requested
     */
    request_selection_notification(selection: Gdk.Atom): boolean
    /**
     * Sets the double click distance (two clicks within this distance
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * See also gdk_display_set_double_click_time().
     * Applications should not set this, it is a global
     * user-configured setting.
     * @param distance distance in pixels
     */
    set_double_click_distance(distance: number): void
    /**
     * Sets the double click time (two clicks within this time interval
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * Applications should not set this, it is a global
     * user-configured setting.
     * @param msec double click time in milliseconds (thousandths of a second)
     */
    set_double_click_time(msec: number): void
    /**
     * Issues a request to the clipboard manager to store the
     * clipboard data. On X11, this is a special program that works
     * according to the
     * [FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
     * @param clipboard_window a #GdkWindow belonging to the clipboard owner
     * @param time_ a timestamp
     * @param targets an array of targets                    that should be saved, or %NULL                    if all available targets should be saved.
     */
    store_clipboard(clipboard_window: Gdk.Window, time_: number, targets: Gdk.Atom[] | null): void
    /**
     * Returns whether the speicifed display supports clipboard
     * persistance; i.e. if it’s possible to store the clipboard data after an
     * application has quit. On X11 this checks if a clipboard daemon is
     * running.
     */
    supports_clipboard_persistence(): boolean
    /**
     * Returns %TRUE if gdk_window_set_composited() can be used
     * to redirect drawing on the window using compositing.
     * 
     * Currently this only works on X11 with XComposite and
     * XDamage extensions available.
     */
    supports_composite(): boolean
    /**
     * Returns %TRUE if cursors can use an 8bit alpha channel
     * on `display`. Otherwise, cursors are restricted to bilevel
     * alpha (i.e. a mask).
     */
    supports_cursor_alpha(): boolean
    /**
     * Returns %TRUE if multicolored cursors are supported
     * on `display`. Otherwise, cursors have only a forground
     * and a background color.
     */
    supports_cursor_color(): boolean
    /**
     * Returns %TRUE if gdk_window_input_shape_combine_mask() can
     * be used to modify the input shape of windows on `display`.
     */
    supports_input_shapes(): boolean
    /**
     * Returns whether #GdkEventOwnerChange events will be
     * sent when the owner of a selection changes.
     */
    supports_selection_notification(): boolean
    /**
     * Returns %TRUE if gdk_window_shape_combine_mask() can
     * be used to create shaped windows on `display`.
     */
    supports_shapes(): boolean
    /**
     * Flushes any requests queued for the windowing system and waits until all
     * requests have been handled. This is often used for making sure that the
     * display is synchronized with the current state of the program. Calling
     * gdk_display_sync() before gdk_error_trap_pop() makes sure that any errors
     * generated from earlier requests are handled before the error trap is
     * removed.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    sync(): void
    /**
     * Warps the pointer of `display` to the point `x,``y` on
     * the screen `screen,` unless the pointer is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen of `display` to warp the pointer to
     * @param x the x coordinate of the destination
     * @param y the y coordinate of the destination
     */
    warp_pointer(screen: Gdk.Screen, x: number, y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Display */
    /**
     * The ::closed signal is emitted when the connection to the windowing
     * system for `display` is closed.
     * @param is_error %TRUE if the display was closed due to an error
     */
    connect(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: X11Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    /**
     * The ::monitor-added signal is emitted whenever a monitor is
     * added.
     * @param monitor the monitor that was just added
     */
    connect(sigName: "monitor-added", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "monitor-added", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "monitor-added", monitor: Gdk.Monitor): void
    /**
     * The ::monitor-removed signal is emitted whenever a monitor is
     * removed.
     * @param monitor the monitor that was just removed
     */
    connect(sigName: "monitor-removed", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    connect_after(sigName: "monitor-removed", callback: (($obj: X11Display, monitor: Gdk.Monitor) => void)): number
    emit(sigName: "monitor-removed", monitor: Gdk.Monitor): void
    /**
     * The ::opened signal is emitted when the connection to the windowing
     * system for `display` is opened.
     */
    connect(sigName: "opened", callback: (($obj: X11Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: X11Display) => void)): number
    emit(sigName: "opened"): void
    /**
     * The ::seat-added signal is emitted whenever a new seat is made
     * known to the windowing system.
     * @param seat the seat that was just added
     */
    connect(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    /**
     * The ::seat-removed signal is emitted whenever a seat is removed
     * by the windowing system.
     * @param seat the seat that was just removed
     */
    connect(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: X11Display, seat: Gdk.Seat) => void)): number
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Retrieves the version of the GLX implementation.
     * @param display a #GdkDisplay
     */
    static get_glx_version(display: Gdk.Display): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    static $gtype: GObject.Type
}
interface X11DisplayManager_ConstructProps extends Gdk.DisplayManager_ConstructProps {
}
class X11DisplayManager {
    /* Properties of Gdk-3.0.Gdk.DisplayManager */
    default_display: Gdk.Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DisplayManager */
    /**
     * Gets the default #GdkDisplay.
     */
    get_default_display(): Gdk.Display | null
    /**
     * List all currently open displays.
     */
    list_displays(): Gdk.Display[]
    /**
     * Opens a display.
     * @param name the name of the display to open
     */
    open_display(name: string): Gdk.Display | null
    /**
     * Sets `display` as the default display.
     * @param display a #GdkDisplay
     */
    set_default_display(display: Gdk.Display): void
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
    /* Signals of Gdk-3.0.Gdk.DisplayManager */
    /**
     * The ::display-opened signal is emitted when a display is opened.
     * @param display the opened display
     */
    connect(sigName: "display-opened", callback: (($obj: X11DisplayManager, display: Gdk.Display) => void)): number
    connect_after(sigName: "display-opened", callback: (($obj: X11DisplayManager, display: Gdk.Display) => void)): number
    emit(sigName: "display-opened", display: Gdk.Display): void
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
    connect(sigName: "notify", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-display", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: X11DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DisplayManager_ConstructProps)
    _init (config?: X11DisplayManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DragContext_ConstructProps extends Gdk.DragContext_ConstructProps {
}
class X11DragContext {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DragContext */
    /**
     * Determines the bitmask of actions proposed by the source if
     * gdk_drag_context_get_suggested_action() returns %GDK_ACTION_ASK.
     */
    get_actions(): Gdk.DragAction
    /**
     * Returns the destination window for the DND operation.
     */
    get_dest_window(): Gdk.Window
    /**
     * Returns the #GdkDevice associated to the drag context.
     */
    get_device(): Gdk.Device
    /**
     * Returns the window on which the drag icon should be rendered
     * during the drag operation. Note that the window may not be
     * available until the drag operation has begun. GDK will move
     * the window in accordance with the ongoing drag operation.
     * The window is owned by `context` and will be destroyed when
     * the drag operation is over.
     */
    get_drag_window(): Gdk.Window | null
    /**
     * Returns the drag protocol that is used by this context.
     */
    get_protocol(): Gdk.DragProtocol
    /**
     * Determines the action chosen by the drag destination.
     */
    get_selected_action(): Gdk.DragAction
    /**
     * Returns the #GdkWindow where the DND operation started.
     */
    get_source_window(): Gdk.Window
    /**
     * Determines the suggested drag action of the context.
     */
    get_suggested_action(): Gdk.DragAction
    /**
     * Retrieves the list of targets of the context.
     */
    list_targets(): Gdk.Atom[]
    /**
     * Requests the drag and drop operation to be managed by `context`.
     * When a drag and drop operation becomes managed, the #GdkDragContext
     * will internally handle all input and source-side #GdkEventDND events
     * as required by the windowing system.
     * 
     * Once the drag and drop operation is managed, the drag context will
     * emit the following signals:
     * - The #GdkDragContext::action-changed signal whenever the final action
     *   to be performed by the drag and drop operation changes.
     * - The #GdkDragContext::drop-performed signal after the user performs
     *   the drag and drop gesture (typically by releasing the mouse button).
     * - The #GdkDragContext::dnd-finished signal after the drag and drop
     *   operation concludes (after all #GdkSelection transfers happen).
     * - The #GdkDragContext::cancel signal if the drag and drop operation is
     *   finished but doesn't happen over an accepting destination, or is
     *   cancelled through other means.
     * @param ipc_window Window to use for IPC messaging/events
     * @param actions the actions supported by the drag source
     */
    manage_dnd(ipc_window: Gdk.Window, actions: Gdk.DragAction): boolean
    /**
     * Associates a #GdkDevice to `context,` so all Drag and Drop events
     * for `context` are emitted as if they came from this device.
     * @param device a #GdkDevice
     */
    set_device(device: Gdk.Device): void
    /**
     * Sets the position of the drag window that will be kept
     * under the cursor hotspot. Initially, the hotspot is at the
     * top left corner of the drag window.
     * @param hot_x x coordinate of the drag window hotspot
     * @param hot_y y coordinate of the drag window hotspot
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
    /* Signals of Gdk-3.0.Gdk.DragContext */
    /**
     * A new action is being chosen for the drag and drop operation.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     * @param action The action currently chosen
     */
    connect(sigName: "action-changed", callback: (($obj: X11DragContext, action: Gdk.DragAction) => void)): number
    connect_after(sigName: "action-changed", callback: (($obj: X11DragContext, action: Gdk.DragAction) => void)): number
    emit(sigName: "action-changed", action: Gdk.DragAction): void
    /**
     * The drag and drop operation was cancelled.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     * @param reason The reason the context was cancelled
     */
    connect(sigName: "cancel", callback: (($obj: X11DragContext, reason: Gdk.DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: X11DragContext, reason: Gdk.DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    /**
     * The drag and drop operation was finished, the drag destination
     * finished reading all data. The drag source can now free all
     * miscellaneous data.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     */
    connect(sigName: "dnd-finished", callback: (($obj: X11DragContext) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: X11DragContext) => void)): number
    emit(sigName: "dnd-finished"): void
    /**
     * The drag and drop operation was performed on an accepting client.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     * @param time the time at which the drop happened.
     */
    connect(sigName: "drop-performed", callback: (($obj: X11DragContext, time: number) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: X11DragContext, time: number) => void)): number
    emit(sigName: "drop-performed", time: number): void
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
    connect(sigName: "notify", callback: (($obj: X11DragContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11DragContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11DragContext_ConstructProps)
    _init (config?: X11DragContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
class X11GLContext {
    /* Properties of Gdk-3.0.Gdk.GLContext */
    /**
     * The #GdkDisplay used to create the #GdkGLContext.
     */
    readonly display: Gdk.Display
    /**
     * The #GdkGLContext that this context is sharing data with, or %NULL
     */
    readonly shared_context: Gdk.GLContext
    /**
     * The #GdkWindow the gl context is bound to.
     */
    readonly window: Gdk.Window
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.GLContext */
    /**
     * Retrieves the value set using gdk_gl_context_set_debug_enabled().
     */
    get_debug_enabled(): boolean
    /**
     * Retrieves the #GdkDisplay the `context` is created for
     */
    get_display(): Gdk.Display | null
    /**
     * Retrieves the value set using gdk_gl_context_set_forward_compatible().
     */
    get_forward_compatible(): boolean
    /**
     * Retrieves the major and minor version requested by calling
     * gdk_gl_context_set_required_version().
     */
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    /**
     * Retrieves the #GdkGLContext that this `context` share data with.
     */
    get_shared_context(): Gdk.GLContext | null
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
     * Retrieves the #GdkWindow used by the `context`.
     */
    get_window(): Gdk.Window | null
    /**
     * Whether the #GdkGLContext is in legacy mode or not.
     * 
     * The #GdkGLContext must be realized before calling this function.
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
     * Makes the `context` the current one.
     */
    make_current(): void
    /**
     * Realizes the given #GdkGLContext.
     * 
     * It is safe to call this function on a realized #GdkGLContext.
     */
    realize(): boolean
    /**
     * Sets whether the #GdkGLContext should perform extra validations and
     * run time checking. This is useful during development, but has
     * additional overhead.
     * 
     * The #GdkGLContext must not be realized or made current prior to
     * calling this function.
     * @param enabled whether to enable debugging in the context
     */
    set_debug_enabled(enabled: boolean): void
    /**
     * Sets whether the #GdkGLContext should be forward compatible.
     * 
     * Forward compatibile contexts must not support OpenGL functionality that
     * has been marked as deprecated in the requested version; non-forward
     * compatible contexts, on the other hand, must support both deprecated and
     * non deprecated functionality.
     * 
     * The #GdkGLContext must not be realized or made current prior to calling
     * this function.
     * @param compatible whether the context should be forward compatible
     */
    set_forward_compatible(compatible: boolean): void
    /**
     * Sets the major and minor version of OpenGL to request.
     * 
     * Setting `major` and `minor` to zero will use the default values.
     * 
     * The #GdkGLContext must not be realized or made current prior to calling
     * this function.
     * @param major the major version to request
     * @param minor the minor version to request
     */
    set_required_version(major: number, minor: number): void
    /**
     * Requests that GDK create a OpenGL ES context instead of an OpenGL one,
     * if the platform and windowing system allows it.
     * 
     * The `context` must not have been realized.
     * 
     * By default, GDK will attempt to automatically detect whether the
     * underlying GL implementation is OpenGL or OpenGL ES once the `context`
     * is realized.
     * 
     * You should check the return value of gdk_gl_context_get_use_es() after
     * calling gdk_gl_context_realize() to decide whether to use the OpenGL or
     * OpenGL ES API, extensions, or shaders.
     * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
     */
    set_use_es(use_es: number): void
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
    connect(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-context", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-context", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Keymap_ConstructProps extends Gdk.Keymap_ConstructProps {
}
class X11Keymap {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-3.0.GdkX11.X11Keymap */
    /**
     * Extracts the group from the state field sent in an X Key event.
     * This is only needed for code processing raw X events, since #GdkEventKey
     * directly includes an is_modifier field.
     * @param state raw state returned from X
     */
    get_group_for_state(state: number): number
    /**
     * Determines whether a particular key code represents a key that
     * is a modifier. That is, it’s a key that normally just affects
     * the keyboard state and the behavior of other keys rather than
     * producing a direct effect itself. This is only needed for code
     * processing raw X events, since #GdkEventKey directly includes
     * an is_modifier field.
     * @param keycode the hardware keycode from a key event
     */
    key_is_modifier(keycode: number): boolean
    /* Methods of Gdk-3.0.Gdk.Keymap */
    /**
     * Maps the non-virtual modifiers (i.e Mod2, Mod3, ...) which are set
     * in `state` to the virtual modifiers (i.e. Super, Hyper and Meta) and
     * set the corresponding bits in `state`.
     * 
     * GDK already does this before delivering key events, but for
     * compatibility reasons, it only sets the first virtual modifier
     * it finds, whereas this function sets all matching virtual modifiers.
     * 
     * This function is useful when matching key events against
     * accelerators.
     * @param state pointer to the modifier mask to change
     */
    add_virtual_modifiers(state: Gdk.ModifierType): /* state */ Gdk.ModifierType
    /**
     * Returns whether the Caps Lock modifer is locked.
     */
    get_caps_lock_state(): boolean
    /**
     * Returns the direction of effective layout of the keymap.
     */
    get_direction(): Pango.Direction
    /**
     * Returns the keyvals bound to `hardware_keycode`.
     * The Nth #GdkKeymapKey in `keys` is bound to the Nth
     * keyval in `keyvals`. Free the returned arrays with g_free().
     * When a keycode is pressed by the user, the keyval from
     * this list of entries is selected by considering the effective
     * keyboard group and level. See gdk_keymap_translate_keyboard_state().
     * @param hardware_keycode a keycode
     */
    get_entries_for_keycode(hardware_keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    /**
     * Obtains a list of keycode/group/level combinations that will
     * generate `keyval`. Groups and levels are two kinds of keyboard mode;
     * in general, the level determines whether the top or bottom symbol
     * on a key is used, and the group determines whether the left or
     * right symbol is used. On US keyboards, the shift key changes the
     * keyboard level, and there are no groups. A group switch key might
     * convert a keyboard between Hebrew to English modes, for example.
     * #GdkEventKey contains a %group field that indicates the active
     * keyboard group. The level is computed from the modifier mask.
     * The returned array should be freed
     * with g_free().
     * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
     */
    get_entries_for_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    /**
     * Returns the modifier mask the `keymap’`s windowing system backend
     * uses for a particular purpose.
     * 
     * Note that this function always returns real hardware modifiers, not
     * virtual ones (e.g. it will return #GDK_MOD1_MASK rather than
     * #GDK_META_MASK if the backend maps MOD1 to META), so there are use
     * cases where the return value of this function has to be transformed
     * by gdk_keymap_add_virtual_modifiers() in order to contain the
     * expected result.
     * @param intent the use case for the modifier mask
     */
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    /**
     * Returns the current modifier state.
     */
    get_modifier_state(): number
    /**
     * Returns whether the Num Lock modifer is locked.
     */
    get_num_lock_state(): boolean
    /**
     * Returns whether the Scroll Lock modifer is locked.
     */
    get_scroll_lock_state(): boolean
    /**
     * Determines if keyboard layouts for both right-to-left and left-to-right
     * languages are in use.
     */
    have_bidi_layouts(): boolean
    /**
     * Looks up the keyval mapped to a keycode/group/level triplet.
     * If no keyval is bound to `key,` returns 0. For normal user input,
     * you want to use gdk_keymap_translate_keyboard_state() instead of
     * this function, since the effective group/level may not be
     * the same as the current keyboard state.
     * @param key a #GdkKeymapKey with keycode, group, and level initialized
     */
    lookup_key(key: Gdk.KeymapKey): number
    /**
     * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
     * are set in `state` to their non-virtual counterparts (i.e. Mod2,
     * Mod3,...) and set the corresponding bits in `state`.
     * 
     * This function is useful when matching key events against
     * accelerators.
     * @param state pointer to the modifier state to map
     */
    map_virtual_modifiers(state: Gdk.ModifierType): [ /* returnType */ boolean, /* state */ Gdk.ModifierType ]
    /**
     * Translates the contents of a #GdkEventKey into a keyval, effective
     * group, and level. Modifiers that affected the translation and
     * are thus unavailable for application use are returned in
     * `consumed_modifiers`.
     * See [Groups][key-group-explanation] for an explanation of
     * groups and levels. The `effective_group` is the group that was
     * actually used for the translation; some keys such as Enter are not
     * affected by the active keyboard group. The `level` is derived from
     * `state`. For convenience, #GdkEventKey already contains the translated
     * keyval, so this function isn’t as useful as you might think.
     * 
     * `consumed_modifiers` gives modifiers that should be masked outfrom `state`
     * when comparing this key press to a hot key. For instance, on a US keyboard,
     * the `plus` symbol is shifted, so when comparing a key press to a
     * `<Control>plus` accelerator `<Shift>` should be masked out.
     * 
     * 
     * ```c
     * // We want to ignore irrelevant modifiers like ScrollLock
     * #define ALL_ACCELS_MASK (GDK_CONTROL_MASK | GDK_SHIFT_MASK | GDK_MOD1_MASK)
     * gdk_keymap_translate_keyboard_state (keymap, event->hardware_keycode,
     *                                      event->state, event->group,
     *                                      &keyval, NULL, NULL, &consumed);
     * if (keyval == GDK_PLUS &&
     *     (event->state & ~consumed & ALL_ACCELS_MASK) == GDK_CONTROL_MASK)
     *   // Control was pressed
     * ```
     * 
     * 
     * An older interpretation `consumed_modifiers` was that it contained
     * all modifiers that might affect the translation of the key;
     * this allowed accelerators to be stored with irrelevant consumed
     * modifiers, by doing:
     * 
     * ```c
     * // XXX Don’t do this XXX
     * if (keyval == accel_keyval &&
     *     (event->state & ~consumed & ALL_ACCELS_MASK) == (accel_mods & ~consumed))
     *   // Accelerator was pressed
     * ```
     * 
     * 
     * However, this did not work if multi-modifier combinations were
     * used in the keymap, since, for instance, `<Control>` would be
     * masked out even if only `<Control><Alt>` was used in the keymap.
     * To support this usage as well as well as possible, all single
     * modifier combinations that could affect the key for any combination
     * of modifiers will be returned in `consumed_modifiers;` multi-modifier
     * combinations are returned only when actually found in `state`. When
     * you store accelerators, you should always store them with consumed
     * modifiers removed. Store `<Control>plus`, not `<Control><Shift>plus`,
     * @param hardware_keycode a keycode
     * @param state a modifier state
     * @param group active keyboard group
     */
    translate_keyboard_state(hardware_keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed_modifiers */ Gdk.ModifierType | null ]
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
    /* Signals of Gdk-3.0.Gdk.Keymap */
    /**
     * The ::direction-changed signal gets emitted when the direction of
     * the keymap changes.
     */
    connect(sigName: "direction-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "direction-changed"): void
    /**
     * The ::keys-changed signal is emitted when the mapping represented by
     * `keymap` changes.
     */
    connect(sigName: "keys-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "keys-changed"): void
    /**
     * The ::state-changed signal is emitted when the state of the
     * keyboard changes, e.g when Caps Lock is turned on or off.
     * See gdk_keymap_get_caps_lock_state().
     */
    connect(sigName: "state-changed", callback: (($obj: X11Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: X11Keymap) => void)): number
    emit(sigName: "state-changed"): void
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
    connect(sigName: "notify", callback: (($obj: X11Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Keymap_ConstructProps)
    _init (config?: X11Keymap_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
class X11Monitor {
    /* Properties of Gdk-3.0.Gdk.Monitor */
    readonly display: Gdk.Display
    readonly geometry: Gdk.Rectangle
    readonly height_mm: number
    readonly manufacturer: string
    readonly model: string
    readonly refresh_rate: number
    readonly scale_factor: number
    readonly subpixel_layout: Gdk.SubpixelLayout
    readonly width_mm: number
    readonly workarea: Gdk.Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Monitor */
    /**
     * Gets the display that this monitor belongs to.
     */
    get_display(): Gdk.Display
    /**
     * Retrieves the size and position of an individual monitor within the
     * display coordinate space. The returned geometry is in  ”application pixels”,
     * not in ”device pixels” (see gdk_monitor_get_scale_factor()).
     */
    get_geometry(): /* geometry */ Gdk.Rectangle
    /**
     * Gets the height in millimeters of the monitor.
     */
    get_height_mm(): number
    /**
     * Gets the name or PNP ID of the monitor's manufacturer, if available.
     * 
     * Note that this value might also vary depending on actual
     * display backend.
     * 
     * PNP ID registry is located at https://uefi.org/pnp_id_list
     */
    get_manufacturer(): string | null
    /**
     * Gets the a string identifying the monitor model, if available.
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
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a window
     * where it is better to use gdk_window_get_scale_factor() instead.
     */
    get_scale_factor(): number
    /**
     * Gets information about the layout of red, green and blue
     * primaries for each pixel in this monitor, if available.
     */
    get_subpixel_layout(): Gdk.SubpixelLayout
    /**
     * Gets the width in millimeters of the monitor.
     */
    get_width_mm(): number
    /**
     * Retrieves the size and position of the “work area” on a monitor
     * within the display coordinate space. The returned geometry is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_monitor_get_scale_factor()).
     * 
     * The work area should be considered when positioning menus and
     * similar popups, to avoid placing them below panels, docks or other
     * desktop components.
     * 
     * Note that not all backends may have a concept of workarea. This
     * function will return the monitor geometry if a workarea is not
     * available, or does not apply.
     */
    get_workarea(): /* workarea */ Gdk.Rectangle
    /**
     * Gets whether this monitor should be considered primary
     * (see gdk_display_get_primary_monitor()).
     */
    is_primary(): boolean
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
    /* Signals of Gdk-3.0.Gdk.Monitor */
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
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workarea", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workarea", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_output(monitor: Gdk.Monitor): xlib.XID
    static $gtype: GObject.Type
}
interface X11Screen_ConstructProps extends Gdk.Screen_ConstructProps {
}
class X11Screen {
    /* Properties of Gdk-3.0.Gdk.Screen */
    font_options: object
    resolution: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-3.0.GdkX11.X11Screen */
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
     * Returns the index of a #GdkScreen.
     */
    get_screen_number(): number
    /**
     * Returns the name of the window manager for `screen`.
     */
    get_window_manager_name(): string
    /**
     * Returns the screen of a #GdkScreen.
     */
    get_xscreen(): xlib.Screen
    /**
     * Looks up the #GdkVisual for a particular screen and X Visual ID.
     * @param xvisualid an X Visual ID.
     */
    lookup_visual(xvisualid: xlib.VisualID): X11Visual
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
     * You can monitor the window_manager_changed signal on #GdkScreen to detect
     * a window manager change.
     * @param property a property atom.
     */
    supports_net_wm_hint(property: Gdk.Atom): boolean
    /* Methods of Gdk-3.0.Gdk.Screen */
    /**
     * Returns the screen’s currently active window.
     * 
     * On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
     * on the root window, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * If there is no currently currently active
     * window, or the window manager does not support the
     * _NET_ACTIVE_WINDOW hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned window should be unrefed using g_object_unref() when
     * no longer needed.
     */
    get_active_window(): Gdk.Window | null
    /**
     * Gets the display to which the `screen` belongs.
     */
    get_display(): Gdk.Display
    /**
     * Gets any options previously set with gdk_screen_set_font_options().
     */
    get_font_options(): cairo.FontOptions | null
    /**
     * Gets the height of `screen` in pixels. The returned size is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    get_height(): number
    /**
     * Returns the height of `screen` in millimeters.
     * 
     * Note that this value is somewhat ill-defined when the screen
     * has multiple monitors of different resolution. It is recommended
     * to use the monitor dimensions instead.
     */
    get_height_mm(): number
    /**
     * Returns the monitor number in which the point (`x,``y)` is located.
     * @param x the x coordinate in the virtual screen.
     * @param y the y coordinate in the virtual screen.
     */
    get_monitor_at_point(x: number, y: number): number
    /**
     * Returns the number of the monitor in which the largest area of the
     * bounding rectangle of `window` resides.
     * @param window a #GdkWindow
     */
    get_monitor_at_window(window: Gdk.Window): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the individual monitor within the entire screen area. The returned
     * geometry is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     * 
     * Monitor numbers start at 0. To obtain the number of monitors of
     * `screen,` use gdk_screen_get_n_monitors().
     * 
     * Note that the size of the entire screen area can be retrieved via
     * gdk_screen_get_width() and gdk_screen_get_height().
     * @param monitor_num the monitor number
     */
    get_monitor_geometry(monitor_num: number): /* dest */ Gdk.Rectangle | null
    /**
     * Gets the height in millimeters of the specified monitor.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_height_mm(monitor_num: number): number
    /**
     * Returns the output name of the specified monitor.
     * Usually something like VGA, DVI, or TV, not the actual
     * product name of the display device.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_plug_name(monitor_num: number): string | null
    /**
     * Returns the internal scale factor that maps from monitor coordinates
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a window
     * where it is better to use gdk_window_get_scale_factor() instead.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_scale_factor(monitor_num: number): number
    /**
     * Gets the width in millimeters of the specified monitor, if available.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_width_mm(monitor_num: number): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the “work area” on a monitor within the entire screen area. The returned
     * geometry is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     * 
     * The work area should be considered when positioning menus and
     * similar popups, to avoid placing them below panels, docks or other
     * desktop components.
     * 
     * Note that not all backends may have a concept of workarea. This
     * function will return the monitor geometry if a workarea is not
     * available, or does not apply.
     * 
     * Monitor numbers start at 0. To obtain the number of monitors of
     * `screen,` use gdk_screen_get_n_monitors().
     * @param monitor_num the monitor number
     */
    get_monitor_workarea(monitor_num: number): /* dest */ Gdk.Rectangle | null
    /**
     * Returns the number of monitors which `screen` consists of.
     */
    get_n_monitors(): number
    /**
     * Gets the index of `screen` among the screens in the display
     * to which it belongs. (See gdk_screen_get_display())
     */
    get_number(): number
    /**
     * Gets the primary monitor for `screen`.  The primary monitor
     * is considered the monitor where the “main desktop” lives.
     * While normal application windows typically allow the window
     * manager to place the windows, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     * 
     * If no primary monitor is configured by the user, the return value
     * will be 0, defaulting to the first monitor.
     */
    get_primary_monitor(): number
    /**
     * Gets the resolution for font handling on the screen; see
     * gdk_screen_set_resolution() for full details.
     */
    get_resolution(): number
    /**
     * Gets a visual to use for creating windows with an alpha channel.
     * The windowing system on which GTK+ is running
     * may not support this capability, in which case %NULL will
     * be returned. Even if a non-%NULL value is returned, its
     * possible that the window’s alpha channel won’t be honored
     * when displaying the window on the screen: in particular, for
     * X an appropriate windowing manager and compositing manager
     * must be running to provide appropriate display.
     * 
     * This functionality is not implemented in the Windows backend.
     * 
     * For setting an overall opacity for a top-level window, see
     * gdk_window_set_opacity().
     */
    get_rgba_visual(): Gdk.Visual | null
    /**
     * Gets the root window of `screen`.
     */
    get_root_window(): Gdk.Window
    /**
     * Retrieves a desktop-wide setting such as double-click time
     * for the #GdkScreen `screen`.
     * 
     * FIXME needs a list of valid settings here, or a link to
     * more information.
     * @param name the name of the setting
     * @param value location to store the value of the setting
     */
    get_setting(name: string, value: any): boolean
    /**
     * Get the system’s default visual for `screen`.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     */
    get_system_visual(): Gdk.Visual
    /**
     * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
     * A toplevel window is a child of the root window (see
     * gdk_get_default_root_window()).
     * 
     * The returned list should be freed with g_list_free(), but
     * its elements need not be freed.
     */
    get_toplevel_windows(): Gdk.Window[]
    /**
     * Gets the width of `screen` in pixels. The returned size is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    get_width(): number
    /**
     * Gets the width of `screen` in millimeters.
     * 
     * Note that this value is somewhat ill-defined when the screen
     * has multiple monitors of different resolution. It is recommended
     * to use the monitor dimensions instead.
     */
    get_width_mm(): number
    /**
     * Returns a #GList of #GdkWindows representing the current
     * window stack.
     * 
     * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
     * property on the root window, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * If the window manager does not support the
     * _NET_CLIENT_LIST_STACKING hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned list is newly allocated and owns references to the
     * windows it contains, so it should be freed using g_list_free() and
     * its windows unrefed using g_object_unref() when no longer needed.
     */
    get_window_stack(): Gdk.Window[] | null
    /**
     * Returns whether windows with an RGBA visual can reasonably
     * be expected to have their alpha channel drawn correctly on
     * the screen.
     * 
     * On X11 this function returns whether a compositing manager is
     * compositing `screen`.
     */
    is_composited(): boolean
    /**
     * Lists the available visuals for the specified `screen`.
     * A visual describes a hardware image data format.
     * For example, a visual might support 24-bit color, or 8-bit color,
     * and might expect pixels to be in a certain format.
     * 
     * Call g_list_free() on the return value when you’re finished with it.
     */
    list_visuals(): Gdk.Visual[]
    /**
     * Determines the name to pass to gdk_display_open() to get
     * a #GdkDisplay with this screen as the default screen.
     */
    make_display_name(): string
    /**
     * Sets the default font options for the screen. These
     * options will be set on any #PangoContext’s newly created
     * with gdk_pango_context_get_for_screen(). Changing the
     * default set of font options does not affect contexts that
     * have already been created.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    set_font_options(options?: cairo.FontOptions | null): void
    /**
     * Sets the resolution for font handling on the screen. This is a
     * scale factor between points specified in a #PangoFontDescription
     * and cairo units. The default value is 96, meaning that a 10 point
     * font will be 13 units high. (10 * 96. / 72. = 13.3).
     * @param dpi the resolution in “dots per inch”. (Physical inches aren’t actually   involved; the terminology is conventional.)
     */
    set_resolution(dpi: number): void
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
    /* Signals of GdkX11-3.0.GdkX11.X11Screen */
    connect(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "window-manager-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "window-manager-changed"): void
    /* Signals of Gdk-3.0.Gdk.Screen */
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of the screen changes
     */
    connect(sigName: "composited-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::monitors-changed signal is emitted when the number, size
     * or position of the monitors attached to the screen change.
     * 
     * Only for X11 and OS X for now. A future implementation for Win32
     * may be a possibility.
     */
    connect(sigName: "monitors-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "monitors-changed"): void
    /**
     * The ::size-changed signal is emitted when the pixel width or
     * height of a screen changes.
     */
    connect(sigName: "size-changed", callback: (($obj: X11Screen) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: X11Screen) => void)): number
    emit(sigName: "size-changed"): void
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
    connect(sigName: "notify::font-options", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: (($obj: X11Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Visual_ConstructProps extends Gdk.Visual_ConstructProps {
}
class X11Visual {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-3.0.GdkX11.X11Visual */
    /**
     * Returns the X visual belonging to a #GdkVisual.
     */
    get_xvisual(): xlib.Visual
    /* Methods of Gdk-3.0.Gdk.Visual */
    /**
     * Returns the number of significant bits per red, green and blue value.
     * 
     * Not all GDK backend provide a meaningful value for this function.
     */
    get_bits_per_rgb(): number
    /**
     * Obtains values that are needed to calculate blue pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_blue_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Returns the byte order of this visual.
     * 
     * The information returned by this function is only relevant
     * when working with XImages, and not all backends return
     * meaningful information for this.
     */
    get_byte_order(): Gdk.ByteOrder
    /**
     * Returns the size of a colormap for this visual.
     * 
     * You have to use platform-specific APIs to manipulate colormaps.
     */
    get_colormap_size(): number
    /**
     * Returns the bit depth of this visual.
     */
    get_depth(): number
    /**
     * Obtains values that are needed to calculate green pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_green_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Obtains values that are needed to calculate red pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_red_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Gets the screen to which this visual belongs
     */
    get_screen(): Gdk.Screen
    /**
     * Returns the type of visual this is (PseudoColor, TrueColor, etc).
     */
    get_visual_type(): Gdk.VisualType
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
    connect(sigName: "notify", callback: (($obj: X11Visual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Visual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Visual_ConstructProps)
    _init (config?: X11Visual_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Window_ConstructProps extends Gdk.Window_ConstructProps {
}
class X11Window {
    /* Properties of Gdk-3.0.Gdk.Window */
    /**
     * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
     * gdk_window_get_cursor() for details.
     */
    cursor: Gdk.Cursor
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkX11-3.0.GdkX11.X11Window */
    /**
     * Gets the number of the workspace `window` is on.
     */
    get_desktop(): number
    /**
     * Returns the X resource (window) belonging to a #GdkWindow.
     */
    get_xid(): xlib.Window
    /**
     * Moves the window to the correct workspace when running under a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * Will not do anything if the window is already on all workspaces.
     */
    move_to_current_desktop(): void
    /**
     * Moves the window to the given workspace when running unde a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @param desktop the number of the workspace to move the window to
     */
    move_to_desktop(desktop: number): void
    /**
     * This is the same as gdk_window_set_shadow_width() but it only works
     * on GdkX11Window.
     * @param left The left extent
     * @param right The right extent
     * @param top The top extent
     * @param bottom The bottom extent
     */
    set_frame_extents(left: number, right: number, top: number, bottom: number): void
    /**
     * This function can be used to disable frame synchronization for a window.
     * Normally frame synchronziation will be enabled or disabled based on whether
     * the system has a compositor that supports frame synchronization, but if
     * the window is not directly managed by the window manager, then frame
     * synchronziation may need to be disabled. This is the case for a window
     * embedded via the XEMBED protocol.
     * @param frame_sync_enabled whether frame-synchronization should be enabled
     */
    set_frame_sync_enabled(frame_sync_enabled: boolean): void
    /**
     * Set a hint for the window manager, requesting that the titlebar
     * should be hidden when the window is maximized.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     * @param hide_titlebar_when_maximized whether to hide the titlebar when                                maximized
     */
    set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void
    /**
     * GTK+ applications can request a dark theme variant. In order to
     * make other applications - namely window managers using GTK+ for
     * themeing - aware of this choice, GTK+ uses this function to
     * export the requested theme variant as _GTK_THEME_VARIANT property
     * on toplevel windows.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     * @param variant the theme variant to export
     */
    set_theme_variant(variant: string): void
    /**
     * The application can use this call to update the _NET_WM_USER_TIME
     * property on a toplevel window.  This property stores an Xserver
     * time which represents the time of the last user input event
     * received for this window.  This property may be used by the window
     * manager to alter the focus, stacking, and/or placement behavior of
     * windows when they are mapped depending on whether the new window
     * was created by a user action or is a "pop-up" window activated by a
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
     * property of type UTF8_STRING.  If the given `window` is
     * not a toplevel window, it is ignored.
     * @param name Property name, will be interned as an X atom
     * @param value Property value, or %NULL to delete
     */
    set_utf8_property(name: string, value?: string | null): void
    /* Methods of Gdk-3.0.Gdk.Window */
    /**
     * Emits a short beep associated to `window` in the appropriate
     * display, if supported. Otherwise, emits a short beep on
     * the display just as gdk_display_beep().
     */
    beep(): void
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on `window,` and provides you with a #GdkDrawingContext.
     * 
     * If `window` is a top level #GdkWindow, backed by a native window
     * implementation, a backing store (offscreen buffer) large enough to
     * contain `region` will be created. The backing store will be initialized
     * with the background color or background surface for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store. When you call gdk_window_end_frame(), the contents of
     * the backing store will be copied to `window,` making it visible
     * on screen. Only the part of `window` contained in `region` will be
     * modified; that is, drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_draw_frame(). If you draw to `window` directly without
     * calling gdk_window_begin_draw_frame(), the user may see flicker
     * as individual drawing operations are performed in sequence.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() around
     * emissions of the `GtkWidget::draw` signal. That is, if you’re
     * drawing the contents of the widget yourself, you can assume that the
     * widget has a cleared background, is already set as the clip region,
     * and already has a backing store. Therefore in most cases, application
     * code in GTK does not need to call gdk_window_begin_draw_frame()
     * explicitly.
     * @param region a Cairo region
     */
    begin_draw_frame(region: cairo.Region): Gdk.DrawingContext
    /**
     * Begins a window move operation (for a toplevel window).
     * 
     * This function assumes that the drag is controlled by the
     * client pointer device, use gdk_window_begin_move_drag_for_device()
     * to begin a drag with a different device.
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag
     */
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Begins a window move operation (for a toplevel window).
     * You might use this function to implement a “window move grip,” for
     * example. The function works best with window managers that support the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
     * but has a fallback implementation for other window managers.
     * @param device the device used for the operation
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag
     */
    begin_move_drag_for_device(device: Gdk.Device, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * A convenience wrapper around gdk_window_begin_paint_region() which
     * creates a rectangular region for you. See
     * gdk_window_begin_paint_region() for details.
     * @param rectangle rectangle you intend to draw to
     */
    begin_paint_rect(rectangle: Gdk.Rectangle): void
    /**
     * Indicates that you are beginning the process of redrawing `region`.
     * A backing store (offscreen buffer) large enough to contain `region`
     * will be created. The backing store will be initialized with the
     * background color or background surface for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store.  When you call gdk_window_end_paint(), the backing
     * store will be copied to `window,` making it visible onscreen. Only
     * the part of `window` contained in `region` will be modified; that is,
     * drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_paint(). If you draw to `window` directly without
     * calling gdk_window_begin_paint_region(), the user may see flicker
     * as individual drawing operations are performed in sequence.  The
     * clipping and background-initializing features of
     * gdk_window_begin_paint_region() are conveniences for the
     * programmer, so you can avoid doing that work yourself.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_paint_region() and gdk_window_end_paint() around
     * emissions of the expose_event signal. That is, if you’re writing an
     * expose event handler, you can assume that the exposed area in
     * #GdkEventExpose has already been cleared to the window background,
     * is already set as the clip region, and already has a backing store.
     * Therefore in most cases, application code need not call
     * gdk_window_begin_paint_region(). (You can disable the automatic
     * calls around expose events on a widget-by-widget basis by calling
     * gtk_widget_set_double_buffered().)
     * 
     * If you call this function multiple times before calling the
     * matching gdk_window_end_paint(), the backing stores are pushed onto
     * a stack. gdk_window_end_paint() copies the topmost backing store
     * onscreen, subtracts the topmost region from all other regions in
     * the stack, and pops the stack. All drawing operations affect only
     * the topmost backing store in the stack. One matching call to
     * gdk_window_end_paint() is required for each call to
     * gdk_window_begin_paint_region().
     * @param region region you intend to draw to
     */
    begin_paint_region(region: cairo.Region): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * 
     * This function assumes that the drag is controlled by the
     * client pointer device, use gdk_window_begin_resize_drag_for_device()
     * to begin a drag with a different device.
     * @param edge the edge or corner from which the drag is started
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
     */
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * You might use this function to implement a “window resize grip,” for
     * example; in fact #GtkStatusbar uses it. The function works best
     * with window managers that support the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
     * but has a fallback implementation for other window managers.
     * @param edge the edge or corner from which the drag is started
     * @param device the device used for the operation
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
     */
    begin_resize_drag_for_device(edge: Gdk.WindowEdge, device: Gdk.Device, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Does nothing, present only for compatiblity.
     */
    configure_finished(): void
    /**
     * Transforms window coordinates from a parent window to a child
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to subtracting
     * the return values of gdk_window_get_position() from the parent coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::from-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks down a window hierarchy.
     * 
     * See also: gdk_window_coords_to_parent()
     * @param parent_x X coordinate in parent’s coordinate system
     * @param parent_y Y coordinate in parent’s coordinate system
     */
    coords_from_parent(parent_x: number, parent_y: number): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Transforms window coordinates from a child window to its parent
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to adding
     * the return values of gdk_window_get_position() to the child coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::to-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks up a window hierarchy.
     * 
     * See also: gdk_window_coords_from_parent()
     * @param x X coordinate in child’s coordinate system
     * @param y Y coordinate in child’s coordinate system
     */
    coords_to_parent(x: number, y: number): [ /* parent_x */ number | null, /* parent_y */ number | null ]
    /**
     * Creates a new #GdkGLContext matching the
     * framebuffer format to the visual of the #GdkWindow. The context
     * is disconnected from any particular window or surface.
     * 
     * If the creation of the #GdkGLContext failed, `error` will be set.
     * 
     * Before using the returned #GdkGLContext, you will need to
     * call gdk_gl_context_make_current() or gdk_gl_context_realize().
     */
    create_gl_context(): Gdk.GLContext
    /**
     * Create a new image surface that is efficient to draw on the
     * given `window`.
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * The `width` and `height` of the new surface are not affected by
     * the scaling factor of the `window,` or by the `scale` argument; they
     * are the size of the surface in device pixels. If you wish to create
     * an image surface capable of holding the contents of `window` you can
     * use:
     * 
     * 
     * ```c
     *   int scale = gdk_window_get_scale_factor (window);
     *   int width = gdk_window_get_width (window) * scale;
     *   int height = gdk_window_get_height (window) * scale;
     * 
     *   // format is set elsewhere
     *   cairo_surface_t *surface =
     *     gdk_window_create_similar_image_surface (window,
     *                                              format,
     *                                              width, height,
     *                                              scale);
     * ```
     * 
     * 
     * Note that unlike cairo_surface_create_similar_image(), the new
     * surface's device scale is set to `scale,` or to the scale factor of
     * `window` if `scale` is 0.
     * @param format the format for the new surface
     * @param width width of the new surface
     * @param height height of the new surface
     * @param scale the scale of the new surface, or 0 to use same as `window`
     */
    create_similar_image_surface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface
    /**
     * Create a new surface that is as compatible as possible with the
     * given `window`. For example the new surface will have the same
     * fallback resolution and font options as `window`. Generally, the new
     * surface will also use the same backend as `window,` unless that is
     * not possible for some reason. The type of the returned surface may
     * be examined with cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * @param content the content for the new surface
     * @param width width of the new surface
     * @param height height of the new surface
     */
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
     * choose to ignore the request to deiconify. When using GTK+,
     * use gtk_window_deiconify() instead of the #GdkWindow variant. Or better yet,
     * you probably want to use gtk_window_present_with_time(), which raises the window, focuses it,
     * unminimizes it, and puts it on the current desktop.
     */
    deiconify(): void
    /**
     * Destroys the window system resources associated with `window` and decrements `window'`s
     * reference count. The window system resources for all children of `window` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a window will not be destroyed automatically when its reference count
     * reaches zero. You must call this function yourself before that happens.
     */
    destroy(): void
    destroy_notify(): void
    /**
     * Does nothing, present only for compatiblity.
     */
    enable_synchronized_configure(): void
    /**
     * Indicates that the drawing of the contents of `window` started with
     * gdk_window_begin_frame() has been completed.
     * 
     * This function will take care of destroying the #GdkDrawingContext.
     * 
     * It is an error to call this function without a matching
     * gdk_window_begin_frame() first.
     * @param context the #GdkDrawingContext created by gdk_window_begin_draw_frame()
     */
    end_draw_frame(context: Gdk.DrawingContext): void
    /**
     * Indicates that the backing store created by the most recent call
     * to gdk_window_begin_paint_region() should be copied onscreen and
     * deleted, leaving the next-most-recent backing store or no backing
     * store at all as the active paint region. See
     * gdk_window_begin_paint_region() for full details.
     * 
     * It is an error to call this function without a matching
     * gdk_window_begin_paint_region() first.
     */
    end_paint(): void
    /**
     * Tries to ensure that there is a window-system native window for this
     * GdkWindow. This may fail in some situations, returning %FALSE.
     * 
     * Offscreen window and children of them can never have native windows.
     * 
     * Some backends may not support native child windows.
     */
    ensure_native(): boolean
    /**
     * This function does nothing.
     */
    flush(): void
    /**
     * Sets keyboard focus to `window`. In most cases, gtk_window_present_with_time()
     * should be used on a #GtkWindow, rather than calling this function.
     * @param timestamp timestamp of the event triggering the window focus
     */
    focus(timestamp: number): void
    /**
     * Temporarily freezes a window and all its descendants such that it won't
     * receive expose events.  The window will begin receiving expose events
     * again when gdk_window_thaw_toplevel_updates_libgtk_only() is called. If
     * gdk_window_freeze_toplevel_updates_libgtk_only()
     * has been called more than once,
     * gdk_window_thaw_toplevel_updates_libgtk_only() must be called
     * an equal number of times to begin processing exposes.
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    freeze_toplevel_updates_libgtk_only(): void
    /**
     * Temporarily freezes a window such that it won’t receive expose
     * events.  The window will begin receiving expose events again when
     * gdk_window_thaw_updates() is called. If gdk_window_freeze_updates()
     * has been called more than once, gdk_window_thaw_updates() must be called
     * an equal number of times to begin processing exposes.
     */
    freeze_updates(): void
    /**
     * Moves the window into fullscreen mode. This means the
     * window covers the entire screen and is above any panels
     * or task bars.
     * 
     * If the window was already fullscreen, then this function does nothing.
     * 
     * On X11, asks the window manager to put `window` in a fullscreen
     * state, if the window manager supports this operation. Not all
     * window managers support this, and some deliberately ignore it or
     * don’t have a concept of “fullscreen”; so you can’t rely on the
     * fullscreenification actually happening. But it will happen with
     * most standard window managers, and GDK makes a best effort to get
     * it to happen.
     */
    fullscreen(): void
    /**
     * Moves the window into fullscreen mode on the given monitor. This means
     * the window covers the entire screen and is above any panels or task bars.
     * 
     * If the window was already fullscreen, then this function does nothing.
     * @param monitor Which monitor to display fullscreen on.
     */
    fullscreen_on_monitor(monitor: number): void
    /**
     * This function informs GDK that the geometry of an embedded
     * offscreen window has changed. This is necessary for GDK to keep
     * track of which offscreen window the pointer is in.
     */
    geometry_changed(): void
    /**
     * Determines whether or not the desktop environment shuld be hinted that
     * the window does not want to receive input focus.
     */
    get_accept_focus(): boolean
    /**
     * Gets the pattern used to clear the background on `window`.
     */
    get_background_pattern(): cairo.Pattern | null
    /**
     * Gets the list of children of `window` known to GDK.
     * This function only returns children created via GDK,
     * so for example it’s useless when used with the root window;
     * it only returns windows an application created itself.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     */
    get_children(): Gdk.Window[]
    /**
     * Gets the list of children of `window` known to GDK with a
     * particular `user_data` set on it.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     * 
     * The list is returned in (relative) stacking order, i.e. the
     * lowest window is first.
     * @param user_data user data to look for
     */
    get_children_with_user_data(user_data?: object | null): Gdk.Window[]
    /**
     * Computes the region of a window that potentially can be written
     * to by drawing primitives. This region may not take into account
     * other factors such as if the window is obscured by other windows,
     * but no area outside of this region will be affected by drawing
     * primitives.
     */
    get_clip_region(): cairo.Region
    /**
     * Determines whether `window` is composited.
     * 
     * See gdk_window_set_composited().
     */
    get_composited(): boolean
    /**
     * Retrieves a #GdkCursor pointer for the cursor currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     */
    get_cursor(): Gdk.Cursor | null
    /**
     * Returns the decorations set on the GdkWindow with
     * gdk_window_set_decorations().
     */
    get_decorations(): [ /* returnType */ boolean, /* decorations */ Gdk.WMDecoration ]
    /**
     * Retrieves a #GdkCursor pointer for the `device` currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     * @param device a master, pointer #GdkDevice.
     */
    get_device_cursor(device: Gdk.Device): Gdk.Cursor | null
    /**
     * Returns the event mask for `window` corresponding to an specific device.
     * @param device a #GdkDevice.
     */
    get_device_events(device: Gdk.Device): Gdk.EventMask
    /**
     * Obtains the current device position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     * 
     * Use gdk_window_get_device_position_double() if you need subpixel precision.
     * @param device pointer #GdkDevice to query to.
     */
    get_device_position(device: Gdk.Device): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Obtains the current device position in doubles and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     * @param device pointer #GdkDevice to query to.
     */
    get_device_position_double(device: Gdk.Device): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Gets the #GdkDisplay associated with a #GdkWindow.
     */
    get_display(): Gdk.Display
    /**
     * Finds out the DND protocol supported by a window.
     */
    get_drag_protocol(): [ /* returnType */ Gdk.DragProtocol, /* target */ Gdk.Window | null ]
    /**
     * Obtains the parent of `window,` as known to GDK. Works like
     * gdk_window_get_parent() for normal windows, but returns the
     * window’s embedder for offscreen windows.
     * 
     * See also: gdk_offscreen_window_get_embedder()
     */
    get_effective_parent(): Gdk.Window
    /**
     * Gets the toplevel window that’s an ancestor of `window`.
     * 
     * Works like gdk_window_get_toplevel(), but treats an offscreen window's
     * embedder as its parent, using gdk_window_get_effective_parent().
     * 
     * See also: gdk_offscreen_window_get_embedder()
     */
    get_effective_toplevel(): Gdk.Window
    /**
     * Get the current event compression setting for this window.
     */
    get_event_compression(): boolean
    /**
     * Gets the event mask for `window` for all master input devices. See
     * gdk_window_set_events().
     */
    get_events(): Gdk.EventMask
    /**
     * Determines whether or not the desktop environment should be hinted that the
     * window does not want to receive input focus when it is mapped.
     */
    get_focus_on_map(): boolean
    /**
     * Gets the frame clock for the window. The frame clock for a window
     * never changes unless the window is reparented to a new toplevel
     * window.
     */
    get_frame_clock(): Gdk.FrameClock
    /**
     * Obtains the bounding box of the window, including window manager
     * titlebar/borders if any. The frame position is given in root window
     * coordinates. To get the position of the window itself (rather than
     * the frame) in root window coordinates, use gdk_window_get_origin().
     */
    get_frame_extents(): /* rect */ Gdk.Rectangle
    /**
     * Obtains the #GdkFullscreenMode of the `window`.
     */
    get_fullscreen_mode(): Gdk.FullscreenMode
    /**
     * Any of the return location arguments to this function may be %NULL,
     * if you aren’t interested in getting the value of that field.
     * 
     * The X and Y coordinates returned are relative to the parent window
     * of `window,` which for toplevels usually means relative to the
     * window decorations (titlebar, etc.) rather than relative to the
     * root window (screen-size background window).
     * 
     * On the X11 platform, the geometry is obtained from the X server,
     * so reflects the latest position of `window;` this may be out-of-sync
     * with the position of `window` delivered in the most-recently-processed
     * #GdkEventConfigure. gdk_window_get_position() in contrast gets the
     * position from the most recent configure event.
     * 
     * Note: If `window` is not a toplevel, it is much better
     * to call gdk_window_get_position(), gdk_window_get_width() and
     * gdk_window_get_height() instead, because it avoids the roundtrip to
     * the X server and because these functions support the full 32-bit
     * coordinate space, whereas gdk_window_get_geometry() is restricted to
     * the 16-bit coordinates of X11.
     */
    get_geometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the group leader window for `window`. See gdk_window_set_group().
     */
    get_group(): Gdk.Window
    /**
     * Returns the height of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     */
    get_height(): number
    /**
     * Determines whether or not the window manager is hinted that `window`
     * has modal behaviour.
     */
    get_modal_hint(): boolean
    /**
     * Obtains the position of a window in root window coordinates.
     * (Compare with gdk_window_get_position() and
     * gdk_window_get_geometry() which return the position of a window
     * relative to its parent window.)
     */
    get_origin(): [ /* returnType */ number, /* x */ number | null, /* y */ number | null ]
    /**
     * Obtains the parent of `window,` as known to GDK. Does not query the
     * X server; thus this returns the parent as passed to gdk_window_new(),
     * not the actual parent. This should never matter unless you’re using
     * Xlib calls mixed with GDK calls on the X11 platform. It may also
     * matter for toplevel windows, because the window manager may choose
     * to reparent them.
     * 
     * Note that you should use gdk_window_get_effective_parent() when
     * writing generic code that walks up a window hierarchy, because
     * gdk_window_get_parent() will most likely not do what you expect if
     * there are offscreen windows in the hierarchy.
     */
    get_parent(): Gdk.Window
    /**
     * Returns whether input to the window is passed through to the window
     * below.
     * 
     * See gdk_window_set_pass_through() for details
     */
    get_pass_through(): boolean
    /**
     * Obtains the current pointer position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     */
    get_pointer(): [ /* returnType */ Gdk.Window | null, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Obtains the position of the window as reported in the
     * most-recently-processed #GdkEventConfigure. Contrast with
     * gdk_window_get_geometry() which queries the X server for the
     * current window position, regardless of which events have been
     * received or processed.
     * 
     * The position coordinates are relative to the window’s parent window.
     */
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Obtains the position of a window position in root
     * window coordinates. This is similar to
     * gdk_window_get_origin() but allows you to pass
     * in any position in the window, not just the origin.
     * @param x X coordinate in window
     * @param y Y coordinate in window
     */
    get_root_coords(x: number, y: number): [ /* root_x */ number, /* root_y */ number ]
    /**
     * Obtains the top-left corner of the window manager frame in root
     * window coordinates.
     */
    get_root_origin(): [ /* x */ number, /* y */ number ]
    /**
     * Returns the internal scale factor that maps from window coordiantes
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * A higher value means that drawing is automatically scaled up to
     * a higher resolution, so any code doing drawing will automatically look
     * nicer. However, if you are supplying pixel-based data the scale
     * value can be used to determine whether to use a pixel resource
     * with higher resolution data.
     * 
     * The scale of a window may change during runtime, if this happens
     * a configure event will be sent to the toplevel window.
     */
    get_scale_factor(): number
    /**
     * Gets the #GdkScreen associated with a #GdkWindow.
     */
    get_screen(): Gdk.Screen
    /**
     * Returns the event mask for `window` corresponding to the device class specified
     * by `source`.
     * @param source a #GdkInputSource to define the source class.
     */
    get_source_events(source: Gdk.InputSource): Gdk.EventMask
    /**
     * Gets the bitwise OR of the currently active window state flags,
     * from the #GdkWindowState enumeration.
     */
    get_state(): Gdk.WindowState
    /**
     * Returns %TRUE if the window is aware of the existence of multiple
     * devices.
     */
    get_support_multidevice(): boolean
    /**
     * Gets the toplevel window that’s an ancestor of `window`.
     * 
     * Any window type but %GDK_WINDOW_CHILD is considered a
     * toplevel window, as is a %GDK_WINDOW_CHILD window that
     * has a root window as parent.
     * 
     * Note that you should use gdk_window_get_effective_toplevel() when
     * you want to get to a window’s toplevel as seen on screen, because
     * gdk_window_get_toplevel() will most likely not do what you expect
     * if there are offscreen windows in the hierarchy.
     */
    get_toplevel(): Gdk.Window
    /**
     * This function returns the type hint set for a window.
     */
    get_type_hint(): Gdk.WindowTypeHint
    /**
     * Transfers ownership of the update area from `window` to the caller
     * of the function. That is, after calling this function, `window` will
     * no longer have an invalid/dirty region; the update area is removed
     * from `window` and handed to you. If a window has no update area,
     * gdk_window_get_update_area() returns %NULL. You are responsible for
     * calling cairo_region_destroy() on the returned region if it’s non-%NULL.
     */
    get_update_area(): cairo.Region
    /**
     * Retrieves the user data for `window,` which is normally the widget
     * that `window` belongs to. See gdk_window_set_user_data().
     */
    get_user_data(): /* data */ object | null
    /**
     * Computes the region of the `window` that is potentially visible.
     * This does not necessarily take into account if the window is
     * obscured by other windows, but no area outside of this region
     * is visible.
     */
    get_visible_region(): cairo.Region
    /**
     * Gets the #GdkVisual describing the pixel format of `window`.
     */
    get_visual(): Gdk.Visual
    /**
     * Returns the width of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     */
    get_width(): number
    /**
     * Gets the type of the window. See #GdkWindowType.
     */
    get_window_type(): Gdk.WindowType
    /**
     * Checks whether the window has a native window or not. Note that
     * you can use gdk_window_ensure_native() if a native window is needed.
     */
    has_native(): boolean
    /**
     * For toplevel windows, withdraws them, so they will no longer be
     * known to the window manager; for all windows, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of gtk_widget_hide().
     */
    hide(): void
    /**
     * Asks to iconify (minimize) `window`. The window manager may choose
     * to ignore the request, but normally will honor it. Using
     * gtk_window_iconify() is preferred, if you have a #GtkWindow widget.
     * 
     * This function only makes sense when `window` is a toplevel window.
     */
    iconify(): void
    /**
     * Like gdk_window_shape_combine_region(), but the shape applies
     * only to event handling. Mouse events which happen while
     * the pointer position corresponds to an unset bit in the
     * mask will be passed on the window below `window`.
     * 
     * An input shape is typically used with RGBA windows.
     * The alpha channel of the window defines which pixels are
     * invisible and allows for nicely antialiased borders,
     * and the input shape controls where the window is
     * “clickable”.
     * 
     * On the X11 platform, this requires version 1.1 of the
     * shape extension.
     * 
     * On the Win32 platform, this functionality is not present and the
     * function does nothing.
     * @param shape_region region of window to be non-transparent
     * @param offset_x X position of `shape_region` in `window` coordinates
     * @param offset_y Y position of `shape_region` in `window` coordinates
     */
    input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or “dirty region.” The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there’s no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `child_func` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * Only children for which `child_func` returns #TRUE will have the area
     * invalidated.
     * @param region a #cairo_region_t
     * @param child_func function to use to decide if to     recurse to a child, %NULL means never recurse.
     */
    invalidate_maybe_recurse(region: cairo.Region, child_func?: Gdk.WindowChildFunc | null): void
    /**
     * A convenience wrapper around gdk_window_invalidate_region() which
     * invalidates a rectangular region. See
     * gdk_window_invalidate_region() for details.
     * @param rect rectangle to invalidate or %NULL to invalidate the whole      window
     * @param invalidate_children whether to also invalidate child windows
     */
    invalidate_rect(rect: Gdk.Rectangle | null, invalidate_children: boolean): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or “dirty region.” The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there’s no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `invalidate_children` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * If %FALSE, then the update area for child windows will remain
     * unaffected. See gdk_window_invalidate_maybe_recurse if you need
     * fine grained control over which children are invalidated.
     * @param region a #cairo_region_t
     * @param invalidate_children %TRUE to also invalidate child windows
     */
    invalidate_region(region: cairo.Region, invalidate_children: boolean): void
    /**
     * Check to see if a window is destroyed..
     */
    is_destroyed(): boolean
    /**
     * Determines whether or not the window is an input only window.
     */
    is_input_only(): boolean
    /**
     * Determines whether or not the window is shaped.
     */
    is_shaped(): boolean
    /**
     * Check if the window and all ancestors of the window are
     * mapped. (This is not necessarily "viewable" in the X sense, since
     * we only check as far as we have GDK window parents, not to the root
     * window.)
     */
    is_viewable(): boolean
    /**
     * Checks whether the window has been mapped (with gdk_window_show() or
     * gdk_window_show_unraised()).
     */
    is_visible(): boolean
    /**
     * Lowers `window` to the bottom of the Z-order (stacking order), so that
     * other windows with the same parent window appear above `window`.
     * This is true whether or not the other windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_lower() only
     * requests the restack, does not guarantee it.
     * 
     * Note that gdk_window_show() raises the window again, so don’t call this
     * function before gdk_window_show(). (Try gdk_window_show_unraised().)
     */
    lower(): void
    /**
     * If you call this during a paint (e.g. between gdk_window_begin_paint_region()
     * and gdk_window_end_paint() then GDK will mark the current clip region of the
     * window as being drawn. This is required when mixing GL rendering via
     * gdk_cairo_draw_from_gl() and cairo rendering, as otherwise GDK has no way
     * of knowing when something paints over the GL-drawn regions.
     * 
     * This is typically called automatically by GTK+ and you don't need
     * to care about this.
     * @param cr a #cairo_t
     */
    mark_paint_from_clip(cr: cairo.Context): void
    /**
     * Maximizes the window. If the window was already maximized, then
     * this function does nothing.
     * 
     * On X11, asks the window manager to maximize `window,` if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “maximized”; so you can’t rely on the maximization actually
     * happening. But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably maximizes the window.
     */
    maximize(): void
    /**
     * Merges the input shape masks for any child windows into the
     * input shape mask for `window`. i.e. the union of all input masks
     * for `window` and its children will become the new input mask
     * for `window`. See gdk_window_input_shape_combine_region().
     * 
     * This function is distinct from gdk_window_set_child_input_shapes()
     * because it includes `window’`s input shape mask in the set of
     * shapes to be merged.
     */
    merge_child_input_shapes(): void
    /**
     * Merges the shape masks for any child windows into the
     * shape mask for `window`. i.e. the union of all masks
     * for `window` and its children will become the new mask
     * for `window`. See gdk_window_shape_combine_region().
     * 
     * This function is distinct from gdk_window_set_child_shapes()
     * because it includes `window’`s shape mask in the set of shapes to
     * be merged.
     */
    merge_child_shapes(): void
    /**
     * Repositions a window relative to its parent window.
     * For toplevel windows, window managers may ignore or modify the move;
     * you should probably use gtk_window_move() on a #GtkWindow widget
     * anyway, instead of using GDK functions. For child windows,
     * the move will reliably succeed.
     * 
     * If you’re also planning to resize the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     * @param x X coordinate relative to window’s parent
     * @param y Y coordinate relative to window’s parent
     */
    move(x: number, y: number): void
    /**
     * Move the part of `window` indicated by `region` by `dy` pixels in the Y
     * direction and `dx` pixels in the X direction. The portions of `region`
     * that not covered by the new position of `region` are invalidated.
     * 
     * Child windows are not moved.
     * @param region The #cairo_region_t to move
     * @param dx Amount to move in the X direction
     * @param dy Amount to move in the Y direction
     */
    move_region(region: cairo.Region, dx: number, dy: number): void
    /**
     * Equivalent to calling gdk_window_move() and gdk_window_resize(),
     * except that both operations are performed at once, avoiding strange
     * visual effects. (i.e. the user may be able to see the window first
     * move, then resize, if you don’t use gdk_window_move_resize().)
     * @param x new X position relative to window’s parent
     * @param y new Y position relative to window’s parent
     * @param width new width
     * @param height new height
     */
    move_resize(x: number, y: number, width: number, height: number): void
    /**
     * Moves `window` to `rect,` aligning their anchor points.
     * 
     * `rect` is relative to the top-left corner of the window that `window` is
     * transient for. `rect_anchor` and `window_anchor` determine anchor points on
     * `rect` and `window` to pin together. `rect'`s anchor point can optionally be
     * offset by `rect_anchor_dx` and `rect_anchor_dy,` which is equivalent to
     * offsetting the position of `window`.
     * 
     * `anchor_hints` determines how `window` will be moved if the anchor points cause
     * it to move off-screen. For example, %GDK_ANCHOR_FLIP_X will replace
     * %GDK_GRAVITY_NORTH_WEST with %GDK_GRAVITY_NORTH_EAST and vice versa if
     * `window` extends beyond the left or right edges of the monitor.
     * 
     * Connect to the #GdkWindow::moved-to-rect signal to find out how it was
     * actually positioned.
     * @param rect the destination #GdkRectangle to align `window` with
     * @param rect_anchor the point on `rect` to align with `window'`s anchor point
     * @param window_anchor the point on `window` to align with `rect'`s anchor point
     * @param anchor_hints positioning hints to use when limited on space
     * @param rect_anchor_dx horizontal offset to shift `window,` i.e. `rect'`s anchor                  point
     * @param rect_anchor_dy vertical offset to shift `window,` i.e. `rect'`s anchor point
     */
    move_to_rect(rect: Gdk.Rectangle, rect_anchor: Gdk.Gravity, window_anchor: Gdk.Gravity, anchor_hints: Gdk.AnchorHints, rect_anchor_dx: number, rect_anchor_dy: number): void
    /**
     * Like gdk_window_get_children(), but does not copy the list of
     * children, so the list does not need to be freed.
     */
    peek_children(): Gdk.Window[]
    /**
     * Sends one or more expose events to `window`. The areas in each
     * expose event will cover the entire update area for the window (see
     * gdk_window_invalidate_region() for details). Normally GDK calls
     * gdk_window_process_all_updates() on your behalf, so there’s no
     * need to call this function unless you want to force expose events
     * to be delivered immediately and synchronously (vs. the usual
     * case, where GDK delivers them in an idle handler). Occasionally
     * this is useful to produce nicer scrolling behavior, for example.
     * @param update_children whether to also process updates for child windows
     */
    process_updates(update_children: boolean): void
    /**
     * Raises `window` to the top of the Z-order (stacking order), so that
     * other windows with the same parent window appear below `window`.
     * This is true whether or not the windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_raise() only
     * requests the restack, does not guarantee it.
     */
    raise(): void
    /**
     * Registers a window as a potential drop destination.
     */
    register_dnd(): void
    /**
     * Reparents `window` into the given `new_parent`. The window being
     * reparented will be unmapped as a side effect.
     * @param new_parent new parent to move `window` into
     * @param x X location inside the new parent
     * @param y Y location inside the new parent
     */
    reparent(new_parent: Gdk.Window, x: number, y: number): void
    /**
     * Resizes `window;` for toplevel windows, asks the window manager to resize
     * the window. The window manager may not allow the resize. When using GTK+,
     * use gtk_window_resize() instead of this low-level GDK function.
     * 
     * Windows may not be resized below 1x1.
     * 
     * If you’re also planning to move the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     * @param width new width of the window
     * @param height new height of the window
     */
    resize(width: number, height: number): void
    /**
     * Changes the position of  `window` in the Z-order (stacking order), so that
     * it is above `sibling` (if `above` is %TRUE) or below `sibling` (if `above` is
     * %FALSE).
     * 
     * If `sibling` is %NULL, then this either raises (if `above` is %TRUE) or
     * lowers the window.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_restack() only
     * requests the restack, does not guarantee it.
     * @param sibling a #GdkWindow that is a sibling of `window,` or %NULL
     * @param above a boolean
     */
    restack(sibling: Gdk.Window | null, above: boolean): void
    /**
     * Scroll the contents of `window,` both pixels and children, by the
     * given amount. `window` itself does not move. Portions of the window
     * that the scroll operation brings in from offscreen areas are
     * invalidated. The invalidated region may be bigger than what would
     * strictly be necessary.
     * 
     * For X11, a minimum area will be invalidated if the window has no
     * subwindows, or if the edges of the window’s parent do not extend
     * beyond the edges of the window. In other cases, a multi-step process
     * is used to scroll the window which may produce temporary visual
     * artifacts and unnecessary invalidations.
     * @param dx Amount to scroll in the X direction
     * @param dy Amount to scroll in the Y direction
     */
    scroll(dx: number, dy: number): void
    /**
     * Setting `accept_focus` to %FALSE hints the desktop environment that the
     * window doesn’t want to receive input focus.
     * 
     * On X, it is the responsibility of the window manager to interpret this
     * hint. ICCCM-compliant window manager usually respect it.
     * @param accept_focus %TRUE if the window should receive input focus
     */
    set_accept_focus(accept_focus: boolean): void
    /**
     * Sets the background color of `window`.
     * 
     * However, when using GTK+, influence the background of a widget
     * using a style class or CSS — if you’re an application — or with
     * gtk_style_context_set_background() — if you're implementing a
     * custom widget.
     * @param color a #GdkColor
     */
    set_background(color: Gdk.Color): void
    /**
     * Sets the background of `window`.
     * 
     * A background of %NULL means that the window won't have any background. On the
     * X11 backend it's also possible to inherit the background from the parent
     * window using gdk_x11_get_parent_relative_pattern().
     * 
     * The windowing system will normally fill a window with its background
     * when the window is obscured then exposed.
     * @param pattern a pattern to use, or %NULL
     */
    set_background_pattern(pattern?: cairo.Pattern | null): void
    /**
     * Sets the background color of `window`.
     * 
     * See also gdk_window_set_background_pattern().
     * @param rgba a #GdkRGBA color
     */
    set_background_rgba(rgba: Gdk.RGBA): void
    /**
     * Sets the input shape mask of `window` to the union of input shape masks
     * for all children of `window,` ignoring the input shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_input_shapes() which includes
     * the input shape mask of `window` in the masks to be merged.
     */
    set_child_input_shapes(): void
    /**
     * Sets the shape mask of `window` to the union of shape masks
     * for all children of `window,` ignoring the shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_shapes() which includes
     * the shape mask of `window` in the masks to be merged.
     */
    set_child_shapes(): void
    /**
     * Sets a #GdkWindow as composited, or unsets it. Composited
     * windows do not automatically have their contents drawn to
     * the screen. Drawing is redirected to an offscreen buffer
     * and an expose event is emitted on the parent of the composited
     * window. It is the responsibility of the parent’s expose handler
     * to manually merge the off-screen content onto the screen in
     * whatever way it sees fit.
     * 
     * It only makes sense for child windows to be composited; see
     * gdk_window_set_opacity() if you need translucent toplevel
     * windows.
     * 
     * An additional effect of this call is that the area of this
     * window is no longer clipped from regions marked for
     * invalidation on its parent. Draws done on the parent
     * window are also no longer clipped by the child.
     * 
     * This call is only supported on some systems (currently,
     * only X11 with new enough Xcomposite and Xdamage extensions).
     * You must call gdk_display_supports_composite() to check if
     * setting a window as composited is supported before
     * attempting to do so.
     * @param composited %TRUE to set the window as composited
     */
    set_composited(composited: boolean): void
    /**
     * Sets the default mouse pointer for a #GdkWindow.
     * 
     * Note that `cursor` must be for the same display as `window`.
     * 
     * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to
     * create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * Passing %NULL for the `cursor` argument to gdk_window_set_cursor() means
     * that `window` will use the cursor of its parent window. Most windows
     * should use this default.
     * @param cursor a cursor
     */
    set_cursor(cursor?: Gdk.Cursor | null): void
    /**
     * “Decorations” are the features the window manager adds to a toplevel #GdkWindow.
     * This function sets the traditional Motif window manager hints that tell the
     * window manager which decorations you would like your window to have.
     * Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of
     * using the GDK function directly.
     * 
     * The `decorations` argument is the logical OR of the fields in
     * the #GdkWMDecoration enumeration. If #GDK_DECOR_ALL is included in the
     * mask, the other bits indicate which decorations should be turned off.
     * If #GDK_DECOR_ALL is not included, then the other bits indicate
     * which decorations should be turned on.
     * 
     * Most window managers honor a decorations hint of 0 to disable all decorations,
     * but very few honor all possible combinations of bits.
     * @param decorations decoration hint mask
     */
    set_decorations(decorations: Gdk.WMDecoration): void
    /**
     * Sets a specific #GdkCursor for a given device when it gets inside `window`.
     * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to create
     * the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR. Passing
     * %NULL for the `cursor` argument to gdk_window_set_cursor() means that
     * `window` will use the cursor of its parent window. Most windows should
     * use this default.
     * @param device a master, pointer #GdkDevice
     * @param cursor a #GdkCursor
     */
    set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    /**
     * Sets the event mask for a given device (Normally a floating device, not
     * attached to any visible pointer) to `window`. For example, an event mask
     * including #GDK_BUTTON_PRESS_MASK means the window should report button
     * press events. The event mask is the bitwise OR of values from the
     * #GdkEventMask enumeration.
     * 
     * See the [input handling overview][event-masks] for details.
     * @param device #GdkDevice to enable events for.
     * @param event_mask event mask for `window`
     */
    set_device_events(device: Gdk.Device, event_mask: Gdk.EventMask): void
    /**
     * Determines whether or not extra unprocessed motion events in
     * the event queue can be discarded. If %TRUE only the most recent
     * event will be delivered.
     * 
     * Some types of applications, e.g. paint programs, need to see all
     * motion events and will benefit from turning off event compression.
     * 
     * By default, event compression is enabled.
     * @param event_compression %TRUE if motion events should be compressed
     */
    set_event_compression(event_compression: boolean): void
    /**
     * The event mask for a window determines which events will be reported
     * for that window from all master input devices. For example, an event mask
     * including #GDK_BUTTON_PRESS_MASK means the window should report button
     * press events. The event mask is the bitwise OR of values from the
     * #GdkEventMask enumeration.
     * 
     * See the [input handling overview][event-masks] for details.
     * @param event_mask event mask for `window`
     */
    set_events(event_mask: Gdk.EventMask): void
    /**
     * Setting `focus_on_map` to %FALSE hints the desktop environment that the
     * window doesn’t want to receive input focus when it is mapped.
     * focus_on_map should be turned off for windows that aren’t triggered
     * interactively (such as popups from network activity).
     * 
     * On X, it is the responsibility of the window manager to interpret
     * this hint. Window managers following the freedesktop.org window
     * manager extension specification should respect it.
     * @param focus_on_map %TRUE if the window should receive input focus when mapped
     */
    set_focus_on_map(focus_on_map: boolean): void
    /**
     * Specifies whether the `window` should span over all monitors (in a multi-head
     * setup) or only the current monitor when in fullscreen mode.
     * 
     * The `mode` argument is from the #GdkFullscreenMode enumeration.
     * If #GDK_FULLSCREEN_ON_ALL_MONITORS is specified, the fullscreen `window` will
     * span over all monitors from the #GdkScreen.
     * 
     * On X11, searches through the list of monitors from the #GdkScreen the ones
     * which delimit the 4 edges of the entire #GdkScreen and will ask the window
     * manager to span the `window` over these monitors.
     * 
     * If the XINERAMA extension is not available or not usable, this function
     * has no effect.
     * 
     * Not all window managers support this, so you can’t rely on the fullscreen
     * window to span over the multiple monitors when #GDK_FULLSCREEN_ON_ALL_MONITORS
     * is specified.
     * @param mode fullscreen mode
     */
    set_fullscreen_mode(mode: Gdk.FullscreenMode): void
    /**
     * Sets hints about the window management functions to make available
     * via buttons on the window frame.
     * 
     * On the X backend, this function sets the traditional Motif window
     * manager hint for this purpose. However, few window managers do
     * anything reliable or interesting with this hint. Many ignore it
     * entirely.
     * 
     * The `functions` argument is the logical OR of values from the
     * #GdkWMFunction enumeration. If the bitmask includes #GDK_FUNC_ALL,
     * then the other bits indicate which functions to disable; if
     * it doesn’t include #GDK_FUNC_ALL, it indicates which functions to
     * enable.
     * @param functions bitmask of operations to allow on `window`
     */
    set_functions(functions: Gdk.WMFunction): void
    /**
     * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
     * are set, hints not flagged in `geom_mask` are unset.
     * To unset all hints, use a `geom_mask` of 0 and a `geometry` of %NULL.
     * 
     * This function provides hints to the windowing system about
     * acceptable sizes for a toplevel window. The purpose of
     * this is to constrain user resizing, but the windowing system
     * will typically  (but is not required to) also constrain the
     * current size of the window to the provided values and
     * constrain programatic resizing via gdk_window_resize() or
     * gdk_window_move_resize().
     * 
     * Note that on X11, this effect has no effect on windows
     * of type %GDK_WINDOW_TEMP or windows where override redirect
     * has been turned on via gdk_window_set_override_redirect()
     * since these windows are not resizable by the user.
     * 
     * Since you can’t count on the windowing system doing the
     * constraints for programmatic resizes, you should generally
     * call gdk_window_constrain_size() yourself to determine
     * appropriate sizes.
     * @param geometry geometry hints
     * @param geom_mask bitmask indicating fields of `geometry` to pay attention to
     */
    set_geometry_hints(geometry: Gdk.Geometry, geom_mask: Gdk.WindowHints): void
    /**
     * Sets the group leader window for `window`. By default,
     * GDK sets the group leader for all toplevel windows
     * to a global window implicitly created by GDK. With this function
     * you can override this default.
     * 
     * The group leader window allows the window manager to distinguish
     * all windows that belong to a single application. It may for example
     * allow users to minimize/unminimize all windows belonging to an
     * application at once. You should only set a non-default group window
     * if your application pretends to be multiple applications.
     * @param leader group leader window, or %NULL to restore the default group leader window
     */
    set_group(leader?: Gdk.Window | null): void
    /**
     * Sets a list of icons for the window. One of these will be used
     * to represent the window when it has been iconified. The icon is
     * usually shown in an icon box or some sort of task bar. Which icon
     * size is shown depends on the window manager. The window manager
     * can scale the icon  but setting several size icons can give better
     * image quality since the window manager may only need to scale the
     * icon by a small amount or not at all.
     * 
     * Note that some platforms don't support window icons.
     * @param pixbufs      A list of pixbufs, of different sizes.
     */
    set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void
    /**
     * Windows may have a name used while minimized, distinct from the
     * name they display in their titlebar. Most of the time this is a bad
     * idea from a user interface standpoint. But you can set such a name
     * with this function, if you like.
     * 
     * After calling this with a non-%NULL `name,` calls to gdk_window_set_title()
     * will not update the icon title.
     * 
     * Using %NULL for `name` unsets the icon title; further calls to
     * gdk_window_set_title() will again update the icon title as well.
     * 
     * Note that some platforms don't support window icons.
     * @param name name of window while iconified (minimized)
     */
    set_icon_name(name?: string | null): void
    /**
     * Set if `window` must be kept above other windows. If the
     * window was already above, then this function does nothing.
     * 
     * On X11, asks the window manager to keep `window` above, if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “keep above”; so you can’t rely on the window being kept above.
     * But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * @param setting whether to keep `window` above other windows
     */
    set_keep_above(setting: boolean): void
    /**
     * Set if `window` must be kept below other windows. If the
     * window was already below, then this function does nothing.
     * 
     * On X11, asks the window manager to keep `window` below, if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “keep below”; so you can’t rely on the window being kept below.
     * But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * @param setting whether to keep `window` below other windows
     */
    set_keep_below(setting: boolean): void
    /**
     * The application can use this hint to tell the window manager
     * that a certain window has modal behaviour. The window manager
     * can use this information to handle modal windows in a special
     * way.
     * 
     * You should only use this on windows for which you have
     * previously called gdk_window_set_transient_for()
     * @param modal %TRUE if the window is modal, %FALSE otherwise.
     */
    set_modal_hint(modal: boolean): void
    /**
     * Set `window` to render as partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Values
     * of the opacity parameter are clamped to the [0,1] range.)
     * 
     * For toplevel windows this depends on support from the windowing system
     * that may not always be there. For instance, On X11, this works only on
     * X screens with a compositing manager running. On Wayland, there is no
     * per-window opacity value that the compositor would apply. Instead, use
     * `gdk_window_set_opaque_region (window, NULL)` to tell the compositor
     * that the entire window is (potentially) non-opaque, and draw your content
     * with alpha, or use gtk_widget_set_opacity() to set an overall opacity
     * for your widgets.
     * 
     * For child windows this function only works for non-native windows.
     * 
     * For setting up per-pixel alpha topelevels, see gdk_screen_get_rgba_visual(),
     * and for non-toplevels, see gdk_window_set_composited().
     * 
     * Support for non-toplevel windows was added in 3.8.
     * @param opacity opacity
     */
    set_opacity(opacity: number): void
    /**
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of windows, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel windows.
     * 
     * GTK+ will update this property automatically if
     * the `window` background is opaque, as we know where the opaque regions
     * are. If your window background is not opaque, please update this
     * property in your #GtkWidget::style-updated handler.
     * @param region a region, or %NULL
     */
    set_opaque_region(region?: cairo.Region | null): void
    /**
     * An override redirect window is not under the control of the window manager.
     * This means it won’t have a titlebar, won’t be minimizable, etc. - it will
     * be entirely under the control of the application. The window manager
     * can’t see the override redirect window at all.
     * 
     * Override redirect should only be used for short-lived temporary
     * windows, such as popup menus. #GtkMenu uses an override redirect
     * window in its implementation, for example.
     * @param override_redirect %TRUE if window should be override redirect
     */
    set_override_redirect(override_redirect: boolean): void
    /**
     * Sets whether input to the window is passed through to the window
     * below.
     * 
     * The default value of this is %FALSE, which means that pointer
     * events that happen inside the window are send first to the window,
     * but if the event is not selected by the event mask then the event
     * is sent to the parent window, and so on up the hierarchy.
     * 
     * If `pass_through` is %TRUE then such pointer events happen as if the
     * window wasn't there at all, and thus will be sent first to any
     * windows below `window`. This is useful if the window is used in a
     * transparent fashion. In the terminology of the web this would be called
     * "pointer-events: none".
     * 
     * Note that a window with `pass_through` %TRUE can still have a subwindow
     * without pass through, so you can get events on a subset of a window. And in
     * that cases you would get the in-between related events such as the pointer
     * enter/leave events on its way to the destination window.
     * @param pass_through a boolean
     */
    set_pass_through(pass_through: boolean): void
    /**
     * When using GTK+, typically you should use gtk_window_set_role() instead
     * of this low-level function.
     * 
     * The window manager and session manager use a window’s role to
     * distinguish it from other kinds of window in the same application.
     * When an application is restarted after being saved in a previous
     * session, all windows with the same title and role are treated as
     * interchangeable.  So if you have two windows with the same title
     * that should be distinguished for session management purposes, you
     * should set the role on those windows. It doesn’t matter what string
     * you use for the role, as long as you have a different role for each
     * non-interchangeable kind of window.
     * @param role a string indicating its role
     */
    set_role(role: string): void
    /**
     * Newer GTK+ windows using client-side decorations use extra geometry
     * around their frames for effects like shadows and invisible borders.
     * Window managers that want to maximize windows or snap to edges need
     * to know where the extents of the actual frame lie, so that users
     * don’t feel like windows are snapping against random invisible edges.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     * @param left The left extent
     * @param right The right extent
     * @param top The top extent
     * @param bottom The bottom extent
     */
    set_shadow_width(left: number, right: number, top: number, bottom: number): void
    /**
     * Toggles whether a window should appear in a pager (workspace
     * switcher, or other desktop utility program that displays a small
     * thumbnail representation of the windows on the desktop). If a
     * window’s semantic type as specified with gdk_window_set_type_hint()
     * already fully describes the window, this function should
     * not be called in addition, instead you should
     * allow the window to be treated according to standard policy for
     * its semantic type.
     * @param skips_pager %TRUE to skip the pager
     */
    set_skip_pager_hint(skips_pager: boolean): void
    /**
     * Toggles whether a window should appear in a task list or window
     * list. If a window’s semantic type as specified with
     * gdk_window_set_type_hint() already fully describes the window, this
     * function should not be called in addition,
     * instead you should allow the window to be treated according to
     * standard policy for its semantic type.
     * @param skips_taskbar %TRUE to skip the taskbar
     */
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    /**
     * Sets the event mask for any floating device (i.e. not attached to any
     * visible pointer) that has the source defined as `source`. This event
     * mask will be applied both to currently existing, newly added devices
     * after this call, and devices being attached/detached.
     * @param source a #GdkInputSource to define the source class.
     * @param event_mask event mask for `window`
     */
    set_source_events(source: Gdk.InputSource, event_mask: Gdk.EventMask): void
    /**
     * When using GTK+, typically you should use gtk_window_set_startup_id()
     * instead of this low-level function.
     * @param startup_id a string with startup-notification identifier
     */
    set_startup_id(startup_id: string): void
    /**
     * Used to set the bit gravity of the given window to static, and flag
     * it so all children get static subwindow gravity. This is used if you
     * are implementing scary features that involve deep knowledge of the
     * windowing system. Don’t worry about it.
     * @param use_static %TRUE to turn on static gravity
     */
    set_static_gravities(use_static: boolean): boolean
    /**
     * This function will enable multidevice features in `window`.
     * 
     * Multidevice aware windows will need to handle properly multiple,
     * per device enter/leave events, device grabs and grab ownerships.
     * @param support_multidevice %TRUE to enable multidevice support in `window`.
     */
    set_support_multidevice(support_multidevice: boolean): void
    /**
     * Sets the title of a toplevel window, to be displayed in the titlebar.
     * If you haven’t explicitly set the icon name for the window
     * (using gdk_window_set_icon_name()), the icon name will be set to
     * `title` as well. `title` must be in UTF-8 encoding (as with all
     * user-readable strings in GDK/GTK+). `title` may not be %NULL.
     * @param title title of `window`
     */
    set_title(title: string): void
    /**
     * Indicates to the window manager that `window` is a transient dialog
     * associated with the application window `parent`. This allows the
     * window manager to do things like center `window` on `parent` and
     * keep `window` above `parent`.
     * 
     * See gtk_window_set_transient_for() if you’re using #GtkWindow or
     * #GtkDialog.
     * @param parent another toplevel #GdkWindow
     */
    set_transient_for(parent: Gdk.Window): void
    /**
     * The application can use this call to provide a hint to the window
     * manager about the functionality of a window. The window manager
     * can use this information when determining the decoration and behaviour
     * of the window.
     * 
     * The hint must be set before the window is mapped.
     * @param hint A hint of the function this window will have
     */
    set_type_hint(hint: Gdk.WindowTypeHint): void
    /**
     * Toggles whether a window needs the user's
     * urgent attention.
     * @param urgent %TRUE if the window is urgent
     */
    set_urgency_hint(urgent: boolean): void
    /**
     * For most purposes this function is deprecated in favor of
     * g_object_set_data(). However, for historical reasons GTK+ stores
     * the #GtkWidget that owns a #GdkWindow as user data on the
     * #GdkWindow. So, custom widget implementations should use
     * this function for that. If GTK+ receives an event for a #GdkWindow,
     * and the user data for the window is non-%NULL, GTK+ will assume the
     * user data is a #GtkWidget, and forward the event to that widget.
     * @param user_data user data
     */
    set_user_data(user_data?: GObject.Object | null): void
    /**
     * Makes pixels in `window` outside `shape_region` be transparent,
     * so that the window may be nonrectangular.
     * 
     * If `shape_region` is %NULL, the shape will be unset, so the whole
     * window will be opaque again. `offset_x` and `offset_y` are ignored
     * if `shape_region` is %NULL.
     * 
     * On the X11 platform, this uses an X server extension which is
     * widely available on most common platforms, but not available on
     * very old X servers, and occasionally the implementation will be
     * buggy. On servers without the shape extension, this function
     * will do nothing.
     * 
     * This function works on both toplevel and child windows.
     * @param shape_region region of window to be non-transparent
     * @param offset_x X position of `shape_region` in `window` coordinates
     * @param offset_y Y position of `shape_region` in `window` coordinates
     */
    shape_combine_region(shape_region: cairo.Region | null, offset_x: number, offset_y: number): void
    /**
     * Like gdk_window_show_unraised(), but also raises the window to the
     * top of the window stack (moves the window to the front of the
     * Z-order).
     * 
     * This function maps a window so it’s visible onscreen. Its opposite
     * is gdk_window_hide().
     * 
     * When implementing a #GtkWidget, you should call this function on the widget's
     * #GdkWindow as part of the “map” method.
     */
    show(): void
    /**
     * Shows a #GdkWindow onscreen, but does not modify its stacking
     * order. In contrast, gdk_window_show() will raise the window
     * to the top of the window stack.
     * 
     * On the X11 platform, in Xlib terms, this function calls
     * XMapWindow() (it also updates some internal GDK state, which means
     * that you can’t really use XMapWindow() directly on a GDK window).
     */
    show_unraised(): void
    /**
     * Asks the windowing system to show the window menu. The window menu
     * is the menu shown when right-clicking the titlebar on traditional
     * windows managed by the window manager. This is useful for windows
     * using client-side decorations, activating it with a right-click
     * on the window decorations.
     * @param event a #GdkEvent to show the menu for
     */
    show_window_menu(event: Gdk.Event): boolean
    /**
     * “Pins” a window such that it’s on all workspaces and does not scroll
     * with viewports, for window managers that have scrollable viewports.
     * (When using #GtkWindow, gtk_window_stick() may be more useful.)
     * 
     * On the X11 platform, this function depends on window manager
     * support, so may have no effect with many window managers. However,
     * GDK will do the best it can to convince the window manager to stick
     * the window. For window managers that don’t support this operation,
     * there’s nothing you can do to force it to happen.
     */
    stick(): void
    /**
     * Thaws a window frozen with
     * gdk_window_freeze_toplevel_updates_libgtk_only().
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    thaw_toplevel_updates_libgtk_only(): void
    /**
     * Thaws a window frozen with gdk_window_freeze_updates().
     */
    thaw_updates(): void
    /**
     * Moves the window out of fullscreen mode. If the window was not
     * fullscreen, does nothing.
     * 
     * On X11, asks the window manager to move `window` out of the fullscreen
     * state, if the window manager supports this operation. Not all
     * window managers support this, and some deliberately ignore it or
     * don’t have a concept of “fullscreen”; so you can’t rely on the
     * unfullscreenification actually happening. But it will happen with
     * most standard window managers, and GDK makes a best effort to get
     * it to happen.
     */
    unfullscreen(): void
    /**
     * Unmaximizes the window. If the window wasn’t maximized, then this
     * function does nothing.
     * 
     * On X11, asks the window manager to unmaximize `window,` if the
     * window manager supports this operation. Not all window managers
     * support this, and some deliberately ignore it or don’t have a
     * concept of “maximized”; so you can’t rely on the unmaximization
     * actually happening. But it will happen with most standard window
     * managers, and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably unmaximizes the window.
     */
    unmaximize(): void
    /**
     * Reverse operation for gdk_window_stick(); see gdk_window_stick(),
     * and gtk_window_unstick().
     */
    unstick(): void
    /**
     * Withdraws a window (unmaps it and asks the window manager to forget about it).
     * This function is not really useful as gdk_window_hide() automatically
     * withdraws toplevel windows before hiding them.
     */
    withdraw(): void
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
    /* Virtual methods of Gdk-3.0.Gdk.Window */
    vfunc_create_surface(width: number, height: number): cairo.Surface
    vfunc_from_embedder(embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void
    vfunc_to_embedder(offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Window */
    /**
     * The ::create-surface signal is emitted when an offscreen window
     * needs its surface (re)created, which happens either when the
     * window is first drawn to, or when the window is being
     * resized. The first signal handler that returns a non-%NULL
     * surface will stop any further signal emission, and its surface
     * will be used.
     * 
     * Note that it is not possible to access the window's previous
     * surface from within any callback of this signal. Calling
     * gdk_offscreen_window_get_surface() will lead to a crash.
     * @param width the width of the offscreen surface to create
     * @param height the height of the offscreen surface to create
     */
    connect(sigName: "create-surface", callback: (($obj: X11Window, width: number, height: number) => cairo.Surface)): number
    connect_after(sigName: "create-surface", callback: (($obj: X11Window, width: number, height: number) => cairo.Surface)): number
    emit(sigName: "create-surface", width: number, height: number): void
    /**
     * The ::from-embedder signal is emitted to translate coordinates
     * in the embedder of an offscreen window to the offscreen window.
     * 
     * See also #GdkWindow::to-embedder.
     * @param embedder_x x coordinate in the embedder window
     * @param embedder_y y coordinate in the embedder window
     */
    connect(sigName: "from-embedder", callback: (($obj: X11Window, embedder_x: number, embedder_y: number) => void)): number
    connect_after(sigName: "from-embedder", callback: (($obj: X11Window, embedder_x: number, embedder_y: number) => void)): number
    emit(sigName: "from-embedder", embedder_x: number, embedder_y: number): void
    /**
     * Emitted when the position of `window` is finalized after being moved to a
     * destination rectangle.
     * 
     * `window` might be flipped over the destination rectangle in order to keep
     * it on-screen, in which case `flipped_x` and `flipped_y` will be set to %TRUE
     * accordingly.
     * 
     * `flipped_rect` is the ideal position of `window` after any possible
     * flipping, but before any possible sliding. `final_rect` is `flipped_rect,`
     * but possibly translated in the case that flipping is still ineffective in
     * keeping `window` on-screen.
     * @param flipped_rect the position of `window` after any possible                flipping or %NULL if the backend can't obtain it
     * @param final_rect the final position of `window` or %NULL if the              backend can't obtain it
     * @param flipped_x %TRUE if the anchors were flipped horizontally
     * @param flipped_y %TRUE if the anchors were flipped vertically
     */
    connect(sigName: "moved-to-rect", callback: (($obj: X11Window, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    connect_after(sigName: "moved-to-rect", callback: (($obj: X11Window, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    emit(sigName: "moved-to-rect", flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean): void
    /**
     * The ::pick-embedded-child signal is emitted to find an embedded
     * child at the given position.
     * @param x x coordinate in the window
     * @param y y coordinate in the window
     */
    connect(sigName: "pick-embedded-child", callback: (($obj: X11Window, x: number, y: number) => Gdk.Window | null)): number
    connect_after(sigName: "pick-embedded-child", callback: (($obj: X11Window, x: number, y: number) => Gdk.Window | null)): number
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    /**
     * The ::to-embedder signal is emitted to translate coordinates
     * in an offscreen window to its embedder.
     * 
     * See also #GdkWindow::from-embedder.
     * @param offscreen_x x coordinate in the offscreen window
     * @param offscreen_y y coordinate in the offscreen window
     */
    connect(sigName: "to-embedder", callback: (($obj: X11Window, offscreen_x: number, offscreen_y: number) => void)): number
    connect_after(sigName: "to-embedder", callback: (($obj: X11Window, offscreen_x: number, offscreen_y: number) => void)): number
    emit(sigName: "to-embedder", offscreen_x: number, offscreen_y: number): void
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
    connect(sigName: "notify", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: X11Window_ConstructProps)
    _init (config?: X11Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static foreign_new_for_display(display: X11Display, window: xlib.Window): X11Window
    /**
     * Looks up the #GdkWindow that wraps the given native window handle.
     * @param display the #GdkDisplay corresponding to the           window handle
     * @param window an Xlib Window
     */
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Window
    static $gtype: GObject.Type
}
abstract class X11AppLaunchContextClass {
    static name: string
}
abstract class X11CursorClass {
    static name: string
}
abstract class X11DeviceCoreClass {
    static name: string
}
abstract class X11DeviceManagerCoreClass {
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
abstract class X11DisplayManagerClass {
    static name: string
}
abstract class X11DragContextClass {
    static name: string
}
abstract class X11GLContextClass {
    static name: string
}
abstract class X11KeymapClass {
    static name: string
}
abstract class X11MonitorClass {
    static name: string
}
abstract class X11ScreenClass {
    static name: string
}
abstract class X11VisualClass {
    static name: string
}
abstract class X11WindowClass {
    static name: string
}
}
export default GdkX11;